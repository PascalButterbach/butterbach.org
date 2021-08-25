<template>
  <li class="nav-item px-3 py-1">
    <!-- :href="href" -->
    <a
      class="nav-link d-none d-lg-block"
      aria-current="page"
      :class="{ active: item.active }"
      @click="scrollSmoothTo(item.text)"
    >
      {{ item.text }}
    </a>

    <a
      class="nav-link d-lg-none d-block"
      aria-current="page"
      @click="mobileMenuClick(item.text)"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      {{ item.text }}
    </a>
  </li>
</template>


<script>
export default {
  name: "NavigationItem",
  props: {
    item: Object,
  },
  computed: {
    href() {
      return "#" + this.item.text;
    },
  },
  methods: {
    mobileMenuClick(text) {
      let navbarToggle = document.getElementsByClassName("navbar-toggler");
      navbarToggle[0].classList.remove("close");
      this.scrollSmoothTo(text);
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 992px) {
  li {
    display: inline-block;
    position: relative;
    z-index: 1;
    margin: 0 7px;
  }

  li > .nav-link {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: var(--text-color) !important;
  }

  li > .nav-link::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 10px;
    background: var(--text-color-accent);
    height: 2px;
    width: 0;
    z-index: -1;
  }

  .nav-link:hover {
    cursor: pointer;
  }

  .nav-link.active::before,
  .nav-link:hover::before {
    width: 100%;
    animation-timing-function: cubic-bezier(0.58, 1.83, 0.47, 0.42);
    animation-name: reveal;
    animation-duration: 0.5s;
  }

  @keyframes reveal {
    from {
      clip-path: inset(0 0 0 100%);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  li > .nav-link::after {
    position: absolute;
    content: "";
    right: 40%;
    bottom: 7px;
    background: var(--text-color-accent);
    height: 3px;
    width: 0;
    z-index: -1;
  }

  .nav-link.active::after,
  .nav-link:hover::after {
    width: 22px;
    animation-timing-function: ease-out;
    animation-name: reveal;
    animation-duration: 0.3s;
  }
}

@media only screen and (max-width: 992px) {
  li > .nav-link {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: var(--text-color) !important;
  }

  .nav-link:hover {
    cursor: pointer;
  }
}
</style>