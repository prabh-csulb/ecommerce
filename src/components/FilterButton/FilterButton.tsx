import React from "react";
import { FilterButtonProps } from "../ProductFilters/ProductFilters";
import { filterCategories } from "../ProductFilters/filtersData";
import { FilterValuesList } from "../FilterValues/FilterValues";

export const FilterButton = ({ filterCategory }: FilterButtonProps) => {
  const [filterCategoryInDisplay, setFilterCategoryInDisplay] =
    React.useState<any>(undefined);

  const getClickedArr = (filterItem) => {
    const filtersValuesInView = filterCategories.filter((item) => {
      return item.id === filterItem.id;
    })[0];
    return setFilterCategoryInDisplay(filtersValuesInView);
  };
  return (
    <li>
      <button
        className="filter-button"
        onClick={() => {
          if (filterCategoryInDisplay) {
            setFilterCategoryInDisplay(undefined);
          } else {
            getClickedArr(filterCategory);
          }
        }}
      >
        <span className="filter-button-content">
          <span>{filterCategory.label}</span>
          <span className="arrow down"></span>
        </span>
        {filterCategoryInDisplay && (
          <ul className="filter-categories-values-list">
            {filterCategoryInDisplay &&
            filterCategory.id === filterCategoryInDisplay.id ? (
              <FilterValuesList
                filterCategoryValuesInDisplay={filterCategoryInDisplay}
              />
            ) : (
              ""
            )}
          </ul>
        )}
      </button>
    </li>
  );
};
