/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['cli-table/index.js']) {
  _$jscoverage['cli-table/index.js'] = [];
  _$jscoverage['cli-table/index.js'][6] = 0;
  _$jscoverage['cli-table/index.js'][11] = 0;
  _$jscoverage['cli-table/index.js'][20] = 0;
  _$jscoverage['cli-table/index.js'][21] = 0;
  _$jscoverage['cli-table/index.js'][48] = 0;
  _$jscoverage['cli-table/index.js'][54] = 0;
  _$jscoverage['cli-table/index.js'][63] = 0;
  _$jscoverage['cli-table/index.js'][64] = 0;
  _$jscoverage['cli-table/index.js'][65] = 0;
  _$jscoverage['cli-table/index.js'][66] = 0;
  _$jscoverage['cli-table/index.js'][76] = 0;
  _$jscoverage['cli-table/index.js'][77] = 0;
  _$jscoverage['cli-table/index.js'][78] = 0;
  _$jscoverage['cli-table/index.js'][87] = 0;
  _$jscoverage['cli-table/index.js'][89] = 0;
  _$jscoverage['cli-table/index.js'][90] = 0;
  _$jscoverage['cli-table/index.js'][91] = 0;
  _$jscoverage['cli-table/index.js'][92] = 0;
  _$jscoverage['cli-table/index.js'][95] = 0;
  _$jscoverage['cli-table/index.js'][98] = 0;
  _$jscoverage['cli-table/index.js'][100] = 0;
  _$jscoverage['cli-table/index.js'][102] = 0;
  _$jscoverage['cli-table/index.js'][106] = 0;
  _$jscoverage['cli-table/index.js'][107] = 0;
  _$jscoverage['cli-table/index.js'][113] = 0;
  _$jscoverage['cli-table/index.js'][114] = 0;
  _$jscoverage['cli-table/index.js'][115] = 0;
  _$jscoverage['cli-table/index.js'][116] = 0;
  _$jscoverage['cli-table/index.js'][119] = 0;
  _$jscoverage['cli-table/index.js'][120] = 0;
  _$jscoverage['cli-table/index.js'][123] = 0;
  _$jscoverage['cli-table/index.js'][124] = 0;
  _$jscoverage['cli-table/index.js'][128] = 0;
  _$jscoverage['cli-table/index.js'][129] = 0;
  _$jscoverage['cli-table/index.js'][132] = 0;
  _$jscoverage['cli-table/index.js'][133] = 0;
  _$jscoverage['cli-table/index.js'][140] = 0;
  _$jscoverage['cli-table/index.js'][148] = 0;
  _$jscoverage['cli-table/index.js'][150] = 0;
  _$jscoverage['cli-table/index.js'][151] = 0;
  _$jscoverage['cli-table/index.js'][153] = 0;
  _$jscoverage['cli-table/index.js'][155] = 0;
  _$jscoverage['cli-table/index.js'][156] = 0;
  _$jscoverage['cli-table/index.js'][157] = 0;
  _$jscoverage['cli-table/index.js'][158] = 0;
  _$jscoverage['cli-table/index.js'][159] = 0;
  _$jscoverage['cli-table/index.js'][163] = 0;
  _$jscoverage['cli-table/index.js'][164] = 0;
  _$jscoverage['cli-table/index.js'][167] = 0;
  _$jscoverage['cli-table/index.js'][170] = 0;
  _$jscoverage['cli-table/index.js'][171] = 0;
  _$jscoverage['cli-table/index.js'][172] = 0;
  _$jscoverage['cli-table/index.js'][173] = 0;
  _$jscoverage['cli-table/index.js'][175] = 0;
  _$jscoverage['cli-table/index.js'][180] = 0;
  _$jscoverage['cli-table/index.js'][182] = 0;
  _$jscoverage['cli-table/index.js'][183] = 0;
  _$jscoverage['cli-table/index.js'][184] = 0;
  _$jscoverage['cli-table/index.js'][187] = 0;
  _$jscoverage['cli-table/index.js'][191] = 0;
  _$jscoverage['cli-table/index.js'][196] = 0;
  _$jscoverage['cli-table/index.js'][203] = 0;
}
_$jscoverage['cli-table/index.js'][6]++;
var utils = require("./utils"), repeat = utils.repeat, truncate = utils.truncate, pad = utils.pad;
_$jscoverage['cli-table/index.js'][11]++;
require("../../support/colors.js/colors");
_$jscoverage['cli-table/index.js'][20]++;
function Table(options) {
  _$jscoverage['cli-table/index.js'][21]++;
  this.options = utils.options({chars: {"top": "\u00e2\u0094\u0081", "top-mid": "\u00e2\u0094\u00b3", "top-left": "\u00e2\u0094\u008f", "top-right": "\u00e2\u0094\u0093", "bottom": "\u00e2\u0094\u0081", "bottom-mid": "\u00e2\u0094\u00bb", "bottom-left": "\u00e2\u0094\u0097", "bottom-right": "\u00e2\u0094\u009b", "left": "\u00e2\u0094\u0083", "left-mid": "\u00e2\u0094\u00a3", "mid": "\u00e2\u0094\u0081", "mid-mid": "\u00e2\u0095\u008b", "right": "\u00e2\u0094\u0083", "right-mid": "\u00e2\u0094\u00ab"}, truncate: "\u00e2\u0080\u00a6", colWidths: [], colAligns: [], style: {"padding-left": 1, "padding-right": 1, head: ["cyan"]}, head: []}, options);
}
_$jscoverage['cli-table/index.js'][48]++;
;
_$jscoverage['cli-table/index.js'][54]++;
Table.prototype.__proto__ = Array.prototype;
_$jscoverage['cli-table/index.js'][63]++;
Table.prototype.__defineGetter__("width", (function () {
  _$jscoverage['cli-table/index.js'][64]++;
  var str = this.toString().split("\n");
  _$jscoverage['cli-table/index.js'][65]++;
  if (str.length) {
    _$jscoverage['cli-table/index.js'][65]++;
    return str[0].length;
  }
  _$jscoverage['cli-table/index.js'][66]++;
  return 0;
}));
_$jscoverage['cli-table/index.js'][76]++;
Table.prototype.render;
_$jscoverage['cli-table/index.js'][77]++;
Table.prototype.toString = (function () {
  _$jscoverage['cli-table/index.js'][78]++;
  var ret = "", options = this.options, style = options.style, head = options.head, chars = options.chars, truncater = options.truncate, colWidths = options.colWidths || [], totalWidth = 0;
  _$jscoverage['cli-table/index.js'][87]++;
  if (! head.length && ! this.length) {
    _$jscoverage['cli-table/index.js'][87]++;
    return "";
  }
  _$jscoverage['cli-table/index.js'][89]++;
  if (! colWidths.length) {
    _$jscoverage['cli-table/index.js'][90]++;
    this.concat([head]).forEach((function (cells) {
  _$jscoverage['cli-table/index.js'][91]++;
  cells.forEach((function (cell, i) {
  _$jscoverage['cli-table/index.js'][92]++;
  var width = typeof cell == "object" && cell.width != undefined? cell.width: ((typeof cell == "object"? String(cell.text): String(cell)).length + (style["padding-left"] || 0) + (style["padding-right"] || 0));
  _$jscoverage['cli-table/index.js'][95]++;
  colWidths[i] = Math.max(colWidths[i] || 0, width || 0);
}));
}));
  }
  _$jscoverage['cli-table/index.js'][98]++;
  ;
  _$jscoverage['cli-table/index.js'][100]++;
  totalWidth = (colWidths.length == 1? colWidths[0]: colWidths.reduce((function (a, b) {
  _$jscoverage['cli-table/index.js'][102]++;
  return a + b;
}))) + colWidths.length + 1;
  _$jscoverage['cli-table/index.js'][106]++;
  function line(line, left, right, intersection) {
    _$jscoverage['cli-table/index.js'][107]++;
    var width = 0, line = left + repeat(line, totalWidth - 2) + right;
    _$jscoverage['cli-table/index.js'][113]++;
    colWidths.forEach((function (w, i) {
  _$jscoverage['cli-table/index.js'][114]++;
  if (i == colWidths.length - 1) {
    _$jscoverage['cli-table/index.js'][114]++;
    return;
  }
  _$jscoverage['cli-table/index.js'][115]++;
  width += w + 1;
  _$jscoverage['cli-table/index.js'][116]++;
  line = line.substr(0, width) + intersection + line.substr(width + 1);
}));
    _$jscoverage['cli-table/index.js'][119]++;
    ret += line;
}
  _$jscoverage['cli-table/index.js'][120]++;
  ;
  _$jscoverage['cli-table/index.js'][123]++;
  function lineTop() {
    _$jscoverage['cli-table/index.js'][124]++;
    line(chars.top, chars["top-left"] || chars.top, chars["top-right"] || chars.top, chars["top-mid"]);
    _$jscoverage['cli-table/index.js'][128]++;
    ret += "\n";
}
  _$jscoverage['cli-table/index.js'][129]++;
  ;
  _$jscoverage['cli-table/index.js'][132]++;
  function string(str, index) {
    _$jscoverage['cli-table/index.js'][133]++;
    var str = String(typeof str == "object" && str.text? str.text: str), length = str.length, width = colWidths[index] - (style["padding-left"] || 0) - (style["padding-right"] || 0), align = options.colAligns[index] || "left";
    _$jscoverage['cli-table/index.js'][140]++;
    return repeat(" ", style["padding-left"] || 0) + (length == width? str: (length < width? pad(str, width, " ", align == "left"? "right": (align == "middle"? "both": "left")): (truncater? truncate(str, width, truncater): str))) + repeat(" ", style["padding-right"] || 0);
}
  _$jscoverage['cli-table/index.js'][148]++;
  ;
  _$jscoverage['cli-table/index.js'][150]++;
  if (head.length) {
    _$jscoverage['cli-table/index.js'][151]++;
    lineTop();
    _$jscoverage['cli-table/index.js'][153]++;
    ret += chars.left;
    _$jscoverage['cli-table/index.js'][155]++;
    head.forEach((function (th, index) {
  _$jscoverage['cli-table/index.js'][156]++;
  var text = string(th, index);
  _$jscoverage['cli-table/index.js'][157]++;
  if (style.head) {
    _$jscoverage['cli-table/index.js'][158]++;
    style.head.forEach((function (style) {
  _$jscoverage['cli-table/index.js'][159]++;
  text = text[style];
}));
  }
  _$jscoverage['cli-table/index.js'][163]++;
  ret += text;
  _$jscoverage['cli-table/index.js'][164]++;
  ret += chars.right;
}));
    _$jscoverage['cli-table/index.js'][167]++;
    ret += "\n";
  }
  _$jscoverage['cli-table/index.js'][170]++;
  if (this.length) {
    _$jscoverage['cli-table/index.js'][171]++;
    this.forEach((function (cells, i) {
  _$jscoverage['cli-table/index.js'][172]++;
  if (! head.length && i == 0) {
    _$jscoverage['cli-table/index.js'][173]++;
    lineTop();
  }
  else {
    _$jscoverage['cli-table/index.js'][175]++;
    line(chars.mid, chars["left-mid"], chars["right-mid"], chars["mid-mid"]);
    _$jscoverage['cli-table/index.js'][180]++;
    ret += "\n" + chars.left;
    _$jscoverage['cli-table/index.js'][182]++;
    cells.forEach((function (cell, i) {
  _$jscoverage['cli-table/index.js'][183]++;
  ret += string(cell, i);
  _$jscoverage['cli-table/index.js'][184]++;
  ret += chars.right;
}));
    _$jscoverage['cli-table/index.js'][187]++;
    ret += "\n";
  }
}));
  }
  _$jscoverage['cli-table/index.js'][191]++;
  line(chars.bottom, chars["bottom-left"] || chars.bottom, chars["bottom-right"] || chars.bottom, chars["bottom-mid"]);
  _$jscoverage['cli-table/index.js'][196]++;
  return ret;
});
_$jscoverage['cli-table/index.js'][203]++;
module.exports = Table;
_$jscoverage['cli-table/index.js'].source = ["","/**"," * Module dependencies."," */","","var utils = require('./utils')","  , repeat = utils.repeat","  , truncate = utils.truncate","  , pad = utils.pad;","","require('../../support/colors.js/colors');","","/**"," * Table constructor"," *"," * @param {Object} options"," * @api public"," */","","function Table (options){","  this.options = utils.options({","      chars: {","          'top': '&#226;&#148;&#129;'","        , 'top-mid': '&#226;&#148;&#179;'","        , 'top-left': '&#226;&#148;&#143;'","        , 'top-right': '&#226;&#148;&#147;'","        , 'bottom': '&#226;&#148;&#129;'","        , 'bottom-mid': '&#226;&#148;&#187;'","        , 'bottom-left': '&#226;&#148;&#151;' ","        , 'bottom-right': '&#226;&#148;&#155;'","        , 'left': '&#226;&#148;&#131;'","        , 'left-mid': '&#226;&#148;&#163;'","        , 'mid': '&#226;&#148;&#129;'","        , 'mid-mid': '&#226;&#149;&#139;'","        , 'right': '&#226;&#148;&#131;'","        , 'right-mid': '&#226;&#148;&#171;'","      }","    , truncate: '&#226;&#128;&#166;'","    , colWidths: []","    , colAligns: []","    , style: {","          'padding-left': 1","        , 'padding-right': 1","        , head: ['cyan']","      }","    , head: []","  }, options);","};","","/**"," * Inherit from Array."," */","","Table.prototype.__proto__ = Array.prototype;","","/**"," * Width getter"," *"," * @return {Number} width"," * @api public"," */","","Table.prototype.__defineGetter__('width', function (){","  var str = this.toString().split(\"\\n\");","  if (str.length) return str[0].length;","  return 0;","});","","/**"," * Render to a string."," *"," * @return {String} table representation"," * @api public"," */","","Table.prototype.render ","Table.prototype.toString = function (){","  var ret = ''","    , options = this.options","    , style = options.style","    , head = options.head","    , chars = options.chars","    , truncater = options.truncate","    , colWidths = options.colWidths || []","    , totalWidth = 0;","  ","  if (!head.length &amp;&amp; !this.length) return '';","","  if (!colWidths.length){","    this.concat([head]).forEach(function(cells){","      cells.forEach(function(cell, i){","        var width = typeof cell == 'object' &amp;&amp; cell.width != undefined","          ? cell.width ","          : ((typeof cell == 'object' ? String(cell.text) : String(cell)).length + (style['padding-left'] || 0) + (style['padding-right'] || 0))","        colWidths[i] = Math.max(colWidths[i] || 0, width || 0);","      });","    });","  };","","  totalWidth = (colWidths.length == 1 ? colWidths[0] : colWidths.reduce(","    function (a, b){","      return a + b","    })) + colWidths.length + 1;","","  // draws a line","  function line (line, left, right, intersection){","    var width = 0","      , line =","          left","        + repeat(line, totalWidth - 2)","        + right;","","    colWidths.forEach(function (w, i){","      if (i == colWidths.length - 1) return;","      width += w + 1;","      line = line.substr(0, width) + intersection + line.substr(width + 1);","    });","","    ret += line;","  };","","  // draws the top line","  function lineTop (){","    line(chars.top","       , chars['top-left'] || chars.top","       , chars['top-right'] ||  chars.top","       , chars['top-mid']);","    ret += \"\\n\";","  };","","  // renders a string, by padding it or truncating it","  function string (str, index){","    var str = String(typeof str == 'object' &amp;&amp; str.text ? str.text : str)","      , length = str.length","      , width = colWidths[index]","          - (style['padding-left'] || 0)","          - (style['padding-right'] || 0)","      , align = options.colAligns[index] || 'left';","","    return repeat(' ', style['padding-left'] || 0)","         + (length == width ? str :","             (length &lt; width ","              ? pad(str, width, ' ', align == 'left' ? 'right' : ","                  (align == 'middle' ? 'both' : 'left'))","              : (truncater ? truncate(str, width, truncater) : str))","           )","         + repeat(' ', style['padding-right'] || 0);","  };","","  if (head.length){","    lineTop();","","    ret += chars.left;","    ","    head.forEach(function (th, index){","      var text = string(th, index);","      if (style.head){","        style.head.forEach(function(style){","          text = text[style];","        });","      }","","      ret += text;","      ret += chars.right;","    });","","    ret += \"\\n\";","  }","","  if (this.length)","    this.forEach(function (cells, i){","      if (!head.length &amp;&amp; i == 0)","        lineTop();","      else {","        line(chars.mid","           , chars['left-mid']","           , chars['right-mid']","           , chars['mid-mid']);","","        ret += \"\\n\" + chars.left;","","        cells.forEach(function(cell, i){","          ret += string(cell, i);","          ret += chars.right;","        });","","        ret += \"\\n\";","      }","    });","","  line(chars.bottom","     , chars['bottom-left'] || chars.bottom","     , chars['bottom-right'] || chars.bottom","     , chars['bottom-mid']);","","  return ret;","};","","/**"," * Module exports."," */","","module.exports = Table;"];