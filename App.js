import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=> {
        Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 40
  },

  list: {
    flex: 1,
    marginTop: 20
  },
});
