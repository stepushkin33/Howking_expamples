export type ProjectType = {
  id: number;
  name: string;
  projectCategoryId: number;
  description: string;
  authorName: string;
  authorRole: string;
  projectImage: string;
  authorAvatar: string;
};

export type Paging = {
  offset: number;
  size: number;
  total: number;
};

export type ResponseProjects = {
  data: ProjectType[];
  paging: Paging;
  projectNames: string[];
};
