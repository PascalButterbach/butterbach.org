<template>
  <div class="row align-content-center">
    <div class="col-12 col-lg-9">
      <h1>Resume</h1>
      <div class="container p-0 m-0 p-lg-5 m-lg-5">
        <resume-container :containerId="items[0].text">
          <div
            v-for="(xp, i) in education"
            :key="i"
            class="rounded-2 resume my-1 py-1 m-lg-3 p-lg-4 d-flex transition"
            v-observe-visibility="{
              callback: visibilityChangedCert,
              throttle: 50,
              intersection: {
                threshold: 0.2,
              },
            }"
          >
            <div>
              <font-awesome-icon
                :class="'fontawesome'"
                :icon="xp.favicon"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '2px 15px 2px 12px' }"
              />
            </div>
            <div>
              <span class="date">{{ xp.time }}</span>
              <h3>{{ xp.role }}</h3>
              <span>{{ xp.location }}</span>
              <span>{{ xp.company }}</span>
              <p>{{ xp.description }}</p>
            </div>
          </div>
        </resume-container>

        <resume-container :containerId="items[1].text">
          <div
            v-for="(ed, i) in experience"
            :key="i"
            class="rounded-2 resume my-1 py-1 m-lg-3 p-lg-4 d-flex transition"
            v-observe-visibility="{
              callback: visibilityChanged,
              throttle: 50,
              intersection: {
                threshold: 0.2,
              },
            }"
          >
            <div>
              <font-awesome-icon
                :class="'fontawesome'"
                :icon="ed.favicon"
                size="3x"
                :style="{ color: 'var(--text-color-accent)', margin: '2px 15px 2px 12px' }"
              />
            </div>
            <div>
              <span class="date">{{ ed.time }}</span>
              <h3>{{ ed.role }}</h3>
              <span>{{ ed.location }}</span>
              <span>{{ ed.company }}</span>
              <p>{{ ed.description }}</p>
            </div>
          </div>
        </resume-container>

        <resume-container :containerId="items[2].text">
          <div class="rounded-2 my-1 py-1 m-lg-3 p-lg-4 d-flex">
            <div
              class="
                row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5
                m-0
              "
            >
              <resume-skill
                v-for="(skill, i) in skills"
                :key="i"
                :obj="skill"
              />
            </div>
          </div>
          <div class="rounded-2 my-1 py-1 m-lg-3 p-lg-4 d-flex">
            <div
              class="
                row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4
                m-0
              "
            >
              <resume-soft-skill
                v-for="(softSkill, i) in softSkills"
                :key="i"
                :obj="softSkill"
              />
            </div>
          </div>
        </resume-container>

        <resume-container :containerId="items[3].text">
          <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 m-0">
            <div v-for="(cf, i) in certificates" :key="i" class="px-0">
              <a
                class="
                  rounded-2
                  resume
                  my-1
                  py-1
                  m-lg-1
                  p-lg-2
                  d-flex
                  transition
                "
                :href="cf.url"
                target="_blank"
                v-observe-visibility="{
                  callback: visibilityChangedCert,
                  throttle: 50,
                  intersection: {
                    threshold: 0.2,
                  },
                }"
              >
                <div>
                  <font-awesome-icon
                    :class="'fontawesome'"
                    :icon="cf.favicon"
                    size="3x"
                    :style="{ color: 'var(--text-color-accent)', margin: '2px 15px 2px 12px' }"
                  />
                </div>
                <div>
                  <span class="date">{{ cf.time }}</span>
                  <h3>{{ cf.role }}</h3>
                  <span class="d-block">{{ cf.company }}</span>
                </div>
              </a>
            </div>
          </div>
        </resume-container>
      </div>
    </div>
    <div class="col-lg-3 d-lg-block d-none">
      <div
        class="text-center align-middle"
        style="position: sticky; top: 100px"
      >
        <ul>
          <li
            v-for="(item, i) in items"
            :key="i"
            :class="{ active: item.active }"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import storeResume from "./ResumeNavigationItemStore";

import ResumeSkill from "./ResumeSkill";

import ResumeSoftSkill from "./ResumeSoftSkill";

import ResumeContainer from "./ResumeContainer";

export default {
  name: "Resume",
  components: {
    ResumeContainer,
    ResumeSkill,
    ResumeSoftSkill,
  },
  data: () => ({
    items: storeResume.items,
    skills: [
      { name: "HTML 5", percent: 95 },
      { name: "CSS 3", percent: 75 },
      { name: "JavaScript", percent: 60 },
      { name: "jQuery", percent: 70 },
      { name: "Bootstrap", percent: 80 },
      { name: "Halfmoon", percent: 80 },
      { name: "Vue.js", percent: 65 },
      { name: "PHP", percent: 60 },
      { name: "C#", percent: 80 },
      { name: "WPF", percent: 70 },
      { name: "Java", percent: 80 },
      { name: "Java Spring", percent: 85 },
      { name: "Hibernate / JPA", percent: 80 },
      { name: "SQL", percent: 65 },
      { name: "GIT", percent: 75 },
      { name: "JIRA", percent: 90 },
      { name: "SCRUM", percent: 80 },
      { name: "UML", percent: 80 },
      { name: "Azure (CI/CD)", percent: 40 },
    ],
    softSkills: [
      { name: "Auffassungsgabe", percent: 95 },
      { name: "Analytisches Denken", percent: 95 },
      { name: "Teamfähigkeit", percent: 90 },
      { name: "Kreativität", percent: 80 },
      { name: "Flexibilität", percent: 90 },
      { name: "Kommunikation", percent: 85 },
      { name: "Lernbereitschaft", percent: 95 },
      { name: "Kritikfähigkeit", percent: 95 },
      { name: "Motivation", percent: 95 },
    ],
    experience: [
      {
        favicon: ["fas", "briefcase"],
        time: "08/2020 - 03/2021",
        role: "Software Developer / Praktikant",
        location: "Bielefeld",
        company: "WAVE Solutions GmbH",
        description:
          "Fullstack Entwicklung nach SCRUM in Java mit Spring MVC, Projektplanung, Datenbankdesign, responsives Webdesign",
      },
    ],
    education: [
      {
        favicon: ["fas", "graduation-cap"],
        time: "08/2019 – 06/2021",
        role: "Umschulung",
        location: "Bielefeld",
        company: "IBB, Institut für Berufliche Bildung",
        description:
          "Abschluss: Fachinformatiker für Anwendungsentwicklung, Gesamtnote: 2 (84/100 Punkte)",
      },
      {
        favicon: ["fas", "graduation-cap"],
        time: "02/2016 – 07/2016",
        role: "Schulbildung",
        location: "Bielefeld",
        company: "Abendrealschule",
        description: "Abschluss: Hauptschulabschluss, Gesamtnote 1.2",
      },
    ],
    certificates: [
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Vue.js lernen.pdf",
        time: "06/2021",
        role: "Vue.js",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Grundlagen der Programmierung Clean Code und SOLID .pdf",
        time: "11/2020",
        role: "Clean Code und SOLID",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Spring Boot Grundkurs.pdf",
        time: "11/2020",
        role: "Spring Boot Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Java Grundkurs 2 Programmiertechniken erweiterte OOPKonzepte API.pdf",
        time: "08/2020",
        role: "Java Grundkurs 2",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Java Grundkurs 1 Sprachkonzepte und objektorientierte Programmierung.pdf",
        time: "08/2020",
        role: "Java Grundkurs 1",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Spring Framework Grundkurs.pdf",
        time: "08/2020",
        role: "Spring Framework Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Datenbankdesign mit der MySQL Workbench.pdf",
        time: "07/2020",
        role: "Datenbankdesign mit der MySQL Workbench",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Datenbankgrundlagen Tabellendesign fur relationale Datenbanken 2014.pdf",
        time: "07/2020",
        role: "Tabellendesign für relationale Datenbanken",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Datenbankprogrammiererin werden.pdf",
        time: "07/2020",
        role: "Datenbank-Programmierer:in",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Grundlagen der Programmierung Datenbanken.pdf",
        time: "07/2020",
        role: "Grundlagen: Datenbanken",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_MariaDB Grundkurs.pdf",
        time: "07/2020",
        role: "MariaDB Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_MySQL fur Profis.pdf",
        time: "07/2020",
        role: "MySQL fur Profis",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_MySQLAdministration Grundkurs.pdf",
        time: "07/2020",
        role: "MySQL Administration Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_MySQLDatenbanken professionell einrichten und einsetzen.pdf",
        time: "07/2020",
        role: "MySQL DB einrichten & einsetzen",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Oracle PLSQL Grundkurs.pdf",
        time: "07/2020",
        role: "Oracle PLSQL Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_SQL Grundkurs 2 Aufgaben und Losungen.pdf",
        time: "07/2020",
        role: "SQL Grundkurs 2",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_SQL Grundkurs 1 Die Sprache erlernen.pdf",
        time: "07/2020",
        role: "SQL Grundkurs 1",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_SQL Server 2008 R2 Programmierung Grundkurs.pdf",
        time: "07/2020",
        role: "SQL Server 2008 Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_SQL Server Sicherheit fur Entwicklerinnen.pdf",
        time: "07/2020",
        role: "SQL Server Sicherheit",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_SQL Datenbankabfragen beschleunigen.pdf",
        time: "07/2020",
        role: "SQL Abfragen beschleunigen",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_CProgrammiererin werden.pdf",
        time: "06/2020",
        role: "C#-Programmierer:in",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_.NET 4.5 Asynchrone Programmierung.pdf",
        time: "06/2020",
        role: "NET Asynchrone Programmierung",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_.NETProgrammierung Multithreading.pdf",
        time: "06/2020",
        role: ".NET Multithreading",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_C Events und Delegates.pdf",
        time: "06/2020",
        role: "C# Events und Delegates",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_C Generics.pdf",
        time: "06/2020",
        role: "C# Generics",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_C Microsoft Code Contracts.pdf",
        time: "06/2020",
        role: "C# Code Contracts",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_C Test Driven Development.pdf",
        time: "06/2020",
        role: "C# TDD",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Grundlagen der Programmierung Basiswissen.pdf",
        time: "06/2020",
        role: "Programmierung: Basiswissen",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Grundlagen der Programmierung Objektorientiertes Design.pdf",
        time: "06/2020",
        role: "Objektorientiertes Design",
        company: "LinkedIn",
      },
      {
        favicon: ["fab", "linkedin"],
        url: "/cert/Abschlusszertifikat_Xamarin Grundkurs.pdf",
        time: "06/2020",
        role: "Xamarin Grundkurs",
        company: "LinkedIn",
      },
      {
        favicon: ["fas", "certificate"],
        url: "https://www.sololearn.com/Certificate/1080-9737110/pdf/",
        time: "06/2020",
        role: "C# Fundamentals",
        company: "SoloLearn",
      },
      {
        favicon: ["fas", "certificate"],
        url: "https://www.sololearn.com/Certificate/1023-9737110/pdf/",
        time: "09/2019",
        role: "CSS Fundamentals",
        company: "SoloLearn",
      },
      {
        favicon: ["fas", "certificate"],
        url: "https://www.sololearn.com/Certificate/1014-9737110/pdf/",
        time: "08/2019",
        role: "HTML Fundamentals",
        company: "SoloLearn",
      },
      {
        favicon: ["fas", "certificate"],
        url: "https://www.sololearn.com/Certificate/1059-9737110/pdf/",
        time: "04/2019",
        role: "Php Fundamentals",
        company: "SoloLearn",
      },
      {
        favicon: ["fab", "free-code-camp"],
        url: "https://www.freecodecamp.org/certification/pascal.butterbach/responsive-web-design",
        time: "08/2019",
        role: "Responsive Webdesign",
        company: "freeCodeCamp",
      },
      {
        favicon: ["fas", "certificate"],
        url: "https://www.sololearn.com/Certificate/1060-9737110/pdf/",
        time: "05/2019",
        role: "SQL Fundamentals",
        company: "SoloLearn",
      },
    ],
  }),
  methods: {
    visibilityChanged(isVisible, el) {
      this.fancy(isVisible, el);
    },
    visibilityChangedCert(isVisible, el) {
      this.fancy(isVisible, el);
    },
    fancy(isVisible, el) {
      el.target.style.transform = isVisible ? "scale(1)" : "scale(.9)";
      el.target.style.opacity = isVisible ? "1" : "0";
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
}
ul {
  list-style: none;
  color: var(--text-color);
  display: inline-block;
}
li {
  text-transform: uppercase;
  font-weight: 500;
  padding-right: 40%;
  text-align: right;
  font-weight: 600;
  position: relative;
}
.active {
  color: var(--text-color-accent);
  transition: ease 0.5s;
}
.active::after {
  content: "";
  position: absolute;
  background: var(--text-color-accent);
  top: 0px;
  left: -45px;
  width: 10px;
  height: 22px;
  display: inline-block;
  animation: fadeIn ease-in 0.5s;
  transition-timing-function: cubic-bezier(0.58, 1.83, 0.47, 0.42);
}
.active::before {
  content: "";
  position: absolute;
  background: var(--text-color-accent);
  top: 6px;
  left: -40px;
  width: 20px;
  height: 10px;
  display: inline-block;
  animation: fadeIn ease-in 0.5s;
  transition-timing-function: cubic-bezier(0.58, 1.83, 0.47, 0.42);
}

@keyframes fadeIn {
  0% {
    transform: translateX(-90%);
  }
  50% {
    transform: translateX(-30%);
  }
  100% {
    transform: translateX(0%);
  }
}

h3 {
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

span {
  color: var(--text-color);
}

span::after {
  content: " ";
}

.resume {
  background: var(--background-color-offset);
  border-radius: 10px !important;
}

.date {
  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
  color: var(--text-color);
}

.resume:hover .date,
.resume:hover h3,
.resume:hover p,
.resume:hover .fontawesome,
.resume:hover div:nth-child(2) span{
  color: var(--text-color-opposite) !important;
  transition: ease 0.5s;
}

.resume:hover {
  background: var(--text-color-accent);
  transition: ease 0.5s;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a {
  font-size: 0.9rem;
  color: black;
}
a:hover {
  color: white;
}
</style>