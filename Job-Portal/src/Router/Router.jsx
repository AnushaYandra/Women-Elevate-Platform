import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import EachJob from "../Pages/EachJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
      path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/post-job", element: <CreateJob /> },
            { path: "/each-job", element: <EachJob /> },
            { path: "/my-job", element: <MyJobs /> },
            { path: "/salary", element: <SalaryPage /> },
            { path: "/about-us", element: <About /> },
            { path: "/edit-job/:id", 
              element: <UpdateJob />,
              loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
            }
        ]
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    }
  ]);

  export default router 