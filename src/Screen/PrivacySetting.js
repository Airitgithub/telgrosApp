import { View, Text, TouchableOpacity, Animated, SafeAreaView, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import fontFamily from '../Components/fontfamily'
import { COLORS } from '../Components/Color'
import CustomVectorIcons from '../Components/CustomVectorIcons'
import Headers from '../Components/Headers'

const PrivacySetting = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
            <Headers showBack={true} text={"Privacy Setting"} />
            <View style={{ width: "100%", borderRadius: 10, backgroundColor: COLORS.bgCard, marginTop: 20, paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <CustomVectorIcons size={24} iconSet="MaterialIcons" name={"lock-outline"} color={COLORS.black} />
                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium }}>Manage Visibility (Public/Private)</Text>
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
            {/* Delete Account */}
            <TouchableOpacity style={{ flexDirection: "row", gap: 10, marginTop: 20 }} onPress={() => setModalVisible(!modalVisible)}>
                <CustomVectorIcons name={"delete-forever-outline"} size={24} iconSet={"MaterialCommunityIcons"} color={COLORS.black} />
                <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium }}>Delete Account</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        width: "90%",
                        padding: 20,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        alignItems: 'center',
                    }}>
                        <View style={{alignItems:"center"}}>
                            <CustomVectorIcons name={"delete"} iconSet={"AntDesign"} size={44} color={COLORS.red}/>
                            <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistSemiBold,marginTop:10}}>Delete Account</Text>
                            <Text style={{fontSize:13,fontFamily:fontFamily.UrbanistRegular,color:COLORS.gray,lineHeight:15,textAlign:"center",marginTop:10}}>Lorem ipsum dolorem non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
                            <TouchableOpacity onPress={()=>Alert.alert("your Account id Deleted")} activeOpacity={0.5} style={{borderRadius:50,backgroundColor:COLORS.red,marginTop:20,justifyContent:"center",alignItems:"center",minWidth:150,paddingVertical:12,paddingHorizontal:120}}>
                             <Text style={{color:COLORS.white,fontSize:15,fontFamily:fontFamily.UrbanistSemiBold}}>Delete</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium,marginTop:20 ,color:COLORS.red}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default PrivacySetting