import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback, Platform, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES } from './Images';
import { COLORS } from './Color';
import fontFamily from './fontfamily';

const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const MessageCom = () => {
    const [input, setInput] = useState('');
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image source={IMAGES.Avater} style={{ height: 40, width: 40 }} />
                    <View style={{ gap: 3 }}>
                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>My Messages</Text>
                        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                            2 new messages
                        </Text>
                    </View>
                </View>
                <View>
                    <Ionicons name="notifications-sharp" size={24} color={COLORS.black} />
                    <View
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: COLORS.white,
                            backgroundColor: COLORS.red,
                            marginTop: -22,
                            marginLeft: 12,
                        }}
                    />
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    borderColor: COLORS.border,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginTop: 20,
                    padding: 4,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TextInput
                    placeholder="Search here"
                    style={{
                        fontSize: 16,
                        color: COLORS.gray,
                        marginLeft: 10,
                        flex: 1,
                        width: '80%',
                    }}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        backgroundColor: COLORS.gradient,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons name="search-outline" size={24} color={COLORS.white} />
                </View>
            </View>

            <View style={{ marginTop: 20, marginBottom: 60 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <View key={index}>
                        <TouchableComponent
                            background={
                                Platform.OS === 'android' ? TouchableNativeFeedback.Ripple(COLORS.gradient, false) : undefined
                            }
                            onPress={() => navigation.navigate('Chat')}
                            activeOpacity={0.5}
                        >
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 15, width: "100%" }}>
                                    <View >
                                        <Image source={IMAGES.Avater} style={{ height: 40, width: 40 }} />
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ width: '75%' }}>
                                            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>Roger Hulg</Text>
                                            <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                                Hey, can I ask something? I need your help, please
                                            </Text>
                                        </View>

                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: fontFamily.UrbanistRegular,
                                                    color: COLORS.gray,
                                                }}
                                            >
                                                15 Min
                                            </Text>
                                            <View
                                                style={{
                                                    height: 20,
                                                    width: 20,
                                                    borderRadius: 10,
                                                    backgroundColor: COLORS.gradient,
                                                    alignItems: 'center',
                                                    alignSelf: 'flex-end',
                                                    marginTop: 15,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: COLORS.white,
                                                        fontSize: 16,
                                                        marginTop: -2,
                                                        fontFamily: fontFamily.UrbanistMedium,
                                                    }}
                                                >
                                                    3
                                                </Text>
                                            </View>
                                        </View>


                                        
                                    </View>
                                </View>
                                <View style={{ width: "100%", borderBottomWidth: 0.5, borderBottomColor: COLORS.gradient,marginLeft:50 }}></View>
                            </View>
                        </TouchableComponent>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default MessageCom;
