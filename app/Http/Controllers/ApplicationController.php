<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\FileUpload;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        $application = Application::create($request->all());

        $file = FileUpload::create($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $application,
            'file' => $file
        ], 200);
    }
}
