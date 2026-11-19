<?php

namespace App\Filament\Widgets;

use App\Filament\Pages\DocumentRecord;
use App\Filament\Pages\Documents;
use App\Support\Demo;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;

/**
 * Envelopes sent but not yet signed, oldest first, so staff can chase them.
 */
class AwaitingSignature extends TableWidget
{
    protected static ?int $sort = 6;

    protected int|string|array $columnSpan = ['md' => 2, 'xl' => 2];

    public function table(Table $table): Table
    {
        return $table
            ->heading('Awaiting signature')
            ->records(fn (): array => Demo::documents()
                ->whereIn('status', ['sent', 'viewed', 'partly_signed'])
                ->sortBy('sent_at')
                ->all())
            ->paginated(false)
            ->recordUrl(fn (array $record): string => DocumentRecord::getUrl(['document' => $record['id']]))
            ->columns([
                TextColumn::make('title')->label('Document')->weight('medium')->description(fn (array $record): string => $record['contact'].' · '.$record['related_to']),
                TextColumn::make('status')->badge()
                    ->formatStateUsing(fn (string $state): string => Demo::DOCUMENT_STATUSES[$state])
                    ->color(fn (string $state): string => Demo::documentStatusColor($state)),
                TextColumn::make('sent_at')->label('Sent')->since(),
                TextColumn::make('expires_at')->label('Expires')->since(),
            ])
            ->headerActions([
                Action::make('all')->label('View all')->link()->url(Documents::getUrl()),
            ]);
    }
}
