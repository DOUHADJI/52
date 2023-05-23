<?php

namespace App\Http\Controllers;

use App\Models\Ludi;
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
            "ecole" => "required",
            "specialite" => "required"
        ]);

        $user_email_already_exits = User::where('email', $request -> email) -> first();
        $user_pseudo_already_exits = User::where('pseudo', $request -> pseudo) -> first();
        $ludi_name_already_exits = Ludi::where('nom', $request -> ecole) -> first();

      

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

        if($ludi_name_already_exits){

            $error =  [
                'ecole' => "Cet nom d'école existe déjà"
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
            "password" => Hash::make($request ->mot_de_passe)
            
        ]);

        Auth::login($user);

        $school = Ludi::create([
            "nom" => $request -> ecole,
            "specialite" => $request -> specialite,
            "user_id" => Auth::id()
        ]);

       

        return response() -> json([
            "status" => "success",
            "message" => "Inscription réussie",
            "user" => Auth::user(),
            "school" => $school
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
            "status" => "error",
            "errors" => [
                "message" => "Oups! les identifiants sont incorrects",
               
            ]
        ]);



    }

    public function show () {

        if(Auth::check()){
            return response() ->json([
                "status" => "success",
                "message" => "user is connected",
                "user"=> Auth::user()

            ], 200);
        }


       return response() -> json([
            "status" => "success",
            "message" => "user is not conected" ,
       ],200);
    }

    public function update (Request $request) {

        $request -> validate([
            "nom" => "required",
            "prenoms" => "required",
            "pseudo" => "required",
            "email" => "required|email",
            "mot_de_passe" => ['required', Password::min(8)->mixedCase()],
            "id" => "required"
      
        ]);

        $user_email_already_exits = User::where('email', $request -> email) ->where('id','!=', Auth::id()) -> first();
        $user_pseudo_already_exits = User::where('pseudo', $request -> pseudo) ->where('id','!=', Auth::id()) -> first();

      

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

        if (Auth::check()) {

            $check_if_user_password_is_correct = Hash::check($request->mot_de_passe, Auth::user()->password);

            if(!$check_if_user_password_is_correct){
                return response() ->json([
                    "status"=>"success",
                    "errors" =>[
                        "mot_de_passe" => "mot de passe incorrect"
                    ]
                ]);
            }
            
            $id=$request ->id;
            $user = User::findOrFail( $id);

            $user -> update([
                'nom' => $request -> nom,
                'prenoms' =>$request -> prenoms,
                'pseudo' => $request -> pseudo,
                'email' => $request -> email,
            ]);

            return response() -> json([
                "status" => "success",
                "message" => "Vos informations ont été mises à jour avec success",
                "user" => $user
                
            ],200);

        }

        return response() -> json([
            "status" => "success",
            "message" => "Oups! Une erreur s'est produite",
           
            
        ],200);

        
    }


    public function change_password (Request $request) {

        $request -> validate([
            "password"=> ['required', Password::min(8)->mixedCase()],
            "newPassword"=> ['required', Password::min(8)->mixedCase()],
            "newPassword_confirmation"=> ['required', Password::min(8)->mixedCase()],
            "id"=> $request->id
        ]);

        $check_if_user_password_is_correct = Hash::check($request->password, Auth::user()->password);

        if(!$check_if_user_password_is_correct){
            return response() ->json([
                "status"=>"success",
                "errors" =>[
                    "password" => "mot de passe incorrect"
                ]
            ]);
        }

         $user = User::whereId($request->id);

         $password = $request -> newPassword;

         $user ->update([
            "password" => Hash::make($password)
         ]);

         Auth::guard('web')->logout();
 
         $request->session()->invalidate();
  
         $request->session()->regenerateToken();


         return response() -> json([
            "status" => "success",
            "message" => "mot de passe changé avec success",
         ]);


    }


    
    public function logout (Request $request) {

        Auth::guard('web')->logout();
 
        $request->session()->invalidate();
 
        $request->session()->regenerateToken();
        
        return response() -> json([
            "status" => "success",
            "message" => "déconnexion réussie"
        ]);
     
    }
}

