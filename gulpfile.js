var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

config.assetsPath = 'src';

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('main.js');
});