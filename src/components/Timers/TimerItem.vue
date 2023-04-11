<script setup>
import requestInterval from 'request-interval';
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import dayjs from '../utils/dayjs';

const props = defineProps({
  timer: {
    type: String,
    default: '00:01:00',
  }
})

const initialTimerValue = dayjs(props.timer, 'HH:mm:ss');
const isPaused = ref(false);
const isFinished = ref(false);
const timer = ref(initialTimerValue);

let intervalTimer = null;
onMounted(() => {
  intervalTimer = requestInterval(1000, () => {
    if(isPaused.value || isFinished.value) {
      return;
    }
    timer.value = timer.value.subtract({ second: 1 });

    if(timer.value.format('HH:mm:ss') <= '00:00:00') {
      isFinished.value = true;
    }
  });
})

onBeforeUnmount(() => {
  requestInterval.clear(intervalTimer);
})

function startPauseHandler() {
  isPaused.value = !isPaused.value
}

function resetHandler() {
  timer.value = initialTimerValue;
  isPaused.value = false;
  isFinished.value = false;
}

const timerFormatted = computed(() => timer.value.format('HH:mm:ss'));
</script>

<template>
  <div class="timer-item">
    <div>{{ isFinished ? 'Завершён' : timerFormatted }}</div>
    <button v-if="!isFinished" @click="startPauseHandler">{{ isPaused ? 'Возобновить' : 'Пауза' }}</button>
    <button @click="resetHandler">Сброс</button>
  </div>
</template>

<style scoped>
.timer-item {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  name: "TimerItem",
  inheritAttrs: false,
}
</script>