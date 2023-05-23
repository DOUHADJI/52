<?php

namespace App\Http\Controllers;

use App\Models\Gladiateur;
use App\Models\Ludi;
use App\Models\Progression;
use App\Models\Progression_du_jour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GladiateurController extends Controller
{
    //

    public function create(Request $request) {

        $request -> validate([
            "nom" => 'required',
            'avatar' => 'required',
            'ludiName' => 'required',
            'ludiId'=> 'required'
        ]);

        $user = Auth::user();
        $ludi = Ludi::whereId($request->ludiId) ->first();

        if($user ->bourse< 5){
            return response() ->json([
                "status"=> 'success',
                "errors" => [
                    "message" => "Vous n'avez pas suffisament d'argent Solde minimum: 05 deniers"
                ]
            ]);
        }

        $gladiateurs = Gladiateur::where("ludi_id", $ludi->id) -> get();

        if($gladiateurs -> count()==10){
            return response() ->json([
                "status"=> 'success',
                "errors" => [
                    "message" => "Vous ne pouvez plus recruter ni créer de nouveaux gladiateurs."
                ]
            ]);
        }


        $gladiateur = Gladiateur::create([
            "nom"=> $request ->nom,
            'avatar' => $request -> avatar,
            "recrutable"=> false,
            "adresse"=>random_int(0,3),
            "force"=>random_int(0,3),
            "equilibre"=>random_int(0,3),
            "vitesse"=>random_int(0,3),
            "strategie"=>random_int(0,3),
            'ludi_id' => $ludi ->id
        ]);

        if($gladiateur){
            
            $user ->update([
                "bourse" => $user->bourse - 5
            ]);
            return response() ->json([
                "status"=> 'success',
                "nouveau gladiateur" => $gladiateur,
                "ludi"=> $ludi
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
            'ludiName'=>'required',
            'ludiId'=> 'required'
        ]);

        $id =$request ->ludiId;

        $ludi =Ludi::whereId($id)->first();
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

    public function update_on_training (Request $request) {
        $request -> validate([
            'id'=>'required',
            'entrainement'=>'required'
        ]);

        $gladiateur = Gladiateur::whereId($request->id)-> first();
        $ludi=Ludi::whereId($gladiateur->ludi_id)->first();
        $progression_du_jour = Progression_du_jour::where("specialite", $ludi->specialite) ->where("type_entrainement",$request->entrainement) ->first();
        $date = date('y-m-d');

        $check_if_gladiateur_is_already_trained_today = Progression::where('date', $date) -> exists();

      
        if($check_if_gladiateur_is_already_trained_today){
            return response() -> json([
                "status" => "success",
                "errors" => [
                    "entrainement" => "Vous ne pouvez  entrainer ce gladiateur qu'une fois par jour"
                ]
            ]);
        }

        $adresse = $gladiateur ->adresse + $progression_du_jour->marge_adresse * $progression_du_jour ->valeur_du_jour;
        $force = $gladiateur->force+$progression_du_jour->marge_force*$progression_du_jour->valeur_du_jour;
        $equilibre = $gladiateur->equilibre+$progression_du_jour->marge_equilibre*$progression_du_jour->valeur_du_jour;
        $vitesse = $gladiateur->vitesse+$progression_du_jour->marge_vitesse*$progression_du_jour->valeur_du_jour;
        $strategie = $gladiateur->strategie+$progression_du_jour->marge_strategie*$progression_du_jour->valeur_du_jour;

        $progression_adresse =  $progression_du_jour->marge_adresse * $progression_du_jour ->valeur_du_jour;
        $progression_force = $progression_du_jour->marge_force*$progression_du_jour->valeur_du_jour;
        $progression_equilibre = $progression_du_jour->marge_equilibre*$progression_du_jour->valeur_du_jour;
        $progression_vitesse = $progression_du_jour->marge_vitesse*$progression_du_jour->valeur_du_jour;
        $progression_strategie = $progression_du_jour->marge_strategie*$progression_du_jour->valeur_du_jour;
      

        $gladiateur -> update([
            "adresse" => $adresse,
            "force" => $force,
            "equilibre" => $equilibre,
            "vitesse" => $vitesse,
            "strategie" => $strategie
        ]);

        $progression_gladiateur = Progression::create([
            "adresse" => $progression_adresse,
            "force" => $progression_force,
            "equilibre" => $progression_equilibre,
            "vitesse" => $progression_vitesse,
            "strategie" => $progression_strategie,
            "date" => $date,
            "gladiateur_id" => $gladiateur ->id
        ]);



        return response() -> json([
            "status" => "entrainement réalisé avec sucess",
            "gladiateur"=> $gladiateur,
            "progression" => $progression_gladiateur
        ]);


    }


}
