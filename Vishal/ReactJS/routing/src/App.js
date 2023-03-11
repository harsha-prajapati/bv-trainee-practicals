import "./App.css";
import {
  createBrowserRouter,
  //createRoutesFromElements,
  //Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Errorpage from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Products", element: <Products /> },
    ],
  },
]);

// const routrDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />

//     <Route path="/Products" element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routrDefinitions);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
