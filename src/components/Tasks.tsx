import { Check, Trash } from "phosphor-react";
import { ITasks } from "../App";
import clipboard from "../assets/clipboard.svg";
import styles from "./Tasks.module.css";

type SetTasks = React.Dispatch<React.SetStateAction<ITasks[]>>;

interface IATasks {
  tasks: ITasks[];
  setTasks: SetTasks;
}

export function Tasks({ tasks, setTasks }: IATasks) {
  function handleCheck(id: number): void {
    setTasks((prevTasks: ITasks[]) => {
      return prevTasks.map((item: ITasks) => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      });
    });
  }

  function handleDelete(id: number): void {
    setTasks((prevTasks: ITasks[]) => {
      return prevTasks.filter((item: ITasks) => item.id !== id);
    });
  }

  const tasksCompleted = tasks.filter((item) => item.status === true).length;

  return (
    <div className={styles.root}>
      <header>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksCompleted}>
          <span>Concluídas</span>
          <span>{tasksCompleted}</span>
        </div>
      </header>
      <main>
        {tasks.length > 0 ? (
          <div className={styles.tasksWith}>
            {tasks.map((item: ITasks) => (
              <div key={item.id} className={styles.taskBox}>
                <div
                  className={
                    item.status
                      ? `${styles.taskInfoChecked} ${styles.taskInfo}`
                      : styles.taskInfo
                  }
                >
                  <div className={styles.checkTask}>
                    <button onClick={() => handleCheck(item.id)}>
                      {item.status && <Check size={11} weight="bold" />}
                    </button>
                  </div>
                  <span>{item.content}</span>
                  <div
                    className={styles.trashTask}
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash size={16} weight="bold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.tasksWithout}>
            <img src={clipboard} alt="Clipboard" />
            <div className={styles.taskAlert}>
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
