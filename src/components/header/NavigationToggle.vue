<template>
  <div
    class="menu-btn navbar-toggler"
    @click="toggle"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <div class="btn-line"></div>
    <div class="btn-line"></div>
    <div class="btn-line"></div>
  </div>
</template>

<script>
export default {
  name: "NavigationToggle",

  methods: {
    toggle(el) {
      const menuBtn = el.currentTarget;
      const showMenu = menuBtn.classList.contains("close");
      if (!showMenu) {
        menuBtn.classList.add("close");
      } else {
        menuBtn.classList.remove("close");
      }
    },
  },
};
</script>

<style scoped>
.menu-btn {
  position: relative;
  border: var(--text-color-accent) solid 2px !important;
  border-radius: 5px;
  padding: 8px 6px 3px 6px;
  z-index: 3;
  right: 0px;
  top: 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
.menu-btn .btn-line {
  width: 22px;
  height: 2px;
  margin: 0 0 5px 0;
  background: var(--text-color-accent);
  transition: all 0.5s ease-out;
}
.menu-btn.close {
  transform: rotate(180deg);
}
.menu-btn.close .btn-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-btn.close .btn-line:nth-child(2) {
  opacity: 0;
}
.menu-btn.close .btn-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
</style>