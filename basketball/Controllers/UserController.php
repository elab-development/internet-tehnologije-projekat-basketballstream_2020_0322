<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    // Metod za dodelu admin role korisniku
    public function assignAdminRole($userId)
    {
        // Pronađi korisnika prema ID-u
        $user = User::find(1);

        // Pronađi rolu admina prema imenu
        $adminRole = Role::where('name', 'admin')->first();

        // Poveži korisnika sa admin rolu
        $user->roles()->attach($adminRole->id);

        return response()->json(['message' => 'Korisnik je sada admin!']);
    }
   
    public function showWelcomePage()
{
    $userId = 1; // Zamenite ovo sa stvarnim ID-jem korisnika

    // Proverava da li korisnik ima rolu 'admin'
    $isAdmin = DB::table('role_user')
        ->join('roles', 'role_user.role_id', '=', 'roles.id')
        ->where('role_user.user_id', $userId)
        ->where('roles.name', 'admin')
        ->exists();

    // Pretpostavljamo da postoji neki način za dobavljanje korisnika
    $user = DB::table('users')->where('id', $userId)->first();

    return view('welcome', [
        'user' => $user,
        'is_admin' => $isAdmin,
    ]);
}


}
