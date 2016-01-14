<template>
    <hr :class="devideType">
</template>

<script>
    export default {

        props: ['type'],

        computed: {
            devideType() {
                var type = this.type;
                return {
                    'divider': true,
                    'wide': type == 'wide',
                    'narrow': type == 'narrow'
                }
            }
        }

    };
</script>