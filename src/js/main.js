var Vue = require('vue');

import Top from './components/Top.vue';
import Typography from './components/Typography.vue';
import Button from './components/Button.vue';
import Divider from './components/Divider.vue';

new Vue({
    el: '#app',
    components: { Top, Typography, Button, Divider },
});