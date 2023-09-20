<script>
import AppTimer from "./AppTimer.vue";

export default {
  components: {
    AppTimer,
  },
};
</script>

<template>
  <section class="hero">
    <div class="h2-ctr">
      <h2>Igniting a Revolution in HR Innovation</h2>
      <div class="line"></div>
    </div>

    <div class="flex-ctr">
      <div class="col-1">
        <div class="title-ctr">
          <h1>
            getlinked Tech <br />
            Hackathon <span class="color-text"> 1.0 </span>
            <img src="../assets/images/light-bulb.webp" alt="" class="light" />
            <img src="../assets/images/chain.webp" alt="" class="chain" />
            <img src="../assets/images/bang.webp" alt="" class="bang" />
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <RouterLink to="/register" class="main">Register</RouterLink>
        </div>

        <AppTimer></AppTimer>
      </div>
      <div class="col-2">
        <div class="images-ctr">
          <img src="../assets/images/man-wearing-smart-glasses.webp" alt="" />
          <img src="../assets/images/lights.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* .hero {
  border-block-end: 1px solid #ffffff2e;
} */

.hero .h2-ctr {
  width: fit-content;
  margin-inline: auto;
  margin-block-end: 2.6875rem;
}

.hero h2 {
  margin-block-start: 2rem;
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
}

.hero .line {
  border: 3px solid var(--color-primary);
  width: 7.1875rem;
  margin-inline-start: auto;
}

.hero .flex-ctr {
  display: flex;
  flex-flow: column wrap;
}

.hero .flex-ctr .col-1,
.hero .flex-ctr .col-2 {
  width: 100%;
}

.hero .flex-ctr .col-1 {
  margin-block-end: 0.75rem;
  text-align: center;
}

.hero .flex-ctr .col-2 {
  height: 367.5px;
}

.hero .title-ctr {
  width: 19.0625rem;
  margin-inline: auto;
  margin-block-end: 0.875rem;
  position: relative;
}

.hero .title-ctr h1 {
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: 0;
  margin-block-end: 0.5rem;
  white-space: nowrap;
}

.hero .title-ctr img {
  vertical-align: middle;
}

.hero .title-ctr .light {
  position: absolute;
  top: -8%;
  width: clamp(1.25rem, 5%, 3.3125rem);
}

.hero .title-ctr .chain {
  width: clamp(2.05rem, 10%, 5.375rem);
}

.hero .title-ctr .bang {
  width: clamp(1.3825rem, 10%, 3.625rem);
}

.hero .title-ctr p {
  font-size: clamp(0.8125rem, 5vw + 0.5rem, 1.25rem);
  line-height: 1.66;
  margin-block-end: 1.5rem;
  max-width: 32.625rem;
}

.hero .title-ctr a {
  padding: 0.9063rem 2.875rem;
  display: inline-block;
  font-size: 0.875rem;
}

.hero .title-ctr .color-text {
  color: var(--color-primary);
  font-weight: 700;
}

.hero .col-2 .images-ctr {
  height: 100%;
  position: relative;
}

.hero .col-2 .images-ctr img {
  position: absolute;
  width: 100%;
}

@media screen and (min-width: 37.5rem) {
  .hero .col-2 .images-ctr {
    max-width: 60%;
    margin-inline: auto;
  }
}

/* >= 720px */
@media screen and (min-width: 45rem) {
  .hero {
    border-block-end: 1px solid #ffffff2e;
  }

  .hero .h2-ctr {
    width: auto;
    margin-inline-end: 3.475rem;
  }

  .hero .h2-ctr h2 {
    text-align: end;
  }

  .hero .flex-ctr {
    flex-flow: row nowrap;
    align-items: center;
  }

  .hero .flex-ctr .col-1 {
    margin-block-end: 0;
    text-align: start;
    padding-inline-start: 3rem;
  }

  .hero .flex-ctr .title-ctr {
    width: auto;
  }

  .hero .title-ctr h1 {
    font-size: clamp(2rem, 5vw + 0.25rem, 5rem);
  }

  .hero .title-ctr .light {
    top: -5%;
    right: 14%;
  }

  .hero .flex-ctr .col-2 {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  .hero .col-2 .images-ctr {
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin-inline: 0;
  }

  .hero .col-2 .images-ctr img {
    width: 100%;
    height: 100%;
  }

  .hero .col-2 .images-ctr img:last-of-type {
    position: relative;
  }
}

@media screen and (min-width: 70rem) {
  .hero h2 {
    font-size: 2.25rem;
    text-align: end;
  }

  .hero .title-ctr .light {
    top: -15%;
    right: 14%;
  }

  .hero .line {
    width: 15.8125rem;
  }
}

@media screen and (min-width: 75rem) {
  .hero .flex-ctr .col-1 {
    padding-inline-start: 8rem;
  }
}
</style>
