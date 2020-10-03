import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rolesAppBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '50px 20px 30px',
    borderBottom: '1px solid grey',
  },

  boldText: {
    fontWeight: 'bold'
  },

  exitTitle: {
    color: 'grey',
    textDecoration: 'underline',
    cursor: 'pointer'
  },


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
