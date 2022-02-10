import './App.css';
import React from "react";
import Todo from "./Todo";
import { Droppable, Draggable } from 'react-beautiful-dnd';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allClassName: "controllor-anchor active-button ", activeClassName: "controllor-anchor ", completedClassName: "controllor-anchor ", activeFilter: "All" };
    }
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

    applyFilter = (filter) => {
        if (filter === "All") {
            this.setState({
                allClassName: "controllor-anchor active-button ",
                activeClassName: "controllor-anchor ",
                completedClassName: "controllor-anchor ",
                activeFilter: "All"
            });
        }
        else if (filter === "Active") {
            this.setState({
                allClassName: "controllor-anchor ",
                activeClassName: "controllor-anchor active-button ",
                completedClassName: "controllor-anchor ",
                activeFilter: "Active"
            });
        }
        else {
            this.setState({
                allClassName: "controllor-anchor ",
                activeClassName: "controllor-anchor ",
                completedClassName: "controllor-anchor active-button ",
                activeFilter: "Completed"
            });
        }
    }

    clearCompleted = () => {
        var newList = this.props.todoLists;
        newList = newList.filter((element) => !element.isChecked);
        this.props.updateTodosList(newList);
    }

    render() {
        if (this.props.todoLists.length === 0) {
            return (<div></div>);
        }
        var renderList = this.props.todoLists;
        if (this.state.activeFilter !== "All") {
            if (this.state.activeFilter === "Active")
                renderList = renderList.filter((element) => !element.isChecked);
            else renderList = renderList.filter((element) => element.isChecked);
        }
        return (
            <div className={"todosContainer " + this.props.theme}>
                {renderList.map((element) =>
                    <Todo draggable theme={this.props.theme} id={element.id} key={element.id} text={element.text} isChecked={element.isChecked} updateTodo={this.updateTodo} removeTodo={this.removeTodo} />
                )}
                <div className={"todos-controller " + this.props.theme}>
                    <div>
                        {this.props.todoLists.length} Items Left
                    </div>
                    <div className={"filter-selector " + this.props.theme}>
                        <div>
                            <button className={this.state.allClassName + this.props.theme} href="#" onClick={() => this.applyFilter("All")}>
                                All
                            </button>
                        </div>
                        <div>
                            <button className={this.state.activeClassName + this.props.theme} href="#" onClick={() => this.applyFilter("Active")}>
                                Active
                            </button>
                        </div>
                        <div>
                            <button className={this.state.completedClassName + this.props.theme} href="#" onClick={() => this.applyFilter("Completed")}>
                                Completed
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className={'controllor-anchor ' + this.props.theme} href="#" onClick={() => this.clearCompleted()}>
                            Clear Completed
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todos;