<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios';
window.axios = axios;
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>