import React from 'react';

//components
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './PresetAdder.styles';

//for tests
import { userToken } from '../../../APISettings/APISettings';

const PresetAdder = ({
    isOpen, onCancel, onSubmit, currentUser, employeeList
}) => {
    const classes = useStyles();

    const [isLoading, setData] = React.useState(true);
    const [userList, setUsers] = React.useState([]);
    const [presetsList, setPresets] = React.useState([]);
    const [sCurrentUser, setCurrentUser] = React.useState(currentUser);
    const [sCurrentPreset, setCurrentPreset] = React.useState(-1);

    const userSelectChangeHandler = (param) => {
        setCurrentUser(param.target.value);
    }

    const presetSelectChangeHandler = (param) => {
        setCurrentPreset(param.target.value);
    }

    const presetsRequestOptions = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + userToken
        }
    }

    const getPresets = () => {
        fetch('http://influx-roadmap.herokuapp.com/api/presets', presetsRequestOptions)
            .then(res => res.json())
            .then(data => {
                setPresets(data.data);
                setData(false);
                console.log(data.data);
            });
    }

    const body = (
        <div className={classes.formWindow}>
                <div className={classes.modalHeader}>
                    <span className={classes.headerText}>Назначить пресет</span>
                </div>
                <div className={classes.modalBody}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Сотрудник
                        </InputLabel>
                        <Select
                            value={sCurrentUser}
                            displayEmpty
                            className={classes.modalInput}
                            onChange={userSelectChangeHandler}
                        >
                            {
                                employeeList.map((employeeData, index) => (
                                    <MenuItem key={index} className={classes.menuItem} value={employeeData.username}>{employeeData.name}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Выберите сотрудника</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Пресет
                        </InputLabel>
                        <Select
                            value={sCurrentPreset}
                            displayEmpty
                            className={classes.modalInput}
                            onChange={presetSelectChangeHandler}
                            onOpen={getPresets}
                        >
                            <MenuItem className={classes.menuItem} value={-1}>Выберите пресет</MenuItem>
                            {
                                isLoading ? (
                                    <MenuItem className={classes.menuItem} value={-2}><CircularProgress /></MenuItem>
                                ) : (
                                    presetsList.map((presetItem, index) => (
                                        <MenuItem className={classes.menuItem} key={index} value={presetItem.slug}>{presetItem.name}</MenuItem>
                                    ))
                                )
                            }
                        </Select>
                        <FormHelperText>Выберите пресет для сотрудника</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.modalFooter}>
                    <Button
                        variant="contained"
                        onClick={onCancel}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                            onSubmit(sCurrentUser, sCurrentPreset)
                        }}
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

export default PresetAdder;
