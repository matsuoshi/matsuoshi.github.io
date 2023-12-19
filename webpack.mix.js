const mix = require('laravel-mix');

mix.js('themes/monaural/src/scripts/app.js', 'themes/monaural/static/js')
  .sass('themes/monaural/src/styles/styles.scss', 'themes/monaural/static/css')
  .sass('src/styles/additional.scss', 'static/css');
