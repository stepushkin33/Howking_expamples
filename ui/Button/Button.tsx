import { PropsWithChildren } from "react";
import * as S from "./Button.styles";
import * as THEME_MAP from "./themes";

type Props = {
  theme?: "classicBlue" | "lightBlue" | "white";
  size?: "30" | "34" | "38" | "42" | "50";
  rounded?: boolean;
  children: string;
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  theme = "classicBlue",
  size = "30",
  rounded = false,
  outline = false,
  disabled = false,
  loading = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <S.Button
        $theme={theme}
        $size={size}
        $rounded={rounded}
        $outline={outline}
        $disabled={disabled}
      >
        {loading && (
          <S.BtnSpinner
            $theme={theme}
            $outline={outline}
            $size={size}
            $rounded={rounded}
            $disabled={disabled}
            ariaLabel="loading-indicator"
            strokeWidth={5}
            width="100%"
            height={S.SIZE_MAP[size].lineHeight}
            color={
              outline
                ? THEME_MAP[theme].theme.color
                : THEME_MAP[theme].theme.spinnerColor
            }
            secondaryColor={
              outline ? "#000000" : THEME_MAP[theme].theme.background
            }
          />
        )}
        {children}
      </S.Button>
    </div>
  );
};

export default Button;
