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
        Schema::create('progressions', function (Blueprint $table) {
            $table->id();
            $table ->decimal('adresse');
            $table ->decimal('force');
            $table ->decimal('equilibre');
            $table ->decimal('vitesse');
            $table ->decimal('strategie');
            $table ->date('date');
            $table ->foreignId('gladiateur_id')->constrained('gladiateurs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('progressions');
    }
};
