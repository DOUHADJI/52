<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    //

    public function create (Request $request) {
        
         $request -> validate([
            "nom" => "required",
            "prenoms" => "required",
            "pseudo" => "required",
            "email" => "required|email",
            "mot_de_passe" => ['required', Password::min(8)->mixedCase()],
        ]);

        $user_email_already_exits = User::where('email', $request -> email) -> first();
        $user_pseudo_already_exits = User::where('pseudo', $request -> pseudo) -> first();

      

        if($user_email_already_exits){

            $error =  [
                'email' => "Cet email existe déjà"
            ];
               
    
            return response() -> json([
                "status" => "success",
                "errors" =>  $error
            ]);
        }

        if($user_pseudo_already_exits){

            $error =  [
                'pseudo' => "Le pseudo existe déjà"
            ];
               
    
            return response() -> json([
                "status" => "success",
                "errors" =>  $error
            ]);
        }

        $user = User::create([
            "nom" => $request -> nom,
            "prenoms" => $request -> prenoms,
            "pseudo" => $request -> pseudo,
            "bourse" => $request -> bourse,
            "email" => $request -> email,
            "password" => Hash::make($request -> mot_de_passe)
            
        ]);

        Auth::login($user);

        return response() -> json([
            "status" => "success",
            "message" => "Inscription réussie",
            "user" => Auth::user()
        ],200);
    }

    public function login (Request $request) {

        $credentials = $request->validate([
            'email' =>  "required|email",
            'password' => 'required',
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response()->json([
                "status" => "success",
                "message" => "connecté avec success",
                "user" => Auth::user()
            ]);
        }
 
        return response()->json([
            "status" => "success",
            "errors" => [
                "message" => "Oups! les identifiants sont incorrects",
               
            ]
        ]);



    }

    public function show () {

        if(Auth::check()){
            return response() ->json([
                "status" => "success",
                "message" => "user is   connected",
                "user"=> Auth::user()

            ], 200);
        }


       return response() -> json([
            "status" => "success",
            "message" => "user is not conected" ,
       ],200);
    }


    
    public function logout (Request $request) {
        Auth::logout();
 
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();

        return response() -> json([
            "status" => "success",
            "message" => "déconnexion réussie"
        ]);
     
    }
}

