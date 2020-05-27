<template>
    <div>
        <room-info :game-id="gameId" :players="players" :leader="leader" :name="name" :state="state"
                   @start-game="startGame"></room-info>
        <v-content>
            <div>
                <div v-show="state === 'waiting_room'">Règles du jeu</div>
                <prompts-write v-show="state === 'writing_prompt'" @submit-prompts="submitPrompts"></prompts-write>
                <rate-self v-show="state === 'rating_prompts'" :prompts="prompts"
                           @submit-rating="submitRating"></rate-self>
                <guess v-show="state === 'guessing'" :guesses="guesses" :name="name"
                       @submit-guesses="submitGuesses"></guess>
                <answers v-show="state === 'answers'" :answers="answers" :guesses="allGuesses"
                         :players="players"></answers>
                <div v-show="state === 'waiting_prompts' || state === 'waiting_rates' || state === 'waiting_guesses'">
                    En attente...
                </div>
            </div>
        </v-content>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {sendMessage} from "@/business/helper";
    import RoomInfo from "@/components/RoomInfo.vue";
    import PromptsWrite from "@/components/PromptsWrite.vue";
    import RateSelf from "@/components/RateSelf.vue";
    import Guess from "@/components/Guess.vue";
    import Answers from "@/components/Answers.vue";

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
        },
        data: () => ({
            name: '',
            toast: false,
            error: '',
            socket: null,
            players: [] as string[],
            leader: '',
            state: 'waiting_room',
            prompts: [],
            guesses: {},
            allGuesses: {},
            answers: {},
        }),
        methods: {
            updateGame: function (data: { game_id: string; players: string; leader: string }) {
                this.gameId = data.game_id;
                this.players = data.players;
                this.leader = data.leader;
            },
            startGame: function () {
                sendMessage(this.socket, 'start', {})
            },
            submitPrompts: function (e) {
                this.state = 'waiting_prompts';
                sendMessage(this.socket, 'prompt', {prompts: e})
            },
            submitRating: function (e) {
                this.state = 'waiting_rates';
                sendMessage(this.socket, 'rated', {prompts: e})
            },
            submitGuesses: function (e) {
                this.state = 'waiting_guesses';
                sendMessage(this.socket, 'guessed', {guesses: e})
            }
        },
        created() {
            this.socket = new WebSocket(`${process.env.VUE_APP_WS_URI}/game/${this.gameId}`);
            this.name = this.$store.state.name ?? '';
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            this.socket.onmessage = function (e) {
                const data = JSON.parse(e.data);
                console.log(data);
                switch (data.action) {
                    case 'update_room':
                        if (self.state === 'waiting_room') {
                            self.updateGame(data.data);
                        }
                        break;
                    case 'start':
                        if (self.state === 'waiting_room') {
                            self.state = 'writing_prompt';
                        }
                        break;
                    case 'start_rating':
                        if (self.state === 'waiting_prompts') {
                            self.prompts = data.data.prompts;
                            self.state = 'rating_prompts';
                        }
                        break;
                    case 'guess':
                        if (self.state === 'waiting_rates') {
                            self.guesses = data.data.guesses;
                            self.state = 'guessing';
                        }
                        break;
                    case 'show':
                        if (self.state === 'waiting_guesses') {
                            self.answers = data.data.answers;
                            self.allGuesses = data.data.guesses;
                            self.state = 'answers';
                        }
                        break;
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