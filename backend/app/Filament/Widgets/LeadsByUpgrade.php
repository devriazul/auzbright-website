<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class LeadsByUpgrade extends ChartWidget
{
    protected static ?int $sort = 7;

    protected ?string $heading = 'Leads by upgrade';

    protected ?string $description = 'This month';

    protected ?string $maxHeight = '240px';

    protected function getType(): string
    {
        return 'doughnut';
    }

    protected function getData(): array
    {
        return [
            'labels' => ['Heat pump', 'Air conditioning', 'Solar & battery', 'EV charger', 'LED lighting', 'Water filter'],
            'datasets' => [[
                'data' => [142, 96, 71, 18, 12, 9],
                'backgroundColor' => ['#3D5AFE', '#44D0BB', '#A0E25F', '#F5B544', '#8A94B0', '#E57373'],
                'borderWidth' => 0,
            ]],
        ];
    }

    protected function getOptions(): array
    {
        return [
            'cutout' => '65%',
            'plugins' => ['legend' => ['position' => 'right', 'labels' => ['boxWidth' => 10, 'usePointStyle' => true]]],
            'scales' => ['x' => ['display' => false], 'y' => ['display' => false]],
        ];
    }
}
