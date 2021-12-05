import React, { useEffect } from "react";
import { View } from "react-native";
import MainHeader from "../../features/Header";
import { mainStyle } from "../../../styles";
import { SubjectList } from "../../features/SubjectsList";
import { BlockNews } from "../../features/BlockNews";
import * as Speech from "expo-speech";
import { auth } from "../../../firebase";

export default function Home({ navigation }: any) {
  const speak = () => {
    const thingToSay = "Привіт, я помічник кафедри";
    Speech.speak(thingToSay, { language: "uk-UA" });
  };
  useEffect(() => {
    speak();
  }, []);
  return (
    <View style={mainStyle.container}>
      <MainHeader title={`${auth.currentUser?.email}`}>
        <SubjectList navigation={navigation} />
      </MainHeader>
      <BlockNews />
    </View>
  );
}
