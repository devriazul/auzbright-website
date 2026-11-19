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
 * Service module: complaints, warranty claims and support issues with SLA clocks.
 */
class Tickets extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedLifebuoy;

    protected static string|UnitEnum|null $navigationGroup = 'Service';

    protected static ?int $navigationSort = 1;

    protected ?string $subheading = 'The SLA clock uses business hours and pauses while waiting on the customer.';

    public const STATUSES = [
        'new' => 'New', 'assigned' => 'Assigned', 'in_progress' => 'In progress',
        'waiting_customer' => 'Waiting on customer', 'resolved' => 'Resolved', 'closed' => 'Closed',
    ];

    public static function getNavigationBadge(): ?string
    {
        return (string) Demo::tickets()->whereNotIn('status', ['resolved', 'closed'])->count();
    }

    public static function getNavigationBadgeColor(): string
    {
        return 'warning';
    }

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::tickets(), $search, ['id', 'contact', 'subject'], $filters, $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->paginated(false)
            ->columns([
                TextColumn::make('id')->label('Ticket')->fontFamily('mono')->size('xs')->color('gray'),
                TextColumn::make('subject')->weight('medium')->description(fn (array $record): string => $record['contact'].' · '.$record['state'])->wrap(),
                TextColumn::make('type')->badge()->color('gray'),
                TextColumn::make('priority')->badge()->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->color(fn (string $state): string => ['high' => 'danger', 'normal' => 'warning', 'low' => 'gray'][$state])->sortable(),
                TextColumn::make('status')->badge()->color('primary')->formatStateUsing(fn (string $state): string => self::STATUSES[$state]),
                TextColumn::make('sla_state')->label('SLA')->badge()
                    ->formatStateUsing(fn (string $state): string => ['on_track' => 'On track', 'at_risk' => 'At risk (75%)', 'breached' => 'Breached', 'paused' => 'Paused', 'met' => 'Met'][$state])
                    ->color(fn (string $state): string => ['on_track' => 'success', 'at_risk' => 'warning', 'breached' => 'danger', 'paused' => 'gray', 'met' => 'success'][$state])
                    ->description(fn (array $record): ?string => in_array($record['sla_state'], ['on_track', 'at_risk', 'breached'], true) ? 'Due '.$record['sla_due']->diffForHumans() : null),
                TextColumn::make('owner')->placeholder('Unassigned'),
                TextColumn::make('opened_at')->label('Opened')->since()->sortable(),
            ])
            ->defaultSort('opened_at', 'asc')
            ->filters([
                SelectFilter::make('status')->options(self::STATUSES),
                SelectFilter::make('priority')->options(['high' => 'High', 'normal' => 'Normal', 'low' => 'Low']),
                SelectFilter::make('type')->options(array_combine($types = ['Warranty', 'Complaint', 'Support', 'Booking', 'Compliance', 'Billing'], $types)),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('create')->label('New ticket')->icon(Heroicon::Plus)];
    }
}
