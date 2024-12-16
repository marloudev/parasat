<?php

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

Route::get('/', function () {
    return Inertia::render('login/page');
});

// Route::middleware('auth:sanctum', 'role:1')->prefix('administrator')->group(function () {
Route::prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });
    // Route::get('/students', function () {
    //     return Inertia::render('admin/students/page');
    // });
    // Route::get('/courses', function () {
    //     return Inertia::render('admin/courses/page');
    // });
    // Route::get('/subjects', function () {
    //     return Inertia::render('admin/subjects/page');
    // });
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
