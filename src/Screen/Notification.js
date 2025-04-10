
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Alert,
} from 'react-native';
import Headers from '../Components/Headers';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';
import Loader from '../Components/Loader';

const Notification = () => {    
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);
    const handleAlert = () => {
        Alert.alert('Are you sure you want to delete Notification');
    };
    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Headers
                text={'Notifications'}
                showIcon={true}
                name={'notifications-outline'}
                size={24}
                color={COLORS.black}
                iconBackground={true}
                showBack={true}
            />
            <View style={{ marginTop: 20 }}>
                {[1, 2, 3, 4, 5, 6, 7].map((_,index) => (
                    <TouchableComponent
                        key={index}
                        activeOpacity={0.8}
                        onLongPress={handleAlert}
                        background={
                            Platform.OS === 'android'
                                ? TouchableNativeFeedback.Ripple(COLORS.gradient, false)
                                : null
                        }
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.white,
                                width: '100%',
                                height: 60,
                                borderRadius: 8,
                            }}
                        >
                            <View style={{ width: '20%', alignItems: 'center' }}>
                                <Image source={IMAGES.User} style={{ height: 50, width: 50,borderRadius:25 }} />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text
                                    style={{
                                        fontSize: 8,
                                        fontFamily: fontFamily.UrbanistMedium,
                                        color: COLORS.gray,
                                    }}
                                >
                                    June 31, 2023
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={{
                                            fontSize: 8,
                                            fontFamily: fontFamily.UrbanistSemiBold,
                                        }}
                                    >
                                        Great news! A new course has been added by{' '}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text
                                            style={{
                                                fontSize: 8,
                                                fontFamily: fontFamily.UrbanistSemiBold,
                                                color: COLORS.gradient,
                                            }}
                                        >
                                            @Prashant
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: fontFamily.UrbanistRegular,
                                    }}
                                >
                                    Digital Marketing Strategies
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 8,
                                        color: COLORS.gray,
                                        fontFamily: fontFamily.UrbanistBlackItalic,
                                    }}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    This comprehensive course dives into the world of digital
                                    marketing strategies, covering topics such as search engine
                                    optimization (SEO), social media marketing, content marketing,
                                    and more. Learn how to create effective marketing campaigns,
                                    reach your target audience, and grow your online presence.
                                </Text>
                            </View>
                        </View>
                    </TouchableComponent>
                ))}
            </View>

            <Loader visible={loader} />
        </SafeAreaView>
    );
};

export default Notification;