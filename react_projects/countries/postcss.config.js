/* RUN ON PRODUCTION */
const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = (env) => {
    return {
        plugins: [
            "postcss-preset-env",
            env.mode !== "development" &&
                purgecss({
                    css: ["./dist/*.css"],
                    content: ["./dist/*.js"],
                }),
        ],
    }
}
