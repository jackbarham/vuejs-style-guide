<template>
    <ul id="sort-grid" class="sort grid-3 cf">
        <li class="sort-item cf grid-item" v-for="item in list">
            <img :src="item.cover">
            <span class="grid-title">{{ item.title }}</span>
            <span class="grid-sub">{{ item.artist }}</span>
        </li>
    </ul>
</template>


<script>
    export default {

        data() {
            return {
                list: [
                    {title: 'Track title 1', artist: 'DJ Artist', cover: 'http://production-cdn.vibecast.com/1/releases/201508204034mdasfunbk5-art.jpg', order: 0},
                    {title: 'Track title 2', artist: 'DJ Artist', cover: 'http://production-cdn.vibecast.com/1/releases/201508204034mdasfunbk5-art.jpg', order: 1},
                    {title: 'Track title 3', artist: 'DJ Artist', cover: 'http://production-cdn.vibecast.com/1/releases/201508204034mdasfunbk5-art.jpg', order: 2},
                ],
            }
        },

        ready() {
            var vm = this;
            Sortable.create(document.getElementById('sort-grid'), {
                draggable: 'li.sort-item',
                ghostClass: 'sort-ghost',
                animation: 80,
                onUpdate(evt) {
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


