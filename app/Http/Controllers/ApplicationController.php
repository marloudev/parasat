<?php

namespace App\Http\Controllers;

use App\Mail\ApprovedApplication;
use App\Mail\DeclinedApplication;
use App\Models\Application;
use App\Models\FileUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;


class ApplicationController extends Controller
{

    public function index()
    {
        $applications = Application::with(['file_upload'])->get();
        return response()->json([
            'result' => $applications
        ], 200);
    }


    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'fname' => 'required|string',
            'mname' => 'nullable|string',
            'lname' => 'required|string',
            'suffix' => 'nullable|string',
            'bdate' => 'required|date',
            'region' => 'required|string',
            'province' => 'required|string',
            'city' => 'required|string',
            'barangay' => 'required|string',
            'lot' => 'nullable|string',
            'email' => 'required|email',
            'contact' => 'required|string',
            'sfname' => 'nullable|string',
            'smname' => 'nullable|string',
            'slname' => 'nullable|string',
            'ssuffix' => 'nullable|string',
            'semail' => 'nullable|email',
            'scontact' => 'nullable|string',
            'status' => 'required|string',
            'plan_name' => 'required|string',
            'plan_speed' => 'required|string',
            'plan_price' => 'required|string',
        ]);

        // Create a new application record
        $application = Application::create($request->only([
            'fname',
            'mname',
            'lname',
            'suffix',
            'bdate',
            'region',
            'province',
            'city',
            'barangay',
            'lot',
            'email',
            'contact',
            'sfname',
            'smname',
            'slname',
            'ssuffix',
            'semail',
            'scontact',
            'status',
            'plan_name',
            'plan_speed',
            'plan_price'
        ]));

        // Handle file uploads with a reusable function
        $this->handleFileUploads($request, 'electric_bills', $application);
        $this->handleFileUploads($request, 'valid_id', $application);
        $this->handleFileUploads($request, 'locations', $application);

        // Return success response with application data
        return response()->json([
            'status' => 'success',
            'data' => $application,
        ], 200);
    }

    private function handleFileUploads(Request $request, string $fileType, Application $application)
    {
        if ($request->hasFile($fileType)) {
            $files = $request->file($fileType);
            foreach ($files as $file) {
                $path = $file->store('Personal-' . date("Y"), 's3'); // Store in year-based folder
                $url = Storage::disk('s3')->url($path); // Get file URL from S3

                // Save file information in the FileUpload model
                FileUpload::create([
                    'app_id' => $application->id, // Link the file to the application using its ID
                    'file_name' => $file->getClientOriginalName(), // Get the original file name
                    'image' => $url, // Save the file URL
                    'type' => $fileType, // Store the file type
                ]);
            }
        }
    }





    public function update(Request $request, $id)
    {
        $application = Application::where('id', '=',  $request->id)->first();
        $application->update([
            'status' => $request->status,
        ]);
        if ($request->status == 'Approved') {
            // Applicant::where('app_id', $id)->update([
            //     'status' => 'Contract Signing'
            // ]);
            Mail::to($request->email)->send(new ApprovedApplication(array_merge(
                $request->all(),
                ['id' => $application->id],
            )));
        }

        if ($request->status == 'Declined') {
            // Applicant::where('app_id', $id)->update([
            //     'status' => 'Contract Signing'
            // ]);
            Mail::to($request->email)->send(new DeclinedApplication(array_merge(
                $request->all(),
                ['id' => $application->id],
            )));
        }

        return response()->json([
            'data' => 'success'
        ], 200);
    }
}
