<?php

use App\Http\Controllers\SigningPreviewController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/crm');

/*
 * Customer signing page. Public, like the real link a customer receives by email.
 * Preview only: it shows sample data and saves nothing.
 */
Route::get('/sign/{reference}', SigningPreviewController::class)->name('sign.show');
