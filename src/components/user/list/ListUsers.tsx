import { User } from "../../../models/User";
import React from "react";

type ListUsersProps = {
  users: User[];
  onUserSelected: (userId: number) => void;
};

const ListUsers = (props: ListUsersProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr
              key={user.id}
              style={{ cursor: "pointer" }}
              onClick={() => props.onUserSelected(user.id)}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { ListUsers, ListUsersProps };
