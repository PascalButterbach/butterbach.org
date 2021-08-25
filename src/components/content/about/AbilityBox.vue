<template>
  <div
    class="col-lg-6 col-md-6 col-sm-6 block"
    :class="index % 2 != 0 ? 'mt-lg-5' : ''"
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 50,
      intersection: {
        threshold: 0.2,
      },
    }"
  >
    <div class="ability-block text-center">
      <slot></slot>
      <h4>{{ title }}</h4>

      <p v-for="(skill, i) in skills" :key="i">{{ skill }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbiltyBox",
  props: {
    title: String,
    skills: Array,
    index: Number,
  },
  methods: {
    visibilityChanged(isVisible, el) {
      el.target.style.transform = isVisible ? "scale(1)" : "scale(0.9)";
      el.target.style.opacity = isVisible ? "1" : "0";
    },
  },
};
</script>

<style scoped>
.block {
  transition: transform 0.8s;
}

h4 {
  margin-bottom: 20px;
  padding-bottom:5px;
  border-bottom: 2px solid;
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 1px;
  border-image: linear-gradient(
    to right,
    rgba(240, 29, 10, 0) 10%,
    var(--text-color-accent) 50%,
    rgba(240, 29, 10, 0) 90%
  );
  border-image-slice: 5;
}

.ability-block {
  min-height: 300px;
  padding: 20px 0px 0px 0px;
  background: var(--background-color);
  border-radius: 10px;
  margin: 10px;
  -webkit-box-shadow: 1px 0px 20px var(--shadow-color);
  -moz-box-shadow: 1px 0px 20px var(--shadow-color);
  box-shadow: 1px 0px 20px var(--shadow-color);
  height: 80%;
}

.ability-block:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}
</style>