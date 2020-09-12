import React from "react";

//components
import { Toolbar, Typography } from "@material-ui/core";

//styles
import { useStyles } from "./RolesAppBar.styles";

const RolesAppBar = ({ manager, employee }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.header}>
      <Typography variant="body1" className={classes.roleContainer}>
        <b>Сотрудник: </b>
        <span className={classes.role}>{employee}</span>
      </Typography>
      <Typography variant="body1" className={classes.roleContainer}>
        <b>Менеджер:</b>
        <span className={classes.role}>{manager}</span>
      </Typography>
    </Toolbar>
  );
};

export default RolesAppBar;
