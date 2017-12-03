<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
    //
    public function send(){
        $post = file_get_contents("php://input");


        $request = json_decode($post);
        $GLOBALS['request']=$request;

       

        $title = $request->alldata->name.' '.$request->alldata->firstname." Vous a envoyé le message suivant: ";
        $content = $request->alldata->message;

        Mail::send('emails.send', ['title' => $title, 'content' => $content], function ($message)
                   {

            $message->from( $GLOBALS['request']->alldata->mail, $GLOBALS['request']->alldata->name.''.$GLOBALS['request']->alldata->firstname );

            $message->to('victor.ahsene@yahoo.fr');

        });

        return response()->json(['message' => 'Request completed']);

    }

}
