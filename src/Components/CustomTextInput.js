import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from './Color'; // Update based on your file structure
import CustomVectorIcons from './CustomVectorIcons';
import fontFamily from './fontfamily';

const CustomTextInput = ({
    value,
    onChangeText,
    placeholder,
    passIcon,
    editable = true,
    secureTextEntry = false,
    keyboardType = 'default',
    onBlur,
    onFocus,
    onPassToggle,
    name,
    iconSet
}) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: COLORS.white,
            borderWidth: 0.5,
            borderColor: COLORS.border,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginTop: 6,
        }}>
            {/* Left Icon */}
            {name && (
                <CustomVectorIcons name={name} size={24} color={COLORS.black} iconSet={iconSet} />
            )}

            {/* Text Input */}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black}
                editable={editable}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={{
                    flex: 1,
                    marginLeft: 10,
                    color: COLORS.black,
                    fontFamily:fontFamily.UrbanistMedium,
                }}
                onBlur={onBlur}
                onFocus={onFocus}
            />

            {/* Password Visibility Toggle */}
            {passIcon && onPassToggle && (
                <TouchableOpacity onPress={onPassToggle}>
                    <CustomVectorIcons name={passIcon} size={24} color={COLORS.black} iconSet={iconSet} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CustomTextInput;
