import React from "react";
import { createRoot } from "react-dom";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return <Home />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
