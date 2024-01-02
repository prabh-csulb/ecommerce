import { ProductsResponse } from "../apiDataTypes/ProductApiTypes";

export interface HomePageProductsState {
  data: ProductsResponse | undefined;
  isFetching: boolean;
  error: boolean;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING",
  FETCH_PRODUCTS_FULFILLED = "FETCH_PRODUCTS_FULFILLED",
  FETCH_PRODUCTS_REJECTED = "FETCH_PRODUCTS_REJECTED",
}

export interface IFetchProductsPending {
  type: ProductsActionTypes.FETCH_PRODUCTS_PENDING;

}
export interface IFetchProductsRejected {
  type: ProductsActionTypes.FETCH_PRODUCTS_REJECTED;
  payload: boolean;
}
export interface IFetchProductsFulfilled {
  type: ProductsActionTypes.FETCH_PRODUCTS_FULFILLED;
  payload: ProductsResponse;
}

export type FetchProdcutsStoreTypes =
  | IFetchProductsPending
  | IFetchProductsRejected
  | IFetchProductsFulfilled;
