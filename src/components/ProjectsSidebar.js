import Button from "./Button";
import SelectedProject from "./SelectedProject";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul>
                {projects.map((project) => {
                    let cssClasses = "w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800 ";
                    if (project.id === selectProjectId) {
                        cssClasses += ' bg-stone-800 text-stone-200 ';
                    } else {
                        cssClasses += ' text-stone-400 ';
                    }
                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelectProject(project.id)}
                                className={cssClasses}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}