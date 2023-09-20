<script>
import IconCheckCircle from "./icons/IconCheckCircle.vue";

export default {
  name: "privacy-and-terms",
  components: { IconCheckCircle },
};
</script>

<template>
  <section class="privacy">
    <div class="grid-ctr">
      <div class="col-1">
        <div class="ctr">
          <h2>
            Privacy Policy and <br />
            <span class="color-text">Terms</span>
          </h2>

          <p class="date">Last updated on September 12, 2023</p>

          <p class="text">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div class="box">
            <p class="info">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div class="terms">
              <h6 class="color-text">Licensing Policy</h6>
              <p>Here are terms of our Standard License:</p>

              <div class="policy">
                <IconCheckCircle />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>

              <div class="policy">
                <IconCheckCircle />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>

              <div class="btn-row">
                <button type="button" class="main">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-2">
        <div class="images-ctr">
          <img src="../assets/images/shield.svg" alt="" />
          <img src="../assets/images/privacy.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.privacy {
  padding-block: 4.375rem 5.25rem;
}

.privacy .col-1 {
  text-align: center;
}

.privacy .col-1 .ctr {
  width: 75.6%;
  margin-inline: auto;
}

.privacy h2,
.privacy h2 span {
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.33;
}

.privacy p {
  font-size: 0.75rem;
}

.privacy p.date {
  color: #ffffffbf;
  margin-block-end: 1.75rem;
  line-height: 2.3;
}

.privacy p.text {
  line-height: 1.88;
  margin-block-end: 1.875rem;
}

.privacy .box {
  border: 1px solid #d434fe;
  border-radius: 5px;
  padding-block: 2.8125rem 3.125rem;
}

.privacy .box p.info {
  line-height: 2.17;
  margin-block-end: 1.25rem;
  padding-inline: 0.75rem;
}

.privacy .terms {
  padding-inline: 1.25rem;
  text-align: start;
}

.privacy .terms h6 {
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 2.15;
}

.privacy .terms h6 + p {
  font-weight: 700;
  margin-block-end: 1.25rem;
}

.privacy .policy {
  margin-block-end: 1.5rem;
  display: flex;
  gap: 0.75rem;
}

.privacy .policy p {
  line-height: 1.76;
  margin-block-start: -2px;
}

.privacy svg {
  flex-shrink: 0;
  flex-grow: 1;
}

.privacy .btn-row {
  text-align: center;
}

.privacy .col-2 {
  margin-block-start: 3rem;
}

.privacy .images-ctr {
  width: 17.75rem;
  margin-inline: auto;
}

.privacy .images-ctr img {
  width: 100%;
  display: block;
}

.privacy .images-ctr img:last-of-type {
  margin-block-start: -90%;
}

@media screen and (min-width: 45rem) {
  .privacy .grid-ctr {
    display: grid;
    grid-template-columns: 43.14% 44.2%;
    align-items: center;
    justify-content: center;
  }

  .privacy .col-1 .ctr {
    width: 100%;
    margin-inline: auto;
  }

  .privacy .col-1 {
    text-align: start;
  }

  .privacy .col-2 {
    margin-block-start: 0;
  }
}

@media screen and (min-width: 75rem) {
  .privacy {
    padding-block: 5.875rem 10.375rem;
    margin-inline: auto;
    width: 87.24%;
  }

  .privacy .grid-ctr {
    column-gap: 12.66%;
  }

  .privacy .col-1 {
    padding-inline-start: 3.5rem;
  }

  .privacy .col-2 {
    padding-inline-end: 1.875rem;
  }

  .privacy h2,
  .privacy h2 span {
    font-size: 2rem;
    line-height: 1.33;
  }

  .privacy p {
    font-size: 0.875rem;
  }

  .privacy .terms p {
    line-height: 2.14;
  }

  .privacy .images-ctr {
    width: 100%;
  }

  .privacy .policy p {
    margin-block-start: -5px;
  }
}
</style>
