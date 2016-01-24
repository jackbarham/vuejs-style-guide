<template>
    <div :class="{ open: show, dropdown: !dropup, dropup: dropup}">
        <span
            aria-expanded="{{show}}"
            @click="toggle($event)">
            <span class="dropdown-settings"><i class="icon-settings"></i></span>
        </span>
        <ul class="dropdown-flyout dropdown-arrow" @click.stop>
            <slot name="content"></slot>
            <button class="button button-general" @click="toggle($event)">Update</button>
        </ul>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                show: false,
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
            }
        },
        events: {
            'hide::dropdown'() {
                this.show = false
            }
        }

    }
</script>