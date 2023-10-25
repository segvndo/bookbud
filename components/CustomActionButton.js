import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const CustomActionButton = ({children}) => (
    <TouchableOpacity>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center'
          }}>

          {children}
      </View>
    </TouchableOpacity>
  )

export default CustomActionButton