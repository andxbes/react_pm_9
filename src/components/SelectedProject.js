export default function SelectedProject({ project, onDelete }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300 text-stone-600">
                <div className="flex items-center justify-between">
                    <h1 className="mb-2 text-3xl font-bold ">{project.title}</h1>
                    <button
                        onClick={onDelete}
                        className=" hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="whitespace-pre-wrap ">{project.description}</p>
            </header>
            Tasks
        </div>
    );
};
