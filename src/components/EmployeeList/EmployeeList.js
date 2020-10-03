import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDevelopers, sendInvite } from '../../redux/reducer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InviteSender from '../ModalsList/InviteSender/InviteSender';

//styles
import { useStyles } from './EmployeeList.styles';

const EmployeeList = ({ currentUsername }) => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(-1);
  const [InviteSenderIsOpen, setInviteSenderDisplay] = useState(false);

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

  const submitInviteSenderHandler = (e, email) => {
    dispatch(sendInvite(email, 'employee'));
    setInviteSenderDisplay(false);
  }

  return (
    <div>
      <InviteSender 
        isOpen={InviteSenderIsOpen}
        onCancel={(e) => setInviteSenderDisplay(false)}
        onSubmit={submitInviteSenderHandler}
      />
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
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={(e) => setInviteSenderDisplay(true)}
                >
                    Добавить +
                </Button>
            </div>
        </div>
        <List component="nav">
          {
            developersList ? (
                developersList.map((userData, index) => (
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
