import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({ size, onPress, textStyle, children }) => (
  <View style={{ flex: 0 }}>
    <TouchableOpacity style={{ flex: 0 }} onPress={onPress}>
      <Text style={{ fontSize: size / 2.5, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  </View>
);

TextButton.propTypes = {
  size: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  textStyle: Text.propTypes.style,
};

TextButton.defaultProps = {
  textStyle: null,
};

export default TextButton;
