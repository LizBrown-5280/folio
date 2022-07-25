<template>
  <div class="flx-spread border-thinner">
    <template v-if="isCalories()">
      <span class="nutrient">
        {{ props.nutrientInfo?.name }}: {{ props.nutrientValue }}{{ props.nutrientInfo?.unitName }}
      </span>
      <span class="value">{{ calcDailyValue() }}</span>
    </template>
    <template v-else>
      <span class="nutrient">{{ nutrientInfo?.name }}:{{ props.nutrientValue }}</span>
      <span>{{ props.nutrientInfo?.unitName.toLowerCase() }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  nutrientInfo: {
    type: Object,
  },
  nutrientValue: {
    type: Number,
  },
});

let nv = ref(props.nutrientValue).value;
console.log('nv', nv);

function isCalories() {
  return props.nutrientInfo?.name !== 'Calories';
}

function calcDailyValue() {
  if (props.nutrientValue === undefined) return '0.00%';
  if (props.nutrientInfo?.dailyValue === 0) return '';

  const dv = (props.nutrientValue / props.nutrientInfo?.dailyValue) * 100;
  return `${dv.toFixed(2)}%`;
}
</script>

<style scoped>
@import '@/assets/base.css';

.nutrient {
  font-weight: bold;
}
.amount,
.daily {
  font-size: --font-sm;
}
.calories {
  color: #c894a0;
  font-size: --font-exLg;
  font-weight: bold;
}
.subValue {
  padding-left: 15px;
}
.subValue .nutrient {
  font-weight: normal;
}
</style>
