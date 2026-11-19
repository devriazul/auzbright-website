<?php

namespace App\Providers\Filament;

use App\Filament\Pages\Auth\Login;
use App\Filament\Pages\Dashboard;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\Width;
use Filament\View\PanelsRenderHook;
use Illuminate\Contracts\View\View;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

/**
 * The staff CRM and CMS panel (crm.auzbright.com.au in the architecture plan).
 */
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('crm')
            ->path('crm')
            ->login(Login::class)
            ->brandName('Auzbright CRM')
            ->brandLogo(asset('images/auzbright-logo.png'))
            ->darkModeBrandLogo(asset('images/auzbright-logo-reversed.png'))
            ->brandLogoHeight('2rem')
            ->favicon(asset('favicon.ico'))
            ->font('Inter')
            ->colors([
                // Auzbright navy, stepped so 900 is the website's #0E193F.
                'primary' => [
                    50 => '#eef1fb', 100 => '#d9def3', 200 => '#b5bfe6', 300 => '#8a99d4',
                    400 => '#6478c6', 500 => '#3d51a8', 600 => '#2a3c8c', 700 => '#1f2e70',
                    800 => '#172356', 900 => '#0e193f', 950 => '#091029',
                ],
                'gray' => Color::Slate,
                'success' => Color::hex('#4CAF50'),
                'info' => Color::hex('#2BB5A0'),
                'warning' => Color::Amber,
                'danger' => Color::Red,
            ])
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->sidebarCollapsibleOnDesktop()
            ->maxContentWidth(Width::Full)
            ->navigationGroups([
                NavigationGroup::make('Sales'),
                NavigationGroup::make('Service'),
                NavigationGroup::make('Finance'),
                NavigationGroup::make('Marketing'),
                NavigationGroup::make('Website'),
                NavigationGroup::make('Platform')->collapsed(),
            ])
            ->renderHook(PanelsRenderHook::GLOBAL_SEARCH_BEFORE, fn (): View => view('filament.topbar-tools'))
            ->renderHook(PanelsRenderHook::CONTENT_START, fn (): View => view('filament.preview-banner'))
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
