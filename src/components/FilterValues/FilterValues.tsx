import * as React from "react";
import "./FilterValues.scss";

export const FilterValuesList = ({ filterCategoryValuesInDisplay }) => {
  return filterCategoryValuesInDisplay?.filters?.map((item) => {
    return <li className="filter-values-single-list">{item}</li>;
  });
};
