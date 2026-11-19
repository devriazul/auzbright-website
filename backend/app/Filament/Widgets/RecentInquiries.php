<?php

namespace App\Filament\Widgets;

use App\Filament\Pages\Inquiries;
use App\Support\Demo;
use Filament\Actions\Action;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;

class RecentInquiries extends TableWidget
{
    protected static ?int $sort = 4;

    protected int|string|array $columnSpan = ['md' => 2, 'xl' => 2];

    public function table(Table $table): Table
    {
        return $table
            ->heading('Latest inquiries')
            ->records(fn (): array => Demo::inquiries()->take(6)->all())
            ->paginated(false)
            ->columns(Inquiries::summaryColumns())
            ->headerActions([
                Action::make('all')->label('View all')->link()->url(Inquiries::getUrl()),
            ]);
    }
}
