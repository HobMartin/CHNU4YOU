import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    marginBottom: 60,
  },
  blockStyle: {
    padding: 10,
    marginTop: 12,
    backgroundColor: "#3c4043",
    borderRadius: 22,
  },
  blockItemStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#dfe6e9",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderRadius: 20,
    padding: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  lightShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
