(function () {
    'use strict';

    // Promise polyfill from https://github.com/taylorhakes/promise-polyfill/blob/master/dist/polyfill.min.js
    !function(e){("object"!=typeof exports||"undefined"==typeof module)&&"function"==typeof define&&define.amd?define(e):e();}(function(){function e(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){return t.reject(e)})})}var n=setTimeout;function a(e){return e&&"undefined"!=typeof e.length}function o(){}function i(e){if(!(this instanceof i)){ throw new TypeError("Promises must be constructed via new"); }if("function"!=typeof e){ throw new TypeError("not a function"); }this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],s(e,this);}function r(o,r){for(;3===o._state;){ o=o._value; }0!==o._state?(o._handled=!0,i._immediateFn(function(){var e=1===o._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(o._value);}catch(t){return void u(r.promise,t)}f(r.promise,n);}else { (1===o._state?f:u)(r.promise,o._value); }})):o._deferreds.push(r);}function f(e,n){try{if(n===e){ throw new TypeError("A promise cannot be resolved with itself."); }if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof i){ return e._state=3,e._value=n,void c(e); }if("function"==typeof t){ return void s(function o(e,n){return function(){e.apply(n,arguments);}}(t,n),e) }}e._state=1,e._value=n,c(e);}catch(r){u(e,r);}}function u(e,n){e._state=2,e._value=n,c(e);}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value);});for(var n=0,t=e._deferreds.length;n<t;n++){ r(e,e._deferreds[n]); }e._deferreds=null;}function l(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t;}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,f(n,e));},function(e){t||(t=!0,u(n,e));});}catch(o){if(t){ return; }t=!0,u(n,o);}}i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,n){var t=new this.constructor(o);return r(this,new l(e,n,t)),t},i.prototype["finally"]=e,i.all=function(n){return new i(function(r,i){if(!a(n)){ return i(new TypeError("Promise.all accepts an array")); }var f=Array.prototype.slice.call(n);if(0===f.length){ return r([]); }var u=f.length;function c(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t){ return void t.call(e,function(e){c(n,e);},i) }}f[n]=e,0==--u&&r(f);}catch(o){i(o);}}for(var e=0;e<f.length;e++){ c(e,f[e]); }})},i.resolve=function(n){return n&&"object"==typeof n&&n.constructor===i?n:new i(function(e){e(n);})},i.reject=function(t){return new i(function(e,n){n(t);})},i.race=function(r){return new i(function(e,n){if(!a(r)){ return n(new TypeError("Promise.race accepts an array")); }for(var t=0,o=r.length;t<o;t++){ i.resolve(r[t]).then(e,n); }})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e);}:function(e){n(e,0);},i._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e);};var t=function(){if("undefined"!=typeof self){ return self; }if("undefined"!=typeof window){ return window; }if("undefined"!=typeof global){ return global; }throw Error("unable to locate global object")}();"function"!=typeof t.Promise?t.Promise=i:t.Promise.prototype["finally"]||(t.Promise.prototype["finally"]=e);});
    // Object.assign from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
    "function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){var arguments$1 = arguments;
    if(null==e){ throw new TypeError("Cannot convert undefined or null to object"); }for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments$1[r];if(null!=o){ for(var c in o){ Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c]); } }}return n},writable:!0,configurable:!0})
    // Element.remove from https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
    ;[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this);}});}));

    // Compressed representation of the Grapheme_Cluster_Break=Extend
    // information from
    // http://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakProperty.txt.
    // Each pair of elements represents a range, as an offet from the
    // previous range and a length. Numbers are in base-36, with the empty
    // string being a shorthand for 1.
    var extend = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(function (s) { return s ? parseInt(s, 36) : 1; });
    // Convert offsets into absolute values
    for (var i = 1; i < extend.length; i++)
        { extend[i] += extend[i - 1]; }
    function isExtendingChar(code) {
        for (var i = 1; i < extend.length; i += 2)
            { if (extend[i] > code)
                { return extend[i - 1] <= code; } }
        return false;
    }
    function isRegionalIndicator(code) {
        return code >= 0x1F1E6 && code <= 0x1F1FF;
    }
    var ZWJ = 0x200d;
    /// Returns a grapheme cluster end _after_ (not equal to) `pos`, if
    /// possible. Moves across surrogate pairs, extending characters,
    /// characters joined with zero-width joiners, and flag emoji.
    function nextClusterBreak(str, pos) {
        if (pos == str.length)
            { return pos; }
        // If pos is in the middle of a surrogate pair, move to its start
        if (pos && surrogateLow(str.charCodeAt(pos)) && surrogateHigh(str.charCodeAt(pos - 1)))
            { pos--; }
        var prev = codePointAt(str, pos);
        pos += codePointSize(prev);
        while (pos < str.length) {
            var next = codePointAt(str, pos);
            if (prev == ZWJ || next == ZWJ || isExtendingChar(next)) {
                pos += codePointSize(next);
                prev = next;
            }
            else if (isRegionalIndicator(next)) {
                var countBefore = 0, i = pos - 2;
                while (i >= 0 && isRegionalIndicator(codePointAt(str, i))) {
                    countBefore++;
                    i -= 2;
                }
                if (countBefore % 2 == 0)
                    { break; }
                else
                    { pos += 2; }
            }
            else {
                break;
            }
        }
        return pos;
    }
    /// Returns a grapheme cluster end _before_ `pos`, if possible.
    function prevClusterBreak(str, pos) {
        while (pos > 0) {
            var found = nextClusterBreak(str, pos - 2);
            if (found < pos)
                { return found; }
            pos--;
        }
        return 0;
    }
    function surrogateLow(ch) { return ch >= 0xDC00 && ch < 0xE000; }
    function surrogateHigh(ch) { return ch >= 0xD800 && ch < 0xDC00; }
    /// Find the code point at the given position in a string (as in the
    /// [`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
    /// string method).
    function codePointAt(str, pos) {
        var code0 = str.charCodeAt(pos);
        if (!surrogateHigh(code0) || pos + 1 == str.length)
            { return code0; }
        var code1 = str.charCodeAt(pos + 1);
        if (!surrogateLow(code1))
            { return code0; }
        return ((code0 - 0xd800) << 10) + (code1 - 0xdc00) + 0x10000;
    }
    /// Given a Unicode codepoint, return the JavaScript string that
    /// respresents it (as in
    /// [`String.fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint).
    function fromCodePoint(code) {
        if (code <= 0xffff)
            { return String.fromCharCode(code); }
        code -= 0x10000;
        return String.fromCharCode((code >> 10) + 0xd800, (code & 1023) + 0xdc00);
    }
    /// The first character that takes up two positions in a JavaScript
    /// string. It is often useful to compare with this after calling
    /// `codePointAt`, to figure out whether your character takes up 1 or
    /// 2 index positions.
    function codePointSize(code) { return code < 0x10000 ? 1 : 2; }

    /// Count the column position at the given offset into the string,
    /// taking extending characters and tab size into account.
    function countColumn(string, n, tabSize) {
        for (var i = 0; i < string.length;) {
            if (string.charCodeAt(i) == 9) {
                n += tabSize - (n % tabSize);
                i++;
            }
            else {
                n++;
                i = nextClusterBreak(string, i);
            }
        }
        return n;
    }
    /// Find the offset that corresponds to the given column position in a
    /// string, taking extending characters and tab size into account.
    function findColumn(string, n, col, tabSize) {
        for (var i = 0; i < string.length;) {
            if (n >= col)
                { return { offset: i, leftOver: 0 }; }
            n += string.charCodeAt(i) == 9 ? tabSize - (n % tabSize) : 1;
            i = nextClusterBreak(string, i);
        }
        return { offset: string.length, leftOver: col - n };
    }

    /// The document tree type.
    var Text = function Text() { };
    /// Get the line description around the given position.
    Text.prototype.lineAt = function lineAt (pos) {
        if (pos < 0 || pos > this.length)
            { throw new RangeError(("Invalid position " + pos + " in document of length " + (this.length))); }
        for (var i = 0; i < lineCache.length; i += 2) {
            if (lineCache[i] != this)
                { continue; }
            var line = lineCache[i + 1];
            if (line.start <= pos && line.end >= pos)
                { return line; }
        }
        return cacheLine(this, this.lineInner(pos, false, 1, 0).finish(this));
    };
    /// Get the description for the given (1-based) line number.
    Text.prototype.line = function line (n) {
        if (n < 1 || n > this.lines)
            { throw new RangeError(("Invalid line number " + n + " in " + (this.lines) + "-line document")); }
        for (var i = 0; i < lineCache.length; i += 2) {
            if (lineCache[i] != this)
                { continue; }
            var line = lineCache[i + 1];
            if (line.number == n)
                { return line; }
        }
        return cacheLine(this, this.lineInner(n, true, 1, 0).finish(this));
    };
    /// Replace a range of the text with the given lines. `text` should
    /// have a length of at least one.
    Text.prototype.replace = function replace (from, to, text) {
        var parts = [];
        this.decompose(0, from, parts);
        parts.push(text);
        this.decompose(to, this.length, parts);
        return TextNode.from(parts, this.length - (to - from) + text.length);
    };
    /// Append another document to this one.
    Text.prototype.append = function append (text) {
        return this.length == 0 ? text : text.length == 0 ? this : TextNode.from([this, text], this.length + text.length);
    };
    /// Retrieve the lines between the given points.
    Text.prototype.slice = function slice (from, to) {
            if ( to === void 0 ) to = this.length;

        var parts = [];
        this.decompose(from, to, parts);
        return TextNode.from(parts, to - from);
    };
    /// Test whether this text is equal to another instance.
    Text.prototype.eq = function eq (other) { return this == other || eqContent(this, other); };
    /// Iterate over the text. When `dir` is `-1`, iteration happens
    /// from end to start. This will return lines and the breaks between
    /// them as separate strings, and for long lines, might split lines
    /// themselves into multiple chunks as well.
    Text.prototype.iter = function iter (dir) {
        if ( dir === void 0 ) dir = 1;
     return new RawTextCursor(this, dir); };
    /// Iterate over a range of the text. When `from` > `to`, the
    /// iterator will run in reverse.
    Text.prototype.iterRange = function iterRange (from, to) {
        if ( to === void 0 ) to = this.length;
     return new PartialTextCursor(this, from, to); };
    /// Iterate over lines in the text, starting at position (_not_ line
    /// number) `from`. An iterator returned by this combines all text
    /// on a line into a single string (which may be expensive for very
    /// long lines), and skips line breaks (its
    /// [`lineBreak`](#text.TextIterator.lineBreak) property is always
    /// false).
    Text.prototype.iterLines = function iterLines (from) {
        if ( from === void 0 ) from = 0;
     return new LineCursor(this, from); };
    /// @internal
    Text.prototype.toString = function toString () { return this.sliceString(0); };
    /// Create a `Text` instance for the given array of lines.
    Text.of = function of (text) {
        if (text.length == 0)
            { throw new RangeError("A document must have at least one line"); }
        if (text.length == 1 && !text[0] && Text.empty)
            { return Text.empty; }
        var length = textLength(text);
        return length < 1024 /* MaxLeaf */ ? new TextLeaf(text, length) : TextNode.from(TextLeaf.split(text, []), length);
    };
    if (typeof Symbol != "undefined")
        { Text.prototype[Symbol.iterator] = function () { return this.iter(); }; }
    var lineCache = [], lineCachePos = -2, lineCacheSize = 12;
    function cacheLine(text, line) {
        lineCachePos = (lineCachePos + 2) % lineCacheSize;
        lineCache[lineCachePos] = text;
        lineCache[lineCachePos + 1] = line;
        return line;
    }
    // Leaves store an array of strings. There are always line breaks
    // between these strings (though not between adjacent Text nodes).
    // These are limited in length, so that bigger documents are
    // constructed as a tree structure. Long lines will be broken into a
    // number of single-line leaves.
    var TextLeaf = /*@__PURE__*/(function (Text) {
        function TextLeaf(text, length) {
            if ( length === void 0 ) length = textLength(text);

            Text.call(this);
            this.text = text;
            this.length = length;
        }

        if ( Text ) TextLeaf.__proto__ = Text;
        TextLeaf.prototype = Object.create( Text && Text.prototype );
        TextLeaf.prototype.constructor = TextLeaf;

        var prototypeAccessors = { lines: { configurable: true },children: { configurable: true } };
        prototypeAccessors.lines.get = function () { return this.text.length; };
        prototypeAccessors.children.get = function () { return null; };
        TextLeaf.prototype.lineInner = function lineInner (target, isLine, line, offset) {
            for (var i = 0;; i++) {
                var string = this.text[i], end = offset + string.length;
                if ((isLine ? line : end) >= target)
                    { return new Line(offset, end, line, string); }
                offset = end + 1;
                line++;
            }
        };
        TextLeaf.prototype.decompose = function decompose (from, to, target) {
            target.push(new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from)));
        };
        TextLeaf.prototype.lastLineLength = function lastLineLength () { return this.text[this.text.length - 1].length; };
        TextLeaf.prototype.firstLineLength = function firstLineLength () { return this.text[0].length; };
        TextLeaf.prototype.replace = function replace (from, to, text) {
            var newLen = this.length + text.length - (to - from);
            if (newLen >= 1024 /* MaxLeaf */ || !(text instanceof TextLeaf))
                { return Text.prototype.replace.call(this, from, to, text); }
            return new TextLeaf(appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to), newLen);
        };
        TextLeaf.prototype.sliceString = function sliceString (from, to, lineSep) {
            if ( to === void 0 ) to = this.length;
            if ( lineSep === void 0 ) lineSep = "\n";

            var result = "";
            for (var pos = 0, i = 0; pos <= to && i < this.text.length; i++) {
                var line = this.text[i], end = pos + line.length;
                if (pos > from && i)
                    { result += lineSep; }
                if (from < end && to > pos)
                    { result += line.slice(Math.max(0, from - pos), to - pos); }
                pos = end + 1;
            }
            return result;
        };
        TextLeaf.prototype.flatten = function flatten (target) {
            target[target.length - 1] += this.text[0];
            for (var i = 1; i < this.text.length; i++)
                { target.push(this.text[i]); }
        };
        TextLeaf.split = function split (text, target) {
            var part = [], length = -1;
            for (var i = 0, list = text; i < list.length; i += 1) {
                var line = list[i];

                for (;;) {
                    var newLength = length + line.length + 1;
                    if (newLength < 512 /* BaseLeaf */) {
                        length = newLength;
                        part.push(line);
                        break;
                    }
                    var cut = 512 /* BaseLeaf */ - length - 1, after = line.charCodeAt(cut);
                    if (after >= 0xdc00 && after < 0xe000)
                        { cut++; }
                    part.push(line.slice(0, cut));
                    target.push(new TextLeaf(part, 512 /* BaseLeaf */));
                    line = line.slice(cut);
                    length = -1;
                    part = [];
                }
            }
            if (length != -1)
                { target.push(new TextLeaf(part, length)); }
            return target;
        };

        Object.defineProperties( TextLeaf.prototype, prototypeAccessors );

        return TextLeaf;
    }(Text));
    // Nodes provide the tree structure of the `Text` type. They store a
    // number of other nodes or leaves, taking care to balance itself on
    // changes.
    var TextNode = /*@__PURE__*/(function (Text) {
        function TextNode(children, length) {
            Text.call(this);
            this.children = children;
            this.length = length;
            this.lines = 1;
            for (var i = 0, list = children; i < list.length; i += 1)
                {
                var child = list[i];

                this.lines += child.lines - 1;
            }
        }

        if ( Text ) TextNode.__proto__ = Text;
        TextNode.prototype = Object.create( Text && Text.prototype );
        TextNode.prototype.constructor = TextNode;
        TextNode.prototype.lineInner = function lineInner (target, isLine, line, offset) {
            for (var i = 0;; i++) {
                var child = this.children[i], end = offset + child.length, endLine = line + child.lines - 1;
                if ((isLine ? endLine : end) >= target) {
                    var inner = child.lineInner(target, isLine, line, offset), add = (void 0);
                    if (inner.from == offset && (add = this.lineLengthTo(i))) {
                        inner.from -= add;
                        inner.content = null;
                    }
                    if (inner.to == end && (add = this.lineLengthFrom(i + 1))) {
                        inner.to += add;
                        inner.content = null;
                    }
                    return inner;
                }
                offset = end;
                line = endLine;
            }
        };
        TextNode.prototype.decompose = function decompose (from, to, target) {
            for (var i = 0, pos = 0; pos < to && i < this.children.length; i++) {
                var child = this.children[i], end = pos + child.length;
                if (from < end && to > pos) {
                    if (pos >= from && end <= to)
                        { target.push(child); }
                    else
                        { child.decompose(from - pos, to - pos, target); }
                }
                pos = end;
            }
        };
        TextNode.prototype.lineLengthTo = function lineLengthTo (to) {
            var length = 0;
            for (var i = to - 1; i >= 0; i--) {
                var child = this.children[i];
                if (child.lines > 1)
                    { return length + child.lastLineLength(); }
                length += child.length;
            }
            return length;
        };
        TextNode.prototype.lastLineLength = function lastLineLength () { return this.lineLengthTo(this.children.length); };
        TextNode.prototype.lineLengthFrom = function lineLengthFrom (from) {
            var length = 0;
            for (var i = from; i < this.children.length; i++) {
                var child = this.children[i];
                if (child.lines > 1)
                    { return length + child.firstLineLength(); }
                length += child.length;
            }
            return length;
        };
        TextNode.prototype.firstLineLength = function firstLineLength () { return this.lineLengthFrom(0); };
        TextNode.prototype.replace = function replace (from, to, text) {
            // Looks like a small change, try to optimize
            if (text.length < 512 /* BaseLeaf */ && to - from < 512 /* BaseLeaf */) {
                var lengthDiff = text.length - (to - from);
                for (var i = 0, pos = 0; i < this.children.length; i++) {
                    var child = this.children[i], end = pos + child.length;
                    // Fast path: if the change only affects one child and the
                    // child's size remains in the acceptable range, only update
                    // that child
                    if (from >= pos && to <= end &&
                        child.length + lengthDiff < (this.length + lengthDiff) >> (3 /* BranchShift */ - 1) &&
                        child.length + lengthDiff > 0) {
                        var copy = this.children.slice();
                        copy[i] = child.replace(from - pos, to - pos, text);
                        return new TextNode(copy, this.length + lengthDiff);
                    }
                    pos = end;
                }
            }
            return Text.prototype.replace.call(this, from, to, text);
        };
        TextNode.prototype.sliceString = function sliceString (from, to, lineSep) {
            if ( to === void 0 ) to = this.length;
            if ( lineSep === void 0 ) lineSep = "\n";

            var result = "";
            for (var i = 0, pos = 0; pos < to && i < this.children.length; i++) {
                var child = this.children[i], end = pos + child.length;
                if (from < end && to > pos) {
                    var part = child.sliceString(from - pos, to - pos, lineSep);
                    if (from >= pos && to <= end)
                        { return part; }
                    result += part;
                }
                pos = end;
            }
            return result;
        };
        TextNode.prototype.flatten = function flatten (target) {
            for (var i = 0, list = this.children; i < list.length; i += 1)
                {
                var child = list[i];

                child.flatten(target);
            }
        };
        TextNode.from = function from (children, length) {
            if (!children.every(function (ch) { return ch instanceof Text; }))
                { throw new Error("NOP"); }
            if (length < 1024 /* MaxLeaf */) {
                var text = [""];
                for (var i = 0, list = children; i < list.length; i += 1)
                    {
                    var child = list[i];

                    child.flatten(text);
                }
                return new TextLeaf(text, length);
            }
            var chunkLength = Math.max(512 /* BaseLeaf */, length >> 3 /* BranchShift */), maxLength = chunkLength << 1, minLength = chunkLength >> 1;
            var chunked = [], currentLength = 0, currentChunk = [];
            function add(child) {
                var childLength = child.length, last;
                if (!childLength)
                    { return; }
                if (childLength > maxLength && child instanceof TextNode) {
                    for (var i = 0, list = child.children; i < list.length; i += 1)
                        {
                        var node = list[i];

                        add(node);
                    }
                }
                else if (childLength > minLength && (currentLength > minLength || currentLength == 0)) {
                    flush();
                    chunked.push(child);
                }
                else if (child instanceof TextLeaf && currentLength > 0 &&
                    (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf &&
                    child.length + last.length <= 512 /* BaseLeaf */) {
                    currentLength += childLength;
                    currentChunk[currentChunk.length - 1] = new TextLeaf(appendText(child.text, last.text.slice()), child.length + last.length);
                }
                else {
                    if (currentLength + childLength > chunkLength)
                        { flush(); }
                    currentLength += childLength;
                    currentChunk.push(child);
                }
            }
            function flush() {
                if (currentLength == 0)
                    { return; }
                chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLength));
                currentLength = 0;
                currentChunk.length = 0;
            }
            for (var i$1 = 0, list$1 = children; i$1 < list$1.length; i$1 += 1)
                {
                var child$1 = list$1[i$1];

                add(child$1);
            }
            flush();
            return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
        };

        return TextNode;
    }(Text));
    Text.empty = Text.of([""]);
    function textLength(text) {
        var length = -1;
        for (var i = 0, list = text; i < list.length; i += 1)
            {
            var line = list[i];

            length += line.length + 1;
        }
        return length;
    }
    function appendText(text, target, from, to) {
        if ( from === void 0 ) from = 0;
        if ( to === void 0 ) to = 1e9;

        for (var pos = 0, i = 0, first = true; i < text.length && pos <= to; i++) {
            var line = text[i], end = pos + line.length;
            if (end >= from) {
                if (end > to)
                    { line = line.slice(0, to - pos); }
                if (pos < from)
                    { line = line.slice(from - pos); }
                if (first) {
                    target[target.length - 1] += line;
                    first = false;
                }
                else
                    { target.push(line); }
            }
            pos = end + 1;
        }
        return target;
    }
    function sliceText(text, from, to) {
        return appendText(text, [""], from, to);
    }
    function eqContent(a, b) {
        if (a.length != b.length || a.lines != b.lines)
            { return false; }
        var iterA = new RawTextCursor(a), iterB = new RawTextCursor(b);
        for (var offA = 0, offB = 0;;) {
            if (iterA.lineBreak != iterB.lineBreak || iterA.done != iterB.done) {
                return false;
            }
            else if (iterA.done) {
                return true;
            }
            else if (iterA.lineBreak) {
                iterA.next();
                iterB.next();
                offA = offB = 0;
            }
            else {
                var strA = iterA.value.slice(offA), strB = iterB.value.slice(offB);
                if (strA.length == strB.length) {
                    if (strA != strB)
                        { return false; }
                    iterA.next();
                    iterB.next();
                    offA = offB = 0;
                }
                else if (strA.length > strB.length) {
                    if (strA.slice(0, strB.length) != strB)
                        { return false; }
                    offA += strB.length;
                    iterB.next();
                    offB = 0;
                }
                else {
                    if (strB.slice(0, strA.length) != strA)
                        { return false; }
                    offB += strA.length;
                    iterA.next();
                    offA = 0;
                }
            }
        }
    }
    var RawTextCursor = function RawTextCursor(text, dir) {
        if ( dir === void 0 ) dir = 1;

        this.dir = dir;
        this.done = false;
        this.lineBreak = false;
        this.value = "";
        this.nodes = [text];
        this.offsets = [dir > 0 ? 0 : text instanceof TextLeaf ? text.text.length : text.children.length];
    };
    RawTextCursor.prototype.next = function next (skip) {
            if ( skip === void 0 ) skip = 0;

        for (;;) {
            var last = this.nodes.length - 1;
            if (last < 0) {
                this.done = true;
                this.value = "";
                this.lineBreak = false;
                return this;
            }
            var top = this.nodes[last];
            var offset = this.offsets[last];
            if (top instanceof TextLeaf) {
                // Internal offset with lineBreak == false means we have to
                // count the line break at this position
                if (offset != (this.dir > 0 ? 0 : top.text.length) && !this.lineBreak) {
                    this.lineBreak = true;
                    if (skip == 0) {
                        this.value = "\n";
                        return this;
                    }
                    skip--;
                    continue;
                }
                // Otherwise, move to the next string
                var next = top.text[offset - (this.dir < 0 ? 1 : 0)];
                this.offsets[last] = (offset += this.dir);
                if (offset == (this.dir > 0 ? top.text.length : 0)) {
                    this.nodes.pop();
                    this.offsets.pop();
                }
                this.lineBreak = false;
                if (next.length > Math.max(0, skip)) {
                    this.value = skip == 0 ? next : this.dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
                    return this;
                }
                skip -= next.length;
            }
            else if (offset == (this.dir > 0 ? top.children.length : 0)) {
                this.nodes.pop();
                this.offsets.pop();
            }
            else {
                var next$1 = top.children[this.dir > 0 ? offset : offset - 1], len = next$1.length;
                this.offsets[last] = offset + this.dir;
                if (skip > len) {
                    skip -= len;
                }
                else {
                    this.nodes.push(next$1);
                    this.offsets.push(this.dir > 0 ? 0 : next$1 instanceof TextLeaf ? next$1.text.length : next$1.children.length);
                }
            }
        }
    };
    var PartialTextCursor = function PartialTextCursor(text, start, end) {
        this.value = "";
        this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
        if (start > end) {
            this.skip = text.length - start;
            this.limit = start - end;
        }
        else {
            this.skip = start;
            this.limit = end - start;
        }
    };

    var prototypeAccessors$1 = { lineBreak: { configurable: true },done: { configurable: true } };
    PartialTextCursor.prototype.next = function next () {
        if (this.limit <= 0) {
            this.limit = -1;
        }
        else {
            var ref = this.cursor.next(this.skip);
                var value = ref.value;
                var lineBreak = ref.lineBreak;
                var done = ref.done;
            this.skip = 0;
            this.value = value;
            var len = lineBreak ? 1 : value.length;
            if (len > this.limit)
                { this.value = this.cursor.dir > 0 ? value.slice(0, this.limit) : value.slice(len - this.limit); }
            if (done || this.value.length == 0)
                { this.limit = -1; }
            else
                { this.limit -= this.value.length; }
        }
        return this;
    };
    prototypeAccessors$1.lineBreak.get = function () { return this.cursor.lineBreak; };
    prototypeAccessors$1.done.get = function () { return this.limit < 0; };

    Object.defineProperties( PartialTextCursor.prototype, prototypeAccessors$1 );
    var LineCursor = function LineCursor(text, from) {
        if ( from === void 0 ) from = 0;

        this.value = "";
        this.done = false;
        this.cursor = text.iter();
        this.skip = from;
    };

    var prototypeAccessors$2 = { lineBreak: { configurable: true } };
    LineCursor.prototype.next = function next () {
        if (this.cursor.done) {
            this.done = true;
            this.value = "";
            return this;
        }
        for (this.value = "";;) {
            var ref = this.cursor.next(this.skip);
                var value = ref.value;
                var lineBreak = ref.lineBreak;
                var done = ref.done;
            this.skip = 0;
            if (done || lineBreak)
                { return this; }
            this.value += value;
        }
    };
    prototypeAccessors$2.lineBreak.get = function () { return false; };

    Object.defineProperties( LineCursor.prototype, prototypeAccessors$2 );
    // FIXME rename start/end to from/to for consistency with other types?
    /// This type describes a line in the document. It is created
    /// on-demand when lines are [queried](#text.Text.lineAt).
    var Line = function Line(
    /// The position of the start of the line.
    from, 
    /// The position at the end of the line (_before_ the line break,
    /// if this isn't the last line).
    to, 
    /// This line's line number (1-based).
    number, 
    /// @internal
    content) {
        this.from = from;
        this.to = to;
        this.number = number;
        this.content = content;
    };

    var prototypeAccessors$3 = { length: { configurable: true } };
    /// The length of the line (not including any line break after it).
    prototypeAccessors$3.length.get = function () { return this.to - this.from; };
    /// Retrieve a part of the content of this line. This is a method,
    /// rather than, say, a string property, to avoid concatenating long
    /// lines whenever they are accessed. Try to write your code, if it
    /// is going to be doing a lot of line-reading, to read only the
    /// parts it needs.
    Line.prototype.slice = function slice (from, to) {
            if ( from === void 0 ) from = 0;
            if ( to === void 0 ) to = this.length;

        if (typeof this.content == "string")
            { return to == from + 1 ? this.content.charAt(from) : this.content.slice(from, to); }
        if (from == to)
            { return ""; }
        var result = this.content.slice(from, to);
        if (from == 0 && to == this.length)
            { this.content = result; }
        return result;
    };
    /// @internal
    Line.prototype.finish = function finish (text) {
        if (this.content == null)
            { this.content = new LineContent(text, this.from); }
        return this;
    };
    /// Find the next (or previous if `forward` is false) grapheme
    /// cluster break from the given start position (as an offset inside
    /// the line, not the document). Will return a position greater than
    /// (or less than if `forward` is false) `start` unless there is no
    /// such index in the string.
    Line.prototype.findClusterBreak = function findClusterBreak (start, forward) {
        if (start < 0 || start > this.length)
            { throw new RangeError("Invalid position given to Line.findClusterBreak"); }
        var contextStart, context;
        if (this.content == "string") {
            contextStart = this.from;
            context = this.content;
        }
        else {
            contextStart = Math.max(0, start - 256);
            context = this.slice(contextStart, Math.min(this.length, contextStart + 512));
        }
        return (forward ? nextClusterBreak : prevClusterBreak)(context, start - contextStart) + contextStart;
    };

    Object.defineProperties( Line.prototype, prototypeAccessors$3 );
    var LineContent = function LineContent(doc, start) {
        this.doc = doc;
        this.start = start;
        this.cursor = null;
        this.strings = null;
    };
    // FIXME quadratic complexity (somewhat) when iterating long lines in small pieces
    LineContent.prototype.slice = function slice (from, to) {
        if (!this.cursor) {
            this.cursor = this.doc.iter();
            this.strings = [this.cursor.next(this.start).value];
        }
        for (var result = "", pos = 0, i = 0;; i++) {
            if (i == this.strings.length)
                { this.strings.push(this.cursor.next().value); }
            var string = this.strings[i], end = pos + string.length;
            if (end <= from)
                { continue; }
            result += string.slice(Math.max(0, from - pos), Math.min(string.length, to - pos));
            if (end >= to)
                { return result; }
            pos += string.length;
        }
    };

    var _m1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Line: Line,
        Text: Text,
        codePointAt: codePointAt,
        codePointSize: codePointSize,
        countColumn: countColumn,
        findColumn: findColumn,
        fromCodePoint: fromCodePoint,
        nextClusterBreak: nextClusterBreak,
        prevClusterBreak: prevClusterBreak
    });

    /// The default maximum length of a `TreeBuffer` node.
    var DefaultBufferLength = 1024;
    var Iteration = function Iteration(enter, leave) {
        this.enter = enter;
        this.leave = leave;
        this.result = undefined;
    };

    var prototypeAccessors = { done: { configurable: true } };
    prototypeAccessors.done.get = function () { return this.result !== undefined; };
    Iteration.prototype.doEnter = function doEnter (type, start, end) {
        var value = this.enter(type, start, end);
        if (value === undefined)
            { return true; }
        if (value !== false)
            { this.result = value; }
        return false;
    };

    Object.defineProperties( Iteration.prototype, prototypeAccessors );
    var nextPropID = 0;
    /// Each [node type](#tree.NodeType) can have metadata associated with
    /// it in props. Instances of this class represent prop names.
    var NodeProp = function NodeProp(ref) {
        if ( ref === void 0 ) ref = {};
        var deserialize = ref.deserialize;

        this.id = nextPropID++;
        this.deserialize = deserialize || (function () {
            throw new Error("This node type doesn't define a deserialize function");
        });
    };
    /// Create a string-valued node prop whose deserialize function is
    /// the identity function.
    NodeProp.string = function string () { return new NodeProp({ deserialize: function (str) { return str; } }); };
    /// Create a number-valued node prop whose deserialize function is
    /// just `Number`.
    NodeProp.number = function number () { return new NodeProp({ deserialize: Number }); };
    /// Creates a boolean-valued node prop whose deserialize function
    /// returns true for any input.
    NodeProp.flag = function flag () { return new NodeProp({ deserialize: function () { return true; } }); };
    /// Store a value for this prop in the given object. This can be
    /// useful when building up a prop object to pass to the
    /// [`NodeType`](#tree.NodeType) constructor. Returns its first
    /// argument.
    NodeProp.prototype.set = function set (propObj, value) {
        propObj[this.id] = value;
        return propObj;
    };
    /// This is meant to be used with
    /// [`NodeGroup.extend`](#tree.NodeGroup.extend) or
    /// [`Parser.withProps`](#lezer.Parser.withProps) to compute prop
    /// values for each node type in the group. Takes a [match
    /// object](#tree.NodeType.match) or function that returns undefined
    /// if the node type doesn't get this prop, and the prop's value if
    /// it does.
    NodeProp.prototype.add = function add (match) {
        return new NodePropSource(this, typeof match == "function" ? match : NodeType.match(match));
    };
    /// The special node type that the parser uses to represent parse
    /// errors has this flag set. (You shouldn't use it for custom nodes
    /// that represent erroneous content.)
    NodeProp.error = NodeProp.flag();
    /// Nodes that were produced by skipped expressions (such as
    /// comments) have this prop set to true.
    NodeProp.skipped = NodeProp.flag();
    /// Prop that is used to describe matching delimiters. For opening
    /// delimiters, this holds an array of node names (written as a
    /// space-separated string when declaring this prop in a grammar)
    /// for the node types of closing delimiters that match it.
    NodeProp.closedBy = new NodeProp({ deserialize: function (str) { return str.split(" "); } });
    /// The inverse of [`openedBy`](#tree.NodeProp^closedBy). This is
    /// attached to closing delimiters, holding an array of node names
    /// of types of matching opening delimiters.
    NodeProp.openedBy = new NodeProp({ deserialize: function (str) { return str.split(" "); } });
    /// Indicates that this node indicates a top level document.
    NodeProp.top = NodeProp.flag();
    /// Type returned by [`NodeProp.add`](#tree.NodeProp.add). Describes
    /// the way a prop should be added to each node type in a node group.
    var NodePropSource = function NodePropSource(
    /// @internal
    prop, 
    /// @internal
    f) {
        this.prop = prop;
        this.f = f;
    };
    /// Each node in a syntax tree has a node type associated with it.
    var NodeType = function NodeType(
    /// The name of the node type. Not necessarily unique, but if the
    /// grammar was written properly, different node types with the
    /// same name within a node group should play the same semantic
    /// role.
    name, 
    /// @internal
    props, 
    /// The id of this node in its group. Corresponds to the term ids
    /// used in the parser.
    id) {
        this.name = name;
        this.props = props;
        this.id = id;
    };
    /// Retrieves a node prop for this type. Will return `undefined` if
    /// the prop isn't present on this node.
    NodeType.prototype.prop = function prop (prop$1) { return this.props[prop$1.id]; };
    /// Create a function from node types to arbitrary values by
    /// specifying an object whose property names are node names. Often
    /// useful with [`NodeProp.add`](#tree.NodeProp.add). You can put
    /// multiple node names, separated by spaces, in a single property
    /// name to map multiple node names to a single value.
    NodeType.match = function match (map) {
        var direct = Object.create(null);
        for (var prop in map)
            { for (var i = 0, list = prop.split(" "); i < list.length; i += 1)
                {
                        var name = list[i];

                        direct[name] = map[prop];
                    } }
        return function (node) { return direct[node.name]; };
    };
    /// An empty dummy node type to use when no actual type is available.
    NodeType.none = new NodeType("", Object.create(null), 0);
    /// A node group holds a collection of node types. It is used to
    /// compactly represent trees by storing their type ids, rather than a
    /// full pointer to the type object, in a number array. Each parser
    /// [has](#lezer.Parser.group) a node group, and [tree
    /// buffers](#tree.TreeBuffer) can only store collections of nodes
    /// from the same group. A group can have a maximum of 2**16 (65536)
    /// node types in it, so that the ids fit into 16-bit typed array
    /// slots.
    var NodeGroup = function NodeGroup(
    /// The node types in this group, by id.
    types) {
        this.types = types;
        for (var i = 0; i < types.length; i++)
            { if (types[i].id != i)
                { throw new RangeError("Node type ids should correspond to array positions when creating a node group"); } }
    };
    /// Create a copy of this group with some node properties added. The
    /// arguments to this method should be created with
    /// [`NodeProp.add`](#tree.NodeProp.add).
    NodeGroup.prototype.extend = function extend () {
            var props = [], len = arguments.length;
            while ( len-- ) props[ len ] = arguments[ len ];

        var newTypes = [];
        for (var i$1 = 0, list$1 = this.types; i$1 < list$1.length; i$1 += 1) {
            var type = list$1[i$1];

                var newProps = null;
            for (var i = 0, list = props; i < list.length; i += 1) {
                var source = list[i];

                    var value = source.f(type);
                if (value !== undefined) {
                    if (!newProps) {
                        newProps = Object.create(null);
                        for (var prop in type.props)
                            { newProps[prop] = type.props[prop]; }
                    }
                    newProps[source.prop.id] = value;
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id) : type);
        }
        return new NodeGroup(newTypes);
    };
    /// A subtree is a representation of part of the syntax tree. It may
    /// either be the tree root, or a tagged node.
    var Subtree = function Subtree () {};

    var prototypeAccessors$1$1 = { name: { configurable: true },depth: { configurable: true },root: { configurable: true },firstChild: { configurable: true },lastChild: { configurable: true } };

    prototypeAccessors$1$1.name.get = function () { return this.type.name; };
    /// The depth (number of parent nodes) of this subtree
    prototypeAccessors$1$1.depth.get = function () {
        var d = 0;
        for (var p = this.parent; p; p = p.parent)
            { d++; }
        return d;
    };
    /// The root of the tree that this subtree is part of
    prototypeAccessors$1$1.root.get = function () {
        var cx = this;
        while (cx.parent)
            { cx = cx.parent; }
        return cx;
    };
    /// Find the node at a given position. By default, this will return
    /// the lowest-depth subtree that covers the position from both
    /// sides, meaning that nodes starting or ending at the position
    /// aren't entered. You can pass a `side` of `-1` to enter nodes
    /// that end at the position, or `1` to enter nodes that start
    /// there.
    Subtree.prototype.resolve = function resolve (pos, side) {
            if ( side === void 0 ) side = 0;

        var result = this.resolveAt(pos);
        // FIXME this is slightly inefficient in that it scans the result
        // of resolveAt twice (but further complicating child-finding
        // logic seems unattractive as well)
        if (side != 0)
            { for (;;) {
                var child = (side < 0 ? result.childBefore(pos) : result.childAfter(pos));
                if (!child || (side < 0 ? child.end : child.start) != pos)
                    { break; }
                result = child;
            } }
        return result;
    };
    /// Get the first child of this subtree.
    prototypeAccessors$1$1.firstChild.get = function () { return this.childAfter(this.start - 1); };
    /// Find the last child of this subtree.
    prototypeAccessors$1$1.lastChild.get = function () { return this.childBefore(this.end + 1); };

    Object.defineProperties( Subtree.prototype, prototypeAccessors$1$1 );
    /// A piece of syntax tree. There are two ways to approach these
    /// trees: the way they are actually stored in memory, and the
    /// convenient way.
    ///
    /// Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
    /// objects. By packing detail information into `TreeBuffer` leaf
    /// nodes, the representation is made a lot more memory-efficient.
    ///
    /// However, when you want to actually work with tree nodes, this
    /// representation is very awkward, so most client code will want to
    /// use the `Subtree` interface instead, which provides a view on some
    /// part of this data structure, and can be used (through `resolve`,
    /// for example) to zoom in on any single node.
    var Tree = /*@__PURE__*/(function (Subtree) {
        function Tree(
        /// @internal
        type, 
        /// The tree's child nodes. Children small enough to fit in a
        /// `TreeBuffer` will be represented as such, other children can be
        /// further `Tree` instances with their own internal structure.
        children, 
        /// The positions (offsets relative to the start of this tree) of
        /// the children.
        positions, 
        /// The total length of this tree @internal
        length) {
            Subtree.call(this);
            this.type = type;
            this.children = children;
            this.positions = positions;
            this.length = length;
        }

        if ( Subtree ) Tree.__proto__ = Subtree;
        Tree.prototype = Object.create( Subtree && Subtree.prototype );
        Tree.prototype.constructor = Tree;

        var prototypeAccessors$2 = { start: { configurable: true },end: { configurable: true } };
        /// @internal
        prototypeAccessors$2.start.get = function () { return 0; };
        /// @internal
        prototypeAccessors$2.end.get = function () { return this.length; };
        /// @internal
        Tree.prototype.toString = function toString () {
            var children = this.children.map(function (c) { return c.toString(); }).join();
            return !this.name ? children :
                (/\W/.test(this.name) && !this.type.prop(NodeProp.error) ? JSON.stringify(this.name) : this.name) +
                    (children.length ? "(" + children + ")" : "");
        };
        Tree.prototype.partial = function partial (start, end, offset, children, positions) {
            for (var i = 0; i < this.children.length; i++) {
                var from = this.positions[i];
                if (from > end)
                    { break; }
                var child = this.children[i], to = from + child.length;
                if (to < start)
                    { continue; }
                if (start <= from && end >= to) {
                    children.push(child);
                    positions.push(from + offset);
                }
                else if (child instanceof Tree) {
                    child.partial(start - from, end - from, offset + from, children, positions);
                }
            }
        };
        /// Apply a set of edits to a tree, removing all nodes that were
        /// touched by the edits, and moving remaining nodes so that their
        /// positions are updated for insertions/deletions before them. This
        /// is likely to destroy a lot of the structure of the tree, and
        /// mostly useful for extracting the nodes that can be reused in a
        /// subsequent incremental re-parse.
        Tree.prototype.applyChanges = function applyChanges (changes) {
            if (changes.length == 0)
                { return this; }
            var children = [], positions = [];
            function cutAt(tree, pos, side) {
                var found = -1;
                tree.iterate({
                    from: pos,
                    to: side < 0 ? 0 : tree.length,
                    enter: function enter() { return found < 0 ? undefined : false; },
                    leave: function leave(type, start, end) {
                        if (found < 0 && (side < 0 ? end <= pos : start >= pos) && !type.prop(NodeProp.error))
                            { found = side < 0 ? Math.min(pos, end - 1) : Math.max(pos, start + 1); }
                    }
                });
                return found > -1 ? found : side < 0 ? 0 : tree.length;
            }
            var off = 0;
            for (var i = 0, pos = 0;; i++) {
                var next = i == changes.length ? null : changes[i];
                var nextPos = next ? cutAt(this, next.fromA, -1) : this.length;
                if (nextPos > pos)
                    { this.partial(pos, nextPos, off, children, positions); }
                if (!next)
                    { break; }
                pos = cutAt(this, next.toA, 1);
                off += (next.toB - next.fromB) - (next.toA - next.fromA);
            }
            return new Tree(NodeType.none, children, positions, this.length + off);
        };
        /// Take the part of the tree up to the given position.
        Tree.prototype.cut = function cut (at) {
            if (at >= this.length)
                { return this; }
            var children = [], positions = [];
            for (var i = 0; i < this.children.length; i++) {
                var from = this.positions[i];
                if (from >= at)
                    { break; }
                var child = this.children[i], to = from + child.length;
                children.push(to <= at ? child : child.cut(at - from));
                positions.push(from);
            }
            return new Tree(this.type, children, positions, at);
        };
        /// @internal
        Tree.prototype.iterate = function iterate (ref) {
            var from = ref.from; if ( from === void 0 ) from = this.start;
            var to = ref.to; if ( to === void 0 ) to = this.end;
            var enter = ref.enter;
            var leave = ref.leave;

            var iter = new Iteration(enter, leave);
            this.iterInner(from, to, 0, iter);
            return iter.result;
        };
        /// @internal
        Tree.prototype.iterInner = function iterInner (from, to, offset, iter) {
            if (this.type.name && !iter.doEnter(this.type, offset, offset + this.length))
                { return; }
            if (from <= to) {
                for (var i = 0; i < this.children.length && !iter.done; i++) {
                    var child = this.children[i], start = this.positions[i] + offset, end = start + child.length;
                    if (start > to)
                        { break; }
                    if (end < from)
                        { continue; }
                    child.iterInner(from, to, start, iter);
                }
            }
            else {
                for (var i$1 = this.children.length - 1; i$1 >= 0 && !iter.done; i$1--) {
                    var child$1 = this.children[i$1], start$1 = this.positions[i$1] + offset, end$1 = start$1 + child$1.length;
                    if (end$1 < to)
                        { break; }
                    if (start$1 > from)
                        { continue; }
                    child$1.iterInner(from, to, start$1, iter);
                }
            }
            if (iter.leave && this.type.name)
                { iter.leave(this.type, offset, offset + this.length); }
            return;
        };
        /// @internal
        Tree.prototype.resolveAt = function resolveAt (pos) {
            if (cacheRoot == this) {
                for (var tree = cached;;) {
                    var next = tree.parent;
                    if (!next)
                        { break; }
                    if (tree.start < pos && tree.end > pos)
                        { return tree.resolve(pos); }
                    tree = next;
                }
            }
            cacheRoot = this;
            return cached = this.resolveInner(pos, 0, this);
        };
        /// @internal
        Tree.prototype.childBefore = function childBefore (pos) {
            return this.findChild(pos, -1, 0, this);
        };
        /// @internal
        Tree.prototype.childAfter = function childAfter (pos) {
            return this.findChild(pos, 1, 0, this);
        };
        /// @internal
        Tree.prototype.findChild = function findChild (pos, side, start, parent) {
            for (var i = 0; i < this.children.length; i++) {
                var childStart = this.positions[i] + start, select = -1;
                if (childStart >= pos) {
                    if (side < 0 && i > 0)
                        { select = i - 1; }
                    else if (side > 0)
                        { select = i; }
                    else
                        { break; }
                }
                if (select < 0 && (childStart + this.children[i].length > pos || side < 0 && i == this.children.length - 1))
                    { select = i; }
                if (select >= 0) {
                    var child = this.children[select], childStart$1 = this.positions[select] + start;
                    if (child.length == 0 && childStart$1 == pos)
                        { continue; }
                    if (child instanceof Tree) {
                        if (child.type.name)
                            { return new NodeSubtree(child, childStart$1, parent); }
                        return child.findChild(pos, side, childStart$1, parent);
                    }
                    else {
                        var found = child.findIndex(pos, side, childStart$1, 0, child.buffer.length);
                        if (found > -1)
                            { return new BufferSubtree(child, childStart$1, found, parent); }
                    }
                }
            }
            return null;
        };
        /// @internal
        Tree.prototype.resolveInner = function resolveInner (pos, start, parent) {
            var found = this.findChild(pos, 0, start, parent);
            return found ? found.resolveAt(pos) : parent;
        };
        /// Append another tree to this tree. `other` must have empty space
        /// big enough to fit this tree at its start.
        Tree.prototype.append = function append (other) {
            if (other.children.length && other.positions[0] < this.length)
                { throw new Error("Can't append overlapping trees"); }
            return new Tree(this.type, this.children.concat(other.children), this.positions.concat(other.positions), other.length);
        };
        /// Balance the direct children of this tree.
        Tree.prototype.balance = function balance (maxBufferLength) {
            if ( maxBufferLength === void 0 ) maxBufferLength = DefaultBufferLength;

            return this.children.length <= BalanceBranchFactor ? this
                : balanceRange(this.type, NodeType.none, this.children, this.positions, 0, this.children.length, 0, maxBufferLength, this.length);
        };
        /// Build a tree from a postfix-ordered buffer of node information,
        /// or a cursor over such a buffer. 
        Tree.build = function build (data) { return buildTree(data); };

        Object.defineProperties( Tree.prototype, prototypeAccessors$2 );

        return Tree;
    }(Subtree));
    /// The empty tree
    Tree.empty = new Tree(NodeType.none, [], [], 0);
    Tree.prototype.parent = null;
    // Top-level `resolveAt` calls store their last result here, so that
    // if the next call is near the last, parent trees can be cheaply
    // reused.
    var cacheRoot = Tree.empty;
    var cached = Tree.empty;
    /// Tree buffers contain (type, start, end, endIndex) quads for each
    /// node. In such a buffer, nodes are stored in prefix order (parents
    /// before children, with the endIndex of the parent indicating which
    /// children belong to it)
    var TreeBuffer = function TreeBuffer(
    /// @internal
    buffer, 
    // The total length of the group of nodes in the buffer.
    length, 
    /// @internal
    group, 
    /// An optional type tag, used to tag a buffer as being part of a
    /// repetition @internal
    type) {
        if ( type === void 0 ) type = NodeType.none;

        this.buffer = buffer;
        this.length = length;
        this.group = group;
        this.type = type;
    };
    /// @internal
    TreeBuffer.prototype.toString = function toString () {
        var parts = [];
        for (var index = 0; index < this.buffer.length;)
            { index = this.childToString(index, parts); }
        return parts.join(",");
    };
    /// @internal
    TreeBuffer.prototype.childToString = function childToString (index, parts) {
        var id = this.buffer[index], endIndex = this.buffer[index + 3];
        var type = this.group.types[id], result = type.name;
        if (/\W/.test(result) && !type.prop(NodeProp.error))
            { result = JSON.stringify(result); }
        index += 4;
        if (endIndex > index) {
            var children = [];
            while (index < endIndex)
                { index = this.childToString(index, children); }
            result += "(" + children.join(",") + ")";
        }
        parts.push(result);
        return index;
    };
    /// @internal
    TreeBuffer.prototype.cut = function cut (at) {
        var cutPoint = 0;
        while (cutPoint < this.buffer.length && this.buffer[cutPoint + 1] < at)
            { cutPoint += 4; }
        var newBuffer = new Uint16Array(cutPoint);
        for (var i = 0; i < cutPoint; i += 4) {
            newBuffer[i] = this.buffer[i];
            newBuffer[i + 1] = this.buffer[i + 1];
            newBuffer[i + 2] = Math.min(at, this.buffer[i + 2]);
            newBuffer[i + 3] = Math.min(this.buffer[i + 3], cutPoint);
        }
        return new TreeBuffer(newBuffer, Math.min(at, this.length), this.group);
    };
    TreeBuffer.prototype.iterate = function iterate (ref) {
            var from = ref.from; if ( from === void 0 ) from = 0;
            var to = ref.to; if ( to === void 0 ) to = this.length;
            var enter = ref.enter;
            var leave = ref.leave;

        var iter = new Iteration(enter, leave);
        this.iterInner(from, to, 0, iter);
        return iter.result;
    };
    /// @internal
    TreeBuffer.prototype.iterInner = function iterInner (from, to, offset, iter) {
        if (from <= to) {
            for (var index = 0; index < this.buffer.length;)
                { index = this.iterChild(from, to, offset, index, iter); }
        }
        else {
            this.iterRev(from, to, offset, 0, this.buffer.length, iter);
        }
    };
    /// @internal
    TreeBuffer.prototype.iterChild = function iterChild (from, to, offset, index, iter) {
        var type = this.group.types[this.buffer[index++]], start = this.buffer[index++] + offset, end = this.buffer[index++] + offset, endIndex = this.buffer[index++];
        if (start > to)
            { return this.buffer.length; }
        if (end >= from && iter.doEnter(type, start, end)) {
            while (index < endIndex && !iter.done)
                { index = this.iterChild(from, to, offset, index, iter); }
            if (iter.leave)
                { iter.leave(type, start, end); }
        }
        return endIndex;
    };
    TreeBuffer.prototype.parentNodesByEnd = function parentNodesByEnd (startIndex, endIndex) {
            var this$1 = this;

        // Build up an array of node indices reflecting the order in which
        // non-empty nodes end, to avoid having to scan for parent nodes
        // at every position during reverse iteration.
        var order = [];
        var scan = function (index) {
            var end = this$1.buffer[index + 3];
            if (end == index + 4)
                { return end; }
            for (var i = index + 4; i < end;)
                { i = scan(i); }
            order.push(index);
            return end;
        };
        for (var index = startIndex; index < endIndex;)
            { index = scan(index); }
        return order;
    };
    /// @internal
    TreeBuffer.prototype.iterRev = function iterRev (from, to, offset, startIndex, endIndex, iter) {
            var this$1 = this;

        var endOrder = this.parentNodesByEnd(startIndex, endIndex);
        // Index range for the next non-empty node
        var nextStart = -1, nextEnd = -1;
        var takeNext = function () {
            if (endOrder.length > 0) {
                nextStart = endOrder.pop();
                nextEnd = this$1.buffer[nextStart + 3];
            }
            else {
                nextEnd = -1;
            }
        };
        takeNext();
        run: for (var index = endIndex; index > startIndex && !iter.done;) {
            while (nextEnd == index) {
                var base = nextStart;
                var id = this.buffer[base], start = this.buffer[base + 1] + offset, end = this.buffer[base + 2] + offset;
                takeNext();
                if (start <= from && end >= to) {
                    if (!iter.doEnter(this.group.types[id], start, end)) {
                        // Skip the entire node
                        index = base;
                        while (nextEnd > base)
                            { takeNext(); }
                        continue run;
                    }
                }
            }
            var endIndex$1 = this.buffer[--index], end$1 = this.buffer[--index] + offset, start$1 = this.buffer[--index] + offset, id$1 = this.buffer[--index];
            if (start$1 > from || end$1 < to)
                { continue; }
            if ((endIndex$1 != index + 4 || iter.doEnter(this.group.types[id$1], start$1, end$1)) && iter.leave)
                { iter.leave(this.group.types[id$1], start$1, end$1); }
        }
    };
    /// @internal
    TreeBuffer.prototype.findIndex = function findIndex (pos, side, start, from, to) {
        var lastI = -1;
        for (var i = from, buf = this.buffer; i < to;) {
            var start1 = buf[i + 1] + start, end1 = buf[i + 2] + start;
            var ignore = start1 == end1 && start1 == pos;
            if (start1 >= pos) {
                if (side > 0 && !ignore)
                    { return i; }
                break;
            }
            if (end1 > pos)
                { return i; }
            if (!ignore)
                { lastI = i; }
            i = buf[i + 3];
        }
        return side < 0 ? lastI : -1;
    };
    var NodeSubtree = /*@__PURE__*/(function (Subtree) {
        function NodeSubtree(node, start, parent) {
            Subtree.call(this);
            this.node = node;
            this.start = start;
            this.parent = parent;
        }

        if ( Subtree ) NodeSubtree.__proto__ = Subtree;
        NodeSubtree.prototype = Object.create( Subtree && Subtree.prototype );
        NodeSubtree.prototype.constructor = NodeSubtree;

        var prototypeAccessors$3 = { type: { configurable: true },end: { configurable: true } };
        prototypeAccessors$3.type.get = function () { return this.node.type; };
        prototypeAccessors$3.end.get = function () { return this.start + this.node.length; };
        NodeSubtree.prototype.resolveAt = function resolveAt (pos) {
            if (pos <= this.start || pos >= this.end)
                { return this.parent.resolveAt(pos); }
            return this.node.resolveInner(pos, this.start, this);
        };
        NodeSubtree.prototype.childBefore = function childBefore (pos) {
            return this.node.findChild(pos, -1, this.start, this);
        };
        NodeSubtree.prototype.childAfter = function childAfter (pos) {
            return this.node.findChild(pos, 1, this.start, this);
        };
        NodeSubtree.prototype.toString = function toString () { return this.node.toString(); };
        NodeSubtree.prototype.iterate = function iterate (ref) {
            var from = ref.from; if ( from === void 0 ) from = this.start;
            var to = ref.to; if ( to === void 0 ) to = this.end;
            var enter = ref.enter;
            var leave = ref.leave;

            var iter = new Iteration(enter, leave);
            this.node.iterInner(from, to, this.start, iter);
            return iter.result;
        };

        Object.defineProperties( NodeSubtree.prototype, prototypeAccessors$3 );

        return NodeSubtree;
    }(Subtree));
    var BufferSubtree = /*@__PURE__*/(function (Subtree) {
        function BufferSubtree(buffer, bufferStart, index, parent) {
            Subtree.call(this);
            this.buffer = buffer;
            this.bufferStart = bufferStart;
            this.index = index;
            this.parent = parent;
        }

        if ( Subtree ) BufferSubtree.__proto__ = Subtree;
        BufferSubtree.prototype = Object.create( Subtree && Subtree.prototype );
        BufferSubtree.prototype.constructor = BufferSubtree;

        var prototypeAccessors$4 = { type: { configurable: true },start: { configurable: true },end: { configurable: true },endIndex: { configurable: true } };
        prototypeAccessors$4.type.get = function () { return this.buffer.group.types[this.buffer.buffer[this.index]]; };
        prototypeAccessors$4.start.get = function () { return this.buffer.buffer[this.index + 1] + this.bufferStart; };
        prototypeAccessors$4.end.get = function () { return this.buffer.buffer[this.index + 2] + this.bufferStart; };
        prototypeAccessors$4.endIndex.get = function () { return this.buffer.buffer[this.index + 3]; };
        BufferSubtree.prototype.childBefore = function childBefore (pos) {
            var index = this.buffer.findIndex(pos, -1, this.bufferStart, this.index + 4, this.endIndex);
            return index < 0 ? null : new BufferSubtree(this.buffer, this.bufferStart, index, this);
        };
        BufferSubtree.prototype.childAfter = function childAfter (pos) {
            var index = this.buffer.findIndex(pos, 1, this.bufferStart, this.index + 4, this.endIndex);
            return index < 0 ? null : new BufferSubtree(this.buffer, this.bufferStart, index, this);
        };
        BufferSubtree.prototype.iterate = function iterate (ref) {
            var from = ref.from; if ( from === void 0 ) from = this.start;
            var to = ref.to; if ( to === void 0 ) to = this.end;
            var enter = ref.enter;
            var leave = ref.leave;

            var iter = new Iteration(enter, leave);
            if (from <= to)
                { this.buffer.iterChild(from, to, this.bufferStart, this.index, iter); }
            else
                { this.buffer.iterRev(from, to, this.bufferStart, this.index, this.endIndex, iter); }
            return iter.result;
        };
        BufferSubtree.prototype.resolveAt = function resolveAt (pos) {
            if (pos <= this.start || pos >= this.end)
                { return this.parent.resolveAt(pos); }
            var found = this.buffer.findIndex(pos, 0, this.bufferStart, this.index + 4, this.endIndex);
            return found < 0 ? this : new BufferSubtree(this.buffer, this.bufferStart, found, this).resolveAt(pos);
        };
        BufferSubtree.prototype.toString = function toString () {
            var result = [];
            this.buffer.childToString(this.index, result);
            return result.join("");
        };

        Object.defineProperties( BufferSubtree.prototype, prototypeAccessors$4 );

        return BufferSubtree;
    }(Subtree));
    var FlatBufferCursor = function FlatBufferCursor(buffer, index) {
        this.buffer = buffer;
        this.index = index;
    };

    var prototypeAccessors$5 = { id: { configurable: true },start: { configurable: true },end: { configurable: true },size: { configurable: true },pos: { configurable: true } };
    prototypeAccessors$5.id.get = function () { return this.buffer[this.index - 4]; };
    prototypeAccessors$5.start.get = function () { return this.buffer[this.index - 3]; };
    prototypeAccessors$5.end.get = function () { return this.buffer[this.index - 2]; };
    prototypeAccessors$5.size.get = function () { return this.buffer[this.index - 1]; };
    prototypeAccessors$5.pos.get = function () { return this.index; };
    FlatBufferCursor.prototype.next = function next () { this.index -= 4; };
    FlatBufferCursor.prototype.fork = function fork () { return new FlatBufferCursor(this.buffer, this.index); };

    Object.defineProperties( FlatBufferCursor.prototype, prototypeAccessors$5 );
    var BalanceBranchFactor = 8;
    function buildTree(data) {
        var buffer = data.buffer;
        var group = data.group;
        var topID = data.topID; if ( topID === void 0 ) topID = 0;
        var maxBufferLength = data.maxBufferLength; if ( maxBufferLength === void 0 ) maxBufferLength = DefaultBufferLength;
        var reused = data.reused; if ( reused === void 0 ) reused = [];
        var minRepeatType = data.minRepeatType; if ( minRepeatType === void 0 ) minRepeatType = group.types.length;
        var cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
        var types = group.types;
        function takeNode(parentStart, minPos, children, positions, tagBuffer) {
            var id = cursor.id;
            var start = cursor.start;
            var end = cursor.end;
            var size = cursor.size;
            var buffer;
            var startPos = start - parentStart;
            if (size < 0) { // Reused node
                children.push(reused[id]);
                positions.push(startPos);
                cursor.next();
                return;
            }
            var type = types[id], node;
            if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos))) {
                // Small enough for a buffer, and no reused nodes inside
                var data = new Uint16Array(buffer.size - buffer.skip);
                var endPos = cursor.pos - buffer.size, index = data.length;
                while (cursor.pos > endPos)
                    { index = copyToBuffer(buffer.start, data, index); }
                node = new TreeBuffer(data, end - buffer.start, group, tagBuffer);
                startPos = buffer.start - parentStart;
            }
            else { // Make it a node
                var endPos$1 = cursor.pos - size;
                cursor.next();
                var localChildren = [], localPositions = [];
                // Check if this is a repeat wrapper. Store the id of the inner
                // repeat node in the variable if it is
                var repeating = id >= group.types.length ? id - (group.types.length - minRepeatType) : -1;
                if (repeating > -1) {
                    type = types[repeating];
                    while (cursor.pos > endPos$1) {
                        var isRepeat = cursor.id == repeating; // This starts with an inner repeated node
                        takeNode(start, endPos$1, localChildren, localPositions, isRepeat ? type : NodeType.none);
                    }
                }
                else {
                    while (cursor.pos > endPos$1)
                        { takeNode(start, endPos$1, localChildren, localPositions, NodeType.none); }
                }
                localChildren.reverse();
                localPositions.reverse();
                if (repeating > -1 && localChildren.length > BalanceBranchFactor)
                    { node = balanceRange(type, type, localChildren, localPositions, 0, localChildren.length, 0, maxBufferLength, end - start); }
                else
                    { node = new Tree(type, localChildren, localPositions, end - start); }
            }
            children.push(node);
            positions.push(startPos);
        }
        function findBufferSize(maxSize) {
            // Scan through the buffer to find previous siblings that fit
            // together in a TreeBuffer, and don't contain any reused nodes
            // (which can't be stored in a buffer)
            // If `type` is > -1, only include siblings with that same type
            // (used to group repeat content into a buffer)
            var fork = cursor.fork();
            var size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
            scan: for (var minPos = fork.pos - maxSize; fork.pos > minPos;) {
                var nodeSize = fork.size, startPos = fork.pos - nodeSize;
                if (nodeSize < 0 || startPos < minPos || fork.start < minStart)
                    { break; }
                var localSkipped = fork.id >= minRepeatType ? 4 : 0;
                var nodeStart = fork.start;
                fork.next();
                while (fork.pos > startPos) {
                    if (fork.size < 0)
                        { break scan; }
                    if (fork.id >= minRepeatType)
                        { localSkipped += 4; }
                    fork.next();
                }
                start = nodeStart;
                size += nodeSize;
                skip += localSkipped;
            }
            return size > 4 ? { size: size, start: start, skip: skip } : null;
        }
        function copyToBuffer(bufferStart, buffer, index) {
            var id = cursor.id;
            var start = cursor.start;
            var end = cursor.end;
            var size = cursor.size;
            cursor.next();
            var startIndex = index;
            if (size > 4) {
                var endPos = cursor.pos - (size - 4);
                while (cursor.pos > endPos)
                    { index = copyToBuffer(bufferStart, buffer, index); }
            }
            if (id < minRepeatType) { // Don't copy repeat nodes into buffers
                buffer[--index] = startIndex;
                buffer[--index] = end - bufferStart;
                buffer[--index] = start - bufferStart;
                buffer[--index] = id;
            }
            return index;
        }
        var children = [], positions = [];
        while (cursor.pos > 0)
            { takeNode(0, 0, children, positions, NodeType.none); }
        var length = children.length ? positions[0] + children[0].length : 0;
        return new Tree(group.types[topID], children.reverse(), positions.reverse(), length);
    }
    function balanceRange(outerType, innerType, children, positions, from, to, start, maxBufferLength, length) {
        var localChildren = [], localPositions = [];
        if (length <= maxBufferLength) {
            for (var i = from; i < to; i++) {
                localChildren.push(children[i]);
                localPositions.push(positions[i] - start);
            }
        }
        else {
            var maxChild = Math.max(maxBufferLength, Math.ceil(length * 1.5 / BalanceBranchFactor));
            for (var i$1 = from; i$1 < to;) {
                var groupFrom = i$1, groupStart = positions[i$1];
                i$1++;
                for (; i$1 < to; i$1++) {
                    var nextEnd = positions[i$1] + children[i$1].length;
                    if (nextEnd - groupStart > maxChild)
                        { break; }
                }
                if (i$1 == groupFrom + 1) {
                    var only = children[groupFrom];
                    if (only instanceof Tree && only.type == innerType && only.length > maxChild << 1) { // Too big, collapse
                        for (var j = 0; j < only.children.length; j++) {
                            localChildren.push(only.children[j]);
                            localPositions.push(only.positions[j] + groupStart - start);
                        }
                        continue;
                    }
                    localChildren.push(only);
                }
                else if (i$1 == groupFrom + 1) {
                    localChildren.push(children[groupFrom]);
                }
                else {
                    var inner = balanceRange(innerType, innerType, children, positions, groupFrom, i$1, groupStart, maxBufferLength, positions[i$1 - 1] + children[i$1 - 1].length - groupStart);
                    if (innerType != NodeType.none && !containsType(inner.children, innerType))
                        { inner = new Tree(NodeType.none, inner.children, inner.positions, inner.length); }
                    localChildren.push(inner);
                }
                localPositions.push(groupStart - start);
            }
        }
        return new Tree(outerType, localChildren, localPositions, length);
    }
    function containsType(nodes, type) {
        for (var i = 0, list = nodes; i < list.length; i += 1)
            {
            var elt = list[i];

            if (elt.type == type)
                { return true;
        } }
        return false;
    }

    var _m30 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DefaultBufferLength: DefaultBufferLength,
        NodeProp: NodeProp,
        NodePropSource: NodePropSource,
        NodeType: NodeType,
        NodeGroup: NodeGroup,
        Subtree: Subtree,
        Tree: Tree,
        TreeBuffer: TreeBuffer
    });

    var DefaultSplit = /\r\n?|\n/;
    /// Distinguishes different ways in which positions can be mapped.
    var MapMode;
    (function (MapMode) {
        /// Map a position to a valid new position, even when its context
        /// was deleted.
        MapMode[MapMode["Simple"] = 0] = "Simple";
        /// Return -1 if deletion happens across the position.
        MapMode[MapMode["TrackDel"] = 1] = "TrackDel";
        /// Return -1 if the character _before_ the position is deleted.
        MapMode[MapMode["TrackBefore"] = 2] = "TrackBefore";
        /// Return -1 if the character _after_ the position is deleted.
        MapMode[MapMode["TrackAfter"] = 3] = "TrackAfter";
    })(MapMode || (MapMode = {}));
    /// A change description is a variant of [change set](#state.ChangeSet)
    /// that doesn't store the inserted text. As such, it can't be
    /// applied, but is cheaper to store and manipulate.
    var ChangeDesc = function ChangeDesc(sections) {
        this.sections = sections;
    };

    var prototypeAccessors$4 = { length: { configurable: true },newLength: { configurable: true },empty: { configurable: true },invertedDesc: { configurable: true } };
    /// The length of the document before the change.
    prototypeAccessors$4.length.get = function () {
        var result = 0;
        for (var i = 0; i < this.sections.length; i += 2)
            { result += this.sections[i]; }
        return result;
    };
    /// The length of the document after the change.
    prototypeAccessors$4.newLength.get = function () {
        var result = 0;
        for (var i = 0; i < this.sections.length; i += 2) {
            var ins = this.sections[i + 1];
            result += ins < 0 ? this.sections[i] : ins;
        }
        return result;
    };
    /// False when there are actual changes in this set.
    prototypeAccessors$4.empty.get = function () { return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0; };
    /// Iterate over the unchanged parts left by these changes.
    ChangeDesc.prototype.iterGaps = function iterGaps (f) {
        for (var i = 0, posA = 0, posB = 0; i < this.sections.length;) {
            var len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0) {
                f(posA, posB, len);
                posB += len;
            }
            else {
                posB += ins;
            }
            posA += len;
        }
    };
    /// Iterate over the ranges changed by these changes. (See
    /// [`ChangeSet.iterChanges`](#state.ChangeSet.iterChanges) for a
    /// variant that also provides you with the inserted text.)
    ///
    /// When `individual` is true, adjacent changes (which are kept
    /// separate for [position mapping](#state.ChangeDesc.mapPos)) are
    /// reported separately.
    ChangeDesc.prototype.iterChangedRanges = function iterChangedRanges (f, individual) {
            if ( individual === void 0 ) individual = false;

        iterChanges(this, f, individual);
    };
    /// Get a description of the inverted form of these changes.
    prototypeAccessors$4.invertedDesc.get = function () {
        var sections = [];
        for (var i = 0; i < this.sections.length;) {
            var len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0)
                { sections.push(len, ins); }
            else
                { sections.push(ins, len); }
        }
        return new ChangeDesc(sections);
    };
    /// Compute the combined effect of applying another set of changes
    /// after this one. The length of the document after this set should
    /// match the length before `other`.
    ChangeDesc.prototype.composeDesc = function composeDesc (other) { return this.empty ? other : other.empty ? this : composeSets(this, other); };
    /// Map this description, which should start with the same document
    /// as `other`, over another set of changes, so that it can be
    /// applied after it.
    ChangeDesc.prototype.mapDesc = function mapDesc (other, before) {
        if ( before === void 0 ) before = false;
     return other.empty ? this : mapSet(this, other, before); };
    /// Map a given position through these changes.
    ///
    /// `assoc` indicates which side the position should be associated
    /// with. When it is negative or zero, the mapping will try to keep
    /// the position close to the character before it (if any), and will
    /// move it before insertions at that point or replacements across
    /// that point. When it is positive, the position is associated with
    /// the character after it, and will be moved forward for insertions
    /// at or replacements across the position. Defaults to -1.
    ///
    /// `mode` determines whether deletions should be
    /// [reported](#state.MapMode). It defaults to `MapMode.Simple`
    /// (don't report deletions).
    ChangeDesc.prototype.mapPos = function mapPos (pos, assoc, mode) {
            if ( assoc === void 0 ) assoc = -1;
            if ( mode === void 0 ) mode = MapMode.Simple;

        var posA = 0, posB = 0;
        for (var i = 0; i < this.sections.length;) {
            var len = this.sections[i++], ins = this.sections[i++], endA = posA + len;
            if (ins < 0) {
                if (endA > pos)
                    { return posB + (pos - posA); }
                posB += len;
            }
            else {
                if (mode != MapMode.Simple && endA >= pos &&
                    (mode == MapMode.TrackDel && posA < pos && endA > pos ||
                        mode == MapMode.TrackBefore && posA < pos ||
                        mode == MapMode.TrackAfter && endA > pos))
                    { return -1; }
                if (endA > pos || endA == pos && assoc < 0 && !len)
                    { return pos == posA || assoc < 0 ? posB : posB + ins; }
                posB += ins;
            }
            posA = endA;
        }
        if (pos > posA)
            { throw new RangeError(("Position " + pos + " is out of range for changeset of length " + posA)); }
        return posB;
    };
    /// Map a position in a way that reliably produces the same position
    /// for a sequence of changes, regardless of the order in which they
    /// were [mapped](#state.ChangeSet.map) and applied. This will map a
    /// position to the start (or end) through _all_ adjacent changes
    /// next to it, and often produces more surprising results than
    /// [`mapPos`](#state.ChangeDesc.mapPos). But it can be useful in
    /// cases where it is important that all clients in a collaborative
    /// setting end up doing the precise same mapping.
    ChangeDesc.prototype.mapPosStable = function mapPosStable (pos, side) {
            if ( side === void 0 ) side = -1;

        var posA = 0, posB = 0, lastB = 0;
        for (var i = 0; i < this.sections.length;) {
            var len = this.sections[i++], ins = this.sections[i++], endA = posA + len;
            if (ins < 0) {
                if (endA > pos)
                    { return posB + Math.max(0, pos - posA); }
                lastB = posB += len;
            }
            else {
                if (side <= 0 && endA >= pos)
                    { return lastB; }
                posB += ins;
            }
            posA = endA;
        }
        return posB;
    };
    /// Check whether these changes touch a given range. When one of the
    /// changes entirely covers the range, the string `"cover"` is
    /// returned.
    ChangeDesc.prototype.touchesRange = function touchesRange (from, to) {
            if ( to === void 0 ) to = from;

        for (var i = 0, pos = 0; i < this.sections.length && pos <= to;) {
            var len = this.sections[i++], ins = this.sections[i++], end = pos + len;
            if (ins >= 0 && pos <= to && end >= from)
                { return pos < from && end > to ? "cover" : true; }
            pos = end;
        }
        return false;
    };
    /// @internal
    ChangeDesc.prototype.toString = function toString () {
        var result = "";
        for (var i = 0; i < this.sections.length;) {
            var len = this.sections[i++], ins = this.sections[i++];
            result += (result ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
        }
        return result;
    };

    Object.defineProperties( ChangeDesc.prototype, prototypeAccessors$4 );
    /// A change set represents a group of modifications to a document. It
    /// stores the document length, and can only be applied to documents
    /// with exactly that length.
    var ChangeSet = /*@__PURE__*/(function (ChangeDesc) {
        function ChangeSet(sections, 
        /// @internal
        inserted) {
            ChangeDesc.call(this, sections);
            this.inserted = inserted;
        }

        if ( ChangeDesc ) ChangeSet.__proto__ = ChangeDesc;
        ChangeSet.prototype = Object.create( ChangeDesc && ChangeDesc.prototype );
        ChangeSet.prototype.constructor = ChangeSet;

        var prototypeAccessors$1 = { desc: { configurable: true } };
        /// Apply the changes to a document, returning the modified
        /// document.
        ChangeSet.prototype.apply = function apply (doc) {
            if (this.length != doc.length)
                { throw new RangeError("Applying change set to a document with the wrong length"); }
            iterChanges(this, function (fromA, toA, fromB, _toB, text) { return doc = doc.replace(fromB, fromB + (toA - fromA), text); }, false);
            return doc;
        };
        /// Map this set, which should start with the same document as
        /// `other`, over another set of changes, so that it can be applied
        /// after it. When `before` is true, map as if the changes in
        /// `other` happened before the ones in `this`.
        ChangeSet.prototype.mapDesc = function mapDesc (other, before) {
        if ( before === void 0 ) before = false;
     return mapSet(this, other, before, true); };
        /// Given the document as it existed _before_ the changes, return a
        /// change set that represents the inverse of this set, which could
        /// be used to go from the document created by the changes back to
        /// the document as it existed before the changes.
        ChangeSet.prototype.invert = function invert (doc) {
            var sections = this.sections.slice(), inserted = [];
            for (var i = 0, pos = 0; i < sections.length; i += 2) {
                var len = sections[i], ins = sections[i + 1];
                if (ins >= 0) {
                    sections[i] = ins;
                    sections[i + 1] = len;
                    var index = i >> 1;
                    while (inserted.length < index)
                        { inserted.push(Text.empty); }
                    inserted.push(len ? doc.slice(pos, pos + len) : Text.empty);
                }
                pos += len;
            }
            return new ChangeSet(sections, inserted);
        };
        /// Combine two subsequent change sets into a single set. `other`
        /// must start in the document produced by `this`. If `this` goes
        /// `docA` → `docB` and `other` represents `docB` → `docC`, the
        /// returned value will represent the change `docA` → `docC`.
        ChangeSet.prototype.compose = function compose (other) { return this.empty ? other : other.empty ? this : composeSets(this, other, true); };
        /// Given another change set starting in the same document, maps this
        /// change set over the other, producing a new change set that can be
        /// applied to the document produced by applying `other`. When
        /// `before` is `true`, order changes as if `this` comes before
        /// `other`, otherwise (the default) treat `other` as coming first.
        ///
        /// Given two changes `A` and `B`, `A.compose(B.map(A))` and
        /// `B.compose(A.map(B, true))` will produce the same document. This
        /// provides a basic form of [operational
        /// transformation](https://en.wikipedia.org/wiki/Operational_transformation),
        /// and can be used for collaborative editing.
        ChangeSet.prototype.map = function map (other, before) {
        if ( before === void 0 ) before = false;
     return other.empty ? this : mapSet(this, other, before, true); };
        /// Iterate over the changed ranges in the document, calling `f` for
        /// each.
        ChangeSet.prototype.iterChanges = function iterChanges$1 (f, individual) {
            if ( individual === void 0 ) individual = false;

            iterChanges(this, f, individual);
        };
        /// Get a [change description](#state.ChangeDesc) for this change
        /// set.
        prototypeAccessors$1.desc.get = function () { return new ChangeDesc(this.sections); };
        /// @internal
        ChangeSet.prototype.filter = function filter (ranges) {
            var resultSections = [], resultInserted = [], filteredSections = [];
            var iter = new SectionIter(this);
            done: for (var i = 0, pos = 0;;) {
                var next = i == ranges.length ? 1e9 : ranges[i++];
                while (pos < next || pos == next && iter.len == 0) {
                    if (iter.done)
                        { break done; }
                    var len = Math.min(iter.len, next - pos);
                    addSection(filteredSections, len, -1);
                    var ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
                    addSection(resultSections, len, ins);
                    if (ins > 0)
                        { addInsert(resultInserted, resultSections, iter.text); }
                    iter.forward(len);
                    pos += len;
                }
                var end = ranges[i++];
                while (pos < end) {
                    if (iter.done)
                        { break done; }
                    var len$1 = Math.min(iter.len, end - pos);
                    addSection(resultSections, len$1, -1);
                    addSection(filteredSections, len$1, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
                    iter.forward(len$1);
                    pos += len$1;
                }
            }
            return { changes: new ChangeSet(resultSections, resultInserted),
                filtered: new ChangeDesc(filteredSections) };
        };
        /// Create a change set for the given changes, for a document of the
        /// given length, using `lineSep` as line separator.
        ChangeSet.of = function of (changes, length, lineSep) {
            var sections = [], inserted = [], pos = 0;
            var total = null;
            function flush(force) {
                if ( force === void 0 ) force = false;

                if (!force && !sections.length)
                    { return; }
                if (pos < length)
                    { addSection(sections, length - pos, -1); }
                var set = new ChangeSet(sections, inserted);
                total = total ? total.compose(set.map(total)) : set;
                sections = [];
                inserted = [];
                pos = 0;
            }
            function process(spec) {
                if (Array.isArray(spec)) {
                    for (var i = 0, list = spec; i < list.length; i += 1)
                        {
                        var sub = list[i];

                        process(sub);
                    }
                }
                else if (spec instanceof ChangeSet) {
                    if (spec.length != length)
                        { throw new RangeError(("Mismatched change set length (got " + (spec.length) + ", expected " + length + ")")); }
                    flush();
                    total = total ? total.compose(spec.map(total)) : spec;
                }
                else {
                    var from = spec.from;
                    var to = spec.to; if ( to === void 0 ) to = from;
                    var insert = spec.insert;
                    if (from > to || from < 0 || to > length)
                        { throw new RangeError(("Invalid change range " + from + " to " + to + " (in doc of length " + length + ")")); }
                    var insText = !insert ? Text.empty : typeof insert == "string" ? Text.of(insert.split(lineSep || DefaultSplit)) : insert;
                    var insLen = insText.length;
                    if (from == to && insLen == 0)
                        { return; }
                    if (from < pos)
                        { flush(); }
                    if (from > pos)
                        { addSection(sections, from - pos, -1); }
                    addSection(sections, to - from, insLen);
                    addInsert(inserted, sections, insText);
                    pos = to;
                }
            }
            process(changes);
            flush(!total);
            return total;
        };
        /// Create an empty changeset of the given length.
        ChangeSet.empty = function empty (length) {
            return new ChangeSet(length ? [length, -1] : [], []);
        };

        Object.defineProperties( ChangeSet.prototype, prototypeAccessors$1 );

        return ChangeSet;
    }(ChangeDesc));
    function addSection(sections, len, ins, forceJoin) {
        if ( forceJoin === void 0 ) forceJoin = false;

        if (len == 0 && ins <= 0)
            { return; }
        var last = sections.length - 2;
        if (last >= 0 && ins <= 0 && ins == sections[last + 1])
            { sections[last] += len; }
        else if (len == 0 && sections[last] == 0)
            { sections[last + 1] += ins; }
        else if (forceJoin) {
            sections[last] += len;
            sections[last + 1] += ins;
        }
        else
            { sections.push(len, ins); }
    }
    function addInsert(values, sections, value) {
        if (value.length == 0)
            { return; }
        var index = (sections.length - 2) >> 1;
        if (index < values.length) {
            values[values.length - 1] = values[values.length - 1].append(value);
        }
        else {
            while (values.length < index)
                { values.push(Text.empty); }
            values.push(value);
        }
    }
    function iterChanges(desc, f, individual) {
        var inserted = desc.inserted;
        for (var posA = 0, posB = 0, i = 0; i < desc.sections.length;) {
            var len = desc.sections[i++], ins = desc.sections[i++];
            if (ins < 0) {
                posA += len;
                posB += len;
            }
            else {
                var endA = posA, endB = posB, text = Text.empty;
                for (;;) {
                    endA += len;
                    endB += ins;
                    if (ins && inserted)
                        { text = text.append(inserted[(i - 2) >> 1]); }
                    if (individual || i == desc.sections.length || desc.sections[i + 1] < 0)
                        { break; }
                    len = desc.sections[i++];
                    ins = desc.sections[i++];
                }
                f(posA, endA, posB, endB, text);
                posA = endA;
                posB = endB;
            }
        }
    }
    function mapSet(setA, setB, before, mkSet) {
        if ( mkSet === void 0 ) mkSet = false;

        var sections = [], insert = mkSet ? [] : null;
        var a = new SectionIter(setA), b = new SectionIter(setB);
        for (var posA = 0, posB = 0;;) {
            if (a.ins == -1) {
                posA += a.len;
                a.next();
            }
            else if (b.ins == -1 && posB < posA) {
                var skip = Math.min(b.len, posA - posB);
                b.forward(skip);
                addSection(sections, skip, -1);
                posB += skip;
            }
            else if (b.ins >= 0 && (a.done || posB < posA || posB == posA && (b.len < a.len || b.len == a.len && !before))) {
                addSection(sections, b.ins, -1);
                while (posA > posB && !a.done && posA + a.len < posB + b.len) {
                    posA += a.len;
                    a.next();
                }
                posB += b.len;
                b.next();
            }
            else if (a.ins >= 0) {
                var len = 0, end = posA + a.len;
                for (;;) {
                    if (b.ins >= 0 && posB > posA && posB + b.len < end) {
                        len += b.ins;
                        posB += b.len;
                        b.next();
                    }
                    else if (b.ins == -1 && posB < end) {
                        var skip$1 = Math.min(b.len, end - posB);
                        len += skip$1;
                        b.forward(skip$1);
                        posB += skip$1;
                    }
                    else {
                        break;
                    }
                }
                addSection(sections, len, a.ins);
                if (insert)
                    { addInsert(insert, sections, a.text); }
                posA = end;
                a.next();
            }
            else if (a.done && b.done) {
                return insert ? new ChangeSet(sections, insert) : new ChangeDesc(sections);
            }
            else {
                throw new Error("Mismatched change set lengths");
            }
        }
    }
    function composeSets(setA, setB, mkSet) {
        if ( mkSet === void 0 ) mkSet = false;

        var sections = [];
        var insert = mkSet ? [] : null;
        var a = new SectionIter(setA), b = new SectionIter(setB);
        for (var open = false;;) {
            if (a.done && b.done) {
                return insert ? new ChangeSet(sections, insert) : new ChangeDesc(sections);
            }
            else if (a.ins == 0) { // Deletion in A
                addSection(sections, a.len, 0, open);
                a.next();
            }
            else if (b.len == 0 && !b.done) { // Insertion in B
                addSection(sections, 0, b.ins, open);
                if (insert)
                    { addInsert(insert, sections, b.text); }
                b.next();
            }
            else if (a.done || b.done) {
                throw new Error("Mismatched change set lengths");
            }
            else {
                var len = Math.min(a.len2, b.len), sectionLen = sections.length;
                if (a.ins == -1) {
                    var insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
                    addSection(sections, len, insB, open);
                    if (insert && insB)
                        { addInsert(insert, sections, b.text); }
                }
                else if (b.ins == -1) {
                    addSection(sections, a.off ? 0 : a.len, len, open);
                    if (insert)
                        { addInsert(insert, sections, a.textBit(len)); }
                }
                else {
                    addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
                    if (insert && !b.off)
                        { addInsert(insert, sections, b.text); }
                }
                open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
                a.forward2(len);
                b.forward(len);
            }
        }
    }
    var SectionIter = function SectionIter(set) {
        this.set = set;
        this.i = 0;
        this.next();
    };

    var prototypeAccessors$2$1 = { done: { configurable: true },len2: { configurable: true },text: { configurable: true } };
    SectionIter.prototype.next = function next () {
        var ref = this.set;
            var sections = ref.sections;
        if (this.i < sections.length) {
            this.len = sections[this.i++];
            this.ins = sections[this.i++];
        }
        else {
            this.len = 0;
            this.ins = -2;
        }
        this.off = 0;
    };
    prototypeAccessors$2$1.done.get = function () { return this.ins == -2; };
    prototypeAccessors$2$1.len2.get = function () { return this.ins < 0 ? this.len : this.ins; };
    prototypeAccessors$2$1.text.get = function () {
        var ref = this.set;
            var inserted = ref.inserted;
            var index = (this.i - 2) >> 1;
        return index >= inserted.length ? Text.empty : inserted[index];
    };
    SectionIter.prototype.textBit = function textBit (len) {
        var ref = this.set;
            var inserted = ref.inserted;
            var index = (this.i - 2) >> 1;
        return index >= inserted.length && !len ? Text.empty
            : inserted[index].slice(this.off, len == null ? undefined : this.off + len);
    };
    SectionIter.prototype.forward = function forward (len) {
        if (len == this.len)
            { this.next(); }
        else {
            this.len -= len;
            this.off += len;
        }
    };
    SectionIter.prototype.forward2 = function forward2 (len) {
        if (this.ins == -1)
            { this.forward(len); }
        else if (len == this.ins)
            { this.next(); }
        else {
            this.ins -= len;
            this.off += len;
        }
    };

    Object.defineProperties( SectionIter.prototype, prototypeAccessors$2$1 );

    /// A single selection range. When
    /// [`allowMultipleSelections`](#state.EditorState^allowMultipleSelections)
    /// is enabled, a [selection](#state.EditorSelection) may hold
    /// multiple ranges. By default, selections hold exactly one range.
    var SelectionRange = function SelectionRange(
    /// The lower side of the range.
    from, 
    /// The upper side of the range.
    to, flags) {
        this.from = from;
        this.to = to;
        this.flags = flags;
    };

    var prototypeAccessors$3$1 = { anchor: { configurable: true },head: { configurable: true },empty: { configurable: true },assoc: { configurable: true },bidiLevel: { configurable: true },goalColumn: { configurable: true } };
    /// The anchor of the range—the side that doesn't move when you
    /// extend it.
    prototypeAccessors$3$1.anchor.get = function () { return this.flags & 16 /* Inverted */ ? this.to : this.from; };
    /// The head of the range, which is moved when the range is
    /// [extended](#state.SelectionRange.extend).
    prototypeAccessors$3$1.head.get = function () { return this.flags & 16 /* Inverted */ ? this.from : this.to; };
    /// True when `anchor` and `head` are at the same position.
    prototypeAccessors$3$1.empty.get = function () { return this.from == this.to; };
    /// If this is a cursor that is explicitly associated with the
    /// character on one of its sides, this returns the side. -1 means
    /// the character before its position, 1 the character after, and 0
    /// means no association.
    prototypeAccessors$3$1.assoc.get = function () { return this.flags & 4 /* AssocBefore */ ? -1 : this.flags & 8 /* AssocAfter */ ? 1 : 0; };
    /// The bidirectional text level associated with this cursor.
    prototypeAccessors$3$1.bidiLevel.get = function () {
        var level = this.flags & 3 /* BidiLevelMask */;
        return level == 3 ? null : level;
    };
    prototypeAccessors$3$1.goalColumn.get = function () {
        var value = this.flags >> 5 /* GoalColumnOffset */;
        return value == 33554431 /* NoGoalColumn */ ? undefined : value;
    };
    /// Map this range through a mapping.
    SelectionRange.prototype.map = function map (mapping) {
        var from = mapping.mapPos(this.from), to = mapping.mapPos(this.to);
        return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
    };
    /// Extend this range to cover at least `from` to `to`.
    SelectionRange.prototype.extend = function extend (from, to) {
            if ( to === void 0 ) to = from;

        if (from <= this.anchor && to >= this.anchor)
            { return EditorSelection.range(from, to); }
        var head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
        return EditorSelection.range(this.anchor, head);
    };
    /// Compare this range to another range.
    SelectionRange.prototype.eq = function eq (other) {
        return this.anchor == other.anchor && this.head == other.head;
    };
    /// Return a JSON-serializable object representing the range.
    SelectionRange.prototype.toJSON = function toJSON () { return { anchor: this.anchor, head: this.head }; };
    /// Convert a JSON representation of a range to a `SelectionRange`
    /// instance.
    SelectionRange.fromJSON = function fromJSON (json) {
        if (!json || typeof json.anchor != "number" || typeof json.head != "number")
            { throw new RangeError("Invalid JSON representation for SelectionRange"); }
        return EditorSelection.range(json.anchor, json.head);
    };

    Object.defineProperties( SelectionRange.prototype, prototypeAccessors$3$1 );
    /// An editor selection holds one or more selection ranges.
    var EditorSelection = function EditorSelection(
    /// The ranges in the selection, sorted by position. Ranges cannot
    /// overlap (but they may touch, if they aren't empty).
    ranges, 
    /// The index of the _primary_ range in the selection (which is
    /// usually the range that was added last).
    primaryIndex) {
        if ( primaryIndex === void 0 ) primaryIndex = 0;

        this.ranges = ranges;
        this.primaryIndex = primaryIndex;
    };

    var prototypeAccessors$4$1 = { primary: { configurable: true } };
    /// Map a selection through a mapping. Mostly used to adjust the
    /// selection position for changes.
    EditorSelection.prototype.map = function map (mapping) {
        if (mapping.empty)
            { return this; }
        return EditorSelection.create(this.ranges.map(function (r) { return r.map(mapping); }), this.primaryIndex);
    };
    /// Compare this selection to another selection.
    EditorSelection.prototype.eq = function eq (other) {
        if (this.ranges.length != other.ranges.length ||
            this.primaryIndex != other.primaryIndex)
            { return false; }
        for (var i = 0; i < this.ranges.length; i++)
            { if (!this.ranges[i].eq(other.ranges[i]))
                { return false; } }
        return true;
    };
    /// Get the primary selection range. Usually, you should make sure
    /// your code applies to _all_ ranges, by using methods like
    /// [`changeByRange`](#state.EditorState.changeByRange).
    prototypeAccessors$4$1.primary.get = function () { return this.ranges[this.primaryIndex]; };
    /// Make sure the selection only has one range. Returns a selection
    /// holding only the primary range from this selection.
    EditorSelection.prototype.asSingle = function asSingle () {
        return this.ranges.length == 1 ? this : new EditorSelection([this.primary]);
    };
    /// Extend this selection with an extra range.
    EditorSelection.prototype.addRange = function addRange (range, primary) {
            if ( primary === void 0 ) primary = true;

        return EditorSelection.create([range].concat(this.ranges), primary ? 0 : this.primaryIndex + 1);
    };
    /// Replace a given range with another range, and then normalize the
    /// selection to merge and sort ranges if necessary.
    EditorSelection.prototype.replaceRange = function replaceRange (range, which) {
            if ( which === void 0 ) which = this.primaryIndex;

        var ranges = this.ranges.slice();
        ranges[which] = range;
        return EditorSelection.create(ranges, this.primaryIndex);
    };
    /// Convert this selection to an object that can be serialized to
    /// JSON.
    EditorSelection.prototype.toJSON = function toJSON () {
        return { ranges: this.ranges.map(function (r) { return r.toJSON(); }), primaryIndex: this.primaryIndex };
    };
    /// Create a selection from a JSON representation.
    EditorSelection.fromJSON = function fromJSON (json) {
        if (!json || !Array.isArray(json.ranges) || typeof json.primaryIndex != "number" || json.primaryIndex >= json.ranges.length)
            { throw new RangeError("Invalid JSON representation for EditorSelection"); }
        return new EditorSelection(json.ranges.map(function (r) { return SelectionRange.fromJSON(r); }), json.primaryIndex);
    };
    /// Create a selection holding a single range.
    EditorSelection.single = function single (anchor, head) {
            if ( head === void 0 ) head = anchor;

        return new EditorSelection([EditorSelection.range(anchor, head)], 0);
    };
    /// Sort and merge the given set of ranges, creating a valid
    /// selection.
    EditorSelection.create = function create (ranges, primaryIndex) {
            if ( primaryIndex === void 0 ) primaryIndex = 0;

        if (ranges.length == 0)
            { throw new RangeError("A selection needs at least one range"); }
        for (var pos = 0, i = 0; i < ranges.length; i++) {
            var range = ranges[i];
            if (range.empty ? range.from <= pos : range.from < pos)
                { return normalized(ranges.slice(), primaryIndex); }
            pos = range.to;
        }
        return new EditorSelection(ranges, primaryIndex);
    };
    /// Create a cursor selection range at the given position. You can
    /// probably ignore [association](#state.SelectionRange.assoc) and
    /// [bidi level](#state.SelectionRange.bidiLevel) in most
    /// situations.
    EditorSelection.cursor = function cursor (pos, assoc, bidiLevel, goalColumn) {
            if ( assoc === void 0 ) assoc = 0;

        return new SelectionRange(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 /* AssocBefore */ : 8 /* AssocAfter */) |
            (bidiLevel == null ? 3 : Math.min(2, bidiLevel)) |
            ((goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431 /* NoGoalColumn */) << 5 /* GoalColumnOffset */));
    };
    /// Create a selection range.
    EditorSelection.range = function range (anchor, head, goalColumn) {
        var goal = (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431 /* NoGoalColumn */) << 5 /* GoalColumnOffset */;
        return head < anchor ? new SelectionRange(head, anchor, 16 /* Inverted */ | goal) : new SelectionRange(anchor, head, goal);
    };

    Object.defineProperties( EditorSelection.prototype, prototypeAccessors$4$1 );
    function normalized(ranges, primaryIndex) {
        if ( primaryIndex === void 0 ) primaryIndex = 0;

        var primary = ranges[primaryIndex];
        ranges.sort(function (a, b) { return a.from - b.from; });
        primaryIndex = ranges.indexOf(primary);
        for (var i = 1; i < ranges.length; i++) {
            var range = ranges[i], prev = ranges[i - 1];
            if (range.empty ? range.from <= prev.to : range.from < prev.to) {
                var from = prev.from, to = Math.max(range.to, prev.to);
                if (i <= primaryIndex)
                    { primaryIndex--; }
                ranges.splice(--i, 2, range.anchor > range.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
            }
        }
        return new EditorSelection(ranges, primaryIndex);
    }
    function checkSelection(selection, docLength) {
        for (var i = 0, list = selection.ranges; i < list.length; i += 1)
            {
            var range = list[i];

            if (range.to > docLength)
                { throw new RangeError("Selection points outside of document");
        } }
    }

    /// Annotations are tagged values that are used to add metadata to
    /// transactions in an extensible way. They should be used to model
    /// things that effect the entire transaction (such as its [time
    /// stamp](#state.Transaction^time) or information about its
    /// [origin](#state.Transaction^userEvent)). For effects that happen
    /// _alongside_ the other changes made by the transaction, [state
    /// effects](#state.StateEffect) are more appropriate.
    var Annotation = function Annotation(type, value) {
        this.type = type;
        this.value = value;
    };
    /// Define a new type of annotation.
    Annotation.define = function define () { return new AnnotationType(); };
    /// Marker that identifies a type of [annotation](#state.Annotation).
    var AnnotationType = function AnnotationType () {};

    AnnotationType.prototype.of = function of (value) { return new Annotation(this, value); };
    /// State effects can be used to represent additional effects
    /// associated with a [transaction](#state.Transaction.effects). They
    /// are often useful to model changes to custom [state
    /// fields](#state.StateField), when those changes aren't implicit in
    /// document or selection changes.
    var StateEffect = function StateEffect(
    /// @internal
    type, 
    /// The value of this effect.
    value) {
        this.type = type;
        this.value = value;
    };
    /// Map this effect through a position mapping. Will return
    /// `undefined` when that ends up deleting the effect.
    StateEffect.prototype.map = function map (mapping) {
        var mapped = this.type.map(this.value, mapping);
        return mapped === undefined ? undefined : mapped == this.value ? this : new StateEffect(this.type, mapped);
    };
    /// Tells you whether this effect object is of a given
    /// [type](#state.StateEffectType).
    StateEffect.prototype.is = function is (type) { return this.type == type; };
    /// Define a new effect type. The type parameter indicates the type
    /// of values that his effect holds.
    StateEffect.define = function define (spec) {
            if ( spec === void 0 ) spec = {};

        return new StateEffectType(spec.map || (function (v) { return v; }));
    };
    /// Map an array of effects through a change set.
    StateEffect.mapEffects = function mapEffects (effects, mapping) {
        if (!effects.length)
            { return effects; }
        var result = [];
        for (var i = 0, list = effects; i < list.length; i += 1) {
            var effect = list[i];

                var mapped = effect.map(mapping);
            if (mapped)
                { result.push(mapped); }
        }
        return result;
    };
    /// Representation of a type of state effect. Defined with
    /// [`StateEffect.define`](#state.StateEffect^define).
    var StateEffectType = function StateEffectType(
    // The `any` types in these function types are there to work
    // around TypeScript issue #37631, where the type guard on
    // `StateEffect.is` mysteriously stops working when these properly
    // have type `Value`.
    /// @internal
    map) {
        this.map = map;
    };
    /// Create a [state effect](#state.StateEffect) instance of this
    /// type.
    StateEffectType.prototype.of = function of (value) { return new StateEffect(this, value); };
    /// Changes to the editor state are grouped into transactions.
    /// Typically, a user action creates a single transaction, which may
    /// contain any number of document changes, may change the selection,
    /// or have other effects. Create a transaction by calling
    /// [`EditorState.update`](#state.EditorState.update).
    var Transaction = function Transaction(
    /// The state from which the transaction starts.
    startState, 
    /// The document changes made by this transaction.
    changes, 
    /// The selection set by this transaction, or undefined if it
    /// doesn't explicitly set a selection.
    selection, 
    /// The effects added to the transaction.
    effects, annotations, 
    /// Holds an object when this transaction
    /// [reconfigures](#state.ReconfigurationSpec) the state.
    reconfigured, flags) {
        this.startState = startState;
        this.changes = changes;
        this.selection = selection;
        this.effects = effects;
        this.annotations = annotations;
        this.reconfigured = reconfigured;
        this.flags = flags;
        if (!this.annotations.some(function (a) { return a.type == Transaction.time; }))
            { this.annotations = this.annotations.concat(Transaction.time.of(Date.now())); }
    };

    var prototypeAccessors$5$1 = { docChanged: { configurable: true },scrolledIntoView: { configurable: true } };
    /// Get the value of the given annotation type, if any.
    Transaction.prototype.annotation = function annotation (type) {
        for (var i = 0, list = this.annotations; i < list.length; i += 1)
            {
                var ann = list[i];

                if (ann.type == type)
                { return ann.value;
            } }
        return undefined;
    };
    /// Indicates whether the transaction changed the document.
    prototypeAccessors$5$1.docChanged.get = function () { return !this.changes.empty; };
    /// Query whether the selection should be scrolled into view after
    /// applying this transaction.
    prototypeAccessors$5$1.scrolledIntoView.get = function () { return (this.flags & 1 /* scrollIntoView */) > 0; };

    Object.defineProperties( Transaction.prototype, prototypeAccessors$5$1 );
    /// Annotation used to store transaction timestamps.
    Transaction.time = Annotation.define();
    /// Annotation used to associate a transaction with a user interface
    /// event. The view will set this to...
    ///
    ///  - `"input"` when the user types text
    ///  - `"delete"` when the user deletes the selection or text near the selection
    ///  - `"keyboardselection"` when moving the selection via the keyboard
    ///  - `"pointerselection"` when moving the selection through the pointing device
    ///  - `"paste"` when pasting content
    ///  - `"cut"` when cutting
    ///  - `"drop"` when content is inserted via drag-and-drop
    Transaction.userEvent = Annotation.define();
    /// Annotation indicating whether a transaction should be added to
    /// the undo history or not.
    Transaction.addToHistory = Annotation.define();
    var ResolvedTransactionSpec = function ResolvedTransactionSpec(changes, selection, effects, annotations, scrollIntoView, filter, reconfigure) {
        this.changes = changes;
        this.selection = selection;
        this.effects = effects;
        this.annotations = annotations;
        this.scrollIntoView = scrollIntoView;
        this.filter = filter;
        this.reconfigure = reconfigure;
        // @internal
        this.finished = null;
    };
    ResolvedTransactionSpec.create = function create (state, specs) {
        var spec;
        if (Array.isArray(specs)) {
            if (specs.length)
                { return specs.map(function (s) { return ResolvedTransactionSpec.create(state, s); }).reduce(function (a, b) { return a.combine(b); }); }
            spec = {};
        }
        else if (specs instanceof ResolvedTransactionSpec) {
            return specs;
        }
        else {
            spec = specs;
        }
        var reconf = spec.reconfigure;
        if (reconf && reconf.append) {
            reconf = Object.assign({}, reconf);
            var tag = typeof Symbol == "undefined" ? "__append" + Math.floor(Math.random() * 0xffffffff) : Symbol("appendConf");
            reconf[tag] = reconf.append;
            reconf.append = undefined;
        }
        var sel = spec.selection;
        return new ResolvedTransactionSpec(spec.changes ? state.changes(spec.changes) : ChangeSet.empty(state.doc.length), sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)), !spec.effects ? none : Array.isArray(spec.effects) ? spec.effects : [spec.effects], !spec.annotations ? none : Array.isArray(spec.annotations) ? spec.annotations : [spec.annotations], !!spec.scrollIntoView, spec.filter !== false, reconf);
    };
    ResolvedTransactionSpec.prototype.combine = function combine (b) {
        var a = this;
        var changesA = a.changes.mapDesc(b.changes, true), changesB = b.changes.map(a.changes);
        return new ResolvedTransactionSpec(a.changes.compose(changesB), b.selection ? b.selection.map(changesA) : a.selection ? a.selection.map(changesB) : undefined, StateEffect.mapEffects(a.effects, changesB).concat(StateEffect.mapEffects(b.effects, changesA)), a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations, a.scrollIntoView || b.scrollIntoView, a.filter && b.filter, !b.reconfigure ? a.reconfigure : b.reconfigure.full || !a.reconfigure ? b.reconfigure
            : Object.assign({}, a.reconfigure, b.reconfigure));
    };
    var none = [];

    var nextID = 0;
    /// A facet is a value that is assicated with a state and can be
    /// influenced by any number of extensions. Extensions can provide
    /// input values for the facet, and the facet combines those into an
    /// output value.
    ///
    /// Examples of facets are the theme styles associated with an editor
    /// (which are all stored) or the tab size (which is reduced to a
    /// single value, using the input with the hightest precedence).
    var Facet = function Facet(
    /// @internal
    combine, 
    /// @internal
    compareInput, 
    /// @internal
    compare, isStatic) {
        this.combine = combine;
        this.compareInput = compareInput;
        this.compare = compare;
        this.isStatic = isStatic;
        /// @internal
        this.id = nextID++;
        this.default = combine([]);
    };
    /// Define a new facet.
    Facet.define = function define (config) {
            if ( config === void 0 ) config = {};

        return new Facet(config.combine || (function (a) { return a; }), config.compareInput || (function (a, b) { return a === b; }), config.compare || (!config.combine ? sameArray : function (a, b) { return a === b; }), !!config.static);
    };
    /// Returns an extension that adds the given value for this facet.
    Facet.prototype.of = function of (value) {
        return new FacetProvider([], this, 0 /* Static */, value);
    };
    /// Create an extension that computes a value for the facet from a
    /// state. You must take care to declare the parts of the state that
    /// this value depends on, since your function is only called again
    /// for a new state when one of those parts changed.
    ///
    /// In most cases, you'll want to use the
    /// [`provide`](#state.StateField^define^config.provide) option when
    /// defining a field instead.
    Facet.prototype.compute = function compute (deps, get) {
        if (this.isStatic)
            { throw new Error("Can't compute a static facet"); }
        return new FacetProvider(deps, this, 1 /* Single */, get);
    };
    /// Create an extension that computes zero or more values for this
    /// facet from a state.
    Facet.prototype.computeN = function computeN (deps, get) {
        if (this.isStatic)
            { throw new Error("Can't compute a static facet"); }
        return new FacetProvider(deps, this, 2 /* Multi */, get);
    };
    /// Helper method for registering a facet source with a state field
    /// via its [`provide`](#state.StateField^define^config.provide) option.
    /// Returns a value that can be passed to that option to make the
    /// field automatically provide a value for this facet.
    Facet.prototype.from = function from (get, prec) {
            var this$1 = this;

        return function (field) { return maybePrec(prec, this$1.compute([field], function (state) { return get(state.field(field)); })); };
    };
    /// Helper for [providing](#state.StateField^define^config.provide)
    /// a dynamic number of values for this facet from a state field.
    Facet.prototype.nFrom = function nFrom (get, prec) {
            var this$1 = this;

        return function (field) { return maybePrec(prec, this$1.computeN([field], function (state) { return get(state.field(field)); })); };
    };
    function sameArray(a, b) {
        return a == b || a.length == b.length && a.every(function (e, i) { return e === b[i]; });
    }
    var FacetProvider = function FacetProvider(dependencies, facet, type, value) {
        this.dependencies = dependencies;
        this.facet = facet;
        this.type = type;
        this.value = value;
        this.id = nextID++;
    };
    FacetProvider.prototype.dynamicSlot = function dynamicSlot (addresses) {
        var getter = this.value;
        var compare = this.facet.compareInput;
        var idx = addresses[this.id] >> 1, multi = this.type == 2 /* Multi */;
        var depDoc = false, depSel = false, depAddrs = [];
        for (var i = 0, list = this.dependencies; i < list.length; i += 1) {
            var dep = list[i];

                if (dep == "doc")
                { depDoc = true; }
            else if (dep == "selection")
                { depSel = true; }
            else if ((addresses[dep.id] & 1) == 0)
                { depAddrs.push(addresses[dep.id]); }
        }
        return function (state, tr) {
            if (!tr || tr.reconfigured) {
                state.values[idx] = getter(state);
                return 1 /* Changed */;
            }
            else {
                var depChanged = (depDoc && tr.docChanged) || (depSel && (tr.docChanged || tr.selection)) ||
                    depAddrs.some(function (addr) { return (ensureAddr(state, addr) & 1 /* Changed */) > 0; });
                if (!depChanged)
                    { return 0; }
                var newVal = getter(state), oldVal = tr.startState.values[idx];
                if (multi ? compareArray(newVal, oldVal, compare) : compare(newVal, oldVal))
                    { return 0; }
                state.values[idx] = newVal;
                return 1 /* Changed */;
            }
        };
    };
    function compareArray(a, b, compare) {
        if (a.length != b.length)
            { return false; }
        for (var i = 0; i < a.length; i++)
            { if (!compare(a[i], b[i]))
                { return false; } }
        return true;
    }
    function dynamicFacetSlot(addresses, facet, providers) {
        var providerAddrs = providers.map(function (p) { return addresses[p.id]; });
        var providerTypes = providers.map(function (p) { return p.type; });
        var dynamic = providerAddrs.filter(function (p) { return !(p & 1); });
        var idx = addresses[facet.id] >> 1;
        return function (state, tr) {
            var oldAddr = !tr ? null : tr.reconfigured ? tr.startState.config.address[facet.id] : idx << 1;
            var changed = oldAddr == null;
            for (var i$1 = 0, list = dynamic; i$1 < list.length; i$1 += 1) {
                var dynAddr = list[i$1];

                if (ensureAddr(state, dynAddr) & 1 /* Changed */)
                    { changed = true; }
            }
            if (!changed)
                { return 0; }
            var values = [];
            for (var i = 0; i < providerAddrs.length; i++) {
                var value = getAddr(state, providerAddrs[i]);
                if (providerTypes[i] == 2 /* Multi */)
                    { for (var i$2 = 0, list$1 = value; i$2 < list$1.length; i$2 += 1)
                        {
                            var val = list$1[i$2];

                            values.push(val);
                        } }
                else
                    { values.push(value); }
            }
            var newVal = facet.combine(values);
            if (oldAddr != null && facet.compare(newVal, getAddr(tr.startState, oldAddr)))
                { return 0; }
            state.values[idx] = newVal;
            return 1 /* Changed */;
        };
    }
    function maybeIndex(state, id) {
        var found = state.config.address[id];
        return found == null ? null : found >> 1;
    }
    /// Fields can store additional information in an editor state, and
    /// keep it in sync with the rest of the state.
    var StateField = function StateField(
    /// @internal
    id, createF, updateF, compareF, 
    /// @internal
    facets) {
        this.id = id;
        this.createF = createF;
        this.updateF = updateF;
        this.compareF = compareF;
        this.facets = facets;
    };
    /// Define a state field.
    StateField.define = function define (config) {
        var facets = [];
        var field = new StateField(nextID++, config.create, config.update, config.compare || (function (a, b) { return a === b; }), facets);
        if (config.provide)
            { for (var i = 0, list = config.provide; i < list.length; i += 1) {
                var p = list[i];

                        if (p instanceof Facet)
                    { facets.push(p.compute([field], function (state) { return state.field(field); })); }
                else
                    { facets.push(p(field)); }
            } }
        return field;
    };
    /// @internal
    StateField.prototype.slot = function slot (addresses) {
            var this$1 = this;

        var idx = addresses[this.id] >> 1;
        return function (state, tr) {
            if (!tr) {
                state.values[idx] = this$1.createF(state);
                return 1 /* Changed */;
            }
            var oldVal, changed = 0;
            if (tr.reconfigured) {
                var oldIdx = maybeIndex(tr.startState, this$1.id);
                oldVal = oldIdx == null ? this$1.createF(tr.startState) : tr.startState.values[oldIdx];
                changed = 1 /* Changed */;
            }
            else {
                oldVal = tr.startState.values[idx];
            }
            var value = this$1.updateF(oldVal, tr);
            if (!changed && !this$1.compareF(oldVal, value))
                { changed = 1 /* Changed */; }
            if (changed)
                { state.values[idx] = value; }
            return changed;
        };
    };
    var Prec = { fallback: 3, default: 2, extend: 1, override: 0 };
    /// By default extensions are registered in the order they are found
    /// the flattened form of nested array that was provided. Individual
    /// extension values can be assigned a precedence to override this.
    /// Extensions that do not have a precedence set get the precedence of
    /// the nearest parent with a precedence, or
    /// [`"default"`](#state.Precedence) if there is no such parent. The
    /// final ordering of extensions is determined by first sorting by
    /// precedence and then by order within each precedence.
    function precedence(extension, value) {
        if (!Prec.hasOwnProperty(value))
            { throw new RangeError(("Invalid precedence: " + value)); }
        return new PrecExtension(extension, Prec[value]);
    }
    function maybePrec(prec, ext) {
        return prec ? precedence(ext, prec) : ext;
    }
    var PrecExtension = function PrecExtension(e, prec) {
        this.e = e;
        this.prec = prec;
    };
    var TaggedExtension = function TaggedExtension(tag, extension) {
        this.tag = tag;
        this.extension = extension;
    };
    /// Tagged extensions can be used to make a configuration dynamic.
    /// Tagging an extension allows you to later
    /// [replace](#state.TransactionSpec.replaceExtensions) it with
    /// another extension. A given tag may only occur once within a given
    /// configuration.
    function tagExtension(tag, extension) {
        return new TaggedExtension(tag, extension);
    }
    var Configuration = function Configuration(source, replacements, dynamicSlots, address, staticValues) {
        this.source = source;
        this.replacements = replacements;
        this.dynamicSlots = dynamicSlots;
        this.address = address;
        this.staticValues = staticValues;
        this.statusTemplate = [];
        while (this.statusTemplate.length < staticValues.length)
            { this.statusTemplate.push(0 /* Uninitialized */); }
    };
    Configuration.prototype.staticFacet = function staticFacet (facet) {
        var addr = this.address[facet.id];
        return addr == null ? facet.default : this.staticValues[addr >> 1];
    };
    Configuration.resolve = function resolve (extension, replacements, oldState) {
            if ( replacements === void 0 ) replacements = Object.create(null);

        var fields = [];
        var facets = Object.create(null);
        for (var i = 0, list = flatten(extension, replacements); i < list.length; i += 1) {
            var ext = list[i];

                if (ext instanceof StateField)
                { fields.push(ext); }
            else
                { (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext); }
        }
        var address = Object.create(null);
        var staticValues = [];
        var dynamicSlots = [];
        var loop = function () {
            var field = list$1[i$1];

                address[field.id] = dynamicSlots.length << 1;
            dynamicSlots.push(function (a) { return field.slot(a); });
        };

            for (var i$1 = 0, list$1 = fields; i$1 < list$1.length; i$1 += 1) loop();
        var loop$1 = function ( id ) {
            var providers = facets[id], facet = providers[0].facet;
            if (providers.every(function (p) { return p.type == 0; } /* Static */)) {
                address[facet.id] = (staticValues.length << 1) | 1;
                var value = facet.combine(providers.map(function (p) { return p.value; }));
                var oldAddr = oldState ? oldState.config.address[facet.id] : null;
                if (oldAddr != null) {
                    var oldVal = getAddr(oldState, oldAddr);
                    if (facet.compare(value, oldVal))
                        { value = oldVal; }
                }
                staticValues.push(value);
            }
            else {
                var loop$2 = function () {
                    var p = list$2[i$2];

                        if (p.type == 0 /* Static */) {
                        address[p.id] = (staticValues.length << 1) | 1;
                        staticValues.push(p.value);
                    }
                    else {
                        address[p.id] = dynamicSlots.length << 1;
                        dynamicSlots.push(function (a) { return p.dynamicSlot(a); });
                    }
                };

                    for (var i$2 = 0, list$2 = providers; i$2 < list$2.length; i$2 += 1) loop$2();
                address[facet.id] = dynamicSlots.length << 1;
                dynamicSlots.push(function (a) { return dynamicFacetSlot(a, facet, providers); });
            }
        };

            for (var id in facets) loop$1( id );
        return new Configuration(extension, replacements, dynamicSlots.map(function (f) { return f(address); }), address, staticValues);
    };
    function allKeys(obj) {
        return (Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(obj) : []).concat(Object.keys(obj));
    }
    function flatten(extension, replacements) {
        var result = [[], [], [], []];
        var seen = new Set();
        var tagsSeen = Object.create(null);
        function inner(ext, prec) {
            if (seen.has(ext))
                { return; }
            seen.add(ext);
            if (Array.isArray(ext)) {
                for (var i = 0, list = ext; i < list.length; i += 1)
                    {
                    var e = list[i];

                    inner(e, prec);
                }
            }
            else if (ext instanceof TaggedExtension) {
                if (ext.tag in tagsSeen)
                    { throw new RangeError(("Duplicate use of tag '" + (String(ext.tag)) + "' in extensions")); }
                tagsSeen[ext.tag] = true;
                inner(replacements[ext.tag] || ext.extension, prec);
            }
            else if (ext.extension) {
                inner(ext.extension, prec);
            }
            else if (ext instanceof PrecExtension) {
                inner(ext.e, ext.prec);
            }
            else {
                result[prec].push(ext);
                if (ext instanceof StateField)
                    { inner(ext.facets, prec); }
            }
        }
        inner(extension, Prec.default);
        for (var i = 0, list = allKeys(replacements); i < list.length; i += 1)
            {
            var key = list[i];

            if (!(key in tagsSeen) && key != "full" && replacements[key]) {
                tagsSeen[key] = true;
                inner(replacements[key], Prec.default);
            }
        }
        return result.reduce(function (a, b) { return a.concat(b); });
    }
    function ensureAddr(state, addr) {
        if (addr & 1)
            { return 2 /* Computed */; }
        var idx = addr >> 1;
        var status = state.status[idx];
        if (status == 4 /* Computing */)
            { throw new Error("Cyclic dependency between fields and/or facets"); }
        if (status & 2 /* Computed */)
            { return status; }
        state.status[idx] = 4 /* Computing */;
        var changed = state.config.dynamicSlots[idx](state, state.applying);
        return state.status[idx] = 2 /* Computed */ | changed;
    }
    function getAddr(state, addr) {
        return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
    }

    var allowMultipleSelections = Facet.define({
        combine: function (values) { return values.some(function (v) { return v; }); },
        static: true
    });
    var changeFilter = Facet.define();
    var transactionFilter = Facet.define();
    /// A node prop stored on a grammar's top node to indicate the facet
    /// used to store [language data](#state.EditorState.languageDataAt)
    /// related to that language.
    var languageDataProp = new NodeProp();
    var globalLanguageData = Facet.define();
    /// Indentation contexts are used when calling
    /// [`EditorState.indentation`](#state.EditorState^indentation). They
    /// provide helper utilities useful in indentation logic, and can
    /// selectively override the indentation reported for some
    /// lines.
    var IndentContext = function IndentContext(
    /// The editor state.
    state, 
    /// @internal
    overrideIndentation, 
    /// @internal
    simulateBreak) {
        this.state = state;
        this.overrideIndentation = overrideIndentation;
        this.simulateBreak = simulateBreak;
    };

    var prototypeAccessors$6 = { unit: { configurable: true } };
    /// The indent unit (number of columns per indentation level).
    prototypeAccessors$6.unit.get = function () { return this.state.indentUnit; };
    /// Get the text directly after `pos`, either the entire line
    /// or the next 100 characters, whichever is shorter.
    IndentContext.prototype.textAfterPos = function textAfterPos (pos) {
        return this.state.sliceDoc(pos, Math.min(pos + 100, this.simulateBreak != null && this.simulateBreak > pos ? this.simulateBreak : 1e9, this.state.doc.lineAt(pos).to));
    };
    /// find the column position (taking tabs into account) of the given
    /// position in the given string.
    IndentContext.prototype.countColumn = function countColumn$1 (line, pos) {
        return countColumn(pos < 0 ? line : line.slice(0, pos), 0, this.state.tabSize);
    };
    /// Find the indentation column of the given document line.
    IndentContext.prototype.lineIndent = function lineIndent (line) {
        if (this.overrideIndentation) {
            var override = this.overrideIndentation(line.from);
            if (override > -1)
                { return override; }
        }
        var text = line.slice(0, Math.min(100, line.length));
        return this.countColumn(text, text.search(/\S/));
    };
    /// Find the column for the given position.
    IndentContext.prototype.column = function column (pos) {
        var line = this.state.doc.lineAt(pos), text = line.slice(0, pos - line.from);
        var result = this.countColumn(text, pos - line.from);
        var override = this.overrideIndentation ? this.overrideIndentation(line.from) : -1;
        if (override > -1)
            { result += override - this.countColumn(text, text.search(/\S/)); }
        return result;
    };

    Object.defineProperties( IndentContext.prototype, prototypeAccessors$6 );

    /// This is used to [categorize](#state.EditorState.charCategorizer)
    /// characters into three categories—word characters, whitespace, and
    /// anything else. It is used do things like selecting by word.
    var CharCategory;
    (function (CharCategory) {
        CharCategory[CharCategory["Word"] = 0] = "Word";
        CharCategory[CharCategory["Space"] = 1] = "Space";
        CharCategory[CharCategory["Other"] = 2] = "Other";
    })(CharCategory || (CharCategory = {}));
    var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    var wordChar;
    try {
        wordChar = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
    }
    catch (_) { }
    function hasWordChar(str) {
        if (wordChar)
            { return wordChar.test(str); }
        for (var i = 0; i < str.length; i++) {
            var ch = str[i];
            if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch)))
                { return true; }
        }
        return false;
    }
    function makeCategorizer(wordChars) {
        return function (char) {
            if (!/\S/.test(char))
                { return CharCategory.Space; }
            if (hasWordChar(char))
                { return CharCategory.Word; }
            for (var i = 0; i < wordChars.length; i++)
                { if (char.indexOf(wordChars[i]) > -1)
                    { return CharCategory.Word; } }
            return CharCategory.Other;
        };
    }

    /// The editor state class is a persistent (immutable) data structure.
    /// To update a state, you [create](#state.EditorState.update) a
    /// [transaction](#state.Transaction), which produces a _new_ state
    /// instance, without modifying the original object.
    ///
    /// As such, _never_ mutate properties of a state directly. That'll
    /// just break things.
    var EditorState = function EditorState(
    /// @internal
    config, 
    /// The current document.
    doc, 
    /// The current selection.
    selection, tr) {
        if ( tr === void 0 ) tr = null;

        this.config = config;
        this.doc = doc;
        this.selection = selection;
        /// @internal
        this.applying = null;
        this.status = config.statusTemplate.slice();
        if (tr && !tr.reconfigured) {
            this.values = tr.startState.values.slice();
        }
        else {
            this.values = config.dynamicSlots.map(function (_) { return null; });
            // Copy over old values for shared facets/fields if this is a reconfigure
            if (tr)
                { for (var id in config.address) {
                    var cur = config.address[id], prev = tr.startState.config.address[id];
                    if (prev != null && (cur & 1) == 0)
                        { this.values[cur >> 1] = getAddr(tr.startState, prev); }
                } }
        }
        this.applying = tr;
        if (tr)
            { tr.state = this; }
        for (var i = 0; i < this.config.dynamicSlots.length; i++)
            { ensureAddr(this, i << 1); }
        this.applying = null;
    };

    var prototypeAccessors$7 = { tabSize: { configurable: true },lineBreak: { configurable: true },indentUnit: { configurable: true },indentWithTabs: { configurable: true },tree: { configurable: true } };
    EditorState.prototype.field = function field (field$1, require) {
            if ( require === void 0 ) require = true;

        var addr = this.config.address[field$1.id];
        if (addr == null) {
            if (require)
                { throw new RangeError("Field is not present in this state"); }
            return undefined;
        }
        ensureAddr(this, addr);
        return getAddr(this, addr);
    };
    /// Create a [transaction](#state.Transaction) that updates this
    /// state. Any number of [transaction specs](#state.TransactionSpec)
    /// can be passed. The [changes](#state.TransactionSpec.changes) (if
    /// any) of each spec are assumed to start in the _current_ document
    /// (not the document produced by previous specs), and its
    /// [selection](#state.TransactionSpec.selection) and
    /// [effects](#state.TransactionSpec.effects) are assumed to refer
    /// to the document created by its _own_ changes. The resulting
    /// transaction contains the combined effect of all the different
    /// specs. For things like
    /// [selection](#state.TransactionSpec.selection) or
    /// [reconfiguration](#state.TransactionSpec.reconfigure), later
    /// specs take precedence over earlier ones.
    EditorState.prototype.update = function update () {
            var specs = [], len = arguments.length;
            while ( len-- ) specs[ len ] = arguments[ len ];

        var spec = ResolvedTransactionSpec.create(this, specs);
        return finishTransaction(this, filterTransaction(this, filterChanges(this, spec)));
    };
    /// Create a [transaction spec](#state.StrictTransactionSpec) that
    /// replaces every selection range with the given content.
    EditorState.prototype.replaceSelection = function replaceSelection (text) {
        if (typeof text == "string")
            { text = this.toText(text); }
        return this.changeByRange(function (range) { return ({ changes: { from: range.from, to: range.to, insert: text },
            range: EditorSelection.cursor(range.from + text.length) }); });
    };
    /// Create a set of changes and a new selection by running the given
    /// function for each range in the active selection. The function
    /// can return an optional set of changes (in the coordinate space
    /// of the start document), plus an updated range (in the coordinate
    /// space of the document produced by the call's own changes). This
    /// method will merge all the changes and ranges into a single
    /// changeset and selection, and return it as a [transaction
    /// spec](#state.StrictTransactionSpec), which can be passed to
    /// [`update`](#state.EditorState.update).
    EditorState.prototype.changeByRange = function changeByRange (f) {
        var sel = this.selection;
        var result1 = f(sel.ranges[0]);
        var changes = this.changes(result1.changes), ranges = [result1.range];
        for (var i = 1; i < sel.ranges.length; i++) {
            var result = f(sel.ranges[i]);
            var newChanges = this.changes(result.changes), newMapped = newChanges.map(changes);
            for (var j = 0; j < i; j++)
                { ranges[j] = ranges[j].map(newMapped); }
            ranges.push(result.range.map(changes.mapDesc(newChanges, true)));
            changes = changes.compose(newMapped);
        }
        return ResolvedTransactionSpec.create(this, {
            changes: changes,
            selection: EditorSelection.create(ranges, sel.primaryIndex)
        });
    };
    /// Create a [change set](#state.ChangeSet) from the given change
    /// description, taking the state's document length and line
    /// separator into account.
    EditorState.prototype.changes = function changes (spec) {
            if ( spec === void 0 ) spec = [];

        if (spec instanceof ChangeSet)
            { return spec; }
        return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
    };
    /// Using the state's [line
    /// separator](#state.EditorState^lineSeparator), create a
    /// [`Text`](#text.Text) instance from the given string.
    EditorState.prototype.toText = function toText (string) {
        return Text.of(string.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
    };
    /// Return the given range of the document as a string.
    EditorState.prototype.sliceDoc = function sliceDoc (from, to) {
            if ( from === void 0 ) from = 0;
            if ( to === void 0 ) to = this.doc.length;

        return this.doc.sliceString(from, to, this.lineBreak);
    };
    /// Get the value of a state [facet](#state.Facet).
    EditorState.prototype.facet = function facet (facet$1) {
        var addr = this.config.address[facet$1.id];
        if (addr == null)
            { return facet$1.default; }
        ensureAddr(this, addr);
        return getAddr(this, addr);
    };
    /// Convert this state to a JSON-serializable object.
    EditorState.prototype.toJSON = function toJSON () {
        // FIXME plugin state serialization
        return {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
    };
    /// Deserialize a state from its JSON representation.
    EditorState.fromJSON = function fromJSON (json, config) {
            if ( config === void 0 ) config = {};

        if (!json || typeof json.doc != "string")
            { throw new RangeError("Invalid JSON representation for EditorState"); }
        return EditorState.create({
            doc: json.doc,
            selection: EditorSelection.fromJSON(json.selection),
            extensions: config.extensions
        });
    };
    /// Create a new state. You'll usually only need this when
    /// initializing an editor—updated states are created by applying
    /// transactions.
    EditorState.create = function create (config) {
            if ( config === void 0 ) config = {};

        var configuration = Configuration.resolve(config.extensions || []);
        var doc = config.doc instanceof Text ? config.doc
            : Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
        var selection = !config.selection ? EditorSelection.single(0)
            : config.selection instanceof EditorSelection ? config.selection
                : EditorSelection.single(config.selection.anchor, config.selection.head);
        checkSelection(selection, doc.length);
        if (!configuration.staticFacet(allowMultipleSelections))
            { selection = selection.asSingle(); }
        return new EditorState(configuration, doc, selection);
    };
    /// The size (in columns) of a tab in the document, determined by
    /// the [`tabSize`](#state.EditorState^tabSize) facet.
    prototypeAccessors$7.tabSize.get = function () { return this.facet(EditorState.tabSize); };
    /// Get the proper [line-break](#state.EditorState^lineSeparator)
    /// string for this state.
    prototypeAccessors$7.lineBreak.get = function () { return this.facet(EditorState.lineSeparator) || "\n"; };
    /// The _column width_ of an indent unit in the document. Determined
    /// by the [`indentUnit`](#state.EditorState^indentUnit) facet, and
    /// [`tabSize`](#state.EditorState^tabSize) when that contains tabs.
    prototypeAccessors$7.indentUnit.get = function () {
        var unit = this.facet(EditorState.indentUnit);
        return unit.charCodeAt(0) == 9 ? this.tabSize * unit.length : unit.length;
    };
    /// Whether indentation should use tabs. Will be true when the
    /// [`indentUnit`](#state.EditorState^indentUnit) facet contains
    /// tabs.
    prototypeAccessors$7.indentWithTabs.get = function () { return this.facet(EditorState.indentUnit).charCodeAt(0) == 9; };
    /// Look up a translation for the given phrase (via the
    /// [`phrases`](#state.EditorState^phrases) facet), or return the
    /// original string if no translation is found.
    EditorState.prototype.phrase = function phrase (phrase$1) {
        for (var i = 0, list = this.facet(EditorState.phrases); i < list.length; i += 1)
            {
                var map = list[i];

                if (Object.prototype.hasOwnProperty.call(map, phrase$1))
                { return map[phrase$1];
            } }
        return phrase$1;
    };
    /// Return a function that can categorize strings (expected to
    /// represent a single [grapheme cluster](#text.nextClusterBreak))
    /// into one of:
    ///
    ///  - Word (contains an alphanumeric character or a character
    ///explicitly listed in the local language's `"wordChars"`
    ///language data, which should be a string)
    ///  - Space (contains only whitespace)
    ///  - Other (anything else)
    EditorState.prototype.charCategorizer = function charCategorizer (at) {
        return makeCategorizer(this.languageDataAt("wordChars", at).join(""));
    };
    /// Get the syntax tree for this state, which is the current
    /// (possibly incomplete) parse tree of the [syntax](#state.Syntax)
    /// with the highest precedence, or the empty tree if there is no
    /// syntax available.
    prototypeAccessors$7.tree.get = function () {
        var syntax = this.facet(EditorState.syntax);
        return syntax.length ? syntax[0].getTree(this) : Tree.empty;
    };
    /// Find the values for a given language data field, either provided
    /// by the [syntax](#state.languageData) or through the
    /// [`addLanguageData`](#state.EditorState^addLanguageData) facet,
    /// for the [document type](#state.Syntax.docNodeTypeAt) at the
    /// given position. Values provided by the facet, in precedence
    /// order, will appear before those provided by the syntax.
    EditorState.prototype.languageDataAt = function languageDataAt (name, pos) {
        var values = [];
        var syntax = this.facet(EditorState.syntax);
        for (var i = syntax.length ? 0 : 1; i < 2; i++) {
            var source = this.facet(i ? globalLanguageData : syntax[0].languageDataFacetAt(this, pos));
            for (var i$1 = 0, list = source; i$1 < list.length; i$1 += 1)
                {
                    var obj = list[i$1];

                    if (Object.prototype.hasOwnProperty.call(obj, name))
                    { values.push(obj[name]);
                } }
        }
        return values;
    };

    Object.defineProperties( EditorState.prototype, prototypeAccessors$7 );
    /// A facet that, when enabled, causes the editor to allow multiple
    /// ranges to be selected. You should probably not use this
    /// directly, but let a plugin like
    /// [multiple-selections](#multiple-selections) handle it (which
    /// also makes sure the selections are visible in the view).
    EditorState.allowMultipleSelections = allowMultipleSelections;
    /// Facet that defines a way to query for automatic indentation
    /// depth at the start of a given line.
    EditorState.indentation = Facet.define();
    /// Configures the tab size to use in this state. The first
    /// (highest-precedence) value of the facet is used. If no value is
    /// given, this defaults to 4.
    EditorState.tabSize = Facet.define({
        combine: function (values) { return values.length ? values[0] : 4; }
    });
    /// The line separator to use. By default, any of `"\n"`, `"\r\n"`
    /// and `"\r"` is treated as a separator when splitting lines, and
    /// lines are joined with `"\n"`.
    ///
    /// When you configure a value here, only that precise separator
    /// will be used, allowing you to round-trip documents through the
    /// editor without normalizing line separators.
    EditorState.lineSeparator = Facet.define({
        combine: function (values) { return values.length ? values[0] : undefined; },
        static: true
    });
    /// Facet for overriding the unit by which indentation happens.
    /// Should be a string consisting either entirely of spaces or
    /// entirely of tabs. When not set, this defaults to 2 spaces.
    EditorState.indentUnit = Facet.define({
        combine: function (values) {
            if (!values.length)
                { return "  "; }
            if (!/^(?: +|\t+)$/.test(values[0]))
                { throw new Error("Invalid indent unit: " + JSON.stringify(values[0])); }
            return values[0];
        }
    });
    /// Registers translation phrases. The
    /// [`phrase`](#state.EditorState.phrase) method will look through
    /// all objects registered with this facet to find translations for
    /// its argument.
    EditorState.phrases = Facet.define();
    /// Facet that registers a parsing service for the state.
    EditorState.syntax = Facet.define();
    /// A facet used to register [language
    /// data](#state.EditorState.languageDataAt) that should apply
    /// throughout the document, regardless of language.
    EditorState.globalLanguageData = globalLanguageData;
    /// A facet that registers a code folding service. When called with
    /// the extent of a line, such a function should return a range
    /// object when a foldable that starts on that line (but continues
    /// beyond it), if one can be found.
    EditorState.foldable = Facet.define();
    /// Facet used to register change filters, which are called for each
    /// transaction (unless explicitly
    /// [disabled](#state.TransactionSpec.filter)), and can suppress
    /// part of the transaction's changes.
    ///
    /// Such a function can return `true` to indicate that it doesn't
    /// want to do anything, `false` to completely stop the changes in
    /// the transaction, or a set of ranges in which changes should be
    /// suppressed. Such ranges are represented as an array of numbers,
    /// with each pair of two number indicating the start and end of a
    /// range. So for example `[10, 20, 100, 110]` suppresses changes
    /// between 10 and 20, and between 100 and 110.
    EditorState.changeFilter = changeFilter;
    /// Facet used to register a hook that gets a chance to update or
    /// replace transaction specs before they are applied. This will
    /// only be applied for transactions that don't have
    /// [`filter`](#state.TransactionSpec.filter) set to `false`. You
    /// can either return a single spec (possibly the input spec), or an
    /// array of specs (which will be combined in the same way as the
    /// arguments to [`EditorState.update`](#state.EditorState.update)).
    ///
    /// The function passed to the filter as third argument can be used
    /// to force computation of the full
    /// [transaction](#state.Transaction) for the current spec (which is
    /// only done on demand for efficiency reasons).
    ///
    /// (This functionality should be used with care. Indiscriminately
    /// modifying transaction is likely to break something or degrade
    /// the user experience.)
    EditorState.transactionFilter = transactionFilter;
    function finishTransaction(state, spec) {
        if (spec.finished)
            { return spec.finished; }
        if (spec.selection)
            { checkSelection(spec.selection, spec.changes.newLength); }
        var conf = state.config;
        if (spec.reconfigure)
            { conf = Configuration.resolve(spec.reconfigure.full || conf.source, spec.reconfigure, state); }
        var flags = spec.scrollIntoView ? 1 /* scrollIntoView */ : 0;
        var tr = new Transaction(state, spec.changes, spec.selection, spec.effects, spec.annotations, spec.reconfigure, flags);
        new EditorState(conf, spec.changes.apply(state.doc), spec.selection || (spec.changes ? state.selection.map(spec.changes) : state.selection), tr);
        return spec.finished = tr;
    }
    function filterTransaction(state, spec) {
        if (!spec.filter)
            { return spec; }
        var filters = state.facet(transactionFilter);
        for (var i = filters.length - 1; i >= 0; i--)
            { spec = ResolvedTransactionSpec.create(state, filters[i](spec, state, function () { return finishTransaction(state, spec); })); }
        return spec;
    }
    function joinRanges(a, b) {
        var result = [];
        for (var iA = 0, iB = 0;;) {
            var from = (void 0), to = (void 0);
            if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
                from = a[iA++];
                to = a[iA++];
            }
            else if (iB < b.length) {
                from = b[iB++];
                to = b[iB++];
            }
            else
                { return result; }
            if (!result.length || result[result.length - 1] < from)
                { result.push(from, to); }
            else if (result[result.length - 1] < to)
                { result[result.length - 1] = to; }
        }
    }
    function filterChanges(state, spec) {
        if (!spec.filter)
            { return spec; }
        var result = true;
        for (var i = 0, list = state.facet(changeFilter); i < list.length; i += 1) {
            var filter = list[i];

            var value = filter(spec, state);
            if (value === false) {
                result = false;
                break;
            }
            if (Array.isArray(value))
                { result = result === true ? value : joinRanges(result, value); }
        }
        if (result === true)
            { return spec; }
        var changes, back;
        if (result === false) {
            back = spec.changes.invertedDesc;
            changes = ChangeSet.empty(state.doc.length);
        }
        else {
            var filtered = spec.changes.filter(result);
            changes = filtered.changes;
            back = filtered.filtered.invertedDesc;
        }
        return new ResolvedTransactionSpec(changes, spec.selection && spec.selection.map(back), StateEffect.mapEffects(spec.effects, back), spec.annotations, spec.scrollIntoView, spec.filter, spec.reconfigure);
    }

    /// Utility function for combining behaviors to fill in a config
    /// object from an array of provided configs. Will, by default, error
    /// when a field gets two values that aren't ===-equal, but you can
    /// provide combine functions per field to do something else.
    function combineConfig(configs, defaults, // Should hold only the optional properties of Config, but I haven't managed to express that
    combine) {
        if ( combine === void 0 ) combine = {};

        var result = {};
        for (var i$1 = 0, list$1 = configs; i$1 < list$1.length; i$1 += 1)
            {
            var config = list$1[i$1];

            for (var i = 0, list = Object.keys(config); i < list.length; i += 1) {
                var key = list[i];

                    var value = config[key], current = result[key];
                if (current === undefined)
                    { result[key] = value; }
                else if (current === value || value === undefined) ; // No conflict
                else if (Object.hasOwnProperty.call(combine, key))
                    { result[key] = combine[key](current, value); }
                else
                    { throw new Error("Config merge conflict for field " + key); }
            }
        }
        for (var key$1 in defaults)
            { if (result[key$1] === undefined)
                { result[key$1] = defaults[key$1]; } }
        return result;
    }

    var _m0 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Annotation: Annotation,
        AnnotationType: AnnotationType,
        ChangeDesc: ChangeDesc,
        ChangeSet: ChangeSet,
        get CharCategory () { return CharCategory; },
        EditorSelection: EditorSelection,
        EditorState: EditorState,
        Facet: Facet,
        IndentContext: IndentContext,
        get MapMode () { return MapMode; },
        SelectionRange: SelectionRange,
        StateEffect: StateEffect,
        StateEffectType: StateEffectType,
        StateField: StateField,
        Transaction: Transaction,
        combineConfig: combineConfig,
        languageDataProp: languageDataProp,
        precedence: precedence,
        tagExtension: tagExtension,
        Text: Text
    });

    function sym(name, random) {
      return typeof Symbol == "undefined"
        ? "__" + name + (random ? Math.floor(Math.random() * 1e8) : "")
        : random ? Symbol(name) : Symbol.for(name)
    }

    var COUNT = sym("\u037c"), SET = sym("styleSet", 1), RULES = sym("rules", 1);
    var top = typeof global == "undefined" ? window : global;

    // :: (Object<Style>, ?{generateClasses: ?boolean}) → StyleModule
    // Instances of this class bind the property names from `spec` to CSS
    // class names that assign the styles in the corresponding property
    // values, unless `generateClasses` is `false`, in which case the
    // property names in the spec are treated as plain CSS selectors.
    //
    // A style module can only be used in a given DOM root after it has
    // been _mounted_ there with `StyleModule.mount`.
    //
    // Style modules should be created once and stored somewhere, as
    // opposed to re-creating them every time you need them. The amount of
    // CSS rules generated for a given DOM root is bounded by the amount
    // of style modules that were used. So to avoid leaking rules, don't
    // create these dynamically, but treat them as one-time allocations.
    function StyleModule(spec, options) {
      this[RULES] = [];
      for (var name in spec) {
        var style = spec[name], specificity = style.specificity || 0;
        var id = StyleModule.newName(), selector = name;
        if ((options && options.generateClasses) !== false) {
          var className = id;
          selector = "." + id;
          for (var i = 0; i < specificity; i++) {
            var name$1 = "\u037c_" + (i ? i.toString(36) : "");
            selector += "." + name$1;
            className += " " + name$1;
          }
          this[name] = className;
        }
        renderStyle(selector, spec[name], this[RULES]);
      }
    }

    // :: () → string
    // Generate a new unique CSS class name.
    StyleModule.newName = function () {
      var id = top[COUNT] || 1;
      top[COUNT] = id + 1;
      return "\u037c" + id.toString(36)
    };

    StyleModule.prototype = Object.create(null);

    // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>)
    //
    // Mount the given set of modules in the given DOM root, which ensures
    // that the CSS rules defined by the module are available in that
    // context.
    //
    // Rules are only added to the document once per root.
    //
    // Rule order will follow the order of the modules, so that rules from
    // modules later in the array take precedence of those from earlier
    // modules. If you call this function multiple times for the same root
    // in a way that changes the order of already mounted modules, the old
    // order will be changed.
    StyleModule.mount = function(root, modules) {
      (root[SET] || new StyleSet(root)).mount(Array.isArray(modules) ? modules : [modules]);
    };

    var StyleSet = function StyleSet(root) {
      this.root = root;
      root[SET] = this;
      this.styleTag = (root.ownerDocument || root).createElement("style");
      var target = root.head || root;
      target.insertBefore(this.styleTag, target.firstChild);
      this.modules = [];
    };

    StyleSet.prototype.mount = function mount (modules) {
      var sheet = this.styleTag.sheet, reset = !sheet;
      var pos = 0 /* Current rule offset */, j = 0; /* Index into this.modules */
      for (var i = 0; i < modules.length; i++) {
        var mod = modules[i], index = this.modules.indexOf(mod);
        if (index < j && index > -1) { // Ordering conflict
          this.modules.splice(index, 1);
          j--;
          index = -1;
        }
        if (index == -1) {
          this.modules.splice(j++, 0, mod);
          if (!reset) { for (var k = 0; k < mod[RULES].length; k++)
            { sheet.insertRule(mod[RULES][k], pos++); } }
        } else {
          while (j < index) { pos += this.modules[j++][RULES].length; }
          pos += mod[RULES].length;
          j++;
        }
      }

      if (reset) {
        var text = "";
        for (var i$1 = 0; i$1 < this.modules.length; i$1++)
          { text += this.modules[i$1][RULES].join("\n") + "\n"; }
        this.styleTag.textContent = text;
      }
    };

    function renderStyle(selector, spec, output) {
      if (typeof spec != "object") { throw new RangeError("Expected style object, got " + JSON.stringify(spec)) }
      var props = [];
      for (var prop in spec) {
        if (/^@/.test(prop)) {
          var local = [];
          renderStyle(selector, spec[prop], local);
          output.push(prop + " {" + local.join(" ") + "}");
        } else if (/&/.test(prop)) {
          renderStyle(prop.replace(/&/g, selector), spec[prop], output);
        } else if (prop != "specificity") {
          if (typeof spec[prop] == "object") { throw new RangeError("The value of a property (" + prop + ") should be a primitive value.") }
          props.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, function (l) { return "-" + l.toLowerCase(); }) + ": " + spec[prop]);
        }
      }
      if (props.length) { output.push(selector + " {" + props.join("; ") + "}"); }
    }

    // Style::Object<union<Style,string>>
    //
    // A style is an object that, in the simple case, maps CSS property
    // names to strings holding their values, as in `{color: "red",
    // fontWeight: "bold"}`. The property names can be given in
    // camel-case—the library will insert a dash before capital letters
    // when converting them to CSS.
    //
    // If you include an underscore in a property name, it and everything
    // after it will be removed from the output, which can be useful when
    // providing a property multiple times, for browser compatibility
    // reasons.
    //
    // A property called `specificity` has a special meaning: if it holds
    // a number _N_, greater than 0, the selector for the class will have
    // _N_ extra dummy classes added, and those dummy classes will also be
    // present in the class name string created for the style. This allows
    // you to create rules that take precedence over other rules, even
    // when they are defined earlier.
    //
    // A property in a style object can also be a sub-selector, which
    // extends the current context to add a pseudo-selector or a child
    // selector. Such a property should contain a `&` character, which
    // will be replaced by the current selector. For example `{"&:before":
    // {content: '"hi"'}}`. Sub-selectors and regular properties can
    // freely be mixed in a given object. Any property containing a `&` is
    // assumed to be a sub-selector.
    //
    // Finally, a property can specify an @-block to be wrapped around the
    // styles defined inside the object that's the property's value. For
    // example to create a media query you can do `{"@media screen and
    // (min-width: 400px)": {...}}`.

    /// Each range is associated with a value, which must inherit from
    /// this class.
    var RangeValue = function RangeValue () {};

    RangeValue.prototype.eq = function eq (other) { return this == other; };
    /// Create a [range](#rangeset.Range) with this value.
    RangeValue.prototype.range = function range (from, to) {
        if ( to === void 0 ) to = from;
     return new Range(from, to, this); };
    RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
    RangeValue.prototype.point = false;
    RangeValue.prototype.mapMode = MapMode.TrackDel;
    /// A range associates a value with a range of positions.
    var Range = function Range(
    /// The range's start position.
    from, 
    /// Its end position.
    to, 
    /// The value associated with this range.
    value) {
        this.from = from;
        this.to = to;
        this.value = value;
    };
    function cmpRange(a, b) {
        return a.from - b.from || a.value.startSide - b.value.startSide;
    }
    // The maximum amount of ranges to store in a single chunk
    var ChunkSize = 250, 
    // Chunks with points of this size are never skipped during
    // compare, since moving past those points is likely to speed
    // up, rather than slow down, the comparison.
    BigPointSize = 500, 
    // A large (fixnum) value to use for max/min values.
    Far = 1e9;
    var Chunk = function Chunk(from, to, value, 
    // Chunks are marked with the largest point that occurs
    // in them (or -1 for no points), so that scans that are
    // only interested in points (such as the
    // heightmap-related logic) can skip range-only chunks.
    maxPoint) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.maxPoint = maxPoint;
    };

    var prototypeAccessors$8 = { length: { configurable: true } };
    prototypeAccessors$8.length.get = function () { return this.to[this.to.length - 1]; };
    // With side == -1, return the first index where to >= pos. When
    // side == 1, the first index where from > pos.
    Chunk.prototype.findIndex = function findIndex (pos, end, side, startAt) {
            if ( side === void 0 ) side = end * Far;
            if ( startAt === void 0 ) startAt = 0;

        if (pos <= 0)
            { return startAt; }
        var arr = end < 0 ? this.to : this.from;
        for (var lo = startAt, hi = arr.length;;) {
            if (lo == hi)
                { return lo; }
            var mid = (lo + hi) >> 1;
            var diff = arr[mid] - pos || (end < 0 ? this.value[mid].startSide : this.value[mid].endSide) - side;
            if (mid == lo)
                { return diff >= 0 ? lo : hi; }
            if (diff >= 0)
                { hi = mid; }
            else
                { lo = mid + 1; }
        }
    };
    Chunk.prototype.between = function between (offset, from, to, f) {
        for (var i = this.findIndex(from, -1), e = this.findIndex(to, 1, undefined, i); i < e; i++)
            { if (f(this.from[i] + offset, this.to[i] + offset, this.value[i]) === false)
                { return false; } }
    };
    Chunk.prototype.map = function map (offset, changes) {
        var value = [], from = [], to = [], newPos = -1, maxPoint = -1;
        for (var i = 0; i < this.value.length; i++) {
            var val = this.value[i], curFrom = this.from[i] + offset, curTo = this.to[i] + offset, newFrom = (void 0), newTo = (void 0);
            if (curFrom == curTo) {
                var mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
                if (mapped < 0)
                    { continue; }
                newFrom = newTo = mapped;
            }
            else {
                newFrom = changes.mapPos(curFrom, val.startSide);
                newTo = changes.mapPos(curTo, val.endSide);
                if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0)
                    { continue; }
            }
            if ((newTo - newFrom || val.endSide - val.startSide) < 0)
                { continue; }
            if (newPos < 0)
                { newPos = newFrom; }
            if (val.point)
                { maxPoint = Math.max(maxPoint, newTo - newFrom); }
            value.push(val);
            from.push(newFrom - newPos);
            to.push(newTo - newPos);
        }
        return { mapped: value.length ? new Chunk(from, to, value, maxPoint) : null, pos: newPos };
    };

    Object.defineProperties( Chunk.prototype, prototypeAccessors$8 );
    /// A range set stores a collection of [ranges](#rangeset.Range) in a
    /// way that makes them efficient to [map](#rangeset.RangeSet.map) and
    /// [update](#rangeset.RangeSet.update). This is an immutable data
    /// structure.
    var RangeSet = function RangeSet(
    /// @internal
    chunkPos, 
    /// @internal
    chunk, 
    /// @internal
    nextLayer, 
    /// @internal
    maxPoint) {
        if ( nextLayer === void 0 ) nextLayer = RangeSet.empty;

        this.chunkPos = chunkPos;
        this.chunk = chunk;
        this.nextLayer = nextLayer;
        this.maxPoint = maxPoint;
    };

    var prototypeAccessors$1$2 = { length: { configurable: true },size: { configurable: true } };
    /// @internal
    prototypeAccessors$1$2.length.get = function () {
        var last = this.chunk.length - 1;
        return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
    };
    /// @internal
    prototypeAccessors$1$2.size.get = function () {
        if (this == RangeSet.empty)
            { return 0; }
        var size = this.nextLayer.size;
        for (var i = 0, list = this.chunk; i < list.length; i += 1)
            {
                var chunk = list[i];

                size += chunk.value.length;
            }
        return size;
    };
    /// @internal
    RangeSet.prototype.chunkEnd = function chunkEnd (index) {
        return this.chunkPos[index] + this.chunk[index].length;
    };
    /// Update the range set, optionally adding new ranges or filtering
    /// out existing ones.
    RangeSet.prototype.update = function update (updateSpec) {
        var add = updateSpec.add; if ( add === void 0 ) add = [];
            var sort = updateSpec.sort; if ( sort === void 0 ) sort = false;
            var filter = updateSpec.filter;
            var filterFrom = updateSpec.filterFrom; if ( filterFrom === void 0 ) filterFrom = 0;
            var filterTo = updateSpec.filterTo; if ( filterTo === void 0 ) filterTo = this.length;
        if (add.length == 0 && !filter)
            { return this; }
        if (sort)
            { add.slice().sort(cmpRange); }
        if (this == RangeSet.empty)
            { return add.length ? RangeSet.of(add) : this; }
        var cur = new LayerCursor(this, null, -1).goto(0), i = 0, spill = [];
        var builder = new RangeSetBuilder();
        while (cur.value || i < add.length) {
            if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
                var range = add[i++];
                if (!builder.addInner(range.from, range.to, range.value))
                    { spill.push(range); }
            }
            else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length &&
                (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) &&
                (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) &&
                builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
                cur.nextChunk();
            }
            else {
                if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
                    if (!builder.addInner(cur.from, cur.to, cur.value))
                        { spill.push(new Range(cur.from, cur.to, cur.value)); }
                }
                cur.next();
            }
        }
        return builder.finishInner(this.nextLayer == RangeSet.empty && !spill.length ? RangeSet.empty
            : this.nextLayer.update({ add: spill, filter: filter, filterFrom: filterFrom, filterTo: filterTo }));
    };
    /// Map this range set through a set of changes, return the new set.
    RangeSet.prototype.map = function map (changes) {
        if (changes.length == 0 || this == RangeSet.empty)
            { return this; }
        var chunks = [], chunkPos = [], maxPoint = -1;
        for (var i = 0; i < this.chunk.length; i++) {
            var start = this.chunkPos[i], chunk = this.chunk[i];
            var touch = changes.touchesRange(start, start + chunk.length);
            if (touch === false) {
                maxPoint = Math.max(maxPoint, chunk.maxPoint);
                chunks.push(chunk);
                chunkPos.push(changes.mapPos(start));
            }
            else if (touch === true) {
                var ref = chunk.map(start, changes);
                    var mapped = ref.mapped;
                    var pos = ref.pos;
                if (mapped) {
                    maxPoint = Math.max(maxPoint, mapped.maxPoint);
                    chunks.push(mapped);
                    chunkPos.push(pos);
                }
            }
        }
        var next = this.nextLayer.map(changes);
        return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next, maxPoint);
    };
    /// Iterate over the ranges that touch the region `from` to `to`,
    /// calling `f` for each. There is no guarantee that the ranges will
    /// be reported in any order. When the callback returns `false`,
    /// iteration stops.
    RangeSet.prototype.between = function between (from, to, f) {
        if (this == RangeSet.empty)
            { return; }
        for (var i = 0; i < this.chunk.length; i++) {
            var start = this.chunkPos[i], chunk = this.chunk[i];
            if (to >= start && from <= start + chunk.length &&
                chunk.between(start, from - start, to - start, f) === false)
                { return; }
        }
        this.nextLayer.between(from, to, f);
    };
    /// Iterate over the ranges in this set, in order, including all
    /// ranges that end at or after `from`.
    RangeSet.prototype.iter = function iter (from) {
            if ( from === void 0 ) from = 0;

        return HeapCursor.from([this]).goto(from);
    };
    /// Iterate over the given sets, starting from `from`.
    RangeSet.iter = function iter (sets, from) {
            if ( from === void 0 ) from = 0;

        return HeapCursor.from(sets).goto(from);
    };
    /// Iterate over two groups of sets, calling methods on `comparator`
    /// to notify it of possible differences. `textDiff` indicates how
    /// the underlying data changed between these ranges, and is needed
    /// to synchronize the iteration. `from` and `to` are coordinates in
    /// the _new_ space, after these changes.
    RangeSet.compare = function compare$1 (oldSets, newSets, textDiff, comparator) {
        var _a;
        var minPoint = (_a = comparator.minPointSize) !== null && _a !== void 0 ? _a : -1;
        var a = oldSets.filter(function (set) { return set.maxPoint >= BigPointSize ||
            set != RangeSet.empty && newSets.indexOf(set) < 0 && set.maxPoint >= minPoint; });
        var b = newSets.filter(function (set) { return set.maxPoint >= BigPointSize ||
            set != RangeSet.empty && oldSets.indexOf(set) < 0 && set.maxPoint >= minPoint; });
        var sharedChunks = findSharedChunks(a, b);
        var sideA = new SpanCursor(a, sharedChunks, minPoint);
        var sideB = new SpanCursor(b, sharedChunks, minPoint);
        textDiff.iterGaps(function (fromA, fromB, length) { return compare(sideA, fromA, sideB, fromB, length, comparator); });
        if (textDiff.empty && textDiff.length == 0)
            { compare(sideA, 0, sideB, 0, 0, comparator); }
    };
    /// Iterate over a group of range sets at the same time, notifying
    /// the iterator about the ranges covering every given piece of
    /// content.
    RangeSet.spans = function spans (sets, from, to, iterator) {
        var _a;
        var cursor = new SpanCursor(sets, null, (_a = iterator.minPointSize) !== null && _a !== void 0 ? _a : -1).goto(from), pos = from;
        for (;;) {
            var curTo = Math.min(cursor.to, to);
            if (cursor.point)
                { iterator.point(pos, curTo, cursor.point, cursor.pointFrom < from, cursor.to > to); }
            else if (curTo > pos)
                { iterator.span(pos, curTo, cursor.active); }
            if (cursor.to > to)
                { break; }
            pos = cursor.to;
            cursor.next();
        }
    };
    /// Create a range set for the given range or array of ranges. By
    /// default, this expects the ranges to be _sorted_ (by start
    /// position and, if two start at the same position,
    /// `value.startSide`). You can pass `true` as second argument to
    /// cause the method to sort them.
    RangeSet.of = function of (ranges, sort) {
            if ( sort === void 0 ) sort = false;

        var build = new RangeSetBuilder();
        for (var i = 0, list = ranges instanceof Range ? [ranges] : sort ? ranges.slice().sort(cmpRange) : ranges; i < list.length; i += 1)
            {
                var range = list[i];

                build.add(range.from, range.to, range.value);
            }
        return build.finish();
    };

    Object.defineProperties( RangeSet.prototype, prototypeAccessors$1$2 );
    /// The empty set of ranges.
    RangeSet.empty = new RangeSet([], [], null, -1);
    RangeSet.empty.nextLayer = RangeSet.empty;
    /// A range set builder is a data structure that helps build up a
    /// [range set](#rangeset.RangeSet) directly, without first allocating
    /// an array of [`Range`](#rangeset.Range) objects.
    var RangeSetBuilder = function RangeSetBuilder() {
        this.chunks = [];
        this.chunkPos = [];
        this.chunkStart = -1;
        this.last = null;
        this.lastFrom = -Far;
        this.lastTo = -Far;
        this.from = [];
        this.to = [];
        this.value = [];
        this.maxPoint = -1;
        this.setMaxPoint = -1;
        this.nextLayer = null;
    };
    RangeSetBuilder.prototype.finishChunk = function finishChunk (newArrays) {
        this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
        this.chunkPos.push(this.chunkStart);
        this.chunkStart = -1;
        this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
        this.maxPoint = -1;
        if (newArrays) {
            this.from = [];
            this.to = [];
            this.value = [];
        }
    };
    /// Add a range. Ranges should be added in sorted (by `from` and
    /// `value.startSide`) order.
    RangeSetBuilder.prototype.add = function add (from, to, value) {
        if (!this.addInner(from, to, value))
            { (this.nextLayer || (this.nextLayer = new RangeSetBuilder)).add(from, to, value); }
    };
    /// @internal
    RangeSetBuilder.prototype.addInner = function addInner (from, to, value) {
        var diff = from - this.lastTo || value.startSide - this.last.endSide;
        if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0)
            { throw new Error("Ranges must be added sorted by `from` position and `startSide`"); }
        if (diff < 0)
            { return false; }
        if (this.from.length == ChunkSize)
            { this.finishChunk(true); }
        if (this.chunkStart < 0)
            { this.chunkStart = from; }
        this.from.push(from - this.chunkStart);
        this.to.push(to - this.chunkStart);
        this.last = value;
        this.lastFrom = from;
        this.lastTo = to;
        this.value.push(value);
        if (value.point)
            { this.maxPoint = Math.max(this.maxPoint, to - from); }
        return true;
    };
    /// @internal
    RangeSetBuilder.prototype.addChunk = function addChunk (from, chunk) {
        if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0)
            { return false; }
        if (this.from.length)
            { this.finishChunk(true); }
        this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
        this.chunks.push(chunk);
        this.chunkPos.push(from);
        var last = chunk.value.length - 1;
        this.last = chunk.value[last];
        this.lastFrom = chunk.from[last] + from;
        this.lastTo = chunk.to[last] + from;
        return true;
    };
    /// Finish the range set. Returns the new set. The builder can't be
    /// used anymore after this has been called.
    RangeSetBuilder.prototype.finish = function finish () { return this.finishInner(RangeSet.empty); };
    /// @internal
    RangeSetBuilder.prototype.finishInner = function finishInner (next) {
        if (this.from.length)
            { this.finishChunk(false); }
        if (this.chunks.length == 0)
            { return next; }
        var result = new RangeSet(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
        this.from = null; // Make sure further `add` calls produce errors
        return result;
    };
    function findSharedChunks(a, b) {
        var inA = new Map();
        for (var i$2 = 0, list = a; i$2 < list.length; i$2 += 1)
            {
            var set = list[i$2];

            for (var i = 0; i < set.chunk.length; i++)
                { if (set.chunk[i].maxPoint < BigPointSize)
                    { inA.set(set.chunk[i], set.chunkPos[i]);
        } } }
        var shared = new Set();
        for (var i$3 = 0, list$1 = b; i$3 < list$1.length; i$3 += 1)
            {
            var set$1 = list$1[i$3];

            for (var i$1 = 0; i$1 < set$1.chunk.length; i$1++)
                { if (inA.get(set$1.chunk[i$1]) == set$1.chunkPos[i$1])
                    { shared.add(set$1.chunk[i$1]);
        } } }
        return shared;
    }
    var LayerCursor = function LayerCursor(layer, skip, minPoint) {
        this.layer = layer;
        this.skip = skip;
        this.minPoint = minPoint;
    };

    var prototypeAccessors$2$2 = { startSide: { configurable: true },endSide: { configurable: true } };
    prototypeAccessors$2$2.startSide.get = function () { return this.value ? this.value.startSide : 0; };
    prototypeAccessors$2$2.endSide.get = function () { return this.value ? this.value.endSide : 0; };
    LayerCursor.prototype.goto = function goto (pos, side) {
            if ( side === void 0 ) side = -Far;

        this.chunkIndex = this.rangeIndex = 0;
        this.gotoInner(pos, side, false);
        return this;
    };
    LayerCursor.prototype.gotoInner = function gotoInner (pos, side, forward) {
        while (this.chunkIndex < this.layer.chunk.length) {
            var next = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(next) ||
                this.layer.chunkEnd(this.chunkIndex) < pos ||
                next.maxPoint < this.minPoint))
                { break; }
            this.chunkIndex++;
            forward = false;
        }
        var rangeIndex = this.chunkIndex == this.layer.chunk.length ? 0
            : this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], -1, side);
        if (!forward || this.rangeIndex < rangeIndex)
            { this.rangeIndex = rangeIndex; }
        this.next();
    };
    LayerCursor.prototype.forward = function forward (pos, side) {
        if ((this.to - pos || this.endSide - side) < 0)
            { this.gotoInner(pos, side, true); }
    };
    LayerCursor.prototype.next = function next () {
        for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = Far;
                this.value = null;
                break;
            }
            else {
                var chunkPos = this.layer.chunkPos[this.chunkIndex], chunk = this.layer.chunk[this.chunkIndex];
                var from = chunkPos + chunk.from[this.rangeIndex];
                this.from = from;
                this.to = chunkPos + chunk.to[this.rangeIndex];
                this.value = chunk.value[this.rangeIndex];
                if (++this.rangeIndex == chunk.value.length) {
                    this.chunkIndex++;
                    if (this.skip) {
                        while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]))
                            { this.chunkIndex++; }
                    }
                    this.rangeIndex = 0;
                }
                if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
                    { break; }
            }
        }
    };
    LayerCursor.prototype.nextChunk = function nextChunk () {
        this.chunkIndex++;
        this.rangeIndex = 0;
        this.next();
    };
    LayerCursor.prototype.compare = function compare (other) {
        return this.from - other.from || this.startSide - other.startSide || this.to - other.to || this.endSide - other.endSide;
    };

    Object.defineProperties( LayerCursor.prototype, prototypeAccessors$2$2 );
    var HeapCursor = function HeapCursor(heap) {
        this.heap = heap;
    };

    var prototypeAccessors$3$2 = { startSide: { configurable: true } };
    HeapCursor.from = function from (sets, skip, minPoint) {
            if ( skip === void 0 ) skip = null;
            if ( minPoint === void 0 ) minPoint = -1;

        var heap = [];
        for (var i = 0, list = sets; i < list.length; i += 1)
            {
                var set = list[i];

                for (var cur = set; cur != RangeSet.empty; cur = cur.nextLayer) {
                if (cur.maxPoint >= minPoint)
                    { heap.push(new LayerCursor(cur, skip, minPoint)); }
            }
            }
        return heap.length == 1 ? heap[0] : new HeapCursor(heap);
    };
    prototypeAccessors$3$2.startSide.get = function () { return this.value ? this.value.startSide : 0; };
    HeapCursor.prototype.goto = function goto (pos, side) {
            if ( side === void 0 ) side = -Far;

        for (var i$1 = 0, list = this.heap; i$1 < list.length; i$1 += 1)
            {
                var cur = list[i$1];

                cur.goto(pos, side);
            }
        for (var i = this.heap.length >> 1; i >= 0; i--)
            { heapBubble(this.heap, i); }
        this.next();
        return this;
    };
    HeapCursor.prototype.forward = function forward (pos, side) {
        for (var i$1 = 0, list = this.heap; i$1 < list.length; i$1 += 1)
            {
                var cur = list[i$1];

                cur.forward(pos, side);
            }
        for (var i = this.heap.length >> 1; i >= 0; i--)
            { heapBubble(this.heap, i); }
        if ((this.to - pos || this.value.endSide - side) < 0)
            { this.next(); }
    };
    HeapCursor.prototype.next = function next () {
        if (this.heap.length == 0) {
            this.from = this.to = Far;
            this.value = null;
        }
        else {
            var top = this.heap[0];
            this.from = top.from;
            this.to = top.to;
            this.value = top.value;
            if (top.value)
                { top.next(); }
            heapBubble(this.heap, 0);
        }
    };

    Object.defineProperties( HeapCursor.prototype, prototypeAccessors$3$2 );
    function heapBubble(heap, index) {
        for (var cur = heap[index];;) {
            var childIndex = (index << 1) + 1;
            if (childIndex >= heap.length)
                { break; }
            var child = heap[childIndex];
            if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
                child = heap[childIndex + 1];
                childIndex++;
            }
            if (cur.compare(child) < 0)
                { break; }
            heap[childIndex] = cur;
            heap[index] = child;
            index = childIndex;
        }
    }
    var SpanCursor = function SpanCursor(sets, skip, minPoint) {
        this.minPoint = minPoint;
        this.active = [];
        this.activeTo = [];
        this.minActive = -1;
        // A currently active point range, if any
        this.point = null;
        this.pointFrom = 0;
        this.to = -Far;
        this.endSide = 0;
        this.cursor = HeapCursor.from(sets, skip, minPoint);
    };
    SpanCursor.prototype.goto = function goto (pos, side) {
            if ( side === void 0 ) side = -Far;

        this.cursor.goto(pos, side);
        this.active.length = this.activeTo.length = 0;
        this.minActive = -1;
        this.to = pos;
        this.endSide = side;
        this.next();
        return this;
    };
    SpanCursor.prototype.forward = function forward (pos, side) {
        while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0)
            { this.removeActive(this.minActive); }
        this.cursor.forward(pos, side);
    };
    SpanCursor.prototype.removeActive = function removeActive (index) {
        remove(this.active, index);
        remove(this.activeTo, index);
        this.minActive = findMinIndex(this.active, this.activeTo);
    };
    // After calling this, if `this.point` != null, the next range is a
    // point. Otherwise, it's a regular range, covered by `this.active`.
    SpanCursor.prototype.next = function next () {
        var from = this.to;
        this.point = null;
        for (;;) {
            var a = this.minActive;
            if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[a] > from) {
                    this.to = this.activeTo[a];
                    this.endSide = this.active[a].endSide;
                    break;
                }
                this.removeActive(a);
            }
            else if (!this.cursor.value) {
                this.to = this.endSide = Far;
                break;
            }
            else if (this.cursor.from > from) {
                this.to = this.cursor.from;
                this.endSide = this.cursor.startSide;
                break;
            }
            else {
                var nextVal = this.cursor.value;
                if (!nextVal.point) { // Opening a range
                    this.active.push(nextVal);
                    this.activeTo.push(this.cursor.to);
                    this.minActive = findMinIndex(this.active, this.activeTo);
                    this.cursor.next();
                }
                else { // New point
                    this.point = nextVal;
                    this.pointFrom = this.cursor.from;
                    this.to = this.cursor.to;
                    this.endSide = nextVal.endSide;
                    this.cursor.next();
                    if (this.to > from)
                        { this.forward(this.to, this.endSide); }
                    break;
                }
            }
        }
    };
    function compare(a, startA, b, startB, length, comparator) {
        a.goto(startA);
        b.goto(startB);
        var endB = startB + length;
        var pos = startB, dPos = startB - startA;
        for (;;) {
            var diff = (a.to + dPos) - b.to || a.endSide - b.endSide;
            var end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
            if (a.point || b.point) {
                if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point))))
                    { comparator.comparePoint(pos, clipEnd, a.point, b.point); }
            }
            else {
                if (clipEnd > pos && !sameSet(a.active, b.active))
                    { comparator.compareRange(pos, clipEnd, a.active, b.active); }
            }
            if (end > endB)
                { break; }
            pos = end;
            if (diff <= 0)
                { a.next(); }
            if (diff >= 0)
                { b.next(); }
        }
    }
    function sameSet(a, b) {
        if (a.length != b.length)
            { return false; }
        outer: for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++)
                { if (a[i] == b[i] || a[i].eq(b[j]))
                    { continue outer; } }
            return false;
        }
        return true;
    }
    function remove(array, index) {
        var last = array.pop();
        if (index != array.length)
            { array[index] = last; }
    }
    function findMinIndex(value, array) {
        var found = -1, foundPos = Far;
        for (var i = 0; i < array.length; i++)
            { if ((array[i] - foundPos || value[i].endSide - value[found].endSide) < 0) {
                found = i;
                foundPos = array[i];
            } }
        return found;
    }

    var _m7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Range: Range,
        RangeSet: RangeSet,
        RangeSetBuilder: RangeSetBuilder,
        RangeValue: RangeValue
    });

    var base = {
      8: "Backspace",
      9: "Tab",
      10: "Enter",
      12: "NumLock",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      44: "PrintScreen",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Meta",
      92: "Meta",
      106: "*",
      107: "+",
      108: ",",
      109: "-",
      110: ".",
      111: "/",
      144: "NumLock",
      145: "ScrollLock",
      160: "Shift",
      161: "Shift",
      162: "Control",
      163: "Control",
      164: "Alt",
      165: "Alt",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      229: "q"
    };

    var shift = {
      48: ")",
      49: "!",
      50: "@",
      51: "#",
      52: "$",
      53: "%",
      54: "^",
      55: "&",
      56: "*",
      57: "(",
      59: ":",
      61: "+",
      173: "_",
      186: ":",
      187: "+",
      188: "<",
      189: "_",
      190: ">",
      191: "?",
      192: "~",
      219: "{",
      220: "|",
      221: "}",
      222: "\"",
      229: "Q"
    };

    var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
    var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
    var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
    var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
    var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
    var brokenModifierNames = chrome && (mac || +chrome[1] < 57) || gecko && mac;

    // Fill in the digit keys
    for (var i$1 = 0; i$1 < 10; i$1++) { base[48 + i$1] = base[96 + i$1] = String(i$1); }

    // The function keys
    for (var i$1 = 1; i$1 <= 24; i$1++) { base[i$1 + 111] = "F" + i$1; }

    // And the alphabetic keys
    for (var i$1 = 65; i$1 <= 90; i$1++) {
      base[i$1] = String.fromCharCode(i$1 + 32);
      shift[i$1] = String.fromCharCode(i$1);
    }

    // For each code that doesn't have a shift-equivalent, copy the base name
    for (var code in base) { if (!shift.hasOwnProperty(code)) { shift[code] = base[code]; } }

    function keyName(event) {
      // Don't trust event.key in Chrome when there are modifiers until
      // they fix https://bugs.chromium.org/p/chromium/issues/detail?id=633838
      var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) ||
        (safari || ie) && event.shiftKey && event.key && event.key.length == 1;
      var name = (!ignoreKey && event.key) ||
        (event.shiftKey ? shift : base)[event.keyCode] ||
        event.key || "Unidentified";
      // Edge sometimes produces wrong names (Issue #3)
      if (name == "Esc") { name = "Escape"; }
      if (name == "Del") { name = "Delete"; }
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
      if (name == "Left") { name = "ArrowLeft"; }
      if (name == "Up") { name = "ArrowUp"; }
      if (name == "Right") { name = "ArrowRight"; }
      if (name == "Down") { name = "ArrowDown"; }
      return name
    }

    var ref = typeof navigator != "undefined"
        ? [navigator, document]
        : [{ userAgent: "", vendor: "", platform: "" }, { documentElement: { style: {} } }];
    var nav = ref[0];
    var doc = ref[1];
    var ie_edge = /Edge\/(\d+)/.exec(nav.userAgent);
    var ie_upto10 = /MSIE \d/.test(nav.userAgent);
    var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
    var ie$1 = !!(ie_upto10 || ie_11up || ie_edge);
    var gecko$1 = !ie$1 && /gecko\/(\d+)/i.test(nav.userAgent);
    var chrome$1 = !ie$1 && /Chrome\/(\d+)/.exec(nav.userAgent);
    var webkit = "webkitFontSmoothing" in doc.documentElement.style;
    var browser = {
        mac: /Mac/.test(nav.platform),
        ie: ie$1,
        ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
        gecko: gecko$1,
        gecko_version: gecko$1 ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
        chrome: !!chrome$1,
        chrome_version: chrome$1 ? +chrome$1[1] : 0,
        ios: !ie$1 && /AppleWebKit/.test(nav.userAgent) && /Mobile\/\w+/.test(nav.userAgent),
        android: /Android\b/.test(nav.userAgent),
        webkit: webkit,
        safari: /Apple Computer/.test(nav.vendor),
        webkit_version: webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
        tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
    };

    function getSelection(root) {
        return (root.getSelection ? root.getSelection() : document.getSelection());
    }
    // Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
    // (isCollapsed inappropriately returns true in shadow dom)
    function selectionCollapsed(domSel) {
        var collapsed = domSel.isCollapsed;
        if (collapsed && browser.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed)
            { collapsed = false; }
        return collapsed;
    }
    function hasSelection(dom, selection) {
        if (!selection.anchorNode)
            { return false; }
        try {
            // Firefox will raise 'permission denied' errors when accessing
            // properties of `sel.anchorNode` when it's in a generated CSS
            // element.
            return dom.contains(selection.anchorNode.nodeType == 3 ? selection.anchorNode.parentNode : selection.anchorNode);
        }
        catch (_) {
            return false;
        }
    }
    function clientRectsFor(dom) {
        if (dom.nodeType == 3) {
            var range = document.createRange();
            range.setEnd(dom, dom.nodeValue.length);
            range.setStart(dom, 0);
            return range.getClientRects();
        }
        else if (dom.nodeType == 1) {
            return dom.getClientRects();
        }
        else {
            return [];
        }
    }
    // Scans forward and backward through DOM positions equivalent to the
    // given one to see if the two are in the same place (i.e. after a
    // text node vs at the end of that text node)
    function isEquivalentPosition(node, off, targetNode, targetOff) {
        return targetNode ? (scanFor(node, off, targetNode, targetOff, -1) ||
            scanFor(node, off, targetNode, targetOff, 1)) : false;
    }
    function domIndex(node) {
        for (var index = 0;; index++) {
            node = node.previousSibling;
            if (!node)
                { return index; }
        }
    }
    function scanFor(node, off, targetNode, targetOff, dir) {
        for (;;) {
            if (node == targetNode && off == targetOff)
                { return true; }
            if (off == (dir < 0 ? 0 : maxOffset(node))) {
                if (node.nodeName == "DIV")
                    { return false; }
                var parent = node.parentNode;
                if (!parent || parent.nodeType != 1)
                    { return false; }
                off = domIndex(node) + (dir < 0 ? 0 : 1);
                node = parent;
            }
            else if (node.nodeType == 1) {
                node = node.childNodes[off + (dir < 0 ? -1 : 0)];
                off = dir < 0 ? maxOffset(node) : 0;
            }
            else {
                return false;
            }
        }
    }
    function maxOffset(node) {
        return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
    }
    function flattenRect(rect, left) {
        var x = left ? rect.left : rect.right;
        return { left: x, right: x, top: rect.top, bottom: rect.bottom };
    }
    function windowRect(win) {
        return { left: 0, right: win.innerWidth,
            top: 0, bottom: win.innerHeight };
    }
    var ScrollSpace = 5;
    function scrollRectIntoView(dom, rect) {
        var doc = dom.ownerDocument, win = doc.defaultView;
        for (var cur = dom.parentNode; cur;) {
            if (cur.nodeType == 1) { // Element
                var bounding = (void 0), top = cur == document.body;
                if (top) {
                    bounding = windowRect(win);
                }
                else {
                    if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
                        cur = cur.parentNode;
                        continue;
                    }
                    var rect$1 = cur.getBoundingClientRect();
                    // Make sure scrollbar width isn't included in the rectangle
                    bounding = { left: rect$1.left, right: rect$1.left + cur.clientWidth,
                        top: rect$1.top, bottom: rect$1.top + cur.clientHeight };
                }
                var moveX = 0, moveY = 0;
                if (rect.top < bounding.top)
                    { moveY = -(bounding.top - rect.top + ScrollSpace); }
                else if (rect.bottom > bounding.bottom)
                    { moveY = rect.bottom - bounding.bottom + ScrollSpace; }
                if (rect.left < bounding.left)
                    { moveX = -(bounding.left - rect.left + ScrollSpace); }
                else if (rect.right > bounding.right)
                    { moveX = rect.right - bounding.right + ScrollSpace; }
                if (moveX || moveY) {
                    if (top) {
                        win.scrollBy(moveX, moveY);
                    }
                    else {
                        if (moveY) {
                            var start = cur.scrollTop;
                            cur.scrollTop += moveY;
                            moveY = cur.scrollTop - start;
                        }
                        if (moveX) {
                            var start$1 = cur.scrollLeft;
                            cur.scrollLeft += moveX;
                            moveX = cur.scrollLeft - start$1;
                        }
                        rect = { left: rect.left - moveX, top: rect.top - moveY,
                            right: rect.right - moveX, bottom: rect.bottom - moveY };
                    }
                }
                if (top)
                    { break; }
                cur = cur.parentNode;
            }
            else if (cur.nodeType == 11) { // A shadow root
                cur = cur.host;
            }
            else {
                break;
            }
        }
    }
    var DOMSelection = function DOMSelection() {
        this.anchorNode = null;
        this.anchorOffset = 0;
        this.focusNode = null;
        this.focusOffset = 0;
    };
    DOMSelection.prototype.eq = function eq (domSel) {
        return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset &&
            this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
    };
    DOMSelection.prototype.set = function set (domSel) {
        this.anchorNode = domSel.anchorNode;
        this.anchorOffset = domSel.anchorOffset;
        this.focusNode = domSel.focusNode;
        this.focusOffset = domSel.focusOffset;
    };
    var preventScrollSupported = null;
    // Feature-detects support for .focus({preventScroll: true}), and uses
    // a fallback kludge when not supported.
    function focusPreventScroll(dom) {
        if (dom.setActive)
            { return dom.setActive(); } // in IE
        if (preventScrollSupported)
            { return dom.focus(preventScrollSupported); }
        var stack = [];
        for (var cur = dom; cur; cur = cur.parentNode) {
            stack.push(cur, cur.scrollTop, cur.scrollLeft);
            if (cur == cur.ownerDocument)
                { break; }
        }
        dom.focus(preventScrollSupported == null ? {
            get preventScroll() {
                preventScrollSupported = { preventScroll: true };
                return true;
            }
        } : undefined);
        if (!preventScrollSupported) {
            preventScrollSupported = false;
            for (var i = 0; i < stack.length;) {
                var elt = stack[i++], top = stack[i++], left = stack[i++];
                if (elt.scrollTop != top)
                    { elt.scrollTop = top; }
                if (elt.scrollLeft != left)
                    { elt.scrollLeft = left; }
            }
        }
    }

    var DOMPos = function DOMPos(node, offset, precise) {
        if ( precise === void 0 ) precise = true;

        this.node = node;
        this.offset = offset;
        this.precise = precise;
    };
    DOMPos.before = function before (dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom), precise); };
    DOMPos.after = function after (dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise); };
    var none$1 = [];
    var ContentView = function ContentView() {
        this.parent = null;
        this.dom = null;
        this.dirty = 2 /* Node */;
    };

    var prototypeAccessors$9 = { editorView: { configurable: true },overrideDOMText: { configurable: true },posAtStart: { configurable: true },posAtEnd: { configurable: true },rootView: { configurable: true } };
    prototypeAccessors$9.editorView.get = function () {
        if (!this.parent)
            { throw new Error("Accessing view in orphan content view"); }
        return this.parent.editorView;
    };
    prototypeAccessors$9.overrideDOMText.get = function () { return null; };
    prototypeAccessors$9.posAtStart.get = function () {
        return this.parent ? this.parent.posBefore(this) : 0;
    };
    prototypeAccessors$9.posAtEnd.get = function () {
        return this.posAtStart + this.length;
    };
    ContentView.prototype.posBefore = function posBefore (view) {
        var pos = this.posAtStart;
        for (var i = 0, list = this.children; i < list.length; i += 1) {
            var child = list[i];

                if (child == view)
                { return pos; }
            pos += child.length + child.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    };
    ContentView.prototype.posAfter = function posAfter (view) {
        return this.posBefore(view) + view.length;
    };
    // Will return a rectangle directly before (when side < 0), after
    // (side > 0) or directly on (when the browser supports it) the
    // given position.
    ContentView.prototype.coordsAt = function coordsAt (_pos, _side) { return null; };
    ContentView.prototype.sync = function sync () {
        if (this.dirty & 2 /* Node */) {
            var parent = this.dom, pos = null;
            for (var i = 0, list = this.children; i < list.length; i += 1) {
                var child = list[i];

                    if (child.dirty) {
                    var next = pos ? pos.nextSibling : parent.firstChild;
                    if (next && !child.dom && !ContentView.get(next))
                        { child.reuseDOM(next); }
                    child.sync();
                    child.dirty = 0 /* Not */;
                }
                syncNodeInto(parent, pos, child.dom);
                pos = child.dom;
            }
            var next$1 = pos ? pos.nextSibling : parent.firstChild;
            while (next$1)
                { next$1 = rm(next$1); }
        }
        else if (this.dirty & 1 /* Child */) {
            for (var i$1 = 0, list$1 = this.children; i$1 < list$1.length; i$1 += 1)
                {
                    var child$1 = list$1[i$1];

                    if (child$1.dirty) {
                    child$1.sync();
                    child$1.dirty = 0 /* Not */;
                }
                }
        }
    };
    ContentView.prototype.reuseDOM = function reuseDOM (_dom) { return false; };
    ContentView.prototype.localPosFromDOM = function localPosFromDOM (node, offset) {
        var after;
        if (node == this.dom) {
            after = this.dom.childNodes[offset];
        }
        else {
            var bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
            for (;;) {
                var parent = node.parentNode;
                if (parent == this.dom)
                    { break; }
                if (bias == 0 && parent.firstChild != parent.lastChild) {
                    if (node == parent.firstChild)
                        { bias = -1; }
                    else
                        { bias = 1; }
                }
                node = parent;
            }
            if (bias < 0)
                { after = node; }
            else
                { after = node.nextSibling; }
        }
        if (after == this.dom.firstChild)
            { return 0; }
        while (after && !ContentView.get(after))
            { after = after.nextSibling; }
        if (!after)
            { return this.length; }
        for (var i = 0, pos = 0;; i++) {
            var child = this.children[i];
            if (child.dom == after)
                { return pos; }
            pos += child.length + child.breakAfter;
        }
    };
    ContentView.prototype.domBoundsAround = function domBoundsAround (from, to, offset) {
            if ( offset === void 0 ) offset = 0;

        var fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
        for (var i = 0, pos = offset; i < this.children.length; i++) {
            var child = this.children[i], end = pos + child.length;
            if (pos < from && end > to)
                { return child.domBoundsAround(from, to, pos); }
            if (end >= from && fromI == -1) {
                fromI = i;
                fromStart = pos;
            }
            if (end >= to && toI == -1) {
                toI = i;
                toEnd = end;
                break;
            }
            pos = end + child.breakAfter;
        }
        return { from: fromStart, to: toEnd, startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: toI < this.children.length - 1 ? this.children[toI + 1].dom : null };
    };
    // FIXME track precise dirty ranges, to avoid full DOM sync on every touched node?
    ContentView.prototype.markDirty = function markDirty (andParent) {
            if ( andParent === void 0 ) andParent = false;

        if (this.dirty & 2 /* Node */)
            { return; }
        this.dirty |= 2 /* Node */;
        this.markParentsDirty(andParent);
    };
    ContentView.prototype.markParentsDirty = function markParentsDirty (childList) {
        for (var parent = this.parent; parent; parent = parent.parent) {
            if (childList)
                { parent.dirty |= 2 /* Node */; }
            if (parent.dirty & 1 /* Child */)
                { return; }
            parent.dirty |= 1 /* Child */;
            childList = false;
        }
    };
    ContentView.prototype.setParent = function setParent (parent) {
        if (this.parent != parent) {
            this.parent = parent;
            if (this.dirty)
                { this.markParentsDirty(true); }
        }
    };
    ContentView.prototype.setDOM = function setDOM (dom) {
        this.dom = dom;
        dom.cmView = this;
    };
    prototypeAccessors$9.rootView.get = function () {
        for (var v = this;;) {
            var parent = v.parent;
            if (!parent)
                { return v; }
            v = parent;
        }
    };
    ContentView.prototype.replaceChildren = function replaceChildren (from, to, children) {
            var ref;

            if ( children === void 0 ) children = none$1;
        this.markDirty();
        for (var i = from; i < to; i++)
            { this.children[i].parent = null; }
        (ref = this.children).splice.apply(ref, [ from, to - from ].concat( children ));
        for (var i$1 = 0; i$1 < children.length; i$1++)
            { children[i$1].setParent(this); }
    };
    ContentView.prototype.ignoreMutation = function ignoreMutation (_rec) { return false; };
    ContentView.prototype.ignoreEvent = function ignoreEvent (_event) { return false; };
    ContentView.prototype.childCursor = function childCursor (pos) {
            if ( pos === void 0 ) pos = this.length;

        return new ChildCursor(this.children, pos, this.children.length);
    };
    ContentView.prototype.childPos = function childPos (pos, bias) {
            if ( bias === void 0 ) bias = 1;

        return this.childCursor().findPos(pos, bias);
    };
    ContentView.prototype.toString = function toString () {
        var name = this.constructor.name.replace("View", "");
        return name + (this.children.length ? "(" + this.children.join() + ")" :
            this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") +
            (this.breakAfter ? "#" : "");
    };
    ContentView.get = function get (node) { return node.cmView; };

    Object.defineProperties( ContentView.prototype, prototypeAccessors$9 );
    ContentView.prototype.breakAfter = 0;
    // Remove a DOM node and return its next sibling.
    function rm(dom) {
        var next = dom.nextSibling;
        dom.parentNode.removeChild(dom);
        return next;
    }
    function syncNodeInto(parent, after, dom) {
        var next = after ? after.nextSibling : parent.firstChild;
        if (dom.parentNode == parent)
            { while (next != dom)
                { next = rm(next); } }
        else
            { parent.insertBefore(dom, next); }
    }
    var ChildCursor = function ChildCursor(children, pos, i) {
        this.children = children;
        this.pos = pos;
        this.i = i;
        this.off = 0;
    };
    ChildCursor.prototype.findPos = function findPos (pos, bias) {
            if ( bias === void 0 ) bias = 1;

        for (;;) {
            if (pos > this.pos || pos == this.pos &&
                (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
                this.off = pos - this.pos;
                return this;
            }
            var next = this.children[--this.i];
            this.pos -= next.length + next.breakAfter;
        }
    };

    function combineAttrs(source, target) {
        for (var name in source) {
            if (name == "class" && target.class)
                { target.class += " " + source.class; }
            else if (name == "style" && target.style)
                { target.style += ";" + source.style; }
            else
                { target[name] = source[name]; }
        }
        return target;
    }
    function attrsEq(a, b) {
        if (a == b)
            { return true; }
        if (!a || !b)
            { return false; }
        var keysA = Object.keys(a), keysB = Object.keys(b);
        if (keysA.length != keysB.length)
            { return false; }
        for (var i = 0, list = keysA; i < list.length; i += 1) {
            var key = list[i];

            if (keysB.indexOf(key) == -1 || a[key] !== b[key])
                { return false; }
        }
        return true;
    }
    function updateAttrs(dom, prev, attrs) {
        if (prev)
            { for (var name in prev)
                { if (!(attrs && name in attrs))
                    { dom.removeAttribute(name); } } }
        if (attrs)
            { for (var name$1 in attrs)
                { if (!(prev && prev[name$1] == attrs[name$1]))
                    { dom.setAttribute(name$1, attrs[name$1]); } } }
    }

    var none$1$1 = [];
    var InlineView = /*@__PURE__*/(function (ContentView) {
        function InlineView () {
            ContentView.apply(this, arguments);
        }

        if ( ContentView ) InlineView.__proto__ = ContentView;
        InlineView.prototype = Object.create( ContentView && ContentView.prototype );
        InlineView.prototype.constructor = InlineView;

        var prototypeAccessors$1 = { children: { configurable: true } };

        InlineView.prototype.match = function match (_other) { return false; };
        prototypeAccessors$1.children.get = function () { return none$1$1; };
        InlineView.prototype.getSide = function getSide () { return 0; };

        Object.defineProperties( InlineView.prototype, prototypeAccessors$1 );

        return InlineView;
    }(ContentView));
    var MaxJoinLen = 256;
    var TextView = /*@__PURE__*/(function (InlineView) {
        function TextView(text, tagName, clss, attrs) {
            InlineView.call(this);
            this.text = text;
            this.tagName = tagName;
            this.attrs = attrs;
            this.textDOM = null;
            this.class = clss;
        }

        if ( InlineView ) TextView.__proto__ = InlineView;
        TextView.prototype = Object.create( InlineView && InlineView.prototype );
        TextView.prototype.constructor = TextView;

        var prototypeAccessors$2 = { length: { configurable: true } };
        prototypeAccessors$2.length.get = function () { return this.text.length; };
        TextView.prototype.createDOM = function createDOM (textDOM) {
            var tagName = this.tagName || (this.attrs || this.class ? "span" : null);
            this.textDOM = textDOM || document.createTextNode(this.text);
            if (tagName) {
                var dom = document.createElement(tagName);
                dom.appendChild(this.textDOM);
                if (this.class)
                    { dom.className = this.class; }
                if (this.attrs)
                    { for (var name in this.attrs)
                        { dom.setAttribute(name, this.attrs[name]); } }
                this.setDOM(dom);
            }
            else {
                this.setDOM(this.textDOM);
            }
        };
        TextView.prototype.sync = function sync () {
            if (!this.dom)
                { this.createDOM(); }
            if (this.textDOM.nodeValue != this.text) {
                this.textDOM.nodeValue = this.text;
                var dom = this.dom;
                if (this.textDOM != dom && (this.dom.firstChild != this.textDOM || dom.lastChild != this.textDOM)) {
                    while (dom.firstChild)
                        { dom.removeChild(dom.firstChild); }
                    dom.appendChild(this.textDOM);
                }
            }
        };
        TextView.prototype.reuseDOM = function reuseDOM (dom) {
            if (dom.nodeType != 3)
                { return false; }
            this.createDOM(dom);
            return true;
        };
        TextView.prototype.merge = function merge (from, to, source) {
            if ( to === void 0 ) to = this.length;
            if ( source === void 0 ) source = null;

            if (source &&
                (!(source instanceof TextView) ||
                    source.tagName != this.tagName || source.class != this.class ||
                    !attrsEq(source.attrs, this.attrs) || this.length - (to - from) + source.length > MaxJoinLen))
                { return false; }
            this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
            this.markDirty();
            return true;
        };
        TextView.prototype.slice = function slice (from, to) {
            if ( to === void 0 ) to = this.length;

            return new TextView(this.text.slice(from, to), this.tagName, this.class, this.attrs);
        };
        TextView.prototype.localPosFromDOM = function localPosFromDOM (node, offset) {
            return node == this.textDOM ? offset : offset ? this.text.length : 0;
        };
        TextView.prototype.domAtPos = function domAtPos (pos) { return new DOMPos(this.textDOM, pos); };
        TextView.prototype.domBoundsAround = function domBoundsAround (_from, _to, offset) {
            return { from: offset, to: offset + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
        };
        TextView.prototype.coordsAt = function coordsAt (pos, side) {
            return textCoords(this.textDOM, pos, side, this.length);
        };

        Object.defineProperties( TextView.prototype, prototypeAccessors$2 );

        return TextView;
    }(InlineView));
    function textCoords(text, pos, side, length) {
        var from = pos, to = pos, flatten = 0;
        if (pos == 0 && side < 0 || pos == length && side >= 0) {
            if (!(browser.chrome || browser.gecko)) { // These browsers reliably return valid rectangles for empty ranges
                if (pos) {
                    from--;
                    flatten = 1;
                } // FIXME this is wrong in RTL text
                else {
                    to++;
                    flatten = -1;
                }
            }
        }
        else {
            if (side < 0)
                { from--; }
            else
                { to++; }
        }
        var range = document.createRange();
        range.setEnd(text, to);
        range.setStart(text, from);
        var rect = range.getBoundingClientRect();
        return flatten ? flattenRect(rect, flatten < 0) : rect;
    }
    // Also used for collapsed ranges that don't have a placeholder widget!
    var WidgetView = /*@__PURE__*/(function (InlineView) {
        function WidgetView(widget, length, side, open) {
            InlineView.call(this);
            this.widget = widget;
            this.length = length;
            this.side = side;
            this.open = open;
        }

        if ( InlineView ) WidgetView.__proto__ = InlineView;
        WidgetView.prototype = Object.create( InlineView && InlineView.prototype );
        WidgetView.prototype.constructor = WidgetView;

        var prototypeAccessors$3 = { overrideDOMText: { configurable: true } };
        WidgetView.create = function create (widget, length, side, open) {
            if ( open === void 0 ) open = 0;

            return new (widget.customView || WidgetView)(widget, length, side, open);
        };
        WidgetView.prototype.slice = function slice (from, to) {
        if ( to === void 0 ) to = this.length;
     return WidgetView.create(this.widget, to - from, this.side); };
        WidgetView.prototype.sync = function sync () {
            if (!this.dom || !this.widget.updateDOM(this.dom)) {
                this.setDOM(this.widget.toDOM(this.editorView));
                this.dom.contentEditable = "false";
            }
        };
        WidgetView.prototype.getSide = function getSide () { return this.side; };
        WidgetView.prototype.merge = function merge (from, to, source) {
            if ( to === void 0 ) to = this.length;
            if ( source === void 0 ) source = null;

            if (source) {
                if (!(source instanceof WidgetView) || !source.open ||
                    from > 0 && !(source.open & 1 /* Start */) ||
                    to < this.length && !(source.open & 2 /* End */))
                    { return false; }
                if (!this.widget.compare(source.widget))
                    { throw new Error("Trying to merge incompatible widgets"); }
            }
            this.length = from + (source ? source.length : 0) + (this.length - to);
            return true;
        };
        WidgetView.prototype.match = function match (other) {
            if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
                if (this.widget.constructor == other.widget.constructor) {
                    if (!this.widget.eq(other.widget.value))
                        { this.markDirty(true); }
                    this.widget = other.widget;
                    return true;
                }
            }
            return false;
        };
        WidgetView.prototype.ignoreMutation = function ignoreMutation () { return true; };
        WidgetView.prototype.ignoreEvent = function ignoreEvent (event) { return this.widget.ignoreEvent(event); };
        prototypeAccessors$3.overrideDOMText.get = function () {
            if (this.length == 0)
                { return Text.empty; }
            var top = this;
            while (top.parent)
                { top = top.parent; }
            var view = top.editorView, text = view && view.state.doc, start = this.posAtStart;
            return text ? text.slice(start, start + this.length) : Text.empty;
        };
        WidgetView.prototype.domAtPos = function domAtPos (pos) {
            return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
        };
        WidgetView.prototype.domBoundsAround = function domBoundsAround () { return null; };
        WidgetView.prototype.coordsAt = function coordsAt (pos, _side) {
            var rects = this.dom.getClientRects(), rect = null;
            for (var i = pos > 0 ? rects.length - 1 : 0;; i += (pos > 0 ? -1 : 1)) {
                rect = rects[i];
                if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom)
                    { break; }
            }
            return rect;
        };

        Object.defineProperties( WidgetView.prototype, prototypeAccessors$3 );

        return WidgetView;
    }(InlineView));
    var CompositionView = /*@__PURE__*/(function (WidgetView) {
        function CompositionView () {
            WidgetView.apply(this, arguments);
        }

        if ( WidgetView ) CompositionView.__proto__ = WidgetView;
        CompositionView.prototype = Object.create( WidgetView && WidgetView.prototype );
        CompositionView.prototype.constructor = CompositionView;

        var prototypeAccessors$4 = { overrideDOMText: { configurable: true } };

        CompositionView.prototype.domAtPos = function domAtPos (pos) { return new DOMPos(this.widget.value.text, pos); };
        CompositionView.prototype.sync = function sync () { if (!this.dom)
            { this.setDOM(this.widget.toDOM(this.editorView)); } };
        CompositionView.prototype.localPosFromDOM = function localPosFromDOM (node, offset) {
            return !offset ? 0 : node.nodeType == 3 ? Math.min(offset, this.length) : this.length;
        };
        CompositionView.prototype.ignoreMutation = function ignoreMutation () { return false; };
        prototypeAccessors$4.overrideDOMText.get = function () { return null; };
        CompositionView.prototype.coordsAt = function coordsAt (pos, side) { return textCoords(this.widget.value.text, pos, side, this.length); };

        Object.defineProperties( CompositionView.prototype, prototypeAccessors$4 );

        return CompositionView;
    }(WidgetView));

    /// Widgets added to the content are described by subclasses of this
    /// class. This makes it possible to delay creating of the DOM
    /// structure for a widget until it is needed, and to avoid redrawing
    /// widgets even when the decorations that define them are recreated.
    /// `T` can be a type of value passed to instances of the widget type.
    var WidgetType = function WidgetType(
    /// @internal
    value) {
        this.value = value;
    };

    var prototypeAccessors$5$2 = { estimatedHeight: { configurable: true },customView: { configurable: true } };
    /// Compare this instance to another instance of the same class. By
    /// default, it'll compare the instances' parameters with `===`.
    WidgetType.prototype.eq = function eq (value) { return this.value === value; };
    /// Update a DOM element created by a widget of the same type but
    /// with a different value to reflect this widget. May return true
    /// to indicate that it could update, false to indicate it couldn't
    /// (in which case the widget will be redrawn). The default
    /// implementation just returns false.
    WidgetType.prototype.updateDOM = function updateDOM (_dom) { return false; };
    /// @internal
    WidgetType.prototype.compare = function compare (other) {
        return this == other || this.constructor == other.constructor && this.eq(other.value);
    };
    /// The estimated height this widget will have, to be used when
    /// estimating the height of content that hasn't been drawn. May
    /// return -1 to indicate you don't know. The default implementation
    /// returns -1.
    prototypeAccessors$5$2.estimatedHeight.get = function () { return -1; };
    /// Can be used to configure which kinds of events inside the widget
    /// should be ignored by the editor. The default is to ignore all
    /// events.
    WidgetType.prototype.ignoreEvent = function ignoreEvent (_event) { return true; };
    //// @internal
    prototypeAccessors$5$2.customView.get = function () { return null; };

    Object.defineProperties( WidgetType.prototype, prototypeAccessors$5$2 );
    /// The different types of blocks that can occur in an editor view.
    var BlockType;
    (function (BlockType) {
        /// A line of text.
        BlockType[BlockType["Text"] = 0] = "Text";
        /// A block widget associated with the position after it.
        BlockType[BlockType["WidgetBefore"] = 1] = "WidgetBefore";
        /// A block widget associated with the position before it.
        BlockType[BlockType["WidgetAfter"] = 2] = "WidgetAfter";
        /// A block widget [replacing](#view.Decoration^replace) a range of content.
        BlockType[BlockType["WidgetRange"] = 3] = "WidgetRange";
    })(BlockType || (BlockType = {}));
    /// A decoration provides information on how to draw or style a piece
    /// of content. You'll usually use it wrapped in a
    /// [`Range`](#rangeset.Range), which adds a start and
    /// end position.
    var Decoration = /*@__PURE__*/(function (RangeValue) {
        function Decoration(
        /// @internal
        startSide, 
        /// @internal
        endSide, 
        /// @internal
        widget, 
        /// The config object used to create this decoration.
        spec) {
            RangeValue.call(this);
            this.startSide = startSide;
            this.endSide = endSide;
            this.widget = widget;
            this.spec = spec;
        }

        if ( RangeValue ) Decoration.__proto__ = RangeValue;
        Decoration.prototype = Object.create( RangeValue && RangeValue.prototype );
        Decoration.prototype.constructor = Decoration;

        var prototypeAccessors$6 = { point: { configurable: true },heightRelevant: { configurable: true } };
        /// @internal
        prototypeAccessors$6.point.get = function () { return false; };
        /// @internal
        prototypeAccessors$6.heightRelevant.get = function () { return false; };
        /// Create a mark decoration, which influences the styling of the
        /// text in its range.
        Decoration.mark = function mark (spec) {
            return new MarkDecoration(spec);
        };
        /// Create a widget decoration, which adds an element at the given
        /// position.
        Decoration.widget = function widget (spec) {
            var side = spec.side || 0;
            if (spec.block)
                { side += (200000000 /* BigBlock */ + 1) * (side > 0 ? 1 : -1); }
            return new PointDecoration(spec, side, side, !!spec.block, spec.widget || null, false);
        };
        /// Create a replace decoration which replaces the given range with
        /// a widget, or simply hides it.
        Decoration.replace = function replace (spec) {
            var block = !!spec.block;
            var ref = getInclusive(spec);
            var start = ref.start;
            var end = ref.end;
            var startSide = block ? -200000000 /* BigBlock */ * (start ? 2 : 1) : 100000000 /* BigInline */ * (start ? -1 : 1);
            var endSide = block ? 200000000 /* BigBlock */ * (end ? 2 : 1) : 100000000 /* BigInline */ * (end ? 1 : -1);
            return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
        };
        /// Create a line decoration, which can add DOM attributes to the
        /// line starting at the given position.
        Decoration.line = function line (spec) {
            return new LineDecoration(spec);
        };
        /// Build a [`DecorationSet`](#view.DecorationSet) from the given
        /// decorated range or ranges.
        Decoration.set = function set (of, sort) {
            if ( sort === void 0 ) sort = false;

            return RangeSet.of(of, sort);
        };
        /// @internal
        Decoration.prototype.hasHeight = function hasHeight () { return this.widget ? this.widget.estimatedHeight > -1 : false; };

        Object.defineProperties( Decoration.prototype, prototypeAccessors$6 );

        return Decoration;
    }(RangeValue));
    /// The empty set of decorations.
    Decoration.none = RangeSet.empty;
    var MarkDecoration = /*@__PURE__*/(function (Decoration) {
        function MarkDecoration(spec) {
            var ref = getInclusive(spec);
            var start = ref.start;
            var end = ref.end;
            Decoration.call(this, 100000000 /* BigInline */ * (start ? -1 : 1), 100000000 /* BigInline */ * (end ? 1 : -1), null, spec);
        }

        if ( Decoration ) MarkDecoration.__proto__ = Decoration;
        MarkDecoration.prototype = Object.create( Decoration && Decoration.prototype );
        MarkDecoration.prototype.constructor = MarkDecoration;
        MarkDecoration.prototype.eq = function eq (other) {
            return this == other ||
                other instanceof MarkDecoration &&
                    this.spec.tagName == other.spec.tagName &&
                    this.spec.class == other.spec.class &&
                    attrsEq(this.spec.attributes || null, other.spec.attributes || null);
        };
        MarkDecoration.prototype.range = function range (from, to) {
            if ( to === void 0 ) to = from;

            if (from >= to)
                { throw new RangeError("Mark decorations may not be empty"); }
            return Decoration.prototype.range.call(this, from, to);
        };

        return MarkDecoration;
    }(Decoration));
    var LineDecoration = /*@__PURE__*/(function (Decoration) {
        function LineDecoration(spec) {
            Decoration.call(this, -100000000 /* BigInline */, -100000000 /* BigInline */, null, spec);
        }

        if ( Decoration ) LineDecoration.__proto__ = Decoration;
        LineDecoration.prototype = Object.create( Decoration && Decoration.prototype );
        LineDecoration.prototype.constructor = LineDecoration;

        var prototypeAccessors$7 = { point: { configurable: true } };
        prototypeAccessors$7.point.get = function () { return true; };
        LineDecoration.prototype.eq = function eq (other) {
            return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
        };
        LineDecoration.prototype.range = function range (from, to) {
            if ( to === void 0 ) to = from;

            if (to != from)
                { throw new RangeError("Line decoration ranges must be zero-length"); }
            return Decoration.prototype.range.call(this, from, to);
        };

        Object.defineProperties( LineDecoration.prototype, prototypeAccessors$7 );

        return LineDecoration;
    }(Decoration));
    LineDecoration.prototype.mapMode = MapMode.TrackBefore;
    var PointDecoration = /*@__PURE__*/(function (Decoration) {
        function PointDecoration(spec, startSide, endSide, block, widget, isReplace) {
            Decoration.call(this, startSide, endSide, widget, spec);
            this.block = block;
            this.isReplace = isReplace;
            this.mapMode = !block ? MapMode.TrackDel : startSide < 0 ? MapMode.TrackBefore : MapMode.TrackAfter;
        }

        if ( Decoration ) PointDecoration.__proto__ = Decoration;
        PointDecoration.prototype = Object.create( Decoration && Decoration.prototype );
        PointDecoration.prototype.constructor = PointDecoration;

        var prototypeAccessors$8 = { point: { configurable: true },type: { configurable: true },heightRelevant: { configurable: true } };
        prototypeAccessors$8.point.get = function () { return true; };
        // Only relevant when this.block == true
        prototypeAccessors$8.type.get = function () {
            return this.startSide < this.endSide ? BlockType.WidgetRange
                : this.startSide < 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
        };
        prototypeAccessors$8.heightRelevant.get = function () { return this.block || !!this.widget && this.widget.estimatedHeight >= 5; };
        PointDecoration.prototype.eq = function eq (other) {
            return other instanceof PointDecoration &&
                widgetsEq(this.widget, other.widget) &&
                this.block == other.block &&
                this.startSide == other.startSide && this.endSide == other.endSide;
        };
        PointDecoration.prototype.range = function range (from, to) {
            if ( to === void 0 ) to = from;

            if (this.isReplace && (from > to || (from == to && this.startSide > 0 && this.endSide < 0)))
                { throw new RangeError("Invalid range for replacement decoration"); }
            if (!this.isReplace && to != from)
                { throw new RangeError("Widget decorations can only have zero-length ranges"); }
            return Decoration.prototype.range.call(this, from, to);
        };

        Object.defineProperties( PointDecoration.prototype, prototypeAccessors$8 );

        return PointDecoration;
    }(Decoration));
    function getInclusive(spec) {
        var start = spec.inclusiveStart;
        var end = spec.inclusiveEnd;
        if (start == null)
            { start = spec.inclusive; }
        if (end == null)
            { end = spec.inclusive; }
        return { start: start || false, end: end || false };
    }
    function widgetsEq(a, b) {
        return a == b || !!(a && b && a.compare(b));
    }
    var MinRangeGap = 4;
    function addRange(from, to, ranges) {
        var last = ranges.length - 1;
        if (last >= 0 && ranges[last] + MinRangeGap > from)
            { ranges[last] = Math.max(ranges[last], to); }
        else
            { ranges.push(from, to); }
    }

    var theme = Facet.define({ combine: function (strs) { return strs.join(" "); } });
    var darkTheme = Facet.define({ combine: function (values) { return values.indexOf(true) > -1; } });
    var baseThemeID = StyleModule.newName();
    var baseLightThemeID = StyleModule.newName();
    var baseDarkThemeID = StyleModule.newName();
    function buildTheme(mainID, spec) {
        var styles = Object.create(null);
        for (var prop in spec) {
            var selector = prop.split(/\s*,\s*/).map(function (piece) {
                var id = mainID, narrow;
                if (id == baseThemeID && (narrow = /^(.*?)@(light|dark)$/.exec(piece))) {
                    id = narrow[2] == "dark" ? baseDarkThemeID : baseLightThemeID;
                    piece = narrow[1];
                }
                var parts = piece.split("."), selector = "." + id + (parts[0] == "wrap" ? "" : " ");
                for (var i = 1; i <= parts.length; i++)
                    { selector += ".cm-" + parts.slice(0, i).join("-"); }
                return selector;
            }).join(", ");
            styles[selector] = spec[prop];
        }
        return new StyleModule(styles, { generateClasses: false });
    }
    /// Create a set of CSS class names for the given theme selector,
    /// which can be added to a DOM element within an editor to make
    /// themes able to style it. Theme selectors can be single words or
    /// words separated by dot characters. In the latter case, the
    /// returned classes combine those that match the full name and those
    /// that match some prefix—for example `"panel.search"` will match
    /// both the theme styles specified as `"panel.search"` and those with
    /// just `"panel"`. More specific theme styles (with more dots) take
    /// precedence.
    function themeClass(selector) {
        var parts = selector.split("."), result = "";
        for (var i = 1; i <= parts.length; i++)
            { result += (result ? " " : "") + "cm-" + parts.slice(0, i).join("-"); }
        return result;
    }
    var baseTheme = buildTheme(baseThemeID, {
        wrap: {
            position: "relative !important",
            boxSizing: "border-box",
            "&.cm-focused": {
                // FIXME it would be great if we could directly use the browser's
                // default focus outline, but it appears we can't, so this tries to
                // approximate that
                outline_fallback: "1px dotted #212121",
                outline: "5px auto -webkit-focus-ring-color"
            },
            display: "flex !important",
            flexDirection: "column"
        },
        scroller: {
            display: "flex !important",
            alignItems: "flex-start !important",
            fontFamily: "monospace",
            lineHeight: 1.4,
            height: "100%",
            overflowX: "auto"
        },
        content: {
            margin: 0,
            flexGrow: 2,
            minHeight: "100%",
            display: "block",
            whiteSpace: "pre",
            boxSizing: "border-box",
            padding: "4px 0",
            outline: "none"
        },
        "content@light": { caretColor: "black" },
        "content@dark": { caretColor: "white" },
        line: {
            display: "block",
            padding: "0 2px 0 4px"
        },
        button: {
            verticalAlign: "middle",
            color: "inherit",
            fontSize: "70%",
            padding: ".2em 1em",
            borderRadius: "3px"
        },
        "button@light": {
            backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
            border: "1px solid #888",
            "&:active": {
                backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
            }
        },
        "button@dark": {
            backgroundImage: "linear-gradient(#555, #111)",
            border: "1px solid #888",
            "&:active": {
                backgroundImage: "linear-gradient(#111, #333)"
            }
        },
        textfield: {
            verticalAlign: "middle",
            color: "inherit",
            fontSize: "70%",
            border: "1px solid silver",
            padding: ".2em .5em"
        },
        "textfield@light": {
            backgroundColor: "white"
        },
        "textfield@dark": {
            border: "1px solid #555",
            backgroundColor: "inherit"
        },
        secondarySelection: {
            backgroundColor_fallback: "#3297FD",
            color_fallback: "white !important",
            backgroundColor: "Highlight",
            color: "HighlightText !important"
        },
        secondaryCursor: {
            display: "inline-block",
            verticalAlign: "text-top",
            width: 0,
            height: "1.15em",
            margin: "0 -0.7px -.7em"
        },
        "secondaryCursor@light": { borderLeft: "1.4px solid #555" },
        "secondaryCursor@dark": { borderLeft: "1.4px solid #ddd" }
    });

    var LineClass = themeClass("line");
    var LineView = /*@__PURE__*/(function (ContentView) {
        function LineView() {
            ContentView.apply(this, arguments);
            this.children = [];
            this.length = 0;
            this.prevAttrs = undefined;
            this.attrs = null;
            this.breakAfter = 0;
        }

        if ( ContentView ) LineView.__proto__ = ContentView;
        LineView.prototype = Object.create( ContentView && ContentView.prototype );
        LineView.prototype.constructor = LineView;

        var prototypeAccessors$9 = { type: { configurable: true } };
        // Consumes source
        LineView.prototype.merge = function merge (from, to, source, takeDeco) {
            if (source) {
                if (!(source instanceof LineView))
                    { return false; }
                if (!this.dom)
                    { source.transferDOM(this); } // Reuse source.dom when appropriate
            }
            if (takeDeco)
                { this.setDeco(source ? source.attrs : null); }
            var elts = source ? source.children : [];
            var cur = this.childCursor();
            var ref = cur.findPos(to, 1);
            var toI = ref.i;
            var toOff = ref.off;
            var ref$1 = cur.findPos(from, -1);
            var fromI = ref$1.i;
            var fromOff = ref$1.off;
            var dLen = from - to;
            for (var i = 0, list = elts; i < list.length; i += 1)
                {
                var view = list[i];

                dLen += view.length;
            }
            this.length += dLen;
            // Both from and to point into the same text view
            if (fromI == toI && fromOff) {
                var start = this.children[fromI];
                // Maybe just update that view and be done
                if (elts.length == 1 && start.merge(fromOff, toOff, elts[0]))
                    { return true; }
                if (elts.length == 0) {
                    start.merge(fromOff, toOff, null);
                    return true;
                }
                // Otherwise split it, so that we don't have to worry about aliasing front/end afterwards
                var after = start.slice(toOff);
                if (after.merge(0, 0, elts[elts.length - 1]))
                    { elts[elts.length - 1] = after; }
                else
                    { elts.push(after); }
                toI++;
                toOff = 0;
            }
            // Make sure start and end positions fall on node boundaries
            // (fromOff/toOff are no longer used after this), and that if the
            // start or end of the elts can be merged with adjacent nodes,
            // this is done
            if (toOff) {
                var end = this.children[toI];
                if (elts.length && end.merge(0, toOff, elts[elts.length - 1]))
                    { elts.pop(); }
                else
                    { end.merge(0, toOff, null); }
            }
            else if (toI < this.children.length && elts.length &&
                this.children[toI].merge(0, 0, elts[elts.length - 1])) {
                elts.pop();
            }
            if (fromOff) {
                var start$1 = this.children[fromI];
                if (elts.length && start$1.merge(fromOff, undefined, elts[0]))
                    { elts.shift(); }
                else
                    { start$1.merge(fromOff, undefined, null); }
                fromI++;
            }
            else if (fromI && elts.length && this.children[fromI - 1].merge(this.children[fromI - 1].length, undefined, elts[0])) {
                elts.shift();
            }
            // Then try to merge any mergeable nodes at the start and end of
            // the changed range
            while (fromI < toI && elts.length && this.children[toI - 1].match(elts[elts.length - 1])) {
                elts.pop();
                toI--;
            }
            while (fromI < toI && elts.length && this.children[fromI].match(elts[0])) {
                elts.shift();
                fromI++;
            }
            // And if anything remains, splice the child array to insert the new elts
            if (elts.length || fromI != toI)
                { this.replaceChildren(fromI, toI, elts); }
            return true;
        };
        LineView.prototype.split = function split (at) {
            var end = new LineView;
            end.breakAfter = this.breakAfter;
            if (this.length == 0)
                { return end; }
            var ref = this.childPos(at);
            var i = ref.i;
            var off = ref.off;
            if (off) {
                end.append(this.children[i].slice(off));
                this.children[i].merge(off, undefined, null);
                i++;
            }
            for (var j = i; j < this.children.length; j++)
                { end.append(this.children[j]); }
            while (i > 0 && this.children[i - 1].length == 0) {
                this.children[i - 1].parent = null;
                i--;
            }
            this.children.length = i;
            this.markDirty();
            this.length = at;
            return end;
        };
        LineView.prototype.transferDOM = function transferDOM (other) {
            if (!this.dom)
                { return; }
            other.setDOM(this.dom);
            other.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
            this.prevAttrs = undefined;
            this.dom = null;
        };
        LineView.prototype.setDeco = function setDeco (attrs) {
            if (!attrsEq(this.attrs, attrs)) {
                if (this.dom) {
                    this.prevAttrs = this.attrs;
                    this.markDirty();
                }
                this.attrs = attrs;
            }
        };
        // Only called when building a line view in ContentBuilder
        LineView.prototype.append = function append (child) {
            this.children.push(child);
            child.setParent(this);
            this.length += child.length;
        };
        // Only called when building a line view in ContentBuilder
        LineView.prototype.addLineDeco = function addLineDeco (deco) {
            var attrs = deco.spec.attributes;
            if (attrs)
                { this.attrs = combineAttrs(attrs, this.attrs || {}); }
        };
        LineView.prototype.domAtPos = function domAtPos (pos) {
            var i = 0;
            for (var off = 0; i < this.children.length; i++) {
                var child = this.children[i], end = off + child.length;
                if (end == off && child.getSide() <= 0)
                    { continue; }
                if (pos > off && pos < end && child.dom.parentNode == this.dom)
                    { return child.domAtPos(pos - off); }
                if (pos <= off)
                    { break; }
                off = end;
            }
            for (; i > 0; i--) {
                var before = this.children[i - 1].dom;
                if (before.parentNode == this.dom)
                    { return DOMPos.after(before); }
            }
            return new DOMPos(this.dom, 0);
        };
        // FIXME might need another hack to work around Firefox's behavior
        // of not actually displaying the cursor even though it's there in
        // the DOM
        LineView.prototype.sync = function sync () {
            if (!this.dom) {
                this.setDOM(document.createElement("div"));
                this.dom.className = LineClass;
                this.prevAttrs = this.attrs ? null : undefined;
            }
            if (this.prevAttrs !== undefined) {
                updateAttrs(this.dom, this.prevAttrs, this.attrs);
                this.dom.classList.add(LineClass);
                this.prevAttrs = undefined;
            }
            ContentView.prototype.sync.call(this);
            var last = this.dom.lastChild;
            if (!last || (last.nodeName != "BR" && !(ContentView.get(last) instanceof TextView))) {
                var hack = document.createElement("BR");
                hack.cmIgnore = true;
                this.dom.appendChild(hack);
            }
        };
        LineView.prototype.measureTextSize = function measureTextSize () {
            if (this.children.length == 0 || this.length > 20)
                { return null; }
            var totalWidth = 0;
            for (var i = 0, list = this.children; i < list.length; i += 1) {
                var child = list[i];

                if (!(child instanceof TextView))
                    { return null; }
                var rects = clientRectsFor(child.dom);
                if (rects.length != 1)
                    { return null; }
                totalWidth += rects[0].width;
            }
            return { lineHeight: this.dom.getBoundingClientRect().height, charWidth: totalWidth / this.length };
        };
        LineView.prototype.coordsAt = function coordsAt (pos, side) {
            for (var off = 0, i = 0; i < this.children.length; i++) {
                var child = this.children[i], end = off + child.length;
                if (end != off && (side <= 0 || end == this.length ? end >= pos : end > pos))
                    { return child.coordsAt(pos - off, side); }
                off = end;
            }
            return this.dom.lastChild.getBoundingClientRect();
        };
        LineView.prototype.match = function match (_other) { return false; };
        prototypeAccessors$9.type.get = function () { return BlockType.Text; };
        LineView.find = function find (docView, pos) {
            for (var i = 0, off = 0;; i++) {
                var block = docView.children[i], end = off + block.length;
                if (end >= pos) {
                    if (block instanceof LineView)
                        { return block; }
                    if (block.length)
                        { return null; }
                }
                off = end + block.breakAfter;
            }
        };

        Object.defineProperties( LineView.prototype, prototypeAccessors$9 );

        return LineView;
    }(ContentView));
    var none$2 = [];
    var BlockWidgetView = /*@__PURE__*/(function (ContentView) {
        function BlockWidgetView(widget, length, type, 
        // This is set by the builder and used to distinguish between
        // adjacent widgets and parts of the same widget when calling
        // `merge`. It's kind of silly that it's an instance variable, but
        // it's hard to route there otherwise.
        open) {
            if ( open === void 0 ) open = 0;

            ContentView.call(this);
            this.widget = widget;
            this.length = length;
            this.type = type;
            this.open = open;
            this.breakAfter = 0;
        }

        if ( ContentView ) BlockWidgetView.__proto__ = ContentView;
        BlockWidgetView.prototype = Object.create( ContentView && ContentView.prototype );
        BlockWidgetView.prototype.constructor = BlockWidgetView;

        var prototypeAccessors$10 = { children: { configurable: true },overrideDOMText: { configurable: true } };
        BlockWidgetView.prototype.merge = function merge (from, to, source) {
            if (!(source instanceof BlockWidgetView) || !source.open ||
                from > 0 && !(source.open & 1 /* Start */) ||
                to < this.length && !(source.open & 2 /* End */))
                { return false; }
            if (!this.widget.compare(source.widget))
                { throw new Error("Trying to merge an open widget with an incompatible node"); }
            this.length = from + source.length + (this.length - to);
            return true;
        };
        BlockWidgetView.prototype.domAtPos = function domAtPos (pos) {
            return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
        };
        BlockWidgetView.prototype.split = function split (at) {
            var len = this.length - at;
            this.length = at;
            return new BlockWidgetView(this.widget, len, this.type);
        };
        prototypeAccessors$10.children.get = function () { return none$2; };
        BlockWidgetView.prototype.sync = function sync () {
            if (!this.dom || !this.widget.updateDOM(this.dom)) {
                this.setDOM(this.widget.toDOM(this.editorView));
                this.dom.contentEditable = "false";
            }
        };
        prototypeAccessors$10.overrideDOMText.get = function () {
            return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Text.empty;
        };
        BlockWidgetView.prototype.domBoundsAround = function domBoundsAround () { return null; };
        BlockWidgetView.prototype.match = function match (other) {
            if (other instanceof BlockWidgetView && other.type == this.type &&
                other.widget.constructor == this.widget.constructor) {
                if (!other.widget.eq(this.widget.value))
                    { this.markDirty(true); }
                this.widget = other.widget;
                this.length = other.length;
                this.breakAfter = other.breakAfter;
                return true;
            }
            return false;
        };

        Object.defineProperties( BlockWidgetView.prototype, prototypeAccessors$10 );

        return BlockWidgetView;
    }(ContentView));

    var ContentBuilder = function ContentBuilder(doc, pos, end) {
        this.doc = doc;
        this.pos = pos;
        this.end = end;
        this.content = [];
        this.curLine = null;
        this.breakAtStart = 0;
        this.text = "";
        this.textOff = 0;
        this.cursor = doc.iter();
        this.skip = pos;
    };
    ContentBuilder.prototype.posCovered = function posCovered () {
        if (this.content.length == 0)
            { return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos; }
        var last = this.content[this.content.length - 1];
        return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
    };
    ContentBuilder.prototype.getLine = function getLine () {
        if (!this.curLine)
            { this.content.push(this.curLine = new LineView); }
        return this.curLine;
    };
    ContentBuilder.prototype.addWidget = function addWidget (view) {
        this.curLine = null;
        this.content.push(view);
    };
    ContentBuilder.prototype.finish = function finish () {
        if (!this.posCovered())
            { this.getLine(); }
    };
    ContentBuilder.prototype.buildText = function buildText (length, tagName, clss, attrs, _ranges) {
        while (length > 0) {
            if (this.textOff == this.text.length) {
                var ref = this.cursor.next(this.skip);
                    var value = ref.value;
                    var lineBreak = ref.lineBreak;
                    var done = ref.done;
                this.skip = 0;
                if (done)
                    { throw new Error("Ran out of text content when drawing inline views"); }
                if (lineBreak) {
                    if (!this.posCovered())
                        { this.getLine(); }
                    if (this.content.length)
                        { this.content[this.content.length - 1].breakAfter = 1; }
                    else
                        { this.breakAtStart = 1; }
                    this.curLine = null;
                    length--;
                    continue;
                }
                else {
                    this.text = value;
                    this.textOff = 0;
                }
            }
            var take = Math.min(this.text.length - this.textOff, length);
            this.getLine().append(new TextView(this.text.slice(this.textOff, this.textOff + take), tagName, clss, attrs));
            length -= take;
            this.textOff += take;
        }
    };
    ContentBuilder.prototype.span = function span (from, to, active) {
        var tagName = null, clss = null;
        var attrs = null;
        for (var i = 0, list = active; i < list.length; i += 1) {
            var ref = list[i];
                var spec = ref.spec;

                if (spec.tagName)
                { tagName = spec.tagName; }
            if (spec.class)
                { clss = clss ? clss + " " + spec.class : spec.class; }
            if (spec.attributes)
                { for (var name in spec.attributes) {
                    var value = spec.attributes[name];
                    if (value == null)
                        { continue; }
                    if (name == "class") {
                        clss = clss ? clss + " " + value : value;
                    }
                    else {
                        if (!attrs)
                            { attrs = {}; }
                        if (name == "style" && attrs.style)
                            { value = attrs.style + ";" + value; }
                        attrs[name] = value;
                    }
                } }
        }
        this.buildText(to - from, tagName, clss, attrs, active);
        this.pos = to;
    };
    ContentBuilder.prototype.point = function point (from, to, deco, openStart, openEnd) {
        var open = (openStart ? 1 /* Start */ : 0) | (openEnd ? 2 /* End */ : 0);
        var len = to - from;
        if (deco instanceof PointDecoration) {
            if (deco.block) {
                var type = deco.type;
                if (type == BlockType.WidgetAfter && !this.posCovered())
                    { this.getLine(); }
                this.addWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type, open));
            }
            else {
                this.getLine().append(WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide, open));
            }
        }
        else if (this.doc.lineAt(this.pos).from == this.pos) { // Line decoration
            this.getLine().addLineDeco(deco);
        }
        if (len) {
            // Advance the iterator past the replaced content
            if (this.textOff + len <= this.text.length) {
                this.textOff += len;
            }
            else {
                this.skip += len - (this.text.length - this.textOff);
                this.text = "";
                this.textOff = 0;
            }
            this.pos = to;
        }
    };
    ContentBuilder.build = function build (text, from, to, decorations) {
        var builder = new ContentBuilder(text, from, to);
        RangeSet.spans(decorations, from, to, builder);
        builder.finish();
        return builder;
    };
    var NullWidget = /*@__PURE__*/(function (WidgetType) {
        function NullWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) NullWidget.__proto__ = WidgetType;
        NullWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        NullWidget.prototype.constructor = NullWidget;

        NullWidget.prototype.toDOM = function toDOM () { return document.createElement(this.value); };
        NullWidget.prototype.updateDOM = function updateDOM (elt) { return elt.nodeName.toLowerCase() == this.value; };

        return NullWidget;
    }(WidgetType));

    /// Used to indicate [text direction](#view.EditorView.textDirection).
    var Direction;
    (function (Direction) {
        // (These are chosen to match the base levels, in bidi algorithm
        // terms, of spans in that direction.)
        Direction[Direction["LTR"] = 0] = "LTR";
        Direction[Direction["RTL"] = 1] = "RTL";
    })(Direction || (Direction = {}));
    var LTR = Direction.LTR, RTL = Direction.RTL;
    // Decode a string with each type encoded as log2(type)
    function dec(str) {
        var result = [];
        for (var i = 0; i < str.length; i++)
            { result.push(1 << +str[i]); }
        return result;
    }
    // Character types for codepoints 0 to 0xf8
    var LowTypes = dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
    // Character types for codepoints 0x600 to 0x6f9
    var ArabicTypes = dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
    function charType(ch) {
        return ch <= 0xf7 ? LowTypes[ch] :
            0x590 <= ch && ch <= 0x5f4 ? 2 /* R */ :
                0x600 <= ch && ch <= 0x6f9 ? ArabicTypes[ch - 0x600] :
                    0x6ee <= ch && ch <= 0x8ac ? 4 /* AL */ :
                        0x2000 <= ch && ch <= 0x200b ? 256 /* NI */ :
                            ch == 0x200c ? 256 /* NI */ : 1 /* L */;
    }
    var BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var BidiSpan = function BidiSpan(from, to, level) {
        this.from = from;
        this.to = to;
        this.level = level;
    };

    var prototypeAccessors$11 = { dir: { configurable: true } };
    prototypeAccessors$11.dir.get = function () { return this.level % 2 ? RTL : LTR; };
    BidiSpan.prototype.side = function side (end, dir) { return (this.dir == dir) == end ? this.to : this.from; };
    BidiSpan.find = function find (order, index, level, assoc) {
        var maybe = -1;
        for (var i = 0; i < order.length; i++) {
            var span = order[i];
            if (span.from <= index && span.to >= index) {
                if (span.level == level)
                    { return i; }
                // When multiple spans match, if assoc != 0, take the one that
                // covers that side, otherwise take the one with the minimum
                // level.
                if (maybe < 0 || (assoc != 0 ? (assoc < 0 ? span.from < index : span.to > index) : order[maybe].level > span.level))
                    { maybe = i; }
            }
        }
        if (maybe < 0)
            { throw new RangeError("Index out of range"); }
        return maybe;
    };

    Object.defineProperties( BidiSpan.prototype, prototypeAccessors$11 );
    // Reused array of character types
    var types = [];
    function computeOrder(line, direction) {
        var len = line.length, outerType = direction == LTR ? 1 /* L */ : 2 /* R */;
        if (!line || outerType == 1 /* L */ && !BidiRE.test(line))
            { return trivialOrder(len); }
        // W1. Examine each non-spacing mark (NSM) in the level run, and
        // change the type of the NSM to the type of the previous
        // character. If the NSM is at the start of the level run, it will
        // get the type of sor.
        // W2. Search backwards from each instance of a European number
        // until the first strong type (R, L, AL, or sor) is found. If an
        // AL is found, change the type of the European number to Arabic
        // number.
        // W3. Change all ALs to R.
        // (Left after this: L, R, EN, AN, ET, CS, NI)
        for (var i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
            var type = charType(line.charCodeAt(i));
            if (type == 512 /* NSM */)
                { type = prev; }
            else if (type == 8 /* EN */ && prevStrong == 4 /* AL */)
                { type = 16 /* AN */; }
            types[i] = type == 4 /* AL */ ? 2 /* R */ : type;
            if (type & 7 /* Strong */)
                { prevStrong = type; }
            prev = type;
        }
        // W5. A sequence of European terminators adjacent to European
        // numbers changes to all European numbers.
        // W6. Otherwise, separators and terminators change to Other
        // Neutral.
        // W7. Search backwards from each instance of a European number
        // until the first strong type (R, L, or sor) is found. If an L is
        // found, then change the type of the European number to L.
        // (Left after this: L, R, EN+AN, NI)
        for (var i$1 = 0, prev$1 = outerType, prevStrong$1 = outerType; i$1 < len; i$1++) {
            var type$1 = types[i$1];
            if (type$1 == 128 /* CS */) {
                if (i$1 < len - 1 && prev$1 == types[i$1 + 1] && (prev$1 & 24 /* Num */))
                    { type$1 = types[i$1] = prev$1; }
                else
                    { types[i$1] = 256 /* NI */; }
            }
            else if (type$1 == 64 /* ET */) {
                var end = i$1 + 1;
                while (end < len && types[end] == 64 /* ET */)
                    { end++; }
                var replace = (i$1 && prev$1 == 8 /* EN */) || (end < len && types[end] == 8 /* EN */) ? (prevStrong$1 == 1 /* L */ ? 1 /* L */ : 8 /* EN */) : 256 /* NI */;
                for (var j = i$1; j < end; j++)
                    { types[j] = replace; }
                i$1 = end - 1;
            }
            else if (type$1 == 8 /* EN */ && prevStrong$1 == 1 /* L */) {
                types[i$1] = 1 /* L */;
            }
            prev$1 = type$1;
            if (type$1 & 7 /* Strong */)
                { prevStrong$1 = type$1; }
        }
        // N1. A sequence of neutrals takes the direction of the
        // surrounding strong text if the text on both sides has the same
        // direction. European and Arabic numbers act as if they were R in
        // terms of their influence on neutrals. Start-of-level-run (sor)
        // and end-of-level-run (eor) are used at level run boundaries.
        // N2. Any remaining neutrals take the embedding direction.
        // (Left after this: L, R, EN+AN)
        for (var i$2 = 0; i$2 < len; i$2++) {
            if (types[i$2] == 256 /* NI */) {
                var end$1 = i$2 + 1;
                while (end$1 < len && types[end$1] == 256 /* NI */)
                    { end$1++; }
                var beforeL = (i$2 ? types[i$2 - 1] : outerType) == 1 /* L */;
                var afterL = (end$1 < len ? types[end$1] : outerType) == 1 /* L */;
                var replace$1 = beforeL == afterL ? (beforeL ? 1 /* L */ : 2 /* R */) : outerType;
                for (var j$1 = i$2; j$1 < end$1; j$1++)
                    { types[j$1] = replace$1; }
                i$2 = end$1 - 1;
            }
        }
        // Here we depart from the documented algorithm, in order to avoid
        // building up an actual levels array. Since there are only three
        // levels (0, 1, 2) in an implementation that doesn't take
        // explicit embedding into account, we can build up the order on
        // the fly, without following the level-based algorithm.
        var order = [];
        if (outerType == 1 /* L */) {
            for (var i$3 = 0; i$3 < len;) {
                var start = i$3, rtl = types[i$3++] != 1 /* L */;
                while (i$3 < len && rtl == (types[i$3] != 1 /* L */))
                    { i$3++; }
                if (rtl) {
                    for (var j$2 = i$3; j$2 > start;) {
                        var end$2 = j$2, l = types[--j$2] != 2 /* R */;
                        while (j$2 > start && l == (types[j$2 - 1] != 2 /* R */))
                            { j$2--; }
                        order.push(new BidiSpan(j$2, end$2, l ? 2 : 1));
                    }
                }
                else {
                    order.push(new BidiSpan(start, i$3, 0));
                }
            }
        }
        else {
            for (var i$4 = 0; i$4 < len;) {
                var start$1 = i$4, rtl$1 = types[i$4++] == 2 /* R */;
                while (i$4 < len && rtl$1 == (types[i$4] == 2 /* R */))
                    { i$4++; }
                order.push(new BidiSpan(start$1, i$4, rtl$1 ? 1 : 2));
            }
        }
        return order;
    }
    function trivialOrder(length) {
        return [new BidiSpan(0, length, 0)];
    }
    var movedOver = "";
    function moveVisually(line, order, dir, start, forward) {
        var _a;
        var startIndex = start.head - line.from, spanI = -1;
        if (startIndex == 0) {
            if (!forward || !line.length)
                { return null; }
            if (order[0].level != dir) {
                startIndex = order[0].side(false, dir);
                spanI = 0;
            }
        }
        else if (startIndex == line.length) {
            if (forward)
                { return null; }
            var last = order[order.length - 1];
            if (last.level != dir) {
                startIndex = last.side(true, dir);
                spanI = order.length - 1;
            }
        }
        if (spanI < 0)
            { spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc); }
        var span = order[spanI];
        // End of span. (But not end of line--that was checked for above.)
        if (startIndex == span.side(forward, dir)) {
            span = order[spanI += forward ? 1 : -1];
            startIndex = span.side(!forward, dir);
        }
        var indexForward = forward == (span.dir == dir);
        var nextIndex = line.findClusterBreak(startIndex, indexForward);
        movedOver = line.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
        if (nextIndex != span.side(forward, dir))
            { return EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level); }
        var nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
        if (!nextSpan && span.level != dir)
            { return EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir); }
        if (nextSpan && nextSpan.level < span.level)
            { return EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, 0, nextSpan.level); }
        return EditorSelection.cursor(nextIndex + line.from, 0, span.level);
    }

    var wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line"];
    var HeightOracle = function HeightOracle() {
        this.doc = Text.empty;
        this.lineWrapping = false;
        this.direction = Direction.LTR;
        this.heightSamples = {};
        this.lineHeight = 14;
        this.charWidth = 7;
        this.lineLength = 30;
        // Used to track, during updateHeight, if any actual heights changed
        this.heightChanged = false;
    };
    HeightOracle.prototype.heightForGap = function heightForGap (from, to) {
        var lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
        if (this.lineWrapping)
            { lines += Math.ceil(((to - from) - (lines * this.lineLength * 0.5)) / this.lineLength); }
        return this.lineHeight * lines;
    };
    HeightOracle.prototype.heightForLine = function heightForLine (length) {
        if (!this.lineWrapping)
            { return this.lineHeight; }
        var lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
        return lines * this.lineHeight;
    };
    HeightOracle.prototype.setDoc = function setDoc (doc) { this.doc = doc; return this; };
    HeightOracle.prototype.mustRefresh = function mustRefresh (lineHeights, whiteSpace, direction) {
        var newHeight = false;
        for (var i = 0; i < lineHeights.length; i++) {
            var h = lineHeights[i];
            if (h < 0) {
                i++;
            }
            else if (!this.heightSamples[Math.floor(h * 10)]) { // Round to .1 pixels
                newHeight = true;
                this.heightSamples[Math.floor(h * 10)] = true;
            }
        }
        return newHeight || (wrappingWhiteSpace.indexOf(whiteSpace) > -1) != this.lineWrapping || this.direction != direction;
    };
    HeightOracle.prototype.refresh = function refresh (whiteSpace, direction, lineHeight, charWidth, lineLength, knownHeights) {
        var lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
        var changed = Math.round(lineHeight) != Math.round(this.lineHeight) ||
            this.lineWrapping != lineWrapping ||
            this.direction != direction;
        this.lineWrapping = lineWrapping;
        this.direction = direction;
        this.lineHeight = lineHeight;
        this.charWidth = charWidth;
        this.lineLength = lineLength;
        if (changed) {
            this.heightSamples = {};
            for (var i = 0; i < knownHeights.length; i++) {
                var h = knownHeights[i];
                if (h < 0)
                    { i++; }
                else
                    { this.heightSamples[Math.floor(h * 10)] = true; }
            }
        }
        return changed;
    };
    // This object is used by `updateHeight` to make DOM measurements
    // arrive at the right nides. The `heights` array is a sequence of
    // block heights, starting from position `from`.
    var MeasuredHeights = function MeasuredHeights(from, heights) {
        this.from = from;
        this.heights = heights;
        this.index = 0;
    };

    var prototypeAccessors$12 = { more: { configurable: true } };
    prototypeAccessors$12.more.get = function () { return this.index < this.heights.length; };

    Object.defineProperties( MeasuredHeights.prototype, prototypeAccessors$12 );
    /// Record used to represent information about a block-level element
    /// in the editor view.
    var BlockInfo = function BlockInfo(
    /// The start of the element in the document.
    from, 
    /// The length of the element.
    length, 
    /// The top position of the element.
    top, 
    /// Its height.
    height, 
    /// The type of element this is. When querying lines, this may be
    /// an array of all the blocks that make up the line.
    type) {
        this.from = from;
        this.length = length;
        this.top = top;
        this.height = height;
        this.type = type;
    };

    var prototypeAccessors$13 = { to: { configurable: true },bottom: { configurable: true } };
    /// The end of the element as a document position.
    prototypeAccessors$13.to.get = function () { return this.from + this.length; };
    /// The bottom position of the element.
    prototypeAccessors$13.bottom.get = function () { return this.top + this.height; };
    /// @internal
    BlockInfo.prototype.join = function join (other) {
        var detail = (Array.isArray(this.type) ? this.type : [this])
            .concat(Array.isArray(other.type) ? other.type : [other]);
        return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
    };

    Object.defineProperties( BlockInfo.prototype, prototypeAccessors$13 );
    var QueryType;
    (function (QueryType) {
        QueryType[QueryType["ByPos"] = 0] = "ByPos";
        QueryType[QueryType["ByHeight"] = 1] = "ByHeight";
        QueryType[QueryType["ByPosNoHeight"] = 2] = "ByPosNoHeight";
    })(QueryType || (QueryType = {}));
    var Epsilon = 1e-4;
    var HeightMap = function HeightMap(length, // The number of characters covered
    height, // Height of this part of the document
    flags /* Outdated */) {
        if ( flags === void 0 ) flags = 2;

        this.length = length;
        this.height = height;
        this.flags = flags;
    };

    var prototypeAccessors$14 = { outdated: { configurable: true } };
    prototypeAccessors$14.outdated.get = function () { return (this.flags & 2 /* Outdated */) > 0; };
    prototypeAccessors$14.outdated.set = function (value) { this.flags = (value ? 2 /* Outdated */ : 0) | (this.flags & ~2 /* Outdated */); };
    HeightMap.prototype.setHeight = function setHeight (oracle, height) {
        if (this.height != height) {
            if (Math.abs(this.height - height) > Epsilon)
                { oracle.heightChanged = true; }
            this.height = height;
        }
    };
    // Base case is to replace a leaf node, which simply builds a tree
    // from the new nodes and returns that (HeightMapBranch and
    // HeightMapGap override this to actually use from/to)
    HeightMap.prototype.replace = function replace (_from, _to, nodes) {
        return HeightMap.of(nodes);
    };
    // Again, these are base cases, and are overridden for branch and gap nodes.
    HeightMap.prototype.decomposeLeft = function decomposeLeft (_to, result) { result.push(this); };
    HeightMap.prototype.decomposeRight = function decomposeRight (_from, result) { result.push(this); };
    HeightMap.prototype.applyChanges = function applyChanges (decorations, oldDoc, oracle, changes) {
        var me = this;
        for (var i = changes.length - 1; i >= 0; i--) {
            var ref = changes[i];
                var fromA = ref.fromA;
                var toA = ref.toA;
                var fromB = ref.fromB;
                var toB = ref.toB;
            var start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            var end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            toB += end.to - toA;
            toA = end.to;
            while (i > 0 && start.from <= changes[i - 1].toA) {
                fromA = changes[i - 1].fromA;
                fromB = changes[i - 1].fromB;
                i--;
                if (fromA < start.from)
                    { start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0); }
            }
            fromB += start.from - fromA;
            fromA = start.from;
            var nodes = NodeBuilder.build(oracle, decorations, fromB, toB);
            me = me.replace(fromA, toA, nodes);
        }
        return me.updateHeight(oracle, 0);
    };
    HeightMap.empty = function empty () { return new HeightMapText(0, 0); };
    // nodes uses null values to indicate the position of line breaks.
    // There are never line breaks at the start or end of the array, or
    // two line breaks next to each other, and the array isn't allowed
    // to be empty (same restrictions as return value from the builder).
    HeightMap.of = function of (nodes) {
        if (nodes.length == 1)
            { return nodes[0]; }
        var i = 0, j = nodes.length, before = 0, after = 0;
        for (;;) {
            if (i == j) {
                if (before > after * 2) {
                    var split = nodes[i - 1];
                    if (split.break)
                        { nodes.splice(--i, 1, split.left, null, split.right); }
                    else
                        { nodes.splice(--i, 1, split.left, split.right); }
                    j += 1 + split.break;
                    before -= split.size;
                }
                else if (after > before * 2) {
                    var split$1 = nodes[j];
                    if (split$1.break)
                        { nodes.splice(j, 1, split$1.left, null, split$1.right); }
                    else
                        { nodes.splice(j, 1, split$1.left, split$1.right); }
                    j += 2 + split$1.break;
                    after -= split$1.size;
                }
                else {
                    break;
                }
            }
            else if (before < after) {
                var next = nodes[i++];
                if (next)
                    { before += next.size; }
            }
            else {
                var next$1 = nodes[--j];
                if (next$1)
                    { after += next$1.size; }
            }
        }
        var brk = 0;
        if (nodes[i - 1] == null) {
            brk = 1;
            i--;
        }
        else if (nodes[i] == null) {
            brk = 1;
            j++;
        }
        return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
    };

    Object.defineProperties( HeightMap.prototype, prototypeAccessors$14 );
    HeightMap.prototype.size = 1;
    var HeightMapBlock = /*@__PURE__*/(function (HeightMap) {
        function HeightMapBlock(length, height, type) {
            HeightMap.call(this, length, height);
            this.type = type;
        }

        if ( HeightMap ) HeightMapBlock.__proto__ = HeightMap;
        HeightMapBlock.prototype = Object.create( HeightMap && HeightMap.prototype );
        HeightMapBlock.prototype.constructor = HeightMapBlock;
        HeightMapBlock.prototype.blockAt = function blockAt (_height, _doc, top, offset) {
            return new BlockInfo(offset, this.length, top, this.height, this.type);
        };
        HeightMapBlock.prototype.lineAt = function lineAt (_value, _type, doc, top, offset) {
            return this.blockAt(0, doc, top, offset);
        };
        HeightMapBlock.prototype.forEachLine = function forEachLine (_from, _to, doc, top, offset, f) {
            f(this.blockAt(0, doc, top, offset));
        };
        HeightMapBlock.prototype.updateHeight = function updateHeight (oracle, offset, _force, measured) {
            if ( offset === void 0 ) offset = 0;

            if (measured && measured.from <= offset && measured.more)
                { this.setHeight(oracle, measured.heights[measured.index++]); }
            this.outdated = false;
            return this;
        };
        HeightMapBlock.prototype.toString = function toString () { return ("block(" + (this.length) + ")"); };

        return HeightMapBlock;
    }(HeightMap));
    var HeightMapText = /*@__PURE__*/(function (HeightMapBlock) {
        function HeightMapText(length, height) {
            HeightMapBlock.call(this, length, height, BlockType.Text);
            this.collapsed = 0; // Amount of collapsed content in the line
            this.widgetHeight = 0; // Maximum inline widget height
        }

        if ( HeightMapBlock ) HeightMapText.__proto__ = HeightMapBlock;
        HeightMapText.prototype = Object.create( HeightMapBlock && HeightMapBlock.prototype );
        HeightMapText.prototype.constructor = HeightMapText;
        HeightMapText.prototype.replace = function replace (_from, _to, nodes) {
            var node = nodes[0];
            if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && (node.flags & 4 /* SingleLine */)) &&
                Math.abs(this.length - node.length) < 10) {
                if (node instanceof HeightMapGap)
                    { node = new HeightMapText(node.length, this.height); }
                else
                    { node.height = this.height; }
                if (!this.outdated)
                    { node.outdated = false; }
                return node;
            }
            else {
                return HeightMap.of(nodes);
            }
        };
        HeightMapText.prototype.updateHeight = function updateHeight (oracle, offset, force, measured) {
            if ( offset === void 0 ) offset = 0;
            if ( force === void 0 ) force = false;

            if (measured && measured.from <= offset && measured.more)
                { this.setHeight(oracle, measured.heights[measured.index++]); }
            else if (force || this.outdated)
                { this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed))); }
            this.outdated = false;
            return this;
        };
        HeightMapText.prototype.toString = function toString () {
            return ("line(" + (this.length) + (this.collapsed ? -this.collapsed : "") + (this.widgetHeight ? ":" + this.widgetHeight : "") + ")");
        };

        return HeightMapText;
    }(HeightMapBlock));
    var HeightMapGap = /*@__PURE__*/(function (HeightMap) {
        function HeightMapGap(length) { HeightMap.call(this, length, 0); }

        if ( HeightMap ) HeightMapGap.__proto__ = HeightMap;
        HeightMapGap.prototype = Object.create( HeightMap && HeightMap.prototype );
        HeightMapGap.prototype.constructor = HeightMapGap;
        HeightMapGap.prototype.lines = function lines (doc, offset) {
            var firstLine = doc.lineAt(offset).number, lastLine = doc.lineAt(offset + this.length).number;
            return { firstLine: firstLine, lastLine: lastLine, lineHeight: this.height / (lastLine - firstLine + 1) };
        };
        HeightMapGap.prototype.blockAt = function blockAt (height, doc, top, offset) {
            var ref = this.lines(doc, offset);
            var firstLine = ref.firstLine;
            var lastLine = ref.lastLine;
            var lineHeight = ref.lineHeight;
            var line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top) / lineHeight)));
            var ref$1 = doc.line(firstLine + line);
            var from = ref$1.from;
            var length = ref$1.length;
            return new BlockInfo(from, length, top + lineHeight * line, lineHeight, BlockType.Text);
        };
        HeightMapGap.prototype.lineAt = function lineAt (value, type, doc, top, offset) {
            if (type == QueryType.ByHeight)
                { return this.blockAt(value, doc, top, offset); }
            if (type == QueryType.ByPosNoHeight) {
                var ref = doc.lineAt(value);
                var from$1 = ref.from;
                var to = ref.to;
                return new BlockInfo(from$1, to - from$1, 0, 0, BlockType.Text);
            }
            var ref$1 = this.lines(doc, offset);
            var firstLine = ref$1.firstLine;
            var lineHeight = ref$1.lineHeight;
            var ref$2 = doc.lineAt(value);
            var from = ref$2.from;
            var length = ref$2.length;
            var number = ref$2.number;
            return new BlockInfo(from, length, top + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
        };
        HeightMapGap.prototype.forEachLine = function forEachLine (from, to, doc, top, offset, f) {
            var ref = this.lines(doc, offset);
            var firstLine = ref.firstLine;
            var lastLine = ref.lastLine;
            var lineHeight = ref.lineHeight;
            for (var line = firstLine; line <= lastLine; line++) {
                var ref$1 = doc.line(line);
                var from$1 = ref$1.from;
                var to$1 = ref$1.to;
                if (from$1 > to$1)
                    { break; }
                if (to$1 >= from$1)
                    { f(new BlockInfo(from$1, to$1 - from$1, top, top += lineHeight, BlockType.Text)); }
            }
        };
        HeightMapGap.prototype.replace = function replace (from, to, nodes) {
            var after = this.length - to;
            if (after > 0) {
                var last = nodes[nodes.length - 1];
                if (last instanceof HeightMapGap)
                    { nodes[nodes.length - 1] = new HeightMapGap(last.length + after); }
                else
                    { nodes.push(null, new HeightMapGap(after - 1)); }
            }
            if (from > 0) {
                var first = nodes[0];
                if (first instanceof HeightMapGap)
                    { nodes[0] = new HeightMapGap(from + first.length); }
                else
                    { nodes.unshift(new HeightMapGap(from - 1), null); }
            }
            return HeightMap.of(nodes);
        };
        HeightMapGap.prototype.decomposeLeft = function decomposeLeft (to, result) {
            result.push(new HeightMapGap(to - 1), null);
        };
        HeightMapGap.prototype.decomposeRight = function decomposeRight (from, result) {
            result.push(null, new HeightMapGap(this.length - from - 1));
        };
        HeightMapGap.prototype.updateHeight = function updateHeight (oracle, offset, force, measured) {
            if ( offset === void 0 ) offset = 0;
            if ( force === void 0 ) force = false;

            var end = offset + this.length;
            if (measured && measured.from <= offset + this.length && measured.more) {
                // Fill in part of this gap with measured lines. We know there
                // can't be widgets or collapsed ranges in those lines, because
                // they would already have been added to the heightmap (gaps
                // only contain plain text).
                var nodes = [], pos = Math.max(offset, measured.from);
                if (measured.from > offset)
                    { nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset)); }
                while (pos <= end && measured.more) {
                    var len = oracle.doc.lineAt(pos).length;
                    if (nodes.length)
                        { nodes.push(null); }
                    var line = new HeightMapText(len, measured.heights[measured.index++]);
                    line.outdated = false;
                    nodes.push(line);
                    pos += len + 1;
                }
                if (pos <= end)
                    { nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos)); }
                oracle.heightChanged = true;
                return HeightMap.of(nodes);
            }
            else if (force || this.outdated) {
                this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
                this.outdated = false;
            }
            return this;
        };
        HeightMapGap.prototype.toString = function toString () { return ("gap(" + (this.length) + ")"); };

        return HeightMapGap;
    }(HeightMap));
    var HeightMapBranch = /*@__PURE__*/(function (HeightMap) {
        function HeightMapBranch(left, brk, right) {
            HeightMap.call(this, left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 /* Outdated */ : 0));
            this.left = left;
            this.right = right;
            this.size = left.size + right.size;
        }

        if ( HeightMap ) HeightMapBranch.__proto__ = HeightMap;
        HeightMapBranch.prototype = Object.create( HeightMap && HeightMap.prototype );
        HeightMapBranch.prototype.constructor = HeightMapBranch;

        var prototypeAccessors$15 = { break: { configurable: true } };
        prototypeAccessors$15.break.get = function () { return this.flags & 1 /* Break */; };
        HeightMapBranch.prototype.blockAt = function blockAt (height, doc, top, offset) {
            var mid = top + this.left.height;
            return height < mid || this.right.height == 0 ? this.left.blockAt(height, doc, top, offset)
                : this.right.blockAt(height, doc, mid, offset + this.left.length + this.break);
        };
        HeightMapBranch.prototype.lineAt = function lineAt (value, type, doc, top, offset) {
            var rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
            var left = type == QueryType.ByHeight ? value < rightTop || this.right.height == 0 : value < rightOffset;
            var base = left ? this.left.lineAt(value, type, doc, top, offset)
                : this.right.lineAt(value, type, doc, rightTop, rightOffset);
            if (this.break || (left ? base.to < rightOffset : base.from > rightOffset))
                { return base; }
            var subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
            if (left)
                { return base.join(this.right.lineAt(rightOffset, subQuery, doc, rightTop, rightOffset)); }
            else
                { return this.left.lineAt(rightOffset, subQuery, doc, top, offset).join(base); }
        };
        HeightMapBranch.prototype.forEachLine = function forEachLine (from, to, doc, top, offset, f) {
            var rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
            if (this.break) {
                if (from < rightOffset)
                    { this.left.forEachLine(from, to, doc, top, offset, f); }
                if (to >= rightOffset)
                    { this.right.forEachLine(from, to, doc, rightTop, rightOffset, f); }
            }
            else {
                var mid = this.lineAt(rightOffset, QueryType.ByPos, doc, top, offset);
                if (from < mid.from)
                    { this.left.forEachLine(from, mid.from - 1, doc, top, offset, f); }
                if (mid.to >= from && mid.from <= to)
                    { f(mid); }
                if (to > mid.to)
                    { this.right.forEachLine(mid.to + 1, to, doc, rightTop, rightOffset, f); }
            }
        };
        HeightMapBranch.prototype.replace = function replace (from, to, nodes) {
            var rightStart = this.left.length + this.break;
            if (to < rightStart)
                { return this.balanced(this.left.replace(from, to, nodes), this.right); }
            if (from > this.left.length)
                { return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes)); }
            var result = [];
            if (from > 0)
                { this.decomposeLeft(from, result); }
            var left = result.length;
            for (var i = 0, list = nodes; i < list.length; i += 1)
                {
                var node = list[i];

                result.push(node);
            }
            if (from > 0)
                { mergeGaps(result, left - 1); }
            if (to < this.length) {
                var right = result.length;
                this.decomposeRight(to, result);
                mergeGaps(result, right);
            }
            return HeightMap.of(result);
        };
        HeightMapBranch.prototype.decomposeLeft = function decomposeLeft (to, result) {
            var left = this.left.length;
            if (to <= left)
                { return this.left.decomposeLeft(to, result); }
            result.push(this.left);
            if (this.break) {
                left++;
                if (to >= left)
                    { result.push(null); }
            }
            if (to > left)
                { this.right.decomposeLeft(to - left, result); }
        };
        HeightMapBranch.prototype.decomposeRight = function decomposeRight (from, result) {
            var left = this.left.length, right = left + this.break;
            if (from >= right)
                { return this.right.decomposeRight(from - right, result); }
            if (from < left)
                { this.left.decomposeRight(from, result); }
            if (this.break && from < right)
                { result.push(null); }
            result.push(this.right);
        };
        HeightMapBranch.prototype.balanced = function balanced (left, right) {
            if (left.size > 2 * right.size || right.size > 2 * left.size)
                { return HeightMap.of(this.break ? [left, null, right] : [left, right]); }
            this.left = left;
            this.right = right;
            this.height = left.height + right.height;
            this.outdated = left.outdated || right.outdated;
            this.size = left.size + right.size;
            this.length = left.length + this.break + right.length;
            return this;
        };
        HeightMapBranch.prototype.updateHeight = function updateHeight (oracle, offset, force, measured) {
            if ( offset === void 0 ) offset = 0;
            if ( force === void 0 ) force = false;

            var ref = this;
            var left = ref.left;
            var right = ref.right;
            var rightStart = offset + left.length + this.break, rebalance = null;
            if (measured && measured.from <= offset + left.length && measured.more)
                { rebalance = left = left.updateHeight(oracle, offset, force, measured); }
            else
                { left.updateHeight(oracle, offset, force); }
            if (measured && measured.from <= rightStart + right.length && measured.more)
                { rebalance = right = right.updateHeight(oracle, rightStart, force, measured); }
            else
                { right.updateHeight(oracle, rightStart, force); }
            if (rebalance)
                { return this.balanced(left, right); }
            this.height = this.left.height + this.right.height;
            this.outdated = false;
            return this;
        };
        HeightMapBranch.prototype.toString = function toString () { return this.left + (this.break ? " " : "-") + this.right; };

        Object.defineProperties( HeightMapBranch.prototype, prototypeAccessors$15 );

        return HeightMapBranch;
    }(HeightMap));
    function mergeGaps(nodes, around) {
        var before, after;
        if (nodes[around] == null &&
            (before = nodes[around - 1]) instanceof HeightMapGap &&
            (after = nodes[around + 1]) instanceof HeightMapGap)
            { nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length)); }
    }
    var relevantWidgetHeight = 5;
    var NodeBuilder = function NodeBuilder(pos, oracle) {
        this.pos = pos;
        this.oracle = oracle;
        this.nodes = [];
        this.lineStart = -1;
        this.lineEnd = -1;
        this.covering = null;
        this.writtenTo = pos;
    };

    var prototypeAccessors$16 = { isCovered: { configurable: true },minPointSize: { configurable: true } };
    prototypeAccessors$16.isCovered.get = function () {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    };
    NodeBuilder.prototype.span = function span (_from, to) {
        if (this.lineStart > -1) {
            var end = Math.min(to, this.lineEnd), last = this.nodes[this.nodes.length - 1];
            if (last instanceof HeightMapText)
                { last.length += end - this.pos; }
            else if (end > this.pos || !this.isCovered)
                { this.nodes.push(new HeightMapText(end - this.pos, -1)); }
            this.writtenTo = end;
            if (to > end) {
                this.nodes.push(null);
                this.writtenTo++;
                this.lineStart = -1;
            }
        }
        this.pos = to;
    };
    NodeBuilder.prototype.point = function point (from, to, deco) {
        if (from < to || deco.heightRelevant) {
            var height = deco.widget ? Math.max(0, deco.widget.estimatedHeight) : 0;
            var len = to - from;
            if (deco.block) {
                this.addBlock(new HeightMapBlock(len, height, deco.type));
            }
            else if (len || height >= relevantWidgetHeight) {
                this.addLineDeco(height, len);
            }
        }
        else if (to > from) {
            this.span(from, to);
        }
        if (this.lineEnd > -1 && this.lineEnd < this.pos)
            { this.lineEnd = this.oracle.doc.lineAt(this.pos).to; }
    };
    NodeBuilder.prototype.enterLine = function enterLine () {
        if (this.lineStart > -1)
            { return; }
        var ref = this.oracle.doc.lineAt(this.pos);
            var from = ref.from;
            var to = ref.to;
        this.lineStart = from;
        this.lineEnd = to;
        if (this.writtenTo < from) {
            if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null)
                { this.nodes.push(this.blankContent(this.writtenTo, from - 1)); }
            this.nodes.push(null);
        }
        if (this.pos > from)
            { this.nodes.push(new HeightMapText(this.pos - from, -1)); }
        this.writtenTo = this.pos;
    };
    NodeBuilder.prototype.blankContent = function blankContent (from, to) {
        var gap = new HeightMapGap(to - from);
        if (this.oracle.doc.lineAt(from).to == to)
            { gap.flags |= 4 /* SingleLine */; }
        return gap;
    };
    NodeBuilder.prototype.ensureLine = function ensureLine () {
        this.enterLine();
        var last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (last instanceof HeightMapText)
            { return last; }
        var line = new HeightMapText(0, -1);
        this.nodes.push(line);
        return line;
    };
    NodeBuilder.prototype.addBlock = function addBlock (block) {
        this.enterLine();
        if (block.type == BlockType.WidgetAfter && !this.isCovered)
            { this.ensureLine(); }
        this.nodes.push(block);
        this.writtenTo = this.pos = this.pos + block.length;
        if (block.type != BlockType.WidgetBefore)
            { this.covering = block; }
    };
    NodeBuilder.prototype.addLineDeco = function addLineDeco (height, length) {
        var line = this.ensureLine();
        line.length += length;
        line.collapsed += length;
        line.widgetHeight = Math.max(line.widgetHeight, height);
        this.writtenTo = this.pos = this.pos + length;
    };
    NodeBuilder.prototype.finish = function finish (from) {
        var last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered)
            { this.nodes.push(new HeightMapText(0, -1)); }
        else if (this.writtenTo < this.pos || last == null)
            { this.nodes.push(this.blankContent(this.writtenTo, this.pos)); }
        var pos = from;
        for (var i = 0, list = this.nodes; i < list.length; i += 1) {
            var node = list[i];

                if (node instanceof HeightMapText)
                { node.updateHeight(this.oracle, pos); }
            pos += node ? node.length : 1;
        }
        return this.nodes;
    };
    // Always called with a region that on both sides either stretches
    // to a line break or the end of the document.
    // The returned array uses null to indicate line breaks, but never
    // starts or ends in a line break, or has multiple line breaks next
    // to each other.
    NodeBuilder.build = function build (oracle, decorations, from, to) {
        var builder = new NodeBuilder(from, oracle);
        RangeSet.spans(decorations, from, to, builder);
        return builder.finish(from);
    };
    prototypeAccessors$16.minPointSize.get = function () { return 0; };

    Object.defineProperties( NodeBuilder.prototype, prototypeAccessors$16 );
    function heightRelevantDecoChanges(a, b, diff) {
        var comp = new DecorationComparator();
        RangeSet.compare(a, b, diff, comp);
        return comp.changes;
    }
    var DecorationComparator = function DecorationComparator() {
        this.changes = [];
    };

    var prototypeAccessors$17 = { minPointSize: { configurable: true } };
    DecorationComparator.prototype.compareRange = function compareRange () { };
    DecorationComparator.prototype.comparePoint = function comparePoint (from, to, a, b) {
        if (from < to || a && a.heightRelevant || b && b.heightRelevant)
            { addRange(from, to, this.changes); }
    };
    prototypeAccessors$17.minPointSize.get = function () { return 0; };

    Object.defineProperties( DecorationComparator.prototype, prototypeAccessors$17 );

    var none$3 = [];
    var clickAddsSelectionRange = Facet.define();
    var dragMovesSelection = Facet.define();
    var mouseSelectionStyle = Facet.define();
    var exceptionSink = Facet.define();
    var updateListener = Facet.define();
    /// Log or report an unhandled exception in client code. Should
    /// probably only be used by extension code that allows client code to
    /// provide functions, and calls those functions in a context where an
    /// exception can't be propagated to calling code in a reasonable way
    /// (for example when in an event handler).
    ///
    /// Either calls a handler registered with
    /// [`EditorView.exceptionSink`](#view.EditorView^exceptionSink),
    /// `window.onerror`, if defined, or `console.error` (in which case
    /// it'll pass `context`, when given, as first argument).
    function logException(state, exception, context) {
        var handler = state.facet(exceptionSink);
        if (handler.length)
            { handler[0](exception); }
        else if (window.onerror)
            { window.onerror(String(exception), context, undefined, undefined, exception); }
        else if (context)
            { console.error(context + ":", exception); }
        else
            { console.error(exception); }
    }
    var editable = Facet.define({ combine: function (values) { return values.length ? values[0] : true; } });
    /// Plugin fields are a mechanism for allowing plugins to provide
    /// values that can be retrieved through the
    /// [`pluginField`](#view.EditorView.pluginField) view method.
    var PluginField = function PluginField () {};

    PluginField.define = function define () { return new PluginField(); };
    /// Plugins can provide additional scroll margins (space around the
    /// sides of the scrolling element that should be considered
    /// invisible) through this field. This can be useful when the
    /// plugin introduces elements that cover part of that element (for
    /// example a horizontally fixed gutter).
    PluginField.scrollMargins = PluginField.define();
    var nextPluginID = 0;
    var viewPlugin = Facet.define();
    /// View plugins associate stateful values with a view. They can
    /// influence the way the content is drawn, and are notified of things
    /// that happen in the view.
    var ViewPlugin = function ViewPlugin(
    /// @internal
    id, 
    /// @internal
    create, 
    /// @internal
    fields) {
        this.id = id;
        this.create = create;
        this.fields = fields;
        this.extension = viewPlugin.of(this);
    };
    /// Define a plugin from a constructor function that creates the
    /// plugin's value, given an editor view.
    ViewPlugin.define = function define (create) {
        return new ViewPlugin(nextPluginID++, create, []);
    };
    /// Create a plugin for a class whose constructor takes a single
    /// editor view as argument.
    ViewPlugin.fromClass = function fromClass (cls) {
        return ViewPlugin.define(function (view) { return new cls(view); });
    };
    /// Create a new version of this plugin that provides a given
    /// [plugin field](#view.PluginField).
    ViewPlugin.prototype.provide = function provide (field, get) {
        return new ViewPlugin(this.id, this.create, this.fields.concat({ field: field, get: get }));
    };
    ViewPlugin.prototype.decorations = function decorations (get) {
        return this.provide(pluginDecorations, get || (function (value) { return value.decorations; }));
    };
    /// Convenience method that extends a view plugin to automatically
    /// register [DOM event
    /// handlers](#view.EditorView^domEventHandlers).
    ViewPlugin.prototype.eventHandlers = function eventHandlers (handlers) {
        return this.provide(domEventHandlers, function (value) { return ({ plugin: value, handlers: handlers }); });
    };
    // FIXME somehow ensure that no replacing decorations end up in here
    var pluginDecorations = PluginField.define();
    var domEventHandlers = PluginField.define();
    var PluginInstance = function PluginInstance(value, spec) {
        this.value = value;
        this.spec = spec;
        this.updateFunc = this.value.update ? this.value.update.bind(this.value) : function () { return undefined; };
    };
    PluginInstance.create = function create (spec, view) {
        var value;
        try {
            value = spec.create(view);
        }
        catch (e) {
            logException(view.state, e, "CodeMirror plugin crashed");
            return PluginInstance.dummy;
        }
        return new PluginInstance(value, spec);
    };
    PluginInstance.prototype.takeField = function takeField (type, target) {
        for (var i = 0, list = this.spec.fields; i < list.length; i += 1)
            {
                var ref = list[i];
                var field = ref.field;
                var get = ref.get;

                if (field == type)
                { target.push(get(this.value));
            } }
    };
    PluginInstance.prototype.update = function update (update$1) {
        try {
            this.updateFunc(update$1);
            return this;
        }
        catch (e) {
            logException(update$1.state, e, "CodeMirror plugin crashed");
            if (this.value.destroy)
                { try {
                    this.value.destroy();
                }
                catch (_) { } }
            return PluginInstance.dummy;
        }
    };
    PluginInstance.prototype.destroy = function destroy (view) {
        try {
            if (this.value.destroy)
                { this.value.destroy(); }
        }
        catch (e) {
            logException(view.state, e, "CodeMirror plugin crashed");
        }
    };
    PluginInstance.dummy = new PluginInstance({}, ViewPlugin.define(function () { return ({}); }));
    var editorAttributes = Facet.define({
        combine: function (values) { return values.reduce(function (a, b) { return combineAttrs(b, a); }, {}); }
    });
    var contentAttributes = Facet.define({
        combine: function (values) { return values.reduce(function (a, b) { return combineAttrs(b, a); }, {}); }
    });
    // Provide decorations
    var decorations = Facet.define();
    var styleModule = Facet.define();
    var ChangedRange = function ChangedRange(fromA, toA, fromB, toB) {
        this.fromA = fromA;
        this.toA = toA;
        this.fromB = fromB;
        this.toB = toB;
    };
    ChangedRange.prototype.join = function join (other) {
        return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
    };
    ChangedRange.prototype.addToSet = function addToSet (set) {
        var i = set.length, me = this;
        for (; i > 0; i--) {
            var range = set[i - 1];
            if (range.fromA > me.toA)
                { continue; }
            if (range.toA < me.fromA)
                { break; }
            me = me.join(range);
            set.splice(i - 1, 1);
        }
        set.splice(i, 0, me);
        return set;
    };
    ChangedRange.extendWithRanges = function extendWithRanges (diff, ranges) {
        if (ranges.length == 0)
            { return diff; }
        var result = [];
        for (var dI = 0, rI = 0, posA = 0, posB = 0;; dI++) {
            var next = dI == diff.length ? null : diff[dI], off = posA - posB;
            var end = next ? next.fromB : 1e9;
            while (rI < ranges.length && ranges[rI] < end) {
                var from = ranges[rI], to = ranges[rI + 1];
                var fromB = Math.max(posB, from), toB = Math.min(end, to);
                if (fromB <= toB)
                    { new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result); }
                if (to > end)
                    { break; }
                else
                    { rI += 2; }
            }
            if (!next)
                { return result; }
            new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
            posA = next.toA;
            posB = next.toB;
        }
    };
    /// View [plugins](#view.ViewPlugin) are given instances of this
    /// class, which describe what happened, whenever the view is updated.
    var ViewUpdate = function ViewUpdate(
    /// The editor view that the update is associated with.
    view, 
    /// The new editor state.
    state, 
    /// The transactions involved in the update. May be empty.
    transactions) {
        if ( transactions === void 0 ) transactions = none$3;

        this.view = view;
        this.state = state;
        this.transactions = transactions;
        /// @internal
        this.flags = 0;
        this.prevState = view.state;
        this.changes = ChangeSet.empty(this.prevState.doc.length);
        for (var i = 0, list = transactions; i < list.length; i += 1)
            {
            var tr = list[i];

            this.changes = this.changes.compose(tr.changes);
        }
        var changedRanges = [];
        this.changes.iterChangedRanges(function (fromA, toA, fromB, toB) { return changedRanges.push(new ChangedRange(fromA, toA, fromB, toB)); });
        this.changedRanges = changedRanges;
        var focus = view.hasFocus;
        if (focus != view.inputState.notifiedFocused) {
            view.inputState.notifiedFocused = focus;
            this.flags != 1 /* Focus */;
        }
        if (this.docChanged)
            { this.flags |= 2 /* Height */; }
    };

    var prototypeAccessors$18 = { viewportChanged: { configurable: true },heightChanged: { configurable: true },focusChanged: { configurable: true },docChanged: { configurable: true },selectionSet: { configurable: true },empty: { configurable: true } };
    /// Tells you whether the viewport changed in this update.
    prototypeAccessors$18.viewportChanged.get = function () {
        return (this.flags & 4 /* Viewport */) > 0;
    };
    /// Indicates whether the line height in the editor changed in this update.
    prototypeAccessors$18.heightChanged.get = function () {
        return (this.flags & 2 /* Height */) > 0;
    };
    /// True when this update indicates a focus change.
    prototypeAccessors$18.focusChanged.get = function () {
        return (this.flags & 1 /* Focus */) > 0;
    };
    /// Whether the document changed in this update.
    prototypeAccessors$18.docChanged.get = function () {
        return this.transactions.some(function (tr) { return tr.docChanged; });
    };
    /// Whether the selection was explicitly set in this update.
    prototypeAccessors$18.selectionSet.get = function () {
        return this.transactions.some(function (tr) { return tr.selection; });
    };
    /// @internal
    prototypeAccessors$18.empty.get = function () { return this.flags == 0 && this.transactions.length == 0; };

    Object.defineProperties( ViewUpdate.prototype, prototypeAccessors$18 );

    function visiblePixelRange(dom, paddingTop) {
        var rect = dom.getBoundingClientRect();
        var left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
        var top = Math.max(0, rect.top), bottom = Math.min(innerHeight, rect.bottom);
        for (var parent = dom.parentNode; parent;) { // (Cast to any because TypeScript is useless with Node types)
            if (parent.nodeType == 1) {
                if ((parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) &&
                    window.getComputedStyle(parent).overflow != "visible") {
                    var parentRect = parent.getBoundingClientRect();
                    left = Math.max(left, parentRect.left);
                    right = Math.min(right, parentRect.right);
                    top = Math.max(top, parentRect.top);
                    bottom = Math.min(bottom, parentRect.bottom);
                }
                parent = parent.parentNode;
            }
            else if (parent.nodeType == 11) { // Shadow root
                parent = parent.host;
            }
            else {
                break;
            }
        }
        return { left: left - rect.left, right: right - rect.left,
            top: top - (rect.top + paddingTop), bottom: bottom - (rect.top + paddingTop) };
    }
    // Line gaps are placeholder widgets used to hide pieces of overlong
    // lines within the viewport, as a kludge to keep the editor
    // responsive when a ridiculously long line is loaded into it.
    var LineGap = function LineGap(from, to, size) {
        this.from = from;
        this.to = to;
        this.size = size;
    };
    LineGap.same = function same (a, b) {
        if (a.length != b.length)
            { return false; }
        for (var i = 0; i < a.length; i++) {
            var gA = a[i], gB = b[i];
            if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)
                { return false; }
        }
        return true;
    };
    LineGap.prototype.draw = function draw (wrapping) {
        return Decoration.replace({ widget: new LineGapWidget({ size: this.size, vertical: wrapping }) }).range(this.from, this.to);
    };
    var LineGapWidget = /*@__PURE__*/(function (WidgetType) {
        function LineGapWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) LineGapWidget.__proto__ = WidgetType;
        LineGapWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        LineGapWidget.prototype.constructor = LineGapWidget;

        var prototypeAccessors$19 = { estimatedHeight: { configurable: true } };

        LineGapWidget.prototype.toDOM = function toDOM () {
            var elt = document.createElement("div");
            if (this.value.vertical) {
                elt.style.height = this.value.size + "px";
            }
            else {
                elt.style.width = this.value.size + "px";
                elt.style.height = "2px";
                elt.style.display = "inline-block";
            }
            return elt;
        };
        LineGapWidget.prototype.eq = function eq (other) { return this.value.size == other.size && this.value.vertical == other.vertical; };
        prototypeAccessors$19.estimatedHeight.get = function () { return this.value.vertical ? this.value.size : -1; };

        Object.defineProperties( LineGapWidget.prototype, prototypeAccessors$19 );

        return LineGapWidget;
    }(WidgetType));
    var ViewState = function ViewState(state) {
        this.state = state;
        // These are contentDOM-local coordinates
        this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.heightOracle = new HeightOracle;
        this.heightMap = HeightMap.empty();
        this.scrollTo = null;
        // Briefly set to true when printing, to disable viewport limiting
        this.printing = false;
        this.visibleRanges = [];
        // Cursor 'assoc' is only significant when the cursor is on a line
        // wrap point, where it must stick to the character that it is
        // associated with. Since browsers don't provide a reasonable
        // interface to set or query this, when a selection is set that
        // might cause this to be signficant, this flag is set. The next
        // measure phase will check whether the cursor is on a line-wrapping
        // boundary and, if so, reset it to make sure it is positioned in
        // the right place.
        this.mustEnforceCursorAssoc = false;
        this.heightMap = this.heightMap.applyChanges(state.facet(decorations), Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
        this.viewport = this.getViewport(0, null);
        this.lineGaps = this.ensureLineGaps([]);
        this.lineGapDeco = Decoration.set(this.lineGaps.map(function (gap) { return gap.draw(false); }));
        this.computeVisibleRanges();
    };
    ViewState.prototype.update = function update (update$1, scrollTo) {
            if ( scrollTo === void 0 ) scrollTo = null;

        var prev = this.state;
        this.state = update$1.state;
        var newDeco = this.state.facet(decorations);
        var contentChanges = update$1.changedRanges;
        var heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(update$1.prevState.facet(decorations), newDeco, update$1 ? update$1.changes : ChangeSet.empty(this.state.doc.length)));
        var prevHeight = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(newDeco, prev.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
        if (this.heightMap.height != prevHeight)
            { update$1.flags |= 2 /* Height */; }
        var viewport = heightChanges.length ? this.mapViewport(this.viewport, update$1.changes) : this.viewport;
        if (scrollTo && (scrollTo.head < viewport.from || scrollTo.head > viewport.to) || !this.viewportIsAppropriate(viewport))
            { viewport = this.getViewport(0, scrollTo); }
        if (!viewport.eq(this.viewport)) {
            this.viewport = viewport;
            update$1.flags |= 4 /* Viewport */;
        }
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            { update$1.flags |= this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update$1.changes))); }
        this.computeVisibleRanges();
        if (scrollTo)
            { this.scrollTo = scrollTo; }
        if (!this.mustEnforceCursorAssoc && update$1.selectionSet && update$1.view.lineWrapping &&
            update$1.state.selection.primary.empty && update$1.state.selection.primary.assoc)
            { this.mustEnforceCursorAssoc = true; }
    };
    ViewState.prototype.measure = function measure (docView, repeated) {
        var dom = docView.dom, whiteSpace = "", direction = Direction.LTR;
        if (!repeated) {
            // Vertical padding
            var style = window.getComputedStyle(dom);
            whiteSpace = style.whiteSpace, direction = (style.direction == "rtl" ? Direction.RTL : Direction.LTR);
            this.paddingTop = parseInt(style.paddingTop) || 0;
            this.paddingBottom = parseInt(style.paddingBottom) || 0;
        }
        // Pixel viewport
        var pixelViewport = this.printing ? { top: -1e8, bottom: 1e8, left: -1e8, right: 1e8 } : visiblePixelRange(dom, this.paddingTop);
        var dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pixelViewport;
        if (this.pixelViewport.bottom <= this.pixelViewport.top ||
            this.pixelViewport.right <= this.pixelViewport.left)
            { return 0; }
        var lineHeights = docView.measureVisibleLineHeights();
        var refresh = false, bias = 0;
        if (!repeated) {
            if (this.heightOracle.mustRefresh(lineHeights, whiteSpace, direction)) {
                var ref = docView.measureTextSize();
                    var lineHeight = ref.lineHeight;
                    var charWidth = ref.charWidth;
                refresh = this.heightOracle.refresh(whiteSpace, direction, lineHeight, charWidth, (docView.dom).clientWidth / charWidth, lineHeights);
                if (refresh)
                    { docView.minWidth = 0; }
            }
            if (dTop > 0 && dBottom > 0)
                { bias = Math.max(dTop, dBottom); }
            else if (dTop < 0 && dBottom < 0)
                { bias = Math.min(dTop, dBottom); }
        }
        this.heightOracle.heightChanged = false;
        this.heightMap = this.heightMap.updateHeight(this.heightOracle, 0, refresh, new MeasuredHeights(this.viewport.from, lineHeights));
        var result = this.heightOracle.heightChanged ? 2 /* Height */ : 0;
        if (!this.viewportIsAppropriate(this.viewport, bias) ||
            this.scrollTo && (this.scrollTo.head < this.viewport.from || this.scrollTo.head > this.viewport.to)) {
            this.viewport = this.getViewport(bias, this.scrollTo);
            result |= 4 /* Viewport */;
        }
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            { result |= this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps)); }
        this.computeVisibleRanges();
        if (this.mustEnforceCursorAssoc) {
            this.mustEnforceCursorAssoc = false;
            // This is done in the read stage, because moving the selection
            // to a line end is going to trigger a layout anyway, so it
            // can't be a pure write. It should be rare that it does any
            // writing.
            docView.enforceCursorAssoc();
        }
        return result;
    };
    ViewState.prototype.getViewport = function getViewport (bias, scrollTo) {
        // This will divide VP.Margin between the top and the
        // bottom, depending on the bias (the change in viewport position
        // since the last update). It'll hold a number between 0 and 1
        var marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1000 /* Margin */ / 2));
        var map = this.heightMap, doc = this.state.doc;
            var ref = this.pixelViewport;
            var top = ref.top;
            var bottom = ref.bottom;
        var viewport = new Viewport(map.lineAt(top - marginTop * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(bottom + (1 - marginTop) * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).to);
        // If scrollTo is given, make sure the viewport includes that position
        if (scrollTo) {
            if (scrollTo.head < viewport.from) {
                var ref$1 = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0);
                    var newTop = ref$1.top;
                viewport = new Viewport(map.lineAt(newTop - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newTop + (bottom - top) + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
            else if (scrollTo.head > viewport.to) {
                var ref$2 = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0);
                    var newBottom = ref$2.bottom;
                viewport = new Viewport(map.lineAt(newBottom - (bottom - top) - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newBottom + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
        }
        return viewport;
    };
    ViewState.prototype.mapViewport = function mapViewport (viewport, changes) {
        var from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
        return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
    };
    // Checks if a given viewport covers the visible part of the
    // document and not too much beyond that.
    ViewState.prototype.viewportIsAppropriate = function viewportIsAppropriate (ref, bias) {
            var from = ref.from;
            var to = ref.to;
            if ( bias === void 0 ) bias = 0;

        var ref$1 = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0);
            var top = ref$1.top;
        var ref$2 = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0);
            var bottom = ref$2.bottom;
        return (from == 0 || top <= this.pixelViewport.top - Math.max(10 /* MinCoverMargin */, Math.min(-bias, 250 /* MaxCoverMargin */))) &&
            (to == this.state.doc.length ||
                bottom >= this.pixelViewport.bottom + Math.max(10 /* MinCoverMargin */, Math.min(bias, 250 /* MaxCoverMargin */))) &&
            (top > this.pixelViewport.top - 2 * 1000 /* Margin */ && bottom < this.pixelViewport.bottom + 2 * 1000 /* Margin */);
    };
    ViewState.prototype.mapLineGaps = function mapLineGaps (gaps, changes) {
        if (!gaps.length || changes.empty)
            { return gaps; }
        var mapped = [];
        for (var i = 0, list = gaps; i < list.length; i += 1)
            {
                var gap = list[i];

                if (!changes.touchesRange(gap.from, gap.to))
                { mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
            } }
        return mapped;
    };
    // Computes positions in the viewport where the start or end of a
    // line should be hidden, trying to reuse existing line gaps when
    // appropriate to avoid unneccesary redraws.
    // Uses crude character-counting for the positioning and sizing,
    // since actual DOM coordinates aren't always available and
    // predictable. Relies on generous margins (see LG.Margin) to hide
    // the artifacts this might produce from the user.
    ViewState.prototype.ensureLineGaps = function ensureLineGaps (current) {
            var this$1 = this;

        var gaps = [];
        // This won't work at all in predominantly right-to-left text.
        if (this.heightOracle.direction != Direction.LTR)
            { return gaps; }
        this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, function (line) {
            if (line.length < 10000 /* Margin */)
                { return; }
            var structure = lineStructure(line.from, line.to, this$1.state);
            if (structure.total < 10000 /* Margin */)
                { return; }
            var viewFrom, viewTo;
            if (this$1.heightOracle.lineWrapping) {
                if (line.from != this$1.viewport.from)
                    { viewFrom = line.from; }
                else
                    { viewFrom = findPosition(structure, (this$1.pixelViewport.top - line.top) / line.height); }
                if (line.to != this$1.viewport.to)
                    { viewTo = line.to; }
                else
                    { viewTo = findPosition(structure, (this$1.pixelViewport.bottom - line.top) / line.height); }
            }
            else {
                var totalWidth = structure.total * this$1.heightOracle.charWidth;
                viewFrom = findPosition(structure, this$1.pixelViewport.left / totalWidth);
                viewTo = findPosition(structure, this$1.pixelViewport.right / totalWidth);
            }
            var sel = this$1.state.selection.primary;
            // Make sure the gap doesn't cover a selection end
            if (sel.from <= viewFrom && sel.to >= line.from)
                { viewFrom = sel.from; }
            if (sel.from <= line.to && sel.to >= viewTo)
                { viewTo = sel.to; }
            var gapTo = viewFrom - 10000 /* Margin */, gapFrom = viewTo + 10000 /* Margin */;
            if (gapTo > line.from + 5000 /* HalfMargin */)
                { gaps.push(find(current, function (gap) { return gap.from == line.from && gap.to > gapTo - 5000 /* HalfMargin */ && gap.to < gapTo + 5000; } /* HalfMargin */) ||
                    new LineGap(line.from, gapTo, this$1.gapSize(line, gapTo, true, structure))); }
            if (gapFrom < line.to - 5000 /* HalfMargin */)
                { gaps.push(find(current, function (gap) { return gap.to == line.to && gap.from > gapFrom - 5000 /* HalfMargin */ &&
                    gap.from < gapFrom + 5000; } /* HalfMargin */) ||
                    new LineGap(gapFrom, line.to, this$1.gapSize(line, gapFrom, false, structure))); }
        });
        return gaps;
    };
    ViewState.prototype.gapSize = function gapSize (line, pos, start, structure) {
        if (this.heightOracle.lineWrapping) {
            var height = line.height * findFraction(structure, pos);
            return start ? height : line.height - height;
        }
        else {
            var ratio = findFraction(structure, pos);
            return structure.total * this.heightOracle.charWidth * (start ? ratio : 1 - ratio);
        }
    };
    ViewState.prototype.updateLineGaps = function updateLineGaps (gaps) {
            var this$1 = this;

        if (!LineGap.same(gaps, this.lineGaps)) {
            this.lineGaps = gaps;
            this.lineGapDeco = Decoration.set(gaps.map(function (gap) { return gap.draw(this$1.heightOracle.lineWrapping); }));
            return 16 /* LineGaps */;
        }
        return 0;
    };
    ViewState.prototype.computeVisibleRanges = function computeVisibleRanges () {
        var deco = this.state.facet(decorations);
        if (this.lineGaps.length)
            { deco = deco.concat(this.lineGapDeco); }
        var ranges = [];
        RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
            span: function span(from, to) { ranges.push({ from: from, to: to }); },
            point: function point() { },
            minPointSize: 20
        });
        this.visibleRanges = ranges;
    };
    ViewState.prototype.lineAt = function lineAt (pos, editorTop) {
        return this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, editorTop + this.paddingTop, 0);
    };
    ViewState.prototype.lineAtHeight = function lineAtHeight (height, editorTop) {
        return this.heightMap.lineAt(height, QueryType.ByHeight, this.state.doc, editorTop + this.paddingTop, 0);
    };
    ViewState.prototype.blockAtHeight = function blockAtHeight (height, editorTop) {
        return this.heightMap.blockAt(height, this.state.doc, editorTop + this.paddingTop, 0);
    };
    ViewState.prototype.forEachLine = function forEachLine (from, to, f, editorTop) {
        return this.heightMap.forEachLine(from, to, this.state.doc, editorTop + this.paddingTop, 0, f);
    };
    /// Indicates the range of the document that is in the visible
    /// viewport.
    var Viewport = function Viewport(from, to) {
        this.from = from;
        this.to = to;
    };
    Viewport.prototype.eq = function eq (b) { return this.from == b.from && this.to == b.to; };
    function lineStructure(from, to, state) {
        var ranges = [], pos = from, total = 0;
        RangeSet.spans(state.facet(decorations), from, to, {
            span: function span() { },
            point: function point(from, to) {
                if (from > pos) {
                    ranges.push({ from: pos, to: from });
                    total += from - pos;
                }
                pos = to;
            },
            minPointSize: 20 // We're only interested in collapsed ranges of a significant size
        });
        if (pos < to) {
            ranges.push({ from: pos, to: to });
            total += to - pos;
        }
        return { total: total, ranges: ranges };
    }
    function findPosition(ref, ratio) {
        var total = ref.total;
        var ranges = ref.ranges;

        if (ratio <= 0)
            { return ranges[0].from; }
        if (ratio >= 1)
            { return ranges[ranges.length - 1].to; }
        var dist = Math.floor(total * ratio);
        for (var i = 0;; i++) {
            var ref$1 = ranges[i];
            var from = ref$1.from;
            var to = ref$1.to;
            var size = to - from;
            if (dist <= size)
                { return from + dist; }
            dist -= size;
        }
    }
    function findFraction(structure, pos) {
        var counted = 0;
        for (var i = 0, list = structure.ranges; i < list.length; i += 1) {
            var ref = list[i];
            var from = ref.from;
            var to = ref.to;

            if (pos <= to) {
                counted += pos - from;
                break;
            }
            counted += to - from;
        }
        return counted / structure.total;
    }
    function find(array, f) {
        for (var i = 0, list = array; i < list.length; i += 1)
            {
            var val = list[i];

            if (f(val))
                { return val;
        } }
        return undefined;
    }

    var none$4 = [];
    var DocView = /*@__PURE__*/(function (ContentView) {
        function DocView(view) {
            ContentView.call(this);
            this.view = view;
            this.viewports = none$4;
            this.compositionDeco = Decoration.none;
            this.decorations = [];
            // Track a minimum width for the editor. When measuring sizes in
            // checkLayout, this is updated to point at the width of a given
            // element and its extent in the document. When a change happens in
            // that range, these are reset. That way, once we've seen a
            // line/element of a given length, we keep the editor wide enough to
            // fit at least that element, until it is changed, at which point we
            // forget it again.
            this.minWidth = 0;
            this.minWidthFrom = 0;
            this.minWidthTo = 0;
            // Track whether the DOM selection was set in a lossy way, so that
            // we don't mess it up when reading it back it
            this.impreciseAnchor = null;
            this.impreciseHead = null;
            this.setDOM(view.contentDOM);
            this.children = [new LineView];
            this.children[0].setParent(this);
            this.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], this.updateDeco(), 0);
        }

        if ( ContentView ) DocView.__proto__ = ContentView;
        DocView.prototype = Object.create( ContentView && ContentView.prototype );
        DocView.prototype.constructor = DocView;

        var prototypeAccessors$20 = { root: { configurable: true },editorView: { configurable: true },length: { configurable: true } };
        prototypeAccessors$20.root.get = function () { return this.view.root; };
        prototypeAccessors$20.editorView.get = function () { return this.view; };
        prototypeAccessors$20.length.get = function () { return this.view.state.doc.length; };
        // Update the document view to a given state. scrollIntoView can be
        // used as a hint to compute a new viewport that includes that
        // position, if we know the editor is going to scroll that position
        // into view.
        DocView.prototype.update = function update (update$1) {
            var this$1 = this;

            var _a;
            var changedRanges = update$1.changedRanges;
            if (this.minWidth > 0 && changedRanges.length) {
                if (!changedRanges.every(function (ref) {
                    var fromA = ref.fromA;
                    var toA = ref.toA;

                    return toA < this$1.minWidthFrom || fromA > this$1.minWidthTo;
                })) {
                    this.minWidth = 0;
                }
                else {
                    this.minWidthFrom = update$1.changes.mapPos(this.minWidthFrom, 1);
                    this.minWidthTo = update$1.changes.mapPos(this.minWidthTo, 1);
                }
            }
            if (!((_a = this.view.inputState) === null || _a === void 0 ? void 0 : _a.composing))
                { this.compositionDeco = Decoration.none; }
            else if (update$1.transactions.length)
                { this.compositionDeco = computeCompositionDeco(this.view, update$1.changes); }
            // When the DOM nodes around the selection are moved to another
            // parent, Chrome sometimes reports a different selection through
            // getSelection than the one that it actually shows to the user.
            // This forces a selection update when lines are joined to work
            // around that. Issue #54
            var forceSelection = (browser.ie || browser.chrome) && !this.compositionDeco.size && update$1 &&
                update$1.state.doc.lines != update$1.prevState.doc.lines;
            var prevDeco = this.decorations, deco = this.updateDeco();
            var decoDiff = findChangedDeco(prevDeco, deco, update$1.changes);
            changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);
            var pointerSel = update$1.transactions.some(function (tr) { return tr.annotation(Transaction.userEvent) == "pointerselection"; });
            if (this.dirty == 0 /* Not */ && changedRanges.length == 0 &&
                !(update$1.flags & (4 /* Viewport */ | 16 /* LineGaps */)) &&
                update$1.state.selection.primary.from >= this.view.viewport.from &&
                update$1.state.selection.primary.to <= this.view.viewport.to) {
                this.updateSelection(forceSelection, pointerSel);
                return false;
            }
            else {
                this.updateInner(changedRanges, deco, update$1.prevState.doc.length, forceSelection, pointerSel);
                return true;
            }
        };
        // Used both by update and checkLayout do perform the actual DOM
        // update
        DocView.prototype.updateInner = function updateInner (changes, deco, oldLength, forceSelection, pointerSel) {
            var this$1 = this;
            if ( forceSelection === void 0 ) forceSelection = false;
            if ( pointerSel === void 0 ) pointerSel = false;

            this.updateChildren(changes, deco, oldLength);
            this.view.observer.ignore(function () {
                // Lock the height during redrawing, since Chrome sometimes
                // messes with the scroll position during DOM mutation (though
                // no relayout is triggered and I cannot imagine how it can
                // recompute the scroll position without a layout)
                this$1.dom.style.height = this$1.view.viewState.heightMap.height + "px";
                this$1.dom.style.minWidth = this$1.minWidth ? this$1.minWidth + "px" : "";
                var selContext = browser.chrome && !forceSelection ? selectionContext(this$1.view.root) : null;
                this$1.sync();
                this$1.dirty = 0 /* Not */;
                // Chrome will sometimes, when DOM mutations occur directly
                // around the selection, get confused and report a different
                // selection from the one it displays (issue #218). This tries
                // to detect that situation.
                if (selContext && needChromeSelectionReset(selContext, this$1.view.root))
                    { forceSelection = true; }
                this$1.updateSelection(forceSelection, pointerSel);
                this$1.dom.style.height = "";
            });
        };
        DocView.prototype.updateChildren = function updateChildren (changes, deco, oldLength) {
            var cursor = this.childCursor(oldLength);
            for (var i = changes.length - 1;; i--) {
                var next = i >= 0 ? changes[i] : null;
                if (!next)
                    { break; }
                var fromA = next.fromA;
                var toA = next.toA;
                var fromB = next.fromB;
                var toB = next.toB;
                var ref = ContentBuilder.build(this.view.state.doc, fromB, toB, deco);
                var content = ref.content;
                var breakAtStart = ref.breakAtStart;
                var ref$1 = cursor.findPos(toA, 1);
                var toI = ref$1.i;
                var toOff = ref$1.off;
                var ref$2 = cursor.findPos(fromA, -1);
                var fromI = ref$2.i;
                var fromOff = ref$2.off;
                this.replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart);
            }
        };
        DocView.prototype.replaceRange = function replaceRange (fromI, fromOff, toI, toOff, content, breakAtStart) {
            var before = this.children[fromI], last = content.length ? content[content.length - 1] : null;
            var breakAtEnd = last ? last.breakAfter : breakAtStart;
            // Change within a single line
            if (fromI == toI && !breakAtStart && !breakAtEnd && content.length < 2 &&
                before.merge(fromOff, toOff, content.length ? last : null, fromOff == 0))
                { return; }
            var after = this.children[toI];
            // Make sure the end of the line after the update is preserved in `after`
            if (toOff < after.length || after.children.length && after.children[after.children.length - 1].length == 0) {
                // If we're splitting a line, separate part of the start line to
                // avoid that being mangled when updating the start line.
                if (fromI == toI) {
                    after = after.split(toOff);
                    toOff = 0;
                }
                // If the element after the replacement should be merged with
                // the last replacing element, update `content`
                if (!breakAtEnd && last && after.merge(0, toOff, last, true)) {
                    content[content.length - 1] = after;
                }
                else {
                    // Remove the start of the after element, if necessary, and
                    // add it to `content`.
                    if (toOff || after.children.length && after.children[0].length == 0)
                        { after.merge(0, toOff, null, false); }
                    content.push(after);
                }
            }
            else if (after.breakAfter) {
                // The element at `toI` is entirely covered by this range.
                // Preserve its line break, if any.
                if (last)
                    { last.breakAfter = 1; }
                else
                    { breakAtStart = 1; }
            }
            // Since we've handled the next element from the current elements
            // now, make sure `toI` points after that.
            toI++;
            before.breakAfter = breakAtStart;
            if (fromOff > 0) {
                if (!breakAtStart && content.length && before.merge(fromOff, before.length, content[0], false)) {
                    before.breakAfter = content.shift().breakAfter;
                }
                else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
                    before.merge(fromOff, before.length, null, false);
                }
                fromI++;
            }
            // Try to merge widgets on the boundaries of the replacement
            while (fromI < toI && content.length) {
                if (this.children[toI - 1].match(content[content.length - 1]))
                    { toI--, content.pop(); }
                else if (this.children[fromI].match(content[0]))
                    { fromI++, content.shift(); }
                else
                    { break; }
            }
            if (fromI < toI || content.length)
                { this.replaceChildren(fromI, toI, content); }
        };
        // Sync the DOM selection to this.state.selection
        DocView.prototype.updateSelection = function updateSelection (force, fromPointer) {
            if ( force === void 0 ) force = false;
            if ( fromPointer === void 0 ) fromPointer = false;

            if (!(fromPointer || this.mayControlSelection()))
                { return; }
            var primary = this.view.state.selection.primary;
            // FIXME need to handle the case where the selection falls inside a block range
            var anchor = this.domAtPos(primary.anchor);
            var head = this.domAtPos(primary.head);
            var domSel = getSelection(this.root);
            // If the selection is already here, or in an equivalent position, don't touch it
            if (force || !domSel.focusNode ||
                (browser.gecko && primary.empty && nextToUneditable(domSel.focusNode, domSel.focusOffset)) ||
                !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) ||
                !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
                this.view.observer.ignore(function () {
                    var assign;

                    if (primary.empty) {
                        // Work around https://bugzilla.mozilla.org/show_bug.cgi?id=1612076
                        if (browser.gecko) {
                            var nextTo = nextToUneditable(anchor.node, anchor.offset);
                            if (nextTo && nextTo != (1 /* Before */ | 2 /* After */)) {
                                var text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 /* Before */ ? 1 : -1);
                                if (text)
                                    { anchor = new DOMPos(text, nextTo == 1 /* Before */ ? 0 : text.nodeValue.length); }
                            }
                        }
                        domSel.collapse(anchor.node, anchor.offset);
                        if (primary.bidiLevel != null && domSel.cursorBidiLevel != null)
                            { domSel.cursorBidiLevel = primary.bidiLevel; }
                    }
                    else if (domSel.extend) {
                        // Selection.extend can be used to create an 'inverted' selection
                        // (one where the focus is before the anchor), but not all
                        // browsers support it yet.
                        domSel.collapse(anchor.node, anchor.offset);
                        domSel.extend(head.node, head.offset);
                    }
                    else {
                        // Primitive (IE) way
                        var range = document.createRange();
                        if (primary.anchor > primary.head)
                            { (assign = [head, anchor], anchor = assign[0], head = assign[1]); }
                        range.setEnd(head.node, head.offset);
                        range.setStart(anchor.node, anchor.offset);
                        domSel.removeAllRanges();
                        domSel.addRange(range);
                    }
                });
            }
            this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
            this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
        };
        DocView.prototype.enforceCursorAssoc = function enforceCursorAssoc () {
            var cursor = this.view.state.selection.primary;
            var sel = getSelection(this.root);
            if (!cursor.empty || !cursor.assoc || !sel.modify)
                { return; }
            var line = LineView.find(this, cursor.head); // FIXME provide view-line-range finding helper
            if (!line)
                { return; }
            var lineStart = line.posAtStart;
            if (cursor.head == lineStart || cursor.head == lineStart + line.length)
                { return; }
            var before = this.coordsAt(cursor.head, -1), after = this.coordsAt(cursor.head, 1);
            if (!before || !after || before.bottom > after.top)
                { return; }
            var dom = this.domAtPos(cursor.head + cursor.assoc);
            sel.collapse(dom.node, dom.offset);
            sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
        };
        DocView.prototype.mayControlSelection = function mayControlSelection () {
            return this.view.state.facet(editable) ? this.root.activeElement == this.dom : hasSelection(this.dom, getSelection(this.root));
        };
        DocView.prototype.nearest = function nearest (dom) {
            for (var cur = dom; cur;) {
                var domView = ContentView.get(cur);
                if (domView && domView.rootView == this)
                    { return domView; }
                cur = cur.parentNode;
            }
            return null;
        };
        DocView.prototype.posFromDOM = function posFromDOM (node, offset) {
            var view = this.nearest(node);
            if (!view)
                { throw new RangeError("Trying to find position for a DOM position outside of the document"); }
            return view.localPosFromDOM(node, offset) + view.posAtStart;
        };
        DocView.prototype.domAtPos = function domAtPos (pos) {
            var ref = this.childCursor().findPos(pos, -1);
            var i = ref.i;
            var off = ref.off;
            for (; i < this.children.length - 1;) {
                var child = this.children[i];
                if (off < child.length || child instanceof LineView)
                    { break; }
                i++;
                off = 0;
            }
            return this.children[i].domAtPos(off);
        };
        DocView.prototype.coordsAt = function coordsAt (pos, side) {
            for (var off = this.length, i = this.children.length - 1;; i--) {
                var child = this.children[i], start = off - child.breakAfter - child.length;
                if (pos >= start && child.type != BlockType.WidgetAfter)
                    { return child.coordsAt(pos - start, side); }
                off = start;
            }
        };
        DocView.prototype.measureVisibleLineHeights = function measureVisibleLineHeights () {
            var result = [];
            var ref = this.view.viewState.viewport;
            var from = ref.from;
            var to = ref.to;
            var minWidth = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
            for (var pos = 0, i = 0; i < this.children.length; i++) {
                var child = this.children[i], end = pos + child.length;
                if (end > to)
                    { break; }
                if (pos >= from) {
                    result.push(child.dom.getBoundingClientRect().height);
                    var width = child.dom.scrollWidth;
                    if (width > minWidth) {
                        this.minWidth = minWidth = width;
                        this.minWidthFrom = pos;
                        this.minWidthTo = end;
                    }
                }
                pos = end + child.breakAfter;
            }
            return result;
        };
        DocView.prototype.measureTextSize = function measureTextSize () {
            var this$1 = this;

            for (var i = 0, list = this.children; i < list.length; i += 1) {
                var child = list[i];

                if (child instanceof LineView) {
                    var measure = child.measureTextSize();
                    if (measure)
                        { return measure; }
                }
            }
            // If no workable line exists, force a layout of a measurable element
            var dummy = document.createElement("div"), lineHeight, charWidth;
            dummy.className = "cm-line";
            dummy.textContent = "abc def ghi jkl mno pqr stu";
            this.view.observer.ignore(function () {
                this$1.dom.appendChild(dummy);
                var rect = clientRectsFor(dummy.firstChild)[0];
                lineHeight = dummy.getBoundingClientRect().height;
                charWidth = rect ? rect.width / 27 : 7;
                dummy.remove();
            });
            return { lineHeight: lineHeight, charWidth: charWidth };
        };
        DocView.prototype.childCursor = function childCursor (pos) {
            if ( pos === void 0 ) pos = this.length;

            // Move back to start of last element when possible, so that
            // `ChildCursor.findPos` doesn't have to deal with the edge case
            // of being after the last element.
            var i = this.children.length;
            if (i)
                { pos -= this.children[--i].length; }
            return new ChildCursor(this.children, pos, i);
        };
        DocView.prototype.computeBlockGapDeco = function computeBlockGapDeco () {
            var visible = this.view.viewState.viewport, viewports = [visible];
            var ref = this.view.state.selection.primary;
            var head = ref.head;
            var anchor = ref.anchor;
            if (head < visible.from || head > visible.to) {
                var ref$1 = this.view.viewState.lineAt(head, 0);
                var from = ref$1.from;
                var to = ref$1.to;
                viewports.push(new Viewport(from, to));
            }
            if (!viewports.some(function (ref) {
                var from = ref.from;
                var to = ref.to;

                return anchor >= from && anchor <= to;
            })) {
                var ref$2 = this.view.viewState.lineAt(anchor, 0);
                var from$1 = ref$2.from;
                var to$1 = ref$2.to;
                viewports.push(new Viewport(from$1, to$1));
            }
            this.viewports = viewports.sort(function (a, b) { return a.from - b.from; });
            var deco = [];
            for (var pos = 0, i = 0;; i++) {
                var next = i == viewports.length ? null : viewports[i];
                var end = next ? next.from - 1 : this.length;
                if (end > pos) {
                    var height = this.view.viewState.lineAt(end, 0).bottom - this.view.viewState.lineAt(pos, 0).top;
                    deco.push(Decoration.replace({ widget: new BlockGapWidget(height), block: true, inclusive: true }).range(pos, end));
                }
                if (!next)
                    { break; }
                pos = next.to + 1;
            }
            return Decoration.set(deco);
        };
        DocView.prototype.updateDeco = function updateDeco () {
            return this.decorations = this.view.state.facet(decorations).concat( [this.computeBlockGapDeco()],
                [this.view.viewState.lineGapDeco],
                [this.compositionDeco],
                this.view.pluginField(pluginDecorations)
            );
        };
        DocView.prototype.scrollPosIntoView = function scrollPosIntoView (pos, side) {
            var rect = this.coordsAt(pos, side);
            if (!rect)
                { return; }
            var mLeft = 0, mRight = 0, mTop = 0, mBottom = 0;
            for (var i = 0, list = this.view.pluginField(PluginField.scrollMargins); i < list.length; i += 1)
                {
                var margins = list[i];

                if (margins) {
                    var left = margins.left;
                    var right = margins.right;
                    var top = margins.top;
                    var bottom = margins.bottom;
                    if (left != null)
                        { mLeft = Math.max(mLeft, left); }
                    if (right != null)
                        { mRight = Math.max(mRight, right); }
                    if (top != null)
                        { mTop = Math.max(mTop, top); }
                    if (bottom != null)
                        { mBottom = Math.max(mBottom, bottom); }
                }
            }
            scrollRectIntoView(this.dom, {
                left: rect.left - mLeft, top: rect.top - mTop,
                right: rect.right + mRight, bottom: rect.bottom + mBottom
            });
        };

        Object.defineProperties( DocView.prototype, prototypeAccessors$20 );

        return DocView;
    }(ContentView));
    // Browsers appear to reserve a fixed amount of bits for height
    // styles, and ignore or clip heights above that. For Chrome and
    // Firefox, this is in the 20 million range, so we try to stay below
    // that.
    var MaxNodeHeight = 1e7;
    var BlockGapWidget = /*@__PURE__*/(function (WidgetType) {
        function BlockGapWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) BlockGapWidget.__proto__ = WidgetType;
        BlockGapWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        BlockGapWidget.prototype.constructor = BlockGapWidget;

        var prototypeAccessors$21 = { estimatedHeight: { configurable: true } };

        BlockGapWidget.prototype.toDOM = function toDOM () {
            var elt = document.createElement("div");
            this.updateDOM(elt);
            return elt;
        };
        BlockGapWidget.prototype.updateDOM = function updateDOM (elt) {
            if (this.value < MaxNodeHeight) {
                while (elt.lastChild)
                    { elt.lastChild.remove(); }
                elt.style.height = this.value + "px";
            }
            else {
                elt.style.height = "";
                for (var remaining = this.value; remaining > 0; remaining -= MaxNodeHeight) {
                    var fill = elt.appendChild(document.createElement("div"));
                    fill.style.height = Math.min(remaining, MaxNodeHeight) + "px";
                }
            }
            return true;
        };
        prototypeAccessors$21.estimatedHeight.get = function () { return this.value; };

        Object.defineProperties( BlockGapWidget.prototype, prototypeAccessors$21 );

        return BlockGapWidget;
    }(WidgetType));
    function computeCompositionDeco(view, changes) {
        var sel = getSelection(view.root);
        var textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
        if (!textNode)
            { return Decoration.none; }
        var cView = view.docView.nearest(textNode);
        var from, to, topNode = textNode;
        if (cView instanceof InlineView) {
            from = cView.posAtStart;
            to = from + cView.length;
            topNode = cView.dom;
        }
        else if (cView instanceof LineView) {
            while (topNode.parentNode != cView.dom)
                { topNode = topNode.parentNode; }
            var prev = topNode.previousSibling;
            while (prev && !ContentView.get(prev))
                { prev = prev.previousSibling; }
            from = to = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
        }
        else {
            return Decoration.none;
        }
        var newFrom = changes.mapPos(from, 1), newTo = Math.max(newFrom, changes.mapPos(to, -1));
        var text = textNode.nodeValue;
        var state = view.state;
        if (newTo - newFrom < text.length) {
            if (state.sliceDoc(newFrom, Math.min(state.doc.length, newFrom + text.length)) == text)
                { newTo = newFrom + text.length; }
            else if (state.sliceDoc(Math.max(0, newTo - text.length), newTo) == text)
                { newFrom = newTo - text.length; }
            else
                { return Decoration.none; }
        }
        else if (state.sliceDoc(newFrom, newTo) != text) {
            return Decoration.none;
        }
        return Decoration.set(Decoration.replace({ widget: new CompositionWidget({ top: topNode, text: textNode }) }).range(newFrom, newTo));
    }
    var CompositionWidget = /*@__PURE__*/(function (WidgetType) {
        function CompositionWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) CompositionWidget.__proto__ = WidgetType;
        CompositionWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        CompositionWidget.prototype.constructor = CompositionWidget;

        var prototypeAccessors$22 = { customView: { configurable: true } };

        CompositionWidget.prototype.eq = function eq (value) { return this.value.top == value.top && this.value.text == value.text; };
        CompositionWidget.prototype.toDOM = function toDOM () { return this.value.top; };
        CompositionWidget.prototype.ignoreEvent = function ignoreEvent () { return false; };
        prototypeAccessors$22.customView.get = function () { return CompositionView; };

        Object.defineProperties( CompositionWidget.prototype, prototypeAccessors$22 );

        return CompositionWidget;
    }(WidgetType));
    function nearbyTextNode(node, offset, side) {
        for (;;) {
            if (node.nodeType == 3)
                { return node; }
            if (node.nodeType == 1 && offset > 0 && side <= 0) {
                node = node.childNodes[offset - 1];
                offset = maxOffset(node);
            }
            else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
                node = node.childNodes[offset];
                offset = 0;
            }
            else {
                return null;
            }
        }
    }
    function nextToUneditable(node, offset) {
        if (node.nodeType != 1)
            { return 0; }
        return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 /* Before */ : 0) |
            (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 /* After */ : 0);
    }
    function selectionContext(root) {
        var ref = getSelection(root);
        var offset = ref.focusOffset;
        var node = ref.focusNode;
        return node && node.nodeType == 1 ? [node, offset, node.childNodes[offset - 1], node.childNodes[offset]] : null;
    }
    function needChromeSelectionReset(context, root) {
        var newContext = selectionContext(root);
        return newContext ? newContext.some(function (v, i) { return v != context[i]; }) : false;
    }
    var DecorationComparator$1 = function DecorationComparator$1() {
        this.changes = [];
    };
    DecorationComparator$1.prototype.compareRange = function compareRange (from, to) { addRange(from, to, this.changes); };
    DecorationComparator$1.prototype.comparePoint = function comparePoint (from, to) { addRange(from, to, this.changes); };
    function findChangedDeco(a, b, diff) {
        var comp = new DecorationComparator$1;
        RangeSet.compare(a, b, diff, comp);
        return comp.changes;
    }

    function groupAt(state, pos, bias) {
        if ( bias === void 0 ) bias = 1;

        var categorize = state.charCategorizer(pos);
        var line = state.doc.lineAt(pos), linePos = pos - line.from;
        if (line.length == 0)
            { return EditorSelection.cursor(pos); }
        if (linePos == 0)
            { bias = 1; }
        else if (linePos == line.length)
            { bias = -1; }
        var from = linePos, to = linePos;
        if (bias < 0)
            { from = line.findClusterBreak(linePos, false); }
        else
            { to = line.findClusterBreak(linePos, true); }
        var cat = categorize(line.slice(from, to));
        while (from > 0) {
            var prev = line.findClusterBreak(from, false);
            if (categorize(line.slice(prev, from)) != cat)
                { break; }
            from = prev;
        }
        while (to < line.length) {
            var next = line.findClusterBreak(to, true);
            if (categorize(line.slice(to, next)) != cat)
                { break; }
            to = next;
        }
        return EditorSelection.range(from + line.from, to + line.from);
    }
    // Search the DOM for the {node, offset} position closest to the given
    // coordinates. Very inefficient and crude, but can usually be avoided
    // by calling caret(Position|Range)FromPoint instead.
    // FIXME holding arrow-up/down at the end of the viewport is a rather
    // common use case that will repeatedly trigger this code. Maybe
    // introduce some element of binary search after all?
    function getdx(x, rect) {
        return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
    }
    function getdy(y, rect) {
        return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
    }
    function yOverlap(a, b) {
        return a.top < b.bottom - 1 && a.bottom > b.top + 1;
    }
    function upTop(rect, top) {
        return top < rect.top ? { top: top, left: rect.left, right: rect.right, bottom: rect.bottom } : rect;
    }
    function upBot(rect, bottom) {
        return bottom > rect.bottom ? { top: rect.top, left: rect.left, right: rect.right, bottom: bottom } : rect;
    }
    function domPosAtCoords(parent, x, y) {
        var closest, closestRect, closestX, closestY;
        var above, below, aboveRect, belowRect;
        for (var child = parent.firstChild; child; child = child.nextSibling) {
            var rects = clientRectsFor(child);
            for (var i = 0; i < rects.length; i++) {
                var rect = rects[i];
                if (closestRect && yOverlap(closestRect, rect))
                    { rect = upTop(upBot(rect, closestRect.bottom), closestRect.top); }
                var dx = getdx(x, rect), dy = getdy(y, rect);
                if (dx == 0 && dy == 0)
                    { return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y); }
                if (!closest || closestY > dy || closestY == dy && closestX > dx) {
                    closest = child;
                    closestRect = rect;
                    closestX = dx;
                    closestY = dy;
                }
                if (dx == 0) {
                    if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
                        above = child;
                        aboveRect = rect;
                    }
                    else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
                        below = child;
                        belowRect = rect;
                    }
                }
                else if (aboveRect && yOverlap(aboveRect, rect)) {
                    aboveRect = upBot(aboveRect, rect.bottom);
                }
                else if (belowRect && yOverlap(belowRect, rect)) {
                    belowRect = upTop(belowRect, rect.top);
                }
            }
        }
        if (aboveRect && aboveRect.bottom >= y) {
            closest = above;
            closestRect = aboveRect;
        }
        else if (belowRect && belowRect.top <= y) {
            closest = below;
            closestRect = belowRect;
        }
        if (!closest)
            { return { node: parent, offset: 0 }; }
        var clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
        if (closest.nodeType == 3)
            { return domPosInText(closest, clipX, y); }
        if (!closestX && closest.contentEditable == "true")
            { return domPosAtCoords(closest, clipX, y); }
        var offset = Array.prototype.indexOf.call(parent.childNodes, closest) +
            (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
        return { node: parent, offset: offset };
    }
    function domPosInText(node, x, y) {
        var len = node.nodeValue.length, range = document.createRange();
        for (var i = 0; i < len; i++) {
            range.setEnd(node, i + 1);
            range.setStart(node, i);
            var rects = range.getClientRects();
            for (var j = 0; j < rects.length; j++) {
                var rect = rects[j];
                if (rect.top == rect.bottom)
                    { continue; }
                if (rect.left - 1 <= x && rect.right + 1 >= x &&
                    rect.top - 1 <= y && rect.bottom + 1 >= y) {
                    var right = x >= (rect.left + rect.right) / 2, after = right;
                    if (browser.chrome || browser.gecko) {
                        // Check for RTL on browsers that support getting client
                        // rects for empty ranges.
                        range.setEnd(node, i);
                        var rectBefore = range.getBoundingClientRect();
                        if (rectBefore.left == rect.right)
                            { after = !right; }
                    }
                    return { node: node, offset: i + (after ? 1 : 0) };
                }
            }
        }
        return { node: node, offset: 0 };
    }
    function posAtCoords(view, ref, bias) {
        var assign, assign$1, assign$2;

        var x = ref.x;
        var y = ref.y;
        if ( bias === void 0 ) bias = -1;
        var content = view.contentDOM.getBoundingClientRect(), block;
        var halfLine = view.defaultLineHeight / 2;
        for (var bounced = false;;) {
            block = view.blockAtHeight(y, content.top);
            if (block.top > y || block.bottom < y) {
                bias = block.top > y ? -1 : 1;
                y = Math.min(block.bottom - halfLine, Math.max(block.top + halfLine, y));
                if (bounced)
                    { return -1; }
                else
                    { bounced = true; }
            }
            if (block.type == BlockType.Text)
                { break; }
            y = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
        }
        var lineStart = block.from;
        // If this is outside of the rendered viewport, we can't determine a position
        if (lineStart < view.viewport.from)
            { return view.viewport.from == 0 ? 0 : -1; }
        if (lineStart > view.viewport.to)
            { return view.viewport.to == view.state.doc.length ? view.state.doc.length : -1; }
        // Clip x to the viewport sides
        x = Math.max(content.left + 1, Math.min(content.right - 1, x));
        var root = view.root, element = root.elementFromPoint(x, y);
        // There's visible editor content under the point, so we can try
        // using caret(Position|Range)FromPoint as a shortcut
        var node, offset = -1;
        if (element && view.contentDOM.contains(element) && !(view.docView.nearest(element) instanceof WidgetView)) {
            if (root.caretPositionFromPoint) {
                var pos = root.caretPositionFromPoint(x, y);
                if (pos)
                    { ((assign = pos, node = assign.offsetNode, offset = assign.offset)); }
            }
            else if (root.caretRangeFromPoint) {
                var range = root.caretRangeFromPoint(x, y);
                if (range)
                    { ((assign$1 = range, node = assign$1.startContainer, offset = assign$1.startOffset)); }
            }
        }
        // No luck, do our own (potentially expensive) search
        if (!node) {
            var line = LineView.find(view.docView, lineStart);
            ((assign$2 = domPosAtCoords(line.dom, x, y), node = assign$2.node, offset = assign$2.offset));
        }
        return view.docView.posFromDOM(node, offset);
    }
    function moveToLineBoundary(view, start, forward, includeWrap) {
        var line = view.state.doc.lineAt(start.head);
        var coords = !includeWrap || !view.lineWrapping ? null
            : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);
        if (coords) {
            var editorRect = view.dom.getBoundingClientRect();
            var pos = view.posAtCoords({ x: forward == (view.textDirection == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
                y: (coords.top + coords.bottom) / 2 });
            if (pos > -1)
                { return EditorSelection.cursor(pos, forward ? -1 : 1); }
        }
        var lineView = LineView.find(view.docView, start.head);
        var end = lineView ? (forward ? lineView.posAtEnd : lineView.posAtStart) : (forward ? line.to : line.from);
        return EditorSelection.cursor(end, forward ? -1 : 1);
    }
    function moveByChar(view, start, forward, by) {
        var line = view.state.doc.lineAt(start.head), spans = view.bidiSpans(line);
        for (var cur = start, check = null;;) {
            var next = moveVisually(line, spans, view.textDirection, cur, forward), char = movedOver;
            if (!next) {
                if (line.number == (forward ? view.state.doc.lines : 1))
                    { return cur; }
                char = "\n";
                line = view.state.doc.line(line.number + (forward ? 1 : -1));
                spans = view.bidiSpans(line);
                next = EditorSelection.cursor(forward ? line.from : line.to);
            }
            if (!check) {
                if (!by)
                    { return next; }
                check = by(char);
            }
            else if (!check(char)) {
                return cur;
            }
            cur = next;
        }
    }
    function byGroup(view, pos, start) {
        var categorize = view.state.charCategorizer(pos);
        var cat = categorize(start);
        return function (next) {
            var nextCat = categorize(next);
            if (cat == CharCategory.Space)
                { cat = nextCat; }
            return cat == nextCat;
        };
    }
    function moveVertically(view, start, forward, distance) {
        var _a;
        var startPos = start.head, dir = forward ? 1 : -1;
        var startCoords = view.coordsAtPos(startPos);
        if (startCoords) {
            var rect = view.dom.getBoundingClientRect();
            var goal$1 = (_a = start.goalColumn) !== null && _a !== void 0 ? _a : startCoords.left - rect.left;
            var resolvedGoal = rect.left + goal$1;
            var dist = distance !== null && distance !== void 0 ? distance : 5;
            for (var startY = dir < 0 ? startCoords.top : startCoords.bottom, extra = 0; extra < 50; extra += 10) {
                var pos = posAtCoords(view, { x: resolvedGoal, y: startY + (dist + extra) * dir }, dir);
                if (pos < 0)
                    { break; }
                if (pos != startPos)
                    { return EditorSelection.cursor(pos, undefined, undefined, goal$1); }
            }
        }
        // Outside of the drawn viewport, use a crude column-based approach
        var ref = view.state;
        var doc = ref.doc;
        var line = doc.lineAt(startPos), tabSize = view.state.tabSize;
        var goal = start.goalColumn, goalCol = 0;
        if (goal == null) {
            for (var iter = doc.iterRange(line.from, startPos); !iter.next().done;)
                { goalCol = countColumn(iter.value, goalCol, tabSize); }
            goal = goalCol * view.defaultCharacterWidth;
        }
        else {
            goalCol = Math.round(goal / view.defaultCharacterWidth);
        }
        if (dir < 0 && line.from == 0)
            { return EditorSelection.cursor(0, undefined, undefined, goal); }
        else if (dir > 0 && line.to == doc.length)
            { return EditorSelection.cursor(line.to, undefined, undefined, goal); }
        var otherLine = doc.line(line.number + dir);
        var result = otherLine.from;
        var seen = 0;
        for (var iter$1 = doc.iterRange(otherLine.from, otherLine.to); seen >= goalCol && !iter$1.next().done;) {
            var ref$1 = findColumn(iter$1.value, seen, goalCol, tabSize);
            var offset = ref$1.offset;
            var leftOver = ref$1.leftOver;
            seen = goalCol - leftOver;
            result += offset;
        }
        return EditorSelection.cursor(result, undefined, undefined, goal);
    }

    // This will also be where dragging info and such goes
    var InputState = function InputState(view) {
        var this$1 = this;

        this.lastKeyCode = 0;
        this.lastKeyTime = 0;
        this.lastSelectionOrigin = null;
        this.lastSelectionTime = 0;
        this.registeredEvents = [];
        this.customHandlers = [];
        this.composing = false;
        this.compositionEndedAt = 0;
        this.mouseSelection = null;
        var loop = function ( type ) {
            var handler = handlers[type];
            view.contentDOM.addEventListener(type, function (event) {
                if (!eventBelongsToEditor(view, event) || this$1.ignoreDuringComposition(event))
                    { return; }
                if (this$1.mustFlushObserver(event))
                    { view.observer.forceFlush(); }
                if (this$1.runCustomHandlers(type, view, event))
                    { event.preventDefault(); }
                else
                    { handler(view, event); }
            });
            this$1.registeredEvents.push(type);
        };

        for (var type in handlers) loop( type );
        // Must always run, even if a custom handler handled the event
        view.contentDOM.addEventListener("keydown", function (event) {
            view.inputState.lastKeyCode = event.keyCode;
            view.inputState.lastKeyTime = Date.now();
        });
        if (view.root.activeElement == view.contentDOM)
            { view.dom.classList.add("cm-focused"); }
        this.notifiedFocused = view.hasFocus;
        this.ensureHandlers(view);
    };
    InputState.prototype.setSelectionOrigin = function setSelectionOrigin (origin) {
        this.lastSelectionOrigin = origin;
        this.lastSelectionTime = Date.now();
    };
    InputState.prototype.ensureHandlers = function ensureHandlers (view) {
            var this$1 = this;

        var handlers = this.customHandlers = view.pluginField(domEventHandlers);
        for (var i = 0, list = handlers; i < list.length; i += 1) {
            var loop = function ( type ) {
                    if (this$1.registeredEvents.indexOf(type) < 0) {
                    this$1.registeredEvents.push(type);
                    (type != "scroll" ? view.contentDOM : view.scrollDOM).addEventListener(type, function (event) {
                        if (!eventBelongsToEditor(view, event))
                            { return; }
                        if (this$1.runCustomHandlers(type, view, event))
                            { event.preventDefault(); }
                    });
                }
                };

                var set = list[i];

                for (var type in set.handlers)
                loop( type );
        }
    };
    InputState.prototype.runCustomHandlers = function runCustomHandlers (type, view, event) {
        for (var i = 0, list = this.customHandlers; i < list.length; i += 1) {
            var set = list[i];

                var handler = set.handlers[type];
            if (handler) {
                try {
                    if (handler.call(set.plugin, event, view) || event.defaultPrevented)
                        { return true; }
                }
                catch (e) {
                    logException(view.state, e);
                }
            }
        }
        return false;
    };
    InputState.prototype.ignoreDuringComposition = function ignoreDuringComposition (event) {
        if (!/^key/.test(event.type))
            { return false; }
        if (this.composing)
            { return true; }
        // See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
        // On some input method editors (IMEs), the Enter key is used to
        // confirm character selection. On Safari, when Enter is pressed,
        // compositionend and keydown events are sometimes emitted in the
        // wrong order. The key event should still be ignored, even when
        // it happens after the compositionend event.
        if (browser.safari && event.timeStamp - this.compositionEndedAt < 500) {
            this.compositionEndedAt = 0;
            return true;
        }
        return false;
    };
    InputState.prototype.mustFlushObserver = function mustFlushObserver (event) {
        return event.type == "keydown" || event.type == "compositionend";
    };
    InputState.prototype.startMouseSelection = function startMouseSelection (view, event, style) {
        if (this.mouseSelection)
            { this.mouseSelection.destroy(); }
        this.mouseSelection = new MouseSelection(this, view, event, style);
    };
    InputState.prototype.update = function update (update$1) {
        if (this.mouseSelection)
            { this.mouseSelection.update(update$1); }
        this.lastKeyCode = this.lastSelectionTime = 0;
    };
    InputState.prototype.destroy = function destroy () {
        if (this.mouseSelection)
            { this.mouseSelection.destroy(); }
    };
    var MouseSelection = function MouseSelection(inputState, view, startEvent, style) {
        this.inputState = inputState;
        this.view = view;
        this.startEvent = startEvent;
        this.style = style;
        var doc = view.contentDOM.ownerDocument;
        doc.addEventListener("mousemove", this.move = this.move.bind(this));
        doc.addEventListener("mouseup", this.up = this.up.bind(this));
        this.extend = startEvent.shiftKey;
        this.multiple = view.state.facet(EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
        this.dragMove = dragMovesSelection$1(view, startEvent);
        this.dragging = isInPrimarySelection(view, startEvent) ? null : false;
        // When clicking outside of the selection, immediately apply the
        // effect of starting the selection
        if (this.dragging === false) {
            startEvent.preventDefault();
            this.select(startEvent);
        }
    };
    MouseSelection.prototype.move = function move (event) {
        if (event.buttons == 0)
            { return this.destroy(); }
        if (this.dragging !== false)
            { return; }
        this.select(event);
    };
    MouseSelection.prototype.up = function up () {
        if (this.dragging == null)
            { this.select(this.startEvent); }
        this.destroy();
    };
    MouseSelection.prototype.destroy = function destroy () {
        var doc = this.view.contentDOM.ownerDocument;
        doc.removeEventListener("mousemove", this.move);
        doc.removeEventListener("mouseup", this.up);
        this.inputState.mouseSelection = null;
    };
    MouseSelection.prototype.select = function select (event) {
        var selection = this.style.get(event, this.extend, this.multiple);
        if (!selection.eq(this.view.state.selection) || selection.primary.assoc != this.view.state.selection.primary.assoc)
            { this.view.dispatch({
                selection: selection,
                annotations: Transaction.userEvent.of("pointerselection"),
                scrollIntoView: true
            }); }
    };
    MouseSelection.prototype.update = function update (update$1) {
        if (update$1.docChanged && this.dragging)
            { this.dragging = this.dragging.map(update$1.changes); }
        this.style.update(update$1);
    };
    function addsSelectionRange(view, event) {
        var facet = view.state.facet(clickAddsSelectionRange);
        return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
    }
    function dragMovesSelection$1(view, event) {
        var facet = view.state.facet(dragMovesSelection);
        return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
    }
    function isInPrimarySelection(view, event) {
        var ref = view.state.selection;
        var primary = ref.primary;
        if (primary.empty)
            { return false; }
        // On boundary clicks, check whether the coordinates are inside the
        // selection's client rectangles
        var sel = getSelection(view.root);
        if (sel.rangeCount == 0)
            { return true; }
        var rects = sel.getRangeAt(0).getClientRects();
        for (var i = 0; i < rects.length; i++) {
            var rect = rects[i];
            if (rect.left <= event.clientX && rect.right >= event.clientX &&
                rect.top <= event.clientY && rect.bottom >= event.clientY)
                { return true; }
        }
        return false;
    }
    function eventBelongsToEditor(view, event) {
        if (!event.bubbles)
            { return true; }
        if (event.defaultPrevented)
            { return false; }
        for (var node = event.target, cView = (void 0); node != view.contentDOM; node = node.parentNode)
            { if (!node || node.nodeType == 11 || ((cView = ContentView.get(node)) && cView.ignoreEvent(event)))
                { return false; } }
        return true;
    }
    var handlers = Object.create(null);
    // This is very crude, but unfortunately both these browsers _pretend_
    // that they have a clipboard API—all the objects and methods are
    // there, they just don't work, and they are hard to test.
    var brokenClipboardAPI = (browser.ie && browser.ie_version < 15) ||
        (browser.ios && browser.webkit_version < 604);
    function capturePaste(view) {
        var parent = view.dom.parentNode;
        if (!parent)
            { return; }
        var target = parent.appendChild(document.createElement("textarea"));
        target.style.cssText = "position: fixed; left: -10000px; top: 10px";
        target.focus();
        setTimeout(function () {
            view.focus();
            target.remove();
            doPaste(view, target.value);
        }, 50);
    }
    function doPaste(view, input) {
        var text = view.state.toText(input), i = 1;
        var changes = text.lines == view.state.selection.ranges.length ?
            view.state.changeByRange(function (range) {
                var line = text.line(i++);
                return { changes: { from: range.from, to: range.to, insert: line.slice() },
                    range: EditorSelection.cursor(range.from + line.length) };
            }) : view.state.replaceSelection(text);
        view.dispatch(changes, {
            annotations: Transaction.userEvent.of("paste"),
            scrollIntoView: true
        });
    }
    function mustCapture(event) {
        var mods = (event.ctrlKey ? 1 /* Ctrl */ : 0) | (event.metaKey ? 8 /* Meta */ : 0) |
            (event.altKey ? 2 /* Alt */ : 0) | (event.shiftKey ? 4 /* Shift */ : 0);
        var code = event.keyCode, macCtrl = browser.mac && mods == 1 /* Ctrl */;
        return code == 8 || (macCtrl && code == 72) || // Backspace, Ctrl-h on Mac
            code == 46 || (macCtrl && code == 68) || // Delete, Ctrl-d on Mac
            code == 27 || // Esc
            (mods == (browser.mac ? 8 /* Meta */ : 1 /* Ctrl */) && // Ctrl/Cmd-[biyz]
                (code == 66 || code == 73 || code == 89 || code == 90));
    }
    handlers.keydown = function (view, event) {
        if (mustCapture(event))
            { event.preventDefault(); }
        view.inputState.setSelectionOrigin("keyboardselection");
    };
    handlers.touchdown = handlers.touchmove = function (view) {
        view.inputState.setSelectionOrigin("pointerselection");
    };
    handlers.mousedown = function (view, event) {
        var style = null;
        for (var i = 0, list = view.state.facet(mouseSelectionStyle); i < list.length; i += 1) {
            var makeStyle = list[i];

            style = makeStyle(view, event);
            if (style)
                { break; }
        }
        if (!style && event.button == 0)
            { style = basicMouseSelection(view, event); }
        if (style) {
            if (view.root.activeElement != view.contentDOM)
                { view.observer.ignore(function () { return focusPreventScroll(view.contentDOM); }); }
            view.inputState.startMouseSelection(view, event, style);
        }
    };
    function rangeForClick(view, pos, bias, type) {
        if (type == 1) { // Single click
            return EditorSelection.cursor(pos, bias);
        }
        else if (type == 2) { // Double click
            return groupAt(view.state, pos, bias);
        }
        else { // Triple click
            var line = LineView.find(view.docView, pos);
            if (line)
                { return EditorSelection.range(line.posAtStart, line.posAtEnd); }
            var ref = view.state.doc.lineAt(pos);
            var from = ref.from;
            var to = ref.to;
            return EditorSelection.range(from, to);
        }
    }
    var insideY = function (y, rect) { return y >= rect.top && y <= rect.bottom; };
    var inside = function (x, y, rect) { return insideY(y, rect) && x >= rect.left && x <= rect.right; };
    // Try to determine, for the given coordinates, associated with the
    // given position, whether they are related to the element before or
    // the element after the position.
    function findPositionSide(view, pos, x, y) {
        var line = LineView.find(view.docView, pos);
        if (!line)
            { return 1; }
        var off = pos - line.posAtStart;
        // Line boundaries point into the line
        if (off == 0)
            { return 1; }
        if (off == line.length)
            { return -1; }
        // Positions on top of an element point at that element
        var before = line.coordsAt(off, -1);
        if (before && inside(x, y, before))
            { return -1; }
        var after = line.coordsAt(off, 1);
        if (after && inside(x, y, after))
            { return 1; }
        // This is probably a line wrap point. Pick before if the point is
        // beside it.
        return before && insideY(y, before) ? -1 : 1;
    }
    function queryPos(view, event) {
        var pos = view.posAtCoords({ x: event.clientX, y: event.clientY });
        if (pos < 0)
            { return null; }
        return { pos: pos, bias: findPositionSide(view, pos, event.clientX, event.clientY) };
    }
    var BadMouseDetail = browser.ie && browser.ie_version <= 11;
    var lastMouseDown = null, lastMouseDownCount = 0;
    function getClickType(event) {
        if (!BadMouseDetail)
            { return event.detail; }
        var last = lastMouseDown;
        lastMouseDown = event;
        return lastMouseDownCount = !last || (last.timeStamp > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 &&
            Math.abs(last.clientY - event.clientY) < 2) ? (lastMouseDownCount + 1) % 3 : 1;
    }
    function basicMouseSelection(view, event) {
        var start = queryPos(view, event), type = getClickType(event);
        var startSel = view.state.selection;
        var last = start, lastEvent = event;
        return {
            update: function update(update$1) {
                if (update$1.changes) {
                    if (start)
                        { start.pos = update$1.changes.mapPos(start.pos); }
                    startSel = startSel.map(update$1.changes);
                }
            },
            get: function get(event, extend, multiple) {
                var cur;
                if (event.clientX == lastEvent.clientX && event.clientY == lastEvent.clientY)
                    { cur = last; }
                else {
                    cur = last = queryPos(view, event);
                    lastEvent = event;
                }
                if (!cur || !start)
                    { return startSel; }
                var range = rangeForClick(view, cur.pos, cur.bias, type);
                if (start.pos != cur.pos && !extend) {
                    var startRange = rangeForClick(view, start.pos, start.bias, type);
                    var from = Math.min(startRange.from, range.from), to = Math.max(startRange.to, range.to);
                    range = from < range.from ? EditorSelection.range(from, to) : EditorSelection.range(to, from);
                }
                if (extend)
                    { return startSel.replaceRange(startSel.primary.extend(range.from, range.to)); }
                else if (multiple)
                    { return startSel.addRange(range); }
                else
                    { return EditorSelection.create([range]); }
            }
        };
    }
    handlers.dragstart = function (view, event) {
        var ref = view.state;
        var primary = ref.selection.primary;
        var ref$1 = view.inputState;
        var mouseSelection = ref$1.mouseSelection;
        if (mouseSelection)
            { mouseSelection.dragging = primary; }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", view.state.sliceDoc(primary.from, primary.to));
            event.dataTransfer.effectAllowed = "copyMove";
        }
    };
    handlers.drop = function (view, event) {
        if (!event.dataTransfer)
            { return; }
        var dropPos = view.posAtCoords({ x: event.clientX, y: event.clientY });
        var text = event.dataTransfer.getData("Text");
        if (dropPos < 0 || !text)
            { return; }
        event.preventDefault();
        var ref = view.inputState;
        var mouseSelection = ref.mouseSelection;
        var del = mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ?
            { from: mouseSelection.dragging.from, to: mouseSelection.dragging.to } : null;
        var ins = { from: dropPos, insert: text };
        var changes = view.state.changes(del ? [del, ins] : ins);
        view.focus();
        view.dispatch({
            changes: changes,
            selection: { anchor: changes.mapPos(dropPos, -1), head: changes.mapPos(dropPos, 1) },
            annotations: Transaction.userEvent.of("drop")
        });
    };
    handlers.paste = function (view, event) {
        view.observer.flush();
        var data = brokenClipboardAPI ? null : event.clipboardData;
        var text = data && data.getData("text/plain");
        if (text) {
            doPaste(view, text);
            event.preventDefault();
        }
        else {
            capturePaste(view);
        }
    };
    function captureCopy(view, text) {
        // The extra wrapper is somehow necessary on IE/Edge to prevent the
        // content from being mangled when it is put onto the clipboard
        var parent = view.dom.parentNode;
        if (!parent)
            { return; }
        var target = parent.appendChild(document.createElement("textarea"));
        target.style.cssText = "position: fixed; left: -10000px; top: 10px";
        target.value = text;
        target.focus();
        target.selectionEnd = text.length;
        target.selectionStart = 0;
        setTimeout(function () {
            target.remove();
            view.focus();
        }, 50);
    }
    function copiedRange(state) {
        var content = [], ranges = [];
        for (var i = 0, list = state.selection.ranges; i < list.length; i += 1)
            {
            var range = list[i];

            if (!range.empty) {
                content.push(state.sliceDoc(range.from, range.to));
                ranges.push(range);
            }
        }
        if (!content.length) {
            // Nothing selected, do a line-wise copy
            var upto = -1;
            for (var i$1 = 0, list$1 = state.selection.ranges; i$1 < list$1.length; i$1 += 1) {
                var ref = list$1[i$1];
                var from = ref.from;

                var line = state.doc.lineAt(from);
                if (line.number > upto) {
                    content.push(line.slice());
                    ranges.push({ from: line.from, to: Math.min(state.doc.length, line.to + 1) });
                }
                upto = line.number;
            }
        }
        return { text: content.join(state.lineBreak), ranges: ranges };
    }
    handlers.copy = handlers.cut = function (view, event) {
        var ref = copiedRange(view.state);
        var text = ref.text;
        var ranges = ref.ranges;
        if (!text)
            { return; }
        var data = brokenClipboardAPI ? null : event.clipboardData;
        if (data) {
            event.preventDefault();
            data.clearData();
            data.setData("text/plain", text);
        }
        else {
            captureCopy(view, text);
        }
        if (event.type == "cut")
            { view.dispatch({
                changes: ranges,
                scrollIntoView: true,
                annotations: Transaction.userEvent.of("cut")
            }); }
    };
    handlers.focus = handlers.blur = function (view) {
        setTimeout(function () {
            if (view.hasFocus != view.inputState.notifiedFocused)
                { view.update([]); }
        }, 10);
    };
    handlers.beforeprint = function (view) {
        view.viewState.printing = true;
        view.requestMeasure();
        setTimeout(function () {
            view.viewState.printing = false;
            view.requestMeasure();
        }, 2000);
    };
    function forceClearComposition(view) {
        if (view.docView.compositionDeco.size)
            { view.update([]); }
    }
    handlers.compositionstart = handlers.compositionupdate = function (view) {
        if (!view.inputState.composing) {
            if (view.docView.compositionDeco.size) {
                view.observer.flush();
                forceClearComposition(view);
            }
            // FIXME possibly set a timeout to clear it again on Android
            view.inputState.composing = true;
        }
    };
    handlers.compositionend = function (view) {
        view.inputState.composing = false;
        view.inputState.compositionEndedAt = Date.now();
        setTimeout(function () {
            if (!view.inputState.composing)
                { forceClearComposition(view); }
        }, 50);
    };

    var observeOptions = {
        childList: true,
        characterData: true,
        subtree: true,
        characterDataOldValue: true
    };
    // IE11 has very broken mutation observers, so we also listen to
    // DOMCharacterDataModified there
    var useCharData = browser.ie && browser.ie_version <= 11;
    var DOMObserver = function DOMObserver(view, onChange, onScrollChanged) {
        var this$1 = this;

        this.view = view;
        this.onChange = onChange;
        this.onScrollChanged = onScrollChanged;
        this.active = false;
        this.ignoreSelection = new DOMSelection;
        this.delayedFlush = -1;
        this.queue = [];
        this.scrollTargets = [];
        this.intersection = null;
        this.intersecting = false;
        // Timeout for scheduling check of the parents that need scroll handlers
        this.parentCheck = -1;
        this.dom = view.contentDOM;
        this.observer = new MutationObserver(function (mutations) {
            for (var i = 0, list = mutations; i < list.length; i += 1)
                {
                var mut = list[i];

                this$1.queue.push(mut);
            }
            // IE11 will sometimes (on typing over a selection or
            // backspacing out a single character text node) call the
            // observer callback before actually updating the DOM
            if (browser.ie && browser.ie_version <= 11 &&
                mutations.some(function (m) { return m.type == "childList" && m.removedNodes.length ||
                    m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length; }))
                { this$1.flushSoon(); }
            else
                { this$1.flush(); }
        });
        if (useCharData)
            { this.onCharData = function (event) {
                this$1.queue.push({ target: event.target,
                    type: "characterData",
                    oldValue: event.prevValue });
                this$1.flushSoon();
            }; }
        this.onSelectionChange = function () {
            if (this$1.view.root.activeElement != this$1.dom)
                { return; }
            // Deletions on IE11 fire their events in the wrong order, giving
            // us a selection change event before the DOM changes are
            // reported.
            if (browser.ie && browser.ie_version <= 11 && !this$1.view.state.selection.primary.empty) {
                var sel = getSelection(this$1.view.root);
                // Selection.isCollapsed isn't reliable on IE
                if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
                    { return this$1.flushSoon(); }
            }
            this$1.flush();
        };
        this.start();
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll);
        if (typeof IntersectionObserver == "function") {
            this.intersection = new IntersectionObserver(function (entries) {
                if (this$1.parentCheck < 0)
                    { this$1.parentCheck = setTimeout(this$1.listenForScroll.bind(this$1), 1000); }
                if (entries[entries.length - 1].intersectionRatio > 0 != this$1.intersecting) {
                    this$1.intersecting = !this$1.intersecting;
                    this$1.onScroll();
                }
            }, {});
            this.intersection.observe(this.dom);
        }
        this.listenForScroll();
    };
    DOMObserver.prototype.onScroll = function onScroll () {
        if (this.intersecting) {
            this.flush();
            this.onScrollChanged();
        }
    };
    DOMObserver.prototype.listenForScroll = function listenForScroll () {
        this.parentCheck = -1;
        var i = 0, changed = null;
        for (var dom = this.dom; dom;) {
            if (dom.nodeType == 1) {
                if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom)
                    { i++; }
                else if (!changed)
                    { changed = this.scrollTargets.slice(0, i); }
                if (changed)
                    { changed.push(dom); }
                dom = dom.parentNode;
            }
            else if (dom.nodeType == 11) { // Shadow root
                dom = dom.host;
            }
            else {
                break;
            }
        }
        if (i < this.scrollTargets.length && !changed)
            { changed = this.scrollTargets.slice(0, i); }
        if (changed) {
            for (var i$1 = 0, list = this.scrollTargets; i$1 < list.length; i$1 += 1)
                {
                    var dom$1 = list[i$1];

                    dom$1.removeEventListener("scroll", this.onScroll);
                }
            for (var i$2 = 0, list$1 = this.scrollTargets = changed; i$2 < list$1.length; i$2 += 1)
                {
                    var dom$2 = list$1[i$2];

                    dom$2.addEventListener("scroll", this.onScroll);
                }
        }
    };
    DOMObserver.prototype.ignore = function ignore (f) {
        if (!this.active)
            { return f(); }
        try {
            this.stop();
            return f();
        }
        finally {
            this.start();
            this.clear();
        }
    };
    DOMObserver.prototype.start = function start () {
        if (this.active)
            { return; }
        this.observer.observe(this.dom, observeOptions);
        // FIXME is this shadow-root safe?
        this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            { this.dom.addEventListener("DOMCharacterDataModified", this.onCharData); }
        this.active = true;
    };
    DOMObserver.prototype.stop = function stop () {
        if (!this.active)
            { return; }
        this.active = false;
        this.observer.disconnect();
        this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            { this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData); }
    };
    DOMObserver.prototype.clearSelection = function clearSelection () {
        this.ignoreSelection.set(getSelection(this.view.root));
    };
    // Throw away any pending changes
    DOMObserver.prototype.clear = function clear () {
        this.observer.takeRecords();
        this.queue.length = 0;
        this.clearSelection();
    };
    DOMObserver.prototype.flushSoon = function flushSoon () {
            var this$1 = this;

        if (this.delayedFlush < 0)
            { this.delayedFlush = window.setTimeout(function () { this$1.delayedFlush = -1; this$1.flush(); }, 20); }
    };
    DOMObserver.prototype.forceFlush = function forceFlush () {
        if (this.delayedFlush >= 0) {
            window.clearTimeout(this.delayedFlush);
            this.delayedFlush = -1;
            this.flush();
        }
    };
    // Apply pending changes, if any
    DOMObserver.prototype.flush = function flush () {
            var this$1 = this;
            var assign;

        if (this.delayedFlush >= 0)
            { return; }
        var records = this.queue;
        for (var i = 0, list = this.observer.takeRecords(); i < list.length; i += 1)
            {
                var mut = list[i];

                records.push(mut);
            }
        if (records.length)
            { this.queue = []; }
        var selection = getSelection(this.view.root);
        var newSel = !this.ignoreSelection.eq(selection) && hasSelection(this.dom, selection);
        if (records.length == 0 && !newSel)
            { return; }
        var from = -1, to = -1, typeOver = false;
        for (var i$1 = 0, list$1 = records; i$1 < list$1.length; i$1 += 1) {
            var record = list$1[i$1];

                var range = this.readMutation(record);
            if (!range)
                { continue; }
            if (range.typeOver)
                { typeOver = true; }
            if (from == -1) {
                ((assign = range, from = assign.from, to = assign.to));
            }
            else {
                from = Math.min(range.from, from);
                to = Math.max(range.to, to);
            }
        }
        var apply = from > -1 || newSel;
        if (!apply || !this.onChange(from, to, typeOver)) {
            if (this.view.docView.dirty) {
                this.ignore(function () { return this$1.view.docView.sync(); });
                this.view.docView.dirty = 0 /* Not */;
            }
            this.view.docView.updateSelection();
        }
        this.clearSelection();
    };
    DOMObserver.prototype.readMutation = function readMutation (rec) {
        var cView = this.view.docView.nearest(rec.target);
        if (!cView || cView.ignoreMutation(rec))
            { return null; }
        cView.markDirty();
        if (rec.type == "childList") {
            var childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
            var childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
            return { from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
                to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd, typeOver: false };
        }
        else { // "characterData"
            return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };
        }
    };
    DOMObserver.prototype.destroy = function destroy () {
        this.stop();
        if (this.intersection)
            { this.intersection.disconnect(); }
        for (var i = 0, list = this.scrollTargets; i < list.length; i += 1)
            {
                var dom = list[i];

                dom.removeEventListener("scroll", this.onScroll);
            }
        window.removeEventListener("scroll", this.onScroll);
        clearTimeout(this.parentCheck);
    };
    function findChild(cView, dom, dir) {
        while (dom) {
            var curView = ContentView.get(dom);
            if (curView && curView.parent == cView)
                { return curView; }
            var parent = dom.parentNode;
            dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
        }
        return null;
    }

    // FIXME reconsider this kludge (does it break reading dom text with newlines?)
    var LineSep = "\ufdda"; // A Unicode 'non-character', used to denote newlines internally
    function applyDOMChange(view, start, end, typeOver) {
        var change, newSel;
        var sel = view.state.selection.primary, bounds;
        if (start > -1 && (bounds = view.docView.domBoundsAround(start, end, 0))) {
            var from = bounds.from;
            var to = bounds.to;
            var selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view.contentDOM, view.root);
            var reader = new DOMReader(selPoints);
            reader.readRange(bounds.startDOM, bounds.endDOM);
            newSel = selectionFromPoints(selPoints, from);
            var preferredPos = sel.from, preferredSide = null;
            // Prefer anchoring to end when Backspace is pressed
            if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100) {
                preferredPos = sel.to;
                preferredSide = "end";
            }
            var diff = findDiff(view.state.doc.sliceString(from, to, LineSep), reader.text, preferredPos - from, preferredSide);
            if (diff)
                { change = { from: from + diff.from, to: from + diff.toA,
                    insert: Text.of(reader.text.slice(diff.from, diff.toB).split(LineSep)) }; }
        }
        else if (view.hasFocus) {
            var domSel = getSelection(view.root);
            var ref = view.docView;
            var iHead = ref.impreciseHead;
            var iAnchor = ref.impreciseAnchor;
            var head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset ? view.state.selection.primary.head
                : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
            var anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset
                ? view.state.selection.primary.anchor
                : selectionCollapsed(domSel) ? head : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
            if (head != sel.head || anchor != sel.anchor)
                { newSel = EditorSelection.single(anchor, head); }
        }
        if (!change && !newSel)
            { return false; }
        // Heuristic to notice typing over a selected character
        if (!change && typeOver && !sel.empty && newSel && newSel.primary.empty)
            { change = { from: sel.from, to: sel.to, insert: view.state.doc.slice(sel.from, sel.to) }; }
        if (change) {
            var startState = view.state;
            // Android browsers don't fire reasonable key events for enter,
            // backspace, or delete. So this detects changes that look like
            // they're caused by those keys, and reinterprets them as key
            // events.
            if (browser.android &&
                ((change.from == sel.from && change.to == sel.to &&
                    change.insert.length == 1 && change.insert.lines == 2 &&
                    dispatchKey(view, "Enter", 10)) ||
                    (change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 &&
                        dispatchKey(view, "Backspace", 8)) ||
                    (change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 &&
                        dispatchKey(view, "Delete", 46))))
                { return view.state != startState; }
            var tr;
            if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3) {
                var before = sel.from < change.from ? startState.doc.sliceString(sel.from, change.from, LineSep) : "";
                var after = sel.to > change.to ? startState.doc.sliceString(change.to, sel.to, LineSep) : "";
                tr = startState.replaceSelection(Text.of((before + change.insert.sliceString(0, undefined, LineSep) + after).split(LineSep)));
            }
            else {
                var changes = startState.changes(change);
                tr = {
                    changes: changes,
                    selection: newSel && !startState.selection.primary.eq(newSel.primary) && newSel.primary.to <= changes.newLength
                        ? startState.selection.replaceRange(newSel.primary) : undefined
                };
            }
            view.dispatch(tr, { scrollIntoView: true, annotations: Transaction.userEvent.of("input") });
            return true;
        }
        else if (newSel && !newSel.primary.eq(sel)) {
            var scrollIntoView = false, annotations;
            if (view.inputState.lastSelectionTime > Date.now() - 50) {
                if (view.inputState.lastSelectionOrigin == "keyboardselection")
                    { scrollIntoView = true; }
                else
                    { annotations = Transaction.userEvent.of(view.inputState.lastSelectionOrigin); }
            }
            view.dispatch({ selection: newSel, scrollIntoView: scrollIntoView, annotations: annotations });
            return true;
        }
        return false;
    }
    function findDiff(a, b, preferredPos, preferredSide) {
        var minLen = Math.min(a.length, b.length);
        var from = 0;
        while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))
            { from++; }
        if (from == minLen && a.length == b.length)
            { return null; }
        var toA = a.length, toB = b.length;
        while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
            toA--;
            toB--;
        }
        if (preferredSide == "end") {
            var adjust = Math.max(0, from - Math.min(toA, toB));
            preferredPos -= toA + adjust - from;
        }
        if (toA < from && a.length < b.length) {
            var move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
            from -= move;
            toB = from + (toB - toA);
            toA = from;
        }
        else if (toB < from) {
            var move$1 = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
            from -= move$1;
            toA = from + (toA - toB);
            toB = from;
        }
        return { from: from, toA: toA, toB: toB };
    }
    var DOMReader = function DOMReader(points) {
        this.points = points;
        this.text = "";
    };
    DOMReader.prototype.readRange = function readRange (start, end) {
        if (!start)
            { return; }
        var parent = start.parentNode;
        for (var cur = start;;) {
            this.findPointBefore(parent, cur);
            this.readNode(cur);
            var next = cur.nextSibling;
            if (next == end)
                { break; }
            var view = ContentView.get(cur), nextView = ContentView.get(next);
            if ((view ? view.breakAfter : isBlockElement(cur)) ||
                ((nextView ? nextView.breakAfter : isBlockElement(next)) && !(cur.nodeName == "BR" && !cur.cmIgnore)))
                { this.text += LineSep; }
            cur = next;
        }
        this.findPointBefore(parent, end);
    };
    DOMReader.prototype.readNode = function readNode (node) {
        if (node.cmIgnore)
            { return; }
        var view = ContentView.get(node);
        var fromView = view && view.overrideDOMText;
        var text;
        if (fromView != null)
            { text = fromView.sliceString(0, undefined, LineSep); }
        else if (node.nodeType == 3)
            { text = node.nodeValue; }
        else if (node.nodeName == "BR")
            { text = node.nextSibling ? LineSep : ""; }
        else if (node.nodeType == 1)
            { this.readRange(node.firstChild, null); }
        if (text != null) {
            this.findPointIn(node, text.length);
            this.text += text;
        }
    };
    DOMReader.prototype.findPointBefore = function findPointBefore (node, next) {
        for (var i = 0, list = this.points; i < list.length; i += 1)
            {
                var point = list[i];

                if (point.node == node && node.childNodes[point.offset] == next)
                { point.pos = this.text.length;
            } }
    };
    DOMReader.prototype.findPointIn = function findPointIn (node, maxLen) {
        for (var i = 0, list = this.points; i < list.length; i += 1)
            {
                var point = list[i];

                if (point.node == node)
                { point.pos = this.text.length + Math.min(point.offset, maxLen);
            } }
    };
    function isBlockElement(node) {
        return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
    }
    var DOMPoint = function DOMPoint(node, offset) {
        this.node = node;
        this.offset = offset;
        this.pos = -1;
    };
    function selectionPoints(dom, root) {
        var result = [];
        if (root.activeElement != dom)
            { return result; }
        var ref = getSelection(root);
        var anchorNode = ref.anchorNode;
        var anchorOffset = ref.anchorOffset;
        var focusNode = ref.focusNode;
        var focusOffset = ref.focusOffset;
        if (anchorNode) {
            result.push(new DOMPoint(anchorNode, anchorOffset));
            if (focusNode != anchorNode || focusOffset != anchorOffset)
                { result.push(new DOMPoint(focusNode, focusOffset)); }
        }
        return result;
    }
    function selectionFromPoints(points, base) {
        if (points.length == 0)
            { return null; }
        var anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
        return anchor > -1 && head > -1 ? EditorSelection.single(anchor + base, head + base) : null;
    }
    function dispatchKey(view, name, code) {
        var options = { key: name, code: name, keyCode: code, which: code, cancelable: true };
        var down = new KeyboardEvent("keydown", options);
        view.contentDOM.dispatchEvent(down);
        var up = new KeyboardEvent("keyup", options);
        view.contentDOM.dispatchEvent(up);
        return down.defaultPrevented || up.defaultPrevented;
    }

    // The editor's update state machine looks something like this:
    //
    //     Idle → Updating ⇆ Idle (unchecked) → Measuring → Idle
    //                                         ↑      ↓
    //                                         Updating (measure)
    //
    // The difference between 'Idle' and 'Idle (unchecked)' lies in
    // whether a layout check has been scheduled. A regular update through
    // the `update` method updates the DOM in a write-only fashion, and
    // relies on a check (scheduled with `requestAnimationFrame`) to make
    // sure everything is where it should be and the viewport covers the
    // visible code. That check continues to measure and then optionally
    // update until it reaches a coherent state.
    /// An editor view represents the editor's user interface. It holds
    /// the editable DOM surface, and possibly other elements such as the
    /// line number gutter. It handles events and dispatches state
    /// transactions for editing actions.
    var EditorView = function EditorView(
    /// Configuration options.
    config) {
        var this$1 = this;
        if ( config === void 0 ) config = {};

        this.plugins = [];
        this.editorAttrs = {};
        this.contentAttrs = {};
        this.bidiCache = [];
        /// @internal
        this.updateState = 2 /* Updating */;
        /// @internal
        this.measureScheduled = -1;
        /// @internal
        this.measureRequests = [];
        this.contentDOM = document.createElement("div");
        this.scrollDOM = document.createElement("div");
        this.scrollDOM.className = themeClass("scroller");
        this.scrollDOM.appendChild(this.contentDOM);
        this.dom = document.createElement("div");
        this.dom.appendChild(this.scrollDOM);
        this._dispatch = config.dispatch || (function (tr) { return this$1.update([tr]); });
        this.dispatch = this.dispatch.bind(this);
        this.root = (config.root || document);
        this.viewState = new ViewState(config.state || EditorState.create());
        this.plugins = this.state.facet(viewPlugin).map(function (spec) { return PluginInstance.create(spec, this$1); });
        this.observer = new DOMObserver(this, function (from, to, typeOver) { return applyDOMChange(this$1, from, to, typeOver); }, function () { return this$1.measure(); });
        this.docView = new DocView(this);
        this.inputState = new InputState(this);
        this.mountStyles();
        this.updateAttrs();
        this.updateState = 0 /* Idle */;
        ensureGlobalHandler();
        this.requestMeasure();
        if (config.parent)
            { config.parent.appendChild(this.dom); }
    };

    var prototypeAccessors$23 = { state: { configurable: true },viewport: { configurable: true },visibleRanges: { configurable: true },themeClasses: { configurable: true },contentHeight: { configurable: true },defaultCharacterWidth: { configurable: true },defaultLineHeight: { configurable: true },textDirection: { configurable: true },lineWrapping: { configurable: true },hasFocus: { configurable: true } };
    /// The current editor state.
    prototypeAccessors$23.state.get = function () { return this.viewState.state; };
    /// To be able to display large documents without consuming too much
    /// memory or overloading the browser, CodeMirror only draws the
    /// code that is visible (plus a margin around it) to the DOM. This
    /// property tells you the extent of the current drawn viewport, in
    /// document positions.
    prototypeAccessors$23.viewport.get = function () { return this.viewState.viewport; };
    /// When there are, for example, large collapsed ranges in the
    /// viewport, its size can be a lot bigger than the actual visible
    /// content. Thus, if you are doing something like styling the
    /// content in the viewport, it is preferable to only do so for
    /// these ranges, which are the subset of the viewport that is
    /// actually drawn.
    prototypeAccessors$23.visibleRanges.get = function () { return this.viewState.visibleRanges; };
    EditorView.prototype.dispatch = function dispatch () {
            var ref;

            var input = [], len = arguments.length;
            while ( len-- ) input[ len ] = arguments[ len ];
        this._dispatch(input.length == 1 && input[0] instanceof Transaction ? input[0]
            : (ref = this.state).update.apply(ref, input));
    };
    /// Update the view for the given array of transactions. This will
    /// update the visible document and selection to match the state
    /// produced by the transactions, and notify view plugins of the
    /// change. You should usually call
    /// [`dispatch`](#view.EditorView.dispatch) instead, which uses this
    /// as a primitive.
    EditorView.prototype.update = function update (transactions) {
        if (this.updateState != 0 /* Idle */)
            { throw new Error("Calls to EditorView.update are not allowed while an update is in progress"); }
        this.updateState = 2 /* Updating */;
        var state = this.state;
        for (var i = 0, list = transactions; i < list.length; i += 1) {
            var tr = list[i];

                if (tr.startState != state)
                { throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state."); }
            state = tr.state;
        }
        var update = new ViewUpdate(this, state, transactions);
        var scrollTo = transactions.some(function (tr) { return tr.scrolledIntoView; }) ? state.selection.primary : null;
        this.viewState.update(update, scrollTo);
        this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
        if (!update.empty)
            { this.updatePlugins(update); }
        var redrawn = this.docView.update(update);
        if (this.state.facet(styleModule) != this.styleModules)
            { this.mountStyles(); }
        this.updateAttrs();
        this.updateState = 0 /* Idle */;
        if (redrawn || scrollTo || this.viewState.mustEnforceCursorAssoc)
            { this.requestMeasure(); }
        for (var i$1 = 0, list$1 = this.state.facet(updateListener); i$1 < list$1.length; i$1 += 1)
            {
                var listener = list$1[i$1];

                listener(update);
            }
    };
    /// Reset the view to the given state. (This will cause the entire
    /// document to be redrawn and all view plugins to be reinitialized,
    /// so you should probably only use it when the new state isn't
    /// derived from the old state. Otherwise, use
    /// [`update`](#view.EditorView.update) instead.)
    EditorView.prototype.setState = function setState (newState) {
            var this$1 = this;

        if (this.updateState != 0 /* Idle */)
            { throw new Error("Calls to EditorView.setState are not allowed while an update is in progress"); }
        this.updateState = 2 /* Updating */;
        for (var i = 0, list = this.plugins; i < list.length; i += 1)
            {
                var plugin = list[i];

                plugin.destroy(this);
            }
        this.viewState = new ViewState(newState);
        this.plugins = newState.facet(viewPlugin).map(function (spec) { return PluginInstance.create(spec, this$1); });
        this.docView = new DocView(this);
        this.inputState.ensureHandlers(this);
        this.mountStyles();
        this.updateAttrs();
        this.bidiCache = [];
        this.updateState = 0 /* Idle */;
        this.requestMeasure();
    };
    EditorView.prototype.updatePlugins = function updatePlugins (update) {
        var prevSpecs = update.prevState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
        if (prevSpecs != specs) {
            var newPlugins = [], reused = [];
            for (var i$1 = 0, list = specs; i$1 < list.length; i$1 += 1) {
                var spec = list[i$1];

                    var found = prevSpecs.indexOf(spec);
                if (found < 0) {
                    newPlugins.push(PluginInstance.create(spec, this));
                }
                else {
                    var plugin = this.plugins[found].update(update);
                    reused.push(plugin);
                    newPlugins.push(plugin);
                }
            }
            for (var i$2 = 0, list$1 = this.plugins; i$2 < list$1.length; i$2 += 1)
                {
                    var plugin$1 = list$1[i$2];

                    if (reused.indexOf(plugin$1) < 0)
                    { plugin$1.destroy(this);
                } }
            this.plugins = newPlugins;
            this.inputState.ensureHandlers(this);
        }
        else {
            for (var i = 0; i < this.plugins.length; i++)
                { this.plugins[i] = this.plugins[i].update(update); }
        }
    };
    /// @internal
    EditorView.prototype.measure = function measure () {
            var this$1 = this;

        if (this.measureScheduled > -1)
            { cancelAnimationFrame(this.measureScheduled); }
        this.measureScheduled = 1; // Prevent requestMeasure calls from scheduling another animation frame
        var updated = null;
        for (var i = 0;; i++) {
            this.updateState = 1 /* Measuring */;
            var changed = this.viewState.measure(this.docView, i > 0);
            var measuring = this.measureRequests;
            if (!changed && !measuring.length && this.viewState.scrollTo == null)
                { break; }
            this.measureRequests = [];
            if (i > 5) {
                console.warn("Viewport failed to stabilize");
                break;
            }
            var measured = measuring.map(function (m) {
                try {
                    return m.read(this$1);
                }
                catch (e) {
                    logException(this$1.state, e);
                    return BadMeasure;
                }
            });
            var update = new ViewUpdate(this, this.state);
            update.flags |= changed;
            if (!updated)
                { updated = update; }
            else
                { updated.flags |= changed; }
            this.updateState = 2 /* Updating */;
            this.updatePlugins(update);
            if (changed)
                { this.docView.update(update); }
            for (var i$1 = 0; i$1 < measuring.length; i$1++)
                { if (measured[i$1] != BadMeasure) {
                    try {
                        measuring[i$1].write(measured[i$1], this);
                    }
                    catch (e) {
                        logException(this.state, e);
                    }
                } }
            if (this.viewState.scrollTo) {
                this.docView.scrollPosIntoView(this.viewState.scrollTo.head, this.viewState.scrollTo.assoc);
                this.viewState.scrollTo = null;
            }
            if (!(changed & 4 /* Viewport */) && this.measureRequests.length == 0)
                { break; }
        }
        this.updateState = 0 /* Idle */;
        this.measureScheduled = -1;
        if (updated)
            { for (var i$2 = 0, list = this.state.facet(updateListener); i$2 < list.length; i$2 += 1)
                {
                        var listener = list[i$2];

                        listener(updated);
                    } }
    };
    /// Get the CSS classes for the currently active editor themes.
    prototypeAccessors$23.themeClasses.get = function () {
        return baseThemeID + " " +
            (this.state.facet(darkTheme) ? baseDarkThemeID : baseLightThemeID) + " " +
            this.state.facet(theme);
    };
    EditorView.prototype.updateAttrs = function updateAttrs$1 () {
        var editorAttrs = combineAttrs(this.state.facet(editorAttributes), {
            class: themeClass("wrap") + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        });
        updateAttrs(this.dom, this.editorAttrs, editorAttrs);
        this.editorAttrs = editorAttrs;
        var contentAttrs = combineAttrs(this.state.facet(contentAttributes), {
            spellcheck: "false",
            contenteditable: String(this.state.facet(editable)),
            class: themeClass("content"),
            style: ((browser.tabSize) + ": " + (this.state.tabSize)),
            role: "textbox",
            "aria-multiline": "true"
        });
        updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
        this.contentAttrs = contentAttrs;
    };
    EditorView.prototype.mountStyles = function mountStyles () {
        this.styleModules = this.state.facet(styleModule);
        StyleModule.mount(this.root, this.styleModules.concat(baseTheme).reverse());
    };
    /// Find the DOM parent node and offset (child offset if `node` is
    /// an element, character offset when it is a text node) at the
    /// given document position.
    EditorView.prototype.domAtPos = function domAtPos (pos) {
        return this.docView.domAtPos(pos);
    };
    /// Find the document position at the given DOM node. Can be useful
    /// for associating positions with DOM events. Will raise an error
    /// when `node` isn't part of the editor content.
    EditorView.prototype.posAtDOM = function posAtDOM (node, offset) {
            if ( offset === void 0 ) offset = 0;

        return this.docView.posFromDOM(node, offset);
    };
    EditorView.prototype.readMeasured = function readMeasured () {
        if (this.updateState == 2 /* Updating */)
            { throw new Error("Reading the editor layout isn't allowed during an update"); }
        if (this.updateState == 0 /* Idle */ && this.measureScheduled > -1)
            { this.measure(); }
    };
    /// Make sure plugins get a chance to measure the DOM before the
    /// next frame. Calling this is preferable to messing with the DOM
    /// directly from, for example, an even handler, because it'll make
    /// sure measuring and drawing done by other components is
    /// synchronized, avoiding unnecessary DOM layout computations.
    EditorView.prototype.requestMeasure = function requestMeasure (request) {
            var this$1 = this;

        if (this.measureScheduled < 0)
            { this.measureScheduled = requestAnimationFrame(function () { return this$1.measure(); }); }
        if (request) {
            if (request.key != null)
                { for (var i = 0; i < this.measureRequests.length; i++) {
                    if (this.measureRequests[i].key === request.key) {
                        this.measureRequests[i] = request;
                        return;
                    }
                } }
            this.measureRequests.push(request);
        }
    };
    /// Collect all values provided by the active plugins for a given
    /// field.
    EditorView.prototype.pluginField = function pluginField (field) {
        // FIXME make this error when called during plugin updating
        var result = [];
        for (var i = 0, list = this.plugins; i < list.length; i += 1)
            {
                var plugin = list[i];

                plugin.takeField(field, result);
            }
        return result;
    };
    /// Get the value of a specific plugin, if present. Note that
    /// plugins that crash can be dropped from a view, so even when you
    /// know you registered a given plugin, it is recommended to check
    /// the return value of this method.
    EditorView.prototype.plugin = function plugin (plugin$1) {
        for (var i = 0, list = this.plugins; i < list.length; i += 1)
            {
                var inst = list[i];

                if (inst.spec == plugin$1)
                { return inst.value;
            } }
        return null;
    };
    /// Find the line or block widget at the given vertical position.
    /// `editorTop`, if given, provides the vertical position of the top
    /// of the editor. It defaults to the editor's screen position
    /// (which will force a DOM layout).
    EditorView.prototype.blockAtHeight = function blockAtHeight (height, editorTop) {
        this.readMeasured();
        return this.viewState.blockAtHeight(height, ensureTop(editorTop, this.contentDOM));
    };
    /// Find information for the visual line (see
    /// [`visualLineAt`](#view.EditorView.visualLineAt)) at the given
    /// vertical position. The resulting block info might hold another
    /// array of block info structs in its `type` field if this line
    /// consists of more than one block.
    ///
    /// Heights are interpreted relative to the given `editorTop`
    /// position. When not given, the top position of the editor's
    /// [content element](#view.EditorView.contentDOM) is taken.
    EditorView.prototype.visualLineAtHeight = function visualLineAtHeight (height, editorTop) {
        this.readMeasured();
        return this.viewState.lineAtHeight(height, ensureTop(editorTop, this.contentDOM));
    };
    /// Find the extent and height of the visual line (the content shown
    /// in the editor as a line, which may be smaller than a document
    /// line when broken up by block widgets, or bigger than a document
    /// line when line breaks are covered by replaced decorations) at
    /// the given position.
    ///
    /// Vertical positions are computed relative to the `editorTop`
    /// argument. You can pass `view.dom.getBoundingClientRect().top`
    /// here to get screen coordinates.
    EditorView.prototype.visualLineAt = function visualLineAt (pos, editorTop) {
            if ( editorTop === void 0 ) editorTop = 0;

        return this.viewState.lineAt(pos, editorTop);
    };
    /// Iterate over the height information of the lines in the
    /// viewport.
    EditorView.prototype.viewportLines = function viewportLines (f, editorTop) {
        var ref = this.viewport;
            var from = ref.from;
            var to = ref.to;
        this.viewState.forEachLine(from, to, f, ensureTop(editorTop, this.contentDOM));
    };
    /// The editor's total content height.
    prototypeAccessors$23.contentHeight.get = function () {
        return this.viewState.heightMap.height + this.viewState.paddingTop + this.viewState.paddingBottom;
    };
    /// Move a cursor position by [grapheme
    /// cluster](#text.nextClusterBreak). `forward` determines whether
    /// the motion is away from the line start, or towards it. Motion in
    /// bidirectional text is in visual order, in the editor's [text
    /// direction](#view.EditorView.textDirection). When the start
    /// position was the last one on the line, the returned position
    /// will be across the line break. If there is no further line, the
    /// original position is returned.
    EditorView.prototype.moveByChar = function moveByChar$1 (start, forward, by) {
        return moveByChar(this, start, forward, by);
    };
    /// Move a cursor position across the next group of either
    /// [letters](#state.EditorState.charCategorizer) or non-letter
    /// non-whitespace characters.
    EditorView.prototype.moveByGroup = function moveByGroup (start, forward) {
            var this$1 = this;

        return moveByChar(this, start, forward, function (initial) { return byGroup(this$1, start.head, initial); });
    };
    /// Move to the next line boundary in the given direction. If
    /// `includeWrap` is true, line wrapping is on, and there is a
    /// further wrap point on the current line, the wrap point will be
    /// returned. Otherwise this function will return the start or end
    /// of the line.
    EditorView.prototype.moveToLineBoundary = function moveToLineBoundary$1 (start, forward, includeWrap) {
            if ( includeWrap === void 0 ) includeWrap = true;

        return moveToLineBoundary(this, start, forward, includeWrap);
    };
    /// Move a cursor position vertically. When `distance` isn't given,
    /// it defaults to moving to the next line (including wrapped
    /// lines). Otherwise, `distance` should provide a positive distance
    /// in pixels.
    ///
    /// When `start` has a
    /// [`goalColumn`](#state.SelectionRange.goalColumn), the vertical
    /// motion will use that as a target horizontal position. Otherwise,
    /// the cursor's own horizontal position is used. The returned
    /// cursor will have its goal column set to whichever column was
    /// used.
    EditorView.prototype.moveVertically = function moveVertically$1 (start, forward, distance) {
        return moveVertically(this, start, forward, distance);
    };
    /// Scroll the given document position into view.
    EditorView.prototype.scrollPosIntoView = function scrollPosIntoView (pos) {
        this.viewState.scrollTo = EditorSelection.cursor(pos);
        this.requestMeasure();
    };
    /// Get the document position at the given screen coordinates.
    /// Returns -1 if no valid position could be found.
    EditorView.prototype.posAtCoords = function posAtCoords$1 (coords) {
        this.readMeasured();
        // FIXME return null instead, so you at least get a type error
        // when you forget the failure case?
        return posAtCoords(this, coords);
    };
    /// Get the screen coordinates at the given document position.
    EditorView.prototype.coordsAtPos = function coordsAtPos (pos, side) {
            if ( side === void 0 ) side = 1;

        this.readMeasured();
        var line = this.state.doc.lineAt(pos), order = this.bidiSpans(line);
        var rect = this.docView.coordsAt(pos, side);
        if (!rect || rect.left == rect.right)
            { return rect; }
        var span = order[BidiSpan.find(order, pos - line.from, -1, side)];
        return flattenRect(rect, (span.dir == Direction.LTR) == (side > 0));
    };
    /// The default width of a character in the editor. May not
    /// accurately reflect the width of all characters.
    prototypeAccessors$23.defaultCharacterWidth.get = function () { return this.viewState.heightOracle.charWidth; };
    /// The default height of a line in the editor.
    prototypeAccessors$23.defaultLineHeight.get = function () { return this.viewState.heightOracle.lineHeight; };
    /// The text direction (`direction` CSS property) of the editor.
    prototypeAccessors$23.textDirection.get = function () { return this.viewState.heightOracle.direction; };
    /// Whether this editor [wraps lines](#view.EditorView.lineWrapping)
    /// (as determined by the `white-space` CSS property of its content
    /// element).
    prototypeAccessors$23.lineWrapping.get = function () { return this.viewState.heightOracle.lineWrapping; };
    /// Returns the bidirectional text structure of the given line
    /// (which should be in the current document) as an array of span
    /// objects. The order of these spans matches the [text
    /// direction](#view.EditorView.textDirection)—if that is
    /// left-to-right, the leftmost spans come first, otherwise the
    /// rightmost spans come first.
    EditorView.prototype.bidiSpans = function bidiSpans (line) {
        if (line.length > MaxBidiLine)
            { return trivialOrder(line.length); }
        var dir = this.textDirection;
        for (var i = 0, list = this.bidiCache; i < list.length; i += 1)
            {
                var entry = list[i];

                if (entry.from == line.from && entry.dir == dir)
                { return entry.order;
            } }
        var order = computeOrder(line.slice(), this.textDirection);
        this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
        return order;
    };
    /// Check whether the editor has focus.
    prototypeAccessors$23.hasFocus.get = function () {
        return this.root.activeElement == this.contentDOM;
    };
    /// Put focus on the editor.
    EditorView.prototype.focus = function focus () {
            var this$1 = this;

        this.observer.ignore(function () {
            focusPreventScroll(this$1.contentDOM);
            this$1.docView.updateSelection();
        });
    };
    /// Clean up this editor view, removing its element from the
    /// document, unregistering event handlers, and notifying
    /// plugins. The view instance can no longer be used after
    /// calling this.
    EditorView.prototype.destroy = function destroy () {
        for (var i = 0, list = this.plugins; i < list.length; i += 1)
            {
                var plugin = list[i];

                plugin.destroy(this);
            }
        this.inputState.destroy();
        this.dom.remove();
        this.observer.destroy();
        if (this.measureScheduled > -1)
            { cancelAnimationFrame(this.measureScheduled); }
    };
    /// Facet that can be used to add DOM event handlers. The value
    /// should be an object mapping event names to handler functions. The
    /// first such function to return true will be assumed to have handled
    /// that event, and no other handlers or built-in behavior will be
    /// activated for it.
    EditorView.domEventHandlers = function domEventHandlers (handlers) {
        return ViewPlugin.define(function () { return ({}); }).eventHandlers(handlers);
    };
    /// Create a theme extension. The argument object should map [theme
    /// selectors](#view.themeClass) to styles, which are (potentially
    /// nested) [style
    /// declarations](https://github.com/marijnh/style-mod#documentation)
    /// providing the CSS styling for the selector.
    ///
    /// When `dark` is set to true, the theme will be marked as dark,
    /// which causes the [base theme](#view.EditorView^baseTheme) rules
    /// marked with `@dark` to apply instead of those marked with
    /// `@light`.
    EditorView.theme = function theme$1 (spec, options) {
        var prefix = StyleModule.newName();
        var result = [theme.of(prefix), styleModule.of(buildTheme(prefix, spec))];
        if (options && options.dark)
            { result.push(darkTheme.of(true)); }
        return result;
    };
    /// Create an extension that adds styles to the base theme. The
    /// given object works much like the one passed to
    /// [`theme`](#view.EditorView^theme), but allows selectors to be
    /// marked by adding `@dark` to their end to only apply when there
    /// is a dark theme active, or by `@light` to only apply when there
    /// is _no_ dark theme active.
    EditorView.baseTheme = function baseTheme (spec) {
        return precedence(styleModule.of(buildTheme(baseThemeID, spec)), "fallback");
    };

    Object.defineProperties( EditorView.prototype, prototypeAccessors$23 );
    /// Facet to add a [style
    /// module](https://github.com/marijnh/style-mod#readme) to an editor
    /// view. The view will ensure that the module is registered in its
    /// [document root](#view.EditorView.constructor^config.root).
    EditorView.styleModule = styleModule;
    /// Allows you to provide a function that should be called when the
    /// library catches an exception from an extension (mostly from view
    /// plugins, but may be used by other extensions to route exceptions
    /// from user-code-provided callbacks). This is mostly useful for
    /// debugging and logging. See [`logException`](#view.logException).
    EditorView.exceptionSink = exceptionSink;
    /// A facet that can be used to have a listener function be notified
    /// every time the view updates.
    EditorView.updateListener = updateListener;
    /// Facet that controls whether the editor content is editable. When
    /// its the highest-precedence value is `false`, editing is
    /// disabled, and the content element will no longer have its
    /// `contenteditable` attribute set to `true`. (Note that this
    /// doesn't affect API calls that change the editor content, even
    /// when those are bound to keys or buttons.)
    EditorView.editable = editable;
    /// Facet used to configure whether a given selection drag event
    /// should move or copy the selection. The given predicate will be
    /// called with the `mousedown` event, and can return `true` when
    /// the drag should move the content.
    EditorView.dragMovesSelection = dragMovesSelection;
    /// Facet used to configure whether a given selecting click adds
    /// a new range to the existing selection or replaces it entirely.
    EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
    /// Allows you to influence the way mouse selection happens. The
    /// functions in this facet will be called for a `mousedown` event
    /// on the editor, and can return an object that overrides the way a
    /// selection is computed from that mouse click or drag.
    EditorView.mouseSelectionStyle = mouseSelectionStyle;
    /// A facet that determines which [decorations](#view.Decoration)
    /// are shown in the view. See also [view
    /// plugins](#view.EditorView^decorations), which have a separate
    /// mechanism for providing decorations.
    EditorView.decorations = decorations;
    /// An extension that enables line wrapping in the editor.
    EditorView.lineWrapping = EditorView.theme({ content: { whiteSpace: "pre-wrap" } });
    /// Facet that provides attributes for the editor's editable DOM
    /// element.
    EditorView.contentAttributes = contentAttributes;
    /// Facet that provides editor DOM attributes for the editor's
    /// outer element.
    EditorView.editorAttributes = editorAttributes;
    // Maximum line length for which we compute accurate bidi info
    var MaxBidiLine = 4096;
    function ensureTop(given, dom) {
        return given == null ? dom.getBoundingClientRect().top : given;
    }
    var resizeDebounce = -1;
    function ensureGlobalHandler() {
        window.addEventListener("resize", function () {
            if (resizeDebounce == -1)
                { resizeDebounce = setTimeout(handleResize, 50); }
        });
    }
    function handleResize() {
        resizeDebounce = -1;
        var found = document.querySelectorAll(".cm-content");
        for (var i = 0; i < found.length; i++) {
            var docView = ContentView.get(found[i]);
            if (docView)
                { docView.editorView.requestMeasure(); }
        }
    }
    var BadMeasure = {};
    var CachedOrder = function CachedOrder(from, to, dir, order) {
        this.from = from;
        this.to = to;
        this.dir = dir;
        this.order = order;
    };
    CachedOrder.update = function update (cache, changes) {
        if (changes.empty)
            { return cache; }
        var result = [], lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;
        for (var i = Math.max(0, cache.length - 10); i < cache.length; i++) {
            var entry = cache[i];
            if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to))
                { result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order)); }
        }
        return result;
    };

    var currentPlatform = typeof navigator == "undefined" ? "key"
        : /Mac/.test(navigator.platform) ? "mac"
            : /Win/.test(navigator.platform) ? "win"
                : /Linux|X11/.test(navigator.platform) ? "linux"
                    : "key";
    function normalizeKeyName(name, platform) {
        var parts = name.split(/-(?!$)/);
        var result = parts[parts.length - 1];
        if (result == "Space")
            { result = " "; }
        var alt, ctrl, shift, meta;
        for (var i = 0; i < parts.length - 1; ++i) {
            var mod = parts[i];
            if (/^(cmd|meta|m)$/i.test(mod))
                { meta = true; }
            else if (/^a(lt)?$/i.test(mod))
                { alt = true; }
            else if (/^(c|ctrl|control)$/i.test(mod))
                { ctrl = true; }
            else if (/^s(hift)?$/i.test(mod))
                { shift = true; }
            else if (/^mod$/i.test(mod)) {
                if (platform == "mac")
                    { meta = true; }
                else
                    { ctrl = true; }
            }
            else
                { throw new Error("Unrecognized modifier name: " + mod); }
        }
        if (alt)
            { result = "Alt-" + result; }
        if (ctrl)
            { result = "Ctrl-" + result; }
        if (meta)
            { result = "Meta-" + result; }
        if (shift)
            { result = "Shift-" + result; }
        return result;
    }
    function modifiers(name, event, shift) {
        if (event.altKey)
            { name = "Alt-" + name; }
        if (event.ctrlKey)
            { name = "Ctrl-" + name; }
        if (event.metaKey)
            { name = "Meta-" + name; }
        if (shift !== false && event.shiftKey)
            { name = "Shift-" + name; }
        return name;
    }
    var keymaps = Facet.define();
    var handleKeyEvents = EditorView.domEventHandlers({
        keydown: function keydown(event, view) {
            return runHandlers(view.state.facet(keymaps), event, view, "editor");
        }
    });
    /// Create a view extension that registers a keymap.
    ///
    /// You can add multiple keymap extensions to an editor. Their
    /// priorities determine their precedence (the ones specified early or
    /// with high priority get checked first). When a handler has returned
    /// `true` for a given key, no further handlers are called.
    ///
    /// When a key is bound multiple times (either in a single keymap or
    /// in separate maps), the bound commands all get a chance to handle
    /// the key stroke, in order of precedence, until one of them returns
    /// true.
    function keymap(bindings, platform) {
        return [handleKeyEvents, keymaps.of(buildKeymap(bindings, platform))];
    }
    /// Run the key handlers registered for a given scope. Returns true if
    /// any of them handled the event.
    function runScopeHandlers(view, event, scope) {
        return runHandlers(view.state.facet(keymaps), event, view, scope);
    }
    var storedPrefix = null;
    var PrefixTimeout = 4000;
    function buildKeymap(bindings, platform) {
        if ( platform === void 0 ) platform = currentPlatform;

        var bound = Object.create(null);
        var isPrefix = Object.create(null);
        var checkPrefix = function (name, is) {
            var current = isPrefix[name];
            if (current == null)
                { isPrefix[name] = is; }
            else if (current != is)
                { throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix"); }
        };
        var add = function (scope, key, command, preventDefault) {
            var scopeObj = bound[scope] || (bound[scope] = Object.create(null));
            var parts = key.split(/ (?!$)/).map(function (k) { return normalizeKeyName(k, platform); });
            var loop = function ( i ) {
                var prefix = parts.slice(0, i).join(" ");
                checkPrefix(prefix, true);
                if (!scopeObj[prefix])
                    { scopeObj[prefix] = {
                        preventDefault: true,
                        commands: [function (view) {
                                var ourObj = storedPrefix = { view: view, prefix: prefix, scope: scope };
                                setTimeout(function () { if (storedPrefix == ourObj)
                                    { storedPrefix = null; } }, PrefixTimeout);
                                return true;
                            }]
                    }; }
            };

            for (var i = 1; i < parts.length; i++) loop( i );
            var full = parts.join(" ");
            checkPrefix(full, false);
            var binding = scopeObj[full] || (scopeObj[full] = { preventDefault: false, commands: [] });
            binding.commands.push(command);
            if (preventDefault)
                { binding.preventDefault = true; }
        };
        for (var i$1 = 0, list$1 = bindings; i$1 < list$1.length; i$1 += 1) {
            var b = list$1[i$1];

            var name = b[platform] || b.key;
            if (!name)
                { continue; }
            for (var i = 0, list = b.scope ? b.scope.split(" ") : ["editor"]; i < list.length; i += 1) {
                var scope = list[i];

                add(scope, name, b.run, b.preventDefault);
                if (b.shift)
                    { add(scope, "Shift-" + name, b.shift, b.preventDefault); }
            }
        }
        return bound;
    }
    function runHandlers(maps, event, view, scope) {
        var name = keyName(event), isChar = name.length == 1 && name != " ";
        var prefix = "";
        if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
            prefix = storedPrefix.prefix + " ";
            storedPrefix = null;
        }
        var fallthrough = !!prefix;
        var runFor = function (binding) {
            if (binding) {
                for (var i = 0, list = binding.commands; i < list.length; i += 1)
                    {
                    var cmd = list[i];

                    if (cmd(view))
                        { return true;
                } }
                if (binding.preventDefault)
                    { fallthrough = true; }
            }
            return false;
        };
        for (var i = 0, list = maps; i < list.length; i += 1) {
            var map = list[i];

            var scopeObj = map[scope], baseName = (void 0);
            if (!scopeObj)
                { continue; }
            if (runFor(scopeObj[prefix + modifiers(name, event, !isChar)]))
                { return true; }
            if (isChar && (event.shiftKey || event.altKey || event.metaKey) &&
                (baseName = base[event.keyCode]) && baseName != name) {
                if (runFor(scopeObj[prefix + modifiers(baseName, event, true)]))
                    { return true; }
            }
            else if (isChar && event.shiftKey) {
                if (runFor(scopeObj[prefix + modifiers(name, event, true)]))
                    { return true; }
            }
        }
        return fallthrough;
    }

    var field = StateField.define({
        create: function create(state) {
            return decorateSelections(state.selection);
        },
        update: function update(deco, tr) {
            return tr.docChanged || tr.selection ? decorateSelections(tr.state.selection) : deco;
        },
        provide: [EditorView.decorations]
    });
    /// Returns an extension that enables multiple selections for the
    /// editor. Secondary cursors and selected ranges are drawn with
    /// simple decorations, and might not look the same as the primary
    /// native selection.
    function multipleSelections() {
        return [
            EditorState.allowMultipleSelections.of(true),
            field
        ];
    }
    var CursorWidget = /*@__PURE__*/(function (WidgetType) {
        function CursorWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) CursorWidget.__proto__ = WidgetType;
        CursorWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        CursorWidget.prototype.constructor = CursorWidget;

        CursorWidget.prototype.toDOM = function toDOM () {
            var span = document.createElement("span");
            span.className = themeClass("secondaryCursor");
            return span;
        };

        return CursorWidget;
    }(WidgetType));
    CursorWidget.deco = Decoration.widget({ widget: new CursorWidget(null) });
    var rangeMark = Decoration.mark({ class: themeClass("secondarySelection") });
    function decorateSelections(selection) {
        var ranges = selection.ranges;
        var primaryIndex = selection.primaryIndex;
        if (ranges.length == 1)
            { return Decoration.none; }
        var deco = [];
        for (var i = 0; i < ranges.length; i++)
            { if (i != primaryIndex) {
                var range = ranges[i];
                deco.push(range.empty ? CursorWidget.deco.range(range.from) : rangeMark.range(ranges[i].from, ranges[i].to));
            } }
        return Decoration.set(deco);
    }

    var Specials = /[\0-\x08\n-\x1F\x7F-\x9F\xAD\u061C\u200B\u200C\u200E\u200F\u2028\u2029\uFEFF\uFFF9-\uFFFC]/g;
    var Names = {
        0: "null",
        7: "bell",
        8: "backspace",
        10: "newline",
        11: "vertical tab",
        13: "carriage return",
        27: "escape",
        8203: "zero width space",
        8204: "zero width non-joiner",
        8205: "zero width joiner",
        8206: "left-to-right mark",
        8207: "right-to-left mark",
        8232: "line separator",
        8233: "paragraph separator",
        65279: "zero width no-break space",
        65532: "object replacement"
    };
    var _supportsTabSize = null;
    function supportsTabSize() {
        if (_supportsTabSize == null && typeof document != "undefined" && document.body) {
            var styles = document.body.style;
            _supportsTabSize = (styles.tabSize || styles.MozTabSize) != null;
        }
        return _supportsTabSize || false;
    }
    var UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";
    var specialCharConfig = Facet.define({
        combine: function combine(configs) {
            // FIXME make configurations compose properly
            var config = combineConfig(configs, {
                render: null,
                specialChars: Specials,
                addSpecialChars: null
            });
            if (config.replaceTabs = !supportsTabSize())
                { config.specialChars = new RegExp("\t|" + config.specialChars.source, UnicodeRegexpSupport); }
            if (config.addSpecialChars)
                { config.specialChars = new RegExp(config.specialChars.source + "|" + config.addSpecialChars.source, UnicodeRegexpSupport); }
            return config;
        }
    });
    /// Returns an extension that installs highlighting of special
    /// characters.
    function highlightSpecialChars(
    /// Configuration options.
    config) {
        if ( config === void 0 ) config = {};

        var ext = [specialCharConfig.of(config), specialCharPlugin];
        if (!supportsTabSize())
            { ext.push(tabStyleExt); }
        return ext;
    }
    var specialCharPlugin = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.view = view;
            this.decorations = Decoration.none;
            this.decorationCache = Object.create(null);
            this.recompute();
        }
        anonymous.prototype.update = function update (update$1) {
            var confChange = update$1.prevState.facet(specialCharConfig) != update$1.state.facet(specialCharConfig);
            if (confChange)
                { this.decorationCache = Object.create(null); }
            if (confChange || update$1.changes.length || update$1.viewportChanged)
                { this.recompute(); }
        };
        anonymous.prototype.recompute = function recompute () {
            var decorations = [];
            for (var i = 0, list = this.view.visibleRanges; i < list.length; i += 1)
                {
                var ref = list[i];
                var from = ref.from;
                var to = ref.to;

                this.getDecorationsFor(from, to, decorations);
            }
            this.decorations = Decoration.set(decorations);
        };
        anonymous.prototype.getDecorationsFor = function getDecorationsFor (from, to, target) {
            var config = this.view.state.facet(specialCharConfig);
            var ref = this.view.state;
            var doc = ref.doc;
            for (var pos = from, cursor = doc.iterRange(from, to), m = (void 0); !cursor.next().done;) {
                if (!cursor.lineBreak) {
                    while (m = config.specialChars.exec(cursor.value)) {
                        var code = codePointAt(m[0], 0), deco = (void 0);
                        if (code == null)
                            { continue; }
                        if (code == 9) {
                            var line = doc.lineAt(pos + m.index);
                            var size = this.view.state.tabSize, col = countColumn(doc.sliceString(line.from, pos + m.index), 0, size);
                            deco = Decoration.replace({ widget: new TabWidget((size - (col % size)) * this.view.defaultCharacterWidth) });
                        }
                        else {
                            deco = this.decorationCache[code] ||
                                (this.decorationCache[code] = Decoration.replace({ widget: new SpecialCharWidget(config, code) }));
                        }
                        target.push(deco.range(pos + m.index, pos + m.index + m[0].length));
                    }
                }
                pos += cursor.value.length;
            }
        };

        return anonymous;
    }())).decorations();
    // Assigns placeholder characters from the Control Pictures block to
    // ASCII control characters
    function placeHolder(code) {
        if (code >= 32)
            { return null; }
        if (code == 10)
            { return "\u2424"; }
        return String.fromCharCode(9216 + code);
    }
    var DefaultPlaceholder = "\u2022";
    var SpecialCharWidget = /*@__PURE__*/(function (WidgetType) {
        function SpecialCharWidget(options, code) {
            WidgetType.call(this, code);
            this.options = options;
        }

        if ( WidgetType ) SpecialCharWidget.__proto__ = WidgetType;
        SpecialCharWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        SpecialCharWidget.prototype.constructor = SpecialCharWidget;
        SpecialCharWidget.prototype.toDOM = function toDOM () {
            var ph = placeHolder(this.value) || DefaultPlaceholder;
            var desc = "Control character " + (Names[this.value] || this.value);
            var custom = this.options.render && this.options.render(this.value, desc, ph);
            if (custom)
                { return custom; }
            var span = document.createElement("span");
            span.textContent = ph;
            span.title = desc;
            span.setAttribute("aria-label", desc);
            span.style.color = "red";
            return span;
        };
        SpecialCharWidget.prototype.ignoreEvent = function ignoreEvent () { return false; };

        return SpecialCharWidget;
    }(WidgetType));
    var TabWidget = /*@__PURE__*/(function (WidgetType) {
        function TabWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) TabWidget.__proto__ = WidgetType;
        TabWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        TabWidget.prototype.constructor = TabWidget;

        TabWidget.prototype.toDOM = function toDOM () {
            var span = document.createElement("span");
            span.textContent = "\t";
            span.className = tabStyle.tab;
            span.style.width = this.value + "px";
            return span;
        };
        TabWidget.prototype.ignoreEvent = function ignoreEvent () { return false; };

        return TabWidget;
    }(WidgetType));
    var tabStyle = new StyleModule({
        tab: {
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom"
        }
    });
    var tabStyleExt = EditorView.styleModule.of(tabStyle);

    /// @internal
    var __test = { HeightMap: HeightMap, HeightOracle: HeightOracle, MeasuredHeights: MeasuredHeights, QueryType: QueryType, ChangedRange: ChangedRange, computeOrder: computeOrder, moveVisually: moveVisually };

    var _m2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BidiSpan: BidiSpan,
        BlockInfo: BlockInfo,
        get BlockType () { return BlockType; },
        Decoration: Decoration,
        get Direction () { return Direction; },
        EditorView: EditorView,
        PluginField: PluginField,
        ViewPlugin: ViewPlugin,
        ViewUpdate: ViewUpdate,
        WidgetType: WidgetType,
        __test: __test,
        highlightSpecialChars: highlightSpecialChars,
        keymap: keymap,
        logException: logException,
        multipleSelections: multipleSelections,
        runScopeHandlers: runScopeHandlers,
        themeClass: themeClass,
        Range: Range
    });

    var baseTheme$1 = EditorView.baseTheme({
        matchingBracket: { color: "#0b0" },
        nonmatchingBracket: { color: "#a22" }
    });
    var DefaultScanDist = 10000, DefaultBrackets = "()[]{}";
    var bracketMatchingConfig = Facet.define({
        combine: function combine(configs) {
            return combineConfig(configs, {
                afterCursor: true,
                brackets: DefaultBrackets,
                maxScanDistance: DefaultScanDist
            });
        }
    });
    var matchingMark = Decoration.mark({ class: themeClass("matchingBracket") }), nonmatchingMark = Decoration.mark({ class: themeClass("nonmatchingBracket") });
    var bracketMatchingState = StateField.define({
        create: function create() { return Decoration.none; },
        update: function update(deco, tr) {
            if (!tr.docChanged && !tr.selection)
                { return deco; }
            var decorations = [];
            var config = tr.state.facet(bracketMatchingConfig);
            for (var i = 0, list = tr.state.selection.ranges; i < list.length; i += 1) {
                var range = list[i];

                if (!range.empty)
                    { continue; }
                var match = matchBrackets(tr.state, range.head, -1, config)
                    || (range.head > 0 && matchBrackets(tr.state, range.head - 1, 1, config))
                    || (config.afterCursor &&
                        (matchBrackets(tr.state, range.head, 1, config) ||
                            (range.head < tr.state.doc.length && matchBrackets(tr.state, range.head + 1, -1, config))));
                if (!match)
                    { continue; }
                var mark = match.matched ? matchingMark : nonmatchingMark;
                decorations.push(mark.range(match.start.from, match.start.to));
                if (match.end)
                    { decorations.push(mark.range(match.end.from, match.end.to)); }
            }
            return Decoration.set(decorations, true);
        },
        provide: [EditorView.decorations]
    });
    var bracketMatchingUnique = [
        bracketMatchingState,
        baseTheme$1
    ];
    /// Create an extension that enables bracket matching. Whenever the
    /// cursor is next to a bracket, that bracket and the one it matches
    /// are highlighted. Or, when no matching bracket is found, another
    /// highlighting style is used to indicate this.
    function bracketMatching(config) {
        if ( config === void 0 ) config = {};

        return [bracketMatchingConfig.of(config), bracketMatchingUnique];
    }
    function matchingNodes(node, dir, brackets) {
        var byProp = node.prop(dir < 0 ? NodeProp.openedBy : NodeProp.closedBy);
        if (byProp)
            { return byProp; }
        if (node.name.length == 1) {
            var index = brackets.indexOf(node.name);
            if (index > -1 && index % 2 == (dir < 0 ? 1 : 0))
                { return [brackets[index + dir]]; }
        }
        return null;
    }
    /// Find the matching bracket for the token at `pos`, scanning
    /// direction `dir`. Only the `brackets` and `maxScanDistance`
    /// properties are used from `config`, if given. Returns null if no
    /// bracket was found at `pos`, or a match result otherwise.
    function matchBrackets(state, pos, dir, config) {
        if ( config === void 0 ) config = {};

        var maxScanDistance = config.maxScanDistance || DefaultScanDist, brackets = config.brackets || DefaultBrackets;
        var tree = state.tree, sub = tree.resolve(pos, dir), matches;
        if (matches = matchingNodes(sub.type, dir, brackets))
            { return matchMarkedBrackets(state, pos, dir, sub, matches, brackets); }
        else
            { return matchPlainBrackets(state, pos, dir, tree, sub.type, maxScanDistance, brackets); }
    }
    function matchMarkedBrackets(_state, _pos, dir, token, matching, brackets) {
        var parent = token.parent, firstToken = { from: token.start, to: token.end };
        var depth = 0;
        return (parent && parent.iterate({
            from: dir < 0 ? token.start : token.end,
            to: dir < 0 ? parent.start : parent.end,
            enter: function enter(type, from, to) {
                if (dir < 0 ? to > token.start : from < token.end)
                    { return undefined; }
                if (depth == 0 && matching.indexOf(type.name) > -1) {
                    return { start: firstToken, end: { from: from, to: to }, matched: true };
                }
                else if (matchingNodes(type, dir, brackets)) {
                    depth++;
                }
                else if (matchingNodes(type, -dir, brackets)) {
                    depth--;
                    if (depth == 0)
                        { return { start: firstToken, end: { from: from, to: to }, matched: false }; }
                }
                return false;
            }
        })) || { start: firstToken, matched: false };
    }
    function matchPlainBrackets(state, pos, dir, tree, tokenType, maxScanDistance, brackets) {
        var startCh = dir < 0 ? state.sliceDoc(pos - 1, pos) : state.sliceDoc(pos, pos + 1);
        var bracket = brackets.indexOf(startCh);
        if (bracket < 0 || (bracket % 2 == 0) != (dir > 0))
            { return null; }
        var startToken = { from: dir < 0 ? pos - 1 : pos, to: dir > 0 ? pos + 1 : pos };
        var iter = state.doc.iterRange(pos, dir > 0 ? state.doc.length : 0), depth = 0;
        for (var distance = 0; !(iter.next()).done && distance <= maxScanDistance;) {
            var text = iter.value;
            if (dir < 0)
                { distance += text.length; }
            var basePos = pos + distance * dir;
            for (var pos$1 = dir > 0 ? 0 : text.length - 1, end = dir > 0 ? text.length : -1; pos$1 != end; pos$1 += dir) {
                var found = brackets.indexOf(text[pos$1]);
                if (found < 0 || tree.resolve(basePos + pos$1, 1).type != tokenType)
                    { continue; }
                if ((found % 2 == 0) == (dir > 0)) {
                    depth++;
                }
                else if (depth == 1) { // Closing
                    return { start: startToken, end: { from: basePos + pos$1, to: basePos + pos$1 + 1 }, matched: (found >> 1) == (bracket >> 1) };
                }
                else {
                    depth--;
                }
            }
            if (dir > 0)
                { distance += text.length; }
        }
        return iter.done ? { start: startToken, matched: false } : null;
    }

    var _m10 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        bracketMatching: bracketMatching,
        matchBrackets: matchBrackets
    });

    function updateSel(sel, by) {
        return EditorSelection.create(sel.ranges.map(by), sel.primaryIndex);
    }
    function setSel(state, selection) {
        return state.update({ selection: selection, scrollIntoView: true, annotations: Transaction.userEvent.of("keyboardselection") });
    }
    function moveSel(ref, how) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var selection = updateSel(state.selection, how);
        if (selection.eq(state.selection))
            { return false; }
        dispatch(setSel(state, selection));
        return true;
    }
    function cursorByChar(view, forward) {
        return moveSel(view, function (range) { return range.empty ? view.moveByChar(range, forward) : EditorSelection.cursor(forward ? range.to : range.from); });
    }
    /// Move the selection one character to the left (which is backward in
    /// left-to-right text, forward in right-to-left text).
    var cursorCharLeft = function (view) { return cursorByChar(view, view.textDirection != Direction.LTR); };
    /// Move the selection one character to the right.
    var cursorCharRight = function (view) { return cursorByChar(view, view.textDirection == Direction.LTR); };
    /// Move the selection one character forward.
    var cursorCharForward = function (view) { return cursorByChar(view, true); };
    /// Move the selection one character backward.
    var cursorCharBackward = function (view) { return cursorByChar(view, false); };
    function cursorByGroup(view, forward) {
        return moveSel(view, function (range) { return range.empty ? view.moveByGroup(range, forward) : EditorSelection.cursor(forward ? range.to : range.from); });
    }
    /// Move the selection across one group of word or non-word (but also
    /// non-space) characters.
    var cursorGroupLeft = function (view) { return cursorByGroup(view, view.textDirection != Direction.LTR); };
    /// Move the selection one group to the right.
    var cursorGroupRight = function (view) { return cursorByGroup(view, view.textDirection == Direction.LTR); };
    /// Move the selection one group forward.
    var cursorGroupForward = function (view) { return cursorByGroup(view, true); };
    /// Move the selection one group backward.
    var cursorGroupBackward = function (view) { return cursorByGroup(view, false); };
    function interestingNode(state, node, bracketProp) {
        if (node.type.prop(bracketProp))
            { return true; }
        var len = node.end - node.start;
        return len && (len > 2 || /[^\s,.;:]/.test(state.sliceDoc(node.start, node.end))) || node.firstChild;
    }
    function moveBySyntax(state, start, forward) {
        var pos = state.tree.resolve(start.head);
        var bracketProp = forward ? NodeProp.closedBy : NodeProp.openedBy;
        // Scan forward through child nodes to see if there's an interesting
        // node ahead.
        for (var at = start.head;;) {
            var next = forward ? pos.childAfter(at) : pos.childBefore(at);
            if (!next)
                { break; }
            if (interestingNode(state, next, bracketProp))
                { pos = next; }
            else
                { at = forward ? next.end : next.start; }
        }
        var bracket = pos.type.prop(bracketProp), match, newPos;
        if (bracket && (match = forward ? matchBrackets(state, pos.start, 1) : matchBrackets(state, pos.end, -1)) && match.matched)
            { newPos = forward ? match.end.to : match.end.from; }
        else
            { newPos = forward ? pos.end : pos.start; }
        return EditorSelection.cursor(newPos, forward ? -1 : 1);
    }
    /// Move the cursor over the next syntactic element to the left.
    var cursorSyntaxLeft = function (view) { return moveSel(view, function (range) { return moveBySyntax(view.state, range, view.textDirection != Direction.LTR); }); };
    /// Move the cursor over the next syntactic element to the right.
    var cursorSyntaxRight = function (view) { return moveSel(view, function (range) { return moveBySyntax(view.state, range, view.textDirection == Direction.LTR); }); };
    function cursorByLine(view, forward) {
        return moveSel(view, function (range) { return view.moveVertically(range, forward); });
    }
    /// Move the selection one line up.
    var cursorLineUp = function (view) { return cursorByLine(view, false); };
    /// Move the selection one line down.
    var cursorLineDown = function (view) { return cursorByLine(view, true); };
    function cursorByPage(view, forward) {
        return moveSel(view, function (range) { return view.moveVertically(range, forward, view.dom.clientHeight); });
    }
    /// Move the selection one page up.
    var cursorPageUp = function (view) { return cursorByPage(view, false); };
    /// Move the selection one page down.
    var cursorPageDown = function (view) { return cursorByPage(view, true); };
    function moveByLineBoundary(view, start, forward) {
        var line = view.visualLineAt(start.head), moved = view.moveToLineBoundary(start, forward);
        if (moved.head == start.head && moved.head != (forward ? line.to : line.from))
            { moved = view.moveToLineBoundary(start, forward, false); }
        if (!forward && moved.head == line.from && line.length) {
            var space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
            if (space && start.head > line.from + space)
                { moved = EditorSelection.cursor(line.from + space); }
        }
        return moved;
    }
    /// Move the selection to the next line wrap point, or to the end of
    /// the line if there isn't one left on this line.
    var cursorLineBoundaryForward = function (view) { return moveSel(view, function (range) { return moveByLineBoundary(view, range, true); }); };
    /// Move the selection to previous line wrap point, or failing that to
    /// the start of the line.
    var cursorLineBoundaryBackward = function (view) { return moveSel(view, function (range) { return moveByLineBoundary(view, range, false); }); };
    /// Move the selection to the start of the line.
    var cursorLineStart = function (view) { return moveSel(view, function (range) { return EditorSelection.cursor(view.visualLineAt(range.head).from, 1); }); };
    /// Move the selection to the end of the line.
    var cursorLineEnd = function (view) { return moveSel(view, function (range) { return EditorSelection.cursor(view.visualLineAt(range.head).to, -1); }); };
    function toMatchingBracket(state, dispatch, extend) {
        var found = false, selection = updateSel(state.selection, function (range) {
            var matching = matchBrackets(state, range.head, -1)
                || matchBrackets(state, range.head, 1)
                || (range.head > 0 && matchBrackets(state, range.head - 1, 1))
                || (range.head < state.doc.length && matchBrackets(state, range.head + 1, -1));
            if (!matching || !matching.end)
                { return range; }
            found = true;
            var head = matching.start.from == range.head ? matching.end.to : matching.end.from;
            return extend ? EditorSelection.range(range.anchor, head) : EditorSelection.cursor(head);
        });
        if (!found)
            { return false; }
        dispatch(setSel(state, selection));
        return true;
    }
    /// Move the selection to the bracket matching the one it is currently
    /// on, if any.
    var cursorMatchingBracket = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return toMatchingBracket(state, dispatch, false);
    };
    /// Extend the selection to the bracket matching the one the selection
    /// head is currently on, if any.
    var selectMatchingBracket = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return toMatchingBracket(state, dispatch, true);
    };
    function extendSel(view, how) {
        var selection = updateSel(view.state.selection, function (range) {
            var head = how(range);
            return EditorSelection.range(range.anchor, head.head, head.goalColumn);
        });
        if (selection.eq(view.state.selection))
            { return false; }
        view.dispatch(setSel(view.state, selection));
        return true;
    }
    function selectByChar(view, forward) {
        return extendSel(view, function (range) { return view.moveByChar(range, forward); });
    }
    /// Move the selection head one character to the left, while leaving
    /// the anchor in place.
    var selectCharLeft = function (view) { return selectByChar(view, view.textDirection != Direction.LTR); };
    /// Move the selection head one character to the right.
    var selectCharRight = function (view) { return selectByChar(view, view.textDirection == Direction.LTR); };
    /// Move the selection head one character forward.
    var selectCharForward = function (view) { return selectByChar(view, true); };
    /// Move the selection head one character backward.
    var selectCharBackward = function (view) { return selectByChar(view, false); };
    function selectByGroup(view, forward) {
        return extendSel(view, function (range) { return view.moveByGroup(range, forward); });
    }
    /// Move the selection head one [group](#commands.cursorGroupLeft) to
    /// the left.
    var selectGroupLeft = function (view) { return selectByGroup(view, view.textDirection != Direction.LTR); };
    /// Move the selection head one group to the right.
    var selectGroupRight = function (view) { return selectByGroup(view, view.textDirection == Direction.LTR); };
    /// Move the selection head one group forward.
    var selectGroupForward = function (view) { return selectByGroup(view, true); };
    /// Move the selection head one group backward.
    var selectGroupBackward = function (view) { return selectByGroup(view, false); };
    /// Move the selection head over the next syntactic element to the left.
    var selectSyntaxLeft = function (view) { return extendSel(view, function (range) { return moveBySyntax(view.state, range, view.textDirection != Direction.LTR); }); };
    /// Move the selection head over the next syntactic element to the right.
    var selectSyntaxRight = function (view) { return extendSel(view, function (range) { return moveBySyntax(view.state, range, view.textDirection == Direction.LTR); }); };
    function selectByLine(view, forward) {
        return extendSel(view, function (range) { return view.moveVertically(range, forward); });
    }
    /// Move the selection head one line up.
    var selectLineUp = function (view) { return selectByLine(view, false); };
    /// Move the selection head one line down.
    var selectLineDown = function (view) { return selectByLine(view, true); };
    function selectByPage(view, forward) {
        return extendSel(view, function (range) { return view.moveVertically(range, forward, view.dom.clientHeight); });
    }
    /// Move the selection head one page up.
    var selectPageUp = function (view) { return selectByPage(view, false); };
    /// Move the selection head one page down.
    var selectPageDown = function (view) { return selectByPage(view, true); };
    /// Move the selection head to the next line boundary.
    var selectLineBoundaryForward = function (view) { return extendSel(view, function (range) { return moveByLineBoundary(view, range, true); }); };
    /// Move the selection head to the previous line boundary.
    var selectLineBoundaryBackward = function (view) { return extendSel(view, function (range) { return moveByLineBoundary(view, range, false); }); };
    /// Move the selection head to the start of the line.
    var selectLineStart = function (view) { return extendSel(view, function (range) { return EditorSelection.cursor(view.visualLineAt(range.head).from); }); };
    /// Move the selection head to the end of the line.
    var selectLineEnd = function (view) { return extendSel(view, function (range) { return EditorSelection.cursor(view.visualLineAt(range.head).to); }); };
    /// Move the selection to the start of the document.
    var cursorDocStart = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(setSel(state, { anchor: 0 }));
        return true;
    };
    /// Move the selection to the end of the document.
    var cursorDocEnd = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(setSel(state, { anchor: state.doc.length }));
        return true;
    };
    /// Move the selection head to the start of the document.
    var selectDocStart = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(setSel(state, { anchor: state.selection.primary.anchor, head: 0 }));
        return true;
    };
    /// Move the selection head to the end of the document.
    var selectDocEnd = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(setSel(state, { anchor: state.selection.primary.anchor, head: state.doc.length }));
        return true;
    };
    /// Select the entire document.
    var selectAll = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(state.update({ selection: { anchor: 0, head: state.doc.length }, annotations: Transaction.userEvent.of("keyboarselection") }));
        return true;
    };
    /// Expand the selection to cover entire lines.
    var selectLine = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var ranges = selectedLineBlocks(state).map(function (ref) {
            var from = ref.from;
            var to = ref.to;

            return EditorSelection.range(from, Math.min(to + 1, state.doc.length));
        });
        dispatch(state.update({ selection: new EditorSelection(ranges), annotations: Transaction.userEvent.of("keyboardselection") }));
        return true;
    };
    /// Select the next syntactic construct that is larger than the
    /// selection. Note that this will only work insofar as the language
    /// [syntaxes](#state.EditorState^syntax) you use builds up a full
    /// syntax tree.
    var selectParentSyntax = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var selection = updateSel(state.selection, function (range) {
            var _a;
            var context = state.tree.resolve(range.head, 1);
            while (!((context.start < range.from && context.end >= range.to) ||
                (context.end > range.to && context.start <= range.from) ||
                !((_a = context.parent) === null || _a === void 0 ? void 0 : _a.parent)))
                { context = context.parent; }
            return EditorSelection.range(context.end, context.start);
        });
        dispatch(setSel(state, selection));
        return true;
    };
    /// Simplify the current selection. When multiple ranges are selected,
    /// reduce it to its primary range. Otherwise, if the selection is
    /// non-empty, convert it to a cursor selection.
    var simplifySelection = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var cur = state.selection, selection = null;
        if (cur.ranges.length > 1)
            { selection = new EditorSelection([cur.primary]); }
        else if (!cur.primary.empty)
            { selection = new EditorSelection([EditorSelection.cursor(cur.primary.head)]); }
        if (!selection)
            { return false; }
        dispatch(setSel(state, selection));
        return true;
    };
    function deleteBy(view, by) {
        var state = view.state;
        var changes = state.changeByRange(function (range) {
            var from = range.from;
            var to = range.to;
            if (from == to) {
                var towards = by(from);
                from = Math.min(from, towards);
                to = Math.max(to, towards);
            }
            return from == to ? { range: range } : { changes: { from: from, to: to }, range: EditorSelection.cursor(from) };
        });
        if (changes.changes.empty)
            { return false; }
        view.dispatch(changes, { scrollIntoView: true, annotations: Transaction.userEvent.of("delete") });
        return true;
    }
    var deleteByChar = function (view, forward) { return deleteBy(view, function (pos) {
        var state = view.state;
        var line = state.doc.lineAt(pos), before;
        if (!forward && pos > line.from && pos < line.from + 200 &&
            !/[^ \t]/.test(before = line.slice(0, pos - line.from))) {
            if (before[before.length - 1] == "\t")
                { return pos - 1; }
            var col = countColumn(before, 0, state.tabSize), drop = col % state.indentUnit || state.indentUnit;
            for (var i = 0; i < drop && before[before.length - 1 - i] == " "; i++)
                { pos--; }
            return pos;
        }
        var target = line.findClusterBreak(pos - line.from, forward) + line.from;
        if (target == pos && line.number != (forward ? state.doc.lines : 0))
            { target += forward ? 1 : -1; }
        return target;
    }); };
    /// Delete the selection, or, for cursor selections, the character
    /// before the cursor.
    var deleteCharBackward = function (view) { return deleteByChar(view, false); };
    /// Delete the selection or the character after the cursor.
    var deleteCharForward = function (view) { return deleteByChar(view, true); };
    var deleteByGroup = function (view, forward) { return deleteBy(view, function (pos) {
        var state = view.state;
        var line = state.doc.lineAt(pos), categorize = state.charCategorizer(pos);
        for (var cat = null;;) {
            var next = (void 0), nextChar = (void 0);
            if (pos == (forward ? line.to : line.from)) {
                if (line.number == (forward ? state.doc.lines : 1))
                    { break; }
                line = state.doc.line(line.number + (forward ? 1 : -1));
                next = forward ? line.from : line.to;
                nextChar = "\n";
            }
            else {
                next = line.findClusterBreak(pos - line.from, forward) + line.from;
                nextChar = line.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
            }
            var nextCat = categorize(nextChar);
            if (cat != null && nextCat != cat)
                { break; }
            if (nextCat != CharCategory.Space)
                { cat = nextCat; }
            pos = next;
        }
        return pos;
    }); };
    /// Delete the selection or backward until the end of the next
    /// [group](#view.EditorView.moveByGroup).
    var deleteGroupBackward = function (view) { return deleteByGroup(view, false); };
    /// Delete the selection or forward until the end of the next group.
    var deleteGroupForward = function (view) { return deleteByGroup(view, true); };
    /// Delete the selection, or, if it is a cursor selection, delete to
    /// the end of the line. If the cursor is directly at the end of the
    /// line, delete the line break after it.
    var deleteToLineEnd = function (view) { return deleteBy(view, function (pos) {
        var lineEnd = view.visualLineAt(pos).to;
        if (pos < lineEnd)
            { return lineEnd; }
        return Math.max(view.state.doc.length, pos + 1);
    }); };
    /// Delete all whitespace directly before a line end from the
    /// document.
    var deleteTrailingWhitespace = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var changes = [];
        for (var pos = 0, iter = state.doc.iterLines(); !iter.next().done;) {
            var trailing = iter.value.search(/\s+$/);
            if (trailing > -1)
                { changes.push({ from: pos + trailing, to: pos + iter.value.length }); }
            pos += iter.value.length + 1;
        }
        if (!changes.length)
            { return false; }
        dispatch(state.update({ changes: changes }));
        return true;
    };
    /// Replace each selection range with a line break, leaving the cursor
    /// on the line before the break.
    var splitLine = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var changes = state.changeByRange(function (range) {
            return { changes: { from: range.from, to: range.to, insert: Text.of(["", ""]) },
                range: EditorSelection.cursor(range.from) };
        });
        dispatch(state.update(changes, { scrollIntoView: true, annotations: Transaction.userEvent.of("input") }));
        return true;
    };
    /// Flip the characters before and after the cursor(s).
    var transposeChars = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var changes = state.changeByRange(function (range) {
            if (!range.empty || range.from == 0 || range.from == state.doc.length)
                { return { range: range }; }
            var pos = range.from, line = state.doc.lineAt(pos);
            var from = pos == line.from ? pos - 1 : line.findClusterBreak(pos - line.from, false) + line.from;
            var to = pos == line.to ? pos + 1 : line.findClusterBreak(pos - line.from, true) + line.from;
            return { changes: { from: from, to: to, insert: state.doc.slice(pos, to).append(state.doc.slice(from, pos)) },
                range: EditorSelection.cursor(to) };
        });
        if (changes.changes.empty)
            { return false; }
        dispatch(state.update(changes, { scrollIntoView: true }));
        return true;
    };
    function selectedLineBlocks(state) {
        var blocks = [], upto = -1;
        for (var i = 0, list = state.selection.ranges; i < list.length; i += 1) {
            var range = list[i];

            var startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
            if (upto == startLine.number)
                { blocks[blocks.length - 1].to = endLine.to; }
            else
                { blocks.push({ from: startLine.from, to: endLine.to }); }
            upto = endLine.number;
        }
        return blocks;
    }
    function moveLine(state, dispatch, forward) {
        var changes = [];
        for (var i = 0, list = selectedLineBlocks(state); i < list.length; i += 1) {
            var block = list[i];

            if (forward ? block.to == state.doc.length : block.from == 0)
                { continue; }
            var nextLine = state.doc.lineAt(forward ? block.to + 1 : block.from - 1);
            if (forward)
                { changes.push({ from: block.to, to: nextLine.to }, { from: block.from, insert: nextLine.slice() + state.lineBreak }); }
            else
                { changes.push({ from: nextLine.from, to: block.from }, { from: block.to, insert: state.lineBreak + nextLine.slice() }); }
        }
        if (!changes.length)
            { return false; }
        dispatch(state.update({ changes: changes, scrollIntoView: true }));
        return true;
    }
    /// Move the selected lines up one line.
    var moveLineUp = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return moveLine(state, dispatch, false);
    };
    /// Move the selected lines down one line.
    var moveLineDown = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return moveLine(state, dispatch, true);
    };
    function copyLine(state, dispatch, forward) {
        var changes = [];
        for (var i = 0, list = selectedLineBlocks(state); i < list.length; i += 1) {
            var block = list[i];

            if (forward)
                { changes.push({ from: block.from, insert: state.doc.slice(block.from, block.to) + state.lineBreak }); }
            else
                { changes.push({ from: block.to, insert: state.lineBreak + state.doc.slice(block.from, block.to) }); }
        }
        dispatch(state.update({ changes: changes, scrollIntoView: true }));
        return true;
    }
    /// Create a copy of the selected lines. Keep the selection in the top copy.
    var copyLineUp = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return copyLine(state, dispatch, false);
    };
    /// Create a copy of the selected lines. Keep the selection in the bottom copy.
    var copyLineDown = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        return copyLine(state, dispatch, true);
    };
    /// Delete selected lines.
    var deleteLine = function (view) {
        var state = view.state;
        var changes = state.changes(selectedLineBlocks(state).map(function (ref) {
            var from = ref.from;
            var to = ref.to;

            if (from > 0)
                { from--; }
            else if (to < state.doc.length)
                { to++; }
            return { from: from, to: to };
        }));
        var selection = updateSel(state.selection, function (range) { return view.moveVertically(range, true); }).map(changes);
        view.dispatch({ changes: changes, selection: selection, scrollIntoView: true });
        return true;
    };
    function indentString(state, n) {
        var result = "";
        if (state.indentWithTabs)
            { while (n >= state.tabSize) {
                result += "\t";
                n -= state.tabSize;
            } }
        for (var i = 0; i < n; i++)
            { result += " "; }
        return result;
    }
    function getIndentation(cx, pos) {
        for (var i = 0, list = cx.state.facet(EditorState.indentation); i < list.length; i += 1) {
            var f = list[i];

            var result = f(cx, pos);
            if (result > -1)
                { return result; }
        }
        return -1;
    }
    /// Replace the selection with a newline.
    var insertNewline = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(state.update(state.replaceSelection(state.lineBreak), { scrollIntoView: true }));
        return true;
    };
    /// Replace the selection with a newline and indent the newly created
    /// line(s). If the current line consists only of whitespace, this
    /// will also delete that whitespace.
    var insertNewlineAndIndent = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var i = 0, indentation = state.selection.ranges.map(function (r) {
            var indent = getIndentation(new IndentContext(state, undefined, r.from), r.from);
            return indent > -1 ? indent : /^\s*/.exec(state.doc.lineAt(r.from).slice(0, 50))[0].length;
        });
        var changes = state.changeByRange(function (ref) {
            var from = ref.from;
            var to = ref.to;

            var indent = indentation[i++], line = state.doc.lineAt(to);
            while (to < line.to && /s/.test(line.slice(to - line.from, to + 1 - line.from)))
                { to++; }
            if (from > line.from && from < line.from + 100 && !/\S/.test(line.slice(0, from)))
                { from = line.from; }
            return { changes: { from: from, to: to, insert: Text.of(["", indentString(state, indent)]) },
                range: EditorSelection.cursor(from + 1 + indent) };
        });
        dispatch(state.update(changes, { scrollIntoView: true }));
        return true;
    };
    function changeBySelectedLine(state, f) {
        var atLine = -1;
        return state.changeByRange(function (range) {
            var changes = [];
            for (var line = state.doc.lineAt(range.from);;) {
                if (line.number > atLine) {
                    f(line, changes, range);
                    atLine = line.number;
                }
                if (range.to <= line.to)
                    { break; }
                line = state.doc.lineAt(line.to + 1);
            }
            var changeSet = state.changes(changes);
            return { changes: changes,
                range: EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1)) };
        });
    }
    /// Auto-indent the selected lines. This uses the [indentation
    /// facet](#state.EditorState^indentation) as source for auto-indent
    /// information.
    var indentSelection = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var updated = Object.create(null);
        var context = new IndentContext(state, function (start) {
            var found = updated[start];
            return found == null ? -1 : found;
        });
        var changes = changeBySelectedLine(state, function (line, changes, range) {
            var indent = getIndentation(context, line.from);
            if (indent < 0)
                { return; }
            var cur = /^\s*/.exec(line.slice(0, Math.min(line.length, 200)))[0];
            var norm = indentString(state, indent);
            if (cur != norm || range.from < line.from + cur.length) {
                updated[line.from] = indent;
                changes.push({ from: line.from, to: line.from + cur.length, insert: norm });
            }
        });
        if (!changes.changes.empty)
            { dispatch(state.update(changes)); }
        return true;
    };
    /// Add a [unit](#state.EditorState^indentUnit) of indentation to all
    /// selected lines.
    var indentMore = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(state.update(changeBySelectedLine(state, function (line, changes) {
            changes.push({ from: line.from, insert: state.facet(EditorState.indentUnit) });
        })));
        return true;
    };
    /// Remove a [unit](#state.EditorState^indentUnit) of indentation from
    /// all selected lines.
    var indentLess = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        dispatch(state.update(changeBySelectedLine(state, function (line, changes) {
            var lineStart = line.slice(0, Math.min(line.length, 200));
            var space = /^\s*/.exec(lineStart)[0];
            if (!space)
                { return; }
            var col = countColumn(space, 0, state.tabSize), insert = indentString(state, Math.max(0, col - state.indentUnit)), keep = 0;
            while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))
                { keep++; }
            changes.push({ from: line.from + keep, to: line.from + space.length, insert: insert.slice(keep) });
        })));
        return true;
    };
    /// Array of key bindings containing the Emacs-style bindings that are
    /// available on macOS by default.
    ///
    ///  - Ctrl-b: [`cursorCharLeft`](#commands.cursorCharLeft) ([`selectCharLeft`](#commands.selectCharLeft) with Shift)
    ///  - Ctrl-f: [`cursorCharRight`](#commands.cursorCharRight) ([`selectCharRight`](#commands.selectCharRight) with Shift)
    ///  - Ctrl-p: [`cursorLineUp`](#commands.cursorLineUp) ([`selectLineUp`](#commands.selectLineUp) with Shift)
    ///  - Ctrl-n: [`cursorLineDown`](#commands.cursorLineDown) ([`selectLineDown`](#commands.selectLineDown) with Shift)
    ///  - Ctrl-a: [`cursorLineStart`](#commands.cursorLineStart) ([`selectLineStart`](#commands.selectLineStart) with Shift)
    ///  - Ctrl-e: [`cursorLineEnd`](#commands.cursorLineEnd) ([`selectLineEnd`](#commands.selectLineEnd) with Shift)
    ///  - Ctrl-d: [`deleteCharForward`](#commands.deleteCharForward)
    ///  - Ctrl-h: [`deleteCharBackward`](#commands.deleteCharBackward)
    ///  - Ctrl-k: [`deleteToLineEnd`](#commands.deleteToLineEnd)
    ///  - Alt-d: [`deleteGroupForward`](#commands.deleteGroupForward)
    ///  - Ctrl-Alt-h: [`deleteGroupBackward`](#commands.deleteGroupBackward)
    ///  - Ctrl-o: [`splitLine`](#commands.splitLine)
    ///  - Ctrl-t: [`transposeChars`](#commands.transposeChars)
    ///  - Alt-f: [`cursorGroupForward`](#commands.cursorGroupForward) ([`selectGroupForward`](#commands.selectGroupForward) with Shift)
    ///  - Alt-b: [`cursorGroupBackward`](#commands.cursorGroupBackward) ([`selectGroupBackward`](#commands.selectGroupBackward) with Shift)
    ///  - Alt-<: [`cursorDocStart`](#commands.cursorDocStart)
    ///  - Alt->: [`cursorDocEnd`](#commands.cursorDocEnd)
    ///  - Ctrl-v: [`cursorPageDown`](#commands.cursorPageDown)
    ///  - Alt-v: [`cursorPageUp`](#commands.cursorPageUp)
    var emacsStyleKeymap = [
        { key: "Ctrl-b", run: cursorCharLeft, shift: selectCharLeft },
        { key: "Ctrl-f", run: cursorCharRight, shift: selectCharRight },
        { key: "Ctrl-p", run: cursorLineUp, shift: selectLineUp },
        { key: "Ctrl-n", run: cursorLineDown, shift: selectLineDown },
        { key: "Ctrl-a", run: cursorLineStart, shift: selectLineStart },
        { key: "Ctrl-e", run: cursorLineEnd, shift: selectLineEnd },
        { key: "Ctrl-d", run: deleteCharForward },
        { key: "Ctrl-h", run: deleteCharBackward },
        { key: "Ctrl-k", run: deleteToLineEnd },
        { key: "Alt-d", run: deleteGroupForward },
        { key: "Ctrl-Alt-h", run: deleteGroupBackward },
        { key: "Ctrl-o", run: splitLine },
        { key: "Ctrl-t", run: transposeChars },
        { key: "Alt-f", run: cursorGroupForward, shift: selectGroupForward },
        { key: "Alt-b", run: cursorGroupBackward, shift: selectGroupBackward },
        { key: "Alt-<", run: cursorDocStart },
        { key: "Alt->", run: cursorDocEnd },
        { key: "Ctrl-v", run: cursorPageDown },
        { key: "Alt-v", run: cursorPageUp } ];
    /// An array of key bindings closely sticking to platform-standard or
    /// widely used bindings. (This includes the bindings from
    /// [`emacsStyleKeymap`](#commands.emacsStyleKeymap), with their `key`
    /// property changed to `mac`.)
    ///
    ///  - ArrowLeft: [`cursorCharLeft`](#commands.cursorCharLeft) ([`selectCharLeft`](#commands.selectCharLeft) with Shift)
    ///  - ArrowRight: [`cursorCharRight`](#commands.cursorCharRight) ([`selectCharRight`](#commands.selectCharRight) with Shift)
    ///  - Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): [`cursorGroupLeft`](#commands.cursorGroupLeft) ([`selectGroupLeft`](#commands.selectGroupLeft) with Shift)
    ///  - Ctrl-ArrowRight (Alt-ArrowRight on macOS): [`cursorGroupRight`](#commands.cursorGroupRight) ([`selectGroupRight`](#commands.selectGroupRight) with Shift)
    ///  - Cmd-ArrowLeft (on macOS): [`cursorLineStart`](#commands.cursorLineStart) ([`selectLineStart`](#commands.selectLineStart) with Shift)
    ///  - Cmd-ArrowRight (on macOS): [`cursorLineEnd`](#commands.cursorLineEnd) ([`selectLineEnd`](#commands.selectLineEnd) with Shift)
    ///  - ArrowUp: [`cursorLineUp`](#commands.cursorLineUp) ([`selectLineUp`](#commands.selectLineUp) with Shift)
    ///  - ArrowDown: [`cursorLineDown`](#commands.cursorLineDown) ([`selectLineDown`](#commands.selectLineDown) with Shift)
    ///  - Cmd-ArrowUp (on macOS): [`cursorDocStart`](#commands.cursorDocStart) ([`selectDocStart`](#commands.selectDocStart) with Shift)
    ///  - Cmd-ArrowDown (on macOS): [`cursorDocEnd`](#commands.cursorDocEnd) ([`selectDocEnd`](#commands.selectDocEnd) with Shift)
    ///  - Ctrl-ArrowUp (on macOS): [`cursorPageUp`](#commands.cursorPageUp) ([`selectPageUp`](#commands.selectPageUp) with Shift)
    ///  - Ctrl-ArrowDown (on macOS): [`cursorPageDown`](#commands.cursorPageDown) ([`selectPageDown`](#commands.selectPageDown) with Shift)
    ///  - PageUp: [`cursorPageUp`](#commands.cursorPageUp) ([`selectPageUp`](#commands.selectPageUp) with Shift)
    ///  - PageDown: [`cursorPageDown`](#commands.cursorPageDown) ([`selectPageDown`](#commands.selectPageDown) with Shift)
    ///  - Home: [`cursorLineBoundaryBackward`](#commands.cursorLineBoundaryBackward) ([`selectLineBoundaryBackward`](#commands.selectLineBoundaryBackward) with Shift)
    ///  - End: [`cursorLineBoundaryForward`](#commands.cursorLineBoundaryForward) ([`selectLineBoundaryForward`](#commands.selectLineBoundaryForward) with Shift)
    ///  - Ctrl-Home (Cmd-Home on macOS): [`cursorDocStart`](#commands.cursorDocStart) ([`selectDocStart`](#commands.selectDocStart) with Shift)
    ///  - Ctrl-End (Cmd-Home on macOS): [`cursorDocEnd`](#commands.cursorDocEnd) ([`selectDocEnd`](#commands.selectDocEnd) with Shift)
    ///  - Enter: [`insertNewlineAndIndent`](#commands.insertNewlineAndIndent)
    ///  - Ctrl-a (Cmd-a on macOS): [`selectAll`](#commands.selectAll)
    ///  - Backspace: [`deleteCharBackward`](#commands.deleteCharBackward)
    ///  - Delete: [`deleteCharForward`](#commands.deleteCharForward)
    ///  - Ctrl-Backspace (Ctrl-Alt-Backspace on macOS): [`deleteGroupBackward`](#commands.deleteGroupBackward)
    ///  - Ctrl-Delete (Alt-Backspace and Alt-Delete on macOS): [`deleteGroupForward`](#commands.deleteGroupForward)
    var standardKeymap = [
        { key: "ArrowLeft", run: cursorCharLeft, shift: selectCharLeft },
        { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cursorGroupLeft, shift: selectGroupLeft },
        { mac: "Cmd-ArrowLeft", run: cursorLineStart, shift: selectLineStart },
        { key: "ArrowRight", run: cursorCharRight, shift: selectCharRight },
        { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: cursorGroupRight, shift: selectGroupRight },
        { mac: "Cmd-ArrowRight", run: cursorLineEnd, shift: selectLineEnd },
        { key: "ArrowUp", run: cursorLineUp, shift: selectLineUp },
        { mac: "Cmd-ArrowUp", run: cursorDocStart, shift: selectDocStart },
        { mac: "Ctrl-ArrowUp", run: cursorPageUp, shift: selectPageUp },
        { key: "ArrowDown", run: cursorLineDown, shift: selectLineDown },
        { mac: "Cmd-ArrowDown", run: cursorDocEnd, shift: selectDocEnd },
        { mac: "Ctrl-ArrowDown", run: cursorPageDown, shift: selectPageDown },
        { key: "PageUp", run: cursorPageUp, shift: selectPageUp },
        { key: "PageDown", run: cursorPageDown, shift: selectPageDown },
        { key: "Home", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward },
        { key: "Mod-Home", run: cursorDocStart, shift: selectDocStart },
        { key: "End", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward },
        { key: "Mod-End", run: cursorDocEnd, shift: selectDocEnd },
        { key: "Enter", run: insertNewlineAndIndent },
        { key: "Mod-a", run: selectAll },
        { key: "Backspace", run: deleteCharBackward },
        { key: "Delete", run: deleteCharForward },
        { key: "Mod-Backspace", mac: "Ctrl-Alt-Backspace", run: deleteGroupBackward },
        { key: "Mod-Delete", mac: "Alt-Backspace", run: deleteGroupForward },
        { mac: "Alt-Delete", run: deleteGroupForward } ].concat(emacsStyleKeymap.map(function (b) { return ({ mac: b.key, run: b.run, shift: b.shift }); }));
    /// The default keymap. Includes all bindings from
    /// [`standardKeymap`](#commands.standardKeymap) plus the following:
    ///
    /// - Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): [`cursorSyntaxLeft`](#commands.cursorSyntaxLeft) ([`selectSyntaxLeft`](#commands.selectSyntaxLeft) with Shift)
    /// - Alt-ArrowRight (Ctrl-ArrowRight on macOS): [`cursorSyntaxRight`](#commands.cursorSyntaxRight) ([`selectSyntaxRight`](#commands.selectSyntaxRight) with Shift)
    /// - Alt-ArrowUp: [`moveLineUp`](#commands.moveLineUp)
    /// - Alt-ArrowDown: [`moveLineDown`](#commands.moveLineDown)
    /// - Shift-Alt-ArrowUp: [`copyLineUp`](#commands.copyLineUp)
    /// - Shift-Alt-ArrowDown: [`copyLineDown`](#commands.copyLineDown)
    /// - Escape: [`simplifySelection`](#commands.simplifySelection)
    /// - Ctrl-l (Cmd-l on macOS): [`selectLine`](#commands.selectLine)
    /// - Ctrl-i (Cmd-i on macOS): [`selectParentSyntax`](#commands.selectParentSyntax)
    /// - Ctrl-[ (Cmd-[ on macOS): [`indentLess`](#commands.indentLess)
    /// - Ctrl-] (Cmd-] on macOS): [`indentMore`](#commands.indentMore)
    /// - Ctrl-Alt-\\ (Cmd-Alt-\\ on macOS): [`indentSelection`](#commands.indentSelection)
    /// - Shift-Ctrl-k (Shift-Cmd-k on macOS): [`deleteLine`](#commands.deleteLine)
    /// - Shift-Ctrl-\\ (Shift-Cmd-\\ on macOS): [`cursorMatchingBracket`](#commands.cursorMatchingBracket)
    var defaultKeymap = [
        { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: cursorSyntaxLeft, shift: selectSyntaxLeft },
        { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: cursorSyntaxRight, shift: selectSyntaxRight },
        { key: "Alt-ArrowUp", run: moveLineUp },
        { key: "Shift-Alt-ArrowUp", run: copyLineUp },
        { key: "Alt-ArrowDown", run: moveLineDown },
        { key: "Shift-Alt-ArrowDown", run: copyLineDown },
        { key: "Escape", run: simplifySelection },
        { key: "Mod-l", run: selectLine },
        { key: "Mod-i", run: selectParentSyntax },
        { key: "Mod-[", run: indentLess },
        { key: "Mod-]", run: indentMore },
        { key: "Mod-Alt-\\", run: indentSelection },
        { key: "Shift-Mod-k", run: deleteLine },
        { key: "Shift-Mod-\\", run: cursorMatchingBracket }
    ].concat(standardKeymap);

    var _m3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        copyLineDown: copyLineDown,
        copyLineUp: copyLineUp,
        cursorCharBackward: cursorCharBackward,
        cursorCharForward: cursorCharForward,
        cursorCharLeft: cursorCharLeft,
        cursorCharRight: cursorCharRight,
        cursorDocEnd: cursorDocEnd,
        cursorDocStart: cursorDocStart,
        cursorGroupBackward: cursorGroupBackward,
        cursorGroupForward: cursorGroupForward,
        cursorGroupLeft: cursorGroupLeft,
        cursorGroupRight: cursorGroupRight,
        cursorLineBoundaryBackward: cursorLineBoundaryBackward,
        cursorLineBoundaryForward: cursorLineBoundaryForward,
        cursorLineDown: cursorLineDown,
        cursorLineEnd: cursorLineEnd,
        cursorLineStart: cursorLineStart,
        cursorLineUp: cursorLineUp,
        cursorMatchingBracket: cursorMatchingBracket,
        cursorPageDown: cursorPageDown,
        cursorPageUp: cursorPageUp,
        cursorSyntaxLeft: cursorSyntaxLeft,
        cursorSyntaxRight: cursorSyntaxRight,
        defaultKeymap: defaultKeymap,
        deleteCharBackward: deleteCharBackward,
        deleteCharForward: deleteCharForward,
        deleteGroupBackward: deleteGroupBackward,
        deleteGroupForward: deleteGroupForward,
        deleteLine: deleteLine,
        deleteToLineEnd: deleteToLineEnd,
        deleteTrailingWhitespace: deleteTrailingWhitespace,
        emacsStyleKeymap: emacsStyleKeymap,
        indentLess: indentLess,
        indentMore: indentMore,
        indentSelection: indentSelection,
        insertNewline: insertNewline,
        insertNewlineAndIndent: insertNewlineAndIndent,
        moveLineDown: moveLineDown,
        moveLineUp: moveLineUp,
        selectAll: selectAll,
        selectCharBackward: selectCharBackward,
        selectCharForward: selectCharForward,
        selectCharLeft: selectCharLeft,
        selectCharRight: selectCharRight,
        selectDocEnd: selectDocEnd,
        selectDocStart: selectDocStart,
        selectGroupBackward: selectGroupBackward,
        selectGroupForward: selectGroupForward,
        selectGroupLeft: selectGroupLeft,
        selectGroupRight: selectGroupRight,
        selectLine: selectLine,
        selectLineBoundaryBackward: selectLineBoundaryBackward,
        selectLineBoundaryForward: selectLineBoundaryForward,
        selectLineDown: selectLineDown,
        selectLineEnd: selectLineEnd,
        selectLineStart: selectLineStart,
        selectLineUp: selectLineUp,
        selectMatchingBracket: selectMatchingBracket,
        selectPageDown: selectPageDown,
        selectPageUp: selectPageUp,
        selectParentSyntax: selectParentSyntax,
        selectSyntaxLeft: selectSyntaxLeft,
        selectSyntaxRight: selectSyntaxRight,
        simplifySelection: simplifySelection,
        splitLine: splitLine,
        standardKeymap: standardKeymap,
        transposeChars: transposeChars
    });

    var fromHistory = Annotation.define();
    /// Transaction annotation that will prevent that annotation from
    /// being combined with other annotations in the undo history. Given
    /// `"before"`, it'll prevent merging with previous transactions. With
    /// `"after"`, subsequent transactions won't be combined with this
    /// one. With `"full"`, the transaction is isolated on both sides.
    var isolateHistory = Annotation.define();
    /// This facet provides a way to register functions that, given a
    /// transaction, provide a set of effects that the history should
    /// store when inverting the transaction. This can be used to
    /// integrate some kinds of effects in the history, so that they can
    /// be undone (and redone again).
    var invertedEffects = Facet.define();
    var historyConfig = Facet.define({
        combine: function combine(configs) {
            return combineConfig(configs, {
                minDepth: 100,
                newGroupDelay: 500
            }, { minDepth: Math.max, newGroupDelay: Math.min });
        }
    });
    var historyField = StateField.define({
        create: function create() {
            return HistoryState.empty;
        },
        update: function update(state, tr) {
            var config = tr.state.facet(historyConfig);
            var fromHist = tr.annotation(fromHistory);
            if (fromHist) {
                var item = HistEvent.fromTransaction(tr), from = fromHist.side;
                var other = from == 0 /* Done */ ? state.undone : state.done;
                if (item)
                    { other = updateBranch(other, other.length, config.minDepth, item); }
                else
                    { other = addSelection(other, tr.startState.selection); }
                return new HistoryState(from == 0 /* Done */ ? fromHist.rest : other, from == 0 /* Done */ ? other : fromHist.rest);
            }
            var isolate = tr.annotation(isolateHistory);
            if (isolate == "full" || isolate == "before")
                { state = state.isolate(); }
            if (tr.annotation(Transaction.addToHistory) === false)
                { return tr.changes.length ? state.addMapping(tr.changes.desc) : state; }
            var event = HistEvent.fromTransaction(tr);
            var time = tr.annotation(Transaction.time), userEvent = tr.annotation(Transaction.userEvent);
            if (event)
                { state = state.addChanges(event, time, userEvent, config.newGroupDelay, config.minDepth); }
            else if (tr.selection)
                { state = state.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay); }
            if (isolate == "full" || isolate == "after")
                { state = state.isolate(); }
            return state;
        }
    });
    /// Create a history extension with the given configuration.
    function history(config) {
        if ( config === void 0 ) config = {};

        // FIXME register beforeinput handler
        return [
            historyField,
            historyConfig.of(config)
        ];
    }
    function cmd(side, selection) {
        return function (ref) {
            var state = ref.state;
            var dispatch = ref.dispatch;

            var historyState = state.field(historyField, false);
            if (!historyState)
                { return false; }
            var tr = historyState.pop(side, state, selection);
            if (!tr)
                { return false; }
            dispatch(tr);
            return true;
        };
    }
    /// Undo a single group of history events. Returns false if no group
    /// was available.
    var undo = cmd(0 /* Done */, false);
    /// Redo a group of history events. Returns false if no group was
    /// available.
    var redo = cmd(1 /* Undone */, false);
    /// Undo a selection change.
    var undoSelection = cmd(0 /* Done */, true);
    /// Redo a selection change.
    var redoSelection = cmd(1 /* Undone */, true);
    function depth(side) {
        return function (state) {
            var histState = state.field(historyField, false);
            if (!histState)
                { return 0; }
            var branch = side == 0 /* Done */ ? histState.done : histState.undone;
            return branch.length - (branch.length && !branch[0].changes ? 1 : 0);
        };
    }
    /// The amount of undoable change events available in a given state.
    var undoDepth = depth(0 /* Done */);
    /// The amount of redoable change events available in a given state.
    var redoDepth = depth(1 /* Undone */);
    // History events store groups of changes or effects that need to be
    // undone/redone together.
    var HistEvent = function HistEvent(
    // The changes in this event. Normal events hold at least one
    // change or effect. But it may be necessary to store selection
    // events before the first change, in which case a special type of
    // instance is created which doesn't hold any changes, with
    // changes == startSelection == undefined
    changes, 
    // The effects associated with this event
    effects, mapped, 
    // The selection before this event
    startSelection, 
    // Stores selection changes after this event, to be used for
    // selection undo/redo.
    selectionsAfter) {
        this.changes = changes;
        this.effects = effects;
        this.mapped = mapped;
        this.startSelection = startSelection;
        this.selectionsAfter = selectionsAfter;
    };
    HistEvent.prototype.setSelAfter = function setSelAfter (after) {
        return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
    };
    // This does not check `addToHistory` and such, it assumes the
    // transaction needs to be converted to an item. Returns null when
    // there are no changes or effects in the transaction.
    HistEvent.fromTransaction = function fromTransaction (tr) {
        var effects = none$5;
        for (var i = 0, list = tr.startState.facet(invertedEffects); i < list.length; i += 1) {
            var invert = list[i];

                var result = invert(tr);
            if (result.length)
                { effects = effects.concat(result); }
        }
        if (!effects.length && tr.changes.empty)
            { return null; }
        return new HistEvent(tr.changes.invert(tr.startState.doc), effects, undefined, tr.startState.selection, none$5);
    };
    HistEvent.selection = function selection (selections) {
        return new HistEvent(undefined, none$5, undefined, undefined, selections);
    };
    function updateBranch(branch, to, maxLen, newEvent) {
        var start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
        var newBranch = branch.slice(start, to);
        newBranch.push(newEvent);
        return newBranch;
    }
    function isAdjacent(a, b) {
        var ranges = [], isAdjacent = false;
        a.iterChangedRanges(function (f, t) { return ranges.push(f, t); });
        b.iterChangedRanges(function (_f, _t, f, t) {
            for (var i = 0; i < ranges.length;) {
                var from = ranges[i++], to = ranges[i++];
                if (t >= from && f <= to)
                    { isAdjacent = true; }
            }
        });
        return isAdjacent;
    }
    function eqSelectionShape(a, b) {
        return a.ranges.length == b.ranges.length &&
            a.ranges.filter(function (r, i) { return r.empty != b.ranges[i].empty; }).length === 0;
    }
    function conc(a, b) {
        return !a.length ? b : !b.length ? a : a.concat(b);
    }
    var none$5 = [];
    var MaxSelectionsPerEvent = 200;
    function addSelection(branch, selection) {
        if (!branch.length) {
            return [HistEvent.selection([selection])];
        }
        else {
            var lastEvent = branch[branch.length - 1];
            var sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
            if (sels.length && sels[sels.length - 1].eq(selection))
                { return branch; }
            sels.push(selection);
            return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
        }
    }
    // Assumes the top item has one or more selectionAfter values
    function popSelection(branch) {
        var last = branch[branch.length - 1];
        var newBranch = branch.slice();
        newBranch[branch.length - 1] = last.setSelAfter(last.selectionsAfter.slice(0, last.selectionsAfter.length - 1));
        return newBranch;
    }
    // Add a mapping to the top event in the given branch. If this maps
    // away all the changes and effects in that item, drop it and
    // propagate the mapping to the next item.
    function addMappingToBranch(branch, mapping) {
        if (!branch.length)
            { return branch; }
        var length = branch.length, selections = none$5;
        while (length) {
            var event = mapEvent(branch[length - 1], mapping, selections);
            if (event.changes && !event.changes.empty || event.effects.length) { // Event survived mapping
                var result = branch.slice(0, length);
                result[length - 1] = event;
                return result;
            }
            else { // Drop this event, since there's no changes or effects left
                mapping = event.mapped;
                length--;
                selections = event.selectionsAfter;
            }
        }
        return selections.length ? [HistEvent.selection(selections)] : none$5;
    }
    function mapEvent(event, mapping, extraSelections) {
        var selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map(function (s) { return s.map(mapping); }) : none$5, extraSelections);
        // Change-less events don't store mappings (they are always the last event in a branch)
        if (!event.changes)
            { return HistEvent.selection(selections); }
        var mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
        var fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
        return new HistEvent(mappedChanges, StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(mapping), selections);
    }
    var HistoryState = function HistoryState(done, undone, prevTime, prevUserEvent) {
        if ( prevTime === void 0 ) prevTime = 0;
        if ( prevUserEvent === void 0 ) prevUserEvent = undefined;

        this.done = done;
        this.undone = undone;
        this.prevTime = prevTime;
        this.prevUserEvent = prevUserEvent;
    };
    HistoryState.prototype.isolate = function isolate () {
        return this.prevTime ? new HistoryState(this.done, this.undone) : this;
    };
    HistoryState.prototype.addChanges = function addChanges (event, time, userEvent, newGroupDelay, maxLen) {
        var done = this.done, lastEvent = done[done.length - 1];
        if (lastEvent && lastEvent.changes &&
            time - this.prevTime < newGroupDelay &&
            !lastEvent.selectionsAfter.length &&
            lastEvent.changes.length && event.changes &&
            isAdjacent(lastEvent.changes, event.changes)) {
            done = updateBranch(done, done.length - 1, maxLen, new HistEvent(event.changes.compose(lastEvent.changes), conc(event.effects, lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none$5));
        }
        else {
            done = updateBranch(done, done.length, maxLen, event);
        }
        return new HistoryState(done, none$5, time, userEvent);
    };
    HistoryState.prototype.addSelection = function addSelection$1 (selection, time, userEvent, newGroupDelay) {
        var last = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none$5;
        if (last.length > 0 &&
            time - this.prevTime < newGroupDelay &&
            userEvent == "keyboardselection" && this.prevUserEvent == userEvent &&
            eqSelectionShape(last[last.length - 1], selection))
            { return this; }
        return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
    };
    HistoryState.prototype.addMapping = function addMapping (mapping) {
        return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
    };
    HistoryState.prototype.pop = function pop (side, state, selection) {
        var branch = side == 0 /* Done */ ? this.done : this.undone;
        if (branch.length == 0)
            { return null; }
        var event = branch[branch.length - 1];
        if (selection && event.selectionsAfter.length) {
            return state.update({
                selection: event.selectionsAfter[event.selectionsAfter.length - 1],
                annotations: fromHistory.of({ side: side, rest: popSelection(branch) })
            });
        }
        else if (!event.changes) {
            return null;
        }
        else {
            var rest = branch.length == 1 ? none$5 : branch.slice(0, branch.length - 1);
            if (event.mapped)
                { rest = addMappingToBranch(rest, event.mapped); }
            return state.update({
                changes: event.changes,
                selection: event.startSelection,
                effects: event.effects,
                annotations: fromHistory.of({ side: side, rest: rest }),
                filter: false
            });
        }
    };
    HistoryState.empty = new HistoryState(none$5, none$5);
    /// Default key bindings for the undo history.
    ///
    /// - Mod-z: [`undo`](#history.undo).
    /// - Mod-y (Mod-Shift-z on macOS): [`redo`](#history.redo).
    /// - Mod-u: [`undoSelection`](#history.undoSelection).
    /// - Alt-u (Mod-Shift-u on macOS): [`redoSelection`](#history.redoSelection).
    var historyKeymap = [
        { key: "Mod-z", run: undo, preventDefault: true },
        { key: "Mod-y", mac: "Mod-Shift-z", run: redo, preventDefault: true },
        { key: "Mod-u", run: undoSelection, preventDefault: true },
        { key: "Alt-u", mac: "Mod-Shift-u", run: redoSelection, preventDefault: true }
    ];

    var _m4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        history: history,
        historyKeymap: historyKeymap,
        invertedEffects: invertedEffects,
        isolateHistory: isolateHistory,
        redo: redo,
        redoDepth: redoDepth,
        redoSelection: redoSelection,
        undo: undo,
        undoDepth: undoDepth,
        undoSelection: undoSelection
    });

    var LocalUpdate = function LocalUpdate(origin, changes, effects) {
        this.origin = origin;
        this.changes = changes;
        this.effects = effects;
    };
    // This state field accumulates updates that have to be sent to the
    // central authority in the collaborating group and makes it possible
    // to integrate updates made by peers into our local document. It is
    // defined by the plugin, and will be available as the `collab` field
    // in the resulting editor state.
    var CollabState = function CollabState(
    // The version number of the last update received from the central
    // authority. Starts at 0 or the value of the `version` property
    // in the option object, for the editor's value when the option
    // was enabled.
    version, 
    // The local updates that havent been successfully sent to the
    // server yet.
    unconfirmed) {
        this.version = version;
        this.unconfirmed = unconfirmed;
    };
    var collabConfig = Facet.define({
        combine: function combine(configs) {
            var combined = combineConfig(configs, { startVersion: 0, clientID: "", sharedEffects: null });
            return { startVersion: combined.startVersion,
                clientID: combined.clientID || (configs.length && configs[0].generatedID) || "",
                sharedEffects: combined.sharedEffects };
        }
    });
    var collabReceive = Annotation.define();
    var collabField = StateField.define({
        create: function create(state) {
            return new CollabState(state.facet(collabConfig).startVersion, []);
        },
        update: function update(collab, tr) {
            var isSync = tr.annotation(collabReceive);
            if (isSync)
                { return isSync; }
            var ref = tr.startState.facet(collabConfig);
            var sharedEffects = ref.sharedEffects;
            var update = new LocalUpdate(tr, tr.changes, sharedEffects ? sharedEffects(tr) : []);
            if (update.effects.length || !update.changes.empty)
                { return new CollabState(collab.version, collab.unconfirmed.concat(update)); }
            return collab;
        }
    });
    /// Create an instance of the collaborative editing plugin.
    function collab(config) {
        if ( config === void 0 ) config = {};

        return [
            collabField,
            collabConfig.of({ startVersion: config.startVersion,
                clientID: config.clientID,
                sharedEffects: config.sharedEffects,
                generatedID: Math.floor(Math.random() * 0xFFFFFFFF).toString(16) })
        ];
    }
    /// Create a transaction that represents a set of new updates received
    /// from the authority. Applying this transaction moves the state
    /// forward to adjust to the authority's view of the document.
    function receiveUpdates(state, updates, ownUpdateCount) {
        // Pushes a set of updates (received from the central authority)
        // into the editor state (which should have the collab plugin
        // enabled). Will recognize its own updates, and confirm unconfirmed
        // updates as appropriate. Remaining unconfirmed updates will be
        // rebased over remote changes.
        var collabState = state.field(collabField);
        var version = collabState.version + updates.length;
        var unconfirmed = collabState.unconfirmed.slice(ownUpdateCount);
        if (ownUpdateCount)
            { updates = updates.slice(ownUpdateCount); }
        // If all updates originated with us, we're done.
        if (!updates.length)
            { return state.update({ annotations: [collabReceive.of(new CollabState(version, unconfirmed))] }); }
        var changes = updates[0].changes, effects = updates[0].effects || [];
        for (var i = 1; i < updates.length; i++) {
            var update = updates[i];
            effects = StateEffect.mapEffects(effects, update.changes);
            if (update.effects)
                { effects = effects.concat(update.effects); }
            changes = changes.compose(update.changes);
        }
        if (unconfirmed.length) {
            var newUnconfirmed = [];
            for (var i$1 = 0, list = unconfirmed; i$1 < list.length; i$1 += 1) {
                var update$1 = list[i$1];

                var updateChanges = update$1.changes.map(changes);
                changes = changes.map(update$1.changes, true);
                newUnconfirmed.push(new LocalUpdate(update$1.origin, updateChanges, StateEffect.mapEffects(update$1.effects, changes)));
            }
            unconfirmed = newUnconfirmed;
            effects = StateEffect.mapEffects(effects, unconfirmed.reduce(function (ch, u) { return ch.compose(u.changes); }, ChangeSet.empty(unconfirmed[0].changes.length)));
        }
        return state.update({
            changes: changes,
            effects: effects,
            annotations: [
                Transaction.addToHistory.of(false),
                collabReceive.of(new CollabState(version, unconfirmed))
            ],
            filter: false
        });
    }
    /// Returns the set of locally made updates that still have to be sent
    /// to the authority. The returned objects will also have an `origin`
    /// property that points at the transaction that created them. This
    /// may be useful if you want to send along metadata like timestamps.
    /// (But note that the updates may have been mapped in the meantime,
    /// whereas the transaction is just the original transaction that
    /// created them.)
    function sendableUpdates(state) {
        return state.field(collabField).unconfirmed;
    }
    /// Get the version up to which the collab plugin has synced with the
    /// central authority.
    function getSyncedVersion(state) {
        return state.field(collabField).version;
    }
    /// Get this editor's collaborative editing client ID.
    function getClientID(state) {
        return state.facet(collabConfig).clientID;
    }

    var _m5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        collab: collab,
        getClientID: getClientID,
        getSyncedVersion: getSyncedVersion,
        receiveUpdates: receiveUpdates,
        sendableUpdates: sendableUpdates
    });

    /// A gutter marker represents a bit of information attached to a line
    /// in a specific gutter. Your own custom markers have to extend this
    /// class.
    var GutterMarker = /*@__PURE__*/(function (RangeValue) {
        function GutterMarker () {
            RangeValue.apply(this, arguments);
        }

        if ( RangeValue ) GutterMarker.__proto__ = RangeValue;
        GutterMarker.prototype = Object.create( RangeValue && RangeValue.prototype );
        GutterMarker.prototype.constructor = GutterMarker;

        GutterMarker.prototype.compare = function compare (other) {
            return this == other || this.constructor == other.constructor && this.eq(other);
        };
        /// Render the DOM node for this marker, if any.
        GutterMarker.prototype.toDOM = function toDOM (_view) { return null; };
        /// Create a range that places this marker at the given position.
        GutterMarker.prototype.at = function at (pos) { return new Range(pos, pos, this); };

        return GutterMarker;
    }(RangeValue));
    GutterMarker.prototype.elementClass = "";
    GutterMarker.prototype.mapMode = MapMode.TrackBefore;
    var defaults = {
        style: "",
        renderEmptyElements: false,
        elementStyle: "",
        markers: function () { return RangeSet.empty; },
        lineMarker: function () { return null; },
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {}
    };
    var activeGutters = Facet.define();
    /// Define an editor gutter.
    function gutter(config) {
        return [gutters(), activeGutters.of(Object.assign(Object.assign({}, defaults), config))];
    }
    var baseTheme$2 = EditorView.baseTheme({
        gutters: {
            display: "flex",
            height: "100%",
            boxSizing: "border-box",
            left: 0
        },
        "gutters@light": {
            backgroundColor: "#f5f5f5",
            color: "#999",
            borderRight: "1px solid silver"
        },
        "gutters@dark": {
            backgroundColor: "#333338",
            color: "#ccc"
        },
        gutter: {
            display: "flex !important",
            flexDirection: "column",
            flexShrink: 0,
            boxSizing: "border-box",
            height: "100%",
            overflow: "hidden"
        },
        gutterElement: {
            boxSizing: "border-box"
        },
        "gutterElement.lineNumber": {
            padding: "0 3px 0 5px",
            minWidth: "20px",
            textAlign: "right",
            whiteSpace: "nowrap"
        }
    });
    var unfixGutters = Facet.define({
        combine: function (values) { return values.some(function (x) { return x; }); }
    });
    /// The gutter-drawing plugin is automatically enabled when you add a
    /// gutter, but you can use this function to explicitly configure it.
    ///
    /// Unless `fixed` is explicitly set to `false`, the gutters are
    /// fixed, meaning they don't scroll along with the content
    /// horizontally.
    function gutters(config) {
        var result = [
            gutterView,
            baseTheme$2
        ];
        if (config && config.fixed === false)
            { result.push(unfixGutters.of(true)); }
        return result;
    }
    var gutterView = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.view = view;
            this.dom = document.createElement("div");
            this.dom.className = themeClass("gutters");
            this.dom.setAttribute("aria-hidden", "true");
            this.gutters = view.state.facet(activeGutters).map(function (conf) { return new SingleGutterView(view, conf); });
            for (var i = 0, list = this.gutters; i < list.length; i += 1)
                {
            var gutter = list[i];

            this.dom.appendChild(gutter.dom);
        }
            this.fixed = !view.state.facet(unfixGutters);
            if (this.fixed) {
                // FIXME IE11 fallback, which doesn't support position: sticky,
                // by using position: relative + event handlers that realign the
                // gutter (or just force fixed=false on IE11?)
                this.dom.style.position = "sticky";
            }
            view.scrollDOM.insertBefore(this.dom, view.contentDOM);
        }
        anonymous.prototype.update = function update (update$1) {
            var this$1 = this;

            if (!this.updateGutters(update$1))
                { return; }
            var contexts = this.gutters.map(function (gutter) { return new UpdateContext(gutter, this$1.view.viewport); });
            this.view.viewportLines(function (line) {
                var text;
                if (Array.isArray(line.type)) {
                    for (var i = 0, list = line.type; i < list.length; i += 1)
                        {
                        var b = list[i];

                        if (b.type == BlockType.Text) {
                            text = b;
                            break;
                        }
                    }
                }
                else {
                    text = line.type == BlockType.Text ? line : undefined;
                }
                if (!text)
                    { return; }
                for (var i$1 = 0, list$1 = contexts; i$1 < list$1.length; i$1 += 1)
                    {
                    var cx = list$1[i$1];

                    cx.line(this$1.view, text);
                }
            }, 0);
            for (var i = 0, list = contexts; i < list.length; i += 1)
                {
                var cx = list[i];

                cx.finish();
            }
            this.dom.style.minHeight = this.view.contentHeight + "px";
            if (update$1.state.facet(unfixGutters) != !this.fixed) {
                this.fixed = !this.fixed;
                this.dom.style.position = this.fixed ? "sticky" : "";
            }
        };
        anonymous.prototype.updateGutters = function updateGutters (update) {
            var prev = update.prevState.facet(activeGutters), cur = update.state.facet(activeGutters);
            var change = update.docChanged || update.heightChanged;
            if (prev == cur) {
                for (var i = 0, list = this.gutters; i < list.length; i += 1)
                    {
                    var gutter = list[i];

                    if (gutter.update(update))
                        { change = true;
                } }
            }
            else {
                change = true;
                var gutters = [];
                for (var i$1 = 0, list$1 = cur; i$1 < list$1.length; i$1 += 1) {
                    var conf = list$1[i$1];

                    var known = prev.indexOf(conf);
                    if (known < 0) {
                        gutters.push(new SingleGutterView(this.view, conf));
                    }
                    else {
                        this.gutters[known].update(update);
                        gutters.push(this.gutters[known]);
                    }
                }
                for (var i$2 = 0, list$2 = this.gutters; i$2 < list$2.length; i$2 += 1)
                    {
                    var g = list$2[i$2];

                    g.dom.remove();
                }
                for (var i$3 = 0, list$3 = gutters; i$3 < list$3.length; i$3 += 1)
                    {
                    var g$1 = list$3[i$3];

                    this.dom.appendChild(g$1.dom);
                }
                this.gutters = gutters;
            }
            return change;
        };
        anonymous.prototype.destroy = function destroy () {
            this.dom.remove();
        };

        return anonymous;
    }())).provide(PluginField.scrollMargins, function (value) {
        if (value.gutters.length == 0 || !value.fixed)
            { return null; }
        return value.view.textDirection == Direction.LTR ? { left: value.dom.offsetWidth } : { right: value.dom.offsetWidth };
    });
    var UpdateContext = function UpdateContext(gutter, viewport) {
        this.gutter = gutter;
        this.localMarkers = [];
        this.i = 0;
        this.height = 0;
        this.cursor = RangeSet.iter(Array.isArray(gutter.markers) ? gutter.markers : [gutter.markers], viewport.from);
    };
    UpdateContext.prototype.line = function line (view, line$1) {
        if (this.localMarkers.length)
            { this.localMarkers = []; }
        while (this.cursor.value && this.cursor.from <= line$1.from) {
            if (this.cursor.from == line$1.from)
                { this.localMarkers.push(this.cursor.value); }
            this.cursor.next();
        }
        var forLine = this.gutter.config.lineMarker(view, line$1, this.localMarkers);
        if (forLine)
            { this.localMarkers.unshift(forLine); }
        var gutter = this.gutter;
        if (this.localMarkers.length == 0 && !gutter.config.renderEmptyElements)
            { return; }
        var above = line$1.top - this.height;
        if (this.i == gutter.elements.length) {
            var newElt = new GutterElement(view, line$1.height, above, this.localMarkers, gutter.elementClass);
            gutter.elements.push(newElt);
            gutter.dom.appendChild(newElt.dom);
        }
        else {
            var markers = this.localMarkers, elt = gutter.elements[this.i];
            if (sameMarkers(markers, elt.markers)) {
                markers = elt.markers;
                this.localMarkers.length = 0;
            }
            elt.update(view, line$1.height, above, markers, gutter.elementClass);
        }
        this.height = line$1.bottom;
        this.i++;
    };
    UpdateContext.prototype.finish = function finish () {
        var gutter = this.gutter;
        while (gutter.elements.length > this.i)
            { gutter.dom.removeChild(gutter.elements.pop().dom); }
    };
    var SingleGutterView = function SingleGutterView(view, config) {
        var this$1 = this;

        this.view = view;
        this.config = config;
        this.elements = [];
        this.spacer = null;
        this.dom = document.createElement("div");
        this.dom.className = themeClass("gutter" + (this.config.style ? "." + this.config.style : ""));
        this.elementClass = themeClass("gutterElement" + (this.config.style ? "." + this.config.style : ""));
        var loop = function ( prop ) {
            this$1.dom.addEventListener(prop, function (event) {
                var line = view.visualLineAtHeight(event.clientY, view.contentDOM.getBoundingClientRect().top);
                if (config.domEventHandlers[prop](view, line, event))
                    { event.preventDefault(); }
            });
        };

        for (var prop in config.domEventHandlers) loop( prop );
        this.markers = config.markers(view.state);
        if (config.initialSpacer) {
            this.spacer = new GutterElement(view, 0, 0, [config.initialSpacer(view)], this.elementClass);
            this.dom.appendChild(this.spacer.dom);
            this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
        }
    };
    SingleGutterView.prototype.update = function update (update$1) {
        var prevMarkers = this.markers;
        this.markers = this.config.markers(update$1.state);
        if (this.spacer && this.config.updateSpacer) {
            var updated = this.config.updateSpacer(this.spacer.markers[0], update$1);
            if (updated != this.spacer.markers[0])
                { this.spacer.update(update$1.view, 0, 0, [updated], this.elementClass); }
        }
        return this.markers != prevMarkers;
    };
    var GutterElement = function GutterElement(view, height, above, markers, eltClass) {
        this.height = -1;
        this.above = 0;
        this.dom = document.createElement("div");
        this.update(view, height, above, markers, eltClass);
    };
    GutterElement.prototype.update = function update (view, height, above, markers, cssClass) {
        if (this.height != height)
            { this.dom.style.height = (this.height = height) + "px"; }
        if (this.above != above)
            { this.dom.style.marginTop = (this.above = above) ? above + "px" : ""; }
        if (this.markers != markers) {
            this.markers = markers;
            for (var ch = (void 0); ch = this.dom.lastChild;)
                { ch.remove(); }
            var cls = cssClass;
            for (var i = 0, list = markers; i < list.length; i += 1) {
                var m = list[i];

                    var dom = m.toDOM(view);
                if (dom)
                    { this.dom.appendChild(dom); }
                var c = m.elementClass;
                if (c)
                    { cls += " " + c; }
            }
            this.dom.className = cls;
        }
    };
    function sameMarkers(a, b) {
        if (a.length != b.length)
            { return false; }
        for (var i = 0; i < a.length; i++)
            { if (!a[i].compare(b[i]))
                { return false; } }
        return true;
    }
    /// Facet used to provide markers to the line number gutter.
    var lineNumberMarkers = Facet.define();
    var lineNumberConfig = Facet.define({
        combine: function combine(values) {
            return combineConfig(values, { formatNumber: String, domEventHandlers: {} }, {
                domEventHandlers: function domEventHandlers(a, b) {
                    var result = Object.assign({}, a);
                    var loop = function ( event ) {
                        var exists = result[event], add = b[event];
                        result[event] = exists ? function (view, line, event) { return exists(view, line, event) || add(view, line, event); } : add;
                    };

                    for (var event in b) loop( event );
                    return result;
                }
            });
        }
    });
    var NumberMarker = /*@__PURE__*/(function (GutterMarker) {
        function NumberMarker(number) {
            GutterMarker.call(this);
            this.number = number;
        }

        if ( GutterMarker ) NumberMarker.__proto__ = GutterMarker;
        NumberMarker.prototype = Object.create( GutterMarker && GutterMarker.prototype );
        NumberMarker.prototype.constructor = NumberMarker;
        NumberMarker.prototype.eq = function eq (other) { return this.number == other.number; };
        NumberMarker.prototype.toDOM = function toDOM (view) {
            var config = view.state.facet(lineNumberConfig);
            return document.createTextNode(config.formatNumber(this.number));
        };

        return NumberMarker;
    }(GutterMarker));
    var lineNumberGutter = gutter({
        style: "lineNumber",
        markers: function markers(state) { return state.facet(lineNumberMarkers); },
        lineMarker: function lineMarker(view, line, others) {
            if (others.length)
                { return null; }
            // FIXME try to make the line number queries cheaper?
            return new NumberMarker(view.state.doc.lineAt(line.from).number);
        },
        initialSpacer: function initialSpacer(view) {
            return new NumberMarker(maxLineNumber(view.state.doc.lines));
        },
        updateSpacer: function updateSpacer(spacer, update) {
            var max = maxLineNumber(update.view.state.doc.lines);
            return max == spacer.number ? spacer : new NumberMarker(max);
        }
    });
    /// Create a line number gutter extension. The order in which the
    /// gutters appear is determined by their extension priority.
    function lineNumbers(config) {
        if ( config === void 0 ) config = {};

        return [
            lineNumberConfig.of(config),
            lineNumberGutter
        ];
    }
    function maxLineNumber(lines) {
        var last = 9;
        while (last < lines)
            { last = last * 10 + 9; }
        return last;
    }

    var _m6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GutterMarker: GutterMarker,
        gutter: gutter,
        gutters: gutters,
        lineNumberMarkers: lineNumberMarkers,
        lineNumbers: lineNumbers
    });

    /// A syntax tree node prop used to associate indentation strategies
    /// with node types. Such a strategy is a function from an indentation
    /// context to a number. That number may be -1, to indicate that no
    /// definitive indentation can be determined, or a column number to
    /// which the given line should be indented.
    var indentNodeProp = new NodeProp();
    function syntaxIndentation(syntax) {
        return EditorState.indentation.of(function (cx, pos) {
            return computeIndentation(cx, syntax.getTree(cx.state), pos);
        });
    }
    // Compute the indentation for a given position from the syntax tree.
    function computeIndentation(cx, ast, pos) {
        var tree = ast.resolve(pos);
        // Enter previous nodes that end in empty error terms, which means
        // they were broken off by error recovery, so that indentation
        // works even if the constructs haven't been finished.
        for (var scan = tree, scanPos = pos;;) {
            var last = scan.childBefore(scanPos);
            if (!last)
                { break; }
            if (last.type.prop(NodeProp.error) && last.start == last.end) {
                tree = scan;
                scanPos = last.start;
            }
            else {
                scan = last;
                scanPos = scan.end + 1;
            }
        }
        for (; tree; tree = tree.parent) {
            var strategy = indentStrategy(tree);
            if (strategy)
                { return strategy(new TreeIndentContext(cx, pos, tree)); }
        }
        return -1;
    }
    function indentStrategy(tree) {
        var strategy = tree.type.prop(indentNodeProp);
        if (strategy)
            { return strategy; }
        var first = tree.firstChild, close;
        if (first && (close = first.type.prop(NodeProp.closedBy))) {
            var last = tree.lastChild, closed = last && close.indexOf(last.name) > -1;
            return function (cx) { return delimitedStrategy(cx, true, 1, undefined, closed ? last.start : undefined); };
        }
        return tree.parent == null ? topIndent : null;
    }
    function topIndent() { return 0; }
    /// Objects of this type provide context information and helper
    /// methods to indentation functions.
    var TreeIndentContext = /*@__PURE__*/(function (IndentContext) {
        function TreeIndentContext(base, 
        /// The position at which indentation is being computed.
        pos, 
        /// The syntax tree node for which the indentation strategy is
        /// registered.
        node) {
            IndentContext.call(this, base.state, base.overrideIndentation, base.simulateBreak);
            this.pos = pos;
            this.node = node;
        }

        if ( IndentContext ) TreeIndentContext.__proto__ = IndentContext;
        TreeIndentContext.prototype = Object.create( IndentContext && IndentContext.prototype );
        TreeIndentContext.prototype.constructor = TreeIndentContext;

        var prototypeAccessors = { textAfter: { configurable: true },baseIndent: { configurable: true } };
        /// Get the text directly after `this.pos`, either the entire line
        /// or the next 100 characters, whichever is shorter.
        prototypeAccessors.textAfter.get = function () {
            return this.textAfterPos(this.pos);
        };
        /// Get the indentation at the reference line for `this.node`, which
        /// is the line on which it starts, unless there is a node that is
        /// _not_ a parent of this node covering the start of that line. If
        /// so, the line at the start of that node is tried, again skipping
        /// on if it is covered by another such node.
        prototypeAccessors.baseIndent.get = function () {
            var line = this.state.doc.lineAt(this.node.start);
            // Skip line starts that are covered by a sibling (or cousin, etc)
            for (;;) {
                var atBreak = this.node.resolve(line.from);
                while (atBreak.parent && atBreak.parent.start == atBreak.start)
                    { atBreak = atBreak.parent; }
                if (isParent(atBreak, this.node))
                    { break; }
                line = this.state.doc.lineAt(atBreak.start);
            }
            return this.lineIndent(line);
        };

        Object.defineProperties( TreeIndentContext.prototype, prototypeAccessors );

        return TreeIndentContext;
    }(IndentContext));
    function isParent(parent, of) {
        for (var cur = of; cur; cur = cur.parent)
            { if (parent == cur)
                { return true; } }
        return false;
    }
    // Check whether a delimited node is aligned (meaning there are
    // non-skipped nodes on the same line as the opening delimiter). And
    // if so, return the opening token.
    function bracketedAligned(context) {
        var tree = context.node;
        var openToken = tree.childAfter(tree.start), last = tree.lastChild;
        if (!openToken || context.simulateBreak == openToken.end)
            { return null; }
        var openLine = context.state.doc.lineAt(openToken.start);
        for (var pos = openToken.end;;) {
            var next = tree.childAfter(pos);
            if (!next || next == last)
                { return null; }
            if (!next.type.prop(NodeProp.skipped))
                { return next.start < openLine.to ? openToken : null; }
            pos = next.end;
        }
    }
    /// An indentation strategy for delimited (usually bracketed) nodes.
    /// Will, by default, indent one unit more than the parent's base
    /// indent unless the line starts with a closing token. When `align`
    /// is true and there are non-skipped nodes on the node's opening
    /// line, the content of the node will be aligned with the end of the
    /// opening node, like this:
    ///
    ///     foo(bar,
    ///         baz)
    function delimitedIndent(ref) {
        var closing = ref.closing;
        var align = ref.align; if ( align === void 0 ) align = true;
        var units = ref.units; if ( units === void 0 ) units = 1;

        return function (context) { return delimitedStrategy(context, align, units, closing); };
    }
    function delimitedStrategy(context, align, units, closing, closedAt) {
        var after = context.textAfter, space = after.match(/^\s*/)[0].length;
        var closed = closing && after.slice(space, space + closing.length) == closing || closedAt == context.pos + space;
        var aligned = align ? bracketedAligned(context) : null;
        if (aligned)
            { return closed ? context.column(aligned.start) : context.column(aligned.end); }
        return context.baseIndent + (closed ? 0 : context.unit * units);
    }
    /// An indentation strategy that aligns a node content to its base
    /// indentation.
    var flatIndent = function (context) { return context.baseIndent; };
    /// Creates an indentation strategy that, by default, indents
    /// continued lines one unit more than the node's base indentation.
    /// You can provide `except` to prevent indentation of lines that
    /// match a pattern (for example `/^else\b/` in `if`/`else`
    /// constructs), and you can change the amount of units used with the
    /// `units` option.
    function continuedIndent(ref) {
        if ( ref === void 0 ) ref = {};
        var except = ref.except;
        var units = ref.units; if ( units === void 0 ) units = 1;

        return function (context) {
            var matchExcept = except && except.test(context.textAfter);
            return context.baseIndent + (matchExcept ? 0 : units * context.unit);
        };
    }

    /// This node prop is used to associate folding information with node
    /// types. Given a subtree, it should check whether that tree is
    /// foldable and return the range that can be collapsed when it is.
    var foldNodeProp = new NodeProp();
    function syntaxFolding(syntax) {
        return EditorState.foldable.of(function (state, start, end) {
            var inner = syntax.getTree(state).resolve(end);
            var found = null;
            for (var cur = inner; cur; cur = cur.parent) {
                if (cur.end <= end || cur.start > end)
                    { continue; }
                if (found && cur.start < start)
                    { break; }
                var prop = cur.type.prop(foldNodeProp);
                if (prop) {
                    var value = prop(cur, state);
                    if (value && value.from <= end && value.from >= start && value.to > end)
                        { found = value; }
                }
            }
            return found;
        });
    }

    /// A [syntax provider](#state.Syntax) based on a
    /// [Lezer](https://lezer.codemirror.net) parser.
    var LezerSyntax = function LezerSyntax(parser, config) {
        var this$1 = this;
        var obj;

        if ( config === void 0 ) config = {};
        var setSyntax = StateEffect.define();
        var languageData = config.languageData;
        this.languageData = Facet.define({
            combine: languageData ? function (values) { return values.concat(languageData); } : undefined
        });
        parser = this.parser = parser.withProps(languageDataProp.add(( obj = {}, obj[parser.topType.name] = this.languageData, obj )));
        this.field = StateField.define({
            create: function create(state) { return SyntaxState.advance(Tree.empty, parser, state.doc); },
            update: function update(value, tr) { return value.apply(tr, parser, setSyntax); }
        });
        this.extension = [
            EditorState.syntax.of(this),
            this.field,
            ViewPlugin.define(function (view) { return new HighlightWorker(view, this$1, setSyntax); }),
            syntaxIndentation(this),
            syntaxFolding(this)
        ];
    };
    LezerSyntax.prototype.getTree = function getTree (state) {
        return state.field(this.field).tree;
    };
    LezerSyntax.prototype.parsePos = function parsePos (state) {
        return state.field(this.field).upto;
    };
    LezerSyntax.prototype.ensureTree = function ensureTree (state, upto, timeout) {
            if ( timeout === void 0 ) timeout = 100;

        var field = state.field(this.field);
        if (field.upto >= upto)
            { return field.updatedTree; }
        if (!field.parse)
            { field.startParse(this.parser, state.doc); }
        if (field.parse.pos < upto) {
            var done = work(field.parse, timeout, upto);
            if (done)
                { return field.stopParse(done, state.doc.length); }
        }
        return field.parse.pos < upto ? null : field.stopParse();
    };
    LezerSyntax.prototype.languageDataFacetAt = function languageDataFacetAt (state, pos) {
        if (this.parser.hasNested) {
            var tree = this.getTree(state);
            var target = tree.resolve(pos);
            while (target) {
                var facet = target.type.prop(languageDataProp);
                if (facet)
                    { return facet; }
                target = target.parent;
            }
        }
        return this.languageData;
    };
    var DocStream = function DocStream(doc, length) {
        if ( length === void 0 ) length = doc.length;

        this.doc = doc;
        this.length = length;
        this.cursorPos = 0;
        this.string = "";
        this.cursor = doc.iter();
    };
    DocStream.prototype.get = function get (pos) {
        if (pos >= this.length)
            { return -1; }
        var stringStart = this.cursorPos - this.string.length;
        if (pos < stringStart || pos >= this.cursorPos) {
            if (pos < this.cursorPos) { // Reset the cursor if we have to go back
                this.cursor = this.doc.iter();
                this.cursorPos = 0;
            }
            this.string = this.cursor.next(pos - this.cursorPos).value;
            this.cursorPos = pos + this.string.length;
            stringStart = this.cursorPos - this.string.length;
        }
        return this.string.charCodeAt(pos - stringStart);
    };
    DocStream.prototype.read = function read (from, to) {
        var stringStart = this.cursorPos - this.string.length;
        if (from < stringStart || to >= this.cursorPos)
            { return this.doc.sliceString(from, to); }
        else
            { return this.string.slice(from - stringStart, to - stringStart); }
    };
    DocStream.prototype.clip = function clip (at) {
        return new DocStream(this.doc, at);
    };
    function work(parse, time, upto /* MaxPos */) {
        if ( upto === void 0 ) upto = 5000000;

        var endTime = Date.now() + time;
        for (;;) {
            var done = parse.advance();
            if (done)
                { return done; }
            if (parse.pos > upto || Date.now() > endTime)
                { return null; }
        }
    }
    function takeTree(parse, base) {
        var parsed = parse.forceFinish();
        var cache = parsed.applyChanges([{ fromA: parse.pos, toA: parsed.length, fromB: parse.pos, toB: parsed.length }])
            .append(base.applyChanges([{ fromA: 0, toA: parse.pos, fromB: 0, toB: parse.pos }]));
        return { parsed: parsed, cache: cache };
    }
    var SyntaxState = function SyntaxState(
    // The current tree. Immutable, because directly accessible from
    // the editor state.
    tree, 
    // The point upto which the document has been parsed.
    upto, 
    // The tree that can be used as cache for further incremental
    // parsing. May differ from tree/updatedTree if a parse is broken
    // off halfway—in that case, this one will have nodes that touch
    // the break-off point dropped/decomposed so that they don't get
    // incorrectly reused. The other properties will have those nodes,
    // since they may be useful for code consuming the tree.
    cache) {
        this.tree = tree;
        this.upto = upto;
        this.cache = cache;
        // In-progress parse, if any
        this.parse = null;
        this.updatedTree = tree;
    };
    SyntaxState.advance = function advance (cache, parser, doc) {
        var parse = parser.startParse(new DocStream(doc), { cache: cache });
        var done = work(parse, 25 /* Apply */);
        if (done)
            { return new SyntaxState(done, doc.length, done); }
        var result = takeTree(parse, cache);
        return new SyntaxState(result.parsed, parse.pos, result.cache);
    };
    SyntaxState.prototype.apply = function apply (tr, parser, effect) {
        for (var i = 0, list = tr.effects; i < list.length; i += 1)
            {
                var e = list[i];

                if (e.is(effect))
                { return e.value;
            } }
        if (!tr.docChanged)
            { return this; }
        var ranges = [];
        tr.changes.iterChangedRanges(function (fromA, toA, fromB, toB) { return ranges.push({ fromA: fromA, toA: toA, fromB: fromB, toB: toB }); });
        return SyntaxState.advance((this.parse ? takeTree(this.parse, this.updatedTree).cache : this.cache).applyChanges(ranges), parser, tr.state.doc);
    };
    SyntaxState.prototype.startParse = function startParse (parser, doc) {
        this.parse = parser.startParse(new DocStream(doc), { cache: this.cache });
    };
    SyntaxState.prototype.stopParse = function stopParse (tree, upto) {
            var assign;

        if (!tree)
            { ((assign = takeTree(this.parse, this.updatedTree), tree = assign.parsed, this.cache = assign.cache)); }
        else
            { this.cache = tree; }
        this.updatedTree = tree;
        this.upto = upto !== null && upto !== void 0 ? upto : this.parse.pos;
        this.parse = null;
        return tree;
    };
    var requestIdle = typeof window != "undefined" && window.requestIdleCallback ||
        (function (callback, ref) {
            var timeout = ref.timeout;

            return setTimeout(callback, timeout);
    });
    var cancelIdle = typeof window != "undefined" && window.cancelIdleCallback || clearTimeout;
    // FIXME figure out some way to back off from full re-parses when the
    // document is large—you could waste a lot of battery re-parsing a
    // multi-megabyte document every time you insert a backtick, even if
    // it happens in the background.
    var HighlightWorker = function HighlightWorker(view, syntax, setSyntax) {
        this.view = view;
        this.syntax = syntax;
        this.setSyntax = setSyntax;
        this.working = -1;
        this.work = this.work.bind(this);
        this.scheduleWork();
    };
    HighlightWorker.prototype.update = function update (update$1) {
        if (update$1.docChanged)
            { this.scheduleWork(); }
    };
    HighlightWorker.prototype.scheduleWork = function scheduleWork () {
        if (this.working > -1)
            { return; }
        var ref = this.view;
            var state = ref.state;
            var field = state.field(this.syntax.field);
        if (field.upto >= state.doc.length)
            { return; }
        this.working = requestIdle(this.work, { timeout: 200 /* Pause */ });
    };
    HighlightWorker.prototype.work = function work$1 (deadline) {
        this.working = -1;
        var ref = this.view;
            var state = ref.state;
            var field = state.field(this.syntax.field);
        if (field.upto >= state.doc.length)
            { return; }
        if (!field.parse)
            { field.startParse(this.syntax.parser, state.doc); }
        var done = work(field.parse, deadline ? Math.max(25 /* MinSlice */, deadline.timeRemaining()) : 100 /* Slice */);
        if (done || field.parse.badness > .8) {
            var tree = field.stopParse(done, state.doc.length);
            this.view.dispatch({
                effects: this.setSyntax.of(new SyntaxState(tree, state.doc.length, field.cache))
            });
        }
        else {
            this.scheduleWork();
        }
    };
    HighlightWorker.prototype.destroy = function destroy () {
        if (this.working >= 0)
            { cancelIdle(this.working); }
    };

    var _m8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LezerSyntax: LezerSyntax,
        TreeIndentContext: TreeIndentContext,
        continuedIndent: continuedIndent,
        delimitedIndent: delimitedIndent,
        flatIndent: flatIndent,
        foldNodeProp: foldNodeProp,
        indentNodeProp: indentNodeProp
    });

    function mapRange(range, mapping) {
        var from = mapping.mapPos(range.from, 1), to = mapping.mapPos(range.to, -1);
        return from >= to ? undefined : { from: from, to: to };
    }
    var foldEffect = StateEffect.define({ map: mapRange });
    var unfoldEffect = StateEffect.define({ map: mapRange });
    function selectedLines(view) {
        var lines = [];
        var loop = function () {
            var ref = list[i];
            var head = ref.head;

            if (lines.some(function (l) { return l.from <= head && l.to >= head; }))
                { return; }
            lines.push(view.visualLineAt(head));
        };

        for (var i = 0, list = view.state.selection.ranges; i < list.length; i += 1) loop();
        return lines;
    }
    var foldState = StateField.define({
        create: function create() {
            return Decoration.none;
        },
        update: function update(folded, tr) {
            folded = folded.map(tr.changes);
            var loop = function () {
                var e = list[i];

                if (e.is(foldEffect) && !foldExists(folded, e.value.from, e.value.to))
                    { folded = folded.update({ add: [FoldWidget.decoration.range(e.value.from, e.value.to)] }); }
                else if (e.is(unfoldEffect)) {
                    folded = folded.update({ filter: function (from, to) { return e.value.from != from || e.value.to != to; },
                        filterFrom: e.value.from, filterTo: e.value.to });
                }
            };

            for (var i = 0, list = tr.effects; i < list.length; i += 1) loop();
            // Clear folded ranges that cover the selection head
            if (tr.selection) {
                var onSelection = false;
                var ref = tr.selection.primary;
                var head = ref.head;
                folded.between(head, head, function (a, b) { if (a < head && b > head)
                    { onSelection = true; } });
                if (onSelection)
                    { folded = folded.update({
                        filterFrom: head,
                        filterTo: head,
                        filter: function (a, b) { return b <= head || a >= head; }
                    }); }
            }
            return folded;
        },
        provide: [EditorView.decorations]
    });
    function foldInside(state, from, to) {
        var _a;
        var found = null;
        (_a = state.field(foldState, false)) === null || _a === void 0 ? void 0 : _a.between(from, to, function (from, to) {
            if (!found || found.from > from)
                { found = ({ from: from, to: to }); }
        });
        return found;
    }
    function foldExists(folded, from, to) {
        var found = false;
        folded.between(from, from, function (a, b) { if (a == from && b == to)
            { found = true; } });
        return found;
    }
    function getFoldable(state, from, to) {
        return state.facet(EditorState.foldable).reduce(function (value, f) { return value || f(state, from, to); }, null);
    }
    function maybeEnable(state) {
        return state.field(foldState, false) ? undefined : { append: codeFolding() };
    }
    /// Fold the lines that are selected, if possible.
    var foldCode = function (view) {
        for (var i = 0, list = selectedLines(view); i < list.length; i += 1) {
            var line = list[i];

            var range = getFoldable(view.state, line.from, line.to);
            if (range) {
                view.dispatch({ effects: foldEffect.of(range),
                    reconfigure: maybeEnable(view.state) });
                return true;
            }
        }
        return false;
    };
    /// Unfold folded ranges on selected lines.
    var unfoldCode = function (view) {
        if (!view.state.field(foldState, false))
            { return false; }
        var effects = [];
        for (var i = 0, list = selectedLines(view); i < list.length; i += 1) {
            var line = list[i];

            var folded = foldInside(view.state, line.from, line.to);
            if (folded)
                { effects.push(unfoldEffect.of(folded)); }
        }
        if (effects.length)
            { view.dispatch({ effects: effects }); }
        return effects.length > 0;
    };
    /// Fold all top-level foldable ranges.
    var foldAll = function (view) {
        var state = view.state;
        var effects = [];
        for (var pos = 0; pos < state.doc.length;) {
            var line = view.visualLineAt(pos), range = getFoldable(state, line.from, line.to);
            if (range)
                { effects.push(foldEffect.of(range)); }
            pos = (range ? view.visualLineAt(range.to) : line).to + 1;
        }
        if (effects.length)
            { view.dispatch({ effects: effects, reconfigure: maybeEnable(view.state) }); }
        return !!effects.length;
    };
    /// Unfold all folded code.
    var unfoldAll = function (view) {
        var field = view.state.field(foldState, false);
        if (!field || !field.size)
            { return false; }
        var effects = [];
        field.between(0, view.state.doc.length, function (from, to) { effects.push(unfoldEffect.of({ from: from, to: to })); });
        view.dispatch({ effects: effects });
        return true;
    };
    /// Default fold-related key bindings.
    ///
    ///  - Ctrl-Shift-[ (Cmd-Alt-[ on macOS): [`foldCode`](#fold.foldCode).
    ///  - Ctrl-Shift-] (Cmd-Alt-] on macOS): [`unfoldCode`](#fold.unfoldCode).
    ///  - Ctrl-Alt-[: [`foldAll`](#fold.foldAll).
    ///  - Ctrl-Alt-]: [`unfoldAll`](#fold.unfoldAll).
    var foldKeymap = [
        { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: foldCode },
        { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: unfoldCode },
        { key: "Ctrl-Alt-[", run: foldAll },
        { key: "Ctrl-Alt-]", run: unfoldAll }
    ];
    var defaultConfig = {
        placeholderDOM: null,
        placeholderText: "…"
    };
    var foldConfig = Facet.define({
        combine: function combine(values) { return combineConfig(values, defaultConfig); }
    });
    /// Create an extension that configures code folding.
    function codeFolding(config) {
        var result = [foldState, baseTheme$3];
        if (config)
            { result.push(foldConfig.of(config)); }
        return result;
    }
    var FoldWidget = /*@__PURE__*/(function (WidgetType) {
        function FoldWidget () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) FoldWidget.__proto__ = WidgetType;
        FoldWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
        FoldWidget.prototype.constructor = FoldWidget;

        FoldWidget.prototype.ignoreEvents = function ignoreEvents () { return false; };
        FoldWidget.prototype.toDOM = function toDOM (view) {
            var state = view.state;
            var conf = state.facet(foldConfig);
            if (conf.placeholderDOM)
                { return conf.placeholderDOM(); }
            var element = document.createElement("span");
            element.textContent = conf.placeholderText;
            element.setAttribute("aria-label", state.phrase("folded code"));
            element.title = state.phrase("unfold");
            element.className = themeClass("foldPlaceholder");
            element.onclick = function (event) {
                var line = view.visualLineAt(view.posAtDOM(event.target));
                var folded = foldInside(view.state, line.from, line.to);
                if (folded)
                    { view.dispatch({ effects: unfoldEffect.of(folded) }); }
                event.preventDefault();
            };
            return element;
        };

        return FoldWidget;
    }(WidgetType));
    FoldWidget.decoration = Decoration.replace({ widget: new FoldWidget(null) });
    var foldGutterDefaults = {
        openText: "⌄",
        closedText: "›"
    };
    var FoldMarker = /*@__PURE__*/(function (GutterMarker) {
        function FoldMarker(config, open) {
            GutterMarker.call(this);
            this.config = config;
            this.open = open;
        }

        if ( GutterMarker ) FoldMarker.__proto__ = GutterMarker;
        FoldMarker.prototype = Object.create( GutterMarker && GutterMarker.prototype );
        FoldMarker.prototype.constructor = FoldMarker;
        FoldMarker.prototype.eq = function eq (other) { return this.config == other.config && this.open == other.open; };
        FoldMarker.prototype.toDOM = function toDOM (view) {
            var span = document.createElement("span");
            span.textContent = this.open ? this.config.openText : this.config.closedText;
            span.title = view.state.phrase(this.open ? "Fold line" : "Unfold line");
            return span;
        };

        return FoldMarker;
    }(GutterMarker));
    /// Create an extension that registers a fold gutter, which shows a
    /// fold status indicator before lines which can be clicked to fold or
    /// unfold the line.
    function foldGutter(config) {
        if ( config === void 0 ) config = {};

        var fullConfig = Object.assign(Object.assign({}, foldGutterDefaults), config);
        var canFold = new FoldMarker(fullConfig, true), canUnfold = new FoldMarker(fullConfig, false);
        return [
            gutter({
                style: "foldGutter",
                lineMarker: function lineMarker(view, line) {
                    // FIXME optimize this. At least don't run it for updates that
                    // don't change anything relevant
                    var folded = foldInside(view.state, line.from, line.to);
                    if (folded)
                        { return canUnfold; }
                    if (getFoldable(view.state, line.from, line.to))
                        { return canFold; }
                    return null;
                },
                initialSpacer: function initialSpacer() {
                    return new FoldMarker(fullConfig, false);
                },
                domEventHandlers: {
                    click: function (view, line) {
                        var folded = foldInside(view.state, line.from, line.to);
                        if (folded) {
                            view.dispatch({ effects: unfoldEffect.of(folded) });
                            return true;
                        }
                        var range = getFoldable(view.state, line.from, line.to);
                        if (range) {
                            view.dispatch({ effects: foldEffect.of(range) });
                            return true;
                        }
                        return false;
                    }
                }
            }),
            codeFolding()
        ];
    }
    var baseTheme$3 = EditorView.baseTheme({
        foldPlaceholder: {
            backgroundColor: "#eee",
            border: "1px solid silver",
            color: "#888",
            borderRadius: ".2em",
            margin: "0 1px",
            padding: "0 1px",
            cursor: "pointer"
        },
        "gutterElement.foldGutter": {
            padding: "0 1px",
            cursor: "pointer"
        }
    });

    var _m9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        codeFolding: codeFolding,
        foldAll: foldAll,
        foldCode: foldCode,
        foldGutter: foldGutter,
        foldKeymap: foldKeymap,
        unfoldAll: unfoldAll,
        unfoldCode: unfoldCode
    });

    var defaults$1 = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}'\":;>"
    };
    /// Extension to enable bracket-closing behavior. When a closeable
    /// bracket is typed, its closing bracket is immediately inserted
    /// after the cursor. When closing a bracket directly in front of that
    /// closing bracket, the cursor moves over the existing bracket. When
    /// backspacing in between brackets, both are removed.
    function closeBrackets() {
        return eventHandler;
    }
    var definedClosing = "()[]{}<>";
    function closing(ch) {
        for (var i = 0; i < definedClosing.length; i += 2)
            { if (definedClosing.charCodeAt(i) == ch)
                { return definedClosing.charAt(i + 1); } }
        return fromCodePoint(ch < 128 ? ch : ch + 1);
    }
    function config(state, pos) {
        return state.languageDataAt("closeBrackets", pos)[0] || defaults$1;
    }
    var eventHandler = EditorView.domEventHandlers({ keydown: function keydown(event, view) {
            if (event.ctrlKey || event.metaKey)
                { return false; }
            if (event.keyCode == 8) { // Backspace
                var tr$1 = handleBackspace(view.state);
                if (!tr$1)
                    { return false; }
                view.dispatch(tr$1);
                return true;
            }
            var key = keyName(event);
            if (key.length > 2 || key.length == 2 && codePointSize(codePointAt(key, 0)) == 1)
                { return false; }
            var tr = handleInsertion(view.state, key);
            if (!tr)
                { return false; }
            view.dispatch(tr);
            return true;
        } });
    /// Function that implements the extension's backspace behavior.
    /// Exported mostly for testing purposes.
    function handleBackspace(state) {
        var conf = config(state, state.selection.primary.head);
        var tokens = conf.brackets || defaults$1.brackets;
        var dont = null, changes = state.changeByRange(function (range) {
            if (range.empty) {
                var before = prevChar(state.doc, range.head);
                for (var i = 0, list = tokens; i < list.length; i += 1) {
                    var token = list[i];

                    if (token == before && nextChar(state.doc, range.head) == closing(codePointAt(token, 0)))
                        { return { changes: { from: range.head - token.length, to: range.head + token.length },
                            range: EditorSelection.cursor(range.head - token.length) }; }
                }
            }
            return { range: dont = range };
        });
        return dont ? null : state.update(changes, { scrollIntoView: true });
    }
    /// Implements the extension's behavior on text insertion. Again,
    /// exported mostly for testing.
    function handleInsertion(state, ch) {
        var conf = config(state, state.selection.primary.head);
        var tokens = conf.brackets || defaults$1.brackets;
        for (var i = 0, list = tokens; i < list.length; i += 1) {
            var tok = list[i];

            var closed = closing(codePointAt(tok, 0));
            if (ch == tok)
                { return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1)
                    : handleOpen(state, tok, closed, conf.before || defaults$1.before); }
            if (ch == closed)
                { return handleClose(state, tok, closed); }
        }
        return null;
    }
    function nextChar(doc, pos) {
        var next = doc.sliceString(pos, pos + 2);
        return next.slice(0, codePointSize(codePointAt(next, 0)));
    }
    function prevChar(doc, pos) {
        var prev = doc.sliceString(pos - 2, pos);
        return codePointSize(codePointAt(prev, 0)) == prev.length ? prev : prev.slice(1);
    }
    function handleOpen(state, open, close, closeBefore) {
        var dont = null, changes = state.changeByRange(function (range) {
            if (!range.empty)
                { return { changes: [{ insert: open, from: range.from }, { insert: close, from: range.to }],
                    range: EditorSelection.range(range.anchor + open.length, range.head + open.length) }; }
            var next = nextChar(state.doc, range.head);
            if (!next || /\s/.test(next) || closeBefore.indexOf(next) > -1)
                { return { changes: { insert: open + close, from: range.head },
                    range: EditorSelection.cursor(range.head + open.length) }; }
            return { range: dont = range };
        });
        return dont ? null : state.update(changes, { scrollIntoView: true });
    }
    function handleClose(state, _open, close) {
        var dont = null, moved = state.selection.ranges.map(function (range) {
            if (range.empty && nextChar(state.doc, range.head) == close)
                { return EditorSelection.cursor(range.head + close.length); }
            return dont = range;
        });
        return dont ? null : state.update({ selection: EditorSelection.create(moved, state.selection.primaryIndex),
            scrollIntoView: true });
    }
    // Handles cases where the open and close token are the same, and
    // possibly triple quotes (as in `"""abc"""`-style quoting).
    function handleSame(state, token, allowTriple) {
        var dont = null, changes = state.changeByRange(function (range) {
            if (!range.empty)
                { return { changes: [{ insert: token, from: range.from }, { insert: token, from: range.to }],
                    range: EditorSelection.range(range.anchor + token.length, range.head + token.length) }; }
            var pos = range.head, next = nextChar(state.doc, pos);
            if (next == token) {
                if (nodeStart(state, pos)) {
                    return { changes: { insert: token + token, from: pos },
                        range: EditorSelection.cursor(pos + token.length) };
                }
                else {
                    var isTriple = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token;
                    return { range: EditorSelection.cursor(pos + token.length * (isTriple ? 3 : 1)) };
                }
            }
            else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token &&
                nodeStart(state, pos - 2 * token.length)) {
                return { changes: { insert: token + token + token + token, from: pos },
                    range: EditorSelection.cursor(pos + token.length) };
            }
            else if (state.charCategorizer(pos)(next) != CharCategory.Word) {
                var prev = state.sliceDoc(pos - 1, pos);
                if (prev != token && state.charCategorizer(pos)(prev) != CharCategory.Word)
                    { return { changes: { insert: token + token, from: pos },
                        range: EditorSelection.cursor(pos + token.length) }; }
            }
            return { range: dont = range };
        });
        return dont ? null : state.update(changes, { scrollIntoView: true });
    }
    function nodeStart(state, pos) {
        var tree = state.tree.resolve(pos + 1);
        return tree.parent && tree.start == pos;
    }

    var _m11 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        closeBrackets: closeBrackets,
        handleBackspace: handleBackspace,
        handleInsertion: handleInsertion
    });

    var panelConfig = Facet.define({
        combine: function combine(configs) {
            var topContainer, bottomContainer;
            for (var i = 0, list = configs; i < list.length; i += 1) {
                var c = list[i];

                topContainer = topContainer || c.topContainer;
                bottomContainer = bottomContainer || c.bottomContainer;
            }
            return { topContainer: topContainer, bottomContainer: bottomContainer };
        }
    });
    /// Enables the panel-managing extension.
    function panels(config) {
        var ext = [panelPlugin, baseTheme$4];
        if (config)
            { ext.push(panelConfig.of(config)); }
        return ext;
    }
    /// Opening a panel is done by providing an object describing the
    /// panel through this facet.
    var showPanel = Facet.define();
    /// Get the active panel created by the given constructor, if any.
    /// This can be useful when you need access to your panels' DOM
    /// structure.
    function getPanel(view, panel) {
        var plugin = view.plugin(panelPlugin);
        var index = view.state.facet(showPanel).indexOf(panel);
        return plugin && index > -1 ? plugin.panels[index] : null;
    }
    var panelPlugin = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.specs = view.state.facet(showPanel);
            this.panels = this.specs.map(function (spec) { return spec(view); });
            var conf = view.state.facet(panelConfig);
            this.top = new PanelGroup(view, true, conf.topContainer);
            this.bottom = new PanelGroup(view, false, conf.bottomContainer);
            this.top.sync(this.panels.filter(function (p) { return p.top; }));
            this.bottom.sync(this.panels.filter(function (p) { return !p.top; }));
            for (var i = 0, list = this.panels; i < list.length; i += 1) {
                var p = list[i];

            p.dom.className += " " + panelClass(p);
                if (p.mount)
                    { p.mount(); }
            }
        }
        anonymous.prototype.update = function update (update$1) {
            var conf = update$1.state.facet(panelConfig);
            if (this.top.container != conf.topContainer) {
                this.top.sync([]);
                this.top = new PanelGroup(update$1.view, true, conf.topContainer);
            }
            if (this.bottom.container != conf.bottomContainer) {
                this.bottom.sync([]);
                this.bottom = new PanelGroup(update$1.view, false, conf.bottomContainer);
            }
            this.top.syncClasses();
            this.bottom.syncClasses();
            var specs = update$1.state.facet(showPanel);
            if (specs != this.specs) {
                var panels = [], top = [], bottom = [], mount = [];
                for (var i = 0, list = specs; i < list.length; i += 1) {
                    var spec = list[i];

                    var known = this.specs.indexOf(spec), panel = (void 0);
                    if (known < 0) {
                        panel = spec(update$1.view);
                        mount.push(panel);
                    }
                    else {
                        panel = this.panels[known];
                        if (panel.update)
                            { panel.update(update$1); }
                    }
                    panels.push(panel);
                    (panel.top ? top : bottom).push(panel);
                }
                this.specs = specs;
                this.panels = panels;
                this.top.sync(top);
                this.bottom.sync(bottom);
                for (var i$1 = 0, list$1 = mount; i$1 < list$1.length; i$1 += 1) {
                    var p = list$1[i$1];

                    p.dom.className += " " + panelClass(p);
                    if (p.mount)
                        { p.mount(); }
                }
            }
            else {
                for (var i$2 = 0, list$2 = this.panels; i$2 < list$2.length; i$2 += 1)
                    {
                    var p$1 = list$2[i$2];

                    if (p$1.update)
                        { p$1.update(update$1);
                } }
            }
        };
        anonymous.prototype.destroy = function destroy () {
            this.top.sync([]);
            this.bottom.sync([]);
        };

        return anonymous;
    }())).provide(PluginField.scrollMargins, function (value) { return ({ top: value.top.scrollMargin(), bottom: value.bottom.scrollMargin() }); });
    function panelClass(panel) {
        return themeClass(panel.style ? ("panel." + (panel.style)) : "panel");
    }
    var PanelGroup = function PanelGroup(view, top, container) {
        this.view = view;
        this.top = top;
        this.container = container;
        this.dom = undefined;
        this.classes = "";
        this.panels = [];
        this.syncClasses();
    };
    PanelGroup.prototype.sync = function sync (panels) {
        this.panels = panels;
        this.syncDOM();
    };
    PanelGroup.prototype.syncDOM = function syncDOM () {
        if (this.panels.length == 0) {
            if (this.dom) {
                this.dom.remove();
                this.dom = undefined;
            }
            return;
        }
        if (!this.dom) {
            this.dom = document.createElement("div");
            this.dom.className = themeClass(this.top ? "panels.top" : "panels.bottom");
            this.dom.style[this.top ? "top" : "bottom"] = "0";
            var parent = this.container || this.view.dom;
            parent.insertBefore(this.dom, this.top ? parent.firstChild : null);
        }
        var curDOM = this.dom.firstChild;
        for (var i = 0, list = this.panels; i < list.length; i += 1) {
            var panel = list[i];

                if (panel.dom.parentNode == this.dom) {
                while (curDOM != panel.dom)
                    { curDOM = rm$1(curDOM); }
                curDOM = curDOM.nextSibling;
            }
            else {
                this.dom.insertBefore(panel.dom, curDOM);
            }
        }
        while (curDOM)
            { curDOM = rm$1(curDOM); }
    };
    PanelGroup.prototype.scrollMargin = function scrollMargin () {
        return !this.dom || this.container ? 0
            : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - this.view.scrollDOM.getBoundingClientRect().top
                : this.view.scrollDOM.getBoundingClientRect().bottom - this.dom.getBoundingClientRect().top);
    };
    PanelGroup.prototype.syncClasses = function syncClasses () {
        if (!this.container || this.classes == this.view.themeClasses)
            { return; }
        for (var i = 0, list = this.classes.split(" "); i < list.length; i += 1)
            {
                var cls = list[i];

                if (cls)
                { this.container.classList.remove(cls);
            } }
        for (var i$1 = 0, list$1 = (this.classes = this.view.themeClasses).split(" "); i$1 < list$1.length; i$1 += 1)
            {
                var cls$1 = list$1[i$1];

                if (cls$1)
                { this.container.classList.add(cls$1);
            } }
    };
    function rm$1(node) {
        var next = node.nextSibling;
        node.remove();
        return next;
    }
    var baseTheme$4 = EditorView.baseTheme({
        panels: {
            boxSizing: "border-box",
            position: "sticky",
            left: 0,
            right: 0
        },
        "panels@light": {
            backgroundColor: "#f5f5f5",
            color: "black"
        },
        "panels.top@light": {
            borderBottom: "1px solid silver"
        },
        "panels.bottom@light": {
            borderTop: "1px solid silver"
        },
        "panels@dark": {
            backgroundColor: "#333338",
            color: "white"
        }
    });

    var _m12 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getPanel: getPanel,
        panels: panels,
        showPanel: showPanel
    });

    var tooltipPlugin = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
        var this$1 = this;

            this.view = view;
            view.scrollDOM.addEventListener("scroll", this.onscroll = this.onscroll.bind(this));
            this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this };
            this.tooltips = view.state.facet(showTooltip);
            this.tooltipViews = this.tooltips.map(function (tp) { return this$1.createTooltip(tp); });
        }
        anonymous.prototype.update = function update (update$1) {
            var tooltips = update$1.state.facet(showTooltip);
            if (tooltips == this.tooltips) {
                for (var i$2 = 0, list = this.tooltipViews; i$2 < list.length; i$2 += 1)
                    {
                    var t = list[i$2];

                    if (t.update)
                        { t.update(update$1);
                } }
            }
            else {
                var views = [];
                for (var i = 0; i < tooltips.length; i++) {
                    var tip = tooltips[i], known = -1;
                    for (var i$1 = 0; i$1 < this.tooltips.length; i$1++)
                        { if (this.tooltips[i$1].create == tip.create)
                            { known = i$1; } }
                    if (known < 0) {
                        views[i] = this.createTooltip(tip);
                    }
                    else {
                        var tooltipView = views[i] = this.tooltipViews[known];
                        if (tooltipView.update)
                            { tooltipView.update(update$1); }
                    }
                }
                for (var i$3 = 0, list$1 = this.tooltipViews; i$3 < list$1.length; i$3 += 1)
                    {
                    var t$1 = list$1[i$3];

                    if (views.indexOf(t$1) < 0)
                        { t$1.dom.remove();
                } }
                this.tooltips = tooltips;
                this.tooltipViews = views;
                if (this.tooltips.length)
                    { this.view.requestMeasure(this.measureReq); }
            }
            if (update$1.docChanged && this.tooltips.length)
                { this.view.requestMeasure(this.measureReq); }
        };
        anonymous.prototype.createTooltip = function createTooltip (tooltip) {
            var tooltipView = tooltip.create(this.view);
            tooltipView.dom.className = themeClass("tooltip" + (tooltip.style ? "." + tooltip.style : ""));
            this.view.dom.appendChild(tooltipView.dom);
            if (tooltipView.mount)
                { tooltipView.mount(this.view); }
            return tooltipView;
        };
        anonymous.prototype.destroy = function destroy () {
            this.view.scrollDOM.removeEventListener("scroll", this.onscroll);
            for (var i = 0, list = this.tooltipViews; i < list.length; i += 1)
                {
                var ref = list[i];
                var dom = ref.dom;

                dom.remove();
            }
        };
        anonymous.prototype.readMeasure = function readMeasure () {
            var this$1 = this;

            return {
                editor: this.view.dom.getBoundingClientRect(),
                pos: this.tooltips.map(function (t) { return this$1.view.coordsAtPos(t.pos); }),
                size: this.tooltipViews.map(function (ref) {
                    var dom = ref.dom;

                    return dom.getBoundingClientRect();
            }),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            };
        };
        anonymous.prototype.writeMeasure = function writeMeasure (measured) {
            var editor = measured.editor;
            for (var i = 0; i < this.tooltipViews.length; i++) {
                var tooltip = this.tooltips[i];
                var ref = this.tooltipViews[i];
                var dom = ref.dom;
                var pos = measured.pos[i], size = measured.size[i];
                // Hide tooltips that are outside of the editor.
                if (!pos || pos.bottom <= editor.top || pos.top >= editor.bottom || pos.right <= editor.left || pos.left >= editor.right) {
                    dom.style.top = "-10000px";
                    continue;
                }
                var width = size.right - size.left, height = size.bottom - size.top;
                var left = this.view.textDirection == Direction.LTR ? Math.min(pos.left, measured.innerWidth - width)
                    : Math.max(0, pos.left - width);
                var above = !!tooltip.above;
                if (!tooltip.strictSide &&
                    (above ? pos.top - (size.bottom - size.top) < 0 : pos.bottom + (size.bottom - size.top) > measured.innerHeight))
                    { above = !above; }
                dom.style.top = ((above ? pos.top - height : pos.bottom) - editor.top) + "px";
                dom.style.left = (left - editor.left) + "px";
            }
        };
        anonymous.prototype.onscroll = function onscroll () {
            if (this.tooltips.length)
                { this.view.requestMeasure(this.measureReq); }
        };

        return anonymous;
    }()));
    var baseTheme$5 = EditorView.baseTheme({
        tooltip: {
            position: "absolute",
            border: "1px solid silver",
            backgroundColor: "#f5f5f5",
            zIndex: 100
        }
    });
    /// Supporting extension for displaying tooltips. Allows
    /// [`showTooltip`](#tooltip.showTooltip) to be used to define
    /// tooltips.
    function tooltips() {
        return [tooltipPlugin, baseTheme$5];
    }
    /// Behavior by which an extension can provide a tooltip to be shown.
    var showTooltip = Facet.define();
    var HoverTime = 750, HoverMaxDist = 10;
    var HoverPlugin = function HoverPlugin(view, source, field, setHover) {
        this.view = view;
        this.source = source;
        this.field = field;
        this.setHover = setHover;
        this.lastMouseMove = null;
        this.hoverTimeout = -1;
        this.mouseInside = false;
        this.checkHover = this.checkHover.bind(this);
        view.dom.addEventListener("mouseenter", this.mouseenter = this.mouseenter.bind(this));
        view.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
        view.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    };

    var prototypeAccessors$a = { active: { configurable: true } };
    prototypeAccessors$a.active.get = function () {
        return this.view.state.field(this.field);
    };
    HoverPlugin.prototype.checkHover = function checkHover () {
            var this$1 = this;

        this.hoverTimeout = -1;
        if (!this.mouseInside || this.active)
            { return; }
        var now = Date.now(), lastMove = this.lastMouseMove;
        if (now - lastMove.timeStamp < HoverTime) {
            this.hoverTimeout = setTimeout(this.checkHover, HoverTime - (now - lastMove.timeStamp));
            return;
        }
        var pos = this.view.contentDOM.contains(lastMove.target)
            ? this.view.posAtCoords({ x: lastMove.clientX, y: lastMove.clientY }) : -1;
        var open = pos < 0 ? null : this.source(this.view, function (from, to) {
            return from <= pos && to >= pos && (from == to || isOverRange(this$1.view, from, to, lastMove.clientX, lastMove.clientY));
        });
        if (open)
            { this.view.dispatch({ effects: this.setHover.of(open) }); }
    };
    HoverPlugin.prototype.mousemove = function mousemove (event) {
        var _a;
        this.lastMouseMove = event;
        if (this.hoverTimeout < 0)
            { this.hoverTimeout = setTimeout(this.checkHover, HoverTime); }
        var tooltip = this.active;
        if (tooltip && !isInTooltip(event.target)) {
            var pos = tooltip.pos;
                var end = (_a = tooltip.end) !== null && _a !== void 0 ? _a : pos;
            if ((pos == end ? this.view.posAtCoords({ x: event.clientX, y: event.clientY }) != pos
                : !isOverRange(this.view, pos, end, event.clientX, event.clientY, HoverMaxDist)))
                { this.view.dispatch({ effects: this.setHover.of(null) }); }
        }
    };
    HoverPlugin.prototype.mouseenter = function mouseenter () {
        this.mouseInside = true;
    };
    HoverPlugin.prototype.mouseleave = function mouseleave () {
        this.mouseInside = false;
        if (this.active)
            { this.view.dispatch({ effects: this.setHover.of(null) }); }
    };
    HoverPlugin.prototype.destroy = function destroy () {
        this.view.dom.removeEventListener("mouseenter", this.mouseenter.bind(this));
        this.view.dom.removeEventListener("mouseleave", this.mouseleave.bind(this));
        this.view.dom.removeEventListener("mousemove", this.mousemove.bind(this));
    };

    Object.defineProperties( HoverPlugin.prototype, prototypeAccessors$a );
    function isInTooltip(elt) {
        for (var cur = elt; cur; cur = cur.parentNode)
            { if (cur.nodeType == 1 && cur.classList.contains("cm-tooltip"))
                { return true; } }
        return false;
    }
    function isOverRange(view, from, to, x, y, margin) {
        if ( margin === void 0 ) margin = 0;

        var range = document.createRange();
        var fromDOM = view.domAtPos(from), toDOM = view.domAtPos(to);
        range.setEnd(toDOM.node, toDOM.offset);
        range.setStart(fromDOM.node, fromDOM.offset);
        var rects = range.getClientRects();
        for (var i = 0; i < rects.length; i++) {
            var rect = rects[i];
            var dist = Math.max(rect.top - y, y - rect.bottom, rect.left - x, x - rect.right);
            if (dist <= margin)
                { return true; }
        }
        return false;
    }
    /// Enable a hover tooltip, which shows up when the pointer hovers
    /// over ranges of text. The callback should, for each hoverable
    /// range, call its `check` argument to see if that range is being
    /// hovered over, and return a tooltip description when it is.
    function hoverTooltip(source, options) {
        if ( options === void 0 ) options = {};

        var setHover = StateEffect.define();
        var hoverState = StateField.define({
            create: function create() { return null; },
            update: function update(value, tr) {
                if (value && (options.hideOnChange && (tr.docChanged || tr.selection)))
                    { return null; }
                for (var i = 0, list = tr.effects; i < list.length; i += 1)
                    {
                    var effect = list[i];

                    if (effect.is(setHover))
                        { return effect.value;
                } }
                if (value && tr.docChanged) {
                    var newPos = tr.changes.mapPos(value.pos, -1, MapMode.TrackDel);
                    if (newPos < 0)
                        { return null; }
                    var copy = Object.assign(Object.create(null), value);
                    copy.pos = newPos;
                    if (value.end != null)
                        { copy.end = tr.changes.mapPos(value.end); }
                    return copy;
                }
                return value;
            },
            provide: [showTooltip.nFrom(function (v) { return v ? [v] : []; })]
        });
        return [
            hoverState,
            ViewPlugin.define(function (view) { return new HoverPlugin(view, source, hoverState, setHover); }),
            tooltips()
        ];
    }

    var _m13 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        hoverTooltip: hoverTooltip,
        showTooltip: showTooltip,
        tooltips: tooltips
    });

    var basicNormalize = typeof String.prototype.normalize == "function" ? function (x) { return x.normalize("NFKD"); } : function (x) { return x; };
    /// A search cursor provides an iterator over text matches in a
    /// document.
    var SearchCursor = function SearchCursor(text, query, from, to, normalize) {
        if ( from === void 0 ) from = 0;
        if ( to === void 0 ) to = text.length;

        /// The current match (only holds a meaningful value after
        /// [`next`](#search.SearchCursor.next) has been called and when
        /// `done` is false).
        this.value = { from: 0, to: 0 };
        /// Whether the end of the iterated region has been reached.
        this.done = false;
        this.matches = [];
        this.buffer = "";
        this.bufferPos = 0;
        this.iter = text.iterRange(from, to);
        this.bufferStart = from;
        this.normalize = normalize ? function (x) { return normalize(basicNormalize(x)); } : basicNormalize;
        this.query = this.normalize(query);
    };
    SearchCursor.prototype.peek = function peek () {
        if (this.bufferPos == this.buffer.length) {
            this.bufferStart += this.buffer.length;
            this.iter.next();
            if (this.iter.done)
                { return -1; }
            this.bufferPos = 0;
            this.buffer = this.iter.value;
        }
        return this.buffer.charCodeAt(this.bufferPos);
    };
    /// Look for the next match. Updates the iterator's
    /// [`value`](#search.SearchCursor.value) and
    /// [`done`](#search.SearchCursor.done) properties. Should be called
    /// at least once before using the cursor.
    SearchCursor.prototype.next = function next () {
        for (;;) {
            var next = this.peek();
            if (next < 0) {
                this.done = true;
                return this;
            }
            var str = String.fromCharCode(next), start = this.bufferStart + this.bufferPos;
            this.bufferPos++;
            for (;;) {
                var peek = this.peek();
                if (peek < 0xDC00 || peek >= 0xE000)
                    { break; }
                this.bufferPos++;
                str += String.fromCharCode(peek);
            }
            var norm = this.normalize(str);
            for (var i = 0, pos = start;; i++) {
                var code = norm.charCodeAt(i);
                var match = this.match(code, pos);
                if (match) {
                    this.value = match;
                    return this;
                }
                if (i == norm.length - 1)
                    { break; }
                if (pos == start && i < str.length && str.charCodeAt(i) == code)
                    { pos++; }
            }
        }
    };
    SearchCursor.prototype.match = function match (code, pos) {
        var match = null;
        for (var i = 0; i < this.matches.length; i += 2) {
            var index = this.matches[i], keep = false;
            if (this.query.charCodeAt(index) == code) {
                if (index == this.query.length - 1) {
                    match = { from: this.matches[i + 1], to: pos + 1 };
                }
                else {
                    this.matches[i]++;
                    keep = true;
                }
            }
            if (!keep) {
                this.matches.splice(i, 2);
                i -= 2;
            }
        }
        if (this.query.charCodeAt(0) == code) {
            if (this.query.length == 1)
                { match = { from: pos, to: pos + 1 }; }
            else
                { this.matches.push(1, pos); }
        }
        return match;
    };

    var Query = function Query(search, replace, caseInsensitive) {
        this.search = search;
        this.replace = replace;
        this.caseInsensitive = caseInsensitive;
    };

    var prototypeAccessors$b = { valid: { configurable: true } };
    Query.prototype.eq = function eq (other) {
        return this.search == other.search && this.replace == other.replace && this.caseInsensitive == other.caseInsensitive;
    };
    Query.prototype.cursor = function cursor (doc, from, to) {
            if ( from === void 0 ) from = 0;
            if ( to === void 0 ) to = doc.length;

        return new SearchCursor(doc, this.search, from, to, this.caseInsensitive ? function (x) { return x.toLowerCase(); } : undefined);
    };
    prototypeAccessors$b.valid.get = function () { return !!this.search; };

    Object.defineProperties( Query.prototype, prototypeAccessors$b );
    var setQuery = StateEffect.define();
    var togglePanel = StateEffect.define();
    var searchState = StateField.define({
        create: function create() {
            return new SearchState(new Query("", "", false), []);
        },
        update: function update(value, tr) {
            for (var i = 0, list = tr.effects; i < list.length; i += 1) {
                var effect = list[i];

                if (effect.is(setQuery))
                    { value = new SearchState(effect.value, value.panel); }
                else if (effect.is(togglePanel))
                    { value = new SearchState(value.query, effect.value ? [createSearchPanel] : []); }
            }
            return value;
        },
        provide: [showPanel.nFrom(function (s) { return s.panel; })]
    });
    var SearchState = function SearchState(query, panel) {
        this.query = query;
        this.panel = panel;
    };
    var matchMark = Decoration.mark({ class: themeClass("searchMatch") }), selectedMatchMark = Decoration.mark({ class: themeClass("searchMatch.selected") });
    var searchHighlighter = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.view = view;
            this.decorations = this.highlight(view.state.field(searchState));
        }
        anonymous.prototype.update = function update (update$1) {
            var state = update$1.state.field(searchState);
            if (state != update$1.prevState.field(searchState) || update$1.docChanged || update$1.selectionSet)
                { this.decorations = this.highlight(state); }
        };
        anonymous.prototype.highlight = function highlight (ref) {
            var query = ref.query;
            var panel = ref.panel;

            if (!panel.length || !query.valid)
                { return Decoration.none; }
            var state = this.view.state, viewport = this.view.viewport;
            var cursor = query.cursor(state.doc, Math.max(0, viewport.from - query.search.length), Math.min(viewport.to + query.search.length, state.doc.length));
            var builder = new RangeSetBuilder();
            var loop = function () {
                var ref$1 = cursor.value;
                var from = ref$1.from;
                var to = ref$1.to;
                var selected = state.selection.ranges.some(function (r) { return r.from == from && r.to == to; });
                builder.add(from, to, selected ? selectedMatchMark : matchMark);
            };

            while (!cursor.next().done) loop();
            return builder.finish();
        };

        return anonymous;
    }())).decorations();
    function searchCommand(f) {
        return function (view) {
            var state = view.state.field(searchState, false);
            return state && state.query.valid ? f(view, state) : openSearchPanel(view);
        };
    }
    function findNextMatch(doc, from, query) {
        var cursor = query.cursor(doc, from).next();
        if (cursor.done) {
            cursor = query.cursor(doc, 0, from + query.search.length - 1).next();
            if (cursor.done)
                { return null; }
        }
        return cursor.value;
    }
    /// Open the search panel if it isn't already open, and move the
    /// selection to the first match after the current primary selection.
    /// Will wrap around to the start of the document when it reaches the
    /// end.
    var findNext = searchCommand(function (view, state) {
        var ref = view.state.selection.primary;
        var from = ref.from;
        var to = ref.to;
        var next = findNextMatch(view.state.doc, view.state.selection.primary.from + 1, state.query);
        if (!next || next.from == from && next.to == to)
            { return false; }
        view.dispatch({ selection: { anchor: next.from, head: next.to }, scrollIntoView: true });
        maybeAnnounceMatch(view);
        return true;
    });
    var FindPrevChunkSize = 10000;
    // Searching in reverse is, rather than implementing inverted search
    // cursor, done by scanning chunk after chunk forward.
    function findPrevInRange(query, doc, from, to) {
        for (var pos = to;;) {
            var start = Math.max(from, pos - FindPrevChunkSize - query.search.length);
            var cursor = query.cursor(doc, start, pos), range = null;
            while (!cursor.next().done)
                { range = cursor.value; }
            if (range)
                { return range; }
            if (start == from)
                { return null; }
            pos -= FindPrevChunkSize;
        }
    }
    /// Move the selection to the previous instance of the search query,
    /// before the current primary selection. Will wrap past the start
    /// of the document to start searching at the end again.
    var findPrevious = searchCommand(function (view, ref) {
        var query = ref.query;

        var state = view.state;
        var range = findPrevInRange(query, state.doc, 0, state.selection.primary.to - 1) ||
            findPrevInRange(query, state.doc, state.selection.primary.from + 1, state.doc.length);
        if (!range)
            { return false; }
        view.dispatch({ selection: { anchor: range.from, head: range.to }, scrollIntoView: true });
        maybeAnnounceMatch(view);
        return true;
    });
    /// Select all instances of the search query.
    var selectMatches = searchCommand(function (view, ref) {
        var query = ref.query;

        var cursor = query.cursor(view.state.doc), ranges = [];
        while (!cursor.next().done)
            { ranges.push(EditorSelection.range(cursor.value.from, cursor.value.to)); }
        if (!ranges.length)
            { return false; }
        view.dispatch({ selection: EditorSelection.create(ranges) });
        return true;
    });
    /// Select all instances of the currently selected text.
    var selectSelectionMatches = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var sel = state.selection;
        if (sel.ranges.length > 1 || sel.primary.empty)
            { return false; }
        var ref$1 = sel.primary;
        var from = ref$1.from;
        var to = ref$1.to;
        var ranges = [], primary = 0;
        for (var cur = new SearchCursor(state.doc, state.sliceDoc(from, to)); !cur.next().done;) {
            if (ranges.length > 1000)
                { return false; }
            if (cur.value.from == from)
                { primary = ranges.length; }
            ranges.push(EditorSelection.range(cur.value.from, cur.value.to));
        }
        dispatch(state.update({ selection: new EditorSelection(ranges, primary) }));
        return true;
    };
    /// Replace the current match of the search query.
    var replaceNext = searchCommand(function (view, ref) {
        var query = ref.query;

        var state = view.state;
        var next = findNextMatch(state.doc, state.selection.primary.from, query);
        if (!next)
            { return false; }
        var ref$1 = state.selection.primary;
        var from = ref$1.from;
        var to = ref$1.to;
        var changes = [], selection;
        if (next.from == from && next.to == to) {
            changes.push({ from: next.from, to: next.to, insert: query.replace });
            next = findNextMatch(state.doc, next.to, query);
        }
        if (next) {
            var off = changes.length == 0 || changes[0].from >= next.to ? 0 : next.to - next.from - query.replace.length;
            selection = { anchor: next.from - off, head: next.to - off };
        }
        view.dispatch({ changes: changes, selection: selection, scrollIntoView: !!selection });
        if (next)
            { maybeAnnounceMatch(view); }
        return true;
    });
    /// Replace all instances of the search query with the given
    /// replacement.
    var replaceAll = searchCommand(function (view, ref) {
        var query = ref.query;

        var cursor = query.cursor(view.state.doc), changes = [];
        while (!cursor.next().done) {
            var ref$1 = cursor.value;
            var from = ref$1.from;
            var to = ref$1.to;
            changes.push({ from: from, to: to, insert: query.replace });
        }
        if (!changes.length)
            { return false; }
        view.dispatch({ changes: changes });
        return true;
    });
    function createSearchPanel(view) {
        var ref = view.state.field(searchState);
        var query = ref.query;
        return {
            dom: buildPanel({
                view: view,
                query: query,
                updateQuery: function updateQuery(q) {
                    if (!query.eq(q)) {
                        query = q;
                        view.dispatch({ effects: setQuery.of(query) });
                    }
                }
            }),
            mount: function mount() {
                this.dom.querySelector("[name=search]").select();
            },
            pos: 80,
            style: "search"
        };
    }
    /// Make sure the search panel is open and focused.
    var openSearchPanel = function (view) {
        var state = view.state.field(searchState, false);
        if (state && state.panel.length)
            { return false; }
        view.dispatch({ effects: togglePanel.of(true),
            reconfigure: state ? undefined : { append: searchExtensions } });
        return true;
    };
    /// Default search-related key bindings.
    ///
    ///  * Mod-f: [`openSearchPanel`](#search.openSearchPanel)
    ///  * F3, Mod-g: [`findNext`](#search.findNext)
    ///  * Shift-F3, Shift-Mod-g: [`findPrevious`](#search.findPrevious)
    var searchKeymap = [
        { key: "Mod-f", run: openSearchPanel, scope: "editor search-panel" },
        { key: "F3", run: findNext, shift: findPrevious, scope: "editor search-panel" },
        { key: "Mod-g", run: findNext, shift: findPrevious, scope: "editor search-panel" },
        { key: "Mod-Shift-l", run: selectSelectionMatches }
    ];
    /// Close the search panel.
    var closeSearchPanel = function (view) {
        var state = view.state.field(searchState, false);
        if (!state || !state.panel.length)
            { return false; }
        var panel = getPanel(view, createSearchPanel);
        if (panel && panel.dom.contains(view.root.activeElement))
            { view.focus(); }
        view.dispatch({ effects: togglePanel.of(false) });
        return true;
    };
    function elt(name, props, children) {
        if ( props === void 0 ) props = null;
        if ( children === void 0 ) children = [];

        var e = document.createElement(name);
        if (props)
            { for (var prop in props) {
                var value = props[prop];
                if (typeof value == "string")
                    { e.setAttribute(prop, value); }
                else
                    { e[prop] = value; }
            } }
        for (var i = 0, list = children; i < list.length; i += 1)
            {
            var child = list[i];

            e.appendChild(typeof child == "string" ? document.createTextNode(child) : child);
        }
        return e;
    }
    // FIXME sync when search state changes independently
    function buildPanel(conf) {
        function p(phrase) { return conf.view.state.phrase(phrase); }
        var searchField = elt("input", {
            value: conf.query.search,
            placeholder: p("Find"),
            "aria-label": p("Find"),
            class: themeClass("textfield"),
            name: "search",
            onchange: update,
            onkeyup: update
        });
        var replaceField = elt("input", {
            value: conf.query.replace,
            placeholder: p("Replace"),
            "aria-label": p("Replace"),
            class: themeClass("textfield"),
            name: "replace",
            onchange: update,
            onkeyup: update
        });
        var caseField = elt("input", {
            type: "checkbox",
            name: "case",
            checked: !conf.query.caseInsensitive,
            onchange: update
        });
        function update() {
            conf.updateQuery(new Query(searchField.value, replaceField.value, !caseField.checked));
        }
        function keydown(e) {
            if (runScopeHandlers(conf.view, e, "search-panel")) {
                e.preventDefault();
            }
            else if (e.keyCode == 27) {
                e.preventDefault();
                closeSearchPanel(conf.view);
            }
            else if (e.keyCode == 13 && e.target == searchField) {
                e.preventDefault();
                (e.shiftKey ? findPrevious : findNext)(conf.view);
            }
            else if (e.keyCode == 13 && e.target == replaceField) {
                e.preventDefault();
                replaceNext(conf.view);
            }
        }
        function button(name, onclick, content) {
            return elt("button", { class: themeClass("button"), name: name, onclick: onclick }, content);
        }
        var panel = elt("div", { onkeydown: keydown }, [
            searchField,
            button("next", function () { return findNext(conf.view); }, [p("next")]),
            button("prev", function () { return findPrevious(conf.view); }, [p("previous")]),
            button("select", function () { return selectMatches(conf.view); }, [p("all")]),
            elt("label", null, [caseField, "match case"]),
            elt("br"),
            replaceField,
            button("replace", function () { return replaceNext(conf.view); }, [p("replace")]),
            button("replaceAll", function () { return replaceAll(conf.view); }, [p("replace all")]),
            elt("button", { name: "close", onclick: function () { return closeSearchPanel(conf.view); }, "aria-label": p("close") }, ["×"]),
            elt("div", { style: "position: absolute; top: -10000px", "aria-live": "polite" })
        ]);
        return panel;
    }
    var AnnounceMargin = 30;
    var Break = /[\s\.,:;?!]/;
    // FIXME this is a kludge
    function maybeAnnounceMatch(view) {
        var ref = view.state.selection.primary;
        var from = ref.from;
        var to = ref.to;
        var lineStart = view.state.doc.lineAt(from).from, lineEnd = view.state.doc.lineAt(to).to;
        var start = Math.max(lineStart, from - AnnounceMargin), end = Math.min(lineEnd, to + AnnounceMargin);
        var text = view.state.sliceDoc(start, end);
        if (start != lineStart) {
            for (var i = 0; i < AnnounceMargin; i++)
                { if (!Break.test(text[i + 1]) && Break.test(text[i])) {
                    text = text.slice(i);
                    break;
                } }
        }
        if (end != lineEnd) {
            for (var i$1 = text.length - 1; i$1 > text.length - AnnounceMargin; i$1--)
                { if (!Break.test(text[i$1 - 1]) && Break.test(text[i$1])) {
                    text = text.slice(0, i$1);
                    break;
                } }
        }
        var panel = getPanel(view, createSearchPanel);
        if (!panel || !panel.dom.contains(view.root.activeElement))
            { return; }
        var live = panel.dom.querySelector("div[aria-live]");
        live.textContent = view.state.phrase("current match") + ". " + text;
    }
    var baseTheme$6 = EditorView.baseTheme({
        "panel.search": {
            padding: "2px 6px 4px",
            position: "relative",
            "& [name=close]": {
                position: "absolute",
                top: "0",
                right: "4px",
                backgroundColor: "inherit",
                border: "none",
                font: "inherit",
                padding: 0,
                margin: 0
            },
            "& input, & button": {
                margin: ".2em .5em .2em 0"
            },
            "& label": {
                fontSize: "80%"
            }
        },
        "searchMatch@light": { backgroundColor: "#ffa" },
        "searchMatch@dark": { backgroundColor: "#088" },
        "searchMatch.selected@light": { backgroundColor: "#fca" },
        "searchMatch.selected@dark": { backgroundColor: "#808" }
    });
    var searchExtensions = [
        searchState,
        searchHighlighter,
        panels(),
        baseTheme$6
    ];

    var _m14 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SearchCursor: SearchCursor,
        closeSearchPanel: closeSearchPanel,
        findNext: findNext,
        findPrevious: findPrevious,
        openSearchPanel: openSearchPanel,
        replaceAll: replaceAll,
        replaceNext: replaceNext,
        searchKeymap: searchKeymap,
        selectMatches: selectMatches,
        selectSelectionMatches: selectSelectionMatches
    });

    function createLineDialog(view) {
        var dom = document.createElement("form");
        dom.innerHTML = "<label>" + (view.state.phrase("Go to line:")) + " <input class=" + (themeClass("textfield")) + " name=line></label>\n<button class=" + (themeClass("button")) + " type=submit>" + (view.state.phrase("go")) + "</button>";
        var input = dom.querySelector("input");
        function go() {
            var n = parseInt(input.value, 10);
            view.dispatch({
                reconfigure: { append: [baseTheme$7] },
                selection: !isNaN(n) && n > 0 && n <= view.state.doc.lines ? EditorSelection.cursor(view.state.doc.line(n).from) : undefined
            });
            view.focus();
        }
        dom.addEventListener("keydown", function (event) {
            if (event.keyCode == 27) { // Escape
                event.preventDefault();
                view.dispatch({ reconfigure: { append: [baseTheme$7] } });
                view.focus();
            }
            else if (event.keyCode == 13) { // Enter
                event.preventDefault();
                go();
            }
        });
        dom.addEventListener("submit", go);
        return { dom: dom, style: "gotoLine", pos: -10 };
    }
    /// Command that shows a dialog asking the user for a line number, and
    /// when a valid number is provided, moves the cursor to that line.
    ///
    /// The dialog can be styled with the `panel.gotoLine` theme
    /// selector.
    var gotoLine = function (view) {
        var panel = getPanel(view, createLineDialog);
        if (!panel) {
            view.dispatch({ reconfigure: { append: [panels(), showPanel.of(createLineDialog), baseTheme$7] } });
            panel = getPanel(view, createLineDialog);
        }
        if (panel)
            { panel.dom.querySelector("input").focus(); }
        return true;
    };
    var baseTheme$7 = EditorView.baseTheme({
        "panel.gotoLine": {
            padding: "2px 6px 4px",
            "& label": { fontSize: "80%" }
        }
    });
    /// Keymap that binds Alt-g to [`gotoLine`](#goto-line.gotoLine).
    var gotoLineKeymap = [
        { key: "Alt-g", run: gotoLine }
    ];

    var _m15 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        gotoLine: gotoLine,
        gotoLineKeymap: gotoLineKeymap
    });

    var SelectedDiagnostic = function SelectedDiagnostic(from, to, diagnostic) {
          this.from = from;
          this.to = to;
          this.diagnostic = diagnostic;
      };
    var LintState = function LintState(diagnostics, panel, selected) {
          this.diagnostics = diagnostics;
          this.panel = panel;
          this.selected = selected;
      };
    function findDiagnostic(diagnostics, diagnostic, after) {
        if ( diagnostic === void 0 ) diagnostic = null;
        if ( after === void 0 ) after = 0;

        var found = null;
        diagnostics.between(after, diagnostics.length, function (from, to, ref) {
            var spec = ref.spec;

            if (diagnostic && spec.diagnostic != diagnostic)
                { return; }
            found = new SelectedDiagnostic(from, to, spec.diagnostic);
            return false;
        });
        return found;
    }
    function maybeEnableLint(state) {
        return state.field(lintState, false) ? undefined : { append: [
                lintState,
                EditorView.decorations.compute([lintState], function (state) {
                    var ref = state.field(lintState);
                    var selected = ref.selected;
                    var panel = ref.panel;
                    return !selected || !panel || selected.from == selected.to ? Decoration.none : Decoration.set([
                        activeMark.range(selected.from, selected.to)
                    ]);
                }),
                panels(),
                hoverTooltip(lintTooltip),
                baseTheme$8
            ] };
    }
    /// State effect that is used to update the current set of
    /// diagnostics.
    function setDiagnostics(state, diagnostics) {
        return {
            effects: setDiagnosticsEffect.of(diagnostics),
            reconfigure: maybeEnableLint(state)
        };
    }
    var setDiagnosticsEffect = StateEffect.define();
    var togglePanel$1 = StateEffect.define();
    var movePanelSelection = StateEffect.define();
    var lintState = StateField.define({
        create: function create() {
            return new LintState(Decoration.none, null, null);
        },
        update: function update(value, tr) {
            if (tr.docChanged) {
                var mapped = value.diagnostics.map(tr.changes), selected = null;
                if (value.selected) {
                    var selPos = tr.changes.mapPos(value.selected.from, 1);
                    selected = findDiagnostic(mapped, value.selected.diagnostic, selPos) || findDiagnostic(mapped, null, selPos);
                }
                value = new LintState(mapped, value.panel, selected);
            }
            for (var i = 0, list = tr.effects; i < list.length; i += 1) {
                var effect = list[i];

              if (effect.is(setDiagnosticsEffect)) {
                    var ranges = Decoration.set(effect.value.map(function (d) {
                        return d.from < d.to
                            ? Decoration.mark({
                                attributes: { class: themeClass("lintRange." + d.severity) },
                                diagnostic: d
                            }).range(d.from, d.to)
                            : Decoration.widget({
                                widget: new DiagnosticWidget(d),
                                diagnostic: d
                            }).range(d.from);
                    }));
                    value = new LintState(ranges, value.panel, findDiagnostic(ranges));
                }
                else if (effect.is(togglePanel$1)) {
                    value = new LintState(value.diagnostics, effect.value ? LintPanel.open : null, value.selected);
                }
                else if (effect.is(movePanelSelection)) {
                    value = new LintState(value.diagnostics, value.panel, effect.value);
                }
            }
            return value;
        },
        provide: [showPanel.nFrom(function (s) { return s.panel ? [s.panel] : []; }),
            EditorView.decorations.from(function (s) { return s.diagnostics; })]
    });
    var activeMark = Decoration.mark({ class: themeClass("lintRange.active") });
    function lintTooltip(view, check) {
        var ref = view.state.field(lintState);
        var diagnostics = ref.diagnostics;
        var found = [], stackStart = 2e8, stackEnd = 0;
        diagnostics.between(0, view.state.doc.length, function (start, end, ref) {
            var spec = ref.spec;

            if (check(start, end)) {
                found.push(spec.diagnostic);
                stackStart = Math.min(start, stackStart);
                stackEnd = Math.max(end, stackEnd);
            }
        });
        if (!found.length)
            { return null; }
        return {
            pos: stackStart,
            end: stackEnd,
            style: "lint",
            create: function create() {
                var dom = document.createElement("ul");
                for (var i = 0, list = found; i < list.length; i += 1)
                    {
                  var d = list[i];

                  dom.appendChild(renderDiagnostic(view, d));
                }
                return { dom: dom };
            }
        };
    }
    /// Command to open and focus the lint panel.
    var openLintPanel = function (view) {
        var field = view.state.field(lintState, false);
        if (!field || !field.panel)
            { view.dispatch({ effects: togglePanel$1.of(true),
                reconfigure: maybeEnableLint(view.state) }); }
        var panel = getPanel(view, LintPanel.open);
        if (panel)
            { panel.dom.querySelector(".cm-panel-lint ul").focus(); }
        return true;
    };
    /// Command to close the lint panel, when open.
    var closeLintPanel = function (view) {
        var field = view.state.field(lintState, false);
        if (!field || !field.panel)
            { return false; }
        view.dispatch({ effects: togglePanel$1.of(false) });
        return true;
    };
    /// Move the selection to the next diagnostic.
    var nextDiagnostic = function (view) {
        var field = view.state.field(lintState, false);
        if (!field)
            { return false; }
        var sel = view.state.selection.primary, next = field.diagnostics.iter(sel.to + 1);
        if (!next.value) {
            next = field.diagnostics.iter(0);
            if (!next.value || next.from == sel.from && next.to == sel.to)
                { return false; }
        }
        view.dispatch({ selection: { anchor: next.from, head: next.to }, scrollIntoView: true });
        return true;
    };
    /// A set of default key bindings for the lint functionality.
    ///
    /// - Ctrl-Shift-m (Cmd-Shift-m on macOS): [`openLintPanel`](#lint.openLintPanel)
    /// - F8: [\`nextDiagnostic\`](#lint.nextDiagnostic)
    var lintKeymap = [
        { key: "Mod-Shift-m", run: openLintPanel },
        { key: "F8", run: nextDiagnostic }
    ];
    var LintDelay = 500;
    /// Given a diagnostic source, this function returns an extension that
    /// enables linting with that source. It will be called whenever the
    /// editor is idle (after its content changed).
    function linter(source) {
        return ViewPlugin.fromClass(/*@__PURE__*/(function () {
          function anonymous(view) {
                this.view = view;
                this.lintTime = Date.now() + LintDelay;
                this.set = true;
                this.run = this.run.bind(this);
                setTimeout(this.run, LintDelay);
            }
            anonymous.prototype.run = function run () {
                var this$1 = this;

                var now = Date.now();
                if (now < this.lintTime - 10) {
                    setTimeout(this.run, this.lintTime - now);
                }
                else {
                    this.set = false;
                    var ref = this.view;
                    var state = ref.state;
                    Promise.resolve(source(this.view)).then(function (annotations) {
                        var _a, _b;
                        if (this$1.view.state.doc == state.doc &&
                            (annotations.length || ((_b = (_a = this$1.view.state.field(lintState, false)) === null || _a === void 0 ? void 0 : _a.diagnostics) === null || _b === void 0 ? void 0 : _b.size)))
                            { this$1.view.dispatch(setDiagnostics(this$1.view.state, annotations)); }
                    }, function (error) { logException(this$1.view.state, error); });
                }
            };
            anonymous.prototype.update = function update (update$1) {
                if (update$1.docChanged) {
                    this.lintTime = Date.now() + LintDelay;
                    if (!this.set) {
                        this.set = true;
                        setTimeout(this.run, LintDelay);
                    }
                }
            };

          return anonymous;
        }()));
    }
    function renderDiagnostic(view, diagnostic) {
        var dom = document.createElement("li");
        dom.textContent = diagnostic.message;
        dom.className = themeClass("diagnostic." + diagnostic.severity);
        if (diagnostic.actions)
            { var loop = function () {
                var action = list[i];

                var button = dom.appendChild(document.createElement("button"));
                button.className = themeClass("diagnosticAction");
                button.textContent = action.name;
                button.onclick = button.onmousedown = function (e) {
                    e.preventDefault();
                    var found = findDiagnostic(view.state.field(lintState).diagnostics, diagnostic);
                    if (found)
                        { action.apply(view, found.from, found.to); }
                };
            };

              for (var i = 0, list = diagnostic.actions; i < list.length; i += 1) loop(); }
        // FIXME render source?
        return dom;
    }
    var DiagnosticWidget = /*@__PURE__*/(function (WidgetType) {
      function DiagnosticWidget () {
        WidgetType.apply(this, arguments);
      }

      if ( WidgetType ) DiagnosticWidget.__proto__ = WidgetType;
      DiagnosticWidget.prototype = Object.create( WidgetType && WidgetType.prototype );
      DiagnosticWidget.prototype.constructor = DiagnosticWidget;

      DiagnosticWidget.prototype.toDOM = function toDOM () {
            var elt = document.createElement("span");
            elt.className = themeClass("lintPoint." + this.value.severity);
            return elt;
        };

      return DiagnosticWidget;
    }(WidgetType));
    var PanelItem = function PanelItem(view, diagnostic) {
          this.diagnostic = diagnostic;
          this.id = "item_" + Math.floor(Math.random() * 0xffffffff).toString(16);
          this.dom = renderDiagnostic(view, diagnostic);
          this.dom.setAttribute("role", "option");
      };
    var LintPanel = function LintPanel(view) {
          var this$1 = this;

          this.view = view;
          this.items = [];
          this.dom = document.createElement("div");
          this.list = this.dom.appendChild(document.createElement("ul"));
          this.list.tabIndex = 0;
          this.list.setAttribute("role", "listbox");
          this.list.setAttribute("aria-label", this.view.state.phrase("Diagnostics"));
          this.list.addEventListener("keydown", function (event) {
              if (event.keyCode == 27) { // Escape
                  event.preventDefault();
                  closeLintPanel(this$1.view);
                  this$1.view.focus();
              }
              else if (event.keyCode == 38) { // ArrowUp
                  event.preventDefault();
                  this$1.moveSelection((this$1.selectedIndex - 1 + this$1.items.length) % this$1.items.length);
              }
              else if (event.keyCode == 40) { // ArrowDown
                  event.preventDefault();
                  this$1.moveSelection((this$1.selectedIndex + 1) % this$1.items.length);
              }
              else if (event.keyCode == 36) { // Home
                  event.preventDefault();
                  this$1.moveSelection(0);
              }
              else if (event.keyCode == 35) { // End
                  event.preventDefault();
                  this$1.moveSelection(this$1.items.length - 1);
              }
              else if (event.keyCode == 13) {
                  event.preventDefault();
                  this$1.view.focus();
              } // FIXME PageDown/PageUp
          });
          this.list.addEventListener("click", function (event) {
              for (var i = 0; i < this$1.items.length; i++) {
                  if (this$1.items[i].dom.contains(event.target))
                      { this$1.moveSelection(i); }
              }
          });
          var close = this.dom.appendChild(document.createElement("button"));
          close.setAttribute("name", "close");
          close.setAttribute("aria-label", this.view.state.phrase("close"));
          close.textContent = "×";
          close.addEventListener("click", function () { return closeLintPanel(this$1.view); });
          this.update();
      };

    var prototypeAccessors$c = { selectedIndex: { configurable: true },style: { configurable: true } };
      prototypeAccessors$c.selectedIndex.get = function () {
          var selected = this.view.state.field(lintState).selected;
          if (!selected)
              { return -1; }
          for (var i = 0; i < this.items.length; i++)
              { if (this.items[i].diagnostic == selected.diagnostic)
                  { return i; } }
          return -1;
      };
      LintPanel.prototype.update = function update () {
            var this$1 = this;

          var ref = this.view.state.field(lintState);
            var diagnostics = ref.diagnostics;
            var selected = ref.selected;
          var i = 0, needsSync = false, newSelectedItem = null;
          diagnostics.between(0, this.view.state.doc.length, function (_start, _end, ref) {
                var spec = ref.spec;

              var found = -1, item;
              for (var j = i; j < this$1.items.length; j++)
                  { if (this$1.items[j].diagnostic == spec.diagnostic) {
                      found = j;
                      break;
                  } }
              if (found < 0) {
                  item = new PanelItem(this$1.view, spec.diagnostic);
                  this$1.items.splice(i, 0, item);
                  needsSync = true;
              }
              else {
                  item = this$1.items[found];
                  if (found > i) {
                      this$1.items.splice(i, found - i);
                      needsSync = true;
                  }
              }
              if (selected && item.diagnostic == selected.diagnostic) {
                  if (!item.dom.hasAttribute("aria-selected")) {
                      item.dom.setAttribute("aria-selected", "true");
                      newSelectedItem = item;
                  }
              }
              else if (item.dom.hasAttribute("aria-selected")) {
                  item.dom.removeAttribute("aria-selected");
              }
              i++;
          });
          while (i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0)) {
              needsSync = true;
              this.items.pop();
          }
          if (this.items.length == 0) {
              this.items.push(new PanelItem(this.view, {
                  from: -1, to: -1,
                  severity: "info",
                  message: this.view.state.phrase("No diagnostics")
              }));
              needsSync = true;
          }
          if (newSelectedItem) {
              this.list.setAttribute("aria-activedescendant", newSelectedItem.id);
              this.view.requestMeasure({
                  key: this,
                  read: function () { return ({ sel: newSelectedItem.dom.getBoundingClientRect(), panel: this$1.list.getBoundingClientRect() }); },
                  write: function (ref) {
                        var sel = ref.sel;
                        var panel = ref.panel;

                      if (sel.top < panel.top)
                          { this$1.list.scrollTop -= panel.top - sel.top; }
                      else if (sel.bottom > panel.bottom)
                          { this$1.list.scrollTop += sel.bottom - panel.bottom; }
                  }
              });
          }
          else if (!this.items.length) {
              this.list.removeAttribute("aria-activedescendant");
          }
          if (needsSync)
              { this.sync(); }
      };
      LintPanel.prototype.sync = function sync () {
          var domPos = this.list.firstChild;
          function rm() {
              var prev = domPos;
              domPos = prev.nextSibling;
              prev.remove();
          }
          for (var i = 0, list = this.items; i < list.length; i += 1) {
              var item = list[i];

              if (item.dom.parentNode == this.list) {
                  while (domPos != item.dom)
                      { rm(); }
                  domPos = item.dom.nextSibling;
              }
              else {
                  this.list.insertBefore(item.dom, domPos);
              }
          }
          while (domPos)
              { rm(); }
          if (!this.list.firstChild)
              { this.list.appendChild(renderDiagnostic(this.view, {
                  severity: "info",
                  message: this.view.state.phrase("No diagnostics")
              })); }
      };
      LintPanel.prototype.moveSelection = function moveSelection (selectedIndex) {
          // FIXME make actions accessible
          if (this.items.length == 0)
              { return; }
          var field = this.view.state.field(lintState);
          var selection = findDiagnostic(field.diagnostics, this.items[selectedIndex].diagnostic);
          if (!selection)
              { return; }
          this.view.dispatch({
              selection: { anchor: selection.from, head: selection.to },
              scrollIntoView: true,
              effects: movePanelSelection.of(selection)
          });
      };
      prototypeAccessors$c.style.get = function () { return "lint"; };
      LintPanel.open = function open (view) { return new LintPanel(view); };

    Object.defineProperties( LintPanel.prototype, prototypeAccessors$c );
    function underline(color) {
        var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"3\">\n    <path d=\"m0 3 l2 -2 l1 0 l2 2 l1 0\" stroke=\"" + color + "\" fill=\"none\" stroke-width=\".7\"/>\n  </svg>";
        return ("url('data:image/svg+xml;base64," + (btoa(svg)) + "')");
    }
    var baseTheme$8 = EditorView.baseTheme({
        diagnostic: {
            padding: "3px 6px 3px 8px",
            marginLeft: "-1px",
            display: "block"
        },
        "diagnostic.error": { borderLeft: "5px solid #d11" },
        "diagnostic.warning": { borderLeft: "5px solid orange" },
        "diagnostic.info": { borderLeft: "5px solid #999" },
        diagnosticAction: {
            font: "inherit",
            border: "none",
            padding: "2px 4px",
            backgroundColor: "#444",
            color: "white",
            borderRadius: "3px",
            marginLeft: "8px"
        },
        lintRange: {
            backgroundPosition: "left bottom",
            backgroundRepeat: "repeat-x"
        },
        "lintRange.error": { backgroundImage: underline("#d11") },
        "lintRange.warning": { backgroundImage: underline("orange") },
        "lintRange.info": { backgroundImage: underline("#999") },
        "lintRange.active": { backgroundColor: "#fec" },
        lintPoint: {
            position: "relative",
            "&:after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "-2px",
                borderLeft: "3px solid transparent",
                borderRight: "3px solid transparent",
                borderBottom: "4px solid #d11"
            }
        },
        "lintPoint.warning": {
            "&:after": { borderBottomColor: "orange" }
        },
        "lintPoint.info": {
            "&:after": { borderBottomColor: "#999" }
        },
        "panel.lint": {
            position: "relative",
            "& ul": {
                maxHeight: "100px",
                overflowY: "auto",
                "& [aria-selected]": {
                    backgroundColor: "#ddd"
                },
                "&:focus [aria-selected]": {
                    background_fallback: "#bdf",
                    backgroundColor: "Highlight",
                    color_fallback: "white",
                    color: "HighlightText"
                },
                padding: 0,
                margin: 0
            },
            "& [name=close]": {
                position: "absolute",
                top: "0",
                right: "2px",
                background: "inherit",
                border: "none",
                font: "inherit",
                padding: 0,
                margin: 0
            }
        },
        "tooltip.lint": {
            padding: 0,
            margin: 0
        }
    });

    var _m16 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        closeLintPanel: closeLintPanel,
        lintKeymap: lintKeymap,
        linter: linter,
        nextDiagnostic: nextDiagnostic,
        openLintPanel: openLintPanel,
        setDiagnostics: setDiagnostics
    });

    var Inherit = 1;
    /// A tag system defines a set of node (token) tags used for
    /// highlighting. You'll usually want to use the
    /// [default](#highlight.defaultTags) set, but it is possible to
    /// define your own custom system when that doesn't fit your use case.
    var TagSystem = function TagSystem(options) {
        var this$1 = this;

        /// @internal
        this.typeNames = [""];
        /// @internal
        this.typeIDs = Object.create(null);
        /// A [node
        /// prop](https://lezer.codemirror.net/docs/ref#tree.NodeProp) used
        /// to associate styling tag information with syntax tree nodes.
        this.prop = new NodeProp();
        this.flags = options.flags;
        this.types = options.types;
        this.flagMask = Math.pow(2, this.flags.length) - 1;
        this.typeShift = this.flags.length;
        var subtypes = options.subtypes || 0;
        var parentNames = [undefined];
        this.typeIDs[""] = 0;
        var typeID = 1;
        for (var i$1 = 0, list = options.types; i$1 < list.length; i$1 += 1) {
            var type = list[i$1];

            var match = /^([\w\-]+)(?:=([\w-]+))?$/.exec(type);
            if (!match)
                { throw new RangeError("Invalid type name " + type); }
            var id = typeID++;
            this.typeNames[id] = match[1];
            this.typeIDs[match[1]] = id;
            parentNames[id] = match[2];
            for (var i = 0; i < subtypes; i++) {
                var subID = typeID++, name = match[1] + "#" + (i + 1);
                this.typeNames[subID] = name;
                this.typeIDs[name] = subID;
                parentNames[subID] = match[1];
            }
        }
        this.parents = parentNames.map(function (name) {
            if (name == null)
                { return 0; }
            var id = this$1.typeIDs[name];
            if (id == null)
                { throw new RangeError(("Unknown parent type '" + name + "' specified")); }
            return id;
        });
        if (this.flags.length > 29 || this.typeNames.length > Math.pow(2, 29 - this.flags.length))
            { throw new RangeError("Too many style tag flags to fit in a 30-bit integer"); }
    };
    /// Parse a tag name into a numeric ID. Only necessary if you are
    /// manually defining [node properties](#highlight.TagSystem.prop)
    /// for this system.
    TagSystem.prototype.get = function get (name) {
        var value = name.charCodeAt(0) == 43 ? 1 : 0; // Check for leading '+'
        for (var i = 0, list = (value ? name.slice(1) : name).split(" "); i < list.length; i += 1)
            {
                var part = list[i];

                if (part) {
                var flag = this.flags.indexOf(part);
                if (flag > -1) {
                    value += 1 << flag;
                }
                else {
                    var typeID = this.typeIDs[part];
                    if (typeID == null)
                        { throw new RangeError(("Unknown tag type '" + part + "'")); }
                    if (value >> this.typeShift)
                        { throw new RangeError(("Multiple tag types specified in '" + name + "'")); }
                    value += typeID << this.typeShift;
                }
            }
            }
        return value;
    };
    /// Create a
    /// [`PropSource`](https://lezer.codemirror.net/docs/ref#tree.PropSource)
    /// that adds node properties for this system. `tags` should map
    /// node type
    /// [selectors](https://lezer.codemirror.net/docs/ref#tree.NodeType^match)
    /// to tag names.
    TagSystem.prototype.add = function add (tags) {
            var this$1 = this;

        var match = NodeType.match(tags);
        return this.prop.add(function (type) {
            var found = match(type);
            return found == null ? undefined : this$1.get(found);
        });
    };
    /// Create a highlighter extension for this system, styling the
    /// given tags using the given CSS objects.
    TagSystem.prototype.highlighter = function highlighter (spec) {
            var this$1 = this;

        var styling = new Styling(this, spec);
        return [
            ViewPlugin.define(function (view) { return new Highlighter(view, this$1.prop, styling); }).decorations(),
            EditorView.styleModule.of(styling.module)
        ];
    };
    /// @internal
    TagSystem.prototype.specificity = function specificity (tag) {
        var flags = tag & this.flagMask, spec = 0;
        for (var i = 1; i <= this.flags.length; i++)
            { if (flags & (1 << i))
                { spec++; } }
        for (var type = tag >> (this.flags.length + 1); type; type = this.parents[type])
            { spec += 1000; }
        return spec;
    };
    /// The set of highlighting tags used by regular language packages and
    /// themes.
    var defaultTags = new TagSystem({
        flags: ["invalid", "meta", "standard",
            "definition", "constant", "local", "control",
            "link", "strong", "emphasis", "monospace",
            "changed", "inserted", "deleted"],
        subtypes: 7,
        types: [
            "comment",
            "lineComment=comment",
            "blockComment=comment",
            "docComment=comment",
            "name",
            "variableName=name",
            "typeName=name",
            "propertyName=name",
            "className=name",
            "labelName=name",
            "namespace=name",
            "literal",
            "string=literal",
            "docString=string",
            "character=string",
            "number=literal",
            "integer=number",
            "float=number",
            "regexp=literal",
            "escape=literal",
            "color=literal",
            "content",
            "heading=content",
            "list=content",
            "quote=content",
            "keyword",
            "self=keyword",
            "null=keyword",
            "atom=keyword",
            "unit=keyword",
            "modifier=keyword",
            "operatorKeyword=keyword",
            "operator",
            "derefOperator=operator",
            "arithmeticOperator=operator",
            "logicOperator=operator",
            "bitwiseOperator=operator",
            "compareOperator=operator",
            "updateOperator=operator",
            "typeOperator=operator",
            "punctuation",
            "separator=punctuation",
            "bracket=punctuation",
            "angleBracket=bracket",
            "squareBracket=bracket",
            "paren=bracket",
            "brace=bracket"
        ]
    });
    /// Used to add a set of tags to a language syntax via
    /// [`Parser.withProps`](https://lezer.codemirror.net/docs/ref#lezer.Parser.withProps).
    /// The argument object can use syntax node selectors (see
    /// [`NodeType.match`](https://lezer.codemirror.net/docs/ref#tree.NodeType^match))
    /// as property names, and tag names (in the [default tag
    /// system](#highlight.defaultTags)) as values.
    var styleTags = function (tags) { return defaultTags.add(tags); };
    /// Create a highlighter theme that adds the given styles to the given
    /// tags. The spec's property names must be [tag
    /// names](#highlight.defaultTags) or comma-separated lists of tag
    /// names. The values should be
    /// [`style-mod`](https://github.com/marijnh/style-mod#documentation)
    /// style objects that define the CSS for that tag.
    var highlighter = function (spec) { return defaultTags.highlighter(spec); };
    var StyleRule = function StyleRule(type, flags, specificity, cls) {
        this.type = type;
        this.flags = flags;
        this.specificity = specificity;
        this.cls = cls;
    };
    var Styling = function Styling(tags, spec) {
        this.tags = tags;
        this.cache = Object.create(null);
        var modSpec = Object.create(null);
        var nextCls = 0;
        var rules = [];
        for (var prop in spec) {
            var cls = "c" + nextCls++;
            modSpec[cls] = spec[prop];
            for (var i = 0, list = prop.split(/\s*,\s*/); i < list.length; i += 1) {
                var part = list[i];

                var tag = tags.get(part);
                rules.push(new StyleRule(tag >> tags.typeShift, tag & tags.flagMask, tags.specificity(tag), cls));
            }
        }
        this.rules = rules.sort(function (a, b) { return b.specificity - a.specificity; });
        this.module = new StyleModule(modSpec);
    };
    Styling.prototype.match = function match (tag) {
        var known = this.cache[tag];
        if (known != null)
            { return known; }
        var result = "";
        var type = tag >> this.tags.typeShift, flags = tag & this.tags.flagMask;
        for (;;) {
            for (var i = 0, list = this.rules; i < list.length; i += 1) {
                var rule = list[i];

                    if (rule.type == type && (rule.flags & flags) == rule.flags) {
                    if (result)
                        { result += " "; }
                    result += this.module[rule.cls];
                    flags &= ~rule.flags;
                    if (type)
                        { break; }
                }
            }
            if (type)
                { type = this.tags.parents[type]; }
            else
                { break; }
        }
        return this.cache[tag] = result;
    };
    var Highlighter = function Highlighter(view, prop, styling) {
        this.prop = prop;
        this.styling = styling;
        this.tree = view.state.tree;
        this.decorations = this.buildDeco(view.visibleRanges, this.tree);
    };
    Highlighter.prototype.update = function update (update$1) {
        var syntax = update$1.state.facet(EditorState.syntax);
        if (!syntax.length) {
            this.decorations = Decoration.none;
        }
        else if (syntax[0].parsePos(update$1.state) < update$1.view.viewport.to) {
            this.decorations = this.decorations.map(update$1.changes);
        }
        else if (this.tree != syntax[0].getTree(update$1.state) || update$1.viewportChanged) {
            this.tree = syntax[0].getTree(update$1.state);
            this.decorations = this.buildDeco(update$1.view.visibleRanges, this.tree);
        }
    };
    Highlighter.prototype.buildDeco = function buildDeco (ranges, tree) {
            var this$1 = this;

        var builder = new RangeSetBuilder();
        var start = 0;
        function flush(pos, style) {
            if (pos > start && style)
                { builder.add(start, pos, Decoration.mark({ class: style })); } // FIXME cache these
            start = pos;
        }
        var loop = function () {
            var ref = list[i];
                var from = ref.from;
                var to = ref.to;

                start = from;
            // The current node's own classes
            var curClass = "";
            var context = [];
            var inherited = [];
            tree.iterate({
                from: from, to: to,
                enter: function (type, start) {
                    var inheritedClass = inherited.length ? inherited[inherited.length - 1] : "";
                    var cls = inheritedClass;
                    var style = type.prop(this$1.prop);
                    if (style != null) {
                        var val = this$1.styling.match(style);
                        if (val) {
                            if (cls)
                                { cls += " "; }
                            cls += val;
                        }
                        if (style & Inherit)
                            { inheritedClass = cls; }
                    }
                    context.push(cls);
                    if (inheritedClass)
                        { inherited.push(inheritedClass); }
                    if (cls != curClass) {
                        flush(start, curClass);
                        curClass = cls;
                    }
                },
                leave: function (_t, _s, end) {
                    context.pop();
                    inherited.pop();
                    var backTo = context.length ? context[context.length - 1] : "";
                    if (backTo != curClass) {
                        flush(Math.min(to, end), curClass);
                        curClass = backTo;
                    }
                }
            });
        };

            for (var i = 0, list = ranges; i < list.length; i += 1) loop();
        return builder.finish();
    };
    /// A default highlighter (works well with light themes).
    var defaultHighlighter = highlighter({
        deleted: { textDecoration: "line-through" },
        inserted: { textDecoration: "underline" },
        link: { textDecoration: "underline" },
        strong: { fontWeight: "bold" },
        emphasis: { fontStyle: "italic" },
        invalid: { color: "#f00" },
        keyword: { color: "#708" },
        atom: { color: "#219" },
        number: { color: "#164" },
        string: { color: "#a11" },
        "regexp, escape": { color: "#e40" },
        "variableName definition": { color: "#00f" },
        typeName: { color: "#085" },
        className: { color: "#167" },
        "propertyName definition": { color: "#00c" },
        comment: { color: "#940" },
        meta: { color: "#555" },
    });

    var _m17 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TagSystem: TagSystem,
        defaultHighlighter: defaultHighlighter,
        defaultTags: defaultTags,
        highlighter: highlighter,
        styleTags: styleTags
    });

    // Counts the column offset in a string, taking tabs into account.
    // Used mostly to find indentation.
    function countCol(string, end, tabSize, startIndex, startValue) {
        if ( startIndex === void 0 ) startIndex = 0;
        if ( startValue === void 0 ) startValue = 0;

        if (end == null) {
            end = string.search(/[^\s\u00a0]/);
            if (end == -1)
                { end = string.length; }
        }
        return countColumn(string.slice(startIndex, end), startValue, tabSize);
    }
    // STRING STREAM
    /// Encapsulates a single line of input. Given to stream syntax code,
    /// which uses it to tokenize the content.
    var StringStream = function StringStream(
    /// The line.
    string, 
    /// Current tab size.
    tabSize) {
        this.string = string;
        this.tabSize = tabSize;
        /// The current position on the line.
        this.pos = 0;
        /// The start position of the current token.
        this.start = 0;
        this.lineStart = 0;
        this.lastColumnPos = 0;
        this.lastColumnValue = 0;
    };
    /// True if we are at the end of the line.
    StringStream.prototype.eol = function eol () { return this.pos >= this.string.length; };
    /// True if we are at the start of the line.
    StringStream.prototype.sol = function sol () { return this.pos == this.lineStart; };
    /// Get the next code unit after the current position, or undefined
    /// if we're at the end of the line.
    StringStream.prototype.peek = function peek () { return this.string.charAt(this.pos) || undefined; };
    /// Read the next code unit and advance `this.pos`.
    StringStream.prototype.next = function next () {
        if (this.pos < this.string.length)
            { return this.string.charAt(this.pos++); }
    };
    /// Match the next character against the given string, regular
    /// expression, or predicate. Consume and return it if it matches.
    StringStream.prototype.eat = function eat (match) {
        var ch = this.string.charAt(this.pos);
        var ok;
        if (typeof match == "string")
            { ok = ch == match; }
        else
            { ok = ch && (match instanceof RegExp ? match.test(ch) : match(ch)); }
        if (ok) {
            ++this.pos;
            return ch;
        }
    };
    /// Continue matching characters that match the given string,
    /// regular expression, or predicate function. Return true if any
    /// characters were consumed.
    StringStream.prototype.eatWhile = function eatWhile (match) {
        var start = this.pos;
        while (this.eat(match)) { }
        return this.pos > start;
    };
    /// Consume whitespace ahead of `this.pos`. Return true if any was
    /// found.
    StringStream.prototype.eatSpace = function eatSpace () {
        var start = this.pos;
        while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))
            { ++this.pos; }
        return this.pos > start;
    };
    /// Move to the end of the line.
    StringStream.prototype.skipToEnd = function skipToEnd () { this.pos = this.string.length; };
    /// Move to directly before the given character, if found on the
    /// current line.
    StringStream.prototype.skipTo = function skipTo (ch) {
        var found = this.string.indexOf(ch, this.pos);
        if (found > -1) {
            this.pos = found;
            return true;
        }
    };
    /// Move back `n` characters.
    StringStream.prototype.backUp = function backUp (n) { this.pos -= n; };
    /// Get the column position at `this.pos`.
    StringStream.prototype.column = function column () {
        if (this.lastColumnPos < this.start) {
            this.lastColumnValue = countCol(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
            this.lastColumnPos = this.start;
        }
        return this.lastColumnValue - (this.lineStart ? countCol(this.string, this.lineStart, this.tabSize) : 0);
    };
    /// Get the indentation column of the current line.
    StringStream.prototype.indentation = function indentation () {
        return countCol(this.string, null, this.tabSize) -
            (this.lineStart ? countCol(this.string, this.lineStart, this.tabSize) : 0);
    };
    /// Match the input against the given string or regular expression
    /// (which should start with a `^`). Return true or the regexp match
    /// if it matches.
    ///
    /// Unless `consume` is set to `false`, this will move `this.pos`
    /// past the matched text.
    ///
    /// When matching a string `caseInsensitive` can be set to true to
    /// make the match case-insensitive.
    StringStream.prototype.match = function match (pattern, consume, caseInsensitive) {
        if (typeof pattern == "string") {
            var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
            var substr = this.string.substr(this.pos, pattern.length);
            if (cased(substr) == cased(pattern)) {
                if (consume !== false)
                    { this.pos += pattern.length; }
                return true;
            }
            else
                { return null; }
        }
        else {
            var match = this.string.slice(this.pos).match(pattern);
            if (match && match.index > 0)
                { return null; }
            if (match && consume !== false)
                { this.pos += match[0].length; }
            return match;
        }
    };
    /// Get the current token.
    StringStream.prototype.current = function current () { return this.string.slice(this.start, this.pos); };
    /// Hide the first `n` characters of the stream while running
    /// `inner`. This can be useful for nesting modes.
    StringStream.prototype.hideFirstChars = function hideFirstChars (n, inner) {
        this.lineStart += n;
        try {
            return inner();
        }
        finally {
            this.lineStart -= n;
        }
    };
    var StringStreamCursor = function StringStreamCursor(text, offset, tabSize) {
        if ( tabSize === void 0 ) tabSize = 4;

        this.offset = offset;
        this.tabSize = tabSize;
        this.iter = text.iterLines(offset);
        this.curLineEnd = this.offset - 1;
    };
    StringStreamCursor.prototype.next = function next () {
        var ref = this.iter.next();
            var value = ref.value;
            var done = ref.done;
        if (done)
            { throw new RangeError("Reached end of document"); }
        var res = new StringStream(value, this.tabSize);
        this.offset = this.curLineEnd + 1;
        this.curLineEnd += value.length + 1;
        return res;
    };

    var StreamParserInstance = function StreamParserInstance(spec, languageData) {
        this.token = spec.token;
        this.blankLine = spec.blankLine || (function () { });
        this.startState = spec.startState || (function () { return true; });
        this.copyState = spec.copyState || defaultCopyState;
        this.indent = spec.indent || (function () { return -1; });
        this.docType = docID((spec.docProps || []).concat([[languageDataProp, languageData]]));
    };
    StreamParserInstance.prototype.readToken = function readToken (state, stream, editorState) {
        stream.start = stream.pos;
        for (var i = 0; i < 10; i++) {
            var result = this.token(stream, state, editorState);
            if (stream.pos > stream.start)
                { return result; }
        }
        throw new Error("Stream parser failed to advance stream.");
    };
    function defaultCopyState(state) {
        if (typeof state != "object")
            { return state; }
        var newState = {};
        for (var prop in state) {
            var val = state[prop];
            newState[prop] = (val instanceof Array ? val.slice() : val);
        }
        return newState;
    }
    /// A syntax provider that uses a stream parser.
    var StreamSyntax = function StreamSyntax(parser) {
        var this$1 = this;

        this.languageData = Facet.define();
        var parserInst = this.parser = new StreamParserInstance(parser, this.languageData);
        var setSyntax = StateEffect.define();
        this.field = StateField.define({
            create: function create(state) {
                var start = new SyntaxState$1(Tree.empty, [parserInst.startState(state)], 1, 0, null);
                start.advanceFrontier(parserInst, state, 25 /* Apply */);
                start.tree = start.updatedTree;
                return start;
            },
            update: function update(value, tr) {
                for (var i = 0, list = tr.effects; i < list.length; i += 1)
                    {
                    var effect = list[i];

                    if (effect.is(setSyntax))
                        { return effect.value;
                } }
                if (!tr.docChanged)
                    { return value; }
                var changeStart = -1;
                tr.changes.iterChangedRanges(function (from) { return changeStart = changeStart < 0 ? from : changeStart; });
                var ref = tr.state.doc.lineAt(changeStart);
                var from = ref.from;
                var number = ref.number;
                var newValue = number >= value.frontierLine ? value.copy() : value.cut(number, from);
                newValue.advanceFrontier(parserInst, tr.state, 25 /* Apply */);
                newValue.tree = newValue.updatedTree;
                return newValue;
            }
        });
        this.extension = [
            EditorState.syntax.of(this),
            ViewPlugin.define(function (view) { return new HighlightWorker$1(view, this$1.parser, this$1.field, setSyntax); }),
            this.field,
            EditorState.indentation.of(function (context, pos) {
                return context.state.field(this$1.field).getIndent(this$1.parser, context.state, pos);
            })
        ];
    };
    StreamSyntax.prototype.getTree = function getTree (state) {
        return state.field(this.field).tree;
    };
    StreamSyntax.prototype.parsePos = function parsePos (state) {
        return state.field(this.field).frontierPos;
    };
    StreamSyntax.prototype.ensureTree = function ensureTree (state, upto, timeout) {
            if ( timeout === void 0 ) timeout = 100;

        var field = state.field(this.field);
        if (field.frontierPos < upto)
            { field.advanceFrontier(this.parser, state, timeout, upto); }
        return field.frontierPos < upto ? null : field.updatedTree;
    };
    // FIXME allow modes to extend this?
    StreamSyntax.prototype.languageDataFacetAt = function languageDataFacetAt () { return this.languageData; };
    var CacheStepShift = 6, CacheStep = 1 << CacheStepShift;
    var MaxRecomputeDistance = 20e3;
    var SyntaxState$1 = function SyntaxState(tree, 
    // Slot 0 stores the start state (line 1), slot 1 the
    // state at the start of line 65, etc, so lineNo ==
    // (index * CACHE_STEP) + 1
    cache, frontierLine, frontierPos, frontierState) {
        this.tree = tree;
        this.cache = cache;
        this.frontierLine = frontierLine;
        this.frontierPos = frontierPos;
        this.frontierState = frontierState;
        this.working = -1;
        this.updatedTree = tree;
    };
    SyntaxState$1.prototype.copy = function copy () {
        return new SyntaxState$1(this.updatedTree, this.cache.slice(), this.frontierLine, this.frontierPos, this.frontierState);
    };
    SyntaxState$1.prototype.cut = function cut (line, pos) {
        return new SyntaxState$1(this.updatedTree.cut(pos), this.cache.slice(0, (line >> CacheStepShift) + 1), line, pos, null);
    };
    SyntaxState$1.prototype.maybeStoreState = function maybeStoreState (parser, lineBefore, state) {
        if (lineBefore % CacheStep == 0)
            { this.cache[(lineBefore - 1) >> CacheStepShift] = parser.copyState(state); }
    };
    SyntaxState$1.prototype.findState = function findState (parser, editorState, line) {
        var cacheIndex = Math.min(this.cache.length - 1, (line - 1) >> CacheStepShift);
        var cachedLine = (cacheIndex << CacheStepShift) + 1;
        var startPos = editorState.doc.line(cachedLine).from;
        if (line - cachedLine > CacheStep && editorState.doc.line(line).from - startPos > MaxRecomputeDistance)
            { return null; }
        var state = parser.copyState(this.cache[cacheIndex]);
        var cursor = new StringStreamCursor(editorState.doc, startPos, editorState.tabSize);
        for (var l = cachedLine; l < line; l++) {
            var stream = cursor.next();
            if (stream.eol()) {
                parser.blankLine(state, editorState);
            }
            else {
                while (!stream.eol())
                    { parser.readToken(state, stream, editorState); }
            }
            this.maybeStoreState(parser, l, state);
        }
        return state;
    };
    SyntaxState$1.prototype.advanceFrontier = function advanceFrontier (parser, editorState, timeout, upto) {
            if ( upto === void 0 ) upto = editorState.doc.length;

        if (this.frontierPos >= editorState.doc.length)
            { return; }
        var sliceEnd = Date.now() + timeout;
        var state = this.frontierState || this.findState(parser, editorState, this.frontierLine);
        var cursor = new StringStreamCursor(editorState.doc, this.frontierPos, editorState.tabSize);
        var buffer = [];
        var line = this.frontierLine, pos = this.frontierPos;
        while (pos < upto) {
            var stream = cursor.next(), offset = cursor.offset;
            if (stream.eol()) {
                parser.blankLine(state, editorState);
            }
            else {
                while (!stream.eol()) {
                    var type = parser.readToken(state, stream, editorState);
                    if (type)
                        { buffer.push(tokenID(type), offset + stream.start, offset + stream.pos, 4); }
                }
            }
            this.maybeStoreState(parser, line, state);
            line++;
            pos += stream.string.length + 1;
            if (Date.now() > sliceEnd)
                { break; }
        }
        var tree = Tree.build({ buffer: buffer,
            group: nodeGroup,
            topID: parser.docType }).balance();
        this.updatedTree = this.updatedTree.append(tree).balance();
        this.frontierLine = line;
        this.frontierPos = pos;
        this.frontierState = state;
    };
    SyntaxState$1.prototype.getIndent = function getIndent (parser, state, pos) {
        var line = state.doc.lineAt(pos);
        var parseState = this.findState(parser, state, line.number);
        if (parseState == null)
            { return -1; }
        var text = line.slice(pos - line.from, Math.min(line.to, pos + 100) - line.from);
        return parser.indent(parseState, /^\s*(.*)/.exec(text)[1], state);
    };
    var requestIdle$1 = typeof window != "undefined" && window.requestIdleCallback ||
        (function (callback, ref) {
            var timeout = ref.timeout;

            return setTimeout(callback, timeout);
    });
    var cancelIdle$1 = typeof window != "undefined" && window.cancelIdleCallback || clearTimeout;
    var HighlightWorker$1 = function HighlightWorker(view, parser, field, setSyntax) {
        this.view = view;
        this.parser = parser;
        this.field = field;
        this.setSyntax = setSyntax;
        this.working = -1;
        this.work = this.work.bind(this);
        this.scheduleWork();
    };
    HighlightWorker$1.prototype.update = function update (update$1) {
        if (update$1.docChanged)
            { this.scheduleWork(); }
    };
    HighlightWorker$1.prototype.scheduleWork = function scheduleWork () {
        if (this.working > -1)
            { return; }
        var ref = this.view;
            var state = ref.state;
            var field = state.field(this.field);
        if (field.frontierPos >= state.doc.length)
            { return; }
        this.working = requestIdle$1(this.work, { timeout: 200 /* Pause */ });
    };
    HighlightWorker$1.prototype.work = function work (deadline) {
        this.working = -1;
        var ref = this.view;
            var state = ref.state;
            var field = state.field(this.field);
        if (field.frontierPos >= state.doc.length)
            { return; }
        // Advance to the end of the viewport, and no further, by default
        var end = this.view.viewport.to;
        field.advanceFrontier(this.parser, state, deadline ? Math.max(50 /* MinSlice */, deadline.timeRemaining()) : 100 /* Slice */, end);
        if (field.frontierPos < end)
            { this.scheduleWork(); }
        else
            { this.view.dispatch({ effects: this.setSyntax.of(field.copy()) }); }
    };
    HighlightWorker$1.prototype.destroy = function destroy () {
        if (this.working >= 0)
            { cancelIdle$1(this.working); }
    };
    var tokenTable = Object.create(null);
    var typeArray = [NodeType.none];
    var nodeGroup = new NodeGroup(typeArray);
    var warned = [];
    function tokenID(tag) {
        var id = tokenTable[tag];
        if (id == null) {
            var tagID = 0;
            try {
                tagID = defaultTags.get(tag);
            }
            catch (e) {
                if (!(e instanceof RangeError))
                    { throw e; }
                if (warned.indexOf(tag) < 0) {
                    warned.push(tag);
                    console.warn(("'" + tag + "' is not a valid style tag"));
                }
                return tokenID("");
            }
            id = tokenTable[tag] = typeArray.length;
            typeArray.push(new NodeType(tag ? tag.replace(/ /g, "_") : "_", defaultTags.prop.set({}, tagID), id));
        }
        return id;
    }
    function docID(props) {
        if (props.length == 0)
            { return tokenID(""); }
        var obj = Object.create(null);
        for (var i = 0, list = props; i < list.length; i += 1)
            {
            var ref = list[i];
            var prop = ref[0];
            var value = ref[1];

            prop.set(obj, value);
        }
        var id = typeArray.length;
        typeArray.push(new NodeType("document", obj, id));
        return id;
    }

    var _m18 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        StreamSyntax: StreamSyntax,
        StringStream: StringStream
    });

    var baseTheme$9 = EditorView.baseTheme({
        "tooltip.autocomplete": {
            fontFamily: "monospace",
            overflowY: "auto",
            maxHeight: "10em",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li": {
                cursor: "pointer",
                padding: "1px 1em 1px 3px",
                lineHeight: 1.2
            },
            "& > li[aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText"
            }
        },
        "snippetField@light": { backgroundColor: "#ddd" },
        "snippetField@dark": { backgroundColor: "#333" },
        "snippetFieldPosition": {
            verticalAlign: "text-top",
            width: 0,
            height: "1.15em",
            margin: "0 -0.7px -.7em",
            borderLeft: "1.4px dotted #888"
        }
    });

    var FieldPos = function FieldPos(field, line, from, to) {
        this.field = field;
        this.line = line;
        this.from = from;
        this.to = to;
    };
    var FieldRange = function FieldRange(field, from, to) {
        this.field = field;
        this.from = from;
        this.to = to;
    };
    FieldRange.prototype.map = function map (changes) {
        return new FieldRange(this.field, changes.mapPos(this.from, -1), changes.mapPos(this.to, 1));
    };
    var Snippet = function Snippet(lines, fieldPositions) {
        this.lines = lines;
        this.fieldPositions = fieldPositions;
    };
    Snippet.prototype.instantiate = function instantiate (state, pos) {
        var text = [], lineStart = [pos];
        var lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.slice(0, Math.min(100, lineObj.length)))[0];
        for (var i$1 = 0, list = this.lines; i$1 < list.length; i$1 += 1) {
            var line = list[i$1];

                if (text.length) {
                var indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
                for (var i = 0; i < tabs; i++)
                    { indent += state.facet(EditorState.indentUnit); }
                lineStart.push(pos + indent.length - tabs);
                line = indent + line.slice(tabs);
            }
            text.push(line);
            pos += line.length + 1;
        }
        var ranges = this.fieldPositions.map(function (pos) { return new FieldRange(pos.field, lineStart[pos.line] + pos.from, lineStart[pos.line] + pos.to); });
        return { text: text, ranges: ranges };
    };
    Snippet.parse = function parse (template) {
        var fields = [];
        var lines = [], positions = [], m;
        for (var i$2 = 0, list = template.split(/\r\n?|\n/); i$2 < list.length; i$2 += 1) {
            var line = list[i$2];

                while (m = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(line)) {
                var seq = m[1] ? +m[1] : null, name = m[2] || m[3], found = -1;
                for (var i = 0; i < fields.length; i++) {
                    if (name ? fields[i].name == name : seq != null && fields[i].seq == seq)
                        { found = i; }
                }
                if (found < 0) {
                    var i$1 = 0;
                    while (i$1 < fields.length && (seq == null || (fields[i$1].seq != null && fields[i$1].seq < seq)))
                        { i$1++; }
                    fields.splice(i$1, 0, { seq: seq, name: name || null });
                    found = i$1;
                }
                positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
                line = line.slice(0, m.index) + name + line.slice(m.index + m[0].length);
            }
            lines.push(line);
        }
        return new Snippet(lines, positions);
    };
    var FieldMarker = /*@__PURE__*/(function (WidgetType) {
        function FieldMarker () {
            WidgetType.apply(this, arguments);
        }

        if ( WidgetType ) FieldMarker.__proto__ = WidgetType;
        FieldMarker.prototype = Object.create( WidgetType && WidgetType.prototype );
        FieldMarker.prototype.constructor = FieldMarker;

        FieldMarker.prototype.toDOM = function toDOM () {
            var span = document.createElement("span");
            span.className = themeClass("snippetFieldPosition");
            return span;
        };

        return FieldMarker;
    }(WidgetType));
    var fieldMarker = Decoration.widget({ widget: new FieldMarker(null) });
    var fieldRange = Decoration.mark({ class: themeClass("snippetField") });
    var ActiveSnippet = function ActiveSnippet(ranges, active) {
        this.ranges = ranges;
        this.active = active;
        this.deco = Decoration.set(ranges.map(function (r) { return (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to); }));
    };
    ActiveSnippet.prototype.map = function map (changes) {
        return new ActiveSnippet(this.ranges.map(function (r) { return r.map(changes); }), this.active);
    };
    ActiveSnippet.prototype.selectionInsideField = function selectionInsideField (sel) {
            var this$1 = this;

        return sel.ranges.every(function (range) { return this$1.ranges.some(function (r) { return r.field == this$1.active && r.from <= range.from && r.to >= range.to; }); });
    };
    var setActive = StateEffect.define({
        map: function map(value, changes) { return value && value.map(changes); }
    });
    var moveToField = StateEffect.define();
    var snippetState = StateField.define({
        create: function create() { return null; },
        update: function update(value, tr) {
            for (var i = 0, list = tr.effects; i < list.length; i += 1) {
                var effect = list[i];

                if (effect.is(setActive))
                    { return effect.value; }
                if (effect.is(moveToField) && value)
                    { return new ActiveSnippet(value.ranges, effect.value); }
            }
            if (value && tr.docChanged)
                { value = value.map(tr.changes); }
            if (value && tr.selection && !value.selectionInsideField(tr.selection))
                { value = null; }
            return value;
        },
        provide: [EditorView.decorations.from(function (val) { return val ? val.deco : Decoration.none; })]
    });
    function fieldSelection(ranges, field) {
        return EditorSelection.create(ranges.filter(function (r) { return r.field == field; }).map(function (r) { return EditorSelection.range(r.from, r.to); }));
    }
    /// Convert a snippet template to a function that can apply it.
    /// Snippets are written using syntax like this:
    ///
    ///     "for (let ${index} = 0; ${index} < ${end}; ${index}++) {\n\t${}\n}"
    ///
    /// Each `${}` placeholder (you may also use `#{}`) indicates a field
    /// that the user can fill in. Its name, if any, will be the default
    /// content for the field.
    ///
    /// When the snippet is activated by calling the returned function,
    /// the code is inserted at the given position. Newlines in the
    /// template are indented by the indentation of the start line, plus
    /// one [indent unit](#state.EditorState^indentUnit) per tab character
    /// after the newline.
    ///
    /// On activation, (all instances of) the first field are selected.
    /// The user can move between fields with Tab and Shift-Tab as long as
    /// the fields are active. Moving to the last field or moving the
    /// cursor out of the current field deactivates the fields.
    ///
    /// The order of fields defaults to textual order, but you can add
    /// numbers to placeholders (`${1}` or `${1:defaultText}`) to provide
    /// a custom order.
    function snippet(template) {
        var snippet = Snippet.parse(template);
        return function (editor, range) {
            var ref = snippet.instantiate(editor.state, range.from);
            var text = ref.text;
            var ranges = ref.ranges;
            var spec = { changes: { from: range.from, to: range.to, insert: Text.of(text) } };
            if (ranges.length)
                { spec.selection = fieldSelection(ranges, 0); }
            if (ranges.length > 1) {
                spec.effects = setActive.of(new ActiveSnippet(ranges, 0));
                if (editor.state.field(snippetState, false) === undefined)
                    { spec.reconfigure = { append: [snippetState, snippetKeymap, baseTheme$9] }; }
            }
            editor.dispatch(editor.state.update(spec));
        };
    }
    function moveField(dir) {
        return function (ref) {
            var state = ref.state;
            var dispatch = ref.dispatch;

            var active = state.field(snippetState, false);
            if (!active || dir < 0 && active.active == 0)
                { return false; }
            var next = active.active + dir, last = dir > 0 && !active.ranges.some(function (r) { return r.field == next + dir; });
            dispatch(state.update({
                selection: fieldSelection(active.ranges, next),
                effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next))
            }));
            return true;
        };
    }
    var clearSnippet = function (ref) {
        var state = ref.state;
        var dispatch = ref.dispatch;

        var active = state.field(snippetState, false);
        if (!active)
            { return false; }
        dispatch(state.update({ effects: setActive.of(null) }));
        return true;
    };
    var snippetKeymap = precedence(keymap([
        { key: "Tab", run: moveField(1), shift: moveField(-1) },
        { key: "Escape", run: clearSnippet }
    ]), "override");
    /// Create a completion source from an array of snippet specs.
    function completeSnippets(snippets) {
        var parsed = snippets.map(function (s) { return ({ label: s.name || s.keyword, apply: snippet(s.snippet) }); });
        return function (context) {
            var token = context.tokenBefore();
            var isAlpha = /[\w\u00a1-\uffff]/.test(token.text);
            if (!isAlpha && !context.explicit)
                { return null; }
            var options = [];
            for (var i = 0; i < snippets.length; i++) {
                var candidate = snippets[i];
                if (!token.text || context.filter(candidate.keyword, token.text))
                    { options.push(parsed[i]); }
            }
            return { from: token.from, to: context.pos, options: options, filterDownOn: /^[\w\u00a1-\uffff]+$/ };
        };
    }

    /// Denotes how to
    /// [filter](#autocomplete.autocomplete^config.filterType)
    /// completions.
    var FilterType;
    (function (FilterType) {
        /// Only show completions that start with the currently typed text.
        FilterType[FilterType["Start"] = 0] = "Start";
        /// Show completions that have the typed text anywhere in their
        /// content.
        FilterType[FilterType["Include"] = 1] = "Include";
        /// Show completions that include each character of the typed text,
        /// in order (so `gBCR` could complete to `getBoundingClientRect`).
        FilterType[FilterType["Fuzzy"] = 2] = "Fuzzy";
    })(FilterType || (FilterType = {}));
    var AutocompleteContext = function AutocompleteContext(
    /// The editor state that the completion happens in.
    state, 
    /// The position at which the completion happens.
    pos, 
    /// Indicates whether completion was activated explicitly, or
    /// implicitly by typing. The usual way to respond to this is to
    /// only return completions when either there is part of a
    /// completable entity at the cursor, or explicit is true.
    explicit, 
    /// The configured completion filter. Ignoring this won't break
    /// anything, but supporting it is encouraged.
    filterType, 
    /// Indicates whether completion has been configured to be
    /// case-sensitive. Again, this should be taken as a hint, not a
    /// requirement.
    caseSensitive) {
        this.state = state;
        this.pos = pos;
        this.explicit = explicit;
        this.filterType = filterType;
        this.caseSensitive = caseSensitive;
    };
    /// Filter a given completion string against the partial input in
    /// `text`. Will use `this.filterType`, returns `true` when the
    /// completion should be shown.
    AutocompleteContext.prototype.filter = function filter (completion, text, caseSensitive) {
            if ( caseSensitive === void 0 ) caseSensitive = this.caseSensitive;

        if (!caseSensitive) {
            completion = completion.toLowerCase();
            text = text.toLowerCase();
        }
        if (this.filterType == FilterType.Start)
            { return completion.slice(0, text.length) == text; }
        else if (this.filterType == FilterType.Include)
            { return completion.indexOf(text) > -1; }
        // Fuzzy
        for (var i = 0, j = 0; i < text.length; i++) {
            var found = completion.indexOf(text[i], j);
            if (found < 0)
                { return false; }
            j = found + 1;
        }
        return true;
    };
    /// Get the extent, content, and (if there is a token) type of the
    /// token before `this.pos`.
    AutocompleteContext.prototype.tokenBefore = function tokenBefore () {
        var from = this.pos, type = null, text = "";
        var token = this.state.tree.resolve(this.pos, -1);
        if (!token.firstChild && token.start < this.pos) {
            from = token.start;
            type = token.type;
            text = this.state.sliceDoc(from, this.pos);
        }
        return { from: from, to: this.pos, text: text, type: type };
    };
    function canRefilter(result, state, changes) {
        if (!result.filterDownOn)
            { return false; }
        var to = changes ? changes.mapPos(result.to) : result.to, pos = state.selection.primary.head;
        if (pos < to || pos > to + 20)
            { return false; }
        return pos == to || result.filterDownOn.test(state.sliceDoc(to, pos));
    }
    function refilter(result, context) {
        var text = context.state.sliceDoc(result.from, context.pos);
        return {
            from: result.from,
            to: context.pos,
            options: result.options.filter(function (opt) { return context.filter(opt.label, text); }),
            filterDownOn: result.filterDownOn
        };
    }
    var CombinedResult = function CombinedResult(sources, results, options) {
        this.sources = sources;
        this.results = results;
        this.options = options;
    };

    var prototypeAccessors$d = { from: { configurable: true },to: { configurable: true } };
    CombinedResult.create = function create (sources, results) {
        var options = [];
        for (var i = 0, result = (void 0); i < results.length; i++)
            { if (result = results[i]) {
                for (var i$1 = 0, list = result.options; i$1 < list.length; i$1 += 1)
                    {
                        var option = list[i$1];

                        options.push({ completion: option, source: i });
                    }
            } }
        return new CombinedResult(sources, results, options.sort(function (ref, ref$1) {
                var a = ref.completion.label;
                var b = ref$1.completion.label;

                return a < b ? -1 : a == b ? 0 : 1;
            }));
    };
    prototypeAccessors$d.from.get = function () { return this.results.reduce(function (m, r) { return r ? Math.min(m, r.from) : m; }, 1e9); };
    prototypeAccessors$d.to.get = function () { return this.results.reduce(function (m, r) { return r ? Math.max(m, r.to) : m; }, 0); };
    CombinedResult.prototype.map = function map (changes) {
        return new CombinedResult(this.sources, this.results.map(function (r) { return r && Object.assign(Object.assign({}, r), { from: changes.mapPos(r.from), to: changes.mapPos(r.to) }); }), this.options);
    };
    CombinedResult.prototype.refilterAll = function refilterAll (state) {
        var config = state.facet(autocompleteConfig), pos = state.selection.primary.head;
        var context = new AutocompleteContext(state, pos, false, config.filterType, config.caseSensitive);
        return CombinedResult.create(this.sources, this.results.map(function (r) { return r && refilter(r, context); }));
    };

    Object.defineProperties( CombinedResult.prototype, prototypeAccessors$d );
    function retrieveCompletions(state, pending) {
        var config = state.facet(autocompleteConfig), pos = state.selection.primary.head;
        var sources = config.override ? [config.override] : state.languageDataAt("autocomplete", pos);
        var context = new AutocompleteContext(state, pos, pending.explicit, config.filterType, config.caseSensitive);
        return Promise.all(sources.map(function (source) {
            var prevIndex = pending.prev ? pending.prev.result.sources.indexOf(source) : -1;
            var prev = prevIndex < 0 ? null : pending.prev.result.results[prevIndex];
            return (prev && canRefilter(prev, state) && refilter(prev, context)) || source(context);
        })).then(function (results) { return CombinedResult.create(sources, results); });
    }
    var autocompleteConfig = Facet.define({
        combine: function combine(configs) {
            return combineConfig(configs, {
                activateOnTyping: true,
                override: null,
                filterType: FilterType.Start,
                caseSensitive: false
            });
        }
    });
    /// Returns an extension that enables autocompletion.
    function autocomplete(config) {
        if ( config === void 0 ) config = {};

        return [
            activeCompletion,
            autocompleteConfig.of(config),
            autocompletePlugin,
            baseTheme$9,
            tooltips(),
            precedence(keymap([
                { key: "ArrowDown", run: moveCompletion("down") },
                { key: "ArrowUp", run: moveCompletion("up") },
                { key: "PageDown", run: moveCompletion("down", "page") },
                { key: "PageUp", run: moveCompletion("up", "page") },
                { key: "Enter", run: acceptCompletion }
            ]), "override")
        ];
    }
    function moveCompletion(dir, by) {
        return function (view) {
            var active = view.state.field(activeCompletion);
            if (!(active instanceof ActiveCompletion) || Date.now() - active.timeStamp < CompletionInteractMargin)
                { return false; }
            var step = 1, tooltip;
            if (by == "page" && (tooltip = view.dom.querySelector(".cm-tooltip-autocomplete")))
                { step = Math.max(2, Math.floor(tooltip.offsetHeight / tooltip.firstChild.offsetHeight)); }
            var selected = active.selected + step * (dir == "up" ? -1 : 1);
            var ref = active.result.options;
            var length = ref.length;
            if (selected < 0)
                { selected = by == "page" ? 0 : length - 1; }
            else if (selected >= length)
                { selected = by == "page" ? length - 1 : 0; }
            view.dispatch({ effects: selectCompletion.of(selected) });
            return true;
        };
    }
    var CompletionInteractMargin = 75;
    function acceptCompletion(view) {
        var active = view.state.field(activeCompletion);
        if (!(active instanceof ActiveCompletion) || Date.now() - active.timeStamp < CompletionInteractMargin)
            { return false; }
        applyCompletion(view, active.result, active.selected);
        return true;
    }
    /// Explicitly start autocompletion.
    var startCompletion = function (view) {
        var active = view.state.field(activeCompletion, false);
        if (active === undefined)
            { return false; }
        if (active instanceof ActiveCompletion || (active instanceof PendingCompletion && active.explicit))
            { return false; }
        view.dispatch({ effects: toggleCompletion.of(true) });
        return true;
    };
    function applyCompletion(view, combined, index) {
        var option = combined.options[index];
        var apply = option.completion.apply || option.completion.label;
        var result = combined.results[option.source];
        if (typeof apply == "string") {
            view.dispatch({
                changes: { from: result.from, to: result.to, insert: apply },
                selection: { anchor: result.from + apply.length }
            });
        }
        else {
            apply(view, result, option.completion);
        }
    }
    /// Close the currently active completion.
    var closeCompletion = function (view) {
        var active = view.state.field(activeCompletion, false);
        if (active == null)
            { return false; }
        view.dispatch({ effects: toggleCompletion.of(false) });
        return true;
    };
    /// Basic keybindings for autocompletion.
    ///
    ///  - Ctrl-Space (Cmd-Space on macOS): [`startCompletion`](#autocomplete.startCompletion)
    ///  - Escape: [`closeCompletion`](#autocomplete.closeCompletion)
    var autocompleteKeymap = [
        { key: "Mod-Space", run: startCompletion },
        { key: "Escape", run: closeCompletion }
    ];
    var openCompletion = StateEffect.define();
    var toggleCompletion = StateEffect.define();
    var selectCompletion = StateEffect.define();
    function touchesCompletion(tr, completion) {
        return completion instanceof ActiveCompletion ? tr.changes.touchesRange(completion.result.from, completion.result.to)
            : tr.changes.touchesRange(tr.state.selection.primary.head);
    }
    var activeCompletion = StateField.define({
        create: function create() { return null; },
        update: function update(value, tr) {
            var event = tr.annotation(Transaction.userEvent);
            if (event == "input" && value instanceof ActiveCompletion &&
                value.result.results.every(function (r) { return !r || canRefilter(r, tr.state, tr.changes); })) {
                value = new ActiveCompletion(value.result.map(tr.changes).refilterAll(tr.state), 0, value.timeStamp);
            }
            else if (event == "input" && (value || tr.state.facet(autocompleteConfig).activateOnTyping) ||
                event == "delete" && value) {
                var prev = value instanceof ActiveCompletion ? value : value instanceof PendingCompletion ? value.prev : null;
                value = new PendingCompletion(prev, value instanceof PendingCompletion ? value.explicit : false);
            }
            else if (value && (tr.selection || tr.docChanged && touchesCompletion(tr, value))) {
                // Clear on selection changes or changes that touch the completion
                value = null;
            }
            else if (tr.docChanged && value instanceof ActiveCompletion) {
                value = new ActiveCompletion(value.result.map(tr.changes), value.selected, value.timeStamp);
            }
            for (var i = 0, list = tr.effects; i < list.length; i += 1) {
                var effect = list[i];

                if (effect.is(openCompletion))
                    { value = new ActiveCompletion(effect.value, 0); }
                else if (effect.is(toggleCompletion))
                    { value = effect.value ? new PendingCompletion(null, true) : null; }
                else if (effect.is(selectCompletion) && value instanceof ActiveCompletion)
                    { value = new ActiveCompletion(value.result, effect.value, value.timeStamp, value.id, value.tooltip); }
            }
            return value;
        },
        provide: [
            showTooltip.nFrom(function (active) { return active instanceof ActiveCompletion ? active.tooltip : none$6; }),
            EditorView.contentAttributes.from(function (active) { return active instanceof ActiveCompletion ? active.attrs : baseAttrs; })
        ]
    });
    var baseAttrs = { "aria-autocomplete": "list" }, none$6 = [];
    var ActiveCompletion = function ActiveCompletion(result, selected, timeStamp, id, tooltip) {
        if ( timeStamp === void 0 ) timeStamp = Date.now();
        if ( id === void 0 ) id = "cm-ac-" + Math.floor(Math.random() * 1679616).toString(36);
        if ( tooltip === void 0 ) tooltip = [{
            pos: result.from,
            style: "autocomplete",
            create: completionTooltip(result, id)
        }];

        this.result = result;
        this.selected = selected;
        this.timeStamp = timeStamp;
        this.id = id;
        this.tooltip = tooltip;
        this.attrs = {
            "aria-autocomplete": "list",
            "aria-activedescendant": this.id + "-" + this.selected,
            "aria-owns": this.id
        };
    };
    var PendingCompletion = function PendingCompletion(prev, explicit) {
        this.prev = prev;
        this.explicit = explicit;
    };
    function createListBox(result, id) {
        var ul = document.createElement("ul");
        ul.id = id;
        ul.setAttribute("role", "listbox");
        ul.setAttribute("aria-expanded", "true");
        for (var i = 0; i < result.options.length; i++) {
            var li = ul.appendChild(document.createElement("li"));
            li.id = id + "-" + i;
            li.innerText = result.options[i].completion.label;
            li.setAttribute("role", "option");
        }
        return ul;
    }
    // We allocate a new function instance every time the completion
    // changes to force redrawing/repositioning of the tooltip
    function completionTooltip(result, id) {
        return function (view) {
            var list = createListBox(result, id);
            list.addEventListener("click", function (e) {
                var index = 0, dom = e.target;
                for (;;) {
                    dom = dom.previousSibling;
                    if (!dom)
                        { break; }
                    index++;
                }
                if (index < result.options.length)
                    { applyCompletion(view, result, index); }
            });
            function updateSel(view) {
                var cur = view.state.field(activeCompletion);
                if (cur instanceof ActiveCompletion)
                    { updateSelectedOption(list, cur.selected); }
            }
            return {
                dom: list,
                mount: updateSel,
                update: function update(update$1) {
                    if (update$1.state.field(activeCompletion) != update$1.prevState.field(activeCompletion))
                        { updateSel(update$1.view); }
                }
            };
        };
    }
    function updateSelectedOption(list, selected) {
        var set = null;
        for (var opt = list.firstChild, i = 0; opt; opt = opt.nextSibling, i++) {
            if (i == selected) {
                if (!opt.hasAttribute("aria-selected")) {
                    opt.setAttribute("aria-selected", "true");
                    set = opt;
                }
            }
            else {
                if (opt.hasAttribute("aria-selected"))
                    { opt.removeAttribute("aria-selected"); }
            }
        }
        if (set)
            { scrollIntoView(list, set); }
    }
    function scrollIntoView(container, element) {
        var parent = container.getBoundingClientRect();
        var self = element.getBoundingClientRect();
        if (self.top < parent.top)
            { container.scrollTop -= parent.top - self.top; }
        else if (self.bottom > parent.bottom)
            { container.scrollTop += self.bottom - parent.bottom; }
    }
    var DebounceTime = 100;
    var autocompletePlugin = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.view = view;
            this.stateVersion = 0;
            this.debounce = -1;
        }
        anonymous.prototype.update = function update (update$1) {
            var this$1 = this;

            if (!update$1.docChanged && !update$1.selectionSet &&
                update$1.prevState.field(activeCompletion) == update$1.state.field(activeCompletion))
                { return; }
            if (update$1.docChanged || update$1.selectionSet)
                { this.stateVersion++; }
            if (this.debounce > -1)
                { clearTimeout(this.debounce); }
            var active = update$1.state.field(activeCompletion);
            this.debounce = active instanceof PendingCompletion
                ? setTimeout(function () { return this$1.startUpdate(active); }, DebounceTime) : -1;
        };
        anonymous.prototype.startUpdate = function startUpdate (pending) {
            var this$1 = this;

            this.debounce = -1;
            var ref = this;
            var view = ref.view;
            var stateVersion = ref.stateVersion;
            retrieveCompletions(view.state, pending).then(function (result) {
                if (this$1.stateVersion != stateVersion || result.options.length == 0)
                    { return; }
                view.dispatch({ effects: openCompletion.of(result) });
            }).catch(function (e) { return logException(view.state, e); });
        };

        return anonymous;
    }()));
    /// Given a a fixed array of options, return an autocompleter that
    /// compares those options to the current
    /// [token](#autocomplete.AutocompleteContext.tokenBefore) and returns
    /// the matching ones.
    function completeFromList(list) {
        var options = list.map(function (o) { return typeof o == "string" ? { label: o } : o; });
        var filterDownOn = options.every(function (o) { return /^\w+$/.test(o.label); }) ? /^\w+$/ : undefined;
        return function (context) {
            var token = context.tokenBefore();
            return { from: token.from, to: token.to,
                options: options.filter(function (o) { return context.filter(o.label, token.text); }),
                filterDownOn: filterDownOn };
        };
    }

    var _m19 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AutocompleteContext: AutocompleteContext,
        get FilterType () { return FilterType; },
        autocomplete: autocomplete,
        autocompleteKeymap: autocompleteKeymap,
        closeCompletion: closeCompletion,
        completeFromList: completeFromList,
        completeSnippets: completeSnippets,
        snippet: snippet,
        startCompletion: startCompletion
    });

    /// Comments or uncomments the current `SelectionRange` using line-comments.
    /// The line-comment token is defined on a language basis.
    var toggleLineComment = function (target) {
        return dispatch(toggleLineCommentWithOption(CommentOption.Toggle), target);
    };
    /// Comments the current `SelectionRange` using line-comments.
    /// The line-comment token is defined on a language basis.
    var lineComment = function (target) {
        return dispatch(toggleLineCommentWithOption(CommentOption.OnlyComment), target);
    };
    /// Uncomments the current `SelectionRange` using line-comments.
    /// The line-comment token is defined on a language basis.
    var lineUncomment = function (target) {
        return dispatch(toggleLineCommentWithOption(CommentOption.OnlyUncomment), target);
    };
    /// Comments or uncomments the current `SelectionRange` using block-comments.
    /// The block-comment tokens are defined on a language basis.
    var toggleBlockComment = function (target) {
        return dispatch(toggleBlockCommentWithOption(CommentOption.Toggle), target);
    };
    /// Comments the current `SelectionRange` using block-comments.
    /// The block-comment tokens are defined on a language basis.
    var blockComment = function (target) {
        return dispatch(toggleBlockCommentWithOption(CommentOption.OnlyComment), target);
    };
    /// Uncomments the current `SelectionRange` using block-comments.
    /// The block-comment tokens are defined on a language basis.
    var blockUncomment = function (target) {
        return dispatch(toggleBlockCommentWithOption(CommentOption.OnlyUncomment), target);
    };
    /// Default key bindings for this package.
    ///
    ///  - Ctrl-/ (Cmd-/ on macOS): [\`toggleLineComment\`](#comment.toggleLineComment).
    ///  - Shift-Alt-a: [\`toggleBlockComment\`](#comment.toggleBlockComment).
    var commentKeymap = [
        { key: "Mod-/", run: toggleLineComment },
        { key: "Alt-A", run: toggleBlockComment }
    ];
    function dispatch(cmd, target) {
        var tr = cmd(target.state);
        if (!tr)
            { return false; }
        target.dispatch(tr);
        return true;
    }
    var CommentOption;
    (function (CommentOption) {
        CommentOption[CommentOption["Toggle"] = 0] = "Toggle";
        CommentOption[CommentOption["OnlyComment"] = 1] = "OnlyComment";
        CommentOption[CommentOption["OnlyUncomment"] = 2] = "OnlyUncomment";
    })(CommentOption || (CommentOption = {}));
    function getConfig(state, pos) {
        if ( pos === void 0 ) pos = state.selection.primary.head;

        return state.languageDataAt("commentTokens", pos)[0] || {};
    }
    var toggleBlockCommentWithOption = function (option) { return function (state) {
        var config = getConfig(state);
        return config.block ? new BlockCommenter(config.block.open, config.block.close).toggle(option, state) : null;
    }; };
    var toggleLineCommentWithOption = function (option) { return function (state) {
        var config = getConfig(state);
        return config.line ? new LineCommenter(config.line).toggle(option, state) : null;
    }; };
    // This class performs toggle, comment and uncomment
    // of block comments in languages that support them.
    // The `open` and `close` arguments refer to the open and close
    // tokens of which this `BlockCommenter` is made up.
    var BlockCommenter = function BlockCommenter(open, close, margin) {
        if ( margin === void 0 ) margin = " ";

        this.open = open;
        this.close = close;
        this.margin = margin;
    };
    BlockCommenter.prototype.toggle = function toggle (option, state) {
            var this$1 = this;

        var selectionCommented = this.isSelectionCommented(state);
        if (selectionCommented !== null) {
            if (option !== CommentOption.OnlyComment) {
                return state.update({
                    changes: selectionCommented.map(function (ref) {
                            var open = ref.open;
                            var close = ref.close;

                            return [
                        { from: open.pos - this$1.open.length, to: open.pos + open.margin },
                        { from: close.pos - close.margin, to: close.pos + this$1.close.length }
                    ];
                    })
                });
            }
        }
        else {
            if (option !== CommentOption.OnlyUncomment) {
                return state.update(state.changeByRange(function (range) {
                    var shift = (this$1.open + this$1.margin).length;
                    return {
                        changes: [{ from: range.from, insert: this$1.open + this$1.margin },
                            { from: range.to, insert: this$1.margin + this$1.close }],
                        range: EditorSelection.range(range.anchor + shift, range.head + shift)
                    };
                }));
            }
        }
        return null;
    };
    /// Determines whether all selection ranges in `state` are block-commented.
    BlockCommenter.prototype.isSelectionCommented = function isSelectionCommented (state) {
        var result = [];
        for (var i = 0, list = state.selection.ranges; i < list.length; i += 1) {
            var range = list[i];

                var x = this.isRangeCommented(state, range);
            if (x === null)
                { return null; }
            result.push(x);
        }
        return result;
    };
    /// Determines if the `range` is block-commented in the given `state`.
    /// The `range` must be a valid range in `state`.
    BlockCommenter.prototype.isRangeCommented = function isRangeCommented (state, range) {
        var textBefore = state.sliceDoc(range.from - SearchMargin, range.from);
        var textAfter = state.sliceDoc(range.to, range.to + SearchMargin);
        var spaceBefore = /\s*$/.exec(textBefore)[0].length, spaceAfter = /^\s*/.exec(textAfter)[0].length;
        var beforeOff = textBefore.length - spaceBefore;
        if (textBefore.slice(beforeOff - this.open.length, beforeOff) == this.open &&
            textAfter.slice(spaceAfter, spaceAfter + this.close.length) == this.close) {
            return { open: { pos: range.from - spaceBefore, margin: spaceBefore && 1 },
                close: { pos: range.to + spaceAfter, margin: spaceAfter && 1 } };
        }
        var startText, endText;
        if (range.to - range.from <= 2 * SearchMargin) {
            startText = endText = state.sliceDoc(range.from, range.to);
        }
        else {
            startText = state.sliceDoc(range.from, range.from + SearchMargin);
            endText = state.sliceDoc(range.to - SearchMargin, range.to);
        }
        var startSpace = /^\s*/.exec(startText)[0].length, endSpace = /\s*$/.exec(endText)[0].length;
        var endOff = endText.length - endSpace - this.close.length;
        if (startText.slice(startSpace, startSpace + this.open.length) == this.open &&
            endText.slice(endOff, endOff + this.close.length) == this.close) {
            return { open: { pos: range.from + startSpace + this.open.length,
                    margin: /\s/.test(startText.charAt(startSpace + this.open.length)) ? 1 : 0 },
                close: { pos: range.to - endSpace - this.close.length,
                    margin: /\s/.test(endText.charAt(endOff - 1)) ? 1 : 0 } };
        }
        return null;
    };
    var SearchMargin = 50;
    // This class performs toggle, comment and uncomment
    // of line comments in languages that support them.
    // The `lineCommentToken` argument refer to the token of
    // which this `LineCommenter` is made up.
    var LineCommenter = function LineCommenter(lineCommentToken, margin) {
        if ( margin === void 0 ) margin = " ";

        this.lineCommentToken = lineCommentToken;
        this.margin = margin;
    };
    LineCommenter.prototype.toggle = function toggle (option, state) {
        var linesAcrossSelection = [];
        var linesAcrossRange = {};
        for (var i = 0; i < state.selection.ranges.length; i++) {
            var lines = getLinesInRange(state.doc, state.selection.ranges[i]);
            linesAcrossSelection.push.apply(linesAcrossSelection, lines);
            linesAcrossRange[i] = lines;
        }
        var column = this.isRangeCommented(state, linesAcrossSelection);
        if (column.isRangeLineSkipped) {
            if (option != CommentOption.OnlyComment) {
                var changes = [];
                for (var i$1 = 0; i$1 < state.selection.ranges.length; i$1++) {
                    var lines$1 = linesAcrossRange[i$1];
                    for (var i$3 = 0, list = lines$1; i$3 < list.length; i$3 += 1) {
                        var line = list[i$3];

                            if (lines$1.length > 1 && column.isLineSkipped[line.number])
                            { continue; }
                        var pos = line.from + column.minCol;
                        var posAfter = column.minCol + this.lineCommentToken.length;
                        var marginLen = line.slice(posAfter, posAfter + 1) == " " ? 1 : 0;
                        changes.push({ from: pos, to: pos + this.lineCommentToken.length + marginLen });
                    }
                }
                return state.update({ changes: changes });
            }
        }
        else {
            if (option != CommentOption.OnlyUncomment) {
                var changes$1 = [];
                for (var i$2 = 0; i$2 < state.selection.ranges.length; i$2++) {
                    var lines$2 = linesAcrossRange[i$2];
                    for (var i$4 = 0, list$1 = lines$2; i$4 < list$1.length; i$4 += 1) {
                        var line$1 = list$1[i$4];

                            if (lines$2.length <= 1 || !column.isLineSkipped[line$1.number])
                            { changes$1.push({ from: line$1.from + column.minCol, insert: this.lineCommentToken + this.margin }); }
                    }
                }
                return state.update({ changes: changes$1 });
            }
        }
        return null;
    };
    LineCommenter.prototype.isRangeCommented = function isRangeCommented (_state, lines) {
        var minCol = Infinity;
        var isRangeLineDiscarded = true;
        var isLineSkipped = [];
        for (var i = 0, list = lines; i < list.length; i += 1) {
            var line = list[i];

                var str = line.slice(0, Math.min(line.length, SearchMargin));
            var col = /^\s*/.exec(str)[0].length;
            if ((lines.length == 1 || col < str.length) && col < minCol) {
                minCol = col;
            }
            if (isRangeLineDiscarded && (lines.length == 1 || col < str.length) &&
                str.slice(col, col + this.lineCommentToken.length) != this.lineCommentToken) {
                isRangeLineDiscarded = false;
            }
            isLineSkipped[line.number] = col == str.length;
        }
        return { minCol: minCol, isRangeLineSkipped: isRangeLineDiscarded, isLineSkipped: isLineSkipped };
    };
    // Computes the lines spanned by `range`.
    /// @internal
    function getLinesInRange(doc, range) {
        var line = doc.lineAt(range.from);
        var lines = [];
        while (line.from + line.length < range.to ||
            (line.from <= range.to && range.to <= line.to)) {
            lines.push(line);
            if (line.number + 1 <= doc.lines) {
                line = doc.line(line.number + 1);
            }
            else {
                break;
            }
        }
        return lines;
    }

    var _m20 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        blockComment: blockComment,
        blockUncomment: blockUncomment,
        commentKeymap: commentKeymap,
        lineComment: lineComment,
        lineUncomment: lineUncomment,
        toggleBlockComment: toggleBlockComment,
        toggleLineComment: toggleLineComment
    });

    // Don't compute precise column positions for line offsets above this
    // (since it could get expensive). Assume offset==column for them.
    var MaxOff = 2000;
    function rectangleFor(state, a, b) {
        var startLine = Math.min(a.line, b.line), endLine = Math.max(a.line, b.line);
        var ranges = [];
        if (a.off > MaxOff || b.off > MaxOff || a.col < 0 || b.col < 0) {
            var startOff = Math.min(a.off, b.off), endOff = Math.max(a.off, b.off);
            for (var i = startLine; i <= endLine; i++) {
                var line = state.doc.line(i);
                if (line.length <= endOff)
                    { ranges.push(EditorSelection.range(line.from + startOff, line.to + endOff)); }
            }
        }
        else {
            var startCol = Math.min(a.col, b.col), endCol = Math.max(a.col, b.col);
            for (var i$1 = startLine; i$1 <= endLine; i$1++) {
                var line$1 = state.doc.line(i$1), str = line$1.length > MaxOff ? line$1.slice(0, 2 * endCol) : line$1.slice();
                var start = findColumn(str, 0, startCol, state.tabSize), end = findColumn(str, 0, endCol, state.tabSize);
                if (!start.leftOver)
                    { ranges.push(EditorSelection.range(line$1.from + start.offset, line$1.from + end.offset)); }
            }
        }
        return ranges;
    }
    function absoluteColumn(view, x) {
        var ref = view.coordsAtPos(view.viewport.from);
        return ref ? Math.round(Math.abs((ref.left - x) / view.defaultCharacterWidth)) : -1;
    }
    function getPos(view, event) {
        var offset = view.posAtCoords({ x: event.clientX, y: event.clientY }); // FIXME
        var line = view.state.doc.lineAt(offset), off = offset - line.from;
        var col = off > MaxOff ? -1
            : off == line.length ? absoluteColumn(view, event.clientX)
                : countColumn(line.slice(0, offset - line.from), 0, view.state.tabSize);
        return { line: line.number, col: col, off: off };
    }
    function rectangleSelectionStyle(view, event) {
        var start = getPos(view, event), startSel = view.state.selection;
        return {
            update: function update(update$1) {
                if (update$1.docChanged) {
                    var newStart = update$1.changes.mapPos(update$1.prevState.doc.line(start.line).from);
                    var newLine = update$1.state.doc.lineAt(newStart);
                    start = { line: newLine.number, col: start.col, off: Math.min(start.off, newLine.length) };
                    startSel = startSel.map(update$1.changes);
                }
            },
            get: function get(event, _extend, multiple) {
                var cur = getPos(view, event), ranges = rectangleFor(view.state, start, cur);
                if (!ranges.length)
                    { return startSel; }
                if (multiple)
                    { return EditorSelection.create(ranges.concat(startSel.ranges)); }
                else
                    { return EditorSelection.create(ranges); }
            }
        };
    }
    /// Create an extension that enables rectangular selections. By
    /// default, it will rect to left mouse drag with the alt key held
    /// down. When such a selection occurs, the text within the rectangle
    /// that was dragged over will be selected, as one selection
    /// [range](#state.SelectionRange) per line. You can pass a custom
    /// predicate function, which takes a `mousedown` event and returns
    /// true if it should be used for rectangular selection.
    function rectangularSelection(eventFilter) {
        var filter = eventFilter || (function (e) { return e.altKey && e.button == 0; });
        return EditorView.mouseSelectionStyle.of(function (view, event) { return filter(event) ? rectangleSelectionStyle(view, event) : null; });
    }

    var _m21 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        rectangularSelection: rectangularSelection
    });

    /// Mark lines that have a cursor on them with the \`activeLine\`
    /// theme selector.
    function highlightActiveLine() {
        return [defaultTheme, activeLineHighlighter];
    }
    var lineDeco = Decoration.line({ attributes: { class: themeClass("activeLine") } });
    var activeLineHighlighter = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous(view) {
            this.decorations = this.getDeco(view);
        }
        anonymous.prototype.update = function update (update$1) {
            if (update$1.docChanged || update$1.selectionSet)
                { this.decorations = this.getDeco(update$1.view); }
        };
        anonymous.prototype.getDeco = function getDeco (view) {
            var lastLineStart = -1, deco = [];
            for (var i = 0, list = view.state.selection.ranges; i < list.length; i += 1) {
                var r = list[i];

                if (!r.empty)
                    { continue; }
                var line = view.visualLineAt(r.head);
                if (line.from > lastLineStart) {
                    deco.push(lineDeco.range(line.from));
                    lastLineStart = line.from;
                }
            }
            return Decoration.set(deco);
        };

        return anonymous;
    }())).decorations();
    var defaultHighlightOptions = {
        highlightWordAroundCursor: false,
        minSelectionLength: 1,
        maxMatches: 100
    };
    var highlightConfig = Facet.define({
        combine: function combine(options) {
            return combineConfig(options, defaultHighlightOptions, {
                highlightWordAroundCursor: function (a, b) { return a || b; },
                minSelectionLength: Math.min,
                maxMatches: Math.min
            });
        }
    });
    /// This extension highlights text that matches the selection. It uses
    /// the `selectionMatch` theme selector for the highlighting. When
    /// `highlightWordAroundCursor` is enabled, the word at the cursor
    /// itself will be highlighted with `selectionMatch.main`.
    function highlightSelectionMatches(options) {
        var ext = [defaultTheme, matchHighlighter];
        if (options)
            { ext.push(highlightConfig.of(options)); }
        return ext;
    }
    function wordAt(doc, pos, check) {
        var line = doc.lineAt(pos);
        var from = pos - line.from, to = pos - line.from;
        while (from > 0) {
            var prev = line.findClusterBreak(from, false);
            if (check(line.slice(prev, from)) != CharCategory.Word)
                { break; }
            from = prev;
        }
        while (to < line.length) {
            var next = line.findClusterBreak(to, true);
            if (check(line.slice(to, next)) != CharCategory.Word)
                { break; }
            to = next;
        }
        return from == to ? null : line.slice(from, to);
    }
    var matchDeco = Decoration.mark({ class: themeClass("selectionMatch") });
    var mainMatchDeco = Decoration.mark({ class: themeClass("selectionMatch.main") });
    var matchHighlighter = ViewPlugin.fromClass(/*@__PURE__*/(function () {
        function anonymous$1(view) {
            this.decorations = this.getDeco(view);
        }
        anonymous$1.prototype.update = function update (update$1) {
            if (update$1.selectionSet || update$1.docChanged)
                { this.decorations = this.getDeco(update$1.view); }
        };
        anonymous$1.prototype.getDeco = function getDeco (view) {
            var conf = view.state.facet(highlightConfig);
            var state = view.state;
            var sel = state.selection;
            if (sel.ranges.length > 1)
                { return Decoration.none; }
            var range = sel.primary, query, check = null;
            if (range.empty) {
                if (!conf.highlightWordAroundCursor)
                    { return Decoration.none; }
                check = state.charCategorizer(range.head);
                query = wordAt(state.doc, range.head, check);
                if (!query)
                    { return Decoration.none; }
            }
            else {
                var len = range.to - range.from;
                if (len < conf.minSelectionLength || len > 200)
                    { return Decoration.none; }
                query = state.sliceDoc(range.from, range.to).trim();
                if (!query)
                    { return Decoration.none; }
            }
            var deco = [];
            for (var i = 0, list = view.visibleRanges; i < list.length; i += 1) {
                var part = list[i];

                var cursor = new SearchCursor(state.doc, query, part.from, part.to);
                while (!cursor.next().done) {
                    var ref = cursor.value;
                    var from = ref.from;
                    var to = ref.to;
                    if (!check || ((from == 0 || check(state.sliceDoc(from - 1, from)) != CharCategory.Word) &&
                        (to == state.doc.length || check(state.sliceDoc(to, to + 1)) != CharCategory.Word))) {
                        if (check && from <= range.from && to >= range.to)
                            { deco.push(mainMatchDeco.range(from, to)); }
                        else if (from >= range.to || to <= range.from)
                            { deco.push(matchDeco.range(from, to)); }
                        if (deco.length > conf.maxMatches)
                            { return Decoration.none; }
                    }
                }
            }
            return Decoration.set(deco);
        };

        return anonymous$1;
    }())).decorations();
    var defaultTheme = EditorView.baseTheme({
        "activeLine@light": { backgroundColor: "#e8f2ff" },
        "activeLine@dark": { backgroundColor: "#223039" },
        "selectionMatch": { backgroundColor: "#cfb" }
    });

    var _m22 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        highlightActiveLine: highlightActiveLine,
        highlightSelectionMatches: highlightSelectionMatches
    });

    /// This is an extension value that just pulls together a whole lot of
    /// extensions that you might want in a basic editor. It is meant as a
    /// convenient helper to quickly set up CodeMirror without installing
    /// and importing a lot of packages.
    ///
    /// Specifically, it includes...
    ///
    ///  - [the default command bindings](#commands.defaultKeymap)
    ///  - [line numbers](#gutter.lineNumbers)
    ///  - [special character highlighting](#view.highlightSpecialChars)
    ///  - [the undo history](#history.history)
    ///  - [a fold gutter](#fold.foldGutter)
    ///  - [multiple selection support](#view.multipleSelections)
    ///  - [the default highlighter](#highlight.defaultHighlighter)
    ///  - [bracket matching](#matchbrackets.bracketMatching)
    ///  - [bracket closing](#closebrackets.closeBrackets)
    ///  - [autocompletion](#autocomplete.autocomplete)
    ///  - [rectangular selection](#rectangular-selection.rectangularSelection)
    ///  - [active line highlighting](#highlight-selection.highlightActiveLine)
    ///  - [selection match highlighting](#highlight-selection.highlightSelectionMatches)
    ///  - [search](#search.searchKeymap)
    ///  - [go to line](#goto-line.gotoLineKeymap)
    ///  - [commenting](#comment.commentKeymap)
    ///  - [linting](#lint.lintKeymap)
    ///
    /// (You'll probably want to add some language package to your setup
    /// too.)
    ///
    /// This package does not allow customization. The idea is that, once
    /// you decide you want to configure your editor more precisely, you
    /// take this package's source (which is just a bunch of imports and
    /// an array literal), copy it into your own code, and adjust it as
    /// desired.
    var basicSetup = [
        lineNumbers(),
        highlightSpecialChars(),
        history(),
        foldGutter(),
        multipleSelections(),
        defaultHighlighter,
        bracketMatching(),
        closeBrackets(),
        autocomplete(),
        rectangularSelection(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap(defaultKeymap.concat( searchKeymap,
            historyKeymap,
            foldKeymap,
            commentKeymap,
            gotoLineKeymap,
            autocompleteKeymap,
            lintKeymap
        ))
    ];

    var _m23 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        basicSetup: basicSetup,
        EditorView: EditorView,
        EditorState: EditorState
    });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /// A parse stack. These are used internally by the parser to track
    /// parsing progress. They also provide some properties and methods
    /// that external code such as a tokenizer can use to get information
    /// about the parse state.
    var Stack = /** @class */ (function () {
        /// @internal
        function Stack(
        // A group of values that the stack will share with all
        // split instances
        ///@internal
        cx, 
        // Holds state, pos, value stack pos (15 bits array index, 15 bits
        // buffer index) triplets for all but the top state
        /// @internal
        stack, 
        // The current parse state
        /// @internal
        state, 
        // The position at which the next reduce should take place. This
        // can be less than `this.pos` when skipped expressions have been
        // added to the stack (which should be moved outside of the next
        // reduction)
        /// @internal
        reducePos, 
        // The input position up to which this stack has parsed.
        pos, 
        // The amount of error-recovery that happened on this stack
        /// @internal
        recovered, 
        // The output buffer. Holds (type, start, end, size) quads
        // representing nodes created by the parser, where `size` is
        // amount of buffer array entries covered by this node.
        /// @internal
        buffer, 
        // The base offset of the buffer. When stacks are split, the split
        // instance shared the buffer history with its parent up to
        // `bufferBase`, which is the absolute offset (including the
        // offset of previous splits) into the buffer at which this stack
        // starts writing.
        /// @internal
        bufferBase, 
        // A parent stack from which this was split off, if any. This is
        // set up so that it always points to a stack that has some
        // additional buffer content, never to a stack with an equal
        // `bufferBase`.
        /// @internal
        parent) {
            this.cx = cx;
            this.stack = stack;
            this.state = state;
            this.reducePos = reducePos;
            this.pos = pos;
            this.recovered = recovered;
            this.buffer = buffer;
            this.bufferBase = bufferBase;
            this.parent = parent;
        }
        /// @internal
        Stack.prototype.toString = function () {
            return "[" + this.stack.filter(function (_, i) { return i % 3 == 0; }).concat(this.state) + "]@" + this.pos + (this.recovered ? "!" + this.recovered : "");
        };
        // Start an empty stack
        /// @internal
        Stack.start = function (cx, state, pos) {
            if (pos === void 0) { pos = 0; }
            return new Stack(cx, [], state, pos, pos, 0, [], 0, null);
        };
        // Push a state onto the stack, tracking its start position as well
        // as the buffer base at that point.
        /// @internal
        Stack.prototype.pushState = function (state, start) {
            this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
            this.state = state;
        };
        // Apply a reduce action
        /// @internal
        Stack.prototype.reduce = function (action) {
            var depth = action >> 19 /* ReduceDepthShift */, type = action & 65535 /* ValueMask */;
            var parser = this.cx.parser;
            if (depth == 0) {
                // Zero-depth reductions are a special case—they add stuff to
                // the stack without popping anything off.
                if (type < parser.minRepeatTerm)
                    { this.storeNode(type, this.reducePos, this.reducePos, 4, true); }
                this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
                return;
            }
            // Find the base index into `this.stack`, content after which will
            // be dropped. Note that with `StayFlag` reductions we need to
            // consume two extra frames (the dummy parent node for the skipped
            // expression and the state that we'll be staying in, which should
            // be moved to `this.state`).
            var base = this.stack.length - ((depth - 1) * 3) - (action & 262144 /* StayFlag */ ? 6 : 0);
            var start = this.stack[base - 2];
            var bufferBase = this.stack[base - 1], count = this.bufferBase + this.buffer.length - bufferBase;
            if (type < parser.minRepeatTerm || // Normal term
                (action & 131072 /* RepeatFlag */) || // Inner repeat marker
                (type > parser.maxNode && type <= parser.maxRepeatWrap)) { // Repeat wrapper
                var pos = parser.stateFlag(this.state, 1 /* Skipped */) ? this.pos : this.reducePos;
                this.storeNode(type, start, pos, count + 4, true);
            }
            if (action & 262144 /* StayFlag */) {
                this.state = this.stack[base];
            }
            else {
                var baseStateID = this.stack[base - 3];
                this.state = parser.getGoto(baseStateID, type, true);
            }
            while (this.stack.length > base)
                { this.stack.pop(); }
        };
        // Shift a value into the buffer
        /// @internal
        Stack.prototype.storeNode = function (term, start, end, size, isReduce) {
            if (size === void 0) { size = 4; }
            if (isReduce === void 0) { isReduce = false; }
            if (term == 0 /* Err */) { // Try to omit/merge adjacent error nodes
                var cur = this, top = this.buffer.length;
                if (top == 0 && cur.parent) {
                    top = cur.bufferBase - cur.parent.bufferBase;
                    cur = cur.parent;
                }
                if (top > 0 && cur.buffer[top - 4] == 0 /* Err */ && cur.buffer[top - 1] > -1) {
                    if (start == end)
                        { return; }
                    if (cur.buffer[top - 2] >= start) {
                        cur.buffer[top - 2] = end;
                        return;
                    }
                }
            }
            if (!isReduce || this.pos == end) { // Simple case, just append
                this.buffer.push(term, start, end, size);
            }
            else { // There may be skipped nodes that have to be moved forward
                var index = this.buffer.length;
                if (index > 0 && this.buffer[index - 4] != 0 /* Err */)
                    { while (index > 0 && this.buffer[index - 2] > end) {
                        // Move this record forward
                        this.buffer[index] = this.buffer[index - 4];
                        this.buffer[index + 1] = this.buffer[index - 3];
                        this.buffer[index + 2] = this.buffer[index - 2];
                        this.buffer[index + 3] = this.buffer[index - 1];
                        index -= 4;
                        if (size > 4)
                            { size -= 4; }
                    } }
                this.buffer[index] = term;
                this.buffer[index + 1] = start;
                this.buffer[index + 2] = end;
                this.buffer[index + 3] = size;
            }
        };
        // Apply a shift action
        /// @internal
        Stack.prototype.shift = function (action, next, nextEnd) {
            if (action & 131072 /* GotoFlag */) {
                this.pushState(action & 65535 /* ValueMask */, this.pos);
            }
            else if ((action & 262144 /* StayFlag */) == 0) { // Regular shift
                var start = this.pos, nextState = action, parser = this.cx.parser;
                if (nextEnd > this.pos || next <= parser.maxNode) {
                    this.pos = nextEnd;
                    if (!parser.stateFlag(nextState, 1 /* Skipped */))
                        { this.reducePos = nextEnd; }
                }
                this.pushState(nextState, start);
                if (next <= parser.maxNode)
                    { this.buffer.push(next, start, nextEnd, 4); }
            }
            else { // Shift-and-stay, which means this is a skipped token
                if (next <= this.cx.parser.maxNode)
                    { this.buffer.push(next, this.pos, nextEnd, 4); }
                this.pos = nextEnd;
            }
        };
        // Apply an action
        /// @internal
        Stack.prototype.apply = function (action, next, nextEnd) {
            if (action & 65536 /* ReduceFlag */)
                { this.reduce(action); }
            else
                { this.shift(action, next, nextEnd); }
        };
        // Add a prebuilt node into the buffer. This may be a reused node or
        // the result of running a nested parser.
        /// @internal
        Stack.prototype.useNode = function (value, next) {
            var index = this.cx.reused.length - 1;
            if (index < 0 || this.cx.reused[index] != value) {
                this.cx.reused.push(value);
                index++;
            }
            var start = this.pos;
            this.reducePos = this.pos = start + value.length;
            this.pushState(next, start);
            this.buffer.push(index, start, this.reducePos, -1 /* size < 0 means this is a reused value */);
        };
        // Split the stack. Due to the buffer sharing and the fact
        // that `this.stack` tends to stay quite shallow, this isn't very
        // expensive.
        /// @internal
        Stack.prototype.split = function () {
            var parent = this;
            var off = parent.buffer.length;
            // Because the top of the buffer (after this.pos) may be mutated
            // to reorder reductions and skipped tokens, and shared buffers
            // should be immutable, this copies any outstanding skipped tokens
            // to the new buffer, and puts the base pointer before them.
            while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
                { off -= 4; }
            var buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
            // Make sure parent points to an actual parent with content, if there is such a parent.
            while (parent && base == parent.bufferBase)
                { parent = parent.parent; }
            return new Stack(this.cx, this.stack.slice(), this.state, this.reducePos, this.pos, this.recovered, buffer, base, parent);
        };
        // Try to recover from an error by 'deleting' (ignoring) one token.
        /// @internal
        Stack.prototype.recoverByDelete = function (next, nextEnd) {
            var isNode = next <= this.cx.parser.maxNode;
            if (isNode)
                { this.storeNode(next, this.pos, nextEnd); }
            this.storeNode(0 /* Err */, this.pos, nextEnd, isNode ? 8 : 4);
            this.pos = this.reducePos = nextEnd;
            this.recovered += 2 /* Token */;
        };
        /// Check if the given term would be able to be shifted (optionally
        /// after some reductions) on this stack. This can be useful for
        /// external tokenizers that want to make sure they only provide a
        /// given token when it applies.
        Stack.prototype.canShift = function (term) {
            for (var sim = new SimulatedStack(this);;) {
                var action = this.cx.parser.stateSlot(sim.top, 4 /* DefaultReduce */) || this.cx.parser.hasAction(sim.top, term);
                if ((action & 65536 /* ReduceFlag */) == 0)
                    { return true; }
                if (action == 0)
                    { return false; }
                sim.reduce(action);
            }
        };
        Object.defineProperty(Stack.prototype, "ruleStart", {
            /// Find the start position of the rule that is currently being parsed.
            get: function () {
                var force = this.cx.parser.stateSlot(this.state, 5 /* ForcedReduce */);
                if (!(force & 65536 /* ReduceFlag */))
                    { return 0; }
                var base = this.stack.length - (3 * (force >> 19 /* ReduceDepthShift */));
                return this.stack[base + 1];
            },
            enumerable: true,
            configurable: true
        });
        /// Find the start position of the innermost instance of any of the
        /// given term types, or return `-1` when none of them are found.
        ///
        /// **Note:** this is only reliable when there is at least some
        /// state that unambiguously matches the given rule on the stack.
        /// I.e. if you have a grammar like this, where the difference
        /// between `a` and `b` is only apparent at the third token:
        ///
        ///     a { b | c }
        ///     b { "x" "y" "x" }
        ///     c { "x" "y" "z" }
        ///
        /// Then a parse state after `"x"` will not reliably tell you that
        /// `b` is on the stack. You _can_ pass `[b, c]` to reliably check
        /// for either of those two rules (assuming that `a` isn't part of
        /// some rule that includes other things starting with `"x"`).
        Stack.prototype.startOf = function (types) {
            var state = this.state, frame = this.stack.length, parser = this.cx.parser;
            for (;;) {
                var force = parser.stateSlot(state, 5 /* ForcedReduce */);
                var depth = force >> 19 /* ReduceDepthShift */, term = force & 65535 /* ValueMask */;
                if (types.indexOf(term) > -1) {
                    var base = frame - (3 * (force >> 19 /* ReduceDepthShift */));
                    return this.stack[base + 1];
                }
                if (frame == 0)
                    { return -1; }
                if (depth == 0) {
                    frame -= 3;
                    state = this.stack[frame];
                }
                else {
                    frame -= 3 * (depth - 1);
                    state = parser.getGoto(this.stack[frame - 3], term, true);
                }
            }
        };
        // Apply up to Recover.MaxNext recovery actions that conceptually
        // inserts some missing token or rule.
        /// @internal
        Stack.prototype.recoverByInsert = function (next) {
            var _this = this;
            var nextStates = this.cx.parser.nextStates(this.state);
            if (nextStates.length > 4 /* MaxNext */) {
                var best = nextStates.filter(function (s) { return s != _this.state && _this.cx.parser.hasAction(s, next); });
                for (var i = 0; best.length < 4 /* MaxNext */ && i < nextStates.length; i++)
                    { if (best.indexOf(nextStates[i]) < 0)
                        { best.push(nextStates[i]); } }
                nextStates = best;
            }
            var result = [];
            for (var i = 0; i < nextStates.length && result.length < 4 /* MaxNext */; i++) {
                if (nextStates[i] == this.state)
                    { continue; }
                var stack = this.split();
                stack.storeNode(0 /* Err */, stack.pos, stack.pos, 4, true);
                stack.pushState(nextStates[i], this.pos);
                stack.recovered += 2 /* Token */;
                result.push(stack);
            }
            return result;
        };
        // Force a reduce, if possible. Return false if that can't
        // be done.
        /// @internal
        Stack.prototype.forceReduce = function () {
            var reduce = this.cx.parser.stateSlot(this.state, 5 /* ForcedReduce */);
            if ((reduce & 65536 /* ReduceFlag */) == 0)
                { return false; }
            if (!this.cx.parser.validAction(this.state, reduce)) {
                this.storeNode(0 /* Err */, this.reducePos, this.reducePos, 4, true);
                this.recovered += 1 /* Reduce */;
            }
            this.reduce(reduce);
            return true;
        };
        /// @internal
        Stack.prototype.forceAll = function () {
            while (!this.cx.parser.stateFlag(this.state, 2 /* Accepting */) && this.forceReduce()) { }
            return this;
        };
        // Convert the stack's buffer to a syntax tree.
        /// @internal
        Stack.prototype.toTree = function () {
            return Tree.build({ buffer: StackBufferCursor.create(this),
                group: this.cx.parser.group,
                topID: this.cx.topTerm,
                maxBufferLength: this.cx.maxBufferLength,
                reused: this.cx.reused,
                minRepeatType: this.cx.parser.minRepeatTerm });
        };
        return Stack;
    }());
    var Recover;
    (function (Recover) {
        Recover[Recover["Token"] = 2] = "Token";
        Recover[Recover["Reduce"] = 1] = "Reduce";
        Recover[Recover["MaxNext"] = 4] = "MaxNext";
    })(Recover || (Recover = {}));
    // Used to cheaply run some reductions to scan ahead without mutating
    // an entire stack
    var SimulatedStack = /** @class */ (function () {
        function SimulatedStack(stack) {
            this.stack = stack;
            this.top = stack.state;
            this.rest = stack.stack;
            this.offset = this.rest.length;
        }
        SimulatedStack.prototype.reduce = function (action) {
            var term = action & 65535 /* ValueMask */, depth = action >> 19 /* ReduceDepthShift */;
            if (depth == 0) {
                if (this.rest == this.stack.stack)
                    { this.rest = this.rest.slice(); }
                this.rest.push(this.top, 0, 0);
                this.offset += 3;
            }
            else {
                this.offset -= (depth - 1) * 3;
            }
            var goto = this.stack.cx.parser.getGoto(this.rest[this.offset - 3], term, true);
            this.top = goto;
        };
        return SimulatedStack;
    }());
    // This is given to `Tree.build` to build a buffer, and encapsulates
    // the parent-stack-walking necessary to read the nodes.
    var StackBufferCursor = /** @class */ (function () {
        function StackBufferCursor(stack, pos, index) {
            this.stack = stack;
            this.pos = pos;
            this.index = index;
            this.buffer = stack.buffer;
            if (this.index == 0)
                { this.maybeNext(); }
        }
        StackBufferCursor.create = function (stack) {
            return new StackBufferCursor(stack, stack.bufferBase + stack.buffer.length, stack.buffer.length);
        };
        StackBufferCursor.prototype.maybeNext = function () {
            var next = this.stack.parent;
            if (next != null) {
                this.index = this.stack.bufferBase - next.bufferBase;
                this.stack = next;
                this.buffer = next.buffer;
            }
        };
        Object.defineProperty(StackBufferCursor.prototype, "id", {
            get: function () { return this.buffer[this.index - 4]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StackBufferCursor.prototype, "start", {
            get: function () { return this.buffer[this.index - 3]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StackBufferCursor.prototype, "end", {
            get: function () { return this.buffer[this.index - 2]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StackBufferCursor.prototype, "size", {
            get: function () { return this.buffer[this.index - 1]; },
            enumerable: true,
            configurable: true
        });
        StackBufferCursor.prototype.next = function () {
            this.index -= 4;
            this.pos -= 4;
            if (this.index == 0)
                { this.maybeNext(); }
        };
        StackBufferCursor.prototype.fork = function () {
            return new StackBufferCursor(this.stack, this.pos, this.index);
        };
        return StackBufferCursor;
    }());

    /// Tokenizers write the tokens they read into instances of this class.
    var Token = /** @class */ (function () {
        function Token() {
            /// The start of the token. This is set by the parser, and should not
            /// be mutated by the tokenizer.
            this.start = -1;
            /// This starts at -1, and should be updated to a term id when a
            /// matching token is found.
            this.value = -1;
            /// When setting `.value`, you should also set `.end` to the end
            /// position of the token. (You'll usually want to use the `accept`
            /// method.)
            this.end = -1;
        }
        /// Accept a token, setting `value` and `end` to the given values.
        Token.prototype.accept = function (value, end) {
            this.value = value;
            this.end = end;
        };
        return Token;
    }());
    /// An `InputStream` that is backed by a single, flat string.
    var StringStream$1 = /** @class */ (function () {
        function StringStream(string, length) {
            if (length === void 0) { length = string.length; }
            this.string = string;
            this.length = length;
        }
        StringStream.prototype.get = function (pos) {
            return pos < 0 || pos >= this.length ? -1 : this.string.charCodeAt(pos);
        };
        StringStream.prototype.read = function (from, to) { return this.string.slice(from, Math.min(this.length, to)); };
        StringStream.prototype.clip = function (at) { return new StringStream(this.string, at); };
        return StringStream;
    }());
    /// @internal
    var TokenGroup = /** @class */ (function () {
        function TokenGroup(data, id) {
            this.data = data;
            this.id = id;
        }
        TokenGroup.prototype.token = function (input, token, stack) { readToken(this.data, input, token, stack, this.id); };
        return TokenGroup;
    }());
    TokenGroup.prototype.contextual = false;
    var ExternalTokenizer = /** @class */ (function () {
        function ExternalTokenizer(token, options) {
            if (options === void 0) { options = {}; }
            this.token = token;
            this.contextual = options && options.contextual || false;
        }
        return ExternalTokenizer;
    }());
    // Tokenizer data is stored a big uint16 array containing, for each
    // state:
    //
    //  - A group bitmask, indicating what token groups are reachable from
    //    this state, so that paths that can only lead to tokens not in
    //    any of the current groups can be cut off early.
    //
    //  - The position of the end of the state's sequence of accepting
    //    tokens
    //
    //  - The number of outgoing edges for the state
    //
    //  - The accepting tokens, as (token id, group mask) pairs
    //
    //  - The outgoing edges, as (start character, end character, state
    //    index) triples, with end character being exclusive
    //
    // This function interprets that data, running through a stream as
    // long as new states with the a matching group mask can be reached,
    // and updating `token` when it matches a token.
    function readToken(data, input, token, stack, group) {
        var state = 0, groupMask = 1 << group;
        scan: for (var pos = token.start;;) {
            if ((groupMask & data[state]) == 0)
                { break; }
            var accEnd = data[state + 1];
            // Check whether this state can lead to a token in the current group
            // Accept tokens in this state, possibly overwriting
            // lower-precedence / shorter tokens
            for (var i = state + 3; i < accEnd; i += 2)
                { if ((data[i + 1] & groupMask) > 0) {
                    var term = data[i];
                    if (token.value == -1 || token.value == term || stack.cx.parser.overrides(term, token.value)) {
                        token.accept(term, pos);
                        break;
                    }
                } }
            var next = input.get(pos++);
            // Do a binary search on the state's edges
            for (var low = 0, high = data[state + 2]; low < high;) {
                var mid = (low + high) >> 1;
                var index = accEnd + mid + (mid << 1);
                var from = data[index], to = data[index + 1];
                if (next < from)
                    { high = mid; }
                else if (next >= to)
                    { low = mid + 1; }
                else {
                    state = data[index + 2];
                    continue scan;
                }
            }
            break;
        }
    }

    // See lezer-generator/src/encode.ts for comments about the encoding
    // used here
    function decodeArray(input, Type) {
        if (Type === void 0) { Type = Uint16Array; }
        var array = null;
        for (var pos = 0, out = 0; pos < input.length;) {
            var value = 0;
            for (;;) {
                var next = input.charCodeAt(pos++), stop = false;
                if (next == 126 /* BigValCode */) {
                    value = 65535 /* BigVal */;
                    break;
                }
                if (next >= 92 /* Gap2 */)
                    { next--; }
                if (next >= 34 /* Gap1 */)
                    { next--; }
                var digit = next - 32 /* Start */;
                if (digit >= 46 /* Base */) {
                    digit -= 46 /* Base */;
                    stop = true;
                }
                value += digit;
                if (stop)
                    { break; }
                value *= 46 /* Base */;
            }
            if (array)
                { array[out++] = value; }
            else
                { array = new Type(value); }
        }
        return array;
    }

    // Environment variable used to control console output
    var verbose = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG);
    var CacheCursor = /** @class */ (function () {
        function CacheCursor(tree) {
            this.start = [0];
            this.index = [0];
            this.nextStart = 0;
            this.trees = [tree];
        }
        // `pos` must be >= any previously given `pos` for this cursor
        CacheCursor.prototype.nodeAt = function (pos) {
            if (pos < this.nextStart)
                { return null; }
            for (;;) {
                var last = this.trees.length - 1;
                if (last < 0) { // End of tree
                    this.nextStart = 1e9;
                    return null;
                }
                var top = this.trees[last], index = this.index[last];
                if (index == top.children.length) {
                    this.trees.pop();
                    this.start.pop();
                    this.index.pop();
                    continue;
                }
                var next = top.children[index];
                var start = this.start[last] + top.positions[index];
                if (start >= pos)
                    { return start == pos ? next : null; }
                if (next instanceof TreeBuffer) {
                    this.index[last]++;
                    this.nextStart = start + next.length;
                }
                else {
                    this.index[last]++;
                    if (start + next.length >= pos) { // Enter this node
                        this.trees.push(next);
                        this.start.push(start);
                        this.index.push(0);
                    }
                }
            }
        };
        return CacheCursor;
    }());
    var CachedToken = /** @class */ (function (_super) {
        __extends(CachedToken, _super);
        function CachedToken() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.extended = -1;
            _this.mask = 0;
            return _this;
        }
        CachedToken.prototype.clear = function (start) {
            this.start = start;
            this.value = this.extended = -1;
        };
        return CachedToken;
    }(Token));
    var dummyToken = new Token;
    var TokenCache = /** @class */ (function () {
        function TokenCache(parser) {
            this.tokens = [];
            this.mainToken = dummyToken;
            this.actions = [];
            this.tokens = parser.tokenizers.map(function (_) { return new CachedToken; });
        }
        TokenCache.prototype.getActions = function (stack, input) {
            var actionIndex = 0;
            var main = null;
            var parser = stack.cx.parser, tokenizers = parser.tokenizers;
            var mask = parser.stateSlot(stack.state, 3 /* TokenizerMask */);
            for (var i = 0; i < tokenizers.length; i++) {
                if (((1 << i) & mask) == 0)
                    { continue; }
                var tokenizer = tokenizers[i], token = this.tokens[i];
                if (tokenizer.contextual || token.start != stack.pos || token.mask != mask) {
                    this.updateCachedToken(token, tokenizer, stack, input);
                    token.mask = mask;
                }
                var startIndex = actionIndex;
                if (token.extended > -1)
                    { actionIndex = this.addActions(stack, token.extended, token.end, actionIndex); }
                actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
                if (actionIndex > startIndex) {
                    main = token;
                    break;
                }
                if (!main || token.value != 0 /* Err */)
                    { main = token; }
            }
            while (this.actions.length > actionIndex)
                { this.actions.pop(); }
            if (!main) {
                main = dummyToken;
                main.start = stack.pos;
                if (stack.pos == input.length)
                    { main.accept(stack.cx.parser.eofTerm, stack.pos); }
                else
                    { main.accept(0 /* Err */, stack.pos + 1); }
            }
            this.mainToken = main;
            return this.actions;
        };
        TokenCache.prototype.updateCachedToken = function (token, tokenizer, stack, input) {
            token.clear(stack.pos);
            tokenizer.token(input, token, stack);
            if (token.value > -1) {
                var parser = stack.cx.parser;
                var specIndex = findOffset(parser.data, parser.specializeTable, token.value);
                if (specIndex >= 0) {
                    var found = parser.specializations[specIndex][input.read(token.start, token.end)];
                    if (found != null) {
                        if ((found & 1) == 0 /* Specialize */)
                            { token.value = found >> 1; }
                        else
                            { token.extended = found >> 1; }
                    }
                }
            }
            else if (stack.pos == input.length) {
                token.accept(stack.cx.parser.eofTerm, stack.pos);
            }
            else {
                token.accept(0 /* Err */, stack.pos + 1);
            }
        };
        TokenCache.prototype.putAction = function (action, token, end, index) {
            // Don't add duplicate actions
            for (var i = 0; i < index; i += 3)
                { if (this.actions[i] == action)
                    { return index; } }
            this.actions[index++] = action;
            this.actions[index++] = token;
            this.actions[index++] = end;
            return index;
        };
        TokenCache.prototype.addActions = function (stack, token, end, index) {
            var state = stack.state, parser = stack.cx.parser, data = parser.data;
            for (var set = 0; set < 2; set++) {
                for (var i = parser.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next = void 0; (next = data[i]) != 65535 /* End */; i += 3) {
                    if (next == token || (next == 0 /* Err */ && index == 0))
                        { index = this.putAction(data[i + 1] | (data[i + 2] << 16), token, end, index); }
                }
            }
            return index;
        };
        return TokenCache;
    }());
    var StackContext = /** @class */ (function () {
        function StackContext(parser, maxBufferLength, input, topTerm, parent, wrapType // Set to -2 when a stack descending from this nesting event finishes
        ) {
            if (parent === void 0) { parent = null; }
            if (wrapType === void 0) { wrapType = -1; }
            this.parser = parser;
            this.maxBufferLength = maxBufferLength;
            this.input = input;
            this.topTerm = topTerm;
            this.parent = parent;
            this.wrapType = wrapType;
            this.reused = [];
            this.tokens = new TokenCache(parser);
        }
        return StackContext;
    }());
    var recoverDist = 5, maxRemainingPerStep = 3, minBufferLengthPrune = 200, forceReduceLimit = 10;
    /// A parse context can be used for step-by-step parsing. After
    /// creating it, you repeatedly call `.advance()` until it returns a
    /// tree to indicate it has reached the end of the parse.
    var ParseContext = /** @class */ (function () {
        /// @internal
        function ParseContext(parser, input, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.cache, cache = _c === void 0 ? undefined : _c, _d = _b.strict, strict = _d === void 0 ? false : _d, _e = _b.bufferLength, bufferLength = _e === void 0 ? DefaultBufferLength : _e, _f = _b.top, top = _f === void 0 ? undefined : _f;
            // The position to which the parse has advanced.
            this.pos = 0;
            this.recovering = 0;
            this.tokenCount = 0;
            var topInfo = top ? parser.topRules[top] : parser.defaultTop;
            if (!topInfo)
                { throw new RangeError("Invalid top rule name " + top); }
            this.stacks = [Stack.start(new StackContext(parser, bufferLength, input, topInfo[1]), topInfo[0])];
            this.strict = strict;
            this.cache = cache ? new CacheCursor(cache) : null;
        }
        /// @internal
        ParseContext.prototype.putStack = function (stack) {
            this.stacks.push(stack);
            if (this.pos < 0 || stack.pos < this.pos)
                { this.pos = stack.pos; }
        };
        /// Move the parser forward. This will process all parse stacks at
        /// `this.pos` and try to advance them to a further position. If no
        /// stack for such a position is found, it'll start error-recovery.
        ///
        /// When the parse is finished, this will return a syntax tree. When
        /// not, it returns `null`.
        ParseContext.prototype.advance = function () {
            var stacks = this.stacks, pos = this.pos;
            // This will now hold stacks beyond `pos`.
            this.stacks = [];
            // Will be reset to the next position by `putStack`.
            this.pos = -1;
            var stopped = null, stoppedTokens = null;
            // Keep advancing any stacks at `pos` until they either move
            // forward or can't be advanced. Gather stacks that can't be
            // advanced further in `stopped`.
            for (var i = 0; i < stacks.length; i++) {
                var stack = stacks[i];
                for (;;) {
                    if (stack.pos > pos) {
                        this.putStack(stack);
                    }
                    else {
                        var result = this.advanceStack(stack, stacks);
                        if (result) {
                            stack = result;
                            continue;
                        }
                        else {
                            if (!stopped) {
                                stopped = [];
                                stoppedTokens = [];
                            }
                            stopped.push(stack);
                            var tok = stack.cx.tokens.mainToken;
                            stoppedTokens.push(tok.value, tok.end);
                        }
                    }
                    break;
                }
            }
            if (!this.stacks.length) {
                var finished = stopped && findFinished(stopped);
                if (finished)
                    { return finished.toTree(); }
                if (this.strict)
                    { throw new SyntaxError("No parse at " + pos); }
                if (!this.recovering)
                    { this.recovering = recoverDist; }
            }
            if (this.recovering && stopped) {
                var finished = this.runRecovery(stopped, stoppedTokens);
                if (finished)
                    { return finished.forceAll().toTree(); }
            }
            if (this.recovering) {
                var maxRemaining = this.recovering == 1 ? 1 : this.recovering * maxRemainingPerStep;
                if (this.stacks.length > maxRemaining) {
                    this.stacks.sort(function (a, b) { return a.recovered - b.recovered; });
                    this.stacks.length = maxRemaining;
                }
                if (this.stacks.some(function (s) { return s.reducePos > pos; }))
                    { this.recovering--; }
            }
            else if (this.stacks.length > 1 && this.stacks[0].buffer.length > minBufferLengthPrune) {
                // Prune stacks that have been running without splitting for a
                // while, to avoid getting stuck with multiple successful stacks
                // running endlessly on.
                var minLen = 1e9, minI = -1;
                for (var i = 0; i < this.stacks.length; i++) {
                    var stack = this.stacks[i];
                    if (stack.buffer.length < minLen) {
                        minLen = stack.buffer.length;
                        minI = i;
                    }
                }
                if (minLen > minBufferLengthPrune)
                    { this.stacks.splice(minI, 1); }
            }
            this.tokenCount++;
            return null;
        };
        // Returns an updated version of the given stack, or null if the
        // stack can't advance normally. When `split` is given, stacks split
        // off by ambiguous operations will be pushed to that, or given to
        // `putStack` if they move `pos` forward.
        ParseContext.prototype.advanceStack = function (stack, split) {
            var start = stack.pos, _a = stack.cx, input = _a.input, parser = _a.parser;
            var base = verbose ? stack + " -> " : "";
            if (this.cache) {
                for (var cached = this.cache.nodeAt(start); cached;) {
                    var match = parser.group.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                    if (match > -1) {
                        stack.useNode(cached, match);
                        if (verbose)
                            { console.log(base + stack + (" (via reuse of " + parser.getName(cached.type.id) + ")")); }
                        return stack;
                    }
                    if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0)
                        { break; }
                    var inner = cached.children[0];
                    if (inner instanceof Tree)
                        { cached = inner; }
                    else
                        { break; }
                }
            }
            var nest = parser.startNested(stack.state);
            maybeNest: if (nest > -1) {
                var _b = parser.nested[nest], grammar = _b.grammar, endToken = _b.end, placeholder = _b.placeholder;
                var filterEnd = undefined, parseNode = null, nested = void 0, top = void 0, wrapType = undefined;
                if (typeof grammar == "function") {
                    var query = grammar(input, stack);
                    if (query.stay)
                        { break maybeNest; }
                    (parseNode = query.parseNode, nested = query.parser, top = query.top, filterEnd = query.filterEnd, wrapType = query.wrapType);
                }
                else {
                    nested = grammar;
                }
                var end = this.scanForNestEnd(stack, endToken, filterEnd);
                var clippedInput = stack.cx.input.clip(end);
                if (parseNode || !nested) {
                    var node = parseNode ? parseNode(clippedInput, stack.pos) : Tree.empty;
                    if (node.length != end - stack.pos)
                        { node = new Tree(node.type, node.children, node.positions, end - stack.pos); }
                    if (wrapType != null)
                        { node = new Tree(parser.group.types[wrapType], [node], [0], node.length); }
                    stack.useNode(node, parser.getGoto(stack.state, placeholder, true));
                    return stack;
                }
                else {
                    var topInfo = top ? nested.topRules[top] : nested.defaultTop;
                    var newStack = Stack.start(new StackContext(nested, stack.cx.maxBufferLength, clippedInput, topInfo[1], stack, wrapType), topInfo[0], stack.pos);
                    if (verbose)
                        { console.log(base + newStack + " (nested)"); }
                    return newStack;
                }
            }
            var defaultReduce = parser.stateSlot(stack.state, 4 /* DefaultReduce */);
            if (defaultReduce > 0) {
                stack.reduce(defaultReduce);
                if (verbose)
                    { console.log(base + stack + (" (via always-reduce " + parser.getName(defaultReduce & 65535 /* ValueMask */) + ")")); }
                return stack;
            }
            var actions = stack.cx.tokens.getActions(stack, input);
            for (var i = 0; i < actions.length;) {
                var action = actions[i++], term = actions[i++], end = actions[i++];
                var last = i == actions.length || !split;
                var localStack = last ? stack : stack.split();
                localStack.apply(action, term, end);
                if (verbose)
                    { console.log(base + localStack + (" (via " + ((action & 65536 /* ReduceFlag */) == 0 ? "shift"
                        : "reduce of " + parser.getName(action & 65535 /* ValueMask */)) + " for " + parser.getName(term) + " @ " + start + (localStack == stack ? "" : ", split") + ")")); }
                if (last)
                    { return localStack; }
                else if (localStack.pos > start)
                    { this.putStack(localStack); }
                else
                    { split.push(localStack); }
            }
            if (stack.cx.parent && stack.pos == input.length)
                { return finishNested(stack); }
            return null;
        };
        // Advance a given stack forward as far as it will go. Returns the
        // (possibly updated) stack if it got stuck, or null if it moved
        // forward and was given to `putStack`.
        ParseContext.prototype.advanceFully = function (stack) {
            var pos = stack.pos;
            for (;;) {
                var result = this.advanceStack(stack, null);
                if (!result)
                    { return stack; }
                if (result.pos > pos) {
                    this.putStack(result);
                    return null;
                }
                stack = result;
            }
        };
        ParseContext.prototype.runRecovery = function (stacks, tokens) {
            var finished = null;
            for (var i = 0; i < stacks.length; i++) {
                var stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
                var base = verbose ? stack + " -> " : "";
                var force = stack.split(), forceBase = base;
                for (var j = 0; force.forceReduce() && j < forceReduceLimit; j++) {
                    if (verbose)
                        { console.log(forceBase + force + " (via force-reduce)"); }
                    var stopped = this.advanceFully(force);
                    if (!stopped)
                        { break; }
                    force = stopped;
                    if (verbose)
                        { forceBase = stopped + " -> "; }
                }
                for (var _i = 0, _a = stack.recoverByInsert(token); _i < _a.length; _i++) {
                    var insert = _a[_i];
                    if (verbose)
                        { console.log(base + insert + " (via recover-insert)"); }
                    this.advanceFully(insert);
                }
                if (stack.cx.input.length > stack.pos) {
                    if (tokenEnd == stack.pos) {
                        tokenEnd++;
                        token = 0 /* Err */;
                    }
                    stack.recoverByDelete(token, tokenEnd);
                    if (verbose)
                        { console.log(base + stack + (" (via recover-delete " + stack.cx.parser.getName(token) + ")")); }
                    this.putStack(stack);
                }
                else if (!stack.cx.parent && (!finished || finished.recovered > stack.recovered)) {
                    finished = stack;
                }
            }
            return finished;
        };
        /// Force the parse to finish, generating a tree containing the nodes
        /// parsed so far.
        ParseContext.prototype.forceFinish = function () {
            return this.stacks[0].split().forceAll().toTree();
        };
        Object.defineProperty(ParseContext.prototype, "badness", {
            /// A value that indicates how successful the parse is so far, as
            /// the number of error-recovery steps taken divided by the number
            /// of tokens parsed. Could be used to decide to abort a parse when
            /// the input doesn't appear to match the grammar at all.
            get: function () {
                return this.stacks[0].recovered * 2 /* Token */ / this.tokenCount;
            },
            enumerable: true,
            configurable: true
        });
        ParseContext.prototype.scanForNestEnd = function (stack, endToken, filter) {
            var input = stack.cx.input;
            for (var pos = stack.pos; pos < input.length; pos++) {
                dummyToken.start = pos;
                dummyToken.value = -1;
                endToken.token(input, dummyToken, stack);
                if (dummyToken.value > -1 && (!filter || filter(input.read(pos, dummyToken.end))))
                    { return pos; }
            }
            return input.length;
        };
        return ParseContext;
    }());
    /// A parser holds the parse tables for a given grammar, as generated
    /// by `lezer-generator`.
    var Parser = /** @class */ (function () {
        /// @internal
        function Parser(
        /// The parse states for this grammar @internal
        states, 
        /// A blob of data that the parse states, as well as some
        /// of `Parser`'s fields, point into @internal
        data, 
        /// The goto table. See `computeGotoTable` in
        /// lezer-generator for details on the format @internal
        goto, 
        /// A node group with the node types used by this parser.
        group, 
        /// The first repeat-related term id @internal
        minRepeatTerm, 
        /// The tokenizer objects used by the grammar @internal
        tokenizers, 
        /// Maps top rule names to [state ID, top term ID] pairs.
        topRules, 
        /// Metadata about nested grammars used in this grammar @internal
        nested, 
        /// Points into this.data at an array of token types that
        /// are specialized @internal
        specializeTable, 
        /// For each specialized token type, this holds an object mapping
        /// names to numbers, with the first bit indicating whether the
        /// specialization extends or replaces the original token, and the
        /// rest of the bits holding the specialized token type. @internal
        specializations, 
        /// Points into this.data at an array that holds the
        /// precedence order (higher precedence first) for ambiguous
        /// tokens @internal
        tokenPrecTable, 
        /// An optional object mapping term ids to name strings @internal
        termNames) {
            if (termNames === void 0) { termNames = null; }
            this.states = states;
            this.data = data;
            this.goto = goto;
            this.group = group;
            this.minRepeatTerm = minRepeatTerm;
            this.tokenizers = tokenizers;
            this.topRules = topRules;
            this.nested = nested;
            this.specializeTable = specializeTable;
            this.specializations = specializations;
            this.tokenPrecTable = tokenPrecTable;
            this.termNames = termNames;
            this.nextStateCache = [];
            this.maxNode = this.group.types.length - 1;
            this.maxRepeatWrap = this.group.types.length + (this.group.types.length - minRepeatTerm) - 1;
            for (var i = 0, l = this.states.length / 6 /* Size */; i < l; i++)
                { this.nextStateCache[i] = null; }
        }
        /// Parse a given string or stream.
        Parser.prototype.parse = function (input, options) {
            if (typeof input == "string")
                { input = new StringStream$1(input); }
            var cx = new ParseContext(this, input, options);
            for (;;) {
                var done = cx.advance();
                if (done)
                    { return done; }
            }
        };
        /// Create a `ParseContext`.
        Parser.prototype.startParse = function (input, options) {
            if (typeof input == "string")
                { input = new StringStream$1(input); }
            return new ParseContext(this, input, options);
        };
        /// Get a goto table entry @internal
        Parser.prototype.getGoto = function (state, term, loose) {
            if (loose === void 0) { loose = false; }
            var table = this.goto;
            if (term >= table[0])
                { return -1; }
            for (var pos = table[term + 1];;) {
                var groupTag = table[pos++], last = groupTag & 1;
                var target = table[pos++];
                if (last && loose)
                    { return target; }
                for (var end = pos + (groupTag >> 1); pos < end; pos++)
                    { if (table[pos] == state)
                        { return target; } }
                if (last)
                    { return -1; }
            }
        };
        /// Check if this state has an action for a given terminal @internal
        Parser.prototype.hasAction = function (state, terminal) {
            var data = this.data;
            for (var set = 0; set < 2; set++) {
                for (var i = this.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next = void 0; (next = data[i]) != 65535 /* End */; i += 3) {
                    if (next == terminal || next == 0 /* Err */)
                        { return data[i + 1] | (data[i + 2] << 16); }
                }
            }
            return 0;
        };
        /// @internal
        Parser.prototype.stateSlot = function (state, slot) {
            return this.states[(state * 6 /* Size */) + slot];
        };
        /// @internal
        Parser.prototype.stateFlag = function (state, flag) {
            return (this.stateSlot(state, 0 /* Flags */) & flag) > 0;
        };
        /// @internal
        Parser.prototype.startNested = function (state) {
            var flags = this.stateSlot(state, 0 /* Flags */);
            return flags & 4 /* StartNest */ ? flags >> 10 /* NestShift */ : -1;
        };
        /// @internal
        Parser.prototype.validAction = function (state, action) {
            if (action == this.stateSlot(state, 4 /* DefaultReduce */))
                { return true; }
            for (var i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
                if (this.data[i] == 65535 /* End */)
                    { return false; }
                if (action == (this.data[i + 1] | (this.data[i + 2] << 16)))
                    { return true; }
            }
        };
        /// Get the states that can follow this one through shift actions or
        /// goto jumps. @internal
        Parser.prototype.nextStates = function (state) {
            var cached = this.nextStateCache[state];
            if (cached)
                { return cached; }
            var result = [];
            for (var i = this.stateSlot(state, 1 /* Actions */); this.data[i] != 65535 /* End */; i += 3) {
                if ((this.data[i + 2] & (65536 /* ReduceFlag */ >> 16)) == 0 && result.indexOf(this.data[i + 1]) < 0)
                    { result.push(this.data[i + 1]); }
            }
            var table = this.goto, max = table[0];
            for (var term = 0; term < max; term++) {
                for (var pos = table[term + 1];;) {
                    var groupTag = table[pos++], target = table[pos++];
                    for (var end = pos + (groupTag >> 1); pos < end; pos++)
                        { if (table[pos] == state && result.indexOf(target) < 0)
                            { result.push(target); } }
                    if (groupTag & 1)
                        { break; }
                }
            }
            return this.nextStateCache[state] = result;
        };
        /// @internal
        Parser.prototype.overrides = function (token, prev) {
            var iPrev = findOffset(this.data, this.tokenPrecTable, prev);
            return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
        };
        /// Create a new `Parser` instance with different values for (some
        /// of) the nested grammars. This can be used to, for example, swap
        /// in a different language for a nested grammar or fill in a nested
        /// grammar that was left blank by the original grammar.
        Parser.prototype.withNested = function (spec) {
            return new Parser(this.states, this.data, this.goto, this.group, this.minRepeatTerm, this.tokenizers, this.topRules, this.nested.map(function (obj) {
                if (!Object.prototype.hasOwnProperty.call(spec, obj.name))
                    { return obj; }
                return { name: obj.name, grammar: spec[obj.name], end: obj.end, placeholder: obj.placeholder };
            }), this.specializeTable, this.specializations, this.tokenPrecTable, this.termNames);
        };
        /// Create a new `Parser` instance whose node types have the given
        /// props added. You should use [`NodeProp.add`](#tree.NodeProp.add)
        /// to create the arguments to this method.
        Parser.prototype.withProps = function () {
            var arguments$1 = arguments;

            var _a;
            var props = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                props[_i] = arguments$1[_i];
            }
            return new Parser(this.states, this.data, this.goto, (_a = this.group).extend.apply(_a, props), this.minRepeatTerm, this.tokenizers, this.topRules, this.nested, this.specializeTable, this.specializations, this.tokenPrecTable, this.termNames);
        };
        /// Returns the name associated with a given term. This will only
        /// work for all terms when the parser was generated with the
        /// `--names` option. By default, only the names of tagged terms are
        /// stored.
        Parser.prototype.getName = function (term) {
            return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.group.types[term].name || term);
        };
        Object.defineProperty(Parser.prototype, "eofTerm", {
            /// The eof term id is always allocated directly after the node
            /// types. @internal
            get: function () { return this.maxRepeatWrap + 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Parser.prototype, "hasNested", {
            /// Tells you whether this grammar has any nested grammars.
            get: function () { return this.nested.length > 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Parser.prototype, "defaultTop", {
            /// @internal
            get: function () { return this.topRules[Object.keys(this.topRules)[0]]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Parser.prototype, "topType", {
            /// The node type produced by the default top rule.
            get: function () { return this.group.types[this.defaultTop[1]]; },
            enumerable: true,
            configurable: true
        });
        /// (Used by the output of the parser generator) @internal
        Parser.deserialize = function (spec) {
            var tokenArray = decodeArray(spec.tokenData);
            var nodeNames = spec.nodeNames.split(" "), minRepeatTerm = nodeNames.length;
            for (var i = 0; i < spec.repeatNodeCount; i++)
                { nodeNames.push(""); }
            var nodeProps = [];
            for (var i = 0; i < nodeNames.length; i++)
                { nodeProps.push(noProps); }
            function setProp(nodeID, prop, value) {
                if (nodeProps[nodeID] == noProps)
                    { nodeProps[nodeID] = Object.create(null); }
                prop.set(nodeProps[nodeID], prop.deserialize(String(value)));
            }
            setProp(0, NodeProp.error, "");
            if (spec.nodeProps)
                { for (var _i = 0, _a = spec.nodeProps; _i < _a.length; _i++) {
                    var propSpec = _a[_i];
                    var prop = propSpec[0];
                    for (var i = 1; i < propSpec.length; i += 2)
                        { setProp(propSpec[i], prop, propSpec[i + 1]); }
                } }
            var group = new NodeGroup(nodeNames.map(function (name, i) { return new NodeType(name, nodeProps[i], i); }));
            return new Parser(decodeArray(spec.states, Uint32Array), decodeArray(spec.stateData), decodeArray(spec.goto), group, minRepeatTerm, spec.tokenizers.map(function (value) { return typeof value == "number" ? new TokenGroup(tokenArray, value) : value; }), spec.topRules, (spec.nested || []).map(function (_a) {
                var name = _a[0], grammar = _a[1], endToken = _a[2], placeholder = _a[3];
                return ({ name: name, grammar: grammar, end: new TokenGroup(decodeArray(endToken), 0), placeholder: placeholder });
            }), spec.specializeTable, (spec.specializations || []).map(withoutPrototype), spec.tokenPrec, spec.termNames);
        };
        return Parser;
    }());
    var noProps = Object.create(null);
    function findOffset(data, start, term) {
        for (var i = start, next = void 0; (next = data[i]) != 65535 /* End */; i++)
            { if (next == term)
                { return i - start; } }
        return -1;
    }
    // Strip the prototypes from objects, so that they can safely be
    // accessed as maps.
    function withoutPrototype(obj) {
        if (!(obj instanceof Object))
            { return obj; }
        var result = Object.create(null);
        for (var prop in obj)
            { if (Object.prototype.hasOwnProperty.call(obj, prop))
                { result[prop] = obj[prop]; } }
        return result;
    }
    function findFinished(stacks) {
        var best = null;
        for (var _i = 0, stacks_1 = stacks; _i < stacks_1.length; _i++) {
            var stack = stacks_1[_i];
            if (stack.pos == stack.cx.input.length &&
                stack.cx.parser.stateFlag(stack.state, 2 /* Accepting */) &&
                (!best || best.recovered > stack.recovered))
                { best = stack; }
        }
        return best;
    }
    function finishNested(stack) {
        if (stack.cx.wrapType == -2)
            { return null; } // Another nested stack already finished
        var parent = stack.cx.parent, tree = stack.forceAll().toTree();
        var parentParser = parent.cx.parser, info = parentParser.nested[parentParser.startNested(parent.state)];
        tree = new Tree(tree.type, tree.children, tree.positions.map(function (p) { return p - parent.pos; }), stack.pos - parent.pos);
        if (stack.cx.wrapType > -1)
            { tree = new Tree(parentParser.group.types[stack.cx.wrapType], [tree], [0], tree.length); }
        stack.cx.wrapType = -2;
        parent.useNode(tree, parentParser.getGoto(parent.state, info.placeholder, true));
        if (verbose)
            { console.log(parent + (" (via unnest " + (stack.cx.wrapType > -1 ? parentParser.getName(stack.cx.wrapType) : tree.type.name) + ")")); }
        return parent;
    }

    var _m29 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ExternalTokenizer: ExternalTokenizer,
        ParseContext: ParseContext,
        Parser: Parser,
        Stack: Stack,
        Token: Token,
        TokenGroup: TokenGroup,
        NodeGroup: NodeGroup,
        NodeProp: NodeProp,
        NodeType: NodeType,
        Subtree: Subtree,
        Tree: Tree
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var 
      noSemi = 181,
      PostfixOp = 1,
      insertSemi = 182,
      templateContent = 183,
      templateDollarBrace = 184,
      templateEnd = 185;

    /* Hand-written tokenizers for JavaScript tokens that can't be
       expressed by lezer's built-in tokenizer. */

    var newline = [10, 13, 8232, 8233];
    var space = [9, 11, 12, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288];

    var braceR = 125, braceL = 123, semicolon = 59, slash = 47, star = 42,
          plus = 43, minus = 45, dollar = 36, backtick = 96, backslash = 92;

    // FIXME this should technically enter block comments
    function newlineBefore(input, pos) {
      for (var i = pos - 1; i >= 0; i--) {
        var prev = input.get(i);
        if (newline.indexOf(prev) > -1) { return true }
        if (space.indexOf(prev) < 0) { break }
      }
      return false
    }

    var insertSemicolon = new ExternalTokenizer(function (input, token, stack) {
      var pos = token.start, next = input.get(pos);
      if ((next == braceR || next == -1 || newlineBefore(input, pos)) && stack.canShift(insertSemi))
        { token.accept(insertSemi, token.start); }
    }, {contextual: true});

    var noSemicolon = new ExternalTokenizer(function (input, token, stack) {
      var pos = token.start, next = input.get(pos++);
      if (space.indexOf(next) > -1 || newline.indexOf(next) > -1) { return }
      if (next == slash) {
        var after = input.get(pos++);
        if (after == slash || after == star) { return }
      }
      if (next != braceR && next != semicolon && next != -1 && !newlineBefore(input, token.start) &&
          stack.canShift(noSemi))
        { token.accept(noSemi, token.start); }
    }, {contextual: true});

    var postfix = new ExternalTokenizer(function (input, token, stack) {
      var pos = token.start, next = input.get(pos++);
      if ((next == plus || next == minus) && next == input.get(pos++) &&
          !newlineBefore(input, token.start) && stack.canShift(PostfixOp))
        { token.accept(PostfixOp, pos); }
    }, {contextual: true});

    var template = new ExternalTokenizer(function (input, token) {
      var pos = token.start, afterDollar = false;
      for (;;) {
        var next = input.get(pos++);
        if (next < 0) {
          if (pos - 1 > token.start) { token.accept(templateContent, pos - 1); }
          break
        } else if (next == backtick) {
          if (pos == token.start + 1) { token.accept(templateEnd, pos); }
          else { token.accept(templateContent, pos - 1); }
          break
        } else if (next == braceL && afterDollar) {
          if (pos == token.start + 2) { token.accept(templateDollarBrace, pos); }
          else { token.accept(templateContent, pos - 2); }
          break
        } else if (next == 10 /* "\n" */ && pos > token.start + 1) {
          // Break up template strings on lines, to avoid huge tokens
          token.accept(templateContent, pos);
          break
        } else if (next == backslash && pos != input.length) {
          pos++;
        }
        afterDollar = next == dollar;
      }
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var parser = Parser.deserialize({
      states: "!4xOYOSOOO$QOSO'#FvO&{O!lO'#CkO(wOSO'#CrO*sO!lO'#GmOXOO'#Gm'#GmO,oX#tO'#C|O,yOSO'#D]O/tOSO'#DaO1dOSO'#DkOXOO'#Dt'#DtO3YOSO'#DsO3^O!lO'#GjO5cOSO'#E]OXOO'#Gj'#GjOXOO'#Gs'#GsO5gOSO'#FdO5kO!fO'#FeOXOO'#G`'#G`OXOO(3Cx(3CxQXOSOOO/tOSO'#D^O5rOSO'#EbO5vOSO'#ChO6QOSO'#DsO6[OSO'#EcO6fOSO'#CaO7SOSO'#EkO7dOSO'#EnO7kOSO'#EtO7kOSO'#EvOYOSO'#ExO7kOSO'#EzO7kOSO'#E}O7oOSO'#FTO7sO!gO'#FXO/tOSO'#FZO7}O!gO'#F]O8XO!gO'#F`O5kO!fO'#FbOXOO,5<Q,5<QO8cO!lO'#CkO:zOSO'#GgO/tOSO'#GgO;ROSO,59^O;VOSO'#FzO;^OSO(3C|O=VOYO'#GoOXOO'#Go'#GoO>rOSO,59pO>vO`O'#DVO?jOSO'#DtO?}OSO'#GfO@[O!fO'#GeO@oOSO'#DlO5vOSO'#DrO6TOSO'#DsO@yO!fO'#FyO/tOSO'#FiOXOO,59i,59iOAaOSO'#D`OCVO`O,5:bO/tOSO,5:bO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eO/tOSO,5:eOCZOSO,5:tOXOO,5:y,5:yOXOO,5:z,5:zOXOO,5:{,5:{ODyX#tO'#FxO/tOSO'#GlOXXO(3Cz(3CzOETX#tO,59hOEXOSO'#F{OXOO(3C}(3C}OHSOSO,59wOHWO!lO,59{OJVOSO,5:VO6[OSO'#GdOJZOSO'#GdOJbOSO,59YOJfOSO,5:_O/tOSO,5:wOYOSO,5<OOXOO'#Gc'#GcOXOO,5<P,5<POLUO!lO,59xOXOO'#Ck'#CkONTOSO,5:|OXOO'#Cc'#CcON[OSO'#CnO7oOSO,59SONlOSO,59SO6TOSO,59SONpOSO,5:_O5vOSO,59SONtOSO'#CrO! UO`O'#CvOXOO'#Gf'#GfO! fO!fO,5:}O! pOSO'#EgO! wOSO'#ChO! {OSO,58{O!!POSO,58{OXOO,58{,58{O!#oO!fO,58{O!#yOSO'#EmO!$QOSO'#GuO!$XOSO,5;VO!$]OSO,5;VO5kO!fO,5;VO!$aOSO'#EpOXOO'#Eq'#EqOXOO'#Er'#ErOYOSO,5;YO!&]OSO,5;YO/tOSO'#DkOYOSO,5;`OYOSO,5;bO!&aOSO,5;dOYOSO,5;fO!&eOSO,5;iO!&iOSO,5;oOXOO,5;s,5;sO/tOSO,5;sO5kO!fO,5;uOXOO,5;w,5;wO!)vOSO,5;wOXOO,5;z,5;zO!)vOSO,5;zOXOO,5;|,5;|O!)zOSO'#FwO!*ROSO(3CyOXOO,5=R,5=RO:zOSO,5=RO=VOYO,5=ZOXOO1G.x1G.xOXOO,5<U,5<UO!*fOYO-E9hO/tOSO,5<UOXOO,5=Z,5=ZOXOO1G/[1G/[O!,ROSO'#CxOXOO'#Gq'#GqO/tOSO'#GqO!,lOSO'#GqO!-VOSO'#DWO!-dO`O'#DWOCZOSO'#DWO!-qOSO'#GpO!-xOSO,59qO!-|OSO'#CwO!.ZOSO'#GhO!.bOSO,59bO!.fO`O'#DWO/tOSO,5=PO!.|O`O'#DoOXOO,5:W,5:WO/tOSO,5:WO!/gOSO,5:WO7oOSO,5:^ONlOSO,5:^O6TOSO,5:^OXOO,5<T,5<TO!/nO!lO-E9gO!1mOYO'#GrO/tOSO'#GrO!3YOSO,59zOXOO'#Cx'#CxOXOO1G/|1G/|O!3^OSO1G/|O!3bO!lO1G0PO!5aO!lO1G0PO!7`O!lO1G0PO!9_O!lO1G0PO!;^O!lO1G0PO!=]O!lO1G0PO!?[O!lO1G0PO!AZO!lO1G0PO!CYO!lO1G0PO!EXO!lO1G0PO!GWO!lO1G0PO!IVOrO'#CkOCZOSO'#DaO!KXOSO'#DsO!K]OrO1G0`O!LuOrO'#GjO!NkOSO'#E]OCZOSO'#D^O6TOSO'#DsOXXO,5<S,5<SO!NoO!lO'#GmO#!nOWO,5=WOXOO1G/S1G/SOXOO,5<V,5<VOXOO1G/c1G/cOXOO1G/q1G/qOJZOSO,5=OO#!rOSO'#GQO#!yOSO(3DSOXOO,5=O,5=OOXOO1G.t1G.tOXOO1G/y1G/yO##^O!lO1G0cOXOO1G1j1G1jOXOO1G/d1G/dOXOO1G0h1G0hO/tOSO1G0hOXOO1G.n1G.nO7oOSO1G.nONlOSO1G.nOJfOSO1G/yO6TOSO1G.nO6[OSO'#GgO6[OSO'#CwO#%]O!fO'#GRO6[OSO'#FqO5kO!fO1G0iOXOO'#DO'#DOO#%gOSO'#GtO#%qOSO,5;RO#%uOSO1G.gOXOO1G.g1G.gO5kO!fO1G.gO#%yOSO'#CkO#&TOSO'#GvO#&[OSO,5;XO#&`OSO'#GvO#&dOSO'#GUO#&kOSO(3DWOXOO,5=a,5=aO5rOSO1G0qO#&xOSO1G0qOXOO1G0q1G0qO#&|OYO,5=cO#(rOSO,5=cO#(|OSO,5;[O#*oOSO,5;[O6[OSO,5=cOXOO1G0t1G0tOYOSO1G0tOXOO1G0z1G0zOXOO1G0|1G0|O7kOSO1G1OO#*sOSO1G1QO#-zOSO'#FPOXOO1G1T1G1TO7oOSO1G1ZO#0{OSO1G1ZO5kO!fO1G1_OXOO1G1a1G1aOXOO'#F_'#F_O5kO!fO1G1cO5kO!fO1G1fOXOO,5<R,5<ROXOO-E9e-E9eO6[OSO,5<ROXOO1G2m1G2mOXOO1G2u1G2uO#1SOYO3)/SO#2oOSO,5=]OCZOSO,59cO6[OSO,59cO7oOSO,59rOCZOSO,59rOXOO'#D['#D[ONlOSO,59rO#2sOrO,59rO#4`OSO'#GfOXOO,59c,59cO#4jOSO'#GeO#4tOSO'#F|O#4{O`O(3DOOXOO,5=[,5=[OXOO1G/]1G/]O#5oOSO'#GPO#5vO`O(3DROXOO,5=S,5=SOXOO1G.|1G.|O!-dO`O,59rO#6ZO!lO1G2kO#8PO`O'#GOONlOSO'#DpO!-mO`O'#DpOXOO(3DQ(3DQO#8jOSO,5:ZO#8nO`O'#DpO#8{O`O'#DpO#9]OSO1G/rOXOO1G/r1G/rO/tOSO1G/rOXOO1G/x1G/xO7oOSO1G/xONlOSO1G/xO#9aOSO'#F}O#9hOSO(3DPOXOO,5=^,5=^O!1mOYO,5=^OXOO1G/f1G/fOXOO7+%h7+%hO#;aOrO,59{O#=POSO,5:_OCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:eOCZOSO,5:tO/tOSO7+%zOCZOSO,5:wO#>oOrO,59xO#@_OSO,5:_O#@cO!lO'#FyOXXO1G2r1G2rOXOO1G2j1G2jOXOO,5<[,5<[O6[OSO,5<[OXOO-E9n-E9nO#9]OSO7+&SOXOO7+$Y7+$YO7oOSO7+$YOXOO7+%e7+%eONlOSO7+$YOXOO,5<],5<]OXOO-E9o-E9oOXOO7+&T7+&TO#BbOSO'#GSO#BiOSO(3DUOXOO,5=`,5=`O#BsO`O,5=`OXOO1G0m1G0mO5kO!fO7+$ROXOO7+$R7+$RO#BwOSO'#GTO#COOSO(3DVOXOO,5=b,5=bOXOO1G0s1G0sO5rOSO,5=bOXOO,5<`,5<`OXOO-E9r-E9rO#CYOSO7+&]O5kO!fO7+&]O/tOSO1G2}O/tOSO1G3OO#C^OSO1G0vO#EPOSO1G0vO#ETOSO1G0vO#FvO!fO1G2}OXOO7+&`7+&`O5kO!fO7+&jOYOSO7+&lO#GZOSO'#GVOXOO'#Gy'#GyOXOO(3DX(3DXO#J[OSO,5;kO/tOSO'#FQO#J`OSO'#FSOXOO7+&u7+&uO#JdOSO7+&uO6[OSO7+&uOXOO7+&y7+&yOXOO7+&}7+&}OXOO7+'Q7+'QOXOO3)/P3)/POXOO1G2w1G2wO#MnOrO1G.}O$ ZOSO1G.}OXOO1G/^1G/^O$ eOrO1G/^O7oOSO1G/^OCZOSO,5=POXOO,5<W,5<WOCZOSO'#DWOXOO-E9j-E9jOXOO,5<Z,5<ZOXOO-E9m-E9mONlOSO1G/^OXOO,5<Y,5<YO7oOSO,5:[ONlOSO,5:[OXOO1G/u1G/uO!-mO`O,5:[O$#QO`O,5:[OXOO7+%^7+%^O#9]OSO7+%^OXOO7+%d7+%dO7oOSO7+%dOXOO,5<X,5<XO$#_OYO-E9kO/tOSO,5<XOXOO1G2x1G2xO$$zOrO'#GmO$&jOrO1G0PO$(YOrO1G0PO$)xOrO1G0PO$+hOrO1G0PO$-WOrO1G0PO$.vOrO1G0PO$0fOrO1G0PO$2UOrO1G0PO$3tOrO1G0PO$5dOrO1G0PO$7SOrO1G0PO$8rOrO1G0`O$:[O!lO<<IfO$<ZOrO1G0cO#=POSO1G/yOXOO3)/Y3)/YOXOO<<In<<InOXOO<<Gt<<GtO7oOSO<<GtOXOO,5<^,5<^O$=yOSO-E9pOXOO'#Ei'#EiO$>TOSO1G2zOXOO<<Gm<<GmOXOO,5<_,5<_OXOO-E9q-E9qO$>[OSO,5<_O#&TOSO1G2|O$>`OSO<<IwOXOO<<Iw<<IwO$>dOSO7+(iO$>hOSO7+(jOXOO7+&b7+&bO$>lOSO7+&bO$>pOSO7+&bO$@cOSO7+&bO/tOSO7+(iO/tOSO7+(jOXOO<<JU<<JUOXOO<<JW<<JWOXOO,5<a,5<aOXOO1G1V1G1VO$@gOSO,5;lOXOO,5;n,5;nO7oOSO<<JaO$@kOSO<<JaOCZOSO7+$iOXOO7+$x7+$xO$@oOrO1G2kO7oOSO7+$xOXOO1G/v1G/vO7oOSO1G/vONlOSO1G/vO!-mO`O1G/vOXOO<<Hx<<HxOXOO<<IO<<IOO$B[OYO3)/VO$CwOrO'#FyOCZOSO'#FiOCZOSO7+%zOXOOAN=`AN=`O$EgO`O1G1xOXOO7+(f7+(fO5rOSO1G1yOXOO7+(h7+(hO5kO!fOAN?cOXOO<<LT<<LTOXOO<<LU<<LUOXOO<<I|<<I|O$EkOSO<<I|O$EoOSO<<I|O$GbOSO<<LTO$GfOSO<<LUOXOO1G1W1G1WOXOOAN?{AN?{O7oOSOAN?{O$GjOrO<<HTOXOO<<Hd<<HdOXOO7+%b7+%bO7oOSO7+%bONlOSO7+%bO$IVOrO-E9gO$JuOrO<<IfOXOO'#Ej'#EjOXOO8;$v8;$vOXOO8;$w8;$wOXOOG24}G24}OXOOAN?hAN?hO$LeOSOAN?hOXOOANAoANAoOXOOANApANApO$LiOSOG25gOXOO<<H|<<H|O7oOSO<<H|OXOOG25SG25SO7oOSOLD+ROXOOAN>hAN>hOXOO!$'Nm!$'Nm",
      stateData: "%!OQOSROS%ROS~UjOX^OYbO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UO~UjOX^OYbO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UO$z$jX~PrXYrXarXerXgrXn$RXorX!^rX!i_X!krX!lrX!nrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!}rX#QrX$|rX%_rX~X^O]!YO^!XOaXOc{OeROg!OOi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UOd$nPd%ZP~P!mOa!^Oe!`Og![O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOY%aX$|%aX`%aXd%aXi%aXn%aX~$}!rO%O!qO%P$lP~UjOX^OYbO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UOh$oP~X^O]!YO^!XOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~X^O]!YO^!XOaXOc!yOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO`%WP~!i!|O~o!}O#Q!}OP%^XY%^Xa%^Xe%^Xg%^X!^%^X!k%^X!l%^X!n%^X!o%^X!p%^X!q%^X!r%^X!s%^X!t%^X!u%^X!v%^X!w%^X!x%^X!y%^X!z%^X!{%^X!}%^X$|%^X%_%^Xd%^X`%^X%b%^Xi%^Xn%^X~o!}O~n#OO~Y#PO$|#PO~%T#SO~a#VO%T#SO%U#UO~^#[Oa#VO%T#SO~e#]Oi#^O%T#SO~Z#dO]#bO^gOi#aO!afO#WiO#XiO#YiO%U#UO~X#kOi#gO%T#SO%U#UOW%iP~a#lO!U#pO~a#qO~iVO~Y#PO${#yO$|#PO~Y#PO${#|O$|#PO~Y#PO${$OO$|#PO~PrXarXd_XdrXerXg_XgrXo_XorX!^rX!i_X!krX!lrX!nrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!}rX#QrX%_rXYrX$|rX`_X`rX%brX#grXirXnrX~g$ROd$kP~d$VO~g!OOd$nX~X^O]!YO^!XOaXOc$YOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UOd$^Zg$^Z~P!mOa!^Oe!`Og!OO!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOd$nP~d$[O~X$`Oc$cOe$_Om$`O{$iO|$bO}$bO%U#UO%]$]Oh%[Ph%dP~d%YXg%YXo%YX!i!hX`%YXh%YX~o!}Od%YXg%YX`%YX~o$jOd%XXg%XX`%XXY%XX$|%XX~i$kO!b$mO%T#SO~g![OY$mX$|$mX`$mXd$mXi$mXn$mX~X^O]!YO^!XOaXOc$uOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO`%fP~%]$wO~X^O]%^O^!XOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!R%]O!U%WO!V%WO!W%WO!X%WO!Y%WO!Z%WO![%WO!]%WO!^%WO!a!WO%T%VO%_UO~$}!rO%O!qO%P$lX~%P%bO~UjOX^OYbO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UOh$oX~h%dO~a!^Oe!`O!k!_O!l!_O%_UOP!TaY!Tag!Ta!^!Ta!n!Ta!o!Ta!p!Ta!q!Ta!r!Ta!s!Ta!t!Ta!u!Ta!v!Ta!w!Ta!x!Ta!y!Ta!z!Ta!{!Ta!}!Ta$|!Tad!Ta`!Ta%b!Tai!Tan!Ta~`%eO~g%hO`$tP~`%jO~X^O]!YO^!XOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOY!Qag!Qa$|!Qad!Qa`!Qa%b!Qai!Qan!Qa~i$kO!b%pO~c!yOe#]Oi#^O%T#SO`%WP~a#VO~!i%tO~c%vOe#]Oi#^O%T#SOd%ZP~X$fOc%wOm$fO%]$wOh%[P~g%yOY$uP$|$uP~%T%{Oh%hP~^#[O~W&OO~X^O]hO^gOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO%TyO%_UO~W&OOY#PO$|#PO~%T&ROh%jP~g&WOW$xP~#[&YO~W&ZO~X^OY&_O]!YO^!XOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO#W&aO#X&aO#Y&aO%TyO%_UO~a#lO~#i&fO~i&hO~#y&kO#z&jOU#waX#waY#wa]#wa^#waa#wae#wai#wam#was#wat#wau#wav#waw#wa!R#wa!U#wa!V#wa!W#wa!X#wa!Y#wa!Z#wa![#wa!]#wa!^#wa!a#wa#W#wa#X#wa#Y#wa#`#wa#c#wa#i#wa#k#wa#m#wa#o#wa#r#wa#x#wa#|#wa$O#wa$Q#wa$T#wa$V#wa$z#wa%T#wa%_#wah#wa#p#waZ#wa#u#wa~%T&nO~g$ROd$kX~c&sOe#]Oi#^O%T#SOd$ZZg$ZZ~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOd$^cg$^c~a!OXglXg!OXhlXh!OXnlXn!OXolX~n&yOo&xOa%eXgkXg%eXhkXh%eXn%eX~a#VOn&{OgzXhzX~X$^Oe$_Om$^O%]&|O~g'TOh$pP~h'VO~n&yOo&xOgkXhkX~g'XOh$sP~h'ZO~X$^Oe$_Om$^O|'[O}'[O%U#UO%]&|O~Y'aO{'cO|'`O}'`O!e'dO%U#UO%]&|Oh$rP~i$kO!b'gO~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOY$]cg$]c$|$]c`$]cd$]c%b$]ci$]cn$]c~P!mOa!^Oe!`Og'lO!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UO`$qP~`'oO~d'pO~P!mOa!^Oe!`O!k!_O!l!_O%_UOY!mig!mi!^!mi!n!mi!o!mi!p!mi!q!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!k!_O!l!_O!n!aO%_UOY!mig!mi!^!mi!o!mi!p!mi!q!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO%_UOY!mig!mi!^!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO%_UOY!mig!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO%_UOY!mig!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO%_UOY!mig!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO%_UOY!mig!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO%_UOY!mig!mi!x!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO%_UOY!mig!mi!y!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO%_UOY!mig!mi!z!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO%_UOY!mig!mi!{!mi!}!mi$|!mid!mi`!mi%b!mii!min!mi~PrXarXerXorX!^rX!i_X!krX!lrX!nrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!}rX#OrX#QrX%_rXg_XgrXh_XhrXo_X~!i'rO~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO#O(PO%_UO~o(QO#Q(QOP%^Xa%^Xe%^X!^%^X!k%^X!l%^X!n%^X!o%^X!p%^X!q%^X!r%^X!s%^X!t%^X!u%^X!v%^X!w%^X!x%^X!y%^X!z%^X!{%^X!}%^X#O%^X%_%^Xg%^Xh%^X~o(QO~P!mOa!^Oe!`Og![O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UO%b%aXY%aX$|%aXd%aX`%aXi%aXn%aX~%b(UO~g%hO`$tX~c(XOe#]Oi#^O%T#SO`$dZg$dZ~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOY#Pig#Pi$|#Pid#Pi`#Pi%b#Pii#Pin#Pi~g%yOY$uX$|$uX~g(dO#[(fOh$vP~h(gO~X(hO~g_Xh_X#[rX~g(kOh$wP~h(mO~#[(nO~g&WOW$xX~i#gO%T#SOW$hZg$hZ~X(rO~o!}O!t(sO#Q!}O#g(tOP%^XY%^Xa%^Xe%^Xg%^X!^%^X!k%^X!l%^X!n%^X!o%^X!p%^X!q%^X!r%^X!s%^X!u%^X!v%^X!w%^X!x%^X!y%^X!z%^X!{%^X!}%^X%_%^X~o!}O!t(sO#g(tO~X^OY(uO]!YO^!XOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~Y(wO~#p({OU#niX#niY#ni]#ni^#nia#nie#nii#nim#nis#nit#niu#niv#niw#ni!R#ni!U#ni!V#ni!W#ni!X#ni!Y#ni!Z#ni![#ni!]#ni!^#ni!a#ni#W#ni#X#ni#Y#ni#`#ni#c#ni#i#ni#k#ni#m#ni#o#ni#r#ni#x#ni#|#ni$O#ni$Q#ni$T#ni$V#ni$z#ni%T#ni%_#nih#niZ#ni#u#ni~UjOX^OYbOZ)RO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#u)QO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UOh$yP~a)UOiVO~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOd$^kg$^k~d)ZO~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOgzahza~o(QOg%YXh%YX~o)aOg%XXh%XX~g'TOh$pX~X$^Oc)cOe$_Om$^O{$iO|$bO}$bO%U#UO%]&|Og$`Zh$`Z~g'XOh$sX~X$fOc%wOm$fO%]$wOg$cZh$cZ~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UOd%Xig%Xi`%XiY%Xi$|%Xi~Y'aO{'cO|'`O}'`O!e'dO%U#UO%]&|Oh$rX~h)kO~|)lO})lO%U#UO%]&|O~{)mO|)lO})lO%U#UO%]&|O~i$kO~g'lO`$qX~X^O]!YO^!XOaXOc)tOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO`$aZg$aZ~a!^Oe!`O!k!_O!l!_O%_UOP!Ta!^!Ta!n!Ta!o!Ta!p!Ta!q!Ta!r!Ta!s!Ta!t!Ta!u!Ta!v!Ta!w!Ta!x!Ta!y!Ta!z!Ta!{!Ta!}!Ta#O!Tag!Tah!Ta~X^O]%^O^!XOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!R%]O!U%WO!V%WO!W%WO!X%WO!Y%WO!Z%WO![%WO!]%WO!^%WO!a!WO%T%VO%_UO~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UO#O!Qag!Qah!Qa~!i*VO~g![O%b$mXP$mXY$mXa$mXe$mX!^$mX!k$mX!l$mX!n$mX!o$mX!p$mX!q$mX!r$mX!s$mX!t$mX!u$mX!v$mX!w$mX!x$mX!y$mX!z$mX!{$mX!}$mX$|$mX%_$mXd$mX`$mXi$mXn$mX~g(dOh$vX~%T%{Og$fZh$fZ~%]*^O~g(kOh$wX~%T&ROg$gZh$gZ~W*eO~X^O]!YO^!XO`*iOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~Y*kO~X^OY*kO]!YO^!XOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~o$jO!t*mO#g*nOY%XXg%XX$|%XX~UjOX^OYbOZ)RO]hO^gOaXOeROiVOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!afO#WiO#XiO#YiO#`kO#clO#imO#knO#moO#opO#rqO#u)QO#xrO#|sO$OtO$QuO$TvO$VwO%TQO%_UOh$yX~h*rO~n*tO~#z*uOU#wqX#wqY#wq]#wq^#wqa#wqe#wqi#wqm#wqs#wqt#wqu#wqv#wqw#wq!R#wq!U#wq!V#wq!W#wq!X#wq!Y#wq!Z#wq![#wq!]#wq!^#wq!a#wq#W#wq#X#wq#Y#wq#`#wq#c#wq#i#wq#k#wq#m#wq#o#wq#r#wq#x#wq#|#wq$O#wq$Q#wq$T#wq$V#wq$z#wq%T#wq%_#wqh#wq#p#wqZ#wq#u#wq~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOgkihki~o*wOgkihki~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOgzihzi~|+OO}+OO%U#UO%]&|O~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UO`$acg$ac~P!mOa!^Oe!`Og+TO!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UO#O%aXh%aX~P!mOa!^Oe!`O!k!_O!l!_O%_UO!^!mi!n!mi!o!mi!p!mi!q!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!k!_O!l!_O!n'sO%_UO!^!mi!o!mi!p!mi!q!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO%_UO!^!mi!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO%_UO!r!mi!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO%_UO!s!mi!t!mi!u!mi!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO%_UO!v!mi!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO%_UO!w!mi!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO%_UO!x!mi!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO%_UO!y!mi!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O%_UO!z!mi!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O%_UO!{!mi!}!mi#O!mig!mih!mi~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO#O+UO%_UO~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO%_UOY!|yg!|y!}!|y$|!|yd!|y`!|y%b!|yi!|yn!|y~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UO#O#Pig#Pih#Pi~#[+WOg$fch$fc~g(dOh$vP~#[+YO~X+[O~`+]O~`+^O~`+_O~X^O]!YO^!XO`+_OaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~Y+aO~n+dO~`+fO~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOg%Xih%Xi~P!mOa!^Oe!`O!^!cO!k!_O!l!_O!n!aO!o!bO!p!bO!q!bO!r!dO!s!eO!t!eO!u!eO!v!fO!w!gO!x!hO!y!iO!z!jO!{!kO!}!lO%_UO`$akg$ak~g+TOP$mXa$mXe$mX!^$mX!k$mX!l$mX!n$mX!o$mX!p$mX!q$mX!r$mX!s$mX!t$mX!u$mX!v$mX!w$mX!x$mX!y$mX!z$mX!{$mX!}$mX#O$mX%_$mXh$mX~%]+nO~`+rO~X^O]!YO^!XO`+rOaXOeROi!SOm^Os^Ot^Ou^Ov^Ow^O!ReO!UWO!VWO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!a!WO%TyO%_UO~`+tO~`+uO~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOgkyhky~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O!}(OO%_UOg$]c#O$]ch$]c~P!mOa!^Oe!`O!^'uO!k!_O!l!_O!n'sO!o'tO!p'tO!q'tO!r'vO!s'wO!t'wO!u'wO!v'xO!w'yO!x'zO!y'{O!z'|O!{'}O%_UO!}!|y#O!|yg!|yh!|y~`+yO~#z+zOU#w!ZX#w!ZY#w!Z]#w!Z^#w!Za#w!Ze#w!Zi#w!Zm#w!Zs#w!Zt#w!Zu#w!Zv#w!Zw#w!Z!R#w!Z!U#w!Z!V#w!Z!W#w!Z!X#w!Z!Y#w!Z!Z#w!Z![#w!Z!]#w!Z!^#w!Z!a#w!Z#W#w!Z#X#w!Z#Y#w!Z#`#w!Z#c#w!Z#i#w!Z#k#w!Z#m#w!Z#o#w!Z#r#w!Z#x#w!Z#|#w!Z$O#w!Z$Q#w!Z$T#w!Z$V#w!Z$z#w!Z%T#w!Z%_#w!Zh#w!Z#p#w!ZZ#w!Z#u#w!Z~R%]Q%T%R!ow~%T%]~",
      goto: "!&S%nPPPPP%oP&PPPPP&rPP'WPP*iPPP-qPPP-q0Y0aPPP0i3o4kPPPPP6z6z8yPPP9P9h6zP;`6zPPPPPPPPP<i6zPP>w?ZP6z6z?_PAgPP6zPPPPPPPPPPPPPP6zPP6zP6z6z6z&rCjPPPDOPDRDU%oPDX%oPD_D_D_P%oP%oP%oP%oPP%oPDeDhPDh%oPPP%oP%oP%oPDl%oP%oP%o%oESEYEaEgEuE}FTFZFbFhFnFuF{GSGZGaGgGjGpGsGxHRHUHXH_HbHeHkHnHtHzH}PPPPPPPPIQPPIvJ{KPKwLeLiPLmP!!t!!xP!$t!$w!$z!%V!%Y!%m!%p!%s!%v!%z!&OmbOPVo!t#O#o#r#s#u&c&h({(|Q#YgQ#cjQ#ikS$b!S'TQ$q!XQ%u#[Q'[$iS'`$k'^S)l'c'dR+O)mn_OPVjo!t#O#o#r#s#u&c&h({(|R&P#d$vYOPVWehot!O!Y![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$j$m$u%W%]%^%p%t&_&c&h&x&{'g'l'r's't'u'v'w'x'y'z'{'|'}(O(P(Q(s(t(u(w({(|)Q)a)c)t*V*k*m*n*w+T+U+aW!TRX{$cQ#TfQ#Xgl#_i!y#V#]$R%h%v%w%y&a&s&y(X)UQ#hkQ$n!WQ$p!XS%s#Y#[Q&S#gQ'j$qQ(_%uQ(p&WQ(q&YQ*b(kQ*d(nR+p+Y#rZOPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$j$m$u%p%t&_&c&h'g'l(P(s(t(u(w({(|)Q)t*k*m*n+aQ#WgS#Zh!YQ$o!X!U%X!l$c%W%]&x&{'r's't'u'v'w'x'y'z'{'|'}(O(Q)a)c*V*w+T+UU%r#X#Y#[Q&z$aS'i$p$qQ(S%^S(]%s%uQ)`&}Q)i'_Q)q'jQ*Z(_Q*z)gQ*|)jQ+j*}R+x+k#j]OPVWeot!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!|!}#O#d#o#q#r#s#u#y$Y$_$j$m$u%p%t&_&c&h'g'l(P(s(t(u(w({(|)Q)t*k*m*n+aU!URX{l#_i!y#V#]$R%h%v%w%y&a&s&y(X)U!S%[!l%W%]&x&{'r's't'u'v'w'x'y'z'{'|'}(O(Q)a)c*V*w+T+UQ&^#lR'P$cS$g!S#^R)f'XU$f!S#^'XR$x!_$x^OPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$c$j$m$u%W%]%p%t&_&c&h&x&{'g'l'r's't'u'v'w'x'y'z'{'|'}(O(P(Q(s(t(u(w({(|)Q)a)c)t*V*k*m*n*w+T+U+a#Z!oS!P!w#R$U$X$s$t$z${$|$}%O%P%Q%R%S%T%U%Y%`%l&v'O']'n'q(R)[)_)s)v)w)x)y)z){)|)}*O*P*Q*R*S*T*U*y+R+g+l+m!sTOPVXot!`!q!t!|#O#d#l#o#q#r#s#u#y$_$m%p%t&_&c&h'g'r(s(t(u(w({(|)Q*V*k*m*n+a#p[OPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!|!}#O#d#o#q#r#s#u#y$Y$_$j$m$u%p%t&_&c&h'g'l(P(s(t(u(w({(|)Q)t*k*m*n+a!U%Z!l$c%W%]&x&{'r's't'u'v'w'x'y'z'{'|'}(O(Q)a)c*V*w+T+UQ%|#aQ&U#gQ&]#lQ*](dR*c(k$y^OPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$c$j$m$u%W%]%p%t&_&c&h&x&{'g'l'r's't'u'v'w'x'y'z'{'|'}(O(P(Q(s(t(u(w({(|)Q)a)c)t*V*k*m*n*w+T+U+aQ$d!SR)d'TY$^!S$b$i'T'[S'_$k'^U)j'`'c'dS*})l)mR+k+OlbOPVo!t#O#o#r#s#u&c&h({(|Q#wrS%k!|'rQ%q#WQ'h$oQ([%rS(^%t*VQ)S&jQ)T&kQ)^&zQ)p'iQ*Y(]Q*x)`Q*{)iQ+Q)qQ+V*ZQ+e*uQ+h*zQ+i*|Q+v+fQ+w+jQ+{+xR+|+z#U!nS!P!w$U$X$s$t$z${$|$}%O%P%Q%R%S%T%U%Y%`%l&v'O']'n'q)[)_)s)v)w)x)y)z){)|)}*O*P*Q*R*S*T*U*y+R+g+l+mT%n#R(R$x^OPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$c$j$m$u%W%]%p%t&_&c&h&x&{'g'l'r's't'u'v'w'x'y'z'{'|'}(O(P(Q(s(t(u(w({(|)Q)a)c)t*V*k*m*n*w+T+U+aQ#rmQ#snQ#upQ#vqR(z&fQ$l!WQ%o#TQ'f$nQ)n'eQ*X(ZR+P)oT'a$k'^#rZOPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!|!}#O#d#l#o#q#r#s#u#y$Y$_$j$m$u%p%t&_&c&h'g'l(P(s(t(u(w({(|)Q)t*k*m*n+aS#Zh!Y!U%X!l$c%W%]&x&{'r's't'u'v'w'x'y'z'{'|'}(O(Q)a)c*V*w+T+UR(S%^#p[OPRVWXeot{!O![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!|!}#O#d#o#q#r#s#u#y$Y$_$j$m$u%p%t&_&c&h'g'l(P(s(t(u(w({(|)Q)t*k*m*n+a!U%Z!l$c%W%]&x&{'r's't'u'v'w'x'y'z'{'|'}(O(Q)a)c*V*w+T+UR&]#ln_OPVjo!t#O#o#r#s#u&c&h({(|R&_#lR#fjR*_(fR+o+WQ#hkR(p&WQ#olR&c#pR&i#vT(}&h(|l`OPVo!t#O#o#r#s#u&c&h({(|Q&o#|R&p$OQPORxPS$Qz$TR&q$QQ!pUR%_!pQ!ZSU$r!Z(T+SQ(T%`R+S)vU}R!P$UR$W}Q!tVR%c!tQ'S$dR)b'SS'k$t'nR)r'kQ'^$kR)h'^Q'W$gR)e'WS%g!z%fR(W%gQ%x#`R(`%xS(c%|*_R*[(cS(j&S*dR*a(jQ&V#hR(o&VQ(|&hR*q(|RdOQ$SzR&t$TR!sUV!]S%`)vQ!QRQ$Z!PR&u$UR!vVR'U$dQ'm$tR)u'nR'b$kR'Y$gQ%i!zR(V%fR%z#`Q(e%|R+X*_Q(l&SR+Z*dR&X#hR)P&hScOPS!uV!tQ#toQ%m#OQ&b#oQ&d#rQ&e#sQ&g#uQ(y&cS(}&h(|R*p({Q#QaQ#xsQ#{uQ#}vQ$PwQ&P#fQ&[#kQ&m#zQ(b%zQ(i&QQ)V&lQ)W&oQ)X&pQ*`(hQ*f(rQ*o(zR+q+[T!{X#VSzR#]S!zX#VS#`i&aS$T{%vQ%f!yQ&r$RS'Q$c%wQ(Y%hQ(a%yQ)Y&sR*W(Xj!VRXi{!y#V#]$R%h%v%y&s(XS'R$c%wQ(x&aQ)]&yR*v)UT|R#]T$h!S#^!hSOPVXot!`!t#O#d#l#o#q#r#s#u#y$_$m%p&_&c&h'g(s(t(u(w({(|)Q*k*m*n+aQ!PRQ!wWQ#ReQ$U{Q$X!OQ$s![Q$t!^Q$z!aQ${!bQ$|!cQ$}!dQ%O!eQ%P!fQ%Q!gQ%R!hQ%S!iQ%T!jQ%U!kQ%Y!lU%`!q!|%tQ%l!}Q&v$YS'O$c)cQ']$jQ'n$uQ'q%WQ(R%]Q)[&xQ)_&{Q)s'lS)v'r*VQ)w'sQ)x'tQ)y'uQ)z'vQ){'wQ)|'xQ)}'yQ*O'zQ*P'{Q*Q'|Q*R'}Q*S(OQ*T(PQ*U(QQ*y)aQ+R)tQ+g*wQ+l+TR+m+UT!rU!plaOPVo!t#O#o#r#s#u&c&h({(|S!xX#qQ#ztQ$y!`Q%a!qS%k!|'rQ&Q#dQ&`#lQ&l#yQ&w$_Q'e$mQ(Z%pS(^%t*VQ(v&_Q)o'gQ*g(sQ*h(tQ*j(uQ*l(wQ*s)QQ+`*kQ+b*mQ+c*nR+s+aR!RRR$e!SS$a!S'TS&}$b$iR)g'[R$v!^lbOPVo!t#O#o#r#s#u&c&h({(|R#ejR%}#aR#jkR&T#gT#ml#pT#nl#pT)O&h(|",
      nodeNames: "⚠ PostfixOp LineComment BlockComment Script ExportDeclaration export Star from String ; default FunctionDeclaration async function VariableDefinition ) ( ParamList Spread ] [ ArrayPattern , } { ObjectPattern PatternProperty PropertyName Number : Equals TemplateString SequenceExpression VariableName BooleanLiteral this null super RegExp ArrayExpression ObjectExpression Property async get set PropertyNameDefinition Block NewExpression new ArgList UnaryExpression await yield void typeof delete LogicOp BitOp ArithOp ArithOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration static FunctionExpression ArrowFunction ParamList Arrow MemberExpression . ?. BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp in instanceof CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplatExpression ClassDeclaration VariableDeclaration let var const ExportGroup as VariableName VariableName ImportDeclaration import ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break Label ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
      nodeProps: [
        [NodeProp.top, 4,true],
        [NodeProp.openedBy, 16,"(",20,"[",24,"{"],
        [NodeProp.closedBy, 17,")",21,"]",25,"}"]
      ],
      repeatNodeCount: 16,
      tokenData: "=R~R!SX^$_pq$_qr%Srs%itu&]uv&vvw'Twx'exy(Syz(Xz{(^{|(s|})T}!O)Y!O!P)e!P!Q*u!Q!R5i!R![6c![!]8S!]!^8Z!^!_8`!_!`8x!`!a9b!a!b9x!c!}&]!}#O:_#P#Q:d#Q#R:i#R#S&]#S#T:q#T#o&]#o#p:v#p#q:{#q#r;W#r#s;_#y#z$_$f$g$_$g#BY&]#BY#BZ;d#BZ$IS&]$IS$I_;d$I_$I|&]$I|$JO;d$JO$JT&]$JT$JU;d$JU$KV&]$KV$KW;d$KW&FU&]&FU&FV;d&FV~&]~$dY%R~X^$_pq$_#y#z$_$f$g$_#BY#BZ$_$IS$I_$_$I|$JO$_$JT$JU$_$KV$KW$_&FU&FV$_Z%XP!ZP!_!`%[Y%aP!vY!_!`%dY%iO!vY~%nUX~OY%iZr%irs&Qs#O%i#O#P&V#P~%i~&VOX~~&YPO~%i_&dU%]S%TZtu&]!Q![&]!c!}&]#R#S&]#T#o&]$g~&]~&{P!p~!_!`'OY'TO#QY~'YQ!y~vw'`!_!`'O~'eO!z~~'jUX~OY'eZw'ewx&Qx#O'e#O#P'|#P~'e~(PPO~'e~(XOa~~(^O`~_(eQ%UT!qYz{(k!_!`'OY(pP!nY!_!`'O~(xQ!^~{|)O!_!`'O~)TO!]~~)YOg~~)_Q!^~}!O)O!_!`'O_)jQ!kY!O!P)p!Q![){T)sP!O!P)vT){OcTT*QRmT!Q![){!g!h*Z#X#Y*ZT*^R{|*g}!O*g!Q![*mT*jP!Q![*mT*rPmT!Q![*m~*zZ!oYOY+mZz+mz{-f{!P+m!P!Q3z!Q!_+m!_!`4V!`!}+m!}#O4s#O#P5`#P~+mP+rVwPOY+mZ!P+m!P!Q,X!Q!}+m!}#O,p#O#P-]#P~+mP,^UwP#Z#[,X#]#^,X#a#b,X#g#h,X#i#j,X#m#n,XP,sTOY,pZ#O,p#O#P-S#P#Q+m#Q~,pP-VQOY,pZ~,pP-`QOY+mZ~+m~-kYwPOY-fYZ.ZZz-fz{/O{!P-f!P!Q2v!Q!}-f!}#O0^#O#P2d#P~-f~.^ROz.Zz{.g{~.Z~.jTOz.Zz{.g{!P.Z!P!Q.y!Q~.Z~/OOR~~/TYwPOY-fYZ.ZZz-fz{/O{!P-f!P!Q/s!Q!}-f!}#O0^#O#P2d#P~-f~/zUR~wP#Z#[,X#]#^,X#a#b,X#g#h,X#i#j,X#m#n,X~0aWOY0^YZ.ZZz0^z{0y{#O0^#O#P2Q#P#Q-f#Q~0^~0|YOY0^YZ.ZZz0^z{0y{!P0^!P!Q1l!Q#O0^#O#P2Q#P#Q-f#Q~0^~1qTR~OY,pZ#O,p#O#P-S#P#Q+m#Q~,p~2TTOY0^YZ.ZZz0^z{0y{~0^~2gTOY-fYZ.ZZz-fz{/O{~-f~2{_wPOz.Zz{.g{#Z.Z#Z#[2v#[#].Z#]#^2v#^#a.Z#a#b2v#b#g.Z#g#h2v#h#i.Z#i#j2v#j#m.Z#m#n2v#n~.Z~4PQQ~OY3zZ~3zZ4^V#QYwPOY+mZ!P+m!P!Q,X!Q!}+m!}#O,p#O#P-]#P~+mP4vTOY4sZ#O4s#O#P5V#P#Q+m#Q~4sP5YQOY4sZ~4sP5cQOY+mZ~+mT5nVmT!O!P6T!Q![6c!g!h*Z#U#V6t#X#Y*Z#c#d7Y#l#m7hT6YRmT!Q![6T!g!h*Z#X#Y*ZT6hSmT!O!P6T!Q![6c!g!h*Z#X#Y*ZT6wQ!Q!R6}!R!S6}T7SQmT!Q!R6}!R!S6}T7]P!Q!Y7`T7ePmT!Q!Y7`T7kR!Q![7t!c!i7t#T#Z7tT7yRmT!Q![7t!c!i7t#T#Z7tZ8ZOnR#OW~8`OY~~8eQ!s~!^!_8k!_!`8s~8pP!r~!_!`'O~8xO!s~~8}Qo~!_!`9T!`!a9]Y9YP!vY!_!`%d~9bO!i~~9gQ!s~!_!`8s!`!a9m~9rQ!r~!_!`'O!`!a8k~9}Q!}~!O!P:T!a!b:Y~:YO!l~~:_O!{~~:dOe~~:iOd~~:nP!x~!_!`'O~:vO%_~~:{Oi~~;QQ!w~!_!`'O#p#q:Y_;_Oh]%bQ~;dO![~~;mf%]S%TZ%R~X^$_pq$_tu&]!Q![&]!c!}&]#R#S&]#T#o&]#y#z$_$f$g$_$g#BY&]#BY#BZ;d#BZ$IS&]$IS$I_;d$I_$I|&]$I|$JO;d$JO$JT&]$JT$JU;d$JU$KV&]$KV$KW;d$KW&FU&]&FU&FV;d&FV~&]",
      tokenizers: [noSemicolon, postfix, 0, 1, 2, 3, insertSemicolon, template],
      topRules: {"Script":[0,4]},
      specializeTable: 8507,
      specializations: [{export:12, from:17, default:22, async:27, function:28, true:70, false:70, this:72, null:74, super:76, new:98, await:105, yield:107, void:108, typeof:110, delete:112, class:126, extends:128, in:164, instanceof:166, let:200, var:202, const:204, as:209, import:216, for:222, of:231, while:234, with:238, do:242, if:246, else:248, switch:252, case:258, try:264, catch:266, finally:268, return:272, throw:276, break:280, continue:286, debugger:290},
       {async:87, get:89, set:91, static:135}],
      tokenPrec: 8499
    });

    /// A collection of JavaScript-related
    /// [snippets](#autocomplete.snippet).
    var snippets = [
        { keyword: "function",
            name: "function definition",
            snippet: "function ${name}(${params}) {\n\t${}\n}" },
        { keyword: "for",
            name: "for loop",
            snippet: "for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}" },
        { keyword: "for",
            name: "for of loop",
            snippet: "for (let ${name} of ${collection}) {\n\t${}\n}" },
        { keyword: "try",
            name: "try block",
            snippet: "try {\n\t${}\n} catch (${error}) {\n\t${}\n}" },
        { keyword: "class",
            name: "class definition",
            snippet: "class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}" },
        { keyword: "import",
            name: "import named",
            snippet: "import {${names}} from \"${module}\"\n${}" },
        { keyword: "import",
            name: "import default",
            snippet: "import ${name} from \"${module}\"\n${}" }
    ];

    var statementIndent = continuedIndent({ except: /^{/ });
    /// A syntax provider based on the [Lezer JavaScript
    /// parser](https://github.com/lezer-parser/javascript), extended with
    /// highlighting and indentation information.
    var javascriptSyntax = new LezerSyntax(parser.withProps(indentNodeProp.add(function (type) {
        if (type.name == "IfStatement")
            { return continuedIndent({ except: /^\s*({|else\b)/ }); }
        if (type.name == "TryStatement")
            { return continuedIndent({ except: /^\s*({|catch|finally)\b/ }); }
        if (type.name == "LabeledStatement")
            { return flatIndent; }
        if (type.name == "SwitchBody")
            { return function (context) {
                var after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
                return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
            }; }
        if (type.name == "TemplateString" || type.name == "BlockComment")
            { return function () { return -1; }; }
        if (/(Statement|Declaration)$/.test(type.name) || type.name == "Property")
            { return statementIndent; }
        return undefined;
    }), foldNodeProp.add({
        Block: function Block(tree) { return { from: tree.start + 1, to: tree.end - 1 }; },
        ObjectExpression: function ObjectExpression(tree) { return { from: tree.start + 1, to: tree.end - 1 }; },
        ArrayExpression: function ArrayExpression(tree) { return { from: tree.start + 1, to: tree.end - 1 }; },
        BlockComment: function BlockComment(tree) { return { from: tree.start + 2, to: tree.end - 2 }; }
    }), styleTags({
        "get set async static": "modifier",
        "for while do if else switch try catch finally return throw break continue default case": "keyword control",
        "in of await yield void typeof delete instanceof": "operatorKeyword",
        "export import let var const function class extends": "keyword definition",
        "with debugger from as": "keyword",
        TemplateString: "string#2",
        "BooleanLiteral Super": "atom",
        this: "self",
        null: "null",
        Star: "modifier",
        VariableName: "variableName",
        VariableDefinition: "variableName definition",
        Label: "labelName",
        PropertyName: "propertyName",
        PropertyNameDefinition: "propertyName definition",
        "PostfixOp UpdateOp": "updateOperator",
        LineComment: "lineComment",
        BlockComment: "blockComment",
        Number: "number",
        String: "string",
        ArithOp: "arithmeticOperator",
        LogicOp: "logicOperator",
        BitOp: "bitwiseOperator",
        CompareOp: "compareOperator",
        RegExp: "regexp",
        Equals: "operator definition",
        Spread: "punctuation",
        "Arrow :": "punctuation definition",
        "( )": "paren",
        "[ ]": "squareBracket",
        "{ }": "brace",
        ".": "derefOperator",
        ", ;": "separator"
    })), {
        languageData: {
            closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
            commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
        }
    });
    /// Returns an extension that installs JavaScript support features
    /// (completion of [snippets](#javascript.snippets)).
    function javascriptSupport() {
        return javascriptSyntax.languageData.of({ autocomplete: completeSnippets(snippets) });
    }
    /// Returns an extension that installs the JavaScript syntax and
    /// support features.
    function javascript() {
        return [javascriptSyntax, javascriptSupport()];
    }

    /// Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
    /// [lint](#lint) integration. `eslint` should be an instance of the
    /// [`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
    /// class, and `config` an optional ESLint configuration. The return
    /// value of this function can be passed to [`linter`](#lint.linter)
    /// to create a JavaScript linting extension.
    ///
    /// Note that ESLint targets node, and is tricky to run in the
    /// browser. The [eslint4b](https://github.com/mysticatea/eslint4b)
    /// and
    /// [eslint4b-prebuilt](https://github.com/marijnh/eslint4b-prebuilt/)
    /// packages may help with that.
    function esLint(eslint, config) {
        if (!config) {
            config = {
                parserOptions: { ecmaVersion: 2019, sourceType: "module" },
                env: { browser: true, node: true, es6: true, es2015: true, es2017: true, es2020: true },
                rules: {}
            };
            eslint.getRules().forEach(function (desc, name) {
                if (desc.meta.docs.recommended)
                    { config.rules[name] = 2; }
            });
        }
        function range(state, from, to) {
            if ( from === void 0 ) from = 0;
            if ( to === void 0 ) to = state.doc.length;

            var fromLine = state.doc.lineAt(from), offset = { line: fromLine.number - 1, col: from - fromLine.from, pos: from };
            return eslint.verify(state.sliceDoc(from, to), config)
                .map(function (val) { return translateDiagnostic(val, state.doc, offset); });
        }
        return function (view) {
            var ref = view.state.facet(EditorState.syntax);
            var syntax = ref[0];
            if (syntax == javascriptSyntax)
                { return range(view.state); }
            if (!syntax || !(syntax instanceof LezerSyntax && syntax.parser.hasNested))
                { return []; }
            var found = [];
            // FIXME move to async parsing?
            syntax.getTree(view.state).iterate({
                enter: function enter(type, start, end) {
                    if (type == javascriptSyntax.parser.topType) {
                        for (var i = 0, list = range(view.state, start, end); i < list.length; i += 1)
                            {
                            var d = list[i];

                            found.push(d);
                        }
                        return false;
                    }
                    return undefined;
                }
            });
            return found;
        };
    }
    function mapPos(line, col, doc, offset) {
        return doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1);
    }
    function translateDiagnostic(input, doc, offset) {
        var start = mapPos(input.line, input.column, doc, offset);
        var result = {
            from: start,
            to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,
            message: input.message,
            source: input.ruleId ? "jshint:" + input.ruleId : "jshint",
            severity: input.severity == 1 ? "warning" : "error",
        };
        if (input.fix) {
            var ref = input.fix;
            var range = ref.range;
            var text = ref.text;
            var from = range[0] + offset.pos - start, to = range[1] + offset.pos - start;
            result.actions = [{
                    name: "fix",
                    apply: function apply(view, start) {
                        view.dispatch({ changes: { from: start + from, to: start + to, insert: text }, scrollIntoView: true });
                    }
                }];
        }
        return result;
    }

    var _m24 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        esLint: esLint,
        javascript: javascript,
        javascriptSupport: javascriptSupport,
        javascriptSyntax: javascriptSyntax,
        snippets: snippets
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var 
      printKeyword = 1,
      newline$1 = 195,
      newlineBracketed = 196,
      newlineEmpty = 197,
      eof = 198,
      continueBody = 199,
      endBody = 200,
      ParenthesizedExpression = 21,
      TupleExpression = 48,
      ComprehensionExpression = 49,
      ArrayExpression = 53,
      ArrayComprehensionExpression = 56,
      DictionaryExpression = 57,
      DictionaryComprehensionExpression = 60,
      SetExpression = 61,
      SetComprehensionExpression = 62,
      compoundStatement = 257;

    var newline$1$1 = 10, carriageReturn = 13, space$1 = 32, tab = 9, hash = 35, parenOpen = 40, dot = 46;

    var bracketed = [
      ParenthesizedExpression, TupleExpression, ComprehensionExpression, ArrayExpression, ArrayComprehensionExpression,
      DictionaryExpression, DictionaryComprehensionExpression, SetExpression, SetComprehensionExpression
    ], parentStatement = [compoundStatement];

    var caches = new WeakMap;

    // Per-input-stream indentation cache. `prev` maps indentation depths
    // to the last position at which a statement indented to that depth
    // was seen. There's an extra set of slots for the _current_
    // indentation, since that needs to be available alongside a previous
    // indentation position at the same level.
    var Cache = function Cache() {
      this.last = this.lastIndent = -1;
      this.prev = [];
    };

    Cache.prototype.get = function get (pos) {
      if (this.last == pos) { return this.lastIndent }
      for (var i = 0; i < this.prev.length; i++) { if (this.prev[i] == pos) { return i } }
      return -1
    };

    Cache.prototype.set = function set (pos, indent) {
      if (pos == this.last) { return }
      if (this.last > -1) { this.setPrev(this.last, this.lastIndent); }
      this.last = pos;
      this.lastIndent = indent;
    };

    Cache.prototype.setPrev = function setPrev (pos, indent) {
      while (this.prev.length < indent) { this.prev.push(-1); }
      this.prev[indent] = pos;
    };

    Cache.for = function for$1 (input) {
      var found = caches.get(input);
      if (!found) { caches.set(input, found = new Cache); }
      return found
    };

    var maxIndent = 50;

    function getIndent(input, pos) {
      var cache = Cache.for(input), found = cache.get(pos);
      if (found > -1) { return found }

      // This shouldn't happen very often (or even at all) in normal
      // parsing, since the indentations are stored by the newline
      // tokenizer ahead of time. But it's kind of tricky to prove whether
      // that always happens in incremental parsing scenarios, so here's a
      // fallback anyway.
      var before = input.read(Math.max(0, pos - maxIndent), pos);
      var count = 0, start = before.length;
      for (; start > 0; start--) {
        var next = before.charCodeAt(start - 1);
        if (next == newline$1$1 || next == carriageReturn) { break }
      }
      for (var i = start; i < before.length; i++) {
        var ch = before.charCodeAt(i);
        if (ch == space$1) { count++; }
        else if (ch == tab) { count += 8 - (count % 8); }
        else { break }
      }
      cache.setPrev(pos, count);
      return count
    }

    var newlines = new ExternalTokenizer(function (input, token, stack) {
      var next = input.get(token.start);
      if (next < 0) {
        token.accept(eof, token.start);
        return
      }
      if (next != newline$1$1 && next != carriageReturn) { return }
      if (stack.startOf(bracketed) > -1) {
        token.accept(newlineBracketed, token.start + 1);
        return
      }
      var scan = token.start + 1, indent = 0;
      for (; scan < input.length; scan++) {
        var ch = input.get(scan);
        if (ch == space$1) { indent++; }
        else if (ch == tab) { indent += 8 - (indent % 8); }
        else if (ch == newline$1$1 || indent == carriageReturn || ch == hash) {
          token.accept(newlineEmpty, token.start + 1);
          return
        } else {
          break
        }
      }
      token.accept(newline$1, token.start + 1);
      Cache.for(input).set(scan, indent);
    }, {contextual: true});

    var bodyContinue = new ExternalTokenizer(function (input, token, stack) {
      var parent = stack.startOf(parentStatement);
      var parentIndent = parent < 0 ? 0 : getIndent(input, parent);
      var indentHere = getIndent(input, token.start);
      token.accept(indentHere <= parentIndent ? endBody : continueBody, token.start);
    }, {contextual: true});

    var legacyPrint = new ExternalTokenizer(function (input, token) {
      var pos = token.start;
      for (var print = "print", i = 0; i < print.length; i++, pos++)
        { if (input.get(pos) != print.charCodeAt(i)) { return } }
      var end = pos;
      if (/\w/.test(String.fromCharCode(input.get(pos)))) { return }
      for (;; pos++) {
        var next = input.get(pos);
        if (next == space$1 || next == tab) { continue }
        if (next != parenOpen && next != dot && next != newline$1$1 && next != carriageReturn && next != hash)
          { token.accept(printKeyword, end); }
        return
      }
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var parser$1 = Parser.deserialize({
      states: "!>hO]O!LTOOO$^O!LTO'#FsO'bO!LUO'#HSO[O!LQ'#Cm'#CmO[O!LQ'#Cn'#CnO*PO!LSO'#ClO+`O!LUO'#HRO[O!LQ'#HS'#HSO[O!LQ'#DS'#DSO[O!LQ'#HR'#HRO,]O!LSO'#CqO-xO!LSO'#DcO/eO!LSO'#DgO1TO!LUO'#F|O[O!LQ'#Dt'#DtO4X[WO'#DtO4`[`O'#DtO4g[pO'#DuO4q[!bO'#DuO4{[#tO'#DuO5V[&jO'#DuO[O!LQ(3Cm(3CmO[O!LQ'#Gs'#GsO*PO!LSO'#GrO5aO!LUO'#GrO[O!LQ'#E]'#E]O5wO!LSO'#E^O[O!LQ'#Gq'#GqO7^O!LSO'#GpO7hO!LSO'#GeO[O!LQ(3DU(3DUO7uO!LSO'#E}O[O!LQ'#Hw'#HwO[O!LQ'#Go'#GoO[O!LQ(3Cd(3CdQ[O!LSOOO*PO!LSO'#CoO8PO!LSO'#CzO9cO!LSO'#DOO9sO!LSO'#HWO;`O!LUO'#EQO*PO!LSO'#ERO[O!LQ'#ET'#ETO[O!LQ'#EV'#EVO[O!LQ'#EX'#EXO;sO!LSO'#EZO=]O!LSO'#E_O>{O!LSO'#EaO?PO!LUO'#EaO>{O!LSO'#EdO5wO!LSO'#EgO5wO!LSO'#EjO5wO!LSO'#EmO?ZO!LSO'#EoO@mO!LSO'#EtO@wO!LSO'#EpO5wO!LSO'#EtO>{O!LSO'#EvO>{O!LSO'#E{O>{O!LSO'#FOO[O!LQ,5;l,5;lO[O!LQ'#Cc'#CcO[O!LQ'#Cd'#CdO[O!LQ'#Ce'#CeO[O!LQ'#Cf'#CfO[O!LQ'#Cg'#CgO[O!LQ'#Ch'#ChO[O!LQ'#Cj'#CjO*PO!LSO,58|O*PO!LSO,58|O*PO!LSO,58|O*PO!LSO,58|O*PO!LSO,58|O*PO!LSO,58|O*PO!LSO,58|O@{O!LSO'#DnO[O!LQ,5:X,5:XOBkO!LSO,5:[ODTO#)WO,5:[ODXO!LUO,59WO8PO!LSO,59_O8PO!LSO,59_O8PO!LSO,59_OFvO!LSO,59_OFzO!LSO,59_OH^O!LSO,59gOIpO!LSO'#HROKVO!LSO'#HQO[O!LQ'#HQ'#HQO[O!LQ'#DY'#DYOKmO!LSO,59]O*PO!LSO,59]OKzO!LSO,59]OH^O!LSO'#CzO9cO!LSO'#DOOLOO!LSO,5:QO*PO!LSO,5:QO[O!LQ,59},59}OL]O!LSO,59}OLaO!LSO,5:WO*PO!LSO,5:WO*PO!LSO,5:UO[O!LQ,5:R,5:ROLqO!LSO,5:ROLuO!LSO,5:VO[O!LQ,5;u,5;uOLy[WO'#F}O[[O(3Cn(3CnOMQ[WO,5:`OMU[`O'#GOO[[O(3Co(3CoOM][`O,5:`OMa[pO'#GPOMkO!LSO'#DvO[[O(3Cp(3CpO! W[pO,5:aO! [[!bO'#GSO[[O(3Cs(3CsO! f[!bO,5:aO! j[#tO'#GTO[[O(3Ct(3CtO! t[WO,5:aO! x[&jO'#GUO[[O(3Cu(3CuO!!S[`O,5:aO!!WO!LUO,5=^O!#pO!LUO'#GVO!$WO#4^O(3CvO[O!LQ,5=^,5=^O[O!LQ,5:x,5:xO!&VO!LSO'#G^O!&aO!LTO(3C}O!({O!LSO,5=[O[O!LQ,5<^,5<^O[O!LQ,5;i,5;iO@sO!LSO'#EvO!)SO!LUO,59ZO!+qO!LUO,59fO!,nO!LSO'#HTO!,xO!LSO'#HTO>{O!LSO'#HTO!-SO!LSO'#DQO!-ZO!LSO,59jO!-_O!LSO'#HXO*PO!LSO'#HXO5wO!LSO,5=rO[O!LQ,5=r,5=rO5wO!LSO'#D|O!-{O!LSO'#GWO[O!LQ'#D}'#D}O!.YO!LSO'#FeO[O!LQ,58z,58zO!/uO!LSO,58zO,`O!LSO,5:jO!/yO!LUO,5:mO[O!LQ,5:u,5:uO!1YO!LSO,5:yO!1jO!LUO,5:{O!1zO!LUO'#GZO[O!LQ(3Cz(3CzO!2XO!LSO,5:{O!2`O!LUO,5:{O!2gO!LSO,5;OO!2tO!LSO,5;RO@wO!LSO,5;UO@wO!LSO,5;XO!3RO!LUO'#HxO*PO!LSO'#HxO!4[O!LSO,5;ZO?ZO!LSO,5;ZO5wO!LSO,5;`O>{O!LSO,5;bO!4`O!LTO'#EkO!6tO&FXO,5;[O!:[O!LSO'#HyO@wO!LSO,5;`O!:fO!LSO,5;bO!:jO!LSO,5;gO!:qO!LUO,5;jO!:{O!LUO1G.hO!=jO!LUO1G.hO!@XO!LUO1G.hO!BvO!LUO1G.hO!EeO!LUO1G.hO!HSO!LUO1G.hO!JqO!LUO1G.hO!M`O!LSO'#H_O!MmO!LUO'#GsO5wO!LSO'#H_O[O!LQ,5:Y,5:YO# iO!LSO,5:YO# pO!LSO'#H`O# zO!LSO'#H`O##jO!LSO1G/vO[O!LQ'#Dr'#DrO[O!LQ1G/v1G/vO[O!LQ1G.y1G.yO##nO!LUO1G.yO#$kO!LUO1G.yO8PO!LSO1G.yO#%hO!LSO1G/ROH^O!LSO,59_OH^O!LSO,59_OH^O!LSO,59_O#&OO!LSO,59_O#&SO!LSO,59_OH^O!LSO,59gO[O!LQ'#DX'#DXO5wO!LSO,59rO[O!LQ1G.w1G.wO#'fO!LSO'#FvO#'mO!LSO1G/dO#)YO!LSO1G/dO#)aO!LSO1G/eO*PO!LSO'#HYO#)eO!LSO'#HYO#)iO!LUO1G.wO#*xO!LSO,59fO#,bO!LSO,59jO#,fO!LSO'#FxO#,mO!LSO(3CiO[O!LQ,5=w,5=wO#.]O!LSO1G/lO#.aO!LUO1G/lO[O!LQ1G/i1G/iO#/pO!LSO'#FuO#0^O!LSO(3CfO[O!LQ,5=s,5=sO5wO!LSO1G/pO#2cO!LSO1G/rO#2gO!LUO1G/rO#3vO!LUO1G/pO[O!LQ1G/m1G/mO[O!LQ1G/q1G/qO[[O,5;v,5;vO[O!LQ1G/z1G/zO[[O,5;w,5;wO[[O,5;x,5;xO#5VO!LSO'#HkO5wO!LSO'#HkO#5dO!LSO,5:bO[O!LQ1G/{1G/{O[[O,5;{,5;{O[[O,5;|,5;|O[[O,5;},5;}O[O!LQ1G2x1G2xO[O!LQ,5<O,5<OO*PO!LSO,5<OO[O!LQ-E9b-E9bO[O!LQ,5<V,5<VO[O!LQ-E9i-E9iO[O!LQ1G2v1G2vO[O!LQ'#DT'#DTO5wO!LSO,5=oO[O!LQ,5=o,5=oO#5nO!LSO'#FtO#5uO!LSO'#FRO[O!LQ,59l,59lO#6SO!LSO1G/UO#7iO!LUO,5=sO[O!LQ1G3^1G3^O[O!LQ,5:h,5:hO[O!LQ,5<P,5<PO*PO!LSO'#GrO#9XO!LSO'#GrO[O!LQ-E9c-E9cO[O!LQ1G.f1G.fO[O!LQ1G0U1G0UO!2tO!LSO1G0UO#9iO!LSO'#FwO#9yO!LSO(3ChO[O!LQ1G0X1G0XO5wO!LSO1G0eO5wO!LSO1G0eO#;iO!LUO'#GYO>{O!LSO'#FgO#<PO!LSO1G0gO[O!LQ,5<S,5<SO#<^O!LSO1G0gO!2`O!LUO1G0gO#<hO!LSO1G0gO#<lO!LSO'#G]O#<yO!LSO(3C|O[O!LQ1G0j1G0jO#=ZO!LSO'#GXO#=kO!LSO(3CxO[O!LQ1G0m1G0mO#?aO&FXO1G0pO#BtO&FXO1G0sO#FUO!LSO'#GaO#F]O!LSO(3DQO[O!LQ,5>d,5>dO!3RO!LUO,5>dO5wO!LSO1G0uO#GuO!LSO1G0uO@wO!LSO1G0zO!:fO!LSO1G0|O[O!LQ,5;V,5;VO#GyO!LTO,5;VO#JwO&FXO'#GbO#N_O!LSO'#FoO$ wO&FXO1G0vO$%[O!LSO'#GcO$%cO!LSO(3DSO[O!LQ,5>e,5>eO>{O!LSO,5>eO[O!LQ1G0z1G0zO$'OO!LSO'#ExO$'cO#)WO1G0|O[O!LQ1G1R1G1RO@wO!LSO1G1RO$'jO!LSO1G1UO[O!LQ,5=y,5=yO[O!LQ'#Do'#DoO5wO!LSO,5=yO$'qO!LSO'#FzO$'xO!LSO(3CkO$)kO!LSO1G/tO$)oO!LSO'#F{O$)vO!LSO(3ClO[O!LQ,5=z,5=zO$+fO!LSO,5=zO$-UO!LSO,5=zO$.qO!LSO,5=zO[O!LQ7+%b7+%bO[O!LQ7+$e7+$eO#6SO!LSO7+$mO$.{O!LSO1G.yO$0eO!LSO1G.yOH^O!LSO1G.yO$1}O!LSO1G/RO[O!LQ1G/^1G/^O$2eO!LSO'#FTO[O!LQ,5;o,5;oO[O!LQ-E9R-E9RO*PO!LSO,5;oO[O!LQ7+%O7+%OO$3}O!LSO7+%OO[O!LQ7+%P7+%PO$4RO!LUO,5=tO*PO!LSO,5=tO[O!LQ7+$c7+$cO$5[O!LSO7+%OO$6wO!LSO7+%OO$7OO!LSO7+%PO5wO!LSO1G/UO[O!LQ,5;q,5;qO[O!LQ-E9T-E9TO*PO!LSO,5;qO[O!LQ7+%W7+%WO[O!LQ1G3c1G3cO$7SO!LSO7+%WO[O!LQ,5;n,5;nO[O!LQ-E9Q-E9QO*PO!LSO,5;nO$7WO!LSO7+%[O[O!LQ7+%^7+%^O[O!LQ1G3_1G3_O$7eO!LSO7+%^O$7iO!LSO'#FyO$7pO!LSO(3CjO[O!LQ1G3d1G3dO$9`O!LSO7+%[O$9dO!LSO'#GQO$9qO!LSO(3CqO[O!LQ,5>V,5>VO#5VO!LSO,5>VO$;g[MhO'#DxO$;q[QO'#HlO[[O1G/|1G/|O$;uO!LSO1G/|O$;|O!LUO3).|O[O!LQ1G3Z1G3ZO[O!LQ,5;m,5;mO[O!LQ-E9P-E9PO[O!LQ7+$p7+$pO$=fO!LUO,5=^O$>xO!LSO'#GVO$?YO!LSO(3CvO[O!LQ7+%p7+%pO[O!LQ,5;p,5;pO$ARO!LUO-E9SO[O!LQ7+&P7+&PO$BeO!LSO7+&PO[O!LQ,5<R,5<RO[O!LQ-E9e-E9eO>{O!LSO7+&RO$BrO!LSO'#HvO[O!LQ7+&R7+&RO>{O!LSO7+&RO$CVO!LSO7+&RO$CZO!LSO7+&RO[O!LQ,5<U,5<UO[O!LQ-E9h-E9hO[O!LQ,5<Q,5<QO[O!LQ-E9d-E9dO$CeO&FXO'#G`O#N_O!LSO'#FmO$FxO&FXO7+&[O@wO!LSO7+&_O[O!LQ,5<Y,5<YO$JYO!LUO-E9lO*PO!LSO,5<YO[O!LQ1G4O1G4OO$KcO!LSO7+&aO5wO!LSO7+&aO[O!LQ7+&f7+&fO$'cO#)WO7+&hO$KjO&FWO1G0qO[O!LQ,5<Z,5<ZO[O!LQ-E9m-E9mO$KtO!LSO,5<ZO@wO!LSO7+&bO@wO!LSO7+&bO[O!LQ,5<[,5<[O$LOO!LSO-E9nO$LYO!LSO1G4PO$LaO!LSO'#HzO$LnO!LSO'#HzO>{O!LSO'#HzO[O!LQ'#Hz'#HzO[O!LQ,5;d,5;dO$LxO!LSO,5;dO5wO!LSO'#EzO[O!LQ7+&h7+&hO@wO!LSO7+&hO[O!LQ7+&m7+&mO[O!LQ7+&p7+&pO$MPO!LSO7+&pO[O!LQ1G3e1G3eO[O!LQ,5;s,5;sO[O!LQ-E9V-E9VO[O!LQ7+%`7+%`O[O!LQ,5;t,5;tO$MTO!LSO-E9WO$M_O!LSO-E9WO[O!LQ1G3f1G3fO$-UO!LSO1G3fO$N}O!LSO1G3fO% XO!LSO1G3fO[O!LQ<<HX<<HXO5wO!LSO7+$mO% `O!LUO3).mO[O!LQ<<Hj<<HjO%!iO!LSO1G3`O$4RO!LUO1G3`O%!mO!LSO<<HjO[O!LQ<<Hk<<HkO%!qO!LUO3).oO[O!LQ<<Hr<<HrO%#zO!LUO3).lO[O!LQ7+)O7+)OO%%jO!LSO<<HvO[O!LQ<<Hx<<HxO[O!LQ,5;r,5;rO%%nO!LSO,5;rO*PO!LSO,5;rO[O!LQ<<Hv<<HvO[O!LQ,5;y,5;yO[O!LQ-E9]-E9]O5wO!LSO,5;yO[O!LQ1G3q1G3qO%%r[MhO'#GRO[[O(3Cr(3CrO[[O,5:d,5:dO[[O,5>W,5>WO[[O7+%h7+%hO5wO!LSO<<IkO[O!LQ<<Im<<ImO%%|O!LSO'#G[O%&^O!LSO(3C{O[O!LQ,5>b,5>bO>{O!LSO,5>bO%&qO!LSO<<ImO%&uO!LSO<<ImO>{O!LSO<<ImO[O!LQ,5<X,5<XO[O!LQ-E9k-E9kO@wO!LSO,5<XO@wO!LSO<<IvO[O!LQ<<Iy<<IyO%'PO!LUO3)/WO@wO!LSO<<I{O$KcO!LSO<<I{O[O!LQ<<JS<<JSO@wO!LSO<<JSO%(YO&FWO'#G_O#GyO!LTO'#FlO%(dO&FWO7+&]O[O!LQ3)/X3)/XO>{O!LSO1G1uO[O!LQ<<I|<<I|O%(kO&FXO<<I|O>{O!LSO1G1vO[O!LQ7+)k7+)kO[O!LQ'#Ey'#EyO5wO!LSO,5>fO%+{O!LSO,5>fO[O!LQ,5>f,5>fO%,VO!LSO'#GdO%,^O!LSO(3DTO%,tO!LSO1G1OO[O!LQ,5;f,5;fO[O!LQ<<J[<<J[O%,xO!LSO3).rO%.hO!LSO3).rO%0TO!LSO3).rO[O!LQ7+)Q7+)QO% XO!LSO7+)QO$-UO!LSO7+)QOH^O!LSO7+(zO%0_O!LSO7+(zO[O!LQAN>UAN>UO[O!LQAN>bAN>bO5wO!LSO1G1^O%0cO!LUO3).pO[O!LQ3).w3).wO[[O,5;z,5;zO[O!LQAN?VAN?VO[O!LQ,5<T,5<TO%1lO!LSO-E9gO%2PO!LSO1G3|O[O!LQAN?XAN?XO>{O!LSOAN?XO%2aO!LSOAN?XO[O!LQ3)/V3)/VO[O!LQAN?bAN?bO%2eO&FXOAN?gO@wO!LSOAN?gO[O!LQAN?nAN?nO[O!LQ,5<W,5<WO[O!LQ-E9j-E9jO[O!LQ<<Iw<<IwO@wO!LSO7+'aO@wO!LSOAN?hO[O!LQ8;$t8;$tO[O!LQ1G4Q1G4QO5wO!LSO1G4QO[O!LQ,5<],5<]O[O!LQ-E9o-E9oO[O!LQ7+&j7+&jO%5uO!LSO8;$^O%7bO!LSO8;$^O[O!LQ8;$^8;$^O[O!LQ<<Ll<<LlO% XO!LSO<<LlO%7lO!LSO<<LfOH^O!LSO<<LfO[O!LQ8;$[8;$[O>{O!LSO1G1oO[O!LQ7+)h7+)hO%8fO!LSOG24sO[O!LQG24sG24sO@wO!LSOG25RO%8jO&FXOG25RO[O!LQ=LH_=LH_O[O!LQG25SG25SO[O!LQ7+)l7+)lO[O!LQ=LGx=LGxO%;zO!LSO=LGxO[O!LQANBWANBWO%=gO!LSO'#HZO[O!LQANBQANBQO%>|O!LSOANBQO[O!LQ8;$m8;$mO[O!LQLD*_LD*_O[O!LQLD*mLD*mO@wO!LSOLD*mO[O!LQC0=dC0=dO%?vO!LSO'#H[O[O!LQ'#H['#H[O9cO!LSO'#DbO%@pO!LSO,5=uO[O!LQG27lG27lO[O!LQ!$'NX!$'NXO%AWO!LSO,59|O[O!LQ1G3a1G3aO%=gO!LSO1G/hO[O!LQ7+%S7+%S",
      stateData: "%AeQOS%[OS%]OS%bOS~PjOTgOdtOfYOluOp!TOsvOufO}wO!O!QO!S!WO!T!VO!WZO![[O!gfO!mfO!nfO!ofO!vyO!xzO!z{O!||O#O}O#S!OO#U!PO#X!RO#Y!RO#[!SO#b!UO#e!XO#i!YO#k!ZO#p![O#s!]O%ZrO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~PjOTgOdtOfYOluOp!TOsvOufO}wO!O!QO!S!WO!T!VO!WZO![[O!gfO!mfO!nfO!ofO!vyO!xzO!z{O!||O#O}O#S!OO#U!PO#X!RO#Y!RO#[!SO#b!UO#e!XO#i!YO#k!ZO#p![O#s!]O%ZrO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO%Y$gX~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOh%vXi%vXj%vXk%vXl%vXm%vXp%vXx%vXy%vX!s%vX#]%vX%Z%vX%^%vX%x%vX!P%vX!S%vX!T%vX%y%vX!X%vX!]%vX!O%vX#V%vXq%vX!k%vX~dtOfYOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~h!sOi!tOj!rOk!rOl!uOm!vOp!wOx%uXy%uX!s%uX#]%uX%Z%uX%^%uX%x%uX~T!}OdtOfYOl#POs#QOufO}wO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~T#SOdtOfYOl#POs#QOufO!WZO!X#TO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~T#WO_#XOdtOfYOl#POs#QOufO!WZO![[O!]#YO!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~&U^O&V_O&Y`O&]aO&cbO&fcO&hdOT$pX]$pX_$pXf$pXh$pXi$pXj$pXk$pXl$pXm$pXp$pXx$pXy$pX!W$pX!e$pX!s$pX#]$pX%Z$pX%^$pX%h$pX%i$pX%j$pX%k$pX%l$pX%m$pX%n$pX%o$pX%p$pX%q$pX%x$pX!P$pX!S$pX!T$pX%y$pX!X$pX!]$pX!O$pX#V$pXq$pX!k$pX~&W#_O&X$qP~&Z#bO&[$rP~![#eO&^#fO&b$sP~![#eO&d#iO&e$vP~![#eO&g#lO&X$wP~![#eO&i#oO&[$xP~x#sOy$yP!s$yP#]$yP%Z$yP%^$yP%x$yP~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~#]#wO%Z%QP%^%QP~#s!]O!S%XX#k%XX#p%XX~!S#{O#k!ZO#p![O~dtOfYOluOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~T$PO_$QOu$OO%sWOytP~T$UOdtOfYOl#POs#QOufO!O$VO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~y$XO!s$_O%x$ZO#]!tX%Z!tX%^!tX~T$UOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO#]#RX%Z#RX%^#RX~%sWO~!e$eO!m$eO%sWO~T$mOdtOfYOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~!T$oO#i$pO#k$qO~y$rO~T%SO_%SOdtOfYOl#POs#QOufO!P%TO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~dtOfYOl#POs#QOufOy%WO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~&T%YO~_!eOf!mO!W!oO!e!pOT`a]`ah`ai`aj`ak`al`am`ap`ax`ay`a!s`a#]`a%Z`a%^`a%h`a%i`a%j`a%k`a%l`a%m`a%n`a%o`a%p`a%q`a%x`a!P`a!S`a!T`a%y`a!X`a!]`a!O`a#V`aq`a!k`a~k%_O~dtOfYOl%_OufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~dtOfYOl#POufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~h%bOi%cOj%aOk%aOl%dOm%eOp%fOx%uX!P%uX!S%uX!T%uX%y%uX!X%uXy%uX!]%uX#]%uX%Z%uX%^%uX!O%uX#V%uX!k%uX%x%uX~%y%gOx%tX!P%tX!S%tX!T%tX!X%tXy%tX~x%kO!P%iO!S%oO!T%nO~!P%iO~x%tO!S%oO!T%nO!X$lP~!X%xO~x%zOy%|O!S%oO!T%nO!]$iP~!]&QO~!]&RO~&W#_O&X$qX~&X&TO~&Z#bO&[$rX~&[&TO~![#eO&^#fO&b$sX~T&XOdtOfYOl#POs#QOufO}wO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~&b&ZO~![#eO&d#iO&e$vX~&e&ZO~![#eO&g#lO&X$wX~&X&ZO~![#eO&i#oO&[$xX~&[&ZO~T!dO]!dO_!eOf!mOx#sO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOy$yP!s$yP#]$yP%Z$yP%^$yP%x$yP~x#sOy$yX!s$yX#]$yX%Z$yX%^$yX%x$yX~T&aOdtOfYOluOsvOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx$WZy$WZ!s$WZ#]$WZ%Z$WZ%^$WZ%x$WZ~#]#wO%Z%QX%^%QX~PjOTgOdtOfYOluOsvOufO}wO!O!QO!WZO![[O!gfO!mfO!nfO!ofO!vyO!xzO!z{O!||O#O}O#S!OO#U!PO#X!RO#Y!RO#[!SO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO#]$_Z%Z$_Z%^$_Z~%Z&eO%^&eO~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOhcaicajcakcalcamcapcaxcayca!sca#]ca%Zca%^ca%xca!Pca!Sca!Tca%yca!Xca!]ca!Oca#Vcaqca!kca~h!sOi!tOj!rOk!rOl!uOm!vOpnaxnayna!sna#]na%Zna%^na%xna~%x&fOx%wXy%wX~%sWOx%wXy%wX~x&jOy$hP~y&lO~x%zO#]$iP%Z$iP%^$iP!P$iPy$iP!]$iP!k$iP%x$iP~%x$ZO#]$zX%Z$zX%^$zX~T&qOdtOfYOl#POs#QOufO}wO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~%x$ZO~T!dO]!dO_!eOf!mOx&xO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO#]$kP%Z$kP%^$kP~x&{O!O&zO#]#Ra%Z#Ra%^#Ra~!e&}O#V$|P#]$|P%Z$|P%^$|P~!e$eO!m$eO#U$}X%s$}X~#U'QO%sWO~!e&}O#U$|P~x'UO#]%PP%Z%PP%^%PP~x'XO#]${P%Z${P%^${P~T!dO]!dO_!eOf!mOx'^O!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOk%TP~k'aO~PjOTgOdtOfYOluOsvOufO}wO!O!QO!WZO![[O!gfO!mfO!nfO!ofO!vyO!xzO!z{O!||O#O}O#S!OO#U!PO#X!RO#Y!RO#[!SO%Z'fO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~#f'hOP%UPT%UPd%UPf%UPl%UPp%UPq%UPs%UPu%UP}%UP!O%UP!S%UP!T%UP!W%UP![%UP!g%UP!m%UP!n%UP!o%UP!v%UP!x%UP!z%UP!|%UP#O%UP#S%UP#U%UP#X%UP#Y%UP#[%UP#b%UP#e%UP#g%UP#i%UP#k%UP#p%UP#s%UP%Y%UP%Z%UP%m%UP%n%UP%r%UP%s%UP&U%UP&V%UP&Y%UP&]%UP&c%UP&f%UP&h%UP%^%UP%_%UP%`%UP~x'kO#V'mOy%VP~f'oO~f!mOy$rO~!e&}Of$|P%Z$|P~T!dO]!dO_!eOf!mO!W!oO!e!pO%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOhUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~T!dO]!dO_!eOf!mO!W!oO!e!pO%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOhUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~T!dO]!dO_!eOf!mO!W!oO!e!pO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOhUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%jUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~T!dO]!dO_!eOf!mO!W!oO!e!pO%m!cO%n!cO%o!dO%p!dO%q!dOhUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%jUi%kUi%lUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~T!dO]!dO_!eOf!mO!W!oO!e!pO%o!dO%p!dO%q!dOhUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%jUi%kUi%lUi%mUi%nUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~_!eOf!mO!W!oO!e!pOTUi]UihUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%jUi%kUi%lUi%mUi%nUi%oUi%pUi%qUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~f!mO!W!oO!e!pOTUi]Ui_UihUiiUijUikUilUimUipUixUiyUi!sUi#]Ui%ZUi%^Ui%hUi%iUi%jUi%kUi%lUi%mUi%nUi%oUi%pUi%qUi%xUi!PUi!SUi!TUi%yUi!XUi!]Ui!OUi#VUiqUi!kUi~!S%oO!T%nOx&RX!P&RX~%x'uO%y'uOT%gX]%gX_%gXf%gXh%gXi%gXj%gXk%gXl%gXm%gXp%gXx%gX!P%gX!S%gX!T%gX!W%gX!e%gX%h%gX%i%gX%j%gX%k%gX%l%gX%m%gX%n%gX%o%gX%p%gX%q%gX~x'xO!P$nP~x'{Oy'}O!X$oP~dtOfYOl#POs#QOufOx'{Oy(OO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO!X$oP~!X(QO~i!tOj!rOk!rOl!uOm!vOhgipgixgiygi!sgi#]gi%Zgi%^gi%xgi~j!rOk!rOl!uOm!vOhgiigipgixgiygi!sgi#]gi%Zgi%^gi%xgi~h%bOi%cOj%aOk%aOl%dOm%eOq(SO~k(VO~dtOfYOl(VOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~x(YO!P$jX~T(]OdtOfYOl#POs#QOufO!P(^O!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~x(_O!P(^O~!P(`O~!T(bO~T!dO]!dO_!eOf!mOx(dO!P(cO!S%oO!T%nO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO~h%bOi%cOj%aOk%aOl%dOm%eOpnaxna!Pna!Sna!Tna%yna!Xnayna!]na#]na%Zna%^na!Ona#Vnaqna!kna%xna~y(gO~x%tO!X$lX~T(jOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#yZ!X#yZ~!X(kO~T!dO]!dO_!eOf!mOx%tO!S%oO!T%nO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO!X$lP~x%zO!]$iX#]$iX%Z$iX%^$iX!P$iXy$iX!k$iX%x$iX~T(pOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#vZ!]#vZ#]#vZ%Z#vZ%^#vZ!P#vZy#vZ!k#vZ%x#vZ~!](rO~T!dO]!dO_!eOf!mOx%zO!S%oO!T%nO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO!]$iP~T!dO]!dO_!eOf!mOx(vO!S%oO!T%nO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO!]$mP~x(zOy$tP!]$tP!k$tP~y(}O!])PO!k)QO~x&jOy$hX~T$PO_$QOu$OO%sWO~dtOfYOluOsvOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~T!dO]!dO_!eOf!mOx%zO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO#]$iP%Z$iP%^$iP!P$iPy$iP!]$iP!k$iP%x$iP~x)YO#]$yP%Z$yP%^$yP%x$yP~x&xO#]$kX%Z$kX%^$kXk$kX~dtOfYOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#xZ#]#xZ%Z#xZ%^#xZk#xZ~!e&}O#V$|X#]$|X%Z$|X%^$|X#U$|Xf$|X~#V)bO#]#Ti%Z#Ti%^#Ti~T)dOf)eO%sWO~#U)gO~x'UO#]%PX%Z%PX%^%PX~%sWOx$^Z#]$^Z%Z$^Z%^$^Z~x'XO#]${X%Z${X%^${Xy${X~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx$YZ#]$YZ%Z$YZ%^$YZy$YZ~#`)mOP%SPT%SPd%SPf%SPl%SPp%SPq%SPs%SPu%SP}%SP!O%SP!S%SP!T%SP!W%SP![%SP!g%SP!m%SP!n%SP!o%SP!v%SP!x%SP!z%SP!|%SP#O%SP#S%SP#U%SP#X%SP#Y%SP#[%SP#b%SP#e%SP#i%SP#k%SP#p%SP#s%SP%Y%SP%Z%SP%m%SP%n%SP%r%SP%s%SP&U%SP&V%SP&Y%SP&]%SP&c%SP&f%SP&h%SP%^%SP%_%SP%`%SP~q)oOP#aiT#aid#aif#ail#aip#ais#aiu#ai}#ai!O#ai!S#ai!T#ai!W#ai![#ai!g#ai!m#ai!n#ai!o#ai!v#ai!x#ai!z#ai!|#ai#O#ai#S#ai#U#ai#X#ai#Y#ai#[#ai#b#ai#e#ai#i#ai#k#ai#p#ai#s#ai%Y#ai%Z#ai%m#ai%n#ai%r#ai%s#ai&U#ai&V#ai&Y#ai&]#ai&c#ai&f#ai&h#ai%^#ai%_#ai%`#ai~x'^Ok%TX~T)rOdtOfYOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOk$bZx$bZ~k)uO~PjOTgOdtOfYOluOp!TOsvOufO}wO!O!QO!S!WO!T!VO!WZO![[O!gfO!mfO!nfO!ofO!vyO!xzO!z{O!||O#O}O#S!OO#U!PO#X!RO#Y!RO#[!SO#b!UO#e!XO#i!YO#k!ZO#p![O#s!]O%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~#f'hOP%UXT%UXd%UXf%UXl%UXp%UXq%UXs%UXu%UX}%UX!O%UX!S%UX!T%UX!W%UX![%UX!g%UX!m%UX!n%UX!o%UX!v%UX!x%UX!z%UX!|%UX#O%UX#S%UX#U%UX#X%UX#Y%UX#[%UX#b%UX#e%UX#g%UX#i%UX#k%UX#p%UX#s%UX%Y%UX%Z%UX%m%UX%n%UX%r%UX%s%UX&U%UX&V%UX&Y%UX&]%UX&c%UX&f%UX&h%UX%^%UX%_%UX%`%UX~dtOfYOl#POs#QOufOy$rO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~q)}O#g)|OP#diT#did#dif#dil#dip#dis#diu#di}#di!O#di!S#di!T#di!W#di![#di!g#di!m#di!n#di!o#di!v#di!x#di!z#di!|#di#O#di#S#di#U#di#X#di#Y#di#[#di#b#di#e#di#i#di#k#di#p#di#s#di%Y#di%Z#di%m#di%n#di%r#di%s#di&U#di&V#di&Y#di&]#di&c#di&f#di&h#di%^#di%_#di%`#di~x'kOy%VX~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx$dZy$dZ~T*SO_*TOu*RO!P*VO%o*UO%sWO~y$rO&o*XO~f!mO%Z*]O~x'xO!P$nX~T%SO_%SOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#{Z!P#{Z~!P*bO~x'{O!X$oX~dtOfYOl#POs#QOufOy*eO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|Z!X#|Z~dtOfYOl#POs#QOufOx'{Oy*gO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO!X$oP~dtOfYOl#POs#QOufOx'{O!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO!X$oP~x'{Oy*gO!X$oP~i%cOj%aOk%aOl%dOm%eOhgipgixgi!Pgi!Sgi!Tgi%ygi!Xgiygi!]gi#]gi%Zgi%^gi!Ogi#Vgiqgi!kgi%xgi~j%aOk%aOl%dOm%eOhgiigipgixgi!Pgi!Sgi!Tgi%ygi!Xgiygi!]gi#]gi%Zgi%^gi!Ogi#Vgiqgi!kgi%xgi~h%bOi%cOj%aOk%aOl%dOm%eOq*kO~T(]OdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~!P*mO~T!dO]!dO_!eOf!mOx&xO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOk$kP~T(]OdtOfYOl#POs#QOufO!P*mO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~x*pO!P*mO~!P*qO~!X*sO~x(vO!S%oO!T%nO!]$mP~!]*wO~x(vO!]$mX~_*zOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#zZ!]#zZ~!]*{O~x(zOy$tX!]$tX!k$tX~T+OOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx$RZy$RZ!]$RZ!k$RZ~![#eO&a+RO!]$uP~!]+TO~y(}O!]+UO~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx$Wky$Wk!s$Wk#]$Wk%Z$Wk%^$Wk%x$Wk~T!dO]!dO_!eOf!mOx)YO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dO#]$yP%Z$yP%^$yP%x$yP~x)YO#]$yX%Z$yX%^$yX%x$yX~T&aOdtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx$WZ#]$WZ%Z$WZ%^$WZ%x$WZ~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx#xc#]#xc%Z#xc%^#xck#xc~x+VO#]#Rq%Z#Rq%^#Rq~x+YO#V+[O#]%OP%Z%OP%^%OP!P%OP~#U+^O~T+WOf+_O%sWO~#`)mOP%SXT%SXd%SXf%SXl%SXp%SXq%SXs%SXu%SX}%SX!O%SX!S%SX!T%SX!W%SX![%SX!g%SX!m%SX!n%SX!o%SX!v%SX!x%SX!z%SX!|%SX#O%SX#S%SX#U%SX#X%SX#Y%SX#[%SX#b%SX#e%SX#i%SX#k%SX#p%SX#s%SX%Y%SX%Z%SX%m%SX%n%SX%r%SX%s%SX&U%SX&V%SX&Y%SX&]%SX&c%SX&f%SX&h%SX%^%SX%_%SX%`%SX~q+cOP#^qT#^qd#^qf#^ql#^qp#^qs#^qu#^q}#^q!O#^q!S#^q!T#^q!W#^q![#^q!g#^q!m#^q!n#^q!o#^q!v#^q!x#^q!z#^q!|#^q#O#^q#S#^q#U#^q#X#^q#Y#^q#[#^q#b#^q#e#^q#i#^q#k#^q#p#^q#s#^q%Y#^q%Z#^q%m#^q%n#^q%r#^q%s#^q&U#^q&V#^q&Y#^q&]#^q&c#^q&f#^q&h#^q%^#^q%_#^q%`#^q~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOk$bcx$bc~x'XOy${P~%_+kO%^%RP%`%RP~x+nOy$rO#V+nO~#V+qOx$dcy$dc~x'kOy%VP~y$XO%x+sOx&nX!P&nX~%sWOx&nX!P&nX~x+xO!P%WP~%Z+{O~y+|Ox#|c!X#|c~dtOfYOl#POs#QOufOy+}O!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|c!X#|c~x'{Oy,RO!X$oP~x'{O!X$oP~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx#wk!P#wk~k,SO~!P,UO~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx#yk!X#yk~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx#vk!]#vk#]#vk%Z#vk%^#vk!P#vky#vk!k#vk%x#vk~!],VO~y,WO~![#eO&a+RO!]$uX~x+YO#]%OX%Z%OX%^%OX!P%OX~%sWOx$]Z#]$]Z%Z$]Z%^$]Z!P$]Z~!P,`O~T,`Of,aO%sWO~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOk$bkx$bk~%_+kO%^%RX%`%RX~%^,jO%`,jO~#g,lOP#dyT#dyd#dyf#dyl#dyp#dys#dyu#dy}#dy!O#dy!S#dy!T#dy!W#dy![#dy!g#dy!m#dy!n#dy!o#dy!v#dy!x#dy!z#dy!|#dy#O#dy#S#dy#U#dy#X#dy#Y#dy#[#dy#b#dy#e#dy#i#dy#k#dy#p#dy#s#dy%Y#dy%Z#dy%m#dy%n#dy%r#dy%s#dy&U#dy&V#dy&Y#dy&]#dy&c#dy&f#dy&h#dy%^#dy%_#dy%`#dy~%x+sOx&na!P&na~x+xO!P%WX~T*SO_*TOu*RO%o*UO%sWOx$eZ!P$eZ~!P,rO~dtOfYOl#POs#QOufOy,sO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|k!X#|k~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|k!X#|k~y,sOx#|k!X#|k~k,yO~T!dO]!dO_!eOf!mO!W!oO!e!pO%h!_O%i!`O%j!aO%k!bO%l!bO%m!cO%n!cO%o!dO%p!dO%q!dOx#zk!]#zk~#V,{Ox$]c#]$]c%Z$]c%^$]c!P$]c~x+YO#]%OP%Z%OP%^%OP!P%OP~!P-OO~q-POP#c!RT#c!Rd#c!Rf#c!Rl#c!Rp#c!Rs#c!Ru#c!R}#c!R!O#c!R!S#c!R!T#c!R!W#c!R![#c!R!g#c!R!m#c!R!n#c!R!o#c!R!v#c!R!x#c!R!z#c!R!|#c!R#O#c!R#S#c!R#U#c!R#X#c!R#Y#c!R#[#c!R#b#c!R#e#c!R#i#c!R#k#c!R#p#c!R#s#c!R%Y#c!R%Z#c!R%m#c!R%n#c!R%r#c!R%s#c!R&U#c!R&V#c!R&Y#c!R&]#c!R&c#c!R&f#c!R&h#c!R%^#c!R%_#c!R%`#c!R~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|s!X#|s~y-VOx#|s!X#|s~h%bOi%cOj%aOk%aOl%dOm%eOp-XO!S%oO!T%nO!P%|y!X%|y!]%|yx%|y~!P-]O~q-_OP#c!ZT#c!Zd#c!Zf#c!Zl#c!Zp#c!Zs#c!Zu#c!Z}#c!Z!O#c!Z!S#c!Z!T#c!Z!W#c!Z![#c!Z!g#c!Z!m#c!Z!n#c!Z!o#c!Z!v#c!Z!x#c!Z!z#c!Z!|#c!Z#O#c!Z#S#c!Z#U#c!Z#X#c!Z#Y#c!Z#[#c!Z#b#c!Z#e#c!Z#i#c!Z#k#c!Z#p#c!Z#s#c!Z%Y#c!Z%Z#c!Z%m#c!Z%n#c!Z%r#c!Z%s#c!Z&U#c!Z&V#c!Z&Y#c!Z&]#c!Z&c#c!Z&f#c!Z&h#c!Z%^#c!Z%_#c!Z%`#c!Z~dtOfYOl#POs#QOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdOx#|{!X#|{~dtOfYOl#POs-cOufO!WZO![[O!gfO!mfO!nfO!ofO%mRO%nRO%rSO%sWO&U^O&V_O&Y`O&]aO&cbO&fcO&hdO~h%bOi%cOj%aOk%aOl%dOm%eOp-XO!S%oO!T%nO!P%|!R!X%|!R!]%|!Rx%|!R~h%bOi%cOj%aOk%aOl%dOm%eOp&OX!P&OX!S&OX!T&OX!X&OX!]&OXx&OX~p-XO!S%oO!T%nO!P%}a!X%}a!]%}ax%}a~y-iO~&V&Y&f&h&U&]&c%s~",
      goto: "!+v&oPPPP&pP&x)f*O*i+T+p,^P,{P&x-l-l&xP&xP0YPPPPPP0Y2WPP2WP3rP3{8[PP8_8j8mPPP&x&xPP8y&xPP&x&xPP&x&x&x&x8}9u&xP9xP9{9{<jP=OPPP=S=Y&pP&p&pP&pP&pP&pP&pP&p&p&pP&pPP&pPP&pPP=_=eP=_P=_=_PPP=_P?QP?Z?a?g?QP=_?mP?t?z@Q@Z@b@j@q@xAOA`DPDVD]DcDjDpDvD|ESE`EgEpEyFPFWF^FdFjFpFwF}GUG[GeGhGkGsGyHSHYH`Hc&xHxH{IOIRIXI[I_IbIeImIsJPJ]J`JfJiJlJoJrJxJ{KRKUPPPPPPPPPK[KfKoKyLUPPPPPPPPPPPP!!O!!g!&Z!(uPP!(}!)]!)f!*R!*[!*b!*e!*h!*nPPPPPPPPPP!*q!*tPPPPPPPPP!*z!+^!+d!+j!+p]kOP#w$r'f+k&VfOPTYZ[gjtuwy}!O!S!T!U!V!Y!f!g!h!i!j!k!l!m!o!r!s!t!v!w!}#P#S#W#X#e#s#w$U$V$X$[$_$m$o$p$r%S%W%_%a%b%c%e%f%h%k%n%t%z%|&X&a&g&l&q&x&z&{'X'^'a'f'h'k'v'x'{'}(O(S(V(Y(](b(d(g(j(p(v(z)Y)m)r)u*X*e*g*k*z+O+V+k+t+|+},R,S,W,o,s,y-V-X-i}!fQ#q#|$`$l%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!P!gQ#q#|$`$l$y%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!R!hQ#q#|$`$l$y$z%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!T!iQ#q#|$`$l$y$z${%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!V!jQ#q#|$`$l$y$z${$|%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!X!kQ#q#|$`$l$y$z${$|$}%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X!]!lQ!q#q#|$`$l$y$z${$|$}%O%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,X&VTOPTYZ[gjtuwy}!O!S!T!U!V!Y!f!g!h!i!j!k!l!m!o!r!s!t!v!w!}#P#S#W#X#e#s#w$U$V$X$[$_$m$o$p$r%S%W%_%a%b%c%e%f%h%k%n%t%z%|&X&a&g&l&q&x&z&{'X'^'a'f'h'k'v'x'{'}(O(S(V(Y(](b(d(g(j(p(v(z)Y)m)r)u*X*e*g*k*z+O+V+k+t+|+},R,S,W,o,s,y-V-X-i$wVOPYZ[juw}!O!S!T!U!Y!m!o!r!s!t!v!w#P#e#s#w$V$X$[$_$p$r%S%W%_%a%b%c%e%f%h%k%t%z%|&X&g&l&z&{'X'a'f'h'k'v'x'{'}(O(S(V(Y(d(g(v(z)Y)m)u*X*e*g*k+O+V+k+t+|+},R,S,W,o,s,y-V-X-i$RXOPYZ[jw}!O!S!T!U!Y!m!o#e#s#w$V$X$[$_$p$r%S%W%h%k%t%z%|&X&g&l&z&{'X'a'f'h'k'v'x'{'}(O(S(Y(d(g(v(z)Y)m)u*X*e*g*k+O+V+k+t+|+},R,W,o,s-VQ$SvQ%r#QR-g-c&QfOPTYZ[gjtuwy}!O!S!T!U!V!Y!f!g!h!i!j!k!l!o!r!s!t!v!w!}#P#S#W#X#e#s#w$U$V$X$[$_$m$o$p$r%S%W%_%a%b%c%e%f%h%k%n%t%z%|&X&a&g&l&q&x&z&{'X'^'a'f'h'k'v'{'}(O(S(V(Y(](b(d(g(j(p(v(z)Y)m)r)u*X*e*g*k*z+O+V+k+t+|+},R,S,W,o,s,y-V-X-iW$Ov#Q&j-cQ$c!PQ$g!QQ$h!RQ$v!ZQ$w![Q$x!]S%R!m'xS&h$P$QQ'R$fQ'd$qQ)a&}[)c'Q)e)g+^+_,aQ)i'UQ*Q'mS*R'o+xQ+W)bS+v*S*TQ,^+YQ,_+[Q,k+nQ,m+qR-[,{R&g$Oc!zYZ!T!U%k%t(Y(d)mR%h!yQ#OYQ&Y#eQ&s$[R&u$_T-b-X-i!^!nQ!q#q#|$`$l$y$z${$|$}%O%P%p%w&O&P&m'`(a)R)W)])q*l*o*r*t+e,XQ'r$wR*^'sR'v%RR%Z!p&XeOPTYZ[]gjtuwy}!O!S!T!U!V!Y!f!g!h!i!j!k!l!m!o!r!s!t!v!w!}#P#S#W#X#e#s#w$U$V$X$[$_$m$o$p$r%S%W%_%a%b%c%e%f%h%k%n%t%z%|&X&a&g&l&q&x&z&{'X'^'a'f'h'k'v'x'{'}(O(S(V(Y(](b(d(g(j(p(v(z)Y)m)r)u*X*e*g*k*z+O+V+k+t+|+},R,S,W,o,s,y-V-X-iS#fa#dS#ib#hS#lc#kS#od#nT+R(}+QT)O&Y)QQ$^xR+u*RV$[x$Y$^XpOP'f+kQ$s!XQ'Z$jQ'[$kQ'n$uQ'q$wQ)v'cQ)z'hQ*Y'pQ*['rQ+a)mQ+d)oS+h)w*ZQ+m){Q+o)|Q+p)}Q,c+bQ,d+cQ,e+fQ,g+iQ-Q,fQ-R,kQ-S,lQ-^-PR-f-_WpOP'f+kR#zoQ'p$vR)w'dQ+t*RR,o+uQ*Z'pR+i)wZnOPm'f+kQPOR!^PQ&i$RR)T&iW%y#V$T&O&mR(n%yS%j!|%pR(Z%jU&w$`(a*oR)[&wS%s#R%wR(h%sS(u&P(qR*x(uQ'w%UR*`'wf'z%V%W'}(O(P*g*h*i,Q,R,wR*c'z&U]OPTYZ[gjtuwy}!O!S!T!U!V!Y!f!g!h!i!j!k!l!m!o!r!s!t!v!w!}#P#S#W#X#e#s#w$U$V$X$[$_$m$o$p$r%S%W%_%a%b%c%e%f%h%k%n%t%z%|&X&a&g&l&q&x&z&{'X'^'a'f'h'k'v'x'{'}(O(S(V(Y(](b(d(g(j(p(v(z)Y)m)r)u*X*e*g*k*z+O+V+k+t+|+},R,S,W,o,s,y-V-X-iR#]]Q#^_R&S#^Q#a`R&U#aQ#daR&V#dS(y&W(|R*|(yQ+Q(}R,Z+QQ#hbR&[#hQ#kcR&]#kQ#ndR&^#nS#rh#qS&`#r)XT)X&r)WS$Yx$^R&p$YW'W$i&v)t+gR)j'WW&|$c$g$x'RR)`&|Q$d!QR'P$dS+X)c,_R,]+XQ'T$hR)h'TQ#vlR&c#vQ+j)xR,h+jQ)l'ZR+`)lS']$l'`R)p']Q'g$sR)y'gS'j$t*QR*O'jQ+w*WR,p+wWmOP'f+kR#ymRsOR&k$RS%{#V$TT(s&O&mQ%l!|R(e%pQ&y$`Q*n(aR,T*oQ%u#RR(l%wQ(w&PR*u(qR'y%US'|%V%WU*f'}(O(PU,P*g*h*iS,v,Q,RR-W,wR#`_R#c`R#gaQ({&WR+P(|R+S(}R#jbR#mcR#pdS#th&rT&_#q)WQ$]xR&t$^Q'Y$iQ)Z&vQ+f)tR,f+gQ'O$cQ'S$gQ's$xR)f'RR$f!QQ+Z)cR,|,_R'V$hR#xlR+l)xR)n'ZQ'_$lR)s'`R'i$sQ'l$tR+r*QR+y*WXoOP'f+kSrOPQ)x'fR,i+kWqOP'f+kR'e$rYlOP$r'f+kR&d#w[xOP#w$r'f+kR&s$[$vQOPYZ[juw}!O!S!T!U!Y!m!o!r!s!t!v!w#P#e#s#w$V$X$[$_$p$r%S%W%_%a%b%c%e%f%h%k%t%z%|&X&g&l&z&{'X'a'f'h'k'v'x'{'}(O(S(V(Y(d(g(v(z)Y)m)u*X*e*g*k+O+V+k+t+|+},R,S,W,o,s,y-V-X-iQ!qTQ#qgQ#|tQ$`yS$l!V$oQ$y!fQ$z!gQ${!hQ$|!iQ$}!jQ%O!kQ%P!lQ%p!}Q%w#SQ&O#WQ&P#XQ&m$UQ'`$mQ(a%nQ)R&aQ)W&qQ)]&xQ)q'^Q*l(]Q*o(bQ*r(jQ*t(pQ+e)rR,X*zQ!|YQ#RZQ$j!TQ$k!UU([%k(Y(dQ(i%tR+b)m[hOP#w$r'f+kb!yYZ!T!U%k%t(Y(d)mQ#V[Q#ujS$Tw}Q$b!OQ$i!SS$t!Y$pS%Q!m'xQ%V!oQ&W#eS&b#s)YQ&n$VQ&o$XQ&r$[Q&v$_Q't%SQ(P%WQ(X%hQ(o%zQ(q%|Q(|&XQ)S&gS)V&l(gQ)^&zQ)_&{Q)k'XQ)t'aQ){'hQ*P'kQ*_'vQ*d'{Q*h'}Q*i(OS*j(S*kQ*y(vQ*}(zQ+g)uQ+z*XQ,O*eQ,Q*gQ,Y+OQ,[+VQ,n+tQ,t+|Q,u+}Q,w,RQ,z,WQ-T,oQ-U,sR-`-VbUOP#s#w$r&l'f(S+k#n!xYZ[jw}!O!S!T!U!Y!m!o#e$V$X$[$_$p%S%W%h%k%t%z%|&X&g&z&{'X'a'h'k'v'x'{'}(O(Y(d(g(v(z)Y)m)u*X*e*g*k+O+V+t+|+},R,W,o,s-VQ#}uW%[!r!v%a%eQ%]!sQ%^!tQ%`!wQ%q#PS(R%_(VQ(T%bQ(U%cQ(W%fQ,x,SQ-Z,yT-a-X-iU$Rv#Q-cR)U&j[iOP#w$r'f+kX!{Y#e$[$_Q#[[Q$WwR$a}Q%m!|Q%v#RQ%}#VQ't%QQ(f%pQ(m%wQ(t&OQ(x&PQ*v(qQ-Y,xQ-e-ZR-h-dQ-d-XR-j-iR#UZR#Z[Q%U!mR*a'xR%X!oR&Y#eQ)P&YR+U)QQ)d'QQ+W)gQ+])eQ,`+^Q,b+_R,},aXqOP'f+kQ$n!VR'b$oQ$u!YR'c$pQ*W'oR,q+x",
      nodeNames: "⚠ print Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ParenthesizedExpression ( BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList self VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from ) TupleExpression ComprehensionExpression async for LambdaExpression ArrayExpression [ ] ArrayComprehensionExpression DictionaryExpression { } DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatConversion FormatSpec Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At",
      nodeProps: [
        [NodeProp.top, 3,true]
      ],
      repeatNodeCount: 33,
      tokenData: "!E}MgR!^OX$}XY%wY[$}[]%w]p$}pq%wqr(crs*Ust2Otu$}uv4Qvw5Uwx5xxyAWyzAtz{Bb{|Cr|}Df}!OES!O!PFZ!P!QKa!Q!RLq!R![!(P![!]!)i!]!^!*m!^!_!+Z!_!`!,k!`!a!-_!a!b$}!b!c!.l!c!d!/b!d!e!1f!e!h!/b!h!i!8O!i!t!/b!t!u!=b!u!w!/b!w!x!?`!x!}!/b!}#O!@t#O#P!Ab#P#Q!Bc#Q#R!CP#R#S!/b#S#T$}#T#U!/b#U#V!1f#V#Y!/b#Y#Z!8O#Z#f!/b#f#g!=b#g#i!/b#i#j!?`#j#o!/b#o#p!Cs#p#q!D[#q#r!EO#r#s!Ea#s$g$}$g~!/b<r%`R&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%i7[%nR&a7[O#o%i#p#q%i#r~%iMg&[Z&^`&dp&a7[&g!b&i#t&WS&ZW%b1sOX%iXY&}Y[%i[]&}]p%ipq&}q#O%i#O#P'w#P#o%i#p#q%i#r~%iHP'UZ&a7[%b1sOX%iXY&}Y[%i[]&}]p%ipq&}q#O%i#O#P'w#P#o%i#p#q%i#r~%iHP'|V&a7[OY%iYZ&}Z]%i]^&}^#o%i#p#q%i#r~%i<u(tY&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`)d!`#T%i#T#U)t#U#f%i#f#g)t#g#h)t#h#o%i#p#q%i#r~%i7_)kRjR&a7[O#o%i#p#q%i#r~%i7_){R!kR&a7[O#o%i#p#q%i#r~%iG{*e]&ep&^`&a7[&g!b&WS&U,XOY+^YZ.{Z]+^]^.{^r+^rs/]s#O+^#O#P0|#P#o+^#o#p1b#p#q+^#q#r1b#r~+^Bm+g]&a7[&ZW&U,XOY,`YZ%iZ],`]^%i^r,`rs-`s#O,`#O#P-p#P#o,`#o#p.U#p#q,`#q#r.U#r~,`Be,g]&a7[&U,XOY,`YZ%iZ],`]^%i^r,`rs-`s#O,`#O#P-p#P#o,`#o#p.U#p#q,`#q#r.U#r~,`Be-gR&a7[&U,XO#o%i#p#q%i#r~%iBe-uT&a7[O#o,`#o#p.U#p#q,`#q#r.U#r~,`,X.ZV&U,XOY.UZ].U^r.Urs.ps#O.U#O#P.u#P~.U,X.uO&U,X,X.xPO~.U7d/SR&a7[&ZWO#o%i#p#q%i#r~%iEc/dX&a7[&U,XOr.{rs0Ps#O.{#O#P0c#P#o.{#o#p0w#p#q.{#q#r0w#r~.{Ec0YR&[#|&a7[&Y,XO#o%i#p#q%i#r~%i7d0hT&a7[O#o.{#o#p0w#p#q.{#q#r0w#r~.{W0|O&ZWBm1RT&a7[O#o+^#o#p1b#p#q+^#q#r1b#r~+^,a1iV&ZW&U,XOY.UZ].U^r.Urs.ps#O.U#O#P.u#P~.UMg2cXQ1s&^`&dp&a7[&g!b&i#t&WS&ZWOY3OYZ%iZ]3O]^%i^#o3O#o#p3r#p#q3O#q#r3r#r~3OHP3VXQ1s&a7[OY3OYZ%iZ]3O]^%i^#o3O#o#p3r#p#q3O#q#r3r#r~3O1s3wRQ1sOY3rZ]3r^~3rGz4eT%pQ&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%iBd4{R!s,W&a7[O#o%i#p#q%i#r~%iGz5iT%jQ&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%iG{6X_&b`&dp&a7[&i#t&ZW&U,XOY7WYZ:dZ]7W]^:d^r7Wrs:xsw7Wwx;|x#O7W#O#P>n#P#o7W#o#p?t#p#q7W#q#r?S#r~7WFq7e]&a7[&g!b&i#t&WS&U,XOY8^YZ%iZ]8^]^%i^w8^wx-`x#O8^#O#P9^#P#o8^#o#p9r#p#q8^#q#r9r#r~8^Be8e]&a7[&U,XOY8^YZ%iZ]8^]^%i^w8^wx-`x#O8^#O#P9^#P#o8^#o#p9r#p#q8^#q#r9r#r~8^Be9cT&a7[O#o8^#o#p9r#p#q8^#q#r9r#r~8^,X9wV&U,XOY9rZ]9r^w9rwx.px#O9r#O#P:^#P~9r,X:aPO~9r;h:oR&a7[&g!b&i#t&WSO#o%i#p#q%i#r~%iC{;T]&a7[&g!b&WS&U,XOY8^YZ%iZ]8^]^%i^w8^wx-`x#O8^#O#P9^#P#o8^#o#p9r#p#q8^#q#r9r#r~8^Fq<VZ&a7[&i#t&U,XOr:drs<xsw:dwx=[x#O:d#O#P=p#P#o:d#o#p>_#p#q:d#q#r>U#r~:d8r=RR&a7[&g!b&WSO#o%i#p#q%i#r~%iFq=gR&X!f&a7[&i#t&V,XO#o%i#p#q%i#r~%i;h=uT&a7[O#o:d#o#p>U#p#q:d#q#r>U#r~:d%[>_O&g!b&i#t&WS%[>dP&WS#o#p>g%W>nO&g!b&i#tFq>sT&a7[O#o7W#o#p?S#p#q7W#q#r?S#r~7W0e?_V&g!b&i#t&WS&U,XOY9rZ]9r^w9rwx.px#O9r#O#P:^#P~9r0e?{X&WS&U,XOY9rZ]9r^w9rwx.px#O9r#O#P:^#P#o9r#o#p@h#p~9r0a@qV&g!b&i#t&U,XOY9rZ]9r^w9rwx.px#O9r#O#P:^#P~9rG{AkRf,X&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%i<uBXR!PR&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%iG{BuVT,X&^`&dp&a7[&g!b&i#t&WS&ZWOz%iz{C[{!_%i!_!`4t!`#o%i#p#q%i#r~%iBeCcT_R&a7[O!_%i!_!`4t!`#o%i#p#q%i#r~%iG{DVT%m,X&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%iG{DyRx,X&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%iMgEgU%n,X&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`!aEy!a#o%i#p#q%i#r~%i<vFQR&o&j&a7[O#o%i#p#q%i#r~%iG{FnV!eQ&^`&dp&a7[&g!b&i#t&WS&ZWO!O%i!O!PGT!P!Q%i!Q![Gy![#o%i#p#q%i#r~%iBeGYT&a7[O!O%i!O!PGi!P#o%i#p#q%i#r~%iBeGpR!m,X&a7[O#o%i#p#q%i#r~%iBcHQ_!g,V&a7[O!Q%i!Q![Gy![!g%i!g!hIP!h!l%i!l!mKP!m#R%i#R#SGy#S#X%i#X#YIP#Y#^%i#^#_KP#_#o%i#p#q%i#r~%iBcIUX&a7[O{%i{|Iq|}%i}!OIq!O!Q%i!Q![JV![#o%i#p#q%i#r~%iBcIvT&a7[O!Q%i!Q![JV![#o%i#p#q%i#r~%iBcJ^Z!g,V&a7[O!Q%i!Q![JV![!l%i!l!mKP!m#R%i#R#SJV#S#^%i#^#_KP#_#o%i#p#q%i#r~%iBcKWR!g,V&a7[O#o%i#p#q%i#r~%iG{KtV%oR&^`&dp&a7[&g!b&i#t&WS&ZWO!P%i!P!QLZ!Q!_%i!_!`4t!`#o%i#p#q%i#r~%iBdLbT%qQ&a7[O!_%i!_!`4t!`#o%i#p#q%i#r~%iGyMUm!g,V&^`&dp&a7[&g!b&i#t&WS&ZWO!O%i!O!P! P!P!Q%i!Q![!!k![!d%i!d!e!#w!e!g%i!g!hIP!h!l%i!l!mKP!m!q%i!q!r!%V!r!z%i!z!{!&_!{#R%i#R#S!!k#S#U%i#U#V!#w#V#X%i#X#YIP#Y#^%i#^#_KP#_#c%i#c#d!%V#d#l%i#l#m!&_#m#o%i#p#q%i#r~%iBc! UT&a7[O!Q%i!Q![! e![#o%i#p#q%i#r~%iBc! l_!g,V&a7[O!Q%i!Q![! e![!g%i!g!hIP!h!l%i!l!mKP!m#R%i#R#S! e#S#X%i#X#YIP#Y#^%i#^#_KP#_#o%i#p#q%i#r~%iBc!!ra!g,V&a7[O!O%i!O!P! P!P!Q%i!Q![!!k![!g%i!g!hIP!h!l%i!l!mKP!m#R%i#R#S!!k#S#X%i#X#YIP#Y#^%i#^#_KP#_#o%i#p#q%i#r~%iBc!#|W&a7[O!Q%i!Q!R!$f!R!S!$f!S#R%i#R#S!$f#S#o%i#p#q%i#r~%iBc!$mW!g,V&a7[O!Q%i!Q!R!$f!R!S!$f!S#R%i#R#S!$f#S#o%i#p#q%i#r~%iBc!%[V&a7[O!Q%i!Q!Y!%q!Y#R%i#R#S!%q#S#o%i#p#q%i#r~%iBc!%xV!g,V&a7[O!Q%i!Q!Y!%q!Y#R%i#R#S!%q#S#o%i#p#q%i#r~%iBc!&dZ&a7[O!Q%i!Q![!'V![!c%i!c!i!'V!i#R%i#R#S!'V#S#T%i#T#Z!'V#Z#o%i#p#q%i#r~%iBc!'^Z!g,V&a7[O!Q%i!Q![!'V![!c%i!c!i!'V!i#R%i#R#S!'V#S#T%i#T#Z!'V#Z#o%i#p#q%i#r~%iGy!(da!g,V&^`&dp&a7[&g!b&i#t&WS&ZWO!O%i!O!P! P!P!Q%i!Q![!!k![!g%i!g!hIP!h!l%i!l!mKP!m#R%i#R#S!!k#S#X%i#X#YIP#Y#^%i#^#_KP#_#o%i#p#q%i#r~%iMg!)|Ty1s&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`!*]!`#o%i#p#q%i#r~%i7_!*dR%yR&a7[O#o%i#p#q%i#r~%iG{!+QR#],X&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%iG{!+nVjR&^`&dp&a7[&g!b&i#t&WS&ZWO!^%i!^!_!,T!_!`)d!`!a)d!a#o%i#p#q%i#r~%iBd!,[T%kQ&a7[O!_%i!_!`4t!`#o%i#p#q%i#r~%iG{!-OT%x,X&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`)d!`#o%i#p#q%i#r~%iG{!-rUjR&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`)d!`!a!.U!a#o%i#p#q%i#r~%iBd!.]T%lQ&a7[O!_%i!_!`4t!`#o%i#p#q%i#r~%iG{!/RT]Q#sP&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%iMg!/wZ&^`&dp&a7[&g!b&i#t&WS&ZW&T&j%s,XO!Q%i!Q![!0j![!c%i!c!}!0j!}#R%i#R#S!0j#S#T%i#T#o!0j#p#q%i#r$g%i$g~!0jHP!0sZ&a7[&T&j%s,XO!Q%i!Q![!0j![!c%i!c!}!0j!}#R%i#R#S!0j#S#T%i#T#o!0j#p#q%i#r$g%i$g~!0jMg!1{c&^`&dp&a7[&g!b&i#t&WS&ZW&T&j%s,XOr%irs!3Wsw%iwx!5Ox!Q%i!Q![!0j![!c%i!c!t!0j!t!u!6v!u!}!0j!}#R%i#R#S!0j#S#T%i#T#f!0j#f#g!6v#g#o!0j#p#q%i#r$g%i$g~!0jBe!3_]&a7[&U,XOY,`YZ%iZ],`]^%i^r,`rs!4Ws#O,`#O#P-p#P#o,`#o#p.U#p#q,`#q#r.U#r~,`Be!4_T&a7[&U,XOr%irs!4ns#o%i#p#q%i#r~%iBe!4uR&a7[&Y,XO#o%i#p#q%i#r~%iBe!5V]&a7[&U,XOY8^YZ%iZ]8^]^%i^w8^wx!6Ox#O8^#O#P9^#P#o8^#o#p9r#p#q8^#q#r9r#r~8^Be!6VT&a7[&U,XOw%iwx!6fx#o%i#p#q%i#r~%iBe!6mR&a7[&V,XO#o%i#p#q%i#r~%iHP!7P_&a7[&T&j%s,XOr%irs!3Wsw%iwx!5Ox!Q%i!Q![!0j![!c%i!c!}!0j!}#R%i#R#S!0j#S#T%i#T#o!0j#p#q%i#r$g%i$g~!0jMg!8ec&^`&dp&a7[&g!b&i#t&WS&ZW&T&j%s,XOr%irs!9psw%iwx!:|x!Q%i!Q![!0j![!c%i!c!t!0j!t!u!<Y!u!}!0j!}#R%i#R#S!0j#S#T%i#T#f!0j#f#g!<Y#g#o!0j#p#q%i#r$g%i$g~!0jBe!9wT&a7[&c,XOr%irs!:Ws#o%i#p#q%i#r~%iBe!:]T&a7[Or%irs!:ls#o%i#p#q%i#r~%iBe!:sR&a7[&h,XO#o%i#p#q%i#r~%iBe!;TT&a7[&],XOw%iwx!;dx#o%i#p#q%i#r~%iBe!;iT&a7[Ow%iwx!;xx#o%i#p#q%i#r~%iBe!<PR&a7[&f,XO#o%i#p#q%i#r~%iHP!<c_&a7[&T&j%s,XOr%irs!9psw%iwx!:|x!Q%i!Q![!0j![!c%i!c!}!0j!}#R%i#R#S!0j#S#T%i#T#o!0j#p#q%i#r$g%i$g~!0jMg!=wg&^`&dp&a7[&g!b&i#t&WS&ZW&T&j%s,XOr%irs!3Wsw%iwx!5Ox!Q%i!Q![!0j![!c%i!c!h!0j!h!i!<Y!i!t!0j!t!u!6v!u!}!0j!}#R%i#R#S!0j#S#T%i#T#U!0j#U#V!6v#V#Y!0j#Y#Z!<Y#Z#o!0j#p#q%i#r$g%i$g~!0jMg!?u_&^`&dp&a7[&g!b&i#t&WS&ZW&T&j%s,XOr%irs!3Wsw%iwx!5Ox!Q%i!Q![!0j![!c%i!c!}!0j!}#R%i#R#S!0j#S#T%i#T#o!0j#p#q%i#r$g%i$g~!0jG{!AXR!W,X&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%iMg!AgX&a7[OY$}YZ%wZ]$}]^%w^#o$}#o#p!BS#p#q$}#q#r!BS#r~$}&f!BcO&^`&dp&g!b&i#t&WS&ZW<u!BvR!XR&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%iGz!CdT%iQ&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%iGy!C|P![Gm&WS&ZW#o#p!DP&Y!D[O&^`&dp&g!b&i#tGz!DoT%hQ&^`&dp&a7[&g!b&i#t&WS&ZWO!_%i!_!`4t!`#o%i#p#q%i#r~%i<u!EaO!]7_&^`&dp&g!b&i#t&WS&ZWGy!EtR%r,V&^`&dp&a7[&g!b&i#t&WS&ZWO#o%i#p#q%i#r~%i",
      tokenizers: [legacyPrint, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, newlines, bodyContinue],
      topRules: {"Script":[0,3]},
      specializeTable: 9955,
      specializations: [{await:40, or:48, and:50, in:54, not:56, is:58, if:64, else:66, lambda:70, self:74, yield:90, from:92, async:100, for:102, None:152, True:154, False:154, del:168, pass:172, break:176, continue:180, return:184, raise:192, import:196, as:198, global:202, nonlocal:204, assert:208, elif:216, while:220, try:226, except:228, finally:230, with:234, def:238, class:248}],
      tokenPrec: 9948
    });

    /// A syntax provider based on the [Lezer Python
    /// parser](https://github.com/lezer-parser/python), extended with
    /// highlighting and indentation information.
    var pythonSyntax = new LezerSyntax(parser$1.withProps(indentNodeProp.add({
        Body: continuedIndent()
    }), foldNodeProp.add({
        Body: function Body(tree) { return { from: tree.start + 1, to: tree.end - 1 }; },
        ArrayExpression: function ArrayExpression(tree) { return { from: tree.start + 1, to: tree.end - 1 }; },
        DictionaryExpression: function DictionaryExpression(tree) { return { from: tree.start + 1, to: tree.end - 1 }; }
    }), styleTags({
        "async * ** FormatConversion": "modifier",
        "for while if elif else try except finally return raise break continue with pass assert await yield": "keyword control",
        "in not and or is del": "operatorKeyword",
        "import from def class global nonlocal lambda": "keyword definition",
        "with as print": "keyword",
        self: "self",
        Boolean: "atom",
        None: "null",
        VariableName: "variableName",
        PropertyName: "propertyName",
        Comment: "lineComment",
        Number: "number",
        String: "string",
        FormatString: "string#2",
        UpdateOp: "updateOperator",
        ArithOp: "arithmeticOperator",
        BitOp: "bitwiseOperator",
        CompareOp: "compareOperator",
        AssignOp: "operator definition",
        Ellipsis: "punctuation",
        At: "punctuation meta",
        "( )": "paren",
        "[ ]": "squareBracket",
        "{ }": "brace",
        ".": "derefOperator",
        ", ;": "separator"
    })), {
        languageData: {
            closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] },
            commentTokens: { line: "#" }
        }
    });
    /// Returns an extension that installs the Python syntax provider.
    function python() {
        return pythonSyntax;
    }

    var _m25 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        python: python,
        pythonSyntax: pythonSyntax
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var 
      descendantOp = 102,
      Unit = 1,
      callee = 103,
      identifier = 104;

    /* Hand-written tokenizers for CSS tokens that can't be
       expressed by Lezer's built-in tokenizer. */

    var space$2 = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
                   8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288];
    var colon = 58, parenL = 40, underscore = 95, bracketL = 91, dash = 45, period = 46,
          hash$1 = 35, percent = 37;

    function isAlpha(ch) { return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 161 }

    function isDigit(ch) { return ch >= 48 && ch <= 57 }

    var identifiers = new ExternalTokenizer(function (input, token) {
      var start = token.start, pos = start, inside = false;
      for (;;) {
        var next = input.get(pos);
        if (isAlpha(next) || next == dash || next == underscore || (inside && isDigit(next))) {
          if (!inside && (next != dash || pos > start)) { inside = true; }
          pos++;
          continue
        }
        if (inside)
          { token.accept(next == parenL ? callee : identifier, pos); }
        break
      }
    });

    var descendant = new ExternalTokenizer(function (input, token) {
      if (space$2.includes(input.get(token.start - 1))) {
        var next = input.get(token.start);
        if (isAlpha(next) || next == underscore || next == hash$1 || next == period ||
            next == bracketL || next == colon || next == dash)
          { token.accept(descendantOp, token.start); }
      }
    });

    var unitToken = new ExternalTokenizer(function (input, token) {
      var start = token.start;
      if (!space$2.includes(input.get(start - 1))) {
        var next = input.get(start);
        if (next == percent) { token.accept(Unit, start + 1); }
        if (isAlpha(next)) {
          var pos = start + 1;
          while (isAlpha(input.get(pos))) { pos++; }
          token.accept(Unit, pos);
        }
      }
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var parser$2 = Parser.deserialize({
      states: "7jOVO[OOO!SO[O'#E[OUOO'#Cc'#CcOUOO'#Cb'#CbO#SO[O'#CeO#WOXO'#C`O#tO[O'#CgO$OO[O'#C}O$SO[O'#DROUOO'#El'#ElO$WOdO'#DdO$nO[O'#DqO$WOdO'#DsO%OO[O'#DuO%YO[O'#DxO%^O[O'#EOO%kO[O'#EQOUOO'#Ek'#EkOUOO(3Be(3BeQUOWOOOUOO,5:m,5:mOUOO'#Cf'#CfOUOO,59P,59PO#SO[O,59PO&OOWO'#E]O&YO[O'#ESO&pO[O,59RO$OO[O,59iO$SO[O,59mO&YO[O,59qO&YO[O,59sO&YO[O,59tO&zOWO,58zOUOO'#Ci'#CiOUOO'#Co'#CoOUOO,59R,59RO'OOWO,59RO'SOWO,59ROUOO'#DP'#DPOUOO,59i,59iOUOO'#DT'#DTO'WO`O,59mOUOO'#Cq'#CqO$WOdO'#CrO'_OvO'#CtO(eOtO,5:OOUOO'#Cy'#CyO'SOWO'#CxO(xOWO'#CzOUOO'#Ep'#EpOUOO'#Dg'#DgO(|O[O'#DnO)ZOWO'#ErO%^O[O'#DlO)hOWO'#DoOUOO'#Es'#EsO&zOWO,5:]O)lOpO,5:_OUOO'#Dw'#DwO)sOWO,5:aO)wO[O,5:aOUOO'#Dz'#DzO*OOWO,5:dO*SOWO,5:jO*ZOWO,5:lOUOO1G.k1G.kOUOO,5:n,5:nO*bOXO-E8QOUOO1G.m1G.mO'OOWO1G.mO'SOWO1G.mOUOO1G/T1G/TO+RO`O1G/XO+YOXO1G/]O+yOXO1G/_O,jOXO1G/`O-ZO[O'#D^OUOO1G.f1G.fO.^O[O'#CmO.wOdO'#CpOUOO1G/X1G/XO$WOdO1G/XO/bOpO,59^OUOO,59`,59`O$WOdO,59bO/iOWO1G/jOUOO,59d,59dO/mO!bO,59fO/tO`O'#DgO0OO`O,5:SO0SOWO,5:YO%^O[O,5:UO0ZOWO'#EcO%^O[O'#EYOUOO,5;^,5;^O0eOWO,5:WO&YO[O,5:ZOUOO1G/w1G/wOUOO1G/y1G/yOUOO1G/{1G/{O0uOWO1G/{O0yOdO'#D{OUOO1G0O1G0OOUOO1G0U1G0UOUOO1G0W1G0WOUOO7+$X7+$XOUOO7+$s7+$sO$WOdO7+$sO1WO[O'#E`OUOO(3Bi(3BiO2ZO[O,59xO2bOXO'#EnO3OOWO,59XO3SOdO'#E^O3pOtO(3BgO4aOWO'#EoO4hOWO,59[O4lOpO7+$sOUOO1G.x1G.xOUOO1G.|1G.|OUOO7+%U7+%UO4sOWO1G/QO$WOdO1G/nOUOO1G/t1G/tOUOO1G/p1G/pOUOO,5:t,5:tO4wOWO-E8WO5UOXO1G/uOUOO7+%g7+%gO5oOYO'#CtO5vOdO'#EdO&zOWO'#EZO6TOWO,5:gO6XOpO<<H_OUOO,5:q,5:qOUOO'#D`'#D`O6`O`O'#D_OUOO1G/d1G/dO6dOWO1G/dOUOO,5;Y,5;YOUOO1G.s1G.sOUOO,5:o,5:oO6kOWO'#E_O$WOdO'#EUOUOO,5;Z,5;ZOUOO1G.v1G.vOUOO<<H_<<H_OUOO7+$l7+$lO6rOWO7+%YOUOO7+%a7+%aOUOO,5:u,5:uOUOO-E8X-E8XOUOO1G0R1G0ROUOOAN=yAN=yO$WOdO,59yO6vOWO'#EbO6}O[O'#EXO8TOWO7+%OOUOO,5:p,5:pOUOO-E8S-E8SOUOO<<Ht<<HtO8XOtO1G/eOUOO,5:s,5:sO9OO[O-E8VOUOO<<Hj<<HjO9YOtO(3BjO:POdO'#EaO$WOdO'#EWO:sOWO7+%POUOO3)-q3)-qOUOO,5:r,5:rO:}OtO-E8UOUOO<<Hk<<Hk",
      stateData: "<PQOS#^OS~TXOWXO[UOrVOvWO!X`O!YYO!fZO!h[O!j]O!m^O!s_O#[QO#aSO~TXOWXO[UOrVOvWO!X`O!YYO!fZO!h[O!j]O!m^O!s_O#[QO#aSO#X#OX~#[eO~[jObiOrkOvlOzmO}oO#YnO#agO!P#PP~^tO#ZrO#[qO~#[vO~#[xO~`{Og!ROi!ROo!QO#Z!OO#[zO#e|O~`!TO!a!VO!d!WO#[!SO!P#fP~i!]Oo!QO#[![O~#[!_O~`!TO!a!VO!d!WO#[!SO~`!TO!a!VO!d!WO#[!SO!P#fP!V#fP~biO!P#PX_#PX~TXOWXO[UOrVOvWO#[QO#aSO~^!gO#ZrO#[qO~!P!nO~`!pO~`!qO~t!rOx!sO~P!uO`hXkhX!VhX!ahX!dhX#[hX_hXbhXghXihXohX#ZhX#ehXthX!OhX!UhX~`!TOk!vO!a!VO!d!WO#[!SO!V#fP~`!yO~`!TO!a!VO!d!WO#[!zO~b#PO!_!}O!P#VP!V#VP~`#SO~k!vO!V#UO~!V#VO~i#WOo!QO~!P#XO~!P!nO!_!}O~!P!nO!V#[O~[jOrkOvlOzmO}oO#YnO#agOb!vc!P!vc_!vc~t#^Ox#_O~[jOrkOvlO#agObyizyi}yi!Pyi#Yyi_yi~[jOrkOvlO#agOb{iz{i}{i!P{i#Y{i_{i~[jOrkOvlO#agOb|iz|i}|i!P|i#Y|i_|i~TXOWXO[UOrVOvWO!X`O!YYO!fZO!h[O!j]O!m^O!s_O#[QO#aSO!O#SP#[#SP~TXOWXO[UOrVOvWO#[QO#aSO_#bP~`{Og!ROi!ROo!QO#Z!OO#[zO#e|O_#cP~_#jOk!vO~!V#lO~i#mOp#mO~_!ZX!T!]X!_!ZX~!T#nO~_#oO!_!}O~b#PO!P#VX!V#VX~!_!}Ob!`a!P!`a!V!`a_!`a~!V#tO~!p#wO!q#wO#e#uO!O#WP~TXOWXO[UOrVOvWO!X`O!YYO!fZO!h[O!j]O!m^O!s_O#[QO#aSO!O#SX!V#SX~!O#}O#[#{O~[jObiOrkOvlOzmO}oO#YnO#agO_#PP~_$QO~`{Og!ROi!ROo!QO#Z!OO#[zO#e|O_#QXb#QX~k!vO_!wZ`!wZb!wZg!wZi!wZo!wZ#Z!wZ#[!wZ#e!wZ~b$TO_#RP~_$VO~k!vOt$WO~_$XO~!_!}Ob!|c!P!|c!V!|c~[jO_$ZOrkOvlOzmO}oO#YnO#agO~P!uO!PhX~!p#wO!q#wO#e#uO!O#WX~!O$^O~k!vOt$_O~!T$`O~!V$bO!O#UP~b$TO_#RX~_$fO~!V$bO!O#UX~TXOWXO[UOrVOvWO!X`O!YYO!fZO!h[O!j]O!m^O!s_O#[QO#aSO!O#SP!V#SP#[#SP~!O$jO~`{Ob$mOg!ROi!ROk!vOo!QO#Z!OO#[zO#e|O!O#TP!U#TP!V#TP~#[#{O!O!{c!V!{c~k!vO`!zZb!zZg!zZi!zZo!zZ!O!zZ!U!zZ!V!zZ#Z!zZ#[!zZ#e!zZ~`{Ob$mOg!ROi!ROo!QO#Z!OO#[zO#e|O!O#TX!U#TX!V#TX~!U$rO!O!Rq!V!Rq~k!vO`!zcb!zcg!zci!zco!zc!O!zc!U!zc!V!zc#Z!zc#[!zc#e!zc~#^pQ#ek}~#Z!X#[~",
      goto: ",Y#hPPPP#iP#p#}P#p$[#pP$bPPP$hP$n$t$}$}P%_P$}P$}%s&TPP#pP&kP#pP&qP#pP#p#pPPP&w'W'^PPP#iPP'b'b'l'bP'bP'b'bP#iP#iP#iP'o#iP'r'uPP#iP#i'x(O(V(_(e(l(r(x)O)U)X)_)h)k)q)t)w)zPPPPPP)}*WP*q*t*wP+k+tZaOP!n#`$bgXOPimno!n!p#S#`$bgROPimno!n!p#S#`$bQfSR!cgQsUR!fjQ!ftR#]!gQuUR!hjQ!fuQ!x!PR#]!hm!RY[{!q!s!v#_#e#n$T$`$g$l$ml!RY[{!q!s!v#_#e#n$T$`$g$l$mT#w#X#vm!PY[{!q!s!v#_#e#n$T$`$g$l$ml!RY[{!q!s!v#_#e#n$T$`$g$l$mQ!]]R#W!^QwVR!ikQyWR!jlQ!opQ#T!YQ#Z!aQ#[!bR$]#wQ$O#bR$o$iT#|#b$ia!XZ_`}!T!V!}#PR!{!TR!^]R!`^R#Y!`QPORdPShT#cR!dhU#e!q#n$TR$R#eQ$S#gR$d$SS#`!n$bR#z#`Q$l$gR$p$lQ$a$OR$h$aQ#O!UR#q#OQ#v#XR$[#vRcOQpTR$P#cQ#g!qQ$Y#nR$e$TR$U#gQ#b!nR$i$bR$n$gR$c$OR#Q!UR#x#XSbOPV#a!n#`$bYTOP!n#`$bQ!eiQ!kmQ!lnQ!moQ#c!pR#s#SR#d!pR#h!qQ}YQ!Z[Q!t{W#f!q#e#n$TQ#i!sQ#k!vQ#y#_Q$g$`S$k$g$lR$q$mQ!YZQ!b`R!w}U!UZ`}Q!a_Q!|!TQ#R!VQ#p!}R#r#P",
      nodeNames: "⚠ Unit Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector PseudoOp PseudoClassName not ) ( ArgList , PseudoClassName ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName : Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery callee MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",
      nodeProps: [
        [NodeProp.top, 3,true],
        [NodeProp.openedBy, 15,"(",46,"{"],
        [NodeProp.closedBy, 16,")",47,"}"]
      ],
      repeatNodeCount: 9,
      tokenData: "Bl~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8u}!O9Q!O!P9i!P!Q9z!Q![<U![!]<y!]!^=k!^!_$w!_!`=v!`!a>R!a!b$w!b!c>q!c!}$w!}#O?}#O#P$w#P#Q@Y#Q#R2U#R#T$w#T#U@e#U#c$w#c#dAd#d#o$w#o#pAs#p#q2U#q#rBO#r#sBZ#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQpWOy%Qz~%Q~%bf#^~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#^~pWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q_(fSOy%Qz#]%Q#]#^(r#^~%Q_(wSpWOy%Qz#a%Q#a#b)T#b~%Q_)YSpWOy%Qz#d%Q#d#e)f#e~%Q_)kSpWOy%Qz#c%Q#c#d)w#d~%Q_)|SpWOy%Qz#f%Q#f#g*Y#g~%Q_*_SpWOy%Qz#h%Q#h#i*k#i~%Q_*pSpWOy%Qz#T%Q#T#U*|#U~%Q_+RSpWOy%Qz#b%Q#b#c+_#c~%Q_+dSpWOy%Qz#h%Q#h#i+p#i~%Q_+wQ!UVpWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOi~~,lPO~+}_,tWrPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWpWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWpWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWgUpWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWgUpWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWpWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWgUpWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WpWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQgUpWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQxQpWOy%Qz~%QX2wQWPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQ`VOy%Qz~%Q~3zO_~_4RSTPkSOy%Qz!_%Q!_!`2e!`~%Q_4fUkS}POy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SpWOy%Qz!Q%Q!Q![5Z![~%Q^5bWpW#eUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWpWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSpWOy%Qz!Q%Q!Q![6z![~%Q^7RSpW#eUOy%Qz!Q%Q!Q![6z![~%Q^7fYpW#eUOy%Qz!O%Q!O!P8U!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^8]WpW#eUOy%Qz!Q%Q!Q![8U![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8zQbVOy%Qz~%Q^9VUkSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_9nS#aPOy%Qz!Q%Q!Q![5Z![~%Q~:PRkSOy%Qz{:Y{~%Q~:_SpWOy:Yyz:kz{;`{~:Y~:nROz:kz{:w{~:k~:zTOz:kz{:w{!P:k!P!Q;Z!Q~:k~;`OQ~~;eUpWOy:Yyz:kz{;`{!P:Y!P!Q;w!Q~:Y~<OQpWQ~Oy%Qz~%Q^<ZY#eUOy%Qz!O%Q!O!P8U!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QZ=QS!TQ[POy%Qz![%Q![!]=^!]~%QX=eQ[PpWOy%Qz~%Q_=pQ!VVOy%Qz~%QY={QxQOy%Qz~%QX>WSzPOy%Qz!`%Q!`!a>d!a~%QX>kQzPpWOy%Qz~%QX>tUOy%Qz!c%Q!c!}?W!}#T%Q#T#o?W#o~%QX?_Y!XPpWOy%Qz}%Q}!O?W!O!Q%Q!Q![?W![!c%Q!c!}?W!}#T%Q#T#o?W#o~%QX@SQvPOy%Qz~%Q^@_QtUOy%Qz~%QZ@hSOy%Qz#b%Q#b#c@t#c~%QZ@ySpWOy%Qz#W%Q#W#XAV#X~%QZA^Q!_RpWOy%Qz~%QZAgSOy%Qz#f%Q#f#gAV#g~%QXAxQ!PPOy%Qz~%Q_BTQ!OVOy%Qz~%QZB`S}POy%Qz!_%Q!_!`2e!`~%Q",
      tokenizers: [descendant, unitToken, identifiers, 0, 1, 2, 3],
      topRules: {"StyleSheet":[0,3]},
      specializeTable: 1239,
      specializations: [{not:28, url:62, "url-prefix":62, domain:62, regexp:62, selector:132},
       {"@import":112, "@media":136, "@charset":140, "@namespace":144, "@keyframes":150, "@supports":162},
       {not:126, only:126, from:156, to:158}],
      tokenPrec: 1232
    });

    /// A syntax provider based on the [Lezer CSS
    /// parser](https://github.com/lezer-parser/css), extended with
    /// highlighting and indentation information.
    var cssSyntax = new LezerSyntax(parser$2.withProps(indentNodeProp.add({
        Declaration: continuedIndent()
    }), foldNodeProp.add({
        Block: function Block(subtree) { return { from: subtree.start + 1, to: subtree.end - 1 }; }
    }), styleTags({
        "import charset namespace keyframes": "keyword definition",
        "media supports": "keyword control",
        "from to": "keyword",
        NamespaceName: "namespace",
        KeyframeName: "labelName",
        TagName: "typeName",
        ClassName: "className",
        PseudoClassName: "className constant",
        not: "operatorKeyword",
        IdName: "labelName",
        AttributeName: "propertyName",
        NumberLiteral: "number",
        PropertyName: "propertyName",
        KeywordQuery: "keyword",
        FeatureName: "propertyName",
        UnaryQueryOp: "operatorKeyword",
        callee: "keyword",
        ValueName: "atom",
        CallTag: "atom",
        Callee: "variableName",
        Unit: "unit",
        "UniversalSelector NestingSelector": "operator definition",
        AtKeyword: "keyword",
        MatchOp: "compareOperator",
        "ChildOp SiblingOp, LogicOp": "logicOperator",
        BinOp: "arithmeticOperator",
        Important: "modifier",
        Comment: "blockComment",
        ParenthesizedContent: "name#2",
        ColorLiteral: "color",
        StringLiteral: "string",
        ":": "punctuation definition",
        "PseudoOp #": "derefOperator",
        "; ,": "separator",
        "( )": "paren",
        "[ ]": "squareBracket",
        "{ }": "brace"
    })), {
        languageData: {
            commentTokens: { block: { open: "/*", close: "*/" } }
        }
    });
    /// Returns an extension that installs the CSS syntax provider.
    function css() {
        return cssSyntax;
    }

    var _m26 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        css: css,
        cssSyntax: cssSyntax
    });

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var 
      StartTag = 1,
      StartCloseTag = 2,
      MismatchedStartCloseTag = 3,
      missingCloseTag = 38,
      SelfCloseEndTag = 4,
      Element$1 = 9,
      OpenTag = 10,
      SelfClosingTag = 20,
      RawText = 24;

    /* Hand-written tokenizers for HTML. */

    var selfClosers = {
      area: true, base: true, br: true, col: true, command: true,
      embed: true, frame: true, hr: true, img: true, input: true,
      keygen: true, link: true, meta: true, param: true, source: true,
      track: true, wbr: true, menuitem: true
    };

    var implicitlyClosed = {
      dd: true, li: true, optgroup: true, option: true, p: true,
      rp: true, rt: true, tbody: true, td: true, tfoot: true,
      th: true, tr: true
    };

    var closeOnOpen = {
      dd: {dd: true, dt: true},
      dt: {dd: true, dt: true},
      li: {li: true},
      option: {option: true, optgroup: true},
      optgroup: {optgroup: true},
      p: {
        address: true, article: true, aside: true, blockquote: true, dir: true,
        div: true, dl: true, fieldset: true, footer: true, form: true,
        h1: true, h2: true, h3: true, h4: true, h5: true, h6: true,
        header: true, hgroup: true, hr: true, menu: true, nav: true, ol: true,
        p: true, pre: true, section: true, table: true, ul: true
      },
      rp: {rp: true, rt: true},
      rt: {rp: true, rt: true},
      tbody: {tbody: true, tfoot: true},
      td: {td: true, th: true},
      tfoot: {tbody: true},
      th: {td: true, th: true},
      thead: {tbody: true, tfoot: true},
      tr: {tr: true}
    };

    function nameChar(ch) {
      return ch == 45 || ch == 46 || ch == 58 || ch >= 65 && ch <= 90 || ch == 95 || ch >= 97 && ch <= 122 || ch >= 161
    }

    function isSpace(ch) {
      return ch == 9 || ch == 10 || ch == 13 || ch == 32
    }

    var lessThan = 60, greaterThan = 62, slash$1 = 47, question = 63, bang = 33;

    var tagStartExpr = /^<\s*([\.\-\:\w\xa1-\uffff]+)/;

    var elementQuery = [Element$1];

    var tagStart = new ExternalTokenizer(function (input, token, stack) {
      var pos = token.start, first = input.get(pos);
      // End of file, just close anything
      if (first < 0) {
        var contextStart = stack.startOf(elementQuery);
        var match = contextStart < 0 ? null : tagStartExpr.exec(input.read(contextStart, contextStart + 30));
        if (match && implicitlyClosed[match[1].toLowerCase()]) { token.accept(missingCloseTag, token.start); }
      }
      if (first != lessThan) { return }
      pos++;
      var close = false, tokEnd = pos;
      for (var next = (void 0); next = input.get(pos);) {
        if (next == slash$1 && !close) { close = true; pos++; tokEnd = pos; }
        else if (next == question || next == bang) { return }
        else if (isSpace(next)) { pos++; }
        else { break }
      }
      var nameStart = pos;
      while (nameChar(input.get(pos))) { pos++; }
      if (pos > nameStart) {
        var name = input.read(nameStart, pos).toLowerCase();
        var contextStart$1 = stack.startOf(elementQuery);
        var match$1 = contextStart$1 < 0 ? null : tagStartExpr.exec(input.read(contextStart$1, contextStart$1 + name.length + 10));
        if (match$1) {
          var contextName = match$1[1].toLowerCase();
          if (close && name != contextName)
            { return implicitlyClosed[contextName] ? token.accept(missingCloseTag, token.start)
              : token.accept(MismatchedStartCloseTag, tokEnd) }
          if (!close && closeOnOpen[contextName] && closeOnOpen[contextName][name])
            { return token.accept(missingCloseTag, token.start) }
        }
      }
      token.accept(close ? StartCloseTag : StartTag, tokEnd);
    }, {contextual: true});

    var tagQuery = [OpenTag, SelfClosingTag];

    var selfClosed = new ExternalTokenizer(function (input, token, stack) {
      var next = input.get(token.start), end = token.start + 1;
      if (next == slash$1) {
        if (input.get(end) != greaterThan) { return }
        end++;
      } else if (next != greaterThan) {
        return
      }
      var from = stack.startOf(tagQuery);
      var match = from < 0 ? null : tagStartExpr.exec(input.read(from, token.start));
      if (match && selfClosers[match[1].toLowerCase()]) { token.accept(SelfCloseEndTag, end); }
    }, {contextual: true});

    var openTag = /^<\/?\s*([\.\-\:\w\xa1-\uffff]+)/;

    function tagName(tag) {
      var m = openTag.exec(tag);
      return m ? m[1].toLowerCase() : null
    }

    function attributes(tag) {
      var open = openTag.exec(tag), attrs = {};
      if (open) {
        var attr = /\s*([\.\-\:\w\xa1-\uffff]+)\s*(?:=("[^"]*"|'[^']*'|[^\s=<>"'/]+))?/g, m;
        attr.lastIndex = open.index + open[0].length;
        while (m = attr.exec(tag)) { attrs[m[1]] = m[2] || m[1]; }
      }
      return attrs
    }

    var stay = {stay: true};

    function skip(name) { return function (token) { return tagName(token) == name; } }

    // tags: {
    //   tag: string,
    //   attrs?: ({[attr: string]: string}) => boolean,
    //   parser?: Parser,
    //   parseNode?: (input: InputStream, start: number) => Tree
    // }[]

    function resolveContent(tags) {
      var tagMap = null;
      for (var i = 0, list = tags; i < list.length; i += 1) {
        var tag = list[i];

        if (!tagMap) { tagMap = Object.create(null)
        ; }(tagMap[tag.tag] || (tagMap[tag.tag] = [])).push({
          attrs: tag.attrs,
          value: {
            filterEnd: skip(tag.tag),
            parser: tag.parser,
            parseNode: tag.parseNode
          }
        });
      }
      return function(input, stack) {
        var openTag = input.read(stack.ruleStart, stack.pos);
        var name = tagName(openTag), matches, attrs;
        if (!name) { return stay }
        if (tagMap && (matches = tagMap[name])) {
          for (var i = 0, list = matches; i < list.length; i += 1) {
            var match = list[i];

            if (!match.attrs || match.attrs(attrs || (attrs = attributes(openTag)))) { return match.value }
          }
        }
        if (name == "script" || name == "textarea" || name == "style") { return {
          filterEnd: skip(name),
          wrapType: RawText
        } }
        return stay
      }
    }

    var elementContent = resolveContent([]);

    function configureTags(parser, tags) {
      return parser.withNested({elementContent: resolveContent(tags)})
    }

    // This file was generated by lezer-generator. You probably shouldn't edit it.
    var parser$3 = Parser.deserialize({
      states: "(QOPOTOOOgOTO'#C{O!QOWO'#CfS!XOTO'#CeOOOO'#Ce'#CeOOOO'#DT'#DTOOOO(3AX(3AXQOOOOOOOOO,59a,59aO!uOWO'#C|OOOO(3AY(3AYO#POWO,59QO#TOTO'#DQOOOO(3A^(3A^OOOO'#DZ'#DZO#qOPO,59POOOO,59b,59bO#{ObO1G.lOOOO,59f,59fO!QOWO'#CnO$YOpO'#CnOOOO1G.k1G.kO$aObO'#C|O$qObO7+$WO${OWO,59YO%POpO'#C|O%WOpO,59YO%[ObO'#C}O%fObO'#ChOOOO(3AZ(3AZO%vOYO<<GrO%}OWO1G.tOOOO,59c,59cO&UObO,59SOOOOAN=^AN=^OOOOAN=hAN=hO&cOWO7+$`O&gO!bO1G.nOOOO<<Gz<<GzO&tO!bO'#C|O'RO!bO7+$YO']O#tO'#CkO'jO&jO'#CkO#{ObO<<GtO'wO#tO'#DOOOOO(3A[(3A[O(UOWO,59VO(YO&jO'#DPOOOO(3A](3A]O(gOWO,59VOOOOAN=`AN=`OOOO,59d,59dOOOO1G.q1G.qOOOO,59e,59e",
      stateData: "(o~PQOUTOVTOWTOeTOfTOgUO~PQOUTOVTOWTOeTOfTOgUOuoX~xYOZpP~PQOUTOVTOWTOeTOfTOQtPRtPvtP~xYOZpXapX~ZaO~PQOUTOVTOWTOeTOfTOQtXRtXvtX~QcORdOveO~xYOSpP]pPapP~xYOcpP~xYOSpX]pXapX^pX~]lOSqPaqP~ZoO~xYOcpX~coO~]lOSqXaqX~xYOSpP]pP^pPapP~SsOarO~xYOapP~^uOS[a][aa[a~avO~xYO`pPypP{pP~xYO`pXypX{pX~`{OyyO{zO~V}OW}Oz}OyrP~V!QOW!QO|!QO{sP~V}OW}Oz}OyrX~y!UO~V!QOW!QO|!QO{sX~{!UO~efg~",
      goto: "$w!OPPPPPPPPP!P!VP!]PP!aPP!dP!gPPPP!m!s#Z#a#g#m#s#v$`$c$f$iPP$lPPPPP$tXTOPR[XROPR[TmgkR{xRe_XSOPR[QPORWPUXQcoW`XfiwUfal{QidRwuQkgRpkQ|yR!T|Q!PzR!V!PQ[RRb[RVOQZQQgaQhcQjdQqlQtoQxuR!S{RngR!OyR!RzR^RSUOPT]R[R_R",
      nodeNames: "⚠ StartTag StartCloseTag StartCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag CloseTag MismatchedTagName SelfClosingTag Comment ProcessingInst DoctypeDecl RawText",
      nodeProps: [
        [NodeProp.closedBy, 1,"EndTag SelfCloseEndTag",2,"EndTag SelfCloseEndTag",10,"CloseTag"],
        [NodeProp.openedBy, 4,"StartTag",17,"StartTag StartCloseTag",18,"OpenTag"],
        [NodeProp.top, 5,true]
      ],
      repeatNodeCount: 6,
      tokenData: "!(S#sR!UOX$eXY)mYZ)mZ]$e]^)m^p$epq)mqr$ers*tsv$evw+^wx2qx!P$e!P!Q3^!Q![$e![!]4t!]!^$e!^!_:c!_!`!%t!`!a4S!a!c$e!c!}4t!}#R$e#R#S4t#S#T$e#T#o4t#o$f$e$f$g%{$g%W$e%W%o4t%o%p$e%p&a4t&a&b$e&b1p4t1p4U$e4U4d4t4d4e$e4e$IS4t$IS$I`$e$I`$Ib4t$Ib$Kh$e$Kh%#t4t%#t&/x$e&/x&Et4t&Et&FV$e&FV;'S4t;'S;:j!&f;:j?&r$e?&r?Ah4t?Ah?BY$e?BY?Mn4t?Mn~$e#e$pcUP``zp|!bOX$eXZ%{Z]$e]^%{^p$epq%{qr$ers&ksv$evw({wx'lx!P$e!P!Q%{!Q!^$e!^!_(e!_!a%{!a$f$e$f$g%{$g~$e#T&UVUPzp|!bOr%{rs&ksv%{wx'lx!^%{!^!_(e!_~%{!c&rTUP|!bOv&kwx'Rx!^&k!^!_'a!_~&kP'WRUPOv'Rw!^'R!_~'R!b'fQ|!bOv'ax~'aq'sUUPzpOr'lrs'Rsv'lw!^'l!^!_(V!_~'lp([RzpOr(Vsv(Vw~(V#S(lTzp|!bOr(ers'asv(ewx(Vx~(e`)QX``OX({Z]({^p({qr({sw({x!P({!Q!^({!a$f({$g~({#s)x^UPzp|!bxnOX%{XY)mYZ)mZ]%{]^)m^p%{pq)mqr%{rs&ksv%{wx'lx!^%{!^!_(e!_~%{#g*}Ty!SUP|!bOv&kwx'Rx!^&k!^!_'a!_~&k#e+cb``OX,kXZ-xZ],k]^-x^p,kqr,krs-xst/Ttw,kwx-xx!P,k!P!Q-x!Q!],k!]!^({!^!a-x!a$f,k$f$g-x$g~,k#e,pb``OX,kXZ-xZ],k]^-x^p,kqr,krs-xst({tw,kwx-xx!P,k!P!Q-x!Q!],k!]!^.a!^!a-x!a$f,k$f$g-x$g~,k#T-{TOp-xqs-xt!]-x!]!^.[!^~-x#T.aOV#T#e.hXV#T``OX({Z]({^p({qr({sw({x!P({!Q!^({!a$f({$g~({#e/Ya``OX0_XZ1iZ]0_]^1i^p0_qr0_rs1isw0_wx1ix!P0_!P!Q1i!Q!]0_!]!^({!^!a1i!a$f0_$f$g1i$g~0_#e0da``OX0_XZ1iZ]0_]^1i^p0_qr0_rs1isw0_wx1ix!P0_!P!Q1i!Q!]0_!]!^1}!^!a1i!a$f0_$f$g1i$g~0_#T1lSOp1iq!]1i!]!^1x!^~1i#T1}OW#T#e2UXW#T``OX({Z]({^p({qr({sw({x!P({!Q!^({!a$f({$g~({#g2zU{!tUPzpOr'lrs'Rsv'lw!^'l!^!_(V!_~'l#Z3gXUPzp|!bOr%{rs&ksv%{wx'lx!^%{!^!_(e!_!`%{!`!a4S!a~%{#Z4_VaUUPzp|!bOr%{rs&ksv%{wx'lx!^%{!^!_(e!_~%{#s5V!Y]ScWZQUP``zp|!bOX$eXZ%{Z]$e]^%{^p$epq%{qr$ers&ksv$evw({wx'lx}$e}!O4t!O!P4t!P!Q%{!Q![4t![!]4t!]!^$e!^!_(e!_!a%{!a!c$e!c!}4t!}#R$e#R#S4t#S#T$e#T#o4t#o$f$e$f$g%{$g$}$e$}%O4t%O%W$e%W%o4t%o%p$e%p&a4t&a&b$e&b1p4t1p4U4t4U4d4t4d4e$e4e$IS4t$IS$I`$e$I`$Ib4t$Ib$Je$e$Je$Jg4t$Jg$Kh$e$Kh%#t4t%#t&/x$e&/x&Et4t&Et&FV$e&FV;'S4t;'S;:j8u;:j?&r$e?&r?Ah4t?Ah?BY$e?BY?Mn4t?Mn~$e#s9QeUP``zp|!bOX$eXZ%{Z]$e]^%{^p$epq%{qr$ers&ksv$evw({wx'lx!P$e!P!Q%{!Q!^$e!^!_(e!_!a%{!a$f$e$f$g%{$g;=`$e;=`<%l4t<%l~$e#T:jWzp|!bOq(eqr;Srs'asv(ewx(Vx!a(e!a!bNn!b~(e#T;ZZzp|!bOr(ers'asv(ewx(Vx}(e}!O;|!O!f(e!f!gDV!g#W(e#W#XKO#X~(e#T<TVzp|!bOr(ers'asv(ewx(Vx}(e}!O<j!O~(e#T<qWzp|!bOr<jrs=Zsv<jvw=owx?}x}<j}!OBV!O~<j!c=`T|!bOv=Zvx=ox}=Z}!O>p!O~=ZP=rRO}=o}!O={!O~=oP>ORO}=o}!O>X!O~=oP>[TO}=o}!O>X!O!`=o!`!a>k!a~=oP>pOeP!c>uT|!bOv=Zvx=ox}=Z}!O?U!O~=Z!c?ZV|!bOv=Zvx=ox}=Z}!O?U!O!`=Z!`!a?p!a~=Z!c?wQ|!bePOv'ax~'aq@SVzpOr?}rs=osv?}vw=ow}?}}!O@i!O~?}q@nVzpOr?}rs=osv?}vw=ow}?}}!OAT!O~?}qAYXzpOr?}rs=osv?}vw=ow}?}}!OAT!O!`?}!`!aAu!a~?}qA|RzpePOr(Vsv(Vw~(V#TB^Wzp|!bOr<jrs=Zsv<jvw=owx?}x}<j}!OBv!O~<j#TB}Yzp|!bOr<jrs=Zsv<jvw=owx?}x}<j}!OBv!O!`<j!`!aCm!a~<j#TCvTzp|!bePOr(ers'asv(ewx(Vx~(e#TD^Vzp|!bOr(ers'asv(ewx(Vx!q(e!q!rDs!r~(e#TDzVzp|!bOr(ers'asv(ewx(Vx!e(e!e!fEa!f~(e#TEhVzp|!bOr(ers'asv(ewx(Vx!v(e!v!wE}!w~(e#TFUVzp|!bOr(ers'asv(ewx(Vx!{(e!{!|Fk!|~(e#TFrVzp|!bOr(ers'asv(ewx(Vx!r(e!r!sGX!s~(e#TG`Vzp|!bOr(ers'asv(ewx(Vx!g(e!g!hGu!h~(e#TG|Wzp|!bOrGursHfsvGuvwHzwxIjx!`Gu!`!aJf!a~Gu!cHkT|!bOvHfvxHzx!`Hf!`!aI]!a~HfPH}RO!`Hz!`!aIW!a~HzPI]OgP!cIdQ|!bgPOv'ax~'aqIoVzpOrIjrsHzsvIjvwHzw!`Ij!`!aJU!a~IjqJ]RzpgPOr(Vsv(Vw~(V#TJoTzp|!bgPOr(ers'asv(ewx(Vx~(e#TKVVzp|!bOr(ers'asv(ewx(Vx#c(e#c#dKl#d~(e#TKsVzp|!bOr(ers'asv(ewx(Vx#V(e#V#WLY#W~(e#TLaVzp|!bOr(ers'asv(ewx(Vx#h(e#h#iLv#i~(e#TL}Vzp|!bOr(ers'asv(ewx(Vx#m(e#m#nMd#n~(e#TMkVzp|!bOr(ers'asv(ewx(Vx#d(e#d#eNQ#e~(e#TNXVzp|!bOr(ers'asv(ewx(Vx#X(e#X#YGu#Y~(e#TNuWzp|!bOrNnrs! _svNnvw! swx!#Tx!aNn!a!b!$k!b~Nn!c! dT|!bOv! _vx! sx!a! _!a!b!!b!b~! _P! vRO!a! s!a!b!!P!b~! sP!!SRO!`! s!`!a!!]!a~! sP!!bOfP!c!!gT|!bOv! _vx! sx!`! _!`!a!!v!a~! _!c!!}Q|!bfPOv'ax~'aq!#YVzpOr!#Trs! ssv!#Tvw! sw!a!#T!a!b!#o!b~!#Tq!#tVzpOr!#Trs! ssv!#Tvw! sw!`!#T!`!a!$Z!a~!#Tq!$bRzpfPOr(Vsv(Vw~(V#T!$rWzp|!bOrNnrs! _svNnvw! swx!#Tx!`Nn!`!a!%[!a~Nn#T!%eTzp|!bfPOr(ers'asv(ewx(Vx~(e#X!&PV^SUPzp|!bOr%{rs&ksv%{wx'lx!^%{!^!_(e!_~%{#s!&qeUP``zp|!bOX$eXZ%{Z]$e]^%{^p$epq%{qr$ers&ksv$evw({wx'lx!P$e!P!Q%{!Q!^$e!^!_(e!_!a%{!a$f$e$f$g%{$g;=`$e;=`<%l4t<%l~$e",
      tokenizers: [tagStart, selfClosed, 0, 1, 2, 3, 4, 5, 6],
      topRules: {"Document":[0,5]},
      nested: [["elementContent", elementContent,"&k~RP!^!_U~XP!P!Q[~_dXY!mYZ!m]^!mpq!m![!]$O!c!}$O#R#S$O#T#o$O%W%o$O%p&a$O&b1p$O4U4d$O4e$IS$O$I`$Ib$O$Kh%#t$O&/x&Et$O&FV;'S$O;'S;:j&e?&r?Ah$O?BY?Mn$O~!pdXY!mYZ!m]^!mpq!m![!]$O!c!}$O#R#S$O#T#o$O%W%o$O%p&a$O&b1p$O4U4d$O4e$IS$O$I`$Ib$O$Kh%#t$O&/x&Et$O&FV;'S$O;'S;:j&e?&r?Ah$O?BY?Mn$O~$RkXY%vYZ%v]^%vpq%v}!O$O!O!P$O!Q![$O![!]$O!`!a&Y!c!}$O#R#S$O#T#o$O$}%O$O%W%o$O%p&a$O&b1p$O1p4U$O4U4d$O4e$IS$O$I`$Ib$O$Je$Jg$O$Kh%#t$O&/x&Et$O&FV;'S$O;'S;:j&_?&r?Ah$O?BY?Mn$O~%yTXY%vYZ%v]^%vpq%v!`!a&Y~&_Ou~~&bP;=`<%l$O~&hP;=`<%l$O", 45]],
      specializeTable: 0,
      tokenPrec: 349
    });

    function configureHTML(tags) { return configureTags(parser$3, tags) }

    var Targets = ["_blank", "_self", "_top", "_parent"];
    var Charsets = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
    var Methods = ["get", "post", "put", "delete"];
    var Encs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
    var Bool = ["true", "false"];
    var S = {}; // Empty tag spec
    var Tags = {
        a: {
            attrs: {
                href: null, ping: null, type: null,
                media: null,
                target: Targets,
                hreflang: null
            }
        },
        abbr: S,
        acronym: S,
        address: S,
        applet: S,
        area: {
            attrs: {
                alt: null, coords: null, href: null, target: null, ping: null,
                media: null, hreflang: null, type: null,
                shape: ["default", "rect", "circle", "poly"]
            }
        },
        article: S,
        aside: S,
        audio: {
            attrs: {
                src: null, mediagroup: null,
                crossorigin: ["anonymous", "use-credentials"],
                preload: ["none", "metadata", "auto"],
                autoplay: ["autoplay"],
                loop: ["loop"],
                controls: ["controls"]
            }
        },
        b: S,
        base: { attrs: { href: null, target: Targets } },
        basefont: S,
        bdi: S,
        bdo: S,
        big: S,
        blockquote: { attrs: { cite: null } },
        body: S,
        br: S,
        button: {
            attrs: {
                form: null, formaction: null, name: null, value: null,
                autofocus: ["autofocus"],
                disabled: ["autofocus"],
                formenctype: Encs,
                formmethod: Methods,
                formnovalidate: ["novalidate"],
                formtarget: Targets,
                type: ["submit", "reset", "button"]
            }
        },
        canvas: { attrs: { width: null, height: null } },
        caption: S,
        center: S,
        cite: S,
        code: S,
        col: { attrs: { span: null } },
        colgroup: { attrs: { span: null } },
        command: {
            attrs: {
                type: ["command", "checkbox", "radio"],
                label: null, icon: null, radiogroup: null, command: null, title: null,
                disabled: ["disabled"],
                checked: ["checked"]
            }
        },
        data: { attrs: { value: null } },
        datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
        datalist: { attrs: { data: null } },
        dd: S,
        del: { attrs: { cite: null, datetime: null } },
        details: { attrs: { open: ["open"] } },
        dfn: S,
        dir: S,
        div: S,
        dl: S,
        dt: S,
        em: S,
        embed: { attrs: { src: null, type: null, width: null, height: null } },
        eventsource: { attrs: { src: null } },
        fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
        figcaption: S,
        figure: S,
        font: S,
        footer: S,
        form: {
            attrs: {
                action: null, name: null,
                "accept-charset": Charsets,
                autocomplete: ["on", "off"],
                enctype: Encs,
                method: Methods,
                novalidate: ["novalidate"],
                target: Targets
            }
        },
        frame: S,
        frameset: S,
        h1: S, h2: S, h3: S, h4: S, h5: S, h6: S,
        head: {
            children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
        },
        header: S,
        hgroup: S,
        hr: S,
        html: {
            attrs: { manifest: null },
            children: ["head", "body"]
        },
        i: S,
        iframe: {
            attrs: {
                src: null, srcdoc: null, name: null, width: null, height: null,
                sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
                seamless: ["seamless"]
            }
        },
        img: {
            attrs: {
                alt: null, src: null, ismap: null, usemap: null, width: null, height: null,
                crossorigin: ["anonymous", "use-credentials"]
            }
        },
        input: {
            attrs: {
                alt: null, dirname: null, form: null, formaction: null,
                height: null, list: null, max: null, maxlength: null, min: null,
                name: null, pattern: null, placeholder: null, size: null, src: null,
                step: null, value: null, width: null,
                accept: ["audio/*", "video/*", "image/*"],
                autocomplete: ["on", "off"],
                autofocus: ["autofocus"],
                checked: ["checked"],
                disabled: ["disabled"],
                formenctype: Encs,
                formmethod: Methods,
                formnovalidate: ["novalidate"],
                formtarget: Targets,
                multiple: ["multiple"],
                readonly: ["readonly"],
                required: ["required"],
                type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month",
                    "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio",
                    "file", "submit", "image", "reset", "button"]
            }
        },
        ins: { attrs: { cite: null, datetime: null } },
        kbd: S,
        keygen: {
            attrs: {
                challenge: null, form: null, name: null,
                autofocus: ["autofocus"],
                disabled: ["disabled"],
                keytype: ["RSA"]
            }
        },
        label: { attrs: { for: null, form: null } },
        legend: S,
        li: { attrs: { value: null } },
        link: {
            attrs: {
                href: null, type: null,
                hreflang: null,
                media: null,
                sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
            }
        },
        map: { attrs: { name: null } },
        mark: S,
        menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
        meta: {
            attrs: {
                content: null,
                charset: Charsets,
                name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
                "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
            }
        },
        meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
        nav: S,
        noframes: S,
        noscript: S,
        object: {
            attrs: {
                data: null, type: null, name: null, usemap: null, form: null, width: null, height: null,
                typemustmatch: ["typemustmatch"]
            }
        },
        ol: { attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] } },
        optgroup: { attrs: { disabled: ["disabled"], label: null } },
        option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
        output: { attrs: { for: null, form: null, name: null } },
        p: S,
        param: { attrs: { name: null, value: null } },
        pre: S,
        progress: { attrs: { value: null, max: null } },
        q: { attrs: { cite: null } },
        rp: S,
        rt: S,
        ruby: S,
        s: S,
        samp: S,
        script: {
            attrs: {
                type: ["text/javascript"],
                src: null,
                async: ["async"],
                defer: ["defer"],
                charset: Charsets
            }
        },
        section: S,
        select: {
            attrs: {
                form: null, name: null, size: null,
                autofocus: ["autofocus"],
                disabled: ["disabled"],
                multiple: ["multiple"]
            }
        },
        small: S,
        source: { attrs: { src: null, type: null, media: null } },
        span: S,
        strike: S,
        strong: S,
        style: {
            attrs: {
                type: ["text/css"],
                media: null,
                scoped: null
            }
        },
        sub: S,
        summary: S,
        sup: S,
        table: S,
        tbody: S,
        td: { attrs: { colspan: null, rowspan: null, headers: null } },
        textarea: {
            attrs: {
                dirname: null, form: null, maxlength: null, name: null, placeholder: null,
                rows: null, cols: null,
                autofocus: ["autofocus"],
                disabled: ["disabled"],
                readonly: ["readonly"],
                required: ["required"],
                wrap: ["soft", "hard"]
            }
        },
        tfoot: S,
        th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
        thead: S,
        time: { attrs: { datetime: null } },
        title: S,
        tr: S,
        track: {
            attrs: {
                src: null, label: null, default: null,
                kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
                srclang: null
            }
        },
        tt: S,
        u: S,
        ul: S,
        var: S,
        video: {
            attrs: {
                src: null, poster: null, width: null, height: null,
                crossorigin: ["anonymous", "use-credentials"],
                preload: ["auto", "metadata", "none"],
                autoplay: ["autoplay"],
                mediagroup: ["movie"],
                muted: ["muted"],
                controls: ["controls"]
            }
        },
        wbr: S
    };
    var GlobalAttrs = {
        accesskey: null,
        class: null,
        contenteditable: Bool,
        contextmenu: null,
        dir: ["ltr", "rtl", "auto"],
        draggable: ["true", "false", "auto"],
        dropzone: ["copy", "move", "link", "string:", "file:"],
        hidden: ["hidden"],
        id: null,
        inert: ["inert"],
        itemid: null,
        itemprop: null,
        itemref: null,
        itemscope: ["itemscope"],
        itemtype: null,
        lang: ["en", "es"],
        spellcheck: Bool,
        autocorrect: Bool,
        autocapitalize: Bool,
        style: null,
        tabindex: null,
        title: null,
        translate: ["yes", "no"],
        onclick: null,
        rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
        role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
        "aria-activedescendant": null,
        "aria-atomic": Bool,
        "aria-autocomplete": ["inline", "list", "both", "none"],
        "aria-busy": Bool,
        "aria-checked": ["true", "false", "mixed", "undefined"],
        "aria-controls": null,
        "aria-describedby": null,
        "aria-disabled": Bool,
        "aria-dropeffect": null,
        "aria-expanded": ["true", "false", "undefined"],
        "aria-flowto": null,
        "aria-grabbed": ["true", "false", "undefined"],
        "aria-haspopup": Bool,
        "aria-hidden": Bool,
        "aria-invalid": ["true", "false", "grammar", "spelling"],
        "aria-label": null,
        "aria-labelledby": null,
        "aria-level": null,
        "aria-live": ["off", "polite", "assertive"],
        "aria-multiline": Bool,
        "aria-multiselectable": Bool,
        "aria-owns": null,
        "aria-posinset": null,
        "aria-pressed": ["true", "false", "mixed", "undefined"],
        "aria-readonly": Bool,
        "aria-relevant": null,
        "aria-required": Bool,
        "aria-selected": ["true", "false", "undefined"],
        "aria-setsize": null,
        "aria-sort": ["ascending", "descending", "none", "other"],
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null,
        "aria-valuetext": null
    };
    var AllTags = Object.keys(Tags), GlobalAttrNames = Object.keys(GlobalAttrs);
    function elementName(doc, tree) {
        var tag = tree.firstChild;
        if (!tag || tag.name != "OpenTag")
            { return ""; }
        var name = tag.iterate({ enter: function (type, from, to) {
                return type.name == "TagName" ? doc.sliceString(from, to) : undefined;
            } });
        return name || "";
    }
    function findParentElement(tree, skip) {
        if ( skip === void 0 ) skip = false;

        for (var cur = tree.parent; cur; cur = cur.parent)
            { if (cur.name == "Element") {
                if (skip)
                    { skip = false; }
                else
                    { return cur; }
            } }
        return null;
    }
    function allowedChildren(doc, tree) {
        var parent = findParentElement(tree, true);
        var parentInfo = parent ? Tags[elementName(doc, parent)] : null;
        return (parentInfo === null || parentInfo === void 0 ? void 0 : parentInfo.children) || AllTags;
    }
    function openTags(doc, tree) {
        var open = [];
        for (var parent = tree; parent = findParentElement(parent);) {
            var tagName = elementName(doc, parent);
            if (tagName && open.indexOf(tagName) < 0)
                { open.push(tagName); }
        }
        return open;
    }
    var identifier$1 = /^[:\-\.\w\u00b7-\uffff]+$/;
    function completeTag(state, tree, from, to, context) {
        var text = state.doc.sliceString(from, to).toLowerCase();
        var options = [];
        for (var i = 0, list = allowedChildren(state.doc, tree); i < list.length; i += 1)
            {
            var tagName = list[i];

            if (context.filter(tagName, text, true))
                { options.push({ label: tagName });
        } }
        return { from: from, to: to, options: options, filterDownOn: identifier$1 };
    }
    function completeCloseTag(state, tree, from, to, context) {
        var options = [], text = state.sliceDoc(from, to).toLowerCase();
        var end = /\s*>/.test(state.sliceDoc(to, to + 5)) ? "" : ">";
        for (var i = 0, list = openTags(state.doc, tree); i < list.length; i += 1)
            {
            var open = list[i];

            if (context.filter(open, text, true))
                { options.push({ label: open, apply: open + end });
        } }
        return { from: from, to: to, options: options, filterDownOn: identifier$1 };
    }
    function completeStartTag(state, tree, pos) {
        var options = [];
        for (var i = 0, list = allowedChildren(state.doc, tree); i < list.length; i += 1)
            {
            var tagName = list[i];

            options.push({ label: "<" + tagName });
        }
        for (var i$1 = 0, list$1 = openTags(state.doc, tree); i$1 < list$1.length; i$1 += 1)
            {
            var open = list$1[i$1];

            options.push({ label: "</" + open + ">" });
        }
        return { from: pos, to: pos, options: options, filterDownOn: identifier$1 };
    }
    function completeAttrName(state, tree, from, to, context) {
        var options = [];
        var elt = findParentElement(tree), info = elt ? Tags[elementName(state.doc, elt)] : null;
        var base = state.sliceDoc(from, to).toLowerCase();
        for (var i = 0, list = (info && info.attrs ? Object.keys(info.attrs).concat(GlobalAttrNames) : GlobalAttrNames); i < list.length; i += 1) {
            var attrName = list[i];

            if (context.filter(attrName, base, true))
                { options.push({ label: attrName }); }
        }
        return { from: from, to: to, options: options, filterDownOn: identifier$1 };
    }
    function completeAttrValue(state, tree, from, to, context) {
        var _a;
        var attrName = (_a = tree.parent) === null || _a === void 0 ? void 0 : _a.iterate({
            enter: function enter(type, from, to) {
                return type.name == "AttributeName" ? state.sliceDoc(from, to) : undefined;
            },
            from: tree.start,
            to: tree.parent.start
        });
        var options = [];
        if (attrName) {
            var attrs = GlobalAttrs[attrName];
            if (!attrs) {
                var elt = findParentElement(tree), info = elt ? Tags[elementName(state.doc, elt)] : null;
                attrs = (info === null || info === void 0 ? void 0 : info.attrs) && info.attrs[attrName];
            }
            if (attrs) {
                var base = state.sliceDoc(from, to).toLowerCase(), quoteStart = '"', quoteEnd = '"';
                if (/^['"]/.test(base)) {
                    quoteStart = "";
                    quoteEnd = state.sliceDoc(to, to + 1) == base[0] ? "" : base[0];
                    base = base.slice(1);
                    from++;
                }
                for (var i = 0, list = attrs; i < list.length; i += 1) {
                    var value = list[i];

                    if (context.filter(value, base, true))
                        { options.push({ label: value, apply: quoteStart + value + quoteEnd }); }
                }
            }
        }
        return { from: from, to: to, options: options };
    }
    function completeHTML(context) {
        var state = context.state;
        var pos = context.pos;
        var tree = state.tree.resolve(pos, -1);
        if (tree.name == "TagName" || tree.name == "MismatchedTagName") {
            return tree.parent && tree.parent.name == "CloseTag" ? completeCloseTag(state, tree, tree.start, pos, context)
                : completeTag(state, tree, tree.start, pos, context);
        }
        else if (tree.name == "StartTag") {
            return completeTag(state, tree, pos, pos, context);
        }
        else if (tree.name == "StartCloseTag") {
            return completeCloseTag(state, tree, pos, pos, context);
        }
        else if (context.explicit && (tree.name == "Element" || tree.name == "Text" || tree.name == "Document")) {
            return completeStartTag(state, tree, pos);
        }
        else if (context.explicit && (tree.name == "OpenTag" || tree.name == "SelfClosingTag") || tree.name == "AttributeName") {
            return completeAttrName(state, tree, tree.name == "AttributeName" ? tree.start : pos, pos, context);
        }
        else if (tree.name == "Is" || tree.name == "AttributeValue" || tree.name == "UnquotedAttributeValue") {
            return completeAttrValue(state, tree, tree.name == "Is" ? pos : tree.start, pos, context);
        }
        else {
            return null;
        }
    }

    /// A syntax provider based on the [Lezer HTML
    /// parser](https://github.com/lezer-parser/html), wired up with the
    /// JavaScript and CSS parsers to parse the content of `<script>` and
    /// `<style>` tags.
    var htmlSyntax = new LezerSyntax(configureHTML([
        { tag: "script",
            attrs: function attrs(attrs$1) {
                return !attrs$1.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(attrs$1.type);
            },
            parser: javascriptSyntax.parser },
        { tag: "style",
            attrs: function attrs(attrs$1) {
                return (!attrs$1.lang || attrs$1.lang == "css") && (!attrs$1.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(attrs$1.type));
            },
            parser: cssSyntax.parser }
    ]).withProps(indentNodeProp.add(function (type) {
        if (type.name == "Element")
            { return delimitedIndent({ closing: "</", align: false }); }
        if (type.name == "OpenTag" || type.name == "CloseTag" || type.name == "SelfClosingTag")
            { return continuedIndent(); }
        return undefined;
    }), foldNodeProp.add({
        Element: function Element(subtree) {
            var first = subtree.firstChild, last = subtree.lastChild;
            if (!first || first.name != "OpenTag")
                { return null; }
            return { from: first.end, to: last.name == "CloseTag" ? last.start : subtree.end };
        }
    }), styleTags({
        AttributeValue: "string",
        "Text RawText": "content",
        "StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag": "angleBracket",
        TagName: "typeName",
        MismatchedTagName: "typeName invalid",
        AttributeName: "propertyName",
        UnquotedAttributeValue: "string",
        Is: "operator definition",
        "EntityReference CharacterReference": "character",
        Comment: "blockComment",
        ProcessingInst: "operator meta",
        DoctypeDecl: "labelName meta"
    })), {
        languageData: {
            commentTokens: { block: { open: "<!--", close: "-->" } },
        }
    });
    /// HTML tag completion. Opens and closes tags and attributes in a
    /// context-aware way.
    var htmlCompletion = htmlSyntax.languageData.of({ autocomplete: completeHTML });
    /// An extension that installs HTML-related functionality
    /// ([`htmlCompletion`](#lang-html.htmlCompletion) and
    /// [`javascriptSupport`](#lang-javascript.javascriptSupport)).
    function htmlSupport() { return [htmlCompletion, javascriptSupport()]; }
    /// Returns an extension that installs the HTML
    /// [syntax](#lang-html.htmlSyntax) and
    /// [support](#lang-html.htmlSupport).
    function html() { return [htmlSyntax, htmlSupport()]; }

    var _m27 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        html: html,
        htmlCompletion: htmlCompletion,
        htmlSupport: htmlSupport,
        htmlSyntax: htmlSyntax
    });

    var chalky = "#e5c07b", coral = "#e06c75", dark = "#5c6370", fountainBlue = "#56b6c2", green = "#98c379", invalid = "#ffffff", lightDark = "#7f848e", lightWhite = "#abb2bf", malibu = "#61afef", purple = "#c678dd", whiskey = "#d19a66", background = "#282c34", selection = "#405948", cursor = "#528bff";
    var oneDarkTheme = EditorView.theme({
        wrap: {
            color: lightWhite,
            backgroundColor: background,
            "& ::selection": { backgroundColor: selection },
            caretColor: cursor
        },
        secondaryCursor: { borderLeft: ("1.4px solid " + cursor) },
        secondarySelection: { backgroundColor: selection },
        panels: { backgroundColor: background, color: lightWhite },
        "panels.top": { borderBottom: "2px solid black" },
        "panels.bottom": { borderTop: "2px solid black" },
        searchMatch: {
            backgroundColor: "#42557b",
            border: "1px solid #457dff"
        },
        "searchMatch.selected": {
            backgroundColor: "#6199ff2f"
        },
        activeLine: { backgroundColor: "#2c313c" },
        selectionMatch: { backgroundColor: "#354139" },
        "matchingBracket, nonmatchingBracket": {
            backgroundColor: "#515a6b",
            border: "1px solid #515a6b"
        },
        gutters: {
            backgroundColor: background,
            color: "#495162",
            border: "none"
        },
        "gutterElement.lineNumber": { color: "inherit" },
        foldPlaceholder: {
            backgroundColor: "none",
            border: "none",
            color: "#ddd"
        },
        tooltip: {
            border: "1px solid #181a1f",
            backgroundColor: "#606862"
        },
        "tooltip.autocomplete": {
            "& > li[aria-selected]": { backgroundColor: background }
        }
    }, { dark: true });
    var oneDarkHighlighter = highlighter({
        invalid: { color: invalid },
        comment: { color: lightDark },
        keyword: { color: purple },
        "name, deleted": { color: coral },
        "operator, operatorKeyword, regexp": { color: fountainBlue },
        "string, inserted": { color: green },
        propertyName: { color: malibu },
        "color, name constant, name standard": { color: whiskey },
        "name definition": { color: lightWhite },
        "typeName, className, number, changed": { color: chalky },
        "meta": { color: dark },
        strong: { fontWeight: "bold" },
        emphasis: { fontStyle: "italic" },
        link: { color: dark, textDecoration: "underline" },
        heading: { fontWeight: "bold", color: coral }
    });
    /// Extension to enable the One Dark theme.
    var oneDark = [oneDarkTheme, oneDarkHighlighter];

    var _m28 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        oneDark: oneDark
    });

    window.CM = {
      "@codemirror/next/state": _m0,
      "@codemirror/next/text": _m1,
      "@codemirror/next/view": _m2,
      "@codemirror/next/commands": _m3,
      "@codemirror/next/history": _m4,
      "@codemirror/next/collab": _m5,
      "@codemirror/next/gutter": _m6,
      "@codemirror/next/rangeset": _m7,
      "@codemirror/next/syntax": _m8,
      "@codemirror/next/fold": _m9,
      "@codemirror/next/matchbrackets": _m10,
      "@codemirror/next/closebrackets": _m11,
      "@codemirror/next/panel": _m12,
      "@codemirror/next/tooltip": _m13,
      "@codemirror/next/search": _m14,
      "@codemirror/next/goto-line": _m15,
      "@codemirror/next/lint": _m16,
      "@codemirror/next/highlight": _m17,
      "@codemirror/next/stream-syntax": _m18,
      "@codemirror/next/autocomplete": _m19,
      "@codemirror/next/comment": _m20,
      "@codemirror/next/rectangular-selection": _m21,
      "@codemirror/next/highlight-selection": _m22,
      "@codemirror/next/basic-setup": _m23,
      "@codemirror/next/lang-javascript": _m24,
      "@codemirror/next/lang-python": _m25,
      "@codemirror/next/lang-css": _m26,
      "@codemirror/next/lang-html": _m27,
      "@codemirror/next/theme-one-dark": _m28,
      "lezer": _m29,
      "lezer-tree": _m30
    };

}());
