import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import fontFamily from '../Components/fontfamily';
import CustomTextInput from '../Components/CustomTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustumBtn from '../Components/CustumBtn';
import { useNavigation } from '@react-navigation/native';

const NewCard = () => {
    const navigation=useNavigation();
    const [VisibleNumber, setVisibleNumber] = useState("")
    const [VisibleName, setVisibleName] = useState("")
    // console.log(VisibleNumber);
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            {/* <Headers text={"Add New Card"} showIcon={true} name={"close-circle-outline"} color={COLORS.black} size={24} iconBackground={false} /> */}
            <View style={{ flexDirection: "row", gap: 12, alignItems: "center", marginTop: 20, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold }}>Add New Card</Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="close-circle-outline" size={24} color={COLORS.black}></Ionicons>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 20 }}>Card Number</Text>
            <CustomTextInput placeholder={"Enter 12 digit card number"} value={VisibleNumber} onChangeText={(text) => setVisibleNumber(text)}></CustomTextInput>
            <View style={{ flexDirection: "row", marginTop: 20,gap:20}}>
                <View style={{ gap:10}}>
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular }}>Valid Thru</Text>
                    <View style={{flexDirection:"row",gap:10}}>
                    <View style={{ width: 100, borderWidth: 1, borderColor: COLORS.border, borderRadius: 5, padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>Month</Text>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Ionicons name={showDropdown ? 'chevron-up' : 'chevron-down'} size={15} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: 100, borderWidth: 1, borderColor: COLORS.border, borderRadius: 5, padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>Year</Text>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Ionicons name={showDropdown ? 'chevron-up' : 'chevron-down'} size={15} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </View>
                <View style={{gap:10}}>
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular }}>CVV</Text>
                    <View style={{ width: 100, borderWidth: 1, borderColor: COLORS.border, borderRadius: 5, padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>CVV</Text>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Ionicons name={showDropdown ? 'eye-outline' : 'eye-off-outline'} size={20} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.black,marginTop:18 }}>Card Holder’s Name</Text>
            <CustomTextInput placeholder={"Name on Card" } value={VisibleName} onChangeText={(text)=>setVisibleName(text)}></CustomTextInput>
            <View style={{position:"absolute",bottom:10,width:"100%",alignSelf:"center"}}>
            <CustumBtn text={"Save Card & Proceed"}></CustumBtn>
            </View>
        </SafeAreaView>
    )
}

export default NewCard