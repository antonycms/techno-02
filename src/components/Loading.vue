<template>
  <div class="loading-container">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
.loading-container {
  padding: 40px 20px;
}

.dot {
  display: inline-block;
  background-color: #4b8;
  margin: 0 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  animation: dotsAnimation 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.dot:nth-child(1) {
  animation-delay: 0.1s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.3s;
}

.dot:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes dotsAnimation {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>
