import { useForm } from '../hooks/useForm';

const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        };
        onNewTodo(newTodo);
        onResetForm();
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-1"
                type="submit"
                onClick={() => onNewTodo()}
            >
                Agregar
            </button>
        </form>
    )
}

export default TodoAdd
