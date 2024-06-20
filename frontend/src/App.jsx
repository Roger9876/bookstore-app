import Course from "./components/Course"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/course' element={<Course />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App