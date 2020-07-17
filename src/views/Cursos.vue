<template>
  <div>
    <div class="page-title">Cursos</div>

    <Loading v-if="loading" />

    <div v-else>{{ cursos }}</div>
  </div>
</template>

<script>
import getDataFromApi from '@/mixins/getDataFromApi';

export default {
  name: 'Contato',
  mixins: [getDataFromApi],

  data: () => ({
    cursos: {},
    loading: true,
  }),

  created() {
    this.getDataFromApi('/cursos').then(data => {
      this.cursos = data;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.page-title {
  font-size: 20px;
  font-weight: bold;
  color: #234;
}
</style>
