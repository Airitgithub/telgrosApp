import { View, Text, Image } from 'react-native'
import React from 'react'
import fontFamily from './fontfamily'
import { COLORS } from './Color'
import { IMAGES } from './Images'
import Ionicons from 'react-native-vector-icons/Ionicons';
const SessionsContent = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>Your Upcoming Sessions</Text>

            {
                [1, 2, 3, 4].map((item, index) => (
                    <View key={index} style={{ width: "100%", backgroundColor: COLORS.bgCard, padding: 15, borderRadius: 10, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ gap: 8 }}>
                                <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold }}>Session time updated</Text>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                        <Ionicons name="time-outline" size={18} color={COLORS.gray} />
                                        <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>10:30 Am</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                        <Ionicons name="calendar-clear-outline" size={18} color={COLORS.gray} />
                                        <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>12-Aug-2024</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: COLORS.gradient, justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="videocam-outline" size={18} color={COLORS.white} />
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default SessionsContent