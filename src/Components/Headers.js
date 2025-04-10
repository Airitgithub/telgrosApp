import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { IMAGES } from './Images'
import { COLORS } from './Color'
import { useNavigation } from '@react-navigation/native'
import fontFamily from './fontfamily'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomVectorIcons from './CustomVectorIcons'
const Headers = ({ text, showIcon, name, color, size, iconBackground = true, showBack, onPress }) => {
    const navigation = useNavigation()
            const handleBack=()=>{
                navigation.goBack()
            }
  return (
      <View style={{ flexDirection: "row", gap: 12, alignItems: "center", marginTop: 20 ,justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
        {
            showBack && (
                      <TouchableOpacity
                          onPress={handleBack}
                          style={{
                              height: 36,
                              width: 36,
                              borderRadius: 18,
                              backgroundColor: COLORS.white,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderColor: COLORS.border,
                              borderWidth: 0.5
                          }}>

                          <CustomVectorIcons name="chevron-back-sharp" color={COLORS.black} size={24} iconSet="Ionicons" />

                      </TouchableOpacity>
            )
        }
          <Text style={{ fontSize: 20, fontFamily:fontFamily.UrbanistSemiBold }}>{text}</Text>
          </View>
          {showIcon && (
              iconBackground ? (
                  <TouchableOpacity
                  onPress={onPress}
                      style={{
                          height: 36,
                          width: 36,    
                          borderRadius: 18,
                          borderWidth: 0.5,
                          borderColor: COLORS.border,
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}
                  >
                      <Icon name={name} size={size} color={color} />
                  </TouchableOpacity>
              ) : (
                  <Icon name={name} size={size} color={color} />
              )
          )}
      </View>
  )
}

export default Headers