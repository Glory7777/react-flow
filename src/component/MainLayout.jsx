import React, { useState, useRef, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import ReactFlow, {
  MiniMap,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import InfoManage from "./InfoManage";

import customEdges from "../CustomEdges";
import NodeTypes from "../NodeTypes";
import * as CustomNodes from "../CustomNodes";

const MainLayout = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // const nodeTypes = useMemo(() => {
  //   return Object.keys(NodeTypes).reduce((types, type) => {
  //     types[type] = CustomNodes[NodeTypes[type].type.charAt(0).toUpperCase() + NodeTypes[type].type.slice(1) + "Node"];
  //     return types;
  //   }, {});
  // }, []);

  ///---
  // const nodeTypes = useMemo(() => {
  //   return Object.entries(NodeTypes).reduce((acc, [key, nodeType]) => {
  //     acc[key] = {
  //       ...nodeType,
  //       component: CustomNodes[nodeType.component.displayName],
  //     };
  //     return acc;
  //   }, {});
  // }, []);

  const nodeTypes = useMemo(() => {
    let ah = {};

    Object.keys(NodeTypes).map((key) => {
      return (ah[key] = NodeTypes[key].component);
    });

    return ah;
  }, []);

  console.log(nodeTypes);

  // const nodeTypes = useMemo(() => ({ ...NodeTypes }), []);
  // const edgeTypes = useMemo(() => ({ ...customEdges }), []);
  // const nodeTypes = useMemo(() => ({ ...NodeTypes, ...CustomNodes }), []);
  // 노드 및 엣지 타입 설정

  // const nodeTypes = useMemo(() => NodeTypes, []);
  const edgeTypes = useMemo(() => ({ ...customEdges }), []);

  // 고유 id를 설정하기 위해 - npm install uuid 실행
  const getId = () => uuidv4();

  // edge 연결
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // 화면 저장
  const onSave = useCallback(() => {
    const flowData = JSON.stringify({ nodes, edges });
    localStorage.setItem("flowData", flowData);
  }, [nodes, edges]);

  // 저장된 것 로드하기
  const onLoad = useCallback(() => {
    const savedData = localStorage.getItem("flowData");
    if (savedData) {
      const { nodes, edges } = JSON.parse(savedData);
      setNodes(nodes);
      setEdges(edges);
    }
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      console.log(type);

      if (typeof type === "undefined" || !type || !NodeTypes[type]) {
        return;
      }

      // 화면상의 좌표를 Flow 내 좌표로 변환
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      // nodeTypes를 사용하여 새로운 노드 생성
      const newNode = {
        // id: String(new Date().getTime()),
        id: getId(),
        type,
        position,
        data: NodeTypes[type].data,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );
  //     const newNode = {
  //       id: getId(),
  //       type,
  //       position,
  //       data: {
  //         label: nodeTypes[type].label,
  //       },
  //       onChange: (label) => {
  //         setNodes((nds) =>
  //           nds.map((node) => {
  //             if (node.id === newNode.id) {
  //               node.data = { ...node.data, label };
  //             }
  //             return node;
  //           })
  //         );
  //       },
  //     };
  //     setNodes((nds) => nds.concat(newNode));
  //   },
  //   [reactFlowInstance, setNodes, nodeTypes]
  // );

  //----------------------
  // 노드 데이터를 업데이트할 수 있도록 수정

  // onNodesChange 콜백 함수를 사용하여 노드 데이터 업데이트
  // const onNodesChange = useCallback(
  //   (changes) => {
  //     setNodes((nds) =>
  //       nds.map((node) => {
  //         const change = changes.find((c) => c.id === node.id);
  //         if (change) {
  //           const nodeType = NodeTypes[node.type];
  //           return {
  //             ...node,
  //             data: {
  //               ...nodeType.data,
  //               ...change.data,
  //             },
  //           };
  //         }
  //         return node;
  //       })
  //     );
  //   },
  //   [setNodes, NodeTypes]
  // );

  return (
    <>
      <BodyWrapper>
        {/*<TopologyWrapper>*/}
        <ReactFlowProvider>
          <Sidebar />
          <TopologyGroundWrapper ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              onLoad={onLoad}
              fitView
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>

            <button onClick={onSave}>Save</button>
          </TopologyGroundWrapper>
          <InfoManage />
        </ReactFlowProvider>
        {/*</TopologyWrapper>*/}
      </BodyWrapper>
    </>
  );
};

export default MainLayout;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
  /* position: sticky; */
  flex-grow: 1;
  height: 100vh;
`;

// const TopologyWrapper = styled.div`
//   display: flex;
//   //width: 90rem;
//   width: 100vw;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

const TopologyGroundWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
`;

// ---------

// import React, { useState, useRef, useCallback, useMemo } from "react";
// import { v4 as uuidv4 } from "uuid";

// import ReactFlow, {
//   MiniMap,
//   ReactFlowProvider,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   Controls,
//   Background,
// } from "reactflow";

// import "reactflow/dist/style.css";
// import { styled } from "styled-components";
// import Sidebar from "./Sidebar";
// import InfoManage from "./InfoManage";

// import customEdges from "../CustomEdges";
// import NodeTypes from "../NodeTypes";
// import * as CustomNodes from "../CustomNodes";

// const MainLayout = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   const nodeTypes = useMemo(() => {
//     return Object.entries(NodeTypes).reduce((acc, [key, nodeType]) => {
//       acc[key] = {
//         ...nodeType,
//         component: CustomNodes[nodeType.component.displayName],
//       };
//       return acc;
//     }, {});
//   }, []);

//   const edgeTypes = useMemo(() => ({ ...customEdges }), []);

//   // 고유 id를 설정하기 위해 - npm install uuid 실행
//   const getId = () => uuidv4();

//   // edge 연결
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     []
//   );

//   // 화면 저장
//   const onSave = useCallback(() => {
//     const flowData = JSON.stringify({ nodes, edges });
//     localStorage.setItem("flowData", flowData);
//   }, [nodes, edges]);

//   // 저장된 것 로드하기
//   const onLoad = useCallback(() => {
//     const savedData = localStorage.getItem("flowData");
//     if (savedData) {
//       const { nodes, edges } = JSON.parse(savedData);
//       setNodes(nodes);
//       setEdges(edges);
//     }
//   }, []);

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   }, []);

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const type = event.dataTransfer.getData("application/reactflow");
//       if (typeof type === "undefined" || !type || !NodeTypes[type]) {
//         return;
//       }

//       // 화면상의 좌표를 Flow 내 좌표로 변환
//       const position = reactFlowInstance.screenToFlowPosition({
//         x: event.clientX,
//         y: event.clientY,
//       });

//       // nodeTypes를 사용하여 새로운 노드 생성
//       const newNode = {
//         // id: String(new Date().getTime()),
//         id: getId(),
//         type,
//         position,
//         data: {
//           ...NodeTypes[type].data,
//           label: `${NodeTypes[type].data.label} ${nodes.length + 1}`,
//         },
//       };
//       setNodes((nds) => nds.concat(newNode));
//     },
//     [reactFlowInstance, setNodes, NodeTypes]
//   );

//   return (
//     <>
//       <BodyWrapper>
//         {/*<TopologyWrapper>*/}
//         <ReactFlowProvider>
//           <Sidebar />
//           <TopologyGroundWrapper ref={reactFlowWrapper}>
//             <ReactFlow
//               nodes={nodes}
//               edges={edges}
//               onNodesChange={onNodesChange}
//               onEdgesChange={onEdgesChange}
//               onConnect={onConnect}
//               onInit={setReactFlowInstance}
//               onDrop={onDrop}
//               onDragOver={onDragOver}
//               nodeTypes={nodeTypes}
//               edgeTypes={edgeTypes}
//               onLoad={onLoad}
//               fitView
//             >
//               <Controls />
//               <MiniMap />
//               <Background variant="dots" gap={12} size={1} />
//             </ReactFlow>

//             <button onClick={onSave}>Save</button>
//           </TopologyGroundWrapper>
//           <InfoManage />
//         </ReactFlowProvider>
//         {/*</TopologyWrapper>*/}
//       </BodyWrapper>
//     </>
//   );
// };

// export default MainLayout;

// const BodyWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 1.5rem;
//   align-self: stretch;
//   /* position: sticky; */
//   flex-grow: 1;
//   height: 100vh;
// `;

// // const TopologyWrapper = styled.div`
// //   display: flex;
// //   //width: 90rem;
// //   width: 100vw;
// //   justify-content: space-between;
// //   align-items: flex-start;
// // `;

// const TopologyGroundWrapper = styled.div`
//   flex-grow: 1;
//   height: 100%;
// `;
