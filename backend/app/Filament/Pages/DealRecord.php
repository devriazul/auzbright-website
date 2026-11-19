<?php

namespace App\Filament\Pages;

use App\Support\Demo;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\ToggleButtons;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Collection;

/**
 * The Zoho-style record page: header, stage bar, related lists and timeline.
 * The same shell is meant for contacts, tickets and invoices.
 */
class DealRecord extends Page
{
    protected static ?string $slug = 'deals/{deal}';

    protected static bool $shouldRegisterNavigation = false;

    protected string $view = 'filament.pages.deal-record';

    /** @var array<string, mixed> */
    public array $record = [];

    public function mount(string $deal): void
    {
        $this->record = Demo::deal($deal) ?? abort(404);
    }

    public function getTitle(): string
    {
        return $this->record['title'];
    }

    public function getSubheading(): string
    {
        return $this->record['id'].' · '.$this->record['contact'].' · '.$this->record['upgrade'];
    }

    /** @return array<string, string> */
    public function getBreadcrumbs(): array
    {
        return [DealsPipeline::getUrl() => 'Deals', $this->record['id']];
    }

    /** @return list<array{key: string, label: string, state: string}> */
    public function getStages(): array
    {
        $keys = array_keys(Demo::DEAL_STAGES);
        $current = array_search($this->record['stage'], $keys, true);

        return collect(Demo::DEAL_STAGES)->values()->map(fn (string $label, int $i): array => [
            'key' => $keys[$i],
            'label' => $label,
            'state' => $i < $current ? 'done' : ($i === $current ? 'current' : 'todo'),
        ])->all();
    }

    /** @return list<array<string, mixed>> */
    public function getTimeline(): array
    {
        return Demo::timeline();
    }

    /** @return Collection<string, array<string, mixed>> */
    public function getDocuments(): Collection
    {
        return Demo::documents()->where('related_to', $this->record['id']);
    }

    /**
     * The "Send for signature" modal, shared by the deal page and the Documents list.
     *
     * @param  array<string, mixed>|null  $deal
     */
    public static function sendForSignatureAction(?array $deal = null): Action
    {
        $contact = $deal ? Demo::inquiries()->firstWhere('contact', $deal['contact']) : null;

        return Action::make('send_for_signature')
            ->label('Send for signature')
            ->icon(Heroicon::PencilSquare)
            ->modalHeading('Send for signature')
            ->modalDescription($deal ? $deal['id'].' · '.$deal['title'] : 'Pick a template and a recipient. Merge fields fill from the deal.')
            ->modalWidth(Width::TwoExtraLarge)
            ->modalSubmitActionLabel('Send for signature')
            ->fillForm([
                'template' => 'TPL-QUOTE',
                'related_to' => $deal['id'] ?? null,
                'name' => $deal['contact'] ?? null,
                'email' => $contact['email'] ?? null,
                'installer_signs' => false,
                'delivery' => 'email',
                'expires_at' => now()->addDays(14)->toDateString(),
                'reminder' => '3',
            ])
            ->schema([
                Select::make('template')->label('Template')->options(Demo::documentTemplates()->pluck('name', 'id')->all())->required()->native(false),
                Select::make('related_to')->label('Deal')->options(Demo::deals()->mapWithKeys(fn (array $d): array => [$d['id'] => $d['id'].' · '.$d['contact']])->all())
                    ->searchable()->required()->hidden($deal !== null),
                TextInput::make('name')->label('Customer name')->required(),
                TextInput::make('email')->label('Customer email')->email()->required()->helperText('The customer verifies this address with a one-time code before signing.'),
                Toggle::make('installer_signs')->label('Installer counter-signs after the customer')->helperText('Needed on VEU and ESS forms.'),
                ToggleButtons::make('delivery')->label('How the customer signs')->inline()->options([
                    'email' => 'Email a signing link',
                    'in_person' => 'In person on a tablet',
                ])->icons(['email' => Heroicon::Envelope, 'in_person' => Heroicon::DeviceTablet]),
                DatePicker::make('expires_at')->label('Link expires')->native(false)->displayFormat('j M Y'),
                Select::make('reminder')->label('Reminders')->options(['0' => 'No reminders', '2' => 'Every 2 days', '3' => 'Every 3 days', '7' => 'Weekly'])->native(false),
                Textarea::make('message')->label('Message to the customer')->rows(3)->placeholder('Hi, here is your quote to review and sign. Call us on (03) 8609 5195 with any questions.'),
            ])
            ->action(fn (): Notification => Notification::make()
                ->title('Preview only: nothing was sent')
                ->body('In the real module this creates the envelope through the signing provider and logs it on the deal timeline.')
                ->warning()
                ->send());
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('call')->label('Call')->icon(Heroicon::Phone)->color('gray'),
            Action::make('email')->label('Email')->icon(Heroicon::Envelope)->color('gray'),
            self::sendForSignatureAction($this->record),
            ActionGroup::make([
                Action::make('invoice')->label('Create invoice')->icon(Heroicon::Banknotes),
                Action::make('task')->label('Add task')->icon(Heroicon::CheckCircle),
                Action::make('lost')->label('Mark as lost')->icon(Heroicon::XCircle)->color('danger'),
            ]),
        ];
    }
}
