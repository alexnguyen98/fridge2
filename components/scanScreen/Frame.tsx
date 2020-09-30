import React from "react";
import { StyleSheet, View } from "react-native";

const Frame = () => (
  <View style={styles.outer}>
    <View style={[styles.maskRow, styles.blackBg]} />
    <View style={styles.maskCenter}>
      <View style={styles.blackBg} />
      <View style={styles.frame}>
        <View style={styles.topLeft} />
        <View style={styles.topRight} />
        <View style={styles.bottomLeft} />
        <View style={styles.bottomRight} />
      </View>
      <View style={styles.blackBg} />
    </View>
    <View style={[styles.maskRow, styles.blackBg]} />
  </View>
);

const styles = StyleSheet.create({
  blackBg: {
    backgroundColor: "black",
    opacity: 0.5,
    flex: 1,
  },
  outer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
  },
  maskRow: {
    width: "100%",
  },
  maskCenter: {
    display: "flex",
    flexDirection: "row",
  },
  frame: {
    backgroundColor: "transparent",
    position: "relative",
    flex: 9,
    aspectRatio: 1,
  },
  topLeft: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  topRight: {
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  bottomLeft: {
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    position: "absolute",
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  bottomRight: {
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    position: "absolute",
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
});

export default Frame;
