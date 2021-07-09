import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@adobe/react-spectrum';

const MyButton = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

MyButton.propTypes = {
  children: PropTypes.node,
};

export default MyButton;
