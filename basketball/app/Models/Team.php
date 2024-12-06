<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'teams';

    // Definišite sve atribute koje možete masovno dodeliti
    protected $fillable = [
        'name',
        'federal_state',
        'value',
        'owner',
        'nba_titles',
        'position_2024'
    ];

    // Definišite odnos sa Player modelom
    public function players()
    {
        return $this->hasMany(Player::class, 'team', 'name');
    }
}
