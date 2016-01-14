var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

config.assetsPath = 'src';

elixir(function(mix) {
    mix.copy('node_modules/bourbon/app/assets/stylesheets', 'src/sass/bourbon')
        .copy('src/html/*.html', 'public');
    mix.sass('app.scss');
    mix.browserify('main.js');
});