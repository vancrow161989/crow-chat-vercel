import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const renderActiveStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black";
  return (
    <>
      <nav className="flex items-center gap-6 px-6 py-4 border-b">
        <NavLink to="/" className={renderActiveStyle}>
          AI Integration Demo
        </NavLink>
        <NavLink to="/chat" className={renderActiveStyle}>
          Chat
        </NavLink>
        <NavLink to="/products" className={renderActiveStyle}>
          Products
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
