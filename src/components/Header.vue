<template>
  <header>
    <nav class="flex-align-items">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">Logo</router-link>
      </div>

      <ul class="flex-align-items menu">
        <li class="flex-align-items">
          <router-link class="item" active-class="active-link" :to="{ name: 'Contato' }">Contato</router-link>
        </li>
        <li class="flex-align-items">
          <router-link class="item" active-class="active-link" :to="{ name: 'Cursos' }">Cursos</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
nav {
  justify-content: space-between !important;
  background-color: #234;
  padding: 10px 25px;
  font-weight: bold;
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

.flex-align-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: 20px;
}

.menu .item {
  padding: 10px;
}

.menu .item:hover {
  background-color: rgba(248, 248, 248, 0.1);
  transition: 0.4s;
}

.menu .item.active-link {
  color: #4b8;
  transition: 0.4s;
}
</style>
