var Backlog = (function(exports) {

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion

//#region src/error.ts
	var error_exports = /* @__PURE__ */ __exportAll({
		BacklogApiError: () => BacklogApiError,
		BacklogAuthError: () => BacklogAuthError,
		BacklogError: () => BacklogError,
		UnexpectedError: () => UnexpectedError
	});
	var BacklogError = class extends Error {
		_name;
		_url;
		_status;
		_body;
		_response;
		constructor(name, response, body) {
			super(response.statusText);
			this._name = name;
			this._url = response.url;
			this._status = response.status;
			this._body = body;
			this._response = response;
		}
		get name() {
			return this._name;
		}
		get url() {
			return this._url;
		}
		get status() {
			return this._status;
		}
		get body() {
			return this._body;
		}
		get response() {
			return this._response;
		}
	};
	var BacklogApiError = class extends BacklogError {
		constructor(response, body) {
			super("BacklogApiError", response, body);
		}
	};
	var BacklogAuthError = class extends BacklogError {
		constructor(response, body) {
			super("BacklogAuthError", response, body);
		}
	};
	var UnexpectedError = class extends BacklogError {
		constructor(response) {
			super("UnexpectedError", response);
		}
	};

//#endregion
//#region node_modules/es-errors/type.js
	var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./type')} */
		module.exports = TypeError;
	}));

//#endregion
//#region (ignored) node_modules/object-inspect/util.inspect.js
	var require_util_inspect = /* @__PURE__ */ __commonJSMin((() => {}));

//#endregion
//#region node_modules/object-inspect/index.js
	var require_object_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasMap = typeof Map === "function" && Map.prototype;
		var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
		var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
		var mapForEach = hasMap && Map.prototype.forEach;
		var hasSet = typeof Set === "function" && Set.prototype;
		var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
		var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
		var setForEach = hasSet && Set.prototype.forEach;
		var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
		var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
		var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
		var booleanValueOf = Boolean.prototype.valueOf;
		var objectToString = Object.prototype.toString;
		var functionToString = Function.prototype.toString;
		var $match = String.prototype.match;
		var $slice = String.prototype.slice;
		var $replace = String.prototype.replace;
		var $toUpperCase = String.prototype.toUpperCase;
		var $toLowerCase = String.prototype.toLowerCase;
		var $test = RegExp.prototype.test;
		var $concat = Array.prototype.concat;
		var $join = Array.prototype.join;
		var $arrSlice = Array.prototype.slice;
		var $floor = Math.floor;
		var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
		var gOPS = Object.getOwnPropertySymbols;
		var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
		var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
		var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
			return O.__proto__;
		} : null);
		function addNumericSeparator(num, str) {
			if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
			var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
			if (typeof num === "number") {
				var int = num < 0 ? -$floor(-num) : $floor(num);
				if (int !== num) {
					var intStr = String(int);
					var dec = $slice.call(str, intStr.length + 1);
					return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
				}
			}
			return $replace.call(str, sepRegex, "$&_");
		}
		var utilInspect = require_util_inspect();
		var inspectCustom = utilInspect.custom;
		var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
		var quotes = {
			__proto__: null,
			"double": "\"",
			single: "'"
		};
		var quoteREs = {
			__proto__: null,
			"double": /(["\\])/g,
			single: /(['\\])/g
		};
		module.exports = function inspect_(obj, options, depth, seen) {
			var opts = options || {};
			if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
			if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
			var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
			if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
			if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
			if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
			var numericSeparator = opts.numericSeparator;
			if (typeof obj === "undefined") return "undefined";
			if (obj === null) return "null";
			if (typeof obj === "boolean") return obj ? "true" : "false";
			if (typeof obj === "string") return inspectString(obj, opts);
			if (typeof obj === "number") {
				if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
				var str = String(obj);
				return numericSeparator ? addNumericSeparator(obj, str) : str;
			}
			if (typeof obj === "bigint") {
				var bigIntStr = String(obj) + "n";
				return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
			}
			var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
			if (typeof depth === "undefined") depth = 0;
			if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
			var indent = getIndent(opts, depth);
			if (typeof seen === "undefined") seen = [];
			else if (indexOf(seen, obj) >= 0) return "[Circular]";
			function inspect(value, from, noIndent) {
				if (from) {
					seen = $arrSlice.call(seen);
					seen.push(from);
				}
				if (noIndent) {
					var newOpts = { depth: opts.depth };
					if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
					return inspect_(value, newOpts, depth + 1, seen);
				}
				return inspect_(value, opts, depth + 1, seen);
			}
			if (typeof obj === "function" && !isRegExp(obj)) {
				var name = nameOf(obj);
				var keys = arrObjKeys(obj, inspect);
				return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
			}
			if (isSymbol(obj)) {
				var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
				return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
			}
			if (isElement(obj)) {
				var s = "<" + $toLowerCase.call(String(obj.nodeName));
				var attrs = obj.attributes || [];
				for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
				s += ">";
				if (obj.childNodes && obj.childNodes.length) s += "...";
				s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
				return s;
			}
			if (isArray(obj)) {
				if (obj.length === 0) return "[]";
				var xs = arrObjKeys(obj, inspect);
				if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
				return "[ " + $join.call(xs, ", ") + " ]";
			}
			if (isError(obj)) {
				var parts = arrObjKeys(obj, inspect);
				if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
				if (parts.length === 0) return "[" + String(obj) + "]";
				return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
			}
			if (typeof obj === "object" && customInspect) {
				if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
				else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
			}
			if (isMap(obj)) {
				var mapParts = [];
				if (mapForEach) mapForEach.call(obj, function(value, key) {
					mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
				});
				return collectionOf("Map", mapSize.call(obj), mapParts, indent);
			}
			if (isSet(obj)) {
				var setParts = [];
				if (setForEach) setForEach.call(obj, function(value) {
					setParts.push(inspect(value, obj));
				});
				return collectionOf("Set", setSize.call(obj), setParts, indent);
			}
			if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
			if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
			if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
			if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
			if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
			if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
			if (isString(obj)) return markBoxed(inspect(String(obj)));
			if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
			if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
			if (!isDate(obj) && !isRegExp(obj)) {
				var ys = arrObjKeys(obj, inspect);
				var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
				var protoTag = obj instanceof Object ? "" : "null prototype";
				var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
				var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
				if (ys.length === 0) return tag + "{}";
				if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
				return tag + "{ " + $join.call(ys, ", ") + " }";
			}
			return String(obj);
		};
		function wrapQuotes(s, defaultStyle, opts) {
			var quoteChar = quotes[opts.quoteStyle || defaultStyle];
			return quoteChar + s + quoteChar;
		}
		function quote(s) {
			return $replace.call(String(s), /"/g, "&quot;");
		}
		function canTrustToString(obj) {
			return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
		}
		function isArray(obj) {
			return toStr(obj) === "[object Array]" && canTrustToString(obj);
		}
		function isDate(obj) {
			return toStr(obj) === "[object Date]" && canTrustToString(obj);
		}
		function isRegExp(obj) {
			return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
		}
		function isError(obj) {
			return toStr(obj) === "[object Error]" && canTrustToString(obj);
		}
		function isString(obj) {
			return toStr(obj) === "[object String]" && canTrustToString(obj);
		}
		function isNumber(obj) {
			return toStr(obj) === "[object Number]" && canTrustToString(obj);
		}
		function isBoolean(obj) {
			return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
		}
		function isSymbol(obj) {
			if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
			if (typeof obj === "symbol") return true;
			if (!obj || typeof obj !== "object" || !symToString) return false;
			try {
				symToString.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		function isBigInt(obj) {
			if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
			try {
				bigIntValueOf.call(obj);
				return true;
			} catch (e) {}
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty || function(key) {
			return key in this;
		};
		function has(obj, key) {
			return hasOwn.call(obj, key);
		}
		function toStr(obj) {
			return objectToString.call(obj);
		}
		function nameOf(f) {
			if (f.name) return f.name;
			var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
			if (m) return m[1];
			return null;
		}
		function indexOf(xs, x) {
			if (xs.indexOf) return xs.indexOf(x);
			for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
			return -1;
		}
		function isMap(x) {
			if (!mapSize || !x || typeof x !== "object") return false;
			try {
				mapSize.call(x);
				try {
					setSize.call(x);
				} catch (s) {
					return true;
				}
				return x instanceof Map;
			} catch (e) {}
			return false;
		}
		function isWeakMap(x) {
			if (!weakMapHas || !x || typeof x !== "object") return false;
			try {
				weakMapHas.call(x, weakMapHas);
				try {
					weakSetHas.call(x, weakSetHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakMap;
			} catch (e) {}
			return false;
		}
		function isWeakRef(x) {
			if (!weakRefDeref || !x || typeof x !== "object") return false;
			try {
				weakRefDeref.call(x);
				return true;
			} catch (e) {}
			return false;
		}
		function isSet(x) {
			if (!setSize || !x || typeof x !== "object") return false;
			try {
				setSize.call(x);
				try {
					mapSize.call(x);
				} catch (m) {
					return true;
				}
				return x instanceof Set;
			} catch (e) {}
			return false;
		}
		function isWeakSet(x) {
			if (!weakSetHas || !x || typeof x !== "object") return false;
			try {
				weakSetHas.call(x, weakSetHas);
				try {
					weakMapHas.call(x, weakMapHas);
				} catch (s) {
					return true;
				}
				return x instanceof WeakSet;
			} catch (e) {}
			return false;
		}
		function isElement(x) {
			if (!x || typeof x !== "object") return false;
			if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
			return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
		}
		function inspectString(str, opts) {
			if (str.length > opts.maxStringLength) {
				var remaining = str.length - opts.maxStringLength;
				var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
				return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
			}
			var quoteRE = quoteREs[opts.quoteStyle || "single"];
			quoteRE.lastIndex = 0;
			return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
		}
		function lowbyte(c) {
			var n = c.charCodeAt(0);
			var x = {
				8: "b",
				9: "t",
				10: "n",
				12: "f",
				13: "r"
			}[n];
			if (x) return "\\" + x;
			return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
		}
		function markBoxed(str) {
			return "Object(" + str + ")";
		}
		function weakCollectionOf(type) {
			return type + " { ? }";
		}
		function collectionOf(type, size, entries, indent) {
			var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
			return type + " (" + size + ") {" + joinedEntries + "}";
		}
		function singleLineValues(xs) {
			for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
			return true;
		}
		function getIndent(opts, depth) {
			var baseIndent;
			if (opts.indent === "	") baseIndent = "	";
			else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
			else return null;
			return {
				base: baseIndent,
				prev: $join.call(Array(depth + 1), baseIndent)
			};
		}
		function indentedJoin(xs, indent) {
			if (xs.length === 0) return "";
			var lineJoiner = "\n" + indent.prev + indent.base;
			return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
		}
		function arrObjKeys(obj, inspect) {
			var isArr = isArray(obj);
			var xs = [];
			if (isArr) {
				xs.length = obj.length;
				for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
			}
			var syms = typeof gOPS === "function" ? gOPS(obj) : [];
			var symMap;
			if (hasShammedSymbols) {
				symMap = {};
				for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
			}
			for (var key in obj) {
				if (!has(obj, key)) continue;
				if (isArr && String(Number(key)) === key && key < obj.length) continue;
				if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
				else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
				else xs.push(key + ": " + inspect(obj[key], obj));
			}
			if (typeof gOPS === "function") {
				for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
			}
			return xs;
		}
	}));

//#endregion
//#region node_modules/side-channel-list/index.js
	var require_side_channel_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var inspect = require_object_inspect();
		var $TypeError = require_type();
		/** @type {import('./list.d.ts').listGetNode} */
		var listGetNode = function(list, key, isDelete) {
			/** @type {typeof list | NonNullable<(typeof list)['next']>} */
			var prev = list;
			/** @type {(typeof list)['next']} */
			var curr;
			for (; (curr = prev.next) != null; prev = curr) if (curr.key === key) {
				prev.next = curr.next;
				if (!isDelete) {
					curr.next = list.next;
					list.next = curr;
				}
				return curr;
			}
		};
		/** @type {import('./list.d.ts').listGet} */
		var listGet = function(objects, key) {
			if (!objects) return;
			var node = listGetNode(objects, key);
			return node && node.value;
		};
		/** @type {import('./list.d.ts').listSet} */
		var listSet = function(objects, key, value) {
			var node = listGetNode(objects, key);
			if (node) node.value = value;
			else objects.next = {
				key,
				next: objects.next,
				value
			};
		};
		/** @type {import('./list.d.ts').listHas} */
		var listHas = function(objects, key) {
			if (!objects) return false;
			return !!listGetNode(objects, key);
		};
		/** @type {import('./list.d.ts').listDelete} */
		var listDelete = function(objects, key) {
			if (objects) return listGetNode(objects, key, true);
		};
		/** @type {import('.')} */
		module.exports = function getSideChannelList() {
			/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					var root = $o && $o.next;
					var deletedNode = listDelete($o, key);
					if (deletedNode && root && root === deletedNode) $o = void 0;
					return !!deletedNode;
				},
				get: function(key) {
					return listGet($o, key);
				},
				has: function(key) {
					return listHas($o, key);
				},
				set: function(key, value) {
					if (!$o) $o = { next: void 0 };
					listSet($o, key, value);
				}
			};
			return channel;
		};
	}));

//#endregion
//#region node_modules/es-object-atoms/index.js
	var require_es_object_atoms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		module.exports = Object;
	}));

//#endregion
//#region node_modules/es-errors/index.js
	var require_es_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		module.exports = Error;
	}));

//#endregion
//#region node_modules/es-errors/eval.js
	var require_eval = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./eval')} */
		module.exports = EvalError;
	}));

//#endregion
//#region node_modules/es-errors/range.js
	var require_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./range')} */
		module.exports = RangeError;
	}));

//#endregion
//#region node_modules/es-errors/ref.js
	var require_ref = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./ref')} */
		module.exports = ReferenceError;
	}));

//#endregion
//#region node_modules/es-errors/syntax.js
	var require_syntax = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./syntax')} */
		module.exports = SyntaxError;
	}));

//#endregion
//#region node_modules/es-errors/uri.js
	var require_uri = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./uri')} */
		module.exports = URIError;
	}));

//#endregion
//#region node_modules/math-intrinsics/abs.js
	var require_abs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./abs')} */
		module.exports = Math.abs;
	}));

//#endregion
//#region node_modules/math-intrinsics/floor.js
	var require_floor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./floor')} */
		module.exports = Math.floor;
	}));

//#endregion
//#region node_modules/math-intrinsics/max.js
	var require_max = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./max')} */
		module.exports = Math.max;
	}));

//#endregion
//#region node_modules/math-intrinsics/min.js
	var require_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./min')} */
		module.exports = Math.min;
	}));

//#endregion
//#region node_modules/math-intrinsics/pow.js
	var require_pow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./pow')} */
		module.exports = Math.pow;
	}));

//#endregion
//#region node_modules/math-intrinsics/round.js
	var require_round = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./round')} */
		module.exports = Math.round;
	}));

//#endregion
//#region node_modules/math-intrinsics/isNaN.js
	var require_isNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./isNaN')} */
		module.exports = Number.isNaN || function isNaN(a) {
			return a !== a;
		};
	}));

//#endregion
//#region node_modules/math-intrinsics/sign.js
	var require_sign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $isNaN = require_isNaN();
		/** @type {import('./sign')} */
		module.exports = function sign(number) {
			if ($isNaN(number) || number === 0) return number;
			return number < 0 ? -1 : 1;
		};
	}));

//#endregion
//#region node_modules/gopd/gOPD.js
	var require_gOPD = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./gOPD')} */
		module.exports = Object.getOwnPropertyDescriptor;
	}));

//#endregion
//#region node_modules/gopd/index.js
	var require_gopd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		var $gOPD = require_gOPD();
		if ($gOPD) try {
			$gOPD([], "length");
		} catch (e) {
			$gOPD = null;
		}
		module.exports = $gOPD;
	}));

//#endregion
//#region node_modules/es-define-property/index.js
	var require_es_define_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('.')} */
		var $defineProperty = Object.defineProperty || false;
		if ($defineProperty) try {
			$defineProperty({}, "a", { value: 1 });
		} catch (e) {
			$defineProperty = false;
		}
		module.exports = $defineProperty;
	}));

//#endregion
//#region node_modules/has-symbols/shams.js
	var require_shams = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./shams')} */
		module.exports = function hasSymbols() {
			if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
			if (typeof Symbol.iterator === "symbol") return true;
			/** @type {{ [k in symbol]?: unknown }} */
			var obj = {};
			var sym = Symbol("test");
			var symObj = Object(sym);
			if (typeof sym === "string") return false;
			if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
			if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
			var symVal = 42;
			obj[sym] = symVal;
			for (var _ in obj) return false;
			if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
			if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
			var syms = Object.getOwnPropertySymbols(obj);
			if (syms.length !== 1 || syms[0] !== sym) return false;
			if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
			if (typeof Object.getOwnPropertyDescriptor === "function") {
				var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
				if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
			}
			return true;
		};
	}));

//#endregion
//#region node_modules/has-symbols/index.js
	var require_has_symbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var origSymbol = typeof Symbol !== "undefined" && Symbol;
		var hasSymbolSham = require_shams();
		/** @type {import('.')} */
		module.exports = function hasNativeSymbols() {
			if (typeof origSymbol !== "function") return false;
			if (typeof Symbol !== "function") return false;
			if (typeof origSymbol("foo") !== "symbol") return false;
			if (typeof Symbol("bar") !== "symbol") return false;
			return hasSymbolSham();
		};
	}));

//#endregion
//#region node_modules/get-proto/Reflect.getPrototypeOf.js
	var require_Reflect_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./Reflect.getPrototypeOf')} */
		module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
	}));

//#endregion
//#region node_modules/get-proto/Object.getPrototypeOf.js
	var require_Object_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $Object = require_es_object_atoms();
		/** @type {import('./Object.getPrototypeOf')} */
		module.exports = $Object.getPrototypeOf || null;
	}));

//#endregion
//#region node_modules/function-bind/implementation.js
	var require_implementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
		var toStr = Object.prototype.toString;
		var max = Math.max;
		var funcType = "[object Function]";
		var concatty = function concatty(a, b) {
			var arr = [];
			for (var i = 0; i < a.length; i += 1) arr[i] = a[i];
			for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
			return arr;
		};
		var slicy = function slicy(arrLike, offset) {
			var arr = [];
			for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) arr[j] = arrLike[i];
			return arr;
		};
		var joiny = function(arr, joiner) {
			var str = "";
			for (var i = 0; i < arr.length; i += 1) {
				str += arr[i];
				if (i + 1 < arr.length) str += joiner;
			}
			return str;
		};
		module.exports = function bind(that) {
			var target = this;
			if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
			var args = slicy(arguments, 1);
			var bound;
			var binder = function() {
				if (this instanceof bound) {
					var result = target.apply(this, concatty(args, arguments));
					if (Object(result) === result) return result;
					return this;
				}
				return target.apply(that, concatty(args, arguments));
			};
			var boundLength = max(0, target.length - args.length);
			var boundArgs = [];
			for (var i = 0; i < boundLength; i++) boundArgs[i] = "$" + i;
			bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
			if (target.prototype) {
				var Empty = function Empty() {};
				Empty.prototype = target.prototype;
				bound.prototype = new Empty();
				Empty.prototype = null;
			}
			return bound;
		};
	}));

//#endregion
//#region node_modules/function-bind/index.js
	var require_function_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var implementation = require_implementation();
		module.exports = Function.prototype.bind || implementation;
	}));

//#endregion
//#region node_modules/call-bind-apply-helpers/functionCall.js
	var require_functionCall = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./functionCall')} */
		module.exports = Function.prototype.call;
	}));

//#endregion
//#region node_modules/call-bind-apply-helpers/functionApply.js
	var require_functionApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./functionApply')} */
		module.exports = Function.prototype.apply;
	}));

//#endregion
//#region node_modules/call-bind-apply-helpers/reflectApply.js
	var require_reflectApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/** @type {import('./reflectApply')} */
		module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
	}));

//#endregion
//#region node_modules/call-bind-apply-helpers/actualApply.js
	var require_actualApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var bind = require_function_bind();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		var $reflectApply = require_reflectApply();
		/** @type {import('./actualApply')} */
		module.exports = $reflectApply || bind.call($call, $apply);
	}));

//#endregion
//#region node_modules/call-bind-apply-helpers/index.js
	var require_call_bind_apply_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var bind = require_function_bind();
		var $TypeError = require_type();
		var $call = require_functionCall();
		var $actualApply = require_actualApply();
		/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
		module.exports = function callBindBasic(args) {
			if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError("a function is required");
			return $actualApply(bind, $call, args);
		};
	}));

//#endregion
//#region node_modules/dunder-proto/get.js
	var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var callBind = require_call_bind_apply_helpers();
		var gOPD = require_gopd();
		var hasProtoAccessor;
		try {
			hasProtoAccessor = [].__proto__ === Array.prototype;
		} catch (e) {
			if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
		}
		var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__");
		var $Object = Object;
		var $getPrototypeOf = $Object.getPrototypeOf;
		/** @type {import('./get')} */
		module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
			return $getPrototypeOf(value == null ? value : $Object(value));
		} : false;
	}));

//#endregion
//#region node_modules/get-proto/index.js
	var require_get_proto = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var reflectGetProto = require_Reflect_getPrototypeOf();
		var originalGetProto = require_Object_getPrototypeOf();
		var getDunderProto = require_get();
		/** @type {import('.')} */
		module.exports = reflectGetProto ? function getProto(O) {
			return reflectGetProto(O);
		} : originalGetProto ? function getProto(O) {
			if (!O || typeof O !== "object" && typeof O !== "function") throw new TypeError("getProto: not an object");
			return originalGetProto(O);
		} : getDunderProto ? function getProto(O) {
			return getDunderProto(O);
		} : null;
	}));

//#endregion
//#region node_modules/hasown/index.js
	var require_hasown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = Function.prototype.call;
		var $hasOwn = Object.prototype.hasOwnProperty;
		var bind = require_function_bind();
		/** @type {import('.')} */
		module.exports = bind.call(call, $hasOwn);
	}));

//#endregion
//#region node_modules/get-intrinsic/index.js
	var require_get_intrinsic = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var undefined;
		var $Object = require_es_object_atoms();
		var $Error = require_es_errors();
		var $EvalError = require_eval();
		var $RangeError = require_range();
		var $ReferenceError = require_ref();
		var $SyntaxError = require_syntax();
		var $TypeError = require_type();
		var $URIError = require_uri();
		var abs = require_abs();
		var floor = require_floor();
		var max = require_max();
		var min = require_min();
		var pow = require_pow();
		var round = require_round();
		var sign = require_sign();
		var $Function = Function;
		var getEvalledConstructor = function(expressionSyntax) {
			try {
				return $Function("\"use strict\"; return (" + expressionSyntax + ").constructor;")();
			} catch (e) {}
		};
		var $gOPD = require_gopd();
		var $defineProperty = require_es_define_property();
		var throwTypeError = function() {
			throw new $TypeError();
		};
		var ThrowTypeError = $gOPD ? function() {
			try {
				arguments.callee;
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					return $gOPD(arguments, "callee").get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}() : throwTypeError;
		var hasSymbols = require_has_symbols()();
		var getProto = require_get_proto();
		var $ObjectGPO = require_Object_getPrototypeOf();
		var $ReflectGPO = require_Reflect_getPrototypeOf();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		var needsEval = {};
		var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
		var INTRINSICS = {
			__proto__: null,
			"%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
			"%Array%": Array,
			"%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
			"%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
			"%AsyncFromSyncIteratorPrototype%": undefined,
			"%AsyncFunction%": needsEval,
			"%AsyncGenerator%": needsEval,
			"%AsyncGeneratorFunction%": needsEval,
			"%AsyncIteratorPrototype%": needsEval,
			"%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
			"%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
			"%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
			"%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
			"%Boolean%": Boolean,
			"%DataView%": typeof DataView === "undefined" ? undefined : DataView,
			"%Date%": Date,
			"%decodeURI%": decodeURI,
			"%decodeURIComponent%": decodeURIComponent,
			"%encodeURI%": encodeURI,
			"%encodeURIComponent%": encodeURIComponent,
			"%Error%": $Error,
			"%eval%": eval,
			"%EvalError%": $EvalError,
			"%Float16Array%": typeof Float16Array === "undefined" ? undefined : Float16Array,
			"%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
			"%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
			"%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
			"%Function%": $Function,
			"%GeneratorFunction%": needsEval,
			"%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
			"%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
			"%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
			"%isFinite%": isFinite,
			"%isNaN%": isNaN,
			"%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
			"%JSON%": typeof JSON === "object" ? JSON : undefined,
			"%Map%": typeof Map === "undefined" ? undefined : Map,
			"%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
			"%Math%": Math,
			"%Number%": Number,
			"%Object%": $Object,
			"%Object.getOwnPropertyDescriptor%": $gOPD,
			"%parseFloat%": parseFloat,
			"%parseInt%": parseInt,
			"%Promise%": typeof Promise === "undefined" ? undefined : Promise,
			"%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
			"%RangeError%": $RangeError,
			"%ReferenceError%": $ReferenceError,
			"%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
			"%RegExp%": RegExp,
			"%Set%": typeof Set === "undefined" ? undefined : Set,
			"%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
			"%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
			"%String%": String,
			"%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
			"%Symbol%": hasSymbols ? Symbol : undefined,
			"%SyntaxError%": $SyntaxError,
			"%ThrowTypeError%": ThrowTypeError,
			"%TypedArray%": TypedArray,
			"%TypeError%": $TypeError,
			"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
			"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
			"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
			"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
			"%URIError%": $URIError,
			"%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
			"%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
			"%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet,
			"%Function.prototype.call%": $call,
			"%Function.prototype.apply%": $apply,
			"%Object.defineProperty%": $defineProperty,
			"%Object.getPrototypeOf%": $ObjectGPO,
			"%Math.abs%": abs,
			"%Math.floor%": floor,
			"%Math.max%": max,
			"%Math.min%": min,
			"%Math.pow%": pow,
			"%Math.round%": round,
			"%Math.sign%": sign,
			"%Reflect.getPrototypeOf%": $ReflectGPO
		};
		if (getProto) try {
			null.error;
		} catch (e) {
			INTRINSICS["%Error.prototype%"] = getProto(getProto(e));
		}
		var doEval = function doEval(name) {
			var value;
			if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
			else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
			else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
			else if (name === "%AsyncGenerator%") {
				var fn = doEval("%AsyncGeneratorFunction%");
				if (fn) value = fn.prototype;
			} else if (name === "%AsyncIteratorPrototype%") {
				var gen = doEval("%AsyncGenerator%");
				if (gen && getProto) value = getProto(gen.prototype);
			}
			INTRINSICS[name] = value;
			return value;
		};
		var LEGACY_ALIASES = {
			__proto__: null,
			"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
			"%ArrayPrototype%": ["Array", "prototype"],
			"%ArrayProto_entries%": [
				"Array",
				"prototype",
				"entries"
			],
			"%ArrayProto_forEach%": [
				"Array",
				"prototype",
				"forEach"
			],
			"%ArrayProto_keys%": [
				"Array",
				"prototype",
				"keys"
			],
			"%ArrayProto_values%": [
				"Array",
				"prototype",
				"values"
			],
			"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
			"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
			"%AsyncGeneratorPrototype%": [
				"AsyncGeneratorFunction",
				"prototype",
				"prototype"
			],
			"%BooleanPrototype%": ["Boolean", "prototype"],
			"%DataViewPrototype%": ["DataView", "prototype"],
			"%DatePrototype%": ["Date", "prototype"],
			"%ErrorPrototype%": ["Error", "prototype"],
			"%EvalErrorPrototype%": ["EvalError", "prototype"],
			"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
			"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
			"%FunctionPrototype%": ["Function", "prototype"],
			"%Generator%": ["GeneratorFunction", "prototype"],
			"%GeneratorPrototype%": [
				"GeneratorFunction",
				"prototype",
				"prototype"
			],
			"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
			"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
			"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
			"%JSONParse%": ["JSON", "parse"],
			"%JSONStringify%": ["JSON", "stringify"],
			"%MapPrototype%": ["Map", "prototype"],
			"%NumberPrototype%": ["Number", "prototype"],
			"%ObjectPrototype%": ["Object", "prototype"],
			"%ObjProto_toString%": [
				"Object",
				"prototype",
				"toString"
			],
			"%ObjProto_valueOf%": [
				"Object",
				"prototype",
				"valueOf"
			],
			"%PromisePrototype%": ["Promise", "prototype"],
			"%PromiseProto_then%": [
				"Promise",
				"prototype",
				"then"
			],
			"%Promise_all%": ["Promise", "all"],
			"%Promise_reject%": ["Promise", "reject"],
			"%Promise_resolve%": ["Promise", "resolve"],
			"%RangeErrorPrototype%": ["RangeError", "prototype"],
			"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
			"%RegExpPrototype%": ["RegExp", "prototype"],
			"%SetPrototype%": ["Set", "prototype"],
			"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
			"%StringPrototype%": ["String", "prototype"],
			"%SymbolPrototype%": ["Symbol", "prototype"],
			"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
			"%TypedArrayPrototype%": ["TypedArray", "prototype"],
			"%TypeErrorPrototype%": ["TypeError", "prototype"],
			"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
			"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
			"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
			"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
			"%URIErrorPrototype%": ["URIError", "prototype"],
			"%WeakMapPrototype%": ["WeakMap", "prototype"],
			"%WeakSetPrototype%": ["WeakSet", "prototype"]
		};
		var bind = require_function_bind();
		var hasOwn = require_hasown();
		var $concat = bind.call($call, Array.prototype.concat);
		var $spliceApply = bind.call($apply, Array.prototype.splice);
		var $replace = bind.call($call, String.prototype.replace);
		var $strSlice = bind.call($call, String.prototype.slice);
		var $exec = bind.call($call, RegExp.prototype.exec);
		var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
		var reEscapeChar = /\\(\\)?/g;
		var stringToPath = function stringToPath(string) {
			var first = $strSlice(string, 0, 1);
			var last = $strSlice(string, -1);
			if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
			else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
			var result = [];
			$replace(string, rePropName, function(match, number, quote, subString) {
				result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
			});
			return result;
		};
		var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
			var intrinsicName = name;
			var alias;
			if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
				alias = LEGACY_ALIASES[intrinsicName];
				intrinsicName = "%" + alias[0] + "%";
			}
			if (hasOwn(INTRINSICS, intrinsicName)) {
				var value = INTRINSICS[intrinsicName];
				if (value === needsEval) value = doEval(intrinsicName);
				if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
				return {
					alias,
					name: intrinsicName,
					value
				};
			}
			throw new $SyntaxError("intrinsic " + name + " does not exist!");
		};
		module.exports = function GetIntrinsic(name, allowMissing) {
			if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
			if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError("\"allowMissing\" argument must be a boolean");
			if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
			var parts = stringToPath(name);
			var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
			var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
			var intrinsicRealName = intrinsic.name;
			var value = intrinsic.value;
			var skipFurtherCaching = false;
			var alias = intrinsic.alias;
			if (alias) {
				intrinsicBaseName = alias[0];
				$spliceApply(parts, $concat([0, 1], alias));
			}
			for (var i = 1, isOwn = true; i < parts.length; i += 1) {
				var part = parts[i];
				var first = $strSlice(part, 0, 1);
				var last = $strSlice(part, -1);
				if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
				if (part === "constructor" || !isOwn) skipFurtherCaching = true;
				intrinsicBaseName += "." + part;
				intrinsicRealName = "%" + intrinsicBaseName + "%";
				if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
				else if (value != null) {
					if (!(part in value)) {
						if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
						return;
					}
					if ($gOPD && i + 1 >= parts.length) {
						var desc = $gOPD(value, part);
						isOwn = !!desc;
						if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
						else value = value[part];
					} else {
						isOwn = hasOwn(value, part);
						value = value[part];
					}
					if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
				}
			}
			return value;
		};
	}));

//#endregion
//#region node_modules/call-bound/index.js
	var require_call_bound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBindBasic = require_call_bind_apply_helpers();
		/** @type {(thisArg: string, searchString: string, position?: number) => number} */
		var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
		/** @type {import('.')} */
		module.exports = function callBoundIntrinsic(name, allowMissing) {
			var intrinsic = GetIntrinsic(name, !!allowMissing);
			if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBindBasic([intrinsic]);
			return intrinsic;
		};
	}));

//#endregion
//#region node_modules/side-channel-map/index.js
	var require_side_channel_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBound = require_call_bound();
		var inspect = require_object_inspect();
		var $TypeError = require_type();
		var $Map = GetIntrinsic("%Map%", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
		var $mapGet = callBound("Map.prototype.get", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
		var $mapSet = callBound("Map.prototype.set", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
		var $mapHas = callBound("Map.prototype.has", true);
		/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
		var $mapDelete = callBound("Map.prototype.delete", true);
		/** @type {<K, V>(thisArg: Map<K, V>) => number} */
		var $mapSize = callBound("Map.prototype.size", true);
		/** @type {import('.')} */
		module.exports = !!$Map && function getSideChannelMap() {
			/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {Map<K, V> | undefined} */ var $m;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					if ($m) {
						var result = $mapDelete($m, key);
						if ($mapSize($m) === 0) $m = void 0;
						return result;
					}
					return false;
				},
				get: function(key) {
					if ($m) return $mapGet($m, key);
				},
				has: function(key) {
					if ($m) return $mapHas($m, key);
					return false;
				},
				set: function(key, value) {
					if (!$m) $m = new $Map();
					$mapSet($m, key, value);
				}
			};
			return channel;
		};
	}));

//#endregion
//#region node_modules/side-channel-weakmap/index.js
	var require_side_channel_weakmap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var GetIntrinsic = require_get_intrinsic();
		var callBound = require_call_bound();
		var inspect = require_object_inspect();
		var getSideChannelMap = require_side_channel_map();
		var $TypeError = require_type();
		var $WeakMap = GetIntrinsic("%WeakMap%", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
		var $weakMapGet = callBound("WeakMap.prototype.get", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
		var $weakMapSet = callBound("WeakMap.prototype.set", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
		var $weakMapHas = callBound("WeakMap.prototype.has", true);
		/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
		var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
		/** @type {import('.')} */
		module.exports = $WeakMap ? function getSideChannelWeakMap() {
			/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */
			/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
			/** @type {Channel | undefined} */ var $m;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapDelete($wm, key);
					} else if (getSideChannelMap) {
						if ($m) return $m["delete"](key);
					}
					return false;
				},
				get: function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapGet($wm, key);
					}
					return $m && $m.get(key);
				},
				has: function(key) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if ($wm) return $weakMapHas($wm, key);
					}
					return !!$m && $m.has(key);
				},
				set: function(key, value) {
					if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
						if (!$wm) $wm = new $WeakMap();
						$weakMapSet($wm, key, value);
					} else if (getSideChannelMap) {
						if (!$m) $m = getSideChannelMap();
						/** @type {NonNullable<typeof $m>} */ $m.set(key, value);
					}
				}
			};
			return channel;
		} : getSideChannelMap;
	}));

//#endregion
//#region node_modules/side-channel/index.js
	var require_side_channel = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $TypeError = require_type();
		var inspect = require_object_inspect();
		var getSideChannelList = require_side_channel_list();
		var getSideChannelMap = require_side_channel_map();
		var makeChannel = require_side_channel_weakmap() || getSideChannelMap || getSideChannelList;
		/** @type {import('.')} */
		module.exports = function getSideChannel() {
			/** @typedef {ReturnType<typeof getSideChannel>} Channel */
			/** @type {Channel | undefined} */ var $channelData;
			/** @type {Channel} */
			var channel = {
				assert: function(key) {
					if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
				},
				"delete": function(key) {
					return !!$channelData && $channelData["delete"](key);
				},
				get: function(key) {
					return $channelData && $channelData.get(key);
				},
				has: function(key) {
					return !!$channelData && $channelData.has(key);
				},
				set: function(key, value) {
					if (!$channelData) $channelData = makeChannel();
					$channelData.set(key, value);
				}
			};
			return channel;
		};
	}));

//#endregion
//#region node_modules/qs/lib/formats.js
	var require_formats = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var replace = String.prototype.replace;
		var percentTwenties = /%20/g;
		var Format = {
			RFC1738: "RFC1738",
			RFC3986: "RFC3986"
		};
		module.exports = {
			"default": Format.RFC3986,
			formatters: {
				RFC1738: function(value) {
					return replace.call(value, percentTwenties, "+");
				},
				RFC3986: function(value) {
					return String(value);
				}
			},
			RFC1738: Format.RFC1738,
			RFC3986: Format.RFC3986
		};
	}));

//#endregion
//#region node_modules/qs/lib/utils.js
	var require_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var formats = require_formats();
		var getSideChannel = require_side_channel();
		var has = Object.prototype.hasOwnProperty;
		var isArray = Array.isArray;
		var overflowChannel = getSideChannel();
		var markOverflow = function markOverflow(obj, maxIndex) {
			overflowChannel.set(obj, maxIndex);
			return obj;
		};
		var isOverflow = function isOverflow(obj) {
			return overflowChannel.has(obj);
		};
		var getMaxIndex = function getMaxIndex(obj) {
			return overflowChannel.get(obj);
		};
		var setMaxIndex = function setMaxIndex(obj, maxIndex) {
			overflowChannel.set(obj, maxIndex);
		};
		var hexTable = function() {
			var array = [];
			for (var i = 0; i < 256; ++i) array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
			return array;
		}();
		var compactQueue = function compactQueue(queue) {
			while (queue.length > 1) {
				var item = queue.pop();
				var obj = item.obj[item.prop];
				if (isArray(obj)) {
					var compacted = [];
					for (var j = 0; j < obj.length; ++j) if (typeof obj[j] !== "undefined") compacted[compacted.length] = obj[j];
					item.obj[item.prop] = compacted;
				}
			}
		};
		var arrayToObject = function arrayToObject(source, options) {
			var obj = options && options.plainObjects ? { __proto__: null } : {};
			for (var i = 0; i < source.length; ++i) if (typeof source[i] !== "undefined") obj[i] = source[i];
			return obj;
		};
		var merge = function merge(target, source, options) {
			if (!source) return target;
			if (typeof source !== "object" && typeof source !== "function") {
				if (isArray(target)) {
					var nextIndex = target.length;
					if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
					target[nextIndex] = source;
				} else if (target && typeof target === "object") {
					if (isOverflow(target)) {
						var newIndex = getMaxIndex(target) + 1;
						target[newIndex] = source;
						setMaxIndex(target, newIndex);
					} else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
				} else return [target, source];
				return target;
			}
			if (!target || typeof target !== "object") {
				if (isOverflow(source)) {
					var sourceKeys = Object.keys(source);
					var result = options && options.plainObjects ? {
						__proto__: null,
						0: target
					} : { 0: target };
					for (var m = 0; m < sourceKeys.length; m++) {
						var oldKey = parseInt(sourceKeys[m], 10);
						result[oldKey + 1] = source[sourceKeys[m]];
					}
					return markOverflow(result, getMaxIndex(source) + 1);
				}
				var combined = [target].concat(source);
				if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) return markOverflow(arrayToObject(combined, options), combined.length - 1);
				return combined;
			}
			var mergeTarget = target;
			if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
			if (isArray(target) && isArray(source)) {
				source.forEach(function(item, i) {
					if (has.call(target, i)) {
						var targetItem = target[i];
						if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
						else target[target.length] = item;
					} else target[i] = item;
				});
				return target;
			}
			return Object.keys(source).reduce(function(acc, key) {
				var value = source[key];
				if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
				else acc[key] = value;
				if (isOverflow(source) && !isOverflow(acc)) markOverflow(acc, getMaxIndex(source));
				if (isOverflow(acc)) {
					var keyNum = parseInt(key, 10);
					if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) setMaxIndex(acc, keyNum);
				}
				return acc;
			}, mergeTarget);
		};
		var assign = function assignSingleSource(target, source) {
			return Object.keys(source).reduce(function(acc, key) {
				acc[key] = source[key];
				return acc;
			}, target);
		};
		var decode = function(str, defaultDecoder, charset) {
			var strWithoutPlus = str.replace(/\+/g, " ");
			if (charset === "iso-8859-1") return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
			try {
				return decodeURIComponent(strWithoutPlus);
			} catch (e) {
				return strWithoutPlus;
			}
		};
		var limit = 1024;
		var encode = function encode(str, defaultEncoder, charset, kind, format) {
			if (str.length === 0) return str;
			var string = str;
			if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
			else if (typeof str !== "string") string = String(str);
			if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
				return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
			});
			var out = "";
			for (var j = 0; j < string.length; j += limit) {
				var segment = string.length >= limit ? string.slice(j, j + limit) : string;
				var arr = [];
				for (var i = 0; i < segment.length; ++i) {
					var c = segment.charCodeAt(i);
					if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
						arr[arr.length] = segment.charAt(i);
						continue;
					}
					if (c < 128) {
						arr[arr.length] = hexTable[c];
						continue;
					}
					if (c < 2048) {
						arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
						continue;
					}
					if (c < 55296 || c >= 57344) {
						arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
						continue;
					}
					i += 1;
					c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
					arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
				}
				out += arr.join("");
			}
			return out;
		};
		var compact = function compact(value) {
			var queue = [{
				obj: { o: value },
				prop: "o"
			}];
			var refs = [];
			for (var i = 0; i < queue.length; ++i) {
				var item = queue[i];
				var obj = item.obj[item.prop];
				var keys = Object.keys(obj);
				for (var j = 0; j < keys.length; ++j) {
					var key = keys[j];
					var val = obj[key];
					if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
						queue[queue.length] = {
							obj,
							prop: key
						};
						refs[refs.length] = val;
					}
				}
			}
			compactQueue(queue);
			return value;
		};
		var isRegExp = function isRegExp(obj) {
			return Object.prototype.toString.call(obj) === "[object RegExp]";
		};
		var isBuffer = function isBuffer(obj) {
			if (!obj || typeof obj !== "object") return false;
			return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
		};
		var combine = function combine(a, b, arrayLimit, plainObjects) {
			if (isOverflow(a)) {
				var newIndex = getMaxIndex(a) + 1;
				a[newIndex] = b;
				setMaxIndex(a, newIndex);
				return a;
			}
			var result = [].concat(a, b);
			if (result.length > arrayLimit) return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
			return result;
		};
		var maybeMap = function maybeMap(val, fn) {
			if (isArray(val)) {
				var mapped = [];
				for (var i = 0; i < val.length; i += 1) mapped[mapped.length] = fn(val[i]);
				return mapped;
			}
			return fn(val);
		};
		module.exports = {
			arrayToObject,
			assign,
			combine,
			compact,
			decode,
			encode,
			isBuffer,
			isOverflow,
			isRegExp,
			markOverflow,
			maybeMap,
			merge
		};
	}));

//#endregion
//#region node_modules/qs/lib/stringify.js
	var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getSideChannel = require_side_channel();
		var utils = require_utils();
		var formats = require_formats();
		var has = Object.prototype.hasOwnProperty;
		var arrayPrefixGenerators = {
			brackets: function brackets(prefix) {
				return prefix + "[]";
			},
			comma: "comma",
			indices: function indices(prefix, key) {
				return prefix + "[" + key + "]";
			},
			repeat: function repeat(prefix) {
				return prefix;
			}
		};
		var isArray = Array.isArray;
		var push = Array.prototype.push;
		var pushToArray = function(arr, valueOrArray) {
			push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
		};
		var toISO = Date.prototype.toISOString;
		var defaultFormat = formats["default"];
		var defaults = {
			addQueryPrefix: false,
			allowDots: false,
			allowEmptyArrays: false,
			arrayFormat: "indices",
			charset: "utf-8",
			charsetSentinel: false,
			commaRoundTrip: false,
			delimiter: "&",
			encode: true,
			encodeDotInKeys: false,
			encoder: utils.encode,
			encodeValuesOnly: false,
			filter: void 0,
			format: defaultFormat,
			formatter: formats.formatters[defaultFormat],
			indices: false,
			serializeDate: function serializeDate(date) {
				return toISO.call(date);
			},
			skipNulls: false,
			strictNullHandling: false
		};
		var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
			return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
		};
		var sentinel = {};
		var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
			var obj = object;
			var tmpSc = sideChannel;
			var step = 0;
			var findFlag = false;
			while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
				var pos = tmpSc.get(object);
				step += 1;
				if (typeof pos !== "undefined") if (pos === step) throw new RangeError("Cyclic object value");
				else findFlag = true;
				if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
			}
			if (typeof filter === "function") obj = filter(prefix, obj);
			else if (obj instanceof Date) obj = serializeDate(obj);
			else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
				if (value instanceof Date) return serializeDate(value);
				return value;
			});
			if (obj === null) {
				if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
				obj = "";
			}
			if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
				if (encoder) return [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format)) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
				return [formatter(prefix) + "=" + formatter(String(obj))];
			}
			var values = [];
			if (typeof obj === "undefined") return values;
			var objKeys;
			if (generateArrayPrefix === "comma" && isArray(obj)) {
				if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, encoder);
				objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
			} else if (isArray(filter)) objKeys = filter;
			else {
				var keys = Object.keys(obj);
				objKeys = sort ? keys.sort(sort) : keys;
			}
			var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
			var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
			if (allowEmptyArrays && isArray(obj) && obj.length === 0) return adjustedPrefix + "[]";
			for (var j = 0; j < objKeys.length; ++j) {
				var key = objKeys[j];
				var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
				if (skipNulls && value === null) continue;
				var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
				var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
				sideChannel.set(object, step);
				var valueSideChannel = getSideChannel();
				valueSideChannel.set(sentinel, sideChannel);
				pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
			}
			return values;
		};
		var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
			if (!opts) return defaults;
			if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
			if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
			if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
			var charset = opts.charset || defaults.charset;
			if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
			var format = formats["default"];
			if (typeof opts.format !== "undefined") {
				if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
				format = opts.format;
			}
			var formatter = formats.formatters[format];
			var filter = defaults.filter;
			if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
			var arrayFormat;
			if (opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
			else if ("indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
			else arrayFormat = defaults.arrayFormat;
			if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
			var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
			return {
				addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
				allowDots,
				allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
				arrayFormat,
				charset,
				charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
				commaRoundTrip: !!opts.commaRoundTrip,
				delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
				encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
				encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
				encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
				encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
				filter,
				format,
				formatter,
				serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
				skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
				sort: typeof opts.sort === "function" ? opts.sort : null,
				strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
			};
		};
		module.exports = function(object, opts) {
			var obj = object;
			var options = normalizeStringifyOptions(opts);
			var objKeys;
			var filter;
			if (typeof options.filter === "function") {
				filter = options.filter;
				obj = filter("", obj);
			} else if (isArray(options.filter)) {
				filter = options.filter;
				objKeys = filter;
			}
			var keys = [];
			if (typeof obj !== "object" || obj === null) return "";
			var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
			var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
			if (!objKeys) objKeys = Object.keys(obj);
			if (options.sort) objKeys.sort(options.sort);
			var sideChannel = getSideChannel();
			for (var i = 0; i < objKeys.length; ++i) {
				var key = objKeys[i];
				var value = obj[key];
				if (options.skipNulls && value === null) continue;
				pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
			}
			var joined = keys.join(options.delimiter);
			var prefix = options.addQueryPrefix === true ? "?" : "";
			if (options.charsetSentinel) if (options.charset === "iso-8859-1") prefix += "utf8=%26%2310003%3B&";
			else prefix += "utf8=%E2%9C%93&";
			return joined.length > 0 ? prefix + joined : "";
		};
	}));

//#endregion
//#region node_modules/qs/lib/parse.js
	var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var utils = require_utils();
		var has = Object.prototype.hasOwnProperty;
		var isArray = Array.isArray;
		var defaults = {
			allowDots: false,
			allowEmptyArrays: false,
			allowPrototypes: false,
			allowSparse: false,
			arrayLimit: 20,
			charset: "utf-8",
			charsetSentinel: false,
			comma: false,
			decodeDotInKeys: false,
			decoder: utils.decode,
			delimiter: "&",
			depth: 5,
			duplicates: "combine",
			ignoreQueryPrefix: false,
			interpretNumericEntities: false,
			parameterLimit: 1e3,
			parseArrays: true,
			plainObjects: false,
			strictDepth: false,
			strictNullHandling: false,
			throwOnLimitExceeded: false
		};
		var interpretNumericEntities = function(str) {
			return str.replace(/&#(\d+);/g, function($0, numberStr) {
				return String.fromCharCode(parseInt(numberStr, 10));
			});
		};
		var parseArrayValue = function(val, options, currentArrayLength) {
			if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
			if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
			return val;
		};
		var isoSentinel = "utf8=%26%2310003%3B";
		var charsetSentinel = "utf8=%E2%9C%93";
		var parseValues = function parseQueryStringValues(str, options) {
			var obj = { __proto__: null };
			var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
			cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
			var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
			var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
			if (options.throwOnLimitExceeded && parts.length > limit) throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
			var skipIndex = -1;
			var i;
			var charset = options.charset;
			if (options.charsetSentinel) {
				for (i = 0; i < parts.length; ++i) if (parts[i].indexOf("utf8=") === 0) {
					if (parts[i] === charsetSentinel) charset = "utf-8";
					else if (parts[i] === isoSentinel) charset = "iso-8859-1";
					skipIndex = i;
					i = parts.length;
				}
			}
			for (i = 0; i < parts.length; ++i) {
				if (i === skipIndex) continue;
				var part = parts[i];
				var bracketEqualsPos = part.indexOf("]=");
				var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
				var key;
				var val;
				if (pos === -1) {
					key = options.decoder(part, defaults.decoder, charset, "key");
					val = options.strictNullHandling ? null : "";
				} else {
					key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
					if (key !== null) val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
						return options.decoder(encodedVal, defaults.decoder, charset, "value");
					});
				}
				if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(String(val));
				if (part.indexOf("[]=") > -1) val = isArray(val) ? [val] : val;
				if (options.comma && isArray(val) && val.length > options.arrayLimit) {
					if (options.throwOnLimitExceeded) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
					val = utils.combine([], val, options.arrayLimit, options.plainObjects);
				}
				if (key !== null) {
					var existing = has.call(obj, key);
					if (existing && options.duplicates === "combine") obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
					else if (!existing || options.duplicates === "last") obj[key] = val;
				}
			}
			return obj;
		};
		var parseObject = function(chain, val, options, valuesParsed) {
			var currentArrayLength = 0;
			if (chain.length > 0 && chain[chain.length - 1] === "[]") {
				var parentKey = chain.slice(0, -1).join("");
				currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
			}
			var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
			for (var i = chain.length - 1; i >= 0; --i) {
				var obj;
				var root = chain[i];
				if (root === "[]" && options.parseArrays) if (utils.isOverflow(leaf)) obj = leaf;
				else obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
				else {
					obj = options.plainObjects ? { __proto__: null } : {};
					var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
					var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
					var index = parseInt(decodedRoot, 10);
					var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
					if (!options.parseArrays && decodedRoot === "") obj = { 0: leaf };
					else if (isValidArrayIndex && index < options.arrayLimit) {
						obj = [];
						obj[index] = leaf;
					} else if (isValidArrayIndex && options.throwOnLimitExceeded) throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
					else if (isValidArrayIndex) {
						obj[index] = leaf;
						utils.markOverflow(obj, index);
					} else if (decodedRoot !== "__proto__") obj[decodedRoot] = leaf;
				}
				leaf = obj;
			}
			return leaf;
		};
		var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
			var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
			if (options.depth <= 0) {
				if (!options.plainObjects && has.call(Object.prototype, key)) {
					if (!options.allowPrototypes) return;
				}
				return [key];
			}
			var brackets = /(\[[^[\]]*])/;
			var child = /(\[[^[\]]*])/g;
			var segment = brackets.exec(key);
			var parent = segment ? key.slice(0, segment.index) : key;
			var keys = [];
			if (parent) {
				if (!options.plainObjects && has.call(Object.prototype, parent)) {
					if (!options.allowPrototypes) return;
				}
				keys[keys.length] = parent;
			}
			var i = 0;
			while ((segment = child.exec(key)) !== null && i < options.depth) {
				i += 1;
				var segmentContent = segment[1].slice(1, -1);
				if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
					if (!options.allowPrototypes) return;
				}
				keys[keys.length] = segment[1];
			}
			if (segment) {
				if (options.strictDepth === true) throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
				keys[keys.length] = "[" + key.slice(segment.index) + "]";
			}
			return keys;
		};
		var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
			if (!givenKey) return;
			var keys = splitKeyIntoSegments(givenKey, options);
			if (!keys) return;
			return parseObject(keys, val, options, valuesParsed);
		};
		var normalizeParseOptions = function normalizeParseOptions(opts) {
			if (!opts) return defaults;
			if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
			if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
			if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
			if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
			if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
			var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
			var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
			if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
			return {
				allowDots: typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots,
				allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
				allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
				allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
				arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
				charset,
				charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
				comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
				decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
				decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
				delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
				depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
				duplicates,
				ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
				interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
				parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
				parseArrays: opts.parseArrays !== false,
				plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
				strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
				strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
				throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
			};
		};
		module.exports = function(str, opts) {
			var options = normalizeParseOptions(opts);
			if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? { __proto__: null } : {};
			var tempObj = typeof str === "string" ? parseValues(str, options) : str;
			var obj = options.plainObjects ? { __proto__: null } : {};
			var keys = Object.keys(tempObj);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
				obj = utils.merge(obj, newObj, options);
			}
			if (options.allowSparse === true) return obj;
			return utils.compact(obj);
		};
	}));

//#endregion
//#region node_modules/qs/lib/index.js
	var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var stringify = require_stringify();
		var parse = require_parse();
		var formats = require_formats();
		module.exports = {
			formats,
			parse,
			stringify
		};
	}));

//#endregion
//#region src/request.ts
	var import_lib = /* @__PURE__ */ __toESM(require_lib());
	var Request = class {
		fetch;
		constructor(configure) {
			this.configure = configure;
			this.fetch = configure.fetch ?? globalThis.fetch;
		}
		get(path, params) {
			return this.request({
				method: "GET",
				path,
				params
			}).then(this.parseJSON);
		}
		post(path, params) {
			return this.request({
				method: "POST",
				path,
				params
			}).then(this.parseJSON);
		}
		put(path, params) {
			return this.request({
				method: "PUT",
				path,
				params
			}).then(this.parseJSON);
		}
		patch(path, params) {
			return this.request({
				method: "PATCH",
				path,
				params
			}).then(this.parseJSON);
		}
		delete(path, params) {
			return this.request({
				method: "DELETE",
				path,
				params
			}).then(this.parseJSON);
		}
		request(options) {
			const { method, path, params = {} } = options;
			const { apiKey, accessToken, timeout } = this.configure;
			const query = apiKey ? { apiKey } : {};
			const init = {
				method,
				headers: {}
			};
			if (timeout) init["timeout"] = timeout;
			if (!apiKey && accessToken) init.headers["Authorization"] = "Bearer " + accessToken;
			if (typeof window !== "undefined") init.mode = "cors";
			if (method !== "GET") if (params instanceof FormData) init.body = params;
			else {
				init.headers["Content-type"] = "application/x-www-form-urlencoded";
				init.body = this.toQueryString(params);
			}
			else Object.keys(params).forEach((key) => query[key] = params[key]);
			const queryStr = this.toQueryString(query);
			const url = `${this.restBaseURL}/${path}` + (queryStr.length > 0 ? `?${queryStr}` : "");
			return this.fetch(url, init).then(this.checkStatus);
		}
		checkStatus(response) {
			return new Promise((resolve, reject) => {
				if (200 <= response.status && response.status < 300) resolve(response);
				else response.json().then((data) => {
					if (response.status === 401) reject(new BacklogAuthError(response, data));
					else reject(new BacklogApiError(response, data));
				}).catch((err) => reject(new UnexpectedError(response)));
			});
		}
		parseJSON(response) {
			if (response.status === 204 || response.headers.get("Content-Length") === "0") return Promise.resolve(void 0);
			return response.json();
		}
		toQueryString(params) {
			const formatted = {};
			Object.keys(params).forEach((key) => {
				const value = params[key];
				if (key.startsWith("customField_") && Array.isArray(value)) value.forEach((v, i) => {
					formatted[`${key}[${i}]`] = v;
				});
				else formatted[key] = value;
			});
			return import_lib.stringify(formatted, { arrayFormat: "brackets" });
		}
		get webAppBaseURL() {
			return `https://${this.configure.host}`;
		}
		get restBaseURL() {
			return `${this.webAppBaseURL}/api/v2`;
		}
	};

//#endregion
//#region src/backlog.ts
	var Backlog = class extends Request {
		constructor(configure) {
			super(configure);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-space/
		*/
		getSpace() {
			return this.get("space");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
		*/
		getSpaceActivities(params) {
			return this.get("space/activities", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
		*/
		getSpaceIcon() {
			return this.download("space/image");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
		*/
		getSpaceNotification() {
			return this.get("space/notification");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
		*/
		putSpaceNotification(params) {
			return this.put("space/notification", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
		*/
		getSpaceDiskUsage() {
			return this.get("space/diskUsage");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
		*/
		postSpaceAttachment(form) {
			return this.upload("space/attachment", form);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-user-list/
		*/
		getUsers() {
			return this.get(`users`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-user/
		*/
		getUser(userId) {
			return this.get(`users/${userId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-user/
		*/
		postUser(params) {
			return this.post(`users`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-user/
		*/
		patchUser(userId, params) {
			return this.patch(`users/${userId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-user/
		*/
		deleteUser(userId) {
			return this.delete(`users/${userId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-own-user/
		*/
		getMyself() {
			return this.get("users/myself");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
		*/
		getUserIcon(userId) {
			return this.download(`users/${userId}/icon`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
		*/
		getUserActivities(userId, params) {
			return this.get(`users/${userId}/activities`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
		*/
		getUserStars(userId, params) {
			return this.get(`users/${userId}/stars`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
		*/
		getUserStarsCount(userId, params) {
			return this.get(`users/${userId}/stars/count`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
		*/
		getRecentlyViewedIssues(params) {
			return this.get("users/myself/recentlyViewedIssues", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
		*/
		getRecentlyViewedProjects(params) {
			return this.get("users/myself/recentlyViewedProjects", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
		*/
		getRecentlyViewedWikis(params) {
			return this.get("users/myself/recentlyViewedWikis", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
		*/
		getProjectStatuses(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/statuses`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
		*/
		getResolutions() {
			return this.get("resolutions");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
		*/
		getPriorities() {
			return this.get("priorities");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-list/
		*/
		getProjects(params) {
			return this.get("projects", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-project/
		*/
		postProject(params) {
			return this.post("projects", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project/
		*/
		getProject(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-project/
		*/
		patchProject(projectIdOrKey, params) {
			return this.patch(`projects/${projectIdOrKey}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-project/
		*/
		deleteProject(projectIdOrKey) {
			return this.delete(`projects/${projectIdOrKey}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
		*/
		getProjectIcon(projectIdOrKey) {
			return this.download(`projects/${projectIdOrKey}/image`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
		*/
		getProjectActivities(projectIdOrKey, params) {
			return this.get(`projects/${projectIdOrKey}/activities`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-project-user/
		*/
		postProjectUser(projectIdOrKey, userId) {
			return this.post(`projects/${projectIdOrKey}/users`, { userId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
		*/
		getProjectUsers(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/users`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
		*/
		deleteProjectUsers(projectIdOrKey, params) {
			return this.delete(`projects/${projectIdOrKey}/users`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
		*/
		postProjectAdministrators(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/administrators`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
		*/
		getProjectAdministrators(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/administrators`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
		*/
		deleteProjectAdministrators(projectIdOrKey, params) {
			return this.delete(`projects/${projectIdOrKey}/administrators`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-status/
		*/
		postProjectStatus(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/statuses`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-status/
		*/
		patchProjectStatus(projectIdOrKey, id, params) {
			return this.patch(`projects/${projectIdOrKey}/statuses/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-status/
		*/
		deleteProjectStatus(projectIdOrKey, id, substituteStatusId) {
			return this.delete(`projects/${projectIdOrKey}/statuses/${id}`, { substituteStatusId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
		*/
		patchProjectStatusOrder(projectIdOrKey, statusId) {
			return this.patch(`projects/${projectIdOrKey}/statuses/updateDisplayOrder`, { statusId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
		*/
		getIssueTypes(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/issueTypes`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
		*/
		postIssueType(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/issueTypes`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
		*/
		patchIssueType(projectIdOrKey, id, params) {
			return this.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
		*/
		deleteIssueType(projectIdOrKey, id, params) {
			return this.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-category-list/
		*/
		getCategories(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/categories`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-category/
		*/
		postCategories(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/categories`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-category/
		*/
		patchCategories(projectIdOrKey, id, params) {
			return this.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-category/
		*/
		deleteCategories(projectIdOrKey, id) {
			return this.delete(`projects/${projectIdOrKey}/categories/${id}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
		*/
		getVersions(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/versions`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
		*/
		postVersions(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/versions`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
		*/
		patchVersions(projectIdOrKey, id, params) {
			return this.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-version/
		*/
		deleteVersions(projectIdOrKey, id) {
			return this.delete(`projects/${projectIdOrKey}/versions/${id}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
		*/
		getCustomFields(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/customFields`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
		*/
		postCustomField(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/customFields`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
		*/
		patchCustomField(projectIdOrKey, id, params) {
			return this.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
		*/
		deleteCustomField(projectIdOrKey, id) {
			return this.delete(`projects/${projectIdOrKey}/customFields/${id}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
		*/
		postCustomFieldItem(projectIdOrKey, id, params) {
			return this.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
		*/
		patchCustomFieldItem(projectIdOrKey, id, itemId, params) {
			return this.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
		*/
		deleteCustomFieldItem(projectIdOrKey, id, itemId) {
			return this.delete(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
		*/
		getSharedFiles(projectIdOrKey, path, params) {
			return this.get(`projects/${projectIdOrKey}/files/metadata/${path}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-file/
		*/
		getSharedFile(projectIdOrKey, sharedFileId) {
			return this.download(`projects/${projectIdOrKey}/files/${sharedFileId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
		*/
		getProjectsDiskUsage(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/diskUsage`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
		*/
		getWebhooks(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/webhooks`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-webhook/
		*/
		postWebhook(projectIdOrKey, params) {
			return this.post(`projects/${projectIdOrKey}/webhooks`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-webhook/
		*/
		getWebhook(projectIdOrKey, webhookId) {
			return this.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-webhook/
		*/
		patchWebhook(projectIdOrKey, webhookId, params) {
			return this.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
		*/
		deleteWebhook(projectIdOrKey, webhookId) {
			return this.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
		*/
		getIssues(params) {
			return this.get("issues", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-issue/
		*/
		getIssuesCount(params) {
			return this.get("issues/count", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-issue/
		*/
		postIssue(params) {
			return this.post("issues", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-issue/
		*/
		patchIssue(issueIdOrKey, params) {
			return this.patch(`issues/${issueIdOrKey}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-issue/
		*/
		getIssue(issueIdOrKey) {
			return this.get(`issues/${issueIdOrKey}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-issue/
		*/
		deleteIssue(issueIdOrKey) {
			return this.delete(`issues/${issueIdOrKey}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
		*/
		getIssueComments(issueIdOrKey, params) {
			return this.get(`issues/${issueIdOrKey}/comments`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-comment/
		*/
		postIssueComments(issueIdOrKey, params) {
			return this.post(`issues/${issueIdOrKey}/comments`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-comment/
		*/
		getIssueCommentsCount(issueIdOrKey) {
			return this.get(`issues/${issueIdOrKey}/comments/count`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-comment/
		*/
		getIssueComment(issueIdOrKey, commentId) {
			return this.get(`issues/${issueIdOrKey}/comments/${commentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-comment/
		*/
		deleteIssueComment(issueIdOrKey, commentId) {
			return this.delete(`issues/${issueIdOrKey}/comments/${commentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-comment/
		*/
		patchIssueComment(issueIdOrKey, commentId, params) {
			return this.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
		*/
		getIssueCommentNotifications(issueIdOrKey, commentId) {
			return this.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
		*/
		postIssueCommentNotifications(issueIdOrKey, commentId, prams) {
			return this.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
		*/
		getIssueAttachments(issueIdOrKey) {
			return this.get(`issues/${issueIdOrKey}/attachments`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
		*/
		getIssueAttachment(issueIdOrKey, attachmentId) {
			return this.download(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
		*/
		deleteIssueAttachment(issueIdOrKey, attachmentId) {
			return this.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
		*/
		getIssueParticipants(issueIdOrKey) {
			return this.get(`issues/${issueIdOrKey}/participants`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
		*/
		getIssueSharedFiles(issueIdOrKey) {
			return this.get(`issues/${issueIdOrKey}/sharedFiles`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
		*/
		linkIssueSharedFiles(issueIdOrKey, params) {
			return this.post(`issues/${issueIdOrKey}/sharedFiles`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
		*/
		unlinkIssueSharedFile(issueIdOrKey, id) {
			return this.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
		*/
		getWikis(params) {
			return this.get(`wikis`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
		*/
		getWikisCount(projectIdOrKey) {
			return this.get(`wikis/count`, { projectIdOrKey });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
		*/
		getWikisTags(projectIdOrKey) {
			return this.get(`wikis/tags`, { projectIdOrKey });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
		*/
		postWiki(params) {
			return this.post(`wikis`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
		*/
		getWiki(wikiId) {
			return this.get(`wikis/${wikiId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
		*/
		patchWiki(wikiId, params) {
			return this.patch(`wikis/${wikiId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
		*/
		deleteWiki(wikiId, mailNotify) {
			return this.delete(`wikis/${wikiId}`, { mailNotify });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
		*/
		getWikisAttachments(wikiId) {
			return this.get(`wikis/${wikiId}/attachments`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
		*/
		postWikisAttachments(wikiId, attachmentId) {
			return this.post(`wikis/${wikiId}/attachments`, { attachmentId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
		*/
		getWikiAttachment(wikiId, attachmentId) {
			return this.download(`wikis/${wikiId}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
		*/
		deleteWikisAttachments(wikiId, attachmentId) {
			return this.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
		*/
		getWikisSharedFiles(wikiId) {
			return this.get(`wikis/${wikiId}/sharedFiles`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
		*/
		linkWikisSharedFiles(wikiId, fileId) {
			return this.post(`wikis/${wikiId}/sharedFiles`, { fileId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
		*/
		unlinkWikisSharedFiles(wikiId, id) {
			return this.delete(`wikis/${wikiId}/sharedFiles/${id}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/get-document-list/
		*/
		getDocuments(params) {
			return this.get("documents", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/get-document-tree/
		*/
		getDocumentTree(projectIdOrKey) {
			return this.get(`documents/tree`, { projectIdOrKey });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/get-document/
		*/
		getDocument(documentId) {
			return this.get(`documents/${documentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/get-document-attachments/
		*/
		downloadDocumentAttachment(documentId, attachmentId) {
			return this.download(`documents/${documentId}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-document/
		*/
		addDocument(params) {
			return this.post("documents", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-document/
		*/
		deleteDocument(documentId) {
			return this.delete(`documents/${documentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
		*/
		getWikisHistory(wikiId, params) {
			return this.get(`wikis/${wikiId}/history`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
		*/
		getWikisStars(wikiId) {
			return this.get(`wikis/${wikiId}/stars`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-star/
		*/
		postStar(params) {
			return this.post("stars", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/remove-star/
		*/
		removeStar(starId) {
			const endpoint = `stars/${starId}`;
			return this.delete(endpoint);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-notification/
		*/
		getNotifications(params) {
			return this.get("notifications", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-notification/
		*/
		getNotificationsCount(params) {
			return this.get("notifications/count", params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
		*/
		resetNotificationsMarkAsRead() {
			return this.post("notifications/markAsRead");
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/read-notification/
		*/
		markAsReadNotification(id) {
			return this.post(`notifications/${id}/markAsRead`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
		*/
		getGitRepositories(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/git/repositories`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
		*/
		getGitRepository(projectIdOrKey, repoIdOrName) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
		*/
		getPullRequests(projectIdOrKey, repoIdOrName, params) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
		*/
		getPullRequestsCount(projectIdOrKey, repoIdOrName, params) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
		*/
		postPullRequest(projectIdOrKey, repoIdOrName, params) {
			return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
		*/
		getPullRequest(projectIdOrKey, repoIdOrName, number) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
		*/
		patchPullRequest(projectIdOrKey, repoIdOrName, number, params) {
			return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
		*/
		getPullRequestComments(projectIdOrKey, repoIdOrName, number, params) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
		*/
		postPullRequestComments(projectIdOrKey, repoIdOrName, number, params) {
			return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
		*/
		getPullRequestCommentsCount(projectIdOrKey, repoIdOrName, number) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
		*/
		patchPullRequestComments(projectIdOrKey, repoIdOrName, number, commentId, params) {
			return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/${commentId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
		*/
		getPullRequestAttachments(projectIdOrKey, repoIdOrName, number) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
		*/
		getPullRequestAttachment(projectIdOrKey, repoIdOrName, number, attachmentId) {
			return this.download(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
		*/
		deletePullRequestAttachment(projectIdOrKey, repoIdOrName, number, attachmentId) {
			return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-watching-list
		*/
		getWatchingListItems(userId, params) {
			return this.get(`users/${userId}/watchings`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/count-watching
		*/
		getWatchingListCount(userId, params) {
			return this.get(`users/${userId}/watchings/count`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-watching
		*/
		getWatchingListItem(watchId) {
			return this.get(`watchings/${watchId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-watching
		*/
		postWatchingListItem(params) {
			return this.post(`watchings`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-watching
		*/
		patchWatchingListItem(watchId, note) {
			return this.patch(`watchings/${watchId}`, { note });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-watching
		*/
		deletehWatchingListItem(watchId) {
			return this.delete(`watchings/${watchId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
		*/
		resetWatchingListItemAsRead(watchId) {
			return this.post(`watchings/${watchId}/markAsRead`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-licence
		*/
		getLicence() {
			return this.get(`space/licence`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
		*/
		getTeams(params) {
			return this.get(`teams`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-team/
		*/
		postTeam(params) {
			return this.post(`teams`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-team/
		*/
		getTeam(teamId) {
			return this.get(`teams/${teamId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/update-team/
		*/
		patchTeam(teamId, params) {
			return this.patch(`teams/${teamId}`, params);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-team/
		*/
		deleteTeam(teamId) {
			return this.delete(`teams/${teamId}`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
		*/
		getTeamIcon(teamId) {
			return this.download(`teams/${teamId}/icon`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
		*/
		getProjectTeams(projectIdOrKey) {
			return this.get(`projects/${projectIdOrKey}/teams`);
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/add-project-team/
		*/
		postProjectTeam(projectIdOrKey, teamId) {
			return this.post(`projects/${projectIdOrKey}/teams`, { teamId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
		*/
		deleteProjectTeam(projectIdOrKey, teamId) {
			return this.delete(`projects/${projectIdOrKey}/teams`, { teamId });
		}
		/**
		* https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
		*/
		getRateLimit() {
			return this.get("rateLimit");
		}
		download(path) {
			return this.request({
				method: "GET",
				path
			}).then(this.parseFileData);
		}
		upload(path, params) {
			return this.request({
				method: "POST",
				path,
				params
			}).then(this.parseJSON);
		}
		parseFileData(response) {
			return new Promise((resolve, reject) => {
				if (typeof window !== "undefined") resolve({
					body: response.body,
					url: response.url,
					blob: () => response.blob()
				});
				else {
					const disposition = response.headers.get("Content-Disposition");
					const filename = disposition ? disposition.substring(disposition.indexOf("''") + 2) : "";
					resolve({
						body: response.body,
						url: response.url,
						filename
					});
				}
			});
		}
	};

//#endregion
//#region src/oauth2.ts
	var OAuth2 = class {
		constructor(credentials, timeout, fetch) {
			this.credentials = credentials;
			this.timeout = timeout;
			this.fetch = fetch;
		}
		getAuthorizationURL(options) {
			const params = {
				client_id: this.credentials.clientId,
				response_type: "code",
				redirect_uri: options.redirectUri,
				state: options.state
			};
			return `https://${options.host}/OAuth2AccessRequest.action?` + Object.keys(params).map((key) => params[key] ? `${key}=${params[key]}` : "").filter((x) => x.length > 0).join("&");
		}
		getAccessToken(options) {
			return new Request({
				host: options.host,
				timeout: this.timeout,
				fetch: this.fetch
			}).post("oauth2/token", {
				grant_type: "authorization_code",
				code: options.code,
				client_id: this.credentials.clientId,
				client_secret: this.credentials.clientSecret,
				redirect_uri: options.redirectUri
			});
		}
		refreshAccessToken(options) {
			return new Request({
				host: options.host,
				timeout: this.timeout,
				fetch: this.fetch
			}).post("oauth2/token", {
				grant_type: "refresh_token",
				client_id: this.credentials.clientId,
				client_secret: this.credentials.clientSecret,
				refresh_token: options.refreshToken
			});
		}
	};

//#endregion
//#region src/option.ts
	var option_exports = /* @__PURE__ */ __exportAll({ Issue: () => Issue });
	let Issue;
	(function(_Issue) {
		_Issue.ParentChildType = /* @__PURE__ */ function(ParentChildType) {
			ParentChildType[ParentChildType["All"] = 0] = "All";
			ParentChildType[ParentChildType["NotChild"] = 1] = "NotChild";
			ParentChildType[ParentChildType["Child"] = 2] = "Child";
			ParentChildType[ParentChildType["NotChildNotParent"] = 3] = "NotChildNotParent";
			ParentChildType[ParentChildType["Parent"] = 4] = "Parent";
			return ParentChildType;
		}({});
	})(Issue || (Issue = {}));

//#endregion
//#region src/entity.ts
	var entity_exports = /* @__PURE__ */ __exportAll({});

//#endregion
//#region src/types.ts
	var types_exports = /* @__PURE__ */ __exportAll({
		ActivityType: () => ActivityType,
		ClassicRoleType: () => ClassicRoleType,
		CustomFieldType: () => CustomFieldType,
		NormalRoleType: () => NormalRoleType
	});
	let ClassicRoleType = /* @__PURE__ */ function(ClassicRoleType) {
		ClassicRoleType[ClassicRoleType["Admin"] = 1] = "Admin";
		ClassicRoleType[ClassicRoleType["User"] = 2] = "User";
		ClassicRoleType[ClassicRoleType["Reporter"] = 3] = "Reporter";
		ClassicRoleType[ClassicRoleType["Viewer"] = 4] = "Viewer";
		ClassicRoleType[ClassicRoleType["GuestReporter"] = 5] = "GuestReporter";
		ClassicRoleType[ClassicRoleType["GuestViewer"] = 6] = "GuestViewer";
		return ClassicRoleType;
	}({});
	let NormalRoleType = /* @__PURE__ */ function(NormalRoleType) {
		NormalRoleType[NormalRoleType["Admin"] = 1] = "Admin";
		NormalRoleType[NormalRoleType["MemberOrGuest"] = 2] = "MemberOrGuest";
		NormalRoleType[NormalRoleType["MemberOrGuestForAddIssues"] = 3] = "MemberOrGuestForAddIssues";
		NormalRoleType[NormalRoleType["MemberOrGuestForViewIssues"] = 4] = "MemberOrGuestForViewIssues";
		return NormalRoleType;
	}({});
	let ActivityType = /* @__PURE__ */ function(ActivityType) {
		ActivityType[ActivityType["Undefined"] = -1] = "Undefined";
		ActivityType[ActivityType["IssueCreated"] = 1] = "IssueCreated";
		ActivityType[ActivityType["IssueUpdated"] = 2] = "IssueUpdated";
		ActivityType[ActivityType["IssueCommented"] = 3] = "IssueCommented";
		ActivityType[ActivityType["IssueDeleted"] = 4] = "IssueDeleted";
		ActivityType[ActivityType["WikiCreated"] = 5] = "WikiCreated";
		ActivityType[ActivityType["WikiUpdated"] = 6] = "WikiUpdated";
		ActivityType[ActivityType["WikiDeleted"] = 7] = "WikiDeleted";
		ActivityType[ActivityType["FileAdded"] = 8] = "FileAdded";
		ActivityType[ActivityType["FileUpdated"] = 9] = "FileUpdated";
		ActivityType[ActivityType["FileDeleted"] = 10] = "FileDeleted";
		ActivityType[ActivityType["SvnCommitted"] = 11] = "SvnCommitted";
		ActivityType[ActivityType["GitPushed"] = 12] = "GitPushed";
		ActivityType[ActivityType["GitRepositoryCreated"] = 13] = "GitRepositoryCreated";
		ActivityType[ActivityType["IssueMultiUpdated"] = 14] = "IssueMultiUpdated";
		ActivityType[ActivityType["ProjectUserAdded"] = 15] = "ProjectUserAdded";
		ActivityType[ActivityType["ProjectUserRemoved"] = 16] = "ProjectUserRemoved";
		ActivityType[ActivityType["NotifyAdded"] = 17] = "NotifyAdded";
		ActivityType[ActivityType["PullRequestAdded"] = 18] = "PullRequestAdded";
		ActivityType[ActivityType["PullRequestUpdated"] = 19] = "PullRequestUpdated";
		ActivityType[ActivityType["PullRequestCommented"] = 20] = "PullRequestCommented";
		ActivityType[ActivityType["PullRequestMerged"] = 21] = "PullRequestMerged";
		ActivityType[ActivityType["MilestoneCreated"] = 22] = "MilestoneCreated";
		ActivityType[ActivityType["MilestoneUpdated"] = 23] = "MilestoneUpdated";
		ActivityType[ActivityType["MilestoneDeleted"] = 24] = "MilestoneDeleted";
		ActivityType[ActivityType["ProjectGroupAdded"] = 25] = "ProjectGroupAdded";
		ActivityType[ActivityType["ProjectGroupDeleted"] = 26] = "ProjectGroupDeleted";
		return ActivityType;
	}({});
	let CustomFieldType = /* @__PURE__ */ function(CustomFieldType) {
		CustomFieldType[CustomFieldType["Text"] = 1] = "Text";
		CustomFieldType[CustomFieldType["TextArea"] = 2] = "TextArea";
		CustomFieldType[CustomFieldType["Numeric"] = 3] = "Numeric";
		CustomFieldType[CustomFieldType["Date"] = 4] = "Date";
		CustomFieldType[CustomFieldType["SingleList"] = 5] = "SingleList";
		CustomFieldType[CustomFieldType["MultipleList"] = 6] = "MultipleList";
		CustomFieldType[CustomFieldType["CheckBox"] = 7] = "CheckBox";
		CustomFieldType[CustomFieldType["Radio"] = 8] = "Radio";
		return CustomFieldType;
	}({});

//#endregion
exports.Backlog = Backlog;
Object.defineProperty(exports, 'Entity', {
  enumerable: true,
  get: function () {
    return entity_exports;
  }
});
Object.defineProperty(exports, 'Error', {
  enumerable: true,
  get: function () {
    return error_exports;
  }
});
exports.OAuth2 = OAuth2;
Object.defineProperty(exports, 'Option', {
  enumerable: true,
  get: function () {
    return option_exports;
  }
});
Object.defineProperty(exports, 'Types', {
  enumerable: true,
  get: function () {
    return types_exports;
  }
});
return exports;
})({});