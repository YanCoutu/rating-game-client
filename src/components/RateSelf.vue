<template>
    <div>
        <rate-list v-model="ordered"></rate-list>
        <v-btn @click="submit">Soumettre</v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RateList from "@/components/RateList.vue";

    export default Vue.extend({
        name: 'RateSelf',
        components: {
            RateList,
        },
        props: {
            prompts: {
                required: true,
                type: Array,
                default: () => ([])
            }
        },
        data: () => ({
            ordered: [],
        }),
        methods: {
            submit: function() {
                this.$emit('submit-rating', this.ordered);
            }
        },
        watch: {
            prompts(v) {
                this.ordered = v;
            }
        }
    })
</script>

<style scoped>

</style>