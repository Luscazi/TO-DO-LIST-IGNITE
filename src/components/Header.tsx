import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import rocketLogo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header(props: any) {
  const [taskContent, setTaskContent] = useState("");

  function handleCreateTask() {
    props.createTask(taskContent);
    setTaskContent("");
  }

  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt="Logo To Do List" />
        <div className={styles.logoType}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
      <div className={styles.createTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
        />
        <button onClick={handleCreateTask}>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </div>
    </header>
  );
}
