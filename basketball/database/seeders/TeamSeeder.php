<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TeamSeeder extends Seeder
{
    public function run()
    {
        // Dodavanje podataka u tabelu teams
        DB::table('teams')->insert([
            [
                'name' => 'Atlanta Hawks',
                'federal_state' => 'Georgia',
                'value' => 1800000000.00,
                'owner' => 'Tony Ressler',
                'nba_titles' => 1,
                'position_2024' => 7,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Philadelphia 76ers',
                'federal_state' => 'Pennsylvania',
                'value' => 2500000000.00,
                'owner' => 'Josh Harris',
                'nba_titles' => 3,
                'position_2024' => 8,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Phoenix Suns',
                'federal_state' => 'Arizona',
                'value' => 2100000000.00,
                'owner' => 'Mat Ishbia',
                'nba_titles' => 0,
                'position_2024' => 9,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Charlotte Hornets',
                'federal_state' => 'North Carolina',
                'value' => 1600000000.00,
                'owner' => 'Michael Jordan',
                'nba_titles' => 0,
                'position_2024' => 10,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
