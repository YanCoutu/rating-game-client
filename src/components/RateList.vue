<template>
    <draggable tag="v-list" :list="list" @change="$emit('input', list)">
        <v-list-item v-for="item in list" :key="item">
            <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </draggable>
</template>

<script lang="ts">
    import Vue from 'vue'
    import draggable from 'vuedraggable';

    export default Vue.extend({
        name: 'RateList',
        components: {
            draggable,
        },
        props: {
            value: {
                required: false,
                type: Array,
                default: () => ([])
            }
        },
        data: () => ({
            list: [],
        }),
        watch: {
            value: {
                handler(v) {
                    this.list = v
                },
                immediate: true
            }
        }
    })
</script>

<style>
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }
</style>