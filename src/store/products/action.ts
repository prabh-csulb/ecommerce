import { Dispatch } from "redux";
import { ProductsActionTypes } from "./types";
import { ProductsResponse } from "../apiDataTypes/ProductApiTypes";

// const MOCK_API_URL = "https://dummyjson.com/products?limit=100";
const MOCK_API_URL = "http://localhost:4444/products";

export const fetchProductsPending = () => (dispatch: Dispatch) => {
  return dispatch({
    type: ProductsActionTypes.FETCH_PRODUCTS_PENDING,
  });
};

export const fetchProductsRejected = () => (dispatch: Dispatch) => {
  return dispatch({
    type: ProductsActionTypes.FETCH_PRODUCTS_REJECTED,
  });
};

export const fetchProducts = (limit: number) => (dispatch: any) => {
  dispatch(fetchProductsPending());
  setTimeout(() => {
    fetch(`${MOCK_API_URL}?limit=${limit}`)
      .then((res) => {
        return res.json();
      })
      .then((data: ProductsResponse) => {
        return dispatch({
          type: ProductsActionTypes.FETCH_PRODUCTS_FULFILLED,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchProductsRejected());
      });
  }, 1000);
};
