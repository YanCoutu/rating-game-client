import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        name: '',
    },

    mutations: {
        setName(state, name: string) {
            state.name = name
        }
    },
    actions: {
        setName: function (context, name: string) {
            context.commit('setName', name);
        }
    }
});