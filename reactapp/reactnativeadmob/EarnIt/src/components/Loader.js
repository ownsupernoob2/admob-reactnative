import React, { Component } from "react";
import { View, ActivityIndicator, Text, StyleSheet, Modal } from "react-native";

const Loader = ({ isAnimate, loaderText }) => {
  if (!isAnimate) {
    return null;
  } else {
    return (
      <Modal transparent={true} animationType="none" visible={true}>
        <View style={styles.container}>
          <View style={styles.overlay}>
            <ActivityIndicator
              style={styles.indicator}
              animating={true}
              size="small"
              color="white"
            />
            <Text style={styles.loadingText}>{loaderText}</Text>
          </View>
        </View>
      </Modal>
    );
  }
};
Loader.defaultProps = {
  loaderText: "Loading...",
};


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // height: '100%', width: '100%',
    backgroundColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  indicator: {
    height: 30,
    width: 30,
    paddingRight: 10,
  },
  loadingText: {
    color: "#FFFFFF",
    fontWeight: "500",
    letterSpacing: 2,
    fontSize: 14,
  },
});
export default Loader;
