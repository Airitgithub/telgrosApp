import { View, Text, Image, TouchableOpacity ,ScrollView} from 'react-native';
import React from 'react';
import { IMAGES } from './Images';
import { COLORS } from './Color';
import { Batches_Data } from '../Static_Data/index';
import fontFamily from './fontfamily';
import CustomVectorIcons from './CustomVectorIcons';

const Batches = () => {
  const userImages = [
    {
      id: 1,
      image: IMAGES.UserPhoto1,
    },
    {
      id: 2,
      image: IMAGES.UserPhoto2,
    },
  ];

  return (
    <ScrollView
    horizontal
    style={{marginTop:20}}
    showsHorizontalScrollIndicator={false}
    >
      {Batches_Data.map((batch) => (
        <View
          key={batch.id}
          style={{
            width: 224,
            borderRadius: 10,
            backgroundColor: '#715EFE0D',
            padding: 10,
            marginBottom: 20,
            marginRight:15
          }}
        >
          {/* User Info Section */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Image
              source={IMAGES.User}
              style={{ height: 40, width: 40, borderRadius: 20 }}
            />
            <View>
              <Text style={{ fontSize: 12, fontFamily:fontFamily.UrbanistBold }}>{batch.userName}</Text>
              <Text style={{ fontSize: 10, fontFamily:fontFamily.UrbanistRegular, color: COLORS.gray }}>{batch.time}</Text>
            </View>
          </View>

          {/* Card Title */}
          <Text
            style={{
              fontSize: 16,
              fontFamily:fontFamily.UrbanistSemiBold,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {batch.title}
          </Text>

          {/* User Photos */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              {userImages.map((item) => (
                <Image
                  key={item.id}
                  source={item.image}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                  }}
                  resizeMode="cover"
                />
              ))}
            </View>
            {/* Touchable Text */}
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.gray,
                  fontFamily:fontFamily.UrbanistMedium,
                  marginLeft: 8,
                }}
              >
                23 others in session
              </Text>
            </TouchableOpacity>
          </View>

          {/* Session Time */}
          <View style={{ flexDirection: 'row', marginTop: 10, gap: 5, alignItems: 'center' }}>
            <CustomVectorIcons name={"clock-time-five-outline"} size={22} color={COLORS.gray} iconSet={"MaterialCommunityIcons"} />
            <Text style={{ color: COLORS.gray, fontSize: 12, fontFamily:fontFamily.UrbanistMedium }}>
              {batch.sessionTime}
            </Text>
          </View>

          {/* Description */}
          <Text
            style={{
              fontSize: 12,
              fontFamily:fontFamily.UrbanistRegular,
              color: COLORS.gray,
              marginTop: 9,
              textAlign: 'left',
            }}
          >
            {batch.desc}
          </Text>

          {/* Price and Enroll Button */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistSemiBold, color: COLORS.gray }}>Price:</Text>
              <Text style={{ fontSize: 14, fontFamily:fontFamily.UrbanistBold, color: COLORS.black }}>
                {batch.price}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal:20,
                backgroundColor: COLORS.gradient,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 14,
                  fontFamily:fontFamily.UrbanistSemiBold,
                  textAlign: 'center',
                }}
              >
                Enroll Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Batches;
