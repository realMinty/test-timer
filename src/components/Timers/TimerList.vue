<script setup>
import {ref} from "vue";
import TimerItem from "@/components/Timers/TimerItem.vue";
import {uuid} from "vue3-uuid";
import {defaultValues} from "@/components/Timers/TimerController";

const timers = ref([]);

const inputTime = ref(defaultValues.timer);
function addTimerHandler() {
  timers.value.push({
    id: uuid.v4(),
    timer: inputTime.value,
  });
}
</script>

<template>
  <div>
    <template v-if="timers.length">
      <timer-item v-for="{timer} in timers" :timer="timer"></timer-item>
    </template>
    <template v-else>
      На данный момент нет активных таймеров
    </template>
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