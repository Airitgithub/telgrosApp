import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Components/Color'
import CustomVectorIcons from '../Components/CustomVectorIcons'
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput } from 'react-native-gesture-handler'
import { IMAGES } from '../Components/Images'
import fontFamily from '../Components/fontfamily'

const DemoScreen = () => {

    const data = [
        { label: 'New York', value: 'ny' },
        { label: 'London', value: 'ldn' },
        { label: 'Tokyo', value: 'tky' },
        { label: 'Paris', value: 'prs' },
    ]

    const [value, setValue] = useState(null)
    const [isFocus, setIsFocus] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <View style={{
                backgroundColor: 'red',
                width: "100%",
                height: 90,
                paddingHorizontal: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: COLORS.white
                    }}>
                        neargud
                    </Text>
                    <View style={{
                        height: 30,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        width: "40%",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 5
                    }}>
                        <CustomVectorIcons
                            name={"map-marker-alt"}
                            size={22}
                            color={COLORS.black}
                            iconSet='Fontisto'
                        />
                        <Dropdown
                            style={{
                                flex: 1,
                                height: 30,
                                paddingHorizontal: 5,

                            }}
                            placeholderStyle={{
                                fontSize: 14,
                                color: COLORS.black
                            }}
                            selectedTextStyle={{
                                fontSize: 14,
                                color: COLORS.black
                            }}
                            data={data}
                            maxHeight={200}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Cities' : '...'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value)
                                setIsFocus(false)
                            }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", backgroundColor: COLORS.white, borderRadius: 10, width: "80%", alignItems: "center", height: 40 }}>
                        <View style={{ width: "10%", alignItems: "center" }}>
                            <CustomVectorIcons name={"search"} size={24} color={COLORS.black} iconSet='EvilIcons' />
                        </View>
                        <TextInput placeholder='Search Here...'></TextInput>
                    </View>
                    <TouchableOpacity>
                        <CustomVectorIcons name={"heart"} size={24} color={COLORS.white} iconSet='FontAwesome' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CustomVectorIcons name={"notifications"} size={24} color={COLORS.white} iconSet='Ionicons' />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 15 }}>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.black }}>Top In MyShop</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <View key={index} style={{ marginTop: 10, marginRight: 10, width: 300 }}>
                                    <Image
                                        source={IMAGES.Purchased}
                                        style={{ height: 180, width: "100%", borderRadius: 10 }}
                                        resizeMode="stretch"
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.black, marginBottom: 10 }}>Top Categories In MyShop</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    alignItems: "center",
                                    width: '20%',
                                    marginBottom: 10
                                }}
                            >
                                <Image
                                    source={IMAGES.MiniCaro}
                                    style={{ height: 50, width: 55, borderRadius: 5 }}
                                />
                                <Text style={{
                                    fontFamily: 'Urbanist-Regular',
                                    color: COLORS.black,
                                    textAlign: 'center'
                                }}>
                                    item {index + 1}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.black, marginBottom: 10 }}>Products</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <View
                                key={index}
                                style={{ width: "49%", padding: 10, borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.border, marginBottom: 10 }}
                            >
                                <Image
                                    source={IMAGES.Ecommerce}
                                    style={{ height: 150, width: "100%", borderRadius: 10 }}
                                />
                                <Text style={{
                                    textAlign: "center",
                                    fontWeight: "600",
                                    fontSize: 12,
                                    color: COLORS.black,
                                    marginTop: 2
                                }}
                                    numberOfLines={1}>
                                    High-Performance Blender
                                </Text>
                                <Text style={{
                                    textAlign: "center",
                                    fontWeight: "600",
                                    color: COLORS.gray,
                                    fontSize: 10,
                                }}
                                    numberOfLines={1}>
                                    Blend with Power & Precision
                                </Text>
                                <Text style={{
                                    textAlign: "center",
                                    fontWeight: "500",
                                    color: COLORS.gradient || COLORS.black,
                                    fontSize: 10
                                }}>
                                    price: $88
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.black, marginVertical: 10 }}>Suggetions</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginBottom:10}}>
                   {
                    [1,2,3,4,5,5,6,7,8].map((_,index)=>(
                        <View key={index} style={{ padding: 10, borderRadius: 10, borderWidth: 1, borderColor: COLORS.border, alignItems: "center",marginRight:10 }}>
                            < TouchableOpacity style={{ position: "absolute", right: 5, top: 2 }}>
                                <CustomVectorIcons name={"close"} size={14} color={COLORS.black} iconSet='AntDesign' />
                            </TouchableOpacity>
                            <Image source={IMAGES.Shoes} resizeMode="stretch" style={{ height: 40, width: 40, borderRadius: 20 }} />
                            <Text numberOfLines={1} style={{ fontWeight: "600", color: COLORS.black, fontSize: 8, marginVertical: 3 }}>Sport running shoes</Text>
                            <TouchableOpacity style={{ paddingVertical: 3, borderRadius: 5, paddingHorizontal: 10, backgroundColor: COLORS.red, width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: COLORS.white, fontWeight: "500", fontSize: 12 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                   }
                </ScrollView>
            </ScrollView>
            <View style={{width:"100%",elevation:10,height:70,backgroundColor:COLORS.white,paddingHorizontal:25,paddingVertical:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{alignItems:"center"}}>
                    <CustomVectorIcons name={"home"} size={24} color={COLORS.black} iconSet='MaterialCommunityIcons'/>
                <Text style={{fontSize:14,fontWeight:"600",color:COLORS.bl}}>Home</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <CustomVectorIcons name={"search-outline"} size={24} color={COLORS.black} iconSet='Ionicons' />
                    <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.bl }}>Search</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <CustomVectorIcons name={"plus"} size={30} color={COLORS.black} iconSet='EvilIcons' />
                    <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.bl }}>Trade</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <CustomVectorIcons name={"call-outline"} size={24} color={COLORS.black} iconSet='Ionicons' />
                    <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.bl }}>Calling</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <CustomVectorIcons name={"person-circle-outline"} size={24} color={COLORS.black} iconSet='Ionicons' />
                    <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.bl }}>Home</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DemoScreen