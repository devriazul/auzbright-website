<?php

namespace App\Filament\Pages;

use App\Filament\Support\PlannedPage;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class ContentPages extends PlannedPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedWindow;

    protected static string|UnitEnum|null $navigationGroup = 'Website';

    protected static ?int $navigationSort = 3;

    protected static ?string $title = 'Pages';

    public function getLaunch(): string
    {
        return 'Planned for Month 1';
    }

    public function getSummary(): string
    {
        return 'Standard and service pages built from the block library, served to the Next.js site by the Content API.';
    }

    /** @return list<string> */
    public function getFeatures(): array
    {
        return [
            'Hero, stats, steps, product grid, FAQ, CTA and other fixed blocks',
            'Draft, review and publish states with preview and version history',
            'Compliance approval for scheme pages and savings claims',
            'Per-page SEO, redirects and sitemap',
        ];
    }
}
