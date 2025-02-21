<?php

namespace App\Http\Controllers;

use App\Mail\ApprovedApplication;
use App\Mail\DeclinedApplication;
use App\Models\Application;
use App\Models\FileUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ApplicationController extends Controller
{

    public function index()
    {
        $applications = Application::get();
        return response()->json([
            'result' => $applications
        ], 200);
    }


    public function store(Request $request)
    {
        $application = Application::create([
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'suffix' => $request->suffix,
            'bdate' => $request->bdate,
            'region' => $request->region,
            'province' => $request->province,
            'city' => $request->city,
            'barangay' => $request->barangay,
            'lot' => $request->lot,
            'email' => $request->email,
            'contact' => $request->contact,
            'sfname' => $request->sfname,
            'smname' => $request->sfname,
            'slname' => $request->slname,
            'ssuffix' => $request->ssuffix,
            'semail' => $request->semail,
            'scontact' => $request->scontact,
            'status' => $request->status,
            'plan_name' => $request->plan_name,
            'plan_speed' => $request->plan_speed,
            'plan_price' => $request->plan_price,
        ]);

        // $file = FileUpload::create($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $application,
            // 'file' => $file
        ], 200);
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
