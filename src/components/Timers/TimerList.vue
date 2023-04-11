<script setup>
import {ref} from "vue";
import TimerItem from "@/components/Timers/TimerItem.vue";
import {uuid} from "vue3-uuid";

const timers = ref([{
  id: uuid.v4(),
  timer: '00:01:00',
}]);

const inputTime = ref('00:01:00');
function addTimerHandler() {
  timers.value.push({
    id: uuid.v4(),
    timer: inputTime.value,
  });
}
</script>

<template>
  <div>
    <timer-item v-for="{timer} in timers" :timer="timer"></timer-item>
  </div>
  <div>
    <input type="time" v-model="inputTime" step="2" /> <button @click="addTimerHandler">Добавить таймер</button>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: "TimerList",
  inheritAttrs: false,
}
</script>