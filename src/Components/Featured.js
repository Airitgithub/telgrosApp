import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS } from './Color'
import { IMAGES } from './Images'
import fontFamily from './fontfamily'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Featured = () => {
  return (
    <View style={{width:"100%",backgroundColor:COLORS.white,borderRadius:30,paddingVertical:20,marginTop:20,paddingHorizontal:20,borderWidth:0.2,borderColor:COLORS.gradient,marginBottom:10}}>
     <View style={{gap:6,alignItems:"center",marginTop:6}}>
        <Image style={{height:50,width:50,borderRadius:25}} source={IMAGES.User}></Image>
              <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistBold}}>By Sanjeev kapoor</Text>
              <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistRegular}}>Chef </Text>
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:8,gap:10 }}>
              <View style={{ backgroundColor:"#B8B8D233",width:50,borderRadius:10,justifyContent:"center",alignItems:"center",paddingVertical:7,paddingHorizontal:5}}>
                <Text style={{fontSize:12,fontWeight:700}}>4.5</Text>
                <Text style={{fontSize:8,color:COLORS.gray}}>Rating</Text>
              </View>
              <View style={{ backgroundColor: "#B8B8D233", width: 50, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 12, fontWeight: 700 }}>$99</Text>
                  <Text style={{ fontSize: 8, color: COLORS.gray }}>Pricing</Text>
              </View>
              <View style={{ backgroundColor: "#B8B8D233", width: 50, borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ fontSize: 12, fontWeight: 700 }}>5 Years</Text>
                  <Text style={{ fontSize: 8, color: COLORS.gray }}>Experiance</Text>
              </View>
     </View>
    </View>
  )
}

export default Featured