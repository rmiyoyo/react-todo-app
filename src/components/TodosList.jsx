import PropTypes from 'prop-types'; // Import PropTypes
import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem
                    key={todo.id}
                    itemProp={todo}
                    handleChange={handleChange}
                    delTodo={delTodo}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    );
};

// Define PropTypes for the props
TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
