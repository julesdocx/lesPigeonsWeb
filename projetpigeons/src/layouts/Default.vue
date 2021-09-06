<template>
  <div class="layout">
   <Nav/>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Nav from '~/components/Nav.vue'

export default {
    components: { Nav },

};
</script>

<style></style>
