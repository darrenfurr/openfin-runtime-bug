import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStateContext } from 'store/context';

import useStyles from './Home.styles';

const Home = ({ handleClick }) => {
  const classes = useStyles();
  const { state } = useStateContext();
  const { counter } = state;

  return (
    <div className={classes.app}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Typography variant="h4">Home Component</Typography>
      </AppBar>
      <div>
        <div className={classes.counter}>
          <Typography variant="h5">Current Count: {counter.count}</Typography>
        </div>
        <div>
          <Button className={classes.button} color="primary" variant="contained" onClick={handleClick()}>
            Open Example{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  handleClick: PropTypes.func,
};

Home.defaultProps = {
  handleClick: () => null,
};

export default Home;
