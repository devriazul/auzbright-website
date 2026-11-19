<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

/**
 * Identity module: one row per real person, however many times they enquire.
 */
class Contacts extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserGroup;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 2;

    protected ?string $subheading = 'One person is one contact. Phone is the main match key, stored in E.164.';

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::contacts(), $search, ['id', 'name', 'phone', 'email', 'suburb'], $filters, $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->searchPlaceholder('Name, phone or email')
            ->paginated(false)
            ->columns([
                TextColumn::make('name')->weight('medium')->description(fn (array $record): string => $record['id'])->sortable(),
                TextColumn::make('phone')->copyable(),
                TextColumn::make('email')->placeholder('No email')->copyable(),
                TextColumn::make('suburb')->label('Location')->description(fn (array $record): ?string => $record['state']),
                TextColumn::make('inquiries')->label('Inquiries')->alignCenter()->sortable(),
                TextColumn::make('open_deals')->label('Open deals')->alignCenter(),
                IconColumn::make('consent')->label('Marketing consent')->boolean()->alignCenter(),
                TextColumn::make('owner')->sortable(),
                TextColumn::make('last_activity')->label('Last activity')->since()->sortable(),
            ])
            ->defaultSort('last_activity', 'desc')
            ->filters([
                SelectFilter::make('state')->options(['VIC' => 'Victoria', 'NSW' => 'New South Wales']),
                SelectFilter::make('owner')->options(array_combine(array_keys(Demo::STAFF), array_keys(Demo::STAFF)) + ['Unassigned' => 'Unassigned']),
            ])
            ->recordActions([
                Action::make('open')->label('Open')->icon(Heroicon::ArrowTopRightOnSquare)->link()->url(DealRecord::getUrl(['deal' => 'D-1042'])),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('merges')->label('Merge suggestions')->badge('2')->color('gray'),
            Action::make('create')->label('New contact')->icon(Heroicon::Plus),
        ];
    }
}
