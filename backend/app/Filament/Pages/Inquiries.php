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
 * Leads module: every enquiry from every channel, one row per inquiry.
 */
class Inquiries extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedInboxArrowDown;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?string $navigationLabel = 'Leads';

    protected static ?int $navigationSort = 1;

    protected static ?string $title = 'Leads';

    protected ?string $subheading = 'Each enquiry from any channel. Repeats within 24 hours update the open inquiry instead of creating a new one.';

    public static function getNavigationBadge(): ?string
    {
        return (string) Demo::inquiries()->where('status', 'new')->count();
    }

    public static function getNavigationBadgeColor(): string
    {
        return 'success';
    }

    public static function statusColor(string $status): string
    {
        return match ($status) {
            'new' => 'info',
            'contacted' => 'warning',
            'qualified' => 'primary',
            'review' => 'danger',
            'converted' => 'success',
            default => 'gray',
        };
    }

    /** @return list<TextColumn> */
    public static function summaryColumns(): array
    {
        return [
            TextColumn::make('contact')
                ->label('Contact')
                ->weight('medium')
                ->description(fn (array $record): string => $record['phone'] ?? 'No phone'),
            TextColumn::make('upgrade')
                ->description(fn (array $record): ?string => $record['product']),
            TextColumn::make('status')
                ->badge()
                ->color(fn (string $state): string => self::statusColor($state))
                ->formatStateUsing(fn (string $state): string => Demo::INQUIRY_STATUSES[$state]),
            TextColumn::make('received_at')
                ->label('Received')
                ->since()
                ->description(fn (array $record): string => Demo::CHANNELS[$record['channel']]),
        ];
    }

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::inquiries(), $search, ['ref', 'contact', 'phone', 'email', 'suburb', 'postcode', 'product'], $filters, $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->searchPlaceholder('Name, phone, email or postcode')
            ->paginated(false)
            ->columns([
                TextColumn::make('ref')
                    ->label('Ref')
                    ->fontFamily('mono')
                    ->size('xs')
                    ->color('gray')
                    ->sortable(),
                TextColumn::make('contact')
                    ->weight('medium')
                    ->description(fn (array $record): string => $record['phone'] ?? 'No phone')
                    ->sortable(),
                TextColumn::make('email')
                    ->placeholder('No email')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('suburb')
                    ->label('Location')
                    ->placeholder('Unknown')
                    ->description(fn (array $record): ?string => $record['state'] ? $record['state'].' '.$record['postcode'] : null),
                TextColumn::make('upgrade')
                    ->description(fn (array $record): ?string => $record['product'])
                    ->sortable(),
                TextColumn::make('channel')
                    ->label('Source')
                    ->badge()
                    ->color('gray')
                    ->formatStateUsing(fn (string $state): string => Demo::CHANNELS[$state]),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => self::statusColor($state))
                    ->formatStateUsing(fn (string $state): string => Demo::INQUIRY_STATUSES[$state])
                    ->sortable(),
                TextColumn::make('repeat_count')
                    ->label('Repeats')
                    ->alignCenter()
                    ->formatStateUsing(fn (int $state): string => $state > 0 ? '+'.$state : '–')
                    ->color(fn (int $state): string => $state > 0 ? 'warning' : 'gray'),
                TextColumn::make('owner')
                    ->placeholder('Unassigned')
                    ->sortable(),
                TextColumn::make('received_at')
                    ->label('Received')
                    ->since()
                    ->dateTimeTooltip('j M Y, g:i a')
                    ->sortable(),
            ])
            ->defaultSort('received_at', 'desc')
            ->filters([
                SelectFilter::make('status')->options(Demo::INQUIRY_STATUSES),
                SelectFilter::make('channel')->label('Source')->options(Demo::CHANNELS),
                SelectFilter::make('upgrade')->options(array_combine(Demo::UPGRADES, Demo::UPGRADES)),
                SelectFilter::make('state')->options(['VIC' => 'Victoria', 'NSW' => 'New South Wales']),
                SelectFilter::make('owner')->options(array_combine(array_keys(Demo::STAFF), array_keys(Demo::STAFF))),
            ])
            ->recordActions([
                Action::make('convert')
                    ->label('Create deal')
                    ->icon(Heroicon::Briefcase)
                    ->link()
                    ->url(DealRecord::getUrl(['deal' => 'D-1042'])),
                ActionGroup::make([
                    Action::make('assign')->label('Assign owner')->icon(Heroicon::UserPlus),
                    Action::make('call')->label('Log a call')->icon(Heroicon::Phone),
                    Action::make('merge')->label('Merge with contact')->icon(Heroicon::ArrowsPointingIn),
                    Action::make('lost')->label('Mark as lost')->icon(Heroicon::XCircle)->color('danger'),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('reassign')->label('Re-assign owner')->icon(Heroicon::UserPlus),
                    BulkAction::make('tag')->label('Add tag')->icon(Heroicon::Tag),
                    BulkAction::make('export')->label('Export CSV')->icon(Heroicon::ArrowDownTray),
                ]),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [
            ActionGroup::make([
                Action::make('view_all')->label('All inquiries'),
                Action::make('view_mine')->label('My open leads'),
                Action::make('view_unassigned')->label('Unassigned'),
                Action::make('view_review')->label('Review queue'),
                Action::make('view_today')->label("Today's follow-ups"),
            ])
                ->label('View: All inquiries')
                ->icon(Heroicon::ChevronDown)
                ->button()
                ->color('gray'),
            Action::make('create')->label('New inquiry')->icon(Heroicon::Plus),
        ];
    }
}
