/* RUN ON PRODUCTION */
const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
    plugins: [
        "postcss-preset-env",
        purgecss({
            content: ["./dist/*.js"],
            css: ["./dist/*.css"],
        }),
    ],
}



/*COMMENT ON PRODUCTION */

// module.exports = {
//     plugins: ["postcss-preset-env"],
// }
