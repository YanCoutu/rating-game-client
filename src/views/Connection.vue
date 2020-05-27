<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="4" offset="4" align-self="center">
                    <v-text-field v-model="name" label="Nom"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col height="100%" cols="4" offset="2" align-self="center">
                    <v-card height="100%">
                        <v-card-title>
                            Nouvelle partie
                        </v-card-title>
                        <v-card-actions>
                            <v-btn color="primary" @click="create" :disabled="name.length === 0">Créer</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="4" offset="2" align-self="center">
                    <v-card>
                        <v-card-title>
                            Rejoindre une partie
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="gameId" label="ID de la partie" maxlength="4"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="join" :disabled="name.length === 0 || gameId.length !== 4">Rejoindre</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="toast">{{ error }}</v-snackbar>
    </v-content>
</template>

<script lang="ts">

    import Vue from "vue";
    import {sendMessage} from "@/business/helper";

    export default Vue.extend({
        name: 'Connection',

        data: () => ({
            name: '',
            gameId: '',
            socket: null,
            toast: false,
            error: ''
        }),
        methods: {
            join: function () {
                sendMessage(this.socket, 'join', {name: this.name, gameId: this.gameId});
            },
            create: function () {
                sendMessage(this.socket, 'create', {name: this.name});
            },
        },
        created() {
            this.name = this.$store.state.name ?? '';
            this.socket = new WebSocket(`${process.env.VUE_APP_WS_URI}/`);

            if (this.socket === null) {
                // Warn
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            this.socket.onmessage = function (e) {
                const data = JSON.parse(e.data);
                console.log(data);
                switch (data.action) {
                    case 'join':
                    case 'create':
                        self.$store.commit('setName', self.name);
                        self.$router.push(`/game/${data.data.gameId}/`);
                        break;
                    case 'error':
                        self.error = data.data.message;
                        self.toast = true;
                        break;
                    default:
                        break;
                }
            }
        }
    })
</script>

<style scoped>

</style>