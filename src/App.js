import './App.css';
import React from 'react';
import Header from './Header';
import NewTodo from './NewTodo';
import Todos from "./Todos";

class App extends React.Component{

  constructor(props){
    super(props);
    var list = [];
    var theme = "light-theme";
    if(window.localStorage.getItem("list") !== null){
      list = JSON.parse(window.localStorage.getItem("list"));
    }
    if(window.localStorage.getItem("theme") !== null){
      theme = window.localStorage.getItem("theme");
    }
    if(window.localStorage.getItem("id") !== null){
      this.id =  parseInt(window.localStorage.getItem("id"));
    }
    else this.id = 0;
    this.state = {theme: theme, todoLists:list};
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
  }

  updateTodosList = (todoList) => {
    todoList = todoList.sort((a,b) => (a.isChecked == b.isChecked) ? 0 : a.isChecked ? -1 : 1);
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

  componentDidUpdate(){
    window.localStorage.setItem("list", JSON.stringify(this.state.todoLists));
    window.localStorage.setItem("theme", this.state.theme);
    window.localStorage.setItem("id", this.id);
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
