// import React from 'react';
import { styled } from "styled-components";
import {
  IconAddCircle,
  IconCancelCircle,
  IconDesktopPc,
  IconDmz,
  IconFirewall,
  IconNetworkSwitch,
  IconNetworkSwitch2,
  IconServer,
  IconServerStorage,
  IconSubNetwork,
  IconUbuntuServer,
} from "../styles/Icons";

const InfoManage = () => {
  // 컴포넌트를 명명합니다.
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <LnbAside>
      <TitleText>훈련전장 GUI</TitleText>

      <MenuTitleWrapper>
        <MenuTitleText>네트워크</MenuTitleText>
      </MenuTitleWrapper>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconSubNetwork />
        <MenuDraggableText>Sub Network</MenuDraggableText>
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <IconDmz />
        <MenuDraggableText>DMZ</MenuDraggableText>
      </MenuDraggable>

      <MenuTitleWrapper type="object">
        <MenuTitleText>객체 기술서</MenuTitleText>
        <IconAddCircle />
      </MenuTitleWrapper>

      {/*
            <MenuDraggable onDragStart={(event) => onDragStart(event, 'input')} draggable>
                <IconNetworkSwitch/>
                <MenuDraggableText>switch</MenuDraggableText>
                <IconCancleCircle/>
            </MenuDraggable>
*/}

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconServer />
        <MenuDraggableText>web-db-ubuntu-20</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconServer />
        <MenuDraggableText>ftp-Ubuntu</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconUbuntuServer />
        <MenuDraggableText>Ubuntu</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconServer />
        <MenuDraggableText>mail-centos-8</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <IconServerStorage />
        <MenuDraggableText>storage-server</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>

      <MenuDraggable
        onDragStart={(event) => onDragStart(event, "switchNode")}
        draggable
      >
        <IconFirewall />
        <MenuDraggableText>global-switch</MenuDraggableText>
        <IconCancelCircle />
      </MenuDraggable>
    </LnbAside>
  );
};

export default InfoManage;

const LnbAside = styled.aside`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  height: -webkit-fill-available;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background: #4c4c4c;
  }

  background-color: #262626;
`;

const TitleText = styled.div`
  display: flex;
  width: 13.75rem;
  height: 2rem;
  padding: 1.5rem 1rem;
  align-items: center;

  color: #f2f2f2;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 1.25rem */
  letter-spacing: -0.025rem;
`;

const MenuTitleWrapper = styled.div`
  display: flex;
  width: 13.75rem;
  padding: 1.2rem 1rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3125rem;
  border: 0 solid #2886ff;
  background: ${(props) => (props.type === "object" ? "#0056C7" : "#1A1A1A")};
`;

const MenuTitleText = styled.div`
  color: #f2f2f2;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const MenuDraggable = styled.div`
  display: flex;
  width: 13.75rem;
  height: 1.8rem;
  padding: 0.75rem 1.25rem;
  gap: 0.625rem;
  align-items: center;
  border-radius: 31.25rem;
  border: 0px solid #ccc;
  background: #fff;
`;

const MenuDraggableText = styled.span`
  color: #000;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
`;
