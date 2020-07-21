<template>
  <div v-if="aula.id">{{ aula }}</div>
</template>

<script>
import getDataFromApi from '@/mixins/getDataFromApi';

export default {
  name: 'Aula',
  mixins: [getDataFromApi],

  props: {
    aulaID: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    aula: {},
  }),

  methods: {
    loadAulaDataFromApi(aulaID) {
      this.getDataFromApi(`/aula/${aulaID}`).then(data => {
        this.aula = data;
        this.loading = false;
      });
    },
  },

  created() {
    this.loadAulaDataFromApi(this.aulaID);
  },

  beforeRouteUpdate(to, from, next) {
    this.loadAulaDataFromApi(to.params.aulaID);
    next();
  },
};
</script>

<style scoped></style>
