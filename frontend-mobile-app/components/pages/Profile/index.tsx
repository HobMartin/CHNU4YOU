import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { mainStyle } from "../../../styles";
import { user } from "../../api/user";
import MainHeader from "../../features/Header";
import { NameForm } from "./NameForm";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Profile() {
  const { width } = useWindowDimensions();

  const [editable, setEditable] = useState(false);
  return (
    <View style={mainStyle.container}>
      <MainHeader title="Профіль" type="small" />
      <View style={styles.avatarBlock}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <Text style={styles.avatarDescription}>Ваш аватар</Text>
      </View>
      <View>
        <NameForm user={user} isEdit={editable} />
      </View>
      <View style={[styles.editButton, { left: width - 80 }]}>
        <TouchableOpacity onPress={() => setEditable(!editable)}>
          {editable ? (
            <Feather name="x" size={32} color="#3c4043" />
          ) : (
            <Feather name="edit" size={32} color="#3c4043" />
          )}
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
