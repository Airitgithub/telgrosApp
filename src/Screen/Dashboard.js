import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput, FlatList, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { IMAGES } from '../Components/Images';
import { COLORS } from '../Components/Color';
import Batches from '../Components/Batches';
import Trading from '../Components/Trading';
import Featured from '../Components/Featured';
import Courses from '../Components/Courses';
import fontFamily from '../Components/fontfamily';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const Dashboard = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [filtermodalVisible, setfilterModalVisible] = useState(false);
  const data = [
    { id: 1, name: "Singing" },
    { id: 2, name: "Dancing" },
    { id: 3, name: "Painting" },
    { id: 4, name: "Cooking" },
    { id: 5, name: "Digital Marketing" },
    { id: 6, name: "Automobile" },
    { id: 7, name: "Artificial Intelligence" },
  ];
  const SearchData = [
    { id: 1, name: "Oregon Trail" },
    { id: 2, name: "Slickrock Bike Trail" },
    { id: 3, name: "Vermont" },
    { id: 4, name: "Grand Canyon" },
    { id: 5, name: "Lake Huron" }
  ];
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
          <Image
            source={IMAGES.User}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontFamily:fontFamily.UrbanistBold }}>Username</Text>
            <Text style={{ fontSize: 16, fontFamily:fontFamily.UrbanistRegular, color: COLORS.gray }}>@username</Text>
          </View>

          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("WishList")}
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
              }}
            >
              <CustomVectorIcons name={"hearto"} size={22} color={COLORS.black} iconSet={"AntDesign"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
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
              }}
            >
              <CustomVectorIcons name={"notifications-outline"} size={24} color={COLORS.black} iconSet={"Ionicons"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
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
              }}
            >
              <CustomVectorIcons name={"shoppingcart"} size={24} color={COLORS.black} iconSet={"AntDesign"} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Search Bar */}
          <View
            style={{
              height: 50,
              width: "100%",
              backgroundColor: COLORS.white,
              marginTop: 30,
              borderRadius: 50,
              borderWidth: 0.5,
              borderColor: COLORS.border,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "25%", justifyContent: "center", alignItems: "center" }}>
                <CustomVectorIcons name={"search1"} size={24} color={COLORS.black} iconSet={"AntDesign"} />
              </View>
              <TextInput
                placeholder="Search here..."
                style={{
                  color: COLORS.gray,
                  fontFamily: fontFamily.UrbanistMedium,
                  fontSize: 16
                }}
                value={search}
                onChangeText={(text) => setSearch(text)}
                keyboardType="default"
                placeholderTextColor={COLORS.gray}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("FilterScreen")
              }
              style={{
                height: 35,
                width: 35,
                borderRadius: 18,
                backgroundColor: "#B8B8D233",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Image
                source={IMAGES.Filter}
                style={{ height: 24, width: 24 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>

          </View>


          {/* Advertisement Section */}
          <View
            style={{
              marginTop: 12,
              height: 100,
              width: "100%",
              backgroundColor: COLORS.white,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily:fontFamily.UrbanistMedium,
                color: COLORS.gray,
                textAlign: "center",
              }}
            >
              Advertisement
            </Text>
          </View>

          {/* Batches Section */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily:fontFamily.UrbanistSemiBold }}>Batches</Text>
            <TouchableOpacity onPress={() => navigation.navigate("BatchesScreen")}>
              <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily:fontFamily.UrbanistMedium }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <Batches />



          {/* FlatList for Vertical Items */}

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={5}
            renderItem={({ item }) => (
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    height: 30,
                    backgroundColor: "#B8B8D233",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 20
                  }}
                >
                  <Text style={{ color: COLORS.gray, fontSize: 14, fontFamily:fontFamily.UrbanistMedium, textAlign: "center", }} numberOfLines={1}>{item.name}</Text>
                </View>
              </View>
            )}
          />
          <TouchableOpacity style={{ padding: 5, backgroundColor: "#855DF666", justifyContent: "center", width: 80, marginTop: -30, alignSelf: 'flex-end' }} onPress={() => setModalVisible(true)}>

            <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistMedium, textAlign: "center", color: COLORS.white }}>View all</Text>
          </TouchableOpacity>
          {/* modal   */}

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
                width:"90%",
                padding: 20,
                backgroundColor: 'white',
                borderRadius: 10,
                height: 350,

              }}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}>
                  <Text style={{
                    fontSize: 16,
                    fontFamily:fontFamily.UrbanistSemiBold
                  }}>Select Your Categories</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <CustomVectorIcons name={"close"} size={24} color={COLORS.black} iconSet={"Ionicons"} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20, gap: 7 }}>
                    {
                      data.map((item) => (
                        <View key={item.id} style={{ borderRadius: 50, padding: 10, borderWidth: 0.5, borderColor: COLORS.border }}>
                          <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistSemiBold,color:COLORS.black}}>{item.name}</Text>
                        </View>
                      ))
                    }
                  </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: COLORS.gradient, borderRadius: 50, width: 150, justifyContent: "center", alignItems: "center", paddingVertical: 10, paddingHorizontal: 10 }} onPress={() => setModalVisible(false)}>
                  <Text style={{ fontSize: 18, color: COLORS.white, fontFamily:fontFamily.UrbanistMedium }}>Submit</Text>
                </TouchableOpacity>
              </View>

            </View>
          </Modal>

          {/* trading */}

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily:fontFamily.UrbanistSemiBold }}>Trading Course</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TradingScreen")}>
              <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily:fontFamily.UrbanistMedium }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          {/* userVideo */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <View key={index} style={{ marginRight: 15 }}>
                <Trading />
              </View>
            ))}
          </ScrollView>

          {/* one on session */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily:fontFamily.UrbanistSemiBold }}>One On Session</Text>
            <TouchableOpacity onPress={() => navigation.navigate("OneononeScreen")}>
              <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily:fontFamily.UrbanistMedium }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

          >
            {[1, 2, 3, 4].map((_, index) => (
              <View key={index} style={{ marginRight: 15 }}>
                <Trading />
              </View>
            ))}
          </ScrollView>
          {/* Featured Expert */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold }}>Featured Expert</Text>
            <TouchableOpacity onPress={() => navigation.navigate("FeaturedScreen")}>
              <Text style={{ fontSize: 14, color: COLORS.gray, fontFamily: fontFamily.UrbanistMedium }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4].map((_, index) => (
                <View key={index} style={{marginRight:15}} >
                  <Featured />
                </View>
              ))
            }
          </ScrollView>
          {/* Course */}
          <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold }}>Recommended</Text>
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold, color: COLORS.gradient }}>Courses</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4].map((_, index) => (
                <View key={index} style={{ marginRight: 5, marginBottom: 70 }}>
                  <Courses />
                </View>
              ))
            }
          </ScrollView>
        </ScrollView>
      </SafeAreaView>

    </View>
  );
};

export default Dashboard;
