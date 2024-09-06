<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserCleanupSeeder extends Seeder
{
    public function run()
    {
        // Fetch the last 5 users ordered by their ID in descending order
        $users = User::orderBy('id', 'desc')->take(5)->get();

        // Delete the fetched users
        foreach ($users as $user) {
            $user->delete();
        }

        // Optionally, log the deleted users
        $this->command->info('Deleted users: ' . $users->pluck('id')->implode(', '));
    }
}
