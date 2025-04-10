import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomBackBtn from '../Components/CustomBackBtn';
import CustomTextInput from '../Components/CustomTextInput';
import { IMAGES } from '../Components/Images';
import CustumBtn from '../Components/CustumBtn';
import fontFamily from '../Components/fontfamily';

const SignUp = () => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      
      {/* Back Button, Title, and Description */}
      <CustomBackBtn
        title="Sign up to App Name"
        desc="Please enter your information below to create your account."
      />

      {/* Username Input */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily:fontFamily.UrbanistRegular }}>Username</Text>
      <CustomTextInput
        value={userName}
        onChangeText={setUsername}
          name={"email"}
          iconSet={"Fontisto"}
        placeholder="Enter your username"
        
      />

      {/* Email Input */}
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily: fontFamily.UrbanistRegular }}>Email</Text>
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
          name={"email"}
          iconSet={"Fontisto"}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily: fontFamily.UrbanistRegular }}>Password</Text>
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        name={"lock-closed-outline"}
        iconSet={"Ionicons"}
        placeholder="Enter your password"
        secureTextEntry={!passwordVisible}
          keyboardType="default"
          passIcon={passwordVisible ? "eye-outline" : "eye-off-outline"}
        onPassToggle={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
      />

      {/* Confirm Password Input */}
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily: fontFamily.UrbanistRegular }}>Confirm Password</Text>
     
      <CustomTextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        name={"lock-closed-outline"}
        iconSet={"Ionicons"}
        placeholder="Confirm your password"
        secureTextEntry={!confirmPasswordVisible}
          keyboardType="default"
          passIcon={confirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
        onPassToggle={() => setConfirmPasswordVisible(!confirmPasswordVisible)} 
      />
      
      
      <CustumBtn text={"Sign Up"} marginTop={50}></CustumBtn>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
