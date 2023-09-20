<template>
  <div class="timer-ctr">
    <div class="time">
      <p class="hour">00<small>h</small></p>
      <div class="p mins">00<small>m</small></div>
      <p class="secs">00<small>s</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-timer",
};
</script>

<style>
.timer-ctr {
  display: flex;
  justify-content: center;
}

.timer-ctr .time {
  display: inline-flex;
  gap: 1.25rem;
  font-size: clamp(3rem, 5vw + 0.5rem, 4rem);
  line-height: 1.33;
  margin-inline: auto;
  font-family: "Unica One", cursive;
}

.timer-ctr small {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: var(--font-primary);
}

@media screen and (min-width: 45rem) {
  .timer-ctr .time {
    margin-inline-start: 0;
  }
}
</style>
