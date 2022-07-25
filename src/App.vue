<template>
  <header>
    <MainNav />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import MainNav from '@/components/mainNav/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav,
  },
};
</script>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  background: --color-background;
}
</style>
