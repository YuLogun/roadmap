import React from "react";

//styles
import "./UserList.scss";

const UserList = ({ currentUserId, usersData }) => {
  //const [userList, setUserList] = useState(usersData);
  //const [currentUser, setCurrentUser] = useState(null);

  /* const clickOnUserHandler = (userId, e) => {
    setCurrentUser(() => {
      currentUserId(userId);
      return userId;
    });
  }; */

  return (
    <div className="container">
      <div className="userListHeader">
        <span>Список сотрудников</span>
      </div>
      {usersData.map((userData, index) => (
        <div
          key={index}
          className="userItem"
          onClick={(e) => currentUserId(userData.id)}
          //onClick={(e) => clickOnUserHandler(userData.id, e)}
        >
          <span className="userItemName">{userData.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
