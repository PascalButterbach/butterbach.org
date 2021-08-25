<template>
  <div class="svg-wrapper">
    <p class="percent">{{ obj.percent }}%</p>
    <svg
      class="transition"
      height="100"
      width="100"
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 50,
        intersection: {
          threshold: 0.2,
        },
      }"
    >
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="var(--text-color-accent)"
        stroke-width="20"
        fill="#ffffff00"
      />
    </svg>
    <p>{{ obj.name }}</p>
  </div>
</template>

<script>
export default {
  name: "ResumeSoftSkill",
  props: {
    obj: Object,
  },
  data: () => ({
    width: 0,
  }),
  methods: {
    visibilityChanged(isVisible, el) {
      el.target.style.strokeDashoffset = isVisible
        ? 240 - this.obj.percent * 2.4
        : "240";
    },
  },
};
</script>

<style scoped>
.svg-wrapper {
  width: 165px;
  height: 135px;
  display: block;
  padding: 0px;
  margin: 60px 30px 0 0;
  text-align: center;
  position: relative;
}

.percent {
  position: absolute;
  left: 72px;
  top: 40px;
}

svg {
  /* background: black; */
  transform: rotate(-90deg);
  transform: translateY(-1px);
  stroke-dasharray: 240; /* (2PI (3.14....) * 40px) */
  stroke-dashoffset: 240;
}

.svg-wrapper:hover circle,
.svg-wrapper:hover  {
  stroke: #c7c7c7;
  stroke-width: 23px;
  transition: all .5s;
}
</style>