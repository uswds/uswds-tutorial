---
layout: default
title: Hi
body:
---

<header>
  <section class="hero">
    <h1 class="hero-message">
      <span>Learn how to use</span>
      <span>USWDS</span>
    </h1>
    <p class="under-hero">A tutorial project to learn about installing, compiling, and customizing with the U.S. Web Design System</p>
    <div class="button-list">
      <a class="button primary" href="https://designsystem.digital.gov">Read the tutorial</a>
      <a class="button" href="https://github.com/uswds-tutorial">View source on GitHub</a>
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
  </section>

  <section class="part two">
    <h2>Set up the USWDS compiler</h2>
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
    <div class="editor">
      <pre class="blur">/* gulpfile.js */

const uswds = require('@uswds/compile');
  </pre><pre class="feature">uswds.paths.dist.css = './assets/css/';
uswds.paths.dist.sass = './stylesheets/';</pre>
    </div>
    <h3 class="step">Finally, define (or "export") the USWDS compile functions you want to use.</h3>
    <p class="step-description">The USWDS compiler has a number of <a href="https://github.com/uswds/uswds-gulp/tree/jm-gulp-4#functions">functions</a> available for compiling styles and scaffolding projects. To use these functions, you need to export them using the format we show below: <strong>exports.[customName] = uswds.[function]</strong>. You'll use any <strong>customName</strong> you just defined when you run the compiler in the next sections.</p>
    <div class="editor">
      <pre class="blur">/* gulpfile.js */

const uswds = require('@uswds/compile');

uswds.paths.dist.css = './assets/css/';
uswds.paths.dist.sass = './stylesheets/';
  </pre><pre class="feature">exports.init = uswds.init;
exports.compile = uswds.compile;</pre>
    </div>
  </section>

  <section class="part three">
    <h2>Set up USWDS theme files and assets</h2>
    <h3 class="step">Copy USWDS assets.</h3>
    <p class="step-description">USWDS static assets — fonts, images, and (for the purposes of this tutorial) JavaScript — support USWDS styles. You'll need to copy them out of the <strong>uswds</strong> package to use them, since production applications may not have access to the <strong>node_modules</strong> directory.</p>
    <p class="step-description">We'll use the <strong>init</strong> function we defined in the last section to copy these assets and compile USWDS CSS.</p>
    <div class="terminal">
      <pre>npx gulp init</pre>
    </div>
  </section>
</main>
<footer>
  <p>Created by the <a href="https://designsystem.digital.gov">U.S. Web Design System</a> as a teaching tool.</p>
</footer>