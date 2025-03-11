<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function index()
    {
        $users = User::get();
        return response()->json([
            'status' =>  $users,
        ], 200);
    }
    public function store(Request $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => $request->user_type,
        ]);
        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function update(Request $request,  $id)
    {

        $user = User::where('id', $id)->first();
        if ($user) {
            $user->update($request->all());
        }
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
