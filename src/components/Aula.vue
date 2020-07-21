<template>
  <div v-if="aula.id">
    <h5 class="title">{{ aula.nome }}</h5>
    <div class="player">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${aula.youtube}`"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
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

<style scoped>
.title {
  font-size: 24px;
  color: #234;
  margin-bottom: 20px;
}

.player {
  position: relative;
  padding-bottom: 56.25%;
}

.player iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
