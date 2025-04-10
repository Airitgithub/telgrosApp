import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBackBtn from '../Components/CustomBackBtn'
import CustomTextInput from '../Components/CustomTextInput'
import CustumBtn from '../Components/CustumBtn'
import { IMAGES } from '../Components/Images'

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={{flex:1,padding:15}}>
      <CustomBackBtn title={'Forgot Password'} desc={'We will email you a link to reset your password.'}></CustomBackBtn>
     <Text style={{ fontSize: 16, marginTop: 18, fontWeight: '400' }}>Email</Text>
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        name={"email"} iconSet={"Fontisto"}     
        placeholder="Enter your email"
        keyboardType="email-address"
      />
     
      <CustumBtn
        text={"Send"}
        marginTop={50}
        onPress={() => navigation.navigate("Otp")}
      />

     
    </SafeAreaView>
  )
}

export default ForgetPassword