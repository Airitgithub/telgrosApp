import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import fontFamily from '../Components/fontfamily'
import { COLORS } from '../Components/Color'
import Headers from '../Components/Headers'

const TermCondition = () => {
  return (
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
          <Headers showBack={true} text={"Terms & Conditions"} />
          <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistBold, marginTop: 20, color: COLORS.black }}>Data Collection</Text>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, marginTop: 10, lineHeight: 22 }}>Telgros collects user information to enhance your experience and improve our services. Information we collect includes:</Text>
          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, marginTop: 10 }}>
              Personal Information:{' '}
              <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, lineHeight: 22 }}>
                  Your name, email, location, age, and any other details provided during account creation.
              </Text>
          </Text>

          <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold, marginTop: 10 }}>
              Usage Data:{' '}
              <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, lineHeight: 22 }}>
                  Engagement metrics, preferences, and browsing activities on Telgros.
              </Text>
          </Text>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, lineHeight: 22, marginTop: 10 }}>EngageX collects user information to enhance your experience and improve our services. Information we collect includes:</Text>
          <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistRegular, lineHeight: 22, marginTop: 10 }}>EngageX collects user information to enhance your experience and improve our services. Information we collect includes:</Text>

      </SafeAreaView>
  )
}

export default TermCondition