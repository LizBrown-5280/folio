<template>
  <div class="foodWrap">
    <h1>{{ food.name }}</h1>

    <div class="popout">
      <div class="nutritionWrap">
        <header>
          <h2>{{ props.food?.name }}</h2>
          <h3>Nutrition Facts</h3>
          <div class="portion flx-spread border-bolder">
            <span>Portion Size: </span><span>{{ food?.servingSize }}{{ food?.servingSizeUnit }}</span>
          </div>
          <div class="amount">Amount Per Portion</div>
        </header>

        <main>
          <template v-for="nutrient in nutrientsList" :key="nutrient.number">
            <NutrientItem
              :nutrientValue="food?.nutrients[nutrient.number]"
              :nutrientInfo="nutrient"
              :class="nutrient.number"
            />
          </template>
        </main>

        <footer>
          <p>
            <span>*</span>
            The % Daily Value (DV) tells you how much a nutrient in a serving of food contribute to a daily diet. 2000
            calories a day is used for general nutrition advice.
          </p>
          <p>
            U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019
            <a href="fdc.nal.usda.gov">fdc.nal.usda.gov</a>.
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onUpdated } from 'vue';
import { useStore } from 'vuex';
import NutrientItem from './NutrientItem.vue';

const store = useStore();
const nutrientsList = store.getters['foodMenu/getNutrients'];
const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
});

onUpdated(() => {
  console.log('foodItem.vue food prop', props.food);
});
</script>

<style scoped>
@import '@/assets/base.css';

.foodWrap {
  position: static;
  width: 300px;
  color: white;
}
.popout {
  position: absolute;
  display: none;
  z-index: 10;
  height: 560px;
  top: 20px;
  right: 30px;
  height: 560px;
  overflow: hidden;
  background: rgba(11, 15, 34, 0.9);
  border: rgba(255, 255, 255, 0.3) 3px solid;
  border-radius: 20px;
}
/* .foodWrap:first-child .popout {
  display: block;
} */
.foodWrap h1:hover ~ .popout {
  display: block;
}
.nutritionWrap {
  position: relative;
  width: 340px;
  min-height: 20px;
  margin: 5px 15px;
  padding: 5px 10px;
}
h1 {
  border-radius: 20px;
  padding: 15px 0px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}
h1:hover {
  background: rgba(200, 148, 160, 0.2);
}
h2 {
  color: #c894a0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
h3 {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-bottom: --vt-c-divider-mid-thinner;
}
p {
  padding: 10px 0;
  font-size: 11px;
}
.portion {
  font-size: --font-med;
}
.nutrient {
  font-weight: bold;
}
.amount,
.daily {
  font-size: --font-sm;
}
.calories {
  font-size: --font-exLg;
  font-weight: bold;
}
.subValues {
  padding-left: 15px;
}
.foodMenu:first-child:after {
  content: '% Daily Value *';
  border-bottom: --vt-c-divider-mid-thinner;
}
</style>
