import React, { useEffect, useState } from "react";
import { User } from "../../../models/User";
import { Post } from "../../../models/Post";
import axios from "axios";
import baseApiUrl from "../../../baseApiUrl";
import { ListUsers } from "./ListUsers";
import { store } from "../../../redux/store";

type ListUsersContainerProps = {
  onEditUser: (userId: number) => void;
};

const ListUsersContainer = (props: ListUsersContainerProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const getUserPosts = async (userId: number): Promise<Post[]> => {
    const { data: posts } = await axios.get(
      `${baseApiUrl}/users/${userId}/posts`
    );

    return posts;
  };

  const loadUsers = async () => {
    const { data } = await axios.get(`${baseApiUrl}/users`);

    setUsers(data);
  };

  const onUserSelected = async (userId: number) => {
    const user = users.find((u) => u.id == userId);
    const posts: Post[] = await getUserPosts(userId);

    store.dispatch({
      type: "CREATE_USER",
      currentUser: user
    });

    store.dispatch({
      type: "REPLACE_POSTS",
      posts: posts
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ListUsers
      users={users}
      onUserSelected={onUserSelected}
      onEditUser={props.onEditUser}
    />
  );
};

export { ListUsersContainer };
