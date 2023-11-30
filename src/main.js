import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignIn.vue";
import OrderMenu from "./components/OrderMenu.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import SupervisorTables from "./components/SupervisorTables.vue";
import UserOrders from "./components/UserOrders.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/login", component: LogIn },
        { path: "/signin", component: SignUp },
        { path: "/menu", component: OrderMenu },
        { path: "/cart", component: ShoppingCart },
        { path: "/supervisor", component: SupervisorTables },
        { path: "/orders", component: UserOrders },
        { path: "/:pathMatch(.*)*", redirect: "/"}
    ],
    });

const app = createApp(App)

app.use(router)

app.mount("#app");