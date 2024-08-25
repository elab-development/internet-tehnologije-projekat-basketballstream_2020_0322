<?php
use Illuminate\Support\Facades\Http;

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/striming', function () {
    return Inertia::render('Striming');
})->middleware(['auth', 'verified'])->name('striming');

Route::get('/live', function () {
    return Inertia::render('Live');
})->middleware(['auth', 'verified'])->name('live');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/api/espn/news', function() {
    $response = Http::get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news');
    return $response->json();
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('welcome');


require __DIR__.'/auth.php';
