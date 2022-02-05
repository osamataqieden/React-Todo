import './App.css';
import React from "react";
import Todo from "./Todo";

class Todos extends React.Component {
    removeTodo = (id) => {
        console.log("In Todos");
        this.props.removeTodo(id);
    }

    updateTodo = (id, text, isChecked) => {
        let newList = this.props.todoLists;
        let index = newList.findIndex((item) => item.id === id);
        newList[index] = { id: id, text: text, isChecked: isChecked };
        this.props.updateTodosList(newList);
    };

    render() {
        if (this.props.todoLists.length == 0) {
            return (<div></div>);
        }
        return (
            <div className={"todosContainer " + this.props.theme}>
                    {this.props.todoLists.map((element) =>
                        <Todo theme={this.props.theme} id={element.id} key={element.id} text={element.text} isChecked={element.isChecked} updateTodo={this.updateTodo} removeTodo={this.removeTodo} />
                    )}
            </div>
        );
    }
}

export default Todos;