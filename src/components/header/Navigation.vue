<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    :class="{'sticky-top' : sticky}"
    v-on:scroll.passive="scrolling"
    id="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" @click="scrollSmoothTo('Start')">
        <img
          alt=""
          height="40"
          class="d-inline-block logo"
        />
        <!-- <span class="ms-1">Pascal Butterbach</span> -->
      </a>
      <navigation-toggle />

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
          <navigation-item v-for="(item, i) in items" :key="i" :item="item" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";
import NavigationToggle from "./NavigationToggle.vue";

import store from "./NavigationItemsStore";

export default {
  name: "Navigation",
  components: {
    NavigationItem,
    NavigationToggle,
  },
  data: () => ({
    items: store.items,
    sticky: false,
  }),
  mounted() {
    document.addEventListener("scroll", this.scrolling);
  },
  methods: {
    scrolling() {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600 ||
        window.innerWidth <= 992
      ) {
        //document.getElementById("navbar").style.padding = "0px";
        this.sticky = true;
      } else {
        ///document.getElementById("navbar").style.padding = "18px";
        this.sticky =  false;
      }
    },
  },
};
</script>

<style scoped>
nav {
  background: var(--background-color-header);
  -webkit-box-shadow: 0px 1px 10px var(--shadow-color);
  -moz-box-shadow: 0px 1px 10px var(--shadow-color);
  box-shadow: 0px 1px 10px var(--shadow-color);
  transition: all 0.3s linear;
}

/* span {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: var(--text-color) !important;
  font-weight: 900;
} */
.logo{
  content: var(--logo);
}
img:hover {
  transform: scale(-1, -1);
}
</style>