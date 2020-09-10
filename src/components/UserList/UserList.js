import React, { useEffect, useState } from "react";

//styles
import "./UserList.scss";

const UserList = ({
    currentUserId,
    usersData
}) => {
    const[userList, setUserList] = useState(usersData);
    const[currentUser, setCurrentUser] = useState(null);

    const clickOnUserHandler = (userId, e) => {
        setCurrentUser(prevState => {
            currentUserId(userId);
            return userId;
        });
    }

  return (
    <div className="container">
        <div className="userListHeader">
            <span>Список сотрудников</span>
        </div>
        {
            userList.map((userData, index) => (
                <div key={index} className="userItem" onClick={(e) => clickOnUserHandler(userData.id, e)}>
                    <span className="userItemName">{userData.name}</span>
                </div>
            ))
        }
    </div>
  );
};

export default UserList;
