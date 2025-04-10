import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Headers from '../Components/Headers'
import fontFamily from '../Components/fontfamily'
import { IMAGES } from '../Components/Images'
import { COLORS } from '../Components/Color'

const LearningHistory = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers showBack={true} text={"Learning history"} />
            <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 20 }}>Learning History</Text>
           {
            [1,2,3,4].map((_,index)=>(
                <View key={index} style={{ flexDirection: "row", gap: 10, marginTop: 15, alignItems: "center",marginBottom:5 }}>
                    <Image source={IMAGES.Learn} height={60} width={60} style={{ borderRadius: 10 }}></Image>
                    <View style={{ justifyContent: "space-between", gap: 5 }}>
                        <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistSemiBold }}>Course Buy For Python Basic</Text>
                        <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>Angela Yhu - Teaching Position</Text>
                        <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistSemiBold, color: COLORS.gray }}>Price: $29,  Day &Time: Mon, 4 Aug 2024</Text>
                    </View>
                </View>
            ))
           }

        </SafeAreaView>
    )
}

export default LearningHistory