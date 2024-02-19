import React, { useState } from "react";
import trophy from "./assets/Group 27.png";
import john from "./assets/jjjjjjjjj.jpg";
import tick from "./assets/Vector.png";

interface Task {
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Training at the Gym", completed: false },
    { title: "Play Paddle with friends", completed: false },
    { title: "Burger BBQ with family", completed: false },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTaskInput, setEditTaskInput] = useState("");
  const [showNewTaskInput, setShowNewTaskInput] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState("");

  const handleTaskComplete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    setTasks(updatedTasks);
    setEditIndex(index);
    setEditTaskInput(tasks[index].title);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { ...tasks[editIndex], title: editTaskInput };
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditTaskInput("");
    }
  };

  const handleAddTask = () => {
    if (newTaskInput.trim() !== "") {
      setTasks([...tasks, { title: newTaskInput, completed: false }]);
      setNewTaskInput("");
      setShowNewTaskInput(false);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditTaskInput(tasks[index].title);
  };

  const handleDelete = (index: number) => {
    if (index !== null) {
      setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#F3F3F3] flex">
        <div className="shadow-2xl h-[100%] w-[424px] pr-[0.5px]">
          <div className="bg-[#3556AB] h-[123px] shadow-2xl flex items-center justify-center">
            <div className="pb-10 mb-3">
              <img
                src={john}
                className="rounded-full h-[50px] w-[50px]"
                alt="John"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-[16px] text-[#ffffff] font-medium">
                Hello, Jhon
              </h1>
              <p className="text-[25px] text-[#ffffff] font-thin italic shadow-2xl">
                What are your plans
              </p>
              <p className="text-[25px] text-[#ffffff] font-thin italic shadow-2xl">
                for today?
              </p>
            </div>
          </div>
          <div className="bg-[#CDE53D] h-[116px] shadow-2xl flex justify-center items-center gap-10 border-2 border-[#9EB031]">
            <img
              src={trophy}
              className="h-[40.81px] w-[53.1px] flex justify-center"
            />
            <h1 className="text-[19px] text-[#071D55] flex items-center h-[100%] font-bold">
              Go Pro Upgrade Now
            </h1>
            <div className="bg-[#071D55] w-[66px] h-[71px] flex justify-center items-center mb-12">
              <h1 className="text-[18px] flex items-center h-[100%] text-[#F2C94C]">
                $1
              </h1>
            </div>
          </div>
          <div className="p-5">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-[#ffffff] h-[91px] flex justify-between items-center rounded-md shadow-xl mt-5"
              >
                <div className="flex items-center pl-5">
                  <button
                    className={`ml-5 w-8 h-8 rounded-full border-2 border-gray-400 
              ${task.completed ? "bg-[#49C25D]" : "bg-white"} relative`}
                    onClick={() => handleTaskComplete(index)}
                  >
                    {task.completed && (
                      <img
                        src={tick}
                        alt="tick"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    )}
                  </button>
                  <h1
                    className={`ml-4 text-[#071D55] text-[16px] font-semibold ${
                      task.completed
                        ? "line-through  opacity-50 text-[#8D8D8D]"
                        : ""
                    }`}
                  >
                    {task.title}
                  </h1>
                </div>
                <button
                  className="w-[51px] h-[45px] bg-[#ffffff] text-[#071D55] border-2 rounded-[4px] border-[#071D55] mr-5"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            ))}

            <div className="flex justify-end pt-10">
              {showNewTaskInput && (
                <input
                  type="text"
                  className="border-2 border-[#CBCBCB] h-[61px] w-[400px] rounded-[9px] pl-5 text-[20px] text-[#0D2972] mr-5"
                  placeholder="Add new task..."
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                />
              )}
              <button
                className="rounded-full text-[#ffffff] bg-[#3556AB] border-2 border-[#123EB1] shadow-xl h-[61px] w-[60px] text-[36px]"
                onClick={() => {
                  handleAddTask();
                  setShowNewTaskInput(!showNewTaskInput);
                  if (!showNewTaskInput) handleAddTask();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[635px]">
          <div className="flex justify-center items-center bg-[#3556AB] h-[123px]">
            <h1 className="text-[28px] text-[#ffffff] flex items-center h-[100%]">
              Edit Task
            </h1>
          </div>

          <div className="p-5">
            <h1 className="text-[16.5px] text-[#000000] pb-5">Task Name</h1>
            <input
              type="text"
              className="border-2 border-[#CBCBCB] h-[69px] w-[596px] rounded-[9px] pl-5 text-[20px] text-[#0D2972]"
              placeholder="Training at the Gym"
              value={editTaskInput}
              onChange={(e) => setEditTaskInput(e.target.value)}
            />
          </div>
          <div className="pt-[460px] pb-5 flex items-center align-baseline gap-5 pl-5">
            <button
              className={`bg-[#AB3535] h-[61px] w-[121px] text-[#ffffff] rounded-[6px] border-2 border-[#720D0D] inset-2 shadow-2xl
            ${editIndex === null ? "cursor-not-allowed" : ""}`}
              onClick={() => editIndex !== null && handleDelete(editIndex)}
            >
              Delete
            </button>
            <button
              className="bg-[#3556AB] h-[61px] w-[436px] text-[#ffffff] rounded-[6px] border-2 border-[#0D2972] inset-2 shadow-2xl"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
