<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {

        props: ['type'],

        computed: {
            buttonClass() {
                var type = this.type;
                return {
                    'button': true,
                    'button-disabled': type == 'disabled',
                    'button-action': type == 'action',
                    'button-general': type == 'general',
                    'button-warning': type == 'warning'
                }
            }
        }

    };
</script>