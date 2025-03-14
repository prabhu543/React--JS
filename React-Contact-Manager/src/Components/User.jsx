import { RiDeleteBin4Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import { UserDataContext } from "../store/UserData";

const User = ({name , email  }) => {
  const { deleteUser } = useContext(UserDataContext);


  return (
    <div className="user-container">
      <div className="user">
        <div className="profile">
          <img src="https://www.pngall.com/wp-content/uploads/5/Profile.png" alt="" />
          <div className="info">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        <div className="buttons">
          <FaRegEdit />
          <RiDeleteBin4Line onClick={() => deleteUser(email)} />
        </div>
      </div>
    </div>

  )
}

export default User;