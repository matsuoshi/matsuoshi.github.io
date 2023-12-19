const mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'static/js')
  .sass('src/styles/styles.scss', 'static/css');
