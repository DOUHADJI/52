<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function create (Request $request) {
        return response() -> json([
            "message" => "We receive your request"
        ],200);
    }
}
