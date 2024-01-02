import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/action";
import { HomePageMessages } from "../../messages/messages";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { ApplicationState } from "../../store";
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch<any>();
  const products = useSelector(
    (state: ApplicationState) => state?.products?.data?.photos
  );
  const isFetching = useSelector(
    (state: ApplicationState) => state?.products?.isFetching
  );

  React.useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, []);
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className="home-page">
      {products &&
        products.length > 0 &&
        products?.map((product) => {
          return <ProductCard product={product} quickLook={true} />;
        })}
    </div>
  );
};

export default HomePage;
