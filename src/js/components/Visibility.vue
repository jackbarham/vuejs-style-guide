<template>
    <div class="dropdown-right" :class="{open: show, dropdown: !dropup, dropup: dropup}">
        <button
            class="dropdown-button"
            aria-expanded="{{show}}"
            @click="toggle($event)"
            :disabled="disabled">
            <span class="dropdown-circle" :class="display"></span>
            <span>{{ display | capitalize }}</span>
            <span class="dropdown-caret"><i class="icon-down"></i></span>
        </button>
        <ul class="dropdown-menu">
            <li v-for="item in visibility" @click="changeVis(item)" class="dropdown-item">{{ item | capitalize }}</li>
        </ul>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                show: false,
                visibility: ['visible', 'hidden', 'preview', 'scheduled'],
                display: 'Dropdown select',
            }
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
            changeVis(item) {
                this.display = item
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