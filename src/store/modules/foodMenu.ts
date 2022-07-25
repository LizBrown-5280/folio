// 👇️ ts-nocheck disables type checking for entire file for now!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const namespaced = true;

export const state = {
  foods: {
    2105550: {
      name: 'Grilled Chicken',
      nutrients: {},
    },
    2300272: {
      name: 'Baked Beans',
      nutrients: {},
    },
    1892056: {
      name: 'Potato Salad',
      nutrients: {},
    },
    2084998: {
      name: 'Salad w/ Balsamic Dressing',
      nutrients: {},
    },
    1663014: {
      name: "Ruffle's BBQ Chips",
      nutrients: {},
    },
    1961978: {
      name: 'Pecan Pie',
      nutrients: {},
    },
    1928486: {
      name: 'Chocolate Chip Cookies',
      nutrients: {},
    },
    519497: {
      name: 'Lipton Iced Tea',
      nutrients: {},
    },
    2105492: {
      name: 'Country Time Lemonade',
      nutrients: {},
    },
  },
  foodIdsOrder: ['2105550', '2300272', '1892056', '2084998', '1663014', '1961978', '1928486', '519497', '2105492'],
  nutrients: [
    {
      number: 208,
      name: 'Calories',
      dailyValue: 2000,
      unitName: 'kCal',
    },
    {
      number: 204,
      name: 'Total Fat',
      dailyValue: 65,
      unitName: 'g',
    },
    {
      number: 606,
      name: 'Saturated Fat',
      classes: 'subValue',
      dailyValue: 20,
      unitName: 'g',
    },
    {
      number: 605,
      name: 'Trans Fat',
      classes: 'subValue',
      dailyValue: 300,
      unitName: 'g',
    },
    {
      number: 601,
      name: 'Cholesterol',
      dailyValue: 300,
      unitName: 'mg',
    },
    {
      number: 307,
      name: 'Sodium',
      dailyValue: 2300,
      unitName: 'mg',
    },
    {
      number: 205,
      name: 'Total Carbohydrates',
      dailyValue: 300,
      unitName: 'g',
    },
    {
      number: 291,
      name: 'Dietary Fiber',
      classes: 'subValue',
      dailyValue: 28,
      unitName: 'g',
    },
    {
      number: 269,
      name: 'Total Sugars',
      classes: 'subValue',
      dailyValue: 0,
      unitName: 'g',
    },
    {
      number: 203,
      name: 'Protein',
      dailyValue: 50,
      unitName: 'g',
    },
  ],
};

export const mutations = {
  updateFoodItem(state: object, parsedFood: object) {
    state.foods[parsedFood.fdcId] = { ...state.foods[parsedFood.fdcId], ...parsedFood };
  },
};

export const actions = {
  parseFoodData({ commit }, payload) {
    payload.forEach((food: FoodData) => {
      const parsedFood = {};

      parsedFood.fdcId = food.fdcId;
      parsedFood.description = food.description;
      parsedFood.servingSize = food.servingSize;
      parsedFood.servingSizeUnit = food.servingSizeUnit;

      // pulling out each nutrient's amount and storing in an object with the nutrient number as the key
      parsedFood.nutrients = {};
      if (food.foodNutrients) {
        food.foodNutrients.forEach((nutrient: object) => {
          parsedFood.nutrients[nutrient.nutrient.number] = nutrient.amount;
        });
      }

      commit('updateFoodItem', parsedFood);
    });
  },
};

export const getters = {
  getFoods: (state: Record<string, unknown>) => state.foods,
  getFoodIdsOrder: (state: Record<string, unknown>) => state.foodIdsOrder,
  getNutrients: (state: Record<string, unknown>) => state.nutrients,
};
