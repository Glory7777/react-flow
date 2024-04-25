import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import GlobalStyle from "./styles/global-styles";
import MainLayout from "./component/MainLayout";
import ErrorBoundary from "./ErrorBoundary";

const routes = [
  {
    name: "network",
    path: "/",
    component: MainLayout,
  },
  // 다른 라우트 설정 추가
];

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ErrorBoundary>
      <header>
        <span>훈련네트워크</span>
        <nav>
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          ))}
        </nav>
      </header>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
