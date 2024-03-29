webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* \nDéclaration des variables\n*/\n    :root{\n        --color-orange-darker: #ab1b36;\n        --color-orange-dark: #c12c48;\n        --color-orange-middle: #c93341;\n        --color-orange-light: #d24b36;\n        --color-orange-alpha: rgba(197, 47, 68, .2);;\n    }\n    /**/\n    /* \nReset\n*/\n    *{\n        margin: 0;\n        padding: 0;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    :focus{\n        outline: none;\n    }\n    html{\n        font-size: 62.5%;\n    }\n    body{\n        font-family: sans-serif;\n        font-size: 1.5rem;\n    }\n    main{\n        max-width: 90rem;\n        margin: auto;\n        padding: 8rem 2rem 1.5rem 2rem;\n    }\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    button{\n        font-size: 1.5rem;\n        font-weight: bold;\n        color: var(--color-orange-dark);\n        padding: 1rem;\n        background-color: white;\n        border: none;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n    }\n    button:hover, button.active, #loginForm button[type=\"submit\"]:hover, #addFeedForm button[type=\"submit\"]:hover{\n        color: var(--color-orange-dark);\n        background-color: black;\n    }\n    button.active{\n        color: white;\n    }\n    ul{\n        list-style: none;\n    }\n    fieldset {\n        border: none;\n    }\n    /**/\n    /* \nStyle Loader\n*/\n    #loader{\n        position: fixed;\n        z-index: 1000;\n        top: 0;\n        left: 0;\n        width: 0vw;\n        height: 100vh;\n        background-color: white;\n        -webkit-transition: all .15s;\n        transition: all .15s;\n    }\n    #loader.open{\n        width: 100vw;\n    }\n    #loader.open.right{\n        width: 0vw;\n        left: 100%;\n    }\n    /**/\n    /* \nStyle Formulaire\n*/\n    input, label {\n        display: block;\n        width: 100%;\n        border: 0;\n    }\n    label{\n        font-size: 1.1rem;\n        text-transform: uppercase;\n        font-weight: bold;\n        padding-bottom: .5rem;\n    }\n    label:not(:first-of-type){\n        margin-top: 2rem;\n    }\n    input {\n        font-size: 2rem;\n        padding: .5rem;\n    }\n    #loginForm {\n        background-color: rgba(255, 255, 255, .2);\n        padding: 2rem;\n        margin: 2rem auto;\n\n        -webkit-box-shadow: 0 0 2rem var(--color-orange-darker);\n        box-shadow: 0 0 2rem var(--color-orange-darker);\n    }\n    #loginForm button[type=\"submit\"], #addFeedForm button[type=\"submit\"]{\n        margin-top: 2rem;\n        background: #cf403b;\n        color: white;\n        margin-bottom: 1rem;\n    }\n    #loginForm button[type=\"submit\"]{\n        -webkit-box-shadow: 0 0 2rem var(--color-orange-dark);\n        box-shadow: 0 0 2rem var(--color-orange-dark);\n    }\n    #addFeedForm button[type=\"submit\"]{\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n    #loginForm label em{\n        position: relative;\n    }\n    #loginForm label span{\n        width: 0;\n        height: 1rem;\n        overflow: hidden;\n        position: absolute;\n        left: .7rem;\n        top: 0;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n    }\n    #loginForm label span.open{\n        width: 20rem;\n    }\n    #loginForm + p {\n        line-height: 1;\n        margin-bottom: 1rem;\n    }\n    #editUserForm{\n        margin-top: 3rem;\n    }\n    #editUserForm input{\n        padding: 0 0 .5rem 0;\n        border-bottom: .1rem solid var(--color-orange-light);\n    }\n    #editUserForm label{\n        color: var(--color-orange-dark);\n    }\n    #editUserForm input:disabled{\n        color: grey;\n        border-bottom: .1rem solid grey;\n    }\n    #editUserForm label[for=\"password\"]{\n        color: grey;\n    }\n    #editUserForm [type=\"submit\"]{\n        margin-top: 2rem;\n        border: .1rem solid var(--color-orange-light);\n    }\n    /**/\n    /* \nStyler Add Feed\n*/\n    #addFeedForm {\n        background-color: var(--color-orange-alpha);\n        padding: 2rem;\n\n        display: -ms-flex;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    #addFeedForm textarea {\n        width: 740px;\n        border: none;\n        padding: .5rem 0 0 .5rem;\n        font-size: 1.5rem;\n        font-weight: 100;\n        margin: 0px;\n        min-height: 2rem;\n    }\n    /**/\n    /* \nStyle Header\n*/\n    header{\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        z-index: 100;\n\n        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c12c48+0,c93341+44,d24b36+100 */\n        background: var(--color-orange-dark); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-orange-dark)),color-stop(44%, var(--color-orange-middle)),to(var(--color-orange-light)));\n        background: linear-gradient(to bottom, var(--color-orange-dark) 0%,var(--color-orange-middle) 44%,var(--color-orange-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    }\n    header.top{\n        z-index: 2000;\n    }\n    header section, header section nav ul{\n        padding: 2rem;\n        max-width: 90rem;\n        margin: auto;\n\n        display: -ms-flex;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n\n        -moz-align-items: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n    h1 {\n        font-size: 6rem;\n        color: white;\n        display: inline;\n        text-shadow: 0 0 2rem var(--color-orange-darker);\n    }\n    h1 span {\n        display: block;\n        font-size: 1.7rem;\n        font-weight: 100;\n        opacity: .5;\n        padding-left: .3rem;\n    }\n    header section h1{\n        font-size: 2rem;\n        width: 10%;\n    }\n    header section nav{\n        width: 90%;\n    }\n    header section nav ul{\n        padding: 0;\n\n        -moz-justify-content: flex-end;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n    }\n    header section nav li{\n        padding-left: 1rem;\n    }\n    #userHeader {\n        font-size: 1.2rem;\n        text-transform: uppercase;\n        color: var(--color-orange-light);\n        border-bottom: .1rem dotted var(--color-orange-light);\n        padding-bottom: 1rem;\n        margin-bottom: 2rem;\n    }\n    #userHeader strong{\n        color: black;\n    }\n    nav button {\n        padding: .7rem;\n        font-size: 1.2rem;\n    }\n    /**/\n    /* \nStyle Homepage\n*/\n    app-homepage {\n        display: block;\n        width: 100vw;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1;\n\n        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c12c48+0,c93341+44,d24b36+100 */\n        background: var(--color-orange-dark); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-orange-dark)),color-stop(44%, var(--color-orange-middle)),to(var(--color-orange-light)));\n        background: linear-gradient(to bottom, var(--color-orange-dark) 0%,var(--color-orange-middle) 44%,var(--color-orange-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    }\n    #textIntro {\n        color: white;\n        font-size: 1.7rem;\n        margin-bottom: 1rem;\n    }\n    #loginSection{\n        max-width: 30rem;\n        margin: 10rem auto;\n    }\n    #loginSection button {\n        width: 100%;\n        margin-bottom: .5rem;\n        text-transform: uppercase;\n        font-size: 1.4rem;\n\n        -webkit-box-shadow: 0 0 2rem var(--color-orange-darker);\n\n                box-shadow: 0 0 2rem var(--color-orange-darker);\n    }\n    #loginSection em {\n        font-size: 1rem;\n        font-style: normal;\n        text-transform: uppercase;\n        color: white;\n        opacity: .5;\n    }\n    /**/\n    /* \nStyle Feed List\n*/\n    .singleFeed {\n        margin: 2rem auto 4rem auto;\n        \n        display: -ms-flex;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .singleFeed .avatar{\n        width: 5%;\n    }\n    .singleFeed .contentFeed{\n        width: 95%;\n        padding-left: 2rem;\n    }\n    .singleFeed .userName {\n        font-weight: 600;\n        text-transform: uppercase;\n        font-size: 1.3rem;\n        border-bottom: .1rem dotted var(--color-orange-alpha);\n        padding-bottom: .5rem;\n        margin-bottom: 1rem;\n    }\n    .singleFeed .userName span {\n        text-transform: none;\n        font-weight: 100;\n    }\n    .singleFeed .content {\n        font-size: 2rem;\n    }\n    .userName::after{\n        content: '';\n        display: block;\n        clear: both;\n    }\n    .userName button {\n        float: right;\n        font-size: 1rem;\n        padding: .5rem;\n        border: .1rem solid black;\n    }\n    .userName b {\n        padding-top: .6rem;\n        display: inline-block;\n    }\n    /**/", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map