import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES } from './Images'
import { COLORS } from './Color'
import fontFamily from './fontfamily'

const Courses = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{width:200,marginTop:15,padding:5}}>
      <Image source={IMAGES.Education} style={{height:80,width:"100%",borderRadius:10}}></Image>
          <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistSemiBold,marginTop:3}}>Expand your knowledge with these engaging courses</Text>
          <Text style={{fontSize:8,fontFamily:fontFamily.UrbanistRegular,color:COLORS.gray,marginTop:5}}>Angela Yhu - Teaching Position</Text>
          <View style={{flexDirection:"row",marginTop:5,gap:5,alignItems:"center"}}>
          <Text style={{ color: COLORS.golden, fontSize: 10, fontFamily:fontFamily.UrbanistSemiBold }}>4.5</Text>
          <View style={{flexDirection:"row",gap:5}}> 
            {
                [1,2,3,4].map((e)=>(
                    <View key={e}>
                    <Image source={IMAGES.Star}  style={{height:12,width:12}}></Image>
                    </View>
                ))
            }
          </View>
        <Text style={{fontSize:8,fontFamily:fontFamily.UrbanistMedium}}>(1,454)</Text>
      </View>
      <Text style={{fontSize:10,fontFamily:fontFamily.UrbanistSemiBold,marginTop:5}}>₹3,899</Text>
    </TouchableOpacity>
  )
}

export default Courses