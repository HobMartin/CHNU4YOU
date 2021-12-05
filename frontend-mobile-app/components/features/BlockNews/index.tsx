import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { mainStyle } from "../../../styles";
import { newsList } from "../../api/news";
import { converDate, minimizeText } from "./helper";

export const BlockNews = () => {
  const renderItem = ({ item }: any) => {
    return (
      <View style={[mainStyle.blockItemStyle, styles.newsItem]}>
        <View style={styles.newsItemImageBlock}>
          <Image style={styles.newsItemImage} source={{ uri: item.url }} />
          <Text style={styles.newsItemDate}>{converDate(item.date)}</Text>
        </View>
        <View style={styles.newsItemTextBlock}>
          <Text style={styles.newsItemTiltle}>{item.title}</Text>
          <Text style={styles.newsItemText}>{minimizeText(item.text)}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[mainStyle.blockStyle, styles.blockNews]}>
      <Text style={styles.blockTitle}>Останні новини ЧНУ</Text>
      <FlatList
        data={newsList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blockNews: {
    height: 380,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  blockTitle: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  newsItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    marginBottom: 10,
    backgroundColor: "#ffff",
  },
  newsItemTextBlock: {
    display: "flex",
    flexDirection: "column",
    width: 240,
  },
  newsItemImageBlock: {
    alignItems: "flex-start",
  },
  newsItemImage: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  newsItemTiltle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  newsItemDate: {},
  newsItemText: {},
});
