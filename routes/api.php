<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\InternetPlansController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\RequestItemController;
use App\Http\Controllers\SerialNumberItemController;
use App\Http\Controllers\StockItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->prefix('/')->group(function () {
    
    Route::resource('application', ApplicationController::class);
    Route::resource('item', ItemsController::class);
    Route::resource('stock_item', StockItemController::class);
    Route::resource('serial_number_item', SerialNumberItemController::class);
    Route::post('/search_item', [SerialNumberItemController::class, 'search_item']);

    Route::resource('request_item', RequestItemController::class);
    Route::post('/change_status', [RequestItemController::class, 'change_status']);

});
Route::resource('internet_plan', InternetPlansController::class);