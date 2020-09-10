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
        {
            userList.map((userData, index) => (
                <div key={index} className="userItem">
                    <span className="userItemName" onClick={(e) => clickOnUserHandler(userData.id, e)}>{userData.name}</span>
                </div>
            ))
        }
    </div>
  );
};

export default UserList;
