<script>
import AppFooter from "../components/AppFooter.vue";
import AppHero from "../components/AppHero.vue";
import AppOverview from "../components/AppOverview.vue";
import AppPartners from "../components/AppPartners.vue";
import AppPrivacyAndTerms from "../components/AppPrivacyAndTerms.vue";

export default {
  components: {
    AppHero,
    AppOverview,
    AppFooter,
    AppPartners,
    AppPrivacyAndTerms,
  },
};
</script>

<template>
  <main>
    <AppHero />
    <AppOverview />
    <AppPartners />
    <AppPrivacyAndTerms />
    <AppFooter />
  </main>
</template>
