const TaskCountCard = () => {
  return (
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
  );
};

export default TaskCountCard;
