var Vue = require('vue');

import button from './components/button.vue';
import divider from './components/divider.vue';
import dropdown from './components/dropdown.vue';
import header from './components/header.vue';
import input from './components/input.vue';
import typography from './components/typography.vue';

new Vue({
    el: '#app',
    components: {
        'v-button': button,
        'v-divide': divider,
        'v-drop': dropdown,
        'v-header': header,
        'v-input': input,
        'v-typography': typography
    }
});