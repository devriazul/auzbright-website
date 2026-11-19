<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use Illuminate\Support\Carbon;

/**
 * Home dashboard: each person's own numbers and to-dos.
 */
class Dashboard extends BaseDashboard
{
    protected static ?string $title = 'Home';

    public function getHeading(): string
    {
        $hour = Carbon::now('Australia/Melbourne')->hour;
        $greeting = $hour < 12 ? 'Good morning' : ($hour < 17 ? 'Good afternoon' : 'Good evening');

        return $greeting.', '.str(auth()->user()?->name ?? 'there')->before(' ');
    }

    public function getSubheading(): string
    {
        return Carbon::now('Australia/Melbourne')->format('l j F').' · 14 new leads, 4 documents awaiting signature, 3 tickets close to their SLA';
    }

    /** @return int|array<string, int> */
    public function getColumns(): int|array
    {
        return ['md' => 2, 'xl' => 3];
    }
}
