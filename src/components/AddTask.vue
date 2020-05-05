<template>
  <div id="routeDiv">
    <h2 class="card-title">Adicionar Tarefas</h2>
    <br>
    Nome: <input type="text" name="task" id="name" v-model="name" />
    <br />
    <br />
    Data: <input id="date" type="date" v-model="taskDate" />
    <br />
    <br />
    <input type="submit" value="Submeter" class="btn btn-primary btn-lg" @click="addTask()" />
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data: () => ({
    newTask: [],
    tasks: [],
    name: "",
    taskDate: "2020-06-29",
    id: 0,
    checked: 0
  }),

  created: function() {
    //load users when page is opened

    if (localStorage.getItem("tasks")) {
      this.$store.state.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },

  methods: {
    addTask() {
      if (this.newTask.name != "") {
        this.$store.commit("ADD_TASK", {
          id: Number(this.getLastTaskId()) + 1,
          name: this.name,
          taskDate: this.taskDate,
          checked: 0
        });
      }
    },

    getLastTaskId() {
      return this.$store.getters.getLastTaskId;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
