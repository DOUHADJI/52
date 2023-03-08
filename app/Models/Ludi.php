<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ludi extends Model
{
    use HasFactory;


    protected $fillable = [
        'nom',
        'specialite',
        'user_id',
    ];

}
