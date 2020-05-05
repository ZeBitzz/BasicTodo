<template>
  <div id="Tasks">
    <h1>Tarefas</h1>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Apagar</th>
            <th scope="col">Finalizar</th>
          </tr>
        </thead>
        <tbody id="tableValues">
          <tr v-for="task in this.$store.state.tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.name}}</td>
            <td>{{task.taskDate}}</td>
            <td>
              <button type="button" class="btn btn-danger btn-lg" @click="removeTask(task.id)">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </td>
            <td v-if="task.checked !== 1">
              <button type="button" class="btn btn-success btn-lg" @click="checkTask(task.id)">
                <span class="glyphicon glyphicon-check"></span>
              </button>
            </td>
            <td v-else>
              <button type="button" class="btn btn-secondary btn-lg" disabled>
                <span class="glyphicon glyphicon-check"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  data: () => ({
    newTask: [],
    tasks: [],
    name: "",
    taskDate: "2020-06-29",
    id: 0
  }),

  created: function() {
    //load users when page is opened

    if (localStorage.getItem("tasks")) {
      this.$store.state.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },

  methods: {
    removeTask(id) {
      this.$store.commit("REMOVE_TASK", {
        id: id
      });
    },

    checkTask(id) {
      this.$store.commit("CHECK_TASK", {
        id: id
      });
    }
  }
};
</script>
