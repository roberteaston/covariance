function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  eleventyConfig.addPassthroughCopy("src/site/styles/user/fonts/formaDJF/*");
  eleventyConfig.addPassthroughCopy("src/site/styles/user/fonts/inputsans/*");
  eleventyConfig.addPassthroughCopy("src/site/styles/user/fonts/manifoldextended/*");
  eleventyConfig.addPassthroughCopy("src/site/styles/user/fonts/optima/*");
  eleventyConfig.addPassthroughCopy("src/site/styles/user/fonts/scriptorama/*");
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
