<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('teams', function (Blueprint $table) {
        $table->string('name')->primary(); // Ime tima kao primarni ključ
        $table->string('federal_state'); // Savezna država iz koje dolazi tim
        $table->decimal('value', 15, 2); // Vrednost tima
        $table->string('owner'); // Vlasnik tima
        $table->integer('nba_titles')->default(0); // Broj NBA trofeja
        $table->integer('position_2024')->nullable(); // Pozicija u 2024. godini
        $table->timestamps(); // Vreme kreiranja i ažuriranja
    });
}

public function down()
{
    Schema::dropIfExists('teams');
}

    
};
