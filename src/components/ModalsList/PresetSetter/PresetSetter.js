import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPresets } from '../../../redux/reducer';

//components
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

import { useStyles } from './PresetSetter.styles';

const PresetSetter = ({
    isOpen, onCancel, onSubmit
}) => {
    const classes = useStyles();

    const presetsList = useSelector(state => state.presetsList);
    const currentPreset = useSelector(state => state.currentPreset);
    const employeeList = useSelector(state => state.developersList);
    const dispatch = useDispatch();

    const [selectedUser, setSelectedUser] = useState(-1);

    const handleListItemClick = (event, username) => {
        setSelectedUser(username);
      };

    const body = (
        <div className={classes.formWindow}>
                <div className={classes.modalHeader}>
                    <span className={classes.headerText}>Назначить пресет</span>
                </div>
                <div className={classes.modalBody}>
                    <List component="nav">
                        {
                            employeeList ? (
                                employeeList.map((userData, index) => (
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
                <div className={classes.modalFooter}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => onSubmit(e, selectedUser, currentPreset)}
                    >
                        Назначить
                    </Button>
                </div>

            </div>
      );

      return (
        <div>
          <Modal
            open={isOpen}
            onClose={onCancel}
            className={classes.modalWindow}
          >
            {body}
          </Modal>
        </div>
      );
}

export default PresetSetter;
