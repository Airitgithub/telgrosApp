import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from './Color'

const CustumStatusBar = ({bgColor}) => {
  return (
    <View>
      <StatusBar backgroundColor={bgColor}  barStyle='dark-content'></StatusBar>
    </View>
  )
}

export default CustumStatusBar