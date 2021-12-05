import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { mainStyle } from "../../../styles";
import MainHeader from "../Header";
import { parseLinkUrl } from "../SubjectsList/helper";

export const Subject = ({ route }: any) => {
  const renderItem = ({ item }: any) => {
    return (
      <View>
        <View
          style={[styles.todayListItem, { justifyContent: "space-between" }]}
        >
          <Ionicons name="book-outline" size={24} color="black" />
          <View style={[styles.titleBlock]}>
            <Text style={[styles.title, styles.text]}>{item.title}</Text>
            <Text style={[styles.title]}>{item.teacher}</Text>
          </View>
          <Ionicons size={24} color="black" />
        </View>
        <View
          style={[styles.todayListItem, { justifyContent: "space-between" }]}
        >
          <Ionicons name="time-outline" size={24} color="black" />
          <Text style={[styles.text]}>{item.time}</Text>
          <Ionicons size={24} color="black" />
        </View>
        <TouchableOpacity
          style={styles.todayListItem}
          onPress={() => {
            Linking.openURL("https://goo.gl/maps/5R69eFZRocjNMkaw8");
          }}
        >
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={[styles.place, styles.text]}>{item.place}</Text>
          <Ionicons size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.todayListItem}
          onPress={() => {
            Linking.openURL(item.link);
          }}
        >
          <Ionicons name="videocam-outline" size={24} color="black" />
          <Text style={styles.text}>{parseLinkUrl(item.link)}</Text>
          <Ionicons size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={mainStyle.container}>
      <MainHeader title="Предмет">
        <View style={[mainStyle.blockStyle, styles.todayBlock]}>
          <FlatList data={[route.params]} renderItem={renderItem} />
        </View>
      </MainHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  todayBlock: {
    alignSelf: "flex-start",
    width: "100%",
    height: "auto",
  },
  todayListItem: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    height: "auto",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
  },
  titleBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  timeBlock: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // paddingHorizontal: 40,
    // backgroundColor: "#A9BCD0",
    // width: "90%",
    // height: 50,
    // borderRadius: 15,
  },
  timeText: {},
  place: {
    fontStyle: "italic",
  },
  link: {},
});
