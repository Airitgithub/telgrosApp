import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Headers from '../Components/Headers';
import fontFamily from '../Components/fontfamily';
import CustomTextInput from '../Components/CustomTextInput';
import CustomVectorIcons from '../Components/CustomVectorIcons'; 
import { COLORS } from '../Components/Color';
import CustumBtn from '../Components/CustumBtn';

const PersonalInformationScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // Show the date picker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // Hide the date picker
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // Handle date selection
    const handleConfirm = (date) => {
        setDob(date.toLocaleDateString()); // Format and set date
        hideDatePicker();
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Personal Information"} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 18, fontFamily: fontFamily.PoppinsSemiBold, marginTop: 20 }}>Personal Information</Text>

            {/* First Name */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular }}>First Name</Text>
                <CustomTextInput placeholder={"First Name..."} value={firstName} onChangeText={(text) => setFirstName(text)} />
            </View>

            {/* Last Name */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular }}>Last Name</Text>
                <CustomTextInput placeholder={"Last Name..."} value={lastName} onChangeText={(text) => setLastName(text)} />
            </View>

            {/* Email */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular }}>Your Email</Text>
                <CustomTextInput placeholder={"Your Email..."} value={email} onChangeText={(text) => setEmail(text)} />
            </View>

            {/* Date of Birth with Calendar Icon */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular }}>Date of Birth</Text>
                <CustomTextInput
                    placeholder={"Select Date of Birth..."}
                    value={dob}
                    editable={false} 
                    style={{ color: dob ? COLORS.gradient : COLORS.gray }} 
                />
                <TouchableOpacity
                    style={{ position: "absolute", right: 10, top: 45 }}
                    onPress={showDatePicker}
                >
                    <CustomVectorIcons name="calendar" size={24} color={COLORS.gradient} iconSet="Feather" />
                </TouchableOpacity>
            </View>

            {/* DateTime Picker Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {/* Address */}
            <View style={{ marginTop: 10 ,paddingBottom:100}}>
                <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular }}>Address</Text>
                <CustomTextInput value={address} onChangeText={(text) => setAddress(text)} />
            </View>
           
            </ScrollView>
            <View style={{ width: "100%", alignSelf: "center", position: "absolute", bottom: 30 }}>
                <CustumBtn text={"Save Changes"} />
            </View>
        </SafeAreaView>
    );
};

export default PersonalInformationScreen;
