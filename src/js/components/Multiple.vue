<template>
    <div class="cf styleguide-one">
        <button class="button button-general">
            Do something
            <span v-if="remaining.length > 0">({{ remaining.length }})</span>
        </button>
    </div>
    <ul class="multiple">
        <li v-for="item in items" @click="checked(item)" class="multiple-item">
            <p>{{ item.title }}</p>
            <span class="multiple-check" :class="{'checked': item.selected}"><i class="icon-tick"></i></span>
        </li>
    </ul>
    <!--<pre>{{ $data | json }}</pre>-->
</template>

<script>
    export default {

        data() {
            return {
                items: [
                    {title: 'Lorem ipsum dolor sit amet consectetur', selected: true},
                    {title: 'Duis aute irure dolor in reprehenderit voluptate', selected: false},
                    {title: 'Excepteur sint occaecat cupidatat non proident', selected: false},
                ],
                filters: {
                    isSelected: function(item) {
                        return item.selected;
                    }
                }
            }
        },

        computed: {
            remaining() {
                return this.items.filter(this.filters.isSelected);
            }
        },

        methods: {
            checked(item) {
                item.selected = !item.selected;
            }
        },

    };
</script>