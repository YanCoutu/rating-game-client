<template>
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
                        <v-btn color="primary" @click="create">Créer</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4" offset="2" align-self="center">
                <v-card>
                    <v-card-title>
                        Rejoindre une partie
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="gameId" label="ID de la partie"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="join">Rejoindre</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Connect',

        data: () => ({
            name: '',
            gameId: ''
        }),

        methods: {
            join: function () {
                this.$emit('join-game', this.name, this.gameId);
            },
            create: function () {
                this.$emit('create-game', this.name);
            }
        }
    })
</script>

<style scoped>

</style>