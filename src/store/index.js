import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTask: [],
    tasks: [
      {
        id: 0,
        name: "Projeto 2º ano",
        date: "22/06/2020",
        checked: 0
      }
    ]
  },
  mutations: {
    ADD_TASK(state, payload) {
      state.tasks.push({
        id: payload.id,
        name: payload.name,
        taskDate: payload.taskDate,
        checked: payload.checked
      });
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    },

    REMOVE_TASK(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload.id);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    },

    CHECK_TASK(state, payload) {
      if (state.tasks[payload.id].checked === 0) {
        state.tasks[payload.id].checked = 1
      }
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    }
  },
  getters: {
    getLastTaskId(state) {
      if (state.tasks.length) {
        return state.tasks[state.tasks.length - 1].id;
      } else {
        return 0;
      }
    }
  }
});
