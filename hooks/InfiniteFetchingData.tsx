import React from "react";
import { useInfiniteFetching } from "shared/api/projects/useInfiniteFetching";
import ProjectCard from "../../../shared/ui/ProjectCard/ProjectCard";
import * as S from "../projects.styles";
import { useIntersectionObserver } from "../../../shared/hooks/useIntersectionObserver";
import { ResponseProjects } from "shared/api/projects/types";

const InfiniteFetchingData = () => {
  const [offset, setOffset] = React.useState(0);
  const url = `http//localhost:8080/api/projects?`;
  const size = 6;

  const initialData: ResponseProjects = {
    data: [],
    paging: {
      offset: 0,
      size: 0,
      total: 0,
    },
    projectNames: [""],
  };

  const { data, isLoading, isError, hasNextPage } = useInfiniteFetching({
    url,
    size,
    offset,
    initialData,
  });

  const cb: IntersectionObserverCallback = React.useCallback(
    ([entry]) => {
      if (hasNextPage && entry.isIntersecting) {
        setOffset(offset + size);
      }
    },
    [hasNextPage, offset]
  );

  const pages = data?.data
    .map((item) => {
      return item;
    })
    .flat();

  const callbackRef = useIntersectionObserver(cb);

  console.log(data);

  return (
    <div>
      <div>{isLoading ? "Loading..." : null}</div>
      <S.Ul>
        {pages?.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </S.Ul>
      {hasNextPage && !isLoading && !isError && <div ref={callbackRef}></div>}
    </div>
  );
};

export default InfiniteFetchingData;
