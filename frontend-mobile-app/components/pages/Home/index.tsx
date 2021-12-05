import React, { useEffect } from "react";
import { View } from "react-native";
import MainHeader from "../../features/Header";
import { mainStyle } from "../../../styles";
import { SubjectList } from "../../features/SubjectsList";
import { BlockNews } from "../../features/BlockNews";
import * as Speech from "expo-speech";

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
      <MainHeader title="Сьогодні">
        <SubjectList navigation={navigation} />
      </MainHeader>
      <BlockNews />
    </View>
  );
}
