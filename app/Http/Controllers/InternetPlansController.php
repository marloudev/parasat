<?php

namespace App\Http\Controllers;

use App\Models\InternetPlan;
use Illuminate\Http\Request;

class InternetPlansController extends Controller
{

    public function index()
    {
        $internet_plans = InternetPlan::get();
        return response()->json([
            'result' => $internet_plans
        ], 200);
    }


    public function store(Request $request)
    {
        InternetPlan::create($request->all());
    }


    public function show(InternetPlan $internetPlan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InternetPlan $internetPlan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {

        $plan = InternetPlan::where('id', $id)->first();
        if ($plan) {
            $plan->update($request->all());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        InternetPlan::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
