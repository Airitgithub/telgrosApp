import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES } from './Images'
import fontFamily from './fontfamily'
import { COLORS } from './Color'

const CoursesLI = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold, marginTop: 20 }}>Purchased Courses</Text>
            <View style={{ flexDirection: "column", gap: 12, marginTop: 10, marginBottom: 200 }}>
                {
                    [
                        1, 2, 3, 4
                    ].map((_,index) => (
                        <TouchableOpacity key={index} style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                            <Image source={IMAGES.Education} style={{ height: 80, width: 80, borderRadius: 10 }} resizeMode='stretch'></Image>
                            <View style={{ gap: 5, width: "60%" }}>
                                <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistBold }}>Expand your knowledge with these engaging courses</Text>
                                <Text style={{ fontSize: 8, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>Angela Yhu - Teaching Position</Text>

                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Text style={{ color: COLORS.golden, fontSize: 10, fontFamily: fontFamily.UrbanistBold }}>4.5</Text>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        {
                                            [1, 2, 3, 4].map(() => (
                                                <Image source={IMAGES.Star} style={{ height: 12, width: 12, color: COLORS.golden }}></Image>
                                            ))
                                        }
                                    </View>
                                    <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistRegular }}>(1,454)</Text>
                                </View>
                                <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistBold }}>₹3,899</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}
export default CoursesLI