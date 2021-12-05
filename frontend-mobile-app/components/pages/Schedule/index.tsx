import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { mainStyle } from "../../../styles";
import MainHeader from "../../features/Header";
import { SheduleList } from "../../features/ScheduleList";

export default function Schedule({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
        <MainHeader title="Розклад" type="small" />
        <SheduleList navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
});
