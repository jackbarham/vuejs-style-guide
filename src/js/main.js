var Vue = require('vue');

import Button from './components/Button.vue';
import Divider from './components/Divider.vue';
import Dropdown from './components/Dropdown.vue';
import Editor from './components/Editor.vue';
import Flyout from './components/Flyout.vue';
import FormCheckbox from './components/FormCheckbox.vue';
import FormInput from './components/FormInput.vue';
import FormSelect from './components/FormSelect.vue';
import ModalAlert from './components/ModalAlert.vue';
import ModalFull from './components/ModalFull.vue';
import Multiple from './components/Multiple.vue';
import SortGrid from './components/SortGrid.vue';
import SortList from './components/SortList.vue';
import UploadImage from './components/UploadImage.vue';
import Visibility from './components/Visibility.vue';

new Vue({
    el: '#app',
    components: {
        'click': Button,
        'divide': Divider,
        'dropdown': Dropdown,
        'editor': Editor,
        'flyout': Flyout,
        'form-checkbox': FormCheckbox,
        'form-input': FormInput,
        'form-select': FormSelect,
        'modal-alert': ModalAlert,
        'modal-full': ModalFull,
        'multiple': Multiple,
        'sort-grid': SortGrid,
        'sort-list': SortList,
        'upload-image': UploadImage,
        'visibility': Visibility,
    },
    data: {
        showModalAlert: false,
        showModalFull: false,
    },
    methods: {
        closeDropdownsAndPopovers() {
            this.$broadcast('hide::dropdown')
        }
    }
});