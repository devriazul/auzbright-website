<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

/**
 * CMS: the product catalogue. One table serves both the website and Sales deals.
 * Rows are a snapshot of frontend/content/products/.
 */
class Products extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCube;

    protected static string|UnitEnum|null $navigationGroup = 'Website';

    protected static ?int $navigationSort = 1;

    protected ?string $subheading = 'The website catalogue and the Sales product list are the same records.';

    public const CATEGORIES = ['heat-pump' => 'Heat pumps', 'air-conditioner' => 'Air conditioning', 'battery' => 'Solar batteries', 'solar-system' => 'Solar systems'];

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, array $filters): Collection => Demo::query(
                Demo::products(), $search, ['name', 'brand', 'slug', 'tagline'], $filters,
            )->sortBy(['category', 'order']))
            ->searchable()
            ->paginated(false)
            ->defaultGroup(Group::make('category')->getTitleFromRecordUsing(fn (array $record): string => self::CATEGORIES[$record['category']]))
            ->columns([
                TextColumn::make('name')->weight('medium')->description(fn (array $record): string => $record['tagline'])->wrap(),
                TextColumn::make('brand')->badge()->color('gray'),
                TextColumn::make('slug')->fontFamily('mono')->size('xs')->color('gray')->prefix('/products/')->toggleable(),
                TextColumn::make('warranty')->placeholder('Not set'),
                TextColumn::make('specs')->label('Specs')->alignCenter(),
                IconColumn::make('brochure')->boolean()->alignCenter(),
                IconColumn::make('in_quote_form')->label('In quote form')->boolean()->alignCenter(),
                TextColumn::make('states')->label('Sold in'),
            ])
            ->filters([SelectFilter::make('category')->options(self::CATEGORIES)])
            ->recordActions([
                Action::make('edit')->icon(Heroicon::PencilSquare)->link(),
                Action::make('preview')->icon(Heroicon::Eye)->link()->color('gray'),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('create')->label('New product')->icon(Heroicon::Plus)];
    }
}
