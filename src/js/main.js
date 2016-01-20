var Vue = require('vue');

import Button from './components/Button.vue';
import Divider from './components/Divider.vue';
import DragDrop from './components/DragDrop.vue';
import Dropdown from './components/Dropdown.vue';
import FormCheckbox from './components/FormCheckbox.vue';
import FormInput from './components/FormInput.vue';
import FormSelect from './components/FormSelect.vue';
import ModalAlert from './components/ModalAlert.vue';
import ModalFull from './components/ModalFull.vue';
import UploadImage from './components/UploadImage.vue';
import Visibility from './components/Visibility.vue';

new Vue({
    el: '#app',
    components: {
        'click': Button,
        'divide': Divider,
        'dragdrop': DragDrop,
        'dropdown': Dropdown,
        'form-checkbox': FormCheckbox,
        'form-input': FormInput,
        'form-select': FormSelect,
        'modal-alert': ModalAlert,
        'modal-full': ModalFull,
        'upload-image': UploadImage,
        'visibility': Visibility,
    },
    data: {
        showModalAlert: false,
        showModalFull: false,
    }
});