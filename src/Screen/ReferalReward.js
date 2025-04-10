import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity ,Share,Linking} from 'react-native';
import Headers from '../Components/Headers';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import { COLORS } from '../Components/Color';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import Toast, { BaseToast } from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';

const ReferalReward = () => {
  const referralLink = "https://www.flaticon.com/free-i..";

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    Toast.show({
      type: "success",
      text1: "Link Copied",
      visibilityTime: 4000,
      position: "top"
    });
  };

  // Function to share via system's default share options
  const shareInviteLink = async () => {
    try {
      await Share.share({
        message: `Hey! Join me on this amazing app! Use my invite link: ${referralLink}`,
      });
    } catch (error) {
      console.error("Error sharing link:", error);
    }
  };

  // Function to open WhatsApp with pre-filled message
  const inviteViaWhatsApp = () => {
  // const referralLink = "https://www.flaticon.com/free-i..";
    const whatsappMessage = `Hey! Check out this amazing app! Join now using my invite link: ${referralLink}`;
    const whatsappURL = `whatsapp://send?phone=&text=${encodeURIComponent(whatsappMessage)}`;
    Linking.canOpenURL("whatsapp://send")
    .then(() => {
        return Linking.openURL(whatsappURL);
      })
      .catch((err) => console.error("An error occurred", err));
  };



  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
        <Headers showBack={true} text={"Referral & Reward"} />

        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Image
            source={IMAGES.Reward}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />

          <Text style={{
            fontSize: 22,
            fontFamily: fontFamily.UrbanistSemiBold,
            marginTop: 30,
            textAlign: "center"
          }}>
            Refer your friend to Telgros
          </Text>

          <Text style={{
            fontSize: 16,
            fontFamily: fontFamily.UrbanistRegular,
            width: "80%",
            textAlign: "center",
            lineHeight: 20,
            marginTop: 10,
            color: COLORS.black
          }}>
            Invite your friend to Telgros, and share the joy of learning.
          </Text>

          {/* Referral Link with Copy Button */}
          <View style={{
            width: "100%",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.border,
            marginTop: 30,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Text style={{
              fontSize: 16,
              fontFamily: fontFamily.UrbanistSemiBold,
              color: COLORS.black,
              flex: 1,
              marginRight: 10
            }}>
              {referralLink}
            </Text>

            <TouchableOpacity onPress={copyToClipboard}>
              <CustomVectorIcons
                name={"copy-outline"}
                color={COLORS.gradient}
                size={24}
                iconSet={"Ionicons"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Toast Message */}
        <Toast config={toastConfig} />

      </SafeAreaView>
      <View style={{
        width: "100%",
        height: 150,
        backgroundColor: COLORS.white,
        elevation: 5,
        position: "absolute",
        bottom: 0
      }}>

        {/* Share Invite Link */}
        <TouchableOpacity
          onPress={shareInviteLink}
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CustomVectorIcons name={"share-social-outline"} size={24} color="#715EFE" iconSet={"Ionicons"} />
          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, color: "#715EFE" }}>
            Share Invite Link
          </Text>
        </TouchableOpacity>

        {/* Invite Via WhatsApp */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={inviteViaWhatsApp}
          style={{
            backgroundColor: COLORS.gradient,
            borderRadius: 50,
            width: "80%",
            height: 50,
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <CustomVectorIcons name={"whatsapp"} size={24} color={COLORS.white} iconSet={"FontAwesome"} />
            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistSemiBold, color: COLORS.white }}>
              Invite Via WhatsApp
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};


/* Custom Toast Style */
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: "#075E54",
        height: 45,
        width: "30%",
        borderRadius: 50,
        borderLeftWidth: 0,
        elevation: 0,
        position: "absolute",
        top: 330,
        right: 15
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        color: "#fff",
        textAlign: "center"
      }}
    />
  ),
};
export default ReferalReward;
