<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectBasedOnRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = $request->user();
        if ($account) {
            if ($account->user_type == 1) {
                return redirect('/administrator/dashboard');
            } else if ($account->user_type == 2) {
                return redirect('/techteam/request_item');
            } else if ($account->user_type == 3) {
                return redirect('/csr/applications');
            } else if ($account->user_type == 4) {
                return redirect('/inventorycustodian/inventory');
            }
        }
        return $next($request);
    }
}
