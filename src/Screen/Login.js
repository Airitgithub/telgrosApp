import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import CustomTextInput from '../Components/CustomTextInput';
import CustumBtn from '../Components/CustumBtn';
import fontFamily from '../Components/fontfamily';
import CustomBackBtn from '../Components/CustomBackBtn';
const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      {/* Back Button title and desc */}

      <CustomBackBtn title={`Log in to App Name`} desc={`Please enter your information below in order to log in to your account.`} />
      {/* EMAIL */}
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily:fontFamily.UrbanistRegular }}>Email</Text>

      <CustomTextInput name={"email"} iconSet={"Fontisto"} placeholder="Enter your name" value={email} onChangeText={(text) => setEmail(text)} keyboardType='email-address'></CustomTextInput>

      {/* Password */}
      <Text style={{ fontSize: 16, marginTop: 18, fontFamily: fontFamily.UrbanistRegular }}>Password</Text>

      <CustomTextInput name={"lock-closed-outline"} iconSet={"Ionicons"} placeholder="Enter your password" passIcon={passwordVisible ? "eye-outline" :"eye-off-outline"} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!passwordVisible} keyboardType="number-pad" onPassToggle={() => setPasswordVisible(!passwordVisible)}></CustomTextInput>
      {/* forgetPassword */}
      <TouchableOpacity style={{ marginTop: 6 }} onPress={() => navigation.navigate("ForgetPassword")}>
        <Text style={{ fontSize: 16, color: COLORS.gradient, textAlign: "right", fontFamily:fontFamily.UrbanistMedium }}>Forgot password</Text>
      </TouchableOpacity>
      {/* buttonLogin */}
     <CustumBtn text={"Login In"} marginTop={55}></CustumBtn>
      <Text style={{ fontSize: 16, fontFamily:fontFamily.UrbanistRegular, marginTop: 24, textAlign: "center" }}>Or Continue with</Text>
      {/* Signup with google */}
      <TouchableOpacity
        style={{
          height: 50,
          width: '100%',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          marginTop: 24,
          borderWidth: 0.5,
          borderColor: COLORS.border,
          flexDirection: "row",
          gap:5
        }}
      >
        <Image source={IMAGES.Google} style={{ height: 30, width: 30,marginTop:2 }} resizeMode={"stretch"}></Image>
        <Text style={{ color: COLORS.black, fontSize: 16, fontFamily:fontFamily.UrbanistSemiBold,textAlign:"center" }}>Sign Up with Google</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignSelf: "center",position:"absolute",bottom:20 }}>
        <Text style={{ fontSize: 18, color: COLORS.black, fontFamily:fontFamily.UrbanistMedium }}>Don’t have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontSize: 18, color: COLORS.gradient, fontFamily:fontFamily.UrbanistMedium }}> ? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
