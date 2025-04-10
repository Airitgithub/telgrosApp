import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Components/Color'
import { IMAGES } from '../Components/Images'
import fontFamily from '../Components/fontfamily'
import { useNavigation } from '@react-navigation/native'
import All from '../Components/All'
import CoursesLI from '../Components/CoursesLI'
import Subscribed from '../Components/Subscribed'
import CustomVectorIcons from '../Components/CustomVectorIcons'

const Library = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState("All");
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 36,
              width: 36,
              borderRadius: 18,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.border,
              borderWidth: 0.5
            }}>
            <Image
              source={IMAGES.ArrowLeft}
              style={{ height: 15, width: 18, tintColor: COLORS.black }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold }}>Library</Text>
        </View>

        <View style={{ flexDirection: "row", marginLeft: "auto" }}>
          {[
            { iconName: "hearto", iconSet: "AntDesign", screen: "WishList" },
            { iconName: "notifications-outline", iconSet: "Ionicons", screen: "Notification" },
            { iconName: "shoppingcart", iconSet: "AntDesign", screen: "CartScreen" }
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.screen)}
              style={{
                height: 36,
                width: 36,
                backgroundColor: COLORS.white,
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderWidth: 0.5,
                borderColor: COLORS.border,
              }}>
              <CustomVectorIcons
                name={item.iconName}
                size={22}
                color={COLORS.black}
                iconSet={item.iconSet}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
     <ScrollView showsVerticalScrollIndicator={false}>
      {/* Heading */}
      <View style={{ flexDirection: "row", marginTop: 35, gap: 10}}>
        {["All", "Courses", "Subscribed"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedItem(item)}
            style={{
              paddingVertical: 10,
              backgroundColor: selectedItem === item ? COLORS.gradient : COLORS.bgCard,
              borderRadius: 50,
              paddingHorizontal: 15
            }}>
            <Text style={{
              fontSize: 12,
              fontFamily: fontFamily.UrbanistRegular,
              color: selectedItem === item ? COLORS.white : COLORS.gray
            }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Rendering */}
      {selectedItem === "All" && <All />}
      {selectedItem === "Courses" && <CoursesLI />}
      {selectedItem === "Subscribed" && <Subscribed />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;
