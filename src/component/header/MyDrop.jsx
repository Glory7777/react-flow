// 필요 유틸리티
import styled, { css } from "styled-components";
import { useState } from "react";

// 이미지
import { IconExpendMore } from "../../assets/Icons";
// 컴포넌트
import DropList from "./DropList";

const MyDrop = ({ props }) => {
  // const location = useLocation();
  // const userId = location.state.userId;

  const [activeDropList, setActiveDropList] = useState(false);

  return (
    <>
      <Title>훈련네트워크</Title>
      <Title>훈련네트워크</Title>
      <MyDropWrapper
        onMouseLeave={() => setActiveDropList(false)}
        onClick={() => setActiveDropList(!activeDropList)}
        $active={activeDropList}
      >
        <MyDropText>방어훈련 네트워크 </MyDropText>
        <ArrowDropDown $active={activeDropList}>
          <IconExpendMore fill="#ffffff" />
        </ArrowDropDown>
        {activeDropList ? <DropList /> : null}
      </MyDropWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Title2>훈련네트워크</Title2>
      </div>
    </>
  );
};

const Title = styled.span`
  display: flex;
  width: 9.375rem;
  padding: 0.875rem 1.875rem;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  gap: 0.25rem;
  flex-shrink: 0;
  background: var(--10---1A1A1A, #1a1a1a);
  color: white; /* Text color */
  border-radius: 5px; /* Adjust as needed */
`;

const Title2 = styled.span`
  display: flex;
  width: 9.375rem;
  padding: 0.875rem 1.875rem;
  justify-content: center;
  align-items: center;
  margin-left: 63rem;
  gap: 0.25rem;
  flex-shrink: 0;
  background: var(--10---1A1A1A, #1a1a1a);
  color: white; /* Text color */
  border-radius: 5px; /* Adjust as needed */
`;
const MyDropWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0.875rem 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  letter-spacing: -0.02rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  cursor: pointer;

  /* Conditional styles */
  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.test &&
    css`
      padding: 10rem;
    `}
`;

const MyDropText = styled.div`
  width: 100%; /* 혹은 적절한 너비 설정 */
  overflow: hidden; /* 넘치는 내용을 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘치는 부분을 생략 부호로 표시 */
`;

const ArrowDropDown = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // #B3B3B3
  transform: ${(props) => (props.$active ? "rotate(180deg)" : null)};
`;

export default MyDrop;
