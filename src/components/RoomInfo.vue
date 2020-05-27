<template>
    <v-navigation-drawer
            app
            color="primary"
            :expand-on-hover="state !== 'waiting_room'"
            permanent
            dark
    >
        <v-list
                dense
                nav
        >
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>{{ name }}</v-list-item-title>
                    <v-list-item-subtitle>ID de la partie: {{ gameId }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

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
                    <v-list-item-title>Commencer</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
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