<?php

namespace App\Http\Controllers;

use App\Models\SerialNumberItem;
use Illuminate\Http\Request;

class SerialNumberItemController extends Controller
{
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
      
        $item = SerialNumberItem::create($request->all());

        return response()->json($item, 201);
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
