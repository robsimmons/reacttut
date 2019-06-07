const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        // THIS LINE NEEDS TO BE CHANGED TO SWTICH FROM JSX TO JS
        activity: path.join(__dirname, "src", "main.js")
    },
    output: {
        filename: path.join("lib", "js.js"),
        path: path.resolve(__dirname, "lib")
    },
    resolve: {
        extensions: [".js"]
    }
}