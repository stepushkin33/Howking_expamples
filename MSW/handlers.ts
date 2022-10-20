import { rest } from "msw";
import { ProjectType, Paging } from "./types";
import avatar from "../../assets/images/avatar.jpg";
import projectImage from "../../assets/images/project_image.jpg";

const project: ProjectType = {
  id: 1,
  name: "Project",
  projectCategoryId: 1,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi...",
  authorName: "Daniela Metz",
  authorRole: "CEO of project, Senior engineer",
  authorAvatar: avatar,
  projectImage: projectImage,
};

const projects: ProjectType[] = new Array(100).fill(project);
const PROJECTS_MOCK_DATA = projects.map((item, i) => {
  return {
    ...item,
    id: i,
    name: item.name + i,
    projectCategoryId: Math.floor(Math.random() * 10),
  };
});

const fetchAllProjects = rest.get(
  "http//localhost:8080/api/projects",
  (req, res, ctx) => {
    const size = Number(req.url.searchParams.get("size"));
    const offset = Number(req.url.searchParams.get("offset"));
    const stringifiedCategoriesIds = req.url.searchParams.getAll("id");
    const categoriesIds = stringifiedCategoriesIds.map((item) => Number(item));
    const stringifiedSearchValue = req.url.searchParams.getAll("name");
    const searchValue = stringifiedSearchValue.map((item) =>
      item.toLowerCase()
    );
    const sortBy = String(req.url.searchParams.get("sortBy"));

    const projectNames = PROJECTS_MOCK_DATA.map((item) => item.name);

    const searchProjects = () => {
      if (!searchValue.length) {
        return PROJECTS_MOCK_DATA;
      } else {
        return PROJECTS_MOCK_DATA.filter(({ name }) => {
          return searchValue.includes(name.toLowerCase());
        });
      }
    };

    const filteredProjects = () => {
      if (!categoriesIds.length) {
        return searchProjects();
      } else {
        return searchProjects().filter(({ projectCategoryId }) => {
          return categoriesIds.includes(projectCategoryId);
        });
      }
    };

    const sortedData = filteredProjects().sort((a, b) => {
      if (sortBy === "desc") {
        return a.id < b.id ? 1 : -1;
      } else {
        return a.id > b.id ? 1 : -1;
      }
    });

    const projectsPage = sortedData.slice(offset, offset + size);

    const paging: Paging = {
      offset: offset,
      size: size,
      total: filteredProjects().length,
    };
    return res(
      ctx.status(200),
      ctx.json({
        data: projectsPage,
        paging,
        projectNames,
      })
    );
  }
);

export const allProjectsHandlers = [fetchAllProjects];
