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
    return view('index');
});

Route::get('/criar', function () {
    return view('criar');
});

Route::get('/menu-inicial', function () {
    return view('menu-inicial');
});

Route::get('/cadastro', function () {
    return view('cadastro');
});