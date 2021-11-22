const esbuild = require("esbuild")
const PureScriptPlugin = require("esbuild-plugin-purescript")

const development = process.env.NODE_ENV === "development"

console.log(`NODE_ENV=${process.env.NODE_ENV}\nCWD=${process.cwd()}`)

esbuild
    .build({
        entryPoints: ["src/index.js"],
        bundle: true,
        outdir: "dist",
        watch: development,
        plugins: [PureScriptPlugin()]
    })
    .catch(e => {
        console.log(e)
        if (development)
            process.exit()
    })
