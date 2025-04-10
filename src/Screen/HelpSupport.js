import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from "react-native";
import React from "react";
import Headers from "../Components/Headers";
import { IMAGES } from "../Components/Images";
import fontFamily from "../Components/fontfamily";
import { COLORS } from "../Components/Color";
import CustomVectorIcons from "../Components/CustomVectorIcons";

const TouchableComponent = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const HelpSupport = ({ navigation }) => {
    const OptionItem = ({ icon, title, subtitle, onPress, isLastItem }) => (
        <TouchableComponent
            onPress={onPress}
            {...(Platform.OS === "android" && {
                background: TouchableNativeFeedback.Ripple(COLORS.gradient, false),
            })}
            {...(Platform.OS === "ios" && { activeOpacity: 0.5 })}
        >
        <View style={{ overflow: "hidden" }}>
            
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                        <Image source={icon} style={{ height: 40, width: 40 }} />
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, color: COLORS.black }}>{title}</Text>
                            <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistRegular, color: COLORS.black }}>{subtitle}</Text>
                        </View>
                    </View>
                    <CustomVectorIcons name="chevron-right" size={24} color={COLORS.black} iconSet="Feather" />
                </View>
           
            {!isLastItem && <View style={{ width: "100%", borderBottomColor: "#B8B8D2", borderBottomWidth: 1, marginTop: 10 }} />}
        </View>
        </TouchableComponent>
    );

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Help & Support"} />
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Image source={IMAGES.Help} />
                <Text style={{ fontSize: 22, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 10 }}>Tell how we can help</Text>
                <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, textAlign: "center", width: "90%", lineHeight: 20, marginTop: 5 }}>
                    Helping You Every Step of the Way, just ask us, we are here to support you.
                </Text>
            </View>

            <View style={{ marginTop: 50 }}>
                <OptionItem icon={IMAGES.Chat} title="Chat" subtitle="Start conversation now" onPress={() => navigation.navigate("ChatSupport")} />
                <OptionItem icon={IMAGES.Faqs} title="FAQs" subtitle="Find intelligent answers instantly" onPress={() => navigation.navigate("Faqs")} />
                <OptionItem icon={IMAGES.Ticket} title="Raise Ticket" subtitle="Get solutions delivered to your inbox" onPress={() => navigation.navigate("RaiseTicket")} isLastItem={true} />
            </View>
        </SafeAreaView>
    );
};

export default HelpSupport;
