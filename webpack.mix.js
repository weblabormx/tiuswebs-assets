let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
    .setPublicPath('dist')
    .js([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'src/js/web.js'
    ], 'js/web.js')
    .sass('src/sass/web.scss', 'css/')
    .tailwind()
    .sourceMaps()
    .version()
