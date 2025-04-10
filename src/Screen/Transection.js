import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fontFamily from '../Components/fontfamily';
import { Dropdown } from 'react-native-element-dropdown';

const Transection = () => {
    const months = [
        { label: "January", value: "January" },
        { label: "February", value: "February" },
        { label: "March", value: "March" },
        { label: "April", value: "April" },
        { label: "May", value: "May" },
        { label: "June", value: "June" },
        { label: "July", value: "July" },
        { label: "August", value: "August" },
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" }
    ];

    const data = [
        { id: 1, name: "Learner Name", date: "17 Sep 2023", time: "11:21 AM", price: "$ 350.00", status: "Pending", icon: "arrowup" },
        { id: 2, name: "Platform", date: "17 Sep 2023", time: "11:21 AM", price: "$ 350.00", status: "Successful", icon: "arrowdown" },
        { id: 3, name: "Course Sold", date: "17 Sep 2023", time: "11:21 AM", price: "$ 350.00", status: "Failed", icon: "arrowdown" },
        { id: 4, name: "Money Service", date: "17 Sep 2023", time: "11:21 AM", price: "$ 350.00", status: "Failed", icon: "arrowdown" }
    ];

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "pending": return COLORS.orange;
            case "successful": return COLORS.green;
            case "failed": return COLORS.red;
            default: return COLORS.black;
        }
    };

    const [selectedMonth, setSelectedMonth] = useState([]);

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Income & Transactions"} />
            <View style={{ width: "100%", padding: 20, borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.border, marginTop: 50 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <View style={{ height: 32, width: 32, backgroundColor: "green", borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                            <Feather name="dollar-sign" size={24} color={COLORS.white} />
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, color: COLORS.black }}>Total Income</Text>
                    </View>
                    <Dropdown
                        style={{ borderWidth: 0.5, borderColor: COLORS.border, borderRadius: 6, paddingHorizontal: 10, backgroundColor: COLORS.white, paddingVertical: 10, width: "40%" }}
                        selectedTextStyle={{ fontSize: 12, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
                        data={months}
                        maxHeight={300}
                        placeholder='This Month'
                        labelField="label"
                        valueField="value"
                        value={selectedMonth}
                        onChange={(item) => setSelectedMonth(item.value)}
                        placeholderStyle={{ fontSize: 12, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
                        itemTextStyle={{ fontSize:12, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
                    />
                </View>
                <Text style={{ fontSize: 24, fontFamily: fontFamily.UrbanistBold, marginTop: 20 }}>$ 1250</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold }}>Recent Transactions</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: COLORS.gray }}>View all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: COLORS.bgCard, justifyContent: "center", alignItems: "center" }}>
                                <AntDesign name={item.icon} size={24} color={COLORS.black} />
                            </View>
                            <View style={{ gap: 5 }}>
                                <Text style={{ color: COLORS.black, fontFamily: fontFamily.UrbanistBold }}>{item.name}</Text>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Text style={{ color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular, fontSize: 12 }}>{item.date}</Text>
                                    <Text style={{ color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular, fontSize: 12 }}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ gap: 5 }}>
                            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>{item.price}</Text>
                            <View style={{ backgroundColor: COLORS.bgCard, justifyContent: "center", alignItems: "center", paddingHorizontal: 5, paddingVertical: 4, borderRadius: 5 }}>
                                <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: getStatusColor(item.status) }}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Transection;
