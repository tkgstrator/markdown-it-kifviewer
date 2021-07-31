"use strict";

var md = new require("markdown-it")();
var plugin = require("markdown-it-regexp");

// Vuepress Pluginの書き方テンプレート
module.exports = (options = {}, context) => ({
  define() {
    return KifViewerPlugin(md);
  },
  // プラグイン名はこう書かないとダメっぽい
  name: "vuepress-plugin-kifviewer",
});

function KifViewerPlugin(md) {
  console.log(
    "KifViewer",
    md.utils,
    // md.block,
    md.helpers
    // md.inline,
    // md.linkify
    // md.renderer
  );
  var theMd = md;

  theMd.use(
    plugin(/\:fa([\w])-([\w\-]+)\:/, function(match, utils) {
      return (
        '<i class="fa' +
        utils.escape(match[1]) +
        " fa-" +
        utils.escape(match[2]) +
        '"></i>'
      );
    })
  );
  return theMd;
}
