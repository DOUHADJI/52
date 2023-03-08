<?php

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
Route::get('/user', [UserController::class, "show"]) -> middleware('auth:sanctum');

Route::get('/sign_out', [UserController::class, "logout"]) -> middleware('auth:sanctum');





Route::fallback(function() {
    return view("welcome");
});