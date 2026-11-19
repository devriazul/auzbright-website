<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

/**
 * Documents module: every envelope sent for e-signature, from any deal or ticket.
 */
class Documents extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentCheck;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 4;

    protected static ?string $title = 'Documents';

    protected ?string $subheading = 'Quotes, scheme forms and agreements sent for e-signature. Signed PDFs and audit certificates are saved to the deal.';

    public static function getNavigationBadge(): ?string
    {
        return (string) Demo::documents()->whereIn('status', ['sent', 'viewed', 'partly_signed'])->count();
    }

    public static function getNavigationBadgeColor(): string
    {
        return 'info';
    }

    public static function getNavigationBadgeTooltip(): string
    {
        return 'Awaiting signature';
    }

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::documents(), $search, ['id', 'title', 'contact', 'email', 'related_to'], $filters, $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->searchPlaceholder('Reference, customer, email or deal')
            ->paginated(false)
            ->recordUrl(fn (array $record): string => DocumentRecord::getUrl(['document' => $record['id']]))
            ->columns([
                TextColumn::make('id')->label('Ref')->fontFamily('mono')->size('xs')->color('gray')->sortable(),
                TextColumn::make('title')->label('Document')->weight('medium')
                    ->description(fn (array $record): string => $record['contact'].' · '.$record['related_to']),
                TextColumn::make('status')->badge()
                    ->formatStateUsing(fn (string $state): string => Demo::DOCUMENT_STATUSES[$state])
                    ->color(fn (string $state): string => Demo::documentStatusColor($state))
                    ->sortable(),
                TextColumn::make('signed_count')->label('Signers')
                    ->formatStateUsing(fn (int $state, array $record): string => $state.' of '.count($record['signers']).' signed')
                    ->description(fn (array $record): string => collect($record['signers'])->pluck('role')->join(', ')),
                TextColumn::make('sender')->label('Sent by'),
                TextColumn::make('sent_at')->label('Sent')->since()->placeholder('Not sent')->sortable(),
                TextColumn::make('expires_at')->label('Expires')->date('j M Y')->placeholder('–')
                    ->color(fn (array $record): string => $record['expires_at']?->isPast() ? 'danger' : 'gray'),
            ])
            ->defaultSort('id', 'desc')
            ->filters([
                SelectFilter::make('status')->options(Demo::DOCUMENT_STATUSES),
                SelectFilter::make('template_id')->label('Template')->options(Demo::documentTemplates()->pluck('name', 'id')->all()),
                SelectFilter::make('sender')->label('Sent by')->options(array_combine(array_keys(Demo::STAFF), array_keys(Demo::STAFF))),
            ])
            ->recordActions([
                ActionGroup::make([
                    Action::make('remind')->label('Send reminder')->icon(Heroicon::BellAlert)
                        ->visible(fn (array $record): bool => in_array($record['status'], ['sent', 'viewed', 'partly_signed'], true)),
                    Action::make('in_person')->label('Sign in person')->icon(Heroicon::DeviceTablet)
                        ->url(fn (array $record): string => route('sign.show', ['reference' => $record['id'], 'mode' => 'in-person']))
                        ->openUrlInNewTab()
                        ->visible(fn (array $record): bool => in_array($record['status'], ['draft', 'sent', 'viewed'], true)),
                    Action::make('download')->label('Download signed PDF')->icon(Heroicon::ArrowDownTray)
                        ->visible(fn (array $record): bool => $record['status'] === 'completed'),
                    Action::make('void')->label('Void')->icon(Heroicon::NoSymbol)->color('danger')
                        ->visible(fn (array $record): bool => in_array($record['status'], ['sent', 'viewed', 'partly_signed'], true)),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('remind')->label('Send reminders')->icon(Heroicon::BellAlert),
                    BulkAction::make('export')->label('Export CSV')->icon(Heroicon::ArrowDownTray),
                ]),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('templates')->label('Templates')->icon(Heroicon::RectangleStack)->color('gray')->url(SignTemplates::getUrl()),
            DealRecord::sendForSignatureAction(),
        ];
    }
}
