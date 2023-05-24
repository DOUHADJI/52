<?php

use App\Http\Controllers\GladiateurController;
use App\Http\Controllers\ImagePathController;
use App\Http\Controllers\LudiController;
use App\Http\Controllers\ProgressionController;
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

Route::middleware('guest')->group(function () {

    Route::controller(UserController::class)->group(function () {

        Route::post('/sign_up', [UserController::class, "create"]);
        Route::post('/sign_in', [UserController::class, "login"]);

    });

});


Route::middleware('auth:sanctum')->group(function () {

    Route::controller(UserController::class)->group(function () {

        Route::put('/update_user_informations', [UserController::class, "update"]);
        Route::put('/change_password', [UserController::class, "change_password"]);
        Route::get('/sign_out', [UserController::class, "logout"]);

    });

    Route::controller(LudiController::class)->group(function () {

        Route::get('/get_user_ludis', [LudiController::class, 'get_user_ludis']);
        Route::put('/update_ludi', [LudiController::class, 'update']);
    });

    Route::controller(GladiateurController::class)->group(function () {

        Route::post('/get_ludi_gladiators', [GladiateurController::class, 'get_ludi_gladiators']);
        Route::post('/create_gladiateur', [GladiateurController::class, 'create']);
        Route::put('/update_gladiator_progression', [GladiateurController::class, 'update_on_training']);
        Route::put('/remove_gladiator_from_ludi', "remove_from_ludi");

    });


});




Route::get('/user', [UserController::class, "show"]) -> middleware('web');

Route::post('/progression_du_jour', [ProgressionDuJourController::class, 'set_progression_du_jour']);  // -> middleware('auth:sanctum');


Route::controller(ImagePathController::class)->group(function () {
    Route::get("/assets/{path}", 'get_asset');
});




Route::fallback(function () {
    return view("welcome");
});
