<template>
    <div>
        <room-info :game-id="gameId" :players="players" :leader="leader" :name="name" :state="state"
                   @start-game="start"></room-info>
        <div>
            <prompts-write v-show="state === 'writing_prompt'" @submit-prompts="submitPrompts"></prompts-write>
            <rate-self v-show="state === 'rating_prompts'" :prompts="prompts" @submit-rating="submitRating"></rate-self>
            <guess v-show="state === 'guessing'" :guesses="guesses" :name="name" @submit-guesses="submitGuesses"></guess>
            <answers v-show="state === 'answers'" :answers="answers" :guesses="allGuesses" :players="players"></answers>
            <div v-show="state === 'waiting_prompts' || state === 'waiting_rates' || state === 'waiting_guesses'">
                En attente...
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RoomInfo from './RoomInfo.vue'
    import PromptsWrite from './PromptsWrite.vue'
    import RateSelf from './RateSelf.vue'
    import Guess from './Guess.vue'
    import Answers from './Answers.vue'


    export default Vue.extend({
        name: 'Game',
        components: {
            RoomInfo,
            PromptsWrite,
            RateSelf,
            Guess,
            Answers,
        },
        props: {
            gameId: {
                required: true,
                type: String,
                default: '',
            },
            players: {
                required: true,
                type: Array,
                default: () => ([]),
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
            prompts: {
                required: true,
                type: Array,
                default: () => ([]),
            },
            state: {
                required: true,
                type: String,
                default: '',
            },
            guesses: {
                required: true,
                type: Object,
                default: () => ({}),
            },
            allGuesses: {
                required: true,
                type: Object,
                default: () => ({}),
            },
            answers: {
                required: true,
                type: Object,
                default: () => ({}),
            },
        },
        methods: {
            start: function () {
                this.$emit('start-game');
            },
            submitPrompts: function (e) {
                this.$emit('submit-prompts', e);
            },
            submitRating: function (e) {
                this.$emit('submit-rating', e);
            },
            submitGuesses: function (e) {
                this.$emit('submit-guesses', e);
            }
        }
    })
</script>

<style scoped>

</style>