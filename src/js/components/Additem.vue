<template>
    <form class="add" @submit="additem">
        <div class="add-fields cf">
            <div class="form-item">
                <label class="form-label">Store name</label>
                <input class="form-input" v-model="store" type="text" placeholder="Beatport, iTunes, etc" />
            </div>
            <div class="form-item">
                <label class="form-label">Store link / URL</label>
                <input class="form-input" v-model="link" type="text" placeholder="http://tracksite.com/name-of-track" />
            </div>
        </div>
        <button type="submit" class="add-button" :class="{'active': isActive}">&plus;</button>
    </form>
    <ul class="add-list">
        <li v-for="item in items" class="cf">
            <span class="add-title">{{ item.store }}</span>
            <a :href="item.link" class="add-link" target="_blank">{{ item.link }}</a>
            <div class="modal-close add-remove" @click="remove(item)">
                <span></span>
                <span></span>
            </div>
        </li>
    </ul>
    <!--<pre>{{ $data | json }}</pre>-->
</template>

<script>
    export default {

        data() {
            return {
                items: [
                    {store: 'Beatport', link: 'https://pro.beatport.com/release/beautiful-heartbeat-feat-frida-sundemo/1684039'},
                    {store: 'Traxsource', link: 'http://www.traxsource.com/title/559964/birsk-kilian'},
                ],
                store: '',
                link: '',
            }
        },

        computed: {
            isActive() {
                if(this.store === '' && this.link === '') {
                    return false
                } else {
                    return true
                }
            }
        },

        methods: {
            additem(e) {
                e.preventDefault();

                this.items.push({
                    store: this.store,
                    link: this.link,
                });

                this.store = '';
                this.link = '';
            },
            remove(item) {
                this.items.$remove(item);
            }
        }

    };
</script>