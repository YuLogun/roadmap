import React from "react";
import { useSelector } from 'react-redux';

//components
import { AppBar, Toolbar, Typography } from "@material-ui/core";

//services
import { getTeam } from '../../services/Authorization.service';

//styles
import { useStyles } from "./AppBar.styles";

const MyAppBar = () => {
  const classes = useStyles();
  const isAuthorized = useSelector(state => state.isAuthorized);

  return isAuthorized ? (
    <AppBar position="sticky">
      <Toolbar className={classes.header}>
        <Typography variant="h5">DevRoadMap v 1.1</Typography>
        <Typography variant="h6">{ getTeam() }</Typography>
      </Toolbar>
    </AppBar>
  ) : (
    ''
  );
};

export default MyAppBar;
