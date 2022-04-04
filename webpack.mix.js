let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
    .setPublicPath('dist')
    .js('src/js/web.js', 'js/web.js')
    .sass('src/sass/web.scss', 'css/')
    .tailwind()
    .sourceMaps()
    .version()
