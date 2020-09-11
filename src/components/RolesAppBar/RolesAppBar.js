import React from "react";

//components
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 100,
    opacity: 1,
    background: "#fafafa",
    width: "100%",
    border: "1px solid gray",
  },
  roleContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  role: {
    paddingLeft: "0.25em",
  },
}));

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
