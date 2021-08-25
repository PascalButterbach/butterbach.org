<template>
  <div class="test d-none d-lg-block">
    <div
      class="test-inner"
      :class="[topDown ? 'gradient' : 'gradient-reverse']"
      :style="rotation"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SectionDivider",
  props: {
    topDown: Boolean,
    rotate: Number,
  },
  computed: {
    rotation: function () {
      return "transform: rotate(" + this.rotate + "deg);";
    },
  },
};
</script>

<style scoped>


.test {
  height: 120px;
  position: relative;
  margin: auto;
  overflow: hidden;
  
}

.test-inner {
  display: block;
  height: 85px;
  width: 200%;
  position: absolute;
  top: 15%;
  left: -50%;
}

.gradient {
  background: linear-gradient(
    180deg,
    var(--section-gradient-from) 0%,
    var(--section-gradient-to) 100%
  );
}
.gradient-reverse {
  background: linear-gradient(
    180deg,
    var(--section-gradient-to) 0%,
    var(--section-gradient-from) 100%
  );
}

.rotate {
  transform: rotate(-1deg);
}

.rotate-reverse {
  transform: rotate(1deg);
}
</style>