<?php

namespace App\Filament\Support;

use Filament\Pages\Page;

/**
 * Placeholder for a module that is in the architecture plan but has no screen yet.
 */
abstract class PlannedPage extends Page
{
    protected string $view = 'filament.pages.planned';

    /** When the module is due, from the plan's delivery months. */
    abstract public function getLaunch(): string;

    abstract public function getSummary(): string;

    /** @return list<string> */
    abstract public function getFeatures(): array;
}
