var Vue = require('vue');

import Button from './components/Button.vue';
import Divider from './components/Divider.vue';
import Dropdown from './components/Dropdown.vue';
import FormInput from './components/FormInput.vue';
import ModalSmall from './components/ModalSmall.vue';
import UploadImage from './components/UploadImage.vue';
import Visibility from './components/Visibility.vue';

new Vue({
    el: '#app',
    components: {
        'click': Button,
        'divide': Divider,
        'dropdown': Dropdown,
        'form-input': FormInput,
        'modal-small': ModalSmall,
        'upload-image': UploadImage,
        'visibility': Visibility,
    },
    data: {
        showModal: false
    }
});