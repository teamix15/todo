import styles from "./Todo.module.css";
import { TodoDTO } from "../../models/dto/todo.dto";

interface TodoProps {
  todo: TodoDTO;
}

export const Todo: React.FC<TodoProps> = (props) => {

  return (
    <div className={styles.todo}>
      <div className={styles.todoInput}>
        <input type="checkbox"/>
      </div>
      <div className={styles.todoTitle}>{props.todo.title}</div>
    </div>
  );
};
