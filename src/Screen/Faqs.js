import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import fontFamily from '../Components/fontfamily';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const Faqs = () => {
  const data = [
    { id: 1, title: "Where can I watch?", description: "You can watch on Netflix, Hulu, or Amazon Prime." },
    { id: 2, title: "Mauris id nibh eu fermentum mattis purus?", description: "Yes, you can access this anytime." },
    { id: 3, title: "Fames imperdiet quam fermentum?", description: "It varies based on the plan you choose." },
    { id: 4, title: "Eros imperdiet rhoncus?", description: "You can contact support for help." },
    { id: 5, title: "Varius vitae, convallis amet lacus sit aliquet nibh?", description: "Yes, refunds are available under our policy." },
    { id: 6, title: "Tortor nisl pellentesque sit quis orci dolor?", description: "We support multiple payment methods." },
    { id: 7, title: "Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?", description: "Yes, we offer a trial period." },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const toggleDescription = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <Headers showBack={true} text={"FAQs"} />

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                paddingHorizontal: 12,
                borderRadius: 10,
                borderColor: COLORS.border,
                borderWidth: 1,
                paddingVertical: 20,
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, flex: 1 }}>
                  {item.title}
                </Text>

                <TouchableOpacity onPress={() => toggleDescription(item.id)}>
                  <CustomVectorIcons
                    name={isOpen === item.id ? "minus" : "plus"}
                    size={24}
                    color={COLORS.black}
                    iconSet={"Feather"}
                  />
                </TouchableOpacity>
              </View>

              {isOpen === item.id && (
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontFamily: fontFamily.UrbanistRegular,
                    color: COLORS.gray,
                  }}
                >
                  {item.description}
                </Text>
              )}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Faqs;
