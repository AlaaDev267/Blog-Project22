import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";

import Footer from './Components/Footer/Footer.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import AboutUs from "./Pages/About Us/AboutUs.jsx";
import Details from "./Pages/Details/Details.jsx";








function Layout() {








  return (
    <>

  <Navbar />

      <Outlet />
      <Footer />


    </>
  );
}

function App() {










  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path:"about",
          element: <AboutUs/>

        },
        {
          path:"details/:id",
          element:<Details />
        },

{
  path: "blog/:category",
  element: <Blog />
}

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
