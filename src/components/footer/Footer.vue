<template>
  <div class="container-fluid">
    <div class="row justify-content-center p-2">
      <div class="col-lg-10">
        <div>
          <div class="text-center">
            <a @click="scrollSmoothTo('Start')" class="logo">
              <img alt="logo" />
            </a>
          </div>
          <div class="text-center pb-5">
            <!-- <h4>Social Media</h4> -->
            <a href="mailto:pascal@butterbach.org"
              ><font-awesome-icon
                :class="'fontawesome'"
                :icon="['fas', 'envelope']"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '10px' }"
            /></a>
            <a
              href="https://www.linkedin.com/in/pascal-butterbach/"
              target="_blank"
              ><font-awesome-icon
                :class="'fontawesome'"
                :icon="['fab', 'linkedin']"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '10px' }"
            /></a>
            <a href="https://github.com/PascalButterbach" target="_blank"
              ><font-awesome-icon
                :class="'fontawesome'"
                :icon="['fab', 'github']"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '10px' }"
            /></a>
            <a href="https://twitter.com/pascal_bbach" target="_blank"
              ><font-awesome-icon
                :class="'fontawesome'"
                :icon="['fab', 'twitter']"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '10px' }"
            /></a>
          </div>

          <div class="text-center">
            <p>
              Copyright © 2021 Pascal Butterbach
              <a @click="showImpressum = !showImpressum">Impressum</a>
            </p>
          </div>
        </div>
      </div>
      <div v-if="showImpressum" class="container col-lg-2 p-3">
        <h3>Impressum</h3>
        <h4>Angaben gemäß § 5 TMG</h4>
        <p>
          Pascal Butterbach <br />
          Bernhard-Kramer-Straße 11 <br />
          33609 Bielefeld
        </p>
        <h4>Kontakt</h4>
        <p>
          Telefon: 01590 8493743 <br />
          E-Mail: pascal@butterbach.org
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    showImpressum: false,
  }),
};
</script>

<style scoped>
div.container-fluid {
  background: var(--background-color-header);
  -webkit-box-shadow: 1px 0px 10px var(--shadow-color);
  -moz-box-shadow: 1px 0px 10px var(--shadow-color);
  box-shadow: 1px 0px 10px var(--shadow-color);
  transition: all 0.2s linear;
}

.logo {
  content: var(--logo);
  width: 150px;
  margin: 20px;
}

.logo:hover {
  transform: scale(-1, -1);
}

.fontawesome:hover{
  color: var(--text-color) !important;
}
</style>