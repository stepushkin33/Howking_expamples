import { useQuery } from "@tanstack/react-query";
import { coreAxios } from "../config/core/instance";
import { projectKeys } from "./keys";

export const useAllProjectsQuery = () => {
  return useQuery(
    projectKeys.all,
    () => {
      return coreAxios.get("/projects");
    },
    {
      staleTime: 4000,
    }
  );
};
