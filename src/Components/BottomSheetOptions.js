import React, { forwardRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { COLORS } from './Color';
import CustomBtn from './CustumBtn';
import { IMAGES } from './Images';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import fontFamily from './fontfamily';

const BottomSheetOptions = forwardRef((props, ref) => {
    const [title, setTitle] = useState("");
    const [queries, setQueries] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const takePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorMessage);
            } else if (response.assets) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    // Image picker function
    const uploadPhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    return (
        <RBSheet
            ref={ref}
            height={660}
            openDuration={250}
            closeDuration={250}
            customStyles={{
                container: { borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingVertical: 10 },
                wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={{ width: "100%", backgroundColor: COLORS.white, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20 }}>
                    {/* Header */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: fontFamily.UrbanistBold }}>Create Discussion</Text>
                        <TouchableOpacity onPress={() => ref?.current?.close()}>
                            <Ionicons name="close-circle-outline" size={24} color={COLORS.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.border, padding: 15 }}>
                        {/* User Info */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={IMAGES.User} style={{ height: 60, width: 60, borderRadius: 30, resizeMode: "cover" }} />
                            <Text style={{ fontSize: 16, fontFamily: fontFamily.UrbanistBold }}>Sanjeev Kapoor</Text>
                        </View>

                        {/* Title Input */}
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: COLORS.gradient, fontSize: 18 }}>|</Text>
                            <TextInput
                                placeholder='Title Here...'
                                value={title}
                                onChangeText={setTitle}
                                style={{ fontSize: 18, flex: 1, paddingLeft: 5, fontFamily: fontFamily.UrbanistMedium, marginTop: 2 }}
                            />
                        </View>

                        {/* Queries Input */}
                        <View style={{ flexDirection: "row", height: 200, alignItems: "flex-start", marginTop: 20 }}>
                            <Text style={{ color: COLORS.gradient, fontSize: 18 }}>|</Text>
                            <TextInput
                                placeholder='Text your question...'
                                value={queries}
                                onChangeText={setQueries}
                                multiline={true}
                                style={{ fontSize: 18, fontFamily: fontFamily.UrbanistMedium, flex: 1, paddingLeft: 5, marginTop: -7 }}
                            />
                        </View>

                        {/* Add Image Section */}
                        <Text style={{ fontSize: 18, fontFamily: fontFamily.UrbanistSemiBold, marginBottom: 10 }}>Add Image</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity
                                onPress={takePhoto}
                                style={{
                                    height: 100,
                                    width: "48%",
                                    borderRadius: 10,
                                    backgroundColor: COLORS.bgCard,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Ionicons name="camera-outline" size={40} color={COLORS.black} />
                                <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>Take photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={uploadPhoto}
                                style={{
                                    height: 100,
                                    width: "48%",
                                    borderRadius: 10,
                                    backgroundColor: COLORS.bgCard,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <AntDesign name="upload" size={40} color={COLORS.black} />
                                <Text style={{ fontSize: 14, fontFamily: fontFamily.UrbanistBold }}>Upload photo</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Display Selected Image */}
                        {selectedImage && (
                            <View style={{ marginTop: 15, alignItems: "center" }}>
                                <Image
                                    source={{ uri: selectedImage }}
                                    style={{
                                        width: 200,
                                        height: 200,
                                        borderRadius: 10,
                                        resizeMode: "cover"
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => setSelectedImage(null)}
                                    style={{
                                        position: "absolute",
                                        top: 5,
                                        right: 5,
                                        backgroundColor: "rgba(0,0,0,0.6)",
                                        borderRadius: 15,
                                        padding: 5
                                    }}
                                >
                                    <Ionicons name="close" size={20} color={COLORS.white} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                    {/* Create Discussion Button */}
                    <View style={{ marginTop: 20 }}>
                        <CustomBtn
                            text={"Create Discussion"}
                            onPress={() => {
                                // Here you can handle the form submission including the image
                                console.log({
                                    title,
                                    queries,
                                    image: selectedImage
                                });
                                ref?.current?.close();
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </RBSheet>
    );
});

export default BottomSheetOptions;