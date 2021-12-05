import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Button,
} from "react-native";
import { mainStyle } from "../../../styles";
import { user } from "../../api/user";
import MainHeader from "../../features/Header";
import { NameForm } from "./NameForm";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../../firebase";
import { signOut } from "@firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { ImagePickerComponent } from "../../features/ImagePicker";

export default function Profile({ navigation }: any) {
  const { width } = useWindowDimensions();

  const [editable, setEditable] = useState<boolean>(false);
  const [fieldChanged, setFieldChanged] = useState<boolean>(false);
  const icon = useMemo(() => {
    if (editable) return "check";
    return "edit";
  }, [editable, fieldChanged]);

  const submitForm = () => {
    setEditable(!editable);
  };
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={mainStyle.container}>
      <MainHeader title="Профіль" type="small" />
      <ImagePickerComponent />
      <View style={styles.avatarBlock}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <Text style={styles.avatarDescription}>Ваш аватар</Text>
      </View>
      <View>
        <Text>{auth?.currentUser?.email}</Text>
        <TouchableOpacity onPress={signOutHandler}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
      <View>
        <NameForm
          user={user}
          isEdit={editable}
          fieldChanged={setFieldChanged}
        />
      </View>
      <View style={[styles.editButton, { left: width - 80 }]}>
        <TouchableOpacity onPress={submitForm}>
          <Feather name={icon} size={32} color="#3c4043" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  avatarDescription: {
    color: "rgba(0,0,0,0.5)",
  },
  editButton: {
    position: "absolute",
    borderRadius: 50,
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#64b28b",
    flex: 1,
    bottom: 70,
  },
});
