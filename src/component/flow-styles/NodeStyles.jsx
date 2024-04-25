import styled from "styled-components";

export const NodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 10px;
`;

export const NodeInput = styled.input.attrs({
  className: "nodrag",
  type: "text",
})`
  border: none;
  background: transparent;
  text-align: center;
  width: 100%;
  outline: none;
`;

export const GroupWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: ${({ style }) => style?.width ?? "auto"};
  height: ${({ style }) => style?.height ?? "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected }) =>
    selected &&
    `
    box-shadow: 0 0 0 2px #2c2f30;
  `}
`;
