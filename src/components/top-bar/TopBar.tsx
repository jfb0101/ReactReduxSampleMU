import React from "react";
import { User } from "../../models/User";

export type TopBarProps = {
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
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <div>
        {props.currentUser?.name} - {props.currentUser?.email}
      </div>

      <div>{props.numberOfPosts || 0} posts</div>
    </div>
  );
};

export { TopBar };
