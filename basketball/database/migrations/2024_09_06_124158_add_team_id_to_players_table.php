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
    Schema::table('players', function (Blueprint $table) {
       
        $table->foreign('team')->references('name')->on('teams'); // Stranjski ključ
    });
}

public function down()
{
    Schema::table('players', function (Blueprint $table) {
        $table->dropForeign(['team']);
        $table->dropColumn('team');
    });
}

};
