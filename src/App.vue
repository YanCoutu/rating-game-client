<template>
  <v-app>
    <v-content>
      <page></page>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from './components/Page.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Page,
  },

  data: () => ({
    //
  }),
});
</script>
