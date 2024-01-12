import * as React from "react";
import { filterCategoriesTypes, filterCategories } from "./filtersData";
import "./ProductFilters.scss";
import { HomePageMessages } from "../../messages/messages";
import { FilterButton } from "../FilterButton/FilterButton";

export interface FilterButtonProps {
  filterCategory: filterCategoriesTypes;
}

const ProductFilters = () => {
  return (
    <div className="filters-wrapper">
      <h2>{HomePageMessages.filtersHeading}</h2>
      <ul>
        {filterCategories.map((filterCategory) => {
          return (
            <FilterButton
              filterCategory={filterCategory}
              key={filterCategory.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilters;
