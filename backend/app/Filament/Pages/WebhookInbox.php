<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

/**
 * Integrations: every provider event is saved before processing, so it can be replayed.
 */
class WebhookInbox extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSignal;

    protected static string|UnitEnum|null $navigationGroup = 'Platform';

    protected static ?int $navigationSort = 1;

    protected static ?string $title = 'Webhook inbox';

    protected ?string $subheading = 'Meta, Aircall, Stripe, Mailgun and Zoho Sign events. Failed events can be replayed after the fix.';

    public const PROVIDERS = ['meta' => 'Meta', 'aircall' => 'Aircall', 'stripe' => 'Stripe', 'mailgun' => 'Mailgun', 'zohosign' => 'Zoho Sign'];

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters): Collection => Demo::query(
                Demo::webhookEvents(), $search, ['id', 'event', 'last_error'], $filters,
            ))
            ->searchable()
            ->paginated(false)
            ->columns([
                TextColumn::make('provider')->badge()->color('gray')->formatStateUsing(fn (string $state): string => self::PROVIDERS[$state]),
                TextColumn::make('event')->fontFamily('mono')->size('sm')->description(fn (array $record): ?string => $record['last_error']),
                TextColumn::make('status')->badge()->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->color(fn (string $state): string => ['processed' => 'success', 'pending' => 'info', 'failed' => 'danger'][$state]),
                TextColumn::make('attempts')->alignCenter(),
                TextColumn::make('received_at')->label('Received')->since(),
            ])
            ->filters([
                SelectFilter::make('provider')->options(self::PROVIDERS),
                SelectFilter::make('status')->options(['processed' => 'Processed', 'pending' => 'Pending', 'failed' => 'Failed']),
            ])
            ->recordActions([
                Action::make('replay')->icon(Heroicon::ArrowPath)->link()->visible(fn (array $record): bool => $record['status'] === 'failed'),
                Action::make('payload')->label('Payload')->icon(Heroicon::CodeBracket)->link()->color('gray'),
            ]);
    }
}
