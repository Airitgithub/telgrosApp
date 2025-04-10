import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import fontFamily from './fontfamily'
import { COLORS } from './Color'
import { IMAGES } from './Images'
import CustomVectorIcons from './CustomVectorIcons'

const BatchesContent = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>Your Batches</Text>
      <ScrollView showsVerticalScrollIndicator={false}>

       {
        [1, 2, 3, 4, 5].map((_,index) => (<View key={index} style={{ marginBottom: 15 ,marginTop:10}}>
          <View style={{ width:"100%", borderRadius: 10, backgroundColor: COLORS.white, padding: 10 }}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image source={IMAGES.Card} style={{ height: 123, width: "35%", borderRadius: 10 ,width:"35%"}}></Image>
              <View style={{width:"65%"}}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Image source={IMAGES.User} style={{ height: 20, width: 20,borderRadius:10 }}></Image>
                  <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistSemiBold }}>By Sanjeev kapoor</Text>
                </View>
                <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold, marginTop: 6 }}>Learn How to make pizza ?</Text>
                <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistRegular, width: 187, marginTop: 8 }}>determining if cheese has gone bad, look for signs such as mold.</Text>
                <View style={{ marginTop: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center",paddingRight:10 }}>
                  <View style={{ flexDirection: "row", gap: 5,alignItems:"center" }}>
                    <CustomVectorIcons name={"clock-time-five-outline"} size={18} color={COLORS.gray} iconSet={"MaterialCommunityIcons"} />
                    <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistMedium }}>5h 15m</Text>
                  </View>
                  <TouchableOpacity style={{ backgroundColor: COLORS.gradient, paddingHorizontal: 20, borderRadius: 50, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold, color: COLORS.white, textAlign: "center" }}>Join</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>))
       }
      </ScrollView>
    </View>
  )
}

export default BatchesContent