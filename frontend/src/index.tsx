/* Vendors */
import * as React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./styles.pcss";

const App = () => <Router />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
