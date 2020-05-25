<template>
    <draggable tag="v-list" v-model="list" v-bind="dragOptions"
               @start="drag = true" @end="drag = false" @change="$emit('input', list)">
        <transition-group  type="transition" :name="!drag ? 'flip-list' : null">
            <v-list-item v-for="(item, i) in list" :key="i">
                <v-list-item-content>
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </transition-group>
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
                required: true,
                type: Array,
                default: () => ([])
            }
        },
        data: () => ({
            list: []
        }),
        computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            }
        },
        watch: {
            value(v) {
                this.list = v
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