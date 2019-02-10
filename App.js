import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App7 from "./app6/feed2";

import { Ionicons } from "@expo/vector-icons";

const A7 = createStackNavigator({
  home: {
    screen: App7,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A7);
