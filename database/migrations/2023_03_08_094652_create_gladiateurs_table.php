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
        Schema::create('gladiateurs', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('avatar');
            $table->boolean('recrutable');
            $table->decimal('adresse');
            $table->decimal('force');
            $table->decimal('equilibre');
            $table->decimal('vitesse');
            $table->decimal('strategie');
            $table->foreignId('ludi_id')-> constrained('ludis');
            $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gladiateurs');
    }
};
