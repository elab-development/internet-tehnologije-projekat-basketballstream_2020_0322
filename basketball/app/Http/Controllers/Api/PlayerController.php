<?php

namespace App\Http\Controllers\Api;

use App\Models\Player;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class PlayerController extends Controller
{
    public function index(){
        $players = Player::all();
        
        if($players->count()>0){

        return response()->json([
            'status'=>200,
            'players'=>$players
        ],200);
    }
        else{
            return response()->json([
                'status'=>404,
                'message'=>"No records found"
            ],404);
        }

}

    public function score(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:191',
            'points' => 'required|numeric',
            'asists' => 'required|numeric',
            'rebounds' => 'required|numeric',
            'three_pt' => 'required|numeric',
            'two_pt' => 'required|numeric',
            'team' => 'required|string'
        ]);

        if($validator->fails()){
             
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ],422);
        }
        else {
            $players = Player::create([
              'name'=>$request->name,
              'points'=>$request->points,
              'asists'=>$request->asists,
              'rebounds'=>$request->rebounds,
              'three_pt'=>$request->three_pt,
              'two_pt'=>$request->two_pt,
              'team'=>$request->team
            ]);

            if($players){


               return response()->json([
                'status'=>200,
                'message' => "Player created Succesfully!"
               ],200); 
            }
            else{
                return response()->json([
                    'status'=>500,
                    'message' => "Something Went Wrong!"
                   ],500); 

            }
        }

    }

    public function show($id){
        $players = Player::find($id);
        if($players){
            return response()->json([
                'status'=>200,
                'player' => $players],200);

        }
        else{
            return response()->json([
                'status'=>404,
                'message' => "No player was found with this id!"
               ],404);  
        }
    }

    public function edit($id){
        $players = Player::find($id);
        if($players){
            return response()->json([
                'status'=>200,
                'player' => $players],200);

        }
        else{
            return response()->json([
                'status'=>404,
                'message' => "No player was found with this id!"
               ],404);  
        }

    }

    public function update(Request $request,int $id){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:191',
            'points' => 'required|numeric',
            'asists' => 'required|numeric',
            'rebounds' => 'required|numeric',
            'three_pt' => 'required|numeric',
            'two_pt' => 'required|numeric',
            'team' => 'required|string'
        ]);

        if($validator->fails()){
             
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ],422);
        }
        else {

            $players = Player::find($id);
            
            if($players){
                $players ->update([
                    'name'=>$request->name,
                    'points'=>$request->points,
                    'asists'=>$request->asists,
                    'rebounds'=>$request->rebounds,
                    'three_pt'=>$request->three_pt,
                    'two_pt'=>$request->two_pt,
                    'team'=>$request->team
                  ]);
      

               return response()->json([
                'status'=>200,
                'message' => "Player Updated Succesfully!"
               ],200); 
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message' => "No such player found!"
                   ],404); 

            }
        }
    }

    public function destroy($id){
            $players = Player::find($id);
            if($players){
                $players->delete();

                return response()->json([
                    'status'=>200,
                    'message' => "Player Deleted Succesfully!"
                   ],200); 
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message' => "No such player found!"
                   ],404);   
            }
    }

    public function showName($name){
        $players = Player::find($name);
        if($players){
            return response()->json([
                'status'=>200,
                'player' => $players],200);

        }
        else{
            return response()->json([
                'status'=>404,
                'message' => "No player was found with this name!"
               ],404);  
        }
    }


}

