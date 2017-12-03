<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Testcontroller extends Controller
{
    //
    public function project()
    {

        $projects = \App\Models\Project::all();

        return response()->json($projects);

    }
    public function skill()
    {

        $skills = \App\Models\Skill::all();

        return response()->json($skills);

    }

    public function about()
    {

        $about = \App\Models\About::all();

        return response()->json($about);

    }
    public function education(){
        $education = $about = \App\Models\Education::all();
        return response()->json($education);

    }



}