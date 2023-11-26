import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignIn.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/login", component: LogIn },
        { path: "/signin", component: SignUp },
    ],
    });

const app = createApp(App)

app.use(router)

app.mount("#app");