const TaskCard = () => {
  return (
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
  );
};

export default TaskCard;
