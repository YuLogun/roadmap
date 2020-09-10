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
    <div>
      <AppBar
        position="static"
        color={manager && employee ? "transparent" : "secondary"}
      >
        <Toolbar className={classes.header}>
          {manager && employee ? (
            <>
              <Typography variant="p">Сотрудник: {employee}</Typography>
              <Typography variant="p">Менеджер: {manager}</Typography>
            </>
          ) : (
            <>
              <Typography variant="h5">DevRoadMap v 1.1</Typography>
              <Typography variant="h6">Nietzsche Team</Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MyAppBar;
