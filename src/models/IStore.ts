import { Post } from "./Post";
import { User } from "./User";

export type IStore = {
  currentUser: User;
  posts: Post[];
};
