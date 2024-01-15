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
    <div className="product-card-container">
      <div className="product-image-wrapper">
        <img src={product.images[0]} alt="" className="product-image" />
      </div>
      <div className="product-card">
        <div className="product-info-section">
          <p className="product-title">{`${product.title} ( ${product.brand} )`}</p>
          <p className="product-description">{product.description}</p>
        </div>
        <div className="product-more-info-section">
          <p className="product-discountPercentage">
            Discount: {product.discountPercentage}
          </p>
          <p className="product-price">Price: {product.price}</p>
          <p className="product-rating">Rating: {product.rating}</p>
        </div>
      </div>
      <div className="product-button-quick-look">
        {quickLook && (
          <button className="button">
            {HomePageMessages.quickProductLook}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
