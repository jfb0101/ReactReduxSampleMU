import React, { useEffect, useState } from "react";
import { User } from "../../../models/User";
import axios from "axios";
import { EditUser } from "./EditUser";
import baseApiUrl from "../../../baseApiUrl";

type EditUserContainerProps = {
  userId: number;
};

const EditUserContainer = (props: EditUserContainerProps) => {
  const [user, setUser] = useState<User>(null);

  const loadUser = async () => {
    const { data } = await axios.get(`${baseApiUrl}/users/${props.userId}`);

    console.log("data: ", data);

    setUser(data);
  };

  useEffect(() => {
    loadUser();
  }, [props.userId]);

  return (
    <>
      {user == null && <h3>Carregando</h3>}

      {user != null && (
        <EditUser
          user={user}
          onUserEdited={(user) => console.log(JSON.stringify(user, null, 2))}
        />
      )}
    </>
  );
};

export { EditUserContainerProps, EditUserContainer };
