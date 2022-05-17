import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { TabOneStackScreenProps } from "../types";

interface Props extends TabOneStackScreenProps<"ScreenTwo"> {}

export const ScreenTwoScreen = ({ navigation }: Props) => {
  useEffect(() => console.log(`[render] ScreenTwo`));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default ScreenTwoScreen;
