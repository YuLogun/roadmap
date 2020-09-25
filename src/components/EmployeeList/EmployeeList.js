import React, { useEffect, useState } from 'react';
import { getDevelopers } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

//styles
import { useStyles } from './EmployeeList.styles';
import { NavLink } from 'react-router-dom';

const EmployeeList = ({ currentUsername }) => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(-1);

  const developersList = useSelector(state => state.developersList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDevelopers());
  }, []);

//   Функция для выбора пользователя в списке
  const handleListItemClick = (event, username) => {
    setSelectedUser(username);
    currentUsername(username);
  };

  return (
    <div>
      <div className={classes.wideScreenList}>
        <div className={classes.userListHeader}>
            <div className={classes.finderInputBlock}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Найти по имени / должности" className={classes.finderInputField} />
                    </Grid>
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.adderButtonBlock}>
                <Button variant="contained" color="primary">
                    Добавить +
                </Button>
            </div>
        </div>
        <List component="nav">
          {
            developersList ? (
                developersList.map((userData, index) => (
                    // <NavLink to="/"
                    <ListItem
                        button
                        selected={selectedUser === userData.username}
                        key={index}
                        className={classes.userItem}
                        onClick={(e) => handleListItemClick(e, userData.username)}
                    >
                    <ListItemText primary={userData.name + ' / ' + userData.position} />
                    </ListItem>
                ))
            ) : (
              <div>Loading...</div>
            )
          }
        </List>
      </div>
    </div>
  );
};

export default EmployeeList;
