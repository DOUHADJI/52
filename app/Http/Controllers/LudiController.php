<?php

namespace App\Http\Controllers;

use App\Models\Ludi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LudiController extends Controller
{
    //

    public function get_user_ludis() {
        $id = Auth::id();

        $ludis = Ludi::where('user_id', $id)->get();

        /* $l = Ludi::leftJoin('gladiateurs', 'gladiateurs.ludi_id', '=', 'ludis.id') 
                -> groupBy('ludis.id') 
                ->get(['ludis.id', 'ludis.nom', DB::raw('count(gladiateurs.id) as gladiateurs')]); */


        return response() -> json([
            "status" => "success",
            "message" => "liste des ludis de l'utilisateur",
            "ludis" => $ludis,
          
          
        ]);
    }

    public function update(Request $request) {
        $request -> validate([
            'nom' =>'required',
            'specialite'=> 'required'
        ]);

        $id = Auth::id();

        $ludi = Ludi::where('user_id', $id) ->where("nom", $request -> ludiName)->first();

        if($ludi){
            $ludi -> update([
                "nom" => $request -> nom,
                "specialite" => $request -> specialite
            ]);

            return response() -> json([
                "status" => "success",
                "ludi" => $ludi
            ]);
        }


        return response() -> json([
            "status" => "success",
            "errors" => [
                "message" => "une erreur s'est produite"
            ]
        ]);




    }
}
