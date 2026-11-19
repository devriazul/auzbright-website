<?php

namespace App\Filament\Widgets;

use App\Support\Demo;
use Filament\Widgets\Widget;

/**
 * Today's tasks, calls and meetings for the signed-in person.
 */
class MyDay extends Widget
{
    protected static ?int $sort = 5;

    protected string $view = 'filament.widgets.my-day';

    /** @return list<array<string, mixed>> */
    public function getTasks(): array
    {
        return Demo::tasks();
    }
}
