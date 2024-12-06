<?php

use App\Http\Controllers\Api\PlayerController;
use App\Http\Controllers\Api\TeamController;
use App\Models\Player; 
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Route; 

// Ruta za autentifikaciju korisnika
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//ruta za privlacenje svih igraca
Route::get('/players', [PlayerController::class, 'index']);
// Resource rute za PlayerController
Route::apiResource('players', PlayerController::class)->except(['index']);

// Ruta za pretragu igrača po imenu
Route::get('/players/search/{name}', function ($name) {
    $name = str_replace('_', ' ', $name);
    $player = Player::where('name', $name)->first();

    if ($player) {
        return response()->json([
            'status' => 200,
            'player' => $player
        ]);
    } else {
        return response()->json([
            'status' => 404,
            'message' => 'Player not found'
        ]);
    }
});




// Custom search route
Route::get('/teams/search/{name}', [TeamController::class, 'search']);

//prevlacenje svih timova
Route::get('/teams', [TeamController::class, 'index']);

//resource ruta za sve tipove osim privlacenje svih timova
Route::resource('teams', TeamController::class)->except(['index',
]);

// Ruta za brisanje tima na osnovu imena
Route::delete('/teams/{name}', [TeamController::class, 'destroy']);



