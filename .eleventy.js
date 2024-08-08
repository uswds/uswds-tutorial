module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@uswds/web-components/dist/usa-banner.js":
      "assets/usa-banner.js",
  });
  eleventyConfig.addWatchTarget("./_theme/");
  eleventyConfig.setWatchThrottleWaitTime(2000); // in milliseconds
  let pathPrefix = "/";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  return {
    pathPrefix: pathPrefix,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      layouts: "_layouts",
      data: "_data",
    },
  };
};
