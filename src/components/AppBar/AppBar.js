import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MyAppBar = ({ manager, employee }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color={manager && employee ? "transparent" : "primary"}
    >
      <Toolbar className={classes.header}>
        {manager && employee ? (
          <>
            <Typography variant="body1">
              <b>Сотрудник:</b> {employee}
            </Typography>
            <Typography variant="body1">
              <b>Менеджер:</b> {manager}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5">DevRoadMap v 1.1</Typography>
            <Typography variant="h6">Nietzsche Team</Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
