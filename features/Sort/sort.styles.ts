import styled from "styled-components";

export const SortSpan = styled.span`
  padding: 9px 37px 9px 13px;
  width: 272px;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #b0b0b0;
  position: relative;
  cursor: pointer;
`;

export const SortsLabel = styled.b`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #111827;
`;

export const SortUl = styled.ul<{ $visible?: boolean }>`
  width: 272px;
  position: absolute;
  z-index: 1000;
  background-color: #ffffff;
  overflow-y: scroll;
  border: ${({ $visible }) => ($visible ? `1px solid #d1d5db` : ``)};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-top: 5px;
  transition: max-height 0.3s ease-in-out;
  max-height: ${({ $visible }) => ($visible ? `117px` : `0`)};
`;

export const SortLi = styled.li<{ $active: boolean }>`
  min-height: 26px;
  padding: 3px 0 3px 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #111827;
  background-color: ${({ $active }) => ($active ? `#EBEFFF` : `#FFFFFF`)};
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

export const SortWrapper = styled.div`
  position: relative;
`;

export const SortArrow = styled.svg<{ $visible: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 9px;
  right: 13px;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $visible }) => ($visible ? "rotate(180deg)" : "")};
`;
