<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>Projekte</h1>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12">
        <div class="filters">
          <ul>
            <li
              @click="activate(li.id)"
              :class="{ active: active_el == li.id }"
              :data-filter="li.filter"
              v-for="li in projectNav"
              :key="li"
            >
              {{ li.texto }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="filters-content">
      <div class="row" style="position: relative">
        <project-single
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSingle from "./ProjectSingle.vue";

export default {
  components: { ProjectSingle },
  name: "Projects",
  data() {
    return {
      active_el: 1,
      projectNav: [
        { id: "1", texto: "Alle", filter: "all" },
        { id: "2", texto: "Frontend", filter: "frontend" },
        { id: "3", texto: "Backend", filter: "backend" },
        { id: "4", texto: "Java", filter: "java" },
        { id: "5", texto: "C#", filter: "c-sharp" },
        { id: "6", texto: "PHP", filter: "php" },
      ],
      projects: [
        {
          categories: "frontend backend php",
          images: [
            {
              id: 0,
              imgSrc: "wiso/wiso_01.jpg",
              imgPrev: "wiso/wiso_prev_01.jpg",
            },
            {
              id: 1,
              imgSrc: "wiso/wiso_02.jpg",
              imgPrev: "wiso/wiso_prev_02.jpg",
            },
            {
              id: 2,
              imgSrc: "wiso/wiso_03.jpg",
              imgPrev: "wiso/wiso_prev_03.jpg",
            },
            {
              id: 3,
              imgSrc: "wiso/wiso_04.jpg",
              imgPrev: "wiso/wiso_prev_04.jpg",
            },
          ],
          header: "Wiso Trainer",
          url: {
            text: "wiso.butterbach.org",
            href: "https://wiso.butterbach.org",
          },
          description: [
            "Backend: PHP/MySQL ",
            "Frontend: HTML/CSS/Bootstrap",
            "Wiso Trainer mit 410 Prüfungsfragen bezüglich der IHK Abschlussprüfung.",
          ],
        },
        {
          categories: "frontend backend java",
          images: [
            {
              id: 0,
              imgSrc: "horrea/horrea_01.jpg",
              imgPrev: "horrea/horrea_prev_01.jpg",
            },
            {
              id: 1,
              imgSrc: "horrea/horrea_prev_02.jpg",
              imgPrev: "horrea/horrea_prev_02.jpg",
            },
            {
              id: 2,
              imgSrc: "horrea/horrea_03.jpg",
              imgPrev: "horrea/horrea_prev_03.jpg",
            },
            {
              id: 3,
              imgSrc: "horrea/horrea_04.jpg",
              imgPrev: "horrea/horrea_prev_04.jpg",
            },
            {
              id: 4,
              imgSrc: "horrea/horrea_05.jpg",
              imgPrev: "horrea/horrea_prev_05.jpg",
            },
            {
              id: 5,
              imgSrc: "horrea/horrea_06.jpg",
              imgPrev: "horrea/horrea_prev_06.jpg",
            },
            {
              id: 6,
              imgSrc: "horrea/horrea_07.jpg",
              imgPrev: "horrea/horrea_prev_07.jpg",
            },
            {
              id: 7,
              imgSrc: "horrea/horrea_08.jpg",
              imgPrev: "horrea/horrea_prev_08.jpg",
            },
            {
              id: 8,
              imgSrc: "horrea/horrea_09.jpg",
              imgPrev: "horrea/horrea_prev_09.jpg",
            },
            {
              id: 8,
              imgSrc: "horrea/horrea_10.jpg",
              imgPrev: "horrea/horrea_prev_10.jpg",
            },
          ],
          header: "HORREA Zeiterfassung",
          url: { text: "", href: "" },
          description: [
            "Backend: Java Spring/Hibernate/MySQL",
            "Frontend: HTML/CSS/Bootstrap/jQuery",
            "Umfangreiche Zeiterfassung mit Import/Export Funktion und Stoppuhr. Berücksichtigung von Feiertagen, Urlaubsansprüchen und Zeitmodellen. Customizable Design von Website & Export-Layout. Erstellbare Kunden, Projekte, Zeitmodelle. Mandantenfähig und jeweils administrierbar. Responsive (Desktop + Mobile).",
          ],
        },
        
        {
          categories: "frontend backend java",
          images: [
            {
              id: 0,
              imgSrc: "covidlog/clog_01.jpg",
              imgPrev: "covidlog/clog_prev_01.jpg",
            },
            {
              id: 1,
              imgSrc:  "covidlog/clog_02.jpg",
              imgPrev:  "covidlog/clog_prev_02.jpg",
            },
            {
              id: 2,
              imgSrc: "covidlog/clog_03.jpg",
              imgPrev: "covidlog/clog_prev_03.jpg",
            },
            {
              id: 3,
              imgSrc: "covidlog/clog_04.jpg",
              imgPrev: "covidlog/clog_prev_04.jpg",
            },
            {
              id: 4,
              imgSrc: "covidlog/clog_05.jpg",
              imgPrev: "covidlog/clog_prev_05.jpg",
            },
            {
              id: 5,
              imgSrc: "covidlog/clog_06.jpg",
              imgPrev: "covidlog/clog_prev_06.jpg",
            },
            {
              id: 6,
              imgSrc: "covidlog/clog_07.jpg",
              imgPrev: "covidlog/clog_prev_07.jpg",
            },
          ],
          header: "CovidLog",
          url: { text: "", href: "" },
          description: [
            "Backend: Java Spring/Hibernate/MySQL",
            "Frontend: HTML/CSS/Bootstrap/jQuery",
            "Service für Restaurants um die mit Covid-19 einhergehende Pflicht zur erfassung der Kontaktdaten von Gästen. Ein & Austragen über einen ausdruckbaren QR-Code. Daten werden komplett verschlüsselt gespeichert und sind nur vom Restaurant betreiber mittels PIN entschlüsselbar. Erfasste Daten werden regelmäßig & automatisch gelöscht. Im Bedarfsfall können Daten mittels PIN als CSV-Datei herunterladen werden um sie den Behörden auszuhändigen.",

          ],
        },
        {
          categories: "c-sharp",
          images: [
            {
              id: 0,
              imgSrc: "minesweeper/ms_prev_01.png",
              imgPrev: "minesweeper/ms_prev_01.png",
            },
            {
              id: 1,
              imgSrc:  "minesweeper/ms_prev_02.png",
              imgPrev:  "minesweeper/ms_prev_02.png",
            },
            {
              id: 2,
              imgSrc: "minesweeper/ms_prev_03.png",
              imgPrev: "minesweeper/ms_prev_03.png",
            },
            {
              id: 3,
              imgSrc: "minesweeper/ms_prev_04.png",
              imgPrev: "minesweeper/ms_prev_04.png",
            },
            {
              id: 4,
              imgSrc: "minesweeper/ms_05.png",
              imgPrev: "minesweeper/ms_prev_05.png",
            },
            {
              id: 5,
              imgSrc: "minesweeper/ms_06.png",
              imgPrev: "minesweeper/ms_prev_06.png",
            },
          ],
          header: "Minesweeper",
          url: { text: "minesweeper.butterbach.org", href: "https://minesweeper.butterbach.org" },
          description: [
            "Backend: C#/MVVM",
            "Frontend: WPF/XAML",
            "Minesweeper mit Online Highscore.",
          ],
        },
      ],
    };
  },
  methods: {
    activate: function (el) {
      this.active_el = el;

      let filter = this.projectNav.find((x) => x.id === el).filter;

      document.querySelectorAll(".single-project").forEach((element) => {
        if (element.classList.contains(filter)) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    },
  },
};
</script>

<style scoped>
li {
  display: inline-block;
  position: relative;
  z-index: 1;
  margin: 0 14px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  color: var(--text-color) !important;
  cursor: pointer;
}

li::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: var(--text-color-accent);
  height: 2px;
  width: 0;
  z-index: -1;
}

li.active::before,
li:hover::before {
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
</style>