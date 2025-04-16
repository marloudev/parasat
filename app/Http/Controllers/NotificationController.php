<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $notify = Notification::where('status', 'unread')->with(['application'])->get();

        return response()->json([
            'result' => $notify
        ], 200);
    }

    public function update(Request $request,  $id)
    {

        $notification = Notification::where('id', $id)->first();
        if ($notification) {
            $notification->update([
                'status' => $request->status
            ]);
        }

        return response()->json([
            'result' => 'success'
        ], 200);
    }
}
