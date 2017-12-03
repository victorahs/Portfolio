<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Dateeducation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
         Schema::table('education', function (Blueprint $table) {
      
                $table->date('date_begin')->nullable();
                $table->date('date_end')->nullable();
             
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
        Schema::table('education', function (Blueprint $table) {
      
                $table->dropColumn('date_begin');
                $table->dropColumn('date_end');
    });
}
}
