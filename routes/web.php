<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('homejimm');
});
Route::get( '/{path?}', function(){
    return view('homejimm');
})->where('path', '.*');
// Route::get('/', function () {
//     return view('homejimm');
// });