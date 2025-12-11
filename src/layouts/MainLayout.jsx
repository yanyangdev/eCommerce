import { Navbar } from "../components";
import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
