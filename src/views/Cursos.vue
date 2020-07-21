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
            <router-link
              tag="li"
              class="card"
              v-for="(curso, index) in cursos.cursos"
              :to="{ name: 'Curso', params: { cursoID: curso.id } }"
              :key="index"
            >
              <p class="page-subtitle">{{ curso.nome }} - {{ curso.totalAulas }} | {{ curso.horas }}</p>
              <p class="descricao">{{ curso.descricao }}</p>
            </router-link>
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
.card {
  margin-bottom: 25px;
  box-shadow: 0.5px 1px 3px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  padding: 20px;

  cursor: pointer;
  transition: all 0.5s;
}

.card:hover {
  box-shadow: 0.5px 1px 5px rgba(0, 0, 0, 0.6);
  transform: translate3d(0px, 2px, 0);
}
</style>
