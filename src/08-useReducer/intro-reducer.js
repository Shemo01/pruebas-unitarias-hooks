
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];


const todoReducer = (state = initialState, action = {}) => {
    if(action.type === '[TODO] addtodo'){
        return [...state, action.payload];
    };
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Reacolectar la piedra del poder',
    done: false
};

const addTodoAction = {
    type: '[TODO] addtodo',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});