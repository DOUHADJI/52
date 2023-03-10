<?php

use App\Http\Controllers\GladiateurController;
use App\Http\Controllers\LudiController;
use App\Http\Controllers\ProgressionDuJourController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|

*/


Route::post('/sign_up', [UserController::class, "create"]) -> middleware('guest');

Route::post('/sign_in', [UserController::class, "login"]) -> middleware('guest');

Route::get('/user', [UserController::class, "show"]) -> middleware('web');

Route::put('/update_user_informations', [UserController::class, "update"]) -> middleware('auth:sanctum');

Route::put('/change_password', [UserController::class, "change_password"]) -> middleware('auth:sanctum');

Route::get('/sign_out', [UserController::class, "logout"]) -> middleware('auth:sanctum');

Route::get('/get_user_ludis', [LudiController::class, 'get_user_ludis']) -> middleware('auth:sanctum');

Route::put('/update_ludi', [LudiController::class, 'update']) -> middleware('auth:sanctum');

Route::post('/get_ludi_gladiators', [GladiateurController::class, 'get_ludi_gladiators']) -> middleware('auth:sanctum');

Route::post('/create_gladiateur', [GladiateurController::class, 'create']) -> middleware('auth:sanctum');

Route::put('/update_gladiator_progression', [GladiateurController::class, 'update_on_training']) -> middleware('auth:sanctum');


Route::post('/progression_du_jour', [ProgressionDuJourController::class, 'set_progression_du_jour']);  // -> middleware('auth:sanctum');







Route::fallback(function() {
    return view("welcome");
});