import React from 'react';
import { connect } from 'react-redux';

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <div>
Select a product to get started.
      </div>
    );
  }

  return (
    <div>
      <h3>
Details for:
      </h3>
      <div>
Name:
        {product.name}
      </div>
      <div>
Price:
        {product.price}
      </div>
      <div>
Description:
        {product.description}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    product: state.activeProduct,
  };
}

export default connect(mapStateToProps)(ProductDetail);
