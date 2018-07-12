import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import App from './components/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/products" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);
