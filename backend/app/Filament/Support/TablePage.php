<?php

namespace App\Filament\Support;

use Filament\Pages\Page;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;

/**
 * A page that shows one table of sample rows, like a Zoho module list view.
 */
abstract class TablePage extends Page implements HasTable
{
    use InteractsWithTable;

    protected string $view = 'filament.pages.table';
}
