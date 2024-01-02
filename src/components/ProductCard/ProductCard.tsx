import * as React from "react";
import "./ProductCard.scss";
import { ProductsData } from "../../store/apiDataTypes/ProductApiTypes";
import { HomePageMessages } from "../../messages/messages";

export type ProductCardPropsTypes = {
  product: ProductsData;
  quickLook: boolean;
};

const ProductCard = ({
  product,
  quickLook,
}: ProductCardPropsTypes): React.JSX.Element => {
  return (
    <div className="product-card">
      <img src={product.url} alt="" className="product-image" />
      <p className="product-title">{product.title}</p>
      <p className="product-description">{product.description}</p>
      {quickLook && (
        <button className="button">{HomePageMessages.quickProductLook}</button>
      )}
    </div>
  );
};

export default ProductCard;
