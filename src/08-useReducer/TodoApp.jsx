import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodos } from "../hooks";

const TodoApp = () => {

    const { todos, todosCounter, pendingTodosCounter, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp {todosCounter} - <small>Pendientes: {pendingTodosCounter}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoApp
