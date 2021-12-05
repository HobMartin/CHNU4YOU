import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { mainStyle } from "../../../styles";

interface MainHeaderProps {
  title: string;
  type?: "big" | "small";
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, children, type }) => {
  return (
    <View
      style={[
        styles.header,
        mainStyle.shadow,
        { height: type === "small" ? 120 : 420 },
      ]}
    >
      <Text style={styles.headTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    paddingTop: 50,
    alignItems: "center",
    height: 420,
    padding: 20,
    backgroundColor: "#64b28b",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  headTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3c4043",
  },
});
