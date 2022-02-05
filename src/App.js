import './App.css';
import React from 'react';
import Header from './Header';
import NewTodo from './NewTodo';
import Todos from "./Todos";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {theme: "light-theme", todoLists:[]};
    this.id = 0;
    //TODO: Read todos and theme from local storage
  }

  toggleTheme = () => {
    if(this.state.theme === "light-theme"){
      this.setState(() => {
        return {
          theme: "dark-theme"
        }
      });
    }
    else {
      this.setState(() => {
        return {
          theme: "light-theme"
        }
      });
    }
  }

  addNewTodoHandler = (todoText, isChecked) => {
    var list = this.state.todoLists;
    list.push({text: todoText, isChecked: isChecked, id: this.id});
    this.setState(() => {
      return {
        todoLists: list
      }
    });
    this.id++;
    console.log(this.state.todoLists);
  }

  updateTodosList = (todoList) => {
    this.setState(() => {
      return {
        todoLists: todoList
      }
    });
  };

  removeTodo = (id) => {
    console.log("in App");
    var list = this.state.todoLists;
    var filtredArray = list.filter((element) => element.id !== id);
    this.setState(() => {
      return {
        todoLists: filtredArray
      }
    });
    console.log(this.state.todoLists);
  }

  render(){
    return(
      <main id="main" className={this.state.theme}>
        <div className="main-body">
          <Header theme={this.state.theme} changeThemeHandler={this.toggleTheme} />
          <NewTodo addNewTodoHandler={this.addNewTodoHandler} theme={this.state.theme} />
          <Todos removeTodo={this.removeTodo} updateTodosList={this.updateTodosList} todoLists={this.state.todoLists} theme={this.state.theme} /> 
        </div>
    </main>
    )
  }
};

export default App;
