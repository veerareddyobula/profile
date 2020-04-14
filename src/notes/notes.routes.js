import DashboardContainer from "./containers/dashboard";
import PostDetailsContainer from "./containers/post-details";
import AdminContainer from "./containers/admin";
import AdminHomeContainer from "./containers/admin/admin-home";
import AdminEditContainer from "./containers/admin/admin-edit";

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
  },
  {
    exact: true,
    path: "/products/notes/admin/*",
    key: "admin",
    label: "Admin",
    component: AdminContainer,
    routes: [
      {
        exact: true,
        path: "/products/notes/admin/home",
        key: "youTubeListView",
        label: "You Tube Store",
        component: AdminHomeContainer,
      },{
        exact: true,
        path: "/products/notes/admin/:id/edit",
        key: "addEditYouTubeList",
        label: "Add/Edit",
        component: AdminEditContainer,
      }
    ]
  }
];
