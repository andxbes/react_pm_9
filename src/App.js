import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }

    });

  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    })
  }


  function handleSelectProject(id) {
    setProjectState((prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    }));
  }

  function handleStartAddProject() {
    setProjectState((prevState => {

      return {
        ...prevState,
        selectedProjectId: null
      }
    }));
  }

  function handleCancelAddProject() {
    setProjectState((prevState => {

      return {
        ...prevState,
        selectedProjectId: undefined
      }
    }));
  }

  function handleDeleteAddProject() {
    setProjectState((prevState => {

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    }));
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }

    });
  }
  const selectProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject
    project={selectProject}
    onDelete={handleDeleteAddProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
  />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject oneAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
