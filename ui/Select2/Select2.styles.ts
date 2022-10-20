import styled from "styled-components";

export const Span = styled.span`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  b {
    position: absolute;
    color: #ffffff;
    background-color: #4f46e5;
    padding: 8px 16px;
    border-radius: 4px;
    top: 30px;
    left: 0;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 75px;
  left: 20px;
  border: 1px solid #d6d6d6;
  cursor: pointer;
`;

export const Li = styled.li<{ $active: boolean }>`
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;

  background-color: ${({ $active }) => {
    return $active ? "#a3a3a3" : "#FFFFFF";
  }};

  &:not(:last-child) {
    border-bottom: 1px solid #d6d6d6;
  }

  &:hover {
    background-color: ${({ $active }) => {
      return $active ? "" : "#d6d6d6";
    }};
  }
`;
