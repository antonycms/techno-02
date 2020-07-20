<template>
  <div>
    <Loading v-if="loading" />

    <transition>
      <div v-if="!loading" class="container">
        <div>
          <h1 class="page-title">Sobre a {{ homeData.titulo }}</h1>
          <p class="content-description">{{ homeData.descricao }}</p>

          <router-link tag="button" class="cursos-btn" to="/cursos">Cursos</router-link>

          <div>
            <h2 class="page-subtitle">Avaliações</h2>

            <ul>
              <li class="avaliacao" v-for="(avaliacao, index) in homeData.avaliacoes" :key="index">
                <p class="avaliacao-usuario-nome">{{ avaliacao.nome }}</p>
                <p class="avaliacao-descricao">{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>

        <img src="../assets/aprender.png" alt="Aprender" />
      </div>
    </transition>
  </div>
</template>

<script>
import getDataFromApi from '@/mixins/getDataFromApi';

export default {
  name: 'Home',
  mixins: [getDataFromApi],

  data: () => ({
    homeData: {},
    loading: true,
  }),

  created() {
    this.getDataFromApi('/home').then(data => {
      this.homeData = data;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
img {
  width: 100%;
  margin: 0 auto;
  justify-self: center;
  align-self: center;
}

.cursos-btn {
  margin: 20px 0;
  padding: 12px;
  cursor: pointer;

  border: 0;
  border-radius: 4px;

  background-color: #234;
  color: white;
  box-shadow: 0px 2px 3px rgba(61, 42, 42, 0.4);

  font-weight: bold;
  font-size: 15px;
}

.cursos-btn:hover {
  opacity: 0.8;
}

.cursos-btn:focus {
  outline: transparent;
}

.avaliacao {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 4px;
  max-width: 500px;
  min-width: 400px;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
}

.avaliacao-usuario-nome {
  font-weight: bold;
  color: #234;
  margin-bottom: 6px;
}

.avaliacao-descricao {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.753);
}

@media (max-width: 940px) {
  .avaliacao {
    max-width: 100%;
    min-width: auto;
  }

  img {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
