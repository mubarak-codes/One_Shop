import Home from "./pages/Home";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout1 from "./layouts/Layout1";


function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
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
