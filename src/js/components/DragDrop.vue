<template>
    <ul id="sort" class="sort cf">
        <li class="sort-item {{ list.order }}" v-for="item in list">{{ item.name }} ({{ item.order}})</li>
    </ul>
    <pre>{{ $data | json}}</pre>
</template>

<script>
    export default {

        data() {
            return {
                list: [
                    {name: 'Item 1', id: 1, order: 0},
                    {name: 'Item 2', id: 2, order: 1},
                    {name: 'Item 3', id: 3, order: 2},
                    {name: 'Item 4', id: 4, order: 3},
                    {name: 'Item 5', id: 5, order: 4},
                    {name: 'Item 6', id: 5, order: 5},
                ],
            }
        },

        ready() {
            var vm = this;
            Sortable.create(document.getElementById('sort'), {
                draggable: 'li.sort-item',
                ghostClass: "sort-ghost",
                animation: 80,
                onUpdate: function (evt) {
                    vm.reorder(evt.oldIndex, evt.newIndex);
                }
            });
        },

        methods: {
            reorder(oldIndex, newIndex) {
                this.list.splice(newIndex, 0, this.list.splice(oldIndex, 1)[0]);
                this.list.forEach(function(item, index){
                    item.order = index;
                });
            }
        }

    };
</script>