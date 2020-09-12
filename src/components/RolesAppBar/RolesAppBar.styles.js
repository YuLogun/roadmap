import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
