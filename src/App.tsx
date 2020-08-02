import React, { useState } from 'react';
import { Typography, Grid, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { TodoTable, TodoItem } from './TodoTable';
import { AddTodoForm } from './AddTodoForm';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

function App() {
  const initialTodoList = [
    { id: 1, description: 'Walk the dog', completed: true },
    { id: 2, description: 'Finish todo app', completed: false }
  ];
  const [todoList, setTodoList] = useState<Array<TodoItem>>(initialTodoList);

  const updateTodoList = (updatedTodo: TodoItem) => {
    console.log(updatedTodo);

    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === updatedTodo.id) {
        todoList[i].completed = todoList[i].completed ? false : true;
        console.log(todoList[i]);
      }
    };
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };

  const addTodo = (description: string) => {
    if (description === '') {
      return;
    }

    const newTodo: TodoItem = {
      id: todoList.length + 1,
      description: description,
      completed: false,
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  }

  const removeTodo = (todoItem: TodoItem) => {
    const newTodoList = [...todoList];

    const index = newTodoList.indexOf(todoItem);
    if (index > -1) {
      newTodoList.splice(index, 1);
    }

    setTodoList(newTodoList);

  }

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Sparks TODO</Typography>
          </Grid>
          <Grid item xs={12}>
            <TodoTable todoList={todoList} updateTodoList={updateTodoList} removeTodo={removeTodo} />
          </Grid>
          <Grid item xs={12}>
            <AddTodoForm addTodo={addTodo} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );

}

export default App;
