// Sidebar.js

import React, { useCallback, useState, useContext } from "react";

import nodeTypes from "../NodeTypes";
import {
  LnbAside,
  MenuDraggable,
  MenuDraggableText,
  MenuTitleText,
  MenuTitleWrapper,
} from "../component/index";
import { IconAddCircle, IconCancelCircle, IconFirewall } from "./asset/Icons";
import { InputNode } from "../CustomNodes.jsx";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    console.log(event);
    console.log(nodeType);

    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const renderNodes = (category) => {
    return Object.values(nodeTypes)
      .filter((nodeType) => nodeType.data.category === category)
      .map((nodeType, index) => {
        // console.log(nodeType)

        return (
          <MenuDraggable
            key={`${nodeType.data.name}-${index}`} // 고유한 키 생성
            className={`node ${nodeType.data.name}`}
            onDragStart={(event) => onDragStart(event, nodeType.data.name)}
            draggable
          >
            {React.createElement(nodeType.data.icon)}
            <MenuDraggableText>{nodeType.data.name}</MenuDraggableText>
            <IconCancelCircle />
          </MenuDraggable>
        );
      });
  };

  return (
    <LnbAside>
      <MenuTitleWrapper>
        <MenuTitleText>네트워크</MenuTitleText>
      </MenuTitleWrapper>
      {renderNodes("network")}
      <MenuTitleWrapper type="object">
        <MenuTitleText>객체 기술서</MenuTitleText>
        <IconAddCircle />
      </MenuTitleWrapper>
      {renderNodes("object")}
      {/*

      <InputNode
          data={{
            icon: IconFirewall,
            name: "UtmPfsense",
            label: "방어막 방화벽",
            category: "object",
          }}
      />
*/}
    </LnbAside>
  );
};

export default Sidebar;

// --------

// import React, { useCallback, useState, useContext } from "react";

// import nodeTypes from "../NodeTypes";
// import {
//   LnbAside,
//   MenuDraggable,
//   MenuDraggableText,
//   MenuTitleText,
//   MenuTitleWrapper,
// } from "../component/index";
// import { IconAddCircle, IconCancelCircle } from "./asset/Icons";

// const Sidebar = () => {
//   const onDragStart = (event, nodeType) => {
//     event.dataTransfer.setData("application/reactflow", nodeType);
//     event.dataTransfer.effectAllowed = "move";
//   };

//   const renderNodes = (category) => {
//     return Object.values(nodeTypes)
//       .filter((nodeType) => nodeType.data.category === category)
//       .map((nodeType, index) => (
//         <MenuDraggable
//           key={`${nodeType}-${index}`} // 고유한 키 생성
//           className={`node ${nodeType}`}
//           onDragStart={(event) => onDragStart(event, nodeType)}
//           draggable
//         >
//           {React.createElement(nodeType.data.icon)}
//           <MenuDraggableText>{nodeType.data.name}</MenuDraggableText>
//           <IconCancelCircle />
//         </MenuDraggable>
//       ));
//   };

//   return (
//     <LnbAside>
//       <MenuTitleWrapper>
//         <MenuTitleText>네트워크</MenuTitleText>
//       </MenuTitleWrapper>
//       {renderNodes("network")}
//       <MenuTitleWrapper type="object">
//         <MenuTitleText>객체 기술서</MenuTitleText>
//         <IconAddCircle />
//       </MenuTitleWrapper>
//       {renderNodes("object")}
//     </LnbAside>
//   );
// };

// export default Sidebar;
