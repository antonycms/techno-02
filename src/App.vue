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
</style>
