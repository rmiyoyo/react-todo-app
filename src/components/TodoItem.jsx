import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const TodoItem = ({ itemProp, delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };
    const handleEditing = () => {
        setEditing(true);
    };
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };
    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => setUpdate(itemProp.id)}
                    onKeyDown={handleUpdatedDone}
                />
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => delTodo(itemProp.id)}>Delete</button>
                <span style={itemProp.completed ? completedStyle : null}></span>
                {itemProp.title}
            </div>
            <input
                type="text"
                value={itemProp.title}
                className={styles.textInput}
                style={editMode}
                onChange={(e) => console.log(e.target.value, itemProp.id)}
            />
        </li>
    );
};

// Define PropTypes for the props
TodoItem.propTypes = {
    itemProp: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    delTodo: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
