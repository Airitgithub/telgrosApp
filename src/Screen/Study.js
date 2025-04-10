import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Components/Color'
import fontFamily from '../Components/fontfamily'
import SessionsContent from '../Components/SessionsContent'
import BatchesContent from '../Components/BatchesContent'

const Study = () => {
  const [selectedTab, setSelectedTab] = useState('sessions');

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View style={{
        width: "100%",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        height: 50,
        flexDirection: "row",
        padding: 5,
        marginTop: 20,
        gap: 5,
        justifyContent: "center"
      }}>
        <TouchableOpacity
          onPress={() => setSelectedTab('sessions')}
          style={{
            backgroundColor: selectedTab === 'sessions' ? COLORS.bgCard : null,
            width: "48%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }}>
          <Text style={{
            color: selectedTab === 'sessions' ? COLORS.gradient  : COLORS.black,
            fontSize: 16,
            fontFamily: selectedTab === "sessions" ?fontFamily.UrbanistSemiBold:fontFamily.UrbanistRegular
          }}>
            Sessions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab('batches')}
          style={{
            backgroundColor: selectedTab === 'batches' ? COLORS.bgCard : null,
            width: "48%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }}>
          <Text style={{
            color: selectedTab === 'batches' ? COLORS.gradient : COLORS.black,
            fontSize: 16,
            fontFamily: selectedTab === "batches" ? fontFamily.UrbanistSemiBold : fontFamily.UrbanistRegular
          }}>
            Batches
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'sessions' ? <SessionsContent /> : <BatchesContent />}
    </SafeAreaView>
  )
}

export default Study


