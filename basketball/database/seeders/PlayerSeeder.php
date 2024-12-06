<?php
//seeder for creating specific players,
//we dont want dummy variables here
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Player;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Kreiranje specifičnih igrača
        Player::create([
            'name' => 'LeBron James',
            'points' => 25.3,
            'assists' => 7.8,
            'rebounds' => 8.2,
            'three_pt' => 34.5,
            'two_pt' => 55.2,
            'team' => 'Lakers'
        ]);

        Player::create([
            'name' => 'Stephen Curry',
            'points' => 30.4,
            'assists' => 6.1,
            'rebounds' => 5.4,
            'three_pt' => 42.3,
            'two_pt' => 54.8,
            'team' => 'Warriors'
        ]);

        Player::create([
            'name' => 'Giannis Antetokounmpo',
            'points' => 28.9,
            'assists' => 5.9,
            'rebounds' => 11.7,
            'three_pt' => 31.7,
            'two_pt' => 58.2,
            'team' => 'Bucks'
        ]);
    }
}
