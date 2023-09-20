<script>
import AppFooter from "../components/AppFooter.vue";
import AppHero from "../components/AppHero.vue";
import AppOverview from "../components/AppOverview.vue";
import AppPartners from "../components/AppPartners.vue";

export default {
  components: {
    AppHero,
    AppOverview,
    AppFooter,
    AppPartners,
  },
};
</script>

<template>
  <main>
    <AppHero />
    <AppOverview />
    <AppPartners />
    <AppFooter />
  </main>
</template>
