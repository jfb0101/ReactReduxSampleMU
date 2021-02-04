import { User } from "../../models/User";

export function currentUserReducer(currentUser: User = {}, action: any): User {
  switch (action.type) {
    case "CREATE_USER":
      return action.currentUser;
    default:
      return currentUser;
  }
}
