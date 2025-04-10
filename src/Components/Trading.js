import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from './Color'
import { IMAGES } from './Images'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Trading = () => {
  return (
    <View style={{width:218,backgroundColor:COLORS.white,padding:10,borderRadius:10,marginTop:10,gap:6}}>
        <TouchableOpacity>
     <Image source={IMAGES.Card} style={{height:106,width:198,borderRadius:10}}></Image>
          </TouchableOpacity>
     <View style={{flexDirection:"row",gap:8,alignItems:"center",marginTop:7}}>
        <Image source={IMAGES.User} style={{height:20,width:20,borderRadius:10}}></Image>
              <Text style={{fontSize:10,fontWeight:"600"}}>By Sanjeev kapoor</Text>
     </View>
          <Text style={{fontSize:14,fontWeight:"600"}}>Learn How to make pizza ?</Text>
          <Text style={{fontSize:8,fontWeight:"400",color:COLORS.gray}}>determining if cheese has gone bad, look for signs such as mold, a sour smell, or a slimy texture.</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View style={{flexDirection:"row",gap:6}}>
             <Text style={{fontSize:14,fontWeight:"400",color:COLORS.gray}}>Price</Text>
             <Text>$99</Text>
            </View>
             <View style={{height:26,borderWidth:0.5,borderColor:COLORS.gray,borderRadius:50,justifyContent:"center"}}>
                <Text style={{color:COLORS.gradient,textAlign:"center",marginHorizontal:10}}>Buy Now</Text>
             </View>
          </View>
    </View>
  )
}
export default Trading