import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar />
      <NoProjectsSelected />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
