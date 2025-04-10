import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBackBtn from '../Components/CustomBackBtn'
import { COLORS } from '../Components/Color'
import { IMAGES } from '../Components/Images'
import CustomTextInput from '../Components/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import CustumBtn from '../Components/CustumBtn'
import Headers from '../Components/Headers'
import fontFamily from '../Components/fontfamily'

const NewPassword = ({ navigation }) => {
    
    const [password,setPassword]=useState("")
    const [confirmPassword,SetConfirmPassword]=useState("")
     const [passwordVisible, setPasswordVisible] = useState(false);
      const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    

  return (
    <SafeAreaView style={{flex:1,padding:20}}>
            {/* header */}
      <Headers text={'Choose New Password'} showBack={true}/>
          <Text style={{fontSize:14,fontFamily:fontFamily.PoppinsRegular,marginTop:20}}>New Password</Text>
          <CustomTextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!passwordVisible} pass={passwordVisible ? IMAGES.OpenEye : IMAGES.CloseEye} onPassToggle={() => setPasswordVisible(!passwordVisible)}></CustomTextInput>
      <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular, marginTop: 20 }}>Confirm New Password</Text>
          <CustomTextInput value={confirmPassword} onChangeText={(text) => SetConfirmPassword(text)}  secureTextEntry={!confirmPasswordVisible} pass={confirmPasswordVisible ? IMAGES.OpenEye : IMAGES.CloseEye} onPassToggle={() => setConfirmPasswordVisible(!confirmPasswordVisible)}></CustomTextInput>
          <CustumBtn text={"Update"} marginTop={65} onPress={() => navigation.navigate("SelectRoll")}></CustumBtn>
    </SafeAreaView>
  )
}

export default NewPassword