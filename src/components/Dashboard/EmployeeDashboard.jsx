import TaskCard from "../Cards/TaskCard";
import TaskCountCard from "../Cards/TaskCountCard";

const EmployeeDashboard = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <p>Hello,</p>
          <p className="text-xl font-semibold">Joy Bappy 👋</p>
        </div>
        <button className="bg-orange-600 px-2 font-semibold rounded-full">
          Logout
        </button>
      </header>

      {/* Task count */}
      <TaskCountCard />

      {/* Task List */}
      <section
        id="tasklist"
        className="mt-10 h-100 rounded-xl py-10 flex gap-5 flex-nowrap overflow-x-auto"
      >
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </section>
    </div>
  );
};

export default EmployeeDashboard;
