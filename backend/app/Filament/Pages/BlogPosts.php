<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

/**
 * CMS: blog posts. Rows are a snapshot of frontend/content/blog/.
 */
class BlogPosts extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedNewspaper;

    protected static string|UnitEnum|null $navigationGroup = 'Website';

    protected static ?int $navigationSort = 2;

    protected static ?string $slug = 'blog-posts';

    protected ?string $subheading = 'Posts sit at the site root, so slugs must be unique across all content types.';

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (?string $search, ?string $sortColumn, ?string $sortDirection): Collection => Demo::query(
                Demo::posts(), $search, ['title', 'slug', 'excerpt'], [], $sortColumn, $sortDirection,
            ))
            ->searchable()
            ->paginated(false)
            ->columns([
                TextColumn::make('title')->weight('medium')->description(fn (array $record): string => '/'.$record['slug'].'/')->wrap()->sortable(),
                TextColumn::make('status')->badge()->color('success')->formatStateUsing(fn (string $state): string => ucfirst($state)),
                TextColumn::make('author'),
                TextColumn::make('readingMinutes')->label('Read time')->suffix(' min')->alignCenter(),
                TextColumn::make('date')->label('Published')->date('j M Y')->sortable(),
                TextColumn::make('modified')->label('Updated')->date('j M Y')->sortable(),
            ])
            ->defaultSort('date', 'desc')
            ->recordActions([
                Action::make('edit')->icon(Heroicon::PencilSquare)->link(),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('create')->label('New post')->icon(Heroicon::Plus)];
    }
}
