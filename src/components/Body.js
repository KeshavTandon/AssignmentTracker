import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login"
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import store from "./Store";
import Header from "./Header";
import LeaderBoard from "./LeaderBoard";
import Ranking from "./Ranking";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/SignUp",
      element:<SignUp/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/LeaderBoard",
      element: <LeaderBoard />,
    },
    {
      path: "/Ranking",
      element: <Ranking />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};
export default App;
