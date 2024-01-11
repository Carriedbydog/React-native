import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { Header } from "./components/Header";
import { ListItems } from "./components/ListItems";
import { Form } from "./components/Form";

const todoList = [
  { key: "1", title: "Buy Milk", completed: false },
  { key: "2", title: "Buy Eggs", completed: false },
  { key: "3", title: "Buy Bread", completed: false },
  { key: "4", title: "Make French Toast", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAddtoDo = (text) => {
    setTodos((prev) => {
      return [
        {
          key: Math.random().toString(36).substring(7),
          title: text,
          completed: false,
        },
        ...prev,
      ];
    });
  };

  const handleDeletTodo = (key) => {
    setTodos((list) => {
      return list.filter((todos) => todos.key != key);
    });
  };
  return (
    <View styles={styles.container}>
      <Header />
      <Form handleAddTodo={handleAddtoDo} />
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListItems item={item} handleDeletTodo={handleDeletTodo} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
