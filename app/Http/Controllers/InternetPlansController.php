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
    public function update(Request $request, InternetPlan $internetPlan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InternetPlan $internetPlan)
    {
        //
    }
}
