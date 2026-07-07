const EmployeeDashboard = () => {
  const taskList = (
    <>
      <div className="bg-blue-500 p-4 rounded-xl space-y-4 w-sm shrink-0">
        <div className="flex justify-between items-center">
          <p className="bg-orange-700 px-2 rounded-md">High</p>
          <p>20 Feb 2024</p>
        </div>

        <h3 className="text-xl font-semibold">Ek aur task</h3>

        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eius
          dolor ex, incidunt molestiae blanditiis quia id dolores ratione illum!
        </p>
      </div>
    </>
  );
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
      <section className="grid grid-cols-4 gap-5 mt-10">
        {/* New Task */}
        <div className="bg-blue-500 p-4 rounded-xl font-semibold">
          <p className="text-2xl">0</p>
          <p>New Task</p>
        </div>

        {/* Completed */}
        <div className="bg-lime-600 p-4 rounded-xl font-semibold">
          <p className="text-2xl">0</p>
          <p>Completed</p>
        </div>

        {/* Accepted */}
        <div className="bg-yellow-500 p-4 rounded-xl font-semibold">
          <p className="text-2xl">0</p>
          <p>Accepted</p>
        </div>

        {/* Failed */}
        <div className="bg-red-800 p-4 rounded-xl font-semibold">
          <p className="text-2xl">0</p>
          <p>Failed</p>
        </div>
      </section>

      {/* Task List */}
      <section
        id="tasklist"
        className="mt-10 h-100 rounded-xl py-10 flex gap-5 flex-nowrap overflow-x-auto"
      >
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
        {taskList}
      </section>
    </div>
  );
};

export default EmployeeDashboard;
