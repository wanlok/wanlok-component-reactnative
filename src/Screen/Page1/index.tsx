import React, {Component, createRef} from 'react';
import {Provider} from 'react-redux';
import {store} from './ReduxStore';
import Dummy from './Dummy';

const Page1 = () => {
  return (
    <Provider store={store}>
      <Dummy />
    </Provider>
  );
};

export default Page1;
