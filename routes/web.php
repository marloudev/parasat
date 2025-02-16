<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('landing_page/page');
});

Route::get('/auth/login', function () {
    return Inertia::render('login/page');
})->name('login');

Route::get('/application/{id}', function () {
    return Inertia::render('application/page');
});

Route::get('/about-us', function () {
    return Inertia::render('about-us/page');
});

Route::get('/contact', function () {
    return Inertia::render('contact/page');
});



// Route::middleware('auth:sanctum', 'role:1')->prefix('administrator')->group(function () {
Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    })->name('dashboard');
    Route::get('/inventory', function () {
        return Inertia::render('admin/inventory/page');
    });
    Route::get('/user_management', function () {
        return Inertia::render('admin/user_management/page');
    });
    Route::get('/requests', function () {
        return Inertia::render('admin/requests/page');
    });
    Route::get('/internetplans', function () {
        return Inertia::render('admin/internet_plans/page');
    });
    Route::get('/application', function () {
        return Inertia::render('admin/application/page');
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
Route::middleware('auth:sanctum')->prefix('techteam')->group(function () {
    Route::get('/request_item', function () {
        return Inertia::render('tech_team/request_item/page');
    })->name('tech_team');
});

Route::middleware('auth:sanctum')->prefix('csr')->group(function () {
    Route::get('/applications', function () {
        return Inertia::render('csr/applications/page');
    })->name('csr');
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
