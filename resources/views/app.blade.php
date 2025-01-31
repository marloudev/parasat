<!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title inertia>{{ config('app.name', 'Laravel') }}</title>

            <link rel="preconnect" href="https://fonts.bunny.net">
            <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
            <link rel="icon" href="/images/logoIT.png" type="image/x-icon">
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
            @routes
            @viteReactRefresh
            @vite(['resources/js/app.jsx', "resources/js/app/pages/{$page['component']}.jsx"])
            @inertiaHead
        </head>

        <body class="font-sans antialiased bg-slate-200">
            @inertia
        </body>

</html>