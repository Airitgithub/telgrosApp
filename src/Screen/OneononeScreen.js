import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import { Trading_Data } from "../Static_Data/index";
import CustomVectorIcons from '../Components/CustomVectorIcons';
import fontFamily from '../Components/fontfamily';
const OneononeScreen = () => {
  return (
    <SafeAreaView style = {{ flex: 1 ,padding:15}
}>
          <Headers text="One on one Session" showBack={true}/>

            <ScrollView
                showsVerticalScrollIndicator={false}
             
            >
                {Trading_Data.map((item, index) => (
                    <View key={index} style={{marginBottom:15,marginTop:10}}>
                       <View style={{width:"100%",borderRadius:10,backgroundColor:COLORS.white ,padding:10}}>
                        <View style={{flexDirection:"row",gap:10,width:"100%"}}>
                          <Image source={IMAGES.Card} style={{width:"35%",borderRadius:10,height:"100%"}}></Image>
                          <View style={{width:"65%"}}>
                            <View style={{flexDirection:"row",alignItems:"center",gap:8}}>
                             <Image source={IMAGES.User} style={{height:20,width:20,borderRadius:10}}></Image>
                             <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistSemiBold}}>{item.userName}</Text>
                            </View>
                        <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistSemiBold,marginTop:6}}>{item.title}</Text>
                                    <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistRegular,width:187,marginTop:8}}>{item.desc}</Text>
                                    <View style={{marginTop:8,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:10}}>
                                       <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
                              <CustomVectorIcons name={"clock-time-five-outline"} size={22} color={COLORS.gray} iconSet={"MaterialCommunityIcons"}/>
                                            <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistMedium}}>5h 15m</Text>
                                       </View>
                                       <TouchableOpacity style={{backgroundColor:COLORS.gradient,paddingHorizontal:15,borderRadius:50,paddingVertical:5}}>
                                         <Text style={{fontSize:14,fontWeight:"600",color:COLORS.white,textAlign:"center"}}>Join</Text>
                                       </TouchableOpacity>
                                    </View>
                          </View>
                        </View>
                        </View> 
                    </View>

                ))}
            </ScrollView>
        </SafeAreaView >
  )
}

export default OneononeScreen