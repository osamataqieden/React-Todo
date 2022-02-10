import './App.css';
import React from 'react';

class Todo extends React.Component {
  activationHandler = () => {
    this.props.updateTodo(this.props.id, this.props.text, !this.props.isChecked);
  };
  KeyHandler = (event) => {
    if(event.key === "Enter"){
      this.props.updateTodo(this.props.id, event.target.value, this.props.isChecked);
    }
  }
  removeTodo = () => {
    console.log("In Todo");
    this.props.removeTodo(this.props.id);
  }
  render() {
    let anchorClassName = "activator-anchor ";
    let todoText = "text-input ";
    if(this.props.isChecked){
      anchorClassName += "activated ";
      todoText += "activated ";
    }
    return (
      <div className={"custom-todo-input border-bottom " + this.props.theme}>
        <div className={"custom-todo-activator " + this.props.theme}>
          <a onClick={this.activationHandler} className={anchorClassName + this.props.theme}>
            <img className={"finished-todo"} />
          </a>
        </div>
        <div className={"custom-todo-text " + this.props.theme}>
          <input defaultValue={this.props.text} className={todoText + this.props.theme} type="text" onKeyDown={this.KeyHandler} placeholder="Create New Todo" />
        </div>
        <div>
          <a onClick={this.removeTodo} className={"remove-todo " + this.props.theme}>
            <img className={"remove-todo-icon"} />
          </a>
        </div>
      </div>
    )
  }
};

export default Todo;
