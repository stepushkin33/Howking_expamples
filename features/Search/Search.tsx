import React from "react";
import debounce from "lodash.debounce";
import * as S from "./search.styles";
import useClickOutside from "shared/hooks/useClickOutside";
import { useCustomContext } from "shared/hooks/useCustomContext";
import { FiltersContext } from "../../pages/Projects/Projects";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  projectNames: string[];
  setSelectedProjectsNames: React.Dispatch<React.SetStateAction<string[]>>;
};

const Search = ({
  setSearch,
  projectNames,
  setSelectedProjectsNames,
}: Props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [visible, setVisible] = React.useState(false);
  const { search, selectedProjectsNames } = useCustomContext(FiltersContext);

  const ref = useClickOutside(() => {
    setVisible(false);
  });

  const handleAdd = (item: string) => {
    if (selectedProjectsNames.includes(item)) {
      setSelectedProjectsNames(
        selectedProjectsNames.filter((listItem) => listItem !== item)
      );
    } else setSelectedProjectsNames([...selectedProjectsNames, item]);
  };

  const updateSearch = React.useCallback(
    debounce((inputValue: string) => {
      setSearch(inputValue);
    }, 250),
    []
  );

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    updateSearch(event.currentTarget.value);
  };
  return (
    <S.SearchWrapper ref={ref}>
      <S.SearchInput
        type="text"
        name="search"
        placeholder={
          selectedProjectsNames.length
            ? `${selectedProjectsNames[0]}...`
            : "Поиск по проектам"
        }
        value={searchValue}
        onChange={handleChange}
        ref={inputRef}
        onClick={() => setVisible(true)}
        onFocus={(event) => {
          setVisible(true);
          event.preventDefault();
        }}
        onBlur={() => {
          setVisible(false);
        }}
        autoComplete="off"
      />
      <S.SearchIcon
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z"
          fill="#B0B0B0"
        />
      </S.SearchIcon>
      <S.SearchUl $visible={visible}>
        {projectNames
          .filter((listItem) =>
            listItem.toLowerCase().includes(search?.toLowerCase())
          )
          .map((item) => {
            return (
              <S.SearchLi
                $active={
                  selectedProjectsNames?.find((liItem) => liItem === item)
                    ? true
                    : false
                }
                key={item}
                onClick={() => handleAdd(item)}
              >
                {item}
              </S.SearchLi>
            );
          })}
      </S.SearchUl>
    </S.SearchWrapper>
  );
};

export default Search;
