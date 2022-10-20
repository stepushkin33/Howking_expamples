import React from "react";
import useClickOutside from "shared/hooks/useClickOutside";
import { useCustomContext } from "shared/hooks/useCustomContext";
import { FiltersContext } from "../../pages/Projects/Projects";
import * as S from "./filters.styles";

type Props = {
  setCategoryId: React.Dispatch<React.SetStateAction<number[]>>;
};

const Filter = ({ setCategoryId }: Props) => {
  const categories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [visible, setVisible] = React.useState(false);
  const { categoryIds } = useCustomContext(FiltersContext);

  const ref = useClickOutside(() => {
    setVisible(false);
  });

  const handleChange = (item: number) => {
    if (categoryIds.includes(item)) {
      setCategoryId(categoryIds.filter((listItem) => listItem !== item));
    } else setCategoryId([...categoryIds, item]);
  };

  return (
    <S.FilterWrapper ref={ref}>
      <S.FilterSpan
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {categoryIds.length ? (
          <S.FiltersLabel>
            Категория{" "}
            {categoryIds.length < 3
              ? categoryIds.length === 1
                ? categoryIds[0]
                : categoryIds[0] + `, ` + categoryIds[1]
              : categoryIds[0] + `, ` + categoryIds[1] + `...`}
          </S.FiltersLabel>
        ) : (
          `Выберете категории`
        )}
      </S.FilterSpan>
      <S.FilterUl $visible={visible}>
        {categories.map((item) => {
          return (
            <S.FilterLi
              $active={categoryIds.includes(item)}
              key={item}
              onClick={() => {
                handleChange(item);
              }}
            >
              Категория {item}
            </S.FilterLi>
          );
        })}
      </S.FilterUl>
      <S.FilterArrow
        $visible={visible}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70712 12.7071C6.3166 13.0976 5.68343 13.0976 5.29291 12.7071C4.90238 12.3166 4.90238 11.6834 5.29291 11.2929L9.2929 7.29289C9.68343 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z"
          fill="#B0B0B0"
        />
      </S.FilterArrow>
    </S.FilterWrapper>
  );
};

export default Filter;
