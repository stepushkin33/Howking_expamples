import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 272px;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  position: relative;
`;

export const SearchInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 8px;
  padding: 9px 0 9px 41px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #b0b0b0;
  }
`;

export const SearchIcon = styled.svg`
  z-index: 100;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 15px;
  top: 9px;
`;

export const SearchUl = styled.ul<{ $visible?: boolean }>`
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

export const SearchLi = styled.li<{ $active: boolean }>`
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
