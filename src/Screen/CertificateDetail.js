import { View, Text, SafeAreaView, Alert, Image, TouchableOpacity, Share } from 'react-native';
import React from 'react';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const CertificateDetail = () => {
    
    const handleShare = async () => {
        try {
            const shareOptions = {
                message: 'Check out my certificate!', 
                url: 'https://example.com/certificate.pdf', 
                title: 'Certificate Share',
            };

            const result = await Share.share(shareOptions);

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type: ', result.activityType);
                } else {
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to share certificate: ' + error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers
                showBack={true}
                text={"Back"}
                showIcon={true}
                iconBackground={true}
                name={"share-social-outline"}
                color={COLORS.black}
                size={24}
                onPress={handleShare} 
            />
            <View style={{
                width: "100%",
                borderRadius: 10,
                paddingVertical:13,
                paddingHorizontal:10,
                backgroundColor: COLORS.white,
                borderWidth: 1,
                borderColor: COLORS.bgCard,
                marginTop: 20,
                alignItems: "center"
            }}>
                <Image
                    source={IMAGES.CertificateBig}
                    style={{ width: "100%" ,height:215}}
                    resizeMode="contain"
                />
                <Text style={{
                    fontSize: 14,
                    fontFamily: fontFamily.UrbanistMedium,
                    color: COLORS.black,
                    textAlign: "center",
                    marginTop: 10
                }}>
                    Certificate Title put here
                </Text>
                <Text style={{
                    fontSize: 10,
                    fontFamily: fontFamily.UrbanistRegular,
                    color: COLORS.gray,
                    textAlign: "center",
                    marginTop: 5,
                    lineHeight: 12,
                    width: "80%"
                }}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                </Text>
                <Text style={{
                    fontSize: 10,
                    fontFamily: fontFamily.UrbanistRegular,
                    color: COLORS.gray,
                    marginTop: 5
                }}>
                    Issue Date : 17 Oct, 2024
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    width: "100%",
                    backgroundColor: COLORS.gradient,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50,
                    paddingVertical: 20
                }}
            >
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <CustomVectorIcons
                        name={"download"}
                        iconSet={"Feather"}
                        color={COLORS.white}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: fontFamily.UrbanistSemiBold,
                        color: COLORS.white
                    }}>
                        Download
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CertificateDetail;