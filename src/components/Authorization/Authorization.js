import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, setAuthorized } from '../../redux/reducer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './Authorization.styles.js';
import { Redirect } from 'react-router-dom';

import { isAuthorized, getUserRole } from '../../services/Authorization.service';

const Authorization = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading);
    const currentUser = useSelector(state => state.currentUser);

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const onSubmit = (e, email, password) => {
        //nicolas.armand@example.com
        //password
        dispatch(login(email, password));
    }

    if (isAuthorized()) {
        dispatch(setAuthorized());
        return getUserRole() === "manager" ? (
            <Redirect to="/" />
        ) : (
            <Redirect to="/roadmap" />
        )
    } else {
        return (
            <div className={classes.authorizationContainer}>
                <div className={classes.authFormContainer}>
                    <div className={classes.formHeader}>
                        <span>Войдите в свой аккаунт</span>
                    </div>
                    <form className={classes.formBody}>
                        <TextField
                            className={classes.formField}
                            label="Логин"
                            onChange={(e) => setLoginInput(e.target.value)}
                        />
                        <TextField
                            className={classes.formField}
                            label="Пароль"
                            type="password"
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />
                        <Button
                            className={classes.formField}
                            variant="contained"
                            color="primary"
                            onClick={(e) => onSubmit(e, loginInput, passwordInput)}
                        >
                            Войти
                        </Button>
                    </form>
                </div>
                <div className={classes.authLogoContainer}>
                    <span>LOGO</span>
                </div>
            </div>
        )
    }
}

export default Authorization;