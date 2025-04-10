import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Components/Color'
import fontFamily from '../Components/fontfamily'
import MessageCom from '../Components/MessageCom'
import CommunityFormCom from '../Components/CommunityFormCom'

const MessageScreen = () => {
  const [selectedTab, setSelectedTab] = useState('MessageCom');
  return (
    <SafeAreaView style={{flex:1,padding:15,backgroundColor:COLORS.white}}>

      <View style={{
        width: "100%",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        height: 50,
        flexDirection: "row",
        padding: 5,
        marginTop: 20,
        gap: 5,
        justifyContent: "center",
        marginBottom:10
      }}>
        <TouchableOpacity
          onPress={() => setSelectedTab('MessageCom')}
          style={{
            backgroundColor: selectedTab === 'MessageCom' ? COLORS.bgCard : null,
            width: "48%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }}>
          <Text style={{
            color: selectedTab === 'MessageCom' ? COLORS.gradient : COLORS.black,
            fontSize: 16,
            fontFamily: selectedTab === "MessageCom" ? fontFamily.UrbanistSemiBold : fontFamily.UrbanistRegular
          }}>
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab('CommunityFormCom')}
          style={{
            backgroundColor: selectedTab === 'CommunityFormCom' ? COLORS.bgCard : null,
            width: "48%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }}>
          <Text style={{
            color: selectedTab === 'CommunityFormCom' ? COLORS.gradient : COLORS.black,
            fontSize: 16,
            fontFamily: selectedTab === "CommunityFormCom" ? fontFamily.UrbanistSemiBold : fontFamily.UrbanistRegular
          }}>
            Community Form
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'MessageCom' ? <MessageCom/>: <CommunityFormCom/>}
    </SafeAreaView>
  )
}

export default MessageScreen