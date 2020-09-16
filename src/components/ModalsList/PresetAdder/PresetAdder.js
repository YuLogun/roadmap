import React, { useEffect } from 'react';

//components
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { useStyles } from './PresetAdder.styles';

const PresetAdder = ({
    isOpen, onCancel, onSubmit, currentUser
}) => {
    const classes = useStyles();

    const [isLoading, setData] = React.useState(true);
    const [userList, setUsers] = React.useState([]);
    const [presetsList, setPresets] = React.useState([]);

    useEffect(() => {
        fetch('http://influx-roadmap.herokuapp.com/api/presets', presetsRequestOptions)
            .then(res => res.json())
            .then(data => {
                setPresets(data.data);
                setData(false);
                console.log(data.data);
            });
    }, [])

    const presetsRequestOptions = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer 10|0xb75qbdLjI6cUQfLCI2jgCsA2NjNY0rNKAw2uP7"
        }
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
                            value={currentUser}
                            displayEmpty
                            className={classes.modalInput}
                        >
                            <MenuItem className={classes.menuItem} value={0}>Хаценкевич В.А.</MenuItem>
                            <MenuItem className={classes.menuItem} value={1}>Петров К.Ф.</MenuItem>
                            <MenuItem className={classes.menuItem} value={2}>Васичкин П.В.</MenuItem>
                        </Select>
                        <FormHelperText>Выберите сотрудника</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Пресет
                        </InputLabel>
                        <Select
                            value={isLoading ? 0 : presetsList[0].name}
                            displayEmpty
                            className={classes.modalInput}
                        >
                            {
                                isLoading ? "" :
                                    presetsList.map((presetItem, index) => (
                                        <MenuItem className={classes.menuItem} key={index} value={presetItem.name}>{presetItem.name}</MenuItem>
                                    ))
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
                        onClick={onSubmit}
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
