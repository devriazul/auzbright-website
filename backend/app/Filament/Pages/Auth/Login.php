<?php

namespace App\Filament\Pages\Auth;

use Filament\Auth\Pages\Login as BaseLogin;

/**
 * Staff login. In local development the form is pre-filled with the demo
 * account from DatabaseSeeder, so the UI preview opens with one click.
 */
class Login extends BaseLogin
{
    public function mount(): void
    {
        parent::mount();

        if (app()->isLocal()) {
            $this->form->fill([
                'email' => 'ava@auzbright.test',
                'password' => 'password',
                'remember' => true,
            ]);
        }
    }
}
