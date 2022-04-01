let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
    .scripts([
        '/node_modules/jquery/dist/jquery.min.js',
        '/node_modules/bootstrap/dist/js/bootstrap.min.js',
        '/src/js/web.js'
    ], '/dist/js/web.js')
    .sass('/src/sass/web.scss', '/dist/css/')
    .tailwind()
    .version()
