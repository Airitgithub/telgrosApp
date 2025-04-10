import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Headers from '../Components/Headers'
import { COLORS } from '../Components/Color'
import fontFamily from '../Components/fontfamily'
import CustomVectorIcons from '../Components/CustomVectorIcons'
import { IMAGES } from '../Components/Images'

const RaiseTicket = () => {
  const [title, settitle] = useState("")
  const [description, setDiscription] = useState("")
  return (
    
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: COLORS.white }}>
      <Headers showBack={true} text={"Raise Ticket"} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
      <View style={{ marginTop: 20, width: "100%", borderRadius: 10, borderColor: COLORS.border, borderWidth: 1, padding: 15 }}>
        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistSemiBold }}>Create New ticket</Text>
        <View style={{ marginTop: 20 }}>
            <TextInput placeholder='Enter Title' value={title} onChangeText={(text) => settitle(text)} underlineColorAndroid="transparent" style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, color: COLORS.black }}></TextInput>
          <View style={{ width: "100%", borderBottomColor: COLORS.gradient, borderBottomWidth: 0.5 }}></View>
        </View>


        <View style={{ marginTop: 20, height: 135, justifyContent: "space-between" }}>
          {/* Text Input for "Describe your issue" */}
          <TextInput
            
            placeholder="Describe your issue here..."
            value={description}
            onChangeText={(text) => setDiscription(text)} 
            multiline={true} 
            numberOfLines={6} 
            style={{
              fontSize: 16,
              fontFamily: fontFamily.UrbanistRegular,
              color: COLORS.black,
              borderBottomWidth:0,
              textDecorationLine:"none"
            }}
          />

          {/* Border styling */}
          <View
            style={{
              width: "100%",
              borderBottomColor: COLORS.gradient,
              borderBottomWidth: 0.5,
            }}
          />
        </View>

        <TouchableOpacity activeOpacity={0.7} style={{ width: "100%", alignSelf: "center", backgroundColor: COLORS.gradient, height: 55, justifyContent: "center", alignItems: "center", marginTop: 15, borderRadius: 50 }}>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
            <CustomVectorIcons name={"send-outline"} size={24} color={COLORS.white} iconSet={"Ionicons"} />
            <Text style={{ color: COLORS.white, fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold }}>raise ticket</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:20,fontStyle:fontFamily.UrbanistSemiBold,marginTop:20}}>Raised Tickets </Text>
      <View style={{width:"100%",padding:15,borderRadius:10,borderWidth:1,borderColor:COLORS.border,marginTop:15}}>
       <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
         <View style={{backgroundColor:COLORS.golden,borderRadius:20,paddingHorizontal:10,paddingVertical:2,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:12,fontFamily:fontFamily.PoppinsMedium,color:COLORS.white,marginTop:3}}>Pending</Text>
         </View>
          <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistRegular,color:COLORS.gray}}>April 24,  | 06:49pm</Text>
       </View>
        <Text style={{fontSize:18,fontFamily:fontFamily.UrbanistSemiBold,marginTop:5}}>Hi i Need help in Course purches</Text>
        <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistRegular,color:COLORS.gray,marginTop:10,lineHeight:23}}>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </Text>
      </View>

      <View style={{ width: "100%", padding: 15, borderRadius: 10, borderWidth: 1, borderColor: COLORS.border, marginTop: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={{ backgroundColor: COLORS.gray, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontFamily: fontFamily.PoppinsMedium, color: COLORS.white,marginTop:3 }}>Solved</Text>
          </View>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>April 24,  | 06:49pm</Text>
        </View>
        <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, marginTop: 5 }}>Hi i Need help in Course purches</Text>
        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray, marginTop: 10, lineHeight: 23 }}>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </Text>
        <View style={{width:"100%",borderBottomColor:COLORS.border,borderBottomWidth:1,marginTop:10}}></View>
        <View style={{flexDirection:"row",marginTop:20,marginLeft:20,gap:10}}>
          <Image source={IMAGES.Avater}/>
          <View style={{gap:10,width:"100%"}}>
            <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
                <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistSemiBold,color:COLORS.black}}>Team Telgrous</Text>
                <Text style={{fontFamily:fontFamily.UrbanistRegular,fontSize:14,color:COLORS.gray}}>April 24,  | 06:49pm</Text>
            </View>
              <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistRegular,width:"85%",color:COLORS.gray,marginBottom:20}}>We wanted flying cars, instead we got 7 Twitter clones.</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default RaiseTicket




// const inviteViaWhatsApp = () => {
//   const referralLink = "https://www.flaticon.com/free-i..";
//     const whatsappMessage = `Hey! Check out this amazing app! Join now using my invite link: ${referralLink}`;
//     const whatsappURL = `whatsapp://send?phone=&text=${encodeURIComponent(whatsappMessage)}`;
//     Linking.canOpenURL("whatsapp://send")
//     .then(() => {
//         return Linking.openURL(whatsappURL);
//       })
//       .catch((err) => console.error("An error occurred", err));
//   };
