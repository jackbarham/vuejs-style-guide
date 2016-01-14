<template>
    <div class="form-item" :class="{'form-error' : formError}">
        <label class="form-label" v-if="!formError">{{ label }}</label>
        <label class="form-label" v-if="formError">{{ message }}</label>
        <input class="form-input" type="{{ type }}" placeholder="{{ placeholder }}" value="{{ value }}">
    </div>
</template>

<script>
    export default {

        props: ['type', 'label', 'error', 'value', 'message', 'placeholder'],

        data() {
            return {
                formError: false,
                errorMessage: 'This is an error message'
            }
        },

        computed: {
            inputText() {
                return {
                    'label': this.label,
                    'error': this.error,
                    'type': this.type,
                    'value': this.value,
                    'message': this.messahe,
                    'placeholder': this.placeholder
                }
            },
            formError() {
                if (this.error === 'false') {
                    return false
                } else {
                    return true
                }
                console.log(this.error);
            }
        }

    };
</script>