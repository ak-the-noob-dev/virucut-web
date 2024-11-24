export interface Blog {
  id: string;
  title: string;
  author: string;
  position: string;
  cover: string;
  description: string;
}

export interface BlogByTitle {
  id: string;
  title: string;
  author: string;
  position: string;
  coverImage: string;
  authorImage: string;
  description: string;
  youMayLike?: YouMayLike[] | [];
}

interface YouMayLike {
  id: string;
  title: string;
  description: string;
}
