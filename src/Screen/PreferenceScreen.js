import { View, Text, SafeAreaView,Animated,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import fontFamily from '../Components/fontfamily';

const PreferenceScreen = ({navigation}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const translateX = new Animated.Value(isSwitchOn ? 22 : 2);

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        Animated.timing(translateX, {
            toValue: isSwitchOn ? 2 : 22,
            duration: 200,
            useNativeDriver: false,  
        }).start();
    };
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Preference "} />
            <View style={{ width: "100%", borderRadius: 10, backgroundColor: COLORS.bgCard, marginTop: 20, paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <CustomVectorIcons size={24} iconSet="Ionicons" name={"notifications-outline"} color={COLORS.black} />
                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium }}>Notification</Text>
                    </View>
                    {/* Custom Toggle Button */}
                    <TouchableOpacity
                        style={{
                            width: 45,
                            height: 25,
                            borderRadius: 50,
                            backgroundColor: isSwitchOn ? COLORS.primary : COLORS.gray,
                            padding: 2,
                            justifyContent: "center",
                            position: "relative",
                        }}
                        onPress={onToggleSwitch}
                        activeOpacity={0.7}
                    >
                        <Animated.View style={{
                            width: 21,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: COLORS.white,
                            position: "absolute",
                            top: 2.5,
                            transform: [{ translateX }]
                        }} />
                    </TouchableOpacity>
                   
                   
                </View>
            </View>
            {/* rate App */}
            <TouchableOpacity style={{ flexDirection: "row", gap: 10 ,marginTop:20}}>
                <TouchableOpacity>
                <CustomVectorIcons name={"star-o"} size={24} iconSet={"FontAwesome"} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistMedium}}>Rate App</Text>
            </TouchableOpacity>
            {/* privacy policy */}
            <TouchableOpacity style={{ flexDirection: "row", gap: 10, marginTop: 25 }} onPress={() => navigation.navigate("PrivacypolicyScreen")}>
                <TouchableOpacity>
                    <CustomVectorIcons name={"lock"} size={24} iconSet={"Feather"} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium }}>Privacy Policy</Text>
            </TouchableOpacity>
            {/* term nad condition */}
            <TouchableOpacity style={{ flexDirection: "row", gap: 10, marginTop: 25 }} onPress={() => navigation.navigate("TermCondition")}>
                <TouchableOpacity>
                    <CustomVectorIcons name={"document-outline"} size={24} iconSet={"Ionicons"} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium }}>Terms and Conditions</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PreferenceScreen