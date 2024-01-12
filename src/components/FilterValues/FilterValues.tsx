import * as React from "react";

export const FilterValuesList = ({ filterCategoryValuesInDisplay }) => {
  return filterCategoryValuesInDisplay?.filters?.map((item) => {
    return <li>{item}</li>;
  });
};
