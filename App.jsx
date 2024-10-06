/**
 * My To Do List App
 * 
 * @format
 */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';  // Import the ToDoList component
import ToDoForm from './ToDoForm';  // Import the ToDoForm component

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  return (
    <SafeAreaView>
      {/* Render ToDoList with tasks */}
      <ToDoList tasks={tasks} />
      
      {/* Render ToDoForm */}
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;




