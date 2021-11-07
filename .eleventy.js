const beautify_html = require("js-beautify").html;
const sass = require('sass');
const CleanCSS = require("clean-css");
const Image = require("@11ty/eleventy-img");

async function generateFullWidthImage(src, alt) {
    let metadata = await Image(src, {
        widths: [960, 1920],
        formats: ["jpeg"],
        outputDir: "./_site/images/",
        urlPath: "/images"
    });
    let data = metadata.jpeg;
    console.log(data[0].url);
    return (`<img srcset="${data[0].url}, ${data[1].url} 2x"
                  src="${data[0].url}"
                  alt="${alt}"
                  loading="lazy"
                  style="width:100%"
                  decoding="async" >`)
    // return `<img src="${data.url}" alt="${alt}" class="tweet_img" loading="lazy" decoding="async">`;
}

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

    // copy the src/images & src/admin folders
    eleventyConfig.addPassthroughCopy({"src/images": "./images"});
    eleventyConfig.addPassthroughCopy('src/admin');

    // copy from src/_includes/favicons to the root
    eleventyConfig.addPassthroughCopy({ "src/_includes/favicons": "." })

    // image processing functions as shortcodes
    eleventyConfig.addNunjucksAsyncShortcode("fullWidthImage", generateFullWidthImage);

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};