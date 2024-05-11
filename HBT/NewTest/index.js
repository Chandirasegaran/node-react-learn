import React from "react";
import reactDom from "react-dom/client";
import { createRoot } from "react-dom/client";

import App from "./src/App"
import About from "./src/About";
// reactDom.render(<App />, document.getElementById("root"));
createRoot(document.getElementById("root")).render(<App />);
