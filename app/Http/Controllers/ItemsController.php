<?php

namespace App\Http\Controllers;

use App\Models\Items;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    public function index()
    {
        $items = Items::paginate();
        return response()->json([
            'result' => $items
        ], 200);
    }

    public function show($id)
    {
        $item = Items::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        return response()->json($item, 200);
    }

    public function store(Request $request)
    {

        $item = Items::create($request->all());

        return response()->json($item, 200);
    }

    public function update(Request $request, $id)
    {
        $item = Items::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }



        $item->update($request->all());

        return response()->json($item, 200);
    }

    public function destroy($id)
    {
        $item = Items::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
