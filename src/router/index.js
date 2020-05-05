import Vue from "vue";
import VueRouter from "vue-router";
import AddTask from "../views/AddTask.vue";
import Tasks from "../views/Tasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add",
    name: "AddTask",
    component: AddTask
  },
  {
    path: "/",
    name: "Tasks",
    component: Tasks
  }
];

const router = new VueRouter({
  routes
});

export default router;
