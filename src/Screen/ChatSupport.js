import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Headers from "../Components/Headers";
import { IMAGES } from "../Components/Images";
import { COLORS } from "../Components/Color";
import fontFamily from "../Components/fontfamily";
import CustomVectorIcons from "../Components/CustomVectorIcons";
const ChatSupport = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      text: "Hi Kitsbase, Let me know if you need help and you can ask us any questions.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "bot",
    },
  ]);

  const flatListRef = useRef();

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newUserMessage = {
      id: Math.random().toString(),
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "user",
    };

    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setMessage("");

    if (message.toLowerCase().includes("how to create a telgros account")) {
      setTimeout(() => {
        const botResponse = {
          id: Math.random().toString(),
          text: "To create a Telgros account, visit our website and click on Sign Up.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          sender: "bot",
        };
        setChatMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [chatMessages]);


  return (
    <View style={{flex:1}}>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, padding: 15 }}>
      <Headers showBack={true} text={"Chat Support"} />

      <FlatList
      contentContainerStyle={{paddingBottom:100}}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={chatMessages}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: item.sender === "bot" ? "row" : "row-reverse",
              alignItems: "flex-start",
              marginTop: 50,
            }}
          >
            {item.sender === "bot" && (
              <Image
                source={IMAGES.ChatSupport}
                resizeMode="contain"
                style={{ width: 40, height: 40, marginRight: 10, marginTop: 50 }}
              />
            )}
            <View
              style={{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: item.sender === "bot" ? 0 : 20,
                borderBottomRightRadius: item.sender === "bot" ? 20 : 0,
                backgroundColor: item.sender === "bot" ? "#F0F0F0" : COLORS.gradient,
                maxWidth: "70%",
                padding: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fontFamily.PoppinsRegular,
                  color: item.sender === "bot" ? COLORS.black : COLORS.white,
                }}
              >
                {item.text}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.gray,
                fontFamily: fontFamily.PoppinsRegular,
                position: "absolute",
                bottom: -25,
                left: item.sender === "bot" ? 65 : undefined,
                right: item.sender !== "bot" ? 20 : undefined,
              }}
            >
              {item.time}
            </Text>
          </View>
        )}
      />

      
    </SafeAreaView>
    {/* Input Box */}
      <View style={{
        width: "100%",
        backgroundColor: COLORS.white, 
        position: "absolute",
        bottom: 0,
        elevation: 10,
      }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
          <CustomVectorIcons name={"link"} color={COLORS.black} size={20} iconSet={"Fontisto"} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 0.5,
              borderColor: COLORS.border,
              borderRadius: 10,
              paddingVertical: 4,
              paddingHorizontal: 10,
              width: "90%",
            }}
          >
            <TextInput
              placeholder="Message"
              placeholderTextColor={COLORS.gray}
              style={{ fontSize: 14, marginLeft: 5, color: COLORS.black, flex: 1 }}
              value={message}
              onChangeText={(text) => setMessage(text)}
              onFocus={() => console.log("Input focused")}
            />
            <TouchableOpacity onPress={sendMessage}>
              <CustomVectorIcons name={"send-outline"} size={24} color={COLORS.gradient} iconSet={"Ionicons"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatSupport;