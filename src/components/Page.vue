<template>
    <div>
        <connect v-show="state === 'joining'" @join-game="joinGame" @create-game="createGame"></connect>
        <game v-show="state !== 'joining'"
              :game-id="gameId"
              :players="players"
              :leader="leader"
              :name="name"
              :state="state"
              :prompts="prompts"
              :guesses="guesses"
              :all-guesses="allGuesses"
              :answers="answers"
              @start-game="startGame"
              @submit-prompts="submitPrompts"
              @submit-rating="submitRating"
              @submit-guesses="submitGuesses"
        ></game>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Connect from './Connect.vue';
    import Game from './Game.vue';

    export default Vue.extend({
        name: 'Page',
        components: {
            Connect,
            Game,
        },

        data: () => ({
            state: 'joining',
            socket: null as WebSocket | null,
            name: '',
            gameId: '',
            players: [] as string[],
            leader: '',
            prompts: [],
            guesses: {},
            allGuesses: {},
            answers: {},
        }),
        methods: {
            sendMessage: function (action: string, data: object) {
                if (this.socket !== null) {
                    console.log('send data');
                    this.socket.send(JSON.stringify({action, data}));
                } else {
                    console.log('No socket');
                }
            },
            joinGame: function (name: string, gameId: string) {
                this.name = name;
                this.sendMessage('join', {name, gameId: gameId});
            },
            createGame: function (name: string) {
                this.name = name;
                this.sendMessage('create', {name});
            },
            updateGame: function (data: { game_id: string; players: string; leader: string }) {
                this.gameId = data.game_id;
                this.players = data.players;
                this.leader = data.leader;
            },
            startGame: function() {
                this.sendMessage('start', {})
            },
            submitPrompts: function (e) {
                this.state = 'waiting_prompts';
                this.sendMessage('prompt', {prompts: e})
            },
            submitRating: function (e) {
                this.state = 'waiting_rates';
                this.sendMessage('rated', {prompts: e})
            },
            submitGuesses: function (e) {
                this.state = 'waiting_guesses';
                this.sendMessage('guessed', {guesses: e})
            }
        },
        created: function () {
            console.log('created');
            this.socket = new WebSocket('wss://blooming-brook-70135.herokuapp.com');

            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            this.socket.onmessage = function (e) {
                const data = JSON.parse(e.data);
                console.log(data);
                switch (data.action) {
                    case 'update_room':
                        if (self.state === 'joining' || self.state === 'waiting_room') {
                            self.state = 'waiting_room';
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
                    default:
                        break;
                }
            }
        }
    })
</script>
