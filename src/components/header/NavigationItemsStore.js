import { ref } from 'vue';

const items = ref(
  [
    { text: "Start", active: false },
    { text: "Über mich", active: false },
    { text: "Resume", active: false },
    { text: "Projekte", active: false },
    { text: "Kontakt", active: false },
  ]
)

function toggle(item) {
  items.value = items.value.map((i) =>
    item.text === i.text ? { ...i, active: true } : { ...i, active: false }
  );
}

function toggleByName(item) {
  items.value = items.value.map((i) =>
    item === i.text ? { ...i, active: true } : { ...i, active: false }
  );
}

export default  {items, toggle, toggleByName}