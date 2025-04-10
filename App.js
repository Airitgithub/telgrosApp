import { SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import Routes from './src/Routes/Routes'
import { COLORS } from './src/Components/Color'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Routes/>
    </SafeAreaView>
  )
}

export default App






