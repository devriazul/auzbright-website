<?php

namespace App\Filament\Pages;

use App\Filament\Support\TablePage;
use App\Support\Demo;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

/**
 * Platform: staff accounts and their roles.
 */
class Users extends TablePage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUsers;

    protected static string|UnitEnum|null $navigationGroup = 'Platform';

    protected static ?int $navigationSort = 2;

    protected static ?string $title = 'Users and roles';

    protected ?string $subheading = 'Two-factor login is required for every staff account.';

    public function table(Table $table): Table
    {
        return $table
            ->records(fn (): array => collect(Demo::STAFF)->map(fn (array $u, string $name): array => $u + ['name' => $name, 'mfa' => true])->all())
            ->paginated(false)
            ->columns([
                TextColumn::make('name')->weight('medium')->description(fn (array $record): string => $record['email']),
                TextColumn::make('role')->badge()->color(fn (string $state): string => $state === 'Admin' ? 'danger' : 'primary'),
                TextColumn::make('team'),
                IconColumn::make('mfa')->label('2FA')->boolean()->alignCenter(),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [Action::make('invite')->label('Invite user')->icon(Heroicon::UserPlus)];
    }
}
