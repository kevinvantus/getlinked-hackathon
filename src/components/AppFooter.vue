<script>
import IconInstagram from "../components/icons/IconInstagram.vue";
import IconX from "../components/icons/IconX.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconLinkedin from "../components/icons/IconLinkedin.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconLocation from "../components/icons/iconlocation.vue";

export default {
  components: {
    IconFacebook,
    IconInstagram,
    IconLinkedin,
    IconX,
    IconPhone,
    IconLocation,
  },
};
</script>

<template>
  <footer>
    <div class="content">
      <article class="col-1">
        <div class="logo">
          <span class="white">get</span>
          <span class="color-text">linked</span>
        </div>

        <p>
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>

        <div class="terms">
          <RouterLink to="/">Terms of Use</RouterLink>
          <RouterLink to="/">Privacy Policy</RouterLink>
        </div>
      </article>

      <article class="col-2">
        <h6 class="color-text">Useful Links</h6>

        <menu>
          <li><RouterLink to="/">Overview</RouterLink></li>
          <li><RouterLink to="/">Timeline</RouterLink></li>
          <li><RouterLink to="/">FAQs</RouterLink></li>
          <li><RouterLink to="/register">Register</RouterLink></li>
        </menu>

        <div class="flex-ctr">
          <span class="color-text">Follow us</span>
          <div class="icons">
            <a href="https://www.instagram.com" target="_blank"
              ><IconInstagram
            /></a>
            <a href="https://www.twitter.com" target="_blank"><IconX /></a>
            <a href="https://www.facebook.com" target="_blank"
              ><IconFacebook
            /></a>
            <a href="https://www.linkedin.com" target="_blank"
              ><IconLinkedin
            /></a>
          </div>
        </div>
      </article>

      <article class="col-3 contact">
        <div class="contact-ctr">
          <h6 class="color-text">Contact Us</h6>

          <div class="contact-item">
            <IconPhone />
            <a href="tel:+2346707653444">+2346707653444</a>
          </div>

          <div class="contact-item">
            <IconLocation />
            <a href="#">27,Alara Street Yaba 100012 Lagos State</a>
          </div>
        </div>
      </article>
    </div>

    <div class="rights">All rights reserved. © getlinked Ltd.</div>
  </footer>
</template>

<style>
footer {
  background: #100b20;
  padding: 3.1875rem 2rem;
}

footer .content {
  padding-inline-start: 1.5rem;
  display: grid;
}

footer .content .logo {
  font-family: var(--font-secondary);
  line-height: 1.2;
  color: #fff;
}

footer .content .logo span {
  font-weight: 700;
}

footer .content .col-1 p {
  margin-block-start: 0.75rem;
  margin-block-end: 2.5rem;
  font-size: 0.75rem;
}

footer menu li {
  line-height: 1.25;
  margin-block-end: 0.75rem;
}

footer .terms a,
footer menu a,
footer .contact-ctr a {
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1.25;
}

footer .terms a:first-of-type {
  padding-inline-end: 1rem;
  border-inline-end: 2px solid var(--color-primary);
}

footer .terms a:last-of-type {
  padding-inline-start: 1rem;
}

footer h6 {
  font-size: 0.875rem;
  line-height: 1.71;
  font-weight: 600;
}

footer article:nth-of-type(2) {
  margin-block-start: 2rem;
}

footer article:last-of-type {
  margin-block-start: 3.8125rem;
}

footer .flex-ctr {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

footer .icons {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
}

footer .contact-ctr {
  width: 7.5rem;
}

footer .contact-ctr .contact-item:first-of-type {
  margin-block-start: 0.5rem;
}

footer .contact-ctr .contact-item {
  display: inline-flex;
  gap: 0.875rem;
  margin-block-end: 1.375rem;
}

footer .contact-ctr svg {
  flex-shrink: 0;
}

footer .rights {
  font-size: 0.75rem;
  line-height: 1.22;
  margin-block-start: 3.75rem;
  text-align: center;
}

@media screen and (min-width: 26.25rem) {
  footer .content .logo {
    font-size: 1.25rem;
  }
}

/* >= 600px */
@media screen and (min-width: 37.5rem) {
  footer .content {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  footer article:last-of-type {
    margin-block-start: 1.8125rem;
  }
}

/* >= 900px */
@media screen and (min-width: 56.25rem) {
  footer .content {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 3rem;
  }
}

@media screen and (min-width: 62rem) {
  footer .content .logo {
    font-size: 2.25rem;
    line-height: 1.2;
    color: #fff;
  }
}

@media screen and (min-width: 75rem) {
  footer {
    padding-inline: 8rem;
  }

  footer .content {
    grid-template-columns: 25.75rem 14rem auto;
    justify-content: space-between;
    gap: 0;
  }
}
</style>
