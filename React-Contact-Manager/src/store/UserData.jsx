import { createContext  } from "react";

export const UserDataContext = createContext({
  userInfo  : [],
  addNewUser : () => {},
  deleteUser : () => {},
});