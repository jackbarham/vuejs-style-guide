var Vue = require('vue');

import Top from './components/Top.vue';
import Typography from './components/Typography.vue';
import Button from './components/Button.vue';

new Vue({
    el: '#app',

    components: { Top, Typography, Button },

    ready() {
        // alert('Vue and Vueify all set to go!');
    }
});