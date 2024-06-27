import HomePage from "./pages/HomePage"
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Signup from "./components/Signup";
import ContactPage from "./pages/ContactPage";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import ExplorePage from "./pages/ExplorePage";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [authUser, setAuthUser] = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to='/signup' />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
