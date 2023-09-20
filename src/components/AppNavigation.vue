<template>
  <nav>
    <RouterLink to="/">
      <div class="logo">
        <span class="white">get</span>
        <span class="color-text">linked</span>
      </div>
    </RouterLink>
    <button type="button">
      <IconMenu />
    </button>
    <ul>
      <li><RouterLink to="/">Timeline</RouterLink></li>
      <li><RouterLink to="/">Overview</RouterLink></li>
      <li><RouterLink to="/">FAQs</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <li><RouterLink to="/register" class="main">Register</RouterLink></li>
    </ul>
  </nav>
</template>

<script>
import IconMenu from "./icons/IconMenu.vue";

export default {
  name: "app-navigation",
  components: {
    IconMenu,
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  padding: 1.75rem 3rem 1.3125rem;
  border-block-end: 1px solid #ffffff2e;
  background-color: var(--color-background);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav .logo {
  font-family: var(--font-secondary);
  line-height: 1.2;
  color: #fff;
}

nav .logo span {
  font-weight: 700;
}

nav button {
  margin-inline-start: auto;
  background: none;
  border: none;
  outline: 0;
}

nav ul {
  display: none;
}

@media screen and (min-width: 26.25rem) {
  .logo {
    font-size: 1.25rem;
  }
}

@media screen and (min-width: 45rem) {
  nav {
    padding-inline: 3rem;
  }
}

@media screen and (min-width: 62rem) {
  nav .logo {
    font-size: 2.25rem;
    line-height: 1.2;
    color: #fff;
  }

  nav button {
    display: none;
  }

  nav ul {
    margin-inline-start: auto;
    color: #fff;
    display: flex;
    gap: 3.5rem;
  }

  nav ul li:last-of-type {
    margin-inline-start: 4.0625rem;
  }
}

@media screen and (min-width: 75rem) {
  nav {
    padding-inline: 8rem;
  }
}
</style>
