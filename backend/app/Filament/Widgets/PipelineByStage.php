<?php

namespace App\Filament\Widgets;

use App\Support\Demo;
use Filament\Widgets\ChartWidget;

class PipelineByStage extends ChartWidget
{
    protected static ?int $sort = 8;

    protected ?string $heading = 'Pipeline by stage';

    protected ?string $description = 'Open deal value in AUD';

    protected int|string|array $columnSpan = 'full';

    protected ?string $maxHeight = '240px';

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getData(): array
    {
        $deals = Demo::deals();
        $stages = collect(Demo::DEAL_STAGES);

        return [
            'labels' => $stages->values()->all(),
            'datasets' => [[
                'label' => 'Value',
                'data' => $stages->keys()->map(fn (string $s): int => intdiv($deals->where('stage', $s)->sum('amount_cents'), 100))->all(),
                'backgroundColor' => ['#B9C0D2', '#8A94B0', '#44D0BB', '#3D5AFE', '#A0E25F'],
                'borderRadius' => 6,
            ]],
        ];
    }

    protected function getOptions(): array
    {
        return [
            'indexAxis' => 'y',
            'plugins' => ['legend' => ['display' => false]],
            'scales' => ['x' => ['grid' => ['display' => false]], 'y' => ['grid' => ['display' => false]]],
        ];
    }
}
