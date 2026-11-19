<?php

namespace App\Filament\Pages;

use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

/**
 * Sales module: the deal pipeline as a Kanban board with totals per stage.
 */
class DealsPipeline extends Page
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedViewColumns;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?string $navigationLabel = 'Deals';

    protected static ?int $navigationSort = 3;

    protected static ?string $slug = 'deals';

    protected static ?string $title = 'Deals pipeline';

    protected ?string $subheading = 'Residential upgrades · drag cards between stages (not connected in this preview)';

    protected string $view = 'filament.pages.deals-pipeline';

    /** @return list<array{key: string, label: string, deals: list<array<string, mixed>>, total: string}> */
    public function getColumns(): array
    {
        $deals = Demo::deals();

        return collect(Demo::DEAL_STAGES)->map(fn (string $label, string $key): array => [
            'key' => $key,
            'label' => $label,
            'deals' => $deals->where('stage', $key)->values()->all(),
            'total' => Demo::money($deals->where('stage', $key)->sum('amount_cents')),
        ])->values()->all();
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('pipeline')->label('Pipeline: Residential')->icon(Heroicon::ChevronDown)->color('gray'),
            Action::make('list')->label('List view')->icon(Heroicon::QueueList)->color('gray'),
            Action::make('create')->label('New deal')->icon(Heroicon::Plus),
        ];
    }
}
