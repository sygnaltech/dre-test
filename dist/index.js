(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@memberstack/dom/lib/utils/defaultMessageBox.js
  var require_defaultMessageBox = __commonJS({
    "node_modules/@memberstack/dom/lib/utils/defaultMessageBox.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.initCSS = exports.addErrorBox = exports.addSuccessBox = void 0;
      var closeIcon;
      if (typeof window !== "undefined") {
        closeIcon = document.createElement("div");
        closeIcon.setAttribute("id", "ms-status-close");
        closeIcon.setAttribute("data-ms-message-close", "");
        closeIcon.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/></svg>';
      }
      var addSuccessBox = function() {
        var successStatusIcon = document.createElement("div");
        successStatusIcon.setAttribute("id", "ms-status-icon");
        successStatusIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#62d37f"/><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z" fill="#fff"/></svg>';
        var successHTML = '<div data-ms-message class="ms-error-message">\n		'.concat(successStatusIcon.outerHTML, '\n		<div id="ms-message" data-ms-message-text></div>\n		').concat(closeIcon.outerHTML, "\n		</div>");
        var successdiv = document.createElement("div");
        successdiv.setAttribute("data-ms-message", "success");
        successdiv.innerHTML = successHTML;
        successdiv.style.display = "none";
        document.body.appendChild(successdiv);
      };
      exports.addSuccessBox = addSuccessBox;
      var addErrorBox = function() {
        var errorStatusIcon = document.createElement("div");
        errorStatusIcon.setAttribute("id", "ms-status-icon");
        errorStatusIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#E40023"/></svg>';
        var errorHTML = '<div data-ms-message class="ms-error-message">\n		'.concat(errorStatusIcon.outerHTML, '\n		<div id="ms-message" data-ms-message-text></div>\n		').concat(closeIcon.outerHTML, "\n		</div>");
        var errordiv = document.createElement("div");
        errordiv.setAttribute("data-ms-message", "error");
        errordiv.innerHTML = errorHTML;
        errordiv.style.display = "none";
        document.body.appendChild(errordiv);
      };
      exports.addErrorBox = addErrorBox;
      var initCSS = function() {
        var cssEl = document.createElement("style");
        var css = "\n		@keyframes fadeIn {\n			0% {\n				opacity: 0;\n			}\n			100% {\n				opacity: 1;\n			}\n		}\n		.ms-error-message { \n				position: fixed;\n				left: 50%;\n				bottom: 3%;\n				transform: translate(-50%, -50%);\n				margin: 0 auto;\n				z-index: 10000000; \n				display: flex; \n				align-items: center;\n				padding: 12px 16px;\n				border-radius: 8px; \n				background-color: #0A0A0A; \n				color: #fff; \n				font-size: 16.8px; \n				line-height: 28px; \n				font-weight: 500; \n				transform-origin: center;\n				animation: fadeIn 0.2s ease-in;\n				-webkit-animation: fadeIn 0.2s ease-in;\n				-moz-animation: fadeIn 0.2s ease-in;\n				-o-animation: fadeIn 0.2s ease-in;\n				-ms-animation: fadeIn 0.2s ease-in;\n			}\n			#ms-status-icon {\n				width: 20px;\n				height: 20px;\n				margin-right: 12px;\n				}\n				#ms-status-close {\n					margin-left: 20px;\n					cursor: pointer;\n					}\n					#ms-status-close svg {\n						height: 12px;\n					}";
        cssEl.setAttribute("data-ms-style", "");
        cssEl.appendChild(document.createTextNode(css));
        document.head.appendChild(cssEl);
      };
      exports.initCSS = initCSS;
    }
  });

  // node_modules/@memberstack/dom/lib/methods/dom/main-dom.js
  var require_main_dom = __commonJS({
    "node_modules/@memberstack/dom/lib/methods/dom/main-dom.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = void 0;
      function noop() {
      }
      var identity = function(x) {
        return x;
      };
      function assign(tar, src) {
        for (var k in src)
          tar[k] = src[k];
        return tar;
      }
      function run(fn) {
        return fn();
      }
      function blank_object() {
        return /* @__PURE__ */ Object.create(null);
      }
      function run_all(fns) {
        fns.forEach(run);
      }
      function is_function(thing) {
        return typeof thing === "function";
      }
      function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
      }
      var src_url_equal_anchor;
      function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
          src_url_equal_anchor = document.createElement("a");
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
      }
      function is_empty(obj) {
        return Object.keys(obj).length === 0;
      }
      function subscribe(store) {
        var callbacks = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          callbacks[_i - 1] = arguments[_i];
        }
        if (store == null) {
          return noop;
        }
        var unsub = store.subscribe.apply(store, __spreadArray([], __read(callbacks), false));
        return unsub.unsubscribe ? function() {
          return unsub.unsubscribe();
        } : unsub;
      }
      function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
      }
      function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
          var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
          return definition[0](slot_ctx);
        }
      }
      function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
      }
      function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
          var lets = definition[2](fn(dirty));
          if ($$scope.dirty === void 0) {
            return lets;
          }
          if (typeof lets === "object") {
            var merged = [];
            var len = Math.max($$scope.dirty.length, lets.length);
            for (var i = 0; i < len; i += 1) {
              merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
          }
          return $$scope.dirty | lets;
        }
        return $$scope.dirty;
      }
      function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
          var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
          slot.p(slot_context, slot_changes);
        }
      }
      function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
          var dirty = [];
          var length_1 = $$scope.ctx.length / 32;
          for (var i = 0; i < length_1; i++) {
            dirty[i] = -1;
          }
          return dirty;
        }
        return -1;
      }
      function exclude_internal_props(props) {
        var result = {};
        for (var k in props)
          if (k[0] !== "$")
            result[k] = props[k];
        return result;
      }
      function compute_rest_props(props, keys) {
        var rest = {};
        keys = new Set(keys);
        for (var k in props)
          if (!keys.has(k) && k[0] !== "$")
            rest[k] = props[k];
        return rest;
      }
      var is_client = typeof window !== "undefined";
      var now = is_client ? function() {
        return window.performance.now();
      } : function() {
        return Date.now();
      };
      var raf = is_client ? function(cb) {
        return requestAnimationFrame(cb);
      } : noop;
      var tasks = /* @__PURE__ */ new Set();
      function run_tasks(now2) {
        tasks.forEach(function(task) {
          if (!task.c(now2)) {
            tasks.delete(task);
            task.f();
          }
        });
        if (tasks.size !== 0)
          raf(run_tasks);
      }
      function loop(callback) {
        var task;
        if (tasks.size === 0)
          raf(run_tasks);
        return {
          promise: new Promise(function(fulfill) {
            tasks.add(task = { c: callback, f: fulfill });
          }),
          abort: function() {
            tasks.delete(task);
          }
        };
      }
      function append(target, node) {
        target.appendChild(node);
      }
      function append_styles(target, style_sheet_id, styles) {
        var append_styles_to = get_root_for_style(target);
        if (!append_styles_to.getElementById(style_sheet_id)) {
          var style = element("style");
          style.id = style_sheet_id;
          style.textContent = styles;
          append_stylesheet(append_styles_to, style);
        }
      }
      function get_root_for_style(node) {
        if (!node)
          return document;
        var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        if (root && root.host) {
          return root;
        }
        return node.ownerDocument;
      }
      function append_empty_stylesheet(node) {
        var style_element = element("style");
        append_stylesheet(get_root_for_style(node), style_element);
        return style_element.sheet;
      }
      function append_stylesheet(node, style) {
        append(node.head || node, style);
      }
      function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
      }
      function detach(node) {
        node.parentNode.removeChild(node);
      }
      function destroy_each(iterations, detaching) {
        for (var i = 0; i < iterations.length; i += 1) {
          if (iterations[i])
            iterations[i].d(detaching);
        }
      }
      function element(name) {
        return document.createElement(name);
      }
      function svg_element(name) {
        return document.createElementNS("http://www.w3.org/2000/svg", name);
      }
      function text(data) {
        return document.createTextNode(data);
      }
      function space() {
        return text(" ");
      }
      function empty() {
        return text("");
      }
      function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return function() {
          return node.removeEventListener(event, handler, options);
        };
      }
      function prevent_default(fn) {
        return function(event) {
          event.preventDefault();
          return fn.call(this, event);
        };
      }
      function stop_propagation(fn) {
        return function(event) {
          event.stopPropagation();
          return fn.call(this, event);
        };
      }
      function attr(node, attribute, value) {
        if (value == null)
          node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
          node.setAttribute(attribute, value);
      }
      function children(element2) {
        return Array.from(element2.childNodes);
      }
      function set_data(text2, data) {
        data = "" + data;
        if (text2.wholeText !== data)
          text2.data = data;
      }
      function set_input_value(input, value) {
        input.value = value == null ? "" : value;
      }
      function set_style(node, key, value, important) {
        if (value === null) {
          node.style.removeProperty(key);
        } else {
          node.style.setProperty(key, value, important ? "important" : "");
        }
      }
      function toggle_class(element2, name, toggle) {
        element2.classList[toggle ? "add" : "remove"](name);
      }
      function custom_event(type, detail, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.bubbles, bubbles = _c === void 0 ? false : _c, _d = _b.cancelable, cancelable = _d === void 0 ? false : _d;
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
      }
      var managed_styles = /* @__PURE__ */ new Map();
      var active = 0;
      function hash(str) {
        var hash2 = 5381;
        var i = str.length;
        while (i--)
          hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
        return hash2 >>> 0;
      }
      function create_style_information(doc, node) {
        var info = { stylesheet: append_empty_stylesheet(node), rules: {} };
        managed_styles.set(doc, info);
        return info;
      }
      function create_rule(node, a, b, duration, delay, ease, fn, uid) {
        if (uid === void 0) {
          uid = 0;
        }
        var step = 16.666 / duration;
        var keyframes = "{\n";
        for (var p = 0; p <= 1; p += step) {
          var t = a + (b - a) * ease(p);
          keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
        }
        var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
        var name = "__svelte_".concat(hash(rule), "_").concat(uid);
        var doc = get_root_for_style(node);
        var _a = managed_styles.get(doc) || create_style_information(doc, node), stylesheet = _a.stylesheet, rules = _a.rules;
        if (!rules[name]) {
          rules[name] = true;
          stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
        }
        var animation = node.style.animation || "";
        node.style.animation = "".concat(animation ? "".concat(animation, ", ") : "").concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
        active += 1;
        return name;
      }
      function delete_rule(node, name) {
        var previous = (node.style.animation || "").split(", ");
        var next = previous.filter(
          name ? function(anim) {
            return anim.indexOf(name) < 0;
          } : function(anim) {
            return anim.indexOf("__svelte") === -1;
          }
        );
        var deleted = previous.length - next.length;
        if (deleted) {
          node.style.animation = next.join(", ");
          active -= deleted;
          if (!active)
            clear_rules();
        }
      }
      function clear_rules() {
        raf(function() {
          if (active)
            return;
          managed_styles.forEach(function(info) {
            var stylesheet = info.stylesheet;
            var i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            info.rules = {};
          });
          managed_styles.clear();
        });
      }
      var current_component;
      function set_current_component(component) {
        current_component = component;
      }
      function get_current_component() {
        if (!current_component)
          throw new Error("Function called outside component initialization");
        return current_component;
      }
      function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
      }
      function onDestroy(fn) {
        get_current_component().$$.on_destroy.push(fn);
      }
      var dirty_components = [];
      var binding_callbacks = [];
      var render_callbacks = [];
      var flush_callbacks = [];
      var resolved_promise = Promise.resolve();
      var update_scheduled = false;
      function schedule_update() {
        if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush);
        }
      }
      function add_render_callback(fn) {
        render_callbacks.push(fn);
      }
      function add_flush_callback(fn) {
        flush_callbacks.push(fn);
      }
      var seen_callbacks = /* @__PURE__ */ new Set();
      var flushidx = 0;
      function flush() {
        var saved_component = current_component;
        do {
          while (flushidx < dirty_components.length) {
            var component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
          }
          set_current_component(null);
          dirty_components.length = 0;
          flushidx = 0;
          while (binding_callbacks.length)
            binding_callbacks.pop()();
          for (var i = 0; i < render_callbacks.length; i += 1) {
            var callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
              seen_callbacks.add(callback);
              callback();
            }
          }
          render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
          flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
      }
      function update($$) {
        if ($$.fragment !== null) {
          $$.update();
          run_all($$.before_update);
          var dirty = $$.dirty;
          $$.dirty = [-1];
          $$.fragment && $$.fragment.p($$.ctx, dirty);
          $$.after_update.forEach(add_render_callback);
        }
      }
      var promise;
      function wait() {
        if (!promise) {
          promise = Promise.resolve();
          promise.then(function() {
            promise = null;
          });
        }
        return promise;
      }
      function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event("".concat(direction ? "intro" : "outro").concat(kind)));
      }
      var outroing = /* @__PURE__ */ new Set();
      var outros;
      function group_outros() {
        outros = {
          r: 0,
          c: [],
          p: outros
        };
      }
      function check_outros() {
        if (!outros.r) {
          run_all(outros.c);
        }
        outros = outros.p;
      }
      function transition_in(block, local) {
        if (block && block.i) {
          outroing.delete(block);
          block.i(local);
        }
      }
      function transition_out(block, local, detach2, callback) {
        if (block && block.o) {
          if (outroing.has(block))
            return;
          outroing.add(block);
          outros.c.push(function() {
            outroing.delete(block);
            if (callback) {
              if (detach2)
                block.d(1);
              callback();
            }
          });
          block.o(local);
        }
      }
      var null_transition = { duration: 0 };
      function create_bidirectional_transition(node, fn, params, intro) {
        var config = fn(node, params);
        var t = intro ? 0 : 1;
        var running_program = null;
        var pending_program = null;
        var animation_name = null;
        function clear_animation() {
          if (animation_name)
            delete_rule(node, animation_name);
        }
        function init3(program, duration) {
          var d = program.b - t;
          duration *= Math.abs(d);
          return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
          };
        }
        function go(b) {
          var _a = config || null_transition, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 300 : _c, _d = _a.easing, easing = _d === void 0 ? identity : _d, _e = _a.tick, tick = _e === void 0 ? noop : _e, css = _a.css;
          var program = {
            start: now() + delay,
            b
          };
          if (!b) {
            program.group = outros;
            outros.r += 1;
          }
          if (running_program || pending_program) {
            pending_program = program;
          } else {
            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
              tick(0, 1);
            running_program = init3(program, duration);
            add_render_callback(function() {
              return dispatch(node, b, "start");
            });
            loop(function(now2) {
              if (pending_program && now2 > pending_program.start) {
                running_program = init3(pending_program, duration);
                pending_program = null;
                dispatch(node, running_program.b, "start");
                if (css) {
                  clear_animation();
                  animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                }
              }
              if (running_program) {
                if (now2 >= running_program.end) {
                  tick(t = running_program.b, 1 - t);
                  dispatch(node, running_program.b, "end");
                  if (!pending_program) {
                    if (running_program.b) {
                      clear_animation();
                    } else {
                      if (!--running_program.group.r)
                        run_all(running_program.group.c);
                    }
                  }
                  running_program = null;
                } else if (now2 >= running_program.start) {
                  var p = now2 - running_program.start;
                  t = running_program.a + running_program.d * easing(p / running_program.duration);
                  tick(t, 1 - t);
                }
              }
              return !!(running_program || pending_program);
            });
          }
        }
        return {
          run: function(b) {
            if (is_function(config)) {
              wait().then(function() {
                config = config();
                go(b);
              });
            } else {
              go(b);
            }
          },
          end: function() {
            clear_animation();
            running_program = pending_program = null;
          }
        };
      }
      function destroy_block(block, lookup) {
        block.d(1);
        lookup.delete(block.key);
      }
      function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block2, next, get_context) {
        var o = old_blocks.length;
        var n = list.length;
        var i = o;
        var old_indexes = {};
        while (i--)
          old_indexes[old_blocks[i].key] = i;
        var new_blocks = [];
        var new_lookup = /* @__PURE__ */ new Map();
        var deltas = /* @__PURE__ */ new Map();
        i = n;
        while (i--) {
          var child_ctx = get_context(ctx, list, i);
          var key = get_key(child_ctx);
          var block = lookup.get(key);
          if (!block) {
            block = create_each_block2(key, child_ctx);
            block.c();
          } else if (dynamic) {
            block.p(child_ctx, dirty);
          }
          new_lookup.set(key, new_blocks[i] = block);
          if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        var will_move = /* @__PURE__ */ new Set();
        var did_move = /* @__PURE__ */ new Set();
        function insert2(block2) {
          transition_in(block2, 1);
          block2.m(node, next);
          lookup.set(block2.key, block2);
          next = block2.first;
          n--;
        }
        while (o && n) {
          var new_block = new_blocks[n - 1];
          var old_block = old_blocks[o - 1];
          var new_key = new_block.key;
          var old_key = old_block.key;
          if (new_block === old_block) {
            next = new_block.first;
            o--;
            n--;
          } else if (!new_lookup.has(old_key)) {
            destroy(old_block, lookup);
            o--;
          } else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert2(new_block);
          } else if (did_move.has(old_key)) {
            o--;
          } else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert2(new_block);
          } else {
            will_move.add(old_key);
            o--;
          }
        }
        while (o--) {
          var old_block = old_blocks[o];
          if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
        }
        while (n)
          insert2(new_blocks[n - 1]);
        return new_blocks;
      }
      function bind(component, name, callback) {
        var index = component.$$.props[name];
        if (index !== void 0) {
          component.$$.bound[index] = callback;
          callback(component.$$.ctx[index]);
        }
      }
      function create_component(block) {
        block && block.c();
      }
      function mount_component(component, target, anchor, customElement) {
        var _a = component.$$, fragment = _a.fragment, on_mount = _a.on_mount, on_destroy = _a.on_destroy, after_update = _a.after_update;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
          add_render_callback(function() {
            var new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
              on_destroy.push.apply(on_destroy, __spreadArray([], __read(new_on_destroy), false));
            } else {
              run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
          });
        }
        after_update.forEach(add_render_callback);
      }
      function destroy_component(component, detaching) {
        var $$ = component.$$;
        if ($$.fragment !== null) {
          run_all($$.on_destroy);
          $$.fragment && $$.fragment.d(detaching);
          $$.on_destroy = $$.fragment = null;
          $$.ctx = [];
        }
      }
      function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
          dirty_components.push(component);
          schedule_update();
          component.$$.dirty.fill(0);
        }
        component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
      }
      function init2(component, options, instance2, create_fragment2, not_equal, props, append_styles2, dirty) {
        if (dirty === void 0) {
          dirty = [-1];
        }
        var parent_component = current_component;
        set_current_component(component);
        var $$ = component.$$ = {
          fragment: null,
          ctx: null,
          props,
          update: noop,
          not_equal,
          bound: blank_object(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
          callbacks: blank_object(),
          dirty,
          skip_bound: false,
          root: options.target || parent_component.$$.root
        };
        append_styles2 && append_styles2($$.root);
        var ready = false;
        $$.ctx = instance2 ? instance2(component, options.props || {}, function(i, ret) {
          var rest = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
          }
          var value = rest.length ? rest[0] : ret;
          if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
            if (!$$.skip_bound && $$.bound[i])
              $$.bound[i](value);
            if (ready)
              make_dirty(component, i);
          }
          return ret;
        }) : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
        if (options.target) {
          if (options.hydrate) {
            var nodes = children(options.target);
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
          } else {
            $$.fragment && $$.fragment.c();
          }
          if (options.intro)
            transition_in(component.$$.fragment);
          mount_component(component, options.target, options.anchor, options.customElement);
          flush();
        }
        set_current_component(parent_component);
      }
      var SvelteComponent = function() {
        function SvelteComponent2() {
        }
        SvelteComponent2.prototype.$destroy = function() {
          destroy_component(this, 1);
          this.$destroy = noop;
        };
        SvelteComponent2.prototype.$on = function(type, callback) {
          var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return function() {
            var index = callbacks.indexOf(callback);
            if (index !== -1)
              callbacks.splice(index, 1);
          };
        };
        SvelteComponent2.prototype.$set = function($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        };
        return SvelteComponent2;
      }();
      var subscriber_queue = [];
      function writable(value, start) {
        if (start === void 0) {
          start = noop;
        }
        var stop;
        var subscribers = /* @__PURE__ */ new Set();
        function set(new_value) {
          var e_1, _a;
          if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) {
              var run_queue = !subscriber_queue.length;
              try {
                for (var subscribers_1 = __values(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()) {
                  var subscriber = subscribers_1_1.value;
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1.return))
                    _a.call(subscribers_1);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
              if (run_queue) {
                for (var i = 0; i < subscriber_queue.length; i += 2) {
                  subscriber_queue[i][0](subscriber_queue[i + 1]);
                }
                subscriber_queue.length = 0;
              }
            }
          }
        }
        function update2(fn) {
          set(fn(value));
        }
        function subscribe2(run2, invalidate) {
          if (invalidate === void 0) {
            invalidate = noop;
          }
          var subscriber = [run2, invalidate];
          subscribers.add(subscriber);
          if (subscribers.size === 1) {
            stop = start(set) || noop;
          }
          run2(value);
          return function() {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
              stop();
              stop = null;
            }
          };
        }
        return { set, update: update2, subscribe: subscribe2 };
      }
      var AppStore = writable({
        initialValue: true,
        customFields: [],
        isPaid: false,
        branding: {
          logo: "",
          colors: {
            lightMode: {}
          }
        },
        authProviders: [],
        additionalAuthMethods: {
          passwordless: {
            enabled: false,
            isDefault: false
          }
        }
      });
      var TextStore = writable({
        text: {}
      });
      var get_default_slot_changes = function(dirty) {
        return { matches: dirty & 1 };
      };
      var get_default_slot_context = function(ctx) {
        return { matches: ctx[0] };
      };
      function create_fragment$K(ctx) {
        var current;
        var default_slot_template = ctx[4].default;
        var default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
        return {
          c: function() {
            if (default_slot)
              default_slot.c();
          },
          m: function(target, anchor) {
            if (default_slot) {
              default_slot.m(target, anchor);
            }
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (default_slot) {
              if (default_slot.p && (!current || dirty & 9)) {
                update_slot_base(
                  default_slot,
                  default_slot_template,
                  ctx2,
                  ctx2[3],
                  !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes),
                  get_default_slot_context
                );
              }
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(default_slot, local);
            current = true;
          },
          o: function(local) {
            transition_out(default_slot, local);
            current = false;
          },
          d: function(detaching) {
            if (default_slot)
              default_slot.d(detaching);
          }
        };
      }
      function instance$q($$self, $$props, $$invalidate) {
        var _a = $$props.$$slots, slots = _a === void 0 ? {} : _a, $$scope = $$props.$$scope;
        var query = $$props.query;
        var mql;
        var mqlListener;
        var wasMounted = false;
        var matches = false;
        onMount(function() {
          $$invalidate(2, wasMounted = true);
          return function() {
            removeActiveListener();
          };
        });
        function addNewListener(query2) {
          mql = window.matchMedia(query2);
          mqlListener = function(v) {
            return $$invalidate(0, matches = v.matches);
          };
          mql.addListener(mqlListener);
          $$invalidate(0, matches = mql.matches);
        }
        function removeActiveListener() {
          if (mql && mqlListener) {
            mql.removeListener(mqlListener);
          }
        }
        $$self.$$set = function($$props2) {
          if ("query" in $$props2)
            $$invalidate(1, query = $$props2.query);
          if ("$$scope" in $$props2)
            $$invalidate(3, $$scope = $$props2.$$scope);
        };
        $$self.$$.update = function() {
          if ($$self.$$.dirty & 6) {
            {
              if (wasMounted) {
                removeActiveListener();
                addNewListener(query);
              }
            }
          }
        };
        return [matches, query, wasMounted, $$scope, slots];
      }
      var MediaQuery = function(_super) {
        __extends(MediaQuery2, _super);
        function MediaQuery2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$q, create_fragment$K, safe_not_equal, { query: 1 });
          return _this;
        }
        return MediaQuery2;
      }(SvelteComponent);
      function create_fragment$J(ctx) {
        var svg;
        var path;
        var animateTransform;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            animateTransform = svg_element("animateTransform");
            attr(animateTransform, "attributeName", "transform");
            attr(animateTransform, "attributeType", "xml");
            attr(animateTransform, "dur", "0.6s");
            attr(animateTransform, "from", "0 25 25");
            attr(animateTransform, "repeatCount", "indefinite");
            attr(animateTransform, "to", "360 25 25");
            attr(animateTransform, "type", "rotate");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z");
            attr(svg, "width", "40px");
            attr(svg, "height", "40px");
            attr(svg, "enable-background", "new 0 0 50 50");
            set_style(svg, "z-index", "1000000");
            attr(svg, "version", "1.1");
            attr(svg, "viewBox", "0 0 50 50");
            attr(svg, "xml:space", "preserve");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
            append(path, animateTransform);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var LoadingIcon = function(_super) {
        __extends(LoadingIcon2, _super);
        function LoadingIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$J, safe_not_equal, {});
          return _this;
        }
        return LoadingIcon2;
      }(SvelteComponent);
      function create_fragment$I(ctx) {
        var div;
        var loadingicon;
        var current;
        loadingicon = new LoadingIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(loadingicon.$$.fragment);
            attr(div, "class", "ms__loader");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(loadingicon, div, null);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(loadingicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(loadingicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(loadingicon);
          }
        };
      }
      var Loader = function(_super) {
        __extends(Loader2, _super);
        function Loader2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$I, safe_not_equal, {});
          return _this;
        }
        return Loader2;
      }(SvelteComponent);
      function create_fragment$H(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "shape-rendering", "geometricPrecision");
            attr(path, "d", "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z");
            attr(svg, "fill", "none");
            set_style(svg, "width", "100%");
            attr(svg, "viewBox", "0 0 14 14");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var CloseIcon = function(_super) {
        __extends(CloseIcon2, _super);
        function CloseIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$H, safe_not_equal, {});
          return _this;
        }
        return CloseIcon2;
      }(SvelteComponent);
      function create_fragment$G(ctx) {
        var div;
        var button;
        var closeicon;
        var current;
        var mounted;
        var dispose;
        closeicon = new CloseIcon({});
        return {
          c: function() {
            div = element("div");
            button = element("button");
            create_component(closeicon.$$.fragment);
            attr(div, "class", "ms-modal__close");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            mount_component(closeicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", function() {
                if (is_function(ctx[0]))
                  ctx[0].apply(this, arguments);
              });
              mounted = true;
            }
          },
          p: function(new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(closeicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(closeicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(closeicon);
            mounted = false;
            dispose();
          }
        };
      }
      function instance$p($$self, $$props, $$invalidate) {
        var closeModal = $$props.closeModal;
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(0, closeModal = $$props2.closeModal);
        };
        return [closeModal];
      }
      var CloseButton = function(_super) {
        __extends(CloseButton2, _super);
        function CloseButton2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$p, create_fragment$G, safe_not_equal, { closeModal: 0 });
          return _this;
        }
        return CloseButton2;
      }(SvelteComponent);
      function create_fragment$F(ctx) {
        var svg;
        var path0;
        var path1;
        var path2;
        var path3;
        var path4;
        var path5;
        return {
          c: function() {
            svg = svg_element("svg");
            path0 = svg_element("path");
            path1 = svg_element("path");
            path2 = svg_element("path");
            path3 = svg_element("path");
            path4 = svg_element("path");
            path5 = svg_element("path");
            attr(path0, "d", "m259.078 190.582 16.797-39.611c7.315-20.421 26.982-34.665 49.897-34.665 13.187 0 25.344 4.817 34.6 12.818l32.818 73.118c9.656 21.709-.097 47.144-21.786 56.809-21.688 9.666-47.097-.098-56.753-21.807l-38.573-86.723-17 40.088v-.027Z");
            attr(path0, "fill", "#2AA8FF");
            attr(path1, "d", "m111.31 169.64 8.002-18.679c-7.22-20.585-26.82-35.345-49.866-35.345-12.678 0-24.901 4.865-34.007 12.314 6.6063-2.796 14.34-3.575 21.988-3.575 26.999 0 49.435 19.445 53.884 45.285z");
            attr(path2, "d", "m111.31 169.64-28.66 68.126c-9.2762 21.875-34.511 32.081-56.365 22.795-21.853-9.285-32.049-34.545-22.773-56.42l31.925-76.211c6.7448-2.988 14.142-3.575 21.988-3.575 27.086 0 49.537 19.321 53.884 45.285z");
            attr(path2, "fill", "#393939");
            attr(path3, "d", "m197.57 115.46-39.756-89.506c-7.148-16.07-22.929-25.595-39.443-25.537-16.786-0.058576-32.766 9.7896-39.736 26.227l-43.199 101.28c9.1064-7.45 21.329-12.314 34.008-12.314 23.046 0 42.646 14.76 49.866 35.345l0.093 0.337c5.784 1.658 11.893 2.546 18.21 2.546 26.578 0 49.487-15.722 59.958-38.382z");
            attr(path3, "fill", "#017ACE");
            attr(path4, "d", "m197.57 115.46c-10.071 21.796-31.651 37.172-56.934 38.314-1.052 0.05-2.11 0.075-3.175 0.075-6.316 0-12.425-0.888-18.21-2.546l38.425 86.387c3.996 8.986 10.692 15.926 18.706 20.288 1.908 1.196 3.935 2.257 6.073 3.165 21.853 9.286 47.088-0.92 56.364-22.795l37.055-87.381c7.315-20.421 26.982-34.665 49.896-34.665 13.188 0 25.345 4.817 34.601 12.818l-45.994-103.17c-7.148-16.07-22.929-25.595-39.442-25.537-16.786-0.058576-32.767 9.7896-39.737 26.227l-37.628 88.816z");
            attr(path4, "fill", "#AEDEFF");
            attr(path5, "d", "m325.77 116.31c-22.915 0-42.379 13.795-49.694 34.216l8.919 20.052c5.873-25.763 28.931-44.989 56.481-44.989 6.67 0 12.931 1.465 18.894 3.539-9.256-8-21.413-12.818-34.6-12.818z");
            attr(path5, "fill", "#2D91D7");
            set_style(svg, "width", "100%");
            attr(svg, "viewBox", "0 0 397 265");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path0);
            append(svg, path1);
            append(svg, path2);
            append(svg, path3);
            append(svg, path4);
            append(svg, path5);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var MemberstackIcon = function(_super) {
        __extends(MemberstackIcon2, _super);
        function MemberstackIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$F, safe_not_equal, {});
          return _this;
        }
        return MemberstackIcon2;
      }(SvelteComponent);
      function create_else_block$b(ctx) {
        var memberstackicon;
        var current;
        memberstackicon = new MemberstackIcon({});
        return {
          c: function() {
            create_component(memberstackicon.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(memberstackicon, target, anchor);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(memberstackicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(memberstackicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(memberstackicon, detaching);
          }
        };
      }
      function create_if_block$k(ctx) {
        var img;
        var img_src_value;
        var img_alt_value;
        return {
          c: function() {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = ctx[0].branding.logo))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[0].name);
            attr(img, "data-cy", "logo");
          },
          m: function(target, anchor) {
            insert(target, img, anchor);
          },
          p: function(ctx2, dirty) {
            if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[0].branding.logo)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 1 && img_alt_value !== (img_alt_value = ctx2[0].name)) {
              attr(img, "alt", img_alt_value);
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(img);
          }
        };
      }
      function create_fragment$E(ctx) {
        var figure;
        var current_block_type_index;
        var if_block;
        var current;
        var if_block_creators = [create_if_block$k, create_else_block$b];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[0].branding.logo)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        return {
          c: function() {
            figure = element("figure");
            if_block.c();
            attr(figure, "class", "ms-modal__figure");
          },
          m: function(target, anchor) {
            insert(target, figure, anchor);
            if_blocks[current_block_type_index].m(figure, null);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block = if_blocks[current_block_type_index];
              if (!if_block) {
                if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block.c();
              } else {
                if_block.p(ctx2, dirty);
              }
              transition_in(if_block, 1);
              if_block.m(figure, null);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(figure);
            if_blocks[current_block_type_index].d();
          }
        };
      }
      function instance$o($$self, $$props, $$invalidate) {
        var app = {};
        AppStore.subscribe(function(data) {
          $$invalidate(0, app = data);
        });
        return [app];
      }
      var FigureElement = function(_super) {
        __extends(FigureElement2, _super);
        function FigureElement2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$o, create_fragment$E, safe_not_equal, {});
          return _this;
        }
        return FigureElement2;
      }(SvelteComponent);
      function create_else_block$a(ctx) {
        var button;
        var loadingicon;
        var current;
        loadingicon = new LoadingIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(loadingicon.$$.fragment);
            attr(button, "class", "ms-form__button");
            attr(button, "type", "button");
            set_style(button, "background-color", ctx[2]);
            button.disabled = true;
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(loadingicon, button, null);
            current = true;
          },
          p: function(ctx2, dirty) {
            if (!current || dirty & 4) {
              set_style(button, "background-color", ctx2[2]);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(loadingicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(loadingicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(loadingicon);
          }
        };
      }
      function create_if_block$j(ctx) {
        var button;
        var t;
        return {
          c: function() {
            button = element("button");
            t = text(ctx[0]);
            attr(button, "class", "ms-form__button");
            attr(button, "type", "submit");
            set_style(button, "background-color", ctx[2]);
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, t);
          },
          p: function(ctx2, dirty) {
            if (dirty & 1)
              set_data(t, ctx2[0]);
            if (dirty & 4) {
              set_style(button, "background-color", ctx2[2]);
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(button);
          }
        };
      }
      function create_fragment$D(ctx) {
        var div;
        var current_block_type_index;
        var if_block;
        var current;
        var if_block_creators = [create_if_block$j, create_else_block$a];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (!ctx2[1])
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        return {
          c: function() {
            div = element("div");
            if_block.c();
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block = if_blocks[current_block_type_index];
              if (!if_block) {
                if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block.c();
              } else {
                if_block.p(ctx2, dirty);
              }
              transition_in(if_block, 1);
              if_block.m(div, null);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if_blocks[current_block_type_index].d();
          }
        };
      }
      function instance$n($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(3, $app = $$value);
        });
        var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
        var _b = $$props.isLoading, isLoading = _b === void 0 ? false : _b;
        var buttonColor = "rgb(41, 98, 255)";
        if ($app.branding.colors.lightMode.primaryButton) {
          buttonColor = $app.branding.colors.lightMode.primaryButton;
        }
        $$self.$$set = function($$props2) {
          if ("buttonText" in $$props2)
            $$invalidate(0, buttonText = $$props2.buttonText);
          if ("isLoading" in $$props2)
            $$invalidate(1, isLoading = $$props2.isLoading);
        };
        return [buttonText, isLoading, buttonColor];
      }
      var SubmitButton = function(_super) {
        __extends(SubmitButton2, _super);
        function SubmitButton2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$n, create_fragment$D, safe_not_equal, { buttonText: 0, isLoading: 1 });
          return _this;
        }
        return SubmitButton2;
      }(SvelteComponent);
      function create_fragment$C(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 20 20");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var ErrorIcon = function(_super) {
        __extends(ErrorIcon2, _super);
        function ErrorIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$C, safe_not_equal, {});
          return _this;
        }
        return ErrorIcon2;
      }(SvelteComponent);
      function create_if_block$i(ctx) {
        var div;
        var erroricon;
        var t0;
        var t1;
        var current;
        erroricon = new ErrorIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t0 = space();
            t1 = text(ctx[4]);
            attr(div, "class", "ms-form__error");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t0);
            append(div, t1);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(erroricon);
          }
        };
      }
      function create_fragment$B(ctx) {
        var div;
        var label;
        var t1;
        var input;
        var t2;
        var current;
        var mounted;
        var dispose;
        var if_block = ctx[2] && create_if_block$i(ctx);
        return {
          c: function() {
            div = element("div");
            label = element("label");
            label.textContent = "".concat(ctx[3]);
            t1 = space();
            input = element("input");
            t2 = space();
            if (if_block)
              if_block.c();
            attr(label, "class", "ms-form__label");
            attr(label, "for", "eml");
            attr(input, "class", "ms-form__input");
            attr(input, "type", "email");
            attr(input, "placeholder", ctx[1]);
            attr(input, "name", "eml");
            input.required = true;
            attr(div, "class", "ms-form__group");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, label);
            append(div, t1);
            append(div, input);
            set_input_value(input, ctx[0]);
            append(div, t2);
            if (if_block)
              if_block.m(div, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(input, "keyup", ctx[5]),
                listen(input, "input", ctx[7])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & 2) {
              attr(input, "placeholder", ctx2[1]);
            }
            if (dirty & 1 && input.value !== ctx2[0]) {
              set_input_value(input, ctx2[0]);
            }
            if (ctx2[2]) {
              if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 4) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block$i(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div, null);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if (if_block)
              if_block.d();
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$m($$self, $$props, $$invalidate) {
        var $textStore;
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(8, $textStore = $$value);
        });
        var _a = $$props.emailInputValid, emailInputValid = _a === void 0 ? false : _a;
        var emailValue = $$props.emailValue;
        var _b = $$props.placeholder, placeholder = _b === void 0 ? "example@domain.com" : _b;
        var text2 = $textStore.text;
        var emailLabel = text2["email_address"] || "Email Address";
        var inputError = false;
        var errorMessage = text2["email_error_message"] || "Please enter a valid email address";
        var validateField = function(e) {
          var emailInput = e.target;
          var hasValidEmail = emailInput.value.match(/.+@.+\..{2,}/);
          if (!hasValidEmail && e.target.value.length > 0) {
            $$invalidate(6, emailInputValid = false);
            $$invalidate(2, inputError = true);
          } else {
            $$invalidate(6, emailInputValid = true);
            $$invalidate(2, inputError = false);
          }
        };
        function input_input_handler() {
          emailValue = this.value;
          $$invalidate(0, emailValue);
        }
        $$self.$$set = function($$props2) {
          if ("emailInputValid" in $$props2)
            $$invalidate(6, emailInputValid = $$props2.emailInputValid);
          if ("emailValue" in $$props2)
            $$invalidate(0, emailValue = $$props2.emailValue);
          if ("placeholder" in $$props2)
            $$invalidate(1, placeholder = $$props2.placeholder);
        };
        return [
          emailValue,
          placeholder,
          inputError,
          emailLabel,
          errorMessage,
          validateField,
          emailInputValid,
          input_input_handler
        ];
      }
      var EmailInput = function(_super) {
        __extends(EmailInput2, _super);
        function EmailInput2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$m, create_fragment$B, safe_not_equal, {
            emailInputValid: 6,
            emailValue: 0,
            placeholder: 1
          });
          return _this;
        }
        return EmailInput2;
      }(SvelteComponent);
      function create_fragment$A(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m11 0.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z");
            attr(svg, "class", "ms-form__eye");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 22 16");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var EyeIcon = function(_super) {
        __extends(EyeIcon2, _super);
        function EyeIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$A, safe_not_equal, {});
          return _this;
        }
        return EyeIcon2;
      }(SvelteComponent);
      function create_fragment$z(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m11 4c2.76 0 5 2.24 5 5 0 0.65-0.13 1.26-0.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74 0.25-3.98 0.7l2.16 2.16c0.57-0.23 1.18-0.36 1.83-0.36zm-10-2.73 2.74 2.74c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-0.3 4.38-0.84l0.42 0.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53 1.55 1.55c-0.05 0.21-0.08 0.43-0.08 0.65 0 1.66 1.34 3 3 3 0.22 0 0.44-0.03 0.65-0.08l1.55 1.55c-0.67 0.33-1.41 0.53-2.2 0.53-2.76 0-5-2.24-5-5 0-0.79 0.2-1.53 0.53-2.2zm4.31-0.78 3.15 3.15 0.02-0.16c0-1.66-1.34-3-3-3l-0.17 0.01z");
            attr(svg, "class", "ms-form__eye-slash");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 22 19");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var EyeSlashIcon = function(_super) {
        __extends(EyeSlashIcon2, _super);
        function EyeSlashIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$z, safe_not_equal, {});
          return _this;
        }
        return EyeSlashIcon2;
      }(SvelteComponent);
      function create_if_block_2$a(ctx) {
        var div;
        var button;
        var mounted;
        var dispose;
        return {
          c: function() {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(ctx[8]["forgot_password"] || "Forgot Password?");
            attr(button, "data-cy", "forgot-password-btn");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "tabindex", "-1");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__label ms-form__label--right");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
              dispose = listen(button, "click", ctx[14]);
              mounted = true;
            }
          },
          p: noop,
          d: function(detaching) {
            if (detaching)
              detach(div);
            mounted = false;
            dispose();
          }
        };
      }
      function create_else_block$9(ctx) {
        var eyeslashicon;
        var current;
        eyeslashicon = new EyeSlashIcon({});
        return {
          c: function() {
            create_component(eyeslashicon.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(eyeslashicon, target, anchor);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(eyeslashicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(eyeslashicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(eyeslashicon, detaching);
          }
        };
      }
      function create_if_block_1$d(ctx) {
        var eyeicon;
        var current;
        eyeicon = new EyeIcon({});
        return {
          c: function() {
            create_component(eyeicon.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(eyeicon, target, anchor);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(eyeicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(eyeicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(eyeicon, detaching);
          }
        };
      }
      function create_if_block$h(ctx) {
        var div;
        var erroricon;
        var t0;
        var t1;
        var current;
        erroricon = new ErrorIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t0 = space();
            t1 = text(ctx[9]);
            attr(div, "class", "ms-form__error");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t0);
            append(div, t1);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(erroricon);
          }
        };
      }
      function create_fragment$y(ctx) {
        var div3;
        var div0;
        var label;
        var t0;
        var t1;
        var t2;
        var div2;
        var input;
        var input_value_value;
        var t3;
        var div1;
        var current_block_type_index;
        var if_block1;
        var t4;
        var current;
        var mounted;
        var dispose;
        var if_block0 = ctx[2] && create_if_block_2$a(ctx);
        var if_block_creators = [create_if_block_1$d, create_else_block$9];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (!ctx2[5])
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        var if_block2 = ctx[6] && create_if_block$h(ctx);
        return {
          c: function() {
            div3 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(ctx[3]);
            t1 = space();
            if (if_block0)
              if_block0.c();
            t2 = space();
            div2 = element("div");
            input = element("input");
            t3 = space();
            div1 = element("div");
            if_block1.c();
            t4 = space();
            if (if_block2)
              if_block2.c();
            attr(label, "class", "ms-form__label");
            attr(label, "for", "psw");
            attr(div0, "class", "ms-form__flex");
            attr(input, "data-ms-internal-password", "");
            attr(input, "class", "ms-form__input ms-form__input--password");
            attr(input, "type", ctx[7]);
            attr(input, "placeholder", ctx[4]);
            input.value = input_value_value = ctx[0] || "";
            attr(input, "name", "psw");
            attr(input, "autocomplete", "off");
            input.required = true;
            attr(div1, "class", "ms-form__show-toggle");
            attr(div1, "id", "togglePassword");
            attr(div2, "class", "ms-form__password-container");
            attr(div3, "class", "ms-form__group");
          },
          m: function(target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            if (if_block0)
              if_block0.m(div0, null);
            append(div3, t2);
            append(div3, div2);
            append(div2, input);
            append(div2, t3);
            append(div2, div1);
            if_blocks[current_block_type_index].m(div1, null);
            append(div3, t4);
            if (if_block2)
              if_block2.m(div3, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(input, "input", ctx[11]),
                listen(input, "change", ctx[12]),
                listen(div1, "click", ctx[10])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & 8)
              set_data(t0, ctx2[3]);
            if (ctx2[2]) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
              } else {
                if_block0 = create_if_block_2$a(ctx2);
                if_block0.c();
                if_block0.m(div0, null);
              }
            } else if (if_block0) {
              if_block0.d(1);
              if_block0 = null;
            }
            if (!current || dirty & 128) {
              attr(input, "type", ctx2[7]);
            }
            if (!current || dirty & 16) {
              attr(input, "placeholder", ctx2[4]);
            }
            if (!current || dirty & 1 && input_value_value !== (input_value_value = ctx2[0] || "") && input.value !== input_value_value) {
              input.value = input_value_value;
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index !== previous_block_index) {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block1 = if_blocks[current_block_type_index];
              if (!if_block1) {
                if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block1.c();
              }
              transition_in(if_block1, 1);
              if_block1.m(div1, null);
            }
            if (ctx2[6]) {
              if (if_block2) {
                if_block2.p(ctx2, dirty);
                if (dirty & 64) {
                  transition_in(if_block2, 1);
                }
              } else {
                if_block2 = create_if_block$h(ctx2);
                if_block2.c();
                transition_in(if_block2, 1);
                if_block2.m(div3, null);
              }
            } else if (if_block2) {
              group_outros();
              transition_out(if_block2, 1, 1, function() {
                if_block2 = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block1);
            transition_in(if_block2);
            current = true;
          },
          o: function(local) {
            transition_out(if_block1);
            transition_out(if_block2);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div3);
            if (if_block0)
              if_block0.d();
            if_blocks[current_block_type_index].d();
            if (if_block2)
              if_block2.d();
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$l($$self, $$props, $$invalidate) {
        var type;
        var $textStore;
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(15, $textStore = $$value);
        });
        var text2 = $textStore.text;
        var _a = $$props.showForgotPasswordLabel, showForgotPasswordLabel = _a === void 0 ? false : _a;
        var _b = $$props.passwordInputValid, passwordInputValid = _b === void 0 ? false : _b;
        var _c = $$props.passwordLabel, passwordLabel = _c === void 0 ? text2["password"] || "Password" : _c;
        var _d = $$props.passwordPlaceholder, passwordPlaceholder = _d === void 0 ? "Enter Password" : _d;
        var passwordValue = $$props.passwordValue;
        var display = $$props.display;
        var inputError = false;
        var errorMessage = text2["password_error_message"] || "Minimum 8 characters required";
        var passwordVisible = false;
        function togglePassword() {
          $$invalidate(5, passwordVisible = !passwordVisible);
        }
        function handleInput(e) {
          $$invalidate(0, passwordValue = e.target.value);
        }
        var validateField = function(e) {
          var hasValidPassword = e.target.value.length >= 8 ? true : false;
          if (!hasValidPassword) {
            $$invalidate(13, passwordInputValid = false);
            $$invalidate(6, inputError = true);
          } else {
            $$invalidate(13, passwordInputValid = true);
            $$invalidate(6, inputError = false);
          }
        };
        var click_handler = function() {
          return $$invalidate(1, display = "forgot_password");
        };
        $$self.$$set = function($$props2) {
          if ("showForgotPasswordLabel" in $$props2)
            $$invalidate(2, showForgotPasswordLabel = $$props2.showForgotPasswordLabel);
          if ("passwordInputValid" in $$props2)
            $$invalidate(13, passwordInputValid = $$props2.passwordInputValid);
          if ("passwordLabel" in $$props2)
            $$invalidate(3, passwordLabel = $$props2.passwordLabel);
          if ("passwordPlaceholder" in $$props2)
            $$invalidate(4, passwordPlaceholder = $$props2.passwordPlaceholder);
          if ("passwordValue" in $$props2)
            $$invalidate(0, passwordValue = $$props2.passwordValue);
          if ("display" in $$props2)
            $$invalidate(1, display = $$props2.display);
        };
        $$self.$$.update = function() {
          if ($$self.$$.dirty & 32) {
            $$invalidate(7, type = passwordVisible ? "text" : "password");
          }
        };
        return [
          passwordValue,
          display,
          showForgotPasswordLabel,
          passwordLabel,
          passwordPlaceholder,
          passwordVisible,
          inputError,
          type,
          text2,
          errorMessage,
          togglePassword,
          handleInput,
          validateField,
          passwordInputValid,
          click_handler
        ];
      }
      var PasswordInput = function(_super) {
        __extends(PasswordInput2, _super);
        function PasswordInput2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$l, create_fragment$y, safe_not_equal, {
            showForgotPasswordLabel: 2,
            passwordInputValid: 13,
            passwordLabel: 3,
            passwordPlaceholder: 4,
            passwordValue: 0,
            display: 1
          });
          return _this;
        }
        return PasswordInput2;
      }(SvelteComponent);
      function create_fragment$x(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "shape-rendering", "geometricPrecision");
            attr(path, "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm-2 16-4-4 1.41-1.41 2.59 2.58 6.59-6.59 1.41 1.42-8 8z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 22");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var SecuredIcon = function(_super) {
        __extends(SecuredIcon2, _super);
        function SecuredIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$x, safe_not_equal, {});
          return _this;
        }
        return SecuredIcon2;
      }(SvelteComponent);
      function create_if_block$g(ctx) {
        var div;
        var a;
        var securedicon;
        var t;
        var current;
        securedicon = new SecuredIcon({});
        return {
          c: function() {
            div = element("div");
            a = element("a");
            create_component(securedicon.$$.fragment);
            t = text(" Secured by Memberstack");
            attr(a, "href", "https://www.memberstack.com");
            attr(a, "target", "_blank");
            attr(div, "class", "ms-modal__footer");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, a);
            mount_component(securedicon, a, null);
            append(a, t);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(securedicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(securedicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(securedicon);
          }
        };
      }
      function create_fragment$w(ctx) {
        var if_block_anchor;
        var current;
        var if_block = !ctx[0].isPaid && create_if_block$g();
        return {
          c: function() {
            if (if_block)
              if_block.c();
            if_block_anchor = empty();
          },
          m: function(target, anchor) {
            if (if_block)
              if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx2[0].isPaid) {
              if (if_block) {
                if (dirty & 1) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block$g();
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (if_block)
              if_block.d(detaching);
            if (detaching)
              detach(if_block_anchor);
          }
        };
      }
      function instance$k($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(0, $app = $$value);
        });
        return [$app];
      }
      var ModalFooter = function(_super) {
        __extends(ModalFooter2, _super);
        function ModalFooter2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$k, create_fragment$w, safe_not_equal, {});
          return _this;
        }
        return ModalFooter2;
      }(SvelteComponent);
      function create_fragment$v(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z");
            attr(svg, "class", "ms-email");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "viewBox", "0 0 24 24");
            attr(svg, "fill", "currentColor");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var EmailIcon = function(_super) {
        __extends(EmailIcon2, _super);
        function EmailIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$v, safe_not_equal, {});
          return _this;
        }
        return EmailIcon2;
      }(SvelteComponent);
      var PasswordlessStore = writable({
        passwordlessModalType: "",
        passwordlessEmail: "",
        passwordlessMode: false,
        passwordlessCustomFields: [],
        passwordlessPlans: []
      });
      var setPasswordlessModalType = function(type) {
        PasswordlessStore.update(function(store) {
          store.passwordlessModalType = type;
          return store;
        });
      };
      var setPasswordlessEmail = function(email) {
        PasswordlessStore.update(function(store) {
          store.passwordlessEmail = email;
          return store;
        });
      };
      var setPasswordlessCustomFields = function(customFields) {
        PasswordlessStore.update(function(store) {
          store.passwordlessCustomFields = customFields;
          return store;
        });
      };
      var setPasswordlessPlans = function(plans) {
        PasswordlessStore.update(function(store) {
          store.passwordlessPlans = plans;
          return store;
        });
      };
      var setPasswordlessMode = function(mode) {
        PasswordlessStore.update(function(store) {
          store.passwordlessMode = mode;
          return store;
        });
      };
      function get_each_context$6(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[22] = list[i];
        return child_ctx;
      }
      function create_if_block_6$3(ctx) {
        var closebutton;
        var current;
        closebutton = new CloseButton({
          props: { closeModal: ctx[1] }
        });
        return {
          c: function() {
            create_component(closebutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(closebutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var closebutton_changes = {};
            if (dirty & 2)
              closebutton_changes.closeModal = ctx2[1];
            closebutton.$set(closebutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(closebutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(closebutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(closebutton, detaching);
          }
        };
      }
      function create_else_block_1$5(ctx) {
        var submitbutton;
        var current;
        submitbutton = new SubmitButton({
          props: {
            buttonText: ctx[8]["login_with_email"] || "Continue with Email",
            isLoading: ctx[3]
          }
        });
        return {
          c: function() {
            create_component(submitbutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var submitbutton_changes = {};
            if (dirty & 8)
              submitbutton_changes.isLoading = ctx2[3];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(submitbutton, detaching);
          }
        };
      }
      function create_if_block_5$3(ctx) {
        var passwordinput;
        var updating_passwordInputValid;
        var updating_display;
        var t;
        var submitbutton;
        var current;
        function passwordinput_passwordInputValid_binding(value) {
          ctx[14](value);
        }
        function passwordinput_display_binding(value) {
          ctx[15](value);
        }
        var passwordinput_props = {
          passwordPlaceholder: ctx[8]["login_password_placeholder"],
          "||": true,
          showForgotPasswordLabel: true
        };
        if (ctx[5] !== void 0) {
          passwordinput_props.passwordInputValid = ctx[5];
        }
        if (ctx[0] !== void 0) {
          passwordinput_props.display = ctx[0];
        }
        passwordinput = new PasswordInput({ props: passwordinput_props });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordInputValid", passwordinput_passwordInputValid_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput, "display", passwordinput_display_binding);
        });
        submitbutton = new SubmitButton({
          props: {
            buttonText: ctx[8]["login"] || "Log in",
            isLoading: ctx[3],
            "data-cy": "submit-button"
          }
        });
        return {
          c: function() {
            create_component(passwordinput.$$.fragment);
            t = space();
            create_component(submitbutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordinput, target, anchor);
            insert(target, t, anchor);
            mount_component(submitbutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & 32) {
              updating_passwordInputValid = true;
              passwordinput_changes.passwordInputValid = ctx2[5];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            if (!updating_display && dirty & 1) {
              updating_display = true;
              passwordinput_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            passwordinput.$set(passwordinput_changes);
            var submitbutton_changes = {};
            if (dirty & 8)
              submitbutton_changes.isLoading = ctx2[3];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordinput, detaching);
            if (detaching)
              detach(t);
            destroy_component(submitbutton, detaching);
          }
        };
      }
      function create_if_block_4$4(ctx) {
        var div;
        var button;
        var mounted;
        var dispose;
        return {
          c: function() {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(ctx[8]["dont_have_an_account"] || "Don't have an account?");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__flex ms-form__flex--centered");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
              dispose = listen(button, "click", ctx[17]);
              mounted = true;
            }
          },
          p: noop,
          d: function(detaching) {
            if (detaching)
              detach(div);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_3$4(ctx) {
        var div;
        var button;
        var mounted;
        var dispose;
        return {
          c: function() {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(ctx[8]["dont_have_an_account"] || "Don't have an account?");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__flex ms-form__flex--centered");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
              dispose = listen(button, "click", ctx[16]);
              mounted = true;
            }
          },
          p: noop,
          d: function(detaching) {
            if (detaching)
              detach(div);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block$f(ctx) {
        var div4;
        var div3;
        var div0;
        var t0;
        var div1;
        var t2;
        var div2;
        var t3;
        var t4;
        var current;
        var if_block = ctx[7].additionalAuthMethods.passwordless.enabled === true && create_if_block_1$c(ctx);
        var each_value = ctx[7].authProviders;
        var each_blocks = [];
        for (var i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
        }
        return {
          c: function() {
            div4 = element("div");
            div3 = element("div");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            div1.textContent = "".concat(ctx[8]["or"] || "or");
            t2 = space();
            div2 = element("div");
            t3 = space();
            if (if_block)
              if_block.c();
            t4 = space();
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            attr(div0, "class", "ms-modal__divider-line");
            attr(div1, "class", "ms-modal__divider-text");
            attr(div2, "class", "ms-modal__divider-line");
            attr(div3, "class", "ms-modal__social-divider");
            attr(div4, "class", "ms-modal__social");
          },
          m: function(target, anchor) {
            insert(target, div4, anchor);
            append(div4, div3);
            append(div3, div0);
            append(div3, t0);
            append(div3, div1);
            append(div3, t2);
            append(div3, div2);
            append(div4, t3);
            if (if_block)
              if_block.m(div4, null);
            append(div4, t4);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(div4, null);
            }
            current = true;
          },
          p: function(ctx2, dirty) {
            if (ctx2[7].additionalAuthMethods.passwordless.enabled === true) {
              if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 128) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block_1$c(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div4, t4);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
            if (dirty & 2432) {
              each_value = ctx2[7].authProviders;
              var i2 = void 0;
              for (i2 = 0; i2 < each_value.length; i2 += 1) {
                var child_ctx = get_each_context$6(ctx2, each_value, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                } else {
                  each_blocks[i2] = create_each_block$6(child_ctx);
                  each_blocks[i2].c();
                  each_blocks[i2].m(div4, null);
                }
              }
              for (; i2 < each_blocks.length; i2 += 1) {
                each_blocks[i2].d(1);
              }
              each_blocks.length = each_value.length;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div4);
            if (if_block)
              if_block.d();
            destroy_each(each_blocks, detaching);
          }
        };
      }
      function create_if_block_1$c(ctx) {
        var div;
        var current_block_type_index;
        var if_block;
        var current;
        var if_block_creators = [create_if_block_2$9, create_else_block$8];
        var if_blocks = [];
        function select_block_type_2(ctx2, dirty) {
          if (ctx2[6].passwordlessMode === false)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type_2(ctx);
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        return {
          c: function() {
            div = element("div");
            if_block.c();
            attr(div, "class", "ms-modal__social-buttons");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
          },
          p: function(ctx2, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_2(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block = if_blocks[current_block_type_index];
              if (!if_block) {
                if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block.c();
              } else {
                if_block.p(ctx2, dirty);
              }
              transition_in(if_block, 1);
              if_block.m(div, null);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if_blocks[current_block_type_index].d();
          }
        };
      }
      function create_else_block$8(ctx) {
        var button;
        var span;
        var mounted;
        var dispose;
        return {
          c: function() {
            button = element("button");
            span = element("span");
            span.textContent = "".concat(ctx[8]["login_with_password"] || "Log in with Password");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-password");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            if (!mounted) {
              dispose = listen(button, "click", ctx[19]);
              mounted = true;
            }
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_2$9(ctx) {
        var button;
        var emailicon;
        var t0;
        var span;
        var current;
        var mounted;
        var dispose;
        emailicon = new EmailIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(emailicon.$$.fragment);
            t0 = space();
            span = element("span");
            span.textContent = "".concat(ctx[8]["login_with_email"] || "Continue with Email");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-email");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(emailicon, button, null);
            append(button, t0);
            append(button, span);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[18]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(emailicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(emailicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(emailicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_each_block$6(ctx) {
        var div;
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1_value = (ctx[8]["continue_with"] || "Continue with") + "";
        var t1;
        var t2;
        var t3_value = ctx[22].name + "";
        var t3;
        var t4;
        var mounted;
        var dispose;
        function click_handler_4() {
          return ctx[20](ctx[22]);
        }
        return {
          c: function() {
            div = element("div");
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text(t1_value);
            t2 = space();
            t3 = text(t3_value);
            t4 = space();
            if (!src_url_equal(img.src, img_src_value = ctx[22].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[22].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
            attr(div, "class", "ms-modal__social-buttons");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            append(span, t3);
            append(div, t4);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_4);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 128 && !src_url_equal(img.src, img_src_value = ctx[22].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 128 && img_alt_value !== (img_alt_value = ctx[22].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 128 && t3_value !== (t3_value = ctx[22].name + ""))
              set_data(t3, t3_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            mounted = false;
            dispose();
          }
        };
      }
      function create_fragment$u(ctx) {
        var div1;
        var t0;
        var div0;
        var figureelement;
        var t1;
        var h2;
        var t3;
        var form;
        var emailinput;
        var updating_emailInputValid;
        var t4;
        var current_block_type_index;
        var if_block1;
        var t5;
        var t6;
        var t7;
        var modalfooter;
        var current;
        var mounted;
        var dispose;
        var if_block0 = (!ctx[2] || !ctx[2].hideCloseButton) && create_if_block_6$3(ctx);
        figureelement = new FigureElement({});
        function emailinput_emailInputValid_binding(value) {
          ctx[13](value);
        }
        var emailinput_props = {
          placeholder: ctx[8]["login_email_placeholder"]
        };
        if (ctx[4] !== void 0) {
          emailinput_props.emailInputValid = ctx[4];
        }
        emailinput = new EmailInput({ props: emailinput_props });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailInputValid", emailinput_emailInputValid_binding);
        });
        var if_block_creators = [create_if_block_5$3, create_else_block_1$5];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (!ctx2[6].passwordlessMode)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        function select_block_type_1(ctx2, dirty) {
          if (ctx2[2] && ctx2[2].signup && ctx2[2].signup.plans)
            return create_if_block_3$4;
          if (ctx2[9])
            return create_if_block_4$4;
        }
        var current_block_type = select_block_type_1(ctx);
        var if_block2 = current_block_type && current_block_type(ctx);
        var if_block3 = (ctx[7].authProviders.length > 0 || ctx[7].additionalAuthMethods.passwordless.enabled === true) && create_if_block$f(ctx);
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div1 = element("div");
            if (if_block0)
              if_block0.c();
            t0 = space();
            div0 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "".concat(ctx[8]["login_to_your_account"] || "Login to your account");
            t3 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t4 = space();
            if_block1.c();
            t5 = space();
            if (if_block2)
              if_block2.c();
            t6 = space();
            if (if_block3)
              if_block3.c();
            t7 = space();
            create_component(modalfooter.$$.fragment);
            attr(h2, "class", "ms-modal__title");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div0, "class", "ms-modal__content");
            attr(div1, "class", "ms-modal");
            attr(div1, "id", "LoginModal");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            if (if_block0)
              if_block0.m(div1, null);
            append(div1, t0);
            append(div1, div0);
            mount_component(figureelement, div0, null);
            append(div0, t1);
            append(div0, h2);
            append(div0, t3);
            append(div0, form);
            mount_component(emailinput, form, null);
            append(form, t4);
            if_blocks[current_block_type_index].m(form, null);
            append(form, t5);
            if (if_block2)
              if_block2.m(form, null);
            append(div0, t6);
            if (if_block3)
              if_block3.m(div0, null);
            append(div1, t7);
            mount_component(modalfooter, div1, null);
            current = true;
            if (!mounted) {
              dispose = listen(form, "submit", stop_propagation(prevent_default(ctx[10])));
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx2[2] || !ctx2[2].hideCloseButton) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 4) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_6$3(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div1, t0);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & 16) {
              updating_emailInputValid = true;
              emailinput_changes.emailInputValid = ctx2[4];
              add_flush_callback(function() {
                return updating_emailInputValid = false;
              });
            }
            emailinput.$set(emailinput_changes);
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block1 = if_blocks[current_block_type_index];
              if (!if_block1) {
                if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block1.c();
              } else {
                if_block1.p(ctx2, dirty);
              }
              transition_in(if_block1, 1);
              if_block1.m(form, t5);
            }
            if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block2) {
              if_block2.p(ctx2, dirty);
            } else {
              if (if_block2)
                if_block2.d(1);
              if_block2 = current_block_type && current_block_type(ctx2);
              if (if_block2) {
                if_block2.c();
                if_block2.m(form, null);
              }
            }
            if (ctx2[7].authProviders.length > 0 || ctx2[7].additionalAuthMethods.passwordless.enabled === true) {
              if (if_block3) {
                if_block3.p(ctx2, dirty);
                if (dirty & 128) {
                  transition_in(if_block3, 1);
                }
              } else {
                if_block3 = create_if_block$f(ctx2);
                if_block3.c();
                transition_in(if_block3, 1);
                if_block3.m(div0, null);
              }
            } else if (if_block3) {
              group_outros();
              transition_out(if_block3, 1, 1, function() {
                if_block3 = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(if_block1);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(if_block1);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            if (if_block0)
              if_block0.d();
            destroy_component(figureelement);
            destroy_component(emailinput);
            if_blocks[current_block_type_index].d();
            if (if_block2) {
              if_block2.d();
            }
            if (if_block3)
              if_block3.d();
            destroy_component(modalfooter);
            mounted = false;
            dispose();
          }
        };
      }
      function instance$j($$self, $$props, $$invalidate) {
        var $PasswordlessStore;
        var $app;
        var $textStore;
        component_subscribe($$self, PasswordlessStore, function($$value) {
          return $$invalidate(6, $PasswordlessStore = $$value);
        });
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(7, $app = $$value);
        });
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(21, $textStore = $$value);
        });
        var closeModal = $$props.closeModal;
        var display = $$props.display;
        var onSuccessLogin = $$props.onSuccessLogin;
        var params = $$props.params;
        var text2 = $textStore.text;
        var showLoader = false;
        var emailInputValid = false;
        var passwordInputValid = false;
        if ($app.additionalAuthMethods.passwordless.isDefault === true) {
          setPasswordlessMode(true);
        }
        var signupButtonURL = Boolean(window.ssoUI) && $app.ssoSignupButtonURL;
        function submitLogin(e) {
          return __awaiter(this, void 0, void 0, function() {
            var emailInput, passwordInput, data, err_1, err_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  emailInput = e.target.querySelector("[name=eml]");
                  passwordInput = e.target.querySelector("[name=psw]");
                  if (!($PasswordlessStore.passwordlessMode !== true))
                    return [3, 5];
                  if (!emailInputValid || !passwordInputValid)
                    return [2];
                  $$invalidate(3, showLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.loginMemberEmailPassword({
                    email: emailInput.value,
                    password: passwordInput.value
                  }, { includeContentGroups: true })];
                case 2:
                  data = _a.sent().data;
                  onSuccessLogin({ type: "LOGIN", data });
                  $$invalidate(3, showLoader = false);
                  return [3, 4];
                case 3:
                  err_1 = _a.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_1.message, true);
                  return [3, 4];
                case 4:
                  return [3, 9];
                case 5:
                  if (!emailInputValid)
                    return [2];
                  $$invalidate(3, showLoader = true);
                  _a.label = 6;
                case 6:
                  _a.trys.push([6, 8, , 9]);
                  return [4, window.$memberstackDom.sendMemberLoginPasswordlessEmail({ email: emailInput.value })];
                case 7:
                  _a.sent();
                  setPasswordlessModalType("login");
                  setPasswordlessEmail(emailInput.value);
                  $$invalidate(0, display = "passwordless_token");
                  $$invalidate(3, showLoader = false);
                  return [3, 9];
                case 8:
                  err_2 = _a.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_2.message, true);
                  return [3, 9];
                case 9:
                  return [2];
              }
            });
          });
        }
        function submitLoginWithProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var data, err_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4, window.$memberstackDom.loginWithProvider({ provider })];
                case 1:
                  data = _a.sent().data;
                  onSuccessLogin({ type: "LOGIN", data });
                  return [3, 3];
                case 2:
                  err_3 = _a.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_3.message, true);
                  return [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }
        function emailinput_emailInputValid_binding(value) {
          emailInputValid = value;
          $$invalidate(4, emailInputValid);
        }
        function passwordinput_passwordInputValid_binding(value) {
          passwordInputValid = value;
          $$invalidate(5, passwordInputValid);
        }
        function passwordinput_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        var click_handler = function() {
          return $$invalidate(0, display = "signup");
        };
        var click_handler_1 = function() {
          return window.location.href = signupButtonURL;
        };
        var click_handler_2 = function() {
          return setPasswordlessMode(true);
        };
        var click_handler_3 = function() {
          return setPasswordlessMode(false);
        };
        var click_handler_4 = function(provider) {
          return submitLoginWithProvider(provider.provider);
        };
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(1, closeModal = $$props2.closeModal);
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
          if ("onSuccessLogin" in $$props2)
            $$invalidate(12, onSuccessLogin = $$props2.onSuccessLogin);
          if ("params" in $$props2)
            $$invalidate(2, params = $$props2.params);
        };
        return [
          display,
          closeModal,
          params,
          showLoader,
          emailInputValid,
          passwordInputValid,
          $PasswordlessStore,
          $app,
          text2,
          signupButtonURL,
          submitLogin,
          submitLoginWithProvider,
          onSuccessLogin,
          emailinput_emailInputValid_binding,
          passwordinput_passwordInputValid_binding,
          passwordinput_display_binding,
          click_handler,
          click_handler_1,
          click_handler_2,
          click_handler_3,
          click_handler_4
        ];
      }
      var LoginModal = function(_super) {
        __extends(LoginModal2, _super);
        function LoginModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$j, create_fragment$u, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessLogin: 12,
            params: 2
          });
          return _this;
        }
        return LoginModal2;
      }(SvelteComponent);
      function add_css$1(target) {
        append_styles(target, "svelte-1w8lbd8", ".rey-was-here.svelte-1w8lbd8{display:none !important}");
      }
      function get_each_context$5(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[24] = list[i];
        return child_ctx;
      }
      function get_each_context_1(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[27] = list[i];
        child_ctx[29] = i;
        return child_ctx;
      }
      function create_if_block_6$2(ctx) {
        var closebutton;
        var current;
        closebutton = new CloseButton({
          props: { closeModal: ctx[1] }
        });
        return {
          c: function() {
            create_component(closebutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(closebutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var closebutton_changes = {};
            if (dirty & 2)
              closebutton_changes.closeModal = ctx2[1];
            closebutton.$set(closebutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(closebutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(closebutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(closebutton, detaching);
          }
        };
      }
      function create_if_block_5$2(ctx) {
        var div1;
        var div0;
        var label;
        var t0_value = ctx[27].label + "";
        var t0;
        var label_for_value;
        var t1;
        var input;
        var input_placeholder_value;
        var input_name_value;
        return {
          c: function() {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = ctx[27].key);
            attr(input, "class", "ms-form__input");
            attr(input, "data-ms-custom-field", "");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = ctx[27].label);
            attr(input, "name", input_name_value = ctx[27].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
          },
          p: function(ctx2, dirty) {
            if (dirty & 128 && t0_value !== (t0_value = ctx2[27].label + ""))
              set_data(t0, t0_value);
            if (dirty & 128 && label_for_value !== (label_for_value = ctx2[27].key)) {
              attr(label, "for", label_for_value);
            }
            if (dirty & 128 && input_placeholder_value !== (input_placeholder_value = ctx2[27].label)) {
              attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & 128 && input_name_value !== (input_name_value = ctx2[27].key)) {
              attr(input, "name", input_name_value);
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
          }
        };
      }
      function create_each_block_1(ctx) {
        var if_block_anchor;
        var if_block = ctx[27].hidden !== true && create_if_block_5$2(ctx);
        return {
          c: function() {
            if (if_block)
              if_block.c();
            if_block_anchor = empty();
          },
          m: function(target, anchor) {
            if (if_block)
              if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
          },
          p: function(ctx2, dirty) {
            if (ctx2[27].hidden !== true) {
              if (if_block) {
                if_block.p(ctx2, dirty);
              } else {
                if_block = create_if_block_5$2(ctx2);
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
              }
            } else if (if_block) {
              if_block.d(1);
              if_block = null;
            }
          },
          d: function(detaching) {
            if (if_block)
              if_block.d(detaching);
            if (detaching)
              detach(if_block_anchor);
          }
        };
      }
      function create_if_block_4$3(ctx) {
        var passwordinput;
        var updating_passwordInputValid;
        var current;
        function passwordinput_passwordInputValid_binding(value) {
          ctx[13](value);
        }
        var passwordinput_props = {};
        if (ctx[5] !== void 0) {
          passwordinput_props.passwordInputValid = ctx[5];
        }
        passwordinput = new PasswordInput({ props: passwordinput_props });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordInputValid", passwordinput_passwordInputValid_binding);
        });
        return {
          c: function() {
            create_component(passwordinput.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & 32) {
              updating_passwordInputValid = true;
              passwordinput_changes.passwordInputValid = ctx2[5];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput.$set(passwordinput_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordinput, detaching);
          }
        };
      }
      function create_else_block_1$4(ctx) {
        var submitbutton;
        var current;
        submitbutton = new SubmitButton({
          props: {
            buttonText: "Continue with Email",
            isLoading: ctx[3]
          }
        });
        return {
          c: function() {
            create_component(submitbutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var submitbutton_changes = {};
            if (dirty & 8)
              submitbutton_changes.isLoading = ctx2[3];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(submitbutton, detaching);
          }
        };
      }
      function create_if_block_3$3(ctx) {
        var submitbutton;
        var current;
        submitbutton = new SubmitButton({
          props: {
            buttonText: "Sign up",
            isLoading: ctx[3]
          }
        });
        return {
          c: function() {
            create_component(submitbutton.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var submitbutton_changes = {};
            if (dirty & 8)
              submitbutton_changes.isLoading = ctx2[3];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(submitbutton, detaching);
          }
        };
      }
      function create_if_block$e(ctx) {
        var div4;
        var div3;
        var t3;
        var t4;
        var current;
        var if_block = ctx[7].additionalAuthMethods.passwordless.enabled === true && create_if_block_1$b(ctx);
        var each_value = ctx[7].authProviders;
        var each_blocks = [];
        for (var i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
        }
        return {
          c: function() {
            div4 = element("div");
            div3 = element("div");
            div3.innerHTML = '<div class="ms-modal__divider-line"></div> \n          <div class="ms-modal__divider-text">or</div> \n          <div class="ms-modal__divider-line"></div>';
            t3 = space();
            if (if_block)
              if_block.c();
            t4 = space();
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            attr(div3, "class", "ms-modal__social-divider");
            attr(div4, "class", "ms-modal__social");
          },
          m: function(target, anchor) {
            insert(target, div4, anchor);
            append(div4, div3);
            append(div4, t3);
            if (if_block)
              if_block.m(div4, null);
            append(div4, t4);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(div4, null);
            }
            current = true;
          },
          p: function(ctx2, dirty) {
            if (ctx2[7].additionalAuthMethods.passwordless.enabled === true) {
              if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 128) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block_1$b(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div4, t4);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
            if (dirty & 1152) {
              each_value = ctx2[7].authProviders;
              var i2 = void 0;
              for (i2 = 0; i2 < each_value.length; i2 += 1) {
                var child_ctx = get_each_context$5(ctx2, each_value, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                } else {
                  each_blocks[i2] = create_each_block$5(child_ctx);
                  each_blocks[i2].c();
                  each_blocks[i2].m(div4, null);
                }
              }
              for (; i2 < each_blocks.length; i2 += 1) {
                each_blocks[i2].d(1);
              }
              each_blocks.length = each_value.length;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div4);
            if (if_block)
              if_block.d();
            destroy_each(each_blocks, detaching);
          }
        };
      }
      function create_if_block_1$b(ctx) {
        var div;
        var current_block_type_index;
        var if_block;
        var current;
        var if_block_creators = [create_if_block_2$8, create_else_block$7];
        var if_blocks = [];
        function select_block_type_1(ctx2, dirty) {
          if (ctx2[6].passwordlessMode === false)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type_1(ctx);
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        return {
          c: function() {
            div = element("div");
            if_block.c();
            attr(div, "class", "ms-modal__social-buttons");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
          },
          p: function(ctx2, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_1(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block = if_blocks[current_block_type_index];
              if (!if_block) {
                if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block.c();
              } else {
                if_block.p(ctx2, dirty);
              }
              transition_in(if_block, 1);
              if_block.m(div, null);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if_blocks[current_block_type_index].d();
          }
        };
      }
      function create_else_block$7(ctx) {
        var button;
        var span;
        var mounted;
        var dispose;
        return {
          c: function() {
            button = element("button");
            span = element("span");
            span.textContent = "".concat(ctx[8]["signup_with_password"] || "Signup with Password");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-password");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            if (!mounted) {
              dispose = listen(button, "click", ctx[16]);
              mounted = true;
            }
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_2$8(ctx) {
        var button;
        var emailicon;
        var t0;
        var span;
        var current;
        var mounted;
        var dispose;
        emailicon = new EmailIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(emailicon.$$.fragment);
            t0 = space();
            span = element("span");
            span.textContent = "".concat(ctx[8]["continue_with_email"] || "Continue with Email");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-email");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(emailicon, button, null);
            append(button, t0);
            append(button, span);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[15]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(emailicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(emailicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(emailicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_each_block$5(ctx) {
        var div;
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1;
        var t2_value = ctx[24].name + "";
        var t2;
        var t3;
        var mounted;
        var dispose;
        function click_handler_3() {
          return ctx[17](ctx[24]);
        }
        return {
          c: function() {
            div = element("div");
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Continue with ");
            t2 = text(t2_value);
            t3 = space();
            if (!src_url_equal(img.src, img_src_value = ctx[24].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[24].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
            attr(div, "class", "ms-modal__social-buttons");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            append(div, t3);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_3);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 128 && !src_url_equal(img.src, img_src_value = ctx[24].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 128 && img_alt_value !== (img_alt_value = ctx[24].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 128 && t2_value !== (t2_value = ctx[24].name + ""))
              set_data(t2, t2_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            mounted = false;
            dispose();
          }
        };
      }
      function create_fragment$t(ctx) {
        var div4;
        var t0;
        var div3;
        var figureelement;
        var t1;
        var h2;
        var t3;
        var form;
        var t4;
        var emailinput;
        var updating_emailInputValid;
        var t5;
        var div0;
        var t8;
        var t9;
        var div1;
        var t10;
        var current_block_type_index;
        var if_block2;
        var t11;
        var div2;
        var button;
        var t13;
        var t14;
        var modalfooter;
        var current;
        var mounted;
        var dispose;
        var if_block0 = (!ctx[2] || !ctx[2].hideCloseButton) && create_if_block_6$2(ctx);
        figureelement = new FigureElement({});
        var each_value_1 = ctx[7].customFields;
        var each_blocks = [];
        for (var i = 0; i < each_value_1.length; i += 1) {
          each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
        }
        function emailinput_emailInputValid_binding(value) {
          ctx[12](value);
        }
        var emailinput_props = {};
        if (ctx[4] !== void 0) {
          emailinput_props.emailInputValid = ctx[4];
        }
        emailinput = new EmailInput({ props: emailinput_props });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailInputValid", emailinput_emailInputValid_binding);
        });
        var if_block1 = ctx[6].passwordlessMode === false && create_if_block_4$3(ctx);
        var if_block_creators = [create_if_block_3$3, create_else_block_1$4];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[6].passwordlessMode === false)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        var if_block3 = (ctx[7].authProviders.length > 0 || ctx[7].additionalAuthMethods.passwordless.enabled === true) && create_if_block$e(ctx);
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div4 = element("div");
            if (if_block0)
              if_block0.c();
            t0 = space();
            div3 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "Create an account";
            t3 = space();
            form = element("form");
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            t4 = space();
            create_component(emailinput.$$.fragment);
            t5 = space();
            div0 = element("div");
            div0.innerHTML = '<label class="ms-form__label" for="Rey">Rey was here</label> \n        <input class="ms-form__input" type="text" placeholder="Rey&#39;s Favorite Color" name="Rey"/>';
            t8 = space();
            if (if_block1)
              if_block1.c();
            t9 = space();
            div1 = element("div");
            t10 = space();
            if_block2.c();
            t11 = space();
            div2 = element("div");
            button = element("button");
            button.textContent = "Already have an account?";
            t13 = space();
            if (if_block3)
              if_block3.c();
            t14 = space();
            create_component(modalfooter.$$.fragment);
            attr(h2, "class", "ms-modal__title");
            attr(div0, "class", "ms-form__group rey-was-here svelte-1w8lbd8");
            attr(div1, "id", "hcaptcha");
            attr(div1, "class", "h-captcha");
            attr(button, "class", "ms-form__button ms-form__button--text ms-form__button--top-spacing");
            attr(div2, "class", "ms-form__flex ms-form__flex--centered");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div3, "class", "ms-modal__content");
            attr(div4, "class", "ms-modal");
            attr(div4, "id", "SignupModal");
          },
          m: function(target, anchor) {
            insert(target, div4, anchor);
            if (if_block0)
              if_block0.m(div4, null);
            append(div4, t0);
            append(div4, div3);
            mount_component(figureelement, div3, null);
            append(div3, t1);
            append(div3, h2);
            append(div3, t3);
            append(div3, form);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(form, null);
            }
            append(form, t4);
            mount_component(emailinput, form, null);
            append(form, t5);
            append(form, div0);
            append(form, t8);
            if (if_block1)
              if_block1.m(form, null);
            append(form, t9);
            append(form, div1);
            append(form, t10);
            if_blocks[current_block_type_index].m(form, null);
            append(form, t11);
            append(form, div2);
            append(div2, button);
            append(div3, t13);
            if (if_block3)
              if_block3.m(div3, null);
            append(div4, t14);
            mount_component(modalfooter, div4, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button, "click", ctx[14]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[9])))
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx2[2] || !ctx2[2].hideCloseButton) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 4) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_6$2(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div4, t0);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            if (dirty & 128) {
              each_value_1 = ctx2[7].customFields;
              var i2 = void 0;
              for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
                var child_ctx = get_each_context_1(ctx2, each_value_1, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                } else {
                  each_blocks[i2] = create_each_block_1(child_ctx);
                  each_blocks[i2].c();
                  each_blocks[i2].m(form, t4);
                }
              }
              for (; i2 < each_blocks.length; i2 += 1) {
                each_blocks[i2].d(1);
              }
              each_blocks.length = each_value_1.length;
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & 16) {
              updating_emailInputValid = true;
              emailinput_changes.emailInputValid = ctx2[4];
              add_flush_callback(function() {
                return updating_emailInputValid = false;
              });
            }
            emailinput.$set(emailinput_changes);
            if (ctx2[6].passwordlessMode === false) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
                if (dirty & 64) {
                  transition_in(if_block1, 1);
                }
              } else {
                if_block1 = create_if_block_4$3(ctx2);
                if_block1.c();
                transition_in(if_block1, 1);
                if_block1.m(form, t9);
              }
            } else if (if_block1) {
              group_outros();
              transition_out(if_block1, 1, 1, function() {
                if_block1 = null;
              });
              check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block2 = if_blocks[current_block_type_index];
              if (!if_block2) {
                if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block2.c();
              } else {
                if_block2.p(ctx2, dirty);
              }
              transition_in(if_block2, 1);
              if_block2.m(form, t11);
            }
            if (ctx2[7].authProviders.length > 0 || ctx2[7].additionalAuthMethods.passwordless.enabled === true) {
              if (if_block3) {
                if_block3.p(ctx2, dirty);
                if (dirty & 128) {
                  transition_in(if_block3, 1);
                }
              } else {
                if_block3 = create_if_block$e(ctx2);
                if_block3.c();
                transition_in(if_block3, 1);
                if_block3.m(div3, null);
              }
            } else if (if_block3) {
              group_outros();
              transition_out(if_block3, 1, 1, function() {
                if_block3 = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(if_block1);
            transition_in(if_block2);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(if_block1);
            transition_out(if_block2);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div4);
            if (if_block0)
              if_block0.d();
            destroy_component(figureelement);
            destroy_each(each_blocks, detaching);
            destroy_component(emailinput);
            if (if_block1)
              if_block1.d();
            if_blocks[current_block_type_index].d();
            if (if_block3)
              if_block3.d();
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      var hcaptchaSitekey = "838711f9-0e30-48e9-89e6-8f1ec4b79705";
      function executeCaptcha() {
        return __awaiter(this, void 0, void 0, function() {
          var response;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, window.hcaptcha.execute({ async: true })];
              case 1:
                response = _a.sent().response;
                return [2, response];
            }
          });
        });
      }
      function instance$i($$self, $$props, $$invalidate) {
        var $PasswordlessStore;
        var $app;
        var $textStore;
        component_subscribe($$self, PasswordlessStore, function($$value) {
          return $$invalidate(6, $PasswordlessStore = $$value);
        });
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(7, $app = $$value);
        });
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(19, $textStore = $$value);
        });
        var closeModal = $$props.closeModal;
        var display = $$props.display;
        var onSuccessSignup = $$props.onSuccessSignup;
        var params = $$props.params;
        if ($app.additionalAuthMethods.passwordless.isDefault === true) {
          setPasswordlessMode(true);
        }
        var text2 = $textStore.text;
        var showLoader = false;
        var emailInputValid = false;
        var passwordInputValid = false;
        var captchaRequired = $app.captchaRequired;
        var hcaptchaWidgetID;
        function renderCaptcha() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!captchaRequired)
                    return [3, 2];
                  return [4, window.$memberstackDom._captchaReady];
                case 1:
                  _a.sent();
                  hcaptchaWidgetID = window.hcaptcha.render("hcaptcha", { sitekey: hcaptchaSitekey, theme: "light" });
                  _a.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        }
        renderCaptcha();
        function getCaptcha() {
          return window.hcaptcha.getResponse(hcaptchaWidgetID);
        }
        function resetCaptcha() {
          if (captchaRequired && window.hcaptcha) {
            window.hcaptcha.reset(hcaptchaWidgetID);
          }
        }
        function submitSignup(e) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function() {
            var emailInput, passwordInput, customFields, customFieldInputs, captchaToken, err_4, plans, data, err_5, err_6;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  emailInput = e.target.querySelector("[type=email]");
                  passwordInput = e.target.querySelector("[data-ms-internal-password]");
                  customFields = {};
                  customFieldInputs = Array.from(e.target.querySelectorAll("[data-ms-custom-field]"));
                  customFieldInputs.map(function(input) {
                    customFields[input.getAttribute("name")] = input.value;
                  }).length;
                  if ($PasswordlessStore.passwordlessMode !== true) {
                    if (!emailInputValid || !passwordInputValid)
                      return [2];
                  } else {
                    if (!emailInputValid)
                      return [2];
                  }
                  $$invalidate(3, showLoader = true);
                  if (e.target.querySelector("[name=Rey]").value) {
                    e.target.reset();
                    $$invalidate(3, showLoader = false);
                    return [2];
                  }
                  if (!captchaRequired)
                    return [3, 5];
                  return [4, window.$memberstackDom._captchaReady];
                case 1:
                  _c.sent();
                  captchaToken = getCaptcha();
                  if (!!captchaToken)
                    return [3, 5];
                  _c.label = 2;
                case 2:
                  _c.trys.push([2, 4, , 5]);
                  return [4, executeCaptcha()];
                case 3:
                  captchaToken = _c.sent();
                  return [3, 5];
                case 4:
                  err_4 = _c.sent();
                  $$invalidate(3, showLoader = false);
                  return [2];
                case 5:
                  if (!($PasswordlessStore.passwordlessMode !== true))
                    return [3, 10];
                  _c.label = 6;
                case 6:
                  _c.trys.push([6, 8, , 9]);
                  plans = (((_a = params === null || params === void 0 ? void 0 : params.signup) === null || _a === void 0 ? void 0 : _a.plans) || []).map(function(plan) {
                    return { planId: plan };
                  });
                  return [4, window.$memberstackDom.signupMemberEmailPassword({
                    email: emailInput.value,
                    password: passwordInput.value,
                    plans,
                    customFields,
                    captchaToken
                  }, { includeContentGroups: true })];
                case 7:
                  data = _c.sent().data;
                  onSuccessSignup({ type: "SIGNUP", data });
                  $$invalidate(3, showLoader = false);
                  return [3, 9];
                case 8:
                  err_5 = _c.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_5.message, true);
                  resetCaptcha();
                  return [3, 9];
                case 9:
                  return [3, 13];
                case 10:
                  _c.trys.push([10, 12, , 13]);
                  return [4, window.$memberstackDom.sendMemberSignupPasswordlessEmail({ email: emailInput.value })];
                case 11:
                  _c.sent();
                  setPasswordlessModalType("signup");
                  setPasswordlessEmail(emailInput.value);
                  setPasswordlessPlans(((_b = params === null || params === void 0 ? void 0 : params.signup) === null || _b === void 0 ? void 0 : _b.plans) || []);
                  setPasswordlessCustomFields(customFields);
                  $$invalidate(0, display = "passwordless_token");
                  $$invalidate(3, showLoader = false);
                  return [3, 13];
                case 12:
                  err_6 = _c.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_6.message, true);
                  resetCaptcha();
                  return [3, 13];
                case 13:
                  return [2];
              }
            });
          });
        }
        function submitSignupWithProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var data, err_7;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4, window.$memberstackDom.signupWithProvider({ provider })];
                case 1:
                  data = _a.sent().data;
                  onSuccessSignup({ type: "SIGNUP", data });
                  return [3, 3];
                case 2:
                  err_7 = _a.sent();
                  $$invalidate(3, showLoader = false);
                  window.$memberstackDom._showMessage(err_7.message, true);
                  return [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }
        function emailinput_emailInputValid_binding(value) {
          emailInputValid = value;
          $$invalidate(4, emailInputValid);
        }
        function passwordinput_passwordInputValid_binding(value) {
          passwordInputValid = value;
          $$invalidate(5, passwordInputValid);
        }
        var click_handler = function() {
          return $$invalidate(0, display = "login");
        };
        var click_handler_1 = function() {
          return setPasswordlessMode(true);
        };
        var click_handler_2 = function() {
          return setPasswordlessMode(false);
        };
        var click_handler_3 = function(provider) {
          return submitSignupWithProvider(provider.provider);
        };
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(1, closeModal = $$props2.closeModal);
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
          if ("onSuccessSignup" in $$props2)
            $$invalidate(11, onSuccessSignup = $$props2.onSuccessSignup);
          if ("params" in $$props2)
            $$invalidate(2, params = $$props2.params);
        };
        return [
          display,
          closeModal,
          params,
          showLoader,
          emailInputValid,
          passwordInputValid,
          $PasswordlessStore,
          $app,
          text2,
          submitSignup,
          submitSignupWithProvider,
          onSuccessSignup,
          emailinput_emailInputValid_binding,
          passwordinput_passwordInputValid_binding,
          click_handler,
          click_handler_1,
          click_handler_2,
          click_handler_3
        ];
      }
      var SignupModal = function(_super) {
        __extends(SignupModal2, _super);
        function SignupModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$i, create_fragment$t, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessSignup: 11,
            params: 2
          }, add_css$1);
          return _this;
        }
        return SignupModal2;
      }(SvelteComponent);
      function create_fragment$s(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 8 12");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var BackIcon = function(_super) {
        __extends(BackIcon2, _super);
        function BackIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$s, safe_not_equal, {});
          return _this;
        }
        return BackIcon2;
      }(SvelteComponent);
      function create_fragment$r(ctx) {
        var div4;
        var div0;
        var button;
        var backicon;
        var t0;
        var div3;
        var figureelement;
        var t1;
        var h2;
        var t3;
        var p;
        var t5;
        var form;
        var emailinput;
        var updating_emailInputValid;
        var t6;
        var submitbutton;
        var t7;
        var div2;
        var div1;
        var t9;
        var modalfooter;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        figureelement = new FigureElement({});
        function emailinput_emailInputValid_binding(value) {
          ctx[7](value);
        }
        var emailinput_props = {
          placeholder: ctx[3]["reset_email_placeholder"]
        };
        if (ctx[1] !== void 0) {
          emailinput_props.emailInputValid = ctx[1];
        }
        emailinput = new EmailInput({ props: emailinput_props });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailInputValid", emailinput_emailInputValid_binding);
        });
        submitbutton = new SubmitButton({
          props: {
            buttonText: ctx[3]["reset"] || "Send Link",
            isLoading: ctx[2]
          }
        });
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div4 = element("div");
            div0 = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            div3 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "".concat(ctx[3]["reset_your_password"] || "Reset your password");
            t3 = space();
            p = element("p");
            p.textContent = "".concat(ctx[3]["reset_instructions"] || "We\u2019ll email you a secure link to reset the password for your account.");
            t5 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t6 = space();
            create_component(submitbutton.$$.fragment);
            t7 = space();
            div2 = element("div");
            div1 = element("div");
            div1.textContent = "".concat(ctx[3]["reset_already_have_code"] || "I already have a code");
            t9 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "data-cy", "back-btn");
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
            attr(p, "class", "ms-modal__text");
            attr(div1, "class", "ms-form__link");
            attr(div2, "class", "ms-form__flex ms-form__flex--centered");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div3, "class", "ms-modal__content");
            attr(div4, "class", "ms-modal");
            attr(div4, "id", "PasswordResetModal");
          },
          m: function(target, anchor) {
            insert(target, div4, anchor);
            append(div4, div0);
            append(div0, button);
            mount_component(backicon, button, null);
            append(div4, t0);
            append(div4, div3);
            mount_component(figureelement, div3, null);
            append(div3, t1);
            append(div3, h2);
            append(div3, t3);
            append(div3, p);
            append(div3, t5);
            append(div3, form);
            mount_component(emailinput, form, null);
            append(form, t6);
            mount_component(submitbutton, form, null);
            append(form, t7);
            append(form, div2);
            append(div2, div1);
            append(div4, t9);
            mount_component(modalfooter, div4, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button, "click", ctx[6]),
                listen(div1, "click", ctx[8]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[4])))
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & 2) {
              updating_emailInputValid = true;
              emailinput_changes.emailInputValid = ctx2[1];
              add_flush_callback(function() {
                return updating_emailInputValid = false;
              });
            }
            emailinput.$set(emailinput_changes);
            var submitbutton_changes = {};
            if (dirty & 4)
              submitbutton_changes.isLoading = ctx2[2];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div4);
            destroy_component(backicon);
            destroy_component(figureelement);
            destroy_component(emailinput);
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$h($$self, $$props, $$invalidate) {
        var $textStore;
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(9, $textStore = $$value);
        });
        var text2 = $textStore.text;
        var closeModal = $$props.closeModal;
        var display = $$props.display;
        var emailInputValid = false;
        var showLoader = false;
        function submitPasswordReset(e) {
          return __awaiter(this, void 0, void 0, function() {
            var emailInput, err_8;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  emailInput = e.target[0];
                  if (!emailInputValid)
                    return [2];
                  $$invalidate(2, showLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.sendMemberResetPasswordEmail({ email: emailInput.value })];
                case 2:
                  _a.sent();
                  $$invalidate(0, display = "reset_password");
                  return [3, 4];
                case 3:
                  err_8 = _a.sent();
                  console.log(err_8);
                  $$invalidate(2, showLoader = false);
                  if (err_8.message) {
                    window.$memberstackDom._showMessage(err_8.message, false);
                  }
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        var click_handler = function() {
          return $$invalidate(0, display = "login");
        };
        function emailinput_emailInputValid_binding(value) {
          emailInputValid = value;
          $$invalidate(1, emailInputValid);
        }
        var click_handler_1 = function() {
          return $$invalidate(0, display = "reset_password");
        };
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(5, closeModal = $$props2.closeModal);
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
        };
        return [
          display,
          emailInputValid,
          showLoader,
          text2,
          submitPasswordReset,
          closeModal,
          click_handler,
          emailinput_emailInputValid_binding,
          click_handler_1
        ];
      }
      var PassResetModal = function(_super) {
        __extends(PassResetModal2, _super);
        function PassResetModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$h, create_fragment$r, safe_not_equal, { closeModal: 5, display: 0 });
          return _this;
        }
        return PassResetModal2;
      }(SvelteComponent);
      function create_if_block$d(ctx) {
        var div;
        var erroricon;
        var t;
        var current;
        erroricon = new ErrorIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t = text(" Please enter a valid code");
            attr(div, "class", "ms-form__error");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(erroricon);
          }
        };
      }
      function create_fragment$q(ctx) {
        var div3;
        var div0;
        var button;
        var backicon;
        var t0;
        var closebutton;
        var t1;
        var div2;
        var figureelement;
        var t2;
        var h2;
        var t4;
        var form;
        var div1;
        var label;
        var t6;
        var fieldset;
        var t12;
        var t13;
        var passwordinput;
        var updating_passwordInputValid;
        var t14;
        var submitbutton;
        var t15;
        var modalfooter;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        closebutton = new CloseButton({
          props: { closeModal: ctx[1] }
        });
        figureelement = new FigureElement({});
        var if_block = !ctx[3] && create_if_block$d();
        function passwordinput_passwordInputValid_binding(value) {
          ctx[9](value);
        }
        var passwordinput_props = {
          passwordPlaceholder: ctx[5]["reset_password_placeholder"],
          passwordLabel: ctx[5]["password"] || "Password"
        };
        if (ctx[4] !== void 0) {
          passwordinput_props.passwordInputValid = ctx[4];
        }
        passwordinput = new PasswordInput({ props: passwordinput_props });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordInputValid", passwordinput_passwordInputValid_binding);
        });
        submitbutton = new SubmitButton({
          props: {
            buttonText: ctx[5]["reset_confirm_reset"] || "Confirm & Reset",
            isLoading: ctx[2]
          }
        });
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div3 = element("div");
            div0 = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div2 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            h2 = element("h2");
            h2.textContent = "".concat(ctx[5]["reset_your_password"] || "Reset your password");
            t4 = space();
            form = element("form");
            div1 = element("div");
            label = element("label");
            label.textContent = "".concat(ctx[5]["reset_enter_code"] || "Enter your 6-digit code");
            t6 = space();
            fieldset = element("fieldset");
            fieldset.innerHTML = '<input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token"/>';
            t12 = space();
            if (if_block)
              if_block.c();
            t13 = space();
            create_component(passwordinput.$$.fragment);
            t14 = space();
            create_component(submitbutton.$$.fragment);
            t15 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "token-fieldset");
            attr(fieldset, "class", "ms-form__fieldset");
            attr(fieldset, "name", "token-fieldset");
            attr(div1, "class", "ms-form__group");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div2, "class", "ms-modal__content");
            attr(div3, "class", "ms-modal");
            attr(div3, "id", "PasswordTokenModal");
          },
          m: function(target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            append(div0, button);
            mount_component(backicon, button, null);
            append(div3, t0);
            mount_component(closebutton, div3, null);
            append(div3, t1);
            append(div3, div2);
            mount_component(figureelement, div2, null);
            append(div2, t2);
            append(div2, h2);
            append(div2, t4);
            append(div2, form);
            append(form, div1);
            append(div1, label);
            append(div1, t6);
            append(div1, fieldset);
            append(div1, t12);
            if (if_block)
              if_block.m(div1, null);
            append(form, t13);
            mount_component(passwordinput, form, null);
            append(form, t14);
            mount_component(submitbutton, form, null);
            append(div3, t15);
            mount_component(modalfooter, div3, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button, "click", ctx[8]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[6])))
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var closebutton_changes = {};
            if (dirty & 2)
              closebutton_changes.closeModal = ctx2[1];
            closebutton.$set(closebutton_changes);
            if (!ctx2[3]) {
              if (if_block) {
                if (dirty & 8) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block$d();
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div1, null);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & 16) {
              updating_passwordInputValid = true;
              passwordinput_changes.passwordInputValid = ctx2[4];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput.$set(passwordinput_changes);
            var submitbutton_changes = {};
            if (dirty & 4)
              submitbutton_changes.isLoading = ctx2[2];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(if_block);
            transition_in(passwordinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(if_block);
            transition_out(passwordinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div3);
            destroy_component(backicon);
            destroy_component(closebutton);
            destroy_component(figureelement);
            if (if_block)
              if_block.d();
            destroy_component(passwordinput);
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$g($$self, $$props, $$invalidate) {
        var $textStore;
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(10, $textStore = $$value);
        });
        var text2 = $textStore.text;
        var closeModal = $$props.closeModal;
        var display = $$props.display;
        var onSuccessPasswordReset = $$props.onSuccessPasswordReset;
        var showLoader = false;
        var tokenInputValid = true;
        var passwordInputValid = true;
        onMount(function() {
          var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
          tokenElements.forEach(function(ele, index) {
            ele.addEventListener("keydown", function(e) {
              if (e.keyCode === 8 && e.target.value === "")
                tokenElements[Math.max(0, index - 1)].focus();
            });
            ele.addEventListener("input", function(e) {
              var _a = __read(e.target.value), first = _a[0], rest = _a.slice(1);
              e.target.value = first !== null && first !== void 0 ? first : "";
              var lastInputBox = index === tokenElements.length - 1;
              var insertedContent = first !== void 0;
              if (insertedContent && !lastInputBox) {
                tokenElements[index + 1].focus();
                tokenElements[index + 1].value = rest.join("");
                tokenElements[index + 1].dispatchEvent(new Event("input"));
              }
            });
          });
        });
        var validateFields = function(e) {
          var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
          var hasEmpty = tokenElements.some(function(el) {
            if (!el.value) {
              return true;
            }
            return false;
          });
          if (hasEmpty) {
            $$invalidate(3, tokenInputValid = false);
          } else {
            $$invalidate(3, tokenInputValid = true);
          }
          return !hasEmpty;
        };
        function submitPasswordToken(e) {
          return __awaiter(this, void 0, void 0, function() {
            var passwordInput, isValid, token, message, err_9;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  passwordInput = e.target[7];
                  isValid = validateFields();
                  if (!isValid)
                    return [2];
                  token = __spreadArray([], __read(document.getElementsByName("token")), false).filter(function(_a2) {
                    var name = _a2.name;
                    return name;
                  }).map(function(_a2) {
                    var value = _a2.value;
                    return value;
                  }).join("");
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  $$invalidate(2, showLoader = true);
                  return [4, window.$memberstackDom.resetMemberPassword({ token, newPassword: passwordInput.value })];
                case 2:
                  message = _a.sent()._internalUseOnly.message;
                  window.$memberstackDom._showMessage(message, false);
                  onSuccessPasswordReset({ type: "PASSWORD_RESET", data: {} });
                  $$invalidate(2, showLoader = false);
                  $$invalidate(0, display = "reset_password_success");
                  return [3, 4];
                case 3:
                  err_9 = _a.sent();
                  $$invalidate(2, showLoader = false);
                  console.log(err_9);
                  if (err_9.message) {
                    window.$memberstackDom._showMessage(err_9.message, true);
                  }
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        var click_handler = function() {
          return $$invalidate(0, display = "forgot_password");
        };
        function passwordinput_passwordInputValid_binding(value) {
          passwordInputValid = value;
          $$invalidate(4, passwordInputValid);
        }
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(1, closeModal = $$props2.closeModal);
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
          if ("onSuccessPasswordReset" in $$props2)
            $$invalidate(7, onSuccessPasswordReset = $$props2.onSuccessPasswordReset);
        };
        return [
          display,
          closeModal,
          showLoader,
          tokenInputValid,
          passwordInputValid,
          text2,
          submitPasswordToken,
          onSuccessPasswordReset,
          click_handler,
          passwordinput_passwordInputValid_binding
        ];
      }
      var PassTokenModal = function(_super) {
        __extends(PassTokenModal2, _super);
        function PassTokenModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$g, create_fragment$q, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessPasswordReset: 7
          });
          return _this;
        }
        return PassTokenModal2;
      }(SvelteComponent);
      function create_fragment$p(ctx) {
        var div2;
        var div0;
        var t0;
        var closebutton;
        var t1;
        var div1;
        var figureelement;
        var t2;
        var h2;
        var t4;
        var p;
        var t7;
        var modalfooter;
        var current;
        closebutton = new CloseButton({
          props: { closeModal: ctx[0] }
        });
        figureelement = new FigureElement({});
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div2 = element("div");
            div0 = element("div");
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div1 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            h2 = element("h2");
            h2.textContent = "Success!";
            t4 = space();
            p = element("p");
            p.innerHTML = "Your password has been reset. <br/>\n      Please login with your new credentials.";
            t7 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "data-cy", "back-btn");
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
            attr(p, "class", "ms-modal__text");
            attr(div1, "class", "ms-modal__content");
            attr(div2, "class", "ms-modal");
            attr(div2, "id", "PasswordSuccessModal");
          },
          m: function(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            append(div2, t0);
            mount_component(closebutton, div2, null);
            append(div2, t1);
            append(div2, div1);
            mount_component(figureelement, div1, null);
            append(div1, t2);
            append(div1, h2);
            append(div1, t4);
            append(div1, p);
            append(div2, t7);
            mount_component(modalfooter, div2, null);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var closebutton_changes = {};
            if (dirty & 1)
              closebutton_changes.closeModal = ctx2[0];
            closebutton.$set(closebutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div2);
            destroy_component(closebutton);
            destroy_component(figureelement);
            destroy_component(modalfooter);
          }
        };
      }
      function instance$f($$self, $$props, $$invalidate) {
        var closeModal = $$props.closeModal;
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(0, closeModal = $$props2.closeModal);
        };
        return [closeModal];
      }
      var PassSuccessModal = function(_super) {
        __extends(PassSuccessModal2, _super);
        function PassSuccessModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$f, create_fragment$p, safe_not_equal, { closeModal: 0 });
          return _this;
        }
        return PassSuccessModal2;
      }(SvelteComponent);
      function create_else_block_1$3(ctx) {
        var button;
        var backicon;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(backicon.$$.fragment);
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[10]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(backicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_2$7(ctx) {
        var button;
        var backicon;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(backicon.$$.fragment);
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[9]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(backicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_else_block$6(ctx) {
        var h2;
        return {
          c: function() {
            h2 = element("h2");
            h2.textContent = "".concat(ctx[5]["passwordless_token_heading"] || "Create an account");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
          },
          m: function(target, anchor) {
            insert(target, h2, anchor);
          },
          p: noop,
          d: function(detaching) {
            if (detaching)
              detach(h2);
          }
        };
      }
      function create_if_block_1$a(ctx) {
        var h2;
        return {
          c: function() {
            h2 = element("h2");
            h2.textContent = "".concat(ctx[5]["login_to_your_account"] || "Login to your account");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
          },
          m: function(target, anchor) {
            insert(target, h2, anchor);
          },
          p: noop,
          d: function(detaching) {
            if (detaching)
              detach(h2);
          }
        };
      }
      function create_if_block$c(ctx) {
        var div;
        var erroricon;
        var t;
        var current;
        erroricon = new ErrorIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t = text(" Please enter a valid code");
            attr(div, "class", "ms-form__error");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(erroricon);
          }
        };
      }
      function create_fragment$o(ctx) {
        var div3;
        var div0;
        var current_block_type_index;
        var if_block0;
        var t0;
        var closebutton;
        var t1;
        var div2;
        var figureelement;
        var t2;
        var t3;
        var p;
        var t5;
        var form;
        var div1;
        var label;
        var t7;
        var fieldset;
        var t13;
        var t14;
        var submitbutton;
        var t15;
        var modalfooter;
        var current;
        var mounted;
        var dispose;
        var if_block_creators = [create_if_block_2$7, create_else_block_1$3];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[4].passwordlessModalType === "login")
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        closebutton = new CloseButton({
          props: { closeModal: ctx[1] }
        });
        figureelement = new FigureElement({});
        function select_block_type_1(ctx2, dirty) {
          if (ctx2[4].passwordlessModalType === "login")
            return create_if_block_1$a;
          return create_else_block$6;
        }
        var current_block_type = select_block_type_1(ctx);
        var if_block1 = current_block_type(ctx);
        var if_block2 = !ctx[3] && create_if_block$c();
        submitbutton = new SubmitButton({
          props: {
            buttonText: ctx[5]["login_verify_email"] || "Verify Email",
            isLoading: ctx[2]
          }
        });
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div3 = element("div");
            div0 = element("div");
            if_block0.c();
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div2 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            if_block1.c();
            t3 = space();
            p = element("p");
            p.textContent = "".concat(ctx[5]["login_passwordless_instructions"] || "Enter the verification code sent to your email address");
            t5 = space();
            form = element("form");
            div1 = element("div");
            label = element("label");
            label.textContent = "".concat(ctx[5]["login_verification_code"] || "Verification Code");
            t7 = space();
            fieldset = element("fieldset");
            fieldset.innerHTML = '<input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" type="tel"/>';
            t13 = space();
            if (if_block2)
              if_block2.c();
            t14 = space();
            create_component(submitbutton.$$.fragment);
            t15 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "class", "ms-modal__back");
            attr(p, "class", "ms-modal__text");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "token-fieldset");
            attr(fieldset, "class", "ms-form__fieldset");
            attr(fieldset, "name", "token-fieldset");
            attr(div1, "class", "ms-form__group");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div2, "class", "ms-modal__content");
            attr(div3, "class", "ms-modal");
            attr(div3, "id", "PasswordlessTokenModal");
          },
          m: function(target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            if_blocks[current_block_type_index].m(div0, null);
            append(div3, t0);
            mount_component(closebutton, div3, null);
            append(div3, t1);
            append(div3, div2);
            mount_component(figureelement, div2, null);
            append(div2, t2);
            if_block1.m(div2, null);
            append(div2, t3);
            append(div2, p);
            append(div2, t5);
            append(div2, form);
            append(form, div1);
            append(div1, label);
            append(div1, t7);
            append(div1, fieldset);
            append(div1, t13);
            if (if_block2)
              if_block2.m(div1, null);
            append(form, t14);
            mount_component(submitbutton, form, null);
            append(div3, t15);
            mount_component(modalfooter, div3, null);
            current = true;
            if (!mounted) {
              dispose = listen(form, "submit", stop_propagation(prevent_default(ctx[6])));
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block0 = if_blocks[current_block_type_index];
              if (!if_block0) {
                if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block0.c();
              } else {
                if_block0.p(ctx2, dirty);
              }
              transition_in(if_block0, 1);
              if_block0.m(div0, null);
            }
            var closebutton_changes = {};
            if (dirty & 2)
              closebutton_changes.closeModal = ctx2[1];
            closebutton.$set(closebutton_changes);
            if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block1) {
              if_block1.p(ctx2, dirty);
            } else {
              if_block1.d(1);
              if_block1 = current_block_type(ctx2);
              if (if_block1) {
                if_block1.c();
                if_block1.m(div2, t3);
              }
            }
            if (!ctx2[3]) {
              if (if_block2) {
                if (dirty & 8) {
                  transition_in(if_block2, 1);
                }
              } else {
                if_block2 = create_if_block$c();
                if_block2.c();
                transition_in(if_block2, 1);
                if_block2.m(div1, null);
              }
            } else if (if_block2) {
              group_outros();
              transition_out(if_block2, 1, 1, function() {
                if_block2 = null;
              });
              check_outros();
            }
            var submitbutton_changes = {};
            if (dirty & 4)
              submitbutton_changes.isLoading = ctx2[2];
            submitbutton.$set(submitbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(if_block2);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(if_block2);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div3);
            if_blocks[current_block_type_index].d();
            destroy_component(closebutton);
            destroy_component(figureelement);
            if_block1.d();
            if (if_block2)
              if_block2.d();
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            dispose();
          }
        };
      }
      function instance$e($$self, $$props, $$invalidate) {
        var $PasswordlessStore;
        var $textStore;
        component_subscribe($$self, PasswordlessStore, function($$value) {
          return $$invalidate(4, $PasswordlessStore = $$value);
        });
        component_subscribe($$self, TextStore, function($$value) {
          return $$invalidate(11, $textStore = $$value);
        });
        var text2 = $textStore.text;
        var closeModal = $$props.closeModal;
        var display = $$props.display;
        var onSuccessPasswordlessToken = $$props.onSuccessPasswordlessToken;
        var onSuccess = $$props.onSuccess;
        var showLoader = false;
        var tokenInputValid = true;
        onMount(function() {
          var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
          tokenElements.forEach(function(ele, index) {
            ele.addEventListener("keydown", function(e) {
              if (e.keyCode === 8 && e.target.value === "")
                tokenElements[Math.max(0, index - 1)].focus();
            });
            ele.addEventListener("input", function(e) {
              var _a = __read(e.target.value), first = _a[0], rest = _a.slice(1);
              e.target.value = first !== null && first !== void 0 ? first : "";
              var lastInputBox = index === tokenElements.length - 1;
              var insertedContent = first !== void 0;
              if (insertedContent && !lastInputBox) {
                tokenElements[index + 1].focus();
                tokenElements[index + 1].value = rest.join("");
                tokenElements[index + 1].dispatchEvent(new Event("input"));
              }
            });
          });
        });
        var validateFields = function(e) {
          var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
          var hasEmpty = tokenElements.some(function(el) {
            if (!el.value) {
              return true;
            }
            return false;
          });
          if (hasEmpty) {
            $$invalidate(3, tokenInputValid = false);
          } else {
            $$invalidate(3, tokenInputValid = true);
          }
          return !hasEmpty;
        };
        function submitPasswordlessToken(e) {
          return __awaiter(this, void 0, void 0, function() {
            var isValid, token, data, plans, data, err_10;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  e.target[7];
                  isValid = validateFields();
                  if (!isValid)
                    return [2];
                  token = __spreadArray([], __read(document.getElementsByName("token")), false).filter(function(_a2) {
                    var name = _a2.name;
                    return name;
                  }).map(function(_a2) {
                    var value = _a2.value;
                    return value;
                  }).join("");
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 6, , 7]);
                  $$invalidate(2, showLoader = true);
                  if (!($PasswordlessStore.passwordlessModalType === "login"))
                    return [3, 3];
                  return [4, window.$memberstackDom.loginMemberPasswordless({
                    passwordlessToken: token,
                    email: $PasswordlessStore.passwordlessEmail
                  }, { includeContentGroups: true })];
                case 2:
                  data = _a.sent().data;
                  onSuccess({ type: "LOGIN", data });
                  $$invalidate(2, showLoader = false);
                  return [3, 5];
                case 3:
                  plans = ($PasswordlessStore.passwordlessPlans || []).map(function(plan) {
                    return { planId: plan };
                  });
                  return [4, window.$memberstackDom.signupMemberPasswordless({
                    passwordlessToken: token,
                    email: $PasswordlessStore.passwordlessEmail,
                    plans,
                    customFields: $PasswordlessStore.passwordlessCustomFields
                  }, { includeContentGroups: true })];
                case 4:
                  data = _a.sent().data;
                  onSuccess({ type: "SIGNUP", data });
                  $$invalidate(2, showLoader = false);
                  _a.label = 5;
                case 5:
                  return [3, 7];
                case 6:
                  err_10 = _a.sent();
                  $$invalidate(2, showLoader = false);
                  console.log(err_10);
                  if (err_10.message) {
                    window.$memberstackDom._showMessage(err_10.message, true);
                  }
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        var click_handler = function() {
          return $$invalidate(0, display = "login");
        };
        var click_handler_1 = function() {
          return $$invalidate(0, display = "signup");
        };
        $$self.$$set = function($$props2) {
          if ("closeModal" in $$props2)
            $$invalidate(1, closeModal = $$props2.closeModal);
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
          if ("onSuccessPasswordlessToken" in $$props2)
            $$invalidate(7, onSuccessPasswordlessToken = $$props2.onSuccessPasswordlessToken);
          if ("onSuccess" in $$props2)
            $$invalidate(8, onSuccess = $$props2.onSuccess);
        };
        return [
          display,
          closeModal,
          showLoader,
          tokenInputValid,
          $PasswordlessStore,
          text2,
          submitPasswordlessToken,
          onSuccessPasswordlessToken,
          onSuccess,
          click_handler,
          click_handler_1
        ];
      }
      var PasswordlessTokenModal = function(_super) {
        __extends(PasswordlessTokenModal2, _super);
        function PasswordlessTokenModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$e, create_fragment$o, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessPasswordlessToken: 7,
            onSuccess: 8
          });
          return _this;
        }
        return PasswordlessTokenModal2;
      }(SvelteComponent);
      function create_fragment$n(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "m8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z");
            attr(path, "fill", "currentColor");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 16");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var ProfileIcon = function(_super) {
        __extends(ProfileIcon2, _super);
        function ProfileIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$n, safe_not_equal, {});
          return _this;
        }
        return ProfileIcon2;
      }(SvelteComponent);
      function create_fragment$m(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-0.53 4.12-3.28 7.79-7 8.94v-8.93h-7v-5.7l7-3.11v8.8z");
            attr(path, "fill", "currentColor");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 22");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var SecurityIcon = function(_super) {
        __extends(SecurityIcon2, _super);
        function SecurityIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$m, safe_not_equal, {});
          return _this;
        }
        return SecurityIcon2;
      }(SvelteComponent);
      function create_fragment$l(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 18");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var LinkOutIcon = function(_super) {
        __extends(LinkOutIcon2, _super);
        function LinkOutIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$l, safe_not_equal, {});
          return _this;
        }
        return LinkOutIcon2;
      }(SvelteComponent);
      function create_fragment$k(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z");
            attr(path, "fill", "currentColor");
            attr(svg, "width", "16");
            attr(svg, "height", "16");
            attr(svg, "viewBox", "0 0 16 16");
            attr(svg, "fill", "none");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var LogoutIcon = function(_super) {
        __extends(LogoutIcon2, _super);
        function LogoutIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$k, safe_not_equal, {});
          return _this;
        }
        return LogoutIcon2;
      }(SvelteComponent);
      function create_fragment$j(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z");
            attr(svg, "fill", "none");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "viewBox", "3 2 19 20");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var PlansIcon = function(_super) {
        __extends(PlansIcon2, _super);
        function PlansIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$j, safe_not_equal, {});
          return _this;
        }
        return PlansIcon2;
      }(SvelteComponent);
      function create_if_block_1$9(ctx) {
        var button;
        var profileicon;
        var t;
        var current;
        var mounted;
        var dispose;
        profileicon = new ProfileIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(profileicon.$$.fragment);
            t = text(" Profile");
            attr(button, "data-cy", "profile-btn");
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", ctx[0] === "profile");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(profileicon, button, null);
            append(button, t);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[7]);
              mounted = true;
            }
          },
          p: function(ctx2, dirty) {
            if (dirty & 1) {
              toggle_class(button, "ms-modal__profile-option--active", ctx2[0] === "profile");
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profileicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profileicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(profileicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block$b(ctx) {
        var button;
        var plansicon;
        var t;
        var current;
        var mounted;
        var dispose;
        plansicon = new PlansIcon({});
        return {
          c: function() {
            button = element("button");
            create_component(plansicon.$$.fragment);
            t = text(" Plans");
            attr(button, "data-cy", "plans-btn");
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", ctx[0] === "plans");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            mount_component(plansicon, button, null);
            append(button, t);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[9]);
              mounted = true;
            }
          },
          p: function(ctx2, dirty) {
            if (dirty & 1) {
              toggle_class(button, "ms-modal__profile-option--active", ctx2[0] === "plans");
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(plansicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(plansicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(plansicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_fragment$i(ctx) {
        var t0;
        var button0;
        var securityicon;
        var t1;
        var t2;
        var show_if = ctx[3]();
        var t3;
        var button1;
        var logouticon;
        var t4;
        var current;
        var mounted;
        var dispose;
        var if_block0 = !ctx[1] && create_if_block_1$9(ctx);
        securityicon = new SecurityIcon({});
        var if_block1 = show_if && create_if_block$b(ctx);
        logouticon = new LogoutIcon({});
        return {
          c: function() {
            if (if_block0)
              if_block0.c();
            t0 = space();
            button0 = element("button");
            create_component(securityicon.$$.fragment);
            t1 = text(" Security");
            t2 = space();
            if (if_block1)
              if_block1.c();
            t3 = space();
            button1 = element("button");
            create_component(logouticon.$$.fragment);
            t4 = text(" Logout");
            attr(button0, "data-cy", "security-btn");
            attr(button0, "class", "ms-modal__profile-option");
            toggle_class(button0, "ms-modal__profile-option--active", ctx[0] === "security" || ctx[0] === "changePassword");
            attr(button1, "data-cy", "logout-btn");
            attr(button1, "class", "ms-modal__profile-option");
          },
          m: function(target, anchor) {
            if (if_block0)
              if_block0.m(target, anchor);
            insert(target, t0, anchor);
            insert(target, button0, anchor);
            mount_component(securityicon, button0, null);
            append(button0, t1);
            insert(target, t2, anchor);
            if (if_block1)
              if_block1.m(target, anchor);
            insert(target, t3, anchor);
            insert(target, button1, anchor);
            mount_component(logouticon, button1, null);
            append(button1, t4);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button0, "click", ctx[8]),
                listen(button1, "click", ctx[2])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx2[1]) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 2) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_1$9(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(t0.parentNode, t0);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            if (dirty & 1) {
              toggle_class(button0, "ms-modal__profile-option--active", ctx2[0] === "security" || ctx2[0] === "changePassword");
            }
            if (show_if)
              if_block1.p(ctx2, dirty);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(securityicon.$$.fragment, local);
            transition_in(if_block1);
            transition_in(logouticon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(securityicon.$$.fragment, local);
            transition_out(if_block1);
            transition_out(logouticon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (if_block0)
              if_block0.d(detaching);
            if (detaching)
              detach(t0);
            if (detaching)
              detach(button0);
            destroy_component(securityicon);
            if (detaching)
              detach(t2);
            if (if_block1)
              if_block1.d(detaching);
            if (detaching)
              detach(t3);
            if (detaching)
              detach(button1);
            destroy_component(logouticon);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$d($$self, $$props, $$invalidate) {
        var member = $$props.member;
        var onSuccessLogout = $$props.onSuccessLogout;
        var displayProfile = $$props.displayProfile;
        var profileLoader = $$props.profileLoader;
        var hideProfileSection = $$props.hideProfileSection;
        var unsubscribe = AppStore.subscribe(function(data) {
          if (!data.initialValue) {
            var container = document.getElementById("msOverlay");
            var css = document.createElement("style");
            var color = data.branding.colors.lightMode.primaryButton;
            var fullCSS = ".ms-modal__profile-option:hover { color: ".concat(color, ";} .ms-modal__profile-option--active { color: ").concat(color, ";} .ms-modal__save-button { background: ").concat(color, ";} .ms-modal__save-button:disabled { background: ").concat(color, ";}");
            css.appendChild(document.createTextNode(fullCSS));
            container.appendChild(css);
          }
        });
        onDestroy(function() {
          unsubscribe();
        });
        function logout(e) {
          return __awaiter(this, void 0, void 0, function() {
            var _a, data, message, err_11;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  _b.trys.push([0, 2, , 3]);
                  return [4, window.$memberstackDom.logout()];
                case 1:
                  _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                  window.$memberstackDom._showMessage(message, false);
                  onSuccessLogout({ type: "LOGOUT", data });
                  return [3, 3];
                case 2:
                  err_11 = _b.sent();
                  window.$memberstackDom._showMessage(err_11.message, true);
                  return [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }
        function showPlansNavButton() {
          return member.stripeCustomerId || member.planConnections.some(function(plan) {
            return plan.type === "FREE";
          });
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "profile");
        };
        var click_handler_1 = function() {
          return $$invalidate(0, displayProfile = "security");
        };
        var click_handler_2 = function() {
          return $$invalidate(0, displayProfile = "plans");
        };
        $$self.$$set = function($$props2) {
          if ("member" in $$props2)
            $$invalidate(4, member = $$props2.member);
          if ("onSuccessLogout" in $$props2)
            $$invalidate(5, onSuccessLogout = $$props2.onSuccessLogout);
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("profileLoader" in $$props2)
            $$invalidate(6, profileLoader = $$props2.profileLoader);
          if ("hideProfileSection" in $$props2)
            $$invalidate(1, hideProfileSection = $$props2.hideProfileSection);
        };
        return [
          displayProfile,
          hideProfileSection,
          logout,
          showPlansNavButton,
          member,
          onSuccessLogout,
          profileLoader,
          click_handler,
          click_handler_1,
          click_handler_2
        ];
      }
      var ProfileModalNav = function(_super) {
        __extends(ProfileModalNav2, _super);
        function ProfileModalNav2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$d, create_fragment$i, safe_not_equal, {
            member: 4,
            onSuccessLogout: 5,
            displayProfile: 0,
            profileLoader: 6,
            hideProfileSection: 1
          });
          return _this;
        }
        return ProfileModalNav2;
      }(SvelteComponent);
      function create_fragment$h(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "white");
            attr(path, "d", "M21 21C24.315 21 27 18.315 27 15C27 11.685 24.315 9 21 9C17.685 9 15 11.685 15 15C15 18.315 17.685 21 21 21ZM21 24C16.995 24 9 26.01 9 30V31.5C9 32.325 9.675 33 10.5 33H31.5C32.325 33 33 32.325 33 31.5V30C33 26.01 25.005 24 21 24Z");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "width", "42");
            attr(svg, "height", "42");
            attr(svg, "viewBox", "0 0 42 42");
            attr(svg, "fill", "none");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var ProfileDefaultImage = function(_super) {
        __extends(ProfileDefaultImage2, _super);
        function ProfileDefaultImage2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$h, safe_not_equal, {});
          return _this;
        }
        return ProfileDefaultImage2;
      }(SvelteComponent);
      function create_fragment$g(ctx) {
        var svg;
        var g;
        var path0;
        var defs;
        var clipPath;
        var path1;
        return {
          c: function() {
            svg = svg_element("svg");
            g = svg_element("g");
            path0 = svg_element("path");
            defs = svg_element("defs");
            clipPath = svg_element("clipPath");
            path1 = svg_element("path");
            attr(path0, "fill", "#494949");
            attr(path0, "d", "M6.667 10.667h2.666c.367 0 .667-.3.667-.667V6.667h1.06c.593 0 .893-.72.473-1.14l-3.06-3.06a.664.664 0 0 0-.94 0l-3.06 3.06c-.42.42-.126 1.14.467 1.14H6V10c0 .367.3.667.667.667zM4 12h8c.367 0 .667.3.667.667 0 .367-.3.667-.667.667H4a.669.669 0 0 1-.667-.667c0-.367.3-.667.667-.667z");
            attr(g, "clip-path", "url(#a)");
            attr(path1, "fill", "#fff");
            attr(path1, "d", "M0 0h16v16H0z");
            attr(clipPath, "id", "a");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 16");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, g);
            append(g, path0);
            append(svg, defs);
            append(defs, clipPath);
            append(clipPath, path1);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var UploadIcon = function(_super) {
        __extends(UploadIcon2, _super);
        function UploadIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$g, safe_not_equal, {});
          return _this;
        }
        return UploadIcon2;
      }(SvelteComponent);
      function get_each_context$4(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[10] = list[i];
        child_ctx[11] = list;
        child_ctx[12] = i;
        return child_ctx;
      }
      function create_else_block_1$2(ctx) {
        var profiledefaultimage;
        var current;
        profiledefaultimage = new ProfileDefaultImage({});
        return {
          c: function() {
            create_component(profiledefaultimage.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(profiledefaultimage, target, anchor);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(profiledefaultimage.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profiledefaultimage.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(profiledefaultimage, detaching);
          }
        };
      }
      function create_if_block_2$6(ctx) {
        var img;
        var img_src_value;
        return {
          c: function() {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = ctx[0].profileImage))
              attr(img, "src", img_src_value);
            attr(img, "alt", "profile image");
          },
          m: function(target, anchor) {
            insert(target, img, anchor);
          },
          p: function(ctx2, dirty) {
            if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[0].profileImage)) {
              attr(img, "src", img_src_value);
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(img);
          }
        };
      }
      function create_else_block$5(ctx) {
        var t;
        return {
          c: function() {
            t = text("Replace Image");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block_1$8(ctx) {
        var t;
        return {
          c: function() {
            t = text("Upload Profile Image");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block$a(ctx) {
        var div1;
        var div0;
        var label;
        var t0_value = ctx[10].label + "";
        var t0;
        var label_for_value;
        var t1;
        var input;
        var input_placeholder_value;
        var input_name_value;
        var t2;
        var mounted;
        var dispose;
        function input_input_handler() {
          ctx[6].call(input, ctx[10]);
        }
        return {
          c: function() {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            t2 = space();
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = ctx[10].key);
            attr(input, "class", "ms-form__input");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = ctx[10].label);
            attr(input, "name", input_name_value = ctx[10].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
            set_input_value(input, ctx[0].customFields[ctx[10].key]);
            append(div1, t2);
            if (!mounted) {
              dispose = [
                listen(input, "input", input_input_handler),
                listen(input, "keyup", ctx[4])
              ];
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 2 && t0_value !== (t0_value = ctx[10].label + ""))
              set_data(t0, t0_value);
            if (dirty & 2 && label_for_value !== (label_for_value = ctx[10].key)) {
              attr(label, "for", label_for_value);
            }
            if (dirty & 2 && input_placeholder_value !== (input_placeholder_value = ctx[10].label)) {
              attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & 2 && input_name_value !== (input_name_value = ctx[10].key)) {
              attr(input, "name", input_name_value);
            }
            if (dirty & 3 && input.value !== ctx[0].customFields[ctx[10].key]) {
              set_input_value(input, ctx[0].customFields[ctx[10].key]);
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function create_each_block$4(ctx) {
        var if_block_anchor;
        var if_block = ctx[10].hidden !== true && create_if_block$a(ctx);
        return {
          c: function() {
            if (if_block)
              if_block.c();
            if_block_anchor = empty();
          },
          m: function(target, anchor) {
            if (if_block)
              if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
          },
          p: function(ctx2, dirty) {
            if (ctx2[10].hidden !== true) {
              if (if_block) {
                if_block.p(ctx2, dirty);
              } else {
                if_block = create_if_block$a(ctx2);
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
              }
            } else if (if_block) {
              if_block.d(1);
              if_block = null;
            }
          },
          d: function(detaching) {
            if (if_block)
              if_block.d(detaching);
            if (detaching)
              detach(if_block_anchor);
          }
        };
      }
      function create_fragment$f(ctx) {
        var div1;
        var h2;
        var t1;
        var div0;
        var button0;
        var t2;
        var t3;
        var div4;
        var div2;
        var current_block_type_index;
        var if_block0;
        var t4;
        var div3;
        var button1;
        var uploadicon;
        var t5;
        var form;
        var current;
        var mounted;
        var dispose;
        var if_block_creators = [create_if_block_2$6, create_else_block_1$2];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[0].profileImage)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        uploadicon = new UploadIcon({});
        function select_block_type_1(ctx2, dirty) {
          if (!ctx2[0].profileImage)
            return create_if_block_1$8;
          return create_else_block$5;
        }
        var current_block_type = select_block_type_1(ctx);
        var if_block1 = current_block_type(ctx);
        var each_value = ctx[1];
        var each_blocks = [];
        for (var i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
        }
        return {
          c: function() {
            div1 = element("div");
            h2 = element("h2");
            h2.textContent = "Profile Information";
            t1 = space();
            div0 = element("div");
            button0 = element("button");
            t2 = text("Save");
            t3 = space();
            div4 = element("div");
            div2 = element("div");
            if_block0.c();
            t4 = space();
            div3 = element("div");
            button1 = element("button");
            create_component(uploadicon.$$.fragment);
            if_block1.c();
            t5 = space();
            form = element("form");
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(button0, "class", "ms-modal__save-button");
            button0.disabled = ctx[2];
            attr(div0, "class", "ms-modal__action-container");
            attr(div1, "class", "ms-modal__title-container");
            attr(div2, "class", "ms-modal__profile-image");
            attr(button1, "data-cy", "change-profile-image");
            attr(button1, "type", "submit");
            attr(button1, "class", "ms-modal__outline-button");
            attr(button1, "data-image-btn", "");
            attr(div3, "class", "ms-modal__profile-image-button-container");
            attr(div4, "class", "ms-modal__profile-image-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, h2);
            append(div1, t1);
            append(div1, div0);
            append(div0, button0);
            append(button0, t2);
            insert(target, t3, anchor);
            insert(target, div4, anchor);
            append(div4, div2);
            if_blocks[current_block_type_index].m(div2, null);
            append(div4, t4);
            append(div4, div3);
            append(div3, button1);
            mount_component(uploadicon, button1, null);
            if_block1.m(button1, null);
            insert(target, t5, anchor);
            insert(target, form, anchor);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(form, null);
            }
            current = true;
            if (!mounted) {
              dispose = [
                listen(button0, "click", ctx[3]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[3])))
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & 4) {
              button0.disabled = ctx2[2];
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block0 = if_blocks[current_block_type_index];
              if (!if_block0) {
                if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block0.c();
              } else {
                if_block0.p(ctx2, dirty);
              }
              transition_in(if_block0, 1);
              if_block0.m(div2, null);
            }
            if (current_block_type !== (current_block_type = select_block_type_1(ctx2))) {
              if_block1.d(1);
              if_block1 = current_block_type(ctx2);
              if (if_block1) {
                if_block1.c();
                if_block1.m(button1, null);
              }
            }
            if (dirty & 19) {
              each_value = ctx2[1];
              var i2 = void 0;
              for (i2 = 0; i2 < each_value.length; i2 += 1) {
                var child_ctx = get_each_context$4(ctx2, each_value, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                } else {
                  each_blocks[i2] = create_each_block$4(child_ctx);
                  each_blocks[i2].c();
                  each_blocks[i2].m(form, null);
                }
              }
              for (; i2 < each_blocks.length; i2 += 1) {
                each_blocks[i2].d(1);
              }
              each_blocks.length = each_value.length;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(uploadicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(uploadicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            if (detaching)
              detach(t3);
            if (detaching)
              detach(div4);
            if_blocks[current_block_type_index].d();
            destroy_component(uploadicon);
            if_block1.d();
            if (detaching)
              detach(t5);
            if (detaching)
              detach(form);
            destroy_each(each_blocks, detaching);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$c($$self, $$props, $$invalidate) {
        var _this = this;
        var customFields = $$props.customFields;
        var member = $$props.member;
        var profileLoader = $$props.profileLoader;
        var createFileInputElement = function() {
          var fileInputField = document.createElement("input");
          fileInputField.setAttribute("required", "");
          fileInputField.setAttribute("type", "file");
          fileInputField.setAttribute("accept", "image/*");
          fileInputField.setAttribute("profile-image", "true");
          fileInputField.setAttribute("name", "profile-image");
          fileInputField.setAttribute("DATA-name", "File");
          fileInputField.setAttribute("hidden", "");
          fileInputField.setAttribute("tabindex", "-1");
          return fileInputField;
        };
        var initProfileImageButton = function(uploadButton) {
          var fileInputField = createFileInputElement();
          uploadButton.parentNode.insertBefore(fileInputField, uploadButton.nextSibling);
          uploadButton.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            fileInputField.click();
          });
          fileInputField.addEventListener("change", function(e) {
            return __awaiter(_this, void 0, void 0, function() {
              var file, fileSize, fileType, updateMemberProfileImageFunction, _a, data, message, err_12;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    e.preventDefault();
                    e.stopPropagation();
                    file = e.target.files[0];
                    fileSize = file.size, fileType = file.type;
                    if (fileType.includes("image") === false)
                      return [2, window.$memberstackDom._showMessage("File is not an image.", true)];
                    if (fileSize > 4e6)
                      return [2, window.$memberstackDom._showMessage("Image must be less than 2MB.", true)];
                    _b.label = 1;
                  case 1:
                    _b.trys.push([1, 3, , 4]);
                    $$invalidate(5, profileLoader = true);
                    updateMemberProfileImageFunction = window.$memberstackDom.updateMemberProfileImage;
                    return [4, updateMemberProfileImageFunction({ profileImage: file })];
                  case 2:
                    _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                    $$invalidate(0, member.profileImage = data.profileImage, member);
                    if (message) {
                      window.$memberstackDom._showMessage(message, false);
                    }
                    return [3, 4];
                  case 3:
                    err_12 = _b.sent();
                    console.log(err_12);
                    if (err_12.message) {
                      window.$memberstackDom._showMessage(err_12.message, true);
                    }
                    return [3, 4];
                  case 4:
                    $$invalidate(5, profileLoader = false);
                    return [2];
                }
              });
            });
          });
        };
        onMount(function() {
          var upload = document.querySelector("[data-image-btn]");
          initProfileImageButton(upload);
        });
        var initialCustomFields = JSON.parse(JSON.stringify(member.customFields));
        var saveDisabled = true;
        function saveProfile(e) {
          return __awaiter(this, void 0, void 0, function() {
            var msg, err_13;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  $$invalidate(5, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.updateMember({ customFields: member.customFields })];
                case 2:
                  msg = _a.sent()._internalUseOnly.message;
                  $$invalidate(5, profileLoader = false);
                  $$invalidate(2, saveDisabled = true);
                  initialCustomFields = JSON.parse(JSON.stringify(member.customFields));
                  window.$memberstackDom._showMessage(msg, false);
                  return [3, 4];
                case 3:
                  err_13 = _a.sent();
                  $$invalidate(5, profileLoader = false);
                  window.$memberstackDom._showMessage(err_13.message, true);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function checkForChange(e) {
          if (e.target.value !== initialCustomFields[e.target.name]) {
            $$invalidate(2, saveDisabled = false);
            return;
          }
          $$invalidate(2, saveDisabled = true);
        }
        function input_input_handler(customField) {
          member.customFields[customField.key] = this.value;
          $$invalidate(0, member);
        }
        $$self.$$set = function($$props2) {
          if ("customFields" in $$props2)
            $$invalidate(1, customFields = $$props2.customFields);
          if ("member" in $$props2)
            $$invalidate(0, member = $$props2.member);
          if ("profileLoader" in $$props2)
            $$invalidate(5, profileLoader = $$props2.profileLoader);
        };
        return [
          member,
          customFields,
          saveDisabled,
          saveProfile,
          checkForChange,
          profileLoader,
          input_input_handler
        ];
      }
      var ProfileInfoContent = function(_super) {
        __extends(ProfileInfoContent2, _super);
        function ProfileInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$c, create_fragment$f, safe_not_equal, {
            customFields: 1,
            member: 0,
            profileLoader: 5
          });
          return _this;
        }
        return ProfileInfoContent2;
      }(SvelteComponent);
      function create_fragment$e(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m14 7h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6v-2zm9 14h-12v-10h12v10zm-6-3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 21");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var PasswordLockIcon = function(_super) {
        __extends(PasswordLockIcon2, _super);
        function PasswordLockIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$e, safe_not_equal, {});
          return _this;
        }
        return PasswordLockIcon2;
      }(SvelteComponent);
      function get_each_context$3(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[16] = list[i];
        return child_ctx;
      }
      function create_else_block_1$1(ctx) {
        var t;
        return {
          c: function() {
            t = text("Change Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block_2$5(ctx) {
        var t;
        return {
          c: function() {
            t = text("Set Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block$9(ctx) {
        var p;
        var t1;
        var div;
        var each_blocks = [];
        var each_1_lookup = /* @__PURE__ */ new Map();
        var each_value = ctx[4].authProviders;
        var get_key = function(ctx2) {
          return ctx2[16].provider;
        };
        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context$3(ctx, each_value, i);
          var key = get_key(child_ctx);
          each_1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
        }
        return {
          c: function() {
            p = element("p");
            p.textContent = "Connect Additional Accounts";
            t1 = space();
            div = element("div");
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            attr(p, "class", "ms-form__label");
            attr(div, "class", "ms-modal__social");
          },
          m: function(target, anchor) {
            insert(target, p, anchor);
            insert(target, t1, anchor);
            insert(target, div, anchor);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(div, null);
            }
          },
          p: function(ctx2, dirty) {
            if (dirty & 210) {
              each_value = ctx2[4].authProviders;
              each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block$3, null, get_each_context$3);
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(p);
            if (detaching)
              detach(t1);
            if (detaching)
              detach(div);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].d();
            }
          }
        };
      }
      function create_else_block$4(ctx) {
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1;
        var t2_value = ctx[16].name + "";
        var t2;
        var mounted;
        var dispose;
        function click_handler_2() {
          return ctx[14](ctx[16]);
        }
        return {
          c: function() {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Connect with ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = ctx[16].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_2);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 16 && !src_url_equal(img.src, img_src_value = ctx[16].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 16 && img_alt_value !== (img_alt_value = ctx[16].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 16 && t2_value !== (t2_value = ctx[16].name + ""))
              set_data(t2, t2_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_1$7(ctx) {
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1;
        var t2_value = ctx[16].name + "";
        var t2;
        var mounted;
        var dispose;
        function click_handler_1() {
          return ctx[13](ctx[16]);
        }
        return {
          c: function() {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Disconnect ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = ctx[16].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            set_style(button, "background-color", "#F6F6F6");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_1);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 16 && !src_url_equal(img.src, img_src_value = ctx[16].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 16 && img_alt_value !== (img_alt_value = ctx[16].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 16 && t2_value !== (t2_value = ctx[16].name + ""))
              set_data(t2, t2_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_each_block$3(key_1, ctx) {
        var div;
        var show_if;
        var t;
        function func() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return ctx[9].apply(ctx, __spreadArray([ctx[16]], __read(args), false));
        }
        function select_block_type_1(ctx2, dirty) {
          if (dirty & 18)
            show_if = null;
          if (show_if == null)
            show_if = !!ctx2[1].auth.providers.some(func);
          if (show_if)
            return create_if_block_1$7;
          return create_else_block$4;
        }
        var current_block_type = select_block_type_1(ctx, -1);
        var if_block = current_block_type(ctx);
        return {
          key: key_1,
          first: null,
          c: function() {
            div = element("div");
            if_block.c();
            t = space();
            attr(div, "class", "ms-modal__social-buttons");
            this.first = div;
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            if_block.m(div, null);
            append(div, t);
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
              if_block.p(ctx, dirty);
            } else {
              if_block.d(1);
              if_block = current_block_type(ctx);
              if (if_block) {
                if_block.c();
                if_block.m(div, t);
              }
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if_block.d();
          }
        };
      }
      function create_fragment$d(ctx) {
        var div1;
        var h2;
        var t1;
        var div0;
        var button0;
        var t2;
        var button0_disabled_value;
        var t3;
        var form;
        var emailinput;
        var updating_emailInputValid;
        var updating_emailValue;
        var t4;
        var div2;
        var label;
        var t6;
        var button1;
        var passwordlockicon;
        var t7;
        var t8;
        var if_block1_anchor;
        var current;
        var mounted;
        var dispose;
        function emailinput_emailInputValid_binding(value) {
          ctx[10](value);
        }
        function emailinput_emailValue_binding(value) {
          ctx[11](value);
        }
        var emailinput_props = {};
        if (ctx[3] !== void 0) {
          emailinput_props.emailInputValid = ctx[3];
        }
        if (ctx[2] !== void 0) {
          emailinput_props.emailValue = ctx[2];
        }
        emailinput = new EmailInput({ props: emailinput_props });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailInputValid", emailinput_emailInputValid_binding);
        });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailValue", emailinput_emailValue_binding);
        });
        passwordlockicon = new PasswordLockIcon({});
        function select_block_type(ctx2, dirty) {
          if (!ctx2[1].auth.hasPassword)
            return create_if_block_2$5;
          return create_else_block_1$1;
        }
        var current_block_type = select_block_type(ctx);
        var if_block0 = current_block_type(ctx);
        var if_block1 = ctx[4].authProviders.length > 0 && create_if_block$9(ctx);
        return {
          c: function() {
            div1 = element("div");
            h2 = element("h2");
            h2.textContent = "Security";
            t1 = space();
            div0 = element("div");
            button0 = element("button");
            t2 = text("Save");
            t3 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t4 = space();
            div2 = element("div");
            label = element("label");
            label.textContent = "Password";
            t6 = space();
            button1 = element("button");
            create_component(passwordlockicon.$$.fragment);
            t7 = space();
            if_block0.c();
            t8 = space();
            if (if_block1)
              if_block1.c();
            if_block1_anchor = empty();
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(button0, "class", "ms-modal__save-button");
            button0.disabled = button0_disabled_value = !ctx[3];
            attr(div0, "class", "ms-modal__action-container");
            attr(div1, "class", "ms-modal__title-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "setPassword");
            attr(button1, "data-cy", "change-password-btn");
            attr(button1, "class", "ms-modal__outline-button");
            attr(button1, "name", "setPassword");
            attr(div2, "class", "ms-form__group");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, h2);
            append(div1, t1);
            append(div1, div0);
            append(div0, button0);
            append(button0, t2);
            insert(target, t3, anchor);
            insert(target, form, anchor);
            mount_component(emailinput, form, null);
            insert(target, t4, anchor);
            insert(target, div2, anchor);
            append(div2, label);
            append(div2, t6);
            append(div2, button1);
            mount_component(passwordlockicon, button1, null);
            append(button1, t7);
            if_block0.m(button1, null);
            insert(target, t8, anchor);
            if (if_block1)
              if_block1.m(target, anchor);
            insert(target, if_block1_anchor, anchor);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button0, "click", ctx[5]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[5]))),
                listen(button1, "click", ctx[12])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & 8 && button0_disabled_value !== (button0_disabled_value = !ctx2[3])) {
              button0.disabled = button0_disabled_value;
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & 8) {
              updating_emailInputValid = true;
              emailinput_changes.emailInputValid = ctx2[3];
              add_flush_callback(function() {
                return updating_emailInputValid = false;
              });
            }
            if (!updating_emailValue && dirty & 4) {
              updating_emailValue = true;
              emailinput_changes.emailValue = ctx2[2];
              add_flush_callback(function() {
                return updating_emailValue = false;
              });
            }
            emailinput.$set(emailinput_changes);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
              if_block0.d(1);
              if_block0 = current_block_type(ctx2);
              if (if_block0) {
                if_block0.c();
                if_block0.m(button1, null);
              }
            }
            if (ctx2[4].authProviders.length > 0) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
              } else {
                if_block1 = create_if_block$9(ctx2);
                if_block1.c();
                if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
              }
            } else if (if_block1) {
              if_block1.d(1);
              if_block1 = null;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(emailinput.$$.fragment, local);
            transition_in(passwordlockicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(emailinput.$$.fragment, local);
            transition_out(passwordlockicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            if (detaching)
              detach(t3);
            if (detaching)
              detach(form);
            destroy_component(emailinput);
            if (detaching)
              detach(t4);
            if (detaching)
              detach(div2);
            destroy_component(passwordlockicon);
            if_block0.d();
            if (detaching)
              detach(t8);
            if (if_block1)
              if_block1.d(detaching);
            if (detaching)
              detach(if_block1_anchor);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$b($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(4, $app = $$value);
        });
        var displayProfile = $$props.displayProfile;
        var member = $$props.member;
        var emailValue = $$props.emailValue;
        var profileLoader = $$props.profileLoader;
        $app.authProviders.sort(function(a, b) {
          if (isConnected(a) === isConnected(b)) {
            return a.order - b.order;
          }
          return isConnected(a) ? -1 : 1;
        });
        var emailInputValid = false;
        function submitEmailChange(e) {
          return __awaiter(this, void 0, void 0, function() {
            var message, err_14;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!emailInputValid || !emailValue)
                    return [2];
                  $$invalidate(8, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.updateMemberAuth({ email: emailValue })];
                case 2:
                  message = _a.sent()._internalUseOnly.message;
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 3:
                  err_14 = _a.sent();
                  window.$memberstackDom._showMessage(err_14.message, true);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function disconnectProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var _a, data, message, err_15;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  $$invalidate(8, profileLoader = true);
                  _b.label = 1;
                case 1:
                  _b.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.disconnectProvider({ provider })];
                case 2:
                  _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                  $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 3:
                  err_15 = _b.sent();
                  window.$memberstackDom._showMessage(err_15.message, true);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function connectAdditionalProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var data, err_16;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  console.log("connect", provider);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.connectProvider({ provider })];
                case 2:
                  data = _a.sent().data;
                  $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                  window.$memberstackDom._showMessage(data.message, false);
                  return [3, 4];
                case 3:
                  err_16 = _a.sent();
                  window.$memberstackDom._showMessage(err_16.message, true);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function isConnected(provider) {
          return member.auth.providers.some(function(prv) {
            return prv.provider === provider.provider;
          });
        }
        var func = function(provider, prv) {
          return prv.provider === provider.provider;
        };
        function emailinput_emailInputValid_binding(value) {
          emailInputValid = value;
          $$invalidate(3, emailInputValid);
        }
        function emailinput_emailValue_binding(value) {
          emailValue = value;
          $$invalidate(2, emailValue);
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "changePassword");
        };
        var click_handler_1 = function(provider) {
          return disconnectProvider(provider.provider);
        };
        var click_handler_2 = function(provider) {
          return connectAdditionalProvider(provider.provider);
        };
        $$self.$$set = function($$props2) {
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
          if ("emailValue" in $$props2)
            $$invalidate(2, emailValue = $$props2.emailValue);
          if ("profileLoader" in $$props2)
            $$invalidate(8, profileLoader = $$props2.profileLoader);
        };
        return [
          displayProfile,
          member,
          emailValue,
          emailInputValid,
          $app,
          submitEmailChange,
          disconnectProvider,
          connectAdditionalProvider,
          profileLoader,
          func,
          emailinput_emailInputValid_binding,
          emailinput_emailValue_binding,
          click_handler,
          click_handler_1,
          click_handler_2
        ];
      }
      var SecurityInfoContent = function(_super) {
        __extends(SecurityInfoContent2, _super);
        function SecurityInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$b, create_fragment$d, safe_not_equal, {
            displayProfile: 0,
            member: 1,
            emailValue: 2,
            profileLoader: 8
          });
          return _this;
        }
        return SecurityInfoContent2;
      }(SvelteComponent);
      function create_else_block$3(ctx) {
        var t;
        return {
          c: function() {
            t = text("Change Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block_1$6(ctx) {
        var t;
        return {
          c: function() {
            t = text("Set Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block$8(ctx) {
        var passwordinput;
        var updating_passwordValue;
        var updating_passwordInputValid;
        var current;
        function passwordinput_passwordValue_binding(value) {
          ctx[11](value);
        }
        function passwordinput_passwordInputValid_binding(value) {
          ctx[12](value);
        }
        var passwordinput_props = {
          passwordLabel: "Current Password",
          passwordPlaceholder: "Enter current password"
        };
        if (ctx[2] !== void 0) {
          passwordinput_props.passwordValue = ctx[2];
        }
        if (ctx[5] !== void 0) {
          passwordinput_props.passwordInputValid = ctx[5];
        }
        passwordinput = new PasswordInput({ props: passwordinput_props });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordValue", passwordinput_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordInputValid", passwordinput_passwordInputValid_binding);
        });
        return {
          c: function() {
            create_component(passwordinput.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordValue && dirty & 4) {
              updating_passwordValue = true;
              passwordinput_changes.passwordValue = ctx2[2];
              add_flush_callback(function() {
                return updating_passwordValue = false;
              });
            }
            if (!updating_passwordInputValid && dirty & 32) {
              updating_passwordInputValid = true;
              passwordinput_changes.passwordInputValid = ctx2[5];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput.$set(passwordinput_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordinput, detaching);
          }
        };
      }
      function create_fragment$c(ctx) {
        var div3;
        var div1;
        var div0;
        var button0;
        var backicon;
        var t0;
        var h2;
        var t1;
        var div2;
        var button1;
        var t2;
        var button1_disabled_value;
        var t3;
        var form;
        var t4;
        var passwordinput0;
        var updating_passwordValue;
        var updating_passwordInputValid;
        var t5;
        var passwordinput1;
        var updating_passwordValue_1;
        var updating_passwordInputValid_1;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        function select_block_type(ctx2, dirty) {
          if (!ctx2[1].auth.hasPassword)
            return create_if_block_1$6;
          return create_else_block$3;
        }
        var current_block_type = select_block_type(ctx);
        var if_block0 = current_block_type(ctx);
        var if_block1 = ctx[1].auth.hasPassword && create_if_block$8(ctx);
        function passwordinput0_passwordValue_binding(value) {
          ctx[13](value);
        }
        function passwordinput0_passwordInputValid_binding(value) {
          ctx[14](value);
        }
        var passwordinput0_props = {
          passwordLabel: "New Password",
          passwordPlaceholder: "Enter a strong password"
        };
        if (ctx[3] !== void 0) {
          passwordinput0_props.passwordValue = ctx[3];
        }
        if (ctx[6] !== void 0) {
          passwordinput0_props.passwordInputValid = ctx[6];
        }
        passwordinput0 = new PasswordInput({ props: passwordinput0_props });
        binding_callbacks.push(function() {
          return bind(passwordinput0, "passwordValue", passwordinput0_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput0, "passwordInputValid", passwordinput0_passwordInputValid_binding);
        });
        function passwordinput1_passwordValue_binding(value) {
          ctx[15](value);
        }
        function passwordinput1_passwordInputValid_binding(value) {
          ctx[16](value);
        }
        var passwordinput1_props = {
          passwordLabel: "Confirm New Password",
          passwordPlaceholder: "Enter a strong password"
        };
        if (ctx[4] !== void 0) {
          passwordinput1_props.passwordValue = ctx[4];
        }
        if (ctx[7] !== void 0) {
          passwordinput1_props.passwordInputValid = ctx[7];
        }
        passwordinput1 = new PasswordInput({ props: passwordinput1_props });
        binding_callbacks.push(function() {
          return bind(passwordinput1, "passwordValue", passwordinput1_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput1, "passwordInputValid", passwordinput1_passwordInputValid_binding);
        });
        return {
          c: function() {
            div3 = element("div");
            div1 = element("div");
            div0 = element("div");
            button0 = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            h2 = element("h2");
            if_block0.c();
            t1 = space();
            div2 = element("div");
            button1 = element("button");
            t2 = text("Save");
            t3 = space();
            form = element("form");
            if (if_block1)
              if_block1.c();
            t4 = space();
            create_component(passwordinput0.$$.fragment);
            t5 = space();
            create_component(passwordinput1.$$.fragment);
            attr(div0, "class", "ms-modal__profile-back");
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(div1, "class", "ms-modal__title-group");
            attr(button1, "class", "ms-modal__save-button");
            button1.disabled = button1_disabled_value = ctx[1].auth.hasPassword && !ctx[5] || !ctx[6] || !ctx[7];
            attr(div2, "class", "ms-modal__action-container");
            attr(div3, "class", "ms-modal__title-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
          },
          m: function(target, anchor) {
            insert(target, div3, anchor);
            append(div3, div1);
            append(div1, div0);
            append(div0, button0);
            mount_component(backicon, button0, null);
            append(div1, t0);
            append(div1, h2);
            if_block0.m(h2, null);
            append(div3, t1);
            append(div3, div2);
            append(div2, button1);
            append(button1, t2);
            insert(target, t3, anchor);
            insert(target, form, anchor);
            if (if_block1)
              if_block1.m(form, null);
            append(form, t4);
            mount_component(passwordinput0, form, null);
            append(form, t5);
            mount_component(passwordinput1, form, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button0, "click", ctx[10]),
                listen(button1, "click", ctx[8]),
                listen(form, "submit", stop_propagation(prevent_default(ctx[8])))
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
              if_block0.d(1);
              if_block0 = current_block_type(ctx2);
              if (if_block0) {
                if_block0.c();
                if_block0.m(h2, null);
              }
            }
            if (!current || dirty & 226 && button1_disabled_value !== (button1_disabled_value = ctx2[1].auth.hasPassword && !ctx2[5] || !ctx2[6] || !ctx2[7])) {
              button1.disabled = button1_disabled_value;
            }
            if (ctx2[1].auth.hasPassword) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
                if (dirty & 2) {
                  transition_in(if_block1, 1);
                }
              } else {
                if_block1 = create_if_block$8(ctx2);
                if_block1.c();
                transition_in(if_block1, 1);
                if_block1.m(form, t4);
              }
            } else if (if_block1) {
              group_outros();
              transition_out(if_block1, 1, 1, function() {
                if_block1 = null;
              });
              check_outros();
            }
            var passwordinput0_changes = {};
            if (!updating_passwordValue && dirty & 8) {
              updating_passwordValue = true;
              passwordinput0_changes.passwordValue = ctx2[3];
              add_flush_callback(function() {
                return updating_passwordValue = false;
              });
            }
            if (!updating_passwordInputValid && dirty & 64) {
              updating_passwordInputValid = true;
              passwordinput0_changes.passwordInputValid = ctx2[6];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput0.$set(passwordinput0_changes);
            var passwordinput1_changes = {};
            if (!updating_passwordValue_1 && dirty & 16) {
              updating_passwordValue_1 = true;
              passwordinput1_changes.passwordValue = ctx2[4];
              add_flush_callback(function() {
                return updating_passwordValue_1 = false;
              });
            }
            if (!updating_passwordInputValid_1 && dirty & 128) {
              updating_passwordInputValid_1 = true;
              passwordinput1_changes.passwordInputValid = ctx2[7];
              add_flush_callback(function() {
                return updating_passwordInputValid_1 = false;
              });
            }
            passwordinput1.$set(passwordinput1_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            transition_in(if_block1);
            transition_in(passwordinput0.$$.fragment, local);
            transition_in(passwordinput1.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(if_block1);
            transition_out(passwordinput0.$$.fragment, local);
            transition_out(passwordinput1.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div3);
            destroy_component(backicon);
            if_block0.d();
            if (detaching)
              detach(t3);
            if (detaching)
              detach(form);
            if (if_block1)
              if_block1.d();
            destroy_component(passwordinput0);
            destroy_component(passwordinput1);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$a($$self, $$props, $$invalidate) {
        var displayProfile = $$props.displayProfile;
        var profileLoader = $$props.profileLoader;
        var member = $$props.member;
        var currentPasswordValue = "";
        var newPasswordValue = "";
        var confirmPasswordValue = "";
        var currentPasswordValid = false;
        var newPasswordValid = false;
        var confirmPasswordValid = false;
        function submitPasswordChange(e) {
          return __awaiter(this, void 0, void 0, function() {
            var message, msg, msg, err_17;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (member.auth.hasPassword && !currentPasswordValid && !newPasswordValid && !confirmPasswordValid)
                    return [2];
                  if (!member.auth.hasPassword && !newPasswordValid && !confirmPasswordValid)
                    return [2];
                  $$invalidate(9, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 6, , 7]);
                  message = void 0;
                  if (!member.auth.hasPassword)
                    return [3, 3];
                  return [4, window.$memberstackDom.updateMemberAuth({
                    oldPassword: currentPasswordValue,
                    newPassword: newPasswordValue
                  })];
                case 2:
                  msg = _a.sent()._internalUseOnly.message;
                  message = msg;
                  return [3, 5];
                case 3:
                  return [4, window.$memberstackDom.setPassword({ password: newPasswordValue })];
                case 4:
                  msg = _a.sent()._internalUseOnly.message;
                  $$invalidate(1, member.auth.hasPassword = true, member);
                  message = msg;
                  _a.label = 5;
                case 5:
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(2, currentPasswordValue = "");
                  $$invalidate(3, newPasswordValue = "");
                  $$invalidate(4, confirmPasswordValue = "");
                  $$invalidate(9, profileLoader = false);
                  return [3, 7];
                case 6:
                  err_17 = _a.sent();
                  window.$memberstackDom._showMessage(err_17.message, true);
                  $$invalidate(9, profileLoader = false);
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "security");
        };
        function passwordinput_passwordValue_binding(value) {
          currentPasswordValue = value;
          $$invalidate(2, currentPasswordValue);
        }
        function passwordinput_passwordInputValid_binding(value) {
          currentPasswordValid = value;
          $$invalidate(5, currentPasswordValid);
        }
        function passwordinput0_passwordValue_binding(value) {
          newPasswordValue = value;
          $$invalidate(3, newPasswordValue);
        }
        function passwordinput0_passwordInputValid_binding(value) {
          newPasswordValid = value;
          $$invalidate(6, newPasswordValid);
        }
        function passwordinput1_passwordValue_binding(value) {
          confirmPasswordValue = value;
          $$invalidate(4, confirmPasswordValue);
        }
        function passwordinput1_passwordInputValid_binding(value) {
          confirmPasswordValid = value;
          $$invalidate(7, confirmPasswordValid);
        }
        $$self.$$set = function($$props2) {
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("profileLoader" in $$props2)
            $$invalidate(9, profileLoader = $$props2.profileLoader);
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
        };
        return [
          displayProfile,
          member,
          currentPasswordValue,
          newPasswordValue,
          confirmPasswordValue,
          currentPasswordValid,
          newPasswordValid,
          confirmPasswordValid,
          submitPasswordChange,
          profileLoader,
          click_handler,
          passwordinput_passwordValue_binding,
          passwordinput_passwordInputValid_binding,
          passwordinput0_passwordValue_binding,
          passwordinput0_passwordInputValid_binding,
          passwordinput1_passwordValue_binding,
          passwordinput1_passwordInputValid_binding
        ];
      }
      var PasswordInfoContent = function(_super) {
        __extends(PasswordInfoContent2, _super);
        function PasswordInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$a, create_fragment$c, safe_not_equal, {
            displayProfile: 0,
            profileLoader: 9,
            member: 1
          });
          return _this;
        }
        return PasswordInfoContent2;
      }(SvelteComponent);
      function fade(node, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.duration, duration = _d === void 0 ? 400 : _d, _e = _b.easing, easing = _e === void 0 ? identity : _e;
        var o = +getComputedStyle(node).opacity;
        return {
          delay,
          duration,
          easing,
          css: function(t) {
            return "opacity: ".concat(t * o);
          }
        };
      }
      function create_fragment$b(ctx) {
        var div;
        var loadingicon;
        var div_transition;
        var current;
        loadingicon = new LoadingIcon({});
        return {
          c: function() {
            div = element("div");
            create_component(loadingicon.$$.fragment);
            attr(div, "class", "ms__profile__loader");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(loadingicon, div, null);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(loadingicon.$$.fragment, local);
            add_render_callback(function() {
              if (!div_transition)
                div_transition = create_bidirectional_transition(div, fade, {}, true);
              div_transition.run(1);
            });
            current = true;
          },
          o: function(local) {
            transition_out(loadingicon.$$.fragment, local);
            if (!div_transition)
              div_transition = create_bidirectional_transition(div, fade, {}, false);
            div_transition.run(0);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(loadingicon);
            if (detaching && div_transition)
              div_transition.end();
          }
        };
      }
      var ProfileLoader = function(_super) {
        __extends(ProfileLoader2, _super);
        function ProfileLoader2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$b, safe_not_equal, {});
          return _this;
        }
        return ProfileLoader2;
      }(SvelteComponent);
      function create_fragment$a(ctx) {
        var button;
        var switch_instance0;
        var t0;
        var t1;
        var t2;
        var switch_instance1;
        var button_class_value;
        var current;
        var mounted;
        var dispose;
        var switch_value = ctx[2];
        function switch_props(ctx2) {
          return {};
        }
        if (switch_value) {
          switch_instance0 = new switch_value(switch_props());
        }
        var switch_value_1 = ctx[1];
        function switch_props_1(ctx2) {
          return {};
        }
        if (switch_value_1) {
          switch_instance1 = new switch_value_1(switch_props_1());
        }
        return {
          c: function() {
            button = element("button");
            if (switch_instance0)
              create_component(switch_instance0.$$.fragment);
            t0 = space();
            t1 = text(ctx[0]);
            t2 = space();
            if (switch_instance1)
              create_component(switch_instance1.$$.fragment);
            attr(button, "class", button_class_value = "ms-modal__regular-button " + (ctx[5].class || ""));
            set_style(button, "background", ctx[4]);
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            if (switch_instance0) {
              mount_component(switch_instance0, button, null);
            }
            append(button, t0);
            append(button, t1);
            append(button, t2);
            if (switch_instance1) {
              mount_component(switch_instance1, button, null);
            }
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", function() {
                if (is_function(ctx[3]))
                  ctx[3].apply(this, arguments);
              });
              mounted = true;
            }
          },
          p: function(new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
            if (switch_value !== (switch_value = ctx[2])) {
              if (switch_instance0) {
                group_outros();
                var old_component_1 = switch_instance0;
                transition_out(old_component_1.$$.fragment, 1, 0, function() {
                  destroy_component(old_component_1, 1);
                });
                check_outros();
              }
              if (switch_value) {
                switch_instance0 = new switch_value(switch_props());
                create_component(switch_instance0.$$.fragment);
                transition_in(switch_instance0.$$.fragment, 1);
                mount_component(switch_instance0, button, t0);
              } else {
                switch_instance0 = null;
              }
            }
            if (!current || dirty & 1)
              set_data(t1, ctx[0]);
            if (switch_value_1 !== (switch_value_1 = ctx[1])) {
              if (switch_instance1) {
                group_outros();
                var old_component_2 = switch_instance1;
                transition_out(old_component_2.$$.fragment, 1, 0, function() {
                  destroy_component(old_component_2, 1);
                });
                check_outros();
              }
              if (switch_value_1) {
                switch_instance1 = new switch_value_1(switch_props_1());
                create_component(switch_instance1.$$.fragment);
                transition_in(switch_instance1.$$.fragment, 1);
                mount_component(switch_instance1, button, null);
              } else {
                switch_instance1 = null;
              }
            }
            if (!current || dirty & 32 && button_class_value !== (button_class_value = "ms-modal__regular-button " + (ctx[5].class || ""))) {
              attr(button, "class", button_class_value);
            }
            if (!current || dirty & 16) {
              set_style(button, "background", ctx[4]);
            }
          },
          i: function(local) {
            if (current)
              return;
            if (switch_instance0)
              transition_in(switch_instance0.$$.fragment, local);
            if (switch_instance1)
              transition_in(switch_instance1.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            if (switch_instance0)
              transition_out(switch_instance0.$$.fragment, local);
            if (switch_instance1)
              transition_out(switch_instance1.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            if (switch_instance0)
              destroy_component(switch_instance0);
            if (switch_instance1)
              destroy_component(switch_instance1);
            mounted = false;
            dispose();
          }
        };
      }
      function instance$9($$self, $$props, $$invalidate) {
        var omit_props_names = ["buttonText", "buttonRightIcon", "buttonLeftIcon", "onClick"];
        var $$restProps = compute_rest_props($$props, omit_props_names);
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(6, $app = $$value);
        });
        var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
        var _b = $$props.buttonRightIcon, buttonRightIcon = _b === void 0 ? null : _b;
        var _c = $$props.buttonLeftIcon, buttonLeftIcon = _c === void 0 ? null : _c;
        var _d = $$props.onClick, onClick = _d === void 0 ? function() {
        } : _d;
        var buttonColor = "rgb(41, 98, 255)";
        if ($app.branding.colors.lightMode.primaryButton) {
          buttonColor = $app.branding.colors.lightMode.primaryButton;
        }
        $$self.$$set = function($$new_props) {
          $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
          $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
          if ("buttonText" in $$new_props)
            $$invalidate(0, buttonText = $$new_props.buttonText);
          if ("buttonRightIcon" in $$new_props)
            $$invalidate(1, buttonRightIcon = $$new_props.buttonRightIcon);
          if ("buttonLeftIcon" in $$new_props)
            $$invalidate(2, buttonLeftIcon = $$new_props.buttonLeftIcon);
          if ("onClick" in $$new_props)
            $$invalidate(3, onClick = $$new_props.onClick);
        };
        return [buttonText, buttonRightIcon, buttonLeftIcon, onClick, buttonColor, $$restProps];
      }
      var RegularButton = function(_super) {
        __extends(RegularButton2, _super);
        function RegularButton2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$9, create_fragment$a, safe_not_equal, {
            buttonText: 0,
            buttonRightIcon: 1,
            buttonLeftIcon: 2,
            onClick: 3
          });
          return _this;
        }
        return RegularButton2;
      }(SvelteComponent);
      function create_fragment$9(ctx) {
        var button;
        var t;
        var button_class_value;
        var mounted;
        var dispose;
        return {
          c: function() {
            button = element("button");
            t = text(ctx[0]);
            attr(button, "class", button_class_value = "ms-modal__text-button " + ctx[3].class);
            set_style(button, "color", ctx[2]);
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, t);
            if (!mounted) {
              dispose = listen(button, "click", function() {
                if (is_function(ctx[1]))
                  ctx[1].apply(this, arguments);
              });
              mounted = true;
            }
          },
          p: function(new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
            if (dirty & 1)
              set_data(t, ctx[0]);
            if (dirty & 8 && button_class_value !== (button_class_value = "ms-modal__text-button " + ctx[3].class)) {
              attr(button, "class", button_class_value);
            }
            if (dirty & 4) {
              set_style(button, "color", ctx[2]);
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function instance$8($$self, $$props, $$invalidate) {
        var omit_props_names = ["buttonText", "onClick"];
        var $$restProps = compute_rest_props($$props, omit_props_names);
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(4, $app = $$value);
        });
        var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
        var _b = $$props.onClick, onClick = _b === void 0 ? function() {
        } : _b;
        var buttonColor = "rgb(41, 98, 255)";
        if ($app.branding.colors.lightMode.primaryButton) {
          buttonColor = $app.branding.colors.lightMode.primaryButton;
        }
        $$self.$$set = function($$new_props) {
          $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
          $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
          if ("buttonText" in $$new_props)
            $$invalidate(0, buttonText = $$new_props.buttonText);
          if ("onClick" in $$new_props)
            $$invalidate(1, onClick = $$new_props.onClick);
        };
        return [buttonText, onClick, buttonColor, $$restProps];
      }
      var TextButton = function(_super) {
        __extends(TextButton2, _super);
        function TextButton2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$8, create_fragment$9, safe_not_equal, { buttonText: 0, onClick: 1 });
          return _this;
        }
        return TextButton2;
      }(SvelteComponent);
      function get_each_context$2(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[8] = list[i];
        child_ctx[10] = i;
        return child_ctx;
      }
      function create_if_block_2$4(ctx) {
        var div;
        var regularbutton;
        var current;
        regularbutton = new RegularButton({
          props: {
            onClick: ctx[3],
            class: "ms-modal__regular-button--margin-right ms-modal__regular-button--left-icon",
            buttonText: "Manage Subscriptions",
            buttonLeftIcon: LinkOutIcon
          }
        });
        return {
          c: function() {
            div = element("div");
            create_component(regularbutton.$$.fragment);
            set_style(div, "display", "flex");
            set_style(div, "flex-wrap", "wrap");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            mount_component(regularbutton, div, null);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(regularbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(regularbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(regularbutton);
          }
        };
      }
      function create_if_block_1$5(ctx) {
        var h3;
        var t1;
        var each_1_anchor;
        var current;
        var each_value = ctx[1];
        var each_blocks = [];
        for (var i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
        }
        var out = function(i2) {
          return transition_out(each_blocks[i2], 1, 1, function() {
            each_blocks[i2] = null;
          });
        };
        return {
          c: function() {
            h3 = element("h3");
            h3.textContent = "Free Plans";
            t1 = space();
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            each_1_anchor = empty();
          },
          m: function(target, anchor) {
            insert(target, h3, anchor);
            insert(target, t1, anchor);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(target, anchor);
            }
            insert(target, each_1_anchor, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            if (dirty & 22) {
              each_value = ctx2[1];
              var i2 = void 0;
              for (i2 = 0; i2 < each_value.length; i2 += 1) {
                var child_ctx = get_each_context$2(ctx2, each_value, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                  transition_in(each_blocks[i2], 1);
                } else {
                  each_blocks[i2] = create_each_block$2(child_ctx);
                  each_blocks[i2].c();
                  transition_in(each_blocks[i2], 1);
                  each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
                }
              }
              group_outros();
              for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
                out(i2);
              }
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            for (var i2 = 0; i2 < each_value.length; i2 += 1) {
              transition_in(each_blocks[i2]);
            }
            current = true;
          },
          o: function(local) {
            each_blocks = each_blocks.filter(Boolean);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              transition_out(each_blocks[i2]);
            }
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(h3);
            if (detaching)
              detach(t1);
            destroy_each(each_blocks, detaching);
            if (detaching)
              detach(each_1_anchor);
          }
        };
      }
      function create_each_block$2(ctx) {
        var div1;
        var div0;
        var b;
        var t0_value = ctx[2].plans.find(func).name + "";
        var t0;
        var t1;
        var textbutton;
        var t2;
        var current;
        function func() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return ctx[6].apply(ctx, __spreadArray([ctx[8]], __read(args), false));
        }
        function func_1() {
          return ctx[7](ctx[8]);
        }
        textbutton = new TextButton({
          props: { buttonText: "Remove", onClick: func_1 }
        });
        return {
          c: function() {
            div1 = element("div");
            div0 = element("div");
            b = element("b");
            t0 = text(t0_value);
            t1 = space();
            create_component(textbutton.$$.fragment);
            t2 = space();
            attr(div1, "class", "ms-modal__card");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, b);
            append(b, t0);
            append(div1, t1);
            mount_component(textbutton, div1, null);
            append(div1, t2);
            current = true;
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if ((!current || dirty & 6) && t0_value !== (t0_value = ctx[2].plans.find(func).name + ""))
              set_data(t0, t0_value);
            var textbutton_changes = {};
            if (dirty & 2)
              textbutton_changes.onClick = func_1;
            textbutton.$set(textbutton_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(textbutton.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(textbutton.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            destroy_component(textbutton);
          }
        };
      }
      function create_if_block$7(ctx) {
        var div;
        return {
          c: function() {
            div = element("div");
            div.textContent = "You currently have no plans.";
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
          }
        };
      }
      function create_fragment$8(ctx) {
        var div;
        var t1;
        var t2;
        var t3;
        var if_block2_anchor;
        var current;
        var if_block0 = ctx[0].stripeCustomerId && create_if_block_2$4(ctx);
        var if_block1 = ctx[1].length > 0 && create_if_block_1$5(ctx);
        var if_block2 = !ctx[0].stripeCustomerId && ctx[1].length === 0 && create_if_block$7();
        return {
          c: function() {
            div = element("div");
            div.innerHTML = '<h2 class="ms-modal__title ms-modal__title--profile">Plans</h2>';
            t1 = space();
            if (if_block0)
              if_block0.c();
            t2 = space();
            if (if_block1)
              if_block1.c();
            t3 = space();
            if (if_block2)
              if_block2.c();
            if_block2_anchor = empty();
            attr(div, "class", "ms-modal__title-container");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            insert(target, t1, anchor);
            if (if_block0)
              if_block0.m(target, anchor);
            insert(target, t2, anchor);
            if (if_block1)
              if_block1.m(target, anchor);
            insert(target, t3, anchor);
            if (if_block2)
              if_block2.m(target, anchor);
            insert(target, if_block2_anchor, anchor);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (ctx2[0].stripeCustomerId) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 1) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_2$4(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(t2.parentNode, t2);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            if (ctx2[1].length > 0) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
                if (dirty & 2) {
                  transition_in(if_block1, 1);
                }
              } else {
                if_block1 = create_if_block_1$5(ctx2);
                if_block1.c();
                transition_in(if_block1, 1);
                if_block1.m(t3.parentNode, t3);
              }
            } else if (if_block1) {
              group_outros();
              transition_out(if_block1, 1, 1, function() {
                if_block1 = null;
              });
              check_outros();
            }
            if (!ctx2[0].stripeCustomerId && ctx2[1].length === 0) {
              if (if_block2)
                ;
              else {
                if_block2 = create_if_block$7();
                if_block2.c();
                if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
              }
            } else if (if_block2) {
              if_block2.d(1);
              if_block2 = null;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(if_block1);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(if_block1);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if (detaching)
              detach(t1);
            if (if_block0)
              if_block0.d(detaching);
            if (detaching)
              detach(t2);
            if (if_block1)
              if_block1.d(detaching);
            if (detaching)
              detach(t3);
            if (if_block2)
              if_block2.d(detaching);
            if (detaching)
              detach(if_block2_anchor);
          }
        };
      }
      function instance$7($$self, $$props, $$invalidate) {
        var freePlanConnections;
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(2, $app = $$value);
        });
        var profileLoader = $$props.profileLoader;
        var member = $$props.member;
        function launchPortal(e) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  $$invalidate(5, profileLoader = true);
                  return [4, window.$memberstackDom.launchStripeCustomerPortal({ priceIds: [], autoRedirect: true })];
                case 1:
                  _a.sent();
                  return [2];
              }
            });
          });
        }
        function removeFreePlan(planId) {
          return __awaiter(this, void 0, void 0, function() {
            var err_18;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  $$invalidate(5, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, 4, 5]);
                  return [4, window.$memberstackDom.removePlan({ planId })];
                case 2:
                  _a.sent();
                  $$invalidate(0, member.planConnections = member.planConnections.filter(function(plan) {
                    return plan.planId !== planId;
                  }), member);
                  return [3, 5];
                case 3:
                  err_18 = _a.sent();
                  console.log(err_18);
                  window.$memberstackDom._showMessage(err_18.message, true);
                  return [3, 5];
                case 4:
                  $$invalidate(5, profileLoader = false);
                  return [7];
                case 5:
                  return [2];
              }
            });
          });
        }
        var func = function(memberPlan, plan) {
          return plan.id === memberPlan.planId;
        };
        var func_1 = function(memberPlan) {
          return removeFreePlan(memberPlan.planId);
        };
        $$self.$$set = function($$props2) {
          if ("profileLoader" in $$props2)
            $$invalidate(5, profileLoader = $$props2.profileLoader);
          if ("member" in $$props2)
            $$invalidate(0, member = $$props2.member);
        };
        $$self.$$.update = function() {
          if ($$self.$$.dirty & 1) {
            $$invalidate(1, freePlanConnections = member.planConnections.filter(function(plan) {
              return plan.type === "FREE";
            }));
          }
        };
        return [
          member,
          freePlanConnections,
          $app,
          launchPortal,
          removeFreePlan,
          profileLoader,
          func,
          func_1
        ];
      }
      var PlansInfoContent = function(_super) {
        __extends(PlansInfoContent2, _super);
        function PlansInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$7, create_fragment$8, safe_not_equal, { profileLoader: 5, member: 0 });
          return _this;
        }
        return PlansInfoContent2;
      }(SvelteComponent);
      function create_if_block_4$2(ctx) {
        var profileloader;
        var current;
        profileloader = new ProfileLoader({});
        return {
          c: function() {
            create_component(profileloader.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(profileloader, target, anchor);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profileloader.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profileloader.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(profileloader, detaching);
          }
        };
      }
      function create_if_block_3$2(ctx) {
        var plansinfocontent;
        var updating_member;
        var updating_profileLoader;
        var current;
        function plansinfocontent_member_binding(value) {
          ctx[18](value);
        }
        function plansinfocontent_profileLoader_binding(value) {
          ctx[19](value);
        }
        var plansinfocontent_props = {};
        if (ctx[1] !== void 0) {
          plansinfocontent_props.member = ctx[1];
        }
        if (ctx[5] !== void 0) {
          plansinfocontent_props.profileLoader = ctx[5];
        }
        plansinfocontent = new PlansInfoContent({ props: plansinfocontent_props });
        binding_callbacks.push(function() {
          return bind(plansinfocontent, "member", plansinfocontent_member_binding);
        });
        binding_callbacks.push(function() {
          return bind(plansinfocontent, "profileLoader", plansinfocontent_profileLoader_binding);
        });
        return {
          c: function() {
            create_component(plansinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(plansinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var plansinfocontent_changes = {};
            if (!updating_member && dirty & 2) {
              updating_member = true;
              plansinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            if (!updating_profileLoader && dirty & 32) {
              updating_profileLoader = true;
              plansinfocontent_changes.profileLoader = ctx2[5];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            plansinfocontent.$set(plansinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(plansinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(plansinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(plansinfocontent, detaching);
          }
        };
      }
      function create_if_block_2$3(ctx) {
        var passwordinfocontent;
        var updating_displayProfile;
        var updating_profileLoader;
        var updating_member;
        var current;
        function passwordinfocontent_displayProfile_binding(value) {
          ctx[15](value);
        }
        function passwordinfocontent_profileLoader_binding(value) {
          ctx[16](value);
        }
        function passwordinfocontent_member_binding(value) {
          ctx[17](value);
        }
        var passwordinfocontent_props = {};
        if (ctx[0] !== void 0) {
          passwordinfocontent_props.displayProfile = ctx[0];
        }
        if (ctx[5] !== void 0) {
          passwordinfocontent_props.profileLoader = ctx[5];
        }
        if (ctx[1] !== void 0) {
          passwordinfocontent_props.member = ctx[1];
        }
        passwordinfocontent = new PasswordInfoContent({ props: passwordinfocontent_props });
        binding_callbacks.push(function() {
          return bind(passwordinfocontent, "displayProfile", passwordinfocontent_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinfocontent, "profileLoader", passwordinfocontent_profileLoader_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinfocontent, "member", passwordinfocontent_member_binding);
        });
        return {
          c: function() {
            create_component(passwordinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordinfocontent_changes = {};
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              passwordinfocontent_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 32) {
              updating_profileLoader = true;
              passwordinfocontent_changes.profileLoader = ctx2[5];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            if (!updating_member && dirty & 2) {
              updating_member = true;
              passwordinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            passwordinfocontent.$set(passwordinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordinfocontent, detaching);
          }
        };
      }
      function create_if_block_1$4(ctx) {
        var securityinfocontent;
        var updating_displayProfile;
        var updating_profileLoader;
        var updating_member;
        var current;
        function securityinfocontent_displayProfile_binding(value) {
          ctx[12](value);
        }
        function securityinfocontent_profileLoader_binding(value) {
          ctx[13](value);
        }
        function securityinfocontent_member_binding(value) {
          ctx[14](value);
        }
        var securityinfocontent_props = {};
        if (ctx[0] !== void 0) {
          securityinfocontent_props.displayProfile = ctx[0];
        }
        if (ctx[5] !== void 0) {
          securityinfocontent_props.profileLoader = ctx[5];
        }
        if (ctx[1] !== void 0) {
          securityinfocontent_props.member = ctx[1];
        }
        securityinfocontent = new SecurityInfoContent({ props: securityinfocontent_props });
        binding_callbacks.push(function() {
          return bind(securityinfocontent, "displayProfile", securityinfocontent_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(securityinfocontent, "profileLoader", securityinfocontent_profileLoader_binding);
        });
        binding_callbacks.push(function() {
          return bind(securityinfocontent, "member", securityinfocontent_member_binding);
        });
        return {
          c: function() {
            create_component(securityinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(securityinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var securityinfocontent_changes = {};
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              securityinfocontent_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 32) {
              updating_profileLoader = true;
              securityinfocontent_changes.profileLoader = ctx2[5];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            if (!updating_member && dirty & 2) {
              updating_member = true;
              securityinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            securityinfocontent.$set(securityinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(securityinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(securityinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(securityinfocontent, detaching);
          }
        };
      }
      function create_if_block$6(ctx) {
        var profileinfocontent;
        var updating_member;
        var updating_profileLoader;
        var current;
        function profileinfocontent_member_binding(value) {
          ctx[10](value);
        }
        function profileinfocontent_profileLoader_binding(value) {
          ctx[11](value);
        }
        var profileinfocontent_props = {
          customFields: ctx[6].customFields
        };
        if (ctx[1] !== void 0) {
          profileinfocontent_props.member = ctx[1];
        }
        if (ctx[5] !== void 0) {
          profileinfocontent_props.profileLoader = ctx[5];
        }
        profileinfocontent = new ProfileInfoContent({ props: profileinfocontent_props });
        binding_callbacks.push(function() {
          return bind(profileinfocontent, "member", profileinfocontent_member_binding);
        });
        binding_callbacks.push(function() {
          return bind(profileinfocontent, "profileLoader", profileinfocontent_profileLoader_binding);
        });
        return {
          c: function() {
            create_component(profileinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(profileinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var profileinfocontent_changes = {};
            if (dirty & 64)
              profileinfocontent_changes.customFields = ctx2[6].customFields;
            if (!updating_member && dirty & 2) {
              updating_member = true;
              profileinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            if (!updating_profileLoader && dirty & 32) {
              updating_profileLoader = true;
              profileinfocontent_changes.profileLoader = ctx2[5];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            profileinfocontent.$set(profileinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profileinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profileinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(profileinfocontent, detaching);
          }
        };
      }
      function create_fragment$7(ctx) {
        var div5;
        var div1;
        var div0;
        var t0_value = ctx[1].auth.email + "";
        var t0;
        var t1;
        var closebutton;
        var t2;
        var div4;
        var div2;
        var profilemodalnav;
        var updating_member;
        var updating_displayProfile;
        var updating_profileLoader;
        var t3;
        var div3;
        var t4;
        var current_block_type_index;
        var if_block1;
        var t5;
        var modalfooter;
        var current;
        closebutton = new CloseButton({
          props: { closeModal: ctx[3] }
        });
        function profilemodalnav_member_binding(value) {
          ctx[7](value);
        }
        function profilemodalnav_displayProfile_binding(value) {
          ctx[8](value);
        }
        function profilemodalnav_profileLoader_binding(value) {
          ctx[9](value);
        }
        var profilemodalnav_props = {
          onSuccessLogout: ctx[2],
          hideProfileSection: ctx[4]
        };
        if (ctx[1] !== void 0) {
          profilemodalnav_props.member = ctx[1];
        }
        if (ctx[0] !== void 0) {
          profilemodalnav_props.displayProfile = ctx[0];
        }
        if (ctx[5] !== void 0) {
          profilemodalnav_props.profileLoader = ctx[5];
        }
        profilemodalnav = new ProfileModalNav({ props: profilemodalnav_props });
        binding_callbacks.push(function() {
          return bind(profilemodalnav, "member", profilemodalnav_member_binding);
        });
        binding_callbacks.push(function() {
          return bind(profilemodalnav, "displayProfile", profilemodalnav_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(profilemodalnav, "profileLoader", profilemodalnav_profileLoader_binding);
        });
        var if_block0 = ctx[5] && create_if_block_4$2();
        var if_block_creators = [create_if_block$6, create_if_block_1$4, create_if_block_2$3, create_if_block_3$2];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[0] === "profile")
            return 0;
          if (ctx2[0] === "security")
            return 1;
          if (ctx2[0] === "changePassword")
            return 2;
          if (ctx2[0] === "plans")
            return 3;
          return -1;
        }
        if (~(current_block_type_index = select_block_type(ctx))) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        }
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div5 = element("div");
            div1 = element("div");
            div0 = element("div");
            t0 = text(t0_value);
            t1 = space();
            create_component(closebutton.$$.fragment);
            t2 = space();
            div4 = element("div");
            div2 = element("div");
            create_component(profilemodalnav.$$.fragment);
            t3 = space();
            div3 = element("div");
            if (if_block0)
              if_block0.c();
            t4 = space();
            if (if_block1)
              if_block1.c();
            t5 = space();
            create_component(modalfooter.$$.fragment);
            attr(div1, "class", "ms-modal__header");
            attr(div2, "class", "ms-modal__content-left");
            attr(div3, "class", "ms-modal__content-right");
            attr(div4, "class", "ms-modal__content ms-modal__content--profile");
            attr(div5, "class", "ms-modal ms-modal--profile");
            attr(div5, "id", "ProfileModal");
          },
          m: function(target, anchor) {
            insert(target, div5, anchor);
            append(div5, div1);
            append(div1, div0);
            append(div0, t0);
            append(div1, t1);
            mount_component(closebutton, div1, null);
            append(div5, t2);
            append(div5, div4);
            append(div4, div2);
            mount_component(profilemodalnav, div2, null);
            append(div4, t3);
            append(div4, div3);
            if (if_block0)
              if_block0.m(div3, null);
            append(div3, t4);
            if (~current_block_type_index) {
              if_blocks[current_block_type_index].m(div3, null);
            }
            append(div5, t5);
            mount_component(modalfooter, div5, null);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if ((!current || dirty & 2) && t0_value !== (t0_value = ctx2[1].auth.email + ""))
              set_data(t0, t0_value);
            var closebutton_changes = {};
            if (dirty & 8)
              closebutton_changes.closeModal = ctx2[3];
            closebutton.$set(closebutton_changes);
            var profilemodalnav_changes = {};
            if (dirty & 4)
              profilemodalnav_changes.onSuccessLogout = ctx2[2];
            if (dirty & 16)
              profilemodalnav_changes.hideProfileSection = ctx2[4];
            if (!updating_member && dirty & 2) {
              updating_member = true;
              profilemodalnav_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              profilemodalnav_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 32) {
              updating_profileLoader = true;
              profilemodalnav_changes.profileLoader = ctx2[5];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            profilemodalnav.$set(profilemodalnav_changes);
            if (ctx2[5]) {
              if (if_block0) {
                if (dirty & 32) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_4$2();
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div3, t4);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if (~current_block_type_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              }
            } else {
              if (if_block1) {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function() {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
              }
              if (~current_block_type_index) {
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block1.c();
                } else {
                  if_block1.p(ctx2, dirty);
                }
                transition_in(if_block1, 1);
                if_block1.m(div3, null);
              } else {
                if_block1 = null;
              }
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(closebutton.$$.fragment, local);
            transition_in(profilemodalnav.$$.fragment, local);
            transition_in(if_block0);
            transition_in(if_block1);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(closebutton.$$.fragment, local);
            transition_out(profilemodalnav.$$.fragment, local);
            transition_out(if_block0);
            transition_out(if_block1);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div5);
            destroy_component(closebutton);
            destroy_component(profilemodalnav);
            if (if_block0)
              if_block0.d();
            if (~current_block_type_index) {
              if_blocks[current_block_type_index].d();
            }
            destroy_component(modalfooter);
          }
        };
      }
      function instance$6($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(6, $app = $$value);
        });
        var onSuccessLogout = $$props.onSuccessLogout;
        var closeModal = $$props.closeModal;
        var _a = $$props.displayProfile, displayProfile = _a === void 0 ? "profile" : _a;
        var member = $$props.member;
        var hideProfileSection = false;
        var profileLoader = false;
        if (!$app.customFields.filter(function(field) {
          return !field.hidden;
        }).length) {
          displayProfile = "security";
          hideProfileSection = true;
        }
        function profilemodalnav_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function profilemodalnav_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function profilemodalnav_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(5, profileLoader);
        }
        function profileinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function profileinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(5, profileLoader);
        }
        function securityinfocontent_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function securityinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(5, profileLoader);
        }
        function securityinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function passwordinfocontent_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function passwordinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(5, profileLoader);
        }
        function passwordinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function plansinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function plansinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(5, profileLoader);
        }
        $$self.$$set = function($$props2) {
          if ("onSuccessLogout" in $$props2)
            $$invalidate(2, onSuccessLogout = $$props2.onSuccessLogout);
          if ("closeModal" in $$props2)
            $$invalidate(3, closeModal = $$props2.closeModal);
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
        };
        return [
          displayProfile,
          member,
          onSuccessLogout,
          closeModal,
          hideProfileSection,
          profileLoader,
          $app,
          profilemodalnav_member_binding,
          profilemodalnav_displayProfile_binding,
          profilemodalnav_profileLoader_binding,
          profileinfocontent_member_binding,
          profileinfocontent_profileLoader_binding,
          securityinfocontent_displayProfile_binding,
          securityinfocontent_profileLoader_binding,
          securityinfocontent_member_binding,
          passwordinfocontent_displayProfile_binding,
          passwordinfocontent_profileLoader_binding,
          passwordinfocontent_member_binding,
          plansinfocontent_member_binding,
          plansinfocontent_profileLoader_binding
        ];
      }
      var ProfileModal = function(_super) {
        __extends(ProfileModal2, _super);
        function ProfileModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$6, create_fragment$7, safe_not_equal, {
            onSuccessLogout: 2,
            closeModal: 3,
            displayProfile: 0,
            member: 1
          });
          return _this;
        }
        return ProfileModal2;
      }(SvelteComponent);
      function create_fragment$6(ctx) {
        var svg;
        var path;
        return {
          c: function() {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z");
            attr(svg, "fill", "none");
            attr(svg, "transform", "rotate(180)");
            attr(svg, "viewBox", "0 0 8 12");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
          },
          m: function(target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
          },
          p: noop,
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(svg);
          }
        };
      }
      var ForwardIcon = function(_super) {
        __extends(ForwardIcon2, _super);
        function ForwardIcon2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, null, create_fragment$6, safe_not_equal, {});
          return _this;
        }
        return ForwardIcon2;
      }(SvelteComponent);
      function create_if_block_1$3(ctx) {
        var button;
        var div;
        var profileicon;
        var t0;
        var t1;
        var forwardicon;
        var current;
        var mounted;
        var dispose;
        profileicon = new ProfileIcon({});
        forwardicon = new ForwardIcon({});
        return {
          c: function() {
            button = element("button");
            div = element("div");
            create_component(profileicon.$$.fragment);
            t0 = text(" Profile");
            t1 = space();
            create_component(forwardicon.$$.fragment);
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", ctx[0] === "profile");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            mount_component(profileicon, div, null);
            append(div, t0);
            append(button, t1);
            mount_component(forwardicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[7]);
              mounted = true;
            }
          },
          p: function(ctx2, dirty) {
            if (dirty & 1) {
              toggle_class(button, "ms-modal__profile-option--active", ctx2[0] === "profile");
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profileicon.$$.fragment, local);
            transition_in(forwardicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profileicon.$$.fragment, local);
            transition_out(forwardicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(profileicon);
            destroy_component(forwardicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block$5(ctx) {
        var button;
        var div;
        var linkouticon;
        var t0;
        var t1;
        var forwardicon;
        var current;
        var mounted;
        var dispose;
        linkouticon = new LinkOutIcon({});
        forwardicon = new ForwardIcon({});
        return {
          c: function() {
            button = element("button");
            div = element("div");
            create_component(linkouticon.$$.fragment);
            t0 = text(" Billing Portal");
            t1 = space();
            create_component(forwardicon.$$.fragment);
            attr(button, "class", "ms-modal__profile-option");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            mount_component(linkouticon, div, null);
            append(div, t0);
            append(button, t1);
            mount_component(forwardicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[4]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(linkouticon.$$.fragment, local);
            transition_in(forwardicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(linkouticon.$$.fragment, local);
            transition_out(forwardicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            destroy_component(linkouticon);
            destroy_component(forwardicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_fragment$5(ctx) {
        var div2;
        var t0;
        var button0;
        var div0;
        var securityicon;
        var t1;
        var t2;
        var forwardicon0;
        var t3;
        var t4;
        var button1;
        var div1;
        var logouticon;
        var t5;
        var t6;
        var forwardicon1;
        var current;
        var mounted;
        var dispose;
        var if_block0 = !ctx[2] && create_if_block_1$3(ctx);
        securityicon = new SecurityIcon({});
        forwardicon0 = new ForwardIcon({});
        var if_block1 = ctx[1].stripeCustomerId && create_if_block$5(ctx);
        logouticon = new LogoutIcon({});
        forwardicon1 = new ForwardIcon({});
        return {
          c: function() {
            div2 = element("div");
            if (if_block0)
              if_block0.c();
            t0 = space();
            button0 = element("button");
            div0 = element("div");
            create_component(securityicon.$$.fragment);
            t1 = text(" Security");
            t2 = space();
            create_component(forwardicon0.$$.fragment);
            t3 = space();
            if (if_block1)
              if_block1.c();
            t4 = space();
            button1 = element("button");
            div1 = element("div");
            create_component(logouticon.$$.fragment);
            t5 = text(" Logout");
            t6 = space();
            create_component(forwardicon1.$$.fragment);
            attr(button0, "class", "ms-modal__profile-option");
            toggle_class(button0, "ms-modal__profile-option--active", ctx[0] === "security" || ctx[0] === "changePassword");
            attr(button1, "class", "ms-modal__profile-option");
            attr(div2, "class", "ms-modal__mobile-profile-nav");
          },
          m: function(target, anchor) {
            insert(target, div2, anchor);
            if (if_block0)
              if_block0.m(div2, null);
            append(div2, t0);
            append(div2, button0);
            append(button0, div0);
            mount_component(securityicon, div0, null);
            append(div0, t1);
            append(button0, t2);
            mount_component(forwardicon0, button0, null);
            append(div2, t3);
            if (if_block1)
              if_block1.m(div2, null);
            append(div2, t4);
            append(div2, button1);
            append(button1, div1);
            mount_component(logouticon, div1, null);
            append(div1, t5);
            append(button1, t6);
            mount_component(forwardicon1, button1, null);
            current = true;
            if (!mounted) {
              dispose = [
                listen(button0, "click", ctx[8]),
                listen(button1, "click", ctx[3])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx2[2]) {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 4) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_1$3(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div2, t0);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            if (dirty & 1) {
              toggle_class(button0, "ms-modal__profile-option--active", ctx2[0] === "security" || ctx2[0] === "changePassword");
            }
            if (ctx2[1].stripeCustomerId) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
                if (dirty & 2) {
                  transition_in(if_block1, 1);
                }
              } else {
                if_block1 = create_if_block$5(ctx2);
                if_block1.c();
                transition_in(if_block1, 1);
                if_block1.m(div2, t4);
              }
            } else if (if_block1) {
              group_outros();
              transition_out(if_block1, 1, 1, function() {
                if_block1 = null;
              });
              check_outros();
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(securityicon.$$.fragment, local);
            transition_in(forwardicon0.$$.fragment, local);
            transition_in(if_block1);
            transition_in(logouticon.$$.fragment, local);
            transition_in(forwardicon1.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(securityicon.$$.fragment, local);
            transition_out(forwardicon0.$$.fragment, local);
            transition_out(if_block1);
            transition_out(logouticon.$$.fragment, local);
            transition_out(forwardicon1.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div2);
            if (if_block0)
              if_block0.d();
            destroy_component(securityicon);
            destroy_component(forwardicon0);
            if (if_block1)
              if_block1.d();
            destroy_component(logouticon);
            destroy_component(forwardicon1);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$5($$self, $$props, $$invalidate) {
        var member = $$props.member;
        var onSuccessLogout = $$props.onSuccessLogout;
        var displayProfile = $$props.displayProfile;
        var profileLoader = $$props.profileLoader;
        var hideProfileSection = $$props.hideProfileSection;
        var unsubscribe = AppStore.subscribe(function(data) {
          if (!data.initialValue) {
            var container = document.getElementById("msOverlay");
            var css = document.createElement("style");
            var color = data.branding.colors.lightMode.primaryButton;
            var fullCSS = ".ms-modal__profile-option:hover { color: ".concat(color, ";} .ms-modal__profile-option--active { color: ").concat(color, ";} .ms-modal__save-button { background: ").concat(color, ";} .ms-modal__save-button:disabled { background: ").concat(color, ";}");
            css.appendChild(document.createTextNode(fullCSS));
            container.appendChild(css);
          }
        });
        onDestroy(function() {
          unsubscribe();
        });
        function logout(e) {
          return __awaiter(this, void 0, void 0, function() {
            var _a, data, message, err_19;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  _b.trys.push([0, 2, , 3]);
                  return [4, window.$memberstackDom.logout()];
                case 1:
                  _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                  window.$memberstackDom._showMessage(message, false);
                  onSuccessLogout({ type: "LOGOUT", data });
                  return [3, 3];
                case 2:
                  err_19 = _b.sent();
                  window.$memberstackDom._showMessage(err_19.message, true);
                  return [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }
        function launchPortal(e) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  $$invalidate(5, profileLoader = true);
                  return [4, window.$memberstackDom.launchStripeCustomerPortal({ priceIds: [], autoRedirect: true })];
                case 1:
                  _a.sent();
                  return [2];
              }
            });
          });
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "profile");
        };
        var click_handler_1 = function() {
          return $$invalidate(0, displayProfile = "security");
        };
        $$self.$$set = function($$props2) {
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
          if ("onSuccessLogout" in $$props2)
            $$invalidate(6, onSuccessLogout = $$props2.onSuccessLogout);
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("profileLoader" in $$props2)
            $$invalidate(5, profileLoader = $$props2.profileLoader);
          if ("hideProfileSection" in $$props2)
            $$invalidate(2, hideProfileSection = $$props2.hideProfileSection);
        };
        return [
          displayProfile,
          member,
          hideProfileSection,
          logout,
          launchPortal,
          profileLoader,
          onSuccessLogout,
          click_handler,
          click_handler_1
        ];
      }
      var MobileProfileModalNav = function(_super) {
        __extends(MobileProfileModalNav2, _super);
        function MobileProfileModalNav2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$5, create_fragment$5, safe_not_equal, {
            member: 1,
            onSuccessLogout: 6,
            displayProfile: 0,
            profileLoader: 5,
            hideProfileSection: 2
          });
          return _this;
        }
        return MobileProfileModalNav2;
      }(SvelteComponent);
      function get_each_context$1(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[5] = list[i];
        child_ctx[6] = list;
        child_ctx[7] = i;
        return child_ctx;
      }
      function create_if_block$4(ctx) {
        var div1;
        var div0;
        var label;
        var t0_value = ctx[5].label + "";
        var t0;
        var label_for_value;
        var t1;
        var input;
        var input_placeholder_value;
        var input_name_value;
        var t2;
        var mounted;
        var dispose;
        function input_input_handler() {
          ctx[4].call(input, ctx[5]);
        }
        return {
          c: function() {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            t2 = space();
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = ctx[5].key);
            attr(input, "class", "ms-form__input");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = ctx[5].label);
            attr(input, "name", input_name_value = ctx[5].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
          },
          m: function(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
            set_input_value(input, ctx[0].customFields[ctx[5].key]);
            append(div1, t2);
            if (!mounted) {
              dispose = listen(input, "input", input_input_handler);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 2 && t0_value !== (t0_value = ctx[5].label + ""))
              set_data(t0, t0_value);
            if (dirty & 2 && label_for_value !== (label_for_value = ctx[5].key)) {
              attr(label, "for", label_for_value);
            }
            if (dirty & 2 && input_placeholder_value !== (input_placeholder_value = ctx[5].label)) {
              attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & 2 && input_name_value !== (input_name_value = ctx[5].key)) {
              attr(input, "name", input_name_value);
            }
            if (dirty & 3 && input.value !== ctx[0].customFields[ctx[5].key]) {
              set_input_value(input, ctx[0].customFields[ctx[5].key]);
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(div1);
            mounted = false;
            dispose();
          }
        };
      }
      function create_each_block$1(ctx) {
        var if_block_anchor;
        var if_block = ctx[5].hidden !== true && create_if_block$4(ctx);
        return {
          c: function() {
            if (if_block)
              if_block.c();
            if_block_anchor = empty();
          },
          m: function(target, anchor) {
            if (if_block)
              if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
          },
          p: function(ctx2, dirty) {
            if (ctx2[5].hidden !== true) {
              if (if_block) {
                if_block.p(ctx2, dirty);
              } else {
                if_block = create_if_block$4(ctx2);
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
              }
            } else if (if_block) {
              if_block.d(1);
              if_block = null;
            }
          },
          d: function(detaching) {
            if (if_block)
              if_block.d(detaching);
            if (detaching)
              detach(if_block_anchor);
          }
        };
      }
      function create_fragment$4(ctx) {
        var form;
        var t0;
        var div;
        var button;
        var mounted;
        var dispose;
        var each_value = ctx[1];
        var each_blocks = [];
        for (var i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
        }
        return {
          c: function() {
            form = element("form");
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            t0 = space();
            div = element("div");
            button = element("button");
            button.textContent = "Save";
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(button, "class", "ms-modal__save-button ms-modal__save-button--large");
            attr(div, "class", "ms-modal__action-container");
          },
          m: function(target, anchor) {
            insert(target, form, anchor);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(form, null);
            }
            insert(target, t0, anchor);
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
              dispose = [
                listen(form, "submit", stop_propagation(prevent_default(ctx[2]))),
                listen(button, "click", ctx[2])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (dirty & 3) {
              each_value = ctx2[1];
              var i2 = void 0;
              for (i2 = 0; i2 < each_value.length; i2 += 1) {
                var child_ctx = get_each_context$1(ctx2, each_value, i2);
                if (each_blocks[i2]) {
                  each_blocks[i2].p(child_ctx, dirty);
                } else {
                  each_blocks[i2] = create_each_block$1(child_ctx);
                  each_blocks[i2].c();
                  each_blocks[i2].m(form, null);
                }
              }
              for (; i2 < each_blocks.length; i2 += 1) {
                each_blocks[i2].d(1);
              }
              each_blocks.length = each_value.length;
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(form);
            destroy_each(each_blocks, detaching);
            if (detaching)
              detach(t0);
            if (detaching)
              detach(div);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$4($$self, $$props, $$invalidate) {
        var customFields = $$props.customFields;
        var member = $$props.member;
        var profileLoader = $$props.profileLoader;
        function saveProfile(e) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  $$invalidate(3, profileLoader = true);
                  return [4, window.$memberstackDom.updateMember({ customFields: member.customFields })];
                case 1:
                  _a.sent();
                  $$invalidate(3, profileLoader = false);
                  return [2];
              }
            });
          });
        }
        function input_input_handler(customField) {
          member.customFields[customField.key] = this.value;
          $$invalidate(0, member);
        }
        $$self.$$set = function($$props2) {
          if ("customFields" in $$props2)
            $$invalidate(1, customFields = $$props2.customFields);
          if ("member" in $$props2)
            $$invalidate(0, member = $$props2.member);
          if ("profileLoader" in $$props2)
            $$invalidate(3, profileLoader = $$props2.profileLoader);
        };
        return [member, customFields, saveProfile, profileLoader, input_input_handler];
      }
      var MobileProfileInfoContent = function(_super) {
        __extends(MobileProfileInfoContent2, _super);
        function MobileProfileInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$4, create_fragment$4, safe_not_equal, {
            customFields: 1,
            member: 0,
            profileLoader: 3
          });
          return _this;
        }
        return MobileProfileInfoContent2;
      }(SvelteComponent);
      function get_each_context(ctx, list, i) {
        var child_ctx = ctx.slice();
        child_ctx[16] = list[i];
        return child_ctx;
      }
      function create_else_block_1(ctx) {
        var t;
        return {
          c: function() {
            t = text("Change Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block_2$2(ctx) {
        var t;
        return {
          c: function() {
            t = text("Set Password");
          },
          m: function(target, anchor) {
            insert(target, t, anchor);
          },
          d: function(detaching) {
            if (detaching)
              detach(t);
          }
        };
      }
      function create_if_block$3(ctx) {
        var p;
        var t1;
        var div;
        var each_blocks = [];
        var each_1_lookup = /* @__PURE__ */ new Map();
        var each_value = ctx[4].authProviders;
        var get_key = function(ctx2) {
          return ctx2[16].provider;
        };
        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context(ctx, each_value, i);
          var key = get_key(child_ctx);
          each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
        }
        return {
          c: function() {
            p = element("p");
            p.textContent = "Connect Additional Accounts";
            t1 = space();
            div = element("div");
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].c();
            }
            attr(p, "class", "ms-form__label");
            attr(div, "class", "ms-modal__social");
          },
          m: function(target, anchor) {
            insert(target, p, anchor);
            insert(target, t1, anchor);
            insert(target, div, anchor);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].m(div, null);
            }
          },
          p: function(ctx2, dirty) {
            if (dirty & 210) {
              each_value = ctx2[4].authProviders;
              each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(p);
            if (detaching)
              detach(t1);
            if (detaching)
              detach(div);
            for (var i2 = 0; i2 < each_blocks.length; i2 += 1) {
              each_blocks[i2].d();
            }
          }
        };
      }
      function create_else_block$2(ctx) {
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1;
        var t2_value = ctx[16].name + "";
        var t2;
        var mounted;
        var dispose;
        function click_handler_2() {
          return ctx[14](ctx[16]);
        }
        return {
          c: function() {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Connect with ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = ctx[16].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_2);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 16 && !src_url_equal(img.src, img_src_value = ctx[16].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 16 && img_alt_value !== (img_alt_value = ctx[16].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 16 && t2_value !== (t2_value = ctx[16].name + ""))
              set_data(t2, t2_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_if_block_1$2(ctx) {
        var button;
        var img;
        var img_src_value;
        var img_alt_value;
        var t0;
        var span;
        var t1;
        var t2_value = ctx[16].name + "";
        var t2;
        var mounted;
        var dispose;
        function click_handler_1() {
          return ctx[13](ctx[16]);
        }
        return {
          c: function() {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Disconnect ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = ctx[16].icon))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            set_style(button, "background-color", "#F6F6F6");
            attr(button, "type", "button");
          },
          m: function(target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
              dispose = listen(button, "click", click_handler_1);
              mounted = true;
            }
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 16 && !src_url_equal(img.src, img_src_value = ctx[16].icon)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 16 && img_alt_value !== (img_alt_value = ctx[16].name)) {
              attr(img, "alt", img_alt_value);
            }
            if (dirty & 16 && t2_value !== (t2_value = ctx[16].name + ""))
              set_data(t2, t2_value);
          },
          d: function(detaching) {
            if (detaching)
              detach(button);
            mounted = false;
            dispose();
          }
        };
      }
      function create_each_block(key_1, ctx) {
        var div;
        var show_if;
        var t;
        function func() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return ctx[9].apply(ctx, __spreadArray([ctx[16]], __read(args), false));
        }
        function select_block_type_1(ctx2, dirty) {
          if (dirty & 18)
            show_if = null;
          if (show_if == null)
            show_if = !!ctx2[1].auth.providers.some(func);
          if (show_if)
            return create_if_block_1$2;
          return create_else_block$2;
        }
        var current_block_type = select_block_type_1(ctx, -1);
        var if_block = current_block_type(ctx);
        return {
          key: key_1,
          first: null,
          c: function() {
            div = element("div");
            if_block.c();
            t = space();
            attr(div, "class", "ms-modal__social-buttons");
            this.first = div;
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            if_block.m(div, null);
            append(div, t);
          },
          p: function(new_ctx, dirty) {
            ctx = new_ctx;
            if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
              if_block.p(ctx, dirty);
            } else {
              if_block.d(1);
              if_block = current_block_type(ctx);
              if (if_block) {
                if_block.c();
                if_block.m(div, t);
              }
            }
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            if_block.d();
          }
        };
      }
      function create_fragment$3(ctx) {
        var form;
        var emailinput;
        var updating_emailInputValid;
        var updating_emailValue;
        var t0;
        var div0;
        var label;
        var t2;
        var button0;
        var passwordlockicon;
        var t3;
        var t4;
        var t5;
        var div1;
        var button1;
        var t6;
        var button1_disabled_value;
        var current;
        var mounted;
        var dispose;
        function emailinput_emailInputValid_binding(value) {
          ctx[10](value);
        }
        function emailinput_emailValue_binding(value) {
          ctx[11](value);
        }
        var emailinput_props = {};
        if (ctx[3] !== void 0) {
          emailinput_props.emailInputValid = ctx[3];
        }
        if (ctx[2] !== void 0) {
          emailinput_props.emailValue = ctx[2];
        }
        emailinput = new EmailInput({ props: emailinput_props });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailInputValid", emailinput_emailInputValid_binding);
        });
        binding_callbacks.push(function() {
          return bind(emailinput, "emailValue", emailinput_emailValue_binding);
        });
        passwordlockicon = new PasswordLockIcon({});
        function select_block_type(ctx2, dirty) {
          if (!ctx2[1].auth.hasPassword)
            return create_if_block_2$2;
          return create_else_block_1;
        }
        var current_block_type = select_block_type(ctx);
        var if_block0 = current_block_type(ctx);
        var if_block1 = ctx[4].authProviders.length > 0 && create_if_block$3(ctx);
        return {
          c: function() {
            form = element("form");
            create_component(emailinput.$$.fragment);
            t0 = space();
            div0 = element("div");
            label = element("label");
            label.textContent = "Password";
            t2 = space();
            button0 = element("button");
            create_component(passwordlockicon.$$.fragment);
            t3 = space();
            if_block0.c();
            t4 = space();
            if (if_block1)
              if_block1.c();
            t5 = space();
            div1 = element("div");
            button1 = element("button");
            t6 = text("Save");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "setPassword");
            attr(button0, "class", "ms-modal__outline-button ms-modal__outline-button--mobile");
            attr(button0, "name", "setPassword");
            attr(div0, "class", "ms-form__group");
            attr(button1, "class", "ms-modal__save-button ms-modal__save-button--large");
            button1.disabled = button1_disabled_value = !ctx[3];
            attr(div1, "class", "ms-modal__action-container");
          },
          m: function(target, anchor) {
            insert(target, form, anchor);
            mount_component(emailinput, form, null);
            insert(target, t0, anchor);
            insert(target, div0, anchor);
            append(div0, label);
            append(div0, t2);
            append(div0, button0);
            mount_component(passwordlockicon, button0, null);
            append(button0, t3);
            if_block0.m(button0, null);
            insert(target, t4, anchor);
            if (if_block1)
              if_block1.m(target, anchor);
            insert(target, t5, anchor);
            insert(target, div1, anchor);
            append(div1, button1);
            append(button1, t6);
            current = true;
            if (!mounted) {
              dispose = [
                listen(form, "submit", stop_propagation(prevent_default(ctx[5]))),
                listen(button0, "click", ctx[12]),
                listen(button1, "click", ctx[5])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & 8) {
              updating_emailInputValid = true;
              emailinput_changes.emailInputValid = ctx2[3];
              add_flush_callback(function() {
                return updating_emailInputValid = false;
              });
            }
            if (!updating_emailValue && dirty & 4) {
              updating_emailValue = true;
              emailinput_changes.emailValue = ctx2[2];
              add_flush_callback(function() {
                return updating_emailValue = false;
              });
            }
            emailinput.$set(emailinput_changes);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
              if_block0.d(1);
              if_block0 = current_block_type(ctx2);
              if (if_block0) {
                if_block0.c();
                if_block0.m(button0, null);
              }
            }
            if (ctx2[4].authProviders.length > 0) {
              if (if_block1) {
                if_block1.p(ctx2, dirty);
              } else {
                if_block1 = create_if_block$3(ctx2);
                if_block1.c();
                if_block1.m(t5.parentNode, t5);
              }
            } else if (if_block1) {
              if_block1.d(1);
              if_block1 = null;
            }
            if (!current || dirty & 8 && button1_disabled_value !== (button1_disabled_value = !ctx2[3])) {
              button1.disabled = button1_disabled_value;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(emailinput.$$.fragment, local);
            transition_in(passwordlockicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(emailinput.$$.fragment, local);
            transition_out(passwordlockicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(form);
            destroy_component(emailinput);
            if (detaching)
              detach(t0);
            if (detaching)
              detach(div0);
            destroy_component(passwordlockicon);
            if_block0.d();
            if (detaching)
              detach(t4);
            if (if_block1)
              if_block1.d(detaching);
            if (detaching)
              detach(t5);
            if (detaching)
              detach(div1);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$3($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(4, $app = $$value);
        });
        var displayProfile = $$props.displayProfile;
        var member = $$props.member;
        var emailValue = $$props.emailValue;
        var profileLoader = $$props.profileLoader;
        $app.authProviders.sort(function(a, b) {
          if (isConnected(a) === isConnected(b)) {
            return a.order - b.order;
          }
          return isConnected(a) ? -1 : 1;
        });
        var emailInputValid = false;
        function submitEmailChange(e) {
          return __awaiter(this, void 0, void 0, function() {
            var message, err_20;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!emailInputValid || !emailValue)
                    return [2];
                  $$invalidate(8, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.updateMemberAuth({ email: emailValue })];
                case 2:
                  message = _a.sent()._internalUseOnly.message;
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 3:
                  err_20 = _a.sent();
                  window.$memberstackDom._showMessage(err_20.message, true);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function disconnectProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var _a, data, message, err_21;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  $$invalidate(8, profileLoader = true);
                  _b.label = 1;
                case 1:
                  _b.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.disconnectProvider({ provider })];
                case 2:
                  _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                  $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 3:
                  err_21 = _b.sent();
                  window.$memberstackDom._showMessage(err_21.message, true);
                  $$invalidate(8, profileLoader = false);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function connectAdditionalProvider(provider) {
          return __awaiter(this, void 0, void 0, function() {
            var data, err_22;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  console.log("connect", provider);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 3, , 4]);
                  return [4, window.$memberstackDom.connectProvider({ provider })];
                case 2:
                  data = _a.sent().data;
                  $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                  window.$memberstackDom._showMessage(data.message, false);
                  return [3, 4];
                case 3:
                  err_22 = _a.sent();
                  window.$memberstackDom._showMessage(err_22.message, true);
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }
        function isConnected(provider) {
          return member.auth.providers.some(function(prv) {
            return prv.provider === provider.provider;
          });
        }
        var func = function(provider, prv) {
          return prv.provider === provider.provider;
        };
        function emailinput_emailInputValid_binding(value) {
          emailInputValid = value;
          $$invalidate(3, emailInputValid);
        }
        function emailinput_emailValue_binding(value) {
          emailValue = value;
          $$invalidate(2, emailValue);
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "changePassword");
        };
        var click_handler_1 = function(provider) {
          return disconnectProvider(provider.provider);
        };
        var click_handler_2 = function(provider) {
          return connectAdditionalProvider(provider.provider);
        };
        $$self.$$set = function($$props2) {
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
          if ("emailValue" in $$props2)
            $$invalidate(2, emailValue = $$props2.emailValue);
          if ("profileLoader" in $$props2)
            $$invalidate(8, profileLoader = $$props2.profileLoader);
        };
        return [
          displayProfile,
          member,
          emailValue,
          emailInputValid,
          $app,
          submitEmailChange,
          disconnectProvider,
          connectAdditionalProvider,
          profileLoader,
          func,
          emailinput_emailInputValid_binding,
          emailinput_emailValue_binding,
          click_handler,
          click_handler_1,
          click_handler_2
        ];
      }
      var MobileSecurityInfoContent = function(_super) {
        __extends(MobileSecurityInfoContent2, _super);
        function MobileSecurityInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$3, create_fragment$3, safe_not_equal, {
            displayProfile: 0,
            member: 1,
            emailValue: 2,
            profileLoader: 8
          });
          return _this;
        }
        return MobileSecurityInfoContent2;
      }(SvelteComponent);
      function create_if_block$2(ctx) {
        var passwordinput;
        var updating_passwordValue;
        var updating_passwordInputValid;
        var current;
        function passwordinput_passwordValue_binding(value) {
          ctx[9](value);
        }
        function passwordinput_passwordInputValid_binding(value) {
          ctx[10](value);
        }
        var passwordinput_props = {
          passwordLabel: "Current Password",
          passwordPlaceholder: "Enter a strong password"
        };
        if (ctx[1] !== void 0) {
          passwordinput_props.passwordValue = ctx[1];
        }
        if (ctx[4] !== void 0) {
          passwordinput_props.passwordInputValid = ctx[4];
        }
        passwordinput = new PasswordInput({ props: passwordinput_props });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordValue", passwordinput_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput, "passwordInputValid", passwordinput_passwordInputValid_binding);
        });
        return {
          c: function() {
            create_component(passwordinput.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordValue && dirty & 2) {
              updating_passwordValue = true;
              passwordinput_changes.passwordValue = ctx2[1];
              add_flush_callback(function() {
                return updating_passwordValue = false;
              });
            }
            if (!updating_passwordInputValid && dirty & 16) {
              updating_passwordInputValid = true;
              passwordinput_changes.passwordInputValid = ctx2[4];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput.$set(passwordinput_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordinput, detaching);
          }
        };
      }
      function create_fragment$2(ctx) {
        var form;
        var t0;
        var passwordinput0;
        var updating_passwordValue;
        var updating_passwordInputValid;
        var t1;
        var passwordinput1;
        var updating_passwordValue_1;
        var updating_passwordInputValid_1;
        var t2;
        var div;
        var button;
        var t3;
        var button_disabled_value;
        var current;
        var mounted;
        var dispose;
        var if_block = ctx[0].auth.hasPassword && create_if_block$2(ctx);
        function passwordinput0_passwordValue_binding(value) {
          ctx[11](value);
        }
        function passwordinput0_passwordInputValid_binding(value) {
          ctx[12](value);
        }
        var passwordinput0_props = {
          passwordLabel: "New Password",
          passwordPlaceholder: "Enter a strong password"
        };
        if (ctx[2] !== void 0) {
          passwordinput0_props.passwordValue = ctx[2];
        }
        if (ctx[5] !== void 0) {
          passwordinput0_props.passwordInputValid = ctx[5];
        }
        passwordinput0 = new PasswordInput({ props: passwordinput0_props });
        binding_callbacks.push(function() {
          return bind(passwordinput0, "passwordValue", passwordinput0_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput0, "passwordInputValid", passwordinput0_passwordInputValid_binding);
        });
        function passwordinput1_passwordValue_binding(value) {
          ctx[13](value);
        }
        function passwordinput1_passwordInputValid_binding(value) {
          ctx[14](value);
        }
        var passwordinput1_props = {
          passwordLabel: "Confirm New Password",
          passwordPlaceholder: "Enter a strong password"
        };
        if (ctx[3] !== void 0) {
          passwordinput1_props.passwordValue = ctx[3];
        }
        if (ctx[6] !== void 0) {
          passwordinput1_props.passwordInputValid = ctx[6];
        }
        passwordinput1 = new PasswordInput({ props: passwordinput1_props });
        binding_callbacks.push(function() {
          return bind(passwordinput1, "passwordValue", passwordinput1_passwordValue_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordinput1, "passwordInputValid", passwordinput1_passwordInputValid_binding);
        });
        return {
          c: function() {
            form = element("form");
            if (if_block)
              if_block.c();
            t0 = space();
            create_component(passwordinput0.$$.fragment);
            t1 = space();
            create_component(passwordinput1.$$.fragment);
            t2 = space();
            div = element("div");
            button = element("button");
            t3 = text("Save");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(button, "class", "ms-modal__save-button ms-modal__save-button--large");
            button.disabled = button_disabled_value = ctx[0].auth.hasPassword && !ctx[4] || !ctx[5] || !ctx[6];
            attr(div, "class", "ms-modal__action-container");
          },
          m: function(target, anchor) {
            insert(target, form, anchor);
            if (if_block)
              if_block.m(form, null);
            append(form, t0);
            mount_component(passwordinput0, form, null);
            append(form, t1);
            mount_component(passwordinput1, form, null);
            insert(target, t2, anchor);
            insert(target, div, anchor);
            append(div, button);
            append(button, t3);
            current = true;
            if (!mounted) {
              dispose = [
                listen(form, "submit", stop_propagation(prevent_default(ctx[7]))),
                listen(button, "click", ctx[7])
              ];
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (ctx2[0].auth.hasPassword) {
              if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 1) {
                  transition_in(if_block, 1);
                }
              } else {
                if_block = create_if_block$2(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(form, t0);
              }
            } else if (if_block) {
              group_outros();
              transition_out(if_block, 1, 1, function() {
                if_block = null;
              });
              check_outros();
            }
            var passwordinput0_changes = {};
            if (!updating_passwordValue && dirty & 4) {
              updating_passwordValue = true;
              passwordinput0_changes.passwordValue = ctx2[2];
              add_flush_callback(function() {
                return updating_passwordValue = false;
              });
            }
            if (!updating_passwordInputValid && dirty & 32) {
              updating_passwordInputValid = true;
              passwordinput0_changes.passwordInputValid = ctx2[5];
              add_flush_callback(function() {
                return updating_passwordInputValid = false;
              });
            }
            passwordinput0.$set(passwordinput0_changes);
            var passwordinput1_changes = {};
            if (!updating_passwordValue_1 && dirty & 8) {
              updating_passwordValue_1 = true;
              passwordinput1_changes.passwordValue = ctx2[3];
              add_flush_callback(function() {
                return updating_passwordValue_1 = false;
              });
            }
            if (!updating_passwordInputValid_1 && dirty & 64) {
              updating_passwordInputValid_1 = true;
              passwordinput1_changes.passwordInputValid = ctx2[6];
              add_flush_callback(function() {
                return updating_passwordInputValid_1 = false;
              });
            }
            passwordinput1.$set(passwordinput1_changes);
            if (!current || dirty & 113 && button_disabled_value !== (button_disabled_value = ctx2[0].auth.hasPassword && !ctx2[4] || !ctx2[5] || !ctx2[6])) {
              button.disabled = button_disabled_value;
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            transition_in(passwordinput0.$$.fragment, local);
            transition_in(passwordinput1.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            transition_out(passwordinput0.$$.fragment, local);
            transition_out(passwordinput1.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(form);
            if (if_block)
              if_block.d();
            destroy_component(passwordinput0);
            destroy_component(passwordinput1);
            if (detaching)
              detach(t2);
            if (detaching)
              detach(div);
            mounted = false;
            run_all(dispose);
          }
        };
      }
      function instance$2($$self, $$props, $$invalidate) {
        var profileLoader = $$props.profileLoader;
        var member = $$props.member;
        var currentPasswordValue = "";
        var newPasswordValue = "";
        var confirmPasswordValue = "";
        var currentPasswordValid = false;
        var newPasswordValid = false;
        var confirmPasswordValid = false;
        function submitPasswordChange(e) {
          return __awaiter(this, void 0, void 0, function() {
            var message, msg, msg, err_23;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (member.auth.hasPassword && !currentPasswordValid && !newPasswordValid && !confirmPasswordValid)
                    return [2];
                  if (!member.auth.hasPassword && !newPasswordValid && !confirmPasswordValid)
                    return [2];
                  $$invalidate(8, profileLoader = true);
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 6, , 7]);
                  message = void 0;
                  if (!member.auth.hasPassword)
                    return [3, 3];
                  return [4, window.$memberstackDom.updateMemberAuth({
                    oldPassword: currentPasswordValue,
                    newPassword: newPasswordValue
                  })];
                case 2:
                  msg = _a.sent()._internalUseOnly.message;
                  message = msg;
                  return [3, 5];
                case 3:
                  return [4, window.$memberstackDom.setPassword({ password: newPasswordValue })];
                case 4:
                  msg = _a.sent()._internalUseOnly.message;
                  $$invalidate(0, member.auth.hasPassword = true, member);
                  message = msg;
                  _a.label = 5;
                case 5:
                  window.$memberstackDom._showMessage(message, false);
                  $$invalidate(1, currentPasswordValue = "");
                  $$invalidate(2, newPasswordValue = "");
                  $$invalidate(3, confirmPasswordValue = "");
                  $$invalidate(8, profileLoader = false);
                  return [3, 7];
                case 6:
                  err_23 = _a.sent();
                  window.$memberstackDom._showMessage(err_23.message, true);
                  $$invalidate(8, profileLoader = false);
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        function passwordinput_passwordValue_binding(value) {
          currentPasswordValue = value;
          $$invalidate(1, currentPasswordValue);
        }
        function passwordinput_passwordInputValid_binding(value) {
          currentPasswordValid = value;
          $$invalidate(4, currentPasswordValid);
        }
        function passwordinput0_passwordValue_binding(value) {
          newPasswordValue = value;
          $$invalidate(2, newPasswordValue);
        }
        function passwordinput0_passwordInputValid_binding(value) {
          newPasswordValid = value;
          $$invalidate(5, newPasswordValid);
        }
        function passwordinput1_passwordValue_binding(value) {
          confirmPasswordValue = value;
          $$invalidate(3, confirmPasswordValue);
        }
        function passwordinput1_passwordInputValid_binding(value) {
          confirmPasswordValid = value;
          $$invalidate(6, confirmPasswordValid);
        }
        $$self.$$set = function($$props2) {
          if ("profileLoader" in $$props2)
            $$invalidate(8, profileLoader = $$props2.profileLoader);
          if ("member" in $$props2)
            $$invalidate(0, member = $$props2.member);
        };
        return [
          member,
          currentPasswordValue,
          newPasswordValue,
          confirmPasswordValue,
          currentPasswordValid,
          newPasswordValid,
          confirmPasswordValid,
          submitPasswordChange,
          profileLoader,
          passwordinput_passwordValue_binding,
          passwordinput_passwordInputValid_binding,
          passwordinput0_passwordValue_binding,
          passwordinput0_passwordInputValid_binding,
          passwordinput1_passwordValue_binding,
          passwordinput1_passwordInputValid_binding
        ];
      }
      var MobilePasswordInfoContent = function(_super) {
        __extends(MobilePasswordInfoContent2, _super);
        function MobilePasswordInfoContent2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$2, create_fragment$2, safe_not_equal, { profileLoader: 8, member: 0 });
          return _this;
        }
        return MobilePasswordInfoContent2;
      }(SvelteComponent);
      function create_if_block_6$1(ctx) {
        var div;
        var button;
        var backicon;
        var current;
        var mounted;
        var dispose;
        backicon = new BackIcon({});
        return {
          c: function() {
            div = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            attr(div, "class", "ms-modal__profile-back--mobile");
          },
          m: function(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
              dispose = listen(button, "click", ctx[8]);
              mounted = true;
            }
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(backicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div);
            destroy_component(backicon);
            mounted = false;
            dispose();
          }
        };
      }
      function create_else_block$1(ctx) {
        var memberstackicon;
        var current;
        memberstackicon = new MemberstackIcon({});
        return {
          c: function() {
            create_component(memberstackicon.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(memberstackicon, target, anchor);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(memberstackicon.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(memberstackicon.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(memberstackicon, detaching);
          }
        };
      }
      function create_if_block_5$1(ctx) {
        var img;
        var img_src_value;
        var img_alt_value;
        return {
          c: function() {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = ctx[7].branding.logo))
              attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = ctx[7].name);
          },
          m: function(target, anchor) {
            insert(target, img, anchor);
          },
          p: function(ctx2, dirty) {
            if (dirty & 128 && !src_url_equal(img.src, img_src_value = ctx2[7].branding.logo)) {
              attr(img, "src", img_src_value);
            }
            if (dirty & 128 && img_alt_value !== (img_alt_value = ctx2[7].name)) {
              attr(img, "alt", img_alt_value);
            }
          },
          i: noop,
          o: noop,
          d: function(detaching) {
            if (detaching)
              detach(img);
          }
        };
      }
      function create_if_block_4$1(ctx) {
        var profileloader;
        var current;
        profileloader = new ProfileLoader({});
        return {
          c: function() {
            create_component(profileloader.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(profileloader, target, anchor);
            current = true;
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profileloader.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profileloader.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(profileloader, detaching);
          }
        };
      }
      function create_if_block_3$1(ctx) {
        var mobilepasswordinfocontent;
        var updating_displayProfile;
        var updating_profileLoader;
        var updating_member;
        var current;
        function mobilepasswordinfocontent_displayProfile_binding(value) {
          ctx[17](value);
        }
        function mobilepasswordinfocontent_profileLoader_binding(value) {
          ctx[18](value);
        }
        function mobilepasswordinfocontent_member_binding(value) {
          ctx[19](value);
        }
        var mobilepasswordinfocontent_props = {};
        if (ctx[0] !== void 0) {
          mobilepasswordinfocontent_props.displayProfile = ctx[0];
        }
        if (ctx[6] !== void 0) {
          mobilepasswordinfocontent_props.profileLoader = ctx[6];
        }
        if (ctx[1] !== void 0) {
          mobilepasswordinfocontent_props.member = ctx[1];
        }
        mobilepasswordinfocontent = new MobilePasswordInfoContent({ props: mobilepasswordinfocontent_props });
        binding_callbacks.push(function() {
          return bind(mobilepasswordinfocontent, "displayProfile", mobilepasswordinfocontent_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobilepasswordinfocontent, "profileLoader", mobilepasswordinfocontent_profileLoader_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobilepasswordinfocontent, "member", mobilepasswordinfocontent_member_binding);
        });
        return {
          c: function() {
            create_component(mobilepasswordinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mobilepasswordinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mobilepasswordinfocontent_changes = {};
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              mobilepasswordinfocontent_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 64) {
              updating_profileLoader = true;
              mobilepasswordinfocontent_changes.profileLoader = ctx2[6];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            if (!updating_member && dirty & 2) {
              updating_member = true;
              mobilepasswordinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            mobilepasswordinfocontent.$set(mobilepasswordinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mobilepasswordinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mobilepasswordinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mobilepasswordinfocontent, detaching);
          }
        };
      }
      function create_if_block_2$1(ctx) {
        var mobilesecurityinfocontent;
        var updating_displayProfile;
        var updating_profileLoader;
        var updating_member;
        var current;
        function mobilesecurityinfocontent_displayProfile_binding(value) {
          ctx[14](value);
        }
        function mobilesecurityinfocontent_profileLoader_binding(value) {
          ctx[15](value);
        }
        function mobilesecurityinfocontent_member_binding(value) {
          ctx[16](value);
        }
        var mobilesecurityinfocontent_props = {};
        if (ctx[0] !== void 0) {
          mobilesecurityinfocontent_props.displayProfile = ctx[0];
        }
        if (ctx[6] !== void 0) {
          mobilesecurityinfocontent_props.profileLoader = ctx[6];
        }
        if (ctx[1] !== void 0) {
          mobilesecurityinfocontent_props.member = ctx[1];
        }
        mobilesecurityinfocontent = new MobileSecurityInfoContent({ props: mobilesecurityinfocontent_props });
        binding_callbacks.push(function() {
          return bind(mobilesecurityinfocontent, "displayProfile", mobilesecurityinfocontent_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobilesecurityinfocontent, "profileLoader", mobilesecurityinfocontent_profileLoader_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobilesecurityinfocontent, "member", mobilesecurityinfocontent_member_binding);
        });
        return {
          c: function() {
            create_component(mobilesecurityinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mobilesecurityinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mobilesecurityinfocontent_changes = {};
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              mobilesecurityinfocontent_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 64) {
              updating_profileLoader = true;
              mobilesecurityinfocontent_changes.profileLoader = ctx2[6];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            if (!updating_member && dirty & 2) {
              updating_member = true;
              mobilesecurityinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            mobilesecurityinfocontent.$set(mobilesecurityinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mobilesecurityinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mobilesecurityinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mobilesecurityinfocontent, detaching);
          }
        };
      }
      function create_if_block_1$1(ctx) {
        var mobileprofileinfocontent;
        var updating_member;
        var updating_profileLoader;
        var current;
        function mobileprofileinfocontent_member_binding(value) {
          ctx[12](value);
        }
        function mobileprofileinfocontent_profileLoader_binding(value) {
          ctx[13](value);
        }
        var mobileprofileinfocontent_props = {
          customFields: ctx[7].customFields
        };
        if (ctx[1] !== void 0) {
          mobileprofileinfocontent_props.member = ctx[1];
        }
        if (ctx[6] !== void 0) {
          mobileprofileinfocontent_props.profileLoader = ctx[6];
        }
        mobileprofileinfocontent = new MobileProfileInfoContent({ props: mobileprofileinfocontent_props });
        binding_callbacks.push(function() {
          return bind(mobileprofileinfocontent, "member", mobileprofileinfocontent_member_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobileprofileinfocontent, "profileLoader", mobileprofileinfocontent_profileLoader_binding);
        });
        return {
          c: function() {
            create_component(mobileprofileinfocontent.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mobileprofileinfocontent, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mobileprofileinfocontent_changes = {};
            if (dirty & 128)
              mobileprofileinfocontent_changes.customFields = ctx2[7].customFields;
            if (!updating_member && dirty & 2) {
              updating_member = true;
              mobileprofileinfocontent_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            if (!updating_profileLoader && dirty & 64) {
              updating_profileLoader = true;
              mobileprofileinfocontent_changes.profileLoader = ctx2[6];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            mobileprofileinfocontent.$set(mobileprofileinfocontent_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mobileprofileinfocontent.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mobileprofileinfocontent.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mobileprofileinfocontent, detaching);
          }
        };
      }
      function create_if_block$1(ctx) {
        var mobileprofilemodalnav;
        var updating_member;
        var updating_displayProfile;
        var updating_profileLoader;
        var current;
        function mobileprofilemodalnav_member_binding(value) {
          ctx[9](value);
        }
        function mobileprofilemodalnav_displayProfile_binding(value) {
          ctx[10](value);
        }
        function mobileprofilemodalnav_profileLoader_binding(value) {
          ctx[11](value);
        }
        var mobileprofilemodalnav_props = {
          onSuccessLogout: ctx[3],
          hideProfileSection: ctx[5]
        };
        if (ctx[1] !== void 0) {
          mobileprofilemodalnav_props.member = ctx[1];
        }
        if (ctx[0] !== void 0) {
          mobileprofilemodalnav_props.displayProfile = ctx[0];
        }
        if (ctx[6] !== void 0) {
          mobileprofilemodalnav_props.profileLoader = ctx[6];
        }
        mobileprofilemodalnav = new MobileProfileModalNav({ props: mobileprofilemodalnav_props });
        binding_callbacks.push(function() {
          return bind(mobileprofilemodalnav, "member", mobileprofilemodalnav_member_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobileprofilemodalnav, "displayProfile", mobileprofilemodalnav_displayProfile_binding);
        });
        binding_callbacks.push(function() {
          return bind(mobileprofilemodalnav, "profileLoader", mobileprofilemodalnav_profileLoader_binding);
        });
        return {
          c: function() {
            create_component(mobileprofilemodalnav.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mobileprofilemodalnav, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mobileprofilemodalnav_changes = {};
            if (dirty & 8)
              mobileprofilemodalnav_changes.onSuccessLogout = ctx2[3];
            if (dirty & 32)
              mobileprofilemodalnav_changes.hideProfileSection = ctx2[5];
            if (!updating_member && dirty & 2) {
              updating_member = true;
              mobileprofilemodalnav_changes.member = ctx2[1];
              add_flush_callback(function() {
                return updating_member = false;
              });
            }
            if (!updating_displayProfile && dirty & 1) {
              updating_displayProfile = true;
              mobileprofilemodalnav_changes.displayProfile = ctx2[0];
              add_flush_callback(function() {
                return updating_displayProfile = false;
              });
            }
            if (!updating_profileLoader && dirty & 64) {
              updating_profileLoader = true;
              mobileprofilemodalnav_changes.profileLoader = ctx2[6];
              add_flush_callback(function() {
                return updating_profileLoader = false;
              });
            }
            mobileprofilemodalnav.$set(mobileprofilemodalnav_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mobileprofilemodalnav.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mobileprofilemodalnav.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mobileprofilemodalnav, detaching);
          }
        };
      }
      function create_fragment$1(ctx) {
        var div5;
        var div2;
        var t0;
        var div1;
        var figure;
        var current_block_type_index;
        var if_block1;
        var t1;
        var div0;
        var b;
        var t2;
        var t3;
        var closebutton;
        var t4;
        var div4;
        var div3;
        var t5;
        var current_block_type_index_1;
        var if_block3;
        var t6;
        var modalfooter;
        var current;
        var if_block0 = (ctx[0] === "profile" || ctx[0] === "changePassword" || ctx[0] === "security") && create_if_block_6$1(ctx);
        var if_block_creators = [create_if_block_5$1, create_else_block$1];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[7].branding.logo)
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type(ctx);
        if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        closebutton = new CloseButton({
          props: { closeModal: ctx[4] }
        });
        var if_block2 = ctx[6] && create_if_block_4$1();
        var if_block_creators_1 = [create_if_block$1, create_if_block_1$1, create_if_block_2$1, create_if_block_3$1];
        var if_blocks_1 = [];
        function select_block_type_1(ctx2, dirty) {
          if (ctx2[0] === "profile-nav")
            return 0;
          if (ctx2[0] === "profile")
            return 1;
          if (ctx2[0] === "security")
            return 2;
          if (ctx2[0] === "changePassword")
            return 3;
          return -1;
        }
        if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
          if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
        }
        modalfooter = new ModalFooter({});
        return {
          c: function() {
            div5 = element("div");
            div2 = element("div");
            if (if_block0)
              if_block0.c();
            t0 = space();
            div1 = element("div");
            figure = element("figure");
            if_block1.c();
            t1 = space();
            div0 = element("div");
            b = element("b");
            t2 = text(ctx[2]);
            t3 = space();
            create_component(closebutton.$$.fragment);
            t4 = space();
            div4 = element("div");
            div3 = element("div");
            if (if_block2)
              if_block2.c();
            t5 = space();
            if (if_block3)
              if_block3.c();
            t6 = space();
            create_component(modalfooter.$$.fragment);
            attr(figure, "class", "ms-modal__figure ms-modal__figure--mobile");
            attr(div1, "class", "ms-modal__header--center");
            attr(div2, "class", "ms-modal__header--mobile");
            attr(div3, "class", "ms-modal__content--mobile");
            attr(div4, "class", "ms-modal__content ms-modal__content--profile");
            attr(div5, "class", "ms-modal ms-modal--profile");
            attr(div5, "id", "MobileProfileModal");
          },
          m: function(target, anchor) {
            insert(target, div5, anchor);
            append(div5, div2);
            if (if_block0)
              if_block0.m(div2, null);
            append(div2, t0);
            append(div2, div1);
            append(div1, figure);
            if_blocks[current_block_type_index].m(figure, null);
            append(div1, t1);
            append(div1, div0);
            append(div0, b);
            append(b, t2);
            append(div2, t3);
            mount_component(closebutton, div2, null);
            append(div5, t4);
            append(div5, div4);
            append(div4, div3);
            if (if_block2)
              if_block2.m(div3, null);
            append(div3, t5);
            if (~current_block_type_index_1) {
              if_blocks_1[current_block_type_index_1].m(div3, null);
            }
            append(div5, t6);
            mount_component(modalfooter, div5, null);
            current = true;
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (ctx2[0] === "profile" || ctx2[0] === "changePassword" || ctx2[0] === "security") {
              if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 1) {
                  transition_in(if_block0, 1);
                }
              } else {
                if_block0 = create_if_block_6$1(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div2, t0);
              }
            } else if (if_block0) {
              group_outros();
              transition_out(if_block0, 1, 1, function() {
                if_block0 = null;
              });
              check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block1 = if_blocks[current_block_type_index];
              if (!if_block1) {
                if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block1.c();
              } else {
                if_block1.p(ctx2, dirty);
              }
              transition_in(if_block1, 1);
              if_block1.m(figure, null);
            }
            if (!current || dirty & 4)
              set_data(t2, ctx2[2]);
            var closebutton_changes = {};
            if (dirty & 16)
              closebutton_changes.closeModal = ctx2[4];
            closebutton.$set(closebutton_changes);
            if (ctx2[6]) {
              if (if_block2) {
                if (dirty & 64) {
                  transition_in(if_block2, 1);
                }
              } else {
                if_block2 = create_if_block_4$1();
                if_block2.c();
                transition_in(if_block2, 1);
                if_block2.m(div3, t5);
              }
            } else if (if_block2) {
              group_outros();
              transition_out(if_block2, 1, 1, function() {
                if_block2 = null;
              });
              check_outros();
            }
            var previous_block_index_1 = current_block_type_index_1;
            current_block_type_index_1 = select_block_type_1(ctx2);
            if (current_block_type_index_1 === previous_block_index_1) {
              if (~current_block_type_index_1) {
                if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
              }
            } else {
              if (if_block3) {
                group_outros();
                transition_out(if_blocks_1[previous_block_index_1], 1, 1, function() {
                  if_blocks_1[previous_block_index_1] = null;
                });
                check_outros();
              }
              if (~current_block_type_index_1) {
                if_block3 = if_blocks_1[current_block_type_index_1];
                if (!if_block3) {
                  if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
                  if_block3.c();
                } else {
                  if_block3.p(ctx2, dirty);
                }
                transition_in(if_block3, 1);
                if_block3.m(div3, null);
              } else {
                if_block3 = null;
              }
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block0);
            transition_in(if_block1);
            transition_in(closebutton.$$.fragment, local);
            transition_in(if_block2);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(if_block0);
            transition_out(if_block1);
            transition_out(closebutton.$$.fragment, local);
            transition_out(if_block2);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(div5);
            if (if_block0)
              if_block0.d();
            if_blocks[current_block_type_index].d();
            destroy_component(closebutton);
            if (if_block2)
              if_block2.d();
            if (~current_block_type_index_1) {
              if_blocks_1[current_block_type_index_1].d();
            }
            destroy_component(modalfooter);
          }
        };
      }
      function instance$1($$self, $$props, $$invalidate) {
        var $app;
        component_subscribe($$self, AppStore, function($$value) {
          return $$invalidate(7, $app = $$value);
        });
        var onSuccessLogout = $$props.onSuccessLogout;
        var closeModal = $$props.closeModal;
        var _a = $$props.displayProfile, displayProfile = _a === void 0 ? "profile-nav" : _a;
        var member = $$props.member;
        var _b = $$props.profileTitle, profileTitle = _b === void 0 ? member.auth.email : _b;
        var hideProfileSection = false;
        var profileLoader = false;
        if (!$app.customFields.filter(function(field) {
          return !field.hidden;
        }).length) {
          displayProfile = "security";
          hideProfileSection = true;
        }
        var click_handler = function() {
          return $$invalidate(0, displayProfile = "profile-nav");
        };
        function mobileprofilemodalnav_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function mobileprofilemodalnav_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function mobileprofilemodalnav_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(6, profileLoader);
        }
        function mobileprofileinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function mobileprofileinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(6, profileLoader);
        }
        function mobilesecurityinfocontent_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function mobilesecurityinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(6, profileLoader);
        }
        function mobilesecurityinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        function mobilepasswordinfocontent_displayProfile_binding(value) {
          displayProfile = value;
          $$invalidate(0, displayProfile);
        }
        function mobilepasswordinfocontent_profileLoader_binding(value) {
          profileLoader = value;
          $$invalidate(6, profileLoader);
        }
        function mobilepasswordinfocontent_member_binding(value) {
          member = value;
          $$invalidate(1, member);
        }
        $$self.$$set = function($$props2) {
          if ("onSuccessLogout" in $$props2)
            $$invalidate(3, onSuccessLogout = $$props2.onSuccessLogout);
          if ("closeModal" in $$props2)
            $$invalidate(4, closeModal = $$props2.closeModal);
          if ("displayProfile" in $$props2)
            $$invalidate(0, displayProfile = $$props2.displayProfile);
          if ("member" in $$props2)
            $$invalidate(1, member = $$props2.member);
          if ("profileTitle" in $$props2)
            $$invalidate(2, profileTitle = $$props2.profileTitle);
        };
        $$self.$$.update = function() {
          if ($$self.$$.dirty & 3) {
            if (displayProfile === "profile-nav") {
              $$invalidate(2, profileTitle = member.auth.email);
            } else if (displayProfile === "profile") {
              $$invalidate(2, profileTitle = "My Profile");
            } else if (displayProfile === "security") {
              $$invalidate(2, profileTitle = "Security");
            } else if (displayProfile === "changePassword") {
              if (!member.auth.hasPassword) {
                $$invalidate(2, profileTitle = "Set Password");
              } else {
                $$invalidate(2, profileTitle = "Change Password");
              }
            }
          }
        };
        return [
          displayProfile,
          member,
          profileTitle,
          onSuccessLogout,
          closeModal,
          hideProfileSection,
          profileLoader,
          $app,
          click_handler,
          mobileprofilemodalnav_member_binding,
          mobileprofilemodalnav_displayProfile_binding,
          mobileprofilemodalnav_profileLoader_binding,
          mobileprofileinfocontent_member_binding,
          mobileprofileinfocontent_profileLoader_binding,
          mobilesecurityinfocontent_displayProfile_binding,
          mobilesecurityinfocontent_profileLoader_binding,
          mobilesecurityinfocontent_member_binding,
          mobilepasswordinfocontent_displayProfile_binding,
          mobilepasswordinfocontent_profileLoader_binding,
          mobilepasswordinfocontent_member_binding
        ];
      }
      var MobileProfileModal = function(_super) {
        __extends(MobileProfileModal2, _super);
        function MobileProfileModal2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance$1, create_fragment$1, safe_not_equal, {
            onSuccessLogout: 3,
            closeModal: 4,
            displayProfile: 0,
            member: 1,
            profileTitle: 2
          });
          return _this;
        }
        return MobileProfileModal2;
      }(SvelteComponent);
      function add_css(target) {
        append_styles(target, "svelte-14go1rs", '@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");.svelte-14go1rs{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#msOverlay.svelte-14go1rs{position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:99999;overflow:scroll;font-family:"Plus Jakarta Sans", sans-serif;padding:5vh 5vw}.--hide{display:none}.--flex-h-center{display:flex;align-items:center}.ms__loader{position:relative;z-index:10000000}#msLoader path{fill:#007ace}.ms__profile__loader{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgb(255 255 255 / 75%)}.ms-modal{box-sizing:border-box;margin:auto;min-width:0;position:relative;outline:none;background:white;border-radius:16px;box-shadow:2px 2px 12px rgb(0 0 0 / 10%);width:360px;color:rgb(10, 10, 10)}.ms-modal--profile{width:700px}.ms-modal__close{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;right:16px;z-index:10;line-height:0}.ms-modal__close button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__close button:hover{color:#0a0a0a}.ms-modal__back{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__back button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__back button:hover, .ms-modal__profile-back\n      button:hover{color:#0a0a0a}.ms-modal__back svg{height:12px}.ms-modal__profile-back button{appearance:none;padding:5px;margin-right:6px;outline:none;width:25px;height:25px;border:0;background:transparent;cursor:pointer;color:#5c5c5c;display:flex;align-items:stretch;justify-content:center}.ms-modal__profile-back--mobile{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__profile-back--mobile button{appearance:none;padding:0;outline:none;height:11px;width:7px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__profile-back--mobile button:hover{color:#0a0a0a}.ms-modal__header{display:flex;align-items:center;padding:12px}.ms-modal__header--mobile{display:flex;padding:42px 42px 16px 42px;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__header--center{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__content{padding:28px 28px 20px;width:100%;box-sizing:border-box;margin:0 auto}.ms-modal__content--profile{padding:0;display:flex;flex-wrap:wrap;align-content:stretch;align-items:stretch;border-top:1px solid #dddddd}.ms-modal__content-left{display:flex;flex-direction:column;align-items:flex-start;padding:20px;border-right:1px solid #dddddd;min-width:160px}.ms-modal__content-right{padding:20px;flex-grow:1;height:55vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__content-right h3{margin-top:40px !important;margin-bottom:10px !important;font-size:18px !important;line-height:1em !important;font-weight:700 !important}.ms-modal__content--mobile{padding:12px;flex-grow:1;height:42vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__mobile-profile-nav{display:flex;flex-direction:column;align-content:center;align-items:stretch;flex-wrap:nowrap}.ms-modal__mobile-profile-nav button{display:flex;flex-direction:row;align-content:center;align-items:center;flex-wrap:nowrap;justify-content:space-between;padding:12px;width:100%;margin-bottom:10px}.ms-modal__figure{margin:8px auto;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-shrink:0;line-height:1}.ms-modal__figure--profile{width:24px;height:24px;padding:0px;margin:0px 8px 0px 0px}.ms-modal__figure--mobile{margin:0px 0px 8px 0px}.ms-modal__figure img, .ms-modal__figure svg{width:auto;height:100%;max-height:42px;text-align:center;object-fit:cover;color:transparent}.ms-modal__title-container{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.ms-modal__title{margin-bottom:36px;margin-top:0;text-align:center;font-size:24px;line-height:32px;font-weight:700}.ms-modal__title--profile{margin-bottom:0px}.ms-modal__title-group{display:flex;align-items:center}.ms-modal__title--sub-text{margin-bottom:8px}.ms-modal__text{font-weight:500;font-size:16px;line-height:28px;text-align:center;margin:0 0 20px 0}.ms-modal__regular-button{color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__regular-button svg{height:16px;margin-left:6px}.ms-modal__regular-button--left-icon svg{margin-right:6px;margin-left:0px}.ms-modal__regular-button--right-icon svg{margin-left:6px;margin-right:0px}.ms-modal__regular-button--margin-right{margin-right:12px}.ms-modal__text-button{color:#fff;background-color:transparent;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__card{box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,\n      0px 2px 2px rgba(0, 0, 0, 0.04);padding:12px;display:flex;flex-direction:row;margin-bottom:12px;border:1px solid rgb(221, 221, 221);border-radius:10px;box-sizing:border-box;width:100%;cursor:default;background:rgb(255, 255, 255);align-items:center;justify-content:space-between}.ms-form{width:100%}.ms-form__group{margin-bottom:20px}.ms-form__flex{display:flex;justify-content:space-between;align-content:center}.ms-form__flex--centered{justify-content:center}.ms-form__label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:24px;font-weight:700;text-align:left}.ms-form__fieldset{display:flex;justify-content:space-between;padding:0;border:none}.ms-form__input{box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;font-size:16px;font-weight:400;padding:15px;width:100%}.ms-form__password-container{display:flex;justify-content:space-between;align-content:center;box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;width:100%}.ms-form__password-container:focus-within{border:1px solid rgb(0, 68, 252);outline:rgb(0, 68, 252) solid 1px}.ms-form__password-container:focus-within input{outline:none;border-color:rgb(201, 201, 201);box-shadow:none}.ms-form__input--password{border:none}.ms-form__input--token{font-weight:500;font-size:24.19px;line-height:32px;text-align:center;color:#000000;padding:9px;max-width:42px}.ms-form__show-toggle{cursor:pointer;background:transparent;border-radius:0px 6px 6px 0px;padding:0px 8px;display:flex;align-items:center}.ms-form__eye{display:block;width:22px}.ms-form__eye-slash{display:block;width:22px}.ms-form__error{font-weight:500;font-size:12px;line-height:16px;color:#e40023;margin-top:4px;display:flex;align-items:baseline}.ms-form__error svg{width:10px;height:10px;margin-right:5px}.ms-form__label--right a{color:rgb(10, 10, 10) !important;text-decoration:none;font-weight:400}.ms-form__button{border-radius:6px;font-weight:700;font-size:16px;padding-left:22px;padding-right:22px;height:52px;border:none;display:block;width:100%;background-color:rgb(41, 98, 255);color:#fff;transition:background-color 0.5s ease;cursor:pointer}.ms-form__button:hover{background-color:#0745ff}.ms-form__button:disabled{background-color:#96c0fe;color:#fff;pointer-events:none;display:flex;justify-content:center;align-items:center}.ms-form__button--text{background-color:transparent;padding:0px;height:auto;margin-bottom:0px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500;color:#0a0a0a;opacity:0.8}.ms-form__button--text:hover{background-color:transparent}.ms-form__button--top-spacing{margin-top:10px}#msFormLoader path{fill:#fff}a.ms-form__link, div.ms-form__link{margin-top:8px;font-weight:500;font-size:14px;line-height:24px;color:rgb(10, 10, 10) !important;text-decoration:none;opacity:0.8;cursor:pointer}.ms-modal__cancel-button{background:#f6f6f6;color:#828282;padding:8px;margin-right:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button{background:#2962ff;color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button:disabled{background:#80a1fc;color:#fff;cursor:default;opacity:0.4}.ms-modal__save-button--large{padding:12px;font-weight:700;font-size:14px;line-height:16px;width:100%}.ms-modal__outline-button{display:block !important;background:#fff;color:#0a0a0a;font-weight:700;font-size:14px;line-height:16px;padding:8px;margin-right:8px;border-radius:4px;border:1px solid #dddddd;cursor:pointer}.ms-modal__outline-button svg{display:inline !important;height:15px;margin-right:6px}.ms-modal__outline-button--mobile{width:100%}.ms-modal__button-label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500}.ms-modal__profile-option{cursor:pointer;margin-bottom:20px;font-weight:500;font-size:16px;line-height:28px;background:transparent;border:none;padding:0px}.ms-modal__profile-option svg{display:inline !important;height:14px;margin-right:8px}.ms-modal__profile-option:hover{color:#2962ff}.ms-modal__profile-option--active{color:#2962ff}.ms-modal__profile-image-container{display:flex;justify-content:flex-start;width:100%;margin-bottom:21px;align-items:center;flex-direction:row;gap:12px}.ms-modal__profile-image{width:42px;height:42px;border-radius:50%;object-fit:cover;overflow:hidden;background:#ddd;border:1px solid #C9C9C9;display:flex;justify-content:center;align-items:center}.ms-modal__profile-image img{width:100%;height:100%;object-fit:cover}.ms-modal__social-button{display:flex;align-items:center;justify-content:center;width:100%;height:52px;border-radius:6px;font-weight:700;font-size:16px;line-height:28px;color:#0a0a0a;background:none;border:1px solid #c9c9c9;cursor:pointer;margin-bottom:8px}.ms-modal__social-button img, .ms-modal__social-button\n      svg{height:16px;margin-right:8px}.ms-modal__social-button[disabled]{background:#f6f6f6}.ms-modal__social-divider{display:flex;align-items:center;margin:20px 0px}.ms-modal__divider-line{text-align:center;background:#dddddd;height:1px;width:100%}.ms-modal__divider-text{padding:0px 4px}.ms-modal__footer{text-align:center;width:100%;box-sizing:border-box;margin:0;min-width:0;background:#f6f6f6;padding-top:10px;padding-bottom:10px;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top:1px solid;border-top-color:#dddddd;font-size:12px;line-height:16px;font-weight:500}.ms-modal__footer a{color:rgb(10, 10, 10);text-decoration:none;display:flex;justify-content:center;align-items:center}.ms-modal__footer svg{height:12px;width:12px;margin-right:5.5px}');
      }
      function create_if_block_7(ctx) {
        var mediaquery;
        var current;
        mediaquery = new MediaQuery({
          props: {
            query: "(max-width: 520px)",
            $$slots: {
              default: [
                create_default_slot,
                function(_a) {
                  var matches = _a.matches;
                  return { 24: matches };
                },
                function(_a) {
                  var matches = _a.matches;
                  return matches ? 16777216 : 0;
                }
              ]
            },
            $$scope: { ctx }
          }
        });
        return {
          c: function() {
            create_component(mediaquery.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mediaquery, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mediaquery_changes = {};
            if (dirty & 50331661) {
              mediaquery_changes.$$scope = { dirty, ctx: ctx2 };
            }
            mediaquery.$set(mediaquery_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mediaquery.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mediaquery.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mediaquery, detaching);
          }
        };
      }
      function create_if_block_6(ctx) {
        var passwordlesstokenmodal;
        var updating_display;
        var updating_params;
        var current;
        function passwordlesstokenmodal_display_binding(value) {
          ctx[16](value);
        }
        function passwordlesstokenmodal_params_binding(value) {
          ctx[17](value);
        }
        var passwordlesstokenmodal_props = {
          closeModal: ctx[5],
          onSuccess: ctx[2]
        };
        if (ctx[0] !== void 0) {
          passwordlesstokenmodal_props.display = ctx[0];
        }
        if (ctx[1] !== void 0) {
          passwordlesstokenmodal_props.params = ctx[1];
        }
        passwordlesstokenmodal = new PasswordlessTokenModal({ props: passwordlesstokenmodal_props });
        binding_callbacks.push(function() {
          return bind(passwordlesstokenmodal, "display", passwordlesstokenmodal_display_binding);
        });
        binding_callbacks.push(function() {
          return bind(passwordlesstokenmodal, "params", passwordlesstokenmodal_params_binding);
        });
        return {
          c: function() {
            create_component(passwordlesstokenmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordlesstokenmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordlesstokenmodal_changes = {};
            if (dirty & 4)
              passwordlesstokenmodal_changes.onSuccess = ctx2[2];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              passwordlesstokenmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            if (!updating_params && dirty & 2) {
              updating_params = true;
              passwordlesstokenmodal_changes.params = ctx2[1];
              add_flush_callback(function() {
                return updating_params = false;
              });
            }
            passwordlesstokenmodal.$set(passwordlesstokenmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordlesstokenmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordlesstokenmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordlesstokenmodal, detaching);
          }
        };
      }
      function create_if_block_5(ctx) {
        var passwordsuccessmodal;
        var updating_display;
        var current;
        function passwordsuccessmodal_display_binding(value) {
          ctx[15](value);
        }
        var passwordsuccessmodal_props = { closeModal: ctx[5] };
        if (ctx[0] !== void 0) {
          passwordsuccessmodal_props.display = ctx[0];
        }
        passwordsuccessmodal = new PassSuccessModal({ props: passwordsuccessmodal_props });
        binding_callbacks.push(function() {
          return bind(passwordsuccessmodal, "display", passwordsuccessmodal_display_binding);
        });
        return {
          c: function() {
            create_component(passwordsuccessmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordsuccessmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordsuccessmodal_changes = {};
            if (!updating_display && dirty & 1) {
              updating_display = true;
              passwordsuccessmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            passwordsuccessmodal.$set(passwordsuccessmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordsuccessmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordsuccessmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordsuccessmodal, detaching);
          }
        };
      }
      function create_if_block_4(ctx) {
        var passwordtokenmodal;
        var updating_display;
        var current;
        function passwordtokenmodal_display_binding(value) {
          ctx[14](value);
        }
        var passwordtokenmodal_props = {
          closeModal: ctx[5],
          onSuccessPasswordReset: ctx[2]
        };
        if (ctx[0] !== void 0) {
          passwordtokenmodal_props.display = ctx[0];
        }
        passwordtokenmodal = new PassTokenModal({ props: passwordtokenmodal_props });
        binding_callbacks.push(function() {
          return bind(passwordtokenmodal, "display", passwordtokenmodal_display_binding);
        });
        return {
          c: function() {
            create_component(passwordtokenmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordtokenmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordtokenmodal_changes = {};
            if (dirty & 4)
              passwordtokenmodal_changes.onSuccessPasswordReset = ctx2[2];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              passwordtokenmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            passwordtokenmodal.$set(passwordtokenmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordtokenmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordtokenmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordtokenmodal, detaching);
          }
        };
      }
      function create_if_block_3(ctx) {
        var passwordresetmodal;
        var updating_display;
        var current;
        function passwordresetmodal_display_binding(value) {
          ctx[13](value);
        }
        var passwordresetmodal_props = { closeModal: ctx[5] };
        if (ctx[0] !== void 0) {
          passwordresetmodal_props.display = ctx[0];
        }
        passwordresetmodal = new PassResetModal({ props: passwordresetmodal_props });
        binding_callbacks.push(function() {
          return bind(passwordresetmodal, "display", passwordresetmodal_display_binding);
        });
        return {
          c: function() {
            create_component(passwordresetmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(passwordresetmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var passwordresetmodal_changes = {};
            if (!updating_display && dirty & 1) {
              updating_display = true;
              passwordresetmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            passwordresetmodal.$set(passwordresetmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(passwordresetmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(passwordresetmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(passwordresetmodal, detaching);
          }
        };
      }
      function create_if_block_2(ctx) {
        var signupmodal;
        var updating_display;
        var updating_params;
        var current;
        function signupmodal_display_binding(value) {
          ctx[11](value);
        }
        function signupmodal_params_binding(value) {
          ctx[12](value);
        }
        var signupmodal_props = {
          closeModal: ctx[5],
          onSuccessSignup: ctx[2]
        };
        if (ctx[0] !== void 0) {
          signupmodal_props.display = ctx[0];
        }
        if (ctx[1] !== void 0) {
          signupmodal_props.params = ctx[1];
        }
        signupmodal = new SignupModal({ props: signupmodal_props });
        binding_callbacks.push(function() {
          return bind(signupmodal, "display", signupmodal_display_binding);
        });
        binding_callbacks.push(function() {
          return bind(signupmodal, "params", signupmodal_params_binding);
        });
        return {
          c: function() {
            create_component(signupmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(signupmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var signupmodal_changes = {};
            if (dirty & 4)
              signupmodal_changes.onSuccessSignup = ctx2[2];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              signupmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            if (!updating_params && dirty & 2) {
              updating_params = true;
              signupmodal_changes.params = ctx2[1];
              add_flush_callback(function() {
                return updating_params = false;
              });
            }
            signupmodal.$set(signupmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(signupmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(signupmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(signupmodal, detaching);
          }
        };
      }
      function create_if_block_1(ctx) {
        var loginmodal;
        var updating_display;
        var updating_params;
        var current;
        function loginmodal_display_binding(value) {
          ctx[9](value);
        }
        function loginmodal_params_binding(value) {
          ctx[10](value);
        }
        var loginmodal_props = {
          closeModal: ctx[5],
          onSuccessLogin: ctx[2]
        };
        if (ctx[0] !== void 0) {
          loginmodal_props.display = ctx[0];
        }
        if (ctx[1] !== void 0) {
          loginmodal_props.params = ctx[1];
        }
        loginmodal = new LoginModal({ props: loginmodal_props });
        binding_callbacks.push(function() {
          return bind(loginmodal, "display", loginmodal_display_binding);
        });
        binding_callbacks.push(function() {
          return bind(loginmodal, "params", loginmodal_params_binding);
        });
        return {
          c: function() {
            create_component(loginmodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(loginmodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var loginmodal_changes = {};
            if (dirty & 4)
              loginmodal_changes.onSuccessLogin = ctx2[2];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              loginmodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            if (!updating_params && dirty & 2) {
              updating_params = true;
              loginmodal_changes.params = ctx2[1];
              add_flush_callback(function() {
                return updating_params = false;
              });
            }
            loginmodal.$set(loginmodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(loginmodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(loginmodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(loginmodal, detaching);
          }
        };
      }
      function create_if_block(ctx) {
        var loader;
        var current;
        loader = new Loader({});
        return {
          c: function() {
            create_component(loader.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(loader, target, anchor);
            current = true;
          },
          p: noop,
          i: function(local) {
            if (current)
              return;
            transition_in(loader.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(loader.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(loader, detaching);
          }
        };
      }
      function create_else_block(ctx) {
        var profilemodal;
        var updating_display;
        var current;
        function profilemodal_display_binding(value) {
          ctx[19](value);
        }
        var profilemodal_props = {
          closeModal: ctx[5],
          onSuccessLogout: ctx[2],
          member: ctx[3]
        };
        if (ctx[0] !== void 0) {
          profilemodal_props.display = ctx[0];
        }
        profilemodal = new ProfileModal({ props: profilemodal_props });
        binding_callbacks.push(function() {
          return bind(profilemodal, "display", profilemodal_display_binding);
        });
        return {
          c: function() {
            create_component(profilemodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(profilemodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var profilemodal_changes = {};
            if (dirty & 4)
              profilemodal_changes.onSuccessLogout = ctx2[2];
            if (dirty & 8)
              profilemodal_changes.member = ctx2[3];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              profilemodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            profilemodal.$set(profilemodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(profilemodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(profilemodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(profilemodal, detaching);
          }
        };
      }
      function create_if_block_8(ctx) {
        var mobileprofilemodal;
        var updating_display;
        var current;
        function mobileprofilemodal_display_binding(value) {
          ctx[18](value);
        }
        var mobileprofilemodal_props = {
          closeModal: ctx[5],
          onSuccessLogout: ctx[2],
          member: ctx[3]
        };
        if (ctx[0] !== void 0) {
          mobileprofilemodal_props.display = ctx[0];
        }
        mobileprofilemodal = new MobileProfileModal({ props: mobileprofilemodal_props });
        binding_callbacks.push(function() {
          return bind(mobileprofilemodal, "display", mobileprofilemodal_display_binding);
        });
        return {
          c: function() {
            create_component(mobileprofilemodal.$$.fragment);
          },
          m: function(target, anchor) {
            mount_component(mobileprofilemodal, target, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var mobileprofilemodal_changes = {};
            if (dirty & 4)
              mobileprofilemodal_changes.onSuccessLogout = ctx2[2];
            if (dirty & 8)
              mobileprofilemodal_changes.member = ctx2[3];
            if (!updating_display && dirty & 1) {
              updating_display = true;
              mobileprofilemodal_changes.display = ctx2[0];
              add_flush_callback(function() {
                return updating_display = false;
              });
            }
            mobileprofilemodal.$set(mobileprofilemodal_changes);
          },
          i: function(local) {
            if (current)
              return;
            transition_in(mobileprofilemodal.$$.fragment, local);
            current = true;
          },
          o: function(local) {
            transition_out(mobileprofilemodal.$$.fragment, local);
            current = false;
          },
          d: function(detaching) {
            destroy_component(mobileprofilemodal, detaching);
          }
        };
      }
      function create_default_slot(ctx) {
        var current_block_type_index;
        var if_block;
        var if_block_anchor;
        var current;
        var if_block_creators = [create_if_block_8, create_else_block];
        var if_blocks = [];
        function select_block_type_1(ctx2, dirty) {
          if (ctx2[24])
            return 0;
          return 1;
        }
        current_block_type_index = select_block_type_1(ctx);
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        return {
          c: function() {
            if_block.c();
            if_block_anchor = empty();
          },
          m: function(target, anchor) {
            if_blocks[current_block_type_index].m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
          },
          p: function(ctx2, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_1(ctx2);
            if (current_block_type_index === previous_block_index) {
              if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
              group_outros();
              transition_out(if_blocks[previous_block_index], 1, 1, function() {
                if_blocks[previous_block_index] = null;
              });
              check_outros();
              if_block = if_blocks[current_block_type_index];
              if (!if_block) {
                if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                if_block.c();
              } else {
                if_block.p(ctx2, dirty);
              }
              transition_in(if_block, 1);
              if_block.m(if_block_anchor.parentNode, if_block_anchor);
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if_blocks[current_block_type_index].d(detaching);
            if (detaching)
              detach(if_block_anchor);
          }
        };
      }
      function create_fragment(ctx) {
        var main;
        var current_block_type_index;
        var if_block;
        var current;
        var mounted;
        var dispose;
        var if_block_creators = [
          create_if_block,
          create_if_block_1,
          create_if_block_2,
          create_if_block_3,
          create_if_block_4,
          create_if_block_5,
          create_if_block_6,
          create_if_block_7
        ];
        var if_blocks = [];
        function select_block_type(ctx2, dirty) {
          if (ctx2[4])
            return 0;
          if (ctx2[0] === "login")
            return 1;
          if (ctx2[0] === "signup")
            return 2;
          if (ctx2[0] === "forgot_password")
            return 3;
          if (ctx2[0] === "reset_password")
            return 4;
          if (ctx2[0] === "reset_password_success")
            return 5;
          if (ctx2[0] === "passwordless_token")
            return 6;
          if (ctx2[0] === "profile")
            return 7;
          return -1;
        }
        if (~(current_block_type_index = select_block_type(ctx))) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
        }
        return {
          c: function() {
            main = element("main");
            if (if_block)
              if_block.c();
            attr(main, "id", "msOverlay");
            attr(main, "class", "svelte-14go1rs");
          },
          m: function(target, anchor) {
            insert(target, main, anchor);
            if (~current_block_type_index) {
              if_blocks[current_block_type_index].m(main, null);
            }
            current = true;
            if (!mounted) {
              dispose = listen(main, "click", ctx[6]);
              mounted = true;
            }
          },
          p: function(ctx2, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
              if (~current_block_type_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              }
            } else {
              if (if_block) {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function() {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
              }
              if (~current_block_type_index) {
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block.c();
                } else {
                  if_block.p(ctx2, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(main, null);
              } else {
                if_block = null;
              }
            }
          },
          i: function(local) {
            if (current)
              return;
            transition_in(if_block);
            current = true;
          },
          o: function(local) {
            transition_out(if_block);
            current = false;
          },
          d: function(detaching) {
            if (detaching)
              detach(main);
            if (~current_block_type_index) {
              if_blocks[current_block_type_index].d();
            }
            mounted = false;
            dispose();
          }
        };
      }
      function instance($$self, $$props, $$invalidate) {
        var _this = this;
        var showLoader;
        var _a = $$props.display, display = _a === void 0 ? "login" : _a;
        var onSuccess = $$props.onSuccess;
        var params = $$props.params;
        var appLoading = true;
        var memberLoading = display === "profile" ? true : false;
        var member;
        function setAppStore(data) {
          AppStore.update(function() {
            return data;
          });
          TextStore.set({ text: data.ssoText || {} });
        }
        function closeModal() {
          $$invalidate(7, appLoading = true);
          onSuccess({ type: "CLOSED" });
          var modal = document.querySelector("#msOverlay");
          if (modal) {
            modal.remove();
          }
        }
        function closeModalOutside(e) {
          if (e.target.id === "msOverlay") {
            closeModal();
          }
        }
        var getApp = function() {
          return __awaiter(_this, void 0, void 0, function() {
            var data;
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  return [4, window.$memberstackDom.getApp()];
                case 1:
                  data = _a2.sent().data;
                  setAppStore(data);
                  return [2];
              }
            });
          });
        };
        function checkApp() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  if (!(params && params.app))
                    return [3, 1];
                  setAppStore(params.app);
                  return [3, 3];
                case 1:
                  console.log("No app specified - request it");
                  return [4, getApp()];
                case 2:
                  _a2.sent();
                  _a2.label = 3;
                case 3:
                  $$invalidate(7, appLoading = false);
                  $$invalidate(4, showLoader = false);
                  return [2];
              }
            });
          });
        }
        var getMember = function() {
          return __awaiter(_this, void 0, void 0, function() {
            var data;
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  return [4, window.$memberstackDom.getCurrentMember()];
                case 1:
                  data = _a2.sent().data;
                  $$invalidate(8, memberLoading = false);
                  $$invalidate(3, member = data);
                  if (display === "profile" && !data) {
                    closeModal();
                    throw new Error("Member not logged in");
                  }
                  return [2];
              }
            });
          });
        };
        onMount(function() {
          checkApp();
          if (display === "profile") {
            getMember();
          }
        });
        function loginmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function loginmodal_params_binding(value) {
          params = value;
          $$invalidate(1, params);
        }
        function signupmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function signupmodal_params_binding(value) {
          params = value;
          $$invalidate(1, params);
        }
        function passwordresetmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function passwordtokenmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function passwordsuccessmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function passwordlesstokenmodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function passwordlesstokenmodal_params_binding(value) {
          params = value;
          $$invalidate(1, params);
        }
        function mobileprofilemodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        function profilemodal_display_binding(value) {
          display = value;
          $$invalidate(0, display);
        }
        $$self.$$set = function($$props2) {
          if ("display" in $$props2)
            $$invalidate(0, display = $$props2.display);
          if ("onSuccess" in $$props2)
            $$invalidate(2, onSuccess = $$props2.onSuccess);
          if ("params" in $$props2)
            $$invalidate(1, params = $$props2.params);
        };
        $$self.$$.update = function() {
          if ($$self.$$.dirty & 384) {
            $$invalidate(4, showLoader = appLoading || memberLoading);
          }
        };
        return [
          display,
          params,
          onSuccess,
          member,
          showLoader,
          closeModal,
          closeModalOutside,
          appLoading,
          memberLoading,
          loginmodal_display_binding,
          loginmodal_params_binding,
          signupmodal_display_binding,
          signupmodal_params_binding,
          passwordresetmodal_display_binding,
          passwordtokenmodal_display_binding,
          passwordsuccessmodal_display_binding,
          passwordlesstokenmodal_display_binding,
          passwordlesstokenmodal_params_binding,
          mobileprofilemodal_display_binding,
          profilemodal_display_binding
        ];
      }
      var Main = function(_super) {
        __extends(Main2, _super);
        function Main2(options) {
          var _this = _super.call(this) || this;
          init2(_this, options, instance, create_fragment, safe_not_equal, { display: 0, onSuccess: 2, params: 1 }, add_css);
          return _this;
        }
        return Main2;
      }(SvelteComponent);
      exports.default = Main;
    }
  });

  // node_modules/@memberstack/dom/lib/methods/dom/methods.js
  var require_methods = __commonJS({
    "node_modules/@memberstack/dom/lib/methods/dom/methods.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hideModal = exports.openModal = exports.handleRedirect = exports.hideLoader = exports.showLoader = exports.showMessage = exports.initDefaultMessageBox = void 0;
      var defaultMessageBox_js_1 = require_defaultMessageBox();
      var main_dom_js_1 = __importDefault(require_main_dom());
      var initDefaultMessageBox = function() {
        if (document.readyState !== "loading") {
          initMessageBoxes();
        } else {
          document.addEventListener("DOMContentLoaded", function(event) {
            initMessageBoxes();
          });
        }
        function initMessageBoxes() {
          (0, defaultMessageBox_js_1.initCSS)();
          (0, defaultMessageBox_js_1.addSuccessBox)();
          (0, defaultMessageBox_js_1.addErrorBox)();
        }
      };
      exports.initDefaultMessageBox = initDefaultMessageBox;
      var showMessage = function(msg, isError) {
        if (!msg)
          return;
        if (!document.querySelector("[data-ms-message='success']")) {
          (0, exports.initDefaultMessageBox)();
        }
        var messageBox;
        if (isError) {
          messageBox = document.querySelector("[data-ms-message='error']");
        } else {
          messageBox = document.querySelector("[data-ms-message='success']");
        }
        var messageTextBox = messageBox.querySelector("[data-ms-message-text]");
        if (messageTextBox) {
          messageTextBox.innerHTML = msg;
        }
        messageBox.style.display = "block";
        var closeBtn = messageBox.querySelector("[data-ms-message-close]");
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", function() {
          messageBox.style.display = "none";
        });
        setTimeout(function() {
          messageBox.style.display = "none";
        }, 7e3);
      };
      exports.showMessage = showMessage;
      var showLoader = function(element) {
        if (element) {
          element.style.display = "block";
          return;
        }
        var cssEl = document.createElement("style");
        var css = ".ms__loader { width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 10000000; } #msLoader path { fill: #007ace; }";
        cssEl.appendChild(document.createTextNode(css));
        document.head.appendChild(cssEl);
        var loaderHTML = '<?xml version="1.0"?><div class="ms__loader"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="msLoader" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background: new 0 0 50 50; z-index:1000000" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg></div>';
        var div = document.createElement("div");
        div.setAttribute("data-ms-loader", "true");
        div.innerHTML = loaderHTML;
        if (document.readyState !== "loading") {
          document.body.appendChild(div);
        } else {
          document.addEventListener("DOMContentLoaded", function(event) {
            document.body.appendChild(div);
          });
        }
      };
      exports.showLoader = showLoader;
      var hideLoader = function(element) {
        var _a;
        if (element) {
          element.style.display = "none";
          return;
        }
        (_a = document.querySelector("[data-ms-loader]")) === null || _a === void 0 ? void 0 : _a.remove();
      };
      exports.hideLoader = hideLoader;
      var handleRedirect = function(redirect, redirectOverride) {
        if (redirectOverride)
          return window.location.href = redirectOverride;
        if (redirect && window.location.pathname !== redirect)
          return window.location.href = redirect;
      };
      exports.handleRedirect = handleRedirect;
      var modal;
      var openModal = function(type, params) {
        if (params === void 0) {
          params = {};
        }
        return __awaiter(void 0, void 0, void 0, function() {
          var resolveModal, modalPromise;
          return __generator(this, function(_a) {
            modalPromise = new Promise(function(resolve) {
              resolveModal = resolve;
            });
            modal = new main_dom_js_1.default({
              target: document.body,
              props: {
                display: type.toLowerCase(),
                params,
                onSuccess: resolveModal
              }
            });
            return [2, modalPromise];
          });
        });
      };
      exports.openModal = openModal;
      var hideModal = function() {
        try {
          modal === null || modal === void 0 ? void 0 : modal.$destroy();
        } catch (e) {
        }
        (0, exports.hideLoader)();
      };
      exports.hideModal = hideModal;
    }
  });

  // node_modules/js-cookie/dist/js.cookie.js
  var require_js_cookie = __commonJS({
    "node_modules/js-cookie/dist/js.cookie.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, function() {
          var current = global.Cookies;
          var exports2 = global.Cookies = factory();
          exports2.noConflict = function() {
            global.Cookies = current;
            return exports2;
          };
        }());
      })(exports, function() {
        "use strict";
        function assign(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              target[key] = source[key];
            }
          }
          return target;
        }
        var defaultConverter = {
          read: function(value) {
            if (value[0] === '"') {
              value = value.slice(1, -1);
            }
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
          },
          write: function(value) {
            return encodeURIComponent(value).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          }
        };
        function init2(converter, defaultAttributes) {
          function set(name, value, attributes) {
            if (typeof document === "undefined") {
              return;
            }
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") {
              attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            }
            if (attributes.expires) {
              attributes.expires = attributes.expires.toUTCString();
            }
            name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for (var attributeName in attributes) {
              if (!attributes[attributeName]) {
                continue;
              }
              stringifiedAttributes += "; " + attributeName;
              if (attributes[attributeName] === true) {
                continue;
              }
              stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
          }
          function get(name) {
            if (typeof document === "undefined" || arguments.length && !name) {
              return;
            }
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for (var i = 0; i < cookies.length; i++) {
              var parts = cookies[i].split("=");
              var value = parts.slice(1).join("=");
              try {
                var found = decodeURIComponent(parts[0]);
                jar[found] = converter.read(value, found);
                if (name === found) {
                  break;
                }
              } catch (e) {
              }
            }
            return name ? jar[name] : jar;
          }
          return Object.create(
            {
              set,
              get,
              remove: function(name, attributes) {
                set(
                  name,
                  "",
                  assign({}, attributes, {
                    expires: -1
                  })
                );
              },
              withAttributes: function(attributes) {
                return init2(this.converter, assign({}, this.attributes, attributes));
              },
              withConverter: function(converter2) {
                return init2(assign({}, this.converter, converter2), this.attributes);
              }
            },
            {
              attributes: { value: Object.freeze(defaultAttributes) },
              converter: { value: Object.freeze(converter) }
            }
          );
        }
        var api = init2(defaultConverter, { path: "/" });
        return api;
      });
    }
  });

  // node_modules/@memberstack/dom/lib/utils/cookies.js
  var require_cookies = __commonJS({
    "node_modules/@memberstack/dom/lib/utils/cookies.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.setMemberTokenIfAvailable = exports.getMemberToken = exports.removeMemberToken = exports.setMemberToken = exports.setUseCookies = void 0;
      var js_cookie_1 = __importDefault(require_js_cookie());
      var memberAuthTokenName = "_ms-mid";
      function isLocalStorageAvailable() {
        try {
          localStorage.setItem("test", "test");
          localStorage.removeItem("test");
          return true;
        } catch (e) {
          return false;
        }
      }
      var localStorageAvailable = isLocalStorageAvailable();
      var useCookies = false;
      var setUseCookies = function() {
        useCookies = true;
      };
      exports.setUseCookies = setUseCookies;
      var setMemberToken = function(token, expires) {
        if (localStorageAvailable && !useCookies) {
          localStorage.setItem(memberAuthTokenName, token);
        } else {
          js_cookie_1.default.set(memberAuthTokenName, token, {
            expires: expires && Number(expires) || 14,
            sameSite: "strict"
          });
        }
      };
      exports.setMemberToken = setMemberToken;
      var removeMemberToken = function() {
        if (localStorageAvailable) {
          localStorage.removeItem(memberAuthTokenName);
        }
        js_cookie_1.default.set(memberAuthTokenName, "", {
          expires: -1,
          sameSite: "strict"
        });
      };
      exports.removeMemberToken = removeMemberToken;
      var getMemberToken = function() {
        if (localStorageAvailable && !useCookies) {
          var memAuthToken = localStorage.getItem(memberAuthTokenName);
          if (memAuthToken)
            return memAuthToken;
        }
        return js_cookie_1.default.get(memberAuthTokenName);
      };
      exports.getMemberToken = getMemberToken;
      var setMemberTokenIfAvailable = function() {
        if (typeof window !== "undefined") {
          var urlParams = new URLSearchParams(window.location.search);
          var memberToken = urlParams.get("memberToken");
          if (memberToken)
            (0, exports.setMemberToken)(memberToken);
        }
      };
      exports.setMemberTokenIfAvailable = setMemberTokenIfAvailable;
    }
  });

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      var kindOf = function(cache) {
        return function(thing) {
          var str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        };
      }(/* @__PURE__ */ Object.create(null));
      function kindOfTest(type) {
        type = type.toLowerCase();
        return function isKindOf(thing) {
          return kindOf(thing) === type;
        };
      }
      function isArray(val) {
        return Array.isArray(val);
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (kindOf(val) !== "object") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isFormData(thing) {
        var pattern = "[object FormData]";
        return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
      }
      var isURLSearchParams = kindOfTest("URLSearchParams");
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      function inherits(constructor, superConstructor, props, descriptors) {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        constructor.prototype.constructor = constructor;
        props && Object.assign(constructor.prototype, props);
      }
      function toFlatObject(sourceObj, destObj, filter) {
        var props;
        var i;
        var prop;
        var merged = {};
        destObj = destObj || {};
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if (!merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = Object.getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      }
      function endsWith(str, searchString, position) {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        var lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      }
      function toArray(thing) {
        if (!thing)
          return null;
        var i = thing.length;
        if (isUndefined(i))
          return null;
        var arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      }
      var isTypedArray = function(TypedArray) {
        return function(thing) {
          return TypedArray && thing instanceof TypedArray;
        };
      }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        isTypedArray,
        isFileList
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/AxiosError.js
  var require_AxiosError = __commonJS({
    "node_modules/axios/lib/core/AxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        this.message = message;
        this.name = "AxiosError";
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }
      utils.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      var prototype = AxiosError.prototype;
      var descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED"
      ].forEach(function(code) {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = function(error, code, config, request, response, customProps) {
        var axiosError = Object.create(prototype);
        utils.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      module.exports = AxiosError;
    }
  });

  // node_modules/axios/lib/defaults/transitional.js
  var require_transitional = __commonJS({
    "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
      "use strict";
      module.exports = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/axios/lib/helpers/toFormData.js
  var require_toFormData = __commonJS({
    "node_modules/axios/lib/helpers/toFormData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function toFormData(obj, formData) {
        formData = formData || new FormData();
        var stack = [];
        function convertValue(value) {
          if (value === null)
            return "";
          if (utils.isDate(value)) {
            return value.toISOString();
          }
          if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
          }
          return value;
        }
        function build(data, parentKey) {
          if (utils.isPlainObject(data) || utils.isArray(data)) {
            if (stack.indexOf(data) !== -1) {
              throw Error("Circular reference detected in " + parentKey);
            }
            stack.push(data);
            utils.forEach(data, function each(value, key) {
              if (utils.isUndefined(value))
                return;
              var fullKey = parentKey ? parentKey + "." + key : key;
              var arr;
              if (value && !parentKey && typeof value === "object") {
                if (utils.endsWith(key, "{}")) {
                  value = JSON.stringify(value);
                } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                  arr.forEach(function(el) {
                    !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                  });
                  return;
                }
              }
              build(value, fullKey);
            });
            stack.pop();
          } else {
            formData.append(parentKey, convertValue(data));
          }
        }
        build(obj);
        return formData;
      }
      module.exports = toFormData;
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var AxiosError = require_AxiosError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
            response.config,
            response.request,
            response
          ));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies2 = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // node_modules/axios/lib/cancel/CanceledError.js
  var require_CanceledError = __commonJS({
    "node_modules/axios/lib/cancel/CanceledError.js"(exports, module) {
      "use strict";
      var AxiosError = require_AxiosError();
      var utils = require_utils();
      function CanceledError(message) {
        AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
        this.name = "CanceledError";
      }
      utils.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });
      module.exports = CanceledError;
    }
  });

  // node_modules/axios/lib/helpers/parseProtocol.js
  var require_parseProtocol = __commonJS({
    "node_modules/axios/lib/helpers/parseProtocol.js"(exports, module) {
      "use strict";
      module.exports = function parseProtocol(url) {
        var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || "";
      };
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies2();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var transitionalDefaults = require_transitional();
      var AxiosError = require_AxiosError();
      var CanceledError = require_CanceledError();
      var parseProtocol = require_parseProtocol();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          var protocol = parseProtocol(fullPath);
          if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/helpers/null.js
  var require_null = __commonJS({
    "node_modules/axios/lib/helpers/null.js"(exports, module) {
      module.exports = null;
    }
  });

  // node_modules/axios/lib/defaults/index.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults/index.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var AxiosError = require_AxiosError();
      var transitionalDefaults = require_transitional();
      var toFormData = require_toFormData();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          var isObjectPayload = utils.isObject(data);
          var contentType = headers && headers["Content-Type"];
          var isFileList;
          if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
            var _FormData = this.env && this.env.FormData;
            return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
          } else if (isObjectPayload || contentType === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: require_null()
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var CanceledError = require_CanceledError();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError();
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(
          config,
          config.data,
          config.headers,
          config.transformRequest
        );
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers
        );
        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            response.data,
            response.headers,
            config.transformResponse
          );
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                reason.response.data,
                reason.response.headers,
                config.transformResponse
              );
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "beforeRedirect": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.27.2"
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var AxiosError = require_AxiosError();
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var buildFullPath = require_buildFullPath();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var CanceledError = require_CanceledError();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i;
          var l = token._listeners.length;
          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.CanceledError = require_CanceledError();
      axios.CancelToken = require_CancelToken();
      axios.isCancel = require_isCancel();
      axios.VERSION = require_data().version;
      axios.toFormData = require_toFormData();
      axios.AxiosError = require_AxiosError();
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = require_spread();
      axios.isAxiosError = require_isAxiosError();
      module.exports = axios;
      module.exports.default = axios;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // node_modules/@memberstack/dom/lib/constants/endpoints.js
  var require_endpoints = __commonJS({
    "node_modules/@memberstack/dom/lib/constants/endpoints.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.endpoints = void 0;
      exports.endpoints = {
        API: "https://client.memberstack.com"
      };
    }
  });

  // node_modules/@memberstack/dom/lib/methods/requests/requests.js
  var require_requests = __commonJS({
    "node_modules/@memberstack/dom/lib/methods/requests/requests.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createRequestHandler = exports.HttpHeaders = exports.HttpMethod = void 0;
      var axios_1 = __importDefault(require_axios2());
      var endpoints_1 = require_endpoints();
      var cookies_1 = require_cookies();
      var HttpMethod;
      (function(HttpMethod2) {
        HttpMethod2["POST"] = "POST";
        HttpMethod2["GET"] = "GET";
      })(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
      var HttpHeaders;
      (function(HttpHeaders2) {
        HttpHeaders2["AUTHORIZATION"] = "Authorization";
        HttpHeaders2["API_KEY"] = "X-API-Key";
        HttpHeaders2["APP_ID"] = "X-APP-ID";
        HttpHeaders2["API_VERSION"] = "X-API-Version";
        HttpHeaders2["USER_AGENT"] = "X-User-Agent";
      })(HttpHeaders = exports.HttpHeaders || (exports.HttpHeaders = {}));
      var createRequestHandler = function(_a) {
        var publicKey = _a.publicKey, appId = _a.appId, token = _a.token, customEndpoint = _a.customEndpoint;
        return {
          sendRequest: function(data, options) {
            return __awaiter(void 0, void 0, void 0, function() {
              var url, memberToken, authHeader, formattedUrl, res, e_1;
              var _a2, _b, _c;
              var _d, _e, _f, _g, _h, _j, _k, _l;
              return __generator(this, function(_m) {
                switch (_m.label) {
                  case 0:
                    _m.trys.push([0, 2, , 3]);
                    url = data.url;
                    memberToken = (0, cookies_1.getMemberToken)();
                    authHeader = [
                      (_e = (_d = data.headers) === null || _d === void 0 ? void 0 : _d["Authorization"]) === null || _e === void 0 ? void 0 : _e.replace("Bearer ", ""),
                      memberToken,
                      options === null || options === void 0 ? void 0 : options.token
                    ].find(function(x) {
                      return x;
                    });
                    formattedUrl = "".concat(customEndpoint || endpoints_1.endpoints.API).concat(url);
                    return [4, (0, axios_1.default)({
                      method: data.method,
                      data: data.data,
                      url: formattedUrl,
                      headers: __assign(__assign(__assign(__assign(__assign({}, authHeader && { authorization: "Bearer ".concat(authHeader) }), publicKey && (_a2 = {}, _a2[HttpHeaders.API_KEY] = publicKey, _a2)), appId && (_b = {}, _b[HttpHeaders.APP_ID] = appId, _b)), (_c = {}, _c[HttpHeaders.USER_AGENT] = "@memberstack/client@1.2.0", _c)), data.contentType && { "Content-Type": data.contentType }),
                      withCredentials: true
                    })];
                  case 1:
                    res = _m.sent();
                    if ((_f = res === null || res === void 0 ? void 0 : res.headers) === null || _f === void 0 ? void 0 : _f["ms-mid"]) {
                      token = res.headers["ms-mid"];
                    }
                    if ((_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.error) {
                      if (res.data.error.name === "JsonWebTokenError") {
                        throw {
                          code: "client/invalid-token",
                          message: "An invalid token has been provided. Please make sure the token is valid."
                        };
                      }
                      throw (_h = res.data) === null || _h === void 0 ? void 0 : _h.error;
                    }
                    return [2, res === null || res === void 0 ? void 0 : res.data];
                  case 2:
                    e_1 = _m.sent();
                    if (!e_1.response)
                      throw e_1;
                    throw ((_k = (_j = e_1.response) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.error) || ((_l = e_1.response) === null || _l === void 0 ? void 0 : _l.data);
                  case 3:
                    return [2];
                }
              });
            });
          }
        };
      };
      exports.createRequestHandler = createRequestHandler;
    }
  });

  // node_modules/@memberstack/dom/lib/auth/index.js
  var require_auth = __commonJS({
    "node_modules/@memberstack/dom/lib/auth/index.js"(exports) {
      "use strict";
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.onAuthChange = exports.unsetPersistedMember = exports.updatePersistedMember = exports.setPersistedMember = exports.getPersistedMember = void 0;
      var cookies_1 = require_cookies();
      var createObservable = function() {
        var observer = /* @__PURE__ */ new Map();
        return {
          subscribe: function(key, fn) {
            if (typeof fn !== "function")
              return;
            return observer.set(key, fn);
          },
          unsubscribe: function(key) {
            return observer.delete(key);
          },
          notify: function(data) {
            return __spreadArray([], __read(observer.values()), false).forEach(function(fn) {
              return fn(data);
            });
          }
        };
      };
      var observable = createObservable();
      var getPersistedMember = function() {
        return JSON.parse(localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("_ms-mem"));
      };
      exports.getPersistedMember = getPersistedMember;
      var setPersistedMember = function(member) {
        if (member) {
          var data = JSON.stringify(member);
          if (data)
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("_ms-mem", data);
          observable.notify(member);
        }
      };
      exports.setPersistedMember = setPersistedMember;
      var updatePersistedMember = function(member) {
        if (member) {
          var data = JSON.stringify(member);
          if (data)
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("_ms-mem", data);
        } else {
          localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem("_ms-mem");
          (0, cookies_1.removeMemberToken)();
        }
      };
      exports.updatePersistedMember = updatePersistedMember;
      var unsetPersistedMember = function() {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem("_ms-mem");
        (0, cookies_1.removeMemberToken)();
        observable.notify(null);
      };
      exports.unsetPersistedMember = unsetPersistedMember;
      var onAuthChange = function(cb) {
        var id = Math.floor(Math.random() * 1e3);
        observable.subscribe(id, cb);
        return {
          unsubscribe: function() {
            return observable.unsubscribe(id);
          }
        };
      };
      exports.onAuthChange = onAuthChange;
    }
  });

  // node_modules/@memberstack/dom/lib/methods/requests/index.js
  var require_requests2 = __commonJS({
    "node_modules/@memberstack/dom/lib/methods/requests/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.initRequest = void 0;
      var requests_1 = require_requests();
      var requests_2 = require_requests();
      var auth_1 = require_auth();
      var cookies_1 = require_cookies();
      var endpoints_1 = require_endpoints();
      var globalSessionDurationDays;
      var addHeaders = function(options) {
        return __assign({}, (options === null || options === void 0 ? void 0 : options.token) && {
          Authorization: "Bearer ".concat(options.token)
        });
      };
      var promiseResolve;
      var promiseReject;
      var receiveMessage = function(event) {
        var _a;
        var data = event.data, origin = event.origin;
        if (API_ENDPOINT !== origin)
          return;
        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.member) {
          (0, auth_1.setPersistedMember)(data.data.member);
          (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, globalSessionDurationDays);
        }
        if (data === null || data === void 0 ? void 0 : data.error) {
          promiseReject(data.error);
        }
        promiseResolve(data);
      };
      var windowObjectReference = null;
      var previousUrl = null;
      var openSignInWindow = function(url, name) {
        return __awaiter(void 0, void 0, void 0, function() {
          var dualScreenLeft, dualScreenTop, width, height, systemZoom, left, top, strWindowFeatures;
          return __generator(this, function(_a) {
            window.removeEventListener("message", receiveMessage);
            dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screenX;
            dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screenY;
            width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            systemZoom = width / window.screen.availWidth;
            left = (width - 600) / 2 / systemZoom + dualScreenLeft;
            top = (height - 700) / 2 / systemZoom + dualScreenTop;
            strWindowFeatures = "toolbar=no, menubar=no, width=".concat(600 / systemZoom, ", height=").concat(700 / systemZoom, ", top=").concat(top, ", left=").concat(left);
            if (windowObjectReference === null || windowObjectReference.closed) {
              windowObjectReference = window.open(url, name, strWindowFeatures);
            } else if (previousUrl !== url) {
              windowObjectReference = window.open(url, name, strWindowFeatures);
              windowObjectReference.focus();
            } else {
              windowObjectReference.focus();
            }
            window.addEventListener("message", function(event) {
              return receiveMessage(event);
            }, false);
            previousUrl = url;
            window.addEventListener("beforeunload", function() {
              windowObjectReference === null || windowObjectReference === void 0 ? void 0 : windowObjectReference.close();
            });
            return [2, new Promise(function(resolve, reject) {
              promiseResolve = resolve;
              promiseReject = reject;
            })];
          });
        });
      };
      var API_ENDPOINT;
      var initRequest = function(_a) {
        var publicKey = _a.publicKey, appId = _a.appId, token = _a.token, domain = _a.domain, sessionDurationDays = _a.sessionDurationDays;
        var sendRequest = (0, requests_1.createRequestHandler)({
          publicKey,
          token,
          customEndpoint: domain,
          appId
        }).sendRequest;
        API_ENDPOINT = domain;
        globalSessionDurationDays = sessionDurationDays;
        return {
          getSecureContent: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/secure-content",
                      data: {
                        contentId: params.contentId
                      }
                    })];
                  case 1:
                    data = _a2.sent();
                    return [2, data];
                }
              });
            });
          },
          signupWithProvider: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var customFields, plans, queryParams;
              return __generator(this, function(_a2) {
                customFields = encodeURIComponent(params.customFields ? JSON.stringify(params.customFields) : "{}");
                plans = encodeURIComponent(params.plans ? JSON.stringify(params.plans) : "[]");
                queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, customFields, plans, appId }, publicKey && {
                  publicKey
                }), { origin: window.location.hostname }));
                return [2, openSignInWindow("".concat(domain, "/auth-provider/signup?").concat(queryParams), "signup")];
              });
            });
          },
          loginWithProvider: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var queryParams;
              return __generator(this, function(_a2) {
                queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, appId }, publicKey && {
                  publicKey
                }), { origin: window.location.hostname }));
                return [2, openSignInWindow("".concat(domain, "/auth-provider/login?").concat(queryParams), "login")];
              });
            });
          },
          connectProvider: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var queryParams;
              return __generator(this, function(_a2) {
                queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, appId }, publicKey && {
                  publicKey
                }), { member: (0, cookies_1.getMemberToken)(), origin: window.location.hostname }));
                return [2, openSignInWindow("".concat(endpoints_1.endpoints.API, "/auth-provider/connect?").concat(queryParams), "connect")];
              });
            });
          },
          disconnectProvider: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member/disconnect-provider",
                  data: {
                    provider: params.provider
                  }
                })];
              });
            });
          },
          getAppAndMember: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var queryParams;
              return __generator(this, function(_a2) {
                queryParams = new URLSearchParams({
                  includeSSOText: window === null || window === void 0 ? void 0 : window.ssoUI
                });
                return [2, sendRequest({
                  method: requests_2.HttpMethod.GET,
                  url: "/app-member?".concat(queryParams)
                })];
              });
            });
          },
          getApp: function() {
            return __awaiter(this, void 0, void 0, function() {
              var queryParams;
              return __generator(this, function(_a2) {
                queryParams = new URLSearchParams({
                  includeSSOText: window === null || window === void 0 ? void 0 : window.ssoUI
                });
                return [2, sendRequest({
                  method: requests_2.HttpMethod.GET,
                  url: "/app?".concat(queryParams)
                })];
              });
            });
          },
          loginMemberEmailPassword: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/login",
                      data: {
                        email: params.email,
                        password: params.password,
                        options
                      }
                    })];
                  case 1:
                    data = _a2.sent();
                    (0, auth_1.setPersistedMember)(data.data.member);
                    (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                    return [2, data];
                }
              });
            });
          },
          sendMemberLoginPasswordlessEmail: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/passwordless/login/send",
                      data: {
                        email: params.email
                      }
                    })];
                  case 1:
                    return [2, _a2.sent()];
                }
              });
            });
          },
          sendMemberSignupPasswordlessEmail: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/passwordless/signup/send",
                      data: {
                        email: params.email
                      }
                    })];
                  case 1:
                    return [2, _a2.sent()];
                }
              });
            });
          },
          loginMemberPasswordless: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/passwordless/login",
                      data: {
                        passwordlessToken: params.passwordlessToken,
                        email: params.email,
                        options
                      }
                    })];
                  case 1:
                    data = _a2.sent();
                    (0, auth_1.setPersistedMember)(data.data.member);
                    (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                    return [2, data];
                }
              });
            });
          },
          getPlan: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.GET,
                  url: "/app/plans/".concat(params.planId)
                })];
              });
            });
          },
          getPlans: function() {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.GET,
                      url: "/app"
                    })];
                  case 1:
                    data = _a2.sent().data;
                    return [2, {
                      data: data.plans
                    }];
                }
              });
            });
          },
          getRestrictedUrlGroups: function() {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.GET,
                      url: "/app"
                    })];
                  case 1:
                    data = _a2.sent().data;
                    return [2, {
                      data: data.contentGroups
                    }];
                }
              });
            });
          },
          getCurrentMember: function(options) {
            return __awaiter(this, void 0, void 0, function() {
              function setMember() {
                return __awaiter(this, void 0, void 0, function() {
                  var data;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return [4, getMemberRequest];
                      case 1:
                        data = _a2.sent();
                        (0, auth_1.updatePersistedMember)(data.data);
                        return [2];
                    }
                  });
                });
              }
              var getMemberRequest, member;
              return __generator(this, function(_a2) {
                getMemberRequest = sendRequest({
                  method: requests_2.HttpMethod.GET,
                  url: "/member?".concat(Math.floor(1e3 + Math.random() * 9e3)),
                  headers: addHeaders(options)
                });
                setMember();
                if ((options === null || options === void 0 ? void 0 : options.useCache) === true) {
                  member = (0, auth_1.getPersistedMember)();
                  return [2, { data: member }];
                } else {
                  return [2, getMemberRequest];
                }
                return [2];
              });
            });
          },
          getMemberJSON: function(options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.GET,
                  url: "/member/json",
                  headers: addHeaders(options)
                })];
              });
            });
          },
          updateMemberJSON: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member/json",
                  data: {
                    json: params.json
                  },
                  headers: addHeaders(options)
                })];
              });
            });
          },
          addPlan: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member/plans/add",
                  data: {
                    planId: params.planId
                  },
                  headers: addHeaders(options)
                })];
              });
            });
          },
          purchasePlansWithCheckout: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              function getRedirectURL(URL) {
                var redirectUrl = window.location.href;
                var urlParam = URL;
                if (urlParam) {
                  if (urlParam.indexOf("http://") === 0 || urlParam.indexOf("https://") === 0) {
                    redirectUrl = urlParam;
                  } else {
                    redirectUrl = window.location.origin + urlParam;
                  }
                }
                return redirectUrl;
              }
              var success_url, cancel_url, request;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    success_url = params.successUrl ? getRedirectURL(params.successUrl) : void 0;
                    cancel_url = getRedirectURL(params.cancelUrl);
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/member/plans/create-checkout-session",
                      data: {
                        priceId: params.priceId,
                        success_url,
                        cancel_url,
                        origin_url: window.location.href
                      },
                      headers: addHeaders(options)
                    })];
                  case 1:
                    request = _a2.sent();
                    if (params.autoRedirect === false) {
                      return [2, request];
                    }
                    window.location.href = request.data.url;
                    return [2];
                }
              });
            });
          },
          launchStripeCustomerPortal: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              function getRedirectURL(URL) {
                var redirectUrl = window.location.href;
                var urlParam = URL;
                if (urlParam) {
                  if (urlParam.indexOf("http://") === 0 || urlParam.indexOf("https://") === 0) {
                    redirectUrl = urlParam;
                  } else {
                    redirectUrl = window.location.origin + urlParam;
                  }
                }
                return redirectUrl;
              }
              var returnUrl, request;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    returnUrl = (params === null || params === void 0 ? void 0 : params.returnUrl) ? getRedirectURL(params.returnUrl) : void 0;
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/member/create-billing-portal-session",
                      data: __assign({
                        return_url: returnUrl,
                        origin_url: window.location.href
                      }, params && {
                        priceIds: params.priceIds,
                        configuration: params.configuration
                      }),
                      headers: addHeaders(options)
                    })];
                  case 1:
                    request = _a2.sent();
                    if ((params === null || params === void 0 ? void 0 : params.autoRedirect) === false) {
                      return [2, request];
                    }
                    window.location.href = request.data.url;
                    return [2];
                }
              });
            });
          },
          removePlan: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member/plans/remove",
                  data: {
                    planId: params.planId
                  },
                  headers: addHeaders(options)
                })];
              });
            });
          },
          updateMember: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member",
                  data: __assign({}, params.customFields && { customFields: params.customFields }),
                  headers: addHeaders(options)
                })];
              });
            });
          },
          updateMemberAuth: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member-auth",
                  data: __assign(__assign(__assign({}, params.email && { email: params.email }), params.oldPassword && { oldPassword: params.oldPassword }), params.newPassword && { newPassword: params.newPassword }),
                  headers: addHeaders(options)
                })];
              });
            });
          },
          setPassword: function(params, options) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/member/set-password",
                  data: {
                    password: params.password
                  },
                  headers: addHeaders(options)
                })];
              });
            });
          },
          signupMemberPasswordless: function(params, options) {
            var _a2, _b;
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/signup?isPasswordless=true",
                      data: __assign(__assign(__assign({ email: params.email, customFields: params.customFields, passwordlessToken: params.passwordlessToken, metaData: params.metaData }, params.plans && { plans: params.plans }), {
                        origin_domain: window.location.origin,
                        options
                      }), ((_a2 = window.Rewardful) === null || _a2 === void 0 ? void 0 : _a2.referral) && {
                        rewardfulData: {
                          referral: window.Rewardful.referral,
                          coupon: (_b = window.Rewardful.coupon) === null || _b === void 0 ? void 0 : _b.id
                        }
                      })
                    })];
                  case 1:
                    data = _c.sent();
                    (0, auth_1.setPersistedMember)(data.data.member);
                    (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                    return [2, data];
                }
              });
            });
          },
          signupMemberEmailPassword: function(params, options) {
            var _a2, _b;
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/auth/signup",
                      data: __assign(__assign(__assign({ email: params.email, password: params.password, customFields: params.customFields, metaData: params.metaData, captchaToken: params.captchaToken }, params.plans && { plans: params.plans }), {
                        origin_domain: window.location.origin,
                        options
                      }), ((_a2 = window.Rewardful) === null || _a2 === void 0 ? void 0 : _a2.referral) && {
                        rewardfulData: {
                          referral: window.Rewardful.referral,
                          coupon: (_b = window.Rewardful.coupon) === null || _b === void 0 ? void 0 : _b.id
                        }
                      })
                    })];
                  case 1:
                    data = _c.sent();
                    (0, auth_1.setPersistedMember)(data.data.member);
                    (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                    return [2, data];
                }
              });
            });
          },
          updateMemberProfileImage: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              var formData;
              return __generator(this, function(_a2) {
                if (params.profileImage) {
                  formData = new FormData();
                  formData.append("profileImage", params.profileImage);
                  return [2, sendRequest({
                    method: requests_2.HttpMethod.POST,
                    url: "/member/profile-image",
                    data: formData,
                    contentType: "multipart/form-data"
                  })];
                }
                return [2];
              });
            });
          },
          sendMemberVerificationEmail: function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/auth/send-email-verification",
                  data: {
                    origin_domain: window.location.origin
                  }
                })];
              });
            });
          },
          sendMemberResetPasswordEmail: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/auth/send-reset-password-email",
                  data: {
                    email: params.email
                  }
                })];
              });
            });
          },
          resetMemberPassword: function(params) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, sendRequest({
                  method: requests_2.HttpMethod.POST,
                  url: "/auth/reset-password",
                  data: {
                    token: params.token,
                    newPassword: params.newPassword
                  }
                })];
              });
            });
          },
          logout: function(options) {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, sendRequest({
                      method: requests_2.HttpMethod.POST,
                      url: "/member/logout",
                      headers: addHeaders(options)
                    })];
                  case 1:
                    data = _a2.sent();
                    (0, auth_1.unsetPersistedMember)();
                    return [2, data];
                }
              });
            });
          }
        };
      };
      exports.initRequest = initRequest;
    }
  });

  // node_modules/@memberstack/dom/lib/methods/index.js
  var require_methods2 = __commonJS({
    "node_modules/@memberstack/dom/lib/methods/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var methods_1 = require_methods();
      var cookies_1 = require_cookies();
      var requests_1 = require_requests2();
      var auth_1 = require_auth();
      var endpoints_1 = require_endpoints();
      var captchaReadyPromise = new Promise(function(resolve) {
        if (typeof window !== "undefined") {
          window._hcaptchaReady = resolve;
        }
      });
      var methods = {
        openModal: methods_1.openModal,
        hideModal: methods_1.hideModal,
        _hideLoader: methods_1.hideLoader,
        _showLoader: methods_1.showLoader,
        _showMessage: methods_1.showMessage,
        getMemberCookie: cookies_1.getMemberToken,
        onAuthChange: auth_1.onAuthChange,
        _captchaReady: captchaReadyPromise
      };
      function init2(props) {
        if (props.useCookies)
          (0, cookies_1.setUseCookies)();
        (0, cookies_1.setMemberTokenIfAvailable)();
        var requests = (0, requests_1.initRequest)({
          publicKey: props.publicKey,
          appId: props.appId,
          sessionDurationDays: props.sessionDurationDays,
          token: (0, cookies_1.getMemberToken)(),
          domain: props.domain || endpoints_1.endpoints.API
        });
        var allMethods = Object.assign(methods, requests);
        if (typeof window !== "undefined") {
          window.$memberstackDom = allMethods;
        }
        _initCaptchas();
        return allMethods;
      }
      function _initCaptchas() {
        return __awaiter(this, void 0, void 0, function() {
          var script;
          return __generator(this, function(_a) {
            if (typeof window === "undefined")
              return [2];
            script = document.createElement("script");
            script.src = "https://js.hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaReady";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            return [2];
          });
        });
      }
      exports.default = { init: function(props) {
        return init2(props);
      } };
    }
  });

  // node_modules/@memberstack/dom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@memberstack/dom/lib/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var methods_1 = __importDefault(require_methods2());
      exports.default = { init: methods_1.default.init };
    }
  });

  // src/pages/dre-test.ts
  var DreTest = class {
    constructor() {
    }
    init() {
      const inputs = document.querySelectorAll("input[dre-id]");
      inputs.forEach((input) => {
        const dreIdValue = input.getAttribute("dre-id");
        if (dreIdValue) {
          input.value = dreIdValue;
        }
      });
      const forms = document.querySelectorAll("[dre-form] > form");
      forms.forEach((form) => {
        console.log("installing listener on form", form);
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const action = form.getAttribute("action") || "";
          console.debug("submitting", action);
          const formData = new FormData(form);
          let dreId = [];
          const checkboxes = form.querySelectorAll('input[type="checkbox"][dre-id]');
          checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
              const dreIdValue = checkbox.getAttribute("dre-id");
              if (dreIdValue) {
                dreId.push(dreIdValue);
              }
            }
          });
          var formDataObject = {};
          formData.forEach((value, key) => {
            formDataObject[key] = value;
          });
          formDataObject["dre_ID"] = dreId;
          console.log(JSON.stringify(formDataObject));
          fetch(action, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
          }).then(async (response) => {
            console.debug("SERVER RESPONDED", await response.text());
          }).then((data) => {
            console.debug(data);
          }).catch((error) => {
            console.error("Error:", error);
          });
        });
      });
    }
  };

  // src/index.ts
  var import_dom = __toESM(require_lib());
  var MEMBERSTACK_APP_ID = "app_clksj4bjy00250umgdkgbgh4t";
  var memberstack = import_dom.default.init({
    publicKey: MEMBERSTACK_APP_ID
  });
  var init = () => {
    console.log("DRE-lib", "loaded1");
    console.log("DRE-lib", window.location.pathname);
    switch (window.location.pathname) {
      case "/test":
        console.log("DRE-lib", "Init | TEST page");
        new DreTest().init();
        break;
    }
    (async () => {
      console.log("get member info()");
      const member = await memberstack.getCurrentMember();
      console.log(member.data.id);
      console.log(member.data.customFields);
    })();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
/*! js-cookie v3.0.5 | MIT */
//# sourceMappingURL=index.js.map
