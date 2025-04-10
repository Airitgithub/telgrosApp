import { View, Text, Image, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { IMAGES } from '../Components/Images'
import { COLORS } from '../Components/Color'
import CustumStatusBar from '../Components/CustumStatusBar'
import fontFamily from '../Components/fontfamily'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Swipers")
    }, 3000)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CustumStatusBar bgColor={COLORS.white}></CustumStatusBar> */}
      <ImageBackground source={IMAGES.Splash} style={{ height: "100%", width: "100%" }} resizeMode="stretch">
        <View style={{ marginTop:300,justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 10 }}>
          <View style={{ height: 62, width: 62, backgroundColor: "white", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
            <Image source={IMAGES.Telgros2} style={{ height: 12, width: 12 }}></Image>
            <Image source={IMAGES.Telgros1} style={{ height: 33, width: 32 }}resizeMode="cover"></Image>
          </View>
          <Text style={{ color: COLORS.white, fontSize: 35, fontFamily:fontFamily.UrbanistBold }}>Telgros</Text>
        </View>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20, color: COLORS.white, fontFamily:fontFamily.UrbanistMedium }}>Teach, Learn, Grow, Solve</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Splash