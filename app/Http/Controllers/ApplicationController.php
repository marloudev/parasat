<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        $application = Application::create($request->all());

        $address = $request->lot . ' ' . $request->brgy . ' ' . $request->city . ' ' . $request->province;

        $application->address = $address;
        $application->save();

        return response()->json([
            'status' => 'success',
            'data' => $application,
        ], 200);
    }
}
