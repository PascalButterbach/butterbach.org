<template>
  <Navigation />
  <div class="sidebar">
    <button
      @click="scrollSmoothTo('Start')"
      aria-label="Toggle themes dm-toggle"
      class="dm-toggle"
    >
      <font-awesome-icon
        :icon="['fas', 'arrow-up']"
        size="2x"
        :style="{
          color: 'var(--text-color-opposite)',
          margin: '5px 15px 2px 12px',
        }"
      />
    </button>
    <button @click="toggleTheme" aria-label="Toggle themes" class="dm-toggle">
      <font-awesome-icon
        v-if="this.theme == 'darkMode'"
        :icon="['fas', 'moon']"
        size="2x"
        :style="{
          color: 'var(--text-color-opposite)',
          margin: '5px 15px 2px 12px',
        }"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'moon']"
        size="2x"
        :style="{
          color: 'var(--text-color-opposite)',
          margin: '5px 15px 2px 12px',
        }"
      />
    </button>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  components: {
    Navigation,
  },
  data() {
    return {
      theme: "",
    };
  },
  mounted(){    
    this.theme = localStorage.getItem("theme");
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  z-index: 9001;
  right: 0 !important;
  bottom: 1.5rem !important;
  display: table;
  width: 5px;
  overflow: visible;
}

.dm-toggle {
  min-width: 65px;
  display: table-cell;
  margin: 4px 0;
  padding: 1px 0px 1px 1px;
  border-radius: 10px 0px 0px 10px;
  background: var(--background-color-toggle) !important;
  transform: translateX(10px);
  border: none !important;
}
.dm-toggle:hover {
  transform: translateX(0px);
  transition: all 0.5s ease;
}
</style>


 