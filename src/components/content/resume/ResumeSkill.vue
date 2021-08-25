<template>
  <div class="mb-2 ps-0 skill">
    <p>
      {{ obj.name }}
    </p>

    <div class="bar">
      <div
        class="barprogress barcolor"
        :style="style"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 50,
          intersection: {
            threshold: 0.2,
          },
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeSkill",
  props: {
    obj: Object,
  },
  data: () => ({
    width: 0,
  }),
  methods: {
    visibilityChanged(isVisible) {
      this.width = isVisible ? this.obj.percent : 0;
    },
  },
  computed: {
    style() {
      return "width:" + this.width + "%";
    },
  },
};
</script>

<style scoped>
h4 {
  margin-bottom: 1px;
  font-size: 0.9rem;
  font-weight: 700;
}

.bar {
  width: 100%;
  height: 22px;
  border: 1px solid var(--text-color-accent);
  background: transparent;
}

.barprogress {
  height: 22px;
  margin: -1px;
  color: transparent;
  transition: width 1.3s;
}

.barcolor {
  background: var(--text-color-accent);
}

.skill:hover .barcolor {
  background: #c7c7c7;
  transition: all .5s;
}
.skill:hover .bar {
  border-color: #c7c7c7;
  transition: all .5s;
}
</style>