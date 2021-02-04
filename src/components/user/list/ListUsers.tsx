import { User } from "../../../models/User";
import React from "react";

type ListUsersProps = {
  users: User[];
  onUserSelected: (userId: number) => void;
  onEditUser: (userId: number) => void;
};

const ListUsers = (props: ListUsersProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
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
              <td>
                <button onClick={() => props.onEditUser(user.id)}>
                  <span className="material-icons">edit</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { ListUsers, ListUsersProps };
