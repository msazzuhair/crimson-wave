const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('src/css/app.css', 'dist/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);

mix.options({
    hmrOptions: {
        host: '192.168.1.40',
        port: 8080
    }
})