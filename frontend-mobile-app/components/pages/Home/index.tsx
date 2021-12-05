import dayjs from "dayjs";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MainHeader from "../../features/Header";
import { mainStyle } from "../../../styles";
import { SubjectList } from "../../features/SubjectsList";
import { BlockNews } from "../../features/BlockNews";
import * as Speech from "expo-speech";
import { isLoaded } from "expo-font";

export default function Home({ navigation }: any) {
  const speak = () => {
    const thingToSay = "Привіт, я помічник кафедри";
    Speech.speak(thingToSay);
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
