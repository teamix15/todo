import styles from "./App.module.css";
import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { getTodos } from "../../features/todos/todosSlice";
import { getUsers } from "../../features/users/usersSlice";
import { TodoList } from "../TodoList/TodoList";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
