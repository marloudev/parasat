<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\InternetPlansController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\JobOrderController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RequestItemController;
use App\Http\Controllers\SerialNumberItemController;
use App\Http\Controllers\StockItemController;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('application', ApplicationController::class);
Route::resource('account', AccountController::class);
Route::resource('internet_plan', InternetPlansController::class);
Route::resource('dashboard', DashboardController::class);
Route::resource('send_email', EmailController::class);
Route::resource('notification', NotificationController::class);
Route::resource('job_order', JobOrderController::class);
Route::post('/auth/login', [AccountController::class, 'login']);


Route::get('/send_notification', [ApplicationController::class, 'send_notification']);
Route::middleware('auth:sanctum')->prefix('/')->group(function () {
    Route::resource('item', ItemsController::class);
    Route::resource('stock_item', StockItemController::class);
    Route::resource('serial_number_item', SerialNumberItemController::class);
    Route::post('/search_item', [SerialNumberItemController::class, 'search_item']);
    Route::resource('request_item', RequestItemController::class);
    Route::get('/get_request_item_by_user_id/{userid}', [RequestItemController::class, 'get_request_item_by_user_id']);
    Route::get('/get_job_order_by_user_id/{userid}', [JobOrderController::class, 'get_job_order_by_user_id']);
    Route::post('/change_status', [RequestItemController::class, 'change_status']);
});
