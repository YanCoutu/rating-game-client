<template>
    <div>
        <v-textarea
                v-model="prompt1"
                outlined
        ></v-textarea>
        <v-textarea
                v-model="prompt2"
                outlined
        ></v-textarea>
        <v-textarea
                v-model="prompt3"
                outlined
        ></v-textarea>
        <v-btn @click="submit">Soumettre</v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Game',
        data: () => ({
            prompt1: '',
            prompt2: '',
            prompt3: ''
        }),
        methods: {
            submit: function () {
                this.$emit('submit-prompts', [this.prompt1, this.prompt2, this.prompt3]);
            }
        }
    })
</script>

<style scoped>

</style>