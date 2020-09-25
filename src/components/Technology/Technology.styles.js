import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  roadMapItem: {
    textAlign: "left",
  },
  coursesList: {
    marginLeft: '30px',
    listStyleType: "none"
  },
  courseItem: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    marginRight: '5px'
  }
}));
