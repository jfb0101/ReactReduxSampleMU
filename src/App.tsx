import React, { useState } from "react";
import "./styles.css";
import { EditUserContainer } from "./components/user/edit/EditUserContainer";
import { ListUsersTest } from "./components/user/list/ListUsers.test";
import { ListUsersContainer } from "./components/user/list/ListUsersContainer";
import { TopBarContainer } from "./components/top-bar/TopBarContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const [userToEditId, setUserToEditId] = useState<number>(null);

  return (
    <div className="App">
      <Provider store={store}>
        <TopBarContainer />

        {userToEditId == null && (
          <ListUsersContainer onEditUser={setUserToEditId} />
        )}

        {userToEditId != null && (
          <EditUserContainer
            userId={userToEditId}
            onBack={() => setUserToEditId(null)}
          />
        )}
      </Provider>
    </div>
  );
}
