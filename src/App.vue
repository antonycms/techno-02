<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.container {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 500px);
  gap: 20px;
  padding: 40px 60px 0px 60px;
}

.page-title {
  font-size: 30px;
  font-weight: bold;
  color: #234;
  margin-bottom: 30px;
}

@media (max-width: 940px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
}
</style>
