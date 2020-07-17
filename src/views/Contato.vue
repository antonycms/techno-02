<template>
  <div>
    <div class="page-title">Contato</div>

    <Loading v-if="loading" />

    <div v-else>{{ contato }}</div>
  </div>
</template>

<script>
import getDataFromApi from '@/mixins/getDataFromApi';
export default {
  name: 'Contato',
  mixins: [getDataFromApi],

  data: () => ({
    contato: {},
    loading: true,
  }),

  created() {
    this.getDataFromApi('/contato').then(data => {
      this.contato = data;
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
