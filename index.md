---
layout: default
title: USWDS Tutorial
---

<section class="usa-banner" aria-label="Official government website">
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img
            class="usa-banner__header-flag"
            src="/assets/uswds/img/us_flag_small.png"
            alt="U.S. flag"
          />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto">
          <p class="usa-banner__header-text">
            An official website of the United States government
          </p>
          <p class="usa-banner__header-action" aria-hidden="true">
            Here’s how you know
          </p>
        </div>
        <button
          class="usa-accordion__button usa-banner__button"
          aria-expanded="false"
          aria-controls="gov-banner-default"
        >
          <span class="usa-banner__button-text">Here’s how you know</span>
        </button>
      </div>
    </header>
    <div class="usa-banner__content usa-accordion__content" id="gov-banner-default">
      <div class="grid-row grid-gap-lg">
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src="/assets/uswds/img/icon-dot-gov.svg"
            role="img"
            alt=""
            aria-hidden="true"
          />
          <div class="usa-media-block__body">
            <p>
              <strong> Official websites use .gov </strong>
              <br />
              A <strong>.gov</strong> website belongs to an official government
              organization in the United States.
            </p>
          </div>
        </div>
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src="/assets/uswds/img/icon-https.svg"
            role="img"
            alt=""
            aria-hidden="true"
          />
          <div class="usa-media-block__body">
            <p>
              <strong> Secure .gov websites use HTTPS </strong>
              <br />
              A <strong>lock</strong> (
              <span class="icon-lock"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="64"
                  viewBox="0 0 52 64"
                  class="usa-banner__lock-image"
                  role="img"
                  aria-labelledby="banner-lock-title-default banner-lock-description-default"
                  focusable="false"
                >
                  <title id="banner-lock-title-default">Lock</title>
                  <desc id="banner-lock-description-default">A locked padlock</desc>
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                  /></svg
              ></span>
              ) or <strong>https://</strong> means you’ve safely connected to
              the .gov website. Share sensitive information only on official,
              secure websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<header class="opener">
  {% include hero.html %}
</header>
<main id="tutorial-start">
  {% include sxs/part-intro.html %}
  {% include sxs/part-one.html %}
  {% include sxs/part-two.html %}
  {% include sxs/part-three.html %}
  {% include sxs/part-four.html %}
  {% include sxs/part-five.html %}
  {% include sxs/part-six.html %}
  {% include sxs/part-seven.html %}
  {% include sxs/part-eight.html %}
</main>
{% include footer.html %}
<div class="usa-identifier">
  <section
    class="usa-identifier__section usa-identifier__section--masthead"
    aria-label="Agency identifier,"
  >
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="javascript:void(0);" class="usa-identifier__logo">
          <img
            class="usa-identifier__logo-img"
            src="/assets/uswds/img/circle-gray-20.svg"
            alt="&lt;Parent agency&gt; logo"
            role="img"
          />
        </a>
      </div>
      <div class="usa-identifier__identity" aria-label="Agency description">
        <p class="usa-identifier__identity-domain">&lt;domain.gov&gt;</p>
        <p class="usa-identifier__identity-disclaimer">
          An official website of the
          <a href="javascript:void(0);">&lt;Parent agency&gt;</a>
        </p>
      </div>
    </div>
  </section>
  <nav
    class="usa-identifier__section usa-identifier__section--required-links"
    aria-label="Important links,"
  >
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link"
            >About &lt;Parent shortname&gt;</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link"
            >Accessibility support</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="javascript:void(0);"
            class="usa-identifier__required-link usa-link"
            >FOIA requests</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="javascript:void(0);"
            class="usa-identifier__required-link usa-link"
            >No FEAR Act data</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="javascript:void(0);"
            class="usa-identifier__required-link usa-link"
            >Office of the Inspector General</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="javascript:void(0);"
            class="usa-identifier__required-link usa-link"
            >Performance reports</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="javascript:void(0);"
            class="usa-identifier__required-link usa-link"
            >Privacy policy</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <section
    class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,"
  >
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
    </div>
  </section>
</div>
