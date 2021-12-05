import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Vibration,
} from "react-native";
import { mainStyle } from "../../../styles";
import { scheduleListToday } from "../../api/subjectList";
import { capitalizeFirstLetter, colorSubjectBlock } from "./helper";

export const SubjectList = ({
  navigation,
  items,
  title,
  scrollEnabled = true,
}: any) => {
  const renderSubjectItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={[
          styles.todayListItem,
          mainStyle.lightShadow,
          { backgroundColor: colorSubjectBlock(item.time) },
        ]}
        onPress={() => {
          Vibration.vibrate(25);
          navigation.push("Subject", item);
        }}
      >
        <Text style={styles.headTitle}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.place}>{item.place}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        mainStyle.blockStyle,
        mainStyle.shadow,
        styles.todayBlock,
        { height: title ? "auto" : 305 },
      ]}
    >
      {title && (
        <View>
          <Text style={[styles.headTitle, styles.titleCard]}>
            {`${capitalizeFirstLetter(title.text)}\n${title.date}`}
          </Text>
        </View>
      )}
      <FlatList
        data={items ?? scheduleListToday}
        renderItem={renderSubjectItem}
        scrollEnabled={scrollEnabled}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
    width: "100%",
  },
  titleCard: {
    color: "#ffff",
    alignItems: "center",
    marginBottom: 20,
    textAlign: "center",
  },
  todayBlock: {
    backgroundColor: "#3c4043",
    height: 305,
    alignItems: "center",
    width: "90%",
    marginHorizontal: 20,
  },
  todayListItem: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3436",
  },
  place: {
    fontSize: 12,
    fontStyle: "italic",
  },
});
