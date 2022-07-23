<template>
  <h1>Project: Summer Menu</h1>
  <p>
    This project uses a selected (static) list of food item ids to retrieve nutritional related data from the USDA API.
    It then displays the menu with each item's (static) name and on hover will display the nutritional values.
    <span>(p.s. sorry for the slow reponse, the USDA takes a few. :/ )</span>
  </p>
  <FoodMenu />
</template>

<script lang="ts">
import FoodMenu from '@/components/projects/menu/FoodMenu.vue';
export default {
  name: 'MenuView',
  components: {
    FoodMenu,
  },
};
</script>

<style></style>
