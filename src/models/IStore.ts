import { Post } from "./Post";
import { User } from "./User";

export type StoreStructure = {
  currentUser: User;
  posts: Post[];
};
