import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomBackBtn from '../Components/CustomBackBtn';
import { COLORS } from '../Components/Color';
import CustumBtn from '../Components/CustumBtn';

const SelectHoby = ({ navigation }) => {
    const data = [
        { id: 1, name: "Singing" },
        { id: 2, name: "Dancing" },
        { id: 3, name: "Painting" },
        { id: 4, name: "Cooking" },
        { id: 5, name: "Digital Marketing" },
        { id: 6, name: "Automobile" },
        { id: 7, name: "Artificial Intelligence" },
    ];
    function navi() {
        navigation.navigate("BottomTabNavigator")
    }
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <CustomBackBtn
                title={"What Do You Like?"}
                desc={"Please tell us a little bit more about your interests."}
            />
            <View style={{ flex: 1 }}>
                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                }}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                height: 42,
                                paddingHorizontal: 15,
                                backgroundColor: COLORS.white,
                                borderWidth: 0.5,
                                borderColor: COLORS.border,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                            }}

                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.black,
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{ position: "absolute", bottom: 20, width: "100%", alignSelf: "center" }}>
                <CustumBtn text={"Continue"} onPress={navigation.navigate("BottomTabNavigator")} />
            </View>
        </SafeAreaView>
    );
};
export default SelectHoby;
