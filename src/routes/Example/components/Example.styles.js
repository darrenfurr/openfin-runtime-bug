import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  },
  appBar: {
    padding: 10,
    cursor: 'move',
    display: 'flex',
    alignItems: 'center',
    WebkitAppRegion: 'drag',
  },
  button: {
    margin: 10,
  },
});

export default useStyles;
