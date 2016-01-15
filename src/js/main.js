var Vue = require('vue');

import Button from './components/Button.vue';
import Divider from './components/Divider.vue';
import Dropclick from './components/Dropclick.vue';
import Header from './components/Header.vue';
import FormInput from './components/FormInput.vue';
import UploadImage from './components/UploadImage.vue';

new Vue({
    el: '#app',
    components: {
        'click': Button,
        'divide': Divider,
        'drop-click': Dropclick,
        'layout-header': Header,
        'form-input': FormInput,
        'upload-image': UploadImage,
    }
});