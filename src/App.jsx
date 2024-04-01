import React from "react";
import GlobalStyle from "./styles/global-styles";
import MainLayout from "./component/MainLayout";
import Header from "../src/component/header/index";

const App = () => (
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <MainLayout />
  </React.StrictMode>
);

export default App;
