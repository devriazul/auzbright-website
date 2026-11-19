<?php

namespace App\Filament\Widgets;

use App\Filament\Pages\Documents;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class KpiOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    /** @var int|array<string, int>|null */
    protected int|array|null $columns = ['md' => 3, 'xl' => 5];

    protected function getStats(): array
    {
        return [
            Stat::make('New leads today', '14')
                ->description('3 more than yesterday')
                ->descriptionIcon(Heroicon::ArrowTrendingUp)
                ->chart([6, 9, 7, 11, 8, 12, 10, 14])
                ->color('success'),
            Stat::make('Open inquiries', '62')
                ->description('9 unassigned, 2 in review')
                ->descriptionIcon(Heroicon::InboxStack)
                ->color('primary'),
            Stat::make('Pipeline value', '$184,650')
                ->description('11 open deals')
                ->descriptionIcon(Heroicon::Banknotes)
                ->chart([120, 132, 128, 150, 161, 158, 175, 184])
                ->color('info'),
            Stat::make('Awaiting signature', '4')
                ->description('1 quote viewed, not signed')
                ->descriptionIcon(Heroicon::PencilSquare)
                ->color('warning')
                ->url(Documents::getUrl()),
            Stat::make('Tickets at SLA risk', '3')
                ->description('1 breached today')
                ->descriptionIcon(Heroicon::ExclamationTriangle)
                ->color('danger'),
        ];
    }
}
