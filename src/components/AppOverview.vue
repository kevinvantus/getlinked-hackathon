<template>
  <div class="overview">
    <!-- Introduction -->
    <section class="intro">
      <div class="ctr">
        <div class="col-1">
          <article>
            <img src="../assets/images/the-big-idea.webp" alt="" />
          </article>
        </div>
        <div class="col-2">
          <article class="relative">
            <h2>
              Introduction to getlinked
              <span class="color-text">tech Hackathon 1.0</span>
            </h2>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Guidelines and rules -->
    <section class="rules">
      <div class="ctr">
        <div class="col-1">
          <article class="relative">
            <h2>
              Rules and <br />
              <span class="color-text">Guidelines</span>
            </h2>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </article>
        </div>
        <div class="col-2">
          <article>
            <img src="../assets/images/woman-sitting.webp" alt="" />
          </article>
        </div>
      </div>
    </section>

    <!-- Judging criteria -->
    <section class="criteria">
      <div class="ctr">
        <div class="col-1">
          <article>
            <img src="../assets/images/the-big-idea.webp" alt="" />
          </article>
        </div>
        <div class="col-2">
          <article class="relative">
            <h2>
              Judging Criteria <br />
              <span class="color-text">Key attributes</span>
            </h2>

            <p>
              <strong class="color-text">Innovation and Creativity</strong>:
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>

            <p>
              <strong class="color-text">Functionality</strong>: Assess how well
              the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </p>

            <p>
              <strong class="color-text">Impact and Relevance</strong>:
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>

            <p>
              <strong class="color-text">Technical Complexity</strong>: Evaluate
              the technical sophistication of the solution. Judges would
              consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>

            <p>
              <strong class="color-text">Adherence to Hackathon Rules</strong>:
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>

            <button type="button" class="main">Read More</button>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.overview .intro,
.overview .rules,
.overview .criteria {
  border-block-end: 1px solid #ffffff2e;
}

.overview .ctr {
  padding-inline: 2.8125rem;
  text-align: center;
  display: grid;
  padding-block: 3rem;
}

.overview img {
  width: 100%;
}
.overview .intro img {
  max-width: 30.625rem;
}

.overview .intro .col-1 {
  margin-block-end: 1.375rem;
}

.overview .rules .col-2 {
  order: -1;
}

.overview h2,
.overview h2 span {
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.33;
}

.overview .intro h2 {
  max-width: 24.875rem;
}

.overview p {
  font-size: 0.8125rem;
}

.overview strong {
  font-weight: 700;
}

.overview .intro p {
  margin-block-start: 0.5626rem;
}

.overview .criteria p {
  font-size: 0.75rem;
  margin-block-start: 1rem;
}

.overview .criteria button {
  margin-block-start: 1.5rem;
}

/* >= 560px */
@media screen and (min-width: 35rem) and (max-width: 44.9rem) {
  .overview .ctr {
    max-width: 70vw;
    margin-inline: auto;
  }
}

/* >= 720px */
@media screen and (min-width: 45rem) {
  .overview .ctr {
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    align-items: center;
  }

  .overview .intro .col-2,
  .overview .rules .col-1,
  .overview .criteria .col-2 {
    text-align: start;
  }

  .overview .rules .col-2 {
    order: 0;
  }

  .overview .criteria p {
    font-size: 0.875rem;
    margin-block-start: 1.25rem;
  }

  .overview .criteria strong {
    font-size: 1rem;
  }
}

@media screen and (min-width: 75rem) {
  .overview .ctr {
    padding-inline: 8rem;
    column-gap: 6rem;
  }

  .overview .criteria .ctr {
    padding-inline: 6rem;
  }

  .overview .intro img {
    text-align: end;
  }

  .overview h2,
  .overview h2 span {
    font-size: 2rem;
    line-height: 1.33;
  }

  .overview p {
    font-size: 0.75rem;
    line-height: 1.96;
  }

  .overview .criteria button {
    margin-block-start: 3.5rem;
  }
}
</style>
