<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;

class LeadsBySource extends ChartWidget
{
    protected static ?int $sort = 2;

    protected ?string $heading = 'Leads by source';

    protected ?string $description = 'Last 14 days, all channels';

    protected int|string|array $columnSpan = ['md' => 2, 'xl' => 2];

    protected ?string $maxHeight = '260px';

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getData(): array
    {
        $labels = collect(range(13, 0))->map(fn (int $d): string => Carbon::now()->subDays($d)->format('j M'))->all();

        return [
            'labels' => $labels,
            'datasets' => [
                ['label' => 'Eligibility check', 'data' => [5, 6, 4, 7, 6, 3, 2, 6, 8, 7, 5, 9, 7, 6], 'backgroundColor' => '#3D5AFE', 'stack' => 's'],
                ['label' => 'Facebook Lead Ads', 'data' => [3, 4, 5, 4, 6, 5, 4, 3, 5, 6, 7, 5, 6, 4], 'backgroundColor' => '#44D0BB', 'stack' => 's'],
                ['label' => 'Quick quote', 'data' => [2, 1, 3, 2, 2, 1, 1, 3, 2, 2, 3, 2, 4, 2], 'backgroundColor' => '#A0E25F', 'stack' => 's'],
                ['label' => 'Chat assistant', 'data' => [1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 3, 2, 1], 'backgroundColor' => '#8A94B0', 'stack' => 's'],
                ['label' => 'Aircall', 'data' => [2, 1, 2, 3, 1, 0, 0, 2, 1, 3, 2, 1, 2, 1], 'backgroundColor' => '#F5B544', 'stack' => 's'],
            ],
        ];
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => ['legend' => ['position' => 'bottom', 'labels' => ['boxWidth' => 10, 'usePointStyle' => true]]],
            'scales' => [
                'x' => ['stacked' => true, 'grid' => ['display' => false]],
                'y' => ['stacked' => true, 'ticks' => ['precision' => 0]],
            ],
        ];
    }
}
