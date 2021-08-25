<template>
  <div class="row align-content-center">
    <div class="col-lg-4 offset-lg-1 col-md-12 mb-5">
      <div class="row">
        <AbilityBox
          v-for="(ability, i) in abilitys"
          :key="i"
          :title="ability.title"
          :skills="ability.skills"
          :index="i"
        >
          <font-awesome-icon
            :icon="ability.favicon"
            size="3x"
            :style="{ color: 'var(--text-color-accent)', margin: '10px' }"
          />
        </AbilityBox>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 order-first order-lg-last mb-5">
      <h1>Über mich</h1>
      <div class="container px-lg-5 pt-0">
        <p class="m-lg-5">
          {{ about }}
        </p>
        <ul class="my-5 mx-lg-5 about-list">
          <li v-for="(pd, i) in personalData" :key="i">
            <span>{{ pd[0] }}</span>
            <span>{{ pd[1] }}</span>
          </li>
        </ul>
        <button @click="scrollSmoothTo('Kontakt')" class="butti-btn mb-5 float-end">Fragen?</button>
      </div>
    </div>

  </div>
</template>

<script>
import AbilityBox from "./AbilityBox";

export default {
  name: "About",
  components: {
    AbilityBox,
  },
  data() {
    return {
      about:
        "Ich bin frisch ausgebildeter Fachinformatiker für Anwendungsentwicklung mit einer großen Leidenschaft für die IT. " +
        "Frontend, Backend oder beides: egal! Reale Probleme mit Software lösen, " +
        "ein paar Coding Challenges um die Hirnzellen warm zu halten " +
        "und abschließend eine Runde auf dem Rad durch die Natur - der perfekter Tag!",
      personalData: [
        ["Name", "Pascal Butterbach"],
        ["Geburtsdatum", "18.10.1989"],
        ["Ort", "Bielefeld (NRW)"],
        ["PLZ", "33609"],
        ["Email", "pascal(a)butterbach.org"],
        ["Mobil", "01590 | 8493743"],
      ],
      abilitys: [
        {
          title: "Frontend",
          skills: [
            "HTML / CSS",
            "Responsive",
            "Vue.js",
            "Thymeleaf",
            "JavaScript / jQuery",
            "Bootstrap / Halfmoon",
          ],
          favicon: ["fas", "tv"],
        },
        {
          title: "Backend",
          skills: [
            "Java / Java Spring",
            "Hibernate (JPA)",
            "C# .NET (WPF / XAML)",
            "PHP",
          ],
          favicon: ["fas", "cogs"],
        },
        {
          title: "Database",
          skills: [
            "Database normalization",
            "Entity-Relationship Diagrams",
            "SQL",
            "MySQL / Mariadb",
          ],
          favicon: ["fas", "database"],
        },
        {
          title: "Developement",
          skills: ["UML", "MVC, MVVM", "SOLID, KISS, DRY", "Design Patterns"],
          favicon: ["fas", "envelope"],
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  height: 300px;
}

ul {
  list-style: none;
  letter-spacing: 1px;  
  color: var(--text-color);
}


.about-list li span:first-child {
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  min-width: 130px;
  
}
.about-list li span:first-child::after {
  content: ":";  
}
</style>