<template>
  <div>
    <Loading v-if="loading" />

    <transition>
      <div class="container" v-if="!loading">
        <div>
          <h1 class="page-title">Contato</h1>

          <div class="contato-content">
            <p class="descricao">{{ contato.descricao }}</p>
            <p><strong>Email:</strong> {{ contato.contato.email }}</p>
            <p><strong>Telefone:</strong> {{ contato.contato.telefone }}</p>
            <p><strong>Endereço:</strong> {{ contato.contato.endereco }}</p>
          </div>
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
.contato-content .descricao {
  margin-bottom: 30px;
}

.contato-content p {
  margin-bottom: 10px;
}
</style>
