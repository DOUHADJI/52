<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('progression_du_jours', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->integer('valeur_du_jour');
            $table->string('specialite');
            $table->string('type_entrainement');
            $table->integer('valeur_min');
            $table->integer('valeur_max');
            $table->integer('marge_adresse');
            $table->integer('marge_force');
            $table->integer('marge_equilibre');
            $table->integer('marge_vitesse');
            $table->integer('marge_strategie');
            $table->date('expire_le');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('progression_du_jours');
    }
};
