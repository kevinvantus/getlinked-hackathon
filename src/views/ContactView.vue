<script>
import AppNavigation from "../components/AppNavigation.vue";
import IconInstagram from "../components/icons/IconInstagram.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconX from "../components/icons/IconX.vue";
import IconLinkedin from "../components/icons/IconLinkedin.vue";
import IconChevronLeft from "../components/icons/IconChevronLeft.vue";

export default {
  name: "app-contact-view",
  components: {
    AppNavigation,
    IconInstagram,
    IconFacebook,
    IconX,
    IconLinkedin,
    IconChevronLeft,
  },
};
</script>

<template>
  <div class="is-tablet">
    <AppNavigation />
  </div>

  <div class="back-btn">
    <button type="button"><IconChevronLeft /></button>
  </div>

  <main class="contact-ctr">
    <div class="contact-details">
      <div class="is-tablet">
        <h2 class="color-text">Get in touch</h2>

        <p class="heading">
          Contact <br />
          Information
        </p>

        <address>
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </address>

        <p class="phone">Call us: <a href="tel:07067981819">07067981819</a></p>

        <p class="announcement">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
      </div>

      <div class="links">
        <p class="color-text">Share on</p>

        <div class="icons">
          <a href="https://www.instagram.com" target="_blank">
            <IconInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank"><IconX /></a>
          <a href="https://www.facebook.com" target="_blank">
            <IconFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <IconLinkedin />
          </a>
        </div>
      </div>
    </div>

    <div class="form-card">
      <h1 class="color-text">
        Questions or need assistance? <br />Let us know about it
      </h1>
      <p class="help-text">
        Email us below to any question related to our event
      </p>

      <vee-form @submit.prevent="submit()">
        <div class="input-field">
          <vee-field type="text" placeholder="First name" name="first_name" />
        </div>

        <div class="input-field">
          <vee-field type="text" placeholder="Email" name="email" />
        </div>

        <div class="input-field">
          <vee-field type="text" placeholder="Phone" name="phone_number" />
        </div>

        <div class="input-field">
          <vee-field
            type="text"
            placeholder="Message"
            name="message"
            as="textarea"
          />
        </div>

        <div class="form-submit-btn">
          <button type="submit" class="main">Submit</button>
        </div>
      </vee-form>
    </div>
  </main>
</template>

<style>
.is-tablet {
  display: none;
}

.back-btn {
  margin-block-start: 3rem;
  padding-inline: 3rem;
}

.back-btn button {
  border-radius: 50%;
  color: #fff;
  border-image: linear-gradient(180deg, #903aff 0%, #ff26b9 100%);
  border: 1px solid var(--color-primary);
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact-ctr {
  display: grid;
  margin-block: 2.5rem 2.375rem;
}

.contact-ctr .contact-details {
  order: 2;
  text-align: center;
}

.contact-ctr .links {
  margin-block-start: 2.25rem;
}

.contact-ctr .icons {
  margin-block-start: 0.75rem;
  display: inline-flex;
  gap: 1rem;
}

.form-card {
  padding-inline: 3rem;
}

.form-card h1 {
  font-size: 1.25rem;
  line-height: 1.23;
  font-weight: 600;
  font-family: var(--font-secondary);
  margin-block-end: 1.5rem;
}

.form-card p.help-text {
  margin-block-end: 1.875rem;
  font-size: 0.75rem;
  line-height: 1.22;
  width: 14.94rem;
}

textarea {
  height: 10rem;
  resize: none;
}

.form-card .form-submit-btn {
  margin-block-end: 0;
}

@media screen and (min-width: 45rem) {
  .is-tablet {
    display: block;
  }

  .back-btn {
    display: none;
  }

  .contact-ctr {
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 3rem;
    margin-block: 8.75rem 7.25rem;
    padding-block: 0;
  }

  .contact-ctr .contact-details {
    padding-block-start: 3.5rem;
    order: 0;
    text-align: start;
  }

  .contact-ctr h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.23;
    font-family: var(--font-secondary);
    margin-block-end: 1rem;
  }

  .contact-ctr .contact-details p,
  .contact-ctr .contact-details address {
    line-height: 1.22;
    font-style: normal;
  }

  .contact-ctr .contact-details .heading {
    width: 6rem;
    margin-block-end: 1rem;
  }

  .contact-ctr address,
  .contact-ctr .phone {
    margin-block-end: 1.25rem;
  }

  .contact-ctr .form-card {
    box-shadow: 0 4px 4px 0 #00000040;
    background: #ffffff08;
    border-radius: 4px;
    padding-block: 4.6875rem 4.1875rem;
  }

  .form-card .form-submit-btn {
    margin-block-end: 0;
  }
}

@media screen and (min-width: 45rem) and (max-width: 74rem) {
  .contact-ctr {
    grid-template-columns: 45% 55%;
  }
}

@media screen and (min-width: 75rem) {
  .contact-ctr {
    max-width: 78.24%;
    margin-inline: auto;
  }

  .contact-ctr .form-card {
    padding-inline: 4rem;
  }
}

@media screen and (min-width: 80rem) {
  .contact-ctr .form-card {
    padding-inline: 5.75rem;
  }
}
</style>
