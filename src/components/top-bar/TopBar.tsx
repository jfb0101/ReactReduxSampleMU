import React from "react";
import { User } from "../../models/User";

type TopBarProps = {
  currentUser: User;
  numberOfPosts: number;
};

const TopBar = (props: TopBarProps) => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        height: "50px",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div>{props.currentUser?.name}</div>

      <div>{props.numberOfPosts || 0} posts</div>
    </div>
  );
};

export { TopBar, TopBarProps };
