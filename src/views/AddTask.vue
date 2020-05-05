<template>
  <div class="home">
    <AddTask />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTask from "@/components/AddTask.vue";

export default {
  name: "addtask",
  components: {
    AddTask
  }
};
</script>
