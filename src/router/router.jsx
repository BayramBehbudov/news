import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import CreatePage from "../pages/Create/CreatePage";
import News from "../pages/News/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/CreatePage",
    element: <CreatePage />,
  },
  {
    path: "/News",
    element: <News />,
  },
]);
export { router };
