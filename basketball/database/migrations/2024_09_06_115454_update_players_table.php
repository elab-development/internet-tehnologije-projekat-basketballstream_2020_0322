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
        Schema::table('players', function (Blueprint $table) {
            $table->renameColumn('asists', 'assists'); // Rename 'asists' to 'assists'
            $table->string('position')->nullable(); // Add new column 'position'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('players', function (Blueprint $table) {
            $table->renameColumn('assists', 'asists'); // Revert renaming
            $table->dropColumn('position'); // Remove 'position' column
        });
    }
};
