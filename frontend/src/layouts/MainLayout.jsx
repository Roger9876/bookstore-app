import { Outlet, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  const location = useLocation();

  const isSignupPage = location.pathname === '/signup';

  if (isSignupPage) {
    return (
      <>
        <Outlet />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  )
}

export default MainLayout