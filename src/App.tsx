import * as React from "react";
import { AppProvider } from "./context";
import Products from "./Products";
import List from "./List";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <Products />
      <List />
    </AppProvider>
  );
}
