<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Items;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // $approved = Application::whereIn('status', ['Approved', 'Active'])->count();
        $approved = Application::where('status', 'Approved')->count();
        $pending = Application::where('status', '=', 'Pending')->count();
        $declined = Application::where('status', '=', 'Declined')->count();
        $total = Application::count();
        $total_item = Items::count();



        // Fetch counts for Applicant across all site

        return response()->json([
            'approved' => $approved,
            'pending' => $pending,
            'declined' => $declined,
            'total' => $total,
            'total_item' => $total_item
        ], 200);
    }
}
