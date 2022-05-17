import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import { Button, StyleSheet } from "react-native";
import { useAppContext } from "../appContext";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps, TabOneStackParamList } from "../types";
import ScreenOneScreen from "./ScreenOneScreen";
import ScreenTwoScreen from "./ScreenTwoScreen";

const Stack = createNativeStackNavigator<TabOneStackParamList>();

interface Props extends RootTabScreenProps<"TabOne"> {}

export const TabOneScreen = ({ navigation }: Props) => {
  useEffect(() => console.log(`[render] TabOne`));
  return (
    <Stack.Navigator initialRouteName="ScreenOne">
      <Stack.Screen component={ScreenOneScreen} name="ScreenOne" />
      <Stack.Screen component={ScreenTwoScreen} name="ScreenTwo" />
    </Stack.Navigator>
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

export default TabOneScreen;
