<template>
    <v-simple-table v-if="!isObjectEmpty(answers) && !isObjectEmpty(guesses)">
        <thead>
        <tr>
            <th></th>
            <th
                    v-for="player in players"
                    :key="player"
            >{{ player }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="line in players"
                :key="line"
        >
            <td>
                <v-card>
                    <v-card-title>{{ line }}</v-card-title>
                    <v-list>
                        <v-list-item
                                v-for="prompt in answers[line]"
                                :key="prompt"
                        >
                            {{ prompt }}
                        </v-list-item>
                    </v-list>
                </v-card>
            </td>
            <td
                    v-for="column in players"
                    :key="column"
            >
                <v-list v-if="column !== line">
                    <v-list-item
                            v-for="prompt in guesses[column][line]"
                            :key="prompt"
                    >
                        {{ prompt }}
                    </v-list-item>
                </v-list>
            </td>
        </tr>
        </tbody>
    </v-simple-table>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Answers',
        props: {
            answers: {
                required: true,
                type: Object,
                default: () => ({})
            },
            players: {
                required: true,
                type: Array,
                default: () => ([])
            },
            guesses: {
                required: true,
                type: Object,
                default: () => ({})
            },
        },
        methods: {
            isObjectEmpty: function (o) {
                return Object.entries(o).length === 0;
            }
        }
    })
</script>

<style scoped>

</style>