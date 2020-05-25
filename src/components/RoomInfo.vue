<template>
    <v-card>
        <v-card-title>ID de la partie : {{ gameId }}</v-card-title>
        <v-card-text>
            <v-list subheader>
                <v-subheader>Joueurs</v-subheader>
                <v-list-item
                        v-for="(player, i) in players"
                        :key="i"
                        disabled
                >
                    <v-list-item-icon>
                        <v-icon v-if="player === leader" color="orange">mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="player"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="state === 'waiting_room' && name === leader" @click="start">
                    <v-list-item-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title >Commencer</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'RoomInfo',
        props: {
            gameId: {
                required: true,
                type: String,
                default: '',
            },
            players: {
                required: true,
                type: Array,
                default: () => [],
            },
            leader: {
                required: true,
                type: String,
                default: '',
            },
            name: {
                required: true,
                type: String,
                default: '',
            },
            state: {
                required: true,
                type: String,
                default: '',
            },
        },
        methods: {
            start: function () {
                this.$emit('start-game');
            }
        }
    })
</script>

<style scoped>

</style>