import styles from "./App.module.css";
import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { getTodos } from "../../features/todosSlice";
import { getUsers } from "../../features/usersSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
};

export default App;
