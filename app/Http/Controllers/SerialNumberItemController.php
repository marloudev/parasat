<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\SerialNumberItem;
use App\Models\StockItem;
use Illuminate\Http\Request;

class SerialNumberItemController extends Controller
{
    public function search_item(Request $request)
    {

        $items = SerialNumberItem::where([
            ['serial_number', '=',  $request->search],
            ['item_id', '=', $request->item_id],
            ['status', '=', 'available'],
        ])->first();
        return response()->json($items);
    }
    public function index()
    {
        $items = SerialNumberItem::paginate();
        return response()->json([
            'result' => $items
        ], 200);
    }

    public function show($id)
    {
        $item = SerialNumberItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json($item, 200);
    }

    public function store(Request $request)
    {

        if ($request->isSerial) {
            foreach ($request->serials as $key => $value) {
                SerialNumberItem::create([
                    'item_id' => $request->id,
                    'serial_number' => $value,
                    'status' => $request->status,
                ]);
            }
        }

        if (!$request->isSerial) {
            StockItem::create([
                'item_id' => $request->id,
                'amount' => $request->amount,
            ]);
        }

        $item =  Items::where('id', $request->id)->first();
        if ($item) {
            $item->update([
                'total' => intval($request->amount) + intval($item->total),
            ]);
        }
        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $item = SerialNumberItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }



        $item->update($request->all());

        return response()->json($item, 200);
    }

    public function destroy($id)
    {
        $item = SerialNumberItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
