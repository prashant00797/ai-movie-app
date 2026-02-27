import Navbar from "../ui/Navbar";
import { Outlet } from "react-router";

const PrimaryContainer = () => {
  return (
    <div className="bg-primaryBg text-textPrimary min-h-screen font-body">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PrimaryContainer;
