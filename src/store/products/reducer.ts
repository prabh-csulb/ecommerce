import {
  FetchProdcutsStoreTypes,
  HomePageProductsState,
  ProductsActionTypes,
} from "./types";

const initialState: HomePageProductsState = {
  data: undefined,
  isFetching: false,
  error: false,
};

export const fetchProductsReducer = (
  state: HomePageProductsState = initialState,
  action: FetchProdcutsStoreTypes
): HomePageProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_REJECTED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
