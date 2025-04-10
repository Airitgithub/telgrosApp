import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import { Trading_Data } from "../Static_Data/index";
import fontFamily from '../Components/fontfamily';

const TradingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgColor,padding:15 }}>
            <Headers text="Trading Course" showBack={true}/>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 15, alignItems: "center" }}
            >
                {Trading_Data.map((item, index) => (
                    <View key={index} style={{ marginBottom: 15 }}>
                        {/* Card Container */}
                        <View style={{width: "100%", backgroundColor: COLORS.white, borderRadius: 15, padding: 15, elevation: 5 }}>

                            {/* Course Image */}
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={IMAGES.Card} style={{ height: 176, width: "100%", borderRadius: 10 }} />
                            </TouchableOpacity>

                            {/* User Info */}
                            <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <Image source={IMAGES.User} style={{ height: 20, width: 20 ,borderRadius:10}} />
                                <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistSemiBold }}>{item.userName}</Text>
                            </View>

                            {/* Course Title & Description */}
                            <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold, marginTop: 5 }}>{item.title}</Text>
                            <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistRegular, marginTop: 3, color: COLORS.gray }}>{item.desc}</Text>

                            {/* Price & Buy Now Button */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                    <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold }}>Price:</Text>
                                    <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold, color: COLORS.primary }}>{item.price}</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderWidth: 0.5,
                                        borderColor: COLORS.gradient,
                                        borderRadius: 15,
                                        paddingVertical: 7,
                                        paddingHorizontal: 15,
                                        
                                    }}
                                >
                                    <Text style={{ fontSize: 12, fontFamily:fontFamily.urmed, color: COLORS.gradient }}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default TradingScreen;
