<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 100,
      intersection: {
        threshold: 0.2,
      },
    }"
    class="container-fluid"
    :class="{ 'first-container-fluid': first }"
    :id="navigate"
  >
    <slot></slot>
  </div>
</template>

<script>
import store from "./../header/NavigationItemsStore";

export default {
  name: "Section",
  props: {
    color: String,
    navigate: String,
    first: { type: Boolean, default: false },
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) store.toggleByName(this.navigate);
    },
  },
};
</script>

<style scoped>
/* .div {
  background: #fdfdfd;
} */

.container-fluid {
  margin-bottom: 90px;
  padding-top: 130px;
  background-color: var(--background-color);
}

@media only screen and (max-width: 992px) {
  /* .container-fluid {
    padding-top: 380px;
  } */
  .container-fluid {
    padding-top: 115px;
  }
}

.first-container-fluid {
  margin: -100px 0 100px 0;
  padding: 150px 0 0 0;
  min-height: 90vh;
}
</style>