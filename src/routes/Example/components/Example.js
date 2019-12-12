import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useChannelClient } from 'openfin-react-hooks';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { setPushMessage } from 'store/windows/actions';

import useStyles from './Example.styles';

const CHANNEL_NAME = 'counter-example';

const Example = () => {
  const classes = useStyles();
  const { client } = useChannelClient(CHANNEL_NAME);

  useEffect(() => {
    if (client) {
      client.register('pushMessage', payload => setPushMessage(payload));
    }
  }, [client]);

  return (
    <div className={classes.app}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Typography variant="h4">Example Window</Typography>
      </AppBar>
      <div>
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={() => client.dispatch('increment')}>
          Increment
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={() => client.dispatch('decrement')}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

Example.propTypes = {
  counter: PropTypes.shape({
    count: PropTypes.number,
  }),
};

Example.defaultProps = {
  counter: {
    count: 0,
  },
};

export default Example;
