import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import { ScrollView } from 'react-native-gesture-handler';
import fontFamily from '../Components/fontfamily';
const FeaturedScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <Headers showBack={true} text={"Featured Experts"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {[1, 2, 3, 4].map((_,index) => (
                    <View key={index} style={{ width: "90%", alignSelf: "center", borderRadius: 30, borderWidth: 0.5, borderColor: COLORS.border, marginTop: 15, alignItems: "center", paddingVertical: 20, paddingHorizontal: 10 }}>
                        <Image source={IMAGES.User} style={{ height: 50, width: 50,borderRadius:25 }}></Image>
                        <Text style={{ fontSize: 14, marginTop: 6, fontFamily: fontFamily.UrbanistBold }}>By Sanjeev kapoor</Text>
                        <Text style={{ fontSize: 10, fontWeight: "400", marginTop: 6, color: COLORS.gray }}>Chef </Text>
                        <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
                            <View style={{ height: 52, width: 96, backgroundColor: COLORS.bgCard, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 12, fontWeight: "700" }}>4.5</Text>
                                <Text style={{ fontSize: 8, fontWeight: "400" }}>Rating</Text>
                            </View>
                            <View style={{ height: 52, width: 96, backgroundColor: COLORS.bgCard, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 12, fontWeight: "700" }}>$99</Text>
                                <Text style={{ fontSize: 8, fontWeight: "400" }}>Pricing</Text>
                            </View>
                            <View style={{ height: 52, width: 96, backgroundColor: COLORS.bgCard, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 12, fontWeight: "700" }}>5 Years</Text>
                                <Text style={{ fontSize: 8, fontWeight: "400" }}>Exp</Text>
                            </View>
                        </View>
                    </View>
                ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default FeaturedScreen