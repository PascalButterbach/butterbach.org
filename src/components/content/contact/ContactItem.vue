<template>
  <a class="d-flex" :href="detail.href">
    <div style="width: 64px">
      <font-awesome-icon
        :class="'fontawesome mx-3'"
        :icon="detail.favicon"
        size="2x"
        :style="{ color: 'var(--text-color-accent)' }"
      />
    </div>
    <div>
      <h4>{{detail.subject}}</h4>
      <p>{{detail.content}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    detail: Object
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}

a h4,
a p{  
  color: var(--text-color) !important; 
}

a:hover h4,
a:hover p{
color: var(--text-color-accent) !important;
}
</style>