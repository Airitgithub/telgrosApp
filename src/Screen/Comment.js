import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Headers from '../Components/Headers';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import { COLORS } from '../Components/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Comment = () => {
    const [comment, setComment] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Comments"} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: '100%', borderWidth: 0.5, borderRadius: 10, borderColor: COLORS.gray, padding: 20, marginTop: 20, }}>
                <Image source={IMAGES.Chees} style={{ width: '100%', height: 150, borderRadius: 10, resizeMode: 'cover' }} />

                {/* Post Footer */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Comment")} style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Image source={IMAGES.Comment} style={{height:23,width:23}}/>
                        <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>5 Comments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheetRef.current.open()}>
                        <AntDesign name="ellipsis1" size={24} />
                    </TouchableOpacity>
                </View>
                {
                    [1, 2, 3].map((_,index) => (
                        <View key={index}>
                            <View style={{ borderBottomColor: COLORS.gray, width: '100%', marginTop: 15, borderBottomWidth: 0.5 }} />
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Image source={IMAGES.User} style={{height:60,width:60,borderRadius:30}}></Image>
                                    <View style={{ gap: 5 }}>
                                        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                            <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistBold }}>jack,</Text>
                                            <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>April 24,  | 06:49pm</Text>
                                        </View>
                                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium, lineHeight: 24, width: "50%" }}>We wanted flying cars, instead we got 7 Twitter clones.</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <AntDesign name="ellipsis1" size={24} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))
                }
            </View>
            {/* Comment Input */}
            <View
                style={{
                    width: '100%',
                    borderColor: COLORS.gray, borderWidth: 0.5, marginTop: 30,
                    padding: 5, borderRadius: 10, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center'
                }}
            >
                <TextInput
                    placeholder='Comment'
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    style={{ marginLeft: 10, width: '85%' }}
                />
                <TouchableOpacity
                    onPress={() => !comment ? null : Alert.alert('Comment submitted:', comment)}
                    style={{ marginRight: 10 }}
                >
                    <Ionicons name="send-outline" size={24} />
                </TouchableOpacity>
            </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Comment