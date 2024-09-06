<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeletePlayersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Example: Delete player with ID 1
        DB::table('players')->where('id', 1)->delete();

        // You can delete multiple players by adding more conditions
        // DB::table('players')->where('id', 2)->delete();

        // Optionally, you can delete based on other conditions, like team name
        // DB::table('players')->where('team', 'Lakers')->delete();

        $this->command->info('Selected players deleted successfully.');
    }
}

