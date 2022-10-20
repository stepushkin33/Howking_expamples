import styled from "styled-components";
import * as THEME_MAP from "./themes";
import Spinner from "../Spinner";

export const SIZE_MAP = {
  "30": {
    padding: "7px 11px",
    fontSize: "12px",
    lineHeight: "16px",
    radius: "15px",
  },
  "34": {
    padding: "9px 13px",
    fontSize: "14px",
    lineHeight: "16px",
    radius: "17px",
  },
  "38": {
    padding: "9px 17px",
    fontSize: "14px",
    lineHeight: "20px",
    radius: "19px",
  },
  "42": {
    padding: "9px 17px",
    fontSize: "16px",
    lineHeight: "24px",
    radius: "21px",
  },
  "50": {
    padding: "13px 25px",
    fontSize: "16px",
    lineHeight: "24px",
    radius: "25px",
  },
};

type ButtonTheme = keyof typeof THEME_MAP;
type ButtonSize = keyof typeof SIZE_MAP;

type StyledButtonProps = {
  $theme: ButtonTheme;
  $size: ButtonSize;
  $rounded: boolean;
  $outline: boolean;
  $disabled: boolean;
};

export const Button = styled.button<StyledButtonProps>`
  position: relative;
  user-select: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? "0.3" : "1")};
  background: ${({ $theme, $outline }) =>
    $outline ? "#FFFFFF" : THEME_MAP[$theme].theme.background};

  color: ${({ $theme, $outline }) =>
    $outline ? "#000000" : THEME_MAP[$theme].theme.color};

  border: ${(props) =>
    props.theme === "white" ? "1px solid #D1D5DB" : `1px solid transparent`};

  padding: ${({ $size }) => SIZE_MAP[$size].padding};

  font-size: ${({ $size }) => SIZE_MAP[$size].fontSize};

  line-height: ${({ $size }) => SIZE_MAP[$size].lineHeight};

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: ${({ $rounded, $size }) =>
    $rounded ? SIZE_MAP[$size].radius : "4px"};
  outline: ${({ $theme, $outline }) =>
    $outline ? "2px solid" + THEME_MAP[$theme].theme.background : ""};

  font-weight: 400;
  font-style: normal;

  &:hover {
    background: ${({ $theme, $outline }) =>
      $outline
        ? THEME_MAP[$theme].theme.background
        : THEME_MAP[$theme].theme.hover};
  }

  &:active {
    border: 2px solid #ffffff;
    outline: 2px solid #4f46e5;
  }
`;

export const BtnSpinner = styled(Spinner)<StyledButtonProps>`
  position: relative;
  top: 0;
  left: 0;
  border-radius: ${({ $rounded, $size }) =>
    $rounded ? SIZE_MAP[$size].radius : "4px"}; ;
`;
