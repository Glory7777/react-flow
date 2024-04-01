import styled from "styled-components";
import { useEffect, useState } from "react";

const DropList = () => {
  return (
    <DropListWapper>
      <DropListItem>질문 글 알람</DropListItem>
      <DropListItem>본인 계정 정보</DropListItem>
      <DropListItem onClick={() => navigate("/account/pwdChange")}>
        비밀번호 변경
      </DropListItem>
      <DropListItem>로그아웃</DropListItem>
    </DropListWapper>
  );
};

const DropListWapper = styled.ul`
  padding: 0rem;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.5rem;
  background: #4c4c4c;
  /* 드롭 */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  opacity: 1;
  position: absolute;
  top: 2.05rem;
  width: 100%;
  cursor: pointer;
`;

const DropListItem = styled.li`
  display: flex;
  padding: 0.625rem 0.5rem;
  justify-content: center;
  gap: 0.375rem;

  color: #e6e6e6;

  &:hover {
    border-radius: 0.25rem;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default DropList;
