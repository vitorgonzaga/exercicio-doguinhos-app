import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// Versão com devtools extension:
// const store = createStore(rootReducer, composeWithDevTools())
// É possível utilizar o composeWithDevTools com middleware
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

// Caso deseje instalar o redux devtools
// npm install --save redux-devtools-extension
