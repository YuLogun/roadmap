import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  },
  roadmapContainer: {
    top: '56px',
    position: 'relative',
    border: '1px solid gray',
    borderTop: 'none',
    padding: ' 1em 2em'
  },
  roadmapList: {
    top: '56px',
    position: 'relative',
    border: '1px solid gray'
  }
}));
