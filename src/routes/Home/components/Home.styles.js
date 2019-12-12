import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  appBar: {
    padding: 10,
    cursor: 'move',
    display: 'flex',
    alignItems: 'center',
    WebkitAppRegion: 'drag',
  },
  counter: {
    margin: 10,
  },
  button: {
    margin: 10,
  },
  app: {
    textAlign: 'center',
  },
});

export default useStyles;
