<?php

namespace App\Filament\Pages;

use App\Filament\Support\PlannedPage;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class Faqs extends PlannedPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedQuestionMarkCircle;

    protected static string|UnitEnum|null $navigationGroup = 'Website';

    protected static ?int $navigationSort = 4;

    protected static ?string $title = 'FAQs';

    public function getLaunch(): string
    {
        return 'Planned for Month 1';
    }

    public function getSummary(): string
    {
        return 'Reusable questions and answers by topic and state, shown on any page or post.';
    }

    /** @return list<string> */
    public function getFeatures(): array
    {
        return [
            'Topic: incentives, costs, installation, warranty',
            'State: Victoria, NSW or both',
            'Used by FAQ blocks and the chat assistant',
            'FAQPage structured data generated automatically',
        ];
    }
}
