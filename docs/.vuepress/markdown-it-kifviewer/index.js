"use strict";

const EMBED_REGEX = /@\[([kif].+)]\([\s]*(.*?)[\s]*[)]/im;

function kifViewerEmbed(md) {
  console.log("Hello, KifViewer");
  function kifViewerReturn(state, silent) {
    var serviceEnd;
    var serviceStart;
    var token;
    var videoID;
    var theState = state;
    const oldPos = state.pos;

    const match = EMBED_REGEX.exec(
      state.src.slice(state.pos, state.src.length)
    );
    console.log("Match", match);

    serviceStart = oldPos + 2;
    serviceEnd = md.helpers.parseLinkLabel(state, oldPos + 1, false);

    if (!silent) {
      theState.pos = oldPos + 2;
      theState.service = theState.src.slice(serviceStart, serviceEnd);
      const newState = new theState.md.inline.State(
        service,
        theState.md,
        theState.env,
        []
      );
      newState.md.inline.tokenize(newState);

      token = theState.push("kifviewer", "");
      token.url = match[2];
    }
    theState.pos += theState.src.indexOf(")", theState.pos);
    return true;
  }
  if (md !== undefined) {
    console.log("MarkdownIt", md);
  }
  return kifViewerReturn();
}

function tokenizeKifViewer(md, options) {
  function tokenizeReturn(tokens, idx) {
    console.log("TokenizeReturn", tokens, idx);
    return "<p>Hello, World!</p>";
  }
  return tokenizeReturn(md.nyamo, md.idx);
}

// module.exports = (options, context) => ({
//   name: "vuepress-plugin-kifviewer",
//   define() {
//     var md = require("markdown-it")();

//     md.renderer.rules.kifviewer = tokenizeKifViewer(md);
//     md.inline.ruler.before("emphasis", "kifviewer", kifViewerEmbed(md));
//     // return md;
//   },
// });

module.exports = (options = {}, context) => ({
  name: "vuepress-plugin-kifviewer",
  define() {
    var md = require("markdown-it")().use(require("markdown-it-fontawesome"));
    var Plugin = require("markdown-it-regexp");
    md.use(
      Plugin(/\:fa([\w])-([\w\-]+)\:/, function(match, utils) {
        return (
          '<i class="fa' +
          utils.escape(match[1]) +
          " fa-" +
          utils.escape(match[2]) +
          '"></i>'
        );
      })
    );
    return md;
    // var md = require("markdown-it")();

    // var theMd = md;
    // theMd.renderer.rules.kifviewer = tokenizeKifViewer(theMd);
    // theMd.inline.ruler.before("emphasis", "kifviewer", kifViewerEmbed(theMd));
    // return theMd;
  },
});
