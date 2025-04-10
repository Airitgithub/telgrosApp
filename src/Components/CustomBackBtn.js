import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from './Images'
import { COLORS } from './Color'
import CustomVectorIcons from './CustomVectorIcons'
import fontFamily from './fontfamily'

const CustomBackBtn = ({ title, desc }) => {

    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <>
            <TouchableOpacity
                onPress={handleBack}
                style={{
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: COLORS.gradient,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <CustomVectorIcons name={"chevron-back-sharp"} size={24} color={COLORS.white} iconSet={"Ionicons"}/>
            </TouchableOpacity>

            <Text
                style={{
                    fontSize: 24,
                    color: COLORS.black,
                    marginTop: 20,
                    fontFamily:fontFamily.UrbanistBold,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontFamily:fontFamily.UrbanistRegular,
                    color: COLORS.gray,
                    marginTop: 12,
                    width:"90%"
                }}
            >{desc}

            </Text>
        </>
    )
}

export default CustomBackBtn

