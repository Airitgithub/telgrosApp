import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Components/Color';
import Headers from '../Components/Headers';
import { Batches_Data } from '../Static_Data/index';
import { IMAGES } from '../Components/Images';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const BatchesScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            {/* Header Component */}
            <Headers text={'All Batches'} showBack={true}/>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
                {Batches_Data.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            width: '100%',
                            backgroundColor: COLORS.bgCard,
                            borderRadius: 10,
                            padding: 20,
                            marginBottom: 15,
                        }}
                    >
                        {/* User Info */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,justifyContent:'space-between'}}>    
                           <View  style={{flexDirection:"row",alignItems:"center"}} >
                            <Image source={IMAGES.User} style={{ height: 60, width: 60, borderRadius: 30 }} />
                            <View style={{ marginLeft: 10 ,gap:5}}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.userName}</Text>
                                <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                                    <View style={{backgroundColor:COLORS.golden,paddingHorizontal:10,borderRadius:16,paddingVertical:4}}>
                                        <Text style={{color:COLORS.white,fontWeight:"500",fontSize:12}}>Coking</Text>
                                    </View>
                                <Text style={{ fontSize: 12, color: COLORS.textMuted }}>{item.time}</Text>
                                </View>
                            </View>

                           </View>
                            <TouchableOpacity style={{height:36,width:36,borderRadius:18,backgroundColor:COLORS.white,justifyContent:"center",alignItems:"center"}}>
                                <CustomVectorIcons name="pencil-square-o" size={22} iconSet="FontAwesome" color={COLORS.black} />

                            </TouchableOpacity>
                        </View>

                        {/* Batch Info */}
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <View style={{flexDirection:"row",marginTop:10,alignItems:"center"}}>
                            <View style={{flexDirection:"row"}}>
                             <Image style={{height:24,width:24}} source={IMAGES.UserPhoto1}></Image>
                                <Image style={{ height: 24, width: 24 }} source={IMAGES.UserPhoto2}></Image>
                                <Image style={{ height: 24, width: 24 }} source={IMAGES.UserPhoto2}></Image>
                            </View>
                                <Text style={{fontSize:10,fontWeight:"500",color:COLORS.gray,marginTop:5}}>23 others in session</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                                    <CustomVectorIcons name="clock-time-five-outline" size={20} iconSet="MaterialCommunityIcons" color={COLORS.gray} />
                                    <Text style={{fontSize:10,fontWeight:"500",color:COLORS.gray}}>10:30 AM, Today</Text>
                            </View>
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray ,marginTop:5}}>{item.desc}</Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
                            <Text style={{fontSize:14,fontWeight:"600",color:COLORS.black,marginTop:10}}>Price {item.price}</Text>
                            <View style={{backgroundColor:COLORS.gradient,padding:5,borderRadius:20,paddingHorizontal:10}}>
                               <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:5}}>
                                        <CustomVectorIcons name="videocam-outline" size={20} iconSet="Ionicons" color={COLORS.white} />
                                <Text style={{color:COLORS.white,fontSize:14,fontWeight:"600"}}>Join Now</Text>
                               </View>
                            </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default BatchesScreen;
