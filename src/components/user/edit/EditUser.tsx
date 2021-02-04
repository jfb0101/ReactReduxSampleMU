import React, { useState } from "react";
import { User } from "../../../models/User";
const styles = require("./editUser.module.css");

type EditUserProps = {
  user: User;

  onUserEdited: (user: User) => void;
  onBack: () => void;
};

const EditUser = (props: EditUserProps) => {
  const [user, setUser] = useState(props.user);

  return (
    <>
      <button onClick={props.onBack}>
        <span className="material-icons">arrow_back</span>
      </button>
      <form className={styles.form}>
        <div>
          <label>Name</label>
          <input
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value
              })
            }
          />
        </div>

        <div>
          <label>Email</label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div>
          <button onClick={() => props.onUserEdited(user)}>Save</button>
        </div>
      </form>
    </>
  );
};

export { EditUser, EditUserProps };
