<template>
  <header class="w-full text-sm h-16">
    <div class="fixed top-0 left-0 w-full h-16 bg-indigo-900">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-gray-700">
        <router-link :to="{ name: 'HomeView' }" class="flex items-center h-full text-xl">
          TranquilityCea, LLC
        </router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0" data-test="main-nav-item">
              <router-link :to="{ name: menuItem }" class="flex items-center h-full py-2.5">{{ menuItem }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'MainNav',
  data() {
    return {
      menuItems: ['ProjectsView'],
    };
  },
};
</script>
