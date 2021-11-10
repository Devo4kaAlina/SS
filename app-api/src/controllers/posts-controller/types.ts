export type CreatePostBody = {
  title: string;
  content: string;
};

export type PostParams = {
  id: string;
};

export type GetAllPostsQuery = {
  pageNumber: string;
  pageSize?: string;
  orderBy?: string;
  isAscending?: string;
};
