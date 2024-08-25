<?php

use App\Http\Controllers\Api\PlayerController;
use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('players',[PlayerController::class,'index']);

Route::post('players',[PlayerController::class,'score']);

//Route::get('players/{id}',[PlayerController::class,'show']);

Route::get('players/{id}/edit',[PlayerController::class,'edit']);

Route::put('players/{id}/edit',[PlayerController::class,'update']);

Route::delete('players/{id}/delete',[PlayerController::class,'destroy']);

Route::get('/players/{name}', function ($name) {
    // Zameni donje crte razmacima za pretragu
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


