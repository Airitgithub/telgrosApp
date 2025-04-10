import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from './Color'
import fontFamily from './fontfamily'

export default function CustumBtn({ onPress, text, marginTop }) {
  return (
      <TouchableOpacity onPress={onPress} style={{ height: 55, width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: COLORS.gradient, borderRadius: 30, marginTop: marginTop }}> 
      <Text style={{fontSize:16,color:COLORS.white,fontFamily:fontFamily.UrbanistSemiBold}}>{text}</Text>
    </TouchableOpacity>
  )
}