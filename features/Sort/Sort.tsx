import React from "react";
import useClickOutside from "shared/hooks/useClickOutside";
import { useCustomContext } from "shared/hooks/useCustomContext";
import { FiltersContext } from "../../pages/Projects/Projects";
import * as S from "./sort.styles";

type Props = {
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
};

type SortListType = {
  name: "По возрастанию" | "По убыванию";
  value: "asc" | "desc";
};

const Sort = ({ setSelectedSort }: Props) => {
  const { selectedSort } = useCustomContext(FiltersContext);
  const [visible, setVisible] = React.useState(false);

  const sortList: SortListType[] = [
    {
      name: "По возрастанию",
      value: "asc",
    },
    {
      name: "По убыванию",
      value: "desc",
    },
  ];

  const selectedIndex = sortList.findIndex((item) =>
    item.value.includes(selectedSort)
  );

  const ref = useClickOutside(() => {
    setVisible(false);
  });

  const handleSetSort = (item: SortListType) => {
    setSelectedSort(item.value);
    setVisible(false);
  };

  return (
    <S.SortWrapper ref={ref}>
      <S.SortSpan onClick={() => setVisible(!visible)}>
        Сортировка: <S.SortsLabel>{sortList[selectedIndex].name}</S.SortsLabel>
      </S.SortSpan>
      <S.SortUl $visible={visible}>
        {sortList.map((item) => {
          return (
            <S.SortLi
              $active={selectedSort === item.value}
              key={item.value}
              onClick={() => handleSetSort(item)}
            >
              {item.name}
            </S.SortLi>
          );
        })}
      </S.SortUl>
      <S.SortArrow
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
      </S.SortArrow>
    </S.SortWrapper>
  );
};

export default Sort;
