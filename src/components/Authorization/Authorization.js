import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, setAuthorized } from '../../redux/reducer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Redirect } from 'react-router-dom';

import { isAuthorized, getUserRole } from '../../services/Authorization.service';

import { useStyles } from './Authorization.styles.js';
import './Authorization.styles.scss';

const Authorization = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading);
    const currentUser = useSelector(state => state.currentUser);

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const onSubmit = (e, email, password) => {
        //nicolas.armand@example.com //manager
        //pbarrows@example.com
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
                <div className="authFormContainer">
                    <div className="formHeader">
                        <span className="formHeaderTitle">Войдите в свой аккаунт</span>
                    </div>
                    <form className="formBody">
                        <div className="formElementBlock">
                            <label className="formElementLabel">Почта</label>
                            <input 
                                type="text"
                                className="formElementInput"
                                placeholder="admin1@ml.org"
                                onChange={(e) => setLoginInput(e.target.value)}
                            />
                        </div>
                        <div className="formElementBlock">
                            <label className="formElementLabel">Пароль</label>
                            <input 
                                type="password"
                                className="formElementInput"
                                placeholder="*********"
                                onChange={(e) => setPasswordInput(e.target.value)}
                            />
                        </div>
                        
                        {/* <TextField
                            className={classes.formField}
                            label="Логин"
                            onChange={(e) => setLoginInput(e.target.value)}
                        />
                        <TextField
                            className={classes.formField}
                            label="Пароль"
                            type="password"
                            onChange={(e) => setPasswordInput(e.target.value)}
                        /> */}
                        {/* <Button 
              variant="contained"
              color="primary"
              onClick={(e) => setInviteSenderDisplay(true)}
              className={classes.navButtonElem + " navButtonElem"}
            >
                <span className="navButtonTitle">Добавить +</span>
            </Button> */}
                        <Button
                            className={classes.formBtn}
                            variant="contained"
                            color="primary"
                            onClick={(e) => onSubmit(e, loginInput, passwordInput)}
                        >
                            <span className="formBtnTitle">Войти</span>
                        </Button>
                    </form>
                </div>
                {/* <div className={classes.authFormContainer}>
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
                </div> */}
                <div className={classes.authLogoContainer}>
                <svg width="339" height="440" viewBox="0 0 339 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M165.66 10C161.811 3.33333 152.189 3.33333 148.34 10L102.44 89.5C98.5914 96.1667 103.403 104.5 111.101 104.5H131V301V333C131 338.523 135.477 343 141 343H173H203H235C240.523 343 245 338.523 245 333V301V187H272V199H265C259.477 199 255 203.477 255 209V241C255 246.523 259.477 251 265 251H282H298H314C319.523 251 324 246.523 324 241V177V145C324 139.477 319.523 135 314 135H282H235H203C197.477 135 193 139.477 193 145V177V291H183V104.5H202.899C210.597 104.5 215.409 96.1667 211.56 89.5L165.66 10ZM15 199C9.47715 199 5 203.477 5 209V241C5 246.523 9.47715 251 15 251H111C116.523 251 121 246.523 121 241V209C121 203.477 116.523 199 111 199H15Z" fill="white"/>
                    </g>
                    <path d="M25.72 414.72C22.92 414.72 20.44 414.16 18.28 413.04C16.16 411.88 14.48 410.28 13.24 408.24C12 406.2 11.38 403.82 11.38 401.1V383.4H16.9V401.04C16.9 402.88 17.3 404.48 18.1 405.84C18.94 407.16 20.02 408.18 21.34 408.9C22.7 409.62 24.14 409.98 25.66 409.98C27.22 409.98 28.66 409.62 29.98 408.9C31.34 408.18 32.42 407.16 33.22 405.84C34.06 404.48 34.48 402.88 34.48 401.04V383.4H40V401.1C40 403.82 39.38 406.2 38.14 408.24C36.94 410.28 35.26 411.88 33.1 413.04C30.94 414.16 28.48 414.72 25.72 414.72ZM64.3014 382.68C61.3414 382.68 58.6814 383.32 56.3214 384.6C53.9614 385.88 52.0814 387.74 50.6814 390.18C49.3214 392.58 48.6414 395.48 48.6414 398.88V427.2H54.1614V408.54H54.2814C55.2814 410.38 56.7614 411.88 58.7214 413.04C60.6814 414.16 62.8414 414.72 65.2014 414.72C68.0014 414.72 70.5214 414.08 72.7614 412.8C75.0414 411.52 76.8214 409.72 78.1014 407.4C79.4214 405.04 80.0814 402.26 80.0814 399.06C80.0814 395.7 79.4014 392.8 78.0414 390.36C76.7214 387.88 74.8614 385.98 72.4614 384.66C70.1014 383.34 67.3814 382.68 64.3014 382.68ZM64.3014 387.42C66.1814 387.42 67.8814 387.88 69.4014 388.8C70.9614 389.72 72.2014 391.02 73.1214 392.7C74.0414 394.38 74.5014 396.38 74.5014 398.7C74.5014 400.94 74.0414 402.9 73.1214 404.58C72.2414 406.26 71.0214 407.58 69.4614 408.54C67.9414 409.5 66.2414 409.98 64.3614 409.98C62.4814 409.98 60.7614 409.52 59.2014 408.6C57.6814 407.68 56.4614 406.38 55.5414 404.7C54.6614 402.98 54.2214 400.96 54.2214 398.64C54.2214 396.36 54.6614 394.38 55.5414 392.7C56.4614 391.02 57.6814 389.72 59.2014 388.8C60.7214 387.88 62.4214 387.42 64.3014 387.42ZM100.882 414V401.82C97.9617 401.46 95.4817 400.52 93.4417 399C91.4017 397.44 89.8417 395.48 88.7617 393.12C87.6817 390.72 87.1417 388.02 87.1417 385.02V372H92.9017V385.5C92.9017 387.58 93.3217 389.5 94.1617 391.26C95.0417 392.98 96.2817 394.38 97.8817 395.46C99.5217 396.5 101.502 397.02 103.822 397.02C106.102 397.02 108.062 396.5 109.702 395.46C111.342 394.38 112.582 392.98 113.422 391.26C114.262 389.5 114.682 387.58 114.682 385.5V372H120.442V385.02C120.442 388.02 119.902 390.72 118.822 393.12C117.742 395.52 116.162 397.48 114.082 399C112.042 400.52 109.562 401.46 106.642 401.82V414H100.882ZM141.21 414.72C138.09 414.72 135.31 414.02 132.87 412.62C130.47 411.18 128.57 409.26 127.17 406.86C125.81 404.42 125.13 401.7 125.13 398.7C125.13 395.7 125.81 393 127.17 390.6C128.57 388.16 130.47 386.24 132.87 384.84C135.31 383.4 138.09 382.68 141.21 382.68C144.33 382.68 147.09 383.4 149.49 384.84C151.93 386.24 153.83 388.16 155.19 390.6C156.59 393 157.29 395.7 157.29 398.7C157.29 401.7 156.59 404.42 155.19 406.86C153.83 409.26 151.93 411.18 149.49 412.62C147.09 414.02 144.33 414.72 141.21 414.72ZM141.21 409.98C143.33 409.98 145.17 409.48 146.73 408.48C148.29 407.48 149.51 406.14 150.39 404.46C151.27 402.74 151.71 400.82 151.71 398.7C151.71 396.58 151.27 394.68 150.39 393C149.51 391.28 148.29 389.92 146.73 388.92C145.17 387.92 143.33 387.42 141.21 387.42C139.13 387.42 137.29 387.92 135.69 388.92C134.13 389.92 132.91 391.28 132.03 393C131.15 394.68 130.71 396.58 130.71 398.7C130.71 400.82 131.15 402.74 132.03 404.46C132.91 406.14 134.13 407.48 135.69 408.48C137.29 409.48 139.13 409.98 141.21 409.98ZM178.708 414.72C175.908 414.72 173.428 414.16 171.268 413.04C169.148 411.88 167.468 410.28 166.228 408.24C164.988 406.2 164.368 403.82 164.368 401.1V383.4H169.888V401.04C169.888 402.88 170.288 404.48 171.088 405.84C171.928 407.16 173.008 408.18 174.328 408.9C175.688 409.62 177.128 409.98 178.648 409.98C180.208 409.98 181.648 409.62 182.968 408.9C184.328 408.18 185.408 407.16 186.208 405.84C187.048 404.48 187.468 402.88 187.468 401.04V383.4H192.988V401.1C192.988 403.82 192.368 406.2 191.128 408.24C189.928 410.28 188.248 411.88 186.088 413.04C183.928 414.16 181.468 414.72 178.708 414.72ZM201.63 414V392.1C201.63 389.38 202.39 387.26 203.91 385.74C205.47 384.18 207.61 383.4 210.33 383.4H216.63V388.14H211.35C209.99 388.14 208.95 388.54 208.23 389.34C207.51 390.1 207.15 391.14 207.15 392.46V414H201.63ZM221.312 414V409.26H235.952C237.392 409.26 238.512 408.82 239.312 407.94C240.152 407.02 240.572 405.98 240.572 404.82C240.572 403.74 240.192 402.8 239.432 402C238.712 401.16 237.652 400.74 236.252 400.74H230.072C227.112 400.74 224.732 400.02 222.932 398.58C221.172 397.1 220.292 394.96 220.292 392.16C220.292 390.6 220.672 389.16 221.432 387.84C222.192 386.52 223.252 385.46 224.612 384.66C225.972 383.82 227.532 383.4 229.292 383.4H243.392V388.14H229.832C228.632 388.14 227.652 388.54 226.892 389.34C226.172 390.1 225.812 390.98 225.812 391.98C225.812 392.98 226.172 393.86 226.892 394.62C227.652 395.34 228.712 395.7 230.072 395.7H235.952C239.232 395.7 241.732 396.48 243.452 398.04C245.212 399.6 246.092 401.8 246.092 404.64C246.092 406.28 245.692 407.82 244.892 409.26C244.092 410.66 242.972 411.8 241.532 412.68C240.092 413.56 238.452 414 236.612 414H221.312ZM268.912 414C265.512 414 262.512 413.38 259.912 412.14C257.352 410.86 255.332 409.08 253.852 406.8C252.412 404.48 251.692 401.78 251.692 398.7C251.692 395.66 252.312 392.94 253.552 390.54C254.792 388.1 256.512 386.18 258.712 384.78C260.912 383.38 263.472 382.68 266.392 382.68C269.552 382.68 272.172 383.36 274.252 384.72C276.372 386.08 277.952 387.92 278.992 390.24C280.032 392.52 280.552 395.08 280.552 397.92C280.552 398.88 280.492 399.76 280.372 400.56H257.572C257.772 402.44 258.392 404.04 259.432 405.36C260.472 406.64 261.792 407.62 263.392 408.3C265.032 408.94 266.832 409.26 268.792 409.26H276.772V414H268.912ZM257.512 396.66H274.972C274.972 395.34 274.712 393.96 274.192 392.52C273.672 391.08 272.792 389.86 271.552 388.86C270.312 387.82 268.592 387.3 266.392 387.3C264.552 387.3 262.972 387.78 261.652 388.74C260.372 389.66 259.372 390.84 258.652 392.28C257.972 393.68 257.592 395.14 257.512 396.66ZM287.591 414V370.2H293.111V414H287.591ZM303.688 414V388.14H298.348V383.4H303.688V378.9C303.688 376.18 304.448 374.06 305.968 372.54C307.528 370.98 309.668 370.2 312.388 370.2H319.948V374.94H313.468C312.108 374.94 311.068 375.34 310.348 376.14C309.628 376.9 309.268 377.94 309.268 379.26V383.4H318.748V388.14H309.268V414H303.688Z" fill="white"/>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="339" height="358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="5" dy="5"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear" x1="165" y1="-333" x2="819.172" y2="73.0265" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00505051" stop-color="#FFE4A7"/>
                    <stop offset="0.0997931" stop-color="#FAC098"/>
                    <stop offset="0.202" stop-color="#F49587"/>
                    <stop offset="0.4638" stop-color="#A142B5"/>
                    <stop offset="0.596" stop-color="#7C1DC9"/>
                    <stop offset="0.6346" stop-color="#7926CB"/>
                    <stop offset="0.6973" stop-color="#703ED1"/>
                    <stop offset="0.779807" stop-color="#6165DB"/>
                    <stop offset="0.8686" stop-color="#4C9CE9"/>
                    <stop offset="0.9709" stop-color="#32E1FA"/>
                    <stop offset="1" stop-color="#2AF6FF"/>
                    </linearGradient>
                    </defs>
                </svg>

                    {/* <span>LOGO</span> */}
                </div>
            </div>
        )
    }
}

export default Authorization;