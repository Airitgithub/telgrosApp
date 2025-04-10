import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontFamily from '../Components/fontfamily';
import { IMAGES } from '../Components/Images';
import { FONT_SIZES } from '../Components/_FONT_SIZE';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation=useNavigation();
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([]); 

  
  const sendMessage = () => {
    if (message.trim().length === 0) return; 

    const newMessage = {
      id: messages.length + 1,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: "user", 
    };

    setMessages([...messages, newMessage]); 
    setMessage(""); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gradient }}>
      
      {/* Header */}
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center", padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold, color: COLORS.white }}>Chat</Text>
      </View>

      <View style={{
        flex: 1, 
        marginTop: 10, 
        backgroundColor: COLORS.white, 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20, 
        padding: 20
      }}>

        {/* Chat Messages List */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ 
              flexDirection: item.sender === "user" ? "row-reverse" : "row", 
              alignItems: "center", 
              gap: 5, 
              marginVertical: 5
            }}>
              
              {/* User Image */}
              <Image source={IMAGES.ChatImage} style={{ width: 40, height: 40, borderRadius: 20 }} />

              {/* Message Bubble */}
              <View style={{
                borderRadius: 10,
                backgroundColor: item.sender === "user" ? COLORS.gradient : COLORS.sky,
                maxWidth: "75%",
                padding: 10,
                position: "relative",
              }}>
                {/* Message Text */}
                <Text style={{
                  fontSize: 14,
                  fontFamily: fontFamily.UrbanistRegular,
                  color: item.sender === "user" ? COLORS.white : COLORS.black,
                  flexShrink: 1,
                  paddingBottom: 18,
                }}>
                  {item.text}
                </Text>

                {/* Time & Double Tick */}
                <View style={{
                  position: "absolute",
                  bottom: 5,
                  right: 8,
                  flexDirection: "row",
                  alignItems: "center"
                }}>
                  <Text style={{
                    fontSize: 12,
                    fontFamily: fontFamily.UrbanistRegular,
                    color: item.sender === "user" ? COLORS.white : COLORS.black,
                    marginRight: 3
                  }}>
                    {item.time}
                  </Text>
                  {item.sender === "user" && <MaterialCommunityIcons name="check-all" size={14} color={COLORS.white} />}
                </View>
              </View>
            </View>
          )}
        />

        {/* Chat Input Box */}
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: COLORS.border,
          borderRadius: 10,
          paddingVertical: 4,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
          <TextInput
            placeholder="Message"
            style={{
              fontSize: FONT_SIZES[12],
              marginLeft: 5,
              color: COLORS.gray,
              flex: 1,
            }}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Chat;
