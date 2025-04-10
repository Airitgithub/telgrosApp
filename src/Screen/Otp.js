import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBackBtn from '../Components/CustomBackBtn'
import { COLORS } from '../Components/Color'
import CustumBtn from '../Components/CustumBtn';
import fontFamily from '../Components/fontfamily';

export default function Otp({navigation}) {
    const [otp, setOtp] = useState(["", "", "", ""]);  // State to hold OTP digits

    // Handle OTP input change
    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        
    };    
    const inputs = [];

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <CustomBackBtn
                title={"Verify OTP"}
                desc={"We sent a 4 digit OTP to example@gmail.com, please enter it below."}
            />
            <Text style={{ fontSize: 16, marginTop: 30, fontFamily:fontFamily.UrbanistRegular }}>Enter OTP</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between" }}>
                {otp.map((digit, index) => (
                    <View key={index} style={{
                        height: 50,
                        width: "20%",
                        borderRadius: 6,
                        borderWidth: 0.5,
                        borderColor: COLORS.border,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
}}>
                        <TextInput
                            ref={(input) => inputs[index] = input} 
                            style={{
                                textAlign: 'center',
                                fontSize: 20,
                                width: '100%',
}}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            returnKeyType={index === otp.length - 1 ? "done" : "next"}
                        />
                    </View>
                ))}
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-end",marginTop:5}}>
            <Text style={{color:COLORS.gradient,fontSize:14,fontFamily:fontFamily.PoppinsMedium}}>Resent in :</Text>
                <Text style={{ color: COLORS.black, fontSize: 14, fontFamily: fontFamily.PoppinsMedium }}> 120s</Text>
            </View>
            <CustumBtn text={"Verify OTP"} marginTop={100} onPress={() => navigation.navigate("NewPassword")}></CustumBtn>
            <View style={{flexDirection:"row",justifyContent:"center",marginTop:70}}>
                <Text style={{color:COLORS.black,fontFamily:fontFamily.UrbanistMedium,fontSize:16}}>Back to ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: COLORS.gradient, fontFamily:fontFamily.UrbanistMedium, fontSize: 16 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}