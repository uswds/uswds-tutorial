---
layout: default
title: Hi
body:
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
  <section class="hero">
    <h1 class="hero-message">
      <span>Learn how to use</span>
      <span>USWDS</span>
    </h1>
    <p class="under-hero">A tutorial project to learn about installing, compiling, and customizing with the U.S. Web Design System</p>
    <div class="button-list">
      <a class="button primary" href="https://designsystem.digital.gov">Read the tutorial</a>
      <a class="button secondary" href="https://github.com/uswds-tutorial">View source on GitHub</a>
    </div>
  </section>
  <picture class="promo-art">
    <img src="https://doodleipsum.com/700x700/outline" height="800" width="800" alt="a random doodle">
  </picture>
</header>
<main>
  <section class="part intro">
    <h2>Start simple. Start slow.</h2>
    <p class="subhed">Take it one step at a time. The design system can seem overwhelming if you try to do everything at once.</p>
  </section>
  <section class="part one">
    <h2>Set up the tutorial and install USWDS</h2>
    <h3 class="step">Clone the tutorial repo.</h3>
    <div class="terminal">
      <pre>git clone https://github.com/uswds/uswds-tutorial.git</pre>
    </div>
    <h3 class="step">In the new project, install the project dependencies.</h3>
    <div class="terminal">
      <pre>cd uswds-tutorial</pre>
      <pre>npm install</pre>
    </div>
    <h3 class="step">Install the USWDS source code package.</h3>
    <div class="terminal">
      <pre>npm install uswds --save-dev</pre>
    </div>
    <h3 class="step">Start up the tutorial site.</h3>
    <p class="step-description">This will serve the tutorial Jekyll site from the current terminal window. You can use a web browser to see the site at <a href="http://localhost:4000/">http://localhost:4000/</a>.</p>
    <div class="terminal">
      <pre>npm start</pre>
    </div>
    <p class="step-description">Open a new terminal window and navigate to your tutorial project directory to continue.</p>
  </section>

  <section class="part two">
    <h2>Set up the USWDS compiler</h2>
    <p>Now that the site is running and you have a new terminal window open, let's install the USWDS compiler.</p>
    <h3 class="step">Install the USWDS compiler package.</h3>
    <div class="terminal">
      <pre>npm install @uswds/compile --save-dev</pre>
    </div>
    <h3 class="step">Add a gulpfile to create your compile settings.</h3>
    <p class="step-description">The USWDS compiler uses a task runner called <a href="https://gulpjs.com">Gulp</a> to run its scripts and functions. You'll need what's called a "gulpfile" to tell the USWDS compiler how you'd like to use it.</p>
    <div class="terminal">
      <pre>touch gulpfile.js</pre>
    </div>
    <h3 class="step">In the new gulpfile you just created, import the USWDS compiler package.</h3>
    <p class="step-description">This connects your gulpfile to USWDS compiler's <a href="https://github.com/uswds/uswds-gulp/tree/jm-gulp-4#functions">settings and functions</a>.</p>
    <div class="editor">
      <pre class="blur">/* gulpfile.js */

</pre><pre class="feature">const uswds = require('@uswds/compile');</pre>
    </div>
    <h3 class="step">Then, add custom settings.</h3>
    <p class="step-description">The USWDS compiler's <a href="https://github.com/uswds/uswds-gulp/tree/jm-gulp-4#path-settings">settings</a> allow you to customize where you want to save both your USWDS files, and the styles you compile with the compiler. For example, use <strong>paths.dist.css</strong> to tell the compiler where to save your compiled styles. Each path variable should start with the constant you defined in the last step. (We've used <strong>uswds</strong> in our tutorial.) Paths are relative to the project root, the place where you made your gulpfile.</p>
    <p class="step-description">In this tutorial we'll set the destination of our theme files to the <strong>./_theme/</strong> directory.</p>
    <div class="editor">
      <pre class="blur">/* gulpfile.js */

const uswds = require('@uswds/compile');
  </pre><pre class="feature">uswds.paths.dist.theme = './theme';</pre>
    </div>
    <h3 class="step">Finally, define (or "export") the USWDS compile functions you want to use.</h3>
    <p class="step-description">The USWDS compiler has a number of <a href="https://github.com/uswds/uswds-gulp/tree/jm-gulp-4#functions">functions</a> available for compiling styles and scaffolding projects. To use these functions, you need to export them using the format we show below: <strong>exports.[customName] = uswds.[function]</strong>. You'll use any <strong>customName</strong> you just defined when you run the compiler in the next sections.</p>
    <p class="step-description">In this tutorial, we'll set up three functions: <strong>init</strong>, <strong>compile</strong>, and <strong>watch</strong>.</p>
    <p class="step-description">Save your new gulpfile when you're done.</p>
    <div class="editor">
      <pre class="blur">/* gulpfile.js */

const uswds = require('@uswds/compile');

uswds.paths.dist.theme = './_theme';
  </pre><pre class="feature">exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;</pre>
    </div>
  </section>

  <section class="part three">
    <h2>Set up USWDS theme files and assets</h2>
    <h3 class="step">Initialize your USWDS installation.</h3>
    <p class="step-description">Now we'll use the Gulp functions we set up in the last section to initialize our USWDS project. This process adds USWDS assets and theme files to your project, then compiles USWDS styles.</p>
    <p class="step-description">USWDS static assets — fonts, images, and (for the purposes of this tutorial) JavaScript — support USWDS styles. Initialization copies them out of the <strong>uswds</strong> package, since sites may not have access to the <strong>node_modules</strong> directory in production.</p>
    <p class="step-description">We'll use the <strong>init</strong> function we defined in the last section to copy these assets and compile USWDS CSS.</p>
    <div class="terminal">
      <pre>npx gulp init</pre>
    </div>
    <h3 class="step">Check for success.</h3>
    <p class="step-description">After the script runs, you should have new USWDS assets in an <strong>./assets/uswds</strong> directory, theme files in a <strong>./_theme</strong> directory, and compiled CSS in the <strong>./assets/uswds/css</strong> directory.</p>
  </section>
  <section class="part four">
    <h2>Add USWDS CSS and JavaScript to the site template</h2>
    <p>Now that we've created the compiled CSS and JavaScript, we need to include them in our page templates.</p>
    <h3 class="step">Add USWDS styles to the site head.</h3>
    <p class="step-description">Add the compiled CSS after the existing site CSS.</p>
    <div class="editor">
      <pre class="blur">&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  ...
  &lt;link rel="stylesheet" href="&lcub;&lcub; '/assets/css/styles.css' | relative_url &rcub;&rcub;"&gt;</pre><pre class="feature">
  &lt;link rel="stylesheet" href="&lcub;&lcub; '/assets/uswds/css/styles.css' | relative_url &rcub;&rcub;"&gt;</pre><pre class="blur">
</head>
</pre>
    </div>
    <h3 class="step">Add USWDS initializer to the site head.</h3>
    <p class="step-description">Add the USWDS initialization script at the end of the page <strong>head</strong>. This script prevent flashes of unstyled content while USWDS is loading.</p>
    <div class="editor">
      <pre class="blur">/* _includes/head.html */
  
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  ...
  &lt;link rel="stylesheet" href="&lcub;&lcub; '/assets/css/styles.css' | relative_url &rcub;&rcub;"&gt;
  &lt;link rel="stylesheet" href="&lcub;&lcub; '/assets/uswds/css/styles.css' | relative_url &rcub;&rcub;"&gt;</pre><pre class="feature">
  &lt;script src="&lcub;&lcub; '/assets/uswds/js/uswds-init.min.js' | relative_url &rcub;&rcub;"&gt;&lt;/script&gt;</pre><pre class="blur">
</head>
</pre>
    </div>
    <h3 class="step">Add USWDS JavaScript to the end of the page body.</h3>
    <p class="step-description">Finally, add the USWDS JavaScript to the end of the page <strong>body</strong></p>
    <div class="editor">
      <pre class="blur">/* _layouts_/default.html */
  
...

&lt;body class="&lcub;&lcub; page.body &rcub;&rcub;"&gt;
  &lcub;&lcub; content }}</pre><pre class="feature">
  &lt;script src="&lcub;&lcub; '/assets/uswds/js/uswds.min.js' | relative_url &rcub;&rcub;"&gt;&lt;/script&gt;</pre><pre class="blur">
&lt;/body&gt;
</pre>
    </div>
    <p class="step-description">At this point, you've added USWDS design system code to your project successfully!</p>
    <p class="step-description">However, you may have noticed that the site looks different. The font has changed! The headers look different! What happened? Let's fix these issues in the next section.</p>
  </section>
  <section class="part five">
    <h2>Harmonizing USWDS</h2>
    <h3 class="step">Create a project theme file.</h3>
    <p class="step-description">Now we'll use the Gulp functions we set up in the last section to initialize our USWDS project. This process adds USWDS assets and theme files to your project, then compiles USWDS styles.</p>
    <div class="terminal">
      <pre>touch _theme/_uswds-theme.scss</pre>
    </div>
    <h3 class="step">Watch for changes and recomile USWDS styles.</h3>
    <p class="step-description">Now we'll use the Gulp functions we set up in the last section to initialize our USWDS project. This process adds USWDS assets and theme files to your project, then compiles USWDS styles.</p>
    <div class="terminal">
      <pre>npx gulp watch</pre>
    </div>
    <h3 class="step">Update settings.</h3>
    <p class="step-description">Now we'll use the Gulp functions we set up in the last section to initialize our USWDS project. This process adds USWDS assets and theme files to your project, then compiles USWDS styles.</p>
    <div class="terminal">
      <pre>touch _theme/_uswds-theme.scss</pre>
    </div>
  </section>
</main>
<footer>
  <p>Created by the <a href="https://designsystem.digital.gov">U.S. Web Design System</a> as a teaching tool.</p>
</footer>
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
