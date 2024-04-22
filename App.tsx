/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [TextFiled, setTextFiled] = useState("");
  const [Todos, setTodos] = useState<string[]>([]);
  const onSubmitHandler = () => {
    setTodos((prev) => [...prev, TextFiled])
    setTextFiled("")
  }
  const OnDeleteHandler = (text: string) => {
    const Filterd = Todos.filter((item) => item != text)
    setTodos(Filterd)
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput value={TextFiled} onChangeText={(e) => setTextFiled(e)
        } style={styles.input} placeholder="Add your Todo" />
        <TouchableOpacity onPress={onSubmitHandler} style={styles.Button}>
          <Text style={styles.text}>Add Todo</Text>
        </TouchableOpacity>
        <FlatList
          data={Todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <View style={styles.view} >
              <Text style={styles.Flattext}>{item}</Text>
              <TouchableOpacity onPress={() => OnDeleteHandler(item)} style={styles.Delete}>
                <Text style={styles.text}>Remove</Text>
              </TouchableOpacity>
            </View>
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    width: "auto",
    borderWidth: 1,
    padding: 10,
    borderColor: "#777",
    borderRadius: 8,
  },
  Button: {
    padding: 16,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    marginTop: 10,
    alignItems: "center",
    paddingHorizontal: 30,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  view: {
    display: 'flex',
    justifyContent: "space-between"
  },
  Delete: {
    padding: 16,
    backgroundColor: "red",
    marginTop: 10,
    width: "auto",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    color: "#ffff",
  },
  Flattext: {
    color: "black",
  },
});

export default App;
