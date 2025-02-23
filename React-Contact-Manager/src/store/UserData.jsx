import { createContext, useReducer  } from "react";

export const UserDataContext = createContext({
  userInfo  : [],
  addNewUser : () => {},
  deleteUser : () => {},
});


const userInfoReducer = (currentUserInfo, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...currentUserInfo, { name: action.payload.name, email: action.payload.email }];
    case "DELETE_USER":
      return currentUserInfo.filter((user) => user.email !== action.payload.email);
    default:
      return currentUserInfo; // Always return state if action is unknown
  }
};

const UserDataContextProvider = ({ children }) => {
  const [userInfo , dispatchUserInfo ] = useReducer(userInfoReducer , []);

  const addNewUser = (userName , userEmail) => {
    dispatchUserInfo({
      type : "ADD_USER",
      payload : {
        name : userName, 
        email : userEmail
      }
    });
  }

  const deleteUser = ( email ) =>{
    dispatchUserInfo({
      type : "DELETE_USER",
      payload : {
        email
      }
    });
  }
  return (
    <UserDataContext.Provider 
      value={
        {userInfo ,
          addNewUser,
          deleteUser
        }}>
      {children}
    </UserDataContext.Provider>
  )
}
export default UserDataContextProvider;