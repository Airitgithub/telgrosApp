import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Headers from '../Components/Headers';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import { COLORS } from '../Components/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustumBtn from '../Components/CustumBtn';

const Payment = ({ navigation }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1, padding: 15 }}>
                <Headers text={"Payment Options"} showBack={true} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 200 }}>
                    <View
                        style={{
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
                                        <AntDesign name="star" size={15} color={COLORS.golden} />
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
                            <Ionicons name="person-circle-outline" size={16} color={COLORS.gray} />
                            <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                Angela Yhu - Teaching Position
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>Total Amount</Text>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>₹6,699.0</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>Credit & Debit Cards</Text>
                    {/* credit and debit */}
                    <View style={{
                        //   height: 146,
                        width: '100%',
                        padding: 10,
                        marginTop: 20,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: COLORS.border,
                        gap: 15
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: COLORS.border, borderWidth: 0.5, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 5 }}>
                            < View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Image source={IMAGES.Axis} style={{ height: 20, width: 32 }} resizeMode="stretch"></Image>
                                <Text style={{ fontSize: 12, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>Axis Bank **** **** **** 8395</Text>
                            </View>
                            <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 10, borderColor: COLORS.gradient, borderWidth: 0.5 }}>

                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: COLORS.border, borderWidth: 0.5, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 5 }}>
                            < View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Image source={IMAGES.Visa} style={{ height: 12, width: 32 }} resizeMode="stretch"></Image>
                                <Text style={{ fontSize: 12, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>HDFC Bank **** **** **** 8395</Text>
                            </View>
                            <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 10, borderColor: COLORS.gradient, borderWidth: 0.5 }}>

                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("NewCard")} style={{ backgroundColor: COLORS.bgCard, padding: 2, borderRadius: 5 }}>
                                <AntDesign name="plus" size={16} color={COLORS.gradient} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular }}>Add New Card</Text>
                        </View>
                    </View>
                    {/* upi */}
                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>UPI</Text>
                    <View style={{

                        width: '100%',
                        padding: 10,
                        marginTop: 20,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: COLORS.border,
                        gap: 15
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: COLORS.border, borderWidth: 0.5, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 5 }}>
                            < View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Image source={IMAGES.GooglePay} style={{ height: 20, width: 23 }} resizeMode="stretch"></Image>
                                <Text style={{ fontSize: 12, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>Google Pay</Text>
                            </View>
                            <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 10, borderColor: COLORS.gradient, borderWidth: 0.5 }}>

                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: COLORS.border, borderWidth: 0.5, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 5 }}>
                            < View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Image source={IMAGES.PhonePay} style={{ height: 20, width: 23 }} resizeMode="stretch"></Image>
                                <Text style={{ fontSize: 12, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>Phone Pay</Text>
                            </View>
                            <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 10, borderColor: COLORS.gradient, borderWidth: 0.5 }}>

                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("NewCard")} style={{ backgroundColor: COLORS.bgCard, padding: 2, borderRadius: 5 }}>
                                <AntDesign name="plus" size={16} color={COLORS.gradient} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular }}>Add New UPI ID</Text>
                        </View>
                    </View>

                    {/* payment Option */}
                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>More Pyment Options</Text>
                    <View style={{

                        width: '100%',
                        padding: 10,
                        marginTop: 20,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: COLORS.border,
                        gap: 15
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: COLORS.border, borderWidth: 0.5, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 5 }}>
                            < View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Image source={IMAGES.Banking} style={{ height: 20, width: 20 }} resizeMode="stretch"></Image>
                                <Text style={{ fontSize: 12, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>Net Banking</Text>
                            </View>
                            <TouchableOpacity style={{ height: 20, width: 20, borderRadius: 10, borderColor: COLORS.gradient, borderWidth: 0.5 }}>

                            </TouchableOpacity>
                        </View>


                    </View>
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
                <View style={{ borderBottomColor: COLORS.gray, borderBottomWidth: 0.5, width: "100%", marginTop: 10 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold }}>₹16,699</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gradient }}>
                                View detailed bill
                            </Text>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Ionicons name={showDropdown ? 'chevron-down' : 'chevron-up'} size={15} color={COLORS.gradient} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ borderRadius: 50, backgroundColor: COLORS.gradient, paddingHorizontal: 15, paddingVertical: 15 }}>
                        <Text style={{ color: COLORS.white, fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>Proceed to Pay</Text>
                    </TouchableOpacity>

                    <View>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 20,
                        paddingVertical: 20,
                        paddingHorizontal: 10,
                        width: "90%",
                        height: "45%",
                        alignItems: 'center' 
                    }}>
                        <Image source={IMAGES.Payment} style={{ height: 132, width: 132 }} resizeMode="stretch" />
                        <Text style={{fontSize: 12,fontFamily:fontFamily.UrbanistSemiBold,marginTop:10}}>Order Confirmed</Text>
                        <Text style={{fontSize:12,fontFamily:fontFamily.UrbanistRegular,textAlign:"center",width:275,marginTop:5}}>Thank you for your order. Order I’d Is #4044 Date 12 Nov. 2024 5:00 PM you will receive email confirmation shortly</Text>
                        <View style={{position:"absolute",bottom:20,width:"90%"}}>
                        <CustumBtn text={"Back to Home"} onPress={()=>setModalVisible(!modalVisible)}></CustumBtn>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default Payment