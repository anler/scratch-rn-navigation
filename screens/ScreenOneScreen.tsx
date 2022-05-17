import React, { useEffect } from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { TabOneStackScreenProps } from "../types";

interface Props extends TabOneStackScreenProps<"ScreenOne"> {}

export const ScreenOneScreen = ({ navigation }: Props) => {
  useEffect(() => console.log(`[render] ScreenOne`));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Go to screen one"
        onPress={() => navigation.navigate("ScreenTwo")}
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

export default ScreenOneScreen;
