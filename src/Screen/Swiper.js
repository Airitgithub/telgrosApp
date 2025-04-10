import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS } from '../Components/Color';
import { IMAGES } from '../Components/Images';
import fontFamily from '../Components/fontfamily';

const Swipers = ({ navigation }) => {
    
    const data = [
        {
            id: 1,
            title: 'Teach What you know, let others thrive',
            image: IMAGES.Seminar1,
            desc: 'Empower others through knowledge sharing for collective success and growth.',
        },
        {
            id: 2,
            title: 'Learn your way, for the everyday',
            image: IMAGES.Seminar2,
            desc: 'Tailored education that fits your lifestyle and enhances daily learning.',
        },
        {
            id: 3,
            title: 'Grow skills that stick, change the routine',
            image: IMAGES.Seminar3,
            desc: 'Transform your learning journey with lasting skills for success.',
        },
        {
            id: 4,
            title: 'Solve with skill, live with ease',
            image: IMAGES.Seminar4,
            desc: 'Master your challenges, embrace simplicity, and enjoy a fulfilling life.',
        },
    ];

    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            swiperRef.current.scrollBy(1);
        }
    };

    const commonButtonStyle = {
        height: 50,
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <CustumStatusBar bgColor={COLORS.white}></CustumStatusBar> */}
            {/* Header */}
            <View style={{ marginTop: 130, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <View style={{ height: 45, width: 45, backgroundColor: COLORS.gradient, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={IMAGES.Telgros2} style={{ height: 10, width: 10, tintColor: COLORS.white }} />
                    <Image source={IMAGES.Telgros1} style={{ height: 20, width: 20, tintColor: COLORS.white }} />
                </View>
                <Text style={{ color: COLORS.black, fontSize: 30, fontFamily:fontFamily.UrbanistBold }}>Telgros</Text>
            </View>

            {/* Swiper */}
            <View style={{ flex: 1, marginTop: 20, marginBottom: 200 }}>
                <Swiper
                    ref={swiperRef}
                    loop={false}
                    onIndexChanged={(index) => setCurrentIndex(index)}
                    activeDotColor={COLORS.gradient}
                    dotStyle={{ width: 8, height: 8 }}
                    activeDotStyle={{ width: 20, height: 10, borderRadius: 10 }}
                >
                    {data.map((item) => (
                        <View key={item.id} style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                            <Image source={item.image} style={{ height: 200, width: 200, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 24, fontFamily:fontFamily.UrbanistBold, color: COLORS.black, marginVertical: 10, textAlign: 'center' }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontSize: 16, color: COLORS.gray, textAlign: 'center',fontFamily:fontFamily.UrbanistRegular }}>{item.desc}</Text>
                        </View>
                    ))}
                </Swiper>
            </View>

            {/* Buttons */}
            {currentIndex === data.length - 1 ? (
                <View style={{ position: 'absolute', bottom: 20, gap: 15, width: '100%', alignSelf: 'center' }}>
                    {/* Login */}
                    <TouchableOpacity
                        onPress={() => 
                            
                            navigation.navigate('Login')

                        }
                        style={[commonButtonStyle, { backgroundColor: COLORS.gradient }]}
                    >
                        <Text style={{ color: COLORS.white, fontSize: 18, fontFamily:fontFamily.UrbanistSemiBold }}>Login</Text>
                    </TouchableOpacity>
                    {/* Signup */}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("SignUp")
                            }
                        style={[commonButtonStyle, { borderWidth: 1, borderColor: COLORS.border }]}
                    >
                        <Text style={{ color: COLORS.gradient, fontSize: 18, fontFamily:fontFamily.UrbanistSemiBold }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        ...commonButtonStyle,
                        backgroundColor: COLORS.gradient,
                        marginHorizontal: 20,
                        position: 'absolute',
                        bottom: 20,
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 20, color: COLORS.white, fontFamily:fontFamily.UrbanistMedium }}>Next</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

export default Swipers;
