import * as React from "react";
import { filterCategoriesTypes, filterCategories } from "./filtersData";
import "./ProductFilters.scss";
import { HomePageMessages } from "../../messages/messages";

export interface FilterButtonProps {
  filterCategories: filterCategoriesTypes[];
}

export const FilterButton = ({ filterCategories }: FilterButtonProps) => {
  return filterCategories.map((filterItem, index) => {
    return (
      <li>
        <button
          className="filter-button"
          key={index}
          onClick={() => {
            console.log(filterItem.id);
          }}
        >
          <span>{filterItem.label}</span>
          <span className="arrow down"></span>
        </button>
      </li>
    );
  });
};
const ProductFilters = () => {
  return (
    <div className="filters-wrapper">
      <h2>{HomePageMessages.filtersHeading}</h2>
      <ul>
        <FilterButton filterCategories={filterCategories} />
      </ul>
    </div>
  );
};

export default ProductFilters;
