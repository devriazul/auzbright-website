<?php

namespace App\Filament\Pages;

use App\Filament\Support\PlannedPage;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class Tasks extends PlannedPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCheckCircle;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 6;

    protected static ?string $title = 'Tasks and calendar';

    public function getLaunch(): string
    {
        return 'Planned for Month 3';
    }

    public function getSummary(): string
    {
        return 'Tasks, calls and meetings for each person, with a calendar page and the My day widget on Home.';
    }

    /** @return list<string> */
    public function getFeatures(): array
    {
        return [
            'Task list with due dates, owners and reminders',
            'Calendar of site visits and installs',
            'Follow-up tasks created by automation rules',
            'Overdue alerts to the owner and team lead',
        ];
    }
}
