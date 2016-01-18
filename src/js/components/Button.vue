<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {

        props: ['type', 'position'],

        computed: {
            buttonClass() {
                var type = this.type;
                return {
                    'button': true,
                    'button-disabled': type == 'disabled',
                    'button-action': type == 'action',
                    'button-general': type == 'general',
                    'button-warning': type == 'warning',
                    'button-left': this.position == 'left',
                }
            }
        }

    };
</script>