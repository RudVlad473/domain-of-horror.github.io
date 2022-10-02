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




// module.exports = {
//     style: {
//         postcss: {
//             plugins: [
//                 purgecss({
//                     content: [
//                         "./src/**/*.html",
//                         "./src/**/*.tsx",
//                         "./src/**/*.ts",
//                     ],
//                 }),
//             ],
//         },
//     },
// }



/*COMMENT ON PRODUCTION */

// module.exports = {
//     plugins: ["postcss-preset-env"],
// }
