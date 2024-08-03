import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.addTask}>
        <input type="text"></input>
        <button>Add</button>
      </div>
    </div>
  );
};
