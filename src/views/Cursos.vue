<template>
  <div>
    <Loading v-if="loading" />

    <transition>
      <div class="container" v-if="!loading">
        <div>
          <h1 class="page-title">Cursos</h1>
          <p class="content-description">{{ cursos.descricao }}</p>
        </div>

        <div>
          <ul>
            <li class="curso" v-for="(curso, index) in cursos.cursos" :key="index">
              <p class="page-subtitle">{{ curso.nome }} - {{ curso.totalAulas }} | {{ curso.horas }}</p>
              <p class="descricao">{{ curso.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
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
.curso {
  margin-bottom: 25px;
  box-shadow: 0.5px 1px 3px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  padding: 20px;
}
</style>
