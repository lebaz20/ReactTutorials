import React from 'react';
import CategoriesDropDown from '../containers/categoriesDropDown';
import ProductsList from '../containers/productsList';
import ProductDetail from '../containers/productDetail';

const PrivatePage = () => (
  <div>
    { localStorage && localStorage.getItem('jwt')
      ? (
        <div>
          <CategoriesDropDown />
          <ProductsList />
          <ProductDetail />
        </div>
      )
      : (
        <h4 className="bg-danger">
Authentication is required to view this page.
        </h4>
      )
  }
  </div>
);

export default PrivatePage;
