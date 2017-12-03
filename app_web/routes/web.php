<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");    
    header('Access-Control-Allow-Credentials: true');    
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))       
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))       
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");    
    exit(0);}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('send', 'EmailController@send');
Route::get('projects', 'Testcontroller@project');
Route::get('skills', 'Testcontroller@skill');
Route::get('abouts', 'Testcontroller@about');
Route::get('education', 'Testcontroller@education');

// Admin Interface Routes
Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function()
             {
    // Backpack\CRUD: Define the resources for the entities you want to CRUD.
    CRUD::resource('about', 'Admin\AboutCrudController');
    CRUD::resource('education', 'Admin\EducationCrudController');

    CRUD::resource('project', 'Admin\ProjectCrudController');
    CRUD::resource('skill', 'Admin\SkillCrudController');






    // [...] other routes
});