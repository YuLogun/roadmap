import React from 'react';
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

import { useStyles } from './PresetAdder.styles';

const PresetAdder = ({
    isOpen, onCancel, onSubmit, employeeList
}) => {
    const classes = useStyles();

    const presetsList = useSelector(state => state.presetsList);
    const dispatch = useDispatch();

    const [sCurrentUser, setCurrentUser] = React.useState(-1);
    const [sCurrentPreset, setCurrentPreset] = React.useState(-1);

    const userSelectChangeHandler = (param) => {
        setCurrentUser(param.target.value);
    }

    const presetSelectChangeHandler = (param) => {
        setCurrentPreset(param.target.value);
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
                            <MenuItem className={classes.menuItem} value={-1}>Выберите сотрудника</MenuItem>
                            {
                                employeeList ? (
                                    employeeList.map((employeeData, index) => (
                                        <MenuItem key={index} className={classes.menuItem} value={employeeData.username}>{employeeData.name}</MenuItem>
                                    ))
                                ) : (
                                    <MenuItem className={classes.menuItem} value={-2}><CircularProgress /></MenuItem>
                                )
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
                            onOpen={() => dispatch(getAllPresets())}
                        >
                            <MenuItem className={classes.menuItem} value={-1}>Выберите пресет</MenuItem>
                            {
                                presetsList ? (
                                    presetsList.map((presetItem, index) => (
                                        <MenuItem className={classes.menuItem} key={index} value={presetItem.slug}>{presetItem.name}</MenuItem>
                                    ))
                                ) : (
                                    <MenuItem className={classes.menuItem} value={-2}><CircularProgress /></MenuItem>
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
                            if (sCurrentUser !== -1 && sCurrentPreset !== -1) onSubmit(sCurrentUser, sCurrentPreset)
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
