import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    marginBottom: '10px',
    position: 'relative',
  },
  progressWrapper: {
    width: '100%',
    height: '30px',
    borderRadius: '4px',
    backgroundColor: '#F1F2F4',
  },
  progressResult: {
    height:  '30px',
    backgroundColor: '#9AD0F5',
    borderRadius: '4px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  }
}));