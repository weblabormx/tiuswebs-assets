let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.setPublicPath('dist')
    .tailwind('./print.config.js')
    .sass('src/sass/tailwind.scss', 'css/print.css')
    .after(() => {
        const fs = require('fs');
        const path = `${__dirname}/dist/css/print.css`;
        const content = fs.readFileSync(path, 'utf8');

        fs.writeFileSync(path, content.slice(content.indexOf('@media print')));
    });
