<template>
    <div>
        <h1>{{ name }}</h1>
        <h1>{{ gameId }}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {sendMessage} from "@/business/helper";

    export default Vue.extend({
        name: 'Game',
        props: {
            gameId: {
                required: true,
                type: String,
                default: '',
            },
        },
        data: () => ({
            name: '',
            toast: false,
            error: '',
            socket: null,
        }),
        methods: {},
        created() {
            this.socket = new WebSocket(`${process.env.VUE_APP_WS_URI}/game/${this.gameId}`);
            this.name = this.$store.state.name ?? '';
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            this.socket.onmessage = function (e) {
                const data = JSON.parse(e.data);
                console.log(data);
                switch (data.action) {
                    case 'error':
                        self.error = data.data.message;
                        self.toast = true;
                        break;
                    default:
                        break;
                }
            };
            this.socket.onopen = function () {
                const name = self.$store.state.name;
                if (name !== '') {
                    sendMessage(self.socket, 'name', {name})
                }
            };
        },
    })
</script>

<style scoped>

</style>