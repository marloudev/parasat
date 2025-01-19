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
    return Inertia::render('landing_page/page');
});

Route::get('/logins', function () {
    return Inertia::render('login/page');
});

Route::get('/application', function () {
    return Inertia::render('application/page');
});



// Route::middleware('auth:sanctum', 'role:1')->prefix('administrator')->group(function () {
Route::prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });
    Route::get('/inventory', function () {
        return Inertia::render('admin/inventory/page');
    });
    Route::get('/requests', function () {
        return Inertia::render('admin/requests/page');
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
Route::prefix('techteam')->group(function () {
    Route::get('/request_item', function () {
        return Inertia::render('tech_team/request_item/page');
    });
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
