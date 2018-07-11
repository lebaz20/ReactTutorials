import { combineReducers } from 'redux';
import productsPerCategoriesReducer from './productsPerCategoriesReducer';
import categoriesReducer from './categoriesReducer';
import activeProductReducer from './activeProductReducer';

const rootReducer = combineReducers(
  {
    productsPerCategories: productsPerCategoriesReducer,
    categories: categoriesReducer,
    activeProduct: activeProductReducer,
  },
);

export default rootReducer;
