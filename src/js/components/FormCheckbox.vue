<template>
    <div class="form-item cf" :class="{'form-error' : formError}">
        <label class="form-checkbox t-label">
            {{ label }}
            <input type="checkbox" v-model="checked">
            <span class="form-checkbox-ghost"></span>
        </label>
    </div>
</template>

<script>
    export default {

        props: ['label'],

        data() {
            return {
                checked: false
            }
        }

    };
</script>