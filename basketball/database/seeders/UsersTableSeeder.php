<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
{
    // Dodeli 'admin' rolama korisnicima
    $adminEmail='tijana.shojich.2001@gmail.com';
    User::where('email', $adminEmail)->update(['role_id' => 1]);

    // Dodeli 'user' rolama korisnicima
    User::where('email', '!=',$adminEmail)->update(['role_id' => 2]);

}

}
