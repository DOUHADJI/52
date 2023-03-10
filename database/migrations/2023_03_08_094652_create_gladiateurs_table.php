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
            $table->integer('adresse');
            $table->integer('force');
            $table->integer('equilibre');
            $table->integer('vitesse');
            $table->integer('strategie');
            $table->foreignId('ludi_id')->nullable()-> constrained('ludis') ->nullOnDelete();
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
