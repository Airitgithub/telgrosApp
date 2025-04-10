import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { List } from 'react-native-paper';
import Headers from '../Components/Headers';
import { IMAGES } from '../Components/Images';
import { COLORS } from '../Components/Color';
import fontFamily from '../Components/fontfamily';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import CustumBtn from '../Components/CustumBtn';
const ProfileScreen = ({navigation}) => {
  const [expandedAccount, setExpandedAccount] = useState(false);
  const [expandedSecurity, setExpandedSecurity] = useState(false);
  const [expandedEducation, setExpandedEducation] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, padding: 15,backgroundColor:COLORS.white }}>
      {/* Header */}
      <Headers showBack={true} text="Profile Setting" />
<ScrollView showsVerticalScrollIndicator={false}>
      {/* Profile Section */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Image source={IMAGES.User} style={{ height: 100, width: 100, borderRadius: 50 }} />

        {/* Edit Icon */}
        <TouchableOpacity
        activeOpacity={0.8}
          style={{
            height: 25,
            width: 25,
            borderRadius: 15,
            backgroundColor: "#E1D9D1",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 65,
            right: 145,
            borderWidth:0.2,
            borderColor:COLORS.gradient
          }}
        >
          <CustomVectorIcons name="pencil" size={12} color={COLORS.gradient} iconSet="SimpleLineIcons" />
        </TouchableOpacity>

        <Text style={{ fontSize: 22, fontFamily: fontFamily.UrbanistBold, marginTop: 15 }}>Username</Text>
        <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistRegular, color: COLORS.gray }}>user@gmail.com</Text>
      </View>

      {/* Accordion Section */}
      <View style={{
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        overflow: 'hidden',
        backgroundColor: "transparent"
      }}>
        <List.Section style={{ marginTop: -10, marginBottom: 0, backgroundColor: "transparent" }} theme={{ colors: { background: "transparent" } }}>

          {/* Account Settings */}
          <List.Accordion
            title="Account Settings"
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
              left={props => <List.Icon {...props} icon="account-circle" color={COLORS.black} />}
            expanded={expandedAccount}
            onPress={() => setExpandedAccount(!expandedAccount)}
            style={{borderWidth:0.5,borderColor:COLORS.border,marginTop:10,height:50,paddingVertical:0}}
            right={props => <List.Icon {...props} icon={expandedAccount ? "chevron-down" : "chevron-right"} />}
          >
            <List.Item title="Personal Information" titleStyle={{color:COLORS.black}} onPress={() => navigation.navigate("PersonalInformationScreen")}/>
              <List.Item title="Preferences" titleStyle={{ color: COLORS.black }} onPress={() => navigation.navigate("PreferenceScreen")} />
              <List.Item title="Privacy Settings" titleStyle={{ color: COLORS.black }} onPress={() => navigation.navigate("PrivacySetting")} />
          </List.Accordion>

          {/* Security Settings */}
          <List.Accordion
            title="Security Settings"
              left={props => <List.Icon {...props} icon="lock" color={COLORS.black} />}
            expanded={expandedSecurity}
            onPress={() => setExpandedSecurity(!expandedSecurity)}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            style={{ borderWidth:0.5,borderColor:COLORS.border,height:50,paddingVertical:0}}
            right={props => <List.Icon {...props} icon={expandedSecurity ? "chevron-down" : "chevron-right"} />}
          >
              <List.Item title="Update Password" titleStyle={{ color: COLORS.black }} onPress={() => navigation.navigate("UpdatePassword")} />
          </List.Accordion>

          {/* Analytics */}
          <List.Accordion
              onPress={() => navigation.navigate("ProgressTracking")} 
            title="Analytics"
              left={props => <List.Icon {...props} icon="chart-line" color={COLORS.black} />}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            right={() => null}
            style={{height:50}}
          />

          {/* Educational Information */}
          <List.Accordion
            title="Educational Information"
              left={props => <List.Icon {...props} icon="school" color={COLORS.black} />}
            expanded={expandedEducation}
            onPress={() => setExpandedEducation(!expandedEducation)}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            style={{borderWidth: 0.5, borderColor: COLORS.border,height:50,paddingVertical:0}}
            right={props => <List.Icon {...props} icon={expandedEducation ? "chevron-down" : "chevron-right"} />}
          >
              <List.Item title="Learning History" titleStyle={{ color: COLORS.black }} onPress={() => navigation.navigate("LearningHistory")} />
              <List.Item title="Certificate" titleStyle={{ color: COLORS.black }} onPress={() => navigation.navigate("Certificate")} />
          </List.Accordion>

          {/* About Us */}
          <List.Accordion
              onPress={() => navigation.navigate("AboutUs")}
            title="About Us"
              left={props => <List.Icon {...props} icon="information" color={COLORS.black} />}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            right={() => null}
            style={{height:50}}
          />

          {/* Referral Rewards */}
          <List.Accordion
              onPress={() => navigation.navigate("ReferalReward")}
            title="Referral Rewards"
              left={props => <List.Icon {...props} icon="gift" color={COLORS.black} />}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            right={() => null}
            style={{ height:50}}
          />  

          {/* Help & Support */}
          <List.Accordion
              onPress={() => navigation.navigate("HelpSupport")}
            title="Help & Support"
              left={props => <List.Icon {...props} icon="help-circle" color={COLORS.black} />}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            right={() => null}
            style={{height:50}}
          />

          {/* Logout */}
          <List.Accordion
          
            title="Logout"
            left={props => <List.Icon {...props} icon="logout" color={COLORS.black}/>}
            titleStyle={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, color: COLORS.black }}
            style={{ height:50 }}
            onPress={() => setModalVisible(true)} 
            right={() => null}
          />
            <Modal
              animationType="slide" 
              transparent={true} 
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}   
            >
              <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
}}>
                <View style={{
                  width: "90%",
                  padding: 25,
                  backgroundColor: "white",
                  borderRadius: 10,
                  alignItems: "center",
}}>
                 <View style={{alignItems:"center"}}>
                    <CustomVectorIcons name={"logout"} color={COLORS.gradient} size={42} iconSet={"MaterialIcons"}/>
                    <Text style={{fontSize:16,fontFamily:fontFamily.UrbanistSemiBold,paddingVertical:10}}>Are you sure?</Text>
                    <Text style={{fontSize:13,fontFamily:fontFamily.UrbanistRegular,textAlign:"center",lineHeight:15,color:COLORS.gray}}>Lorem ipsum dolorem non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
                   <TouchableOpacity activeOpacity={0.7} style={{height:50,backgroundColor:COLORS.gradient,borderRadius:50,justifyContent:"center",marginVertical:20,alignItems:"center",paddingHorizontal:100}}>
                    <Text style={{color:COLORS.white,fontSize:15,fontFamily:fontFamily.UrbanistSemiBold}}>Logout</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>setModalVisible(false)}>
                    <Text style={{fontSize:14,fontFamily:fontFamily.UrbanistMedium,color:COLORS.gradient,marginBottom:10}}>cancel</Text>
                   </TouchableOpacity>
                 </View>
                </View>
              </View>
            </Modal>
        </List.Section>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
