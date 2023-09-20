<script>
import AppFooter from "../components/AppFooter.vue";
import AppHero from "../components/AppHero.vue";
import AppOverview from "../components/AppOverview.vue";

export default {
  components: {
    AppHero,
    AppOverview,
    AppFooter,
  },
};
</script>

<template>
  <main>
    <AppHero />
    <AppOverview />
    <AppFooter />
  </main>
</template>
