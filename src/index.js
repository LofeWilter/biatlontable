import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import tableReducer from "./TableReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(tableReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

