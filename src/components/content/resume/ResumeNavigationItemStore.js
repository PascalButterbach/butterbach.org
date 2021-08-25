import { ref } from 'vue';

const items = ref(
    [
        {text: "Ausbildung", active: true},
        {text: "Erfahrung", active: false},
        {text: "Skills",  active: false},
        {text: "Zertifikate", active: false}
    ]
)

function toggleResByName(item) {
  items.value = items.value.map((i) =>
    item === i.text ? { ...i, active: true } : { ...i, active: false }
  );
}

export default  {items, toggleResByName}