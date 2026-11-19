<?php

namespace App\Filament\Pages;

use App\Filament\Support\PlannedPage;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class Campaigns extends PlannedPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMegaphone;

    protected static string|UnitEnum|null $navigationGroup = 'Marketing';

    protected static ?int $navigationSort = 1;

    protected static ?string $title = 'Campaigns';

    public function getLaunch(): string
    {
        return 'Planned for Month 6';
    }

    public function getSummary(): string
    {
        return 'Email campaigns sent through Mailgun to segments of consenting contacts.';
    }

    /** @return list<string> */
    public function getFeatures(): array
    {
        return [
            'Segments built from contact and inquiry fields',
            'Templates with the required sender footer and unsubscribe link',
            'Throttled sending on its own queue, with suppressions checked at send time',
            'Click, reply, bounce and complaint reporting',
        ];
    }
}
