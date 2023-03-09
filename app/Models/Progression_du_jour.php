<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progression_du_jour extends Model
{
    use HasFactory;

    protected $fillable = [
        "nom" ,
        "valeur_du_jour",
        "specialite",
        "type_entrainement",
        "valeur_min",
        "valeur_max" ,
        "marge_adresse",
        "marge_force",
        "marge_equilibre",
        "marge_vitesse",
        "marge_strategie",
        "expire_le" 
    ];
}
