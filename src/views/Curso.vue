<template>
  <div>
    <Loading v-if="loading" />

    <transition>
      <div v-if="!loading" class="container">
        <div>
          <h1 class="page-title">{{ curso.nome }}</h1>
          <p class="content-description">{{ curso.descricao }}</p>

          <div class="curso-aulas-content">
            <h2 class="page-subtitle">Aulas</h2>

            <ul>
              <router-link
                active-class="active-item"
                tag="li"
                class="card"
                v-for="(aula, index) in curso.aulas"
                :to="{ name: 'Aula', params: { aulaID: aula.id } }"
                :key="index"
              >
                <p>{{ aula.nome }}</p>
              </router-link>
            </ul>
          </div>
        </div>

        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import getDataFromApi from '@/mixins/getDataFromApi';

export default {
  name: 'Curso',
  mixins: [getDataFromApi],

  props: {
    cursoID: {
      type: String,
    },
  },

  data: () => ({
    loading: true,
    curso: {},
  }),

  created() {
    this.getDataFromApi(`/curso/${this.cursoID}`).then(data => {
      this.curso = data;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.page-title {
  margin-bottom: 15px;
}

.page-subtitle {
  margin-bottom: 25px;
}

.curso-aulas-content {
  margin-top: 40px;
}

.card {
  margin-bottom: 15px;
  box-shadow: 0.5px 1px 3px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  padding: 20px;
  min-width: 350px;
  max-width: 550px;

  text-align: center;

  cursor: pointer;
  transition: all 0.5s;
}

.card:hover {
  box-shadow: 0.5px 1px 5px rgba(0, 0, 0, 0.6);
  transform: translate3d(0px, 2px, 0);
}

.card p {
  font-size: 16px;
  color: #234;
  opacity: 0.9;
  font-weight: bold;
}

.active-item {
  background-color: #234;
}
.active-item p {
  color: white;
}

@media (max-width: 940px) {
  .card {
    min-width: auto;
  }
}
</style>
