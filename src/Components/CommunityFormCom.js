import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import fontFamily from './fontfamily';
import { COLORS } from './Color';
import { IMAGES } from './Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomSheetOptions from './BottomSheetOptions'; 
const CommunityFormCom = () => {
  const [comment, setComment] = useState('');
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, marginBottom: 70 }}>

        {/* Header Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold }}>Community Forum</Text>
          <TouchableOpacity
            style={{
              height: 36, width: 36, borderRadius: 18, backgroundColor: COLORS.gradient,
              justifyContent: 'center', alignItems: 'center'
            }}
          >
            <AntDesign name="plus" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Discussion Section */}
        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold, marginTop: 30 }}>Discussion</Text>

        <View style={{ width: '100%', borderWidth: 0.5, borderRadius: 10, borderColor: COLORS.gray, padding: 20, marginTop: 20 }}>

          {/* User Information */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={IMAGES.User} style={{ height: 60, width: 60 ,borderRadius:30}} />
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>
                Sanjeev Kapoor
              </Text>
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <View style={{
                  backgroundColor: COLORS.golden, paddingHorizontal: 12, paddingVertical: 5,
                  borderRadius: 20, justifyContent: 'center', alignItems: 'center'
                }}>
                  <Text style={{ color: COLORS.white, fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>Cooking</Text>
                </View>
                <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>4 hours ago</Text>
              </View>
            </View>
          </View>

          {/* Post Content */}
          <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 15 }}>
            How do you know if cheese has gone bad?
          </Text>
          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, lineHeight: 26, marginTop: 20 }}>
            When determining if cheese has gone bad, look for signs such as mold, a sour smell, or a slimy texture.
          </Text>
          <Image source={IMAGES.Chees} style={{ width: '100%', height: 150, borderRadius: 10, marginTop: 20, resizeMode: 'cover' }} />

          {/* Post Footer */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Comment")} style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <Image source={IMAGES.Comment} style={{height:23,width:23}}/>
              <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistMedium }}>5 Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => bottomSheetRef.current.open()}>
              <AntDesign name="ellipsis1" size={24} />
            </TouchableOpacity>
          </View>

          
          {
            [1,2].map((_,index)=>(
              <View key={index}>
                <View style={{ borderBottomColor: COLORS.gray, width: '100%', marginTop: 15, borderBottomWidth: 0.5 }} />
                <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
                  <Image source={IMAGES.User} style={{height:45,width:45,borderRadius:23}}></Image>
                  <View style={{ gap: 5 }}>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                      <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistBold }}>jack,</Text>
                      <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>April 24,  | 06:49pm</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistMedium, lineHeight: 24, width: "60%" }}>We wanted flying cars, instead we got 7 Twitter clones.</Text>
                  </View>
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

      </View>

      {/* Bottom Sheet */}
      <BottomSheetOptions
        ref={bottomSheetRef}
      />

    </ScrollView>
  );
};
;

export default CommunityFormCom;
