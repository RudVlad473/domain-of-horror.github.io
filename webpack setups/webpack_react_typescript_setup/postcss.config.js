/* RUN ON PRODUCTION */
const purgecss = require("@fullhuman/postcss-purgecss")

// module.exports = (env, argv) => ({
//     plugins: [
//         "postcss-preset-env",
//         // purgecss({
//         //     content: ["./dist/*.js"],
//         //     css: ["./dist/*.css"],
//         // }),
//     ],
// })

module.exports = (env) => {
    return {
        plugins: [
            "postcss-preset-env",
            env.mode !== "development" &&
                purgecss({
                    content: ["./dist/*.js"],
                    css: ["./dist/*.css"],
                }),
        ],
    }
}
