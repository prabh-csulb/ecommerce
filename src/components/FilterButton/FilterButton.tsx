import React from "react";
import { FilterButtonProps } from "../ProductFilters/ProductFilters";
import { filterCategories } from "../ProductFilters/filtersData";
import { FilterValuesList } from "../FilterValues/FilterValues";
import "./FilterButton.scss";

export const FilterButton = ({
  filterCategory,
  filterCategoryInDisplay,
  setFilterCategoryInDisplay,
}: FilterButtonProps) => {
  const [isFilterDrawerOpened, setIsFilterDrawerOpened] =
    React.useState<any>(undefined);

  const getClickedArr = (filterItem) => {
    const filtersValuesInView = filterCategories.filter((item) => {
      return item.id === filterItem.id;
    })[0];
    return setFilterCategoryInDisplay(filtersValuesInView);
  };
  const openDrawer =
    Object.keys(filterCategoryInDisplay).length > 0 &&
    filterCategory.id === filterCategoryInDisplay.id;
  return (
    <li className="filter-category-list">
      <button
        className={`filter-button ${
          filterCategory.id === filterCategoryInDisplay.id ? "open" : ""
        }`}
      >
        <span
          className="filter-button-content"
          onClick={() => {
            if (filterCategoryInDisplay && isFilterDrawerOpened) {
              setFilterCategoryInDisplay({});
              setIsFilterDrawerOpened(false);
            } else {
              getClickedArr(filterCategory);
              setIsFilterDrawerOpened(true);
            }
          }}
        >
          <span>{filterCategory.label}</span>
          <span className="arrow down"></span>
        </span>
        {openDrawer && (
          <ul className={`filter-categories-values-list`}>
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
