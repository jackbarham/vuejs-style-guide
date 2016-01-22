<template>
    <div class="form-item" :class="{open: show}">
        <label class="form-label">Select</label>
        <div class="form-select" @click="toggle($event)">
            {{ selected }}
            <span class="dropdown-caret"><i class="icon-down"></i></span>
        </div>
        <ul class="form-select-dropdown">
            <li v-for="option in options" @click="select(option)" class="dropdown-item">{{ option.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {

        props: ['label', 'value', 'placeholder'],

        data() {
            return {
                show: false,
                options: [
                    {name: 'Kings Cross', value: 'kings-cross'},
                    {name: 'Victoria', value: 'victoria'},
                    {name: 'Highbury & Islington', value: 'highbury-islington'},
                    {name: 'Dalston Junction', value: 'dalston-junction'},
                    {name: 'Barbican', value: 'barbican'},
                    {name: 'Brixton', value: 'brixton'},{name: 'Kings Cross', value: 'kings-cross'},
                    {name: 'Victoria', value: 'victoria'},
                    {name: 'Highbury & Islington', value: 'highbury-islington'},
                    {name: 'Dalston Junction', value: 'dalston-junction'},
                    {name: 'Barbican', value: 'barbican'},
                    {name: 'Brixton', value: 'brixton'},{name: 'Kings Cross', value: 'kings-cross'},
                    {name: 'Victoria', value: 'victoria'},
                    {name: 'Highbury & Islington', value: 'highbury-islington'},
                    {name: 'Dalston Junction', value: 'dalston-junction'},
                    {name: 'Barbican', value: 'barbican'},
                    {name: 'Brixton', value: 'brixton'},{name: 'Kings Cross', value: 'kings-cross'},
                    {name: 'Victoria', value: 'victoria'},
                    {name: 'Highbury & Islington', value: 'highbury-islington'},
                    {name: 'Dalston Junction', value: 'dalston-junction'},
                    {name: 'Barbican', value: 'barbican'},
                    {name: 'Brixton', value: 'brixton'},
                ],
                selected: 'Default',
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
            select(option) {
                this.show = false
                this.selected = option.name
                console.log('Value: ' + option.value)
            }
        },

        events: {
            'hide::dropdown'() {
                this.show = false
            }
        }

    };
</script>