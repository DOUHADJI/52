<?php

namespace App\Http\Controllers;

use App\Models\Gladiateur;
use App\Models\Ludi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GladiateurController extends Controller
{
    //

    public function create(Request $request) {
        $request -> validate([
            "nom" => 'required',
            'avatar' => 'required',
            'ludi_id' => 'required'
        ]);

        $gladiateur= Gladiateur::create([
            "nom"=> $request ->nom,
            'avatar' => $request -> avatar,
            "recrutable"=> false,
            "adresse"=>random_int(0,3),
            "force"=>random_int(0,3),
            "equilibre"=>random_int(0,3),
            "vitesse"=>random_int(0,3),
            "strategie"=>random_int(0,3),
            'ludi' => $request -> ludi_id
        ]);

        if($gladiateur){
            return response() ->json([
                "status"=> 'success',
                "nouveau gladiateur" => $gladiateur
            ]);
        }

        return response() ->json([
            "status"=> 'success',
            "errors" => [
                "message" => "une erreur s'est produite"
            ]
        ]);
    }


    public function get_ludi_gladiators(Request $request) {
        $request ->validate([
            'ludiName'=>'required'
        ]);

        $ludi =Ludi::where('user_id', Auth::id())->where('nom', $request ->ludiName) ->first();
        $gladiateurs =Gladiateur::where('ludi_id',$ludi -> id) ->get();

        if($gladiateurs){
            return response() -> json([
                "status" =>"success",
                "gladiateurs" => $gladiateurs
            ]);
        }

        return response() -> json([
            "status" =>"success",
            "errors" => [
                "message" => "une erreur s'est produite"
            ]
        ]);


    }
}
