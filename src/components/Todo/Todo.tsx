import styles from "./Todo.module.css";
import { TodoDTO } from "../../models/dto/todo.dto";

interface TodoProps {
  todo: TodoDTO;
}

export const Todo: React.FC<TodoProps> = (props) => {

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoInput}>
        <input className={styles.checkbox} type="checkbox"/>
      </div>
      <div className={styles.todoTitle}>{props.todo.title}</div>
    </div>
  );
};
