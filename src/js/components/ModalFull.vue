<template>
    <div class="modal-full" v-show="show" transition="modal">
        <div class="modal-full-wrapper">
            <div class="modal-close" @click="show = false">
                <span></span>
                <span></span>
            </div>
            <slot name="header"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            show: {
                type: Boolean,
                required: true,
                twoWay: true
            }
        }

    };
</script>