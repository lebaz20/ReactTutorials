import fetch from 'cross-fetch';

const JWT = localStorage && localStorage.getItem('jwt') ? localStorage.getItem('jwt') : '';
const ROOT_URL = 'http://localhost:5000/graphql';
const getSettings = values => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: JWT,
  },
  body: JSON.stringify(values),
});
export const SELECT_PRODUCT = 'select_product';
export const FETCH_CATEGORIES_RECEIVE = 'fetch_categories_receive';
export const FETCH_PRODUCTS_RECEIVE = 'fetch_products_receive';

export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  };
}


export function receiveProducts(payload) {
  return {
    type: FETCH_PRODUCTS_RECEIVE,
    payload,
  };
}

export function fetchProducts(category) {
  let queryPayload;
  if (category === '0') {
    queryPayload = {
      query: '{ categories { id name products { id name price description } } }',
      variables: null,
      operationName: null,
    };
  } else {
    queryPayload = {
      query: 'query getCategoryProducts($categoryId: Int!) { category(id: $categoryId) { id name products {id name price description }}  }',
      variables: { categoryId: category },
      operationName: 'getCategoryProducts',
    };
  }

  return dispatch => fetch(ROOT_URL, getSettings(queryPayload))
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveProducts(json.data));
    });
}

export function receiveCategories(payload) {
  return {
    type: FETCH_CATEGORIES_RECEIVE,
    payload,
  };
}

export function fetchCategories() {
  const queryPayload = {
    query: '{categories {id name }}',
    variables: null,
    operationName: null,
  };
  return dispatch => fetch(ROOT_URL, getSettings(queryPayload))
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveCategories(json.data));
    });
}
