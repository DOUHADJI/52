<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progression extends Model
{
    use HasFactory;

    protected $fillable=[
        "adresse",
        "force",
        "equilibre",
        "vitesse",
        "strategie",
        "date",
        "gladiateur_id"
    ];
}
