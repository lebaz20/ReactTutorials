import React from 'react';
import { connect } from 'react-redux';
import { selectProduct as baseSelectProduct } from '../actions/index';

const ProductsList = ({ productsPerCategories, selectProduct }) => {
  const renderList = products => products.map(product => (
    <li
      key={product.id}
      onClick={() => selectProduct(product)}
      onKeyPress={() => selectProduct(product)}
      role="menuitem"
      className="list-group-item"
    >
      {product.name}
    </li>
  ));

  if (productsPerCategories.length === 0) {
    return (<div />);
  }
  const categoryProducts = productsPerCategories.category
    ? [productsPerCategories.category] : productsPerCategories.categories;

  return (
    <div>
      {categoryProducts.map(category => (
        <div key={category.id}>
          <h3>
Category:
            {category.name}
          </h3>
          <ul className="list-group col-sm-4">
            {renderList(category.products)}
          </ul>
        </div>
      ))
            }
    </div>
  );
};

function mapStateToProps({ productsPerCategories }) {
  return { productsPerCategories };
}

export default connect(mapStateToProps, { selectProduct: baseSelectProduct })(ProductsList);
