import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import Headers from '../Components/Headers';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import { COLORS } from '../Components/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = ({navigation}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, padding: 15 }}>
                <Headers text={'Cart'} showBack={true}/>
                <ScrollView style={{marginBottom:200}} showsVerticalScrollIndicator={false}>
                    {[1, 2, 3].map((index) => (
                        <View
                            key={index}
                            style={{
                                height: 146,
                                width: '100%',
                                padding: 10,
                                marginTop: 20,
                                borderRadius: 10,
                                borderWidth: 0.5,
                                borderColor: COLORS.border,
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Image source={IMAGES.Video} style={{ height: 68, width: 68 }} />
                                <View style={{ gap: 3 }}>
                                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold }}>
                                        Pizza Making Course
                                    </Text>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                            <Icon name="star" size={15} color={COLORS.golden} />
                                            <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                                5.0
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                            <Image source={IMAGES.Watch} style={{ height: 15, width: 15 }} />
                                            <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                                5h 15m
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistSemiBold }}>₹3,899</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, gap: 5 }}>
                                <Icon name="person-circle-outline" size={16} color={COLORS.gray} />
                                <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                    Angela Yhu - Teaching Position
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>Total Amount</Text>
                                <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>₹6,699.0</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Bottom Summary Section */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 200,
                    width: '100%',
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.black,
                    shadowOffset: { width: 0, height: -5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 10,
                    paddingHorizontal: 12,
                    paddingTop: 10,
                }}
            >
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>Subtotal</Text>
                        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>₹6,699.0</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>Tax & Fees</Text>
                        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>₹150.0</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>Total</Text>
                        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>₹16,699.0</Text>
                    </View>
                </View>
                <View style={{borderBottomColor:COLORS.gray,borderBottomWidth:0.5,width:"100%",marginTop:10}}></View>
                <View style={{ flexDirection: 'row',justifyContent:"space-between", marginTop: 20}}>
                    <View style={{gap:5}}>
                        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold }}>₹16,699</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' ,gap:5}}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gradient }}>
                                View detailed bill
                            </Text>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Icon name={showDropdown ? 'chevron-down' : 'chevron-up'} size={15} color={COLORS.gradient} />
                            </TouchableOpacity>
                        </View>    
                    </View>
                   
                    <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={{borderRadius:50,backgroundColor:COLORS.gradient,justifyContent:"center",alignItems:"center",paddingHorizontal:15,paddingVertical:15}}>
                          <Text style={{color:COLORS.white,fontSize:16,fontFamily:fontFamily.UrbanistBold}}>Proceed to Pay</Text>
                     </TouchableOpacity>
                    
                    <View>      
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;