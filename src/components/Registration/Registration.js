import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/reducer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './Registration.styles.js';
import { useLocation } from 'react-router-dom';

const Registration = () => {
    const classes = useStyles();
    const location = useLocation();

    const dispatch = useDispatch();

    const [inviteToken, setInviteToken] = useState(new URLSearchParams(location.search).get('invite_token'));
    const [iName, setIName] = useState("");
    const [iUsername, setIUsername] = useState("");
    const [iPassword, setIPassword] = useState("");
    const [iPasswordConfirmation, setIPasswordConfirmation] = useState("");

    const onSubmit = (e, inviteToken, name, username, password, passwordConfirmation) => {
        dispatch(register(inviteToken, name, username, password, passwordConfirmation));
    }

    return (
        <div className={classes.authorizationContainer}>
            <div className={classes.authFormContainer}>
                <div className={classes.formHeader}>
                    <span>Регистрация</span>
                </div>
                <form className={classes.formBody}>
                    <TextField
                        className={classes.formField}
                        label="Ваше имя"
                        onChange={(e) => setIName(e.target.value)}
                    />
                    <TextField
                        className={classes.formField}
                        label="Username"
                        onChange={(e) => setIUsername(e.target.value)}
                    />
                    <TextField
                        className={classes.formField}
                        label="Пароль"
                        type="password"
                        onChange={(e) => setIPassword(e.target.value)}
                    />
                    <TextField
                        className={classes.formField}
                        label="Подтвердить пароль"
                        type="password"
                        onChange={(e) => setIPasswordConfirmation(e.target.value)}
                    />
                    <Button
                        className={classes.formField}
                        variant="contained"
                        color="primary"
                        onClick={(e) => onSubmit(e, inviteToken, iName, iUsername, iPassword, iPasswordConfirmation)}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
            <div className={classes.authLogoContainer}>
                <span>LOGO</span>
            </div>
        </div>
    )
    }

export default Registration;