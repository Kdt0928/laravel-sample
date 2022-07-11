<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class QuoteController extends Controller
{
    public function index(){
        Log::Info("初期処理");
        return view('quotes.index', ['quotes' => Quote::all()]);
    }

    public function download(Request $request){
        Log::Info($request->input('file_name'));
        return view('quotes.index', ['quotes' => Quote::all()]);
    }
}
