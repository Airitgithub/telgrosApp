import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import Dashboard from '../Screen/Dashboard';
import { COLORS } from '../Components/Color';
import Study from '../Screen/Study';
import Library from '../Screen/Library';
import MessageScreen from '../Screen/MessageScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import Transection from '../Screen/Transection';
import CustomVectorIcons from '../Components/CustomVectorIcons';

const Tab = createBottomTabNavigator();

// Custom button wrapper (Only needed if you want a unique button)
const CustomTabButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    height: 70,
                    position: 'absolute',
                    elevation: 10,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    let iconName = '';
                    let iconSet = '';

                    switch (route.name) {
                        case 'Dashboard':
                            iconName = 'home';
                            iconSet = 'Feather';
                            break;
                        case 'Study':
                            iconName = 'book-open';
                            iconSet = 'Feather';
                            break;
                        case 'Library':
                            iconName = 'text-box-outline';
                            iconSet = 'MaterialCommunityIcons';
                            break;
                        case 'MessageScreen':
                            iconName = 'message-text-outline';
                            iconSet = 'MaterialCommunityIcons';
                            break;
                        case 'ProfileScreen':
                            iconName = 'person-outline';
                            iconSet = 'MaterialIcons';
                            break;
                        case 'Transection':
                            iconName = 'money';
                            iconSet = 'MaterialIcons';
                            break;
                        default:
                            break;
                    }

                    return (
                        <View
                            style={{
                                backgroundColor: focused ? COLORS.gradient : null,
                                height:44,
                                width:44,
                                borderRadius: 14,
                                justifyContent:"center",
                                alignItems:"center",
                                marginTop:30
                                
                            }}
                        >
                            <CustomVectorIcons
                                name={iconName}
                                size={26}
                                iconSet={iconSet}
                                color={focused ? COLORS.white : COLORS.black}
                            />
                        </View>
                    );
                },
                tabBarActiveTintColor: COLORS.black,
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Tab.Screen name="Study" component={Study} options={{ headerShown: false }} />
            <Tab.Screen name="Library" component={Library} options={{ headerShown: false }} />
            <Tab.Screen name="MessageScreen" component={MessageScreen} options={{ headerShown: false }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Transection" component={Transection} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
