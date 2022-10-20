import React from "react";
import ProjectCard from "../../../shared/ui/ProjectCard/ProjectCard";
import * as S from "../projects.styles";
import { useIntersectionObserver } from "../../../shared/hooks/useIntersectionObserver";
import { useInfiniteQueries } from "../../../shared/api/projects/useInfiniteQueries";

type Props = {
  setProjectsNames: React.Dispatch<React.SetStateAction<string[]>>;
};

const InfiniteFetchProjects = ({ setProjectsNames }: Props) => {
  const args = {
    url: `http//localhost:8080/api/projects?`,
    pageParam: 0,
  };

  const {
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQueries(args);
  if (isError) {
    console.log(error);
  }

  const pages = data?.pages
    .map((item) => {
      return item.data;
    })
    .flat();

  const cb: IntersectionObserverCallback = React.useCallback(
    ([entry]) => {
      if (hasNextPage && entry.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  const callbackRef = useIntersectionObserver(cb);
  const projectNames = data?.pages[0].projectNames;

  React.useEffect(() => {
    if (projectNames?.length) {
      setProjectsNames(projectNames);
    }
  }, [projectNames, setProjectsNames]);

  return (
    <div>
      <div>{isFetching && isFetchingNextPage ? "Loading..." : null}</div>
      <S.Ul>
        {pages?.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </S.Ul>
      {hasNextPage && !isFetching && !isError && <div ref={callbackRef}></div>}
    </div>
  );
};

export default InfiniteFetchProjects;
