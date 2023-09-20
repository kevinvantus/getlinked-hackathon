<script>
export default {
  name: "app-partners",
};
</script>

<template>
  <section class="partners">
    <div class="ctr">
      <h2>Partners and Sponsors</h2>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>

      <div class="logo-garden-ctr">
        <div class="logo-grid">
          <div class="logo-cell">
            <img src="../assets/images/liberty.png" alt="" />
          </div>
          <div class="logo-cell">
            <img src="../assets/images/liberty-pay.png" alt="" />
          </div>
          <div class="logo-cell">
            <img src="../assets/images/winwise.png" alt="" />
          </div>
          <div class="logo-cell">
            <img src="../assets/images/whispersms.png" alt="" />
          </div>
          <div class="logo-cell">
            <img src="../assets/images/paybox.png" alt="" />
          </div>
          <div class="logo-cell">
            <img src="../assets/images/vizual-plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.partners {
  text-align: center;
  padding-block: 2rem 6.5rem;
  border-block-end: 1px solid #ffffff2e;
}

.partners h2 {
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.33;
  margin-block-end: 0.25rem;
}

.partners p {
  font-size: 0.75rem;
  line-height: 1.71;
  max-width: 17.875rem;
  margin-inline: auto;
  margin-block-end: 2.5rem;
}

.partners .logo-garden-ctr {
  width: 20.8125rem;
  width: 85%;
  margin-inline: auto;
  border: 1px solid #d434fe;
  border-radius: 5px;
  padding: 2.375rem 2.97rem;
  position: relative;
}

.partners .logo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.logo-cell {
  text-align: center;
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-cell img {
  width: 56%;
}

.logo-cell::after {
  content: "";
  width: 2px;
  background-color: #d434fe;
  position: absolute;
  right: 0;
  display: block;
  transform: translateX(50%);
}

.logo-cell:nth-of-type(1)::after,
.logo-cell:nth-of-type(2)::after {
  top: 0;
  bottom: 10%;
}

.logo-cell:nth-of-type(4)::after,
.logo-cell:nth-of-type(5)::after {
  top: 10%;
  bottom: 0;
}

.logo-cell::before {
  content: "";
  height: 2px;
  background-color: #d434fe;
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 0;
  display: block;
}

.logo-cell:nth-of-type(3n)::after,
.logo-cell:nth-of-type(4)::before,
.logo-cell:nth-of-type(5)::before,
.logo-cell:nth-of-type(6)::before {
  background: transparent;
}

@media screen and (min-width: 45rem) {
  .logo-cell::after {
    width: 4px;
  }

  .logo-cell::before {
    height: 4px;
  }
}

@media screen and (min-width: 75rem) {
  .partners {
    text-align: center;
    padding-block: 5rem 8rem;
  }

  .partners h2 {
    font-size: 2rem;
    line-height: 1.33;
  }

  .partners p {
    font-size: 0.875rem;
    line-height: 1.96;
    max-width: 28.25rem;
    margin-inline: auto;
    margin-block-end: 4rem;
  }

  .partners .logo-garden-ctr {
    padding-block: 9rem;
  }

  .logo-cell {
    padding: 2rem;
  }
}
</style>
