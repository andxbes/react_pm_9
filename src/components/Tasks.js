import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDelete }) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
            <NewTask onAddTask={onAddTask} />
            {tasks.length === 0 && <p className="mb-4 text-stone-800">This projects does not have any tasks yet</p>}
            {tasks.length > 0 &&
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task =>
                        <li className="flex justify-between my-4" key={task.id}>
                            <span className="">{task.text}</span>
                            <button
                                onClick={() => onDelete(task.id)}
                                className="text-stone-700 hover:text-red-500">
                                Clear
                            </button>
                        </li>
                    )}
                </ul>}
        </section>
    );
};
