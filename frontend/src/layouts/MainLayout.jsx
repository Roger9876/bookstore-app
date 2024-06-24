import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  const location = useLocation();

  const isSignupPage = location.pathname === '/signup';

  if (isSignupPage) {
    return <Outlet />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout