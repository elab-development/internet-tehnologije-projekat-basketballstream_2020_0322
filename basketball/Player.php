<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    
    protected $table = 'players';
    protected $fillable = [
        'name',
        'points',
        'assists',
        'rebounds',
        'three_pt',
        'two_pt',
        'team'
    ];

    public function team()
    {
        return $this->belongsTo(Team::class, 'team', 'name');
    }
}
