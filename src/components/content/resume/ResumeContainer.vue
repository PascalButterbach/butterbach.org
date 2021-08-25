<template>
  <div class="container p-lg-5 p-1 pt-0 mb-5">
    <div
      :id="containerId"
      v-observe-visibility="{
        callback: visibilityChangedResume,
        throttle: 100,
        intersection: {
          threshold:0.1,
        },
      }"
    >
      <h2 class="p-3 mb-3">{{ containerId }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import storeResume from "./ResumeNavigationItemStore";

export default {
  name: "ResumeContainer",
  props: {
    containerId: String,
  },
  methods: {
    visibilityChangedResume(isVisible, entry) {
      if (isVisible) storeResume.toggleResByName(entry.target.id);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  background: var(--text-color-accent);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1px;
  letter-spacing: 2px;
  transform: rotate(-3deg);
  color: var(--text-color-opposite);
  display: inline-block;
  transition: ease 0.5s;
}

h2:hover {
  transform: scale(1.1) rotate(-3deg);
}
</style>
