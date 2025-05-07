import Sidebar from "./components/Sidebar";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout1 from "./layouts/Layout1";


function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elements={<Layout1 />}>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}  />
      
    </>
  )
}

export default App
