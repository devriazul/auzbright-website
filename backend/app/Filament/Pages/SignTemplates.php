<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

/**
 * Documents module: reusable PDF templates with signature and merge fields.
 */
class SignTemplates extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static string|UnitEnum|null $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 5;

    protected static ?string $slug = 'sign-templates';

    protected static ?string $navigationLabel = 'Sign templates';

    protected static ?string $title = 'Sign templates';

    protected ?string $subheading = 'Merge fields fill from the deal, so staff only pick a template and a recipient. Scheme forms need Compliance approval before a new version goes live.';

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (): array => Demo::documentTemplates()->all())
            ->paginated(false)
            ->columns([
                TextColumn::make('name')->weight('medium')->description(fn (array $record): string => $record['fields'])->wrap(),
                TextColumn::make('owner_team')->label('Owner')->badge()->color('gray'),
                TextColumn::make('signers')->label('Signing order'),
                TextColumn::make('on_complete')->label('When completed')->wrap()->color('gray'),
                TextColumn::make('states')->label('States'),
                TextColumn::make('sent_30d')->label('Sent (30 days)')->alignCenter(),
                TextColumn::make('version')->label('Version')->prefix('v')->alignCenter(),
            ])
            ->recordActions([
                Action::make('edit')->label('Edit fields')->icon(Heroicon::PencilSquare)->link(),
                Action::make('preview')->icon(Heroicon::Eye)->link()->color('gray'),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('create')->label('Upload PDF template')->icon(Heroicon::ArrowUpTray)];
    }
}
