import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES } from './Images'
import { COLORS } from './Color'
import fontFamily from './fontfamily'

const Subscribed = () => {
  return (
    <View>
          <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold, marginTop: 20 }}>Subscribed Expert</Text>
          <View style={{ flexDirection: "column", gap: 18, marginTop: 20 }}>

              {
                  [1, 2, 3,4,5].map((_,index) => (
                      <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                              <Image source={IMAGES.User} style={{ height: 50, width: 50,borderRadius:25 }}></Image>
                              <View style={{ gap: 5 }}>
                                  <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistBold }}>By Sanjeev kapoor</Text>
                                  <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                      Chef
                                  </Text>
                              </View>
                          </View>
                          <TouchableOpacity style={{ borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, borderWidth: 1, borderColor: COLORS.gradient }}>
                              <Text style={{ fontSize: 12, color: COLORS.gradient, fontFamily: fontFamily.UrbanistMedium }}>Subscribed</Text>
                          </TouchableOpacity>
                      </View>
                  ))
              }
          </View>
    </View>
  )
}

export default Subscribed