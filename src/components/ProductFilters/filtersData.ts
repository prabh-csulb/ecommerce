export type filterCategoriesTypes = {
  id: string;
  label: string;
  filters: (number | string)[];
};

export const filterCategories: filterCategoriesTypes[] = [
  {
    id: "Size",
    label: "Size",
    filters: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: "Color",
    label: "Color",
    filters: ["red", "black", "blue", "darkred", "brown"],
  },
  {
    id: "Price",
    label: "Price",
    filters: ["0 < 100", "100 < 200", "200 < 300", "300 < 400", "400 < 500"],
  },
  {
    id: "Model",
    label: "Model",
    filters: [2015, 2017, 2018, 2020, 2023],
  },
  {
    id: "Discount",
    label: "Discount",
    filters: [10, 20, 30, 40, 50],
  },
];
