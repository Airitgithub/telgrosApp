import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  NavigationContainer} from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Splash from '../Screen/Splash';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Swipers from '../Screen/Swiper';
import ForgetPassword from '../Screen/ForgetPassword';
import Otp from '../Screen/Otp';
import SelectRoll from '../Screen/SelectRoll';
import Dashboard from '../Screen/Dashboard';
import NewPassword from '../Screen/NewPassword';
import SelectHoby from '../Screen/SelectHoby';
import BatchesScreen from '../Screen/BatchesScreen';
import TradingScreen from '../Screen/TradingScreen';
import OneononeScreen from '../Screen/OneononeScreen';
import FeaturedScreen from '../Screen/FeaturedScreen';
import FilterScreen from '../Screen/FilterScreen';
import WishList from '../Screen/WishList';
import Notification from '../Screen/Notification';
import CartScreen from '../Screen/CartScreen';
import Payment from '../Screen/Payment';
import NewCard from '../Screen/AddNewCard';
import BottomTabNavigator from './BottomRoutes';
import Chat from '../Screen/Chat';
import Comment from '../Screen/Comment';
import PersonalInformationScreen from '../Screen/PersonalInformationScreen';
import PreferenceScreen from '../Screen/PreferenceScreen';
import PrivacypolicyScreen from '../Screen/PrivacypolicyScreen';
import TermCondition from '../Screen/TermCondition';
import PrivacySetting from '../Screen/PrivacySetting';
import UpdatePassword from '../Screen/UpdatePassword';
import LearningHistory from '../Screen/LearningHistory';
import Certificate from '../Screen/Certificate';
import CertificateDetail from '../Screen/CertificateDetail';
import ProgressTracking from '../Screen/ProgressTracking';
import AboutUs from '../Screen/AboutUs';
import ReferalReward from '../Screen/ReferalReward';
import HelpSupport from '../Screen/HelpSupport';
import ChatSupport from '../Screen/ChatSupport';
import Faqs from '../Screen/Faqs';
import RaiseTicket from '../Screen/RaiseTicket';
import DemoScreen from '../Screen/DemoScreen';
const Stack = createStackNavigator();
const Routes = () => {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Swipers' component={Swipers} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name='Otp' component={Otp} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='SelectRoll' component={SelectRoll} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='SelectHoby' component={SelectHoby} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='BatchesScreen' component={BatchesScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='TradingScreen' component={TradingScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='OneononeScreen' component={OneononeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='FeaturedScreen' component={FeaturedScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='FilterScreen' component={FilterScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='WishList' component={WishList} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='CartScreen' component={CartScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='NewCard' component={NewCard} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Comment' component={Comment} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='PersonalInformationScreen' component={PersonalInformationScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='PreferenceScreen' component={PreferenceScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='PrivacypolicyScreen' component={PrivacypolicyScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='TermCondition' component={TermCondition} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='PrivacySetting' component={PrivacySetting} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='UpdatePassword' component={UpdatePassword} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='LearningHistory' component={LearningHistory} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Certificate' component={Certificate} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='CertificateDetail' component={CertificateDetail} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='ProgressTracking' component={ProgressTracking} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='AboutUs' component={AboutUs} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='ReferalReward' component={ReferalReward} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='HelpSupport' component={HelpSupport} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='ChatSupport' component={ChatSupport} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Faqs' component={Faqs} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='RaiseTicket' component={RaiseTicket} options={{ headerShown: false }}></Stack.Screen>
        {/* <Stack.Screen name='DemoScreen' component={DemoScreen} options={{headerShown:false}}></Stack.Screen> */}
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
