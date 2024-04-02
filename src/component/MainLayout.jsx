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
import { initialEdges, initialNodes } from "../initial-elements";

import SwitchNode from "./nodes/SwitchNode";
import SwitchNode2 from "./nodes/SwitchNode2";
import WebServerNode from "./nodes/WebServerNode";
import DesktopNode from "./nodes/DesktopNode";
import FirewallNode from "./nodes/FirewallNode";
import InfoManage from "./InfoManage";

let id = 10;

const getId = () => `dndnode_${id++}`;

const MainLayout = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const nodeTypes = {
    switchNode: SwitchNode,
    switchNode2: SwitchNode2,
    webServerNode: WebServerNode,
    desktopNode: DesktopNode,
    firewallNode: FirewallNode,
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

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        // data: { label: `${type} node` },
        data: { label: `node` },
      };

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
