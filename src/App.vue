<template>
  <Loading v-if="preloading" />
  <div v-else>
    <Header />
    <Section :first="true" :navigate="'Start'">
      <Home />
    </Section>
    <SectionDivider :rotate="-1" :topDown="true" />
    <Section :navigate="'Über mich'">
      <About />
    </Section>
    <SectionDivider :rotate="-1" :topDown="false" />
    <Section :navigate="'Resume'">
      <Resume />
    </Section>
    <SectionDivider :rotate="0" :topDown="true" />
    <Section :navigate="'Projekte'">
      <Projects />
    </Section>
    <SectionDivider :rotate="1" :topDown="false" />
    <Section :navigate="'Kontakt'">
      <Contact />
    </Section>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Home from "./components/content/home/Home.vue";
import About from "./components/content/about/About.vue";
import Resume from "./components/content/resume/Resume.vue";
import Section from "./components/content/Section.vue";
import SectionDivider from "./components/content/SectionDivider.vue";
import Projects from "./components/content/projects/Projects.vue";
import Contact from "./components/content/contact/Contact.vue";
import Footer from "./components/footer/Footer.vue";
import Loading from "./components/Loading.vue";
export default {
  components: {
    Header,
    Home,
    About,
    Section,
    SectionDivider,
    Resume,
    Projects,
    Contact,
    Footer,
    Loading,
  },
  data() {
    return {
      preloading: true,
    };
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.preloading = false;
      }, 250);
    });
  },
};
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
