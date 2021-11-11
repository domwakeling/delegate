const beautify_html = require("js-beautify").html;
const sass = require('sass');
const CleanCSS = require("clean-css");
const Image = require("@11ty/eleventy-img");

async function generateFullWidthImage(src, alt, lazy) {
    let metadata = await Image(src, {
        widths: [899, 2400],
        formats: ["jpeg", "webp"],
        outputDir: "./_site/images/",
        urlPath: "/images"
    });
    let jpeg = metadata.jpeg;
    let webp = metadata.webp;
    return (`<picture class="aspect-ratio-box-inside">
                <source media="(max-width: 899px)" srcset="${webp[0].url}" type="image/webp">
                <source media="(max-width: 899px)" srcset="${jpeg[0].url}" type="image/jpeg">
                <source media="(min-width: 900px)" srcset="${webp[1].url}" type="image/webp">
                <source media="(min-width: 900px)" srcset="${jpeg[1].url}" type="image/jpeg">
                <img src="${jpeg[1].url}" alt="${alt}" style="width:100%" loading="${lazy}">
            </picture>`)
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

    // filter to turn a datestring into human readable date
    eleventyConfig.addNunjucksFilter("readableDate", function(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];;
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    })
    
    // copy the src/images, src/admin and src/js folders
    eleventyConfig.addPassthroughCopy({"src/images": "./images"});
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy({ "src/js": "./js" });

    // copy from src/_includes/favicons to the root
    eleventyConfig.addPassthroughCopy({ "src/_includes/favicons": "." });

    // image processing functions as shortcodes - (i) for 'hero' images, 1920 or 960 wide
    eleventyConfig.addNunjucksAsyncShortcode("fullWidthImage", generateFullWidthImage);

    // because we're making a function we need to return the "normal" exports object
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};