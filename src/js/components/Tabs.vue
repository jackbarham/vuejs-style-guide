<template>
    <div class="tabs-header">
        <span :class="{'active': tabAccount}" @click="account">My Account</span>
        <span :class="{'active': tabPassword}" @click="password">Change Password</span>
        <span :class="{'active': tabDelete}" @click="delete">Delete Account</span>
    </div>
    <div class="tabs-content">
        <div v-if="tabAccount">
            <p>My account details</p>
        </div>
        <div v-if="tabPassword">
            <p>Update password</p>
        </div>
        <div v-if="tabDelete">
            <p>Click below to delete your account</p>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                tabAccount: true,
                tabPassword: false,
                tabDelete: false,
            }
        },

        methods: {
            account() {
                this.tabAccount = true
                this.tabPassword = false
                this.tabDelete = false
            },
            password() {
                this.tabAccount = false
                this.tabPassword = true
                this.tabDelete = false
            },
            delete() {
                this.tabAccount = false
                this.tabPassword = false
                this.tabDelete = true
            }
        }

    };
</script>