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
import './EmployeeList.styles.scss';

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
    dispatch(sendInvite(email));
    setInviteSenderDisplay(false);
  }

  return (
    <div>
      <InviteSender 
        isOpen={InviteSenderIsOpen}
        onCancel={(e) => setInviteSenderDisplay(false)}
        onSubmit={submitInviteSenderHandler}
      />
      <div className="wideScreenList">
        <div className="employeeListHeaderBlock">
          <span className="employeeListHeaderTitle">Сотрудники</span>
        </div>
        <div className="employeeNavBlock">
          <div className="employeeFinderBlock">
            <svg className="finderIcon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.80357 12.1429C10.0088 12.1429 12.6071 9.64844 12.6071 6.57143C12.6071 3.49441 10.0088 1 6.80357 1C3.59835 1 1 3.49441 1 6.57143C1 9.64844 3.59835 12.1429 6.80357 12.1429Z" stroke="#858585"/>
              <path d="M11.3174 10.9048L14.5416 14" stroke="#858585" stroke-linecap="square"/>
            </svg>
            <input className="finderInput" type="text" placeholder="Найти по имени / должности"/>
          </div>
          <div className="employeeBtnBlock">
            <Button 
              variant="contained"
              color="primary"
              onClick={(e) => setInviteSenderDisplay(true)}
              className={classes.navButtonElem + " navButtonElem"}
            >
                <span className="navButtonTitle">Добавить +</span>
            </Button>
          </div>
        </div>

        <div className="employeeListBlock">
          <div className="employeeListHeader">
            <div className="employeeHeaderElement">
              <span className="employeeHeaderElementTitle">Имя пользователя</span>
            </div>
            <div className="employeeHeaderElement">
              <span className="employeeHeaderElementTitle">Должность</span>
            </div>
            <div className="employeeHeaderElement">
              <span className="employeeHeaderElementTitle">Статус</span>
            </div>
          </div>
          <div className="employeeListBody">
            {
              developersList ? (
                  developersList.map((userData, index) => (
                    <div 
                      className="employeeListItem"
                      onClick={(e) => handleListItemClick(e, userData.username)}
                    >
                      <div className="listItemName">
                        <img className="listItemNameIcon" />
                        <span className="listItemNameTitle">{userData.name}</span>
                      </div>
                      <div className="listItemPosition">
                        <span className="listItemPositionTitle">{userData.position}</span>
                      </div>
                      <div className="listItemStatus">
                        <div className="listItemStatusMarker">
                          <span className="listItemStatusTitle">Назначен</span>
                        </div>
                      </div>
                    </div>
                      // <ListItem
                      //     button
                      //     selected={selectedUser === userData.username}
                      //     key={index}
                      //     className={classes.userItem}
                      //     onClick={(e) => handleListItemClick(e, userData.username)}
                      // >
                      // <ListItemText primary={userData.name + ' / ' + userData.position} />
                      // </ListItem>
                  ))
              ) : (
                <div>Loading...</div>
              )
            }
          </div>
        </div>
        
        {/* <List component="nav">
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
        </List> */}
      </div>
    </div>
  );
};

export default EmployeeList;
