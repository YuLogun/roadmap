import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  title: {
    fontSize: 32,
    marginBottom: 20
  },
  progressBarLabel: {
    fontSize: 14,
    textAlign: 'left'
  },
  presetProgressTitleItem: {
    font: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  presetProgressItem: {
    marginBottom: 15
  },
  testClass: {
    width: '45%'
  }
}));