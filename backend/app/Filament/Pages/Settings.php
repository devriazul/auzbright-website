<?php

namespace App\Filament\Pages;

use App\Filament\Support\PlannedPage;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class Settings extends PlannedPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static string|UnitEnum|null $navigationGroup = 'Platform';

    protected static ?int $navigationSort = 3;

    protected static ?string $title = 'Settings';

    public function getLaunch(): string
    {
        return 'Planned for Month 1';
    }

    public function getSummary(): string
    {
        return 'Global settings that appear across the website and the CRM, stored once.';
    }

    /** @return list<string> */
    public function getFeatures(): array
    {
        return [
            'Phone, email, office address, hours and states serviced',
            'Header and footer menus, announcement bar',
            'Global facts such as year founded and projects completed',
            'Assignment rules, SLA hours and the 24-hour repeat rule',
            'E-signature: provider connection, sender name, default expiry, reminders and consent wording',
        ];
    }
}
