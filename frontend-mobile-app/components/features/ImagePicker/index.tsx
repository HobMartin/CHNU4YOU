import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../../firebase";
import { ref, uploadBytes } from "@firebase/storage";

export const ImagePickerComponent = () => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    const storageRef = ref(storage, "image/" + new Date().toISOString);
    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        console.log("image upload");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="uploadImage" onPress={uploadImage} />
      {Boolean(image) && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
