import { useEffect, useState } from "react";
import styled from "styled-components";

import MyDrop from "./MyDrop";
// 더미데이터

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderSide>
          <MyDrop />
        </HeaderSide>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  //width: auto;
  min-height: 6.25rem;

  padding: 0 3.125rem 0 0;
  justify-content: flex-start;
  align-items: center;
  gap: 0.875rem;
  box-sizing: border-box;

  position: sticky;
  top: 0;

  background-color: #262626;
`;

const HeaderSide = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export default Header;
