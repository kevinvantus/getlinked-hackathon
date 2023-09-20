<script>
import AppAccordion from "./AppAccordion.vue";

export default {
  name: "app-faqs",
  components: { AppAccordion },
};
</script>

<template>
  <section class="faqs">
    <div class="grid-ctr">
      <div class="col-1">
        <div class="ctr">
          <h2>
            Frequently Asked <br />
            <span class="color-text">Questions</span>
          </h2>

          <p class="text">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <AppAccordion />
        </div>
      </div>

      <div class="col-2">
        <div class="images-ctr"></div>
      </div>
    </div>
  </section>
</template>

<style>
.faqs {
  padding-block: 4.375rem 5.25rem;
}

.faqs .col-1 {
  text-align: center;
}

.faqs .col-1 .ctr {
  width: 76%;
  margin-inline: auto;
}

.faqs h2,
.faqs h2 span {
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.33;
}

.faqs p {
  font-size: 0.75rem;
}

.faqs p.text {
  line-height: 1.88;
  margin-block-end: 2.875rem;
}

.faqs .box p.info {
  line-height: 2.17;
  margin-block-end: 1.25rem;
  padding-inline: 0.75rem;
}

.faqs .terms {
  padding-inline: 1.25rem;
  text-align: start;
}

.faqs .terms h6 {
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 2.15;
}

.faqs .terms h6 + p {
  font-weight: 700;
  margin-block-end: 1.25rem;
}

.faqs .policy {
  margin-block-end: 1.5rem;
  display: flex;
  gap: 0.75rem;
}

.faqs .policy p {
  line-height: 1.76;
  margin-block-start: -2px;
}

.faqs svg {
  flex-shrink: 0;
  flex-grow: 1;
}

.faqs .btn-row {
  text-align: center;
}

.faqs .col-2 {
  margin-block-start: 3rem;
}

.faqs .images-ctr {
  width: 17.75rem;
  margin-inline: auto;
}

.faqs .images-ctr img {
  width: 100%;
  display: block;
}

.faqs .images-ctr img:last-of-type {
  margin-block-start: -90%;
}

@media screen and (min-width: 45rem) {
  .faqs .grid-ctr {
    display: grid;
    grid-template-columns: 43.14% 44.2%;
    align-items: center;
    justify-content: center;
  }

  .faqs .col-1 .ctr {
    width: 100%;
    margin-inline: auto;
  }

  .faqs .col-1 {
    text-align: start;
  }

  .faqs .col-2 {
    margin-block-start: 0;
  }
}

@media screen and (min-width: 75rem) {
  .faqs {
    padding-block: 5.875rem 10.375rem;
    margin-inline: auto;
    width: 87.24%;
  }

  .faqs .grid-ctr {
    column-gap: 12.66%;
  }

  .faqs .col-1 {
    padding-inline-start: 3.5rem;
  }

  .faqs .col-2 {
    padding-inline-end: 1.875rem;
  }

  .faqs h2,
  .faqs h2 span {
    font-size: 2rem;
    line-height: 1.33;
  }

  .faqs p {
    font-size: 0.875rem;
  }

  .faqs .terms p {
    line-height: 2.14;
  }

  .faqs .images-ctr {
    width: 100%;
  }

  .faqs .policy p {
    margin-block-start: -5px;
  }
}
</style>
