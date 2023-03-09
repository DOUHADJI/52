<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ludi extends Model
{
    use HasFactory;


    protected $fillable = [
        'nom',
        'specialite',
        'user_id',
    ];

    /**
     * Récupérer les gladiateurs d'un Ludi
     */
    public function gladiateurs(): HasMany
    {
        return $this->hasMany(Gladiateur::class);
    }
}
