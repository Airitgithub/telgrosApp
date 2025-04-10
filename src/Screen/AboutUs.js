import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Headers from '../Components/Headers'
import { IMAGES } from '../Components/Images'
import { COLORS } from '../Components/Color'
import fontFamily from '../Components/fontfamily'

const AboutUs = () => {
  return (
    <SafeAreaView style={{flex:1,padding:15}}>
    <Headers showBack={true} text={"About us"}/>
    <View style={{alignItems:"center",marginTop:20}}>
     <View style={{ height: 70, width: 70, backgroundColor: COLORS.gradient, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Image source={IMAGES.Telgros2} style={{ height: 13, width: 13 ,tintColor:COLORS.white}} resizeMode="stretch"></Image>
                <Image source={IMAGES.Telgros1} style={{ height: 35, width: 36 ,tintColor:COLORS.white}} resizeMode="stretch"></Image>
              </View>
              <Text style={{fontSize:22,fontFamily:fontFamily.UrbanistBold,marginTop:10}}>About us</Text>
              <View style={{marginTop:10,gap:5}}>
              <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistMedium,color:COLORS.black}}>Effective Date: 24/Nov/2024</Text>
              <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.black }}>Last Updated: 28/Nov/2024</Text>
              </View>
          </View>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 30,lineHeight: 20 ,paddingHorizontal:18}}>Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetur diam donec pharetra fermentum semper..</Text>
          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold ,paddingHorizontal:18,marginTop:10}}>Informative We Collect</Text>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 10, lineHeight: 20, paddingHorizontal: 18 }}>Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetur diam donec pharetra fermentum semper..Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetur diam donec pharetra fermentum semper..Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetur diam donec pharetra fermentum semper..</Text>
    </SafeAreaView>
  )
}

export default AboutUs