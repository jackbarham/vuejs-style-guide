<template>
    <div :class="{ open: show, dropdown: !dropup, dropup: dropup}">
        <button
            class="dropdown-button"
            aria-expanded="{{show}}"
            @click="toggle($event)"
            :disabled="disabled">
            <span v-html="text" v-show="text"></span>
            <span class="dropdown-caret"><i class="icon-down"></i></span>
        </button>
        <ul id="testy" class="dropdown-menu">
            <li @click="clicked" class="dropdown-item">Somewhere here</li>
            <li @click="clicked" class="dropdown-item">Another page link</li>
        </ul>
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
                this.show = !this.show
                if (this.show) {
                    this.$dispatch('shown::dropdown')
                    e.stopPropagation()
                } else {
                    this.$dispatch('hidden::dropdown')
                }
            },
            clicked() {
                this.show = false
            }
        },

        events: {
            'hide::dropdown'() {
                this.show = false
            }
        }
    }
</script>