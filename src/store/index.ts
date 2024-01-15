import { fetchProductsReducer as products } from "../store/products/reducer";
import { HomePageProductsState } from "./products/types";

export interface ApplicationState {
  products: HomePageProductsState;
}

const rootReducer = {
  reducer: {
    products: products,
  },
};

export default rootReducer;
