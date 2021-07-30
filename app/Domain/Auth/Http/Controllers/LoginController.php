<?php

namespace App\Domain\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
  public function edit(): \Inertia\Response
  {

    return Inertia::render("Auth::Login");
  }

  public function authenticate(Request $request): RedirectResponse
  {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();

      return redirect()->intended('/');
    }

    return back()->withErrors([
      'email' => 'The provided credentials do not match our records.',
    ]);
  }
}
