<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Phonecolumn extends Migration
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
      
                $table->string('numberPhone', 20);
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
                Schema::table('abouts', function (Blueprint $table) {
      
                $table->dropColumn('numberPhone');
});
    }
}