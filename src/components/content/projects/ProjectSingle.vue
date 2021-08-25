<template>
  <div
    class="single-project col-lg-4 col-md-6 col-sm-12 all transition"
    :class="project.categories"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      throttle: 50,
      intersection: {
        threshold: 0.2,
      },
    }"
  >
    <div class="project-info-header">
      <div @mouseover="hover = true" @mouseleave="hover = false">
        <h4>
          {{ project.header }}
          <font-awesome-icon
            :class="'fontawesome float-end'"
            :icon="['fas', 'question-circle']"
            size="xs"
            :style="{ color: 'var(--text-color)', margin: '5px 15px 2px 12px' }"
          />
        </h4>
      </div>
      <div class="project-info" :class="{ 'project-info-hover': hover }">
        <p
          v-for="(desc, i) in project.description"
          :key="i"
          :class="{ 'mt-4 ': i == project.description.length - 1 }"
        >
          {{ desc }}
        </p>
      </div>
    </div>

    <div class="position-relative">
      <img
        :src="
          require('@/assets/projects/' + project.images[activeImage].imgPrev)
        "
        class="img-fluid border"
      />

      <div class="overlay transition arrow-nav">
        <div class="arrow" @click="minus">
          <font-awesome-icon
            :class="'fontawesome float-end'"
            :icon="['fas', 'angle-double-left']"
            size="xs"
            :style="{ color: 'var(--text-color-accent)', margin: '5px 15px 2px 12px' }"
          />
        </div>
        <a
          :href="
            require('@/assets/projects/' + project.images[activeImage].imgSrc)
          "
          class="click-fullscreen"
          target="_blank"
        ></a>
        <div class="arrow" @click="plus">
          <font-awesome-icon
            :class="'fontawesome float-end'"
            :icon="['fas', 'angle-double-right']"
            size="xs"
            :style="{ color: 'var(--text-color-accent)', margin: '5px 15px 2px 12px' }"
          />
        </div>
      </div>
    </div>
    <div class="project-info-footer d-flex justify-content-between">
      <!-- <div class="btn btn-sm btn-outline-secondary">GoTO</div>
      <div class="btn btn-sm btn-outline-secondary">GitHub</div> -->
      <a></a>
      <a :href="project.url.href" target="_blank">{{ project.url.text }}</a>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectSingle",
  props: {
    project: Object,
  },
  data() {
    return {
      activeImage: 0,
      hover: false,
    };
  },
  methods: {
    plus() {
      this.activeImage =
        this.activeImage + 1 >= this.project.images.length
          ? 0
          : this.activeImage + 1;
    },
    minus() {
      this.activeImage =
        this.activeImage - 1 < 0
          ? this.project.images.length - 1
          : this.activeImage - 1;
    },
    visibilityChanged(isVisible, el) {
      el.target.style.transform = isVisible ? "scale(1)" : "scale(.9)";
      el.target.style.opacity = isVisible ? "1" : "0";
    },
  },
};
</script>

<style scoped>
.single-project {
  margin-bottom: 30px;
}

.single-project img {
  width: 100%;
}

.single-project .overlay {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.click-fullscreen {
  padding-left: 85px;
  width: calc(100% - 170px);
  padding-right: 85px;
}

.arrow {
  color: #3d3d3d2a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  width: 85px;
}

.arrow:hover {
  font-size: 46px;
  cursor: pointer;
  background: #8b8b8b17;
}

.single-project:hover .arrow-nav {
  opacity: 1;
  visibility: visible;
}

.project-info-header {
  /* border-bottom: 1px solid #00000027; */
  padding: 10px 10px 20px 10px;
  position: relative;
}
.project-info-header h4 {
  color: var(--text-color);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
}

.project-info p {
  font-size: 0.8rem;
  color: var(--text-color-opposite);
}

.project-info {
  position: absolute;
  width: 100%;
  padding: 40px 20px;
  top: -11px;
  left: -11px;
  z-index: 45;
  background: var(--text-color-accent);
  display: none;
  opacity: 0;
}

.project-info-hover {
  transition: all 1.3s linear;
  display: block;
  top: 70px;
  left: 10px;
  opacity: 0.95;
}

.project-info-footer a {
  text-decoration: none;
  padding: 4px;
  color: var(--text-color);
  font-size: 0.9rem;
}
.project-info-footer a:hover,
.project-info-footer a:active {
  text-decoration: none;
  color: var(--text-color-accent);
}

.border {
  border-color: var(--border-color) !important;
}
</style>