import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { mainStyle } from "../../../styles";
import MainHeader from "../../features/Header";

export default function Chat() {
  return (
    <View style={mainStyle.container}>
      <MainHeader title="Чат" type="small" />
      <ImageBackground
        source={require("../../../assets/inDevelopment.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Сторінка знаходиться в розробці</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    bottom: 40,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    top: "12%",
    fontWeight: "bold",
    fontSize: 22,
    color: "rgba(0, 0, 0,0.7)",
  },
});
