import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//styles
import { useStyles } from './UserList.styles';

//testData
import { userToken } from '../../APISettings/APISettings';

const UserList = ({ currentUserId }) => {
  const classes = useStyles();

  const [isLoading, setData] = useState(true);
  const [usersList, setUsersList] = useState([ ]);
  const [selectedUser, setSelectedUser] = useState("");
  // const [selectedUserId, setUserId] = useState(usersData[0].username);

  useEffect(() => {
    const requestUrl = "http://influx-roadmap.herokuapp.com/api/employees";
    const requestParams = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + userToken
      }
    };

    fetch(requestUrl, requestParams)
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert('?');
        }

        console.log(data.data);
        setUsersList(data.data);
        setData(false);
      })
  }, []);

  //Функция для выбора пользователя в списке
  const handleListItemClick = (event, username) => {
    setSelectedUser(username);
    currentUserId(username);
  };

  //Функция для выбора пользователя в Select
  const handleChange = (event) => {
    const username = event.target.value;
    setSelectedUser(username);
    currentUserId(username);
  };

  // debugger;

  return (
    <div>
      <div className={classes.wideScreenList}>
        <div className="userListHeader">
          <span>Сотрудник:</span>
        </div>
        <List component="nav">
          {
            isLoading ? (
              <div>Loading...</div>
            ) : (
              usersList.map((userData, index) => (
                <ListItem
                  button
                  selected={selectedUser === userData.username}
                  key={index}
                  className={classes.userItem}
                  onClick={(e) => handleListItemClick(e, userData.username)}
                >
                  <ListItemText primary={userData.name} />
                </ListItem>
              ))
            )
          }
        </List>
      </div>
      <div className={classes.mobileScreenList}>
        <span className={classes.selectLabel}>Сотрудник:</span>
        <FormControl className={classes.formControl}>
          <Select
            value={selectedUser}
            onChange={handleChange}
          >
            {
              isLoading ? (
                <div>Loading...</div>
              ) : (
                usersList.map((userData, index) => (
                  <MenuItem key={index} value={userData.username}>{userData.name}</MenuItem>
                ))
              )
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default UserList;
