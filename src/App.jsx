import { createBrowserRouter, RouterProvider } from "react-router";
import SignupContainer from "./pages/SignupContainer";
import LoginContainer from "./pages/LoginContainer";
import BrowseContainer from "./pages/BrowseContainer";
import PrimaryContainer from "./pages/PrimaryContainer";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryContainer />,
    children: [
      { index: true, element: <SignupContainer /> },
      {
        path: "login",
        element: <LoginContainer />,
      },
      {
        path: "browse",
        element: <BrowseContainer />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRoutes} />;
};

export default App;
