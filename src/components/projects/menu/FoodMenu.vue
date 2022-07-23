<template>
  <div class="menu">
    <h1>
      Brown's Family &amp; Friends <br />
      Summer BBQ!
    </h1>
    <div class="foodMenu">
      <template v-for="food in foodList" :key="food.fdcId">
        <FoodItem :food="food">{{ food.name }}</FoodItem>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Due to this being a small portfolio project, I have elected not to move some of the business logic into composables
   or utils files and folders.  Expecially since this project is more static than dynamic.
*/
import { onMounted } from 'vue';
import { useStore } from 'vuex';
// import FoodItem from './FoodItem.vue';

const store = useStore();
const foodList = store.getters['foodMenu/getFoods'];
const nutrientsList = store.getters['foodMenu/getNutrients'];

onMounted(async () => {
  const url = createUSDAApiUrl();
  try {
    const response = await fetch(url);
    const data = await response.json();
    store.dispatch('foodMenu/parseFoodData', data, { root: true });
  } catch (error) {
    console.log(error);
  }
});

function createUSDAApiUrl() {
  const USDAApiUrl = 'https://api.nal.usda.gov/fdc/v1/foods?';
  const foodFormat = `format=full`;
  const fdcIds = Object.keys(foodList).reduce((prev, curr) => prev + `&fdcIds=${curr}`, '');
  const nutrientsIds = Object.keys(nutrientsList).reduce((prev, curr) => prev + `&nutrients=${curr}`, '');
  const apiKey = `&api_key=8DxCARE3F2fCANyZAKmdnEVCXwv0bpIJ2MaOw1zx`;
  return `${USDAApiUrl}${foodFormat}${fdcIds}${nutrientsIds}${apiKey}`;
}
</script>

<style scoped>
.menu {
  margin-bottom: 100px;
  background: url('@/assets/girl-grilling.png') no-repeat bottom 20px right -45px / 450px 450px,
    url('@/assets/fireworks.png') no-repeat center / cover;
}

h1 {
  width: 60%;
  margin: 30px auto;
  padding: 10px;
  border-top: rgba(255, 255, 255, 0.3) 3px solid;
  border-bottom: rgba(255, 255, 255, 0.3) 3px solid;
  border-radius: 20px;
  background: rgba(11, 15, 34, 0.6);
  text-align: center;
  font-size: 36px;
  color: white;
  text-align: center;
}

.foodMenu {
  position: relative;
  padding: 0px 0px 30px 70px;
}
</style>
