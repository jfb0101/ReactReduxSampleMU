import React from "react";
import { User } from "../../models/User";
import { TopBar } from "./TopBar";
import { useSelector } from "react-redux";
import { StoreStructure } from "../../models/StoreStructure";

function TopBarContainer() {
  const currentUser: User = useSelector(
    (state: StoreStructure) => state.currentUser
  );

  const numberOfPosts: number = useSelector(
    (state: StoreStructure) => (state.posts || []).length
  );

  return <TopBar currentUser={currentUser} numberOfPosts={numberOfPosts} />;
}

export { TopBarContainer };
