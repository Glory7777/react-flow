import React, { useState, useRef, useCallback } from "react";
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

// import { initialEdges, initialNodes } from "../initial-elements";

// import SwitchNode from "./nodes/SwitchNode";
// import SwitchNode2 from "./nodes/SwitchNode2";
// import WebServerNode from "./nodes/WebServerNode";
// import DesktopNode from "./nodes/DesktopNode";
// import FirewallNode from "./nodes/FirewallNode";

import InfoManage from "./InfoManage";

let id = 10;

const getId = () => `dndnode_${id++}`;

const MainLayout = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const [nodes, setNodes] = useState([]);
  // const [edges, setEdges] = useState([]);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // 초기 노드 및 엣지 정의
  const initialNodes = [
    {
      id: "basegroup1",
      type: "group",
      data: { label: "방어망" },
      position: { x: 0, y: 0 },
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: 640,
        height: 400,
      },
    },
  ];
  const initialEdges = [];

  // // 그룹 초기 노드 및 엣지 설정
  // const initialEdges = [{ id: "b-c", source: "B", target: "C" }];

  // const initialNodes = [
  //   {
  //     id: "basegroup1",
  //     type: "group",
  //     data: { label: "방어망" },
  //     position: { x: 0, y: 0 },
  //     style: {
  //       backgroundColor: "rgba(255, 255, 255, 0.5)",
  //       width: 640,
  //       height: 400,
  //     },
  //   },
  //   {
  //     id: 'fire1',
  //     type: 'firewallNode',
  //     data: { label: '방화벽' },
  //     position: { x: 280, y: 20 },
  //     parentNode: 'basegroup1'
  // },

  // ];

  const nodeTypes = {
    // switchNode: SwitchNode,
    // switchNode2: SwitchNode2,
    // webServerNode: WebServerNode,
    // desktopNode: DesktopNode,
    // firewallNode: FirewallNode,
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      // 위의것 대로하는게 맞음
      // 테스트로 이렇게 했을때 노드 하나가 사각형그릴때 이걸씀 밑에 이걸했을때 네모그림
      // const newNode = {
      //   id: 'basegroup1',
      //   data: { label: '방어망' },
      //   position,
      //   type: "group",
      //   style: {
      //     backgroundColor: 'rgba(255, 255, 255, 0.5)',
      //     width: 640,
      //     height: 400,
      //   },
      // };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <>
      <BodyWrapper>
        {/*<TopologyWrapper>*/}
        <ReactFlowProvider>
          <Sidebar />
          <TopologyGroundWrapper ref={reactFlowWrapper}>
            <ReactFlow
              // nodes={initialNodes}
              // edges={initialEdges}

              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              fitView
            >
              <Controls />
              {/*<MiniMap />*/}
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
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

const TopologyWrapper = styled.div`
  display: flex;
  //width: 90rem;
  width: 100vw;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopologyGroundWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
`;
