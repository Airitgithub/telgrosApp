import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Headers from "../Components/Headers";
import fontFamily from "../Components/fontfamily";
import { COLORS } from "../Components/Color";
import { AnimatedCircularProgress, CircularProgress } from "react-native-circular-progress";

const ProgressTracking = () => {
    const [progress, setProgress] = useState(65);
    const [miniProgress,setMiniProgress]=useState(45)
    const getProgressColor = (fill) => {
        if (fill < 33) return "#FF5F5F"; 
        if (fill < 66) return "#FFA500"; 
        return "#4CAF50"; 
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: COLORS.white }}>
            <Headers showBack={true} text={"Progress Tracking"} />

            {/* Title Section */}
            <View style={{ marginTop: 30}}>
                <Text style={{ fontSize: 25, fontFamily: fontFamily.PoppinsSemiBold }}>
                    Let’s make a
                </Text>
                <Text style={{ fontSize: 25, fontFamily: fontFamily.PoppinsSemiBold }}>
                    habits together 🙌
                </Text>
            </View>

            {/* Circular Progress Bar with 3 Sections */}
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <AnimatedCircularProgress
                    size={200}
                    width={25}
                    fill={progress}
                    prefill={0} // Start from 0
                    tintColor={getProgressColor(progress)}
                    backgroundColor="#E0E0E0"
                    rotation={0}
                    lineCap="round"
                >
                    {(fill) => (
                        <View style={{
                        }}>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontFamily: fontFamily.PoppinsMedium,
                                    color: COLORS.black,
                                    textAlign: "center",
                                }}
                            >
                                {Math.round(fill)}%
                            </Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: fontFamily.PoppinsRegular,
                                    color: COLORS.gray,
                                    marginTop: -10,
                                    textAlign: "center",
                                }}
                            >
                                {fill < 33 ? "To Do" : fill < 66 ? "In Progress" : "Completed"}
                            </Text>
                        </View>
                    )}
                </AnimatedCircularProgress>
            </View>

            {/* Progress Bar Legend (3 Parts) */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: "#FF5F5F" }} />
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular, color: "#002055" }}>To Do</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: "#FFA500" }} />
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular, color: "#002055" }}>In Progress</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: "#4CAF50" }} />
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.PoppinsRegular, color: "#002055" }}>Completed</Text>
                </View>
            </View>
            <Text style={{fontSize:18,fontFamily:fontFamily.PoppinsSemiBold,marginTop:30}}>In Progress</Text>
            <View style={{flexDirection:"row",width:"100%",borderRadius:16,borderWidth:1,borderColor:COLORS.border,padding:10,justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                <View>
                    <Text style={{fontSize:12,fontFamily:fontFamily.PoppinsRegular,color:COLORS.gray}}>Productivity Mobile App</Text>
                    <Text style={{fontSize:14,fontFamily:fontFamily.PoppinsMedium,color:COLORS.black}}>Create Detail Booking</Text>
                    <Text style={{fontSize:12,fontFamily:fontFamily.PoppinsRegular,color:COLORS.gray}}>2 min ago</Text>
                </View>
                <AnimatedCircularProgress
                    size={44}
                    rotation={0}
                    width={5}
                    fill={miniProgress}
                    tintColor={COLORS.gradient}
                    lineCap="round"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#E0E0E0" >
                        {
                            (fill)=>(
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: fontFamily.PoppinsMedium,
                                        color: COLORS.black,
                                        marginTop:5
                                    }}
                                >
                                    {Math.round(fill)}%
                                </Text>
                            )
                        }
                        </AnimatedCircularProgress>
            </View>
        </SafeAreaView>
    );
};

export default ProgressTracking;
