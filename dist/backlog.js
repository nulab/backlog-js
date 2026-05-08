var Backlog = (function (exports) {

}, { "./request": 7 }],2: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });

}, {}], 3: [function (require, module, exports) {
	"use strict";
	var __extends = (this && this.__extends) || (function () {
		var extendStatics = function (d, b) {
			extendStatics = Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
				function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== "function" && b !== null)
				throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() { this.constructor = d; }
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnexpectedError = exports.BacklogAuthError = exports.BacklogApiError = exports.BacklogError = void 0;
	var BacklogError = /** @class */ (function (_super) {
		__extends(BacklogError, _super);
		function BacklogError(name, response, body) {
			var _this = _super.call(this, response.statusText) || this;
			_this._name = name;
			_this._url = response.url;
			_this._status = response.status;
			_this._body = body;
			_this._response = response;
			return _this;
		}
		Object.defineProperty(BacklogError.prototype, "name", {
			get: function () {
				return this._name;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(BacklogError.prototype, "url", {
			get: function () {
				return this._url;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(BacklogError.prototype, "status", {
			get: function () {
				return this._status;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(BacklogError.prototype, "body", {
			get: function () {
				return this._body;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(BacklogError.prototype, "response", {
			get: function () {
				return this._response;
			},
			enumerable: false,
			configurable: true
		});
		return BacklogError;
	}(Error));
	exports.BacklogError = BacklogError;
	var BacklogApiError = /** @class */ (function (_super) {
		__extends(BacklogApiError, _super);
		function BacklogApiError(response, body) {
			return _super.call(this, 'BacklogApiError', response, body) || this;
		}
		return BacklogApiError;
	}(BacklogError));
	exports.BacklogApiError = BacklogApiError;
	var BacklogAuthError = /** @class */ (function (_super) {
		__extends(BacklogAuthError, _super);
		function BacklogAuthError(response, body) {
			return _super.call(this, 'BacklogAuthError', response, body) || this;
		}
		return BacklogAuthError;
	}(BacklogError));
	exports.BacklogAuthError = BacklogAuthError;
	var UnexpectedError = /** @class */ (function (_super) {
		__extends(UnexpectedError, _super);
		function UnexpectedError(response) {
			return _super.call(this, 'UnexpectedError', response) || this;
		}
		return UnexpectedError;
	}(BacklogError));
	exports.UnexpectedError = UnexpectedError;

}, {}], 4: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Error = exports.Types = exports.Entity = exports.Option = exports.OAuth2 = exports.Backlog = void 0;
	var backlog_1 = require("./backlog");
	exports.Backlog = backlog_1.default;
	var oauth2_1 = require("./oauth2");
	exports.OAuth2 = oauth2_1.default;
	var Option = require("./option");
	exports.Option = Option;
	var Entity = require("./entity");
	exports.Entity = Entity;
	var Types = require("./types");
	exports.Types = Types;
	var Error = require("./error");
	exports.Error = Error;

}, { "./backlog": 1, "./entity": 2, "./error": 3, "./oauth2": 5, "./option": 6, "./types": 8 }], 5: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var request_1 = require("./request");
	var OAuth2 = /** @class */ (function () {
		function OAuth2(credentials, timeout) {
			this.credentials = credentials;
			this.timeout = timeout;
		}
		OAuth2.prototype.getAuthorizationURL = function (options) {
			var params = {
				client_id: this.credentials.clientId,
				response_type: 'code',
				redirect_uri: options.redirectUri,
				state: options.state
			};
			return "https://".concat(options.host, "/OAuth2AccessRequest.action?") +
				Object.keys(params)
					.map(function (key) { return params[key] ? "".concat(key, "=").concat(params[key]) : ''; })
					.filter(function (x) { return x.length > 0; })
					.join('&');
		};
		OAuth2.prototype.getAccessToken = function (options) {
			return new request_1.default({
				host: options.host, timeout: this.timeout
			}).post('oauth2/token', {
				grant_type: 'authorization_code',
				code: options.code,
				client_id: this.credentials.clientId,
				client_secret: this.credentials.clientSecret,
				redirect_uri: options.redirectUri
			});
		};
		OAuth2.prototype.refreshAccessToken = function (options) {
			return new request_1.default({
				host: options.host, timeout: this.timeout
			}).post('oauth2/token', {
				grant_type: "refresh_token",
				client_id: this.credentials.clientId,
				client_secret: this.credentials.clientSecret,
				refresh_token: options.refreshToken
			});
		};
		return OAuth2;
	}());
	exports.default = OAuth2;

}, { "./request": 7 }], 6: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Issue = void 0;
	var Issue;
	(function (Issue) {
		var ParentChildType;
		(function (ParentChildType) {
			ParentChildType[ParentChildType["All"] = 0] = "All";
			ParentChildType[ParentChildType["NotChild"] = 1] = "NotChild";
			ParentChildType[ParentChildType["Child"] = 2] = "Child";
			ParentChildType[ParentChildType["NotChildNotParent"] = 3] = "NotChildNotParent";
			ParentChildType[ParentChildType["Parent"] = 4] = "Parent";
		})(ParentChildType = Issue.ParentChildType || (Issue.ParentChildType = {}));
	})(Issue || (exports.Issue = Issue = {}));

}, {}], 7: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Error = require("./error");
	var qs = require("qs");
	var Request = /** @class */ (function () {
		function Request(configure) {
			this.configure = configure;
		}
		Request.prototype.get = function (path, params) {
			return this.request({ method: 'GET', path: path, params: params }).then(this.parseJSON);
		};
		Request.prototype.post = function (path, params) {
			return this.request({ method: 'POST', path: path, params: params }).then(this.parseJSON);
		};
		Request.prototype.put = function (path, params) {
			return this.request({ method: 'PUT', path: path, params: params }).then(this.parseJSON);
		};
		Request.prototype.patch = function (path, params) {
			return this.request({ method: 'PATCH', path: path, params: params }).then(this.parseJSON);
		};
		Request.prototype.delete = function (path, params) {
			return this.request({ method: 'DELETE', path: path, params: params }).then(this.parseJSON);
		};
		Request.prototype.request = function (options) {
			var method = options.method, path = options.path, _a = options.params, params = _a === void 0 ? {} : _a;
			var _b = this.configure, apiKey = _b.apiKey, accessToken = _b.accessToken, timeout = _b.timeout;
			var query = apiKey ? { apiKey: apiKey } : {};
			var init = { method: method, headers: {} };
			if (timeout) {
				init['timeout'] = timeout;
			}
			if (!apiKey && accessToken) {
				init.headers['Authorization'] = 'Bearer ' + accessToken;
			}
			if (typeof window !== 'undefined') {
				init.mode = 'cors';
			}
			if (method !== 'GET') {
				if (params instanceof FormData) {
					init.body = params;
				}
				else {
					init.headers['Content-type'] = 'application/x-www-form-urlencoded';
					init.body = this.toQueryString(params);
				}
			}
			else {
				Object.keys(params).forEach(function (key) { return query[key] = params[key]; });
			}
			var queryStr = this.toQueryString(query);
			var url = "".concat(this.restBaseURL, "/").concat(path) + (queryStr.length > 0 ? "?".concat(queryStr) : '');
			return fetch(url, init).then(this.checkStatus);
		};
		Request.prototype.checkStatus = function (response) {
			return new Promise(function (resolve, reject) {
				if (200 <= response.status && response.status < 300) {
					resolve(response);
				}
				else {
					response.json().then(function (data) {
						if (response.status === 401) {
							reject(new Error.BacklogAuthError(response, data));
						}
						else {
							reject(new Error.BacklogApiError(response, data));
						}
					}).catch(function (err) { return reject(new Error.UnexpectedError(response)); });
				}
			});
		};
		Request.prototype.parseJSON = function (response) {
			if (response.status === 204 || response.headers.get("Content-Length") === "0") {
				return Promise.resolve(undefined);
			}
			return response.json();
		};
		Request.prototype.toQueryString = function (params) {
			var formatted = {};
			Object.keys(params).forEach(function (key) {
				var value = params[key];
				if (key.startsWith('customField_') && Array.isArray(value)) {
					// Backlog API doesn't apply bracket-array syntax for customField_* params,
					// so we generate explicit indices: key[0], key[1], ...
					value.forEach(function (v, i) {
						formatted["".concat(key, "[").concat(i, "]")] = v;
					});
				}
				else {
					formatted[key] = value;
				}
			});
			return qs.stringify(formatted, { arrayFormat: 'brackets' });
		};
		Object.defineProperty(Request.prototype, "webAppBaseURL", {
			get: function () {
				return "https://".concat(this.configure.host);
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(Request.prototype, "restBaseURL", {
			get: function () {
				return "".concat(this.webAppBaseURL, "/api/v2");
			},
			enumerable: false,
			configurable: true
		});
		return Request;
	}());
	exports.default = Request;

}, { "./error": 3, "qs": 47 }], 8: [function (require, module, exports) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CustomFieldType = exports.ActivityType = exports.NormalRoleType = exports.ClassicRoleType = void 0;
	var ClassicRoleType;
	(function (ClassicRoleType) {
		ClassicRoleType[ClassicRoleType["Admin"] = 1] = "Admin";
		ClassicRoleType[ClassicRoleType["User"] = 2] = "User";
		ClassicRoleType[ClassicRoleType["Reporter"] = 3] = "Reporter";
		ClassicRoleType[ClassicRoleType["Viewer"] = 4] = "Viewer";
		ClassicRoleType[ClassicRoleType["GuestReporter"] = 5] = "GuestReporter";
		ClassicRoleType[ClassicRoleType["GuestViewer"] = 6] = "GuestViewer";
	})(ClassicRoleType || (exports.ClassicRoleType = ClassicRoleType = {}));
	var NormalRoleType;
	(function (NormalRoleType) {
		NormalRoleType[NormalRoleType["Admin"] = 1] = "Admin";
		NormalRoleType[NormalRoleType["MemberOrGuest"] = 2] = "MemberOrGuest";
		NormalRoleType[NormalRoleType["MemberOrGuestForAddIssues"] = 3] = "MemberOrGuestForAddIssues";
		NormalRoleType[NormalRoleType["MemberOrGuestForViewIssues"] = 4] = "MemberOrGuestForViewIssues";
	})(NormalRoleType || (exports.NormalRoleType = NormalRoleType = {}));
	var ActivityType;
	(function (ActivityType) {
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
	})(ActivityType || (exports.ActivityType = ActivityType = {}));
	var CustomFieldType;
	(function (CustomFieldType) {
		CustomFieldType[CustomFieldType["Text"] = 1] = "Text";
		CustomFieldType[CustomFieldType["TextArea"] = 2] = "TextArea";
		CustomFieldType[CustomFieldType["Numeric"] = 3] = "Numeric";
		CustomFieldType[CustomFieldType["Date"] = 4] = "Date";
		CustomFieldType[CustomFieldType["SingleList"] = 5] = "SingleList";
		CustomFieldType[CustomFieldType["MultipleList"] = 6] = "MultipleList";
		CustomFieldType[CustomFieldType["CheckBox"] = 7] = "CheckBox";
		CustomFieldType[CustomFieldType["Radio"] = 8] = "Radio";
	})(CustomFieldType || (exports.CustomFieldType = CustomFieldType = {}));

}, {}], 9: [function (require, module, exports) {

}, {}], 10: [function (require, module, exports) {
	'use strict';

	var bind = require('function-bind');

	var $apply = require('./functionApply');
	var $call = require('./functionCall');
	var $reflectApply = require('./reflectApply');

	/** @type {import('./actualApply')} */
	module.exports = $reflectApply || bind.call($call, $apply);

}, { "./functionApply": 11, "./functionCall": 12, "./reflectApply": 14, "function-bind": 27 }], 11: [function (require, module, exports) {
	'use strict';

	/** @type {import('./functionApply')} */
	module.exports = Function.prototype.apply;

}, {}], 12: [function (require, module, exports) {
	'use strict';

	/** @type {import('./functionCall')} */
	module.exports = Function.prototype.call;

}, {}], 13: [function (require, module, exports) {
	'use strict';

	var bind = require('function-bind');
	var $TypeError = require('es-errors/type');

	var $call = require('./functionCall');
	var $actualApply = require('./actualApply');

	/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
	module.exports = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== 'function') {
			throw new $TypeError('a function is required');
		}
		return $actualApply(bind, $call, args);
	};

}, { "./actualApply": 10, "./functionCall": 12, "es-errors/type": 23, "function-bind": 27 }], 14: [function (require, module, exports) {
	'use strict';

	/** @type {import('./reflectApply')} */
	module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

}, {}], 15: [function (require, module, exports) {
	'use strict';

	var GetIntrinsic = require('get-intrinsic');

	var callBindBasic = require('call-bind-apply-helpers');

	/** @type {(thisArg: string, searchString: string, position?: number) => number} */
	var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

	/** @type {import('.')} */
	module.exports = function callBoundIntrinsic(name, allowMissing) {
		/* eslint no-extra-parens: 0 */

		var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBindBasic(/** @type {const} */([intrinsic]));
		}
		return intrinsic;
	};

}, { "call-bind-apply-helpers": 13, "get-intrinsic": 28 }], 16: [function (require, module, exports) {
	'use strict';

	var callBind = require('call-bind-apply-helpers');
	var gOPD = require('gopd');

	var hasProtoAccessor;
	try {
		// eslint-disable-next-line no-extra-parens, no-proto
		hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
			throw e;
		}
	}

	// eslint-disable-next-line no-extra-parens
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */('__proto__'));

	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;

	/** @type {import('./get')} */
	module.exports = desc && typeof desc.get === 'function'
		? callBind([desc.get])
		: typeof $getPrototypeOf === 'function'
			? /** @type {import('./get')} */ function getDunder(value) {
				// eslint-disable-next-line eqeqeq
				return $getPrototypeOf(value == null ? value : $Object(value));
			}
			: false;

}, { "call-bind-apply-helpers": 13, "gopd": 33 }], 17: [function (require, module, exports) {
	'use strict';

	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	module.exports = $defineProperty;

}, {}], 18: [function (require, module, exports) {
	'use strict';

	/** @type {import('./eval')} */
	module.exports = EvalError;

}, {}], 19: [function (require, module, exports) {
	'use strict';

	/** @type {import('.')} */
	module.exports = Error;

}, {}], 20: [function (require, module, exports) {
	'use strict';

	/** @type {import('./range')} */
	module.exports = RangeError;

}, {}], 21: [function (require, module, exports) {
	'use strict';

	/** @type {import('./ref')} */
	module.exports = ReferenceError;

}, {}], 22: [function (require, module, exports) {
	'use strict';

	/** @type {import('./syntax')} */
	module.exports = SyntaxError;

}, {}], 23: [function (require, module, exports) {
	'use strict';

	/** @type {import('./type')} */
	module.exports = TypeError;

}, {}], 24: [function (require, module, exports) {
	'use strict';

	/** @type {import('./uri')} */
	module.exports = URIError;

}, {}], 25: [function (require, module, exports) {
	'use strict';

	/** @type {import('.')} */
	module.exports = Object;

}, {}], 26: [function (require, module, exports) {
	'use strict';

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr = Object.prototype.toString;
	var max = Math.max;
	var funcType = '[object Function]';

	var concatty = function concatty(a, b) {
		var arr = [];

		for (var i = 0; i < a.length; i += 1) {
			arr[i] = a[i];
		}
		for (var j = 0; j < b.length; j += 1) {
			arr[j + a.length] = b[j];
		}

		return arr;
	};

	var slicy = function slicy(arrLike, offset) {
		var arr = [];
		for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
			arr[j] = arrLike[i];
		}
		return arr;
	};

	var joiny = function (arr, joiner) {
		var str = '';
		for (var i = 0; i < arr.length; i += 1) {
			str += arr[i];
			if (i + 1 < arr.length) {
				str += joiner;
			}
		}
		return str;
	};

	module.exports = function bind(that) {
		var target = this;
		if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
			throw new TypeError(ERROR_MESSAGE + target);
		}
		var args = slicy(arguments, 1);

		var bound;
		var binder = function () {
			if (this instanceof bound) {
				var result = target.apply(
					this,
					concatty(args, arguments)
				);
				if (Object(result) === result) {
					return result;
				}
				return this;
			}
			return target.apply(
				that,
				concatty(args, arguments)
			);

		};

		var boundLength = max(0, target.length - args.length);
		var boundArgs = [];
		for (var i = 0; i < boundLength; i++) {
			boundArgs[i] = '$' + i;
		}

		bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

		if (target.prototype) {
			var Empty = function Empty() { };
			Empty.prototype = target.prototype;
			bound.prototype = new Empty();
			Empty.prototype = null;
		}

		return bound;
	};

}, {}], 27: [function (require, module, exports) {
	'use strict';

	var implementation = require('./implementation');

	module.exports = Function.prototype.bind || implementation;

}, { "./implementation": 26 }], 28: [function (require, module, exports) {
	'use strict';

	var undefined;

	var $Object = require('es-object-atoms');

	var $Error = require('es-errors');
	var $EvalError = require('es-errors/eval');
	var $RangeError = require('es-errors/range');
	var $ReferenceError = require('es-errors/ref');
	var $SyntaxError = require('es-errors/syntax');
	var $TypeError = require('es-errors/type');
	var $URIError = require('es-errors/uri');

	var abs = require('math-intrinsics/abs');
	var floor = require('math-intrinsics/floor');
	var max = require('math-intrinsics/max');
	var min = require('math-intrinsics/min');
	var pow = require('math-intrinsics/pow');
	var round = require('math-intrinsics/round');
	var sign = require('math-intrinsics/sign');

	var $Function = Function;

	// eslint-disable-next-line consistent-return
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) { }
	};

	var $gOPD = require('gopd');
	var $defineProperty = require('es-define-property');

	var throwTypeError = function () {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
				arguments.callee; // IE 8 does not throw here
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
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
	}
	return value;
};

}, { "call-bind-apply-helpers/functionApply": 11, "call-bind-apply-helpers/functionCall": 12, "es-define-property": 17, "es-errors": 19, "es-errors/eval": 18, "es-errors/range": 20, "es-errors/ref": 21, "es-errors/syntax": 22, "es-errors/type": 23, "es-errors/uri": 24, "es-object-atoms": 25, "function-bind": 27, "get-proto": 31, "get-proto/Object.getPrototypeOf": 29, "get-proto/Reflect.getPrototypeOf": 30, "gopd": 33, "has-symbols": 34, "hasown": 36, "math-intrinsics/abs": 37, "math-intrinsics/floor": 38, "math-intrinsics/max": 40, "math-intrinsics/min": 41, "math-intrinsics/pow": 42, "math-intrinsics/round": 43, "math-intrinsics/sign": 44 }], 29: [function (require, module, exports) {
	'use strict';

	var $Object = require('es-object-atoms');

	/** @type {import('./Object.getPrototypeOf')} */
	module.exports = $Object.getPrototypeOf || null;

}, { "es-object-atoms": 25 }], 30: [function (require, module, exports) {
	'use strict';

	/** @type {import('./Reflect.getPrototypeOf')} */
	module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;

}, {}], 31: [function (require, module, exports) {
	'use strict';

	var reflectGetProto = require('./Reflect.getPrototypeOf');
	var originalGetProto = require('./Object.getPrototypeOf');

	var getDunderProto = require('dunder-proto/get');

	/** @type {import('.')} */
	module.exports = reflectGetProto
		? function getProto(O) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return reflectGetProto(O);
		}
		: originalGetProto
			? function getProto(O) {
				if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
					throw new TypeError('getProto: not an object');
				}
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return originalGetProto(O);
			}
			: getDunderProto
				? function getProto(O) {
					// @ts-expect-error TS can't narrow inside a closure, for some reason
					return getDunderProto(O);
				}
				: null;

}, { "./Object.getPrototypeOf": 29, "./Reflect.getPrototypeOf": 30, "dunder-proto/get": 16 }], 32: [function (require, module, exports) {
	'use strict';

	/** @type {import('./gOPD')} */
	module.exports = Object.getOwnPropertyDescriptor;

}, {}], 33: [function (require, module, exports) {
	'use strict';

	/** @type {import('.')} */
	var $gOPD = require('./gOPD');

	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	module.exports = $gOPD;

}, { "./gOPD": 32 }], 34: [function (require, module, exports) {
	'use strict';

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = require('./shams');

	/** @type {import('.')} */
	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};

}, { "./shams": 35 }], 35: [function (require, module, exports) {
	'use strict';

	/** @type {import('./shams')} */
	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	module.exports = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};

}, {}], 36: [function (require, module, exports) {
	'use strict';

	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind = require('function-bind');

	/** @type {import('.')} */
	module.exports = bind.call(call, $hasOwn);

}, { "function-bind": 27 }], 37: [function (require, module, exports) {
	'use strict';

	/** @type {import('./abs')} */
	module.exports = Math.abs;

}, {}], 38: [function (require, module, exports) {
	'use strict';

	/** @type {import('./floor')} */
	module.exports = Math.floor;

}, {}], 39: [function (require, module, exports) {
	'use strict';

	/** @type {import('./isNaN')} */
	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};

}, {}], 40: [function (require, module, exports) {
	'use strict';

	/** @type {import('./max')} */
	module.exports = Math.max;

}, {}], 41: [function (require, module, exports) {
	'use strict';

	/** @type {import('./min')} */
	module.exports = Math.min;

}, {}], 42: [function (require, module, exports) {
	'use strict';

	/** @type {import('./pow')} */
	module.exports = Math.pow;

}, {}], 43: [function (require, module, exports) {
	'use strict';

	/** @type {import('./round')} */
	module.exports = Math.round;

}, {}], 44: [function (require, module, exports) {
	'use strict';

	var $isNaN = require('./isNaN');

	/** @type {import('./sign')} */
	module.exports = function sign(number) {
		if ($isNaN(number) || number === 0) {
			return number;
		}
		return number < 0 ? -1 : +1;
	};

}, { "./isNaN": 39 }], 45: [function (require, module, exports) {
	(function (global) {
		(function () {
			var hasMap = typeof Map === 'function' && Map.prototype;
			var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
			var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
			var mapForEach = hasMap && Map.prototype.forEach;
			var hasSet = typeof Set === 'function' && Set.prototype;
			var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
			var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
			var setForEach = hasSet && Set.prototype.forEach;
			var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
			var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
			var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
			var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
			var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
			var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
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
			var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
			var gOPS = Object.getOwnPropertySymbols;
			var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
			var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
			// ie, `has-tostringtag/shams
			var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
				? Symbol.toStringTag
				: null;
			var isEnumerable = Object.prototype.propertyIsEnumerable;

			var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
				[].__proto__ === Array.prototype // eslint-disable-line no-proto
					? function (O) {
						return O.__proto__; // eslint-disable-line no-proto
					}
					: null
			);

			function addNumericSeparator(num, str) {
				if (
					num === Infinity
					|| num === -Infinity
					|| num !== num
					|| (num && num > -1000 && num < 1000)
					|| $test.call(/e/, str)
				) {
					return str;
				}
				var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
				if (typeof num === 'number') {
					var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
					if (int !== num) {
						var intStr = String(int);
						var dec = $slice.call(str, intStr.length + 1);
						return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
					}
				}
				return $replace.call(str, sepRegex, '$&_');
			}

			var utilInspect = require('./util.inspect');
			var inspectCustom = utilInspect.custom;
			var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

			var quotes = {
				__proto__: null,
				'double': '"',
				single: "'"
			};
			var quoteREs = {
				__proto__: null,
				'double': /(["\\])/g,
				single: /(['\\])/g
			};

			module.exports = function inspect_(obj, options, depth, seen) {
				var opts = options || {};

				if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
					throw new TypeError('option "quoteStyle" must be "single" or "double"');
				}
				if (
					has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
						? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
						: opts.maxStringLength !== null
					)
				) {
					throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
				}
				var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
				if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
					throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
				}

				if (
					has(opts, 'indent')
					&& opts.indent !== null
					&& opts.indent !== '\t'
					&& !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
				) {
					throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
				}
				if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
					throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
				}
				var numericSeparator = opts.numericSeparator;

				if (typeof obj === 'undefined') {
					return 'undefined';
				}
				if (obj === null) {
					return 'null';
				}
				if (typeof obj === 'boolean') {
					return obj ? 'true' : 'false';
				}

				if (typeof obj === 'string') {
					return inspectString(obj, opts);
				}
				if (typeof obj === 'number') {
					if (obj === 0) {
						return Infinity / obj > 0 ? '0' : '-0';
					}
					var str = String(obj);
					return numericSeparator ? addNumericSeparator(obj, str) : str;
				}
				if (typeof obj === 'bigint') {
					var bigIntStr = String(obj) + 'n';
					return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
				}

				var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
				if (typeof depth === 'undefined') { depth = 0; }
				if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
					return isArray(obj) ? '[Array]' : '[Object]';
				}

				var indent = getIndent(opts, depth);

				if (typeof seen === 'undefined') {
					seen = [];
				} else if (indexOf(seen, obj) >= 0) {
					return '[Circular]';
				}

				function inspect(value, from, noIndent) {
					if (from) {
						seen = $arrSlice.call(seen);
						seen.push(from);
					}
					if (noIndent) {
						var newOpts = {
							depth: opts.depth
						};
						if (has(opts, 'quoteStyle')) {
							newOpts.quoteStyle = opts.quoteStyle;
						}
						return inspect_(value, newOpts, depth + 1, seen);
					}
					return inspect_(value, opts, depth + 1, seen);
				}

				if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
					var name = nameOf(obj);
					var keys = arrObjKeys(obj, inspect);
					return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
				}
				if (isSymbol(obj)) {
					var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
					return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
				}
				if (isElement(obj)) {
					var s = '<' + $toLowerCase.call(String(obj.nodeName));
					var attrs = obj.attributes || [];
					for (var i = 0; i < attrs.length; i++) {
						s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
					}
					s += '>';
					if (obj.childNodes && obj.childNodes.length) { s += '...'; }
					s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
					return s;
				}
				if (isArray(obj)) {
					if (obj.length === 0) { return '[]'; }
					var xs = arrObjKeys(obj, inspect);
					if (indent && !singleLineValues(xs)) {
						return '[' + indentedJoin(xs, indent) + ']';
					}
					return '[ ' + $join.call(xs, ', ') + ' ]';
				}
				if (isError(obj)) {
					var parts = arrObjKeys(obj, inspect);
					if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
						return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
					}
					if (parts.length === 0) { return '[' + String(obj) + ']'; }
					return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
				}
				if (typeof obj === 'object' && customInspect) {
					if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
						return utilInspect(obj, { depth: maxDepth - depth });
					} else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
						return obj.inspect();
					}
				}
				if (isMap(obj)) {
					var mapParts = [];
					if (mapForEach) {
						mapForEach.call(obj, function (value, key) {
							mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
						});
					}
					return collectionOf('Map', mapSize.call(obj), mapParts, indent);
				}
				if (isSet(obj)) {
					var setParts = [];
					if (setForEach) {
						setForEach.call(obj, function (value) {
							setParts.push(inspect(value, obj));
						});
					}
					return collectionOf('Set', setSize.call(obj), setParts, indent);
				}
				if (isWeakMap(obj)) {
					return weakCollectionOf('WeakMap');
				}
				if (isWeakSet(obj)) {
					return weakCollectionOf('WeakSet');
				}
				if (isWeakRef(obj)) {
					return weakCollectionOf('WeakRef');
				}
				if (isNumber(obj)) {
					return markBoxed(inspect(Number(obj)));
				}
				if (isBigInt(obj)) {
					return markBoxed(inspect(bigIntValueOf.call(obj)));
				}
				if (isBoolean(obj)) {
					return markBoxed(booleanValueOf.call(obj));
				}
				if (isString(obj)) {
					return markBoxed(inspect(String(obj)));
				}
				// note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
				/* eslint-env browser */
				if (typeof window !== 'undefined' && obj === window) {
					return '{ [object Window] }';
				}
				if (
					(typeof globalThis !== 'undefined' && obj === globalThis)
					|| (typeof global !== 'undefined' && obj === global)
				) {
					return '{ [object globalThis] }';
				}
				if (!isDate(obj) && !isRegExp(obj)) {
					var ys = arrObjKeys(obj, inspect);
					var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
					var protoTag = obj instanceof Object ? '' : 'null prototype';
					var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
					var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
					var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
					if (ys.length === 0) { return tag + '{}'; }
					if (indent) {
						return tag + '{' + indentedJoin(ys, indent) + '}';
					}
					return tag + '{ ' + $join.call(ys, ', ') + ' }';
				}
				return String(obj);
			};

			function wrapQuotes(s, defaultStyle, opts) {
				var style = opts.quoteStyle || defaultStyle;
				var quoteChar = quotes[style];
				return quoteChar + s + quoteChar;
			}

			function quote(s) {
				return $replace.call(String(s), /"/g, '&quot;');
			}

			function canTrustToString(obj) {
				return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
			}
			function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
			function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
			function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
			function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
			function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
			function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
			function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

			// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
			function isSymbol(obj) {
				if (hasShammedSymbols) {
					return obj && typeof obj === 'object' && obj instanceof Symbol;
				}
				if (typeof obj === 'symbol') {
					return true;
				}
				if (!obj || typeof obj !== 'object' || !symToString) {
					return false;
				}
				try {
					symToString.call(obj);
					return true;
				} catch (e) { }
				return false;
			}

			function isBigInt(obj) {
				if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
					return false;
				}
				try {
					bigIntValueOf.call(obj);
					return true;
				} catch (e) { }
				return false;
			}

			var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
			function has(obj, key) {
				return hasOwn.call(obj, key);
			}

			function toStr(obj) {
				return objectToString.call(obj);
			}

			function nameOf(f) {
				if (f.name) { return f.name; }
				var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
				if (m) { return m[1]; }
				return null;
			}

			function indexOf(xs, x) {
				if (xs.indexOf) { return xs.indexOf(x); }
				for (var i = 0, l = xs.length; i < l; i++) {
					if (xs[i] === x) { return i; }
				}
				return -1;
			}

			function isMap(x) {
				if (!mapSize || !x || typeof x !== 'object') {
					return false;
				}
				try {
					mapSize.call(x);
					try {
						setSize.call(x);
					} catch (s) {
						return true;
					}
					return x instanceof Map; // core-js workaround, pre-v2.5.0
				} catch (e) { }
				return false;
			}

			function isWeakMap(x) {
				if (!weakMapHas || !x || typeof x !== 'object') {
					return false;
				}
				try {
					weakMapHas.call(x, weakMapHas);
					try {
						weakSetHas.call(x, weakSetHas);
					} catch (s) {
						return true;
					}
					return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
				} catch (e) { }
				return false;
			}

			function isWeakRef(x) {
				if (!weakRefDeref || !x || typeof x !== 'object') {
					return false;
				}
				try {
					weakRefDeref.call(x);
					return true;
				} catch (e) { }
				return false;
			}

			function isSet(x) {
				if (!setSize || !x || typeof x !== 'object') {
					return false;
				}
				try {
					setSize.call(x);
					try {
						mapSize.call(x);
					} catch (m) {
						return true;
					}
					return x instanceof Set; // core-js workaround, pre-v2.5.0
				} catch (e) { }
				return false;
			}

			function isWeakSet(x) {
				if (!weakSetHas || !x || typeof x !== 'object') {
					return false;
				}
				try {
					weakSetHas.call(x, weakSetHas);
					try {
						weakMapHas.call(x, weakMapHas);
					} catch (s) {
						return true;
					}
					return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
				} catch (e) { }
				return false;
			}

			function isElement(x) {
				if (!x || typeof x !== 'object') { return false; }
				if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
					return true;
				}
				return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
			}

			function inspectString(str, opts) {
				if (str.length > opts.maxStringLength) {
					var remaining = str.length - opts.maxStringLength;
					var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
					return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
				}
				var quoteRE = quoteREs[opts.quoteStyle || 'single'];
				quoteRE.lastIndex = 0;
				// eslint-disable-next-line no-control-regex
				var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
				return wrapQuotes(s, 'single', opts);
			}

			function lowbyte(c) {
				var n = c.charCodeAt(0);
				var x = {
					8: 'b',
					9: 't',
					10: 'n',
					12: 'f',
					13: 'r'
				}[n];
				if (x) { return '\\' + x; }
				return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
			}

			function markBoxed(str) {
				return 'Object(' + str + ')';
			}

			function weakCollectionOf(type) {
				return type + ' { ? }';
			}

			function collectionOf(type, size, entries, indent) {
				var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
				return type + ' (' + size + ') {' + joinedEntries + '}';
			}

			function singleLineValues(xs) {
				for (var i = 0; i < xs.length; i++) {
					if (indexOf(xs[i], '\n') >= 0) {
						return false;
					}
				}
				return true;
			}

			function getIndent(opts, depth) {
				var baseIndent;
				if (opts.indent === '\t') {
					baseIndent = '\t';
				} else if (typeof opts.indent === 'number' && opts.indent > 0) {
					baseIndent = $join.call(Array(opts.indent + 1), ' ');
				} else {
					return null;
				}
				return {
					base: baseIndent,
					prev: $join.call(Array(depth + 1), baseIndent)
				};
			}

			function indentedJoin(xs, indent) {
				if (xs.length === 0) { return ''; }
				var lineJoiner = '\n' + indent.prev + indent.base;
				return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
			}

			function arrObjKeys(obj, inspect) {
				var isArr = isArray(obj);
				var xs = [];
				if (isArr) {
					xs.length = obj.length;
					for (var i = 0; i < obj.length; i++) {
						xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
					}
				}
				var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
				var symMap;
				if (hasShammedSymbols) {
					symMap = {};
					for (var k = 0; k < syms.length; k++) {
						symMap['$' + syms[k]] = syms[k];
					}
				}

				for (var key in obj) { // eslint-disable-line no-restricted-syntax
					if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
					if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
					if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
						// this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
						continue; // eslint-disable-line no-restricted-syntax, no-continue
					} else if ($test.call(/[^\w$]/, key)) {
						xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
					} else {
						xs.push(key + ': ' + inspect(obj[key], obj));
					}
				}
				if (typeof gOPS === 'function') {
					for (var j = 0; j < syms.length; j++) {
						if (isEnumerable.call(obj, syms[j])) {
							xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
						}
					}
				}
				return xs;
			}

		}).call(this)
	}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
}, { "./util.inspect": 9 }], 46: [function (require, module, exports) {
	'use strict';

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;

	var Format = {
		RFC1738: 'RFC1738',
		RFC3986: 'RFC3986'
	};

	module.exports = {
		'default': Format.RFC3986,
		formatters: {
			RFC1738: function (value) {
				return replace.call(value, percentTwenties, '+');
			},
			RFC3986: function (value) {
				return String(value);
			}
		},
		RFC1738: Format.RFC1738,
		RFC3986: Format.RFC3986
	};

}, {}], 47: [function (require, module, exports) {
	'use strict';

	var stringify = require('./stringify');
	var parse = require('./parse');
	var formats = require('./formats');

	module.exports = {
		formats: formats,
		parse: parse,
		stringify: stringify
	};

}, { "./formats": 46, "./parse": 48, "./stringify": 49 }], 48: [function (require, module, exports) {
	'use strict';

	var utils = require('./utils');

	var has = Object.prototype.hasOwnProperty;
	var isArray = Array.isArray;

	var defaults = {
		allowDots: false,
		allowEmptyArrays: false,
		allowPrototypes: false,
		allowSparse: false,
		arrayLimit: 20,
		charset: 'utf-8',
		charsetSentinel: false,
		comma: false,
		decodeDotInKeys: false,
		decoder: utils.decode,
		delimiter: '&',
		depth: 5,
		duplicates: 'combine',
		ignoreQueryPrefix: false,
		interpretNumericEntities: false,
		parameterLimit: 1000,
		parseArrays: true,
		plainObjects: false,
		strictDepth: false,
		strictNullHandling: false,
		throwOnLimitExceeded: false
	};

	var interpretNumericEntities = function (str) {
		return str.replace(/&#(\d+);/g, function ($0, numberStr) {
			return String.fromCharCode(parseInt(numberStr, 10));
		});
	};

	var parseArrayValue = function (val, options, currentArrayLength) {
		if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
			return val.split(',');
		}

		if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
			throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
		}

		return val;
	};

	// This is what browsers will submit when the ✓ character occurs in an
	// application/x-www-form-urlencoded body and the encoding of the page containing
	// the form is iso-8859-1, or when the submitted form has an accept-charset
	// attribute of iso-8859-1. Presumably also with other charsets that do not contain
	// the ✓ character, such as us-ascii.
	var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

	// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
	var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

	var parseValues = function parseQueryStringValues(str, options) {
		var obj = { __proto__: null };

		var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
		cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');

		var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
		var parts = cleanStr.split(
			options.delimiter,
			options.throwOnLimitExceeded ? limit + 1 : limit
		);

		if (options.throwOnLimitExceeded && parts.length > limit) {
			throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
		}

		var skipIndex = -1; // Keep track of where the utf8 sentinel was found
		var i;

		var charset = options.charset;
		if (options.charsetSentinel) {
			for (i = 0; i < parts.length; ++i) {
				if (parts[i].indexOf('utf8=') === 0) {
					if (parts[i] === charsetSentinel) {
						charset = 'utf-8';
					} else if (parts[i] === isoSentinel) {
						charset = 'iso-8859-1';
					}
					skipIndex = i;
					i = parts.length; // The eslint settings do not allow break;
				}
			}
		}

		for (i = 0; i < parts.length; ++i) {
			if (i === skipIndex) {
				continue;
			}
			var part = parts[i];

			var bracketEqualsPos = part.indexOf(']=');
			var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

			var key;
			var val;
			if (pos === -1) {
				key = options.decoder(part, defaults.decoder, charset, 'key');
				val = options.strictNullHandling ? null : '';
			} else {
				key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');

				if (key !== null) {
					val = utils.maybeMap(
						parseArrayValue(
							part.slice(pos + 1),
							options,
							isArray(obj[key]) ? obj[key].length : 0
						),
						function (encodedVal) {
							return options.decoder(encodedVal, defaults.decoder, charset, 'value');
						}
					);
				}
			}

			if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
				val = interpretNumericEntities(String(val));
			}

			if (part.indexOf('[]=') > -1) {
				val = isArray(val) ? [val] : val;
			}

			if (key !== null) {
				var existing = has.call(obj, key);
				if (existing && options.duplicates === 'combine') {
					obj[key] = utils.combine(
						obj[key],
						val,
						options.arrayLimit,
						options.plainObjects
					);
				} else if (!existing || options.duplicates === 'last') {
					obj[key] = val;
				}
			}
		}

		return obj;
	};

	var parseObject = function (chain, val, options, valuesParsed) {
		var currentArrayLength = 0;
		if (chain.length > 0 && chain[chain.length - 1] === '[]') {
			var parentKey = chain.slice(0, -1).join('');
			currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
		}

		var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);

		for (var i = chain.length - 1; i >= 0; --i) {
			var obj;
			var root = chain[i];

			if (root === '[]' && options.parseArrays) {
				if (utils.isOverflow(leaf)) {
					// leaf is already an overflow object, preserve it
					obj = leaf;
				} else {
					obj = options.allowEmptyArrays && (leaf === '' || (options.strictNullHandling && leaf === null))
						? []
						: utils.combine(
							[],
							leaf,
							options.arrayLimit,
							options.plainObjects
						);
				}
			} else {
				obj = options.plainObjects ? { __proto__: null } : {};
				var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
				var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
				var index = parseInt(decodedRoot, 10);
				if (!options.parseArrays && decodedRoot === '') {
					obj = { 0: leaf };
				} else if (
					!isNaN(index)
					&& root !== decodedRoot
					&& String(index) === decodedRoot
					&& index >= 0
					&& (options.parseArrays && index <= options.arrayLimit)
				) {
					obj = [];
					obj[index] = leaf;
				} else if (decodedRoot !== '__proto__') {
					obj[decodedRoot] = leaf;
				}
			}

			leaf = obj;
		}

		return leaf;
	};

	var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
		var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

		if (options.depth <= 0) {
			if (!options.plainObjects && has.call(Object.prototype, key)) {
				if (!options.allowPrototypes) {
					return;
				}
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
				if (!options.allowPrototypes) {
					return;
				}
			}

			keys.push(parent);
		}

		var i = 0;
		while ((segment = child.exec(key)) !== null && i < options.depth) {
			i += 1;

			var segmentContent = segment[1].slice(1, -1);
			if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
				if (!options.allowPrototypes) {
					return;
				}
			}

			keys.push(segment[1]);
		}

		if (segment) {
			if (options.strictDepth === true) {
				throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
			}

			keys.push('[' + key.slice(segment.index) + ']');
		}

		return keys;
	};

	var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
		if (!givenKey) {
			return;
		}

		var keys = splitKeyIntoSegments(givenKey, options);

		if (!keys) {
			return;
		}

		return parseObject(keys, val, options, valuesParsed);
	};

	var normalizeParseOptions = function normalizeParseOptions(opts) {
		if (!opts) {
			return defaults;
		}

		if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
			throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
		}

		if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
			throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
		}

		if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
			throw new TypeError('Decoder has to be a function.');
		}

		if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
			throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
		}

		if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
			throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
		}

		var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

		var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;

		if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
			throw new TypeError('The duplicates option must be either combine, first, or last');
		}

		var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;

		return {
			allowDots: allowDots,
			allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
			allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
			allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
			arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
			charset: charset,
			charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
			comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
			decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
			decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
			delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
			// eslint-disable-next-line no-implicit-coercion, no-extra-parens
			depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
			duplicates: duplicates,
			ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
			interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
			parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
			parseArrays: opts.parseArrays !== false,
			plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
			strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
			strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
			throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
		};
	};

	module.exports = function (str, opts) {
		var options = normalizeParseOptions(opts);

		if (str === '' || str === null || typeof str === 'undefined') {
			return options.plainObjects ? { __proto__: null } : {};
		}

		var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
		var obj = options.plainObjects ? { __proto__: null } : {};

		// Iterate over the keys and setup the new object

		var keys = Object.keys(tempObj);
		for (var i = 0; i < keys.length; ++i) {
			var key = keys[i];
			var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
			obj = utils.merge(obj, newObj, options);
		}

		if (options.allowSparse === true) {
			return obj;
		}

		return utils.compact(obj);
	};

}, { "./utils": 50 }], 49: [function (require, module, exports) {
	'use strict';

	var getSideChannel = require('side-channel');
	var utils = require('./utils');
	var formats = require('./formats');
	var has = Object.prototype.hasOwnProperty;

	var arrayPrefixGenerators = {
		brackets: function brackets(prefix) {
			return prefix + '[]';
		},
		comma: 'comma',
		indices: function indices(prefix, key) {
			return prefix + '[' + key + ']';
		},
		repeat: function repeat(prefix) {
			return prefix;
		}
	};

	var isArray = Array.isArray;
	var push = Array.prototype.push;
	var pushToArray = function (arr, valueOrArray) {
		push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
	};

	var toISO = Date.prototype.toISOString;

	var defaultFormat = formats['default'];
	var defaults = {
		addQueryPrefix: false,
		allowDots: false,
		allowEmptyArrays: false,
		arrayFormat: 'indices',
		charset: 'utf-8',
		charsetSentinel: false,
		commaRoundTrip: false,
		delimiter: '&',
		encode: true,
		encodeDotInKeys: false,
		encoder: utils.encode,
		encodeValuesOnly: false,
		filter: void undefined,
		format: defaultFormat,
		formatter: formats.formatters[defaultFormat],
		// deprecated
		indices: false,
		serializeDate: function serializeDate(date) {
			return toISO.call(date);
		},
		skipNulls: false,
		strictNullHandling: false
	};

	var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
		return typeof v === 'string'
			|| typeof v === 'number'
			|| typeof v === 'boolean'
			|| typeof v === 'symbol'
			|| typeof v === 'bigint';
	};

	var sentinel = {};

	var stringify = function stringify(
		object,
		prefix,
		generateArrayPrefix,
		commaRoundTrip,
		allowEmptyArrays,
		strictNullHandling,
		skipNulls,
		encodeDotInKeys,
		encoder,
		filter,
		sort,
		allowDots,
		serializeDate,
		format,
		formatter,
		encodeValuesOnly,
		charset,
		sideChannel
	) {
		var obj = object;

		var tmpSc = sideChannel;
		var step = 0;
		var findFlag = false;
		while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
			// Where object last appeared in the ref tree
			var pos = tmpSc.get(object);
			step += 1;
			if (typeof pos !== 'undefined') {
				if (pos === step) {
					throw new RangeError('Cyclic object value');
				} else {
					findFlag = true; // Break while
				}
			}
			if (typeof tmpSc.get(sentinel) === 'undefined') {
				step = 0;
			}
		}

		if (typeof filter === 'function') {
			obj = filter(prefix, obj);
		} else if (obj instanceof Date) {
			obj = serializeDate(obj);
		} else if (generateArrayPrefix === 'comma' && isArray(obj)) {
			obj = utils.maybeMap(obj, function (value) {
				if (value instanceof Date) {
					return serializeDate(value);
				}
				return value;
			});
		}

		if (obj === null) {
			if (strictNullHandling) {
				return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
			}

			obj = '';
		}

		if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
			if (encoder) {
				var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
				return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
			}
			return [formatter(prefix) + '=' + formatter(String(obj))];
		}

		var values = [];

		if (typeof obj === 'undefined') {
			return values;
		}

		var objKeys;
		if (generateArrayPrefix === 'comma' && isArray(obj)) {
			// we need to join elements in
			if (encodeValuesOnly && encoder) {
				obj = utils.maybeMap(obj, encoder);
			}
			objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
		} else if (isArray(filter)) {
			objKeys = filter;
		} else {
			var keys = Object.keys(obj);
			objKeys = sort ? keys.sort(sort) : keys;
		}

		var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);

		var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;

		if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
			return adjustedPrefix + '[]';
		}

		for (var j = 0; j < objKeys.length; ++j) {
			var key = objKeys[j];
			var value = typeof key === 'object' && key && typeof key.value !== 'undefined'
				? key.value
				: obj[key];

			if (skipNulls && value === null) {
				continue;
			}

			var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
			var keyPrefix = isArray(obj)
				? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix
				: adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');

			sideChannel.set(object, step);
			var valueSideChannel = getSideChannel();
			valueSideChannel.set(sentinel, sideChannel);
			pushToArray(values, stringify(
				value,
				keyPrefix,
				generateArrayPrefix,
				commaRoundTrip,
				allowEmptyArrays,
				strictNullHandling,
				skipNulls,
				encodeDotInKeys,
				generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
				filter,
				sort,
				allowDots,
				serializeDate,
				format,
				formatter,
				encodeValuesOnly,
				charset,
				valueSideChannel
			));
		}

		return values;
	};

	var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
		if (!opts) {
			return defaults;
		}

		if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
			throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
		}

		if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
			throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
		}

		if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
			throw new TypeError('Encoder has to be a function.');
		}

		var charset = opts.charset || defaults.charset;
		if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
			throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
		}

		var format = formats['default'];
		if (typeof opts.format !== 'undefined') {
			if (!has.call(formats.formatters, opts.format)) {
				throw new TypeError('Unknown format option provided.');
			}
			format = opts.format;
		}
		var formatter = formats.formatters[format];

		var filter = defaults.filter;
		if (typeof opts.filter === 'function' || isArray(opts.filter)) {
			filter = opts.filter;
		}

		var arrayFormat;
		if (opts.arrayFormat in arrayPrefixGenerators) {
			arrayFormat = opts.arrayFormat;
		} else if ('indices' in opts) {
			arrayFormat = opts.indices ? 'indices' : 'repeat';
		} else {
			arrayFormat = defaults.arrayFormat;
		}

		if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
			throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
		}

		var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;

		return {
			addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
			allowDots: allowDots,
			allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
			arrayFormat: arrayFormat,
			charset: charset,
			charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
			commaRoundTrip: !!opts.commaRoundTrip,
			delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
			encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
			encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
			encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
			encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
			filter: filter,
			format: format,
			formatter: formatter,
			serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
			skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
			sort: typeof opts.sort === 'function' ? opts.sort : null,
			strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
		};
	};

	module.exports = function (object, opts) {
		var obj = object;
		var options = normalizeStringifyOptions(opts);

		var objKeys;
		var filter;

		if (typeof options.filter === 'function') {
			filter = options.filter;
			obj = filter('', obj);
		} else if (isArray(options.filter)) {
			filter = options.filter;
			objKeys = filter;
		}

		var keys = [];

		if (typeof obj !== 'object' || obj === null) {
			return '';
		}

		var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
		var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;

		if (!objKeys) {
			objKeys = Object.keys(obj);
		}

		if (options.sort) {
			objKeys.sort(options.sort);
		}

		var sideChannel = getSideChannel();
		for (var i = 0; i < objKeys.length; ++i) {
			var key = objKeys[i];
			var value = obj[key];

			if (options.skipNulls && value === null) {
				continue;
			}
			pushToArray(keys, stringify(
				value,
				key,
				generateArrayPrefix,
				commaRoundTrip,
				options.allowEmptyArrays,
				options.strictNullHandling,
				options.skipNulls,
				options.encodeDotInKeys,
				options.encode ? options.encoder : null,
				options.filter,
				options.sort,
				options.allowDots,
				options.serializeDate,
				options.format,
				options.formatter,
				options.encodeValuesOnly,
				options.charset,
				sideChannel
			));
		}

		var joined = keys.join(options.delimiter);
		var prefix = options.addQueryPrefix === true ? '?' : '';

		if (options.charsetSentinel) {
			if (options.charset === 'iso-8859-1') {
				// encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
				prefix += 'utf8=%26%2310003%3B&';
			} else {
				// encodeURIComponent('✓')
				prefix += 'utf8=%E2%9C%93&';
			}
		}

		return joined.length > 0 ? prefix + joined : '';
	};

}, { "./formats": 46, "./utils": 50, "side-channel": 54 }], 50: [function (require, module, exports) {
	'use strict';

	var formats = require('./formats');
	var getSideChannel = require('side-channel');

	var has = Object.prototype.hasOwnProperty;
	var isArray = Array.isArray;

	// Track objects created from arrayLimit overflow using side-channel
	// Stores the current max numeric index for O(1) lookup
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

	var hexTable = (function () {
		var array = [];
		for (var i = 0; i < 256; ++i) {
			array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
		}

		return array;
	}());

	var compactQueue = function compactQueue(queue) {
		while (queue.length > 1) {
			var item = queue.pop();
			var obj = item.obj[item.prop];

			if (isArray(obj)) {
				var compacted = [];

				for (var j = 0; j < obj.length; ++j) {
					if (typeof obj[j] !== 'undefined') {
						compacted.push(obj[j]);
					}
				}

				item.obj[item.prop] = compacted;
			}
		}
	};

	var arrayToObject = function arrayToObject(source, options) {
		var obj = options && options.plainObjects ? { __proto__: null } : {};
		for (var i = 0; i < source.length; ++i) {
			if (typeof source[i] !== 'undefined') {
				obj[i] = source[i];
			}
		}

		return obj;
	};

	var merge = function merge(target, source, options) {
		/* eslint no-param-reassign: 0 */
		if (!source) {
			return target;
		}

		if (typeof source !== 'object' && typeof source !== 'function') {
			if (isArray(target)) {
				target.push(source);
			} else if (target && typeof target === 'object') {
				if (isOverflow(target)) {
					// Add at next numeric index for overflow objects
					var newIndex = getMaxIndex(target) + 1;
					target[newIndex] = source;
					setMaxIndex(target, newIndex);
				} else if (
					(options && (options.plainObjects || options.allowPrototypes))
					|| !has.call(Object.prototype, source)
				) {
					target[source] = true;
				}
			} else {
				return [target, source];
			}

			return target;
		}

		if (!target || typeof target !== 'object') {
			if (isOverflow(source)) {
				// Create new object with target at 0, source values shifted by 1
				var sourceKeys = Object.keys(source);
				var result = options && options.plainObjects
					? { __proto__: null, 0: target }
					: { 0: target };
				for (var m = 0; m < sourceKeys.length; m++) {
					var oldKey = parseInt(sourceKeys[m], 10);
					result[oldKey + 1] = source[sourceKeys[m]];
				}
				return markOverflow(result, getMaxIndex(source) + 1);
			}
			return [target].concat(source);
		}

		var mergeTarget = target;
		if (isArray(target) && !isArray(source)) {
			mergeTarget = arrayToObject(target, options);
		}

		if (isArray(target) && isArray(source)) {
			source.forEach(function (item, i) {
				if (has.call(target, i)) {
					var targetItem = target[i];
					if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
						target[i] = merge(targetItem, item, options);
					} else {
						target.push(item);
					}
				} else {
					target[i] = item;
				}
			});
			return target;
		}

		return Object.keys(source).reduce(function (acc, key) {
			var value = source[key];

			if (has.call(acc, key)) {
				acc[key] = merge(acc[key], value, options);
			} else {
				acc[key] = value;
			}
			return acc;
		}, mergeTarget);
	};

	var assign = function assignSingleSource(target, source) {
		return Object.keys(source).reduce(function (acc, key) {
			acc[key] = source[key];
			return acc;
		}, target);
	};

	var decode = function (str, defaultDecoder, charset) {
		var strWithoutPlus = str.replace(/\+/g, ' ');
		if (charset === 'iso-8859-1') {
			// unescape never throws, no try...catch needed:
			return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
		}
		// utf-8
		try {
			return decodeURIComponent(strWithoutPlus);
		} catch (e) {
			return strWithoutPlus;
		}
	};

	var limit = 1024;

	/* eslint operator-linebreak: [2, "before"] */

	var encode = function encode(str, defaultEncoder, charset, kind, format) {
		// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
		// It has been adapted here for stricter adherence to RFC 3986
		if (str.length === 0) {
			return str;
		}

		var string = str;
		if (typeof str === 'symbol') {
			string = Symbol.prototype.toString.call(str);
		} else if (typeof str !== 'string') {
			string = String(str);
		}

		if (charset === 'iso-8859-1') {
			return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
				return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
			});
		}

		var out = '';
		for (var j = 0; j < string.length; j += limit) {
			var segment = string.length >= limit ? string.slice(j, j + limit) : string;
			var arr = [];

			for (var i = 0; i < segment.length; ++i) {
				var c = segment.charCodeAt(i);
				if (
					c === 0x2D // -
					|| c === 0x2E // .
					|| c === 0x5F // _
					|| c === 0x7E // ~
					|| (c >= 0x30 && c <= 0x39) // 0-9
					|| (c >= 0x41 && c <= 0x5A) // a-z
					|| (c >= 0x61 && c <= 0x7A) // A-Z
					|| (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
				) {
					arr[arr.length] = segment.charAt(i);
					continue;
				}

				if (c < 0x80) {
					arr[arr.length] = hexTable[c];
					continue;
				}

				if (c < 0x800) {
					arr[arr.length] = hexTable[0xC0 | (c >> 6)]
						+ hexTable[0x80 | (c & 0x3F)];
					continue;
				}

				if (c < 0xD800 || c >= 0xE000) {
					arr[arr.length] = hexTable[0xE0 | (c >> 12)]
						+ hexTable[0x80 | ((c >> 6) & 0x3F)]
						+ hexTable[0x80 | (c & 0x3F)];
					continue;
				}

				i += 1;
				c = 0x10000 + (((c & 0x3FF) << 10) | (segment.charCodeAt(i) & 0x3FF));

				arr[arr.length] = hexTable[0xF0 | (c >> 18)]
					+ hexTable[0x80 | ((c >> 12) & 0x3F)]
					+ hexTable[0x80 | ((c >> 6) & 0x3F)]
					+ hexTable[0x80 | (c & 0x3F)];
			}

			out += arr.join('');
		}

		return out;
	};

	var compact = function compact(value) {
		var queue = [{ obj: { o: value }, prop: 'o' }];
		var refs = [];

		for (var i = 0; i < queue.length; ++i) {
			var item = queue[i];
			var obj = item.obj[item.prop];

			var keys = Object.keys(obj);
			for (var j = 0; j < keys.length; ++j) {
				var key = keys[j];
				var val = obj[key];
				if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
					queue.push({ obj: obj, prop: key });
					refs.push(val);
				}
			}
		}

		compactQueue(queue);

		return value;
	};

	var isRegExp = function isRegExp(obj) {
		return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	var isBuffer = function isBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}

		return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};

	var combine = function combine(a, b, arrayLimit, plainObjects) {
		// If 'a' is already an overflow object, add to it
		if (isOverflow(a)) {
			var newIndex = getMaxIndex(a) + 1;
			a[newIndex] = b;
			setMaxIndex(a, newIndex);
			return a;
		}

		var result = [].concat(a, b);
		if (result.length > arrayLimit) {
			return markOverflow(arrayToObject(result, { plainObjects: plainObjects }), result.length - 1);
		}
		return result;
	};

	var maybeMap = function maybeMap(val, fn) {
		if (isArray(val)) {
			var mapped = [];
			for (var i = 0; i < val.length; i += 1) {
				mapped.push(fn(val[i]));
			}
			return mapped;
		}
		return fn(val);
	};

	module.exports = {
		arrayToObject: arrayToObject,
		assign: assign,
		combine: combine,
		compact: compact,
		decode: decode,
		encode: encode,
		isBuffer: isBuffer,
		isOverflow: isOverflow,
		isRegExp: isRegExp,
		maybeMap: maybeMap,
		merge: merge
	};

}, { "./formats": 46, "side-channel": 54 }], 51: [function (require, module, exports) {
	'use strict';

	var inspect = require('object-inspect');

	var $TypeError = require('es-errors/type');

	/*
	* This function traverses the list returning the node corresponding to the given key.
	*
	* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
	* By doing so, all the recently used nodes can be accessed relatively quickly.
	*/
	/** @type {import('./list.d.ts').listGetNode} */
	// eslint-disable-next-line consistent-return
	var listGetNode = function (list, key, isDelete) {
		/** @type {typeof list | NonNullable<(typeof list)['next']>} */
		var prev = list;
		/** @type {(typeof list)['next']} */
		var curr;
		// eslint-disable-next-line eqeqeq
		for (; (curr = prev.next) != null; prev = curr) {
			if (curr.key === key) {
				prev.next = curr.next;
				if (!isDelete) {
					// eslint-disable-next-line no-extra-parens
					curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
					list.next = curr; // eslint-disable-line no-param-reassign
				}
				return curr;
			}
		}
	};

	/** @type {import('./list.d.ts').listGet} */
	var listGet = function (objects, key) {
		if (!objects) {
			return void undefined;
		}
		var node = listGetNode(objects, key);
		return node && node.value;
	};
	/** @type {import('./list.d.ts').listSet} */
	var listSet = function (objects, key, value) {
		var node = listGetNode(objects, key);
		if (node) {
			node.value = value;
		} else {
			// Prepend the new node to the beginning of the list
			objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
				key: key,
				next: objects.next,
				value: value
			});
		}
	};
	/** @type {import('./list.d.ts').listHas} */
	var listHas = function (objects, key) {
		if (!objects) {
			return false;
		}
		return !!listGetNode(objects, key);
	};
	/** @type {import('./list.d.ts').listDelete} */
	// eslint-disable-next-line consistent-return
	var listDelete = function (objects, key) {
		if (objects) {
			return listGetNode(objects, key, true);
		}
	};

	/** @type {import('.')} */
	module.exports = function getSideChannelList() {
	/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				var root = $o && $o.next;
				var deletedNode = listDelete($o, key);
				if (deletedNode && root && root === deletedNode) {
					$o = void undefined;
				}
				return !!deletedNode;
			},
			get: function (key) {
				return listGet($o, key);
			},
			has: function (key) {
				return listHas($o, key);
			},
			set: function (key, value) {
				if (!$o) {
					// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
					$o = {
						next: void undefined
					};
				}
				// eslint-disable-next-line no-extra-parens
				listSet(/** @type {NonNullable<typeof $o>} */($o), key, value);
			}
		};
		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	};

}, { "es-errors/type": 23, "object-inspect": 45 }], 52: [function (require, module, exports) {
	'use strict';

	var GetIntrinsic = require('get-intrinsic');
	var callBound = require('call-bound');
	var inspect = require('object-inspect');

	var $TypeError = require('es-errors/type');
	var $Map = GetIntrinsic('%Map%', true);

	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
	var $mapGet = callBound('Map.prototype.get', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
	var $mapSet = callBound('Map.prototype.set', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
	var $mapHas = callBound('Map.prototype.has', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
	var $mapDelete = callBound('Map.prototype.delete', true);
	/** @type {<K, V>(thisArg: Map<K, V>) => number} */
	var $mapSize = callBound('Map.prototype.size', true);

	/** @type {import('.')} */
	module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
	/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {Map<K, V> | undefined} */ var $m;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				if ($m) {
					var result = $mapDelete($m, key);
					if ($mapSize($m) === 0) {
						$m = void undefined;
					}
					return result;
				}
				return false;
			},
			get: function (key) { // eslint-disable-line consistent-return
				if ($m) {
					return $mapGet($m, key);
				}
			},
			has: function (key) {
				if ($m) {
					return $mapHas($m, key);
				}
				return false;
			},
			set: function (key, value) {
				if (!$m) {
					// @ts-expect-error TS can't handle narrowing a variable inside a closure
					$m = new $Map();
				}
				$mapSet($m, key, value);
			}
		};

		// @ts-expect-error TODO: figure out why TS is erroring here
		return channel;
	};

}, { "call-bound": 15, "es-errors/type": 23, "get-intrinsic": 28, "object-inspect": 45 }], 53: [function (require, module, exports) {
	'use strict';

	var GetIntrinsic = require('get-intrinsic');
	var callBound = require('call-bound');
	var inspect = require('object-inspect');
	var getSideChannelMap = require('side-channel-map');

	var $TypeError = require('es-errors/type');
	var $WeakMap = GetIntrinsic('%WeakMap%', true);

	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
	var $weakMapGet = callBound('WeakMap.prototype.get', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
	var $weakMapSet = callBound('WeakMap.prototype.set', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
	var $weakMapHas = callBound('WeakMap.prototype.has', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
	var $weakMapDelete = callBound('WeakMap.prototype.delete', true);

	/** @type {import('.')} */
	module.exports = $WeakMap
		? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
		/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
		/** @typedef {Parameters<Channel['get']>[0]} K */
		/** @typedef {Parameters<Channel['set']>[1]} V */

		/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
		/** @type {Channel | undefined} */ var $m;

			/** @type {Channel} */
			var channel = {
				assert: function (key) {
					if (!channel.has(key)) {
						throw new $TypeError('Side channel does not contain ' + inspect(key));
					}
				},
				'delete': function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapDelete($wm, key);
						}
					} else if (getSideChannelMap) {
						if ($m) {
							return $m['delete'](key);
						}
					}
					return false;
				},
				get: function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapGet($wm, key);
						}
					}
					return $m && $m.get(key);
				},
				has: function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapHas($wm, key);
						}
					}
					return !!$m && $m.has(key);
				},
				set: function (key, value) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if (!$wm) {
							$wm = new $WeakMap();
						}
						$weakMapSet($wm, key, value);
					} else if (getSideChannelMap) {
						if (!$m) {
							$m = getSideChannelMap();
						}
					// eslint-disable-next-line no-extra-parens
					/** @type {NonNullable<typeof $m>} */ ($m).set(key, value);
					}
				}
			};

			// @ts-expect-error TODO: figure out why this is erroring
			return channel;
		}
		: getSideChannelMap;

}, { "call-bound": 15, "es-errors/type": 23, "get-intrinsic": 28, "object-inspect": 45, "side-channel-map": 52 }], 54: [function (require, module, exports) {
	'use strict';

	var $TypeError = require('es-errors/type');
	var inspect = require('object-inspect');
	var getSideChannelList = require('side-channel-list');
	var getSideChannelMap = require('side-channel-map');
	var getSideChannelWeakMap = require('side-channel-weakmap');

	var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;

	/** @type {import('.')} */
	module.exports = function getSideChannel() {
	/** @typedef {ReturnType<typeof getSideChannel>} Channel */

	/** @type {Channel | undefined} */ var $channelData;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				return !!$channelData && $channelData['delete'](key);
			},
			get: function (key) {
				return $channelData && $channelData.get(key);
			},
			has: function (key) {
				return !!$channelData && $channelData.has(key);
			},
			set: function (key, value) {
				if (!$channelData) {
					$channelData = makeChannel();
				}

				$channelData.set(key, value);
			}
		};
		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	};

}, { "es-errors/type": 23, "object-inspect": 45, "side-channel-list": 51, "side-channel-map": 52, "side-channel-weakmap": 53 }]}, { }, [4]) (4)
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
}) ({});