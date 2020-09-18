import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//styles
<<<<<<< HEAD
import { useStyles } from './UserList.styles';
=======
import './UserList.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  userItem: {
    paddingLeft: '30px'
  },
  wideScreenList: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileScreenList: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  formControl: {
    width: '200px'
  }
}));
>>>>>>> master

const UserList = ({ currentUserId, usersData }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(usersData[0].username);
  const [selectedUserId, setUserId] = React.useState(usersData[0].username);

  //Функция для выбора пользователя в списке
  const handleListItemClick = (event, userId) => {
    setSelectedIndex(userId);
    currentUserId(userId);
  };

  //Функция для выбора пользователя в Select
  const handleChange = (event) => {
    const userId = event.target.value;
    setSelectedIndex(userId);
    currentUserId(userId);
  };

  return (
    <div>
      <div className={classes.wideScreenList}>
        <div className="userListHeader">
          <span>Сотрудник:</span>
        </div>
        <List component="nav">
<<<<<<< HEAD
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
=======
          {usersData.map((userData, index) => (
            <ListItem
              button
              selected={selectedIndex === userData.id}
              key={index}
              className={classes.userItem}
              onClick={(e) => handleListItemClick(e, userData.id)}
            >
              <ListItemText primary={userData.name} />
            </ListItem>
          ))}
>>>>>>> master
        </List>
      </div>
      <div className={classes.mobileScreenList}>
        <span className={classes.selectLabel}>Сотрудник:</span>
        <FormControl className={classes.formControl}>
          <Select
            value={selectedIndex}
            onChange={handleChange}
          >
<<<<<<< HEAD
            {
              usersData.map((userData, index) => (
                <MenuItem key={index} value={userData.username}>{userData.name}</MenuItem>
              ))
            }
=======
            {usersData.map((userData, index) => (
              <MenuItem value={userData.id}>{userData.name}</MenuItem>
            ))}
>>>>>>> master
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default UserList;
