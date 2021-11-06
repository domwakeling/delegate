const beautify_html = require("js-beautify").html;
const sass = require('sass');
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

    // beautify HTML files when output => ensures indentation is correct
    eleventyConfig.addTransform("beautifyHTML", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return beautify_html(content);
        }
        return content;
    });

    eleventyConfig.addTransform("minimiseCSS", function(content, outputPath) {
        if (outputPath.endsWith(".css")) {
            return new CleanCSS({}).minify(content).styles;
        }
        return content;
    })

    // filter to convert SASS to CSS
    eleventyConfig.addNunjucksFilter("convertSASS", function (value) {
        return sass.renderSync({ data: value }).css.toString()
    });

    // filter to stringify JSON
    eleventyConfig.addNunjucksFilter("stringify", function (value) {
        return JSON.stringify(value);
    });

    // copy the images folder
    eleventyConfig.addPassthroughCopy("src/images");

    // send contents of admin file straight through
    eleventyConfig.addPassthroughCopy('src/admin');

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};