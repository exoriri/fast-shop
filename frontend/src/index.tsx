/* Vendors */
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Router from "./Router";
import { configureStore } from "./store";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./styles.pcss";

const store = configureStore();

const App = () => (
    <Provider store={store}>
      <Router />
    </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
