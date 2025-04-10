import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBackBtn from '../Components/CustomBackBtn'
import { IMAGES } from '../Components/Images'
import { COLORS } from '../Components/Color'
import CustumBtn from '../Components/CustumBtn'
import fontFamily from '../Components/fontfamily'
import { useNavigation } from '@react-navigation/native'

const SelectRoll = () => {
  const navigation=useNavigation();
  const [selectedRole, setSelectedRole] = useState('Learner');
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <CustomBackBtn title={"Who Are You ?"} desc={"Please tell us a little bit more about yourself and who you are. "}></CustomBackBtn>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, gap: 8 }}>
        <TouchableOpacity
        activeOpacity={0.7}
          onPress={() => setSelectedRole('Learner')}
          style={{
            height: 195, width: "50%", backgroundColor: COLORS.white, borderRadius: 10, alignItems: "center", gap: 6, borderWidth: selectedRole === 'Learner' ? 1 : null,
            borderColor: selectedRole === 'Learner' ? COLORS.gradient : null
          }}>
          <Image source={IMAGES.Box} resizeMode="stretch" style={{ height: 100, width: 100 }}></Image>
          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold }}>Learner</Text>
          <Text style={{ width: 130, color: COLORS.gray, fontSize: 10, textAlign: "center", fontFamily: fontFamily.UrbanistRegular }}>You are planing to use our platform as learning?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSelectedRole('Expert')}
          style={{
            height: 195, width: "50%", backgroundColor: COLORS.white, borderRadius: 10, alignItems: "center", gap: 6, borderWidth: selectedRole === 'Expert' ? 1 : null,
            borderColor: selectedRole === 'Expert' ? COLORS.gradient : null
          }}>
          <Image source={IMAGES.ManLogo} resizeMode="stretch" style={{ height: 100, width: 100 }}></Image>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Expert</Text>
          <Text style={{ width: 130, color: COLORS.gray, fontSize: 10, textAlign: "center", fontFamily: fontFamily.UrbanistRegular }}>You are planing to use our platform as learning?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: "absolute", bottom: 70, width: "100%", alignSelf: "center" }}>
        <CustumBtn text={"Next"} onPress={() => navigation.navigate("SelectHoby")}></CustumBtn>
      </View>
    </SafeAreaView>
  )
}

export default SelectRoll