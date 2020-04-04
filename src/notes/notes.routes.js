import DashboardContainer from "./containers/dashboard";
import PostDetailsContainer from "./containers/post-details";

export default [
  {
    exact: true,
    path: "/products/notes/dashboard",
    key: "dashboard",
    label: "Dashboard",
    component: DashboardContainer
  },
  {
    exact: true,
    path: "/products/notes/post/:id/details",
    key: "postDetails",
    label: "Details",
    component: PostDetailsContainer
  }
];
