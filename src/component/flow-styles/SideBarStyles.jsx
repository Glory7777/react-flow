import styled from "styled-components";

export const LnbAside = styled.aside`
  display: flex;
  /* padding: 1.5rem; */
  flex-direction: column;
  justify-content: flex-start;
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

export const TitleText = styled.div`
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

export const MenuTitleWrapper = styled.div`
  display: flex;
  width: 13.75rem;
  padding: 1.2rem 1rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3125rem;
  border: 0 solid #2886ff;
  background: ${(props) => (props.type === "object" ? "#0056C7" : "#1A1A1A")};
`;

export const MenuTitleText = styled.div`
  color: #f2f2f2;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

export const MenuDraggable = styled.div`
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

export const MenuDraggableText = styled.span`
  color: #000;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
`;
