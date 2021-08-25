<template>
  <div class="loading">
    <div></div>
    <div></div>
    <div></div>
    <p>butterbach.org</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  mounted() {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
  },
};
</script>


 <style scoped>
p {
  margin: auto;
}

.loading {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  display: flex;
  justify-content: center;
}
.loading div {
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 80px;
  background: var(--text-color-accent);
  animation: loading 1.4s cubic-bezier(0.58, 1.83, 0.47, 0.42) infinite;
}
.loading div:nth-child(1) {
  left: 41vw;
  animation-delay: -0.24s;
}
.loading div:nth-child(2) {
  left: 49vw;
  animation-delay: -0.12s;
}
.loading div:nth-child(3) {
  left: 57vw;
  animation-delay: 0;
}
@keyframes loading {
  0% {
    top: 28vh;
    height: 64px;
  }
  50%,
  100% {
    top: 38vh;
    height: 80px;
  }
}
</style>