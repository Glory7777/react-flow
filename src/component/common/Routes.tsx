// routes.tsx
import React from "react";

import DragDrop from "../../examples/drag-drop";

export interface Route {
  name: string;
  path: string;
  component: React.ComponentType;
}

const Routes: Route[] = [
  {
    name: "network",
    path: "/",
    component: DragDrop, // DragDrop 컴포넌트는 여기에서 import 되어 있어야 합니다.
  },
];

export default Routes;
