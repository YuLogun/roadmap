import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//styles
import { useStyles } from './UserList.styles';

const UserList = ({ currentUserId, usersData }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(usersData[0].username);
  const [selectedUserId, setUserId] = React.useState(usersData[0].username);

  //Функция для выбора пользователя в списке
  const handleListItemClick = (event, userId) => {
    setSelectedIndex(userId);
    currentUserId(userId)
  };

  //Функция для выбора пользователя в Select
  const handleChange = (event) => {
    const userId = event.target.value;
    setSelectedIndex(userId);
    currentUserId(userId)
  };

  return (
    <div>
      <div className={classes.wideScreenList}>
        <div className="userListHeader">
            <span>Сотрудник:</span>
        </div>
        <List component="nav">
          {
            usersData.map((userData, index) => (
              <ListItem
                button
                selected={selectedIndex === userData.username}
                key={index}
                className={classes.userItem}
                onClick={(e) => handleListItemClick(e, userData.username)}
              >
                <ListItemText primary={userData.name} />
              </ListItem>
            ))
          }
        </List>
      </div>
      <div className={classes.mobileScreenList}>
        <span className={classes.selectLabel}>Сотрудник:</span>
        <FormControl className={classes.formControl}>
          <Select
            value={selectedIndex}
            onChange={handleChange}
          >
            {
              usersData.map((userData, index) => (
                <MenuItem key={index} value={userData.username}>{userData.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default UserList;
