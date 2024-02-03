import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectState((prevState => {

      return {
        ...prevState,
        selectedProjectId: null
      }
    }));
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
