import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AllCategories from "../dashboard/AllCategories";
import ProjectsPage from "@/pages/ProjectsPage";
import AllProjects from "@/dashboard/AllProjects";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
import BlogPage from "@/pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/allprojects",
        element: <ProjectsPage />,
      },
      {
        path: "/projectdetails/:id",
        element: <ProjectDetailsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "allcategories",
        element: <AllCategories />,
      },
      {
        path: "allprojects",
        element: <AllProjects />,
      },
    ],
  },
]);

export default router;
