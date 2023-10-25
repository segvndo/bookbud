import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

const CustomActionButton = ({children, onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, style]}>{children}</View>
  </TouchableOpacity>
);

CustomActionButton.PropTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.object
};

CustomActionButton.defaultProps = {
  style: {}
};

export default CustomActionButton

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
