<?php

namespace App\Http\Controllers;

use App\Events\NotificationSent;
use App\Models\Application;
use App\Models\JobOrder;
use Illuminate\Http\Request;

class JobOrderController extends Controller
{
    public function get_job_order_by_user_id($id)
    {
        $job_order = JobOrder::where('tech_id', $id)->with(['application'])->orderBy('id', 'desc')->paginate();
        return response()->json([
            'result' => $job_order
        ], 200);
    }
    public function index()
    {
        $internet_plans = JobOrder::get();
        return response()->json([
            'result' => $internet_plans
        ], 200);
    }


    public function store(Request $request)
    {
        $jo= JobOrder::create([
            'tech_id' => $request->tech_id,
            'application_id' => $request->id,
            'job_type' => $request->job_type,
            'status' => 'Pending',
        ]);
        event(new NotificationSent($jo));
        $app = Application::where('id', $request->id)->first();
        if ($app) {
            $app->update([
                'status' => $request->job_type
            ]);
        }
        return 'success';
    }


    public function show($id)
    {
        $internet_plan = JobOrder::where('id', $id)->first();
        return response()->json([
            'status' => $internet_plan,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobOrder $JobOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {

        $plan = JobOrder::where('id', $id)->first();
        $app = Application::where('id', $plan->application_id)->first();
        if ($app) {
            if ($request->status == 'Approved Installation') {
                $app->update([
                    'status' => 'Approved'
                ]);
            }else{
                $app->update([
                    'status' => $request->status
                ]);
            }
            
        }
        if ($plan) {
            $plan->update([
                'status' => $request->status
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        JobOrder::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
