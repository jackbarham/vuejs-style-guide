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

<click type="general" position="left" @click="showModalFull = true">Full page modal</click>
<modal-full :show.sync="showModalFull">
    <div slot="header">
        <h3>Some title</h3>
        <p class="t-descrete">carlcox.vibecast.com/page/item-name</p>
    </div>
    <div slot="content">
        <p>General text and form content. Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</modal-full>

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