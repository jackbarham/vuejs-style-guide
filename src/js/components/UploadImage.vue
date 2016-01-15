<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {

        props: ['info'],

        computed: {
            buttonClass() {
                var type = this.type;
                return {
                    'button': true,
                    'disabled': type == 'disabled',
                    'action': type == 'action',
                    'general': type == 'general',
                    'warning': type == 'warning'
                }
            }
        }

    };
</script>