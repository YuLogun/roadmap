import React from "react";
import { clearUserData } from '../../services/Authorization.service';

//components
import { Toolbar, Typography } from "@material-ui/core";

//styles
import { useStyles } from "./RolesAppBar.styles";

const RolesAppBar = ({ manager, employee }) => {
  const classes = useStyles();

  const logoutHandler = () => {
    clearUserData();
    document.location.reload();
  }

  return (
    <div className={classes.rolesAppBarContainer}>
      <div className={classes.employeeRoleBlock}>
        <p className={classes.employeeTitle}>
          <span className={classes.boldText}>Сотрудник: </span>
          <span>{employee}</span>
        </p>
        <p >
          <span className={classes.exitTitle} onClick={logoutHandler}>Выход</span>
        </p>
      </div>
      <div className={classes.managerRoleBlock}>
        <p className={classes.managerTitle}>
          <span className={classes.boldText}>Менеджер: </span>
          <span>{manager}</span>
        </p>
        <p >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKsIRr30pSPVxjyUv-ZpXmty2TPQ7EOqq3hTdAaq5pEchkUw/viewform?usp=send_form" className={classes.exitTitle}>Отзыв</a>
        </p>
      </div>
    </div>
  )

  // return (
  //   <Toolbar className={classes.header}>
  //     <Typography variant="body1" className={classes.roleContainer}>
  //       <b>Сотрудник: </b>
  //       <span className={classes.role}>{employee}</span>
  //     </Typography>
  //     <Typography variant="body1" className={classes.roleContainer}>
  //       <b>Менеджер:</b>
  //       <span className={classes.role}>{manager}</span>
  //     </Typography>
  //   </Toolbar>
  // );
};

export default RolesAppBar;
