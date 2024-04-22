/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const App = () => {
  const [Name, setName] = useState("hi");
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {names.map((item, index) => {
          return (
            <View style={styles.ui} key={index}>
              <Text style={styles.items}>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: 20,
  },
  ui: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20, // Add margin bottom for gap
  },
  items: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default App;
