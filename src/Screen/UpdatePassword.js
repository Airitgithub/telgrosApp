import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Headers from '../Components/Headers'
import CustomTextInput from '../Components/CustomTextInput'
import fontFamily from '../Components/fontfamily'
import CustumBtn from '../Components/CustumBtn'
import { IMAGES } from '../Components/Images'

const UpdatePassword = () => {
    const [oldPassword,setOldPassword]=useState("");
    const [oldPasswordVisible,setOldPasswordVisible]=useState(false);
      const [password,setPassword]=useState("")
        const [confirmPassword,SetConfirmPassword]=useState("")
         const [passwordVisible, setPasswordVisible] = useState(false);
          const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={{flex:1,padding:15}}>
          <Headers showBack={true} text={"Update Password"}/>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 20 }}>Old Password</Text>
          <CustomTextInput placeholder={"*** ****  ***"} value={oldPassword} onChangeText={(text) => setOldPassword(text)} secureTextEntry={!oldPasswordVisible} pass={oldPasswordVisible ? IMAGES.OpenEye : IMAGES.CloseEye} onPassToggle={() => setOldPasswordVisible(!oldPasswordVisible)}></CustomTextInput>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 20 }}>New Password</Text>
          <CustomTextInput placeholder={"*** ****  ***"} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!passwordVisible} pass={passwordVisible ? IMAGES.OpenEye : IMAGES.CloseEye} onPassToggle={() => setPasswordVisible(!passwordVisible)}></CustomTextInput>
          <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistRegular, marginTop: 20 }}>Confirm New Password</Text>
          <CustomTextInput placeholder={"*** ****  ***"} value={confirmPassword} onChangeText={(text) => SetConfirmPassword(text)} secureTextEntry={!confirmPasswordVisible} pass={confirmPasswordVisible ? IMAGES.OpenEye : IMAGES.CloseEye} onPassToggle={() => setConfirmPasswordVisible(!confirmPasswordVisible)}></CustomTextInput>
          <CustumBtn text={"Save Change"} marginTop={70}></CustumBtn>
      </SafeAreaView>
  )
}

export default UpdatePassword