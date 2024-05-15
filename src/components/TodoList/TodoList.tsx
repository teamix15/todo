import { useAppSelector } from "../../hooks/redux";
import { TodoDTO } from "../../models/dto/todo.dto";
import { Todo } from "../Todo/Todo";
import styles from "./TodoList.module.css";

export const TodoList: React.FC = () => {
  const todos: TodoDTO[] = useAppSelector((state) => state.todos.value);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.title}></Todo>
      ))}
    </div>
  );
};
