<?php

namespace App\Http\Controllers;

use App\Mail\SendByBarangay;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function store(Request $request)
    {
        // Get the data sent from the frontend
        $area = $request->input('area');
        $type = $request->input('type');
        $content = $request->input('content');

        // Fetch applications by area and approved status
        $applications = Application::where('barangay', $area)
            ->where('status', 'Approved')
            ->get();

        // Loop through applicants and send the email
        foreach ($applications as $applicant) {
            Mail::to($applicant->email)->send(new SendByBarangay([
                'type' => $type,
                'content' => $content,
            ]));
        }

        // Return success response
        return response()->json([
            'data' => 'Emails sent successfully'
        ], 200);
    }
}
