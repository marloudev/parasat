<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\InternetPlansController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('internet_plan', InternetPlansController::class);
Route::resource('application', ApplicationController::class);
