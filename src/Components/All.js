import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import fontFamily from './fontfamily'
import { COLORS } from './Color'
import { IMAGES } from './Images'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ProgressBar,MD3Colors } from 'react-native-paper'

const All = () => {
    const [progress, setProgress] = useState(0.7);
    const navigation=useNavigation()
  return (
    <View>
        
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,alignItems:"center"}}>
              <Text style={{fontFamily:fontFamily.UrbanistSemiBold, fontSize:20}}>Purchased Courses</Text>
                  <TouchableOpacity >
                  <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistMedium,color:COLORS.gray}}>View all</Text>
              </TouchableOpacity>
      </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", marginTop: 10, gap: 5 }}>
                  {
                      [1, 2, 3, 4].map((item, index) => (
                          <View key={index} style={{ width: 200, marginRight: 10 }}>
                              <Image source={IMAGES.Education} style={{height:115, width:"100%", borderRadius: 10 }} />
                              <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistBold, marginTop: 5 }}>
                                  Expand your knowledge with these engaging courses
                              </Text>
                              <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistRegular, marginTop: 5 }}>
                                  Angela Yhu - Teaching Position
                              </Text>
                          </View>
                      ))
                  }
              </View>
          </ScrollView>
          {/* expert */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 35, alignItems: "center" }}>
              <Text style={{ fontFamily: fontFamily.UrbanistSemiBold, fontSize: 20 }}>Subscribed Expert</Text>
              <TouchableOpacity >
                  <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gray }}>View all</Text>
              </TouchableOpacity>
          </View>

<View style={{flexDirection:"column",gap:10,marginTop:20}}>

        {
            [1,2,3].map((index)=>(
                <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginBottom:10}}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Image source={IMAGES.User} style={{ height: 50, width: 50 ,borderRadius:25 }}></Image>
                        <View style={{ gap: 7 }}>
                            <Text style={{ fontSize: 12, fontFamily: fontFamily.UrbanistBold,color:COLORS.black }}>By Sanjeev kapoor</Text>
                            <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>
                                Chef
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ borderRadius: 20, paddingHorizontal: 20, paddingVertical: 7, borderWidth: 1, borderColor: COLORS.gradient }}>
                        <Text style={{ fontSize: 12, color: COLORS.gradient, fontFamily: fontFamily.UrbanistMedium }}>Subscribed</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
          </View>
          {/* Activity */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 35, alignItems: "center" }}>
              <Text style={{ fontFamily: fontFamily.UrbanistSemiBold, fontSize: 20 }}>Activity</Text>
              <TouchableOpacity >
                  <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistMedium, color: COLORS.gradient }}>View all</Text>
              </TouchableOpacity>
          </View>  
          <View style={{ flexDirection: "column", gap: 20, marginTop: 20, marginBottom: 100 }}>
              {[
                  { img: IMAGES.Activity1, progress: 0.5 },
                  { img: IMAGES.Activity2, progress: 1 },
                  { img: IMAGES.Activity3, progress: 0.7 },
                  { img: IMAGES.Activity4, progress: 1 }
              ].map(({ img, progress }, index) => (
                  <View key={index} style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                      <Image source={img} style={{ height: 60, width: 60, borderRadius: 10 }} />
                      <View style={{ gap: 5 }}>
                          <Text style={{ fontSize: 10, fontFamily: fontFamily.UrbanistBold }}>
                              Expand your knowledge with these engaging courses
                          </Text>
                          <Text style={{ fontSize: 8, color: COLORS.gray, fontFamily: fontFamily.UrbanistRegular }}>
                              Angela Yhu - Teaching Position
                          </Text>

                          {/* Show Progress Bar if progress < 1, otherwise show "Complete" */}
                          {progress < 1 ? (
                              <>
                                  <ProgressBar progress={progress} color={MD3Colors.primary60} />
                                  <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistRegular }}>
                                      {Math.round(progress * 100)}% Completed
                                  </Text>
                              </>
                          ) : (
                            <View style={{backgroundColor:COLORS.gradient,justifyContent:"center",alignItems:"center",paddingVertical:3,width:"28%",borderRadius:5}}>
                              <Text style={{ fontSize: 8, fontFamily: fontFamily.UrbanistMedium, color: COLORS.white,alignItems:"center" }}>
                                  COMPLETED
                              </Text>
                                  </View>
                          )}
                      </View>
                  </View>
              ))}
          </View>

          
    </View>
  )
}

export default All