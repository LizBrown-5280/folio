interface FoodData {
  name: string;
  fdcId: number;
  description?: string;
  servingSize?: number;
  servingSizeUnit?: string;
  foodNutrients?: object[];
  nutrients?: object;

  discount?: string;
  foodComponents?: [];
  foodsAtributes?: object[];
  foodPortions?: [];
  publicationDate?: string;
  dataType?: string;
  foodClass?: string;
  modifiedDate?: string;
  availableDate?: string;
  brandOwner?: string;
  brandName?: string;
  dataSource?: string;
  brandedFoodCategory?: string;
  gtinUpc?: string;
  ingredients?: string;
  marketCountry?: string;
  packageWeight?: string;
  foodUpdateLog?: object[];
  labelNutrients?: object;
}

export { FoodData };
