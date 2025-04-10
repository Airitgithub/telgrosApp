import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Headers from '../Components/Headers';
import fontFamily from '../Components/fontfamily';
import { COLORS } from '../Components/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider';

const FilterScreen = () => {
  const [value, setValue] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "Singing" },
    { id: 2, name: "Dancing" },
    { id: 3, name: "Painting" },
    { id: 4, name: "Cooking" },
    { id: 5, name: "Digital Marketing" },
    { id: 6, name: "Automobile" },
    { id: 7, name: "Artificial Intelligence" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <Headers text={'Filter Option'} showBack={true} />

      {/* Categories Section */}
      <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>Categories</Text>
      <View style={{ marginTop: 15, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedCategory(item.id)}
            style={{
              backgroundColor: selectedCategory === item.id ? COLORS.gradient : COLORS.bgCard,
              paddingHorizontal: 15,
              borderRadius: 18,
              borderWidth: 0.5,
              borderColor: COLORS.border,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: fontFamily.UrbanistSemiBold,
                color: selectedCategory === item.id ? COLORS.white : COLORS.black
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Learner Ratings Section */}
      <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 40 }}>Learner Ratings</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Icon key={index} name="star" size={24} color={COLORS.black} />
        ))}
      </View>

      {/* Price Range Slider */}
      <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 35, marginLeft: 10 }}>Price</Text>
      <Slider
        style={{ width: "100%", marginTop: 20 }}
        minimumValue={0}
        maximumValue={100}
        step={2}
        value={value}
        onValueChange={(val) => setValue(val)}
        minimumTrackTintColor={COLORS.gradient}
        maximumTrackTintColor={COLORS.tintColor}
        thumbTintColor={COLORS.gradient}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, marginTop: 5 }}>
        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistSemiBold }}>$0.00</Text>
        <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistSemiBold }}>${value}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
