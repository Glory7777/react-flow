import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// import routes from '../src/component/common/routes'

import GlobalStyle from "./styles/global-styles";

// import Header from "./component/header/index";

import DragDrop from "./examples/drag-drop/index";
import MainLayout from "./component/MainLayout";

// 라우트 설정
const routes = [
  {
    name: "network",
    path: "/",
  },
];

// 헤더 컴포넌트
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const name = routes.find((route) => route.path === currentPath)?.name;
    document.title = `React Flow Examples${name ? " - " + name : ""}`;
    navigate(currentPath);
  }, [currentPath, navigate]);

  return (
    <header>
      <span>
        훈련네트워크 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      훈련네트워크:
      <select
        value={currentPath}
        onChange={(event) => setCurrentPath(event.target.value)}
      >
        {routes.map((route) => (
          <option value={route.path} key={route.path}>
            {route.name}
          </option>
        ))}
      </select>
    </header>
  );
};

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} />
      ))}
    </Routes>
    <MainLayout />
  </BrowserRouter>
);

export default App;
