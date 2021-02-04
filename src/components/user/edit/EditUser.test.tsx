import React from "react";
import { EditUser, EditUserProps } from "./EditUser";

const EditUserTest = () => {
  const props: EditUserProps = {
    user: {
      id: 1,
      name: "fulano"
    },
    onUserEdited: (user) => console.log(JSON.stringify(user, null, 2))
  };
  return <EditUser {...props} />;
};

export { EditUserTest };
