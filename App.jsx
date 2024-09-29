/**
 * My To Do List App
 * 
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Import the ToDoList component
import ToDoForm from './ToDoForm'; // Import the ToDoForm component

function App() {
  return (
    <SafeAreaView>
      {/* Render ToDoList */}
      <ToDoList />
      
      {/* Render ToDoForm */}
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;

