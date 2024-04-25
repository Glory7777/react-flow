// import React, { useState, createContext, useEffect } from "react";
// const StoreContext = createContext();
// export const StoreProvider = ({ children }) => {
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const [showDrawer, setShowDrawer] = useState({ enable: true, node: {} });
//   const [elements, setElements] = useState([]);
//   const [clickedElement, setClickedElement] = useState({});
//   const [theme, setTheme] = useState("light");
//   const [flagColor, setFlagColor] = useState("green");
//   const value = {
//     reactFlowInstance,
//     setReactFlowInstance,
//     showDrawer,
//     setShowDrawer,
//     elements,
//     setElements,
//     clickedElement,
//     setClickedElement,
//     nodeClass,
//     theme,
//     setTheme,
//     flagColor,
//     setFlagColor,
//   };
//   useEffect(() => {
//     nodeClass.applyElements(elements, setElements);
//   }, [elements]);
//   return (
//     <div>
//       <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
//     </div>
//   );
// };

// export default StoreContext;
