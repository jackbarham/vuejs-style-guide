<template>
    <div v-bind:class="{ open: show, dropdown: !dropup, dropup: dropup}">
        <button
            class="dropdown"
            aria-expanded="{{show}}"
            v-on:click="toggle($event)"
            :disabled="disabled">
            <span v-html="text" v-show="text"></span>
            <span class="caret"></span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                show: false
            }
        },

        props: {
            text: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },

        methods: {
            toggle(e) {
                // hide an alert
                this.show = !this.show
                // Dispatch an event from the current vm that propagates all the way up to its $root
                if (this.show) {
                    this.$dispatch('shown::dropdown')
                    e.stopPropagation()
                } else {
                    this.$dispatch('hidden::dropdown')
                }
            }
        },

        events: {
            'hide::dropdown'() {
                this.show = false
            }
        }
    }
</script>