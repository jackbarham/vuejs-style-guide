<template>
    <div class="modal-mask" v-show="show" transition="modal">

        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="t-header-sub" slot="header">{{ title }}</h3>
                    <div class="modal-close" @click="show = false">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="modal-body">
                    <slot name="content">default body</slot>
                </div>

                <div class="modal-footer cf">
                    <button class="button button-warning" @click="show = false">Confirm action</button>
                </div>
            </div>
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
            },
            title: {
                required: true,
            }
        }

    };
</script>