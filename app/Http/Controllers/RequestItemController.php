<?php

namespace App\Http\Controllers;

use App\Models\RequestItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestItemController extends Controller
{
    public function change_status(Request $request)
    {

        $items = RequestItem::where('id', $request->id)->first();
        if ($items) {
            $items->update([
                'status' => $request->status
            ]);
        }
        return response()->json([
            'result' => 'success'
        ], 200);
    }
    public function index()
    {
        $items = RequestItem::with(['user', 'item'])->paginate();
        return response()->json([
            'result' => $items
        ], 200);
    }

    public function show($id)
    {
        $item = RequestItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json($item, 200);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        RequestItem::create([
            'user_id' => $user->id,
            'item_id' => $request->id,
            'amount' => $request->amount,
            'status' => 'pending',
        ]);
        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $item = RequestItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }



        $item->update($request->all());

        return response()->json($item, 200);
    }

    public function destroy($id)
    {
        $item = RequestItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
