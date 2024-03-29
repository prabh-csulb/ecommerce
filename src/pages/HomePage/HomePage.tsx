import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/action";
import { HomePageMessages } from "../../messages/messages";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { ApplicationState } from "../../store";
import "./HomePage.scss";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import { generateRandomNumberInGivenRange } from "../../utilities/helpers";

const HomePage = () => {
  const dispatch = useDispatch<any>();
  const products = useSelector(
    (state: ApplicationState) => state?.products?.data?.products
  );
  const isFetching = useSelector(
    (state: ApplicationState) => state?.products?.isFetching
  );

  React.useEffect(() => {
    if (!products) {
      dispatch(fetchProducts(generateRandomNumberInGivenRange(1, 100)));
    }
  }, []);
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className="home-page">
      {/* <div className="filters-section">
        <ProductFilters />
      </div> */}
      <div className="product-list-section">
        {products &&
          products.length > 0 &&
          products?.map((product, index) => {
            return (
              <ProductCard product={product} quickLook={true} key={index} />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
