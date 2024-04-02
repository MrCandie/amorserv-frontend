export interface IBook {
  name: string;
  user?: string;
  userId?: string;
  category?: any;
  url: string;
  cover_url: string;
  author: string;
  id: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICategory {
  name: string;
  user?: string;
  userId?: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
