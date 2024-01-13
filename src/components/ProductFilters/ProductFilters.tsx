import * as React from "react";
import { filterCategoriesTypes, filterCategories } from "./filtersData";
import "./ProductFilters.scss";
import { HomePageMessages } from "../../messages/messages";
import { FilterButton } from "../FilterButton/FilterButton";

export interface FilterButtonProps {
  filterCategory: filterCategoriesTypes;
  filterCategoryInDisplay: any;
  setFilterCategoryInDisplay: any;
}

const ProductFilters = () => {
  const [filterCategoryInDisplay, setFilterCategoryInDisplay] =
    React.useState<any>({});
  return (
    <div className="filters-wrapper">
      <h2>{HomePageMessages.filtersHeading}</h2>
      <ul className="filter-categories main-list">
        {filterCategories.map((filterCategory) => {
          return (
            <FilterButton
              filterCategory={filterCategory}
              key={filterCategory.id}
              filterCategoryInDisplay={filterCategoryInDisplay}
              setFilterCategoryInDisplay={setFilterCategoryInDisplay}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilters;
