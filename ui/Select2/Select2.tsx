import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import * as S from "./Select2.styles";
import useClickOutside from "./useClickOutside";

export type Props<T> = {
  options: T[];
  selectedValue: T;
  onChange: (option: T) => void;
  renderLabel: (option: T) => ReactNode;
  keyGetter: (option: T) => string;
  renderOption: (option: T) => ReactNode;
};

const Select2 = <T extends unknown>({
  options,
  selectedValue,
  onChange,
  renderLabel,
  keyGetter,
  renderOption,
}: Props<T>) => {
  const [visibility, setVisibility] = React.useState(false);

  const ref = useClickOutside(() => {
    setVisibility(false);
  });

  const handleChange = (item: T) => {
    onChange(item);
    setVisibility(!visibility);
  };

  return (
    <div ref={ref}>
      <S.Span onClick={() => setVisibility(!visibility)}>
        {renderLabel(selectedValue)}
      </S.Span>
      {visibility &&
        ReactDOM.createPortal(
          <S.Ul>
            {options.map((option) => {
              return (
                <S.Li
                  key={keyGetter(option)}
                  $active={keyGetter(selectedValue) === keyGetter(option)}
                  onClick={() => {
                    handleChange(option);
                  }}
                >
                  {renderOption(option)}
                </S.Li>
              );
            })}
          </S.Ul>,
          document.getElementById("root") as HTMLElement
        )}
    </div>
  );
};

export default Select2;
