import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import LoginOrRegister from "./components/LoginOrRegister.vue";
import EditProfile from "./components/EditProfile.vue";
export const routes = [
  { path: "", component: LoginOrRegister },
  { path: "/Login", component: Login },
  { path: "/Register", component: Register },
  { path: "/EditProfile", component: EditProfile }
];
