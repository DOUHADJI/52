<?php

namespace App\Http\Controllers;

use App\Models\Progression_du_jour;
use Illuminate\Http\Request;
use Spatie\LaravelIgnition\Recorders\DumpRecorder\Dump;

class ProgressionDuJourController extends Controller
{
    //

    public function set_progression_du_jour (Request $request) {

        $json = json_encode($request -> progressions);
        $progressions = json_decode($json);


        //today's date
        $date = date('y-m-d');

        //  convert
        // date into dateTimestamp
        $todayTimeStamp1 = strtotime($date);

        $get_if_progressions_up_to_date = Progression_du_jour::where('expire_le', $date ) -> exists();

        if($get_if_progressions_up_to_date){

            $progressions = Progression_du_jour::where('expire_le', $date ) -> get();

            return response() -> json([
                "status" => "success",
                "progressions" => $progressions

            ]);
        }

      

        foreach($progressions as $progression ){
            Progression_du_jour::create([
                "nom" => $progression -> nom,
                "valeur_du_jour" => $progression -> valeur_du_jour,
                "specialite"=> $progression -> specialite,
                "type_entrainement" => $progression -> type_entrainement,
                "valeur_min" => $progression -> valeur_min,
                "valeur_max" => $progression -> valeur_max,
                "marge_adresse" => $progression -> marge_adresse,
                "marge_force" => $progression -> marge_force,
                "marge_equilibre" =>$progression -> marge_equilibre,
                "marge_vitesse" => $progression -> marge_vitesse,
                "marge_strategie" => $progression -> marge_strategie,
                "expire_le" => $date
            ]);
        }

        $new_progressions = Progression_du_jour::where('expire_le', $date ) -> get();

        return response() -> json([
            "status" => "success",
            "progressions" => $new_progressions

        ]);


    }

    public function progression_du_jour (Request $request) {

        $json = json_encode($request -> progressions);
        $progressions = json_decode($json);


        //today's date
        $date = date('y-m-d');

        //  convert
        // date into dateTimestamp
        $todayTimeStamp1 = strtotime($date);

        $get_if_progressions_up_to_date = Progression_du_jour::where('expire_le', $date ) -> exists();

        if($get_if_progressions_up_to_date){

            $progressions = Progression_du_jour::where('expire_le', $date ) -> get();

            return response() -> json([
                "status" => "success",
                "progressions" => $progressions

            ]);
        }

      

        foreach($progressions as $progression ){
            Progression_du_jour::create([
                "nom" => $progression -> nom,
                "valeur_du_jour" => $progression -> valeur_du_jour,
                "specialite"=> $progression -> specialite,
                "type_entrainement" => $progression -> type_entrainement,
                "valeur_min" => $progression -> valeur_min,
                "valeur_max" => $progression -> valeur_max,
                "marge_adresse" => $progression -> marge_adresse,
                "marge_force" => $progression -> marge_force,
                "marge_equilibre" =>$progression -> marge_equilibre,
                "marge_vitesse" => $progression -> marge_vitesse,
                "marge_strategie" => $progression -> marge_strategie,
                "expire_le" => $date
            ]);
        }

        $new_progressions = Progression_du_jour::where('expire_le', $date ) -> get();

        return response() -> json([
            "status" => "success",
            "progressions" => $new_progressions

        ]);


    }
}
