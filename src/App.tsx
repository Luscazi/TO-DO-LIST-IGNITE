import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./styles/App.css";

export interface ITasks {
  id: number;
  status: boolean;
  content: string;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      id: 1,
      status: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 2,
      status: true,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  function createTask(content: string) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        status: false,
        content: content,
      },
    ]);
  }
  return (
    <div className="App">
      <Header createTask={createTask} />
      <div className="wrapper">
        <main>
          <Tasks tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}
