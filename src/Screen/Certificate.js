import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import fontFamily from '../Components/fontfamily';
import { IMAGES } from '../Components/Images';

const CertificateScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: COLORS.white }}>
            <Headers showBack={true} text={"Certificate"} />

            {/* Grid Layout */}
            <View style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <View key={index} style={{ width: "50%", marginBottom: 15, alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("CertificateDetail")} style={{
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: COLORS.bgCard,
                            padding: 10,
                            backgroundColor: COLORS.white,
                            elevation: 3,
                        }}>
                            {/* Certificate Image */}
                            <Image
                                source={IMAGES.Certificate}
                                style={{ width: "100%", aspectRatio: 1.6, resizeMode: "contain",elevation:5 }}
                            />

                            {/* Certificate Title */}
                            <Text style={{
                                fontSize: 12,
                                fontFamily: fontFamily.UrbanistMedium,
                                marginTop: 10,
                                textAlign: "center"
                            }}>
                                Certificate Title put here
                            </Text>

                            {/* Issue Date */}
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.UrbanistRegular,
                                color: COLORS.gray,
                                marginTop: 5,
                                textAlign: "center"
                            }}>
                                Issue Date: 17 Oct, 2024
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default CertificateScreen;
