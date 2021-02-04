import React from "react";
import { User } from "../../models/User";
import { TopBar } from "./TopBar";
import { useSelector } from "react-redux";
import { IStore } from "../../models/IStore";

function TopBarContainer() {
  const currentUser: User = useSelector(
    (state: IStore) => state.currentUser
  );

  const numberOfPosts: number = useSelector(
    (state: IStore) => (state.posts || []).length
  );

  return <TopBar currentUser={currentUser} numberOfPosts={numberOfPosts} />;
}

export { TopBarContainer };
