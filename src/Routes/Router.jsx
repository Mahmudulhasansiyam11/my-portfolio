import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
]);
