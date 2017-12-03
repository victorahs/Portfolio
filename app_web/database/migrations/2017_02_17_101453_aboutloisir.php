<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Aboutloisir extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('abouts', function (Blueprint $table) {
      
        $table->string('loisirs', 100);
});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
                Schema::table('skills', function (Blueprint $table) {
      
                $table->dropColumn('loisirs');
});
    }
}