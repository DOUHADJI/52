<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagePathController extends Controller
{
    public function get_asset(Request $request)
    {
        //dd($request->path);

        $path = $request->path;
        return response()->file(public_path($path));
    }
}
