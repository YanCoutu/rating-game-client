<template>
    <div>
        <v-card
                v-for="playerName in otherPlayersGuesses"
                :key="playerName"
        >
            <v-card-title>
                {{ playerName }}
            </v-card-title>
            <rate-list v-model="orderedGuesses[playerName]"></rate-list>
        </v-card>
        <v-btn @click="submit">Soumettre</v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RateList from './RateList.vue'

    export default Vue.extend({
        name: 'Guess',
        components: {
            RateList,
        },
        props: {
            guesses: {
                required: true,
                type: Object,
                default: () => ({}),
            },
            name: {
                required: true,
                type: String,
                default: '',
            },
        },
        data: () => ({
            orderedGuesses: {}
        }),
        methods: {
            submit: function () {
                this.$emit('submit-guesses', this.orderedGuesses)
            }
        },
        computed: {
            otherPlayersGuesses() {
                return Object.keys(this.orderedGuesses).filter(x => x !== this.name)
            }
        },
        watch: {
            guesses(v) {
                this.orderedGuesses = v
            }
        }
    })
</script>

<style scoped>

</style>