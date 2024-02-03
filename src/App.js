import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
