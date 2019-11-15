import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import LoginOrRegister from "./components/LoginOrRegister.vue";

export const routes = [
  { path: "", component: LoginOrRegister },
  { path: "/login", component: Login },
  { path: "/register", component: Register },

  { path: "*", redirect: "" } //for non-specified routes, redirect to the homepage
];
