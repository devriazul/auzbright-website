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
 * Finance module: invoices, payment requests and balances (integer cents, GST per line).
 */
class Invoices extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBanknotes;

    protected static string|UnitEnum|null $navigationGroup = 'Finance';

    protected ?string $subheading = 'Balance is the invoice total minus allocated payments and credits. Only Stripe webhooks mark an invoice as paid.';

    public const STATUSES = ['draft' => 'Draft', 'issued' => 'Issued', 'part_paid' => 'Part paid', 'paid' => 'Paid', 'overdue' => 'Overdue'];

    public function table(Table $table): Table
    {
        $money = fn (int $state): string => Demo::money($state);

        return $table
            ->records(fn (?string $search, array $filters, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::invoices(), $search, ['number', 'contact'], $filters, $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->paginated(false)
            ->columns([
                TextColumn::make('number')->fontFamily('mono')->weight('medium')->sortable(),
                TextColumn::make('contact'),
                TextColumn::make('status')->badge()->formatStateUsing(fn (string $state): string => self::STATUSES[$state])
                    ->color(fn (string $state): string => ['draft' => 'gray', 'issued' => 'info', 'part_paid' => 'warning', 'paid' => 'success', 'overdue' => 'danger'][$state]),
                TextColumn::make('total_cents')->label('Total')->formatStateUsing($money)->alignEnd()->sortable(),
                TextColumn::make('gst_cents')->label('GST')->formatStateUsing($money)->alignEnd()->color('gray'),
                TextColumn::make('paid_cents')->label('Paid')->formatStateUsing($money)->alignEnd(),
                TextColumn::make('balance_cents')->label('Balance')->formatStateUsing($money)->alignEnd()->weight('semibold')->sortable(),
                TextColumn::make('issued_at')->label('Issued')->date('j M Y')->sortable(),
                TextColumn::make('due_at')->label('Due')->date('j M Y'),
            ])
            ->defaultSort('issued_at', 'desc')
            ->filters([SelectFilter::make('status')->options(self::STATUSES)])
            ->recordActions([
                Action::make('request')->label('Request payment')->icon(Heroicon::CreditCard)->link()
                    ->visible(fn (array $record): bool => $record['balance_cents'] > 0 && $record['status'] !== 'draft'),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('create')->label('New invoice')->icon(Heroicon::Plus)];
    }
}
