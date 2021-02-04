import React, { useEffect, useState } from "react";
import { User } from "../../../models/User";
import axios from "axios";
import { EditUser } from "./EditUser";
import baseApiUrl from "../../../baseApiUrl";

export type EditUserContainerProps = {
  userId: number;
  onBack: () => void;
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
          onBack={props.onBack}
          onUserEdited={(user) => console.log(JSON.stringify(user, null, 2))}
        />
      )}
    </>
  );
};

export {  EditUserContainer };
