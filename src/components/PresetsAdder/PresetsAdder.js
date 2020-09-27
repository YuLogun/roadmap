import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './PresetsAdder.styles';

const PresetsAdder = () => {
    const classes = useStyles();

    return (
        <div className={classes.presetsAdderContainer}>
            <div className={classes.presetsAdderHeader}>
                <ArrowBackIosIcon />
                <div className={classes.presetAdderTitle}>
                    <span>Создание роадмапа</span>
                </div>
            </div>
            <div className={classes.presetsAdderBody}>
                <form className={classes.formBody}>
                    <TextField
                        className={classes.formField}
                        label="Логин"
                        // onChange={(e) => setLoginInput(e.target.value)}
                    />
                    <TextField
                        className={classes.formField}
                        label="Пароль"
                        type="password"
                        // onChange={(e) => setPasswordInput(e.target.value)}
                    />
                    <Button
                        className={classes.formField}
                        variant="contained"
                        color="primary"
                        // onClick={(e) => onSubmit(e, loginInput, passwordInput)}
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default PresetsAdder;