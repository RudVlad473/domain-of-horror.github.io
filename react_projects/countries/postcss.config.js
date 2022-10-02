/* RUN ON PRODUCTION */
// const purgecss = require("@fullhuman/postcss-purgecss")

// module.exports = {
//     plugins: [
//         "postcss-preset-env",
//         purgecss({
//             content: ["./dist/main.js", "./dist/index.html"],
//             css: ["./dist/main.css"],
//         }),
//     ],
// }

/*COMMENT ON PRODUCTION */

module.exports = {
    plugins: ["postcss-preset-env"],
}
