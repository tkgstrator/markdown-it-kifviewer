module.exports = {
  title: "KifViewer Demo",
  description:
    "The spirit proclaims. Great power, governing the events of all things. Its life, its soul, and even its corpse.",
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  plugins: [[require("./kifviewer/index.js")]],
};
