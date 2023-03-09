<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Gladiateur extends Model
{
    use HasFactory;

    /**
     * Récupérer le ludi auquel appartient les gladiateurs
     */
    public function ludi(): BelongsTo
    {
        return $this->belongsTo(Ludi::class);
    }

}
