<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeId extends Migration
{  public function up()
    {
        $tables = [
        "abouts",
        
        "educations",
        "skills", 
        "portfolio_principals",
        "projects", 
        ];
        foreach ($tables as $key => $value) {
            # code...
            Schema::table($value, function (Blueprint $table) {
                $table->timestamps();
                $table->softDeletes();
            //
            });
        }
       
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $tables = [
        "abouts",
        
        "educations",
        "skills", 
        "portfolio_principals",
        "projects", 
        ];
        foreach ($tables as $key => $value) {
            # code...
            Schema::table($value, function (Blueprint $table) {
                $table->dropColumn('created_at');
                $table->dropColumn('updated_at');
                $table->dropColumn('deleted_at');
            //
            });
        }
    }
}

