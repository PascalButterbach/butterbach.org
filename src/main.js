import App from './App.vue';
import { createApp } from 'vue';

import { ObserveVisibility } from 'vue-observe-visibility';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faFreeCodeCamp, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faTv, faCogs, faDatabase, faEnvelope, faBriefcase, faGraduationCap,
  faCertificate, faMobile, faQuestionCircle, faAngleDoubleLeft, faAngleDoubleRight,
  faMoon, faArrowUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

import './assets/custom.scss';
import './assets/style.css';
import './assets/variables.css';

const app = createApp(App);

app.use(VueAxios, axios);

library.add(faLinkedin, faTv, faCogs, faDatabase, faEnvelope, faBriefcase, faGraduationCap, faCertificate, faFreeCodeCamp
  , faMobile, faDiscord, faGithub, faTwitter, faQuestionCircle, faAngleDoubleLeft, faAngleDoubleRight, faMoon, faArrowUp);

app.component('font-awesome-icon', FontAwesomeIcon);


app.mixin({
  methods: {
    scrollSmoothTo(elementId) {
      let element = document.getElementById(elementId);
      let scrollTop = window.pageYOffset || element.scrollTop

      const headerOutsideIframe = window.parent.document.getElementById('navbarSupportedContent').clientHeight
      let finalOffset = element.getBoundingClientRect().top + scrollTop - headerOutsideIframe

      if (elementId == "Start")
        finalOffset = 0

      window.parent.scrollTo({
        top: finalOffset,
        behavior: "smooth"
      })
    }
  }
})

app.directive('observe-visibility', {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});



app.mount('#app');
