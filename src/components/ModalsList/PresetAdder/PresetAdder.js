import React from 'react';

//components
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { useStyles } from './PresetAdder.styles';

const PresetAdder = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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
                            value={10}
                            onChange={()=>{}}
                            displayEmpty
                            className={classes.modalInput}
                        >
                            <MenuItem className={classes.menuItem} value={10}>Хаценкевич В.А.</MenuItem>
                            <MenuItem className={classes.menuItem} value={20}>Петров К.Ф.</MenuItem>
                            <MenuItem className={classes.menuItem} value={30}>Васичкин П.В.</MenuItem>
                        </Select>
                        <FormHelperText>Выберите сотрудника</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink>
                            Пресет
                        </InputLabel>
                        <Select
                            value={10}
                            onChange={()=>{}}
                            displayEmpty
                            className={classes.modalInput}
                        >
                            <MenuItem className={classes.menuItem} value={10}>Пресет 1</MenuItem>
                            <MenuItem className={classes.menuItem} value={20}>Пресет 2</MenuItem>
                            <MenuItem className={classes.menuItem} value={30}>Пресет 3</MenuItem>
                        </Select>
                        <FormHelperText>Выберите пресет для сотрудника</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.modalFooter}>
                    <Button variant="contained">Отмена</Button>
                    <Button variant="contained" color="primary">Назначить</Button>
                </div>
                
            </div>
      );

      return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            className={classes.modalWindow}
          >
            {body}
          </Modal>
        </div>
      );
}

export default PresetAdder;
