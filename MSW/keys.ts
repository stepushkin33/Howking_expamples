export const projectKeys = {
  all: ["projects"] as const,
  lists: () => [...projectKeys.all, "lists"] as const,
  list: (filters: string) => [...projectKeys.lists(), { filters }] as const,
};
