import React, { useEffect } from 'react';
import { useChannelProvider, useChildWindow } from 'openfin-react-hooks';
import uuidv4 from 'uuid/v4';

import { useDispatchContext } from 'store/context';
import { counterActions } from 'store/counter';
import { windowsActions } from 'store/windows';

import Home from './components/Home';

const CHANNEL_NAME = 'counter-example';

const HomeContainer = () => {
  const { dispatch } = useDispatchContext();
  const channelActions = [
    {
      action: () => dispatch(counterActions.increment()),
      topic: 'increment',
    },
    {
      action: () => dispatch(counterActions.decrement()),
      topic: 'decrement',
    },
    {
      action: payload => dispatch(windowsActions.close(payload)),
      topic: 'close',
    },
  ];

  const { provider } = useChannelProvider(CHANNEL_NAME, channelActions);

  useEffect(() => {
    if (provider) {
      provider.onConnection(identity => dispatch(windowsActions.onConnection(identity)));
      provider.onDisconnection(identity => dispatch(windowsActions.onDisconnection(identity)));
    }
  }, [dispatch, provider]);

  const exampleWindow = useChildWindow({ name: 'example', url: '/example' });
  const createExampleWindow = async () => {
    const id = uuidv4();
    const windowOptions = {
      autoShow: true,
      defaultHeight: 420,
      defaultTop: 50,
      defaultWidth: 680,
      frame: false,
      name: id,
      url: `/example/${id}`,
    };

    exampleWindow.launch(windowOptions);

    dispatch(windowsActions.setWindow(id));
  };

  return <Home handleClick={() => createExampleWindow} />;
};

export default HomeContainer;
