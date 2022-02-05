import React from "react";
class NewTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {isActive: false};
    }
    KeyHandler = (event) => {
        if(event.key === "Enter"){
            this.props.addNewTodoHandler(event.target.value , this.state.isActive);
            event.target.value = "";
            this.setState({
                isActive: false
            });
        }
    };
    activatorHandler = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }
    render(){
        let anchorClassName = "activator-anchor ";
        let todoText = "text-input ";
        if(this.state.isActive){
            anchorClassName += "activated ";
            todoText += "activated ";
        }
        return (
            <div className="custom-todo-input-new-container">
                <div className={"custom-todo-input " + this.props.theme}>
                    <div className={"custom-todo-activator " + this.props.theme}>
                        <a onClick={this.activatorHandler} className={anchorClassName + this.props.theme}>
                            <img className={"finished-todo"} />
                        </a>
                    </div>
                    <div className={"custom-todo-text " + this.props.theme}>
                        <input className={todoText + this.props.theme} type="text" onKeyDown={this.KeyHandler} placeholder="Create New Todo" />
                    </div>
                </div>
            </div>
        )
    }
};

export default NewTodo;