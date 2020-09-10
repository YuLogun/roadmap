import React from "react";

//components
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MyAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.header}>
        <Typography variant="h5">DevRoadMap v 1.1</Typography>
        <Typography variant="h6">Nietzsche Team</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
