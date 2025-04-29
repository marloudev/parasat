<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\RequestItem;
use App\Models\SerialNumberItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestItemController extends Controller
{

    public function get_request_item_by_user_id($id)
    {
        $request_items = RequestItem::where('user_id', $id)->with(['user', 'item'])->orderBy('id','desc')->paginate();
        $items = Items::with(['serial_numbers','available','stock_items'])->get();
        return response()->json([
            'result' => $request_items,
            'items' => $items
        ], 200);
        return response()->json('success', 200);
    }
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
    public function index(Request $request)
    {
        $items = RequestItem::with(['user', 'item'])->orderBy('id','desc')->paginate(10);
    
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
        if ($request->type == 'serial') {
            $item = RequestItem::find($id);
            if (!$item) {
                return response()->json(['message' => 'Item not found'], 404);
            }
            $item->update([
                'status' => $request->status
            ]);
            foreach ($request->items as $key => $value) {
                $i = SerialNumberItem::where('id', $value['id'])->first();
                if ($i) {
                    $i->update([
                        'status' => $request->status
                    ]);
                }
            }
            return response()->json($item, 200);
        }

        if ($request->type == "no_serial") {
            $item = Items::where('id', $request->item_id)->first();
            if ($item) {
                $item->update([
                    'total' => intval($item->total) - intval($request->amount)
                ]);
            }
            $item_request = RequestItem::where('id', $id)->first();
            if ($item_request) {
                $item_request->update([
                    'status' => $request->status,
                    'amount' => $request->amount,
                ]);
            }
            return response()->json('success', 200);
        }
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
