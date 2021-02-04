import { Post } from "../../models/Post";
import * as R from "ramda";

export function postsReducer(posts: Post[] = [], action): Post[] {
  switch (action.type) {
    case "REPLACE_POSTS":
      return action.posts;
    case "APPEND_POST":
      return R.append(action.post, posts);
    case "REMOVE_POST":
      return posts.filter((p) => p.id != action.postId);
    default:
      return posts;
  }
}
