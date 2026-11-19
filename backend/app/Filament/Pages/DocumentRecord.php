<?php

namespace App\Filament\Pages;

use App\Support\Demo;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Carbon;

/**
 * One envelope: document preview, signers in order, and the audit trail.
 */
class DocumentRecord extends Page
{
    protected static ?string $slug = 'documents/{document}';

    protected static bool $shouldRegisterNavigation = false;

    protected string $view = 'filament.pages.document-record';

    /** @var array<string, mixed> */
    public array $record = [];

    public function mount(string $document): void
    {
        $this->record = Demo::document($document) ?? abort(404);
    }

    public function getTitle(): string
    {
        return $this->record['title'];
    }

    public function getSubheading(): string
    {
        return $this->record['id'].' · '.$this->record['contact'].' · '.$this->record['related_to'];
    }

    /** @return array<string, string> */
    public function getBreadcrumbs(): array
    {
        return [Documents::getUrl() => 'Documents', $this->record['id']];
    }

    /** @return list<array{title: string, body: string, icon: string, at: Carbon}> */
    public function getEvents(): array
    {
        return Demo::documentEvents($this->record);
    }

    /** @return array<string, mixed> */
    public function getTemplate(): array
    {
        return Demo::documentTemplates()->get($this->record['template_id']);
    }

    public function getRelatedUrl(): ?string
    {
        return Demo::deal($this->record['related_to']) ? DealRecord::getUrl(['deal' => $this->record['related_to']]) : null;
    }

    protected function getHeaderActions(): array
    {
        $status = $this->record['status'];
        $open = in_array($status, ['sent', 'viewed', 'partly_signed'], true);

        return [
            Action::make('customer_view')->label('Customer view')->icon(Heroicon::ArrowTopRightOnSquare)->color('gray')
                ->url(route('sign.show', ['reference' => $this->record['id']]))->openUrlInNewTab()
                ->visible($status !== 'completed'),
            Action::make('in_person')->label('Sign in person')->icon(Heroicon::DeviceTablet)->color('gray')
                ->url(route('sign.show', ['reference' => $this->record['id'], 'mode' => 'in-person']))->openUrlInNewTab()
                ->visible(in_array($status, ['draft', 'sent', 'viewed'], true)),
            Action::make('send')->label('Send for signature')->icon(Heroicon::PaperAirplane)->visible($status === 'draft'),
            Action::make('remind')->label('Send reminder')->icon(Heroicon::BellAlert)->visible($open),
            Action::make('download')->label('Download signed PDF')->icon(Heroicon::ArrowDownTray)->visible($status === 'completed'),
            ActionGroup::make([
                Action::make('certificate')->label('Completion certificate')->icon(Heroicon::CheckBadge)->visible($status === 'completed'),
                Action::make('resend')->label('Copy and resend')->icon(Heroicon::DocumentDuplicate)->visible(in_array($status, ['declined', 'expired'], true)),
                Action::make('void')->label('Void')->icon(Heroicon::NoSymbol)->color('danger')->visible($open),
            ]),
        ];
    }
}
