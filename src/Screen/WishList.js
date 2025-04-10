import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import Icon from 'react-native-vector-icons/Ionicons';

const WishList = () => {
    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (index) => {
        setLikedItems((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the like state
        }));
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers text={'Wishlist'} showBack={true} />
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                    {
                        [1, 2, 3, 4].map((_, index) => (
                            <View key={index} style={{ width: "100%", borderRadius: 10, backgroundColor: COLORS.bgCard, marginTop: 20, padding: 10 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
                                        <Image source={IMAGES.User} style={{ height: 60, width: 60, borderRadius: 30 }} />
                                        <View style={{ gap: 5 }}>
                                            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>Sanjeev Kapoor</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                                <TouchableOpacity style={{ backgroundColor: COLORS.golden, borderRadius: 15, paddingHorizontal: 12, paddingVertical: 5 }}>
                                                    <Text style={{ textAlign: "center", fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: COLORS.white }}>Cooking</Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>4 hours ago</Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* Heart Icon with Click Event */}
                                    <TouchableOpacity
                                        style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}
                                        onPress={() => toggleLike(index)}
                                    >
                                        <Icon name="heart" color={likedItems[index] ? COLORS.red : COLORS.black} size={24} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 20, flexDirection: "row", gap: 16 }}>
                                    <Image source={IMAGES.Video} style={{ height: 68, width: 68, borderRadius: 8 }} />
                                    <View style={{ gap: 5 }}>
                                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold }}>Pizza Making Course</Text>
                                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                <Icon name="star" color={COLORS.golden} size={15} />
                                                <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>5.0</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                <Image source={IMAGES.Watch} style={{ height: 15, width: 15 }} />
                                                <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>5h 15m</Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistSemiBold }}>₹3,899</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: 10, gap: 5 }}>
                                    <Icon name="person-circle-outline" size={15} color="gray" />
                                    <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>Angela Yhu - Teaching Position</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                    <Text style={{ fontFamily: fontFamily.UrbanistSemiBold }}>Course Price</Text>
                                    <Text style={{ fontFamily: fontFamily.UrbanistSemiBold }}>₹6,699.0</Text>
                                </View>

                                <TouchableOpacity style={{ borderRadius: 30, borderWidth: 0.5, borderColor: COLORS.gradient, width: "45%", paddingVertical: 15, marginTop: 15 }}>
                                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, textAlign: "center" }}>Move to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default WishList;
