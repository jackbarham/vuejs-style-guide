<template>
    <ul id="sort" class="sort row">
        <li class="sort-item cf row-item" v-for="item in list">
            <img :src="item.cover">
            <span class="row-title">{{ item.title }}</span>
            <span class="sort-drag">&equals;</span>
        </li>
    </ul>
</template>


<script>
    export default {

        data() {
            return {
                list: [
                    {title: 'Watergate Podcast #1 - Ruede Hagelstein', cover: 'https://i1.sndcdn.com/artworks-000122028568-i7ew3d-large.jpg', order: 0},
                    {title: 'Watergate Podcast #2 - Marco Resmann', cover: 'https://i1.sndcdn.com/artworks-000134001395-mrizt8-large.jpg', order: 1},
                    {title: 'Watergate Podcast #3 - La Fleur', cover: 'https://i1.sndcdn.com/artworks-000128161805-jks8np-large.jpg', order: 2},
                ],
            }
        },

        ready() {
            var vm = this;
            Sortable.create(document.getElementById('sort'), {
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


