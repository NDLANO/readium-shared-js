(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.readiumSharedJs = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
var _jquery, _eventEmitter, _readium_shared_js_globals, _console_shim, _es6_shim, _punycode, _IPv6, _SecondLevelDomains, _URIjs, _readium_cfi_js, _underscore, _readium_js_plugins, _readium_shared_js_globalsSetup, _readium_shared_js, _jquerySizes, _readium_shared_js_models_spine_item, _readium_shared_js_helpers, _readium_shared_js_plugins_controller, _readium_shared_js_models_bookmark_data, _readium_shared_js_models_current_pages_info, _readium_shared_js_models_fixed_page_spread, _readium_shared_js_models_smil_model, _readium_shared_js_models_media_overlay, _readium_shared_js_models_metadata, _readium_shared_js_models_node_range_info, _readium_shared_js_models_spine, _readium_shared_js_models_package_data, _readium_shared_js_models_package, _readium_shared_js_models_page_open_request, _readium_shared_js_models_smil_iterator, _readium_shared_js_models_style, _readium_shared_js_models_style_collection, _readium_shared_js_models_switches, _readium_shared_js_models_trigger, _readium_shared_js_models_viewer_settings, _readium_shared_js_views_audio_player, _readium_shared_js_views_cfi_navigation_logic, _readium_shared_js_views_external_agent_support, _ResizeSensor, _readium_shared_js_views_one_page_view, _readium_shared_js_views_fixed_view, _readium_shared_js_views_iframe_loader, _readium_shared_js_views_internal_links_support, _readium_shared_js_views_media_overlay_data_injector, _readium_shared_js_views_media_overlay_element_highlighter, _readium_shared_js_views_scroll_view, _readium_shared_js_views_media_overlay_player, _readium_shared_js_views_reflowable_view, _readium_shared_js_views_reader_view, _readium_shared_js_all = {};
!function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document)
      throw new Error('jQuery requires a window with a document');
    return t(e);
  } : t(e);
}('undefined' != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && 'length' in e && e.length, n = ie.type(e);
    return 'function' !== n && !ie.isWindow(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  function r(e, t, n) {
    if (ie.isFunction(t))
      return ie.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return ie.grep(e, function (e) {
        return e === t !== n;
      });
    if ('string' == typeof t) {
      if (he.test(t))
        return ie.filter(t, e, n);
      t = ie.filter(t, e);
    }
    return ie.grep(e, function (e) {
      return Z.call(t, e) > -1 !== n;
    });
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  function o(e) {
    var t = {};
    return ie.each(e.match(be) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  function a() {
    X.removeEventListener('DOMContentLoaded', a), e.removeEventListener('load', a), ie.ready();
  }
  function s() {
    this.expando = ie.expando + s.uid++;
  }
  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = 'data-' + t.replace(Ce, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
        try {
          n = 'true' === n || 'false' !== n && ('null' === n ? null : +n + '' === n ? +n : Se.test(n) ? ie.parseJSON(n) : n);
        } catch (e) {
        }
        _e.set(e, t, n);
      } else
        n = void 0;
    return n;
  }
  function l(e, t, n, r) {
    var i, o = 1, a = 20, s = r ? function () {
        return r.cur();
      } : function () {
        return ie.css(e, t, '');
      }, u = s(), l = n && n[3] || (ie.cssNumber[t] ? '' : 'px'), c = (ie.cssNumber[t] || 'px' !== l && +u) && Oe.exec(ie.css(e, t));
    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;
      do {
        o = o || '.5', c /= o, ie.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  function c(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
    return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n;
  }
  function f(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      xe.set(e[n], 'globalEval', !t || xe.get(t[n], 'globalEval'));
  }
  function d(e, t, n, r, i) {
    for (var o, a, s, u, l, d, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; g < m; g++)
      if ((o = e[g]) || 0 === o)
        if ('object' === ie.type(o))
          ie.merge(h, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          for (a = a || p.appendChild(t.createElement('div')), s = (De.exec(o) || [
              '',
              ''
            ])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ie.htmlPrefilter(o) + u[2], d = u[0]; d--;)
            a = a.lastChild;
          ie.merge(h, a.childNodes), a = p.firstChild, a.textContent = '';
        } else
          h.push(t.createTextNode(o));
    for (p.textContent = '', g = 0; o = h[g++];)
      if (r && ie.inArray(o, r) > -1)
        i && i.push(o);
      else if (l = ie.contains(o.ownerDocument, o), a = c(p.appendChild(o), 'script'), l && f(a), n)
        for (d = 0; o = a[d++];)
          Re.test(o.type || '') && n.push(o);
    return p;
  }
  function p() {
    return !0;
  }
  function h() {
    return !1;
  }
  function g() {
    try {
      return X.activeElement;
    } catch (e) {
    }
  }
  function m(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      'string' != typeof n && (r = r || n, n = void 0);
      for (s in t)
        m(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ('string' == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
      i = h;
    else if (!i)
      return e;
    return 1 === o && (a = i, i = function (e) {
      return ie().off(e), a.apply(this, arguments);
    }, i.guid = a.guid || (a.guid = ie.guid++)), e.each(function () {
      ie.event.add(this, t, i, r, n);
    });
  }
  function v(e, t) {
    return ie.nodeName(e, 'table') && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }
  function y(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }
  function b(e) {
    var t = Ue.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function w(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (xe.hasData(e) && (o = xe.access(e), a = xe.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++)
            ie.event.add(t, i, l[i][n]);
      }
      _e.hasData(e) && (s = _e.access(e), u = ie.extend({}, s), _e.set(t, u));
    }
  }
  function E(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && Ae.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
  }
  function T(e, t, n, r) {
    t = J.apply([], t);
    var i, o, a, s, u, l, f = 0, p = e.length, h = p - 1, g = t[0], m = ie.isFunction(g);
    if (m || p > 1 && 'string' == typeof g && !re.checkClone && He.test(g))
      return e.each(function (i) {
        var o = e.eq(i);
        m && (t[0] = g.call(this, i, o.html())), T(o, t, n, r);
      });
    if (p && (i = d(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (a = ie.map(c(i, 'script'), y), s = a.length; f < p; f++)
        u = i, f !== h && (u = ie.clone(u, !0, !0), s && ie.merge(a, c(u, 'script'))), n.call(e[f], u, f);
      if (s)
        for (l = a[a.length - 1].ownerDocument, ie.map(a, b), f = 0; f < s; f++)
          u = a[f], Re.test(u.type || '') && !xe.access(u, 'globalEval') && ie.contains(l, u) && (u.src ? ie._evalUrl && ie._evalUrl(u.src) : ie.globalEval(u.textContent.replace(Be, '')));
    }
    return e;
  }
  function x(e, t, n) {
    for (var r, i = t ? ie.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ie.cleanData(c(r)), r.parentNode && (n && ie.contains(r.ownerDocument, r) && f(c(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  function _(e, t) {
    var n = ie(t.createElement(e)).appendTo(t.body), r = ie.css(n[0], 'display');
    return n.detach(), r;
  }
  function S(e) {
    var t = X, n = We[e];
    return n || (n = _(e, t), 'none' !== n && n || (ze = (ze || ie('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = _(e, t), ze.detach()), We[e] = n), n;
  }
  function C(e, t, n) {
    var r, i, o, a, s = e.style;
    return n = n || Qe(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, '' !== a && void 0 !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), n && !re.pixelMarginRight() && $e.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + '' : a;
  }
  function I(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }
  function O(e) {
    if (e in tt)
      return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
      if ((e = et[n] + t) in tt)
        return e;
  }
  function N(e, t, n) {
    var r = Oe.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function P(e, t, n, r, i) {
    for (var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, a = 0; o < 4; o += 2)
      'margin' === n && (a += ie.css(e, n + Ne[o], !0, i)), r ? ('content' === n && (a -= ie.css(e, 'padding' + Ne[o], !0, i)), 'margin' !== n && (a -= ie.css(e, 'border' + Ne[o] + 'Width', !0, i))) : (a += ie.css(e, 'padding' + Ne[o], !0, i), 'padding' !== n && (a += ie.css(e, 'border' + Ne[o] + 'Width', !0, i)));
    return a;
  }
  function A(e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = Qe(e), a = 'border-box' === ie.css(e, 'boxSizing', !1, o);
    if (i <= 0 || null == i) {
      if (i = C(e, t, o), (i < 0 || null == i) && (i = e.style[t]), $e.test(i))
        return i;
      r = a && (re.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + P(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
  }
  function D(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      r = e[a], r.style && (o[a] = xe.get(r, 'olddisplay'), n = r.style.display, t ? (o[a] || 'none' !== n || (r.style.display = ''), '' === r.style.display && Pe(r) && (o[a] = xe.access(r, 'olddisplay', S(r.nodeName)))) : (i = Pe(r), 'none' === n && i || xe.set(r, 'olddisplay', i ? n : ie.css(r, 'display'))));
    for (a = 0; a < s; a++)
      r = e[a], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[a] || '' : 'none'));
    return e;
  }
  function R(e, t, n, r, i) {
    return new R.prototype.init(e, t, n, r, i);
  }
  function k() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = ie.now();
  }
  function j(e, t) {
    var n, r = 0, i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      n = Ne[r], i['margin' + n] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function M(e, t, n) {
    for (var r, i = (q.tweeners[t] || []).concat(q.tweeners['*']), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function L(e, t, n) {
    var r, i, o, a, s, u, l, c = this, f = {}, d = e.style, p = e.nodeType && Pe(e), h = xe.get(e, 'fxshow');
    n.queue || (s = ie._queueHooks(e, 'fx'), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
      s.unqueued || u();
    }), s.unqueued++, c.always(function () {
      c.always(function () {
        s.unqueued--, ie.queue(e, 'fx').length || s.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      d.overflow,
      d.overflowX,
      d.overflowY
    ], l = ie.css(e, 'display'), 'inline' === ('none' === l ? xe.get(e, 'olddisplay') || S(e.nodeName) : l) && 'none' === ie.css(e, 'float') && (d.display = 'inline-block')), n.overflow && (d.overflow = 'hidden', c.always(function () {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    }));
    for (r in t)
      if (i = t[r], it.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (p ? 'hide' : 'show')) {
          if ('show' !== i || !h || void 0 === h[r])
            continue;
          p = !0;
        }
        f[r] = h && h[r] || ie.style(e, r);
      } else
        l = void 0;
    if (ie.isEmptyObject(f))
      'inline' === ('none' === l ? S(e.nodeName) : l) && (d.display = l);
    else {
      h ? 'hidden' in h && (p = h.hidden) : h = xe.access(e, 'fxshow', {}), o && (h.hidden = !p), p ? ie(e).show() : c.done(function () {
        ie(e).hide();
      }), c.done(function () {
        var t;
        xe.remove(e, 'fxshow');
        for (t in f)
          ie.style(e, t, f[t]);
      });
      for (r in f)
        a = M(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0));
    }
  }
  function F(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ie.cssHooks[r]) && 'expand' in a) {
        o = a.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  function q(e, t, n) {
    var r, i, o = 0, a = q.prefilters.length, s = ie.Deferred().always(function () {
        delete u.elem;
      }), u = function () {
        if (i)
          return !1;
        for (var t = nt || k(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
          l.tweens[a].run(o);
        return s.notifyWith(e, [
          l,
          o,
          n
        ]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1);
      }, l = s.promise({
        elem: e,
        props: ie.extend({}, t),
        opts: ie.extend(!0, {
          specialEasing: {},
          easing: ie.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || k(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? l.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; n < r; n++)
            l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [
            l,
            1,
            0
          ]), s.resolveWith(e, [
            l,
            t
          ])) : s.rejectWith(e, [
            l,
            t
          ]), this;
        }
      }), c = l.props;
    for (F(c, l.opts.specialEasing); o < a; o++)
      if (r = q.prefilters[o].call(l, e, c, l.opts))
        return ie.isFunction(r.stop) && (ie._queueHooks(l.elem, l.opts.queue).stop = ie.proxy(r.stop, r)), r;
    return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function V(e) {
    return e.getAttribute && e.getAttribute('class') || '';
  }
  function H(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(be) || [];
      if (ie.isFunction(n))
        for (; r = o[i++];)
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function U(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, ie.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return 'string' != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
      }), u;
    }
    var o = {}, a = e === _t;
    return i(t.dataTypes[0]) || !o['*'] && i('*');
  }
  function B(e, t) {
    var n, r, i = ie.ajaxSettings.flatOptions || {};
    for (n in t)
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ie.extend(!0, e, r), e;
  }
  function z(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0];)
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n)
      o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o)
      return o !== u[0] && u.unshift(o), n[o];
  }
  function W(e, t, n, r) {
    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters)
        l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ('*' === o)
          o = u;
        else if ('*' !== u && u !== o) {
          if (!(a = l[u + ' ' + o] || l['* ' + o]))
            for (i in l)
              if (s = i.split(' '), s[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws)
              t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: a ? e : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  function G(e, t, n, r) {
    var i;
    if (ie.isArray(t))
      ie.each(t, function (t, i) {
        n || Ot.test(e) ? r(e, i) : G(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== ie.type(t))
      r(e, t);
    else
      for (i in t)
        G(e + '[' + i + ']', t[i], n, r);
  }
  function $(e) {
    return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var Q = [], X = e.document, Y = Q.slice, J = Q.concat, K = Q.push, Z = Q.indexOf, ee = {}, te = ee.toString, ne = ee.hasOwnProperty, re = {}, ie = function (e, t) {
      return new ie.fn.init(e, t);
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, ue = function (e, t) {
      return t.toUpperCase();
    };
  ie.fn = ie.prototype = {
    jquery: '2.2.4',
    constructor: ie,
    selector: '',
    length: 0,
    toArray: function () {
      return Y.call(this);
    },
    get: function (e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : Y.call(this);
    },
    pushStack: function (e) {
      var t = ie.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e) {
      return ie.each(this, e);
    },
    map: function (e) {
      return this.pushStack(ie.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(Y.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: K,
    sort: Q.sort,
    splice: Q.splice
  }, ie.extend = ie.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
    for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e)
          n = a[t], r = e[t], a !== r && (l && r && (ie.isPlainObject(r) || (i = ie.isArray(r))) ? (i ? (i = !1, o = n && ie.isArray(n) ? n : []) : o = n && ie.isPlainObject(n) ? n : {}, a[t] = ie.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ie.extend({
    expando: 'jQuery' + ('2.2.4' + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {
    },
    isFunction: function (e) {
      return 'function' === ie.type(e);
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      var t = e && e.toString();
      return !ie.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isPlainObject: function (e) {
      var t;
      if ('object' !== ie.type(e) || e.nodeType || ie.isWindow(e))
        return !1;
      if (e.constructor && !ne.call(e, 'constructor') && !ne.call(e.constructor.prototype || {}, 'isPrototypeOf'))
        return !1;
      for (t in e);
      return void 0 === t || ne.call(e, t);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? ee[te.call(e)] || 'object' : typeof e;
    },
    globalEval: function (e) {
      var t, n = eval;
      (e = ie.trim(e)) && (1 === e.indexOf('use strict') ? (t = X.createElement('script'), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(ae, 'ms-').replace(se, ue);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t) {
      var r, i = 0;
      if (n(e))
        for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i]))
            break;
      return e;
    },
    trim: function (e) {
      return null == e ? '' : (e + '').replace(oe, '');
    },
    makeArray: function (e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? ie.merge(r, 'string' == typeof e ? [e] : e) : K.call(r, e)), r;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : Z.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++)
        e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
        !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, r) {
      var i, o, a = 0, s = [];
      if (n(e))
        for (i = e.length; a < i; a++)
          null != (o = t(e[a], a, r)) && s.push(o);
      else
        for (a in e)
          null != (o = t(e[a], a, r)) && s.push(o);
      return J.apply([], s);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i;
      if ('string' == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e))
        return r = Y.call(arguments, 2), i = function () {
          return e.apply(t || this, r.concat(Y.call(arguments)));
        }, i.guid = e.guid = e.guid || ie.guid++, i;
    },
    now: Date.now,
    support: re
  }), 'function' == typeof Symbol && (ie.fn[Symbol.iterator] = Q[Symbol.iterator]), ie.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
    ee['[object ' + t + ']'] = t.toLowerCase();
  });
  var le = function (e) {
    function t(e, t, n, r) {
      var i, o, a, s, l, f, d, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
      if (n = n || [], 'string' != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
        return n;
      if (!r && ((t ? t.ownerDocument || t : F) !== P && N(t), t = t || P, D)) {
        if (11 !== g && (f = ge.exec(e)))
          if (i = f[1]) {
            if (9 === g) {
              if (!(a = t.getElementById(i)))
                return n;
              if (a.id === i)
                return n.push(a), n;
            } else if (h && (a = h.getElementById(i)) && M(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (f[2])
              return Y.apply(n, t.getElementsByTagName(e)), n;
            if ((i = f[3]) && b.getElementsByClassName && t.getElementsByClassName)
              return Y.apply(n, t.getElementsByClassName(i)), n;
          }
        if (b.qsa && !B[e + ' '] && (!R || !R.test(e))) {
          if (1 !== g)
            h = t, p = e;
          else if ('object' !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute('id')) ? s = s.replace(ve, '\\$&') : t.setAttribute('id', s = L), d = x(e), o = d.length, l = ce.test(s) ? '#' + s : '[id=\'' + s + '\']'; o--;)
              d[o] = l + ' ' + c(d[o]);
            p = d.join(','), h = me.test(e) && u(t.parentNode) || t;
          }
          if (p)
            try {
              return Y.apply(n, h.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              s === L && t.removeAttribute('id');
            }
        }
      }
      return S(e.replace(oe, '$1'), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > w.cacheLength && delete e[t.shift()], e[n + ' '] = r;
      }
      var t = [];
      return e;
    }
    function r(e) {
      return e[L] = !0, e;
    }
    function i(e) {
      var t = P.createElement('div');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = n.length; r--;)
        w.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
      if (r)
        return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;)
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function l() {
    }
    function c(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++)
        r += e[t].value;
      return r;
    }
    function f(e, t, n) {
      var r = t.dir, i = n && 'parentNode' === r, o = V++;
      return t.first ? function (t, n, o) {
        for (; t = t[r];)
          if (1 === t.nodeType || i)
            return e(t, n, o);
      } : function (t, n, a) {
        var s, u, l, c = [
            q,
            o
          ];
        if (a) {
          for (; t = t[r];)
            if ((1 === t.nodeType || i) && e(t, n, a))
              return !0;
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || i) {
              if (l = t[L] || (t[L] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === q && s[1] === o)
                return c[2] = s[2];
              if (u[r] = c, c[2] = e(t, n, a))
                return !0;
            }
      };
    }
    function d(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function p(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++)
        t(e, n[i], r);
      return r;
    }
    function h(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function g(e, t, n, i, o, a) {
      return i && !i[L] && (i = g(i)), o && !o[L] && (o = g(o, a)), r(function (r, a, s, u) {
        var l, c, f, d = [], g = [], m = a.length, v = r || p(t || '*', s.nodeType ? [s] : s, []), y = !e || !r && t ? v : h(v, d, e, s, u), b = n ? o || (r ? e : m || i) ? [] : a : y;
        if (n && n(y, b, s, u), i)
          for (l = h(b, g), i(l, [], s, u), c = l.length; c--;)
            (f = l[c]) && (b[g[c]] = !(y[g[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = b.length; c--;)
                (f = b[c]) && l.push(y[c] = f);
              o(null, b = [], l, u);
            }
            for (c = b.length; c--;)
              (f = b[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f));
          }
        } else
          b = h(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, u) : Y.apply(a, b);
      });
    }
    function m(e) {
      for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[' '], s = o ? 1 : 0, u = f(function (e) {
            return e === t;
          }, a, !0), l = f(function (e) {
            return K(t, e) > -1;
          }, a, !0), p = [function (e, n, r) {
              var i = !o && (r || n !== C) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return t = null, i;
            }]; s < i; s++)
        if (n = w.relative[e[s].type])
          p = [f(d(p), n)];
        else {
          if (n = w.filter[e[s].type].apply(null, e[s].matches), n[L]) {
            for (r = ++s; r < i && !w.relative[e[r].type]; r++);
            return g(s > 1 && d(p), s > 1 && c(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace(oe, '$1'), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && c(e));
          }
          p.push(n);
        }
      return d(p);
    }
    function v(e, n) {
      var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
          var c, f, d, p = 0, g = '0', m = r && [], v = [], y = C, b = r || o && w.find.TAG('*', l), E = q += null == y ? 1 : Math.random() || 0.1, T = b.length;
          for (l && (C = a === P || a || l); g !== T && null != (c = b[g]); g++) {
            if (o && c) {
              for (f = 0, a || c.ownerDocument === P || (N(c), s = !D); d = e[f++];)
                if (d(c, a || P, s)) {
                  u.push(c);
                  break;
                }
              l && (q = E);
            }
            i && ((c = !d && c) && p--, r && m.push(c));
          }
          if (p += g, i && g !== p) {
            for (f = 0; d = n[f++];)
              d(m, v, a, s);
            if (r) {
              if (p > 0)
                for (; g--;)
                  m[g] || v[g] || (v[g] = Q.call(u));
              v = h(v);
            }
            Y.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
          }
          return l && (q = E, C = y), m;
        };
      return i ? r(a) : a;
    }
    var y, b, w, E, T, x, _, S, C, I, O, N, P, A, D, R, k, j, M, L = 'sizzle' + 1 * new Date(), F = e.document, q = 0, V = 0, H = n(), U = n(), B = n(), z = function (e, t) {
        return e === t && (O = !0), 0;
      }, W = 1 << 31, G = {}.hasOwnProperty, $ = [], Q = $.pop, X = $.push, Y = $.push, J = $.slice, K = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
            return n;
        return -1;
      }, Z = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ee = '[\\x20\\t\\r\\n\\f]', te = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', ne = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]', re = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ne + ')*)|.*)\\)|)', ie = new RegExp(ee + '+', 'g'), oe = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'), ae = new RegExp('^' + ee + '*,' + ee + '*'), se = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'), ue = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'), le = new RegExp(re), ce = new RegExp('^' + te + '$'), fe = {
        ID: new RegExp('^#(' + te + ')'),
        CLASS: new RegExp('^\\.(' + te + ')'),
        TAG: new RegExp('^(' + te + '|[*])'),
        ATTR: new RegExp('^' + ne),
        PSEUDO: new RegExp('^' + re),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + Z + ')$', 'i'),
        needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
      }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = /'|\\/g, ye = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'), be = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      }, we = function () {
        N();
      };
    try {
      Y.apply($ = J.call(F.childNodes), F.childNodes), $[F.childNodes.length].nodeType;
    } catch (e) {
      Y = {
        apply: $.length ? function (e, t) {
          X.apply(e, J.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1;
        }
      };
    }
    b = t.support = {}, T = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }, N = t.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : F;
      return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, A = P.documentElement, D = !T(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', we, !1) : n.attachEvent && n.attachEvent('onunload', we)), b.attributes = i(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), b.getElementsByTagName = i(function (e) {
        return e.appendChild(P.createComment('')), !e.getElementsByTagName('*').length;
      }), b.getElementsByClassName = he.test(P.getElementsByClassName), b.getById = i(function (e) {
        return A.appendChild(e).id = L, !P.getElementsByName || !P.getElementsByName(L).length;
      }), b.getById ? (w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && D) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }, w.filter.ID = function (e) {
        var t = e.replace(ye, be);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete w.find.ID, w.filter.ID = function (e) {
        var t = e.replace(ye, be);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          for (; n = o[i++];)
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && D)
          return t.getElementsByClassName(e);
      }, k = [], R = [], (b.qsa = he.test(P.querySelectorAll)) && (i(function (e) {
        A.appendChild(e).innerHTML = '<a id=\'' + L + '\'></a><select id=\'' + L + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && R.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || R.push('\\[' + ee + '*(?:value|' + Z + ')'), e.querySelectorAll('[id~=' + L + '-]').length || R.push('~='), e.querySelectorAll(':checked').length || R.push(':checked'), e.querySelectorAll('a#' + L + '+*').length || R.push('.#.+[+~]');
      }), i(function (e) {
        var t = P.createElement('input');
        t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && R.push('name' + ee + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || R.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), R.push(',.*:');
      })), (b.matchesSelector = he.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function (e) {
        b.disconnectedMatch = j.call(e, 'div'), j.call(e, '[s!=\'\']:x'), k.push('!=', re);
      }), R = R.length && new RegExp(R.join('|')), k = k.length && new RegExp(k.join('|')), t = he.test(A.compareDocumentPosition), M = t || he.test(A.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e)
              return !0;
        return !1;
      }, z = t ? function (e, t) {
        if (e === t)
          return O = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === F && M(F, e) ? -1 : t === P || t.ownerDocument === F && M(F, t) ? 1 : I ? K(I, e) - K(I, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t)
          return O = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
        if (!i || !o)
          return e === P ? -1 : t === P ? 1 : i ? -1 : o ? 1 : I ? K(I, e) - K(I, t) : 0;
        if (i === o)
          return a(e, t);
        for (n = e; n = n.parentNode;)
          s.unshift(n);
        for (n = t; n = n.parentNode;)
          u.unshift(n);
        for (; s[r] === u[r];)
          r++;
        return r ? a(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0;
      }, P) : P;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== P && N(e), n = n.replace(ue, '=\'$1\']'), b.matchesSelector && D && !B[n + ' '] && (!k || !k.test(n)) && (!R || !R.test(n)))
        try {
          var r = j.call(e, n);
          if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return r;
        } catch (e) {
        }
      return t(n, P, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== P && N(e), M(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== P && N(e);
      var n = w.attrHandle[t.toLowerCase()], r = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
      return void 0 !== r ? r : b.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, t.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }, t.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (O = !b.detectDuplicates, I = !b.sortStable && e.slice(0), e.sort(z), O) {
        for (; t = e[i++];)
          t === e[i] && (r = n.push(i));
        for (; r--;)
          e.splice(n[r], 1);
      }
      return I = null, e;
    }, E = t.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += E(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r++];)
          n += E(t);
      return n;
    }, w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || '').replace(ye, be), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && le.test(n) && (t = x(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ye, be).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = H[e + ' '];
          return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && H(e, function (e) {
            return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? '!=' === n : !n || (o += '', '=' === n ? o === r : '!=' === n ? o !== r : '^=' === n ? r && 0 === o.indexOf(r) : '*=' === n ? r && o.indexOf(r) > -1 : '$=' === n ? r && o.slice(-r.length) === r : '~=' === n ? (' ' + o.replace(ie, ' ') + ' ').indexOf(r) > -1 : '|=' === n && (o === r || o.slice(0, r.length + 1) === r + '-'));
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l, c, f, d, p, h, g = o !== a ? 'nextSibling' : 'previousSibling', m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
            if (m) {
              if (o) {
                for (; g;) {
                  for (d = t; d = d[g];)
                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                      return !1;
                  h = g = 'only' === e && !h && 'nextSibling';
                }
                return !0;
              }
              if (h = [a ? m.firstChild : m.lastChild], a && y) {
                for (d = m, f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === q && l[1], b = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                  if (1 === d.nodeType && ++b && d === t) {
                    c[e] = [
                      q,
                      p,
                      b
                    ];
                    break;
                  }
              } else if (y && (d = t, f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === q && l[1], b = p), !1 === b)
                for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [
                    q,
                    b
                  ]), d !== t)););
              return (b -= i) === r || b % r == 0 && b / r >= 0;
            }
          };
        },
        PSEUDO: function (e, n) {
          var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
          return o[L] ? o(n) : o.length > 1 ? (i = [
            e,
            e,
            '',
            n
          ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), a = i.length; a--;)
              r = K(e, i[a]), e[r] = !(t[r] = i[a]);
          }) : function (e) {
            return o(e, 0, i);
          }) : o;
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [], n = [], i = _(e.replace(oe, '$1'));
          return i[L] ? r(function (e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;)
              (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }),
        contains: r(function (e) {
          return e = e.replace(ye, be), function (t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
          };
        }),
        lang: r(function (e) {
          return ce.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ye, be).toLowerCase(), function (t) {
            var n;
            do {
              if (n = D ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === A;
        },
        focus: function (e) {
          return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return !1 === e.disabled;
        },
        disabled: function (e) {
          return !0 === e.disabled;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !w.pseudos.empty(e);
        },
        header: function (e) {
          return pe.test(e.nodeName);
        },
        input: function (e) {
          return de.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
        },
        first: s(function () {
          return [0];
        }),
        last: s(function (e, t) {
          return [t - 1];
        }),
        eq: s(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: s(function (e, t) {
          for (var n = 0; n < t; n += 2)
            e.push(n);
          return e;
        }),
        odd: s(function (e, t) {
          for (var n = 1; n < t; n += 2)
            e.push(n);
          return e;
        }),
        lt: s(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: s(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;)
            e.push(r);
          return e;
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (y in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      w.pseudos[y] = function (e) {
        return function (t) {
          return 'input' === t.nodeName.toLowerCase() && t.type === e;
        };
      }(y);
    for (y in {
        submit: !0,
        reset: !0
      })
      w.pseudos[y] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      }(y);
    return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), x = t.tokenize = function (e, n) {
      var r, i, o, a, s, u, l, c = U[e + ' '];
      if (c)
        return n ? 0 : c.slice(0);
      for (s = e, u = [], l = w.preFilter; s;) {
        r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(oe, ' ')
        }), s = s.slice(r.length));
        for (a in w.filter)
          !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
            value: r,
            type: a,
            matches: i
          }), s = s.slice(r.length));
        if (!r)
          break;
      }
      return n ? s.length : s ? t.error(e) : U(e, u).slice(0);
    }, _ = t.compile = function (e, t) {
      var n, r = [], i = [], o = B[e + ' '];
      if (!o) {
        for (t || (t = x(e)), n = t.length; n--;)
          o = m(t[n]), o[L] ? r.push(o) : i.push(o);
        o = B(e, v(i, r)), o.selector = e;
      }
      return o;
    }, S = t.select = function (e, t, n, r) {
      var i, o, a, s, l, f = 'function' == typeof e && e, d = !r && x(e = f.selector || e);
      if (n = n || [], 1 === d.length) {
        if (o = d[0] = d[0].slice(0), o.length > 2 && 'ID' === (a = o[0]).type && b.getById && 9 === t.nodeType && D && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(ye, be), t) || [])[0]))
            return n;
          f && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
          if ((l = w.find[s]) && (r = l(a.matches[0].replace(ye, be), me.test(o[0].type) && u(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && c(o)))
              return Y.apply(n, r), n;
            break;
          }
      }
      return (f || _(e, d))(r, t, !D, n, !t || me.test(e) && u(t.parentNode) || t), n;
    }, b.sortStable = L.split('').sort(z).join('') === L, b.detectDuplicates = !!O, N(), b.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(P.createElement('div'));
    }), i(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || o('type|href|height|width', function (e, t, n) {
      if (!n)
        return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }), b.attributes && i(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || o('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase())
        return e.defaultValue;
    }), i(function (e) {
      return null == e.getAttribute('disabled');
    }) || o(Z, function (e, t, n) {
      var r;
      if (!n)
        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), t;
  }(e);
  ie.find = le, ie.expr = le.selectors, ie.expr[':'] = ie.expr.pseudos, ie.uniqueSort = ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
  var ce = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && ie(e).is(n))
            break;
          r.push(e);
        }
      return r;
    }, fe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }, de = ie.expr.match.needsContext, pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
  ie.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ie.fn.extend({
    find: function (e) {
      var t, n = this.length, r = [], i = this;
      if ('string' != typeof e)
        return this.pushStack(ie(e).filter(function () {
          for (t = 0; t < n; t++)
            if (ie.contains(i[t], this))
              return !0;
        }));
      for (t = 0; t < n; t++)
        ie.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + ' ' + e : e, r;
    },
    filter: function (e) {
      return this.pushStack(r(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(r(this, e || [], !0));
    },
    is: function (e) {
      return !!r(this, 'string' == typeof e && de.test(e) ? ie(e) : e || [], !1).length;
    }
  });
  var ge, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (ie.fn.init = function (e, t, n) {
    var r, i;
    if (!e)
      return this;
    if (n = n || ge, 'string' == typeof e) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
          null,
          e,
          null
        ] : me.exec(e)) || !r[1] && t)
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), pe.test(r[1]) && ie.isPlainObject(t))
          for (r in t)
            ie.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return i = X.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = X, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this));
  }).prototype = ie.fn, ge = ie(X);
  var ve = /^(?:parents|prev(?:Until|All))/, ye = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ie.fn.extend({
    has: function (e) {
      var t = ie(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (ie.contains(this, t[e]))
            return !0;
      });
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], a = de.test(e) || 'string' != typeof e ? ie(e, t || this.context) : 0; r < i; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? ie.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? Z.call(ie(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ie.uniqueSort(ie.merge(this.get(), ie(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ie.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return ce(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return ce(e, 'parentNode', n);
    },
    next: function (e) {
      return i(e, 'nextSibling');
    },
    prev: function (e) {
      return i(e, 'previousSibling');
    },
    nextAll: function (e) {
      return ce(e, 'nextSibling');
    },
    prevAll: function (e) {
      return ce(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return ce(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return ce(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return fe((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return fe(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || ie.merge([], e.childNodes);
    }
  }, function (e, t) {
    ie.fn[e] = function (n, r) {
      var i = ie.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || ie.uniqueSort(i), ve.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var be = /\S+/g;
  ie.Callbacks = function (e) {
    e = 'string' == typeof e ? o(e) : ie.extend({}, e);
    var t, n, r, i, a = [], s = [], u = -1, l = function () {
        for (i = e.once, r = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < a.length;)
            !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, n = !1);
        e.memory || (n = !1), t = !1, i && (a = n ? [] : '');
      }, c = {
        add: function () {
          return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) {
            ie.each(n, function (n, r) {
              ie.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && 'string' !== ie.type(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function () {
          return ie.each(arguments, function (e, t) {
            for (var n; (n = ie.inArray(t, a, n)) > -1;)
              a.splice(n, 1), n <= u && u--;
          }), this;
        },
        has: function (e) {
          return e ? ie.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return i = s = [], a = n = '', this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return i = s = [], n || (a = n = ''), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return i || (n = n || [], n = [
            e,
            n.slice ? n.slice() : n
          ], s.push(n), t || l()), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      };
    return c;
  }, ie.extend({
    Deferred: function (e) {
      var t = [
          [
            'resolve',
            'done',
            ie.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            ie.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            ie.Callbacks('memory')
          ]
        ], n = 'pending', r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return ie.Deferred(function (n) {
              ie.each(t, function (t, o) {
                var a = ie.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && ie.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + 'With'](this === r ? n.promise() : this, a ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          promise: function (e) {
            return null != e ? ie.extend(e, r) : r;
          }
        }, i = {};
      return r.pipe = r.then, ie.each(t, function (e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ie.Deferred(), l = function (e, n, r) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
          };
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
          o[i] && ie.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
      return s || u.resolveWith(r, o), u.promise();
    }
  });
  var we;
  ie.fn.ready = function (e) {
    return ie.ready.promise().done(e), this;
  }, ie.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? ie.readyWait++ : ie.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (we.resolveWith(X, [ie]), ie.fn.triggerHandler && (ie(X).triggerHandler('ready'), ie(X).off('ready'))));
    }
  }), ie.ready.promise = function (t) {
    return we || (we = ie.Deferred(), 'complete' === X.readyState || 'loading' !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(ie.ready) : (X.addEventListener('DOMContentLoaded', a), e.addEventListener('load', a))), we.promise(t);
  }, ie.ready.promise();
  var Ee = function (e, t, n, r, i, o, a) {
      var s = 0, u = e.length, l = null == n;
      if ('object' === ie.type(n)) {
        i = !0;
        for (s in n)
          Ee(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(ie(e), n);
        })), t))
        for (; s < u; s++)
          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, Te = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  s.uid = 1, s.prototype = {
    register: function (e, t) {
      var n = t || {};
      return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        writable: !0,
        configurable: !0
      }), e[this.expando];
    },
    cache: function (e) {
      if (!Te(e))
        return {};
      var t = e[this.expando];
      return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ('string' == typeof t)
        i[t] = n;
      else
        for (r in t)
          i[r] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
    },
    access: function (e, t, n) {
      var r;
      return void 0 === t || t && 'string' == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n, r, i, o = e[this.expando];
      if (void 0 !== o) {
        if (void 0 === t)
          this.register(e);
        else {
          ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (i = ie.camelCase(t), t in o ? r = [
            t,
            i
          ] : (r = i, r = r in o ? [r] : r.match(be) || [])), n = r.length;
          for (; n--;)
            delete o[r[n]];
        }
        (void 0 === t || ie.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !ie.isEmptyObject(t);
    }
  };
  var xe = new s(), _e = new s(), Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ce = /[A-Z]/g;
  ie.extend({
    hasData: function (e) {
      return _e.hasData(e) || xe.hasData(e);
    },
    data: function (e, t, n) {
      return _e.access(e, t, n);
    },
    removeData: function (e, t) {
      _e.remove(e, t);
    },
    _data: function (e, t, n) {
      return xe.access(e, t, n);
    },
    _removeData: function (e, t) {
      xe.remove(e, t);
    }
  }), ie.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0], a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = _e.get(o), 1 === o.nodeType && !xe.get(o, 'hasDataAttrs'))) {
          for (n = a.length; n--;)
            a[n] && (r = a[n].name, 0 === r.indexOf('data-') && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
          xe.set(o, 'hasDataAttrs', !0);
        }
        return i;
      }
      return 'object' == typeof e ? this.each(function () {
        _e.set(this, e);
      }) : Ee(this, function (t) {
        var n, r;
        if (o && void 0 === t) {
          if (void 0 !== (n = _e.get(o, e) || _e.get(o, e.replace(Ce, '-$&').toLowerCase())))
            return n;
          if (r = ie.camelCase(e), void 0 !== (n = _e.get(o, r)))
            return n;
          if (void 0 !== (n = u(o, r, void 0)))
            return n;
        } else
          r = ie.camelCase(e), this.each(function () {
            var n = _e.get(this, r);
            _e.set(this, r, t), e.indexOf('-') > -1 && void 0 !== n && _e.set(this, e, t);
          });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        _e.remove(this, e);
      });
    }
  }), ie.extend({
    queue: function (e, t, n) {
      var r;
      if (e)
        return t = (t || 'fx') + 'queue', r = xe.get(e, t), n && (!r || ie.isArray(n) ? r = xe.access(e, t, ie.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = ie.queue(e, t), r = n.length, i = n.shift(), o = ie._queueHooks(e, t), a = function () {
          ie.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return xe.get(e, n) || xe.access(e, n, {
        empty: ie.Callbacks('once memory').add(function () {
          xe.remove(e, [
            t + 'queue',
            n
          ]);
        })
      });
    }
  }), ie.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = ie.queue(this, e, t);
        ie._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && ie.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ie.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, t) {
      var n, r = 1, i = ie.Deferred(), o = this, a = this.length, s = function () {
          --r || i.resolveWith(o, [o]);
        };
      for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--;)
        (n = xe.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp('^(?:([+-])=|)(' + Ie + ')([a-z%]*)$', 'i'), Ne = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], Pe = function (e, t) {
      return e = t || e, 'none' === ie.css(e, 'display') || !ie.contains(e.ownerDocument, e);
    }, Ae = /^(?:checkbox|radio)$/i, De = /<([\w:-]+)/, Re = /^$|\/(?:java|ecma)script/i, ke = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ke.optgroup = ke.option, ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td;
  var je = /<|&#?\w+;/;
  !function () {
    var e = X.createDocumentFragment(), t = e.appendChild(X.createElement('div')), n = X.createElement('input');
    n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = '<textarea>x</textarea>', re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();
  var Me = /^key/, Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Fe = /^([^.]*)(?:\.(.+)|)/;
  ie.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, p, h, g, m = xe.get(e);
      if (m)
        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ie.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
            return void 0 !== ie && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || '').match(be) || [''], l = t.length; l--;)
          s = Fe.exec(t[l]) || [], p = g = s[1], h = (s[2] || '').split('.').sort(), p && (f = ie.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = ie.event.special[p] || {}, c = ie.extend({
            type: p,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && ie.expr.match.needsContext.test(i),
            namespace: h.join('.')
          }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), ie.event.global[p] = !0);
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, p, h, g, m = xe.hasData(e) && xe.get(e);
      if (m && (u = m.events)) {
        for (t = (t || '').match(be) || [''], l = t.length; l--;)
          if (s = Fe.exec(t[l]) || [], p = g = s[1], h = (s[2] || '').split('.').sort(), p) {
            for (f = ie.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = d.length; o--;)
              c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || ie.removeEvent(e, p, m.handle), delete u[p]);
          } else
            for (p in u)
              ie.event.remove(e, p + t[l], n, r, !0);
        ie.isEmptyObject(u) && xe.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      e = ie.event.fix(e);
      var t, n, r, i, o, a = [], s = Y.call(arguments), u = (xe.get(this, 'events') || {})[e.type] || [], l = ie.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
            e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
      if (s && u.nodeType && ('click' !== e.type || isNaN(e.button) || e.button < 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || 'click' !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              o = t[n], i = o.selector + ' ', void 0 === r[i] && (r[i] = o.needsContext ? ie(i, this).index(u) > -1 : ie.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && a.push({
              elem: u,
              handlers: r
            });
          }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
      }
    },
    fix: function (e) {
      if (e[ie.expando])
        return e;
      var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;)
        n = r[t], e[n] = o[n];
      return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== g() && this.focus)
            return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === g() && this.blur)
            return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && ie.nodeName(this, 'input'))
            return this.click(), !1;
        },
        _default: function (e) {
          return ie.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ie.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ie.Event = function (e, t) {
    if (!(this instanceof ie.Event))
      return new ie.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : h) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), this[ie.expando] = !0;
  }, ie.Event.prototype = {
    constructor: ie.Event,
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ie.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, t) {
    ie.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return i && (i === r || ie.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), ie.fn.extend({
    on: function (e, t, n, r) {
      return m(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return m(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function () {
        ie.event.remove(this, e, n, t);
      });
    }
  });
  var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ve = /<script|<style|<link/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i, Ue = /^true\/(.*)/, Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ie.extend({
    htmlPrefilter: function (e) {
      return e.replace(qe, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var r, i, o, a, s = e.cloneNode(!0), u = ie.contains(e.ownerDocument, e);
      if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
        for (a = c(s), o = c(e), r = 0, i = o.length; r < i; r++)
          E(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || c(e), a = a || c(s), r = 0, i = o.length; r < i; r++)
            w(o[r], a[r]);
        else
          w(e, s);
      return a = c(s, 'script'), a.length > 0 && f(a, !u && c(e, 'script')), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ie.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Te(n)) {
          if (t = n[xe.expando]) {
            if (t.events)
              for (r in t.events)
                i[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
            n[xe.expando] = void 0;
          }
          n[_e.expando] && (n[_e.expando] = void 0);
        }
    }
  }), ie.fn.extend({
    domManip: T,
    detach: function (e) {
      return x(this, e, !0);
    },
    remove: function (e) {
      return x(this, e);
    },
    text: function (e) {
      return Ee(this, function (e) {
        return void 0 === e ? ie.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return T(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          v(this, e).appendChild(e);
        }
      });
    },
    prepend: function () {
      return T(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = v(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return T(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return T(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++)
        1 === e.nodeType && (ie.cleanData(c(e, !1)), e.textContent = '');
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ie.clone(this, e, t);
      });
    },
    html: function (e) {
      return Ee(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType)
          return t.innerHTML;
        if ('string' == typeof e && !Ve.test(e) && !ke[(De.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          e = ie.htmlPrefilter(e);
          try {
            for (; n < r; n++)
              t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(c(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {
          }
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = [];
      return T(this, arguments, function (t) {
        var n = this.parentNode;
        ie.inArray(this, e) < 0 && (ie.cleanData(c(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), ie.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    ie.fn[e] = function (e) {
      for (var n, r = [], i = ie(e), o = i.length - 1, a = 0; a <= o; a++)
        n = a === o ? this : this.clone(!0), ie(i[a])[t](n), K.apply(r, n.get());
      return this.pushStack(r);
    };
  });
  var ze, We = {
      HTML: 'block',
      BODY: 'block'
    }, Ge = /^margin/, $e = new RegExp('^(' + Ie + ')(?!px)[a-z%]+$', 'i'), Qe = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t);
    }, Xe = function (e, t, n, r) {
      var i, o, a = {};
      for (o in t)
        a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = a[o];
      return i;
    }, Ye = X.documentElement;
  !function () {
    function t() {
      s.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', s.innerHTML = '', Ye.appendChild(a);
      var t = e.getComputedStyle(s);
      n = '1%' !== t.top, o = '2px' === t.marginLeft, r = '4px' === t.width, s.style.marginRight = '50%', i = '4px' === t.marginRight, Ye.removeChild(a);
    }
    var n, r, i, o, a = X.createElement('div'), s = X.createElement('div');
    s.style && (s.style.backgroundClip = 'content-box', s.cloneNode(!0).style.backgroundClip = '', re.clearCloneStyle = 'content-box' === s.style.backgroundClip, a.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', a.appendChild(s), ie.extend(re, {
      pixelPosition: function () {
        return t(), n;
      },
      boxSizingReliable: function () {
        return null == r && t(), r;
      },
      pixelMarginRight: function () {
        return null == r && t(), i;
      },
      reliableMarginLeft: function () {
        return null == r && t(), o;
      },
      reliableMarginRight: function () {
        var t, n = s.appendChild(X.createElement('div'));
        return n.style.cssText = s.style.cssText = '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', n.style.marginRight = n.style.width = '0', s.style.width = '1px', Ye.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ye.removeChild(a), s.removeChild(n), t;
      }
    }));
  }();
  var Je = /^(none|table(?!-c[ea]).+)/, Ke = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, Ze = {
      letterSpacing: '0',
      fontWeight: '400'
    }, et = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ], tt = X.createElement('div').style;
  ie.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = C(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = ie.camelCase(t), u = e.style;
        if (t = ie.cssProps[s] || (ie.cssProps[s] = O(s) || s), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n)
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        o = typeof n, 'string' === o && (i = Oe.exec(n)) && i[1] && (n = l(e, t, i), o = 'number'), null != n && n === n && ('number' === o && (n += i && i[3] || (ie.cssNumber[s] ? '' : 'px')), re.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = ie.camelCase(t);
      return t = ie.cssProps[s] || (ie.cssProps[s] = O(s) || s), a = ie.cssHooks[t] || ie.cssHooks[s], a && 'get' in a && (i = a.get(e, !0, n)), void 0 === i && (i = C(e, t, r)), 'normal' === i && t in Ze && (i = Ze[t]), '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ie.each([
    'height',
    'width'
  ], function (e, t) {
    ie.cssHooks[t] = {
      get: function (e, n, r) {
        if (n)
          return Je.test(ie.css(e, 'display')) && 0 === e.offsetWidth ? Xe(e, Ke, function () {
            return A(e, t, r);
          }) : A(e, t, r);
      },
      set: function (e, n, r) {
        var i, o = r && Qe(e), a = r && P(e, t, r, 'border-box' === ie.css(e, 'boxSizing', !1, o), o);
        return a && (i = Oe.exec(n)) && 'px' !== (i[3] || 'px') && (e.style[t] = n, n = ie.css(e, t)), N(e, n, a);
      }
    };
  }), ie.cssHooks.marginLeft = I(re.reliableMarginLeft, function (e, t) {
    if (t)
      return (parseFloat(C(e, 'marginLeft')) || e.getBoundingClientRect().left - Xe(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + 'px';
  }), ie.cssHooks.marginRight = I(re.reliableMarginRight, function (e, t) {
    if (t)
      return Xe(e, { display: 'inline-block' }, C, [
        e,
        'marginRight'
      ]);
  }), ie.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    ie.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
          i[e + Ne[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, Ge.test(e) || (ie.cssHooks[e + t].set = N);
  }), ie.fn.extend({
    css: function (e, t) {
      return Ee(this, function (e, t, n) {
        var r, i, o = {}, a = 0;
        if (ie.isArray(t)) {
          for (r = Qe(e), i = t.length; a < i; a++)
            o[t[a]] = ie.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function () {
      return D(this, !0);
    },
    hide: function () {
      return D(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Pe(this) ? ie(this).show() : ie(this).hide();
      });
    }
  }), ie.Tween = R, R.prototype = {
    constructor: R,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ie.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = R.propHooks[this.prop];
      return e && e.get ? e.get(this) : R.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = R.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this;
    }
  }, R.prototype.init.prototype = R.prototype, R.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ie.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0);
      },
      set: function (e) {
        ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ie.cssProps[e.prop]] && !ie.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ie.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ie.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    },
    _default: 'swing'
  }, ie.fx = R.prototype.init, ie.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
  ie.Animation = ie.extend(q, {
    tweeners: {
      '*': [function (e, t) {
          var n = this.createTween(e, t);
          return l(n.elem, e, Oe.exec(t), n), n;
        }]
    },
    tweener: function (e, t) {
      ie.isFunction(e) ? (t = e, e = ['*']) : e = e.match(be);
      for (var n, r = 0, i = e.length; r < i; r++)
        n = e[r], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t);
    },
    prefilters: [L],
    prefilter: function (e, t) {
      t ? q.prefilters.unshift(e) : q.prefilters.push(e);
    }
  }), ie.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? ie.extend({}, e) : {
      complete: n || !n && t || ie.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !ie.isFunction(t) && t
    };
    return r.duration = ie.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue);
    }, r;
  }, ie.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Pe).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = ie.isEmptyObject(e), o = ie.speed(t, n, r), a = function () {
          var t = q(this, ie.extend({}, e), o);
          (i || xe.get(this, 'finish')) && t.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = ie.timers, a = xe.get(this);
        if (i)
          a[i] && a[i].stop && r(a[i]);
        else
          for (i in a)
            a[i] && a[i].stop && ot.test(i) && r(a[i]);
        for (i = o.length; i--;)
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || ie.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = e || 'fx'), this.each(function () {
        var t, n = xe.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = ie.timers, a = r ? r.length : 0;
        for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), ie.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = ie.fn[t];
    ie.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, i);
    };
  }), ie.each({
    slideDown: j('show'),
    slideUp: j('hide'),
    slideToggle: j('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    ie.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), ie.timers = [], ie.fx.tick = function () {
    var e, t = 0, n = ie.timers;
    for (nt = ie.now(); t < n.length; t++)
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ie.fx.stop(), nt = void 0;
  }, ie.fx.timer = function (e) {
    ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop();
  }, ie.fx.interval = 13, ie.fx.start = function () {
    rt || (rt = e.setInterval(ie.fx.tick, ie.fx.interval));
  }, ie.fx.stop = function () {
    e.clearInterval(rt), rt = null;
  }, ie.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ie.fn.delay = function (t, n) {
    return t = ie.fx ? ie.fx.speeds[t] || t : t, n = n || 'fx', this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = X.createElement('input'), t = X.createElement('select'), n = t.appendChild(X.createElement('option'));
    e.type = 'checkbox', re.checkOn = '' !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = X.createElement('input'), e.value = 't', e.type = 'radio', re.radioValue = 't' === e.value;
  }();
  var at, st = ie.expr.attrHandle;
  ie.fn.extend({
    attr: function (e, t) {
      return Ee(this, ie.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ie.removeAttr(this, e);
      });
    }
  }), ie.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return void 0 === e.getAttribute ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), i = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void ie.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : (r = ie.find.attr(e, t), null == r ? void 0 : r));
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!re.radioValue && 'radio' === t && ie.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(be);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];)
          r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    }
  }), at = {
    set: function (e, t, n) {
      return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = st[t] || ie.find.attr;
    st[t] = function (e, t, r) {
      var i, o;
      return r || (o = st[t], st[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, st[t] = o), i;
    };
  });
  var ut = /^(?:input|select|textarea|button)$/i, lt = /^(?:a|area)$/i;
  ie.fn.extend({
    prop: function (e, t) {
      return Ee(this, ie.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ie.propFix[e] || e];
      });
    }
  }), ie.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return 1 === o && ie.isXMLDoc(e) || (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ie.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : ut.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: 'htmlFor',
      class: 'className'
    }
  }), re.optSelected || (ie.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ie.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    ie.propFix[this.toLowerCase()] = this;
  });
  var ct = /[\t\r\n\f]/g;
  ie.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, a, s, u = 0;
      if (ie.isFunction(e))
        return this.each(function (t) {
          ie(this).addClass(e.call(this, t, V(this)));
        });
      if ('string' == typeof e && e)
        for (t = e.match(be) || []; n = this[u++];)
          if (i = V(n), r = 1 === n.nodeType && (' ' + i + ' ').replace(ct, ' ')) {
            for (a = 0; o = t[a++];)
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            s = ie.trim(r), i !== s && n.setAttribute('class', s);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, a, s, u = 0;
      if (ie.isFunction(e))
        return this.each(function (t) {
          ie(this).removeClass(e.call(this, t, V(this)));
        });
      if (!arguments.length)
        return this.attr('class', '');
      if ('string' == typeof e && e)
        for (t = e.match(be) || []; n = this[u++];)
          if (i = V(n), r = 1 === n.nodeType && (' ' + i + ' ').replace(ct, ' ')) {
            for (a = 0; o = t[a++];)
              for (; r.indexOf(' ' + o + ' ') > -1;)
                r = r.replace(' ' + o + ' ', ' ');
            s = ie.trim(r), i !== s && n.setAttribute('class', s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function (n) {
        ie(this).toggleClass(e.call(this, n, V(this), t), t);
      }) : this.each(function () {
        var t, r, i, o;
        if ('string' === n)
          for (r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];)
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else
          void 0 !== e && 'boolean' !== n || (t = V(this), t && xe.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : xe.get(this, '__className__') || ''));
      });
    },
    hasClass: function (e) {
      var t, n, r = 0;
      for (t = ' ' + e + ' '; n = this[r++];)
        if (1 === n.nodeType && (' ' + V(n) + ' ').replace(ct, ' ').indexOf(t) > -1)
          return !0;
      return !1;
    }
  });
  var ft = /\r/g, dt = /[\x20\t\r\n\f]+/g;
  ie.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length)
          return r = ie.isFunction(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : ie.isArray(i) && (i = ie.map(i, function (e) {
              return null == e ? '' : e + '';
            })), (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, i, 'value') || (this.value = i));
          });
        if (i)
          return (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : (n = i.value, 'string' == typeof n ? n.replace(ft, '') : null == n ? '' : n);
      }
    }
  }), ie.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ie.find.attr(e, 'value');
          return null != t ? t : ie.trim(ie.text(e)).replace(dt, ' ');
        }
      },
      select: {
        get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
            if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, 'optgroup'))) {
              if (t = ie(n).val(), o)
                return t;
              a.push(t);
            }
          return a;
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
            r = i[a], (r.selected = ie.inArray(ie.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ie.each([
    'radio',
    'checkbox'
  ], function () {
    ie.valHooks[this] = {
      set: function (e, t) {
        if (ie.isArray(t))
          return e.checked = ie.inArray(ie(e).val(), t) > -1;
      }
    }, re.checkOn || (ie.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var pt = /^(?:focusinfocus|focusoutblur)$/;
  ie.extend(ie.event, {
    trigger: function (t, n, r, i) {
      var o, a, s, u, l, c, f, d = [r || X], p = ne.call(t, 'type') ? t.type : t, h = ne.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (a = s = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !pt.test(p + ie.event.triggered) && (p.indexOf('.') > -1 && (h = p.split('.'), p = h.shift(), h.sort()), l = p.indexOf(':') < 0 && 'on' + p, t = t[ie.expando] ? t : new ie.Event(p, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), f = ie.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!i && !f.noBubble && !ie.isWindow(r)) {
          for (u = f.delegateType || p, pt.test(u + p) || (a = a.parentNode); a; a = a.parentNode)
            d.push(a), s = a;
          s === (r.ownerDocument || X) && d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped();)
          t.type = o > 1 ? u : f.bindType || p, c = (xe.get(a, 'events') || {})[t.type] && xe.get(a, 'handle'), c && c.apply(a, n), (c = l && a[l]) && c.apply && Te(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
        return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Te(r) || l && ie.isFunction(r[p]) && !ie.isWindow(r) && (s = r[l], s && (r[l] = null), ie.event.triggered = p, r[p](), ie.event.triggered = void 0, s && (r[l] = s)), t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = ie.extend(new ie.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ie.event.trigger(r, null, t);
    }
  }), ie.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        ie.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n)
        return ie.event.trigger(e, t, n, !0);
    }
  }), ie.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    ie.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), ie.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), re.focusin = 'onfocusin' in e, re.focusin || ie.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = function (e) {
      ie.event.simulate(t, e.target, ie.event.fix(e));
    };
    ie.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this, i = xe.access(r, t);
        i || r.addEventListener(e, n, !0), xe.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = this.ownerDocument || this, i = xe.access(r, t) - 1;
        i ? xe.access(r, t, i) : (r.removeEventListener(e, n, !0), xe.remove(r, t));
      }
    };
  });
  var ht = e.location, gt = ie.now(), mt = /\?/;
  ie.parseJSON = function (e) {
    return JSON.parse(e + '');
  }, ie.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t)
      return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return n && !n.getElementsByTagName('parsererror').length || ie.error('Invalid XML: ' + t), n;
  };
  var vt = /#.*$/, yt = /([?&])_=[^&]*/, bt = /^(.*?):[ \t]*([^\r\n]*)$/gm, wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Et = /^(?:GET|HEAD)$/, Tt = /^\/\//, xt = {}, _t = {}, St = '*/'.concat('*'), Ct = X.createElement('a');
  Ct.href = ht.href, ie.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ht.href,
      type: 'GET',
      isLocal: wt.test(ht.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': St,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': ie.parseJSON,
        'text xml': ie.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? B(B(e, ie.ajaxSettings), t) : B(ie.ajaxSettings, e);
    },
    ajaxPrefilter: H(xt),
    ajaxTransport: H(_t),
    ajax: function (t, n) {
      function r(t, n, r, s) {
        var l, f, y, b, E, x = n;
        2 !== w && (w = 2, u && e.clearTimeout(u), i = void 0, a = s || '', T.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = z(d, T, r)), b = W(d, b, T, l), l ? (d.ifModified && (E = T.getResponseHeader('Last-Modified'), E && (ie.lastModified[o] = E), (E = T.getResponseHeader('etag')) && (ie.etag[o] = E)), 204 === t || 'HEAD' === d.type ? x = 'nocontent' : 304 === t ? x = 'notmodified' : (x = b.state, f = b.data, y = b.error, l = !y)) : (y = x, !t && x || (x = 'error', t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + '', l ? g.resolveWith(p, [
          f,
          x,
          T
        ]) : g.rejectWith(p, [
          T,
          x,
          y
        ]), T.statusCode(v), v = void 0, c && h.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          T,
          d,
          l ? f : y
        ]), m.fireWith(p, [
          T,
          x
        ]), c && (h.trigger('ajaxComplete', [
          T,
          d
        ]), --ie.active || ie.event.trigger('ajaxStop')));
      }
      'object' == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, a, s, u, l, c, f, d = ie.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? ie(p) : ie.event, g = ie.Deferred(), m = ie.Callbacks('once memory'), v = d.statusCode || {}, y = {}, b = {}, w = 0, E = 'canceled', T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === w) {
              if (!s)
                for (s = {}; t = bt.exec(a);)
                  s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === w ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return w || (e = b[n] = b[n] || e, y[e] = t), this;
          },
          overrideMimeType: function (e) {
            return w || (d.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (w < 2)
                for (t in e)
                  v[t] = [
                    v[t],
                    e[t]
                  ];
              else
                T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || E;
            return i && i.abort(t), r(0, t), this;
          }
        };
      if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || ht.href) + '').replace(vt, '').replace(Tt, ht.protocol + '//'), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || '*').toLowerCase().match(be) || [''], null == d.crossDomain) {
        l = X.createElement('a');
        try {
          l.href = d.url, l.href = l.href, d.crossDomain = Ct.protocol + '//' + Ct.host != l.protocol + '//' + l.host;
        } catch (e) {
          d.crossDomain = !0;
        }
      }
      if (d.data && d.processData && 'string' != typeof d.data && (d.data = ie.param(d.data, d.traditional)), U(xt, d, n, T), 2 === w)
        return T;
      c = ie.event && d.global, c && 0 == ie.active++ && ie.event.trigger('ajaxStart'), d.type = d.type.toUpperCase(), d.hasContent = !Et.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (mt.test(o) ? '&' : '?') + d.data, delete d.data), !1 === d.cache && (d.url = yt.test(o) ? o.replace(yt, '$1_=' + gt++) : o + (mt.test(o) ? '&' : '?') + '_=' + gt++)), d.ifModified && (ie.lastModified[o] && T.setRequestHeader('If-Modified-Since', ie.lastModified[o]), ie.etag[o] && T.setRequestHeader('If-None-Match', ie.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader('Content-Type', d.contentType), T.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + St + '; q=0.01' : '') : d.accepts['*']);
      for (f in d.headers)
        T.setRequestHeader(f, d.headers[f]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === w))
        return T.abort();
      E = 'abort';
      for (f in {
          success: 1,
          error: 1,
          complete: 1
        })
        T[f](d[f]);
      if (i = U(_t, d, n, T)) {
        if (T.readyState = 1, c && h.trigger('ajaxSend', [
            T,
            d
          ]), 2 === w)
          return T;
        d.async && d.timeout > 0 && (u = e.setTimeout(function () {
          T.abort('timeout');
        }, d.timeout));
        try {
          w = 1, i.send(y, r);
        } catch (e) {
          if (!(w < 2))
            throw e;
          r(-1, e);
        }
      } else
        r(-1, 'No Transport');
      return T;
    },
    getJSON: function (e, t, n) {
      return ie.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return ie.get(e, void 0, t, 'script');
    }
  }), ie.each([
    'get',
    'post'
  ], function (e, t) {
    ie[t] = function (e, n, r, i) {
      return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax(ie.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, ie.isPlainObject(e) && e));
    };
  }), ie._evalUrl = function (e) {
    return ie.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      throws: !0
    });
  }, ie.fn.extend({
    wrapAll: function (e) {
      var t;
      return ie.isFunction(e) ? this.each(function (t) {
        ie(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;)
          e = e.firstElementChild;
        return e;
      }).append(this)), this);
    },
    wrapInner: function (e) {
      return ie.isFunction(e) ? this.each(function (t) {
        ie(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = ie(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = ie.isFunction(e);
      return this.each(function (n) {
        ie(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        ie.nodeName(this, 'body') || ie(this).replaceWith(this.childNodes);
      }).end();
    }
  }), ie.expr.filters.hidden = function (e) {
    return !ie.expr.filters.visible(e);
  }, ie.expr.filters.visible = function (e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
  };
  var It = /%20/g, Ot = /\[\]$/, Nt = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
  ie.param = function (e, t) {
    var n, r = [], i = function (e, t) {
        t = ie.isFunction(t) ? t() : null == t ? '' : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      };
    if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e))
      ie.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        G(n, e[n], t, i);
    return r.join('&').replace(It, '+');
  }, ie.fn.extend({
    serialize: function () {
      return ie.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ie.prop(this, 'elements');
        return e ? ie.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ie(this).is(':disabled') && At.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ae.test(e));
      }).map(function (e, t) {
        var n = ie(this).val();
        return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Nt, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(Nt, '\r\n')
        };
      }).get();
    }
  }), ie.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {
    }
  };
  var Dt = {
      0: 200,
      1223: 204
    }, Rt = ie.ajaxSettings.xhr();
  re.cors = !!Rt && 'withCredentials' in Rt, re.ajax = Rt = !!Rt, ie.ajaxTransport(function (t) {
    var n, r;
    if (re.cors || Rt && !t.crossDomain)
      return {
        send: function (i, o) {
          var a, s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
            for (a in t.xhrFields)
              s[a] = t.xhrFields[a];
          t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
          for (a in i)
            s.setRequestHeader(a, i[a]);
          n = function (e) {
            return function () {
              n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? o(0, 'error') : o(s.status, s.statusText) : o(Dt[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
            };
          }, s.onload = n(), r = s.onerror = n('error'), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
            4 === s.readyState && e.setTimeout(function () {
              n && r();
            });
          }, n = n('abort');
          try {
            s.send(t.hasContent && t.data || null);
          } catch (e) {
            if (n)
              throw e;
          }
        },
        abort: function () {
          n && n();
        }
      };
  }), ie.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      'text script': function (e) {
        return ie.globalEval(e), e;
      }
    }
  }), ie.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), ie.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = ie('<script>').prop({
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
          }), X.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var kt = [], jt = /(=)\?(?=&|$)|\?\?/;
  ie.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = kt.pop() || ie.expando + '_' + gt++;
      return this[e] = !0, e;
    }
  }), ie.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, a, s = !1 !== t.jsonp && (jt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && jt.test(t.data) && 'data');
    if (s || 'jsonp' === t.dataTypes[0])
      return i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(jt, '$1' + i) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
        return a || ie.error(i + ' was not called'), a[0];
      }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
        a = arguments;
      }, r.always(function () {
        void 0 === o ? ie(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, kt.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0;
      }), 'script';
  }), ie.parseHTML = function (e, t, n) {
    if (!e || 'string' != typeof e)
      return null;
    'boolean' == typeof t && (n = t, t = !1), t = t || X;
    var r = pe.exec(e), i = !n && [];
    return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes));
  };
  var Mt = ie.fn.load;
  ie.fn.load = function (e, t, n) {
    if ('string' != typeof e && Mt)
      return Mt.apply(this, arguments);
    var r, i, o, a = this, s = e.indexOf(' ');
    return s > -1 && (r = ie.trim(e.slice(s)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), a.length > 0 && ie.ajax({
      url: e,
      type: i || 'GET',
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ie('<div>').append(ie.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [
          e.responseText,
          t,
          e
        ]);
      });
    }), this;
  }, ie.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    ie.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ie.expr.filters.animated = function (e) {
    return ie.grep(ie.timers, function (t) {
      return e === t.elem;
    }).length;
  }, ie.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l, c = ie.css(e, 'position'), f = ie(e), d = {};
      'static' === c && (e.style.position = 'relative'), s = f.offset(), o = ie.css(e, 'top'), u = ie.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, ie.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), 'using' in t ? t.using.call(e, d) : f.css(d);
    }
  }, ie.fn.extend({
    offset: function (e) {
      if (arguments.length)
        return void 0 === e ? this : this.each(function (t) {
          ie.offset.setOffset(this, e, t);
        });
      var t, n, r = this[0], i = {
          top: 0,
          left: 0
        }, o = r && r.ownerDocument;
      if (o)
        return t = o.documentElement, ie.contains(t, r) ? (i = r.getBoundingClientRect(), n = $(o), {
          top: i.top + n.pageYOffset - t.clientTop,
          left: i.left + n.pageXOffset - t.clientLeft
        }) : i;
    },
    position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {
            top: 0,
            left: 0
          };
        return 'fixed' === ie.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], 'html') || (r = e.offset()), r.top += ie.css(e[0], 'borderTopWidth', !0), r.left += ie.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - r.top - ie.css(n, 'marginTop', !0),
          left: t.left - r.left - ie.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && 'static' === ie.css(e, 'position');)
          e = e.offsetParent;
        return e || Ye;
      });
    }
  }), ie.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, t) {
    var n = 'pageYOffset' === t;
    ie.fn[e] = function (r) {
      return Ee(this, function (e, r, i) {
        var o = $(e);
        if (void 0 === i)
          return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), ie.each([
    'top',
    'left'
  ], function (e, t) {
    ie.cssHooks[t] = I(re.pixelPosition, function (e, n) {
      if (n)
        return n = C(e, t), $e.test(n) ? ie(e).position()[t] + 'px' : n;
    });
  }), ie.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    ie.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      ie.fn[r] = function (r, i) {
        var o = arguments.length && (n || 'boolean' != typeof r), a = n || (!0 === r || !0 === i ? 'margin' : 'border');
        return Ee(this, function (t, n, r) {
          var i;
          return ie.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a);
        }, t, o ? r : void 0, o, null);
      };
    });
  }), ie.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    },
    size: function () {
      return this.length;
    }
  }), ie.fn.andSelf = ie.fn.addBack, 'function' == typeof define && define.amd && (_jquery = function () {
    return ie;
  }());
  var Lt = e.jQuery, Ft = e.$;
  return ie.noConflict = function (t) {
    return e.$ === ie && (e.$ = Ft), t && e.jQuery === ie && (e.jQuery = Lt), ie;
  }, t || (e.jQuery = e.$ = ie), ie;
}), function (e) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = e() : true ? _eventEmitter = function () {
    return typeof e === 'function' ? e() : e;
  }() : ('undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this).EventEmitter3 = e();
}(function () {
  return function e(t, n, r) {
    function i(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var u = 'function' == typeof require && require;
          if (!s && u)
            return u(a, !0);
          if (o)
            return o(a, !0);
          var l = new Error('Cannot find module \'' + a + '\'');
          throw l.code = 'MODULE_NOT_FOUND', l;
        }
        var c = n[a] = { exports: {} };
        t[a][0].call(c.exports, function (e) {
          return i(t[a][1][e] || e);
        }, c, c.exports, e, t, n, r);
      }
      return n[a].exports;
    }
    for (var o = 'function' == typeof require && require, a = 0; a < r.length; a++)
      i(r[a]);
    return i;
  }({
    1: [
      function (e, t, n) {
        'use strict';
        function r() {
        }
        function i(e, t, n) {
          this.fn = e, this.context = t, this.once = n || !1;
        }
        function o(e, t, n, r, o) {
          if ('function' != typeof n)
            throw new TypeError('The listener must be a function');
          var a = new i(n, r || e, o), s = l ? l + t : t;
          return e._events[s] ? e._events[s].fn ? e._events[s] = [
            e._events[s],
            a
          ] : e._events[s].push(a) : (e._events[s] = a, e._eventsCount++), e;
        }
        function a(e, t) {
          0 == --e._eventsCount ? e._events = new r() : delete e._events[t];
        }
        function s() {
          this._events = new r(), this._eventsCount = 0;
        }
        var u = Object.prototype.hasOwnProperty, l = '~';
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (l = !1)), s.prototype.eventNames = function () {
          var e, t, n = [];
          if (0 === this._eventsCount)
            return n;
          for (t in e = this._events)
            u.call(e, t) && n.push(l ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }, s.prototype.listeners = function (e) {
          var t = l ? l + e : e, n = this._events[t];
          if (!n)
            return [];
          if (n.fn)
            return [n.fn];
          for (var r = 0, i = n.length, o = new Array(i); r < i; r++)
            o[r] = n[r].fn;
          return o;
        }, s.prototype.listenerCount = function (e) {
          var t = l ? l + e : e, n = this._events[t];
          return n ? n.fn ? 1 : n.length : 0;
        }, s.prototype.emit = function (e, t, n, r, i, o) {
          var a = l ? l + e : e;
          if (!this._events[a])
            return !1;
          var s, u, c = this._events[a], f = arguments.length;
          if (c.fn) {
            switch (c.once && this.removeListener(e, c.fn, void 0, !0), f) {
            case 1:
              return c.fn.call(c.context), !0;
            case 2:
              return c.fn.call(c.context, t), !0;
            case 3:
              return c.fn.call(c.context, t, n), !0;
            case 4:
              return c.fn.call(c.context, t, n, r), !0;
            case 5:
              return c.fn.call(c.context, t, n, r, i), !0;
            case 6:
              return c.fn.call(c.context, t, n, r, i, o), !0;
            }
            for (u = 1, s = new Array(f - 1); u < f; u++)
              s[u - 1] = arguments[u];
            c.fn.apply(c.context, s);
          } else {
            var d, p = c.length;
            for (u = 0; u < p; u++)
              switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), f) {
              case 1:
                c[u].fn.call(c[u].context);
                break;
              case 2:
                c[u].fn.call(c[u].context, t);
                break;
              case 3:
                c[u].fn.call(c[u].context, t, n);
                break;
              case 4:
                c[u].fn.call(c[u].context, t, n, r);
                break;
              default:
                if (!s)
                  for (d = 1, s = new Array(f - 1); d < f; d++)
                    s[d - 1] = arguments[d];
                c[u].fn.apply(c[u].context, s);
              }
          }
          return !0;
        }, s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }, s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }, s.prototype.removeListener = function (e, t, n, r) {
          var i = l ? l + e : e;
          if (!this._events[i])
            return this;
          if (!t)
            return a(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t || r && !o.once || n && o.context !== n || a(this, i);
          else {
            for (var s = 0, u = [], c = o.length; s < c; s++)
              (o[s].fn !== t || r && !o[s].once || n && o[s].context !== n) && u.push(o[s]);
            u.length ? this._events[i] = 1 === u.length ? u[0] : u : a(this, i);
          }
          return this;
        }, s.prototype.removeAllListeners = function (e) {
          var t;
          return e ? (t = l ? l + e : e, this._events[t] && a(this, t)) : (this._events = new r(), this._eventsCount = 0), this;
        }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = l, s.EventEmitter = s, void 0 !== t && (t.exports = s);
      },
      {}
    ]
  }, {}, [1])(1);
}), _readium_shared_js_globals = function (e, t) {
  var n = {
    version: function () {
      return '0.8.0';
    },
    Views: {
      ORIENTATION_LANDSCAPE: 'orientation_landscape',
      ORIENTATION_PORTRAIT: 'orientation_portrait'
    },
    Events: {
      READER_INITIALIZED: 'ReaderInitialized',
      PAGINATION_CHANGED: 'PaginationChanged',
      SETTINGS_APPLIED: 'SettingsApplied',
      FXL_VIEW_RESIZED: 'FXLViewResized',
      READER_VIEW_CREATED: 'ReaderViewCreated',
      READER_VIEW_DESTROYED: 'ReaderViewDestroyed',
      CONTENT_DOCUMENT_LOAD_START: 'ContentDocumentLoadStart',
      CONTENT_DOCUMENT_LOADED: 'ContentDocumentLoaded',
      CONTENT_DOCUMENT_UNLOADED: 'ContentDocumentUnloaded',
      MEDIA_OVERLAY_STATUS_CHANGED: 'MediaOverlayStatusChanged',
      MEDIA_OVERLAY_TTS_SPEAK: 'MediaOverlayTTSSpeak',
      MEDIA_OVERLAY_TTS_STOP: 'MediaOverlayTTSStop',
      PLUGINS_LOADED: 'PluginsLoaded'
    },
    InternalEvents: { CURRENT_VIEW_PAGINATION_CHANGED: 'CurrentViewPaginationChanged' },
    logEvent: function (e, t, n) {
    }
  };
  return e.extend(n, new t()), n;
}(_jquery, _eventEmitter), navigator.epubReadingSystem = {
  name: '',
  version: '0.0.0',
  layoutStyle: 'paginated',
  hasFeature: function (e, t) {
    return (!t || '1.0' === t) && ('dom-manipulation' === e || ('layout-changes' === e || 'touch-events' !== e && ('mouse-events' === e || ('keyboard-events' === e || 'spine-scripting' === e))));
  }
}, function () {
  'use strict';
  console.debug || (console.debug = console.log), console.info || (console.info = console.log), console.warn || (console.warn = console.log), console.error || (console.error = console.log);
}(), _console_shim = undefined, function (e, t) {
  true ? _es6_shim = function () {
    return typeof t === 'function' ? t() : t;
  }() : 'object' == typeof exports ? module.exports = t() : e.returnExports = t();
}(this, function () {
  'use strict';
  var e, t = Function.call.bind(Function.apply), n = Function.call.bind(Function.call), r = Array.isArray, i = Object.keys, o = function (e) {
      try {
        return e(), !1;
      } catch (e) {
        return !0;
      }
    }, a = function (e) {
      try {
        return e();
      } catch (e) {
        return !1;
      }
    }, s = function (e) {
      return function () {
        return !t(e, this, arguments);
      };
    }(o), u = !!Object.defineProperty && function () {
      return !o(function () {
        return Object.defineProperty({}, 'x', {
          get: function () {
          }
        });
      });
    }(), l = 'foo' === function () {
    }.name, c = Function.call.bind(Array.prototype.forEach), f = Function.call.bind(Array.prototype.reduce), d = Function.call.bind(Array.prototype.filter), p = Function.call.bind(Array.prototype.some), h = function (e, t, n, r) {
      !r && t in e || (u ? Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: n
      }) : e[t] = n);
    }, g = function (e, t, n) {
      c(i(t), function (r) {
        var i = t[r];
        h(e, r, i, !!n);
      });
    }, m = Function.call.bind(Object.prototype.toString), v = 'function' == typeof /abc/ ? function (e) {
      return 'function' == typeof e && '[object Function]' === m(e);
    } : function (e) {
      return 'function' == typeof e;
    }, y = {
      getter: function (e, t, n) {
        if (!u)
          throw new TypeError('getters require true ES5 support');
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          get: n
        });
      },
      proxy: function (e, t, n) {
        if (!u)
          throw new TypeError('getters require true ES5 support');
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(n, t, {
          configurable: r.configurable,
          enumerable: r.enumerable,
          get: function () {
            return e[t];
          },
          set: function (n) {
            e[t] = n;
          }
        });
      },
      redefine: function (e, t, n) {
        if (u) {
          var r = Object.getOwnPropertyDescriptor(e, t);
          r.value = n, Object.defineProperty(e, t, r);
        } else
          e[t] = n;
      },
      defineByDescriptor: function (e, t, n) {
        u ? Object.defineProperty(e, t, n) : 'value' in n && (e[t] = n.value);
      },
      preserveToString: function (e, t) {
        t && v(t.toString) && h(e, 'toString', t.toString.bind(t), !0);
      }
    }, b = Object.create || function (e, t) {
      var n = function () {
      };
      n.prototype = e;
      var r = new n();
      return void 0 !== t && i(t).forEach(function (e) {
        y.defineByDescriptor(r, e, t[e]);
      }), r;
    }, w = function (e, t) {
      return !!Object.setPrototypeOf && a(function () {
        var n = function t(n) {
          var r = new e(n);
          return Object.setPrototypeOf(r, t.prototype), r;
        };
        return Object.setPrototypeOf(n, e), n.prototype = b(e.prototype, { constructor: { value: n } }), t(n);
      });
    }, E = function () {
      if ('undefined' != typeof self)
        return self;
      if ('undefined' != typeof window)
        return window;
      if ('undefined' != typeof global)
        return global;
      throw new Error('unable to locate global object');
    }(), T = E.isFinite, x = Function.call.bind(String.prototype.indexOf), _ = Function.apply.bind(Array.prototype.indexOf), S = Function.call.bind(Array.prototype.concat), C = Function.call.bind(String.prototype.slice), I = Function.call.bind(Array.prototype.push), O = Function.apply.bind(Array.prototype.push), N = Function.call.bind(Array.prototype.join), P = Function.call.bind(Array.prototype.shift), A = Math.max, D = Math.min, R = Math.floor, k = Math.abs, j = Math.exp, M = Math.log, L = Math.sqrt, F = Function.call.bind(Object.prototype.hasOwnProperty), q = function () {
    }, V = E.Map, H = V && V.prototype.delete, U = V && V.prototype.get, B = V && V.prototype.has, z = V && V.prototype.set, W = E.Symbol || {}, G = W.species || '@@species', $ = Number.isNaN || function (e) {
      return e !== e;
    }, Q = Number.isFinite || function (e) {
      return 'number' == typeof e && T(e);
    }, X = v(Math.sign) ? Math.sign : function (e) {
      var t = Number(e);
      return 0 === t ? t : $(t) ? t : t < 0 ? -1 : 1;
    }, Y = function (e) {
      var t = Number(e);
      return t < -1 || $(t) ? NaN : 0 === t || t === 1 / 0 ? t : -1 === t ? -1 / 0 : 1 + t - 1 == 0 ? t : t * (M(1 + t) / (1 + t - 1));
    }, J = function (e) {
      return '[object Arguments]' === m(e);
    }, K = function (e) {
      return null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== m(e) && '[object Function]' === m(e.callee);
    }, Z = J(arguments) ? J : K, ee = {
      primitive: function (e) {
        return null === e || 'function' != typeof e && 'object' != typeof e;
      },
      string: function (e) {
        return '[object String]' === m(e);
      },
      regex: function (e) {
        return '[object RegExp]' === m(e);
      },
      symbol: function (e) {
        return 'function' == typeof E.Symbol && 'symbol' == typeof e;
      }
    }, te = function (e, t, n) {
      var r = e[t];
      h(e, t, n, !0), y.preserveToString(e[t], r);
    }, ne = 'function' == typeof W && 'function' == typeof W.for && ee.symbol(W()), re = ee.symbol(W.iterator) ? W.iterator : '_es6-shim iterator_';
  E.Set && 'function' == typeof new E.Set()['@@iterator'] && (re = '@@iterator'), E.Reflect || h(E, 'Reflect', {}, !0);
  var ie = E.Reflect, oe = String, ae = 'undefined' != typeof document && document ? document.all : null, se = null == ae ? function (e) {
      return null == e;
    } : function (e) {
      return null == e && e !== ae;
    }, ue = {
      Call: function (e, n) {
        var r = arguments.length > 2 ? arguments[2] : [];
        if (!ue.IsCallable(e))
          throw new TypeError(e + ' is not a function');
        return t(e, n, r);
      },
      RequireObjectCoercible: function (e, t) {
        if (se(e))
          throw new TypeError(t || 'Cannot call method on ' + e);
        return e;
      },
      TypeIsObject: function (e) {
        return void 0 !== e && null !== e && !0 !== e && !1 !== e && ('function' == typeof e || 'object' == typeof e || e === ae);
      },
      ToObject: function (e, t) {
        return Object(ue.RequireObjectCoercible(e, t));
      },
      IsCallable: v,
      IsConstructor: function (e) {
        return ue.IsCallable(e);
      },
      ToInt32: function (e) {
        return ue.ToNumber(e) >> 0;
      },
      ToUint32: function (e) {
        return ue.ToNumber(e) >>> 0;
      },
      ToNumber: function (e) {
        if (ne && '[object Symbol]' === m(e))
          throw new TypeError('Cannot convert a Symbol value to a number');
        return +e;
      },
      ToInteger: function (e) {
        var t = ue.ToNumber(e);
        return $(t) ? 0 : 0 !== t && Q(t) ? (t > 0 ? 1 : -1) * R(k(t)) : t;
      },
      ToLength: function (e) {
        var t = ue.ToInteger(e);
        return t <= 0 ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t;
      },
      SameValue: function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : $(e) && $(t);
      },
      SameValueZero: function (e, t) {
        return e === t || $(e) && $(t);
      },
      IsIterable: function (e) {
        return ue.TypeIsObject(e) && (void 0 !== e[re] || Z(e));
      },
      GetIterator: function (t) {
        if (Z(t))
          return new e(t, 'value');
        var n = ue.GetMethod(t, re);
        if (!ue.IsCallable(n))
          throw new TypeError('value is not an iterable');
        var r = ue.Call(n, t);
        if (!ue.TypeIsObject(r))
          throw new TypeError('bad iterator');
        return r;
      },
      GetMethod: function (e, t) {
        var n = ue.ToObject(e)[t];
        if (!se(n)) {
          if (!ue.IsCallable(n))
            throw new TypeError('Method not callable: ' + t);
          return n;
        }
      },
      IteratorComplete: function (e) {
        return !!e.done;
      },
      IteratorClose: function (e, t) {
        var n = ue.GetMethod(e, 'return');
        if (void 0 !== n) {
          var r, i;
          try {
            r = ue.Call(n, e);
          } catch (e) {
            i = e;
          }
          if (!t) {
            if (i)
              throw i;
            if (!ue.TypeIsObject(r))
              throw new TypeError('Iterator\'s return method returned a non-object.');
          }
        }
      },
      IteratorNext: function (e) {
        var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
        if (!ue.TypeIsObject(t))
          throw new TypeError('bad iterator');
        return t;
      },
      IteratorStep: function (e) {
        var t = ue.IteratorNext(e);
        return !ue.IteratorComplete(t) && t;
      },
      Construct: function (e, t, n, r) {
        var i = void 0 === n ? e : n;
        if (!r && ie.construct)
          return ie.construct(e, t, i);
        var o = i.prototype;
        ue.TypeIsObject(o) || (o = Object.prototype);
        var a = b(o), s = ue.Call(e, a, t);
        return ue.TypeIsObject(s) ? s : a;
      },
      SpeciesConstructor: function (e, t) {
        var n = e.constructor;
        if (void 0 === n)
          return t;
        if (!ue.TypeIsObject(n))
          throw new TypeError('Bad constructor');
        var r = n[G];
        if (se(r))
          return t;
        if (!ue.IsConstructor(r))
          throw new TypeError('Bad @@species');
        return r;
      },
      CreateHTML: function (e, t, n, r) {
        var i = ue.ToString(e), o = '<' + t;
        if ('' !== n) {
          o += ' ' + n + '="' + ue.ToString(r).replace(/"/g, '&quot;') + '"';
        }
        return o + '>' + i + '</' + t + '>';
      },
      IsRegExp: function (e) {
        if (!ue.TypeIsObject(e))
          return !1;
        var t = e[W.match];
        return void 0 !== t ? !!t : ee.regex(e);
      },
      ToString: function (e) {
        if (ne && '[object Symbol]' === m(e))
          throw new TypeError('Cannot convert a Symbol value to a number');
        return oe(e);
      }
    };
  if (u && ne) {
    var le = function (e) {
      if (ee.symbol(W[e]))
        return W[e];
      var t = W.for('Symbol.' + e);
      return Object.defineProperty(W, e, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), t;
    };
    if (!ee.symbol(W.search)) {
      var ce = le('search'), fe = String.prototype.search;
      h(RegExp.prototype, ce, function (e) {
        return ue.Call(fe, e, [this]);
      });
      var de = function (e) {
        var t = ue.RequireObjectCoercible(this);
        if (!se(e)) {
          var n = ue.GetMethod(e, ce);
          if (void 0 !== n)
            return ue.Call(n, e, [t]);
        }
        return ue.Call(fe, t, [ue.ToString(e)]);
      };
      te(String.prototype, 'search', de);
    }
    if (!ee.symbol(W.replace)) {
      var pe = le('replace'), he = String.prototype.replace;
      h(RegExp.prototype, pe, function (e, t) {
        return ue.Call(he, e, [
          this,
          t
        ]);
      });
      var ge = function (e, t) {
        var n = ue.RequireObjectCoercible(this);
        if (!se(e)) {
          var r = ue.GetMethod(e, pe);
          if (void 0 !== r)
            return ue.Call(r, e, [
              n,
              t
            ]);
        }
        return ue.Call(he, n, [
          ue.ToString(e),
          t
        ]);
      };
      te(String.prototype, 'replace', ge);
    }
    if (!ee.symbol(W.split)) {
      var me = le('split'), ve = String.prototype.split;
      h(RegExp.prototype, me, function (e, t) {
        return ue.Call(ve, e, [
          this,
          t
        ]);
      });
      var ye = function (e, t) {
        var n = ue.RequireObjectCoercible(this);
        if (!se(e)) {
          var r = ue.GetMethod(e, me);
          if (void 0 !== r)
            return ue.Call(r, e, [
              n,
              t
            ]);
        }
        return ue.Call(ve, n, [
          ue.ToString(e),
          t
        ]);
      };
      te(String.prototype, 'split', ye);
    }
    var be = ee.symbol(W.match), we = be && function () {
        var e = {};
        return e[W.match] = function () {
          return 42;
        }, 42 !== 'a'.match(e);
      }();
    if (!be || we) {
      var Ee = le('match'), Te = String.prototype.match;
      h(RegExp.prototype, Ee, function (e) {
        return ue.Call(Te, e, [this]);
      });
      var xe = function (e) {
        var t = ue.RequireObjectCoercible(this);
        if (!se(e)) {
          var n = ue.GetMethod(e, Ee);
          if (void 0 !== n)
            return ue.Call(n, e, [t]);
        }
        return ue.Call(Te, t, [ue.ToString(e)]);
      };
      te(String.prototype, 'match', xe);
    }
  }
  var _e = function (e, t, n) {
      y.preserveToString(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), u ? c(Object.getOwnPropertyNames(e), function (r) {
        r in q || n[r] || y.proxy(e, r, t);
      }) : c(Object.keys(e), function (r) {
        r in q || n[r] || (t[r] = e[r]);
      }), t.prototype = e.prototype, y.redefine(e.prototype, 'constructor', t);
    }, Se = function () {
      return this;
    }, Ce = function (e) {
      u && !F(e, G) && y.getter(e, G, Se);
    }, Ie = function (e, t) {
      var n = t || function () {
        return this;
      };
      h(e, re, n), !e[re] && ee.symbol(re) && (e[re] = n);
    }, Oe = function (e, t, n) {
      u ? Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: n
      }) : e[t] = n;
    }, Ne = function (e, t, n) {
      if (Oe(e, t, n), !ue.SameValue(e[t], n))
        throw new TypeError('property is nonconfigurable');
    }, Pe = function (e, t, n, r) {
      if (!ue.TypeIsObject(e))
        throw new TypeError('Constructor requires `new`: ' + t.name);
      var i = t.prototype;
      ue.TypeIsObject(i) || (i = n);
      var o = b(i);
      for (var a in r)
        if (F(r, a)) {
          var s = r[a];
          h(o, a, s, !0);
        }
      return o;
    };
  if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
    var Ae = String.fromCodePoint;
    te(String, 'fromCodePoint', function (e) {
      return ue.Call(Ae, this, arguments);
    });
  }
  var De = {
    fromCodePoint: function (e) {
      for (var t, n = [], r = 0, i = arguments.length; r < i; r++) {
        if (t = Number(arguments[r]), !ue.SameValue(t, ue.ToInteger(t)) || t < 0 || t > 1114111)
          throw new RangeError('Invalid code point ' + t);
        t < 65536 ? I(n, String.fromCharCode(t)) : (t -= 65536, I(n, String.fromCharCode(55296 + (t >> 10))), I(n, String.fromCharCode(t % 1024 + 56320)));
      }
      return N(n, '');
    },
    raw: function (e) {
      var t = (arguments.length, ue.ToObject(e, 'bad template')), n = ue.ToObject(t.raw, 'bad raw value'), r = n.length, i = ue.ToLength(r);
      if (i <= 0)
        return '';
      for (var o, a, s, u, l = [], c = 0; c < i && (o = ue.ToString(c), s = ue.ToString(n[o]), I(l, s), !(c + 1 >= i));)
        a = c + 1 < arguments.length ? arguments[c + 1] : '', u = ue.ToString(a), I(l, u), c += 1;
      return N(l, '');
    }
  };
  String.raw && 'xy' !== String.raw({
    raw: {
      0: 'x',
      1: 'y',
      length: 2
    }
  }) && te(String, 'raw', De.raw), g(String, De);
  var Re = function e(t, n) {
      if (n < 1)
        return '';
      if (n % 2)
        return e(t, n - 1) + t;
      var r = e(t, n / 2);
      return r + r;
    }, ke = {
      repeat: function (e) {
        var t = ue.ToString(ue.RequireObjectCoercible(this)), n = ue.ToInteger(e);
        if (n < 0 || n >= 1 / 0)
          throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
        return Re(t, n);
      },
      startsWith: function (e) {
        var t = ue.ToString(ue.RequireObjectCoercible(this));
        if (ue.IsRegExp(e))
          throw new TypeError('Cannot call method "startsWith" with a regex');
        var n, r = ue.ToString(e);
        arguments.length > 1 && (n = arguments[1]);
        var i = A(ue.ToInteger(n), 0);
        return C(t, i, i + r.length) === r;
      },
      endsWith: function (e) {
        var t = ue.ToString(ue.RequireObjectCoercible(this));
        if (ue.IsRegExp(e))
          throw new TypeError('Cannot call method "endsWith" with a regex');
        var n, r = ue.ToString(e), i = t.length;
        arguments.length > 1 && (n = arguments[1]);
        var o = void 0 === n ? i : ue.ToInteger(n), a = D(A(o, 0), i);
        return C(t, a - r.length, a) === r;
      },
      includes: function (e) {
        if (ue.IsRegExp(e))
          throw new TypeError('"includes" does not accept a RegExp');
        var t, n = ue.ToString(e);
        return arguments.length > 1 && (t = arguments[1]), -1 !== x(this, n, t);
      },
      codePointAt: function (e) {
        var t = ue.ToString(ue.RequireObjectCoercible(this)), n = ue.ToInteger(e), r = t.length;
        if (n >= 0 && n < r) {
          var i = t.charCodeAt(n), o = n + 1 === r;
          if (i < 55296 || i > 56319 || o)
            return i;
          var a = t.charCodeAt(n + 1);
          return a < 56320 || a > 57343 ? i : 1024 * (i - 55296) + (a - 56320) + 65536;
        }
      }
    };
  if (String.prototype.includes && !1 !== 'a'.includes('a', 1 / 0) && te(String.prototype, 'includes', ke.includes), String.prototype.startsWith && String.prototype.endsWith) {
    var je = o(function () {
        return '/a/'.startsWith(/a/);
      }), Me = a(function () {
        return !1 === 'abc'.startsWith('a', 1 / 0);
      });
    je && Me || (te(String.prototype, 'startsWith', ke.startsWith), te(String.prototype, 'endsWith', ke.endsWith));
  }
  if (ne) {
    a(function () {
      var e = /a/;
      return e[W.match] = !1, '/a/'.startsWith(e);
    }) || te(String.prototype, 'startsWith', ke.startsWith);
    a(function () {
      var e = /a/;
      return e[W.match] = !1, '/a/'.endsWith(e);
    }) || te(String.prototype, 'endsWith', ke.endsWith);
    a(function () {
      var e = /a/;
      return e[W.match] = !1, '/a/'.includes(e);
    }) || te(String.prototype, 'includes', ke.includes);
  }
  g(String.prototype, ke);
  var Le = [
      '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003',
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
      '\u2029\uFEFF'
    ].join(''), Fe = new RegExp('(^[' + Le + ']+)|([' + Le + ']+$)', 'g'), qe = function () {
      return ue.ToString(ue.RequireObjectCoercible(this)).replace(Fe, '');
    }, Ve = [
      '\x85',
      '\u200B',
      '\uFFFE'
    ].join(''), He = new RegExp('[' + Ve + ']', 'g'), Ue = /^[-+]0x[0-9a-f]+$/i, Be = Ve.trim().length !== Ve.length;
  h(String.prototype, 'trim', qe, Be);
  var ze = function (e) {
      return {
        value: e,
        done: 0 === arguments.length
      };
    }, We = function (e) {
      ue.RequireObjectCoercible(e), this._s = ue.ToString(e), this._i = 0;
    };
  We.prototype.next = function () {
    var e = this._s, t = this._i;
    if (void 0 === e || t >= e.length)
      return this._s = void 0, ze();
    var n, r, i = e.charCodeAt(t);
    return i < 55296 || i > 56319 || t + 1 === e.length ? r = 1 : (n = e.charCodeAt(t + 1), r = n < 56320 || n > 57343 ? 1 : 2), this._i = t + r, ze(e.substr(t, r));
  }, Ie(We.prototype), Ie(String.prototype, function () {
    return new We(this);
  });
  var Ge = {
    from: function (e) {
      var t, r = this;
      arguments.length > 1 && (t = arguments[1]);
      var i, o;
      if (void 0 === t)
        i = !1;
      else {
        if (!ue.IsCallable(t))
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        arguments.length > 2 && (o = arguments[2]), i = !0;
      }
      var a, s, u, l = void 0 !== (Z(e) || ue.GetMethod(e, re));
      if (l) {
        s = ue.IsConstructor(r) ? Object(new r()) : [];
        var c, f, d = ue.GetIterator(e);
        for (u = 0;;) {
          if (!1 === (c = ue.IteratorStep(d)))
            break;
          f = c.value;
          try {
            i && (f = void 0 === o ? t(f, u) : n(t, o, f, u)), s[u] = f;
          } catch (e) {
            throw ue.IteratorClose(d, !0), e;
          }
          u += 1;
        }
        a = u;
      } else {
        var p = ue.ToObject(e);
        a = ue.ToLength(p.length), s = ue.IsConstructor(r) ? Object(new r(a)) : new Array(a);
        var h;
        for (u = 0; u < a; ++u)
          h = p[u], i && (h = void 0 === o ? t(h, u) : n(t, o, h, u)), Ne(s, u, h);
      }
      return s.length = a, s;
    },
    of: function () {
      for (var e = arguments.length, t = this, n = r(t) || !ue.IsCallable(t) ? new Array(e) : ue.Construct(t, [e]), i = 0; i < e; ++i)
        Ne(n, i, arguments[i]);
      return n.length = e, n;
    }
  };
  g(Array, Ge), Ce(Array), e = function (e, t) {
    this.i = 0, this.array = e, this.kind = t;
  }, g(e.prototype, {
    next: function () {
      var t = this.i, n = this.array;
      if (!(this instanceof e))
        throw new TypeError('Not an ArrayIterator');
      if (void 0 !== n) {
        if (t < ue.ToLength(n.length)) {
          var r, i = this.kind;
          return 'key' === i ? r = t : 'value' === i ? r = n[t] : 'entry' === i && (r = [
            t,
            n[t]
          ]), this.i = t + 1, ze(r);
        }
      }
      return this.array = void 0, ze();
    }
  }), Ie(e.prototype), Array.of === Ge.of || function () {
    var e = function (e) {
      this.length = e;
    };
    e.prototype = [];
    var t = Array.of.apply(e, [
      1,
      2
    ]);
    return t instanceof e && 2 === t.length;
  }() || te(Array, 'of', Ge.of);
  var $e = {
    copyWithin: function (e, t) {
      var n, r = ue.ToObject(this), i = ue.ToLength(r.length), o = ue.ToInteger(e), a = ue.ToInteger(t), s = o < 0 ? A(i + o, 0) : D(o, i), u = a < 0 ? A(i + a, 0) : D(a, i);
      arguments.length > 2 && (n = arguments[2]);
      var l = void 0 === n ? i : ue.ToInteger(n), c = l < 0 ? A(i + l, 0) : D(l, i), f = D(c - u, i - s), d = 1;
      for (u < s && s < u + f && (d = -1, u += f - 1, s += f - 1); f > 0;)
        u in r ? r[s] = r[u] : delete r[s], u += d, s += d, f -= 1;
      return r;
    },
    fill: function (e) {
      var t;
      arguments.length > 1 && (t = arguments[1]);
      var n;
      arguments.length > 2 && (n = arguments[2]);
      var r = ue.ToObject(this), i = ue.ToLength(r.length);
      t = ue.ToInteger(void 0 === t ? 0 : t), n = ue.ToInteger(void 0 === n ? i : n);
      for (var o = t < 0 ? A(i + t, 0) : D(t, i), a = n < 0 ? i + n : n, s = o; s < i && s < a; ++s)
        r[s] = e;
      return r;
    },
    find: function (e) {
      var t = ue.ToObject(this), r = ue.ToLength(t.length);
      if (!ue.IsCallable(e))
        throw new TypeError('Array#find: predicate must be a function');
      for (var i, o = arguments.length > 1 ? arguments[1] : null, a = 0; a < r; a++)
        if (i = t[a], o) {
          if (n(e, o, i, a, t))
            return i;
        } else if (e(i, a, t))
          return i;
    },
    findIndex: function (e) {
      var t = ue.ToObject(this), r = ue.ToLength(t.length);
      if (!ue.IsCallable(e))
        throw new TypeError('Array#findIndex: predicate must be a function');
      for (var i = arguments.length > 1 ? arguments[1] : null, o = 0; o < r; o++)
        if (i) {
          if (n(e, i, t[o], o, t))
            return o;
        } else if (e(t[o], o, t))
          return o;
      return -1;
    },
    keys: function () {
      return new e(this, 'key');
    },
    values: function () {
      return new e(this, 'value');
    },
    entries: function () {
      return new e(this, 'entry');
    }
  };
  if (Array.prototype.keys && !ue.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !ue.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[re] && (g(Array.prototype, { values: Array.prototype[re] }), ee.symbol(W.unscopables) && (Array.prototype[W.unscopables].values = !0)), l && Array.prototype.values && 'values' !== Array.prototype.values.name) {
    var Qe = Array.prototype.values;
    te(Array.prototype, 'values', function () {
      return ue.Call(Qe, this, arguments);
    }), h(Array.prototype, re, Array.prototype.values, !0);
  }
  g(Array.prototype, $e), 1 / [!0].indexOf(!0, -0) < 0 && h(Array.prototype, 'indexOf', function (e) {
    var t = _(this, arguments);
    return 0 === t && 1 / t < 0 ? 0 : t;
  }, !0), Ie(Array.prototype, function () {
    return this.values();
  }), Object.getPrototypeOf && Ie(Object.getPrototypeOf([].values()));
  var Xe = function () {
      return a(function () {
        return 0 === Array.from({ length: -1 }).length;
      });
    }(), Ye = function () {
      var e = Array.from([0].entries());
      return 1 === e.length && r(e[0]) && 0 === e[0][0] && 0 === e[0][1];
    }();
  if (Xe && Ye || te(Array, 'from', Ge.from), !function () {
      return a(function () {
        return Array.from([0], void 0);
      });
    }()) {
    var Je = Array.from;
    te(Array, 'from', function (e) {
      return arguments.length > 1 && void 0 !== arguments[1] ? ue.Call(Je, this, arguments) : n(Je, this, e);
    });
  }
  var Ke = -(Math.pow(2, 32) - 1), Ze = function (e, t) {
      var r = { length: Ke };
      return r[t ? (r.length >>> 0) - 1 : 0] = !0, a(function () {
        return n(e, r, function () {
          throw new RangeError('should not reach here');
        }, []), !0;
      });
    };
  if (!Ze(Array.prototype.forEach)) {
    var et = Array.prototype.forEach;
    te(Array.prototype, 'forEach', function (e) {
      return ue.Call(et, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.map)) {
    var tt = Array.prototype.map;
    te(Array.prototype, 'map', function (e) {
      return ue.Call(tt, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.filter)) {
    var nt = Array.prototype.filter;
    te(Array.prototype, 'filter', function (e) {
      return ue.Call(nt, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.some)) {
    var rt = Array.prototype.some;
    te(Array.prototype, 'some', function (e) {
      return ue.Call(rt, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.every)) {
    var it = Array.prototype.every;
    te(Array.prototype, 'every', function (e) {
      return ue.Call(it, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.reduce)) {
    var ot = Array.prototype.reduce;
    te(Array.prototype, 'reduce', function (e) {
      return ue.Call(ot, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!Ze(Array.prototype.reduceRight, !0)) {
    var at = Array.prototype.reduceRight;
    te(Array.prototype, 'reduceRight', function (e) {
      return ue.Call(at, this.length >= 0 ? this : [], arguments);
    });
  }
  var st = 8 !== Number('0o10'), ut = 2 !== Number('0b10'), lt = p(Ve, function (e) {
      return 0 === Number(e + 0 + e);
    });
  if (st || ut || lt) {
    var ct = Number, ft = /^0b[01]+$/i, dt = /^0o[0-7]+$/i, pt = ft.test.bind(ft), ht = dt.test.bind(dt), gt = function (e, t) {
        var n;
        if ('function' == typeof e.valueOf && (n = e.valueOf(), ee.primitive(n)))
          return n;
        if ('function' == typeof e.toString && (n = e.toString(), ee.primitive(n)))
          return n;
        throw new TypeError('No default value');
      }, mt = He.test.bind(He), vt = Ue.test.bind(Ue), yt = function () {
        var e = function (t) {
          var n;
          'string' == typeof (n = arguments.length > 0 ? ee.primitive(t) ? t : gt(t) : 0) && (n = ue.Call(qe, n), pt(n) ? n = parseInt(C(n, 2), 2) : ht(n) ? n = parseInt(C(n, 2), 8) : (mt(n) || vt(n)) && (n = NaN));
          var r = this, i = a(function () {
              return ct.prototype.valueOf.call(r), !0;
            });
          return r instanceof e && !i ? new ct(n) : ct(n);
        };
        return e;
      }();
    _e(ct, yt, {}), g(yt, {
      NaN: ct.NaN,
      MAX_VALUE: ct.MAX_VALUE,
      MIN_VALUE: ct.MIN_VALUE,
      NEGATIVE_INFINITY: ct.NEGATIVE_INFINITY,
      POSITIVE_INFINITY: ct.POSITIVE_INFINITY
    }), Number = yt, y.redefine(E, 'Number', yt);
  }
  var bt = Math.pow(2, 53) - 1;
  g(Number, {
    MAX_SAFE_INTEGER: bt,
    MIN_SAFE_INTEGER: -bt,
    EPSILON: 2.220446049250313e-16,
    parseInt: E.parseInt,
    parseFloat: E.parseFloat,
    isFinite: Q,
    isInteger: function (e) {
      return Q(e) && ue.ToInteger(e) === e;
    },
    isSafeInteger: function (e) {
      return Number.isInteger(e) && k(e) <= Number.MAX_SAFE_INTEGER;
    },
    isNaN: $
  }), h(Number, 'parseInt', E.parseInt, Number.parseInt !== E.parseInt), 1 === [
    ,
    1
  ].find(function () {
    return !0;
  }) && te(Array.prototype, 'find', $e.find), 0 !== [
    ,
    1
  ].findIndex(function () {
    return !0;
  }) && te(Array.prototype, 'findIndex', $e.findIndex);
  var wt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable), Et = function (e, t) {
      u && wt(e, t) && Object.defineProperty(e, t, { enumerable: !1 });
    }, Tt = function () {
      for (var e = Number(this), t = arguments.length, n = t - e, r = new Array(n < 0 ? 0 : n), i = e; i < t; ++i)
        r[i - e] = arguments[i];
      return r;
    }, xt = function (e) {
      return function (t, n) {
        return t[n] = e[n], t;
      };
    }, _t = function (e, t) {
      var n, r = i(Object(t));
      return ue.IsCallable(Object.getOwnPropertySymbols) && (n = d(Object.getOwnPropertySymbols(Object(t)), wt(t))), f(S(r, n || []), xt(t), e);
    }, St = {
      assign: function (e, t) {
        var n = ue.ToObject(e, 'Cannot convert undefined or null to object');
        return f(ue.Call(Tt, 1, arguments), _t, n);
      },
      is: function (e, t) {
        return ue.SameValue(e, t);
      }
    };
  if (Object.assign && Object.preventExtensions && function () {
      var e = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(e, 'xy');
      } catch (t) {
        return 'y' === e[1];
      }
    }() && te(Object, 'assign', St.assign), g(Object, St), u) {
    var Ct = {
      setPrototypeOf: function (e, t) {
        var r, i = function (e, t) {
            if (!ue.TypeIsObject(e))
              throw new TypeError('cannot set prototype on a non-object');
            if (null !== t && !ue.TypeIsObject(t))
              throw new TypeError('can only set prototype to an object or null' + t);
          }, o = function (e, t) {
            return i(e, t), n(r, e, t), e;
          };
        try {
          r = e.getOwnPropertyDescriptor(e.prototype, '__proto__').set, n(r, {}, null);
        } catch (t) {
          if (e.prototype !== {}.__proto__)
            return;
          r = function (e) {
            this.__proto__ = e;
          }, o.polyfill = o(o({}, null), e.prototype) instanceof e;
        }
        return o;
      }(Object)
    };
    g(Object, Ct);
  }
  if (Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && function () {
      var e = Object.create(null), t = Object.getPrototypeOf, n = Object.setPrototypeOf;
      Object.getPrototypeOf = function (n) {
        var r = t(n);
        return r === e ? null : r;
      }, Object.setPrototypeOf = function (t, r) {
        return n(t, null === r ? e : r);
      }, Object.setPrototypeOf.polyfill = !1;
    }(), !!o(function () {
      return Object.keys('foo');
    })) {
    var It = Object.keys;
    te(Object, 'keys', function (e) {
      return It(ue.ToObject(e));
    }), i = Object.keys;
  }
  if (o(function () {
      return Object.keys(/a/g);
    })) {
    var Ot = Object.keys;
    te(Object, 'keys', function (e) {
      if (ee.regex(e)) {
        var t = [];
        for (var n in e)
          F(e, n) && I(t, n);
        return t;
      }
      return Ot(e);
    }), i = Object.keys;
  }
  if (Object.getOwnPropertyNames) {
    if (!!o(function () {
        return Object.getOwnPropertyNames('foo');
      })) {
      var Nt = 'object' == typeof window ? Object.getOwnPropertyNames(window) : [], Pt = Object.getOwnPropertyNames;
      te(Object, 'getOwnPropertyNames', function (e) {
        var t = ue.ToObject(e);
        if ('[object Window]' === m(t))
          try {
            return Pt(t);
          } catch (e) {
            return S([], Nt);
          }
        return Pt(t);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    if (!!o(function () {
        return Object.getOwnPropertyDescriptor('foo', 'bar');
      })) {
      var At = Object.getOwnPropertyDescriptor;
      te(Object, 'getOwnPropertyDescriptor', function (e, t) {
        return At(ue.ToObject(e), t);
      });
    }
  }
  if (Object.seal) {
    if (!!o(function () {
        return Object.seal('foo');
      })) {
      var Dt = Object.seal;
      te(Object, 'seal', function (e) {
        return ue.TypeIsObject(e) ? Dt(e) : e;
      });
    }
  }
  if (Object.isSealed) {
    if (!!o(function () {
        return Object.isSealed('foo');
      })) {
      var Rt = Object.isSealed;
      te(Object, 'isSealed', function (e) {
        return !ue.TypeIsObject(e) || Rt(e);
      });
    }
  }
  if (Object.freeze) {
    if (!!o(function () {
        return Object.freeze('foo');
      })) {
      var kt = Object.freeze;
      te(Object, 'freeze', function (e) {
        return ue.TypeIsObject(e) ? kt(e) : e;
      });
    }
  }
  if (Object.isFrozen) {
    if (!!o(function () {
        return Object.isFrozen('foo');
      })) {
      var jt = Object.isFrozen;
      te(Object, 'isFrozen', function (e) {
        return !ue.TypeIsObject(e) || jt(e);
      });
    }
  }
  if (Object.preventExtensions) {
    if (!!o(function () {
        return Object.preventExtensions('foo');
      })) {
      var Mt = Object.preventExtensions;
      te(Object, 'preventExtensions', function (e) {
        return ue.TypeIsObject(e) ? Mt(e) : e;
      });
    }
  }
  if (Object.isExtensible) {
    if (!!o(function () {
        return Object.isExtensible('foo');
      })) {
      var Lt = Object.isExtensible;
      te(Object, 'isExtensible', function (e) {
        return !!ue.TypeIsObject(e) && Lt(e);
      });
    }
  }
  if (Object.getPrototypeOf) {
    if (!!o(function () {
        return Object.getPrototypeOf('foo');
      })) {
      var Ft = Object.getPrototypeOf;
      te(Object, 'getPrototypeOf', function (e) {
        return Ft(ue.ToObject(e));
      });
    }
  }
  var qt = u && function () {
    var e = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return e && ue.IsCallable(e.get);
  }();
  if (u && !qt) {
    var Vt = function () {
      if (!ue.TypeIsObject(this))
        throw new TypeError('Method called on incompatible type: must be an object.');
      var e = '';
      return this.global && (e += 'g'), this.ignoreCase && (e += 'i'), this.multiline && (e += 'm'), this.unicode && (e += 'u'), this.sticky && (e += 'y'), e;
    };
    y.getter(RegExp.prototype, 'flags', Vt);
  }
  var Ht = u && a(function () {
      return '/a/i' === String(new RegExp(/a/g, 'i'));
    }), Ut = ne && u && function () {
      var e = /./;
      return e[W.match] = !1, RegExp(e) === e;
    }(), Bt = a(function () {
      return '/abc/' === RegExp.prototype.toString.call({ source: 'abc' });
    }), zt = Bt && a(function () {
      return '/a/b' === RegExp.prototype.toString.call({
        source: 'a',
        flags: 'b'
      });
    });
  if (!Bt || !zt) {
    var Wt = RegExp.prototype.toString;
    h(RegExp.prototype, 'toString', function () {
      var e = ue.RequireObjectCoercible(this);
      return ee.regex(e) ? n(Wt, e) : '/' + oe(e.source) + '/' + oe(e.flags);
    }, !0), y.preserveToString(RegExp.prototype.toString, Wt);
  }
  if (u && (!Ht || Ut)) {
    var Gt = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get, $t = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {}, Qt = function () {
        return this.source;
      }, Xt = ue.IsCallable($t.get) ? $t.get : Qt, Yt = RegExp, Jt = function () {
        return function e(t, n) {
          var r = ue.IsRegExp(t);
          if (!(this instanceof e) && r && void 0 === n && t.constructor === e)
            return t;
          var i = t, o = n;
          return ee.regex(t) ? (i = ue.Call(Xt, t), o = void 0 === n ? ue.Call(Gt, t) : n, new e(i, o)) : (r && (i = t.source, o = void 0 === n ? t.flags : n), new Yt(t, n));
        };
      }();
    _e(Yt, Jt, { $input: !0 }), RegExp = Jt, y.redefine(E, 'RegExp', Jt);
  }
  if (u) {
    var Kt = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    c(i(Kt), function (e) {
      e in RegExp && !(Kt[e] in RegExp) && y.getter(RegExp, Kt[e], function () {
        return RegExp[e];
      });
    });
  }
  Ce(RegExp);
  var Zt = 1 / Number.EPSILON, en = function (e) {
      return e + Zt - Zt;
    }, tn = Math.pow(2, -23), nn = Math.pow(2, 127) * (2 - tn), rn = Math.pow(2, -126), on = Math.E, an = Math.LOG2E, sn = Math.LOG10E, un = Number.prototype.clz;
  delete Number.prototype.clz;
  var ln = {
      acosh: function (e) {
        var t = Number(e);
        if ($(t) || e < 1)
          return NaN;
        if (1 === t)
          return 0;
        if (t === 1 / 0)
          return t;
        var n = 1 / (t * t);
        if (t < 2)
          return Y(t - 1 + L(1 - n) * t);
        var r = t / 2;
        return Y(r + L(1 - n) * r - 1) + 1 / an;
      },
      asinh: function (e) {
        var t = Number(e);
        if (0 === t || !T(t))
          return t;
        var n = k(t), r = n * n, i = X(t);
        return n < 1 ? i * Y(n + r / (L(r + 1) + 1)) : i * (Y(n / 2 + L(1 + 1 / r) * n / 2 - 1) + 1 / an);
      },
      atanh: function (e) {
        var t = Number(e);
        if (0 === t)
          return t;
        if (-1 === t)
          return -1 / 0;
        if (1 === t)
          return 1 / 0;
        if ($(t) || t < -1 || t > 1)
          return NaN;
        var n = k(t);
        return X(t) * Y(2 * n / (1 - n)) / 2;
      },
      cbrt: function (e) {
        var t = Number(e);
        if (0 === t)
          return t;
        var n, r = t < 0;
        return r && (t = -t), t === 1 / 0 ? n = 1 / 0 : (n = j(M(t) / 3), n = (t / (n * n) + 2 * n) / 3), r ? -n : n;
      },
      clz32: function (e) {
        var t = Number(e), n = ue.ToUint32(t);
        return 0 === n ? 32 : un ? ue.Call(un, n) : 31 - R(M(n + 0.5) * an);
      },
      cosh: function (e) {
        var t = Number(e);
        if (0 === t)
          return 1;
        if ($(t))
          return NaN;
        if (!T(t))
          return 1 / 0;
        var n = j(k(t) - 1);
        return (n + 1 / (n * on * on)) * (on / 2);
      },
      expm1: function (e) {
        var t = Number(e);
        if (t === -1 / 0)
          return -1;
        if (!T(t) || 0 === t)
          return t;
        if (k(t) > 0.5)
          return j(t) - 1;
        for (var n = t, r = 0, i = 1; r + n !== r;)
          r += n, i += 1, n *= t / i;
        return r;
      },
      hypot: function (e, t) {
        for (var n = 0, r = 0, i = 0; i < arguments.length; ++i) {
          var o = k(Number(arguments[i]));
          r < o ? (n *= r / o * (r / o), n += 1, r = o) : n += o > 0 ? o / r * (o / r) : o;
        }
        return r === 1 / 0 ? 1 / 0 : r * L(n);
      },
      log2: function (e) {
        return M(e) * an;
      },
      log10: function (e) {
        return M(e) * sn;
      },
      log1p: Y,
      sign: X,
      sinh: function (e) {
        var t = Number(e);
        if (!T(t) || 0 === t)
          return t;
        var n = k(t);
        if (n < 1) {
          var r = Math.expm1(n);
          return X(t) * r * (1 + 1 / (r + 1)) / 2;
        }
        var i = j(n - 1);
        return X(t) * (i - 1 / (i * on * on)) * (on / 2);
      },
      tanh: function (e) {
        var t = Number(e);
        return $(t) || 0 === t ? t : t >= 20 ? 1 : t <= -20 ? -1 : (Math.expm1(t) - Math.expm1(-t)) / (j(t) + j(-t));
      },
      trunc: function (e) {
        var t = Number(e);
        return t < 0 ? -R(-t) : R(t);
      },
      imul: function (e, t) {
        var n = ue.ToUint32(e), r = ue.ToUint32(t), i = n >>> 16 & 65535, o = 65535 & n, a = r >>> 16 & 65535, s = 65535 & r;
        return o * s + (i * s + o * a << 16 >>> 0) | 0;
      },
      fround: function (e) {
        var t = Number(e);
        if (0 === t || t === 1 / 0 || t === -1 / 0 || $(t))
          return t;
        var n = X(t), r = k(t);
        if (r < rn)
          return n * en(r / rn / tn) * rn * tn;
        var i = (1 + tn / Number.EPSILON) * r, o = i - (i - r);
        return o > nn || $(o) ? n * (1 / 0) : n * o;
      }
    }, cn = function (e, t, n) {
      return k(1 - e / t) / Number.EPSILON < (n || 8);
    };
  g(Math, ln), h(Math, 'sinh', ln.sinh, Math.sinh(710) === 1 / 0), h(Math, 'cosh', ln.cosh, Math.cosh(710) === 1 / 0), h(Math, 'log1p', ln.log1p, -1e-17 !== Math.log1p(-1e-17)), h(Math, 'asinh', ln.asinh, Math.asinh(-10000000) !== -Math.asinh(10000000)), h(Math, 'asinh', ln.asinh, Math.asinh(1e+300) === 1 / 0), h(Math, 'atanh', ln.atanh, 0 === Math.atanh(1e-300)), h(Math, 'tanh', ln.tanh, -2e-17 !== Math.tanh(-2e-17)), h(Math, 'acosh', ln.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), h(Math, 'acosh', ln.acosh, !cn(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON))), h(Math, 'cbrt', ln.cbrt, !cn(Math.cbrt(1e-300), 1e-100)), h(Math, 'sinh', ln.sinh, -2e-17 !== Math.sinh(-2e-17));
  var fn = Math.expm1(10);
  h(Math, 'expm1', ln.expm1, fn > 22025.465794806718 || fn < 22025.465794806718), h(Math, 'hypot', ln.hypot, Math.hypot(1 / 0, NaN) !== 1 / 0);
  var dn = Math.round, pn = 0 === Math.round(0.5 - Number.EPSILON / 4) && 1 === Math.round(Number.EPSILON / 3.99 - 0.5), hn = Zt + 1, gn = 2 * Zt - 1, mn = [
      hn,
      gn
    ].every(function (e) {
      return Math.round(e) === e;
    });
  h(Math, 'round', function (e) {
    var t = R(e), n = -1 === t ? -0 : t + 1;
    return e - t < 0.5 ? t : n;
  }, !pn || !mn), y.preserveToString(Math.round, dn);
  var vn = Math.imul;
  -5 !== Math.imul(4294967295, 5) && (Math.imul = ln.imul, y.preserveToString(Math.imul, vn)), 2 !== Math.imul.length && te(Math, 'imul', function (e, t) {
    return ue.Call(vn, Math, arguments);
  });
  var yn = function () {
    var e = E.setTimeout;
    if ('function' == typeof e || 'object' == typeof e) {
      ue.IsPromise = function (e) {
        return !!ue.TypeIsObject(e) && void 0 !== e._promise;
      };
      var t, r = function (e) {
          if (!ue.IsConstructor(e))
            throw new TypeError('Bad promise constructor');
          var t = this, n = function (e, n) {
              if (void 0 !== t.resolve || void 0 !== t.reject)
                throw new TypeError('Bad Promise implementation!');
              t.resolve = e, t.reject = n;
            };
          if (t.resolve = void 0, t.reject = void 0, t.promise = new e(n), !ue.IsCallable(t.resolve) || !ue.IsCallable(t.reject))
            throw new TypeError('Bad promise constructor');
        };
      'undefined' != typeof window && ue.IsCallable(window.postMessage) && (t = function () {
        var e = [], t = function (t) {
            I(e, t), window.postMessage('zero-timeout-message', '*');
          }, n = function (t) {
            if (t.source === window && 'zero-timeout-message' === t.data) {
              if (t.stopPropagation(), 0 === e.length)
                return;
              P(e)();
            }
          };
        return window.addEventListener('message', n, !0), t;
      });
      var i, o, a = ue.IsCallable(E.setImmediate) ? E.setImmediate : 'object' == typeof process && process.nextTick ? process.nextTick : function () {
          var e = E.Promise, t = e && e.resolve && e.resolve();
          return t && function (e) {
            return t.then(e);
          };
        }() || (ue.IsCallable(t) ? t() : function (t) {
          e(t, 0);
        }), s = function (e) {
          return e;
        }, u = function (e) {
          throw e;
        }, l = {}, c = function (e, t, n) {
          a(function () {
            f(e, t, n);
          });
        }, f = function (e, t, n) {
          var r, i;
          if (t === l)
            return e(n);
          try {
            r = e(n), i = t.resolve;
          } catch (e) {
            r = e, i = t.reject;
          }
          i(r);
        }, d = function (e, t) {
          var n = e._promise, r = n.reactionLength;
          if (r > 0 && (c(n.fulfillReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
            for (var i = 1, o = 0; i < r; i++, o += 3)
              c(n[o + 0], n[o + 2], t), e[o + 0] = void 0, e[o + 1] = void 0, e[o + 2] = void 0;
          n.result = t, n.state = 1, n.reactionLength = 0;
        }, p = function (e, t) {
          var n = e._promise, r = n.reactionLength;
          if (r > 0 && (c(n.rejectReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
            for (var i = 1, o = 0; i < r; i++, o += 3)
              c(n[o + 1], n[o + 2], t), e[o + 0] = void 0, e[o + 1] = void 0, e[o + 2] = void 0;
          n.result = t, n.state = 2, n.reactionLength = 0;
        }, h = function (e) {
          var t = !1;
          return {
            resolve: function (n) {
              var r;
              if (!t) {
                if (t = !0, n === e)
                  return p(e, new TypeError('Self resolution'));
                if (!ue.TypeIsObject(n))
                  return d(e, n);
                try {
                  r = n.then;
                } catch (t) {
                  return p(e, t);
                }
                if (!ue.IsCallable(r))
                  return d(e, n);
                a(function () {
                  v(e, n, r);
                });
              }
            },
            reject: function (n) {
              if (!t)
                return t = !0, p(e, n);
            }
          };
        }, m = function (e, t, r, i) {
          e === o ? n(e, t, r, i, l) : n(e, t, r, i);
        }, v = function (e, t, n) {
          var r = h(e), i = r.resolve, o = r.reject;
          try {
            m(n, t, i, o);
          } catch (e) {
            o(e);
          }
        }, y = function () {
          var e = function (t) {
            if (!(this instanceof e))
              throw new TypeError('Constructor Promise requires "new"');
            if (this && this._promise)
              throw new TypeError('Bad construction');
            if (!ue.IsCallable(t))
              throw new TypeError('not a valid resolver');
            var n = Pe(this, e, i, {
                _promise: {
                  result: void 0,
                  state: 0,
                  reactionLength: 0,
                  fulfillReactionHandler0: void 0,
                  rejectReactionHandler0: void 0,
                  reactionCapability0: void 0
                }
              }), r = h(n), o = r.reject;
            try {
              t(r.resolve, o);
            } catch (e) {
              o(e);
            }
            return n;
          };
          return e;
        }();
      i = y.prototype;
      var b = function (e, t, n, r) {
          var i = !1;
          return function (o) {
            if (!i && (i = !0, t[e] = o, 0 == --r.count)) {
              (0, n.resolve)(t);
            }
          };
        }, w = function (e, t, n) {
          for (var r, i, o = e.iterator, a = [], s = { count: 1 }, u = 0;;) {
            try {
              if (!1 === (r = ue.IteratorStep(o))) {
                e.done = !0;
                break;
              }
              i = r.value;
            } catch (t) {
              throw e.done = !0, t;
            }
            a[u] = void 0;
            var l = t.resolve(i), c = b(u, a, n, s);
            s.count += 1, m(l.then, l, c, n.reject), u += 1;
          }
          if (0 == --s.count) {
            (0, n.resolve)(a);
          }
          return n.promise;
        }, T = function (e, t, n) {
          for (var r, i, o, a = e.iterator;;) {
            try {
              if (!1 === (r = ue.IteratorStep(a))) {
                e.done = !0;
                break;
              }
              i = r.value;
            } catch (t) {
              throw e.done = !0, t;
            }
            o = t.resolve(i), m(o.then, o, n.resolve, n.reject);
          }
          return n.promise;
        };
      return g(y, {
        all: function (e) {
          var t = this;
          if (!ue.TypeIsObject(t))
            throw new TypeError('Promise is not object');
          var n, i, o = new r(t);
          try {
            return n = ue.GetIterator(e), i = {
              iterator: n,
              done: !1
            }, w(i, t, o);
          } catch (e) {
            var a = e;
            if (i && !i.done)
              try {
                ue.IteratorClose(n, !0);
              } catch (e) {
                a = e;
              }
            var s = o.reject;
            return s(a), o.promise;
          }
        },
        race: function (e) {
          var t = this;
          if (!ue.TypeIsObject(t))
            throw new TypeError('Promise is not object');
          var n, i, o = new r(t);
          try {
            return n = ue.GetIterator(e), i = {
              iterator: n,
              done: !1
            }, T(i, t, o);
          } catch (e) {
            var a = e;
            if (i && !i.done)
              try {
                ue.IteratorClose(n, !0);
              } catch (e) {
                a = e;
              }
            var s = o.reject;
            return s(a), o.promise;
          }
        },
        reject: function (e) {
          var t = this;
          if (!ue.TypeIsObject(t))
            throw new TypeError('Bad promise constructor');
          var n = new r(t);
          return (0, n.reject)(e), n.promise;
        },
        resolve: function (e) {
          var t = this;
          if (!ue.TypeIsObject(t))
            throw new TypeError('Bad promise constructor');
          if (ue.IsPromise(e)) {
            var n = e.constructor;
            if (n === t)
              return e;
          }
          var i = new r(t);
          return (0, i.resolve)(e), i.promise;
        }
      }), g(i, {
        catch: function (e) {
          return this.then(null, e);
        },
        then: function (e, t) {
          var n = this;
          if (!ue.IsPromise(n))
            throw new TypeError('not a promise');
          var i, o = ue.SpeciesConstructor(n, y);
          i = arguments.length > 2 && arguments[2] === l && o === y ? l : new r(o);
          var a, f = ue.IsCallable(e) ? e : s, d = ue.IsCallable(t) ? t : u, p = n._promise;
          if (0 === p.state) {
            if (0 === p.reactionLength)
              p.fulfillReactionHandler0 = f, p.rejectReactionHandler0 = d, p.reactionCapability0 = i;
            else {
              var h = 3 * (p.reactionLength - 1);
              p[h + 0] = f, p[h + 1] = d, p[h + 2] = i;
            }
            p.reactionLength += 1;
          } else if (1 === p.state)
            a = p.result, c(f, i, a);
          else {
            if (2 !== p.state)
              throw new TypeError('unexpected Promise state');
            a = p.result, c(d, i, a);
          }
          return i.promise;
        }
      }), l = new r(y), o = i.then, y;
    }
  }();
  if (E.Promise && (delete E.Promise.accept, delete E.Promise.defer, delete E.Promise.prototype.chain), 'function' == typeof yn) {
    g(E, { Promise: yn });
    var bn = w(E.Promise, function (e) {
        return e.resolve(42).then(function () {
        }) instanceof e;
      }), wn = !o(function () {
        return E.Promise.reject(42).then(null, 5).then(null, q);
      }), En = o(function () {
        return E.Promise.call(3, q);
      }), Tn = function (e) {
        var t = e.resolve(5);
        t.constructor = {};
        var n = e.resolve(t);
        try {
          n.then(null, q).then(null, q);
        } catch (e) {
          return !0;
        }
        return t === n;
      }(E.Promise), xn = u && function () {
        var e = 0, t = Object.defineProperty({}, 'then', {
            get: function () {
              e += 1;
            }
          });
        return Promise.resolve(t), 1 === e;
      }(), _n = function e(t) {
        var n = new Promise(t);
        t(3, function () {
        }), this.then = n.then, this.constructor = e;
      };
    _n.prototype = Promise.prototype, _n.all = Promise.all;
    var Sn = a(function () {
      return !!_n.all([
        1,
        2
      ]);
    });
    if (bn && wn && En && !Tn && xn && !Sn || (Promise = yn, te(E, 'Promise', yn)), 1 !== Promise.all.length) {
      var Cn = Promise.all;
      te(Promise, 'all', function (e) {
        return ue.Call(Cn, this, arguments);
      });
    }
    if (1 !== Promise.race.length) {
      var In = Promise.race;
      te(Promise, 'race', function (e) {
        return ue.Call(In, this, arguments);
      });
    }
    if (1 !== Promise.resolve.length) {
      var On = Promise.resolve;
      te(Promise, 'resolve', function (e) {
        return ue.Call(On, this, arguments);
      });
    }
    if (1 !== Promise.reject.length) {
      var Nn = Promise.reject;
      te(Promise, 'reject', function (e) {
        return ue.Call(Nn, this, arguments);
      });
    }
    Et(Promise, 'all'), Et(Promise, 'race'), Et(Promise, 'resolve'), Et(Promise, 'reject'), Ce(Promise);
  }
  var Pn = function (e) {
      var t = i(f(e, function (e, t) {
        return e[t] = !0, e;
      }, {}));
      return e.join(':') === t.join(':');
    }, An = Pn([
      'z',
      'a',
      'bb'
    ]), Dn = Pn([
      'z',
      1,
      'a',
      '3',
      2
    ]);
  if (u) {
    var Rn = function (e, t) {
        return t || An ? se(e) ? '^' + ue.ToString(e) : 'string' == typeof e ? '$' + e : 'number' == typeof e ? Dn ? e : 'n' + e : 'boolean' == typeof e ? 'b' + e : null : null;
      }, kn = function () {
        return Object.create ? Object.create(null) : {};
      }, jn = function (e, t, i) {
        if (r(i) || ee.string(i))
          c(i, function (e) {
            if (!ue.TypeIsObject(e))
              throw new TypeError('Iterator value ' + e + ' is not an entry object');
            t.set(e[0], e[1]);
          });
        else if (i instanceof e)
          n(e.prototype.forEach, i, function (e, n) {
            t.set(n, e);
          });
        else {
          var o, a;
          if (!se(i)) {
            if (a = t.set, !ue.IsCallable(a))
              throw new TypeError('bad map');
            o = ue.GetIterator(i);
          }
          if (void 0 !== o)
            for (;;) {
              var s = ue.IteratorStep(o);
              if (!1 === s)
                break;
              var u = s.value;
              try {
                if (!ue.TypeIsObject(u))
                  throw new TypeError('Iterator value ' + u + ' is not an entry object');
                n(a, t, u[0], u[1]);
              } catch (e) {
                throw ue.IteratorClose(o, !0), e;
              }
            }
        }
      }, Mn = function (e, t, i) {
        if (r(i) || ee.string(i))
          c(i, function (e) {
            t.add(e);
          });
        else if (i instanceof e)
          n(e.prototype.forEach, i, function (e) {
            t.add(e);
          });
        else {
          var o, a;
          if (!se(i)) {
            if (a = t.add, !ue.IsCallable(a))
              throw new TypeError('bad set');
            o = ue.GetIterator(i);
          }
          if (void 0 !== o)
            for (;;) {
              var s = ue.IteratorStep(o);
              if (!1 === s)
                break;
              var u = s.value;
              try {
                n(a, t, u);
              } catch (e) {
                throw ue.IteratorClose(o, !0), e;
              }
            }
        }
      }, Ln = {
        Map: function () {
          var e = {}, t = function (e, t) {
              this.key = e, this.value = t, this.next = null, this.prev = null;
            };
          t.prototype.isRemoved = function () {
            return this.key === e;
          };
          var r = function (e) {
              return !!e._es6map;
            }, i = function (e, t) {
              if (!ue.TypeIsObject(e) || !r(e))
                throw new TypeError('Method Map.prototype.' + t + ' called on incompatible receiver ' + ue.ToString(e));
            }, o = function (e, t) {
              i(e, '[[MapIterator]]'), this.head = e._head, this.i = this.head, this.kind = t;
            };
          o.prototype = {
            isMapIterator: !0,
            next: function () {
              if (!this.isMapIterator)
                throw new TypeError('Not a MapIterator');
              var e = this.i, t = this.kind, n = this.head;
              if (void 0 === this.i)
                return ze();
              for (; e.isRemoved() && e !== n;)
                e = e.prev;
              for (var r; e.next !== n;)
                if (e = e.next, !e.isRemoved())
                  return r = 'key' === t ? e.key : 'value' === t ? e.value : [
                    e.key,
                    e.value
                  ], this.i = e, ze(r);
              return this.i = void 0, ze();
            }
          }, Ie(o.prototype);
          var a, s = function e() {
              if (!(this instanceof e))
                throw new TypeError('Constructor Map requires "new"');
              if (this && this._es6map)
                throw new TypeError('Bad construction');
              var n = Pe(this, e, a, {
                  _es6map: !0,
                  _head: null,
                  _map: V ? new V() : null,
                  _size: 0,
                  _storage: kn()
                }), r = new t(null, null);
              return r.next = r.prev = r, n._head = r, arguments.length > 0 && jn(e, n, arguments[0]), n;
            };
          return a = s.prototype, y.getter(a, 'size', function () {
            if (void 0 === this._size)
              throw new TypeError('size method called on incompatible Map');
            return this._size;
          }), g(a, {
            get: function (e) {
              i(this, 'get');
              var t, n = Rn(e, !0);
              if (null !== n)
                return t = this._storage[n], t ? t.value : void 0;
              if (this._map)
                return t = U.call(this._map, e), t ? t.value : void 0;
              for (var r = this._head, o = r; (o = o.next) !== r;)
                if (ue.SameValueZero(o.key, e))
                  return o.value;
            },
            has: function (e) {
              i(this, 'has');
              var t = Rn(e, !0);
              if (null !== t)
                return void 0 !== this._storage[t];
              if (this._map)
                return B.call(this._map, e);
              for (var n = this._head, r = n; (r = r.next) !== n;)
                if (ue.SameValueZero(r.key, e))
                  return !0;
              return !1;
            },
            set: function (e, n) {
              i(this, 'set');
              var r, o = this._head, a = o, s = Rn(e, !0);
              if (null !== s) {
                if (void 0 !== this._storage[s])
                  return this._storage[s].value = n, this;
                r = this._storage[s] = new t(e, n), a = o.prev;
              } else
                this._map && (B.call(this._map, e) ? U.call(this._map, e).value = n : (r = new t(e, n), z.call(this._map, e, r), a = o.prev));
              for (; (a = a.next) !== o;)
                if (ue.SameValueZero(a.key, e))
                  return a.value = n, this;
              return r = r || new t(e, n), ue.SameValue(-0, e) && (r.key = 0), r.next = this._head, r.prev = this._head.prev, r.prev.next = r, r.next.prev = r, this._size += 1, this;
            },
            delete: function (t) {
              i(this, 'delete');
              var n = this._head, r = n, o = Rn(t, !0);
              if (null !== o) {
                if (void 0 === this._storage[o])
                  return !1;
                r = this._storage[o].prev, delete this._storage[o];
              } else if (this._map) {
                if (!B.call(this._map, t))
                  return !1;
                r = U.call(this._map, t).prev, H.call(this._map, t);
              }
              for (; (r = r.next) !== n;)
                if (ue.SameValueZero(r.key, t))
                  return r.key = e, r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0;
              return !1;
            },
            clear: function () {
              i(this, 'clear'), this._map = V ? new V() : null, this._size = 0, this._storage = kn();
              for (var t = this._head, n = t, r = n.next; (n = r) !== t;)
                n.key = e, n.value = e, r = n.next, n.next = n.prev = t;
              t.next = t.prev = t;
            },
            keys: function () {
              return i(this, 'keys'), new o(this, 'key');
            },
            values: function () {
              return i(this, 'values'), new o(this, 'value');
            },
            entries: function () {
              return i(this, 'entries'), new o(this, 'key+value');
            },
            forEach: function (e) {
              i(this, 'forEach');
              for (var t = arguments.length > 1 ? arguments[1] : null, r = this.entries(), o = r.next(); !o.done; o = r.next())
                t ? n(e, t, o.value[1], o.value[0], this) : e(o.value[1], o.value[0], this);
            }
          }), Ie(a, a.entries), s;
        }(),
        Set: function () {
          var e, t = function (e) {
              return e._es6set && void 0 !== e._storage;
            }, r = function (e, n) {
              if (!ue.TypeIsObject(e) || !t(e))
                throw new TypeError('Set.prototype.' + n + ' called on incompatible receiver ' + ue.ToString(e));
            }, o = function t() {
              if (!(this instanceof t))
                throw new TypeError('Constructor Set requires "new"');
              if (this && this._es6set)
                throw new TypeError('Bad construction');
              var n = Pe(this, t, e, {
                _es6set: !0,
                '[[SetData]]': null,
                _storage: kn()
              });
              if (!n._es6set)
                throw new TypeError('bad set');
              return arguments.length > 0 && Mn(t, n, arguments[0]), n;
            };
          e = o.prototype;
          var a = function (e) {
              var t = e;
              if ('^null' === t)
                return null;
              if ('^undefined' !== t) {
                var n = t.charAt(0);
                return '$' === n ? C(t, 1) : 'n' === n ? +C(t, 1) : 'b' === n ? 'btrue' === t : +t;
              }
            }, s = function (e) {
              if (!e['[[SetData]]']) {
                var t = new Ln.Map();
                e['[[SetData]]'] = t, c(i(e._storage), function (e) {
                  var n = a(e);
                  t.set(n, n);
                }), e['[[SetData]]'] = t;
              }
              e._storage = null;
            };
          y.getter(o.prototype, 'size', function () {
            return r(this, 'size'), this._storage ? i(this._storage).length : (s(this), this['[[SetData]]'].size);
          }), g(o.prototype, {
            has: function (e) {
              r(this, 'has');
              var t;
              return this._storage && null !== (t = Rn(e)) ? !!this._storage[t] : (s(this), this['[[SetData]]'].has(e));
            },
            add: function (e) {
              r(this, 'add');
              var t;
              return this._storage && null !== (t = Rn(e)) ? (this._storage[t] = !0, this) : (s(this), this['[[SetData]]'].set(e, e), this);
            },
            delete: function (e) {
              r(this, 'delete');
              var t;
              if (this._storage && null !== (t = Rn(e))) {
                var n = F(this._storage, t);
                return delete this._storage[t] && n;
              }
              return s(this), this['[[SetData]]'].delete(e);
            },
            clear: function () {
              r(this, 'clear'), this._storage && (this._storage = kn()), this['[[SetData]]'] && this['[[SetData]]'].clear();
            },
            values: function () {
              return r(this, 'values'), s(this), new u(this['[[SetData]]'].values());
            },
            entries: function () {
              return r(this, 'entries'), s(this), new u(this['[[SetData]]'].entries());
            },
            forEach: function (e) {
              r(this, 'forEach');
              var t = arguments.length > 1 ? arguments[1] : null, i = this;
              s(i), this['[[SetData]]'].forEach(function (r, o) {
                t ? n(e, t, o, o, i) : e(o, o, i);
              });
            }
          }), h(o.prototype, 'keys', o.prototype.values, !0), Ie(o.prototype, o.prototype.values);
          var u = function (e) {
            this.it = e;
          };
          return u.prototype = {
            isSetIterator: !0,
            next: function () {
              if (!this.isSetIterator)
                throw new TypeError('Not a SetIterator');
              return this.it.next();
            }
          }, Ie(u.prototype), o;
        }()
      };
    if (E.Set && !Set.prototype.delete && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray(new Set().keys) && (E.Set = Ln.Set), E.Map || E.Set) {
      a(function () {
        return 2 === new Map([[
            1,
            2
          ]]).get(1);
      }) || (E.Map = function e() {
        if (!(this instanceof e))
          throw new TypeError('Constructor Map requires "new"');
        var t = new V();
        return arguments.length > 0 && jn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, E.Map.prototype), t;
      }, E.Map.prototype = b(V.prototype), h(E.Map.prototype, 'constructor', E.Map, !0), y.preserveToString(E.Map, V));
      var Fn = new Map(), qn = function () {
          var e = new Map([
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              0
            ],
            [
              4,
              0
            ]
          ]);
          return e.set(-0, e), e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0);
        }(), Vn = Fn.set(1, 2) === Fn;
      qn && Vn || te(Map.prototype, 'set', function (e, t) {
        return n(z, this, 0 === e ? 0 : e, t), this;
      }), qn || (g(Map.prototype, {
        get: function (e) {
          return n(U, this, 0 === e ? 0 : e);
        },
        has: function (e) {
          return n(B, this, 0 === e ? 0 : e);
        }
      }, !0), y.preserveToString(Map.prototype.get, U), y.preserveToString(Map.prototype.has, B));
      var Hn = new Set(), Un = Set.prototype.delete && Set.prototype.add && Set.prototype.has && function (e) {
          return e.delete(0), e.add(-0), !e.has(0);
        }(Hn), Bn = Hn.add(1) === Hn;
      if (!Un || !Bn) {
        var zn = Set.prototype.add;
        Set.prototype.add = function (e) {
          return n(zn, this, 0 === e ? 0 : e), this;
        }, y.preserveToString(Set.prototype.add, zn);
      }
      if (!Un) {
        var Wn = Set.prototype.has;
        Set.prototype.has = function (e) {
          return n(Wn, this, 0 === e ? 0 : e);
        }, y.preserveToString(Set.prototype.has, Wn);
        var Gn = Set.prototype.delete;
        Set.prototype.delete = function (e) {
          return n(Gn, this, 0 === e ? 0 : e);
        }, y.preserveToString(Set.prototype.delete, Gn);
      }
      var $n = w(E.Map, function (e) {
          var t = new e([]);
          return t.set(42, 42), t instanceof e;
        }), Qn = Object.setPrototypeOf && !$n, Xn = function () {
          try {
            return !(E.Map() instanceof E.Map);
          } catch (e) {
            return e instanceof TypeError;
          }
        }();
      0 === E.Map.length && !Qn && Xn || (E.Map = function e() {
        if (!(this instanceof e))
          throw new TypeError('Constructor Map requires "new"');
        var t = new V();
        return arguments.length > 0 && jn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t;
      }, E.Map.prototype = V.prototype, h(E.Map.prototype, 'constructor', E.Map, !0), y.preserveToString(E.Map, V));
      var Yn = w(E.Set, function (e) {
          var t = new e([]);
          return t.add(42, 42), t instanceof e;
        }), Jn = Object.setPrototypeOf && !Yn, Kn = function () {
          try {
            return !(E.Set() instanceof E.Set);
          } catch (e) {
            return e instanceof TypeError;
          }
        }();
      if (0 !== E.Set.length || Jn || !Kn) {
        var Zn = E.Set;
        E.Set = function e() {
          if (!(this instanceof e))
            throw new TypeError('Constructor Set requires "new"');
          var t = new Zn();
          return arguments.length > 0 && Mn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t;
        }, E.Set.prototype = Zn.prototype, h(E.Set.prototype, 'constructor', E.Set, !0), y.preserveToString(E.Set, Zn);
      }
      var er = new E.Map(), tr = !a(function () {
          return er.keys().next().done;
        });
      if (('function' != typeof E.Map.prototype.clear || 0 !== new E.Set().size || 0 !== er.size || 'function' != typeof E.Map.prototype.keys || 'function' != typeof E.Set.prototype.keys || 'function' != typeof E.Map.prototype.forEach || 'function' != typeof E.Set.prototype.forEach || s(E.Map) || s(E.Set) || 'function' != typeof er.keys().next || tr || !$n) && g(E, {
          Map: Ln.Map,
          Set: Ln.Set
        }, !0), E.Set.prototype.keys !== E.Set.prototype.values && h(E.Set.prototype, 'keys', E.Set.prototype.values, !0), Ie(Object.getPrototypeOf(new E.Map().keys())), Ie(Object.getPrototypeOf(new E.Set().keys())), l && 'has' !== E.Set.prototype.has.name) {
        var nr = E.Set.prototype.has;
        te(E.Set.prototype, 'has', function (e) {
          return n(nr, this, e);
        });
      }
    }
    g(E, Ln), Ce(E.Map), Ce(E.Set);
  }
  var rr = function (e) {
      if (!ue.TypeIsObject(e))
        throw new TypeError('target must be an object');
    }, ir = {
      apply: function () {
        return ue.Call(ue.Call, null, arguments);
      },
      construct: function (e, t) {
        if (!ue.IsConstructor(e))
          throw new TypeError('First argument must be a constructor.');
        var n = arguments.length > 2 ? arguments[2] : e;
        if (!ue.IsConstructor(n))
          throw new TypeError('new.target must be a constructor.');
        return ue.Construct(e, t, n, 'internal');
      },
      deleteProperty: function (e, t) {
        if (rr(e), u) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          if (n && !n.configurable)
            return !1;
        }
        return delete e[t];
      },
      has: function (e, t) {
        return rr(e), t in e;
      }
    };
  Object.getOwnPropertyNames && Object.assign(ir, {
    ownKeys: function (e) {
      rr(e);
      var t = Object.getOwnPropertyNames(e);
      return ue.IsCallable(Object.getOwnPropertySymbols) && O(t, Object.getOwnPropertySymbols(e)), t;
    }
  });
  var or = function (e) {
    return !o(e);
  };
  if (Object.preventExtensions && Object.assign(ir, {
      isExtensible: function (e) {
        return rr(e), Object.isExtensible(e);
      },
      preventExtensions: function (e) {
        return rr(e), or(function () {
          return Object.preventExtensions(e);
        });
      }
    }), u) {
    var ar = function (e, t, n) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        if (!r) {
          var i = Object.getPrototypeOf(e);
          if (null === i)
            return;
          return ar(i, t, n);
        }
        return 'value' in r ? r.value : r.get ? ue.Call(r.get, n) : void 0;
      }, sr = function (e, t, r, i) {
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (!o) {
          var a = Object.getPrototypeOf(e);
          if (null !== a)
            return sr(a, t, r, i);
          o = {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          };
        }
        if ('value' in o) {
          if (!o.writable)
            return !1;
          if (!ue.TypeIsObject(i))
            return !1;
          return Object.getOwnPropertyDescriptor(i, t) ? ie.defineProperty(i, t, { value: r }) : ie.defineProperty(i, t, {
            value: r,
            writable: !0,
            enumerable: !0,
            configurable: !0
          });
        }
        return !!o.set && (n(o.set, i, r), !0);
      };
    Object.assign(ir, {
      defineProperty: function (e, t, n) {
        return rr(e), or(function () {
          return Object.defineProperty(e, t, n);
        });
      },
      getOwnPropertyDescriptor: function (e, t) {
        return rr(e), Object.getOwnPropertyDescriptor(e, t);
      },
      get: function (e, t) {
        rr(e);
        var n = arguments.length > 2 ? arguments[2] : e;
        return ar(e, t, n);
      },
      set: function (e, t, n) {
        rr(e);
        var r = arguments.length > 3 ? arguments[3] : e;
        return sr(e, t, n, r);
      }
    });
  }
  if (Object.getPrototypeOf) {
    var ur = Object.getPrototypeOf;
    ir.getPrototypeOf = function (e) {
      return rr(e), ur(e);
    };
  }
  if (Object.setPrototypeOf && ir.getPrototypeOf) {
    var lr = function (e, t) {
      for (var n = t; n;) {
        if (e === n)
          return !0;
        n = ir.getPrototypeOf(n);
      }
      return !1;
    };
    Object.assign(ir, {
      setPrototypeOf: function (e, t) {
        if (rr(e), null !== t && !ue.TypeIsObject(t))
          throw new TypeError('proto must be an object or null');
        return t === ie.getPrototypeOf(e) || !(ie.isExtensible && !ie.isExtensible(e)) && (!lr(e, t) && (Object.setPrototypeOf(e, t), !0));
      }
    });
  }
  var cr = function (e, t) {
    if (ue.IsCallable(E.Reflect[e])) {
      a(function () {
        return E.Reflect[e](1), E.Reflect[e](NaN), E.Reflect[e](!0), !0;
      }) && te(E.Reflect, e, t);
    } else
      h(E.Reflect, e, t);
  };
  Object.keys(ir).forEach(function (e) {
    cr(e, ir[e]);
  });
  var fr = E.Reflect.getPrototypeOf;
  if (l && fr && 'getPrototypeOf' !== fr.name && te(E.Reflect, 'getPrototypeOf', function (e) {
      return n(fr, E.Reflect, e);
    }), E.Reflect.setPrototypeOf && a(function () {
      return E.Reflect.setPrototypeOf(1, {}), !0;
    }) && te(E.Reflect, 'setPrototypeOf', ir.setPrototypeOf), E.Reflect.defineProperty && (a(function () {
      var e = !E.Reflect.defineProperty(1, 'test', { value: 1 }), t = 'function' != typeof Object.preventExtensions || !E.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
      return e && t;
    }) || te(E.Reflect, 'defineProperty', ir.defineProperty)), E.Reflect.construct && (a(function () {
      var e = function () {
      };
      return E.Reflect.construct(function () {
      }, [], e) instanceof e;
    }) || te(E.Reflect, 'construct', ir.construct)), 'Invalid Date' !== String(new Date(NaN))) {
    var dr = Date.prototype.toString, pr = function () {
        var e = +this;
        return e !== e ? 'Invalid Date' : ue.Call(dr, this);
      };
    te(Date.prototype, 'toString', pr);
  }
  var hr = {
    anchor: function (e) {
      return ue.CreateHTML(this, 'a', 'name', e);
    },
    big: function () {
      return ue.CreateHTML(this, 'big', '', '');
    },
    blink: function () {
      return ue.CreateHTML(this, 'blink', '', '');
    },
    bold: function () {
      return ue.CreateHTML(this, 'b', '', '');
    },
    fixed: function () {
      return ue.CreateHTML(this, 'tt', '', '');
    },
    fontcolor: function (e) {
      return ue.CreateHTML(this, 'font', 'color', e);
    },
    fontsize: function (e) {
      return ue.CreateHTML(this, 'font', 'size', e);
    },
    italics: function () {
      return ue.CreateHTML(this, 'i', '', '');
    },
    link: function (e) {
      return ue.CreateHTML(this, 'a', 'href', e);
    },
    small: function () {
      return ue.CreateHTML(this, 'small', '', '');
    },
    strike: function () {
      return ue.CreateHTML(this, 'strike', '', '');
    },
    sub: function () {
      return ue.CreateHTML(this, 'sub', '', '');
    },
    sup: function () {
      return ue.CreateHTML(this, 'sup', '', '');
    }
  };
  c(Object.keys(hr), function (e) {
    var t = String.prototype[e], r = !1;
    if (ue.IsCallable(t)) {
      var i = n(t, '', ' " '), o = S([], i.match(/"/g)).length;
      r = i !== i.toLowerCase() || o > 2;
    } else
      r = !0;
    r && te(String.prototype, e, hr[e]);
  });
  var gr = function () {
      if (!ne)
        return !1;
      var e = 'object' == typeof JSON && 'function' == typeof JSON.stringify ? JSON.stringify : null;
      if (!e)
        return !1;
      if (void 0 !== e(W()))
        return !0;
      if ('[null]' !== e([W()]))
        return !0;
      var t = { a: W() };
      return t[W()] = !0, '{}' !== e(t);
    }(), mr = a(function () {
      return !ne || '{}' === JSON.stringify(Object(W())) && '[{}]' === JSON.stringify([Object(W())]);
    });
  if (gr || !mr) {
    var vr = JSON.stringify;
    te(JSON, 'stringify', function (e) {
      if ('symbol' != typeof e) {
        var t;
        arguments.length > 1 && (t = arguments[1]);
        var i = [e];
        if (r(t))
          i.push(t);
        else {
          var o = ue.IsCallable(t) ? t : null, a = function (e, t) {
              var r = o ? n(o, this, e, t) : t;
              if ('symbol' != typeof r)
                return ee.symbol(r) ? xt({})(r) : r;
            };
          i.push(a);
        }
        return arguments.length > 2 && i.push(arguments[2]), vr.apply(this, i);
      }
    });
  }
  return E;
}), function (e) {
  function t(e) {
    throw new RangeError(P[e]);
  }
  function n(e, t) {
    for (var n = e.length, r = []; n--;)
      r[n] = t(e[n]);
    return r;
  }
  function r(e, t) {
    var r = e.split('@'), i = '';
    return r.length > 1 && (i = r[0] + '@', e = r[1]), e = e.replace(N, '.'), i + n(e.split('.'), t).join('.');
  }
  function i(e) {
    for (var t, n, r = [], i = 0, o = e.length; i < o;)
      t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
    return r;
  }
  function o(e) {
    return n(e, function (e) {
      var t = '';
      return e > 65535 && (e -= 65536, t += R(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += R(e);
    }).join('');
  }
  function a(e) {
    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : b;
  }
  function s(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
  }
  function u(e, t, n) {
    var r = 0;
    for (e = n ? D(e / x) : e >> 1, e += D(e / t); e > A * E >> 1; r += b)
      e = D(e / A);
    return D(r + (A + 1) * e / (e + T));
  }
  function l(e) {
    var n, r, i, s, l, c, f, d, p, h, g = [], m = e.length, v = 0, T = S, x = _;
    for (r = e.lastIndexOf(C), r < 0 && (r = 0), i = 0; i < r; ++i)
      e.charCodeAt(i) >= 128 && t('not-basic'), g.push(e.charCodeAt(i));
    for (s = r > 0 ? r + 1 : 0; s < m;) {
      for (l = v, c = 1, f = b; s >= m && t('invalid-input'), d = a(e.charCodeAt(s++)), (d >= b || d > D((y - v) / c)) && t('overflow'), v += d * c, p = f <= x ? w : f >= x + E ? E : f - x, !(d < p); f += b)
        h = b - p, c > D(y / h) && t('overflow'), c *= h;
      n = g.length + 1, x = u(v - l, n, 0 == l), D(v / n) > y - T && t('overflow'), T += D(v / n), v %= n, g.splice(v++, 0, T);
    }
    return o(g);
  }
  function c(e) {
    var n, r, o, a, l, c, f, d, p, h, g, m, v, T, x, I = [];
    for (e = i(e), m = e.length, n = S, r = 0, l = _, c = 0; c < m; ++c)
      (g = e[c]) < 128 && I.push(R(g));
    for (o = a = I.length, a && I.push(C); o < m;) {
      for (f = y, c = 0; c < m; ++c)
        (g = e[c]) >= n && g < f && (f = g);
      for (v = o + 1, f - n > D((y - r) / v) && t('overflow'), r += (f - n) * v, n = f, c = 0; c < m; ++c)
        if (g = e[c], g < n && ++r > y && t('overflow'), g == n) {
          for (d = r, p = b; h = p <= l ? w : p >= l + E ? E : p - l, !(d < h); p += b)
            x = d - h, T = b - h, I.push(R(s(h + x % T, 0))), d = D(x / T);
          I.push(R(s(d, 0))), l = u(r, v, o == a), r = 0, ++o;
        }
      ++r, ++n;
    }
    return I.join('');
  }
  function f(e) {
    return r(e, function (e) {
      return I.test(e) ? l(e.slice(4).toLowerCase()) : e;
    });
  }
  function d(e) {
    return r(e, function (e) {
      return O.test(e) ? 'xn--' + c(e) : e;
    });
  }
  var p = 'object' == typeof exports && exports && !exports.nodeType && exports, h = 'object' == typeof module && module && !module.nodeType && module, g = 'object' == typeof global && global;
  g.global !== g && g.window !== g && g.self !== g || (e = g);
  var m, v, y = 2147483647, b = 36, w = 1, E = 26, T = 38, x = 700, _ = 72, S = 128, C = '-', I = /^xn--/, O = /[^\x20-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, P = {
      overflow: 'Overflow: input needs wider integers to process',
      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
      'invalid-input': 'Invalid input'
    }, A = b - w, D = Math.floor, R = String.fromCharCode;
  if (m = {
      version: '1.3.2',
      ucs2: {
        decode: i,
        encode: o
      },
      decode: l,
      encode: c,
      toASCII: d,
      toUnicode: f
    }, 'function' == typeof define && 'object' == typeof define.amd && define.amd)
    _punycode = function () {
      return m;
    }();
  else if (p && h)
    if (module.exports == p)
      h.exports = m;
    else
      for (v in m)
        m.hasOwnProperty(v) && (p[v] = m[v]);
  else
    e.punycode = m;
}(this), function (e, t) {
  'use strict';
  'object' == typeof module && module.exports ? module.exports = t() : true ? _IPv6 = function () {
    return typeof t === 'function' ? t() : t;
  }() : e.IPv6 = t(e);
}(this, function (e) {
  'use strict';
  function t(e) {
    var t = e.toLowerCase(), n = t.split(':'), r = n.length, i = 8;
    '' === n[0] && '' === n[1] && '' === n[2] ? (n.shift(), n.shift()) : '' === n[0] && '' === n[1] ? n.shift() : '' === n[r - 1] && '' === n[r - 2] && n.pop(), r = n.length, -1 !== n[r - 1].indexOf('.') && (i = 7);
    var o;
    for (o = 0; o < r && '' !== n[o]; o++);
    if (o < i)
      for (n.splice(o, 1, '0000'); n.length < i;)
        n.splice(o, 0, '0000');
    for (var a, s = 0; s < i; s++) {
      a = n[s].split('');
      for (var u = 0; u < 3 && ('0' === a[0] && a.length > 1); u++)
        a.splice(0, 1);
      n[s] = a.join('');
    }
    var l = -1, c = 0, f = 0, d = -1, p = !1;
    for (s = 0; s < i; s++)
      p ? '0' === n[s] ? f += 1 : (p = !1, f > c && (l = d, c = f)) : '0' === n[s] && (p = !0, d = s, f = 1);
    f > c && (l = d, c = f), c > 1 && n.splice(l, c, ''), r = n.length;
    var h = '';
    for ('' === n[0] && (h = ':'), s = 0; s < r && (h += n[s], s !== r - 1); s++)
      h += ':';
    return '' === n[r - 1] && (h += ':'), h;
  }
  function n() {
    return e.IPv6 === this && (e.IPv6 = r), this;
  }
  var r = e && e.IPv6;
  return {
    best: t,
    noConflict: n
  };
}), function (e, t) {
  'use strict';
  'object' == typeof module && module.exports ? module.exports = t() : true ? _SecondLevelDomains = function () {
    return typeof t === 'function' ? t() : t;
  }() : e.SecondLevelDomains = t(e);
}(this, function (e) {
  'use strict';
  var t = e && e.SecondLevelDomains, n = {
      list: {
        ac: ' com gov mil net org ',
        ae: ' ac co gov mil name net org pro sch ',
        af: ' com edu gov net org ',
        al: ' com edu gov mil net org ',
        ao: ' co ed gv it og pb ',
        ar: ' com edu gob gov int mil net org tur ',
        at: ' ac co gv or ',
        au: ' asn com csiro edu gov id net org ',
        ba: ' co com edu gov mil net org rs unbi unmo unsa untz unze ',
        bb: ' biz co com edu gov info net org store tv ',
        bh: ' biz cc com edu gov info net org ',
        bn: ' com edu gov net org ',
        bo: ' com edu gob gov int mil net org tv ',
        br: ' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
        bs: ' com edu gov net org ',
        bz: ' du et om ov rg ',
        ca: ' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
        ck: ' biz co edu gen gov info net org ',
        cn: ' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
        co: ' com edu gov mil net nom org ',
        cr: ' ac c co ed fi go or sa ',
        cy: ' ac biz com ekloges gov ltd name net org parliament press pro tm ',
        do: ' art com edu gob gov mil net org sld web ',
        dz: ' art asso com edu gov net org pol ',
        ec: ' com edu fin gov info med mil net org pro ',
        eg: ' com edu eun gov mil name net org sci ',
        er: ' com edu gov ind mil net org rochest w ',
        es: ' com edu gob nom org ',
        et: ' biz com edu gov info name net org ',
        fj: ' ac biz com info mil name net org pro ',
        fk: ' ac co gov net nom org ',
        fr: ' asso com f gouv nom prd presse tm ',
        gg: ' co net org ',
        gh: ' com edu gov mil org ',
        gn: ' ac com gov net org ',
        gr: ' com edu gov mil net org ',
        gt: ' com edu gob ind mil net org ',
        gu: ' com edu gov net org ',
        hk: ' com edu gov idv net org ',
        hu: ' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
        id: ' ac co go mil net or sch web ',
        il: ' ac co gov idf k12 muni net org ',
        in: ' ac co edu ernet firm gen gov i ind mil net nic org res ',
        iq: ' com edu gov i mil net org ',
        ir: ' ac co dnssec gov i id net org sch ',
        it: ' edu gov ',
        je: ' co net org ',
        jo: ' com edu gov mil name net org sch ',
        jp: ' ac ad co ed go gr lg ne or ',
        ke: ' ac co go info me mobi ne or sc ',
        kh: ' com edu gov mil net org per ',
        ki: ' biz com de edu gov info mob net org tel ',
        km: ' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
        kn: ' edu gov net org ',
        kr: ' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
        kw: ' com edu gov net org ',
        ky: ' com edu gov net org ',
        kz: ' com edu gov mil net org ',
        lb: ' com edu gov net org ',
        lk: ' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
        lr: ' com edu gov net org ',
        lv: ' asn com conf edu gov id mil net org ',
        ly: ' com edu gov id med net org plc sch ',
        ma: ' ac co gov m net org press ',
        mc: ' asso tm ',
        me: ' ac co edu gov its net org priv ',
        mg: ' com edu gov mil nom org prd tm ',
        mk: ' com edu gov inf name net org pro ',
        ml: ' com edu gov net org presse ',
        mn: ' edu gov org ',
        mo: ' com edu gov net org ',
        mt: ' com edu gov net org ',
        mv: ' aero biz com coop edu gov info int mil museum name net org pro ',
        mw: ' ac co com coop edu gov int museum net org ',
        mx: ' com edu gob net org ',
        my: ' com edu gov mil name net org sch ',
        nf: ' arts com firm info net other per rec store web ',
        ng: ' biz com edu gov mil mobi name net org sch ',
        ni: ' ac co com edu gob mil net nom org ',
        np: ' com edu gov mil net org ',
        nr: ' biz com edu gov info net org ',
        om: ' ac biz co com edu gov med mil museum net org pro sch ',
        pe: ' com edu gob mil net nom org sld ',
        ph: ' com edu gov i mil net ngo org ',
        pk: ' biz com edu fam gob gok gon gop gos gov net org web ',
        pl: ' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
        pr: ' ac biz com edu est gov info isla name net org pro prof ',
        ps: ' com edu gov net org plo sec ',
        pw: ' belau co ed go ne or ',
        ro: ' arts com firm info nom nt org rec store tm www ',
        rs: ' ac co edu gov in org ',
        sb: ' com edu gov net org ',
        sc: ' com edu gov net org ',
        sh: ' co com edu gov net nom org ',
        sl: ' com edu gov net org ',
        st: ' co com consulado edu embaixada gov mil net org principe saotome store ',
        sv: ' com edu gob org red ',
        sz: ' ac co org ',
        tr: ' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
        tt: ' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
        tw: ' club com ebiz edu game gov idv mil net org ',
        mu: ' ac co com gov net or org ',
        mz: ' ac co edu gov org ',
        na: ' co com ',
        nz: ' ac co cri geek gen govt health iwi maori mil net org parliament school ',
        pa: ' abo ac com edu gob ing med net nom org sld ',
        pt: ' com edu gov int net nome org publ ',
        py: ' com edu gov mil net org ',
        qa: ' com edu gov mil net org ',
        re: ' asso com nom ',
        ru: ' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
        rw: ' ac co com edu gouv gov int mil net ',
        sa: ' com edu gov med net org pub sch ',
        sd: ' com edu gov info med net org tv ',
        se: ' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
        sg: ' com edu gov idn net org per ',
        sn: ' art com edu gouv org perso univ ',
        sy: ' com edu gov mil net news org ',
        th: ' ac co go in mi net or ',
        tj: ' ac biz co com edu go gov info int mil name net nic org test web ',
        tn: ' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
        tz: ' ac co go ne or ',
        ua: ' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
        ug: ' ac co go ne or org sc ',
        uk: ' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
        us: ' dni fed isa kids nsn ',
        uy: ' com edu gub mil net org ',
        ve: ' co com edu gob info mil net org web ',
        vi: ' co com k12 net org ',
        vn: ' ac biz com edu gov health info int name net org pro ',
        ye: ' co com gov ltd me net org plc ',
        yu: ' ac co edu gov org ',
        za: ' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
        zm: ' ac co com edu gov net org sch ',
        com: 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
        net: 'gb jp se uk ',
        org: 'ae',
        de: 'com '
      },
      has: function (e) {
        var t = e.lastIndexOf('.');
        if (t <= 0 || t >= e.length - 1)
          return !1;
        var r = e.lastIndexOf('.', t - 1);
        if (r <= 0 || r >= t - 1)
          return !1;
        var i = n.list[e.slice(t + 1)];
        return !!i && i.indexOf(' ' + e.slice(r + 1, t) + ' ') >= 0;
      },
      is: function (e) {
        var t = e.lastIndexOf('.');
        if (t <= 0 || t >= e.length - 1)
          return !1;
        if (e.lastIndexOf('.', t - 1) >= 0)
          return !1;
        var r = n.list[e.slice(t + 1)];
        return !!r && r.indexOf(' ' + e.slice(0, t) + ' ') >= 0;
      },
      get: function (e) {
        var t = e.lastIndexOf('.');
        if (t <= 0 || t >= e.length - 1)
          return null;
        var r = e.lastIndexOf('.', t - 1);
        if (r <= 0 || r >= t - 1)
          return null;
        var i = n.list[e.slice(t + 1)];
        return i ? i.indexOf(' ' + e.slice(r + 1, t) + ' ') < 0 ? null : e.slice(r + 1) : null;
      },
      noConflict: function () {
        return e.SecondLevelDomains === this && (e.SecondLevelDomains = t), this;
      }
    };
  return n;
}), function (e, t) {
  'use strict';
  'object' == typeof module && module.exports ? module.exports = t(_punycode, _IPv6, _SecondLevelDomains) : true ? _URIjs = function (_punycode, _IPv6, _SecondLevelDomains) {
    return typeof t === 'function' ? t(_punycode, _IPv6, _SecondLevelDomains) : t;
  }(_punycode, _IPv6, _SecondLevelDomains) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains, e);
}(this, function (e, t, n, r) {
  'use strict';
  function i(e, t) {
    var n = arguments.length >= 1, r = arguments.length >= 2;
    if (!(this instanceof i))
      return n ? r ? new i(e, t) : new i(e) : new i();
    if (void 0 === e) {
      if (n)
        throw new TypeError('undefined is not a valid argument for URI');
      e = 'undefined' != typeof location ? location.href + '' : '';
    }
    if (null === e && n)
      throw new TypeError('null is not a valid argument for URI');
    return this.href(e), void 0 !== t ? this.absoluteTo(t) : this;
  }
  function o(e) {
    return /^[0-9]+$/.test(e);
  }
  function a(e) {
    return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function s(e) {
    return void 0 === e ? 'Undefined' : String(Object.prototype.toString.call(e)).slice(8, -1);
  }
  function u(e) {
    return 'Array' === s(e);
  }
  function l(e, t) {
    var n, r, i = {};
    if ('RegExp' === s(t))
      i = null;
    else if (u(t))
      for (n = 0, r = t.length; n < r; n++)
        i[t[n]] = !0;
    else
      i[t] = !0;
    for (n = 0, r = e.length; n < r; n++) {
      (i && void 0 !== i[e[n]] || !i && t.test(e[n])) && (e.splice(n, 1), r--, n--);
    }
    return e;
  }
  function c(e, t) {
    var n, r;
    if (u(t)) {
      for (n = 0, r = t.length; n < r; n++)
        if (!c(e, t[n]))
          return !1;
      return !0;
    }
    var i = s(t);
    for (n = 0, r = e.length; n < r; n++)
      if ('RegExp' === i) {
        if ('string' == typeof e[n] && e[n].match(t))
          return !0;
      } else if (e[n] === t)
        return !0;
    return !1;
  }
  function f(e, t) {
    if (!u(e) || !u(t))
      return !1;
    if (e.length !== t.length)
      return !1;
    e.sort(), t.sort();
    for (var n = 0, r = e.length; n < r; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  function d(e) {
    var t = /^\/+|\/+$/g;
    return e.replace(t, '');
  }
  function p(e) {
    return escape(e);
  }
  function h(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, p).replace(/\*/g, '%2A');
  }
  function g(e) {
    return function (t, n) {
      return void 0 === t ? this._parts[e] || '' : (this._parts[e] = t || null, this.build(!n), this);
    };
  }
  function m(e, t) {
    return function (n, r) {
      return void 0 === n ? this._parts[e] || '' : (null !== n && (n += '', n.charAt(0) === t && (n = n.substring(1))), this._parts[e] = n, this.build(!r), this);
    };
  }
  var v = r && r.URI;
  i.version = '1.19.1';
  var y = i.prototype, b = Object.prototype.hasOwnProperty;
  i._parts = function () {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      preventInvalidHostname: i.preventInvalidHostname,
      duplicateQueryParameters: i.duplicateQueryParameters,
      escapeQuerySpace: i.escapeQuerySpace
    };
  }, i.preventInvalidHostname = !1, i.duplicateQueryParameters = !1, i.escapeQuerySpace = !0, i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, i.idn_expression = /[^a-z0-9\._-]/i, i.punycode_expression = /(xn--)/i, i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, i.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, i.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, i.findUri = {
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    end: /[\s\r\n]|$/,
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
  }, i.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  }, i.hostProtocols = [
    'http',
    'https'
  ], i.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/, i.domAttributes = {
    a: 'href',
    blockquote: 'cite',
    link: 'href',
    base: 'href',
    script: 'src',
    form: 'action',
    img: 'src',
    area: 'href',
    iframe: 'src',
    embed: 'src',
    source: 'src',
    track: 'src',
    input: 'src',
    audio: 'src',
    video: 'src'
  }, i.getDomAttribute = function (e) {
    if (e && e.nodeName) {
      var t = e.nodeName.toLowerCase();
      if ('input' !== t || 'image' === e.type)
        return i.domAttributes[t];
    }
  }, i.encode = h, i.decode = decodeURIComponent, i.iso8859 = function () {
    i.encode = escape, i.decode = unescape;
  }, i.unicode = function () {
    i.encode = h, i.decode = decodeURIComponent;
  }, i.characters = {
    pathname: {
      encode: {
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
        map: {
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
        map: {
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  }, i.encodeQuery = function (e, t) {
    var n = i.encode(e + '');
    return void 0 === t && (t = i.escapeQuerySpace), t ? n.replace(/%20/g, '+') : n;
  }, i.decodeQuery = function (e, t) {
    e += '', void 0 === t && (t = i.escapeQuerySpace);
    try {
      return i.decode(t ? e.replace(/\+/g, '%20') : e);
    } catch (t) {
      return e;
    }
  };
  var w, E = {
      encode: 'encode',
      decode: 'decode'
    }, T = function (e, t) {
      return function (n) {
        try {
          return i[t](n + '').replace(i.characters[e][t].expression, function (n) {
            return i.characters[e][t].map[n];
          });
        } catch (e) {
          return n;
        }
      };
    };
  for (w in E)
    i[w + 'PathSegment'] = T('pathname', E[w]), i[w + 'UrnPathSegment'] = T('urnpath', E[w]);
  var x = function (e, t, n) {
    return function (r) {
      var o;
      o = n ? function (e) {
        return i[t](i[n](e));
      } : i[t];
      for (var a = (r + '').split(e), s = 0, u = a.length; s < u; s++)
        a[s] = o(a[s]);
      return a.join(e);
    };
  };
  i.decodePath = x('/', 'decodePathSegment'), i.decodeUrnPath = x(':', 'decodeUrnPathSegment'), i.recodePath = x('/', 'encodePathSegment', 'decode'), i.recodeUrnPath = x(':', 'encodeUrnPathSegment', 'decode'), i.encodeReserved = T('reserved', 'encode'), i.parse = function (e, t) {
    var n;
    return t || (t = { preventInvalidHostname: i.preventInvalidHostname }), n = e.indexOf('#'), n > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), n = e.indexOf('?'), n > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), '//' === e.substring(0, 2) ? (t.protocol = null, e = e.substring(2), e = i.parseAuthority(e, t)) : (n = e.indexOf(':')) > -1 && (t.protocol = e.substring(0, n) || null, t.protocol && !t.protocol.match(i.protocol_expression) ? t.protocol = void 0 : '//' === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = i.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0)), t.path = e, t;
  }, i.parseHost = function (e, t) {
    e || (e = ''), e = e.replace(/\\/g, '/');
    var n, r, o = e.indexOf('/');
    if (-1 === o && (o = e.length), '[' === e.charAt(0))
      n = e.indexOf(']'), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, o) || null, '/' === t.port && (t.port = null);
    else {
      var a = e.indexOf(':'), s = e.indexOf('/'), u = e.indexOf(':', a + 1);
      -1 !== u && (-1 === s || u < s) ? (t.hostname = e.substring(0, o) || null, t.port = null) : (r = e.substring(0, o).split(':'), t.hostname = r[0] || null, t.port = r[1] || null);
    }
    return t.hostname && '/' !== e.substring(o).charAt(0) && (o++, e = '/' + e), t.preventInvalidHostname && i.ensureValidHostname(t.hostname, t.protocol), t.port && i.ensureValidPort(t.port), e.substring(o) || '/';
  }, i.parseAuthority = function (e, t) {
    return e = i.parseUserinfo(e, t), i.parseHost(e, t);
  }, i.parseUserinfo = function (e, t) {
    var n, r = e.indexOf('/'), o = e.lastIndexOf('@', r > -1 ? r : e.length - 1);
    return o > -1 && (-1 === r || o < r) ? (n = e.substring(0, o).split(':'), t.username = n[0] ? i.decode(n[0]) : null, n.shift(), t.password = n[0] ? i.decode(n.join(':')) : null, e = e.substring(o + 1)) : (t.username = null, t.password = null), e;
  }, i.parseQuery = function (e, t) {
    if (!e)
      return {};
    if (!(e = e.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '')))
      return {};
    for (var n, r, o, a = {}, s = e.split('&'), u = s.length, l = 0; l < u; l++)
      n = s[l].split('='), r = i.decodeQuery(n.shift(), t), o = n.length ? i.decodeQuery(n.join('='), t) : null, b.call(a, r) ? ('string' != typeof a[r] && null !== a[r] || (a[r] = [a[r]]), a[r].push(o)) : a[r] = o;
    return a;
  }, i.build = function (e) {
    var t = '';
    return e.protocol && (t += e.protocol + ':'), e.urn || !t && !e.hostname || (t += '//'), t += i.buildAuthority(e) || '', 'string' == typeof e.path && ('/' !== e.path.charAt(0) && 'string' == typeof e.hostname && (t += '/'), t += e.path), 'string' == typeof e.query && e.query && (t += '?' + e.query), 'string' == typeof e.fragment && e.fragment && (t += '#' + e.fragment), t;
  }, i.buildHost = function (e) {
    var t = '';
    return e.hostname ? (i.ip6_expression.test(e.hostname) ? t += '[' + e.hostname + ']' : t += e.hostname, e.port && (t += ':' + e.port), t) : '';
  }, i.buildAuthority = function (e) {
    return i.buildUserinfo(e) + i.buildHost(e);
  }, i.buildUserinfo = function (e) {
    var t = '';
    return e.username && (t += i.encode(e.username)), e.password && (t += ':' + i.encode(e.password)), t && (t += '@'), t;
  }, i.buildQuery = function (e, t, n) {
    var r, o, a, s, l = '';
    for (o in e)
      if (b.call(e, o) && o)
        if (u(e[o]))
          for (r = {}, a = 0, s = e[o].length; a < s; a++)
            void 0 !== e[o][a] && void 0 === r[e[o][a] + ''] && (l += '&' + i.buildQueryParameter(o, e[o][a], n), !0 !== t && (r[e[o][a] + ''] = !0));
        else
          void 0 !== e[o] && (l += '&' + i.buildQueryParameter(o, e[o], n));
    return l.substring(1);
  }, i.buildQueryParameter = function (e, t, n) {
    return i.encodeQuery(e, n) + (null !== t ? '=' + i.encodeQuery(t, n) : '');
  }, i.addQuery = function (e, t, n) {
    if ('object' == typeof t)
      for (var r in t)
        b.call(t, r) && i.addQuery(e, r, t[r]);
    else {
      if ('string' != typeof t)
        throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
      if (void 0 === e[t])
        return void (e[t] = n);
      'string' == typeof e[t] && (e[t] = [e[t]]), u(n) || (n = [n]), e[t] = (e[t] || []).concat(n);
    }
  }, i.setQuery = function (e, t, n) {
    if ('object' == typeof t)
      for (var r in t)
        b.call(t, r) && i.setQuery(e, r, t[r]);
    else {
      if ('string' != typeof t)
        throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
      e[t] = void 0 === n ? null : n;
    }
  }, i.removeQuery = function (e, t, n) {
    var r, o, a;
    if (u(t))
      for (r = 0, o = t.length; r < o; r++)
        e[t[r]] = void 0;
    else if ('RegExp' === s(t))
      for (a in e)
        t.test(a) && (e[a] = void 0);
    else if ('object' == typeof t)
      for (a in t)
        b.call(t, a) && i.removeQuery(e, a, t[a]);
    else {
      if ('string' != typeof t)
        throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
      void 0 !== n ? 'RegExp' === s(n) ? !u(e[t]) && n.test(e[t]) ? e[t] = void 0 : e[t] = l(e[t], n) : e[t] !== String(n) || u(n) && 1 !== n.length ? u(e[t]) && (e[t] = l(e[t], n)) : e[t] = void 0 : e[t] = void 0;
    }
  }, i.hasQuery = function (e, t, n, r) {
    switch (s(t)) {
    case 'String':
      break;
    case 'RegExp':
      for (var o in e)
        if (b.call(e, o) && t.test(o) && (void 0 === n || i.hasQuery(e, o, n)))
          return !0;
      return !1;
    case 'Object':
      for (var a in t)
        if (b.call(t, a) && !i.hasQuery(e, a, t[a]))
          return !1;
      return !0;
    default:
      throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }
    switch (s(n)) {
    case 'Undefined':
      return t in e;
    case 'Boolean':
      return n === Boolean(u(e[t]) ? e[t].length : e[t]);
    case 'Function':
      return !!n(e[t], t, e);
    case 'Array':
      if (!u(e[t]))
        return !1;
      return (r ? c : f)(e[t], n);
    case 'RegExp':
      return u(e[t]) ? !!r && c(e[t], n) : Boolean(e[t] && e[t].match(n));
    case 'Number':
      n = String(n);
    case 'String':
      return u(e[t]) ? !!r && c(e[t], n) : e[t] === n;
    default:
      throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  }, i.joinPaths = function () {
    for (var e = [], t = [], n = 0, r = 0; r < arguments.length; r++) {
      var o = new i(arguments[r]);
      e.push(o);
      for (var a = o.segment(), s = 0; s < a.length; s++)
        'string' == typeof a[s] && t.push(a[s]), a[s] && n++;
    }
    if (!t.length || !n)
      return new i('');
    var u = new i('').segment(t);
    return '' !== e[0].path() && '/' !== e[0].path().slice(0, 1) || u.path('/' + u.path()), u.normalize();
  }, i.commonPath = function (e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n++)
      if (e.charAt(n) !== t.charAt(n)) {
        n--;
        break;
      }
    return n < 1 ? e.charAt(0) === t.charAt(0) && '/' === e.charAt(0) ? '/' : '' : ('/' === e.charAt(n) && '/' === t.charAt(n) || (n = e.substring(0, n).lastIndexOf('/')), e.substring(0, n + 1));
  }, i.withinString = function (e, t, n) {
    n || (n = {});
    var r = n.start || i.findUri.start, o = n.end || i.findUri.end, a = n.trim || i.findUri.trim, s = n.parens || i.findUri.parens, u = /[a-z0-9-]=["']?$/i;
    for (r.lastIndex = 0;;) {
      var l = r.exec(e);
      if (!l)
        break;
      var c = l.index;
      if (n.ignoreHtml) {
        var f = e.slice(Math.max(c - 3, 0), c);
        if (f && u.test(f))
          continue;
      }
      for (var d = c + e.slice(c).search(o), p = e.slice(c, d), h = -1;;) {
        var g = s.exec(p);
        if (!g)
          break;
        var m = g.index + g[0].length;
        h = Math.max(h, m);
      }
      if (p = h > -1 ? p.slice(0, h) + p.slice(h).replace(a, '') : p.replace(a, ''), !(p.length <= l[0].length || n.ignore && n.ignore.test(p))) {
        d = c + p.length;
        var v = t(p, c, d, e);
        void 0 !== v ? (v = String(v), e = e.slice(0, c) + v + e.slice(d), r.lastIndex = c + v.length) : r.lastIndex = d;
      }
    }
    return r.lastIndex = 0, e;
  }, i.ensureValidHostname = function (t, n) {
    var r = !!t, o = !!n, a = !1;
    if (o && (a = c(i.hostProtocols, n)), a && !r)
      throw new TypeError('Hostname cannot be empty, if protocol is ' + n);
    if (t && t.match(i.invalid_hostname_characters)) {
      if (!e)
        throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      if (e.toASCII(t).match(i.invalid_hostname_characters))
        throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-:_]');
    }
  }, i.ensureValidPort = function (e) {
    if (e) {
      var t = Number(e);
      if (!(o(t) && t > 0 && t < 65536))
        throw new TypeError('Port "' + e + '" is not a valid port');
    }
  }, i.noConflict = function (e) {
    if (e) {
      var t = { URI: this.noConflict() };
      return r.URITemplate && 'function' == typeof r.URITemplate.noConflict && (t.URITemplate = r.URITemplate.noConflict()), r.IPv6 && 'function' == typeof r.IPv6.noConflict && (t.IPv6 = r.IPv6.noConflict()), r.SecondLevelDomains && 'function' == typeof r.SecondLevelDomains.noConflict && (t.SecondLevelDomains = r.SecondLevelDomains.noConflict()), t;
    }
    return r.URI === this && (r.URI = v), this;
  }, y.build = function (e) {
    return !0 === e ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = i.build(this._parts), this._deferred_build = !1), this;
  }, y.clone = function () {
    return new i(this);
  }, y.valueOf = y.toString = function () {
    return this.build(!1)._string;
  }, y.protocol = g('protocol'), y.username = g('username'), y.password = g('password'), y.hostname = g('hostname'), y.port = g('port'), y.query = m('query', '?'), y.fragment = m('fragment', '#'), y.search = function (e, t) {
    var n = this.query(e, t);
    return 'string' == typeof n && n.length ? '?' + n : n;
  }, y.hash = function (e, t) {
    var n = this.fragment(e, t);
    return 'string' == typeof n && n.length ? '#' + n : n;
  }, y.pathname = function (e, t) {
    if (void 0 === e || !0 === e) {
      var n = this._parts.path || (this._parts.hostname ? '/' : '');
      return e ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n;
    }
    return this._parts.urn ? this._parts.path = e ? i.recodeUrnPath(e) : '' : this._parts.path = e ? i.recodePath(e) : '/', this.build(!t), this;
  }, y.path = y.pathname, y.href = function (e, t) {
    var n;
    if (void 0 === e)
      return this.toString();
    this._string = '', this._parts = i._parts();
    var r = e instanceof i, o = 'object' == typeof e && (e.hostname || e.path || e.pathname);
    if (e.nodeName) {
      e = e[i.getDomAttribute(e)] || '', o = !1;
    }
    if (!r && o && void 0 !== e.pathname && (e = e.toString()), 'string' == typeof e || e instanceof String)
      this._parts = i.parse(String(e), this._parts);
    else {
      if (!r && !o)
        throw new TypeError('invalid input');
      var a = r ? e._parts : e;
      for (n in a)
        'query' !== n && b.call(this._parts, n) && (this._parts[n] = a[n]);
      a.query && this.query(a.query, !1);
    }
    return this.build(!t), this;
  }, y.is = function (e) {
    var t = !1, r = !1, o = !1, a = !1, s = !1, u = !1, l = !1, c = !this._parts.urn;
    switch (this._parts.hostname && (c = !1, r = i.ip4_expression.test(this._parts.hostname), o = i.ip6_expression.test(this._parts.hostname), t = r || o, a = !t, s = a && n && n.has(this._parts.hostname), u = a && i.idn_expression.test(this._parts.hostname), l = a && i.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
    case 'relative':
      return c;
    case 'absolute':
      return !c;
    case 'domain':
    case 'name':
      return a;
    case 'sld':
      return s;
    case 'ip':
      return t;
    case 'ip4':
    case 'ipv4':
    case 'inet4':
      return r;
    case 'ip6':
    case 'ipv6':
    case 'inet6':
      return o;
    case 'idn':
      return u;
    case 'url':
      return !this._parts.urn;
    case 'urn':
      return !!this._parts.urn;
    case 'punycode':
      return l;
    }
    return null;
  };
  var _ = y.protocol, S = y.port, C = y.hostname;
  y.protocol = function (e, t) {
    if (e && (e = e.replace(/:(\/\/)?$/, ''), !e.match(i.protocol_expression)))
      throw new TypeError('Protocol "' + e + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
    return _.call(this, e, t);
  }, y.scheme = y.protocol, y.port = function (e, t) {
    return this._parts.urn ? void 0 === e ? '' : this : (void 0 !== e && (0 === e && (e = null), e && (e += '', ':' === e.charAt(0) && (e = e.substring(1)), i.ensureValidPort(e))), S.call(this, e, t));
  }, y.hostname = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 !== e) {
      var n = { preventInvalidHostname: this._parts.preventInvalidHostname };
      if ('/' !== i.parseHost(e, n))
        throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
      e = n.hostname, this._parts.preventInvalidHostname && i.ensureValidHostname(e, this._parts.protocol);
    }
    return C.call(this, e, t);
  }, y.origin = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e) {
      var n = this.protocol();
      return this.authority() ? (n ? n + '://' : '') + this.authority() : '';
    }
    var r = i(e);
    return this.protocol(r.protocol()).authority(r.authority()).build(!t), this;
  }, y.host = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e)
      return this._parts.hostname ? i.buildHost(this._parts) : '';
    if ('/' !== i.parseHost(e, this._parts))
      throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
    return this.build(!t), this;
  }, y.authority = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e)
      return this._parts.hostname ? i.buildAuthority(this._parts) : '';
    if ('/' !== i.parseAuthority(e, this._parts))
      throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
    return this.build(!t), this;
  }, y.userinfo = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e) {
      var n = i.buildUserinfo(this._parts);
      return n ? n.substring(0, n.length - 1) : n;
    }
    return '@' !== e[e.length - 1] && (e += '@'), i.parseUserinfo(e, this._parts), this.build(!t), this;
  }, y.resource = function (e, t) {
    var n;
    return void 0 === e ? this.path() + this.search() + this.hash() : (n = i.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this);
  }, y.subdomain = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e) {
      if (!this._parts.hostname || this.is('IP'))
        return '';
      var n = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, n) || '';
    }
    var r = this._parts.hostname.length - this.domain().length, o = this._parts.hostname.substring(0, r), s = new RegExp('^' + a(o));
    if (e && '.' !== e.charAt(e.length - 1) && (e += '.'), -1 !== e.indexOf(':'))
      throw new TypeError('Domains cannot contain colons');
    return e && i.ensureValidHostname(e, this._parts.protocol), this._parts.hostname = this._parts.hostname.replace(s, e), this.build(!t), this;
  }, y.domain = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if ('boolean' == typeof e && (t = e, e = void 0), void 0 === e) {
      if (!this._parts.hostname || this.is('IP'))
        return '';
      var n = this._parts.hostname.match(/\./g);
      if (n && n.length < 2)
        return this._parts.hostname;
      var r = this._parts.hostname.length - this.tld(t).length - 1;
      return r = this._parts.hostname.lastIndexOf('.', r - 1) + 1, this._parts.hostname.substring(r) || '';
    }
    if (!e)
      throw new TypeError('cannot set domain empty');
    if (-1 !== e.indexOf(':'))
      throw new TypeError('Domains cannot contain colons');
    if (i.ensureValidHostname(e, this._parts.protocol), !this._parts.hostname || this.is('IP'))
      this._parts.hostname = e;
    else {
      var o = new RegExp(a(this.domain()) + '$');
      this._parts.hostname = this._parts.hostname.replace(o, e);
    }
    return this.build(!t), this;
  }, y.tld = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if ('boolean' == typeof e && (t = e, e = void 0), void 0 === e) {
      if (!this._parts.hostname || this.is('IP'))
        return '';
      var r = this._parts.hostname.lastIndexOf('.'), i = this._parts.hostname.substring(r + 1);
      return !0 !== t && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i;
    }
    var o;
    if (!e)
      throw new TypeError('cannot set TLD empty');
    if (e.match(/[^a-zA-Z0-9-]/)) {
      if (!n || !n.is(e))
        throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]');
      o = new RegExp(a(this.tld()) + '$'), this._parts.hostname = this._parts.hostname.replace(o, e);
    } else {
      if (!this._parts.hostname || this.is('IP'))
        throw new ReferenceError('cannot set TLD on non-domain host');
      o = new RegExp(a(this.tld()) + '$'), this._parts.hostname = this._parts.hostname.replace(o, e);
    }
    return this.build(!t), this;
  }, y.directory = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e || !0 === e) {
      if (!this._parts.path && !this._parts.hostname)
        return '';
      if ('/' === this._parts.path)
        return '/';
      var n = this._parts.path.length - this.filename().length - 1, r = this._parts.path.substring(0, n) || (this._parts.hostname ? '/' : '');
      return e ? i.decodePath(r) : r;
    }
    var o = this._parts.path.length - this.filename().length, s = this._parts.path.substring(0, o), u = new RegExp('^' + a(s));
    return this.is('relative') || (e || (e = '/'), '/' !== e.charAt(0) && (e = '/' + e)), e && '/' !== e.charAt(e.length - 1) && (e += '/'), e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e), this.build(!t), this;
  }, y.filename = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if ('string' != typeof e) {
      if (!this._parts.path || '/' === this._parts.path)
        return '';
      var n = this._parts.path.lastIndexOf('/'), r = this._parts.path.substring(n + 1);
      return e ? i.decodePathSegment(r) : r;
    }
    var o = !1;
    '/' === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (o = !0);
    var s = new RegExp(a(this.filename()) + '$');
    return e = i.recodePath(e), this._parts.path = this._parts.path.replace(s, e), o ? this.normalizePath(t) : this.build(!t), this;
  }, y.suffix = function (e, t) {
    if (this._parts.urn)
      return void 0 === e ? '' : this;
    if (void 0 === e || !0 === e) {
      if (!this._parts.path || '/' === this._parts.path)
        return '';
      var n, r, o = this.filename(), s = o.lastIndexOf('.');
      return -1 === s ? '' : (n = o.substring(s + 1), r = /^[a-z0-9%]+$/i.test(n) ? n : '', e ? i.decodePathSegment(r) : r);
    }
    '.' === e.charAt(0) && (e = e.substring(1));
    var u, l = this.suffix();
    if (l)
      u = e ? new RegExp(a(l) + '$') : new RegExp(a('.' + l) + '$');
    else {
      if (!e)
        return this;
      this._parts.path += '.' + i.recodePath(e);
    }
    return u && (e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e)), this.build(!t), this;
  }, y.segment = function (e, t, n) {
    var r = this._parts.urn ? ':' : '/', i = this.path(), o = '/' === i.substring(0, 1), a = i.split(r);
    if (void 0 !== e && 'number' != typeof e && (n = t, t = e, e = void 0), void 0 !== e && 'number' != typeof e)
      throw new Error('Bad segment "' + e + '", must be 0-based integer');
    if (o && a.shift(), e < 0 && (e = Math.max(a.length + e, 0)), void 0 === t)
      return void 0 === e ? a : a[e];
    if (null === e || void 0 === a[e])
      if (u(t)) {
        a = [];
        for (var s = 0, l = t.length; s < l; s++)
          (t[s].length || a.length && a[a.length - 1].length) && (a.length && !a[a.length - 1].length && a.pop(), a.push(d(t[s])));
      } else
        (t || 'string' == typeof t) && (t = d(t), '' === a[a.length - 1] ? a[a.length - 1] = t : a.push(t));
    else
      t ? a[e] = d(t) : a.splice(e, 1);
    return o && a.unshift(''), this.path(a.join(r), n);
  }, y.segmentCoded = function (e, t, n) {
    var r, o, a;
    if ('number' != typeof e && (n = t, t = e, e = void 0), void 0 === t) {
      if (r = this.segment(e, t, n), u(r))
        for (o = 0, a = r.length; o < a; o++)
          r[o] = i.decode(r[o]);
      else
        r = void 0 !== r ? i.decode(r) : void 0;
      return r;
    }
    if (u(t))
      for (o = 0, a = t.length; o < a; o++)
        t[o] = i.encode(t[o]);
    else
      t = 'string' == typeof t || t instanceof String ? i.encode(t) : t;
    return this.segment(e, t, n);
  };
  var I = y.query;
  return y.query = function (e, t) {
    if (!0 === e)
      return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    if ('function' == typeof e) {
      var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace), r = e.call(this, n);
      return this._parts.query = i.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this;
    }
    return void 0 !== e && 'string' != typeof e ? (this._parts.query = i.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this) : I.call(this, e, t);
  }, y.setQuery = function (e, t, n) {
    var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    if ('string' == typeof e || e instanceof String)
      r[e] = void 0 !== t ? t : null;
    else {
      if ('object' != typeof e)
        throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
      for (var o in e)
        b.call(e, o) && (r[o] = e[o]);
    }
    return this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 'string' != typeof e && (n = t), this.build(!n), this;
  }, y.addQuery = function (e, t, n) {
    var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return i.addQuery(r, e, void 0 === t ? null : t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 'string' != typeof e && (n = t), this.build(!n), this;
  }, y.removeQuery = function (e, t, n) {
    var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return i.removeQuery(r, e, t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), 'string' != typeof e && (n = t), this.build(!n), this;
  }, y.hasQuery = function (e, t, n) {
    var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return i.hasQuery(r, e, t, n);
  }, y.setSearch = y.setQuery, y.addSearch = y.addQuery, y.removeSearch = y.removeQuery, y.hasSearch = y.hasQuery, y.normalize = function () {
    return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build();
  }, y.normalizeProtocol = function (e) {
    return 'string' == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this;
  }, y.normalizeHostname = function (n) {
    return this._parts.hostname && (this.is('IDN') && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is('IPv6') && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this;
  }, y.normalizePort = function (e) {
    return 'string' == typeof this._parts.protocol && this._parts.port === i.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this;
  }, y.normalizePath = function (e) {
    var t = this._parts.path;
    if (!t)
      return this;
    if (this._parts.urn)
      return this._parts.path = i.recodeUrnPath(this._parts.path), this.build(!e), this;
    if ('/' === this._parts.path)
      return this;
    t = i.recodePath(t);
    var n, r, o, a = '';
    for ('/' !== t.charAt(0) && (n = !0, t = '/' + t), '/..' !== t.slice(-3) && '/.' !== t.slice(-2) || (t += '/'), t = t.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/'), n && (a = t.substring(1).match(/^(\.\.\/)+/) || '') && (a = a[0]);;) {
      if (-1 === (r = t.search(/\/\.\.(\/|$)/)))
        break;
      0 !== r ? (o = t.substring(0, r).lastIndexOf('/'), -1 === o && (o = r), t = t.substring(0, o) + t.substring(r + 3)) : t = t.substring(3);
    }
    return n && this.is('relative') && (t = a + t.substring(1)), this._parts.path = t, this.build(!e), this;
  }, y.normalizePathname = y.normalizePath, y.normalizeQuery = function (e) {
    return 'string' == typeof this._parts.query && (this._parts.query.length ? this.query(i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!e)), this;
  }, y.normalizeFragment = function (e) {
    return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this;
  }, y.normalizeSearch = y.normalizeQuery, y.normalizeHash = y.normalizeFragment, y.iso8859 = function () {
    var e = i.encode, t = i.decode;
    i.encode = escape, i.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      i.encode = e, i.decode = t;
    }
    return this;
  }, y.unicode = function () {
    var e = i.encode, t = i.decode;
    i.encode = h, i.decode = unescape;
    try {
      this.normalize();
    } finally {
      i.encode = e, i.decode = t;
    }
    return this;
  }, y.readable = function () {
    var t = this.clone();
    t.username('').password('').normalize();
    var n = '';
    if (t._parts.protocol && (n += t._parts.protocol + '://'), t._parts.hostname && (t.is('punycode') && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ':' + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && '/' !== t._parts.path.charAt(0) && (n += '/'), n += t.path(!0), t._parts.query) {
      for (var r = '', o = 0, a = t._parts.query.split('&'), s = a.length; o < s; o++) {
        var u = (a[o] || '').split('=');
        r += '&' + i.decodeQuery(u[0], this._parts.escapeQuerySpace).replace(/&/g, '%26'), void 0 !== u[1] && (r += '=' + i.decodeQuery(u[1], this._parts.escapeQuerySpace).replace(/&/g, '%26'));
      }
      n += '?' + r.substring(1);
    }
    return n += i.decodeQuery(t.hash(), !0);
  }, y.absoluteTo = function (e) {
    var t, n, r, o = this.clone(), a = [
        'protocol',
        'username',
        'password',
        'hostname',
        'port'
      ];
    if (e instanceof i || (e = new i(e)), 'filesystem' == this._parts.protocol)
      return o;
    if ('filesystem' == e._parts.protocol) {
      var s = this.absoluteTo(e._parts.path);
      return -1 !== e._parts.path.indexOf('chrome-extension:') || -1 !== e._parts.path.indexOf('http:') || -1 !== e._parts.path.indexOf('https:') ? new i('filesystem:' + s.toString()) : s;
    }
    if (this._parts.urn)
      throw new Error('URNs do not have any generally defined hierarchical components');
    if (o._parts.protocol)
      return o;
    if (o._parts.protocol = e._parts.protocol, this._parts.hostname)
      return o;
    for (n = 0; r = a[n]; n++)
      o._parts[r] = e._parts[r];
    return o._parts.path ? ('..' === o._parts.path.substring(-2) && (o._parts.path += '/'), '/' !== o.path().charAt(0) && (t = e.directory(), t = t || (0 === e.path().indexOf('/') ? '/' : ''), o._parts.path = (t ? t + '/' : '') + o._parts.path, o.normalizePath())) : (o._parts.path = e._parts.path, o._parts.query || (o._parts.query = e._parts.query)), o.build(), o;
  }, y.relativeTo = function (e) {
    var t, n, r, o, a, s = this.clone().normalize();
    if (s._parts.urn)
      throw new Error('URNs do not have any generally defined hierarchical components');
    if (e = new i(e).normalize(), t = s._parts, n = e._parts, o = s.path(), a = e.path(), '/' !== o.charAt(0))
      throw new Error('URI is already relative');
    if ('/' !== a.charAt(0))
      throw new Error('Cannot calculate a URI relative to another relative URI');
    if (t.protocol === n.protocol && (t.protocol = null), t.username !== n.username || t.password !== n.password)
      return s.build();
    if (null !== t.protocol || null !== t.username || null !== t.password)
      return s.build();
    if (t.hostname !== n.hostname || t.port !== n.port)
      return s.build();
    if (t.hostname = null, t.port = null, o === a)
      return t.path = '', s.build();
    if (!(r = i.commonPath(o, a)))
      return s.build();
    var u = n.path.substring(r.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');
    return t.path = u + t.path.substring(r.length) || './', s.build();
  }, y.equals = function (e) {
    var t, n, r, o = this.clone(), a = new i(e), s = {}, l = {}, c = {};
    if (o.normalize(), a.normalize(), o.toString() === a.toString())
      return !0;
    if (t = o.query(), n = a.query(), o.query(''), a.query(''), o.toString() !== a.toString())
      return !1;
    if (t.length !== n.length)
      return !1;
    s = i.parseQuery(t, this._parts.escapeQuerySpace), l = i.parseQuery(n, this._parts.escapeQuerySpace);
    for (r in s)
      if (b.call(s, r)) {
        if (u(s[r])) {
          if (!f(s[r], l[r]))
            return !1;
        } else if (s[r] !== l[r])
          return !1;
        c[r] = !0;
      }
    for (r in l)
      if (b.call(l, r) && !c[r])
        return !1;
    return !0;
  }, y.preventInvalidHostname = function (e) {
    return this._parts.preventInvalidHostname = !!e, this;
  }, y.duplicateQueryParameters = function (e) {
    return this._parts.duplicateQueryParameters = !!e, this;
  }, y.escapeQuerySpace = function (e) {
    return this._parts.escapeQuerySpace = !!e, this;
  }, i;
}), function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? t(exports) : true ? _readium_cfi_js = function (exports) {
    return typeof t === 'function' ? t(exports) : t;
  }({}) : t(e.EPUBcfi = {});
}(this, function (e) {
  'use strict';
  function t(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;)
      i[n] = t(e[n], n, e);
    return i;
  }
  function n(e) {
    var t = bt.call(e, Et), n = e[Et];
    try {
      e[Et] = void 0;
      var r = !0;
    } catch (e) {
    }
    var i = wt.call(e);
    return r && (t ? e[Et] = n : delete e[Et]), i;
  }
  function r(e) {
    return xt.call(e);
  }
  function i(e) {
    return null == e ? void 0 === e ? St : _t : Ct && Ct in Object(e) ? n(e) : r(e);
  }
  function o(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  function a(e) {
    if (!o(e))
      return !1;
    var t = i(e);
    return t == Ot || t == Nt || t == It || t == Pt;
  }
  function s(e) {
    return !!Dt && Dt in e;
  }
  function u(e) {
    if (null != e) {
      try {
        return kt.call(e);
      } catch (e) {
      }
      try {
        return e + '';
      } catch (e) {
      }
    }
    return '';
  }
  function l(e) {
    return !(!o(e) || s(e)) && (a(e) ? Ht : Mt).test(u(e));
  }
  function c(e, t) {
    return null == e ? void 0 : e[t];
  }
  function f(e, t) {
    var n = c(e, t);
    return l(n) ? n : void 0;
  }
  function d() {
    this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
  }
  function p(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  function h(e) {
    var t = this.__data__;
    if (Ut) {
      var n = t[e];
      return n === Bt ? void 0 : n;
    }
    return Wt.call(t, e) ? t[e] : void 0;
  }
  function g(e) {
    var t = this.__data__;
    return Ut ? void 0 !== t[e] : $t.call(t, e);
  }
  function m(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Ut && void 0 === t ? Qt : t, this;
  }
  function v(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function y() {
    this.__data__ = [], this.size = 0;
  }
  function b(e, t) {
    return e === t || e !== e && t !== t;
  }
  function w(e, t) {
    for (var n = e.length; n--;)
      if (b(e[n][0], t))
        return n;
    return -1;
  }
  function E(e) {
    var t = this.__data__, n = w(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : Yt.call(t, n, 1), --this.size, !0);
  }
  function T(e) {
    var t = this.__data__, n = w(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function x(e) {
    return w(this.__data__, e) > -1;
  }
  function _(e, t) {
    var n = this.__data__, r = w(n, e);
    return r < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[r][1] = t, this;
  }
  function S(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function C() {
    this.size = 0, this.__data__ = {
      hash: new v(),
      map: new (Jt || S)(),
      string: new v()
    };
  }
  function I(e) {
    var t = typeof e;
    return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
  }
  function O(e, t) {
    var n = e.__data__;
    return I(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
  }
  function N(e) {
    var t = O(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function P(e) {
    return O(this, e).get(e);
  }
  function A(e) {
    return O(this, e).has(e);
  }
  function D(e, t) {
    var n = O(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function R(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function k(e) {
    return this.__data__.set(e, Kt), this;
  }
  function j(e) {
    return this.__data__.has(e);
  }
  function M(e) {
    var t = -1, n = null == e ? 0 : e.length;
    for (this.__data__ = new R(); ++t < n;)
      this.add(e[t]);
  }
  function L(e, t, n, r) {
    for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
      if (t(e[o], o, e))
        return o;
    return -1;
  }
  function F(e) {
    return e !== e;
  }
  function q(e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i;)
      if (e[r] === t)
        return r;
    return -1;
  }
  function V(e, t, n) {
    return t === t ? q(e, t, n) : L(e, F, n);
  }
  function H(e, t) {
    return !!(null == e ? 0 : e.length) && V(e, t, 0) > -1;
  }
  function U(e, t, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
      if (n(t, e[r]))
        return !0;
    return !1;
  }
  function B(e) {
    return function (t) {
      return e(t);
    };
  }
  function z(e, t) {
    return e.has(t);
  }
  function W(e, n, r) {
    for (var i = r ? U : H, o = e[0].length, a = e.length, s = a, u = Array(a), l = 1 / 0, c = []; s--;) {
      var f = e[s];
      s && n && (f = t(f, B(n))), l = Zt(f.length, l), u[s] = !r && (n || o >= 120 && f.length >= 120) ? new M(s && f) : void 0;
    }
    f = e[0];
    var d = -1, p = u[0];
    e:
      for (; ++d < o && c.length < l;) {
        var h = f[d], g = n ? n(h) : h;
        if (h = r || 0 !== h ? h : 0, !(p ? z(p, g) : i(c, g, r))) {
          for (s = a; --s;) {
            var m = u[s];
            if (!(m ? z(m, g) : i(e[s], g, r)))
              continue e;
          }
          p && p.push(g), c.push(h);
        }
      }
    return c;
  }
  function G(e) {
    return e;
  }
  function $(e, t, n) {
    switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  function Q(e, t, n) {
    return t = en(void 0 === t ? e.length - 1 : t, 0), function () {
      for (var r = arguments, i = -1, o = en(r.length - t, 0), a = Array(o); ++i < o;)
        a[i] = r[t + i];
      i = -1;
      for (var s = Array(t + 1); ++i < t;)
        s[i] = r[i];
      return s[t] = n(a), $(e, this, s);
    };
  }
  function X(e) {
    return function () {
      return e;
    };
  }
  function Y(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= un;
  }
  function J(e) {
    return null != e && Y(e.length) && !a(e);
  }
  function K(e) {
    return null != e && 'object' == typeof e;
  }
  function Z(e) {
    return K(e) && J(e);
  }
  function ee(e) {
    return Z(e) ? e : [];
  }
  function te(e, t) {
    return 'string' == typeof t ? (e.localName || e.nodeName) === t : e === t;
  }
  function ne(e) {
    var t = e.className;
    return 'string' == typeof t ? t.split(/\s/) : 'object' === (void 0 === t ? 'undefined' : it(t)) && 'baseVal' in t ? t.baseVal.split(/\s/) : [];
  }
  function re(e, t, n, r) {
    if (t && t.length) {
      var i = ne(e);
      if (1 === i.length && t.includes(i[0]))
        return !1;
      if (i.length && ln(t, i).length)
        return !1;
    }
    if (n && n.length && e.tagName) {
      if (n.find(function (t) {
          return te(e, t.toLowerCase());
        }))
        return !1;
    }
    if (r && r.length) {
      var o = e.id;
      if (o && o.length && r.includes(o))
        return !1;
    }
    return !0;
  }
  function ie(e, t, n, r) {
    return [].concat(lt(e)).filter(function (e) {
      return re(e, t, n, r);
    });
  }
  function oe(e, t) {
    var n = e.getAttribute('idref');
    if (n) {
      var r = t.querySelector('[id=' + n + ']');
      if (r)
        return r.getAttribute('href');
    }
  }
  function ae(e, t) {
    return e > t - 1;
  }
  function se(e, t, n, r, i) {
    var o = e / 2 - 1, a = rt(ie(t.children().toArray(), n, r, i)), s = a.length;
    if (ae(o, s))
      throw new ft(o, s - 1, '');
    return rt(a[o]);
  }
  function ue(e, t, n) {
    for (var r = e, i = e[0].ownerDocument, o = 0, a = 0; a <= e.length; a += 1)
      if (e[a].nodeType === Node.TEXT_NODE) {
        var s = void 0, u = e[a].nodeValue.length + o, l = t - o;
        if (u > t) {
          var c = e[a].nodeValue;
          r[a].nodeValue = c.slice(0, l), s = rt(n).insertAfter(e.eq(a));
          var f = c.slice(l, c.length), d = i.createTextNode(f);
          return rt(d).insertAfter(s), s;
        }
        if (u === t)
          return s = rt(n).insertAfter(e.eq(a));
        o = u;
      } else
        e[a].nodeType === Node.COMMENT_NODE ? o = e[a].nodeValue.length + 7 + o : e[a].nodeType === Node.PROCESSING_INSTRUCTION_NODE && (o = e[a].nodeValue.length + e[a].target.length + 5);
    throw new dt('Text', 'Text offset:' + t, 'The offset exceeded the length of the text');
  }
  function le(e, t, n, r, i) {
    var o = void 0, a = void 0, s = rt(ie(t.contents().toArray(), n, r, i)), u = (parseInt(e, 10) + 1) / 2 - 1;
    o = 0, a = !1;
    var l = s.filter(function () {
      return o === u ? this.nodeType === Node.TEXT_NODE || this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.PROCESSING_INSTRUCTION_NODE ? (a = !0, !0) : !(!a || this.nodeType === Node.TEXT_NODE) && (o += 1, a = !1, !1) : (this.nodeType === Node.TEXT_NODE || this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.PROCESSING_INSTRUCTION_NODE ? a = !0 : a || this.nodeType !== Node.ELEMENT_NODE ? a && this.nodeType !== Node.TEXT_NODE && this !== s.lastChild && (o += 1, a = !1) : (o += 1, a = !0), !1);
    });
    if (0 === l.length)
      throw new ft(u, o, 'Index out of range');
    return l;
  }
  function ce(e, t, n, r, i) {
    return e % 2 == 0 ? se(e, t, n, r, i) : le(e, t, n, r, i);
  }
  function fe(e, t, n, r, i) {
    var o = void 0, a = void 0, s = void 0;
    if (void 0 === t || !te(t[0], 'iframe'))
      throw new ct(t, 'expected an iframe element');
    if (te(t[0], 'iframe'))
      return o = t.contents(), a = rt(ie(o.children().toArray(), n, r, i)), s = rt(a[0]), ce(e, s, n, r, i);
  }
  function de(e, t, n) {
    if (void 0 === e)
      throw new ct(e, 'expected a terminating node, or node list');
    if (0 === e.length)
      throw new dt('Text', 'Text offset:' + t, 'no nodes found for termination condition');
    return ue(e, t, n);
  }
  function pe(e, t) {
    return e.attr('id') === t;
  }
  function he(e, t, n, r) {
    this.message = e, this.expected = t, this.found = n, this.location = r, this.name = 'SyntaxError', 'function' == typeof Error.captureStackTrace && Error.captureStackTrace(this, he);
  }
  function ge(e, t) {
    function n(e, t) {
      return {
        type: 'literal',
        text: e,
        ignoreCase: t
      };
    }
    function r(e, t, n) {
      return {
        type: 'class',
        parts: e,
        inverted: t,
        ignoreCase: n
      };
    }
    function i(t) {
      var n, r = Qe[t];
      if (r)
        return r;
      for (n = t - 1; !Qe[n];)
        n--;
      for (r = Qe[n], r = {
          line: r.line,
          column: r.column
        }; n < t;)
        10 === e.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
      return Qe[t] = r, r;
    }
    function o(e, t) {
      var n = i(e), r = i(t);
      return {
        start: {
          offset: e,
          line: n.line,
          column: n.column
        },
        end: {
          offset: t,
          line: r.line,
          column: r.column
        }
      };
    }
    function a(e) {
      $e < Xe || ($e > Xe && (Xe = $e, Ye = []), Ye.push(e));
    }
    function s() {
      var t, n, r, i;
      return t = $e, e.substr($e, 8) === k ? (n = k, $e += 8) : (n = A, 0 === Je && a(j)), n !== A ? (r = u(), r === A && (r = l()), r !== A ? (41 === e.charCodeAt($e) ? (i = M, $e++) : (i = A, 0 === Je && a(L)), i !== A ? (n = F(r), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function u() {
      var t, n, r, i, o, s, u;
      return t = $e, n = f(), n !== A ? (r = c(), r === A && (r = null), r !== A ? (44 === e.charCodeAt($e) ? (i = q, $e++) : (i = A, 0 === Je && a(V)), i !== A ? (o = c(), o !== A ? (44 === e.charCodeAt($e) ? (s = q, $e++) : (s = A, 0 === Je && a(V)), s !== A ? (u = c(), u !== A ? (n = H(n, r, o, u), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function l() {
      var e, t, n;
      return e = $e, t = f(), t !== A ? (n = c(), n !== A ? (t = U(t, n), e = t) : ($e = e, e = A)) : ($e = e, e = A), e;
    }
    function c() {
      var e, t, n;
      if (e = $e, t = [], n = f(), n === A && (n = d()), n !== A)
        for (; n !== A;)
          t.push(n), (n = f()) === A && (n = d());
      else
        t = A;
      return t !== A ? (n = p(), n === A && (n = null), n !== A ? (t = B(t, n), e = t) : ($e = e, e = A)) : ($e = e, e = A), e;
    }
    function f() {
      var t, n, r, i, o, s, u;
      return t = $e, 47 === e.charCodeAt($e) ? (n = z, $e++) : (n = A, 0 === Je && a(W)), n !== A ? (r = E(), r !== A ? (i = $e, 91 === e.charCodeAt($e) ? (o = G, $e++) : (o = A, 0 === Je && a($)), o !== A ? (s = h(), s !== A ? (93 === e.charCodeAt($e) ? (u = Q, $e++) : (u = A, 0 === Je && a(X)), u !== A ? (o = [
        o,
        s,
        u
      ], i = o) : ($e = i, i = A)) : ($e = i, i = A)) : ($e = i, i = A), i === A && (i = null), i !== A ? (n = Y(r, i), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function d() {
      var t, n, r, i, o, s, u;
      return t = $e, e.substr($e, 2) === J ? (n = J, $e += 2) : (n = A, 0 === Je && a(K)), n !== A ? (r = E(), r !== A ? (i = $e, 91 === e.charCodeAt($e) ? (o = G, $e++) : (o = A, 0 === Je && a($)), o !== A ? (s = h(), s !== A ? (93 === e.charCodeAt($e) ? (u = Q, $e++) : (u = A, 0 === Je && a(X)), u !== A ? (o = [
        o,
        s,
        u
      ], i = o) : ($e = i, i = A)) : ($e = i, i = A)) : ($e = i, i = A), i === A && (i = null), i !== A ? (n = Z(r, i), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function p() {
      var t, n, r, i, o, s, u;
      return t = $e, 58 === e.charCodeAt($e) ? (n = ee, $e++) : (n = A, 0 === Je && a(te)), n !== A ? (r = E(), r !== A ? (i = $e, 91 === e.charCodeAt($e) ? (o = G, $e++) : (o = A, 0 === Je && a($)), o !== A ? (s = g(), s !== A ? (93 === e.charCodeAt($e) ? (u = Q, $e++) : (u = A, 0 === Je && a(X)), u !== A ? (o = [
        o,
        s,
        u
      ], i = o) : ($e = i, i = A)) : ($e = i, i = A)) : ($e = i, i = A), i === A && (i = null), i !== A ? (n = ne(r, i), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function h() {
      var e;
      return $e, e = b(), e !== A && (e = re(e)), e;
    }
    function g() {
      var e, t, n;
      return e = $e, t = v(), t === A && (t = null), t !== A ? (n = m(), n === A && (n = null), n !== A ? (t = ie(t, n), e = t) : ($e = e, e = A)) : ($e = e, e = A), e;
    }
    function m() {
      var t, n, r, i, o;
      return t = $e, 59 === e.charCodeAt($e) ? (n = oe, $e++) : (n = A, 0 === Je && a(ae)), n !== A ? (r = y(), r !== A ? (61 === e.charCodeAt($e) ? (i = se, $e++) : (i = A, 0 === Je && a(ue)), i !== A ? (o = y(), o !== A ? (n = le(r, o), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function v() {
      var t, n, r, i;
      return t = $e, n = b(), n === A && (n = null), n !== A ? (44 === e.charCodeAt($e) ? (r = q, $e++) : (r = A, 0 === Je && a(V)), r !== A ? (i = b(), i === A && (i = null), i !== A ? (n = ce(n, i), t = n) : ($e = t, t = A)) : ($e = t, t = A)) : ($e = t, t = A), t;
    }
    function y() {
      var e, t;
      if ($e, e = [], t = w(), t === A && (t = N()), t !== A)
        for (; t !== A;)
          e.push(t), (t = w()) === A && (t = N());
      else
        e = A;
      return e !== A && (e = fe(e)), e;
    }
    function b() {
      var e, t;
      if ($e, e = [], t = w(), t === A && (t = N()) === A && (t = T()), t !== A)
        for (; t !== A;)
          e.push(t), (t = w()) === A && (t = N()) === A && (t = T());
      else
        e = A;
      return e !== A && (e = fe(e)), e;
    }
    function w() {
      var e, t, n;
      return $e, e = $e, t = x(), t !== A ? (n = x(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A), e === A && (e = $e, t = x(), t !== A ? (n = _(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A), e === A && (e = $e, t = x(), t !== A ? (n = S(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A), e === A && (e = $e, t = x(), t !== A ? (n = C(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A), e === A && (e = $e, t = x(), t !== A ? (n = I(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A), e === A && (e = $e, t = x(), t !== A ? (n = O(), n !== A ? (t = [
        t,
        n
      ], e = t) : ($e = e, e = A)) : ($e = e, e = A)))))), e !== A && (e = de(e)), e;
    }
    function E() {
      var t, n, r, i;
      if ($e, 48 === e.charCodeAt($e) ? (t = we, $e++) : (t = A, 0 === Je && a(Ee)), t === A)
        if (t = $e, pe.test(e.charAt($e)) ? (n = e.charAt($e), $e++) : (n = A, 0 === Je && a(ge)), n !== A) {
          for (r = [], me.test(e.charAt($e)) ? (i = e.charAt($e), $e++) : (i = A, 0 === Je && a(ve)); i !== A;)
            r.push(i), me.test(e.charAt($e)) ? (i = e.charAt($e), $e++) : (i = A, 0 === Je && a(ve));
          r !== A ? (n = [
            n,
            r
          ], t = n) : ($e = t, t = A);
        } else
          $e = t, t = A;
      return t !== A && (t = Te(t)), t;
    }
    function T() {
      var t;
      return $e, 32 === e.charCodeAt($e) ? (t = xe, $e++) : (t = A, 0 === Je && a(_e)), t !== A && (t = Se()), t;
    }
    function x() {
      var t;
      return $e, 94 === e.charCodeAt($e) ? (t = Ce, $e++) : (t = A, 0 === Je && a(Ie)), t !== A && (t = Oe()), t;
    }
    function _() {
      var t;
      return $e, 91 === e.charCodeAt($e) ? (t = G, $e++) : (t = A, 0 === Je && a($)), t === A && (93 === e.charCodeAt($e) ? (t = Q, $e++) : (t = A, 0 === Je && a(X))), t !== A && (t = Ne(t)), t;
    }
    function S() {
      var t;
      return $e, 40 === e.charCodeAt($e) ? (t = Pe, $e++) : (t = A, 0 === Je && a(Ae)), t === A && (41 === e.charCodeAt($e) ? (t = M, $e++) : (t = A, 0 === Je && a(L))), t !== A && (t = De(t)), t;
    }
    function C() {
      var t;
      return $e, 44 === e.charCodeAt($e) ? (t = q, $e++) : (t = A, 0 === Je && a(V)), t !== A && (t = Re()), t;
    }
    function I() {
      var t;
      return $e, 59 === e.charCodeAt($e) ? (t = oe, $e++) : (t = A, 0 === Je && a(ae)), t !== A && (t = ke()), t;
    }
    function O() {
      var t;
      return $e, 61 === e.charCodeAt($e) ? (t = se, $e++) : (t = A, 0 === Je && a(ue)), t !== A && (t = je()), t;
    }
    function N() {
      var t;
      return $e, Me.test(e.charAt($e)) ? (t = e.charAt($e), $e++) : (t = A, 0 === Je && a(Le)), t === A && (Fe.test(e.charAt($e)) ? (t = e.charAt($e), $e++) : (t = A, 0 === Je && a(qe)), t === A && (me.test(e.charAt($e)) ? (t = e.charAt($e), $e++) : (t = A, 0 === Je && a(ve)), t === A && (45 === e.charCodeAt($e) ? (t = Ve, $e++) : (t = A, 0 === Je && a(He)), t === A && (95 === e.charCodeAt($e) ? (t = Ue, $e++) : (t = A, 0 === Je && a(Be)), t === A && (46 === e.charCodeAt($e) ? (t = ye, $e++) : (t = A, 0 === Je && a(be)), t === A && (37 === e.charCodeAt($e) ? (t = ze, $e++) : (t = A, 0 === Je && a(We)))))))), t !== A && (t = Ge(t)), t;
    }
    t = void 0 !== t ? t : {};
    var P, A = {}, D = { fragment: s }, R = s, k = 'epubcfi(', j = n('epubcfi(', !1), M = ')', L = n(')', !1), F = function (e) {
        return {
          type: 'CFIAST',
          cfiString: e
        };
      }, q = ',', V = n(',', !1), H = function (e, t, n, r) {
        return {
          type: 'range',
          path: e,
          localPath: t || '',
          range1: n,
          range2: r
        };
      }, U = function (e, t) {
        return {
          type: 'path',
          path: e,
          localPath: t
        };
      }, B = function (e, t) {
        return {
          steps: e,
          termStep: t || ''
        };
      }, z = '/', W = n('/', !1), G = '[', $ = n('[', !1), Q = ']', X = n(']', !1), Y = function (e, t) {
        return {
          type: 'indexStep',
          stepLength: e,
          idAssertion: t ? t[1] : void 0
        };
      }, J = '!/', K = n('!/', !1), Z = function (e, t) {
        return {
          type: 'indirectionStep',
          stepLength: e,
          idAssertion: t ? t[1] : void 0
        };
      }, ee = ':', te = n(':', !1), ne = function (e, t) {
        return {
          type: 'textTerminus',
          offsetValue: e,
          textAssertion: t ? t[1] : void 0
        };
      }, re = function (e) {
        return e;
      }, ie = function (e, t) {
        return {
          type: 'textLocationAssertion',
          csv: e || '',
          parameter: t || ''
        };
      }, oe = ';', ae = n(';', !1), se = '=', ue = n('=', !1), le = function (e, t) {
        return {
          type: 'parameter',
          LHSValue: e || '',
          RHSValue: t || ''
        };
      }, ce = function (e, t) {
        return {
          type: 'csv',
          preAssertion: e || '',
          postAssertion: t || ''
        };
      }, fe = function (e) {
        return e.join('');
      }, de = function (e) {
        return e[1];
      }, pe = /^[1-9]/, ge = r([[
          '1',
          '9'
        ]], !1, !1), me = /^[0-9]/, ve = r([[
          '0',
          '9'
        ]], !1, !1), ye = '.', be = n('.', !1), we = '0', Ee = n('0', !1), Te = function (e) {
        return '0' === e ? '0' : e[0].concat(e[1].join(''));
      }, xe = ' ', _e = n(' ', !1), Se = function () {
        return ' ';
      }, Ce = '^', Ie = n('^', !1), Oe = function () {
        return '^';
      }, Ne = function (e) {
        return e;
      }, Pe = '(', Ae = n('(', !1), De = function (e) {
        return e;
      }, Re = function () {
        return ',';
      }, ke = function () {
        return ';';
      }, je = function () {
        return '=';
      }, Me = /^[a-z]/, Le = r([[
          'a',
          'z'
        ]], !1, !1), Fe = /^[A-Z]/, qe = r([[
          'A',
          'Z'
        ]], !1, !1), Ve = '-', He = n('-', !1), Ue = '_', Be = n('_', !1), ze = '%', We = n('%', !1), Ge = function (e) {
        return e;
      }, $e = 0, Qe = [{
          line: 1,
          column: 1
        }], Xe = 0, Ye = [], Je = 0;
    if ('startRule' in t) {
      if (!(t.startRule in D))
        throw new Error('Can\'t start parsing from rule "' + t.startRule + '".');
      R = D[t.startRule];
    }
    if ((P = R()) !== A && $e === e.length)
      return P;
    throw P !== A && $e < e.length && a(function () {
      return { type: 'end' };
    }()), function (e, t, n) {
      return new he(he.buildMessage(e, t), e, t, n);
    }(Ye, Xe < e.length ? e.charAt(Xe) : null, Xe < e.length ? o(Xe, Xe + 1) : o(Xe, Xe));
  }
  function me(e) {
    for (var t = 0; t <= e.cfiString.localPath.steps.length - 1; t += 1) {
      if ('indirectionStep' === e.cfiString.localPath.steps[t].type)
        return t;
    }
  }
  function ve(e, t) {
    var n = rt.extend(!0, {}, e), r = t ? e.cfiString.range1 : e.cfiString.range2;
    return delete n.cfiString.range1, delete n.cfiString.range2, n.cfiString.type = 'path', n.cfiString.localPath.steps = n.cfiString.localPath.steps.concat(r.steps), n.cfiString.localPath.termStep = r.termStep, n;
  }
  function ye(e) {
    var t = decodeURI(e), n = hn(t);
    if (!n || 'CFIAST' !== n.type)
      throw new ct(n, 'expected CFI AST root node');
    var r = [];
    return 'range' === n.cfiString.type ? (r.push(ve(n, !0)), r.push(ve(n, !1))) : r.push(n), r;
  }
  function be(e) {
    return e.cfiString.localPath.steps.map(function (e) {
      return parseInt(e.stepLength, 10);
    });
  }
  function we(e, t) {
    for (var n = null, r = 0, i = be(e), o = be(t), a = e.cfiString.localPath.termStep, s = t.cfiString.localPath.termStep;;) {
      var u = i[r], l = o[r];
      if (!u || !l) {
        if (0 === n && (a.offsetValue || s.offsetValue)) {
          var c = parseInt(a.offsetValue, 10) || 0, f = parseInt(s.offsetValue, 10) || 0;
          n = c > f ? 1 : c < f ? -1 : 0;
        }
        break;
      }
      if (u > l) {
        n = 1;
        break;
      }
      if (u < l) {
        n = -1;
        break;
      }
      n = 0, r += 1;
    }
    return n;
  }
  function Ee(e, t, n, r, i) {
    if (void 0 === e || 'indexStep' !== e.type)
      throw new ct(e, 'expected index step node');
    var o = ce(e.stepLength, t, n, r, i);
    if (e.idAssertion && !pe(o, e.idAssertion))
      throw new pt(e.idAssertion, o.attr('id'), 'Id assertion failed');
    return o;
  }
  function Te(e, t, n, r, i) {
    if (void 0 === e || 'indirectionStep' !== e.type)
      throw new ct(e, 'expected indirection step node');
    var o = fe(e.stepLength, t, n, r, i);
    if (e.idAssertion && !pe(o, e.idAssertion))
      throw new pt(e.idAssertion, o.attr('id'), 'Id assertion failed');
    return o;
  }
  function xe(e, t, n, r, i, o) {
    for (var a = void 0, s = void 0, u = 0; u <= n.steps.length - 1; u += 1) {
      a = n.steps[u], 'indexStep' === a.type ? s = Ee(a, e, r, i, o) : 'indirectionStep' === a.type && (s = Te(a, e, r, i, o));
      var l = s, c = ut(l, 1), f = c[0];
      if (te(f, 'itemref'))
        return oe(f, t);
    }
  }
  function _e(e, t, n, r, i, o) {
    for (var a = void 0, s = t; s <= e.steps.length - 1; s += 1)
      a = e.steps[s], 'indexStep' === a.type ? n = Ee(a, n, r, i, o) : 'indirectionStep' === a.type && (n = Te(a, n, r, i, o));
    return n;
  }
  function Se(e, t, n) {
    if (void 0 === e || 'textTerminus' !== e.type)
      throw new ct(e, 'expected text terminus node');
    return de(t, e.offsetValue, n);
  }
  function Ce(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o);
    if (!a || 'CFIAST' !== a.type)
      throw new ct(a, 'expected CFI AST root node');
    var s = rt(t.getElementsByTagNameNS('*', 'package')), u = Ee(a.cfiString.path, s, n, r, i), l = xe(u, t, a.cfiString.localPath, n, r, i);
    if (l)
      return l;
  }
  function Ie(e, t) {
    var n = ye(e), r = ye(t);
    if (n.length > 1 && r.length > 1)
      return [
        we(n[0], r[0]),
        we(n[1], r[1])
      ];
    if (n.length > 1 && 1 === r.length)
      return [
        we(n[0], r[0]),
        we(n[1], r[0])
      ];
    if (1 === n.length && r.length > 1)
      return [
        we(n[0], r[0]),
        we(n[0], r[1])
      ];
    var i = we(n[0], r[0]);
    return [
      i,
      i
    ];
  }
  function Oe(e, t, n, r, i, o) {
    var a = decodeURI(e), s = hn(a), u = void 0, l = me(s);
    return s.cfiString.localPath.steps[l].type = 'indexStep', u = _e(s.cfiString.localPath, l, rt(t.documentElement, t), r, i, o), u = Se(s.cfiString.localPath.termStep, u, n);
  }
  function Ne(e, t, n, r, i, o, a) {
    var s = decodeURI(e), u = hn(s), l = void 0, c = void 0, f = me(u);
    u.cfiString.localPath.steps[f].type = 'indexStep';
    var d = _e(u.cfiString.localPath, f, rt(t.documentElement, t), i, o, a);
    return l = _e(u.cfiString.range1, 0, d, i, o, a), l = Se(u.cfiString.range1.termStep, l, n), c = _e(u.cfiString.range2, 0, d, i, o, a), c = Se(u.cfiString.range2.termStep, c, r), {
      startElement: l[0],
      endElement: c[0]
    };
  }
  function Pe(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o), s = me(a);
    return a.cfiString.localPath.steps[s].type = 'indexStep', _e(a.cfiString.localPath, s, rt(t.documentElement, t), n, r, i);
  }
  function Ae(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o), s = me(a);
    a.cfiString.localPath.steps[s].type = 'indexStep';
    var u = _e(a.cfiString.localPath, s, rt(t.documentElement, t), n, r, i), l = _e(a.cfiString.range1, 0, u, n, r, i), c = _e(a.cfiString.range2, 0, u, n, r, i), f = parseInt(a.cfiString.range1.termStep.offsetValue, 10) || void 0, d = parseInt(a.cfiString.range2.termStep.offsetValue, 10) || void 0;
    return {
      startElement: l[0],
      startOffset: f,
      endElement: c[0],
      endOffset: d
    };
  }
  function De(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o), s = Ee(a.cfiString.path, rt(t.documentElement, t), n, r, i);
    return s = _e(a.cfiString.localPath, 0, s, n, r, i);
  }
  function Re(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o), s = Ee(a.cfiString.path, rt(t.documentElement, t), n, r, i);
    s = _e(a.cfiString.localPath, 0, s, n, r, i);
    var u = parseInt(a.cfiString.localPath.termStep.offsetValue, 10);
    return {
      textNode: s[0],
      textOffset: u
    };
  }
  function ke(e, t, n, r, i) {
    var o = decodeURI(e), a = hn(o), s = me(a);
    a.cfiString.localPath.steps[s].type = 'indexStep';
    var u = _e(a.cfiString.localPath, s, rt(t.documentElement, t), n, r, i), l = parseInt(a.cfiString.localPath.termStep.offsetValue, 10);
    return {
      textNode: u[0],
      textOffset: l
    };
  }
  function je(e) {
    var t = e ? decodeURI(e) : void 0, n = hn(t);
    if (!n || 'CFIAST' !== n.type)
      throw new ct(n, 'expected CFI AST root node');
    return 'range' === n.cfiString.type;
  }
  function Me(e) {
    var t = e ? decodeURI(e) : void 0, n = hn(t);
    if (!n || 'CFIAST' !== n.type)
      throw new ct(n, 'expected CFI AST root node');
    return !!n.cfiString.localPath.termStep;
  }
  function Le(e, t) {
    if (!e)
      throw new ct(e, 'Cannot generate a character offset from a starting point that is not a text node');
    if (3 !== e.nodeType)
      throw new ct(e, 'Cannot generate a character offset from a starting point that is not a text node');
    if (t < 0)
      throw new ft(t, 0, 'Character offset cannot be less than 0');
    if (t > e.nodeValue.length)
      throw new ft(t, e.nodeValue.length - 1, 'character offset cannot be greater than the length of the text node');
  }
  function Fe(e) {
    if (!e)
      throw new ct(e, 'CFI target element is undefined');
  }
  function qe(e) {
    if (Fe(e), !e.nodeType || 1 !== e.nodeType)
      throw new ct(e, 'CFI target element is not an HTML element');
  }
  function Ve(e) {
    if (!e)
      throw new Error('The idref for the content document, as found in the spine, must be supplied');
  }
  function He(e, t) {
    return [].concat(lt(e.getElementsByTagNameNS('*', 'itemref'))).find(function (e) {
      return e.getAttribute('idref') === t;
    });
  }
  function Ue(e, t) {
    if (!e)
      throw new Error('A package document must be supplied to generate a CFI');
    if (!He(e, t))
      throw new Error('The idref of the content document could not be found in the spine');
  }
  function Be(e) {
    return e.nodeType === Node.TEXT_NODE || e.nodeType === Node.ELEMENT_NODE;
  }
  function ze(e) {
    var t = e.startContainer, n = e.endContainer, r = e.commonAncestorContainer;
    if (r.nodeType === Node.ELEMENT_NODE && (t.nodeType === Node.TEXT_NODE || n.nodeType === Node.TEXT_NODE)) {
      if (t === r) {
        var i = [].concat(lt(t.childNodes)).filter(Be), o = ut(i, 1), a = o[0];
        a && e.setStart(a, 0);
      }
      if (n === r) {
        var s = [].concat(lt(n.childNodes)).filter(Be).slice(-1), u = ut(s, 1), l = u[0];
        l && (l.length ? e.setEnd(l, l.length) : l.hasChildNodes() ? e.setEnd(l, l.childNodes.length) : e.setEnd(l, 1));
      }
    }
  }
  function We(e, t, n, r, i) {
    var o = -1, a = e.parent(), s = rt(ie(a.contents().toArray(), n, r, i)), u = void 0, l = void 0, c = 0, f = 0, d = 0;
    return rt.each(s, function () {
      if (this.nodeType !== Node.TEXT_NODE && u)
        this.nodeType === Node.ELEMENT_NODE ? (u = !1, l = void 0, f = 0) : this.nodeType === Node.COMMENT_NODE ? f = f + this.length + 7 : this.nodeType === Node.PROCESSING_INSTRUCTION_NODE && (f = f + this.data.length + this.target.length + 5);
      else if (this.nodeType === Node.TEXT_NODE) {
        if (this === e[0])
          return u ? (o = l, d = f) : o = c, !1;
        u = !0, f += this.length, void 0 === l && (l = c, c += 1);
      } else
        this.nodeType === Node.ELEMENT_NODE ? c += 1 : this.nodeType === Node.COMMENT_NODE ? (u = !0, f = f + this.length + 7, void 0 === l && (l = c)) : this.nodeType === Node.PROCESSING_INSTRUCTION_NODE && (u = !0, f = f + this.data.length + this.target.length + 5, void 0 === l && (l = c));
      return !0;
    }), '/' + (2 * o + 1) + ':' + (d + t);
  }
  function Ge(e, t, n, r, i) {
    var o = -1, a = void 0, s = rt(ie(e.parent().children().toArray(), n, r, i));
    rt.each(s, function (t) {
      return this !== e[0] || (o = t, !1);
    });
    var u = 2 * (o + 1);
    a = e.attr('id') ? '/' + u + '[' + e.attr('id') + ']' : '/' + u;
    var l = e.parent();
    return 'string' == typeof t && te(l[0], t) || te(e[0], t) ? a : l[0] === t || e[0] === t ? a : Ge(l, t, n, r, i) + a;
  }
  function $e(e, t, n, r) {
    ze(e);
    var i = e.startContainer, o = e.endContainer, a = e.startOffset, s = e.endOffset, u = e.commonAncestorContainer, l = i.ownerDocument, c = void 0, f = void 0, d = void 0, p = void 0, h = void 0;
    if (i.nodeType === Node.TEXT_NODE && o.nodeType === Node.TEXT_NODE && rt(i).parent()[0] === rt(o).parent()[0])
      return f = We(rt(i), a, t, n, r), p = We(rt(o), s, t, n, r), (h = Ge(rt(i).parent(), l.documentElement, t, n, r)) + ',' + f + ',' + p;
    if (i.nodeType === Node.ELEMENT_NODE && o.nodeType === Node.ELEMENT_NODE && i === o && u === i) {
      var g = u.childNodes[a], m = void 0;
      return m = s === u.childNodes.length ? u.childNodes[s - 1] : u.childNodes[s].previousSibling, (h = Ge(rt(u), l.documentElement, t, n, r), c = Ge(rt(g), u, t, n, r), g === m) ? h + c : (d = Ge(rt(m), u, t, n, r), h + ',' + c + ',' + d);
    }
    return i.nodeType === Node.ELEMENT_NODE ? (qe(i), c = Ge(rt(i), u, t, n, r)) : (Le(i), f = We(rt(i), a, t, n, r), c = rt(i).parent()[0] === u ? f : Ge(rt(i).parent(), u, t, n, r) + f), o.nodeType === Node.ELEMENT_NODE ? (qe(o), d = Ge(rt(o), u, t, n, r)) : (Le(o), p = We(rt(o), s, t, n, r), d = rt(o).parent()[0] === u ? p : Ge(rt(o).parent(), u, t, n, r) + p), (h = Ge(rt(u), l.documentElement, t, n, r)) + ',' + c + ',' + d;
  }
  function Qe(e, t, n, r, i, o, a) {
    var s = e.ownerDocument, u = s.createRange();
    return u.setStart(e, t), u.setEnd(n, r), $e(u, i, o, a);
  }
  function Xe(e, t, n, r, i, o, a) {
    var s = e.ownerDocument;
    Le(e), Le(n);
    var u = s.createRange();
    return u.setStart(e, t), u.setEnd(n, r), $e(u, i, o, a);
  }
  function Ye(e, t, n, r, i) {
    var o = e.ownerDocument, a = o.createRange();
    return a.setStartBefore(e), a.setEndAfter(t), $e(a, n, r, i);
  }
  function Je(e, t, n, r, i) {
    Le(e, t);
    var o = We(rt(e), t, n, r, i);
    return Ge(rt(e).parent(), e.ownerDocument.documentElement, n, r, i) + o;
  }
  function Ke(e, t, n, r) {
    return qe(e), Ge(rt(e), e.ownerDocument.documentElement, t, n, r);
  }
  function Ze(e, t, n, r, i) {
    return Ve(e), Ue(t, e), Ge(rt(He(t, e)), 'package', n, r, i) + '!';
  }
  function et(e, t, n, r, i) {
    var o = t.getElementsByTagNameNS('*', 'spine');
    return Ge(rt(rt(o).children()[e]), 'package', n, r, i) + '!';
  }
  function tt(e, t) {
    return 'epubcfi(' + e + t + ')';
  }
  var nt = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {}, rt = function (e, t) {
      return t = { exports: {} }, e(t, t.exports), t.exports;
    }(function (e) {
      !function (t, n) {
        e.exports = t.document ? n(t, !0) : function (e) {
          if (!e.document)
            throw new Error('jQuery requires a window with a document');
          return n(e);
        };
      }('undefined' != typeof window ? window : nt, function (e, t) {
        function n(e, t, n) {
          t = t || ae;
          var r, i = t.createElement('script');
          if (i.text = e, n)
            for (r in we)
              n[r] && (i[r] = n[r]);
          t.head.appendChild(i).parentNode.removeChild(i);
        }
        function r(e) {
          return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? de[pe.call(e)] || 'object' : typeof e;
        }
        function i(e) {
          var t = !!e && 'length' in e && e.length, n = r(e);
          return !ye(e) && !be(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
        }
        function o(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        function a(e, t, n) {
          return ye(t) ? Ee.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          }) : t.nodeType ? Ee.grep(e, function (e) {
            return e === t !== n;
          }) : 'string' != typeof t ? Ee.grep(e, function (e) {
            return fe.call(t, e) > -1 !== n;
          }) : Ee.filter(t, e, n);
        }
        function s(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;);
          return e;
        }
        function u(e) {
          var t = {};
          return Ee.each(e.match(De) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }
        function l(e) {
          return e;
        }
        function c(e) {
          throw e;
        }
        function f(e, t, n, r) {
          var i;
          try {
            e && ye(i = e.promise) ? i.call(e).done(t).fail(n) : e && ye(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        function d() {
          ae.removeEventListener('DOMContentLoaded', d), e.removeEventListener('load', d), Ee.ready();
        }
        function p(e, t) {
          return t.toUpperCase();
        }
        function h(e) {
          return e.replace(Me, 'ms-').replace(Le, p);
        }
        function g() {
          this.expando = Ee.expando + g.uid++;
        }
        function m(e) {
          return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : He.test(e) ? JSON.parse(e) : e);
        }
        function v(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (r = 'data-' + t.replace(Ue, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
              try {
                n = m(n);
              } catch (e) {
              }
              Ve.set(e, t, n);
            } else
              n = void 0;
          return n;
        }
        function y(e, t, n, r) {
          var i, o, a = 20, s = r ? function () {
              return r.cur();
            } : function () {
              return Ee.css(e, t, '');
            }, u = s(), l = n && n[3] || (Ee.cssNumber[t] ? '' : 'px'), c = (Ee.cssNumber[t] || 'px' !== l && +u) && ze.exec(Ee.css(e, t));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;)
              Ee.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
            c *= 2, Ee.style(e, t, c + l), n = n || [];
          }
          return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
        }
        function b(e) {
          var t, n = e.ownerDocument, r = e.nodeName, i = Qe[r];
          return i || (t = n.body.appendChild(n.createElement(r)), i = Ee.css(t, 'display'), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), Qe[r] = i, i);
        }
        function w(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            r = e[o], r.style && (n = r.style.display, t ? ('none' === n && (i[o] = qe.get(r, 'display') || null, i[o] || (r.style.display = '')), '' === r.style.display && Ge(r) && (i[o] = b(r))) : 'none' !== n && (i[o] = 'none', qe.set(r, 'display', n)));
          for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        function E(e, t) {
          var n;
          return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && o(e, t) ? Ee.merge([e], n) : n;
        }
        function T(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            qe.set(e[n], 'globalEval', !t || qe.get(t[n], 'globalEval'));
        }
        function x(e, t, n, i, o) {
          for (var a, s, u, l, c, f, d = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
            if ((a = e[h]) || 0 === a)
              if ('object' === r(a))
                Ee.merge(p, a.nodeType ? [a] : a);
              else if (Ze.test(a)) {
                for (s = s || d.appendChild(t.createElement('div')), u = (Ye.exec(a) || [
                    '',
                    ''
                  ])[1].toLowerCase(), l = Ke[u] || Ke._default, s.innerHTML = l[1] + Ee.htmlPrefilter(a) + l[2], f = l[0]; f--;)
                  s = s.lastChild;
                Ee.merge(p, s.childNodes), s = d.firstChild, s.textContent = '';
              } else
                p.push(t.createTextNode(a));
          for (d.textContent = '', h = 0; a = p[h++];)
            if (i && Ee.inArray(a, i) > -1)
              o && o.push(a);
            else if (c = Ee.contains(a.ownerDocument, a), s = E(d.appendChild(a), 'script'), c && T(s), n)
              for (f = 0; a = s[f++];)
                Je.test(a.type || '') && n.push(a);
          return d;
        }
        function _() {
          return !0;
        }
        function S() {
          return !1;
        }
        function C() {
          try {
            return ae.activeElement;
          } catch (e) {
          }
        }
        function I(e, t, n, r, i, o) {
          var a, s;
          if ('object' == typeof t) {
            'string' != typeof n && (r = r || n, n = void 0);
            for (s in t)
              I(e, s, n, r, t[s], o);
            return e;
          }
          if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ('string' == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
            i = S;
          else if (!i)
            return e;
          return 1 === o && (a = i, i = function (e) {
            return Ee().off(e), a.apply(this, arguments);
          }, i.guid = a.guid || (a.guid = Ee.guid++)), e.each(function () {
            Ee.event.add(this, t, i, r, n);
          });
        }
        function O(e, t) {
          return o(e, 'table') && o(11 !== t.nodeType ? t : t.firstChild, 'tr') ? Ee(e).children('tbody')[0] || e : e;
        }
        function N(e) {
          return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
        }
        function P(e) {
          return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e;
        }
        function A(e, t) {
          var n, r, i, o, a, s, u, l;
          if (1 === t.nodeType) {
            if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), l = o.events)) {
              delete a.handle, a.events = {};
              for (i in l)
                for (n = 0, r = l[i].length; n < r; n++)
                  Ee.event.add(t, i, l[i][n]);
            }
            Ve.hasData(e) && (s = Ve.access(e), u = Ee.extend({}, s), Ve.set(t, u));
          }
        }
        function D(e, t) {
          var n = t.nodeName.toLowerCase();
          'input' === n && Xe.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
        }
        function R(e, t, r, i) {
          t = le.apply([], t);
          var o, a, s, u, l, c, f = 0, d = e.length, p = d - 1, h = t[0], g = ye(h);
          if (g || d > 1 && 'string' == typeof h && !ve.checkClone && at.test(h))
            return e.each(function (n) {
              var o = e.eq(n);
              g && (t[0] = h.call(this, n, o.html())), R(o, t, r, i);
            });
          if (d && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = Ee.map(E(o, 'script'), N), u = s.length; f < d; f++)
              l = o, f !== p && (l = Ee.clone(l, !0, !0), u && Ee.merge(s, E(l, 'script'))), r.call(e[f], l, f);
            if (u)
              for (c = s[s.length - 1].ownerDocument, Ee.map(s, P), f = 0; f < u; f++)
                l = s[f], Je.test(l.type || '') && !qe.access(l, 'globalEval') && Ee.contains(c, l) && (l.src && 'module' !== (l.type || '').toLowerCase() ? Ee._evalUrl && Ee._evalUrl(l.src) : n(l.textContent.replace(st, ''), c, l));
          }
          return e;
        }
        function k(e, t, n) {
          for (var r, i = t ? Ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || Ee.cleanData(E(r)), r.parentNode && (n && Ee.contains(r.ownerDocument, r) && T(E(r, 'script')), r.parentNode.removeChild(r));
          return e;
        }
        function j(e, t, n) {
          var r, i, o, a, s = e.style;
          return n = n || lt(e), n && (a = n.getPropertyValue(t) || n[t], '' !== a || Ee.contains(e.ownerDocument, e) || (a = Ee.style(e, t)), !ve.pixelBoxStyles() && ut.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a;
        }
        function M(e, t) {
          return {
            get: function () {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
          };
        }
        function L(e) {
          if (e in mt)
            return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
            if ((e = gt[n] + t) in mt)
              return e;
        }
        function F(e) {
          var t = Ee.cssProps[e];
          return t || (t = Ee.cssProps[e] = L(e) || e), t;
        }
        function q(e, t, n) {
          var r = ze.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
        }
        function V(e, t, n, r, i, o) {
          var a = 'width' === t ? 1 : 0, s = 0, u = 0;
          if (n === (r ? 'border' : 'content'))
            return 0;
          for (; a < 4; a += 2)
            'margin' === n && (u += Ee.css(e, n + We[a], !0, i)), r ? ('content' === n && (u -= Ee.css(e, 'padding' + We[a], !0, i)), 'margin' !== n && (u -= Ee.css(e, 'border' + We[a] + 'Width', !0, i))) : (u += Ee.css(e, 'padding' + We[a], !0, i), 'padding' !== n ? u += Ee.css(e, 'border' + We[a] + 'Width', !0, i) : s += Ee.css(e, 'border' + We[a] + 'Width', !0, i));
          return !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
        }
        function H(e, t, n) {
          var r = lt(e), i = j(e, t, r), o = 'border-box' === Ee.css(e, 'boxSizing', !1, r), a = o;
          if (ut.test(i)) {
            if (!n)
              return i;
            i = 'auto';
          }
          return a = a && (ve.boxSizingReliable() || i === e.style[t]), ('auto' === i || !parseFloat(i) && 'inline' === Ee.css(e, 'display', !1, r)) && (i = e['offset' + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + V(e, t, n || (o ? 'border' : 'content'), a, r, i) + 'px';
        }
        function U(e, t, n, r, i) {
          return new U.prototype.init(e, t, n, r, i);
        }
        function B() {
          yt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, Ee.fx.interval), Ee.fx.tick());
        }
        function z() {
          return e.setTimeout(function () {
            vt = void 0;
          }), vt = Date.now();
        }
        function W(e, t) {
          var n, r = 0, i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = We[r], i['margin' + n] = i['padding' + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function G(e, t, n) {
          for (var r, i = (X.tweeners[t] || []).concat(X.tweeners['*']), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
              return r;
        }
        function $(e, t, n) {
          var r, i, o, a, s, u, l, c, f = 'width' in t || 'height' in t, d = this, p = {}, h = e.style, g = e.nodeType && Ge(e), m = qe.get(e, 'fxshow');
          n.queue || (a = Ee._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
          }), a.unqueued++, d.always(function () {
            d.always(function () {
              a.unqueued--, Ee.queue(e, 'fx').length || a.empty.fire();
            });
          }));
          for (r in t)
            if (i = t[r], bt.test(i)) {
              if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
                if ('show' !== i || !m || void 0 === m[r])
                  continue;
                g = !0;
              }
              p[r] = m && m[r] || Ee.style(e, r);
            }
          if ((u = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [
              h.overflow,
              h.overflowX,
              h.overflowY
            ], l = m && m.display, null == l && (l = qe.get(e, 'display')), c = Ee.css(e, 'display'), 'none' === c && (l ? c = l : (w([e], !0), l = e.style.display || l, c = Ee.css(e, 'display'), w([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === Ee.css(e, 'float') && (u || (d.done(function () {
              h.display = l;
            }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', d.always(function () {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in p)
              u || (m ? 'hidden' in m && (g = m.hidden) : m = qe.access(e, 'fxshow', { display: l }), o && (m.hidden = !g), g && w([e], !0), d.done(function () {
                g || w([e]), qe.remove(e, 'fxshow');
                for (r in p)
                  Ee.style(e, r, p[r]);
              })), u = G(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0));
          }
        }
        function Q(e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Ee.cssHooks[r]) && 'expand' in a) {
              o = a.expand(o), delete e[r];
              for (n in o)
                n in e || (e[n] = o[n], t[n] = i);
            } else
              t[r] = i;
        }
        function X(e, t, n) {
          var r, i, o = 0, a = X.prefilters.length, s = Ee.Deferred().always(function () {
              delete u.elem;
            }), u = function () {
              if (i)
                return !1;
              for (var t = vt || z(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                l.tweens[a].run(o);
              return s.notifyWith(e, [
                l,
                o,
                n
              ]), o < 1 && u ? n : (u || s.notifyWith(e, [
                l,
                1,
                0
              ]), s.resolveWith(e, [l]), !1);
            }, l = s.promise({
              elem: e,
              props: Ee.extend({}, t),
              opts: Ee.extend(!0, {
                specialEasing: {},
                easing: Ee.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: vt || z(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)
                  return this;
                for (i = !0; n < r; n++)
                  l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [
                  l,
                  1,
                  0
                ]), s.resolveWith(e, [
                  l,
                  t
                ])) : s.rejectWith(e, [
                  l,
                  t
                ]), this;
              }
            }), c = l.props;
          for (Q(c, l.opts.specialEasing); o < a; o++)
            if (r = X.prefilters[o].call(l, e, c, l.opts))
              return ye(r.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
          return Ee.map(c, G, l), ye(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ee.fx.timer(Ee.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
          })), l;
        }
        function Y(e) {
          return (e.match(De) || []).join(' ');
        }
        function J(e) {
          return e.getAttribute && e.getAttribute('class') || '';
        }
        function K(e) {
          return Array.isArray(e) ? e : 'string' == typeof e ? e.match(De) || [] : [];
        }
        function Z(e, t, n, i) {
          var o;
          if (Array.isArray(t))
            Ee.each(t, function (t, r) {
              n || At.test(e) ? i(e, r) : Z(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, n, i);
            });
          else if (n || 'object' !== r(t))
            i(e, t);
          else
            for (o in t)
              Z(e + '[' + o + ']', t[o], n, i);
        }
        function ee(e) {
          return function (t, n) {
            'string' != typeof t && (n = t, t = '*');
            var r, i = 0, o = t.toLowerCase().match(De) || [];
            if (ye(n))
              for (; r = o[i++];)
                '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          };
        }
        function te(e, t, n, r) {
          function i(s) {
            var u;
            return o[s] = !0, Ee.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return 'string' != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
            }), u;
          }
          var o = {}, a = e === Bt;
          return i(t.dataTypes[0]) || !o['*'] && i('*');
        }
        function ne(e, t) {
          var n, r, i = Ee.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && Ee.extend(!0, e, r), e;
        }
        function re(e, t, n) {
          for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0];)
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
              }
          if (u[0] in n)
            o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + ' ' + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o)
            return o !== u[0] && u.unshift(o), n[o];
        }
        function ie(e, t, n, r) {
          var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters)
              l[a.toLowerCase()] = e.converters[a];
          for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ('*' === o)
                o = u;
              else if ('*' !== u && u !== o) {
                if (!(a = l[u + ' ' + o] || l['* ' + o]))
                  for (i in l)
                    if (s = i.split(' '), s[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break;
                    }
                if (!0 !== a)
                  if (a && e.throws)
                    t = a(t);
                  else
                    try {
                      t = a(t);
                    } catch (e) {
                      return {
                        state: 'parsererror',
                        error: a ? e : 'No conversion from ' + u + ' to ' + o
                      };
                    }
              }
          return {
            state: 'success',
            data: t
          };
        }
        var oe = [], ae = e.document, se = Object.getPrototypeOf, ue = oe.slice, le = oe.concat, ce = oe.push, fe = oe.indexOf, de = {}, pe = de.toString, he = de.hasOwnProperty, ge = he.toString, me = ge.call(Object), ve = {}, ye = function (e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType;
          }, be = function (e) {
            return null != e && e === e.window;
          }, we = {
            type: !0,
            src: !0,
            noModule: !0
          }, Ee = function (e, t) {
            return new Ee.fn.init(e, t);
          }, Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Ee.fn = Ee.prototype = {
          jquery: '3.3.1',
          constructor: Ee,
          length: 0,
          toArray: function () {
            return ue.call(this);
          },
          get: function (e) {
            return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = Ee.merge(this.constructor(), e);
            return t.prevObject = this, t;
          },
          each: function (e) {
            return Ee.each(this, e);
          },
          map: function (e) {
            return this.pushStack(Ee.map(this, function (t, n) {
              return e.call(t, n, t);
            }));
          },
          slice: function () {
            return this.pushStack(ue.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ce,
          sort: oe.sort,
          splice: oe.splice
        }, Ee.extend = Ee.fn.extend = function () {
          var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
          for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || ye(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
              for (t in e)
                n = a[t], r = e[t], a !== r && (l && r && (Ee.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && Ee.isPlainObject(n) ? n : {}, a[t] = Ee.extend(l, o, r)) : void 0 !== r && (a[t] = r));
          return a;
        }, Ee.extend({
          expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {
          },
          isPlainObject: function (e) {
            var t, n;
            return !(!e || '[object Object]' !== pe.call(e)) && (!(t = se(e)) || 'function' == typeof (n = he.call(t, 'constructor') && t.constructor) && ge.call(n) === me);
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e)
              return !1;
            return !0;
          },
          globalEval: function (e) {
            n(e);
          },
          each: function (e, t) {
            var n, r = 0;
            if (i(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
              for (r in e)
                if (!1 === t.call(e[r], r, e[r]))
                  break;
            return e;
          },
          trim: function (e) {
            return null == e ? '' : (e + '').replace(Te, '');
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? Ee.merge(n, 'string' == typeof e ? [e] : e) : ce.call(n, e)), n;
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : fe.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return e.length = i, e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r, o, a = 0, s = [];
            if (i(e))
              for (r = e.length; a < r; a++)
                null != (o = t(e[a], a, n)) && s.push(o);
            else
              for (a in e)
                null != (o = t(e[a], a, n)) && s.push(o);
            return le.apply([], s);
          },
          guid: 1,
          support: ve
        }), 'function' == typeof Symbol && (Ee.fn[Symbol.iterator] = oe[Symbol.iterator]), Ee.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
          de['[object ' + t + ']'] = t.toLowerCase();
        });
        var xe = function (e) {
          function t(e, t, n, r) {
            var i, o, a, s, u, c, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], 'string' != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
              return n;
            if (!r && ((t ? t.ownerDocument || t : q) !== A && P(t), t = t || A, R)) {
              if (11 !== h && (u = ge.exec(e)))
                if (i = u[1]) {
                  if (9 === h) {
                    if (!(a = t.getElementById(i)))
                      return n;
                    if (a.id === i)
                      return n.push(a), n;
                  } else if (p && (a = p.getElementById(i)) && L(t, a) && a.id === i)
                    return n.push(a), n;
                } else {
                  if (u[2])
                    return Y.apply(n, t.getElementsByTagName(e)), n;
                  if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                    return Y.apply(n, t.getElementsByClassName(i)), n;
                }
              if (w.qsa && !z[e + ' '] && (!k || !k.test(e))) {
                if (1 !== h)
                  p = t, d = e;
                else if ('object' !== t.nodeName.toLowerCase()) {
                  for ((s = t.getAttribute('id')) ? s = s.replace(be, we) : t.setAttribute('id', s = F), c = _(e), o = c.length; o--;)
                    c[o] = '#' + s + ' ' + f(c[o]);
                  d = c.join(','), p = me.test(e) && l(t.parentNode) || t;
                }
                if (d)
                  try {
                    return Y.apply(n, p.querySelectorAll(d)), n;
                  } catch (e) {
                  } finally {
                    s === F && t.removeAttribute('id');
                  }
              }
            }
            return C(e.replace(oe, '$1'), t, n, r);
          }
          function n() {
            function e(n, r) {
              return t.push(n + ' ') > E.cacheLength && delete e[t.shift()], e[n + ' '] = r;
            }
            var t = [];
            return e;
          }
          function r(e) {
            return e[F] = !0, e;
          }
          function i(e) {
            var t = A.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null;
            }
          }
          function o(e, t) {
            for (var n = e.split('|'), r = n.length; r--;)
              E.attrHandle[n[r]] = t;
          }
          function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
              return r;
            if (n)
              for (; n = n.nextSibling;)
                if (n === t)
                  return -1;
            return e ? 1 : -1;
          }
          function s(e) {
            return function (t) {
              return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
            };
          }
          function u(e) {
            return r(function (t) {
              return t = +t, r(function (n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--;)
                  n[i = o[a]] && (n[i] = !(r[i] = n[i]));
              });
            });
          }
          function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          function c() {
          }
          function f(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++)
              r += e[t].value;
            return r;
          }
          function d(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && 'parentNode' === o, s = H++;
            return t.first ? function (t, n, i) {
              for (; t = t[r];)
                if (1 === t.nodeType || a)
                  return e(t, n, i);
              return !1;
            } : function (t, n, u) {
              var l, c, f, d = [
                  V,
                  s
                ];
              if (u) {
                for (; t = t[r];)
                  if ((1 === t.nodeType || a) && e(t, n, u))
                    return !0;
              } else
                for (; t = t[r];)
                  if (1 === t.nodeType || a)
                    if (f = t[F] || (t[F] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
                      t = t[r] || t;
                    else {
                      if ((l = c[o]) && l[0] === V && l[1] === s)
                        return d[2] = l[2];
                      if (c[o] = d, d[2] = e(t, n, u))
                        return !0;
                    }
              return !1;
            };
          }
          function p(e) {
            return e.length > 1 ? function (t, n, r) {
              for (var i = e.length; i--;)
                if (!e[i](t, n, r))
                  return !1;
              return !0;
            } : e[0];
          }
          function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
              t(e, n[i], r);
            return r;
          }
          function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a;
          }
          function m(e, t, n, i, o, a) {
            return i && !i[F] && (i = m(i)), o && !o[F] && (o = m(o, a)), r(function (r, a, s, u) {
              var l, c, f, d = [], p = [], m = a.length, v = r || h(t || '*', s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, d, e, s, u), b = n ? o || (r ? e : m || i) ? [] : a : y;
              if (n && n(y, b, s, u), i)
                for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)
                  (f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
              if (r) {
                if (o || e) {
                  if (o) {
                    for (l = [], c = b.length; c--;)
                      (f = b[c]) && l.push(y[c] = f);
                    o(null, b = [], l, u);
                  }
                  for (c = b.length; c--;)
                    (f = b[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f));
                }
              } else
                b = g(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, u) : Y.apply(a, b);
            });
          }
          function v(e) {
            for (var t, n, r, i = e.length, o = E.relative[e[0].type], a = o || E.relative[' '], s = o ? 1 : 0, u = d(function (e) {
                  return e === t;
                }, a, !0), l = d(function (e) {
                  return K(t, e) > -1;
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== I) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i;
                  }]; s < i; s++)
              if (n = E.relative[e[s].type])
                c = [d(p(c), n)];
              else {
                if (n = E.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                  for (r = ++s; r < i && !E.relative[e[r].type]; r++);
                  return m(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace(oe, '$1'), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e));
                }
                c.push(n);
              }
            return p(c);
          }
          function y(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                var c, f, d, p = 0, h = '0', m = r && [], v = [], y = I, b = r || o && E.find.TAG('*', l), w = V += null == y ? 1 : Math.random() || 0.1, T = b.length;
                for (l && (I = a === A || a || l); h !== T && null != (c = b[h]); h++) {
                  if (o && c) {
                    for (f = 0, a || c.ownerDocument === A || (P(c), s = !R); d = e[f++];)
                      if (d(c, a || A, s)) {
                        u.push(c);
                        break;
                      }
                    l && (V = w);
                  }
                  i && ((c = !d && c) && p--, r && m.push(c));
                }
                if (p += h, i && h !== p) {
                  for (f = 0; d = n[f++];)
                    d(m, v, a, s);
                  if (r) {
                    if (p > 0)
                      for (; h--;)
                        m[h] || v[h] || (v[h] = Q.call(u));
                    v = g(v);
                  }
                  Y.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                }
                return l && (V = w, I = y), m;
              };
            return i ? r(a) : a;
          }
          var b, w, E, T, x, _, S, C, I, O, N, P, A, D, R, k, j, M, L, F = 'sizzle' + 1 * new Date(), q = e.document, V = 0, H = 0, U = n(), B = n(), z = n(), W = function (e, t) {
              return e === t && (N = !0), 0;
            }, G = {}.hasOwnProperty, $ = [], Q = $.pop, X = $.push, Y = $.push, J = $.slice, K = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                  return n;
              return -1;
            }, Z = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ee = '[\\x20\\t\\r\\n\\f]', te = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+', ne = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]', re = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ne + ')*)|.*)\\)|)', ie = new RegExp(ee + '+', 'g'), oe = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'), ae = new RegExp('^' + ee + '*,' + ee + '*'), se = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'), ue = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'), le = new RegExp(re), ce = new RegExp('^' + te + '$'), fe = {
              ID: new RegExp('^#(' + te + ')'),
              CLASS: new RegExp('^\\.(' + te + ')'),
              TAG: new RegExp('^(' + te + '|[*])'),
              ATTR: new RegExp('^' + ne),
              PSEUDO: new RegExp('^' + re),
              CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
              bool: new RegExp('^(?:' + Z + ')$', 'i'),
              needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
            }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'), ye = function (e, t, n) {
              var r = '0x' + t - 65536;
              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
            }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
              return t ? '\0' === e ? '\uFFFD' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
            }, Ee = function () {
              P();
            }, Te = d(function (e) {
              return !0 === e.disabled && ('form' in e || 'label' in e);
            }, {
              dir: 'parentNode',
              next: 'legend'
            });
          try {
            Y.apply($ = J.call(q.childNodes), q.childNodes), $[q.childNodes.length].nodeType;
          } catch (e) {
            Y = {
              apply: $.length ? function (e, t) {
                X.apply(e, J.call(t));
              } : function (e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1;
              }
            };
          }
          w = t.support = {}, x = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && 'HTML' !== t.nodeName;
          }, P = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : q;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, D = A.documentElement, R = !x(A), q !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', Ee, !1) : n.attachEvent && n.attachEvent('onunload', Ee)), w.attributes = i(function (e) {
              return e.className = 'i', !e.getAttribute('className');
            }), w.getElementsByTagName = i(function (e) {
              return e.appendChild(A.createComment('')), !e.getElementsByTagName('*').length;
            }), w.getElementsByClassName = he.test(A.getElementsByClassName), w.getById = i(function (e) {
              return D.appendChild(e).id = F, !A.getElementsByName || !A.getElementsByName(F).length;
            }), w.getById ? (E.filter.ID = function (e) {
              var t = e.replace(ve, ye);
              return function (e) {
                return e.getAttribute('id') === t;
              };
            }, E.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && R) {
                var n = t.getElementById(e);
                return n ? [n] : [];
              }
            }) : (E.filter.ID = function (e) {
              var t = e.replace(ve, ye);
              return function (e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                return n && n.value === t;
              };
            }, E.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && R) {
                var n, r, i, o = t.getElementById(e);
                if (o) {
                  if ((n = o.getAttributeNode('id')) && n.value === e)
                    return [o];
                  for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                    if ((n = o.getAttributeNode('id')) && n.value === e)
                      return [o];
                }
                return [];
              }
            }), E.find.TAG = w.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
              var n, r = [], i = 0, o = t.getElementsByTagName(e);
              if ('*' === e) {
                for (; n = o[i++];)
                  1 === n.nodeType && r.push(n);
                return r;
              }
              return o;
            }, E.find.CLASS = w.getElementsByClassName && function (e, t) {
              if (void 0 !== t.getElementsByClassName && R)
                return t.getElementsByClassName(e);
            }, j = [], k = [], (w.qsa = he.test(A.querySelectorAll)) && (i(function (e) {
              D.appendChild(e).innerHTML = '<a id=\'' + F + '\'></a><select id=\'' + F + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && k.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || k.push('\\[' + ee + '*(?:value|' + Z + ')'), e.querySelectorAll('[id~=' + F + '-]').length || k.push('~='), e.querySelectorAll(':checked').length || k.push(':checked'), e.querySelectorAll('a#' + F + '+*').length || k.push('.#.+[+~]');
            }), i(function (e) {
              e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
              var t = A.createElement('input');
              t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && k.push('name' + ee + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && k.push(':enabled', ':disabled'), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && k.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), k.push(',.*:');
            })), (w.matchesSelector = he.test(M = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
              w.disconnectedMatch = M.call(e, '*'), M.call(e, '[s!=\'\']:x'), j.push('!=', re);
            }), k = k.length && new RegExp(k.join('|')), j = j.length && new RegExp(j.join('|')), t = he.test(D.compareDocumentPosition), L = t || he.test(D.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e)
                    return !0;
              return !1;
            }, W = t ? function (e, t) {
              if (e === t)
                return N = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === q && L(q, e) ? -1 : t === A || t.ownerDocument === q && L(q, t) ? 1 : O ? K(O, e) - K(O, t) : 0 : 4 & n ? -1 : 1);
            } : function (e, t) {
              if (e === t)
                return N = !0, 0;
              var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
              if (!i || !o)
                return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : O ? K(O, e) - K(O, t) : 0;
              if (i === o)
                return a(e, t);
              for (n = e; n = n.parentNode;)
                s.unshift(n);
              for (n = t; n = n.parentNode;)
                u.unshift(n);
              for (; s[r] === u[r];)
                r++;
              return r ? a(s[r], u[r]) : s[r] === q ? -1 : u[r] === q ? 1 : 0;
            }, A) : A;
          }, t.matches = function (e, n) {
            return t(e, null, null, n);
          }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && P(e), n = n.replace(ue, '=\'$1\']'), w.matchesSelector && R && !z[n + ' '] && (!j || !j.test(n)) && (!k || !k.test(n)))
              try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                  return r;
              } catch (e) {
              }
            return t(n, A, null, [e]).length > 0;
          }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && P(e), L(e, t);
          }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && P(e);
            var n = E.attrHandle[t.toLowerCase()], r = n && G.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
            return void 0 !== r ? r : w.attributes || !R ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
          }, t.escape = function (e) {
            return (e + '').replace(be, we);
          }, t.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (N = !w.detectDuplicates, O = !w.sortStable && e.slice(0), e.sort(W), N) {
              for (; t = e[i++];)
                t === e[i] && (r = n.push(i));
              for (; r--;)
                e.splice(n[r], 1);
            }
            return O = null, e;
          }, T = t.getText = function (e) {
            var t, n = '', r = 0, i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ('string' == typeof e.textContent)
                  return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                  n += T(e);
              } else if (3 === i || 4 === i)
                return e.nodeValue;
            } else
              for (; t = e[r++];)
                n += T(t);
            return n;
          }, E = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
              '>': {
                dir: 'parentNode',
                first: !0
              },
              ' ': { dir: 'parentNode' },
              '+': {
                dir: 'previousSibling',
                first: !0
              },
              '~': { dir: 'previousSibling' }
            },
            preFilter: {
              ATTR: function (e) {
                return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || '').replace(ve, ye), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
              },
              CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
              },
              PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && le.test(n) && (t = _(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(ve, ye).toLowerCase();
                return '*' === e ? function () {
                  return !0;
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
              },
              CLASS: function (e) {
                var t = U[e + ' '];
                return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && U(e, function (e) {
                  return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');
                });
              },
              ATTR: function (e, n, r) {
                return function (i) {
                  var o = t.attr(i, e);
                  return null == o ? '!=' === n : !n || (o += '', '=' === n ? o === r : '!=' === n ? o !== r : '^=' === n ? r && 0 === o.indexOf(r) : '*=' === n ? r && o.indexOf(r) > -1 : '$=' === n ? r && o.slice(-r.length) === r : '~=' === n ? (' ' + o.replace(ie, ' ') + ' ').indexOf(r) > -1 : '|=' === n && (o === r || o.slice(0, r.length + 1) === r + '-'));
                };
              },
              CHILD: function (e, t, n, r, i) {
                var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
                return 1 === r && 0 === i ? function (e) {
                  return !!e.parentNode;
                } : function (t, n, u) {
                  var l, c, f, d, p, h, g = o !== a ? 'nextSibling' : 'previousSibling', m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                  if (m) {
                    if (o) {
                      for (; g;) {
                        for (d = t; d = d[g];)
                          if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                            return !1;
                        h = g = 'only' === e && !h && 'nextSibling';
                      }
                      return !0;
                    }
                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                      for (d = m, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === V && l[1], b = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                        if (1 === d.nodeType && ++b && d === t) {
                          c[e] = [
                            V,
                            p,
                            b
                          ];
                          break;
                        }
                    } else if (y && (d = t, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === V && l[1], b = p), !1 === b)
                      for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [
                          V,
                          b
                        ]), d !== t)););
                    return (b -= i) === r || b % r == 0 && b / r >= 0;
                  }
                };
              },
              PSEUDO: function (e, n) {
                var i, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
                return o[F] ? o(n) : o.length > 1 ? (i = [
                  e,
                  e,
                  '',
                  n
                ], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                  for (var r, i = o(e, n), a = i.length; a--;)
                    r = K(e, i[a]), e[r] = !(t[r] = i[a]);
                }) : function (e) {
                  return o(e, 0, i);
                }) : o;
              }
            },
            pseudos: {
              not: r(function (e) {
                var t = [], n = [], i = S(e.replace(oe, '$1'));
                return i[F] ? r(function (e, t, n, r) {
                  for (var o, a = i(e, null, r, []), s = e.length; s--;)
                    (o = a[s]) && (e[s] = !(t[s] = o));
                }) : function (e, r, o) {
                  return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
                };
              }),
              has: r(function (e) {
                return function (n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: r(function (e) {
                return e = e.replace(ve, ye), function (t) {
                  return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                };
              }),
              lang: r(function (e) {
                return ce.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
                  var n;
                  do {
                    if (n = R ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                      return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                };
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === D;
              },
              focus: function (e) {
                return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: s(!1),
              disabled: s(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6)
                    return !1;
                return !0;
              },
              parent: function (e) {
                return !E.pseudos.empty(e);
              },
              header: function (e) {
                return pe.test(e.nodeName);
              },
              input: function (e) {
                return de.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return 'input' === t && 'button' === e.type || 'button' === t;
              },
              text: function (e) {
                var t;
                return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
              },
              first: u(function () {
                return [0];
              }),
              last: u(function (e, t) {
                return [t - 1];
              }),
              eq: u(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: u(function (e, t) {
                for (var n = 0; n < t; n += 2)
                  e.push(n);
                return e;
              }),
              odd: u(function (e, t) {
                for (var n = 1; n < t; n += 2)
                  e.push(n);
                return e;
              }),
              lt: u(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0;)
                  e.push(r);
                return e;
              }),
              gt: u(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;)
                  e.push(r);
                return e;
              })
            }
          }, E.pseudos.nth = E.pseudos.eq;
          for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            })
            E.pseudos[b] = function (e) {
              return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
              };
            }(b);
          for (b in {
              submit: !0,
              reset: !0
            })
            E.pseudos[b] = function (e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
              };
            }(b);
          return c.prototype = E.filters = E.pseudos, E.setFilters = new c(), _ = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = B[e + ' '];
            if (c)
              return n ? 0 : c.slice(0);
            for (s = e, u = [], l = E.preFilter; s;) {
              r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                value: r,
                type: i[0].replace(oe, ' ')
              }), s = s.slice(r.length));
              for (a in E.filter)
                !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                  value: r,
                  type: a,
                  matches: i
                }), s = s.slice(r.length));
              if (!r)
                break;
            }
            return n ? s.length : s ? t.error(e) : B(e, u).slice(0);
          }, S = t.compile = function (e, t) {
            var n, r = [], i = [], o = z[e + ' '];
            if (!o) {
              for (t || (t = _(e)), n = t.length; n--;)
                o = v(t[n]), o[F] ? r.push(o) : i.push(o);
              o = z(e, y(i, r)), o.selector = e;
            }
            return o;
          }, C = t.select = function (e, t, n, r) {
            var i, o, a, s, u, c = 'function' == typeof e && e, d = !r && _(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
              if (o = d[0] = d[0].slice(0), o.length > 2 && 'ID' === (a = o[0]).type && 9 === t.nodeType && R && E.relative[o[1].type]) {
                if (!(t = (E.find.ID(a.matches[0].replace(ve, ye), t) || [])[0]))
                  return n;
                c && (t = t.parentNode), e = e.slice(o.shift().value.length);
              }
              for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !E.relative[s = a.type]);)
                if ((u = E.find[s]) && (r = u(a.matches[0].replace(ve, ye), me.test(o[0].type) && l(t.parentNode) || t))) {
                  if (o.splice(i, 1), !(e = r.length && f(o)))
                    return Y.apply(n, r), n;
                  break;
                }
            }
            return (c || S(e, d))(r, t, !R, n, !t || me.test(e) && l(t.parentNode) || t), n;
          }, w.sortStable = F.split('').sort(W).join('') === F, w.detectDuplicates = !!N, P(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement('fieldset'));
          }), i(function (e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
          }) || o('type|href|height|width', function (e, t, n) {
            if (!n)
              return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
          }), w.attributes && i(function (e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
          }) || o('value', function (e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase())
              return e.defaultValue;
          }), i(function (e) {
            return null == e.getAttribute('disabled');
          }) || o(Z, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
          }), t;
        }(e);
        Ee.find = xe, Ee.expr = xe.selectors, Ee.expr[':'] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = xe.uniqueSort, Ee.text = xe.getText, Ee.isXMLDoc = xe.isXML, Ee.contains = xe.contains, Ee.escapeSelector = xe.escape;
        var _e = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
              if (1 === e.nodeType) {
                if (i && Ee(e).is(n))
                  break;
                r.push(e);
              }
            return r;
          }, Se = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          }, Ce = Ee.expr.match.needsContext, Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Ee.filter = function (e, t, n) {
          var r = t[0];
          return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? Ee.find.matchesSelector(r, e) ? [r] : [] : Ee.find.matches(e, Ee.grep(t, function (e) {
            return 1 === e.nodeType;
          }));
        }, Ee.fn.extend({
          find: function (e) {
            var t, n, r = this.length, i = this;
            if ('string' != typeof e)
              return this.pushStack(Ee(e).filter(function () {
                for (t = 0; t < r; t++)
                  if (Ee.contains(i[t], this))
                    return !0;
              }));
            for (n = this.pushStack([]), t = 0; t < r; t++)
              Ee.find(e, i[t], n);
            return r > 1 ? Ee.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(a(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(a(this, e || [], !0));
          },
          is: function (e) {
            return !!a(this, 'string' == typeof e && Ce.test(e) ? Ee(e) : e || [], !1).length;
          }
        });
        var Oe, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Ee.fn.init = function (e, t, n) {
          var r, i;
          if (!e)
            return this;
          if (n = n || Oe, 'string' == typeof e) {
            if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
                null,
                e,
                null
              ] : Ne.exec(e)) || !r[1] && t)
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
              if (t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Ie.test(r[1]) && Ee.isPlainObject(t))
                for (r in t)
                  ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return i = ae.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
          }
          return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(Ee) : Ee.makeArray(e, this);
        }).prototype = Ee.fn, Oe = Ee(ae);
        var Pe = /^(?:parents|prev(?:Until|All))/, Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };
        Ee.fn.extend({
          has: function (e) {
            var t = Ee(e, this), n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (Ee.contains(this, t[e]))
                  return !0;
            });
          },
          closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = 'string' != typeof e && Ee(e);
            if (!Ce.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? Ee.uniqueSort(o) : o);
          },
          index: function (e) {
            return e ? 'string' == typeof e ? fe.call(Ee(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
            return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))));
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          }
        }), Ee.each({
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return _e(e, 'parentNode');
          },
          parentsUntil: function (e, t, n) {
            return _e(e, 'parentNode', n);
          },
          next: function (e) {
            return s(e, 'nextSibling');
          },
          prev: function (e) {
            return s(e, 'previousSibling');
          },
          nextAll: function (e) {
            return _e(e, 'nextSibling');
          },
          prevAll: function (e) {
            return _e(e, 'previousSibling');
          },
          nextUntil: function (e, t, n) {
            return _e(e, 'nextSibling', n);
          },
          prevUntil: function (e, t, n) {
            return _e(e, 'previousSibling', n);
          },
          siblings: function (e) {
            return Se((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Se(e.firstChild);
          },
          contents: function (e) {
            return o(e, 'iframe') ? e.contentDocument : (o(e, 'template') && (e = e.content || e), Ee.merge([], e.childNodes));
          }
        }, function (e, t) {
          Ee.fn[e] = function (n, r) {
            var i = Ee.map(this, t, n);
            return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = Ee.filter(r, i)), this.length > 1 && (Ae[e] || Ee.uniqueSort(i), Pe.test(e) && i.reverse()), this.pushStack(i);
          };
        });
        var De = /[^\x20\t\r\n\f]+/g;
        Ee.Callbacks = function (e) {
          e = 'string' == typeof e ? u(e) : Ee.extend({}, e);
          var t, n, i, o, a = [], s = [], l = -1, c = function () {
              for (o = o || e.once, i = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length;)
                  !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
              e.memory || (n = !1), t = !1, o && (a = n ? [] : '');
            }, f = {
              add: function () {
                return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                  Ee.each(n, function (n, i) {
                    ye(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && 'string' !== r(i) && t(i);
                  });
                }(arguments), n && !t && c()), this;
              },
              remove: function () {
                return Ee.each(arguments, function (e, t) {
                  for (var n; (n = Ee.inArray(t, a, n)) > -1;)
                    a.splice(n, 1), n <= l && l--;
                }), this;
              },
              has: function (e) {
                return e ? Ee.inArray(e, a) > -1 : a.length > 0;
              },
              empty: function () {
                return a && (a = []), this;
              },
              disable: function () {
                return o = s = [], a = n = '', this;
              },
              disabled: function () {
                return !a;
              },
              lock: function () {
                return o = s = [], n || t || (a = n = ''), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return o || (n = n || [], n = [
                  e,
                  n.slice ? n.slice() : n
                ], s.push(n), t || c()), this;
              },
              fire: function () {
                return f.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!i;
              }
            };
          return f;
        }, Ee.extend({
          Deferred: function (t) {
            var n = [
                [
                  'notify',
                  'progress',
                  Ee.Callbacks('memory'),
                  Ee.Callbacks('memory'),
                  2
                ],
                [
                  'resolve',
                  'done',
                  Ee.Callbacks('once memory'),
                  Ee.Callbacks('once memory'),
                  0,
                  'resolved'
                ],
                [
                  'reject',
                  'fail',
                  Ee.Callbacks('once memory'),
                  Ee.Callbacks('once memory'),
                  1,
                  'rejected'
                ]
              ], r = 'pending', i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return Ee.Deferred(function (t) {
                    Ee.each(n, function (n, r) {
                      var i = ye(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + 'With'](this, i ? [e] : arguments);
                      });
                    }), e = null;
                  }).promise();
                },
                then: function (t, r, i) {
                  function o(t, n, r, i) {
                    return function () {
                      var s = this, u = arguments, f = function () {
                          var e, f;
                          if (!(t < a)) {
                            if ((e = r.apply(s, u)) === n.promise())
                              throw new TypeError('Thenable self-resolution');
                            f = e && ('object' == typeof e || 'function' == typeof e) && e.then, ye(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, c, i)) : (a++, f.call(e, o(a, n, l, i), o(a, n, c, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                          }
                        }, d = i ? f : function () {
                          try {
                            f();
                          } catch (e) {
                            Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== c && (s = void 0, u = [e]), n.rejectWith(s, u));
                          }
                        };
                      t ? d() : (Ee.Deferred.getStackHook && (d.stackTrace = Ee.Deferred.getStackHook()), e.setTimeout(d));
                    };
                  }
                  var a = 0;
                  return Ee.Deferred(function (e) {
                    n[0][3].add(o(0, e, ye(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, ye(t) ? t : l)), n[2][3].add(o(0, e, ye(r) ? r : c));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? Ee.extend(e, i) : i;
                }
              }, o = {};
            return Ee.each(n, function (e, t) {
              var a = t[2], s = t[5];
              i[t[1]] = a.add, s && a.add(function () {
                r = s;
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
              }, o[t[0] + 'With'] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
          },
          when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = ue.call(arguments), o = Ee.Deferred(), a = function (e) {
                return function (n) {
                  r[e] = this, i[e] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i);
                };
              };
            if (t <= 1 && (f(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || ye(i[n] && i[n].then)))
              return o.then();
            for (; n--;)
              f(i[n], a(n), o.reject);
            return o.promise();
          }
        });
        var Re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Ee.Deferred.exceptionHook = function (t, n) {
          e.console && e.console.warn && t && Re.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
        }, Ee.readyException = function (t) {
          e.setTimeout(function () {
            throw t;
          });
        };
        var ke = Ee.Deferred();
        Ee.fn.ready = function (e) {
          return ke.then(e).catch(function (e) {
            Ee.readyException(e);
          }), this;
        }, Ee.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, !0 !== e && --Ee.readyWait > 0 || ke.resolveWith(ae, [Ee]));
          }
        }), Ee.ready.then = ke.then, 'complete' === ae.readyState || 'loading' !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(Ee.ready) : (ae.addEventListener('DOMContentLoaded', d), e.addEventListener('load', d));
        var je = function (e, t, n, i, o, a, s) {
            var u = 0, l = e.length, c = null == n;
            if ('object' === r(n)) {
              o = !0;
              for (u in n)
                je(e, t, u, n[u], !0, a, s);
            } else if (void 0 !== i && (o = !0, ye(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(Ee(e), n);
              })), t))
              for (; u < l; u++)
                t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : a;
          }, Me = /^-ms-/, Le = /-([a-z])/g, Fe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
        g.uid = 1, g.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
            }))), t;
          },
          set: function (e, t, n) {
            var r, i = this.cache(e);
            if ('string' == typeof t)
              i[h(t)] = n;
            else
              for (r in t)
                i[h(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(De) || []), n = t.length;
                for (; n--;)
                  delete r[t[n]];
              }
              (void 0 === t || Ee.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Ee.isEmptyObject(t);
          }
        };
        var qe = new g(), Ve = new g(), He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ue = /[A-Z]/g;
        Ee.extend({
          hasData: function (e) {
            return Ve.hasData(e) || qe.hasData(e);
          },
          data: function (e, t, n) {
            return Ve.access(e, t, n);
          },
          removeData: function (e, t) {
            Ve.remove(e, t);
          },
          _data: function (e, t, n) {
            return qe.access(e, t, n);
          },
          _removeData: function (e, t) {
            qe.remove(e, t);
          }
        }), Ee.fn.extend({
          data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
              if (this.length && (i = Ve.get(o), 1 === o.nodeType && !qe.get(o, 'hasDataAttrs'))) {
                for (n = a.length; n--;)
                  a[n] && (r = a[n].name, 0 === r.indexOf('data-') && (r = h(r.slice(5)), v(o, r, i[r])));
                qe.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return 'object' == typeof e ? this.each(function () {
              Ve.set(this, e);
            }) : je(this, function (t) {
              var n;
              if (o && void 0 === t) {
                if (void 0 !== (n = Ve.get(o, e)))
                  return n;
                if (void 0 !== (n = v(o, e)))
                  return n;
              } else
                this.each(function () {
                  Ve.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
          },
          removeData: function (e) {
            return this.each(function () {
              Ve.remove(this, e);
            });
          }
        }), Ee.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return t = (t || 'fx') + 'queue', r = qe.get(e, t), n && (!r || Array.isArray(n) ? r = qe.access(e, t, Ee.makeArray(n)) : r.push(n)), r || [];
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = Ee.queue(e, t), r = n.length, i = n.shift(), o = Ee._queueHooks(e, t), a = function () {
                Ee.dequeue(e, t);
              };
            'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return qe.get(e, n) || qe.access(e, n, {
              empty: Ee.Callbacks('once memory').add(function () {
                qe.remove(e, [
                  t + 'queue',
                  n
                ]);
              })
            });
          }
        }), Ee.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? Ee.queue(this[0], e) : void 0 === t ? this : this.each(function () {
              var n = Ee.queue(this, e, t);
              Ee._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && Ee.dequeue(this, e);
            });
          },
          dequeue: function (e) {
            return this.each(function () {
              Ee.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var n, r = 1, i = Ee.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o]);
              };
            for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--;)
              (n = qe.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
          }
        });
        var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ze = new RegExp('^(?:([+-])=|)(' + Be + ')([a-z%]*)$', 'i'), We = [
            'Top',
            'Right',
            'Bottom',
            'Left'
          ], Ge = function (e, t) {
            return e = t || e, 'none' === e.style.display || '' === e.style.display && Ee.contains(e.ownerDocument, e) && 'none' === Ee.css(e, 'display');
          }, $e = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)
              a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
              e.style[o] = a[o];
            return i;
          }, Qe = {};
        Ee.fn.extend({
          show: function () {
            return w(this, !0);
          },
          hide: function () {
            return w(this);
          },
          toggle: function (e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              Ge(this) ? Ee(this).show() : Ee(this).hide();
            });
          }
        });
        var Xe = /^(?:checkbox|radio)$/i, Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Je = /^$|^module$|\/(?:java|ecma)script/i, Ke = {
            option: [
              1,
              '<select multiple=\'multiple\'>',
              '</select>'
            ],
            thead: [
              1,
              '<table>',
              '</table>'
            ],
            col: [
              2,
              '<table><colgroup>',
              '</colgroup></table>'
            ],
            tr: [
              2,
              '<table><tbody>',
              '</tbody></table>'
            ],
            td: [
              3,
              '<table><tbody><tr>',
              '</tr></tbody></table>'
            ],
            _default: [
              0,
              '',
              ''
            ]
          };
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
        var Ze = /<|&#?\w+;/;
        !function () {
          var e = ae.createDocumentFragment(), t = e.appendChild(ae.createElement('div')), n = ae.createElement('input');
          n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = '<textarea>x</textarea>', ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
        }();
        var et = ae.documentElement, tt = /^key/, nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rt = /^([^.]*)(?:\.(.+)|)/;
        Ee.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = qe.get(e);
            if (m)
              for (n.handler && (o = n, n = o.handler, i = o.selector), i && Ee.find.matchesSelector(et, i), n.guid || (n.guid = Ee.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                  return void 0 !== Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0;
                }), t = (t || '').match(De) || [''], l = t.length; l--;)
                s = rt.exec(t[l]) || [], p = g = s[1], h = (s[2] || '').split('.').sort(), p && (f = Ee.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Ee.event.special[p] || {}, c = Ee.extend({
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && Ee.expr.match.needsContext.test(i),
                  namespace: h.join('.')
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Ee.event.global[p] = !0);
          },
          remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = qe.hasData(e) && qe.get(e);
            if (m && (u = m.events)) {
              for (t = (t || '').match(De) || [''], l = t.length; l--;)
                if (s = rt.exec(t[l]) || [], p = g = s[1], h = (s[2] || '').split('.').sort(), p) {
                  for (f = Ee.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = d.length; o--;)
                    c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                  a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || Ee.removeEvent(e, p, m.handle), delete u[p]);
                } else
                  for (p in u)
                    Ee.event.remove(e, p + t[l], n, r, !0);
              Ee.isEmptyObject(u) && qe.remove(e, 'handle events');
            }
          },
          dispatch: function (e) {
            var t, n, r, i, o, a, s = Ee.event.fix(e), u = new Array(arguments.length), l = (qe.get(this, 'events') || {})[s.type] || [], c = Ee.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++)
              u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
              for (a = Ee.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();)
                for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                  s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((Ee.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
          },
          handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !('click' === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    r = t[n], i = r.selector + ' ', void 0 === a[i] && (a[i] = r.needsContext ? Ee(i, this).index(l) > -1 : Ee.find(i, this, null, [l]).length), a[i] && o.push(r);
                  o.length && s.push({
                    elem: l,
                    handlers: o
                  });
                }
            return l = this, u < t.length && s.push({
              elem: l,
              handlers: t.slice(u)
            }), s;
          },
          addProp: function (e, t) {
            Object.defineProperty(Ee.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: ye(t) ? function () {
                if (this.originalEvent)
                  return t(this.originalEvent);
              } : function () {
                if (this.originalEvent)
                  return this.originalEvent[e];
              },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                });
              }
            });
          },
          fix: function (e) {
            return e[Ee.expando] ? e : new Ee.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function () {
                if (this !== C() && this.focus)
                  return this.focus(), !1;
              },
              delegateType: 'focusin'
            },
            blur: {
              trigger: function () {
                if (this === C() && this.blur)
                  return this.blur(), !1;
              },
              delegateType: 'focusout'
            },
            click: {
              trigger: function () {
                if ('checkbox' === this.type && this.click && o(this, 'input'))
                  return this.click(), !1;
              },
              _default: function (e) {
                return o(e.target, 'a');
              }
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }, Ee.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }, Ee.Event = function (e, t) {
          if (!(this instanceof Ee.Event))
            return new Ee.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _ : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ee.expando] = !0;
        }, Ee.Event.prototype = {
          constructor: Ee.Event,
          isDefaultPrevented: S,
          isPropagationStopped: S,
          isImmediatePropagationStopped: S,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = _, e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = _, e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          }
        }, Ee.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
          }
        }, Ee.event.addProp), Ee.each({
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout'
        }, function (e, t) {
          Ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n, r = this, i = e.relatedTarget, o = e.handleObj;
              return i && (i === r || Ee.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
          };
        }), Ee.fn.extend({
          on: function (e, t, n, r) {
            return I(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return I(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return r = e.handleObj, Ee(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
            if ('object' == typeof e) {
              for (i in e)
                this.off(i, t, e[i]);
              return this;
            }
            return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function () {
              Ee.event.remove(this, e, n, t);
            });
          }
        });
        var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ot = /<script|<style|<link/i, at = /checked\s*(?:[^=]|=\s*.checked.)/i, st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Ee.extend({
          htmlPrefilter: function (e) {
            return e.replace(it, '<$1></$2>');
          },
          clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = Ee.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e)))
              for (a = E(s), o = E(e), r = 0, i = o.length; r < i; r++)
                D(o[r], a[r]);
            if (t)
              if (n)
                for (o = o || E(e), a = a || E(s), r = 0, i = o.length; r < i; r++)
                  A(o[r], a[r]);
              else
                A(e, s);
            return a = E(s, 'script'), a.length > 0 && T(a, !u && E(e, 'script')), s;
          },
          cleanData: function (e) {
            for (var t, n, r, i = Ee.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Fe(n)) {
                if (t = n[qe.expando]) {
                  if (t.events)
                    for (r in t.events)
                      i[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
                  n[qe.expando] = void 0;
                }
                n[Ve.expando] && (n[Ve.expando] = void 0);
              }
          }
        }), Ee.fn.extend({
          detach: function (e) {
            return k(this, e, !0);
          },
          remove: function (e) {
            return k(this, e);
          },
          text: function (e) {
            return je(this, function (e) {
              return void 0 === e ? Ee.text(this) : this.empty().each(function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
              });
            }, null, e, arguments.length);
          },
          append: function () {
            return R(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                O(this, e).appendChild(e);
              }
            });
          },
          prepend: function () {
            return R(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = O(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return R(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return R(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (Ee.cleanData(E(e, !1)), e.textContent = '');
            return this;
          },
          clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return Ee.clone(this, e, t);
            });
          },
          html: function (e) {
            return je(this, function (e) {
              var t = this[0] || {}, n = 0, r = this.length;
              if (void 0 === e && 1 === t.nodeType)
                return t.innerHTML;
              if ('string' == typeof e && !ot.test(e) && !Ke[(Ye.exec(e) || [
                  '',
                  ''
                ])[1].toLowerCase()]) {
                e = Ee.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    t = this[n] || {}, 1 === t.nodeType && (Ee.cleanData(E(t, !1)), t.innerHTML = e);
                  t = 0;
                } catch (e) {
                }
              }
              t && this.empty().append(e);
            }, null, e, arguments.length);
          },
          replaceWith: function () {
            var e = [];
            return R(this, arguments, function (t) {
              var n = this.parentNode;
              Ee.inArray(this, e) < 0 && (Ee.cleanData(E(this)), n && n.replaceChild(t, this));
            }, e);
          }
        }), Ee.each({
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith'
        }, function (e, t) {
          Ee.fn[e] = function (e) {
            for (var n, r = [], i = Ee(e), o = i.length - 1, a = 0; a <= o; a++)
              n = a === o ? this : this.clone(!0), Ee(i[a])[t](n), ce.apply(r, n.get());
            return this.pushStack(r);
          };
        });
        var ut = new RegExp('^(' + Be + ')(?!px)[a-z%]+$', 'i'), lt = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t);
          }, ct = new RegExp(We.join('|'), 'i');
        !function () {
          function t() {
            if (l) {
              u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', et.appendChild(u).appendChild(l);
              var t = e.getComputedStyle(l);
              r = '1%' !== t.top, s = 12 === n(t.marginLeft), l.style.right = '60%', a = 36 === n(t.right), i = 36 === n(t.width), l.style.position = 'absolute', o = 36 === l.offsetWidth || 'absolute', et.removeChild(u), l = null;
            }
          }
          function n(e) {
            return Math.round(parseFloat(e));
          }
          var r, i, o, a, s, u = ae.createElement('div'), l = ae.createElement('div');
          l.style && (l.style.backgroundClip = 'content-box', l.cloneNode(!0).style.backgroundClip = '', ve.clearCloneStyle = 'content-box' === l.style.backgroundClip, Ee.extend(ve, {
            boxSizingReliable: function () {
              return t(), i;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), r;
            },
            reliableMarginLeft: function () {
              return t(), s;
            },
            scrollboxSize: function () {
              return t(), o;
            }
          }));
        }();
        var ft = /^(none|table(?!-c[ea]).+)/, dt = /^--/, pt = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
          }, ht = {
            letterSpacing: '0',
            fontWeight: '400'
          }, gt = [
            'Webkit',
            'Moz',
            'ms'
          ], mt = ae.createElement('div').style;
        Ee.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = j(e, 'opacity');
                  return '' === n ? '1' : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, a, s = h(t), u = dt.test(t), l = e.style;
              if (u || (t = F(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], void 0 === n)
                return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              o = typeof n, 'string' === o && (i = ze.exec(n)) && i[1] && (n = y(e, t, i), o = 'number'), null != n && n === n && ('number' === o && (n += i && i[3] || (Ee.cssNumber[s] ? '' : 'px')), ve.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
          },
          css: function (e, t, n, r) {
            var i, o, a, s = h(t);
            return dt.test(t) || (t = F(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], a && 'get' in a && (i = a.get(e, !0, n)), void 0 === i && (i = j(e, t, r)), 'normal' === i && t in ht && (i = ht[t]), '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
          }
        }), Ee.each([
          'height',
          'width'
        ], function (e, t) {
          Ee.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !ft.test(Ee.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, r) : $e(e, pt, function () {
                  return H(e, t, r);
                });
            },
            set: function (e, n, r) {
              var i, o = lt(e), a = 'border-box' === Ee.css(e, 'boxSizing', !1, o), s = r && V(e, t, r, a, o);
              return a && ve.scrollboxSize() === o.position && (s -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - V(e, t, 'border', !1, o) - 0.5)), s && (i = ze.exec(n)) && 'px' !== (i[3] || 'px') && (e.style[t] = n, n = Ee.css(e, t)), q(e, n, s);
            }
          };
        }), Ee.cssHooks.marginLeft = M(ve.reliableMarginLeft, function (e, t) {
          if (t)
            return (parseFloat(j(e, 'marginLeft')) || e.getBoundingClientRect().left - $e(e, { marginLeft: 0 }, function () {
              return e.getBoundingClientRect().left;
            })) + 'px';
        }), Ee.each({
          margin: '',
          padding: '',
          border: 'Width'
        }, function (e, t) {
          Ee.cssHooks[e + t] = {
            expand: function (n) {
              for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            }
          }, 'margin' !== e && (Ee.cssHooks[e + t].set = q);
        }), Ee.fn.extend({
          css: function (e, t) {
            return je(this, function (e, t, n) {
              var r, i, o = {}, a = 0;
              if (Array.isArray(t)) {
                for (r = lt(e), i = t.length; a < i; a++)
                  o[t[a]] = Ee.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t);
            }, e, t, arguments.length > 1);
          }
        }), Ee.Tween = U, U.prototype = {
          constructor: U,
          init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ee.cssNumber[n] ? '' : 'px');
          },
          cur: function () {
            var e = U.propHooks[this.prop];
            return e && e.get ? e.get(this) : U.propHooks._default.get(this);
          },
          run: function (e) {
            var t, n = U.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this;
          }
        }, U.prototype.init.prototype = U.prototype, U.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0);
            },
            set: function (e) {
              Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ee.cssProps[e.prop]] && !Ee.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }, Ee.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing'
        }, Ee.fx = U.prototype.init, Ee.fx.step = {};
        var vt, yt, bt = /^(?:toggle|show|hide)$/, wt = /queueHooks$/;
        Ee.Animation = Ee.extend(X, {
          tweeners: {
            '*': [function (e, t) {
                var n = this.createTween(e, t);
                return y(n.elem, e, ze.exec(t), n), n;
              }]
          },
          tweener: function (e, t) {
            ye(e) ? (t = e, e = ['*']) : e = e.match(De);
            for (var n, r = 0, i = e.length; r < i; r++)
              n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t);
          },
          prefilters: [$],
          prefilter: function (e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e);
          }
        }), Ee.speed = function (e, t, n) {
          var r = e && 'object' == typeof e ? Ee.extend({}, e) : {
            complete: n || !n && t || ye(e) && e,
            duration: e,
            easing: n && t || t && !ye(t) && t
          };
          return Ee.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in Ee.fx.speeds ? r.duration = Ee.fx.speeds[r.duration] : r.duration = Ee.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
            ye(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue);
          }, r;
        }, Ee.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(Ge).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = Ee.isEmptyObject(e), o = Ee.speed(t, n, r), a = function () {
                var t = X(this, Ee.extend({}, e), o);
                (i || qe.get(this, 'finish')) && t.stop(!0);
              };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
              var t = !0, i = null != e && e + 'queueHooks', o = Ee.timers, a = qe.get(this);
              if (i)
                a[i] && a[i].stop && r(a[i]);
              else
                for (i in a)
                  a[i] && a[i].stop && wt.test(i) && r(a[i]);
              for (i = o.length; i--;)
                o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
              !t && n || Ee.dequeue(this, e);
            });
          },
          finish: function (e) {
            return !1 !== e && (e = e || 'fx'), this.each(function () {
              var t, n = qe.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = Ee.timers, a = r ? r.length : 0;
              for (n.finish = !0, Ee.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            });
          }
        }), Ee.each([
          'toggle',
          'show',
          'hide'
        ], function (e, t) {
          var n = Ee.fn[t];
          Ee.fn[t] = function (e, r, i) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i);
          };
        }), Ee.each({
          slideDown: W('show'),
          slideUp: W('hide'),
          slideToggle: W('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' }
        }, function (e, t) {
          Ee.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }), Ee.timers = [], Ee.fx.tick = function () {
          var e, t = 0, n = Ee.timers;
          for (vt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || Ee.fx.stop(), vt = void 0;
        }, Ee.fx.timer = function (e) {
          Ee.timers.push(e), Ee.fx.start();
        }, Ee.fx.interval = 13, Ee.fx.start = function () {
          yt || (yt = !0, B());
        }, Ee.fx.stop = function () {
          yt = null;
        }, Ee.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, Ee.fn.delay = function (t, n) {
          return t = Ee.fx ? Ee.fx.speeds[t] || t : t, n = n || 'fx', this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
              e.clearTimeout(i);
            };
          });
        }, function () {
          var e = ae.createElement('input'), t = ae.createElement('select'), n = t.appendChild(ae.createElement('option'));
          e.type = 'checkbox', ve.checkOn = '' !== e.value, ve.optSelected = n.selected, e = ae.createElement('input'), e.value = 't', e.type = 'radio', ve.radioValue = 't' === e.value;
        }();
        var Et, Tt = Ee.expr.attrHandle;
        Ee.fn.extend({
          attr: function (e, t) {
            return je(this, Ee.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              Ee.removeAttr(this, e);
            });
          }
        }), Ee.extend({
          attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute ? Ee.prop(e, t, n) : (1 === o && Ee.isXMLDoc(e) || (i = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void Ee.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : (r = Ee.find.attr(e, t), null == r ? void 0 : r));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!ve.radioValue && 'radio' === t && o(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(De);
            if (i && 1 === e.nodeType)
              for (; n = i[r++];)
                e.removeAttribute(n);
          }
        }), Et = {
          set: function (e, t, n) {
            return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = Tt[t] || Ee.find.attr;
          Tt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = Tt[a], Tt[a] = i, i = null != n(e, t, r) ? a : null, Tt[a] = o), i;
          };
        });
        var xt = /^(?:input|select|textarea|button)$/i, _t = /^(?:a|area)$/i;
        Ee.fn.extend({
          prop: function (e, t) {
            return je(this, Ee.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[Ee.propFix[e] || e];
            });
          }
        }), Ee.extend({
          prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return 1 === o && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, i = Ee.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = Ee.find.attr(e, 'tabindex');
                return t ? parseInt(t, 10) : xt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1;
              }
            }
          },
          propFix: {
            for: 'htmlFor',
            class: 'className'
          }
        }), ve.optSelected || (Ee.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          }
        }), Ee.each([
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable'
        ], function () {
          Ee.propFix[this.toLowerCase()] = this;
        }), Ee.fn.extend({
          addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ye(e))
              return this.each(function (t) {
                Ee(this).addClass(e.call(this, t, J(this)));
              });
            if (t = K(e), t.length)
              for (; n = this[u++];)
                if (i = J(n), r = 1 === n.nodeType && ' ' + Y(i) + ' ') {
                  for (a = 0; o = t[a++];)
                    r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                  s = Y(r), i !== s && n.setAttribute('class', s);
                }
            return this;
          },
          removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ye(e))
              return this.each(function (t) {
                Ee(this).removeClass(e.call(this, t, J(this)));
              });
            if (!arguments.length)
              return this.attr('class', '');
            if (t = K(e), t.length)
              for (; n = this[u++];)
                if (i = J(n), r = 1 === n.nodeType && ' ' + Y(i) + ' ') {
                  for (a = 0; o = t[a++];)
                    for (; r.indexOf(' ' + o + ' ') > -1;)
                      r = r.replace(' ' + o + ' ', ' ');
                  s = Y(r), i !== s && n.setAttribute('class', s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e, r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function (n) {
              Ee(this).toggleClass(e.call(this, n, J(this), t), t);
            }) : this.each(function () {
              var t, i, o, a;
              if (r)
                for (i = 0, o = Ee(this), a = K(e); t = a[i++];)
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                void 0 !== e && 'boolean' !== n || (t = J(this), t && qe.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : qe.get(this, '__className__') || ''));
            });
          },
          hasClass: function (e) {
            var t, n, r = 0;
            for (t = ' ' + e + ' '; n = this[r++];)
              if (1 === n.nodeType && (' ' + Y(J(n)) + ' ').indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
        var St = /\r/g;
        Ee.fn.extend({
          val: function (e) {
            var t, n, r, i = this[0];
            {
              if (arguments.length)
                return r = ye(e), this.each(function (n) {
                  var i;
                  1 === this.nodeType && (i = r ? e.call(this, n, Ee(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : Array.isArray(i) && (i = Ee.map(i, function (e) {
                    return null == e ? '' : e + '';
                  })), (t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, i, 'value') || (this.value = i));
                });
              if (i)
                return (t = Ee.valHooks[i.type] || Ee.valHooks[i.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : (n = i.value, 'string' == typeof n ? n.replace(St, '') : null == n ? '' : n);
            }
          }
        }), Ee.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = Ee.find.attr(e, 'value');
                return null != t ? t : Y(Ee.text(e));
              }
            },
            select: {
              get: function (e) {
                var t, n, r, i = e.options, a = e.selectedIndex, s = 'select-one' === e.type, u = s ? null : [], l = s ? a + 1 : i.length;
                for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                  if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, 'optgroup'))) {
                    if (t = Ee(n).val(), s)
                      return t;
                    u.push(t);
                  }
                return u;
              },
              set: function (e, t) {
                for (var n, r, i = e.options, o = Ee.makeArray(t), a = i.length; a--;)
                  r = i[a], (r.selected = Ee.inArray(Ee.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }), Ee.each([
          'radio',
          'checkbox'
        ], function () {
          Ee.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return e.checked = Ee.inArray(Ee(e).val(), t) > -1;
            }
          }, ve.checkOn || (Ee.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
        }), ve.focusin = 'onfocusin' in e;
        var Ct = /^(?:focusinfocus|focusoutblur)$/, It = function (e) {
            e.stopPropagation();
          };
        Ee.extend(Ee.event, {
          trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, f, d, p = [r || ae], h = he.call(t, 'type') ? t.type : t, g = he.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (a = d = s = r = r || ae, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(h + Ee.event.triggered) && (h.indexOf('.') > -1 && (g = h.split('.'), h = g.shift(), g.sort()), l = h.indexOf(':') < 0 && 'on' + h, t = t[Ee.expando] ? t : new Ee.Event(h, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Ee.makeArray(n, [t]), f = Ee.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
              if (!i && !f.noBubble && !be(r)) {
                for (u = f.delegateType || h, Ct.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                  p.push(a), s = a;
                s === (r.ownerDocument || ae) && p.push(s.defaultView || s.parentWindow || e);
              }
              for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)
                d = a, t.type = o > 1 ? u : f.bindType || h, c = (qe.get(a, 'events') || {})[t.type] && qe.get(a, 'handle'), c && c.apply(a, n), (c = l && a[l]) && c.apply && Fe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
              return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Fe(r) || l && ye(r[h]) && !be(r) && (s = r[l], s && (r[l] = null), Ee.event.triggered = h, t.isPropagationStopped() && d.addEventListener(h, It), r[h](), t.isPropagationStopped() && d.removeEventListener(h, It), Ee.event.triggered = void 0, s && (r[l] = s)), t.result;
            }
          },
          simulate: function (e, t, n) {
            var r = Ee.extend(new Ee.Event(), n, {
              type: e,
              isSimulated: !0
            });
            Ee.event.trigger(r, null, t);
          }
        }), Ee.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              Ee.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n)
              return Ee.event.trigger(e, t, n, !0);
          }
        }), ve.focusin || Ee.each({
          focus: 'focusin',
          blur: 'focusout'
        }, function (e, t) {
          var n = function (e) {
            Ee.event.simulate(t, e.target, Ee.event.fix(e));
          };
          Ee.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this, i = qe.access(r, t);
              i || r.addEventListener(e, n, !0), qe.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this, i = qe.access(r, t) - 1;
              i ? qe.access(r, t, i) : (r.removeEventListener(e, n, !0), qe.remove(r, t));
            }
          };
        });
        var Ot = e.location, Nt = Date.now(), Pt = /\?/;
        Ee.parseXML = function (t) {
          var n;
          if (!t || 'string' != typeof t)
            return null;
          try {
            n = new e.DOMParser().parseFromString(t, 'text/xml');
          } catch (e) {
            n = void 0;
          }
          return n && !n.getElementsByTagName('parsererror').length || Ee.error('Invalid XML: ' + t), n;
        };
        var At = /\[\]$/, Dt = /\r?\n/g, Rt = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
        Ee.param = function (e, t) {
          var n, r = [], i = function (e, t) {
              var n = ye(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
            };
          if (Array.isArray(e) || e.jquery && !Ee.isPlainObject(e))
            Ee.each(e, function () {
              i(this.name, this.value);
            });
          else
            for (n in e)
              Z(n, e[n], t, i);
          return r.join('&');
        }, Ee.fn.extend({
          serialize: function () {
            return Ee.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = Ee.prop(this, 'elements');
              return e ? Ee.makeArray(e) : this;
            }).filter(function () {
              var e = this.type;
              return this.name && !Ee(this).is(':disabled') && kt.test(this.nodeName) && !Rt.test(e) && (this.checked || !Xe.test(e));
            }).map(function (e, t) {
              var n = Ee(this).val();
              return null == n ? null : Array.isArray(n) ? Ee.map(n, function (e) {
                return {
                  name: t.name,
                  value: e.replace(Dt, '\r\n')
                };
              }) : {
                name: t.name,
                value: n.replace(Dt, '\r\n')
              };
            }).get();
          }
        });
        var jt = /%20/g, Mt = /#.*$/, Lt = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm, qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Vt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ut = {}, Bt = {}, zt = '*/'.concat('*'), Wt = ae.createElement('a');
        Wt.href = Ot.href, Ee.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ot.href,
            type: 'GET',
            isLocal: qt.test(Ot.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': zt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript'
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON'
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': Ee.parseXML
            },
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          ajaxSetup: function (e, t) {
            return t ? ne(ne(e, Ee.ajaxSettings), t) : ne(Ee.ajaxSettings, e);
          },
          ajaxPrefilter: ee(Ut),
          ajaxTransport: ee(Bt),
          ajax: function (t, n) {
            function r(t, n, r, s) {
              var l, d, p, w, E, T = n;
              c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || '', x.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (w = re(h, x, r)), w = ie(h, w, x, l), l ? (h.ifModified && (E = x.getResponseHeader('Last-Modified'), E && (Ee.lastModified[o] = E), (E = x.getResponseHeader('etag')) && (Ee.etag[o] = E)), 204 === t || 'HEAD' === h.type ? T = 'nocontent' : 304 === t ? T = 'notmodified' : (T = w.state, d = w.data, p = w.error, l = !p)) : (p = T, !t && T || (T = 'error', t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + '', l ? v.resolveWith(g, [
                d,
                T,
                x
              ]) : v.rejectWith(g, [
                x,
                T,
                p
              ]), x.statusCode(b), b = void 0, f && m.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
                x,
                h,
                l ? d : p
              ]), y.fireWith(g, [
                x,
                T
              ]), f && (m.trigger('ajaxComplete', [
                x,
                h
              ]), --Ee.active || Ee.event.trigger('ajaxStop')));
            }
            'object' == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, d, p, h = Ee.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? Ee(g) : Ee.event, v = Ee.Deferred(), y = Ee.Callbacks('once memory'), b = h.statusCode || {}, w = {}, E = {}, T = 'canceled', x = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; t = Ft.exec(a);)
                        s[t[1].toLowerCase()] = t[2];
                    t = s[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function () {
                  return c ? a : null;
                },
                setRequestHeader: function (e, t) {
                  return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this;
                },
                overrideMimeType: function (e) {
                  return null == c && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c)
                      x.always(e[x.status]);
                    else
                      for (t in e)
                        b[t] = [
                          b[t],
                          e[t]
                        ];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return i && i.abort(t), r(0, t), this;
                }
              };
            if (v.promise(x), h.url = ((t || h.url || Ot.href) + '').replace(Ht, Ot.protocol + '//'), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || '*').toLowerCase().match(De) || [''], null == h.crossDomain) {
              l = ae.createElement('a');
              try {
                l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + '//' + Wt.host != l.protocol + '//' + l.host;
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (h.data && h.processData && 'string' != typeof h.data && (h.data = Ee.param(h.data, h.traditional)), te(Ut, h, n, x), c)
              return x;
            f = Ee.event && h.global, f && 0 == Ee.active++ && Ee.event.trigger('ajaxStart'), h.type = h.type.toUpperCase(), h.hasContent = !Vt.test(h.type), o = h.url.replace(Mt, ''), h.hasContent ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(jt, '+')) : (p = h.url.slice(o.length), h.data && (h.processData || 'string' == typeof h.data) && (o += (Pt.test(o) ? '&' : '?') + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, '$1'), p = (Pt.test(o) ? '&' : '?') + '_=' + Nt++ + p), h.url = o + p), h.ifModified && (Ee.lastModified[o] && x.setRequestHeader('If-Modified-Since', Ee.lastModified[o]), Ee.etag[o] && x.setRequestHeader('If-None-Match', Ee.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader('Content-Type', h.contentType), x.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + zt + '; q=0.01' : '') : h.accepts['*']);
            for (d in h.headers)
              x.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || c))
              return x.abort();
            if (T = 'abort', y.add(h.complete), x.done(h.success), x.fail(h.error), i = te(Bt, h, n, x)) {
              if (x.readyState = 1, f && m.trigger('ajaxSend', [
                  x,
                  h
                ]), c)
                return x;
              h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                x.abort('timeout');
              }, h.timeout));
              try {
                c = !1, i.send(w, r);
              } catch (e) {
                if (c)
                  throw e;
                r(-1, e);
              }
            } else
              r(-1, 'No Transport');
            return x;
          },
          getJSON: function (e, t, n) {
            return Ee.get(e, t, n, 'json');
          },
          getScript: function (e, t) {
            return Ee.get(e, void 0, t, 'script');
          }
        }), Ee.each([
          'get',
          'post'
        ], function (e, t) {
          Ee[t] = function (e, n, r, i) {
            return ye(n) && (i = i || r, r = n, n = void 0), Ee.ajax(Ee.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
            }, Ee.isPlainObject(e) && e));
          };
        }), Ee._evalUrl = function (e) {
          return Ee.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }, Ee.fn.extend({
          wrapAll: function (e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;)
                e = e.firstElementChild;
              return e;
            }).append(this)), this;
          },
          wrapInner: function (e) {
            return ye(e) ? this.each(function (t) {
              Ee(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
              var t = Ee(this), n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
          },
          wrap: function (e) {
            var t = ye(e);
            return this.each(function (n) {
              Ee(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return this.parent(e).not('body').each(function () {
              Ee(this).replaceWith(this.childNodes);
            }), this;
          }
        }), Ee.expr.pseudos.hidden = function (e) {
          return !Ee.expr.pseudos.visible(e);
        }, Ee.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }, Ee.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (e) {
          }
        };
        var Gt = {
            0: 200,
            1223: 204
          }, $t = Ee.ajaxSettings.xhr();
        ve.cors = !!$t && 'withCredentials' in $t, ve.ajax = $t = !!$t, Ee.ajaxTransport(function (t) {
          var n, r;
          if (ve.cors || $t && !t.crossDomain)
            return {
              send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  for (a in t.xhrFields)
                    s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
                for (a in i)
                  s.setRequestHeader(a, i[a]);
                n = function (e) {
                  return function () {
                    n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? o(0, 'error') : o(s.status, s.statusText) : o(Gt[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                  };
                }, s.onload = n(), r = s.onerror = s.ontimeout = n('error'), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                  4 === s.readyState && e.setTimeout(function () {
                    n && r();
                  });
                }, n = n('abort');
                try {
                  s.send(t.hasContent && t.data || null);
                } catch (e) {
                  if (n)
                    throw e;
                }
              },
              abort: function () {
                n && n();
              }
            };
        }), Ee.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }), Ee.ajaxSetup({
          accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return Ee.globalEval(e), e;
            }
          }
        }), Ee.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }), Ee.ajaxTransport('script', function (e) {
          if (e.crossDomain) {
            var t, n;
            return {
              send: function (r, i) {
                t = Ee('<script>').prop({
                  charset: e.scriptCharset,
                  src: e.url
                }).on('load error', n = function (e) {
                  t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
                }), ae.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              }
            };
          }
        });
        var Qt = [], Xt = /(=)\?(?=&|$)|\?\?/;
        Ee.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function () {
            var e = Qt.pop() || Ee.expando + '_' + Nt++;
            return this[e] = !0, e;
          }
        }), Ee.ajaxPrefilter('json jsonp', function (t, n, r) {
          var i, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Xt.test(t.data) && 'data');
          if (s || 'jsonp' === t.dataTypes[0])
            return i = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, '$1' + i) : !1 !== t.jsonp && (t.url += (Pt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
              return a || Ee.error(i + ' was not called'), a[0];
            }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
              a = arguments;
            }, r.always(function () {
              void 0 === o ? Ee(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Qt.push(i)), a && ye(o) && o(a[0]), a = o = void 0;
            }), 'script';
        }), ve.createHTMLDocument = function () {
          var e = ae.implementation.createHTMLDocument('').body;
          return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length;
        }(), Ee.parseHTML = function (e, t, n) {
          if ('string' != typeof e)
            return [];
          'boolean' == typeof t && (n = t, t = !1);
          var r, i, o;
          return t || (ve.createHTMLDocument ? (t = ae.implementation.createHTMLDocument(''), r = t.createElement('base'), r.href = ae.location.href, t.head.appendChild(r)) : t = ae), i = Ie.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && Ee(o).remove(), Ee.merge([], i.childNodes));
        }, Ee.fn.load = function (e, t, n) {
          var r, i, o, a = this, s = e.indexOf(' ');
          return s > -1 && (r = Y(e.slice(s)), e = e.slice(0, s)), ye(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), a.length > 0 && Ee.ajax({
            url: e,
            type: i || 'GET',
            dataType: 'html',
            data: t
          }).done(function (e) {
            o = arguments, a.html(r ? Ee('<div>').append(Ee.parseHTML(e)).find(r) : e);
          }).always(n && function (e, t) {
            a.each(function () {
              n.apply(this, o || [
                e.responseText,
                t,
                e
              ]);
            });
          }), this;
        }, Ee.each([
          'ajaxStart',
          'ajaxStop',
          'ajaxComplete',
          'ajaxError',
          'ajaxSuccess',
          'ajaxSend'
        ], function (e, t) {
          Ee.fn[t] = function (e) {
            return this.on(t, e);
          };
        }), Ee.expr.pseudos.animated = function (e) {
          return Ee.grep(Ee.timers, function (t) {
            return e === t.elem;
          }).length;
        }, Ee.offset = {
          setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = Ee.css(e, 'position'), f = Ee(e), d = {};
            'static' === c && (e.style.position = 'relative'), s = f.offset(), o = Ee.css(e, 'top'), u = Ee.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ye(t) && (t = t.call(e, n, Ee.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), 'using' in t ? t.using.call(e, d) : f.css(d);
          }
        }, Ee.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e ? this : this.each(function (t) {
                Ee.offset.setOffset(this, e, t);
              });
            var t, n, r = this[0];
            if (r)
              return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
              }) : {
                top: 0,
                left: 0
              };
          },
          position: function () {
            if (this[0]) {
              var e, t, n, r = this[0], i = {
                  top: 0,
                  left: 0
                };
              if ('fixed' === Ee.css(r, 'position'))
                t = r.getBoundingClientRect();
              else {
                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && 'static' === Ee.css(e, 'position');)
                  e = e.parentNode;
                e && e !== r && 1 === e.nodeType && (i = Ee(e).offset(), i.top += Ee.css(e, 'borderTopWidth', !0), i.left += Ee.css(e, 'borderLeftWidth', !0));
              }
              return {
                top: t.top - i.top - Ee.css(r, 'marginTop', !0),
                left: t.left - i.left - Ee.css(r, 'marginLeft', !0)
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && 'static' === Ee.css(e, 'position');)
                e = e.offsetParent;
              return e || et;
            });
          }
        }), Ee.each({
          scrollLeft: 'pageXOffset',
          scrollTop: 'pageYOffset'
        }, function (e, t) {
          var n = 'pageYOffset' === t;
          Ee.fn[e] = function (r) {
            return je(this, function (e, r, i) {
              var o;
              if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i)
                return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
          };
        }), Ee.each([
          'top',
          'left'
        ], function (e, t) {
          Ee.cssHooks[t] = M(ve.pixelPosition, function (e, n) {
            if (n)
              return n = j(e, t), ut.test(n) ? Ee(e).position()[t] + 'px' : n;
          });
        }), Ee.each({
          Height: 'height',
          Width: 'width'
        }, function (e, t) {
          Ee.each({
            padding: 'inner' + e,
            content: t,
            '': 'outer' + e
          }, function (n, r) {
            Ee.fn[r] = function (i, o) {
              var a = arguments.length && (n || 'boolean' != typeof i), s = n || (!0 === i || !0 === o ? 'margin' : 'border');
              return je(this, function (t, n, i) {
                var o;
                return be(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e])) : void 0 === i ? Ee.css(t, n, s) : Ee.style(t, n, i, s);
              }, t, a ? i : void 0, a);
            };
          });
        }), Ee.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
          Ee.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
          };
        }), Ee.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }), Ee.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
          }
        }), Ee.proxy = function (e, t) {
          var n, r, i;
          if ('string' == typeof t && (n = e[t], t = e, e = n), ye(e))
            return r = ue.call(arguments, 2), i = function () {
              return e.apply(t || this, r.concat(ue.call(arguments)));
            }, i.guid = e.guid = e.guid || Ee.guid++, i;
        }, Ee.holdReady = function (e) {
          e ? Ee.readyWait++ : Ee.ready(!0);
        }, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = o, Ee.isFunction = ye, Ee.isWindow = be, Ee.camelCase = h, Ee.type = r, Ee.now = Date.now, Ee.isNumeric = function (e) {
          var t = Ee.type(e);
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        };
        var Yt = e.jQuery, Jt = e.$;
        return Ee.noConflict = function (t) {
          return e.$ === Ee && (e.$ = Jt), t && e.jQuery === Ee && (e.jQuery = Yt), Ee;
        }, t || (e.jQuery = e.$ = Ee), Ee;
      });
    }), it = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, ot = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }, at = function (e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }, st = function (e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }, ut = function () {
      function e(e, t) {
        var n = [], r = !0, i = !1, o = void 0;
        try {
          for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            !r && s.return && s.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return n;
      }
      return function (t, n) {
        if (Array.isArray(t))
          return t;
        if (Symbol.iterator in Object(t))
          return e(t, n);
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      };
    }(), lt = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
          n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }, ct = function (e) {
      function t(e, n) {
        ot(this, t);
        var r = st(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        return r.node = e, r;
      }
      return at(t, e), t;
    }(Error), ft = function (e) {
      function t(e, n, r) {
        ot(this, t);
        var i = st(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        return i.targetIndex = e, i.maxIndex = n, i;
      }
      return at(t, e), t;
    }(Error), dt = function (e) {
      function t(e, n, r) {
        ot(this, t);
        var i = st(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        return i.terminusType = e, i.terminusCondition = n, i;
      }
      return at(t, e), t;
    }(Error), pt = function (e) {
      function t(e, n, r) {
        ot(this, t);
        var i = st(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        return i.expectedAssertion = e, i.targetElementAssertion = n, i;
      }
      return at(t, e), t;
    }(Error), ht = 'object' == typeof global && global && global.Object === Object && global, gt = 'object' == typeof self && self && self.Object === Object && self, mt = ht || gt || Function('return this')(), vt = mt.Symbol, yt = Object.prototype, bt = yt.hasOwnProperty, wt = yt.toString, Et = vt ? vt.toStringTag : void 0, Tt = Object.prototype, xt = Tt.toString, _t = '[object Null]', St = '[object Undefined]', Ct = vt ? vt.toStringTag : void 0, It = '[object AsyncFunction]', Ot = '[object Function]', Nt = '[object GeneratorFunction]', Pt = '[object Proxy]', At = mt['__core-js_shared__'], Dt = function () {
      var e = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || '');
      return e ? 'Symbol(src)_1.' + e : '';
    }(), Rt = Function.prototype, kt = Rt.toString, jt = /[\\^$.*+?()[\]{}|]/g, Mt = /^\[object .+?Constructor\]$/, Lt = Function.prototype, Ft = Object.prototype, qt = Lt.toString, Vt = Ft.hasOwnProperty, Ht = RegExp('^' + qt.call(Vt).replace(jt, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'), Ut = f(Object, 'create'), Bt = '__lodash_hash_undefined__', zt = Object.prototype, Wt = zt.hasOwnProperty, Gt = Object.prototype, $t = Gt.hasOwnProperty, Qt = '__lodash_hash_undefined__';
  v.prototype.clear = d, v.prototype.delete = p, v.prototype.get = h, v.prototype.has = g, v.prototype.set = m;
  var Xt = Array.prototype, Yt = Xt.splice;
  S.prototype.clear = y, S.prototype.delete = E, S.prototype.get = T, S.prototype.has = x, S.prototype.set = _;
  var Jt = f(mt, 'Map');
  R.prototype.clear = C, R.prototype.delete = N, R.prototype.get = P, R.prototype.has = A, R.prototype.set = D;
  var Kt = '__lodash_hash_undefined__';
  M.prototype.add = M.prototype.push = k, M.prototype.has = j;
  var Zt = Math.min, en = Math.max, tn = function () {
      try {
        var e = f(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (e) {
      }
    }(), nn = tn ? function (e, t) {
      return tn(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: X(t),
        writable: !0
      });
    } : G, rn = 800, on = 16, an = Date.now, sn = function (e) {
      var t = 0, n = 0;
      return function () {
        var r = an(), i = on - (r - n);
        if (n = r, i > 0) {
          if (++t >= rn)
            return arguments[0];
        } else
          t = 0;
        return e.apply(void 0, arguments);
      };
    }(nn), un = 9007199254740991, ln = function (e, t) {
      return sn(Q(e, t, G), e + '');
    }(function (e) {
      var n = t(e, ee);
      return n.length && n[0] === e[0] ? W(n) : [];
    }), cn = Object.freeze({
      matchesLocalNameOrElement: te,
      applyBlacklist: ie,
      retrieveItemRefHref: oe
    }), fn = Object.freeze({
      injectCFIMarkerIntoText: ue,
      followIndexStep: ce,
      getNextNode: ce,
      followIndirectionStep: fe,
      textTermination: de,
      targetIdMatchesIdAssertion: pe,
      applyBlacklist: ie
    });
  !function (e, t) {
    function n() {
      this.constructor = e;
    }
    n.prototype = t.prototype, e.prototype = new n();
  }(he, Error), he.buildMessage = function (e, t) {
    function n(e) {
      return e.charCodeAt(0).toString(16).toUpperCase();
    }
    function r(e) {
      return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (e) {
        return '\\x0' + n(e);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return '\\x' + n(e);
      });
    }
    function i(e) {
      return e.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (e) {
        return '\\x0' + n(e);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return '\\x' + n(e);
      });
    }
    function o(e) {
      return a[e.type](e);
    }
    var a = {
      literal: function (e) {
        return '"' + r(e.text) + '"';
      },
      class: function (e) {
        var t, n = '';
        for (t = 0; t < e.parts.length; t++)
          n += e.parts[t] instanceof Array ? i(e.parts[t][0]) + '-' + i(e.parts[t][1]) : i(e.parts[t]);
        return '[' + (e.inverted ? '^' : '') + n + ']';
      },
      any: function (e) {
        return 'any character';
      },
      end: function (e) {
        return 'end of input';
      },
      other: function (e) {
        return e.description;
      }
    };
    return 'Expected ' + function (e) {
      var t, n, r = new Array(e.length);
      for (t = 0; t < e.length; t++)
        r[t] = o(e[t]);
      if (r.sort(), r.length > 0) {
        for (t = 1, n = 1; t < r.length; t++)
          r[t - 1] !== r[t] && (r[n] = r[t], n++);
        r.length = n;
      }
      switch (r.length) {
      case 1:
        return r[0];
      case 2:
        return r[0] + ' or ' + r[1];
      default:
        return r.slice(0, -1).join(', ') + ', or ' + r[r.length - 1];
      }
    }(e) + ' but ' + function (e) {
      return e ? '"' + r(e) + '"' : 'end of input';
    }(t) + ' found.';
  };
  var dn = {
      SyntaxError: he,
      parse: ge
    }, pn = dn.SyntaxError, hn = dn.parse, gn = Object.freeze({
      SyntaxError: pn,
      parse: hn
    }), mn = Object.freeze({
      interpretIndexStepNode: Ee,
      interpretIndirectionStepNode: Te,
      interpretTextTerminusNode: Se,
      getContentDocHref: Ce,
      compareCFIs: Ie,
      injectElement: Oe,
      injectRangeElements: Ne,
      getTargetElement: Pe,
      getRangeTargetElements: Ae,
      getTargetElementWithPartialCFI: De,
      getTextTerminusInfoWithPartialCFI: Re,
      getTextTerminusInfo: ke,
      isRangeCfi: je,
      hasTextTerminus: Me
    }), vn = Object.freeze({
      validateStartElement: qe,
      createCFITextNodeStep: We,
      createCFIElementSteps: Ge,
      generateDocumentRangeComponent: $e,
      generateRangeComponent: Qe,
      generateCharOffsetRangeComponent: Xe,
      generateElementRangeComponent: Ye,
      generateCharacterOffsetCFIComponent: Je,
      generateElementCFIComponent: Ke,
      generatePackageDocumentCFIComponent: Ze,
      generatePackageDocumentCFIComponentWithSpineIndex: et,
      generateCompleteCFI: tt
    });
  e.CFIInstructions = fn, e.Instructions = fn, e.Interpreter = mn, e.Generator = vn, e.Parser = gn, e.Util = cn, e.injectCFIMarkerIntoText = ue, e.followIndexStep = ce, e.getNextNode = ce, e.followIndirectionStep = fe, e.textTermination = de, e.targetIdMatchesIdAssertion = pe, e.applyBlacklist = ie, e.interpretIndexStepNode = Ee, e.interpretIndirectionStepNode = Te, e.interpretTextTerminusNode = Se, e.getContentDocHref = Ce, e.compareCFIs = Ie, e.injectElement = Oe, e.injectRangeElements = Ne, e.getTargetElement = Pe, e.getRangeTargetElements = Ae, e.getTargetElementWithPartialCFI = De, e.getTextTerminusInfoWithPartialCFI = Re, e.getTextTerminusInfo = ke, e.isRangeCfi = je, e.hasTextTerminus = Me, e.validateStartElement = qe, e.createCFITextNodeStep = We, e.createCFIElementSteps = Ge, e.generateDocumentRangeComponent = $e, e.generateRangeComponent = Qe, e.generateCharOffsetRangeComponent = Xe, e.generateElementRangeComponent = Ye, e.generateCharacterOffsetCFIComponent = Je, e.generateElementCFIComponent = Ke, e.generatePackageDocumentCFIComponent = Ze, e.generatePackageDocumentCFIComponentWithSpineIndex = et, e.generateCompleteCFI = tt, e.NodeTypeError = ct, e.OutOfRangeError = ft, e.TerminusError = dt, e.CFIAssertionError = pt, Object.defineProperty(e, '__esModule', { value: !0 });
}), function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : true ? _underscore = function () {
    return typeof t === 'function' ? t() : t;
  }() : (e = 'undefined' != typeof globalThis ? globalThis : e || self, function () {
    var n = e._, r = e._ = t();
    r.noConflict = function () {
      return e._ = n, r;
    };
  }());
}(this, function () {
  function e(e, t) {
    return t = null == t ? e.length - 1 : +t, function () {
      for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++)
        r[i] = arguments[i + t];
      switch (t) {
      case 0:
        return e.call(this, r);
      case 1:
        return e.call(this, arguments[0], r);
      case 2:
        return e.call(this, arguments[0], arguments[1], r);
      }
      var o = Array(t + 1);
      for (i = 0; i < t; i++)
        o[i] = arguments[i];
      return o[t] = r, e.apply(this, o);
    };
  }
  function t(e) {
    var t = typeof e;
    return 'function' === t || 'object' === t && !!e;
  }
  function n(e) {
    return null === e;
  }
  function r(e) {
    return void 0 === e;
  }
  function i(e) {
    return !0 === e || !1 === e || '[object Boolean]' === st.call(e);
  }
  function o(e) {
    return !(!e || 1 !== e.nodeType);
  }
  function a(e) {
    var t = '[object ' + e + ']';
    return function (e) {
      return st.call(e) === t;
    };
  }
  function s(e) {
    return null != e && Nt(e.getInt8) && Ct(e.buffer);
  }
  function u(e, t) {
    return null != e && ut.call(e, t);
  }
  function l(e) {
    return !St(e) && mt(e) && !isNaN(parseFloat(e));
  }
  function c(e) {
    return Et(e) && gt(e);
  }
  function f(e) {
    return function () {
      return e;
    };
  }
  function d(e) {
    return function (t) {
      var n = e(t);
      return 'number' == typeof n && n >= 0 && n <= bt;
    };
  }
  function p(e) {
    return function (t) {
      return null == t ? void 0 : t[e];
    };
  }
  function h(e) {
    return ht ? ht(e) && !kt(e) : qt(e) && Vt.test(st.call(e));
  }
  function g(e) {
    for (var t = {}, n = e.length, r = 0; r < n; ++r)
      t[e[r]] = !0;
    return {
      contains: function (e) {
        return !0 === t[e];
      },
      push: function (n) {
        return t[n] = !0, e.push(n);
      }
    };
  }
  function m(e, t) {
    t = g(t);
    var n = yt.length, r = e.constructor, i = Nt(r) && r.prototype || rt, o = 'constructor';
    for (u(e, o) && !t.contains(o) && t.push(o); n--;)
      (o = yt[n]) in e && e[o] !== i[o] && !t.contains(o) && t.push(o);
  }
  function v(e) {
    if (!t(e))
      return [];
    if (dt)
      return dt(e);
    var n = [];
    for (var r in e)
      u(e, r) && n.push(r);
    return vt && m(e, n), n;
  }
  function y(e) {
    if (null == e)
      return !0;
    var t = Ut(e);
    return 'number' == typeof t && (jt(e) || wt(e) || Lt(e)) ? 0 === t : 0 === Ut(v(e));
  }
  function b(e, t) {
    var n = v(t), r = n.length;
    if (null == e)
      return !r;
    for (var i = Object(e), o = 0; o < r; o++) {
      var a = n[o];
      if (t[a] !== i[a] || !(a in i))
        return !1;
    }
    return !0;
  }
  function w(e) {
    return e instanceof w ? e : this instanceof w ? void (this._wrapped = e) : new w(e);
  }
  function E(e) {
    return new Uint8Array(e.buffer || e, e.byteOffset || 0, Ft(e));
  }
  function T(e, t, n, r) {
    if (e === t)
      return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t)
      return !1;
    if (e !== e)
      return t !== t;
    var i = typeof e;
    return ('function' === i || 'object' === i || 'object' == typeof t) && x(e, t, n, r);
  }
  function x(e, t, n, r) {
    e instanceof w && (e = e._wrapped), t instanceof w && (t = t._wrapped);
    var i = st.call(e);
    if (i !== st.call(t))
      return !1;
    if (At && '[object Object]' == i && kt(e)) {
      if (!kt(t))
        return !1;
      i = Bt;
    }
    switch (i) {
    case '[object RegExp]':
    case '[object String]':
      return '' + e == '' + t;
    case '[object Number]':
      return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
    case '[object Date]':
    case '[object Boolean]':
      return +e == +t;
    case '[object Symbol]':
      return it.valueOf.call(e) === it.valueOf.call(t);
    case '[object ArrayBuffer]':
    case Bt:
      return x(E(e), E(t), n, r);
    }
    var o = '[object Array]' === i;
    if (!o && Ht(e)) {
      if (Ft(e) !== Ft(t))
        return !1;
      if (e.buffer === t.buffer && e.byteOffset === t.byteOffset)
        return !0;
      o = !0;
    }
    if (!o) {
      if ('object' != typeof e || 'object' != typeof t)
        return !1;
      var a = e.constructor, s = t.constructor;
      if (a !== s && !(Nt(a) && a instanceof a && Nt(s) && s instanceof s) && 'constructor' in e && 'constructor' in t)
        return !1;
    }
    n = n || [], r = r || [];
    for (var l = n.length; l--;)
      if (n[l] === e)
        return r[l] === t;
    if (n.push(e), r.push(t), o) {
      if ((l = e.length) !== t.length)
        return !1;
      for (; l--;)
        if (!T(e[l], t[l], n, r))
          return !1;
    } else {
      var c, f = v(e);
      if (l = f.length, v(t).length !== l)
        return !1;
      for (; l--;)
        if (c = f[l], !u(t, c) || !T(e[c], t[c], n, r))
          return !1;
    }
    return n.pop(), r.pop(), !0;
  }
  function _(e, t) {
    return T(e, t);
  }
  function S(e) {
    if (!t(e))
      return [];
    var n = [];
    for (var r in e)
      n.push(r);
    return vt && m(e, n), n;
  }
  function C(e) {
    var t = Ut(e);
    return function (n) {
      if (null == n)
        return !1;
      var r = S(n);
      if (Ut(r))
        return !1;
      for (var i = 0; i < t; i++)
        if (!Nt(n[e[i]]))
          return !1;
      return e !== Qt || !Nt(n[zt]);
    };
  }
  function I(e) {
    for (var t = v(e), n = t.length, r = Array(n), i = 0; i < n; i++)
      r[i] = e[t[i]];
    return r;
  }
  function O(e) {
    for (var t = v(e), n = t.length, r = Array(n), i = 0; i < n; i++)
      r[i] = [
        t[i],
        e[t[i]]
      ];
    return r;
  }
  function N(e) {
    for (var t = {}, n = v(e), r = 0, i = n.length; r < i; r++)
      t[e[n[r]]] = n[r];
    return t;
  }
  function P(e) {
    var t = [];
    for (var n in e)
      Nt(e[n]) && t.push(n);
    return t.sort();
  }
  function A(e, t) {
    return function (n) {
      var r = arguments.length;
      if (t && (n = Object(n)), r < 2 || null == n)
        return n;
      for (var i = 1; i < r; i++)
        for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
          var l = a[u];
          t && void 0 !== n[l] || (n[l] = o[l]);
        }
      return n;
    };
  }
  function D() {
    return function () {
    };
  }
  function R(e) {
    if (!t(e))
      return {};
    if (pt)
      return pt(e);
    var n = D();
    n.prototype = e;
    var r = new n();
    return n.prototype = null, r;
  }
  function k(e, t) {
    var n = R(e);
    return t && tn(n, t), n;
  }
  function j(e) {
    return t(e) ? jt(e) ? e.slice() : en({}, e) : e;
  }
  function M(e, t) {
    return t(e), e;
  }
  function L(e) {
    return jt(e) ? e : [e];
  }
  function F(e) {
    return w.toPath(e);
  }
  function q(e, t) {
    for (var n = t.length, r = 0; r < n; r++) {
      if (null == e)
        return;
      e = e[t[r]];
    }
    return n ? e : void 0;
  }
  function V(e, t, n) {
    var i = q(e, F(t));
    return r(i) ? n : i;
  }
  function H(e, t) {
    t = F(t);
    for (var n = t.length, r = 0; r < n; r++) {
      var i = t[r];
      if (!u(e, i))
        return !1;
      e = e[i];
    }
    return !!n;
  }
  function U(e) {
    return e;
  }
  function B(e) {
    return e = tn({}, e), function (t) {
      return b(t, e);
    };
  }
  function z(e) {
    return e = F(e), function (t) {
      return q(t, e);
    };
  }
  function W(e, t, n) {
    if (void 0 === t)
      return e;
    switch (null == n ? 3 : n) {
    case 1:
      return function (n) {
        return e.call(t, n);
      };
    case 3:
      return function (n, r, i) {
        return e.call(t, n, r, i);
      };
    case 4:
      return function (n, r, i, o) {
        return e.call(t, n, r, i, o);
      };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }
  function G(e, n, r) {
    return null == e ? U : Nt(e) ? W(e, n, r) : t(e) && !jt(e) ? B(e) : z(e);
  }
  function $(e, t) {
    return G(e, t, 1 / 0);
  }
  function Q(e, t, n) {
    return w.iteratee !== $ ? w.iteratee(e, t) : G(e, t, n);
  }
  function X(e, t, n) {
    t = Q(t, n);
    for (var r = v(e), i = r.length, o = {}, a = 0; a < i; a++) {
      var s = r[a];
      o[s] = t(e[s], s, e);
    }
    return o;
  }
  function Y() {
  }
  function J(e) {
    return null == e ? Y : function (t) {
      return V(e, t);
    };
  }
  function K(e, t, n) {
    var r = Array(Math.max(0, e));
    t = W(t, n, 1);
    for (var i = 0; i < e; i++)
      r[i] = t(i);
    return r;
  }
  function Z(e, t) {
    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
  }
  function ee(e) {
    var t = function (t) {
        return e[t];
      }, n = '(?:' + v(e).join('|') + ')', r = RegExp(n), i = RegExp(n, 'g');
    return function (e) {
      return e = null == e ? '' : '' + e, r.test(e) ? e.replace(i, t) : e;
    };
  }
  function te(e) {
    return '\\' + fn[e];
  }
  function ne(e, t, n) {
    !t && n && (t = n), t = nn({}, t, w.templateSettings);
    var r = RegExp([
        (t.escape || cn).source,
        (t.interpolate || cn).source,
        (t.evaluate || cn).source
      ].join('|') + '|$', 'g'), i = 0, o = '__p+=\'';
    e.replace(r, function (t, n, r, a, s) {
      return o += e.slice(i, s).replace(dn, te), i = s + t.length, n ? o += '\'+\n((__t=(' + n + '))==null?\'\':_.escape(__t))+\n\'' : r ? o += '\'+\n((__t=(' + r + '))==null?\'\':__t)+\n\'' : a && (o += '\';\n' + a + '\n__p+=\''), t;
    }), o += '\';\n';
    var a = t.variable;
    if (a) {
      if (!pn.test(a))
        throw new Error('variable is not a bare identifier: ' + a);
    } else
      o = 'with(obj||{}){\n' + o + '}\n', a = 'obj';
    o = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + o + 'return __p;\n';
    var s;
    try {
      s = new Function(a, '_', o);
    } catch (e) {
      throw e.source = o, e;
    }
    var u = function (e) {
      return s.call(this, e, w);
    };
    return u.source = 'function(' + a + '){\n' + o + '}', u;
  }
  function re(e, t, n) {
    t = F(t);
    var r = t.length;
    if (!r)
      return Nt(n) ? n.call(e) : n;
    for (var i = 0; i < r; i++) {
      var o = null == e ? void 0 : e[t[i]];
      void 0 === o && (o = n, i = r), e = Nt(o) ? o.call(e) : o;
    }
    return e;
  }
  function ie(e) {
    var t = ++hn + '';
    return e ? e + t : t;
  }
  function oe(e) {
    var t = w(e);
    return t._chain = !0, t;
  }
  function ae(e, n, r, i, o) {
    if (!(i instanceof n))
      return e.apply(r, o);
    var a = R(e.prototype), s = e.apply(a, o);
    return t(s) ? s : a;
  }
  function se(e, t, n, r) {
    if (r = r || [], t || 0 === t) {
      if (t <= 0)
        return r.concat(e);
    } else
      t = 1 / 0;
    for (var i = r.length, o = 0, a = Ut(e); o < a; o++) {
      var s = e[o];
      if (vn(s) && (jt(s) || Lt(s)))
        if (t > 1)
          se(s, t - 1, n, r), i = r.length;
        else
          for (var u = 0, l = s.length; u < l;)
            r[i++] = s[u++];
      else
        n || (r[i++] = s);
    }
    return r;
  }
  function ue(e, t) {
    var n = function (r) {
      var i = n.cache, o = '' + (t ? t.apply(this, arguments) : r);
      return u(i, o) || (i[o] = e.apply(this, arguments)), i[o];
    };
    return n.cache = {}, n;
  }
  function le(e, t, n) {
    var r, i, o, a, s = 0;
    n || (n = {});
    var u = function () {
        s = !1 === n.leading ? 0 : rn(), r = null, a = e.apply(i, o), r || (i = o = null);
      }, l = function () {
        var l = rn();
        s || !1 !== n.leading || (s = l);
        var c = t - (l - s);
        return i = this, o = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), s = l, a = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, c)), a;
      };
    return l.cancel = function () {
      clearTimeout(r), s = 0, r = i = o = null;
    }, l;
  }
  function ce(t, n, r) {
    var i, o, a, s, u, l = function () {
        var e = rn() - o;
        n > e ? i = setTimeout(l, n - e) : (i = null, r || (s = t.apply(u, a)), i || (a = u = null));
      }, c = e(function (e) {
        return u = this, a = e, o = rn(), i || (i = setTimeout(l, n), r && (s = t.apply(u, a))), s;
      });
    return c.cancel = function () {
      clearTimeout(i), i = a = u = null;
    }, c;
  }
  function fe(e, t) {
    return gn(t, e);
  }
  function de(e) {
    return function () {
      return !e.apply(this, arguments);
    };
  }
  function pe() {
    var e = arguments, t = e.length - 1;
    return function () {
      for (var n = t, r = e[t].apply(this, arguments); n--;)
        r = e[n].call(this, r);
      return r;
    };
  }
  function he(e, t) {
    return function () {
      if (--e < 1)
        return t.apply(this, arguments);
    };
  }
  function ge(e, t) {
    var n;
    return function () {
      return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
    };
  }
  function me(e, t, n) {
    t = Q(t, n);
    for (var r, i = v(e), o = 0, a = i.length; o < a; o++)
      if (r = i[o], t(e[r], r, e))
        return r;
  }
  function ve(e) {
    return function (t, n, r) {
      n = Q(n, r);
      for (var i = Ut(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
        if (n(t[o], o, t))
          return o;
      return -1;
    };
  }
  function ye(e, t, n, r) {
    n = Q(n, r, 1);
    for (var i = n(t), o = 0, a = Ut(e); o < a;) {
      var s = Math.floor((o + a) / 2);
      n(e[s]) < i ? o = s + 1 : a = s;
    }
    return o;
  }
  function be(e, t, n) {
    return function (r, i, o) {
      var a = 0, s = Ut(r);
      if ('number' == typeof o)
        e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
      else if (n && o && s)
        return o = n(r, i), r[o] === i ? o : -1;
      if (i !== i)
        return o = t(at.call(r, a, s), c), o >= 0 ? o + a : -1;
      for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
        if (r[o] === i)
          return o;
      return -1;
    };
  }
  function we(e, t, n) {
    var r = vn(e) ? Tn : me, i = r(e, t, n);
    if (void 0 !== i && -1 !== i)
      return e[i];
  }
  function Ee(e, t) {
    return we(e, B(t));
  }
  function Te(e, t, n) {
    t = W(t, n);
    var r, i;
    if (vn(e))
      for (r = 0, i = e.length; r < i; r++)
        t(e[r], r, e);
    else {
      var o = v(e);
      for (r = 0, i = o.length; r < i; r++)
        t(e[o[r]], o[r], e);
    }
    return e;
  }
  function xe(e, t, n) {
    t = Q(t, n);
    for (var r = !vn(e) && v(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
      var s = r ? r[a] : a;
      o[a] = t(e[s], s, e);
    }
    return o;
  }
  function _e(e) {
    var t = function (t, n, r, i) {
      var o = !vn(t) && v(t), a = (o || t).length, s = e > 0 ? 0 : a - 1;
      for (i || (r = t[o ? o[s] : s], s += e); s >= 0 && s < a; s += e) {
        var u = o ? o[s] : s;
        r = n(r, t[u], u, t);
      }
      return r;
    };
    return function (e, n, r, i) {
      var o = arguments.length >= 3;
      return t(e, W(n, i, 4), r, o);
    };
  }
  function Se(e, t, n) {
    var r = [];
    return t = Q(t, n), Te(e, function (e, n, i) {
      t(e, n, i) && r.push(e);
    }), r;
  }
  function Ce(e, t, n) {
    return Se(e, de(Q(t)), n);
  }
  function Ie(e, t, n) {
    t = Q(t, n);
    for (var r = !vn(e) && v(e), i = (r || e).length, o = 0; o < i; o++) {
      var a = r ? r[o] : o;
      if (!t(e[a], a, e))
        return !1;
    }
    return !0;
  }
  function Oe(e, t, n) {
    t = Q(t, n);
    for (var r = !vn(e) && v(e), i = (r || e).length, o = 0; o < i; o++) {
      var a = r ? r[o] : o;
      if (t(e[a], a, e))
        return !0;
    }
    return !1;
  }
  function Ne(e, t, n, r) {
    return vn(e) || (e = I(e)), ('number' != typeof n || r) && (n = 0), _n(e, t, n) >= 0;
  }
  function Pe(e, t) {
    return xe(e, z(t));
  }
  function Ae(e, t) {
    return Se(e, B(t));
  }
  function De(e, t, n) {
    var r, i, o = -1 / 0, a = -1 / 0;
    if (null == t || 'number' == typeof t && 'object' != typeof e[0] && null != e) {
      e = vn(e) ? e : I(e);
      for (var s = 0, u = e.length; s < u; s++)
        null != (r = e[s]) && r > o && (o = r);
    } else
      t = Q(t, n), Te(e, function (e, n, r) {
        ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i);
      });
    return o;
  }
  function Re(e, t, n) {
    var r, i, o = 1 / 0, a = 1 / 0;
    if (null == t || 'number' == typeof t && 'object' != typeof e[0] && null != e) {
      e = vn(e) ? e : I(e);
      for (var s = 0, u = e.length; s < u; s++)
        null != (r = e[s]) && r < o && (o = r);
    } else
      t = Q(t, n), Te(e, function (e, n, r) {
        ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i);
      });
    return o;
  }
  function ke(e) {
    return e ? jt(e) ? at.call(e) : wt(e) ? e.match(Nn) : vn(e) ? xe(e, U) : I(e) : [];
  }
  function je(e, t, n) {
    if (null == t || n)
      return vn(e) || (e = I(e)), e[Z(e.length - 1)];
    var r = ke(e), i = Ut(r);
    t = Math.max(Math.min(t, i), 0);
    for (var o = i - 1, a = 0; a < t; a++) {
      var s = Z(a, o), u = r[a];
      r[a] = r[s], r[s] = u;
    }
    return r.slice(0, t);
  }
  function Me(e) {
    return je(e, 1 / 0);
  }
  function Le(e, t, n) {
    var r = 0;
    return t = Q(t, n), Pe(xe(e, function (e, n, i) {
      return {
        value: e,
        index: r++,
        criteria: t(e, n, i)
      };
    }).sort(function (e, t) {
      var n = e.criteria, r = t.criteria;
      if (n !== r) {
        if (n > r || void 0 === n)
          return 1;
        if (n < r || void 0 === r)
          return -1;
      }
      return e.index - t.index;
    }), 'value');
  }
  function Fe(e, t) {
    return function (n, r, i) {
      var o = t ? [
        [],
        []
      ] : {};
      return r = Q(r, i), Te(n, function (t, i) {
        var a = r(t, i, n);
        e(o, t, a);
      }), o;
    };
  }
  function qe(e) {
    return null == e ? 0 : vn(e) ? e.length : v(e).length;
  }
  function Ve(e, t, n) {
    return t in n;
  }
  function He(e, t, n) {
    return at.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
  }
  function Ue(e, t, n) {
    return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[0] : He(e, e.length - t);
  }
  function Be(e, t, n) {
    return at.call(e, null == t || n ? 1 : t);
  }
  function ze(e, t, n) {
    return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[e.length - 1] : Be(e, Math.max(0, e.length - t));
  }
  function We(e) {
    return Se(e, Boolean);
  }
  function Ge(e, t) {
    return se(e, t, !1);
  }
  function $e(e, t, n, r) {
    i(t) || (r = n, n = t, t = !1), null != n && (n = Q(n, r));
    for (var o = [], a = [], s = 0, u = Ut(e); s < u; s++) {
      var l = e[s], c = n ? n(l, s, e) : l;
      t && !n ? (s && a === c || o.push(l), a = c) : n ? Ne(a, c) || (a.push(c), o.push(l)) : Ne(o, l) || o.push(l);
    }
    return o;
  }
  function Qe(e) {
    for (var t = [], n = arguments.length, r = 0, i = Ut(e); r < i; r++) {
      var o = e[r];
      if (!Ne(t, o)) {
        var a;
        for (a = 1; a < n && Ne(arguments[a], o); a++);
        a === n && t.push(o);
      }
    }
    return t;
  }
  function Xe(e) {
    for (var t = e && De(e, Ut).length || 0, n = Array(t), r = 0; r < t; r++)
      n[r] = Pe(e, r);
    return n;
  }
  function Ye(e, t) {
    for (var n = {}, r = 0, i = Ut(e); r < i; r++)
      t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
    return n;
  }
  function Je(e, t, n) {
    null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n)
      i[o] = e;
    return i;
  }
  function Ke(e, t) {
    if (null == t || t < 1)
      return [];
    for (var n = [], r = 0, i = e.length; r < i;)
      n.push(at.call(e, r, r += t));
    return n;
  }
  function Ze(e, t) {
    return e._chain ? w(t).chain() : t;
  }
  function et(e) {
    return Te(P(e), function (t) {
      var n = w[t] = e[t];
      w.prototype[t] = function () {
        var e = [this._wrapped];
        return ot.apply(e, arguments), Ze(this, n.apply(w, e));
      };
    }), w;
  }
  var tt = 'object' == typeof self && self.self === self && self || 'object' == typeof global && global.global === global && global || Function('return this')() || {}, nt = Array.prototype, rt = Object.prototype, it = 'undefined' != typeof Symbol ? Symbol.prototype : null, ot = nt.push, at = nt.slice, st = rt.toString, ut = rt.hasOwnProperty, lt = 'undefined' != typeof ArrayBuffer, ct = 'undefined' != typeof DataView, ft = Array.isArray, dt = Object.keys, pt = Object.create, ht = lt && ArrayBuffer.isView, gt = isNaN, mt = isFinite, vt = !{ toString: null }.propertyIsEnumerable('toString'), yt = [
      'valueOf',
      'isPrototypeOf',
      'toString',
      'propertyIsEnumerable',
      'hasOwnProperty',
      'toLocaleString'
    ], bt = Math.pow(2, 53) - 1, wt = a('String'), Et = a('Number'), Tt = a('Date'), xt = a('RegExp'), _t = a('Error'), St = a('Symbol'), Ct = a('ArrayBuffer'), It = a('Function'), Ot = tt.document && tt.document.childNodes;
  'function' != typeof /./ && 'object' != typeof Int8Array && 'function' != typeof Ot && (It = function (e) {
    return 'function' == typeof e || !1;
  });
  var Nt = It, Pt = a('Object'), At = ct && Pt(new DataView(new ArrayBuffer(8))), Dt = 'undefined' != typeof Map && Pt(new Map()), Rt = a('DataView'), kt = At ? s : Rt, jt = ft || a('Array'), Mt = a('Arguments');
  !function () {
    Mt(arguments) || (Mt = function (e) {
      return u(e, 'callee');
    });
  }();
  var Lt = Mt, Ft = p('byteLength'), qt = d(Ft), Vt = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/, Ht = lt ? h : f(!1), Ut = p('length');
  w.VERSION = '1.13.2', w.prototype.value = function () {
    return this._wrapped;
  }, w.prototype.valueOf = w.prototype.toJSON = w.prototype.value, w.prototype.toString = function () {
    return String(this._wrapped);
  };
  var Bt = '[object DataView]', zt = 'forEach', Wt = [
      'clear',
      'delete'
    ], Gt = [
      'get',
      'has',
      'set'
    ], $t = Wt.concat(zt, Gt), Qt = Wt.concat(Gt), Xt = ['add'].concat(Wt, zt, 'has'), Yt = Dt ? C($t) : a('Map'), Jt = Dt ? C(Qt) : a('WeakMap'), Kt = Dt ? C(Xt) : a('Set'), Zt = a('WeakSet'), en = A(S), tn = A(v), nn = A(S, !0);
  w.toPath = L, w.iteratee = $;
  var rn = Date.now || function () {
      return new Date().getTime();
    }, on = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#x27;',
      '`': '&#x60;'
    }, an = ee(on), sn = N(on), un = ee(sn), ln = w.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    }, cn = /(.)^/, fn = {
      '\'': '\'',
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    }, dn = /\\|'|\r|\n|\u2028|\u2029/g, pn = /^\s*(\w|\$)+\s*$/, hn = 0, gn = e(function (e, t) {
      var n = gn.placeholder, r = function () {
          for (var i = 0, o = t.length, a = Array(o), s = 0; s < o; s++)
            a[s] = t[s] === n ? arguments[i++] : t[s];
          for (; i < arguments.length;)
            a.push(arguments[i++]);
          return ae(e, r, this, this, a);
        };
      return r;
    });
  gn.placeholder = w;
  var mn = e(function (t, n, r) {
      if (!Nt(t))
        throw new TypeError('Bind must be called on a function');
      var i = e(function (e) {
        return ae(t, i, n, this, r.concat(e));
      });
      return i;
    }), vn = d(Ut), yn = e(function (e, t) {
      t = se(t, !1, !1);
      var n = t.length;
      if (n < 1)
        throw new Error('bindAll must be passed function names');
      for (; n--;) {
        var r = t[n];
        e[r] = mn(e[r], e);
      }
      return e;
    }), bn = e(function (e, t, n) {
      return setTimeout(function () {
        return e.apply(null, n);
      }, t);
    }), wn = gn(bn, w, 1), En = gn(ge, 2), Tn = ve(1), xn = ve(-1), _n = be(1, Tn, ye), Sn = be(-1, xn), Cn = _e(1), In = _e(-1), On = e(function (e, t, n) {
      var r, i;
      return Nt(t) ? i = t : (t = F(t), r = t.slice(0, -1), t = t[t.length - 1]), xe(e, function (e) {
        var o = i;
        if (!o) {
          if (r && r.length && (e = q(e, r)), null == e)
            return;
          o = e[t];
        }
        return null == o ? o : o.apply(e, n);
      });
    }), Nn = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g, Pn = Fe(function (e, t, n) {
      u(e, n) ? e[n].push(t) : e[n] = [t];
    }), An = Fe(function (e, t, n) {
      e[n] = t;
    }), Dn = Fe(function (e, t, n) {
      u(e, n) ? e[n]++ : e[n] = 1;
    }), Rn = Fe(function (e, t, n) {
      e[n ? 0 : 1].push(t);
    }, !0), kn = e(function (e, t) {
      var n = {}, r = t[0];
      if (null == e)
        return n;
      Nt(r) ? (t.length > 1 && (r = W(r, t[1])), t = S(e)) : (r = Ve, t = se(t, !1, !1), e = Object(e));
      for (var i = 0, o = t.length; i < o; i++) {
        var a = t[i], s = e[a];
        r(s, a, e) && (n[a] = s);
      }
      return n;
    }), jn = e(function (e, t) {
      var n, r = t[0];
      return Nt(r) ? (r = de(r), t.length > 1 && (n = t[1])) : (t = xe(se(t, !1, !1), String), r = function (e, n) {
        return !Ne(t, n);
      }), kn(e, r, n);
    }), Mn = e(function (e, t) {
      return t = se(t, !0, !0), Se(e, function (e) {
        return !Ne(t, e);
      });
    }), Ln = e(function (e, t) {
      return Mn(e, t);
    }), Fn = e(function (e) {
      return $e(se(e, !0, !0));
    }), qn = e(Xe);
  Te([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (e) {
    var t = nt[e];
    w.prototype[e] = function () {
      var n = this._wrapped;
      return null != n && (t.apply(n, arguments), 'shift' !== e && 'splice' !== e || 0 !== n.length || delete n[0]), Ze(this, n);
    };
  }), Te([
    'concat',
    'join',
    'slice'
  ], function (e) {
    var t = nt[e];
    w.prototype[e] = function () {
      var e = this._wrapped;
      return null != e && (e = t.apply(e, arguments)), Ze(this, e);
    };
  });
  var Vn = {
      __proto__: null,
      VERSION: '1.13.2',
      restArguments: e,
      isObject: t,
      isNull: n,
      isUndefined: r,
      isBoolean: i,
      isElement: o,
      isString: wt,
      isNumber: Et,
      isDate: Tt,
      isRegExp: xt,
      isError: _t,
      isSymbol: St,
      isArrayBuffer: Ct,
      isDataView: kt,
      isArray: jt,
      isFunction: Nt,
      isArguments: Lt,
      isFinite: l,
      isNaN: c,
      isTypedArray: Ht,
      isEmpty: y,
      isMatch: b,
      isEqual: _,
      isMap: Yt,
      isWeakMap: Jt,
      isSet: Kt,
      isWeakSet: Zt,
      keys: v,
      allKeys: S,
      values: I,
      pairs: O,
      invert: N,
      functions: P,
      methods: P,
      extend: en,
      extendOwn: tn,
      assign: tn,
      defaults: nn,
      create: k,
      clone: j,
      tap: M,
      get: V,
      has: H,
      mapObject: X,
      identity: U,
      constant: f,
      noop: Y,
      toPath: L,
      property: z,
      propertyOf: J,
      matcher: B,
      matches: B,
      times: K,
      random: Z,
      now: rn,
      escape: an,
      unescape: un,
      templateSettings: ln,
      template: ne,
      result: re,
      uniqueId: ie,
      chain: oe,
      iteratee: $,
      partial: gn,
      bind: mn,
      bindAll: yn,
      memoize: ue,
      delay: bn,
      defer: wn,
      throttle: le,
      debounce: ce,
      wrap: fe,
      negate: de,
      compose: pe,
      after: he,
      before: ge,
      once: En,
      findKey: me,
      findIndex: Tn,
      findLastIndex: xn,
      sortedIndex: ye,
      indexOf: _n,
      lastIndexOf: Sn,
      find: we,
      detect: we,
      findWhere: Ee,
      each: Te,
      forEach: Te,
      map: xe,
      collect: xe,
      reduce: Cn,
      foldl: Cn,
      inject: Cn,
      reduceRight: In,
      foldr: In,
      filter: Se,
      select: Se,
      reject: Ce,
      every: Ie,
      all: Ie,
      some: Oe,
      any: Oe,
      contains: Ne,
      includes: Ne,
      include: Ne,
      invoke: On,
      pluck: Pe,
      where: Ae,
      max: De,
      min: Re,
      shuffle: Me,
      sample: je,
      sortBy: Le,
      groupBy: Pn,
      indexBy: An,
      countBy: Dn,
      partition: Rn,
      toArray: ke,
      size: qe,
      pick: kn,
      omit: jn,
      first: Ue,
      head: Ue,
      take: Ue,
      initial: He,
      last: ze,
      rest: Be,
      tail: Be,
      drop: Be,
      compact: We,
      flatten: Ge,
      without: Ln,
      uniq: $e,
      unique: $e,
      union: Fn,
      intersection: Qe,
      difference: Mn,
      unzip: Xe,
      transpose: Xe,
      zip: qn,
      object: Ye,
      range: Je,
      chunk: Ke,
      mixin: et,
      default: w
    }, Hn = et(Vn);
  return Hn._ = Hn, Hn;
}), _readium_js_plugins = function (e, t, n) {
  function r(e, t) {
    this.reader = e, this.plugin = t;
  }
  function i(e) {
    this.create = function (t) {
      return {
        host: e,
        instance: new r(e, t)
      };
    };
  }
  function o(e, t, n) {
    this.name = e, this.dependencies = t, this.initialized = !1, this.supported = !1, this.initializer = n;
  }
  var a = {}, s = function () {
      this.initialize = function (e) {
        var n = new i(e);
        if (e.plugins)
          throw new Error('Already initialized on reader!');
        e.plugins = {}, t.each(a, function (e) {
          e.init(n);
        });
      }, this.getLoadedPlugins = function () {
        return a;
      }, this.register = function (t, r, i) {
        if (a[t])
          throw new Error('Duplicate registration for plugin with name: ' + t);
        var s;
        'function' == typeof r ? i = r : s = r, a[t] = new o(t, s, function (t, r) {
          if (!t.initialized || !r.host.plugins[t.name]) {
            t.initialized = !0;
            try {
              var o = {};
              e.extend(o, new n()), i.call(o, r.instance), t.supported = !0, r.host.plugins[t.name] = o;
            } catch (e) {
              t.fail(e);
            }
          }
        });
      };
    };
  return o.prototype = {
    init: function (e) {
      for (var t, n, r = this.dependencies || [], i = 0, s = r.length; i < s; ++i) {
        if (n = r[i], !((t = a[n]) && t instanceof o))
          throw new Error('required Plugin \'' + n + '\' not found');
        if (t.init(e), !t.supported)
          throw new Error('required Plugin \'' + n + '\' not supported');
      }
      this.initializer(this, e.create(this));
    },
    fail: function (e) {
      throw this.initialized = !0, this.supported = !1, new Error('Plugin \'' + this.name + '\' failed to load: ' + e);
    },
    warn: function (e) {
      console.warn('Plugin ' + this.name + ': ' + e);
    },
    deprecationNotice: function (e, t) {
      console.warn('DEPRECATED: ' + e + ' in Plugin ' + this.name + 'is deprecated. Please use ' + t + ' instead');
    },
    createError: function (e) {
      return new Error('Error in ' + this.name + ' Plugin: ' + e);
    }
  }, new s();
}(_jquery, _underscore, _eventEmitter), _readium_shared_js_globalsSetup = function (e, t, n, r, i, o, a, s) {
  if (console.log('Globals...'), Array.prototype.includes || Object.defineProperty(Array.prototype, 'includes', {
      value: function (e, t) {
        if (null == this)
          throw new TypeError('"this" is null or not defined');
        var n = Object(this), r = n.length >>> 0;
        if (0 === r)
          return !1;
        for (var i = 0 | t, o = Math.max(i >= 0 ? i : r - Math.abs(i), 0); o < r;) {
          if (function (e, t) {
              return e === t || 'number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t);
            }(n[o], e))
            return !0;
          o++;
        }
        return !1;
      }
    }), window.ReadiumSDK ? (console.log('ReadiumSDK extend.'), t.extend(e, window.ReadiumSDK)) : console.log('ReadiumSDK set.'), window.ReadiumSDK = e, i.prototype.trigger = i.prototype.emit, window.EventEmitter = i, window.URI = o, 'URL' in window == !1) {
    if ('webkitURL' in window == !1)
      throw Error('Browser does not support window.URL');
    window.URL = window.webkitURL;
  }
  if (e.Plugins = s, e.on(e.Events.READER_INITIALIZED, function (t) {
      e.logEvent('READER_INITIALIZED', 'ON', 'globalsSetup.js');
      try {
        s.initialize(t);
      } catch (e) {
        console.error('Plugins failed to initialize:', e);
      }
      setTimeout(function () {
        e.logEvent('PLUGINS_LOADED', 'EMIT', 'globalsSetup.js'), e.emit(e.Events.PLUGINS_LOADED, t);
      }, 0);
    }), window._RJS_isBrowser) {
    var u = window._RJS_pluginsList;
    console.log('Plugins included: ', u.map(function (e) {
      return e.replace('readium_plugin_', '');
    })), require(u);
  } else
    setTimeout(function () {
      var e = Object.keys(s.getLoadedPlugins());
      console.log('Plugins included: ', e);
    }, 0);
}(_readium_shared_js_globals, _jquery, _console_shim, _es6_shim, _eventEmitter, _URIjs, _readium_cfi_js, _readium_js_plugins), _readium_shared_js = function (e) {
  return e;
}(_readium_shared_js_globalsSetup), function (e) {
  true ? _jquerySizes = function (_jquery) {
    return typeof e === 'function' ? e(_jquery) : e;
  }(_jquery) : 'object' == typeof module && module.exports ? module.exports = function (t, n) {
    return void 0 === n && (n = 'undefined' != typeof window ? _jquery : _jquery(t)), e(n), n;
  } : e(jQuery);
}(function (e) {
  'use strict';
  var t = function (e) {
    return parseInt(e, 10) || 0;
  };
  e.each([
    'min',
    'max'
  ], function (n, r) {
    e.fn[r + 'Size'] = function (e) {
      var n, i;
      return e ? (void 0 !== e.width && this.css(r + '-width', e.width), void 0 !== e.height && this.css(r + '-height', e.height), this) : (n = this.css(r + '-width'), i = this.css(r + '-height'), {
        width: 'max' === r && (void 0 === n || 'none' === n || -1 === t(n)) && Number.MAX_VALUE || t(n),
        height: 'max' === r && (void 0 === i || 'none' === i || -1 === t(i)) && Number.MAX_VALUE || t(i)
      });
    };
  }), e.fn.isVisible = function () {
    return this.is(':visible');
  }, e.each([
    'border',
    'margin',
    'padding'
  ], function (n, r) {
    e.fn[r] = function (e) {
      return e ? (void 0 !== e.top && this.css(r + '-top' + ('border' === r ? '-width' : ''), e.top), void 0 !== e.bottom && this.css(r + '-bottom' + ('border' === r ? '-width' : ''), e.bottom), void 0 !== e.left && this.css(r + '-left' + ('border' === r ? '-width' : ''), e.left), void 0 !== e.right && this.css(r + '-right' + ('border' === r ? '-width' : ''), e.right), this) : {
        top: t(this.css(r + '-top' + ('border' === r ? '-width' : ''))),
        bottom: t(this.css(r + '-bottom' + ('border' === r ? '-width' : ''))),
        left: t(this.css(r + '-left' + ('border' === r ? '-width' : ''))),
        right: t(this.css(r + '-right' + ('border' === r ? '-width' : '')))
      };
    };
  });
}), _readium_shared_js_models_spine_item = function () {
  var e = function (t, n, r) {
    function i() {
      a.page_spread && a.page_spread != e.SPREAD_LEFT && a.page_spread != e.SPREAD_RIGHT && a.page_spread != e.SPREAD_CENTER && console.error(a.page_spread + ' is not a recognized spread type');
    }
    function o(e, t) {
      return a[e] ? a[e] === t : !!a.spine.package[e] && a.spine.package[e] === t;
    }
    var a = this;
    this.idref = t.idref, this.href = t.href, this.cfi = t.cfi, this.linear = t.linear ? t.linear.toLowerCase() : t.linear, this.page_spread = t.page_spread, this.rendition_viewport = t.rendition_viewport, this.rendition_spread = t.rendition_spread, this.rendition_orientation = t.rendition_orientation, this.rendition_layout = t.rendition_layout, this.rendition_flow = t.rendition_flow, this.media_overlay_id = t.media_overlay_id, this.media_type = t.media_type, this.index = n, this.spine = r, i(), this.setSpread = function (e) {
      this.page_spread = e, i();
    }, this.isRenditionSpreadAllowed = function () {
      var t = a.getRenditionSpread();
      return !t || t != e.RENDITION_SPREAD_NONE;
    }, this.isLeftPage = function () {
      return a.page_spread == e.SPREAD_LEFT;
    }, this.isRightPage = function () {
      return a.page_spread == e.SPREAD_RIGHT;
    }, this.isCenterPage = function () {
      return a.page_spread == e.SPREAD_CENTER;
    }, this.isReflowable = function () {
      return !a.isFixedLayout();
    }, this.isFixedLayout = function () {
      if (a.getRenditionLayout()) {
        if (a.rendition_layout) {
          if (a.rendition_layout === e.RENDITION_LAYOUT_PREPAGINATED)
            return !0;
          if (a.rendition_layout === e.RENDITION_LAYOUT_REFLOWABLE)
            return !1;
        }
        return a.spine.package.isFixedLayout();
      }
      return a.media_type.indexOf('image/') >= 0;
    }, this.getRenditionFlow = function () {
      return a.rendition_flow ? a.rendition_flow : a.spine.package.rendition_flow;
    }, this.getRenditionViewport = function () {
      return a.rendition_viewport ? a.rendition_viewport : a.spine.package.rendition_viewport;
    }, this.getRenditionSpread = function () {
      return a.rendition_spread ? a.rendition_spread : a.spine.package.rendition_spread;
    }, this.getRenditionOrientation = function () {
      return a.rendition_orientation ? a.rendition_orientation : a.spine.package.rendition_orientation;
    }, this.getRenditionLayout = function () {
      return a.rendition_layout ? a.rendition_layout : a.spine.package.rendition_layout;
    }, this.isFlowScrolledContinuous = function () {
      return o('rendition_flow', e.RENDITION_FLOW_SCROLLED_CONTINUOUS);
    }, this.isFlowScrolledDoc = function () {
      return o('rendition_flow', e.RENDITION_FLOW_SCROLLED_DOC);
    };
  };
  return e.RENDITION_LAYOUT_REFLOWABLE = 'reflowable', e.RENDITION_LAYOUT_PREPAGINATED = 'pre-paginated', e.RENDITION_ORIENTATION_LANDSCAPE = 'landscape', e.RENDITION_ORIENTATION_PORTRAIT = 'portrait', e.RENDITION_ORIENTATION_AUTO = 'auto', e.SPREAD_LEFT = 'page-spread-left', e.SPREAD_RIGHT = 'page-spread-right', e.SPREAD_CENTER = 'page-spread-center', e.RENDITION_SPREAD_NONE = 'none', e.RENDITION_SPREAD_LANDSCAPE = 'landscape', e.RENDITION_SPREAD_PORTRAIT = 'portrait', e.RENDITION_SPREAD_BOTH = 'both', e.RENDITION_SPREAD_AUTO = 'auto', e.RENDITION_FLOW_PAGINATED = 'paginated', e.RENDITION_FLOW_SCROLLED_CONTINUOUS = 'scrolled-continuous', e.RENDITION_FLOW_SCROLLED_DOC = 'scrolled-doc', e.RENDITION_FLOW_AUTO = 'auto', e.alternateSpread = function (t) {
    return t === e.SPREAD_LEFT ? e.SPREAD_RIGHT : t === e.SPREAD_RIGHT ? e.SPREAD_LEFT : t;
  }, e;
}(), _readium_shared_js_helpers = function (e, t, n, r, i, o) {
  !function () {
    'use strict';
    if (window.performance) {
      if (window.performance.now)
        return;
      for (var e = [
            'webkitNow',
            'mozNow',
            'msNow',
            'oNow'
          ], t = 0; t < e.length; t++)
        if (e[t] in window.performance)
          return void (window.performance.now = window.performance[e[t]]);
    } else
      window.performance = {};
    if (Date.now)
      return void (window.performance.now = function () {
        return Date.now();
      });
    window.performance.now = function () {
      return +new Date();
    };
  }();
  var a = {};
  return a.getEbookUrlFilePath = function (e) {
    return window.Blob && window.File ? e instanceof File ? e.name : e instanceof Blob ? 'readium-ebook.epub' : e : e;
  }, a.getURLQueryParams = function (e) {
    var t = {}, n = e || window.location.search;
    if (n && n.length) {
      n = n.substring(1);
      for (var r = n.split('&'), i = 0; i < r.length; i++) {
        var o = r[i].split('=');
        o.length > 1 && (t[o[0]] = decodeURIComponent(o[1]));
      }
    }
    return t;
  }, a.buildUrlQueryParameters = function (e, n) {
    var r = new o(e || window.location), i = r.search(), s = r.hash(), u = r.search('').hash('').toString(), l = '';
    for (var c in n)
      if (n.hasOwnProperty(c) && n[c]) {
        var f = n[c];
        t.isString(f) && (f = f.trim()), f && (f = f.verbatim ? f.value : encodeURIComponent(f), console.debug('URL QUERY PARAM OVERRIDE: ' + c + ' = ' + f), l += c + '=' + f, l += '&');
      }
    var d = a.getURLQueryParams(i);
    for (var p in d)
      if (d.hasOwnProperty(p) && d[p] && !n[p]) {
        var h = d[p].trim();
        h && (console.debug('URL QUERY PARAM PRESERVED: ' + p + ' = ' + h), l += p + '=' + encodeURIComponent(h), l += '&');
      }
    return l = l.slice(0, -1), u + '?' + l + s;
  }, a.Rect = function (e, t, n, r) {
    this.left = e, this.top = t, this.width = n, this.height = r, this.right = function () {
      return this.left + this.width;
    }, this.bottom = function () {
      return this.top + this.height;
    }, this.isOverlap = function (e, t) {
      return void 0 == t && (t = 0), !(e.right() < this.left + t || e.left > this.right() - t || e.bottom() < this.top + t || e.top > this.bottom() - t);
    };
  }, a.Rect.fromElement = function (e) {
    var n;
    n = t.isArray(e) || e instanceof jQuery ? e[0] : e, 3 === n.nodeType && (n = e.parent()[0]);
    for (var r = n.offsetLeft, i = n.offsetTop, o = n.offsetWidth, s = n.offsetHeight; n = n.offsetParent;)
      r += n.offsetLeft, i += n.offsetTop;
    return new a.Rect(r, i, o, s);
  }, a.UpdateHtmlFontAttributes = function (e, r, i, o) {
    var a = n('head', e), s = n('#readium_font_family_link', a);
    var u = 0, l = function () {
        if (0 != u) {
          var t = n('style#readium-fontFamily', a);
          if (t && t[0] && a[0].removeChild(t[0]), 1 == u) {
            var s = e[0].ownerDocument.createElement('style');
            s.setAttribute('id', 'readium-fontFamily'), s.appendChild(e[0].ownerDocument.createTextNode('html * { font-family: "' + i.fontFamily + '" !important; }')), a[0].appendChild(s);
          }
        }
        var l = r / 100, c = e[0].ownerDocument.defaultView;
        if (!c)
          return void console.log('NIL $epubHtml[0].ownerDocument.defaultView');
        for (var f = n('p, div, span, h1, h2, h3, h4, h5, h6, li, blockquote, td, pre, dt, dd, code, a', e), d = 0; d < f.length; d++) {
          var p = f[d], h = p.getAttribute('data-original-font-size');
          if (h)
            break;
          var s = c.getComputedStyle(p), g = parseInt(s.fontSize);
          p.setAttribute('data-original-font-size', g);
          var m = parseInt(s.lineHeight);
          m && p.setAttribute('data-original-line-height', m);
        }
        for (var d = 0; d < f.length; d++) {
          var p = f[d], h = p.getAttribute('data-original-font-size'), g = h ? Number(h) : 0;
          g && n(p).css('font-size', g * l + 'px');
          var v = p.getAttribute('data-original-line-height'), m = v ? Number(v) : 0;
          m && n(p).css('line-height', m * l + 'px');
        }
        e.css('font-size', r + '%');
        o();
      }, c = t.once(l);
    if (i.fontFamily && i.url) {
      var f = s.length ? s.attr('data-fontfamily') : void 0;
      s.length ? f != i.fontFamily ? (u = 1, s.attr({
        'data-fontfamily': i.fontFamily,
        href: i.url
      })) : u = 0 : (u = 1, setTimeout(function () {
        s = n('<link/>', {
          id: 'readium_font_family_link',
          'data-fontfamily': i.fontFamily,
          rel: 'stylesheet',
          type: 'text/css'
        }), a.append(s), s.attr({ href: i.url });
      }, 0));
    } else
      u = 2, s.length && s.remove();
    1 == u ? setTimeout(function () {
      c();
    }, 100) : c();
  }, a.ResolveContentRef = function (e, t) {
    if (!t)
      return e;
    var n = t.split('/');
    n.pop();
    for (var r = e.split('/'); n.length > 0 && '..' === r[0];)
      n.pop(), r.splice(0, 1);
    return n.concat(r).join('/');
  }, a.EndsWith = function (e, t) {
    return -1 !== e.indexOf(t, e.length - t.length);
  }, a.BeginsWith = function (e, t) {
    return 0 === e.indexOf(t);
  }, a.RemoveFromString = function (e, t) {
    var n = e.indexOf(t);
    return -1 == n ? e : e.substring(0, n) + e.substring(n + t.length);
  }, a.Margins = function (e, t, n) {
    this.margin = e, this.border = t, this.padding = n, this.left = this.margin.left + this.border.left + this.padding.left, this.right = this.margin.right + this.border.right + this.padding.right, this.top = this.margin.top + this.border.top + this.padding.top, this.bottom = this.margin.bottom + this.border.bottom + this.padding.bottom, this.width = function () {
      return this.left + this.right;
    }, this.height = function () {
      return this.top + this.bottom;
    };
  }, a.triggerLayout = function (e) {
    var t = e[0].contentDocument;
    if (t) {
      var n = void 0;
      try {
        if (!(n = t.styleSheets && t.styleSheets.length ? t.styleSheets[0] : void 0)) {
          var r = t.createElement('style');
          t.head.appendChild(r), r.appendChild(t.createTextNode('')), n = r.sheet;
        }
        if (n) {
          var i = 'body:first-child::before {content:\'READIUM\';color: red;font-weight: bold;}';
          n.cssRules ? n.insertRule(i, n.cssRules.length) : n.insertRule(i, 0);
        }
      } catch (e) {
        console.error(e);
      }
      try {
        var o = t.createElementNS('http://www.w3.org/1999/xhtml', 'style');
        o.appendChild(t.createTextNode('*{}')), t.body.appendChild(o), t.body.removeChild(o), n && (n.cssRules ? n.deleteRule(n.cssRules.length - 1) : n.deleteRule(0));
      } catch (e) {
        console.error(e);
      }
      if (t.body) {
        t.body.offsetTop;
      }
    }
  }, a.deduceSyntheticSpread = function (t, n, r) {
    if (!t || 0 == t.length)
      return 0;
    var o = n ? n.getRenditionSpread() : void 0;
    if (o === i.RENDITION_SPREAD_NONE)
      return !1;
    if ('double' == r.syntheticSpread)
      return !0;
    if ('single' == r.syntheticSpread)
      return !1;
    if (!n)
      return 0;
    if (o === i.RENDITION_SPREAD_BOTH)
      return !0;
    var s = a.getOrientation(t);
    if (o === i.RENDITION_SPREAD_LANDSCAPE)
      return s === e.Views.ORIENTATION_LANDSCAPE;
    if (o === i.RENDITION_SPREAD_PORTRAIT)
      return s === e.Views.ORIENTATION_PORTRAIT;
    if (!o || o === i.RENDITION_SPREAD_AUTO) {
      return s === e.Views.ORIENTATION_LANDSCAPE ? 1 : 0;
    }
    return console.warn('Helpers.deduceSyntheticSpread: spread properties?!'), 0;
  }, a.Margins.fromElement = function (e) {
    return new this(e.margin(), e.border(), e.padding());
  }, a.Margins.empty = function () {
    return new this({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
  }, a.loadTemplate = function (e, t) {
    return a.loadTemplate.cache[e];
  }, a.loadTemplate.cache = {
    fixed_book_frame: '<div id="fixed-book-frame" class="clearfix book-frame fixed-book-frame"></div>',
    single_page_frame: '<div><div id="scaler"><iframe enable-annotation="enable-annotation" allowfullscreen="allowfullscreen" scrolling="no" class="iframe-fixed"></iframe></div></div>',
    scrolled_book_frame: '<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"><div id="scrolled-content-frame"></div></div>',
    reflowable_book_frame: '<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"></div>',
    reflowable_book_page_frame: '<div id="reflowable-content-frame" class="reflowable-content-frame"><iframe enable-annotation="enable-annotation" allowfullscreen="allowfullscreen" scrolling="no" id="epubContentIframe"></iframe></div>'
  }, a.setStyles = function (e, t) {
    var r = e.length;
    if (r) {
      for (var i = '', o = [], a = !(!t || !t.createTextNode), s = 0; s < r; s++) {
        var u = e[s];
        if (a) {
          if (u.selector && '' != u.selector && 'html' != u.selector && 'body' != u.selector && '*' != u.selector) {
            var l = '';
            for (var c in u.declarations)
              if (u.declarations.hasOwnProperty(c)) {
                var f = c.replace(/[A-Z]/g, function (e) {
                  return '-' + e.toLowerCase();
                });
                l += f + ': ' + u.declarations[c] + ' !important; ';
              }
            o.push({
              selector: u.selector,
              cssProps: l
            });
          } else
            for (var c in u.declarations)
              if (u.declarations.hasOwnProperty(c)) {
                var f = c.replace(/[A-Z]/g, function (e) {
                  return '-' + e.toLowerCase();
                });
                i += f + ': ' + u.declarations[c] + ' !important; ';
              }
        } else
          u.selector ? n(u.selector, t).css(u.declarations) : t.css(u.declarations);
      }
      if (a) {
        var d = t, p = n('style#readium-bookStyles', d.head);
        p && p[0] && d.head.removeChild(p[0]);
        var h = '';
        if (i.length > 0 && (h += ' body, body::after, body::before, body *, body *::after, body *::before { ' + i + ' } '), o.length > 0)
          for (var s = 0; s < o.length; s++) {
            var g = o[s];
            h += ' ' + g.selector + ' { ' + g.cssProps + ' } ';
          }
        if (h.length > 0) {
          var m = d.createElement('style');
          m.setAttribute('id', 'readium-bookStyles'), m.appendChild(d.createTextNode(h)), d.head.appendChild(m);
        }
      }
    }
  }, a.isIframeAlive = function (e) {
    var t = void 0, n = void 0;
    try {
      t = e.contentWindow, n = e.contentDocument;
    } catch (e) {
      return console.error(e), !1;
    }
    return t && n;
  }, a.getOrientation = function (t) {
    var n = t.width(), r = t.height();
    if (n && r)
      return n >= r ? e.Views.ORIENTATION_LANDSCAPE : e.Views.ORIENTATION_PORTRAIT;
  }, a.isRenditionSpreadPermittedForItem = function (t, n) {
    var r = t.getRenditionSpread();
    return !r || r == i.RENDITION_SPREAD_BOTH || r == i.RENDITION_SPREAD_AUTO || r == i.RENDITION_SPREAD_LANDSCAPE && n == e.Views.ORIENTATION_LANDSCAPE || r == i.RENDITION_SPREAD_PORTRAIT && n == e.Views.ORIENTATION_PORTRAIT;
  }, a.CSSTransition = function (e, n) {
    var r = {};
    t.each([
      '',
      '-webkit-',
      '-moz-',
      '-ms-'
    ], function (e) {
      r[e + 'transition'] = e + n;
    }), e.css(r);
  }, a.CSSTransformString = function (e) {
    var t, n, r, i = !!e.enable3D, o = e.origin;
    if (e.left || e.top) {
      var a = e.left || 0, s = e.top || 0;
      t = i ? 'translate3D(' + a + 'px, ' + s + 'px, 0)' : 'translate(' + a + 'px, ' + s + 'px)';
    }
    if (e.scale && (n = i ? 'scale3D(' + e.scale + ', ' + e.scale + ', 0)' : 'scale(' + e.scale + ')'), e.angle && (r = i ? 'rotate3D(0,0,' + e.angle + 'deg)' : 'rotate(' + e.angle + 'deg)'), !(t || n || r))
      return {};
    var u = t && n ? t + ' ' + n : t || n;
    r && (u = u + ' ' + r);
    var l = {};
    return l.transform = u, l['transform-origin'] = o || (i ? '0 0 0' : '0 0'), l;
  }, a.extendedThrottle = function (e, t, n, r, i, o) {
    r || (r = 250), i || (i = r);
    var a, s, u = !0;
    return function () {
      var l = o || this, c = Date.now && Date.now() || new Date().getTime(), f = arguments;
      a && c < a + r || (a = c, u ? (e.apply(l, f), u = !1) : t.apply(l, f)), clearTimeout(s), s = setTimeout(function () {
        a = c, u = !0, n.apply(l, f);
      }, i);
    };
  }, a.escapeJQuerySelector = function (e) {
    if (e) {
      return e.replace(/([;&,\.\+\*\~\?':"\!\^#$%@\[\]\(\)<=>\|\/\\{}`])/g, '\\$1');
    }
  }, a.polyfillCaretRangeFromPoint = function (e) {
    if (!e.caretRangeFromPoint)
      if (e.caretPositionFromPoint)
        e.caretRangeFromPoint = function (t, n) {
          var r = e.createRange(), i = e.caretPositionFromPoint(t, n);
          return i ? (i.offsetNode && (r.setStart(i.offsetNode, i.offset), r.setEnd(i.offsetNode, i.offset)), r) : null;
        };
      else if ((e.body || e.createElement('body')).createTextRange) {
        var t = {
          convertToDOMRange: function (e, t) {
            var n = function (e, n, r) {
                var i = t.createElement('a'), o = n.duplicate();
                o.collapse(r);
                var a = o.parentElement();
                do {
                  a.insertBefore(i, i.previousSibling), o.moveToElementText(i);
                } while (o.compareEndPoints(r ? 'StartToStart' : 'StartToEnd', n) > 0 && i.previousSibling);
                -1 == o.compareEndPoints(r ? 'StartToStart' : 'StartToEnd', n) && i.nextSibling ? (o.setEndPoint(r ? 'EndToStart' : 'EndToEnd', n), e[r ? 'setStart' : 'setEnd'](i.nextSibling, o.text.length)) : e[r ? 'setStartBefore' : 'setEndBefore'](i), i.parentNode.removeChild(i);
              }, r = t.createRange();
            return n(r, e, !0), n(r, e, !1), r;
          }
        };
        e.caretRangeFromPoint = function (n, r) {
          for (var i = e.body.createTextRange(), o = 40; o; o -= 4)
            try {
              return i.moveToPoint(n, o + r - 40), t.convertToDOMRange(i, e);
            } catch (e) {
            }
          try {
            var a = e.elementFromPoint(n - 1, r - 1), s = e.createRange();
            return s.setStartAfter(a), s;
          } catch (e) {
            return null;
          }
        };
      }
  }, a;
}(_readium_shared_js_globals, _underscore, _jquery, _jquerySizes, _readium_shared_js_models_spine_item, _URIjs), _readium_shared_js_plugins_controller = function (e, t, n) {
  function r(e, t) {
    this.reader = e, this.plugin = t;
  }
  function i(e) {
    this.create = function (t) {
      return {
        host: e,
        instance: new r(e, t)
      };
    };
  }
  function o(e, t, n) {
    this.name = e, this.dependencies = t, this.initialized = !1, this.supported = !1, this.initializer = n;
  }
  var a = {}, s = function () {
      this.initialize = function (e) {
        var n = new i(e);
        if (e.plugins)
          throw new Error('Already initialized on reader!');
        e.plugins = {}, t.each(a, function (e) {
          e.init(n);
        });
      }, this.getLoadedPlugins = function () {
        return a;
      }, this.register = function (t, r, i) {
        if (a[t])
          throw new Error('Duplicate registration for plugin with name: ' + t);
        var s;
        'function' == typeof r ? i = r : s = r, a[t] = new o(t, s, function (t, r) {
          if (!t.initialized || !r.host.plugins[t.name]) {
            t.initialized = !0;
            try {
              var o = {};
              e.extend(o, new n()), i.call(o, r.instance), t.supported = !0, r.host.plugins[t.name] = o;
            } catch (e) {
              t.fail(e);
            }
          }
        });
      };
    };
  return o.prototype = {
    init: function (e) {
      for (var t, n, r = this.dependencies || [], i = 0, s = r.length; i < s; ++i) {
        if (n = r[i], !((t = a[n]) && t instanceof o))
          throw new Error('required Plugin \'' + n + '\' not found');
        if (t.init(e), !t.supported)
          throw new Error('required Plugin \'' + n + '\' not supported');
      }
      this.initializer(this, e.create(this));
    },
    fail: function (e) {
      throw this.initialized = !0, this.supported = !1, new Error('Plugin \'' + this.name + '\' failed to load: ' + e);
    },
    warn: function (e) {
      console.warn('Plugin ' + this.name + ': ' + e);
    },
    deprecationNotice: function (e, t) {
      console.warn('DEPRECATED: ' + e + ' in Plugin ' + this.name + 'is deprecated. Please use ' + t + ' instead');
    },
    createError: function (e) {
      return new Error('Error in ' + this.name + ' Plugin: ' + e);
    }
  }, new s();
}(_jquery, _underscore, _eventEmitter), _readium_shared_js_models_bookmark_data = function () {
  var e = function (e, t) {
    var n = this;
    this.idref = e, this.contentCFI = t, this.toString = function () {
      return JSON.stringify(n);
    };
  };
  return e.fromString = function (t) {
    var n = JSON.parse(t);
    return new e(n.idref, n.contentCFI);
  }, e;
}(), _readium_shared_js_models_current_pages_info = function (e, t) {
  this.isRightToLeft = e.isRightToLeft(), this.isFixedLayout = t, this.spineItemCount = e.items.length, this.openPages = [], this.addOpenPage = function (e, t, n, r) {
    this.openPages.push({
      spineItemPageIndex: e,
      spineItemPageCount: t,
      idref: n,
      spineItemIndex: r
    }), this.sort();
  }, this.canGoLeft = function () {
    return this.isRightToLeft ? this.canGoNext() : this.canGoPrev();
  }, this.canGoRight = function () {
    return this.isRightToLeft ? this.canGoPrev() : this.canGoNext();
  }, this.canGoNext = function () {
    if (0 == this.openPages.length)
      return !1;
    var t = this.openPages[this.openPages.length - 1];
    return t.spineItemIndex < e.last().index || t.spineItemPageIndex < t.spineItemPageCount - 1;
  }, this.canGoPrev = function () {
    if (0 == this.openPages.length)
      return !1;
    var t = this.openPages[0];
    return e.first().index < t.spineItemIndex || 0 < t.spineItemPageIndex;
  }, this.sort = function () {
    this.openPages.sort(function (e, t) {
      return e.spineItemIndex != t.spineItemIndex ? e.spineItemIndex - t.spineItemIndex : e.spineItemPageIndex - t.spineItemPageIndex;
    });
  };
}, _readium_shared_js_models_fixed_page_spread = function () {
  var e = function (t, n) {
    function r() {
      s.leftItem = void 0, s.rightItem = void 0, s.centerItem = void 0;
    }
    function i(t, n) {
      n == e.POSITION_LEFT ? s.leftItem = t : n == e.POSITION_RIGHT ? s.rightItem = t : (n != e.POSITION_CENTER && console.error('Unrecognized position value'), s.centerItem = t);
    }
    function o(t) {
      return u ? t.isLeftPage() ? e.POSITION_LEFT : t.isRightPage() ? e.POSITION_RIGHT : e.POSITION_CENTER : e.POSITION_CENTER;
    }
    function a(e) {
      return e.isLeftPage() ? s.spine.isRightToLeft() ? s.spine.prevItem(e) : s.spine.nextItem(e) : e.isRightPage() ? s.spine.isRightToLeft() ? s.spine.nextItem(e) : s.spine.prevItem(e) : void 0;
    }
    var s = this;
    this.spine = t, this.leftItem = void 0, this.rightItem = void 0, this.centerItem = void 0;
    var u = n;
    this.setSyntheticSpread = function (e) {
      u = e;
    }, this.isSyntheticSpread = function () {
      return u;
    }, this.openFirst = function () {
      0 == this.spine.items.length ? r() : this.openItem(this.spine.first());
    }, this.openLast = function () {
      0 == this.spine.items.length ? r() : this.openItem(this.spine.last());
    }, this.openItem = function (t) {
      r();
      var n = o(t);
      if (i(t, n), n != e.POSITION_CENTER && this.spine.isValidLinearItem(t.index)) {
        var s = a(t);
        if (s) {
          var u = o(s);
          u != n && u != e.POSITION_CENTER && !s.isReflowable() && s.isRenditionSpreadAllowed() && i(s, u);
        }
      }
    }, this.openNext = function () {
      var e = this.validItems();
      if (0 == e.length)
        this.openFirst();
      else {
        var t = this.spine.nextItem(e[e.length - 1]);
        t && this.openItem(t);
      }
    }, this.openPrev = function () {
      var e = this.validItems();
      if (0 == e.length)
        this.openLast();
      else {
        var t = this.spine.prevItem(e[0]);
        t && this.openItem(t);
      }
    }, this.validItems = function () {
      var e = [];
      return this.leftItem && e.push(this.leftItem), this.rightItem && e.push(this.rightItem), this.centerItem && e.push(this.centerItem), e.sort(function (e, t) {
        return e.index - t.index;
      }), e;
    };
  };
  return e.POSITION_LEFT = 'left', e.POSITION_RIGHT = 'right', e.POSITION_CENTER = 'center', e;
}(), _readium_shared_js_models_smil_model = function (e) {
  var t = {};
  t.SmilNode = function (e) {
    this.parent = e, this.id = '', this.getSmil = function () {
      for (var e = this; e.parent;)
        e = e.parent;
      return e;
    }, this.hasAncestor = function (e) {
      for (var t = this.parent; t;) {
        if (t == e)
          return !0;
        t = t.parent;
      }
      return !1;
    };
  }, t.TimeContainerNode = function (e) {
    this.parent = e, this.children = void 0, this.index = void 0, this.epubtype = '', this.isEscapable = function (e) {
      if ('' === this.epubtype)
        return !1;
      var t = this.getSmil();
      if (!t.mo)
        return !1;
      var n = t.mo.escapables;
      e.length > 0 && (n = e);
      for (var r = 0; r < n.length; r++)
        if (this.epubtype.indexOf(n[r]) >= 0)
          return !0;
      return !1;
    }, this.isSkippable = function (e) {
      if ('' === this.epubtype)
        return !1;
      var t = this.getSmil();
      if (!t.mo)
        return !1;
      var n = t.mo.skippables;
      e.length > 0 && (n = e);
      for (var r = 0; r < n.length; r++)
        if (this.epubtype.indexOf(n[r]) >= 0)
          return !0;
      return !1;
    };
  }, t.TimeContainerNode.prototype = new t.SmilNode(), t.MediaNode = function (e) {
    this.parent = e, this.src = '';
  }, t.MediaNode.prototype = new t.SmilNode(), t.SeqNode = function (e) {
    this.parent = e, this.children = [], this.nodeType = 'seq', this.textref = '', this.durationMilliseconds = function () {
      for (var e = this.getSmil(), t = 0, n = 0; n < this.children.length; n++) {
        var r = this.children[n];
        if ('par' === r.nodeType) {
          if (!r.audio)
            continue;
          if (r.text && (!r.text.manifestItemId || r.text.manifestItemId != e.spineItemId))
            continue;
          t += r.audio.clipDurationMilliseconds();
        } else
          'seq' === r.nodeType && (t += r.durationMilliseconds());
      }
      return t;
    }, this.clipOffset = function (e, t) {
      for (var n = this.getSmil(), r = 0; r < this.children.length; r++) {
        var i = this.children[r];
        if ('par' === i.nodeType) {
          if (i == t)
            return !0;
          if (!i.audio)
            continue;
          if (i.text && (!i.text.manifestItemId || i.text.manifestItemId != n.spineItemId))
            continue;
          var o = i.audio.clipDurationMilliseconds();
          e.offset += o;
        } else if ('seq' === i.nodeType) {
          var a = i.clipOffset(e, t);
          if (a)
            return !0;
        }
      }
      return !1;
    }, this.parallelAt = function (e) {
      for (var t = this.getSmil(), n = 0, r = 0; r < this.children.length; r++) {
        var i = e - n, o = this.children[r];
        if ('par' === o.nodeType) {
          if (!o.audio)
            continue;
          if (o.text && (!o.text.manifestItemId || o.text.manifestItemId != t.spineItemId))
            continue;
          var a = o.audio.clipDurationMilliseconds();
          if (a > 0 && i <= a)
            return o;
          n += a;
        } else if ('seq' === o.nodeType) {
          var s = o.parallelAt(i);
          if (s)
            return s;
          n += o.durationMilliseconds();
        }
      }
    }, this.nthParallel = function (e, t) {
      for (var n = 0; n < this.children.length; n++) {
        var r = this.children[n];
        if ('par' === r.nodeType) {
          if (++t.count == e)
            return r;
        } else if ('seq' === r.nodeType) {
          var i = r.nthParallel(e, t);
          if (i)
            return i;
        }
      }
    };
  }, t.SeqNode.prototype = new t.TimeContainerNode(), t.ParNode = function (e) {
    this.parent = e, this.children = [], this.nodeType = 'par', this.text = void 0, this.audio = void 0, this.element = void 0, this.getFirstSeqAncestorWithEpubType = function (e, t) {
      if (e)
        for (var n = t ? this : this.parent; n;) {
          if (n.epubtype && n.epubtype.indexOf(e) >= 0)
            return n;
          n = n.parent;
        }
    };
  }, t.ParNode.prototype = new t.TimeContainerNode(), t.TextNode = function (t) {
    this.parent = t, this.nodeType = 'text', this.srcFile = '', this.srcFragmentId = '', this.manifestItemId = void 0, this.updateMediaManifestItemId = function () {
      var t = this.getSmil();
      if (t.href && t.href.length) {
        for (var n = this.srcFile ? this.srcFile : this.src, r = e.ResolveContentRef(n, t.href), i = t.mo.package.resolveRelativeUrlMO(r), o = 0; o < t.mo.package.spine.items.length; o++) {
          var a = t.mo.package.spine.items[o];
          if (t.mo.package.resolveRelativeUrl(a.href) === i)
            return void (this.manifestItemId = a.idref);
        }
        console.error('Cannot set the Media ManifestItemId? ' + this.src + ' && ' + t.href);
      }
    };
  }, t.TextNode.prototype = new t.MediaNode(), t.AudioNode = function (e) {
    this.parent = e, this.nodeType = 'audio', this.clipBegin = 0, this.MAX = 1234567890.1, this.clipEnd = this.MAX, this.clipDurationMilliseconds = function () {
      var e = 1000 * this.clipBegin, t = 1000 * this.clipEnd;
      return this.clipEnd >= this.MAX || t <= e ? 0 : t - e;
    };
  }, t.AudioNode.prototype = new t.MediaNode();
  var n = function () {
    this.parent = void 0, this.children = [], this.id = void 0, this.href = void 0, this.duration = void 0, this.mo = void 0, this.parallelAt = function (e) {
      return this.children[0].parallelAt(e);
    }, this.nthParallel = function (e) {
      var t = { count: -1 };
      return this.children[0].nthParallel(e, t);
    }, this.clipOffset = function (e) {
      var t = { offset: 0 };
      return this.children[0].clipOffset(t, e) ? t.offset : 0;
    }, this.durationMilliseconds_Calculated = function () {
      return this.children[0].durationMilliseconds();
    };
    var e = [];
    this.hasSync = function (t) {
      for (var n = 0; n < e.length; n++)
        if (e[n] === t)
          return !0;
      return !1;
    }, this.addSync = function (t) {
      if (t)
        for (var n = t.split(' '), r = 0; r < n.length; r++) {
          var i = n[r].trim();
          i.length > 0 && !this.hasSync(i) && e.push(i);
        }
    };
  };
  return n.fromSmilDTO = function (e, r) {
    r.DEBUG && console.debug('Media Overlay DTO import...');
    var i = 0, o = function () {
        for (var e = '', t = 0; t < i; t++)
          e += '   ';
        return e;
      }, a = new n();
    a.id = e.id, a.spineItemId = e.spineItemId, a.href = e.href, a.smilVersion = e.smilVersion, a.duration = e.duration, a.duration && a.duration.length && a.duration.length > 0 && (console.error('SMIL duration is string, parsing float... (' + a.duration + ')'), a.duration = parseFloat(a.duration)), a.mo = r, a.mo.DEBUG && (console.log('JS MO smilVersion=' + a.smilVersion), console.log('JS MO id=' + a.id), console.log('JS MO spineItemId=' + a.spineItemId), console.log('JS MO href=' + a.href), console.log('JS MO duration=' + a.duration));
    var s = function (e, t, n, r) {
        e in t ? (e in n || console.debug('property ' + e + ' not declared in smil node ' + n.nodeType), n[e] = t[e], a.mo.DEBUG && console.log(o() + 'JS MO: [' + e + '=' + n[e] + ']')) : r && console.log('Required property ' + e + ' not found in smil node ' + t.nodeType);
      }, u = function (e, n) {
        var r;
        if ('seq' == e.nodeType)
          a.mo.DEBUG && console.log(o() + 'JS MO seq'), r = new t.SeqNode(n), s('textref', e, r, !(!n || !n.parent)), s('id', e, r), s('epubtype', e, r), r.epubtype && r.getSmil().addSync(r.epubtype), i++, l(e, r), i--;
        else if ('par' == e.nodeType) {
          a.mo.DEBUG && console.log(o() + 'JS MO par'), r = new t.ParNode(n), s('id', e, r), s('epubtype', e, r), r.epubtype && r.getSmil().addSync(r.epubtype), i++, l(e, r), i--;
          for (var u = 0, c = r.children.length; u < c; u++) {
            var f = r.children[u];
            'text' == f.nodeType ? r.text = f : 'audio' == f.nodeType ? r.audio = f : console.error('Unexpected smil node type: ' + f.nodeType);
          }
          if (!r.audio) {
            var d = new t.AudioNode(r);
            d.clipBegin = 0, d.clipEnd = d.MAX, d.src = void 0, r.audio = d;
          }
        } else if ('text' == e.nodeType)
          a.mo.DEBUG && console.log(o() + 'JS MO text'), r = new t.TextNode(n), s('src', e, r, !0), s('srcFile', e, r, !0), s('srcFragmentId', e, r, !1), s('id', e, r), r.updateMediaManifestItemId();
        else {
          if ('audio' != e.nodeType)
            return void console.error('Unexpected smil node type: ' + e.nodeType);
          a.mo.DEBUG && console.log(o() + 'JS MO audio'), r = new t.AudioNode(n), s('src', e, r, !0), s('id', e, r), s('clipBegin', e, r), r.clipBegin && r.clipBegin.length && r.clipBegin.length > 0 && (console.error('SMIL clipBegin is string, parsing float... (' + r.clipBegin + ')'), r.clipBegin = parseFloat(r.clipBegin)), r.clipBegin < 0 && (a.mo.DEBUG && console.log(o() + 'JS MO clipBegin adjusted to ZERO'), r.clipBegin = 0), s('clipEnd', e, r), r.clipEnd && r.clipEnd.length && r.clipEnd.length > 0 && (console.error('SMIL clipEnd is string, parsing float... (' + r.clipEnd + ')'), r.clipEnd = parseFloat(r.clipEnd)), r.clipEnd <= r.clipBegin && (a.mo.DEBUG && console.log(o() + 'JS MO clipEnd adjusted to MAX'), r.clipEnd = r.MAX);
        }
        return r;
      }, l = function (e, t) {
        for (var n = e.children.length, r = 0; r < n; r++) {
          var i = u(e.children[r], t);
          i.index = r, t.children.push(i);
        }
      };
    return l(e, a), a;
  }, n;
}(_readium_shared_js_helpers), _readium_shared_js_models_media_overlay = function (e) {
  var t = function (e) {
    this.package = e, this.parallelAt = function (e) {
      for (var t = 0, n = 0; n < this.smil_models.length; n++) {
        var r = this.smil_models[n], i = e - t, o = r.parallelAt(i);
        if (o)
          return o;
        t += r.durationMilliseconds_Calculated();
      }
    }, this.percentToPosition = function (e, t, n, r) {
      (e < 0 || e > 100) && (e = 0);
      var i = this.durationMilliseconds_Calculated(), o = i * (e / 100);
      if (n.par = this.parallelAt(o), n.par) {
        var a = n.par.getSmil();
        if (a) {
          for (var s = 0, u = 0; u < this.smil_models.length && (t.smilData = this.smil_models[u], t.smilData != a); u++)
            s += t.smilData.durationMilliseconds_Calculated();
          r.milliseconds = o - (s + t.smilData.clipOffset(n.par));
        }
      }
    }, this.durationMilliseconds_Calculated = function () {
      for (var e = 0, t = 0; t < this.smil_models.length; t++) {
        e += this.smil_models[t].durationMilliseconds_Calculated();
      }
      return e;
    }, this.smilAt = function (e) {
      if (!(e < 0 || e >= this.smil_models.length))
        return this.smil_models[e];
    }, this.positionToPercent = function (e, t, n) {
      if (e >= this.smil_models.length)
        return -1;
      for (var r = 0, i = 0; i < e; i++) {
        r += this.smil_models[i].durationMilliseconds_Calculated();
      }
      var o = this.smil_models[e], a = o.nthParallel(t);
      return a ? (r + o.clipOffset(a) + n) / this.durationMilliseconds_Calculated() * 100 : -1;
    }, this.smil_models = [], this.skippables = [], this.escapables = [], this.duration = void 0, this.narrator = void 0, this.activeClass = void 0, this.playbackActiveClass = void 0, this.DEBUG = !1, this.getSmilBySpineItem = function (e) {
      if (e)
        for (var t = 0, n = this.smil_models.length; t < n; t++) {
          var r = this.smil_models[t];
          if (r.spineItemId === e.idref)
            return e.media_overlay_id !== r.id && console.error('SMIL INCORRECT ID?? ' + e.media_overlay_id + ' /// ' + r.id), r;
        }
    }, this.getNextSmil = function (e) {
      var t = this.smil_models.indexOf(e);
      if (-1 != t && t != this.smil_models.length - 1)
        return this.smil_models[t + 1];
    }, this.getPreviousSmil = function (e) {
      var t = this.smil_models.indexOf(e);
      if (-1 != t && 0 != t)
        return this.smil_models[t - 1];
    };
  };
  return t.fromDTO = function (n, r) {
    var i = new t(r);
    if (!n)
      return i;
    i.duration = n.duration, i.duration && i.duration.length && i.duration.length > 0 && (console.error('SMIL total duration is string, parsing float... (' + i.duration + ')'), i.duration = parseFloat(i.duration)), i.DEBUG && console.debug('Media Overlay Duration (TOTAL): ' + i.duration), i.narrator = n.narrator, i.DEBUG && console.debug('Media Overlay Narrator: ' + i.narrator), i.activeClass = n.activeClass, i.DEBUG && console.debug('Media Overlay Active-Class: ' + i.activeClass), i.playbackActiveClass = n.playbackActiveClass, i.DEBUG && console.debug('Media Overlay Playback-Active-Class: ' + i.playbackActiveClass);
    var o = n.smil_models.length;
    i.DEBUG && console.debug('Media Overlay SMIL count: ' + o);
    for (var a = 0; a < o; a++) {
      var s = e.fromSmilDTO(n.smil_models[a], i);
      i.smil_models.push(s), i.DEBUG && console.debug('Media Overlay Duration (SPINE ITEM): ' + s.duration);
    }
    o = n.skippables.length, i.DEBUG && console.debug('Media Overlay SKIPPABLES count: ' + o);
    for (var a = 0; a < o; a++)
      i.skippables.push(n.skippables[a]);
    o = n.escapables.length, i.DEBUG && console.debug('Media Overlay ESCAPABLES count: ' + o);
    for (var a = 0; a < o; a++)
      i.escapables.push(n.escapables[a]);
    return i;
  }, t;
}(_readium_shared_js_models_smil_model), _readium_shared_js_models_metadata = function (e) {
  this.identifier = void 0, this.title = void 0, this.author = void 0, this.description = void 0, this.publisher = void 0, this.language = void 0, this.rights = void 0, this.modifiedDate = void 0, this.publishedDate = void 0, this.epubVersion = void 0, e && (this.identifier = e.id, this.title = e.title, this.author = e.author, this.description = e.description, this.language = e.language, this.publisher = e.publisher, this.rights = e.rights, this.modifiedDate = e.modified_date, this.publishedDate = e.pubdate, this.epubVersion = e.epub_version);
}, _readium_shared_js_models_node_range_info = function () {
  var e = function (e, t) {
    this.node = e, this.offset = t;
  };
  return function (t, n, r) {
    var i = this;
    this.clientRect = t, this.startInfo = n, this.endInfo = r, this.setStartInfo = function (t) {
      return i.startInfo = new e(t), i;
    }, this.setEndInfo = function (t) {
      return i.endInfo = new e(t), i;
    };
  };
}(), _readium_shared_js_models_spine = function (e, t, n) {
  return function (t, r) {
    function i(e) {
      return !l || 'no' !== e.linear;
    }
    function o(e) {
      return e >= 0 && e < u.items.length;
    }
    function a(e) {
      if (o(e)) {
        var t = u.items[e];
        return i(t) ? t : a(t.index - 1);
      }
    }
    function s(e) {
      if (o(e)) {
        var t = u.items[e];
        return i(t) ? t : s(t.index + 1);
      }
    }
    var u = this;
    this.items = [], this.direction = 'ltr', this.package = t;
    var l = !1;
    if (this.handleLinear = function (e) {
        l = e;
      }, this.isValidLinearItem = function (e) {
        if (o(e))
          return i(this.item(e));
      }, this.isRightToLeft = function () {
        return 'rtl' == u.direction;
      }, this.isLeftToRight = function () {
        return !u.isRightToLeft();
      }, this.prevItem = function (e) {
        return a(e.index - 1);
      }, this.nextItem = function (e) {
        return s(e.index + 1);
      }, this.getItemUrl = function (e) {
        return u.package.resolveRelativeUrl(e.href);
      }, this.first = function () {
        return s(0);
      }, this.last = function () {
        return a(this.items.length - 1);
      }, this.isFirstItem = function (e) {
        return u.first() === e;
      }, this.isLastItem = function (e) {
        return u.last() === e;
      }, this.item = function (e) {
        if (o(e))
          return u.items[e];
      }, this.getItemById = function (e) {
        for (var t = u.items.length, n = 0; n < t; n++)
          if (u.items[n].idref == e)
            return u.items[n];
      }, this.getItemByHref = function (e) {
        var t = u.package.resolveRelativeUrl(e);
        t = t.replace('filesystem:chrome-extension://', 'filesystem-chrome-extension://');
        for (var r = new n(t).normalizePathname().pathname(), i = u.items.length, o = 0; o < i; o++) {
          var a = u.package.resolveRelativeUrl(u.items[o].href);
          a = a.replace('filesystem:chrome-extension://', 'filesystem-chrome-extension://');
          if (r == new n(a).normalizePathname().pathname())
            return u.items[o];
        }
      }, r) {
      r.direction && (this.direction = r.direction);
      for (var c = r.items.length, f = 0; f < c; f++) {
        var d = new e(r.items[f], f, this);
        this.items.push(d);
      }
      !function () {
        for (var t = u.items.length, n = !1, r = u.isLeftToRight() ? e.SPREAD_LEFT : e.SPREAD_RIGHT, i = 0; i < t; i++) {
          var o = u.items[i];
          if (!o.page_spread) {
            var a = o.isRenditionSpreadAllowed() ? n ? r : e.alternateSpread(r) : e.SPREAD_CENTER;
            o.setSpread(a);
          }
          n = !o.isRenditionSpreadAllowed() || o.page_spread != r;
        }
      }();
    }
  };
}(_readium_shared_js_models_spine_item, _readium_shared_js_helpers, _URIjs), _readium_shared_js_models_package_data = {
  rootUrl: '',
  rootUrlMO: '',
  rendering_layout: '',
  spine: {
    direction: 'ltr',
    items: [{
        href: '',
        idref: '',
        page_spread: '',
        rendering_layout: ''
      }]
  }
}, _readium_shared_js_models_package = function (e, t, n, r, i, o) {
  return function (i) {
    var a = this;
    this.spine = void 0, this.rootUrl = void 0, this.rootUrlMO = void 0, this.media_overlay = void 0, this.rendition_viewport = void 0, this.rendition_flow = void 0, this.rendition_layout = void 0, this.rendition_spread = void 0, this.rendition_orientation = void 0, this.resolveRelativeUrlMO = function (t) {
      var n = void 0;
      try {
        n = new o(t);
      } catch (e) {
        console.error(e), console.log(t);
      }
      if (n && n.is('absolute'))
        return t;
      if (a.rootUrlMO && a.rootUrlMO.length > 0) {
        var r = a.rootUrlMO;
        try {
          r = new o(r).search('').hash('').toString();
        } catch (e) {
          console.error(e), console.log(r);
        }
        return e.EndsWith(r, '/') ? r + t : r + '/' + t;
      }
      return a.resolveRelativeUrl(t);
    }, this.resolveRelativeUrl = function (t) {
      var n = void 0;
      try {
        n = new o(t);
      } catch (e) {
        console.error(e), console.log(t);
      }
      if (n && n.is('absolute'))
        return t;
      if (a.rootUrl) {
        var r = a.rootUrl;
        try {
          r = new o(r).search('').hash('').toString();
        } catch (e) {
          console.error(e), console.log(r);
        }
        return e.EndsWith(r, '/') ? r + t : r + '/' + t;
      }
      return t;
    }, this.isFixedLayout = function () {
      return a.rendition_layout === t.RENDITION_LAYOUT_PREPAGINATED;
    }, this.isReflowable = function () {
      return !a.isFixedLayout();
    }, i && (this.rootUrl = i.rootUrl, this.rootUrlMO = i.rootUrlMO, this.rendition_viewport = i.rendition_viewport, this.rendition_layout = i.rendition_layout, this.rendition_flow = i.rendition_flow, this.rendition_orientation = i.rendition_orientation, this.rendition_spread = i.rendition_spread, this.spine = new n(this, i.spine), this.media_overlay = r.fromDTO(i.media_overlay, this));
  };
}(_readium_shared_js_helpers, _readium_shared_js_models_spine_item, _readium_shared_js_models_spine, _readium_shared_js_models_media_overlay, _readium_shared_js_models_package_data, _URIjs), _readium_shared_js_models_page_open_request = function (e, t) {
  this.spineItem = e, this.spineItemPageIndex = void 0, this.elementId = void 0, this.elementCfi = void 0, this.firstVisibleCfi = void 0, this.lastVisibleCfi = void 0, this.firstPage = !1, this.lastPage = !1, this.initiator = t, this.reset = function () {
    this.spineItemPageIndex = void 0, this.elementId = void 0, this.elementCfi = void 0, this.firstPage = !1, this.lastPage = !1;
  }, this.setFirstPage = function () {
    this.reset(), this.firstPage = !0;
  }, this.setLastPage = function () {
    this.reset(), this.lastPage = !0;
  }, this.setPageIndex = function (e) {
    this.reset(), this.spineItemPageIndex = e;
  }, this.setElementId = function (e) {
    this.reset(), this.elementId = e;
  }, this.setElementCfi = function (e) {
    this.reset(), this.elementCfi = e;
  }, this.setFirstAndLastVisibleCfi = function (e, t) {
    this.reset(), this.firstVisibleCfi = e, this.lastVisibleCfi = t;
  };
}, _readium_shared_js_models_smil_iterator = function (e, t) {
  return function (n) {
    function r(e, t, n) {
      for (var i = e, o = t.children.length; i >= 0 && i < o; i += n ? -1 : 1) {
        var a = t.children[i];
        if ('par' == a.nodeType)
          return a;
        if (a = r(n ? a.children.length - 1 : 0, a, n))
          return a;
      }
      if (t.parent)
        return r(t.index + (n ? -1 : 1), t.parent, n);
    }
    this.smil = n, this.currentPar = void 0, this.reset = function () {
      this.currentPar = r(0, this.smil, !1);
    }, this.findTextId = function (n) {
      if (!this.currentPar)
        return void console.debug('Par iterator is out of range');
      if (!n)
        return !1;
      for (; this.currentPar;) {
        if (this.currentPar.element) {
          if (n === this.currentPar.text.srcFragmentId)
            return !0;
          for (var r = this.currentPar.element.parentNode; r;) {
            if (r.id && r.id == n)
              return !0;
            r = r.parentNode;
          }
          var i = e('#' + t.escapeJQuerySelector(n), this.currentPar.element);
          if (i && i.length && i[0])
            return !0;
        }
        this.next();
      }
      return !1;
    }, this.next = function () {
      if (!this.currentPar)
        return void console.debug('Par iterator is out of range');
      this.currentPar = r(this.currentPar.index + 1, this.currentPar.parent, !1);
    }, this.previous = function () {
      if (!this.currentPar)
        return void console.debug('Par iterator is out of range');
      this.currentPar = r(this.currentPar.index - 1, this.currentPar.parent, !0);
    }, this.isLast = function () {
      return this.currentPar ? !r(this.currentPar.index + 1, this.currentPar.parent, !1) : void console.debug('Par iterator is out of range');
    }, this.goToPar = function (e) {
      for (; this.currentPar && this.currentPar != e;)
        this.next();
    }, this.reset();
  };
}(_jquery, _readium_shared_js_helpers), _readium_shared_js_models_style = function (e, t) {
  this.selector = e, this.declarations = t, this.setDeclarations = function (e) {
    for (var t in e)
      e.hasOwnProperty(t) && (this.declarations[t] = e[t]);
  };
}, _readium_shared_js_models_style_collection = function (e) {
  return function () {
    var t = [];
    this.clear = function () {
      t.length = 0;
    }, this.findStyle = function (e) {
      for (var n = t.length, r = 0; r < n; r++)
        if (t[r].selector === e)
          return t[r];
    }, this.addStyle = function (n, r) {
      var i = this.findStyle(n);
      return i ? i.setDeclarations(r) : (i = new e(n, r), t.push(i)), i;
    }, this.removeStyle = function (e) {
      for (var n = t.length, r = 0; r < n; r++)
        if (t[r].selector === e)
          return void t.splice(r, 1);
    }, this.getStyles = function () {
      return t;
    }, this.resetStyleValues = function () {
      for (var e = t.length, n = 0; n < e; n++) {
        var r = t[n], i = r.declarations;
        for (var o in i)
          i.hasOwnProperty(o) && (i[o] = '');
      }
    };
  };
}(_readium_shared_js_models_style), _readium_shared_js_models_switches = function (e, t) {
  var n = function () {
  };
  return n.apply = function (n) {
    function r(e) {
      var n = e.attributes['required-namespace'];
      if (!n)
        return console.log('Encountered a case statement with no required-namespace'), !1;
      var r = ['http://www.w3.org/1998/Math/MathML'];
      return t.include(r, n.value);
    }
    var i = window.navigator.userAgent.indexOf('Trident') > 0 || window.navigator.userAgent.indexOf('Edge') > 0 ? function (e) {
      return 'epub\\:' + e;
    } : function (e) {
      return e;
    };
    t.each(n.querySelectorAll(i('switch')), function (n) {
      var o = !1;
      t.each(n.querySelectorAll(i('case')), function (t) {
        !o && r(t) ? o = !0 : e(t).remove();
      }), o && t.each(n.querySelectorAll(i('default')), function (t) {
        e(t).remove();
      });
    });
  }, n;
}(_jquery, _underscore), _readium_shared_js_models_trigger = function (e, t) {
  var n = function (t) {
    var n = e(t);
    this.action = n.attr('action'), this.ref = n.attr('ref'), this.event = n.attr('ev:event'), this.observer = n.attr('ev:observer'), this.ref = n.attr('ref');
  };
  return n.register = function (t) {
    e('trigger', t).each(function () {
      new n(this).subscribe(t);
    });
  }, n.prototype.subscribe = function (t) {
    var n = '#' + this.observer, r = this;
    e(n, t).on(this.event, function () {
      return r.execute(t);
    });
  }, n.prototype.execute = function (n) {
    var r = e('#' + t.escapeJQuerySelector(this.ref), n);
    switch (this.action) {
    case 'show':
      r.css('visibility', 'visible');
      break;
    case 'hide':
      r.css('visibility', 'hidden');
      break;
    case 'play':
      r[0].currentTime = 0, r[0].play();
      break;
    case 'pause':
      r[0].pause();
      break;
    case 'resume':
      r[0].play();
      break;
    case 'mute':
      r[0].muted = !0;
      break;
    case 'unmute':
      r[0].muted = !1;
      break;
    default:
      return console.log('do not no how to handle trigger ' + this.action), null;
    }
    return !1;
  }, n;
}(_jquery, _readium_shared_js_helpers), _readium_shared_js_models_viewer_settings = function (e) {
  function t(e) {
    for (var t = [], n = e.split(/[\s,;]+/), r = 0; r < n.length; r++) {
      var i = n[r].trim();
      '' !== i && t.push(i);
    }
    return t;
  }
  function n(e, t, n) {
    void 0 !== t[e] && (r[e] = n ? n(t[e]) : t[e]);
  }
  var r = this;
  this.syntheticSpread = 'auto', this.fontSelection = 0, this.fontSize = 100, this.columnGap = 20, this.columnMaxWidth = 700, this.columnMinWidth = 400, this.mediaOverlaysPreservePlaybackWhenScroll = !1, this.mediaOverlaysSkipSkippables = !1, this.mediaOverlaysEscapeEscapables = !0, this.mediaOverlaysSkippables = [], this.mediaOverlaysEscapables = [], this.mediaOverlaysEnableClick = !0, this.mediaOverlaysRate = 1, this.mediaOverlaysVolume = 100, this.mediaOverlaysSynchronizationGranularity = '', this.mediaOverlaysAutomaticPageTurn = !0, this.enableGPUHardwareAccelerationCSS3D = !1, this.pageTransition = -1, this.scroll = 'auto', this.update = function (e) {
    n('columnGap', e), n('columnMaxWidth', e), n('columnMinWidth', e), n('fontSize', e), n('fontSelection', e), n('mediaOverlaysPreservePlaybackWhenScroll', e), n('mediaOverlaysSkipSkippables', e), n('mediaOverlaysEscapeEscapables', e), n('mediaOverlaysSkippables', e, t), n('mediaOverlaysEscapables', e, t), n('mediaOverlaysEnableClick', e), n('mediaOverlaysRate', e), n('mediaOverlaysVolume', e), n('mediaOverlaysSynchronizationGranularity', e), n('mediaOverlaysAutomaticPageTurn', e), n('scroll', e), n('syntheticSpread', e), n('pageTransition', e), n('enableGPUHardwareAccelerationCSS3D', e);
  }, this.update(e);
}, _readium_shared_js_views_audio_player = function (e) {
  return function (t, n, r, i, o) {
    function a() {
      t({ isPlaying: !0 }), i();
    }
    function s() {
      o(), t({ isPlaying: !1 });
    }
    function u() {
      if (y.moSeeking)
        return void (v && console.debug('onEnded() skipped (still seeking...)'));
      c(), r(), t({ isPlaying: !1 });
    }
    function l() {
      S || (S = setInterval(function () {
        if (y.moSeeking)
          return void (++_ > 1000 && (_ = 0, c()));
        var e = void 0;
        try {
          e = y.currentTime;
        } catch (e) {
          console.error(e.message);
        }
        e && n(e, 1);
      }, 20));
    }
    function c() {
      S && clearInterval(S), S = void 0;
    }
    function f(e) {
      v && console.debug('onReadyToSeek #' + e.data.playId), p(e.data.seekBegin, e.data.playId, !0);
    }
    function d(t) {
      e(y).off(A, d), m ? (v && console.debug('onReadyToSeek ANDROID ... waiting a bit ... #' + t.data.playId), N(), setTimeout(function () {
        f(t);
      }, 1000)) : f(t);
    }
    function p(t, n, r) {
      if (v && console.debug('playSeekCurrentTime() #' + n), 0 == t && (t = 0.01), Math.abs(t - y.currentTime) < 0.3)
        return v && console.debug('playSeekCurrentTime() CONTINUE'), y.moSeeking = void 0, void b.play();
      var i = r ? R : k;
      v && console.debug('playSeekCurrentTime() NEED SEEK, EV: ' + i), b.pause(), e(y).on(i, {
        newCurrentTime: t,
        playId: n,
        isNewSrc: r
      }, h);
      try {
        y.currentTime = t;
      } catch (e) {
        console.error(e.message), setTimeout(function () {
          try {
            y.currentTime = t;
          } catch (e) {
            console.error(e.message);
          }
        }, 5);
      }
    }
    function h(t) {
      var n = t.data.isNewSrc ? R : k, r = void 0 == t.data.seekRetries;
      (r || t.data.seekRetries == D) && e(y).off(n, h), v && console.debug('onSeeked() #' + t.data.playId + ' FIRST? ' + r + ' EV: ' + n);
      var i = y.currentTime, o = Math.abs(t.data.newCurrentTime - i);
      if ((r || t.data.seekRetries >= 0) && o >= 1)
        v && console.debug('onSeeked() time diff: ' + t.data.newCurrentTime + ' vs. ' + i + ' (' + o + ')'), r && (t.data.seekRetries = D, t.data.isNewSrc = !1), t.data.seekRetries--, v && console.debug('onSeeked() FAIL => retry again (timeout)'), setTimeout(function () {
          h(t);
        }, m ? 1000 : 200), setTimeout(function () {
          y.pause();
          try {
            y.currentTime = t.data.newCurrentTime;
          } catch (e) {
            console.error(e.message), setTimeout(function () {
              try {
                y.currentTime = t.data.newCurrentTime;
              } catch (e) {
                console.error(e.message);
              }
            }, 4);
          }
        }, 5);
      else {
        if (v && (console.debug('onSeeked() STATE:'), console.debug(r), console.debug(t.data.seekRetries), console.debug(o)), o >= 1) {
          v && console.debug('onSeeked() ABORT, TRY AGAIN FROM SCRATCH!');
          var a = E, s = w, u = t.data.newCurrentTime;
          return b.reset(), void setTimeout(function () {
            b.playFile(a, s, u);
          }, 10);
        }
        v && console.debug('onSeeked() OKAY => play!'), t.data.seekRetries = void 0, b.play(), y.moSeeking = void 0;
      }
    }
    var g = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g), m = navigator.userAgent.toLowerCase().indexOf('android') > -1, v = !1, y = new Audio();
    v && (y.addEventListener('load', function () {
      console.debug('0) load');
    }), y.addEventListener('loadstart', function () {
      console.debug('1) loadstart');
    }), y.addEventListener('durationchange', function () {
      console.debug('2) durationchange');
    }), y.addEventListener('loadedmetadata', function () {
      console.debug('3) loadedmetadata');
    }), y.addEventListener('loadeddata', function () {
      console.debug('4) loadeddata');
    }), y.addEventListener('progress', function () {
      console.debug('5) progress');
    }), y.addEventListener('canplay', function () {
      console.debug('6) canplay');
    }), y.addEventListener('canplaythrough', function () {
      console.debug('7) canplaythrough');
    }), y.addEventListener('play', function () {
      console.debug('8) play');
    }), y.addEventListener('pause', function () {
      console.debug('9) pause');
    }), y.addEventListener('ended', function () {
      console.debug('10) ended');
    }), y.addEventListener('seeked', function () {
      console.debug('X) seeked');
    }), y.addEventListener('timeupdate', function () {
      console.debug('Y) timeupdate');
    }), y.addEventListener('seeking', function () {
      console.debug('Z) seeking');
    }));
    var b = this, w = void 0, E = void 0;
    this.currentSmilSrc = function () {
      return E;
    };
    var T = 1;
    this.setRate = function (e) {
      T = e, T < 0.5 && (T = 0.5), T > 4 && (T = 4), y.playbackRate = T;
    }, b.setRate(T), this.getRate = function () {
      return T;
    };
    var x = 1;
    this.setVolume = function (e) {
      x = e, x < 0 && (x = 0), x > 1 && (x = 1), y.volume = x;
    }, b.setVolume(x), this.getVolume = function () {
      return x;
    }, this.play = function () {
      return v && console.error('this.play()'), !!w && (l(), b.setVolume(x), b.setRate(T), y.play(), !0);
    }, this.pause = function () {
      v && console.error('this.pause()'), c(), y.pause();
    }, y.addEventListener('play', a, !1), y.addEventListener('pause', s, !1), y.addEventListener('ended', u, !1);
    var _ = 0, S = void 0;
    this.isPlaying = function () {
      return void 0 !== S;
    }, this.reset = function () {
      v && console.error('this.reset()'), this.pause(), y.moSeeking = void 0, E = void 0, w = void 0, setTimeout(function () {
        y.setAttribute('src', '');
      }, 1);
    }, y.addEventListener('loadstart', function () {
      C = !0;
    });
    var C = !1;
    this.touchInit = function () {
      return !!g && (!C && (C = !0, y.setAttribute('src', 'touch/init/html5/audio.mp3'), y.load(), !0));
    };
    var I = 0, O = 0;
    this.playFile = function (t, n, r) {
      ++I > 99999 && (I = 0);
      var i = I;
      return y.moSeeking ? ++O > D ? void (O = 0) : (v && console.debug('this.playFile(' + n + ') @' + r + ' (POSTPONE, SEEKING...)'), void setTimeout(function () {
        b.playFile(t, n, r);
      }, 20)) : (y.moSeeking = {}, v && console.debug('this.playFile(' + n + ') @' + r + ' #' + i), w && w === n ? (v && console.debug('this.playFile() SAME SRC'), this.pause(), E = t, w = n, void p(r, i, !1)) : (v && (console.debug('this.playFile() NEW SRC'), console.debug('_currentEpubSrc: ' + w), console.debug('epubSrc: ' + n)), this.reset(), y.moSeeking = {}, E = t, w = n, m || y.addEventListener('play', P, !1), e(y).on(A, {
        seekBegin: r,
        playId: i
      }, d), void setTimeout(function () {
        y.setAttribute('src', w), y.load(), m || N();
      }, 1)));
    };
    var N = function () {
        v && console.debug('playToForcePreload');
        var e = x;
        x = 0, b.play(), x = e;
      }, P = function () {
        y.removeEventListener('play', P, !1), v && console.debug('onPlayToForcePreload'), y.pause();
      }, A = m ? 'canplaythrough' : 'canplay', D = 10, R = g ? 'canplaythrough' : 'seeked', k = g ? 'timeupdate' : 'seeked';
  };
}(_jquery), _readium_shared_js_views_cfi_navigation_logic = function (e, t, n, r) {
  return function (i) {
    function o() {
      return ie.getRootDocument().createRange();
    }
    function a(e) {
      var t = o();
      return t.selectNodeContents(e), t;
    }
    function s(e) {
      var t = o();
      return t.selectNode(e), I(t.getBoundingClientRect(), 0, 0);
    }
    function u(e) {
      var t = o();
      return t.selectNodeContents(e), I(t.getBoundingClientRect(), 0, 0);
    }
    function l(e, t, n, r) {
      var i = o();
      return i.setStart(e, t || 0), n.nodeType === Node.ELEMENT_NODE ? i.setEnd(n, r || n.childNodes.length) : n.nodeType === Node.TEXT_NODE && i.setEnd(n, r || 0), i.collapsed ? I(i.getClientRects()[0], 0, 0) : I(i.getBoundingClientRect(), 0, 0);
    }
    function c(e, n) {
      return n = n || y(), t.map(e.getClientRects(), function (e) {
        return I(e, n.left, n.top);
      });
    }
    function f() {
      return i.frameDimensionsGetter ? i.frameDimensionsGetter() : (console.error('CfiNavigationLogic: No frame dimensions specified!'), null);
    }
    function d(e, t, r) {
      return r = r || ie.getRootDocument(), n.polyfillCaretRangeFromPoint(r), r.caretRangeFromPoint(e, t);
    }
    function p() {
      return !!i.paginationInfo;
    }
    function h() {
      return i.paginationInfo && !!i.paginationInfo.rightToLeft;
    }
    function g() {
      return i.paginationInfo && !!i.paginationInfo.isVerticalWritingMode;
    }
    function m(e, t, n) {
      return n = n || f(), !!e && ((0 != e.left || 0 != e.right || 0 != e.top || 0 != e.bottom) && (p() && !g() ? e.left >= 0 && e.left < n.width || !t && e.left < 0 && e.right > 0 : e.top >= 0 && e.top < n.height || !t && e.top < 0 && e.bottom > 0));
    }
    function v() {
      return !i.paginationInfo || g() ? i.$iframe.width() : i.paginationInfo.columnWidth + i.paginationInfo.columnGap;
    }
    function y() {
      return i.visibleContentOffsetsGetter ? i.visibleContentOffsetsGetter() : g() && i.paginationOffsetsGetter ? i.paginationOffsetsGetter() : {
        top: 0,
        left: 0
      };
    }
    function b() {
      return i.paginationOffsetsGetter ? i.paginationOffsetsGetter() : {
        top: 0,
        left: 0
      };
    }
    function w(e, t, n, r) {
      n = n || y(), r = r || f();
      var i = S(e, n);
      if (0 === i.length)
        return null;
      var o = 0;
      if (1 === i.length) {
        var a = i[0];
        p() && (a.bottom > r.height || a.top < 0) && N(a, !0, r), m(a, !1, r) && (o = t && a.top < 0 ? Math.floor(100 * (a.height + a.top) / a.height) : t && a.bottom > r.height ? Math.floor(100 * (r.height - a.top) / a.height) : t && a.left < 0 && a.right > 0 ? Math.floor(100 * a.right / a.width) : t && a.left < 0 && a.right > 0 ? Math.floor(100 * a.right / a.width) : 100);
      } else
        for (var s = 0, u = i.length; s < u; ++s)
          if (m(i[s], !1, r)) {
            o = t ? _(i, s) : 100;
            break;
          }
      return o;
    }
    function E(e) {
      var t = y(), n = S(e, t);
      return 0 === n.length ? null : T(n);
    }
    function T(e, n, r) {
      var o = h(), a = g();
      r = r || v(), n = n || f();
      var s = t.first(e);
      1 === e.length && N(s, !1, n, r, o, a);
      var u;
      if (a) {
        var l = s.top;
        u = Math.floor(l / n.height);
      } else {
        var c = s.left;
        o && (c = r * (i.paginationInfo ? i.paginationInfo.visibleColumnCount : 1) - c), u = Math.floor(c / r);
      }
      return u;
    }
    function x(e, t, n) {
      return t = t || y(), n = n || f(), T([I(e, t.left, t.top)], n);
    }
    function _(e, n) {
      var r = 0, i = 0;
      return e.length > 1 ? t.each(e, function (e, t) {
        r += e.height, t >= n && (i += e.height);
      }) : (r = e[0].height, i = e[0].height - Math.max(0, -e[0].top)), i === r ? 100 : Math.floor(100 * i / r);
    }
    function S(e, t) {
      t = t || {};
      var n, r = t.left || 0, i = t.top || 0, a = e[0].nodeType === Node.TEXT_NODE;
      if (a) {
        var s = o();
        s.selectNode(e[0]), n = s.getClientRects();
      } else
        n = e[0].getClientRects();
      for (var u = [], l = 0, c = n.length; l < c; ++l)
        (n[l].height > 0 || 1 === n.length) && u.push(I(n[l], r, i));
      return u;
    }
    function C(e, t) {
      t = t || {};
      var n, r = t.left || 0, i = t.top || 0, a = e[0].nodeType === Node.TEXT_NODE;
      if (a) {
        var s = o();
        s.selectNode(e[0]), n = s.getBoundingClientRect();
      } else
        n = e[0].getBoundingClientRect();
      return I(n, r, i);
    }
    function I(e, t, n) {
      var r = {
        left: e.left,
        right: e.right,
        top: e.top,
        bottom: e.bottom,
        width: e.right - e.left,
        height: e.bottom - e.top
      };
      return t = t || 0, n = n || 0, O(r, t, n), r;
    }
    function O(e, t, n) {
      e.left += t, e.right += t, e.top += n, e.bottom += n;
    }
    function N(e, t, n, r, i, o) {
      if (n = n || f(), r = r || v(), i = i || h(), !(o = o || g())) {
        for (i && (r *= -1); e.top < 0;)
          O(e, -r, n.height);
        if (t)
          for (; e.bottom >= n.height && !m(e, !1, n);)
            O(e, r, -n.height);
      }
    }
    function P(e, t) {
      var n = t / 100;
      return Math.round((e.endOffset - e.startOffset) * n);
    }
    function A(e, t) {
      if (e.endOffset - e.startOffset == 1)
        return [e];
      var n = P(e, t), r = e.startContainer, i = e.cloneRange();
      i.setStart(r, e.startOffset), i.setEnd(r, e.startOffset + n);
      var o = e.cloneRange();
      return o.setStart(r, e.startOffset + n), o.setEnd(r, e.endOffset), [
        i,
        o
      ];
    }
    function D(e, t, n, r) {
      n = n || y();
      var i = a(e), o = c(i, n), s = R(o, t([
          0,
          1
        ]));
      return M(A(i, s), n, t([
        0,
        1
      ]), s, function (e) {
        return (g() ? e.height : e.width) && m(e, !1, r);
      });
    }
    function R(e, n) {
      var r = 0, i = t.filter(e, function (e) {
          return (g() ? e.height : e.width) && m(e, !1, f());
        }), o = j(i), a = s - o, s = j(e);
      return o === s ? n ? 55 : 45 : (r = o / s * 100, a > o ? r + 5 : r - 5);
    }
    function k(e) {
      var n = e.sort(function (e, t) {
          return e.top < t.top;
        }), r = [];
      t.each(n, function (e) {
        var t = e.top;
        if (r[t]) {
          var n = r[t];
          n.push(e.height), r[t] = n;
        } else
          r[t] = [e.height];
      });
    }
    function j(e) {
      var n = k(e), r = 0;
      return t.each(n, function (e) {
        r += Math.max.apply(null, e);
      }), r;
    }
    function M(e, t, n, r, i) {
      for (var o = 0, a = e; 1 !== a.length;) {
        o++;
        a = L(c(a[n], t), i) ? A(a[n], r) : A(a[n ? 0 : 1], r);
      }
      oe && (console.debug('getVisibleTextRangeOffsets:getTextRangeOffset:runCount', o), window.top._DEBUG_visibleTextRangeOffsetsRuns.push(o));
      var s = a[0];
      return s && s.collapse(!n), s;
    }
    function L(e, n) {
      return !!t.filter(e, n).length;
    }
    function F(e, t, n, r) {
      if (!e)
        return null;
      var i = e.element, o = e.textNode;
      if (o && X(o)) {
        var a = D(o, t, n, r);
        return a ? H(a) : (oe && console.warn('findVisibleLeafNodeCfi: failed to find text range offset'), null);
      }
      return ie.getCfiForElement(i);
    }
    function q(e, n) {
      return F(ie.findLastVisibleElement(e, n), t.last, e, n);
    }
    function V(e, n) {
      return F(ie.findFirstVisibleElement(e, n), t.first, e, n);
    }
    function H(e) {
      return e.collapsed && e.startContainer.nodeType === Node.TEXT_NODE ? r.generateCharacterOffsetCFIComponent(e.startContainer, e.startOffset, ['cfi-marker'], [], [
        'MathJax_Message',
        'MathJax_SVG_Hidden'
      ]) : e.collapsed ? ie.getCfiForElement(e.startContainer) : r.generateRangeComponent(e.startContainer, e.startOffset, e.endContainer, e.endOffset, ie.getClassBlacklist(), ie.getElementBlacklist(), ie.getIdBlacklist());
    }
    function U(e) {
      return 'epubcfi(/99!' + e + ')';
    }
    function B(e) {
      return r.Interpreter.isRangeCfi(U(e));
    }
    function z(e) {
      return r.Interpreter.hasTextTerminus(U(e));
    }
    function W(e, t, n, i) {
      var o = ie.getRootDocument(), a = U(e);
      try {
        var s = r.getTargetElement(a, o, t, n, i);
      } catch (e) {
      }
      return s && 0 != s.length ? s : void console.log('Can\'t find element for CFI: ' + e);
    }
    function G(t) {
      var n = ie.getLeafNodeElements(e(ie.getBodyElement())), r = t(n), i = t([
          !0,
          !1
        ]), a = o();
      return a.selectNodeContents(r[0]), a.collapse(i), H(a);
    }
    function $(e) {
      var n = e.className;
      n && void 0 !== n.animVal ? n = n.animVal : n && void 0 !== n.baseVal && (n = n.baseVal);
      var r = n ? n.split(' ') : [], i = e.id, o = ie.getClassBlacklist();
      return !(1 !== r.length || !t.contains(o, r[0])) || (!(!r.length || !t.intersection(o, r).length) || (!!(i && i.length && t.contains(ie.getIdBlacklist(), i)) || !!t.contains(ie.getElementBlacklist(), e.tagName.toLowerCase())));
    }
    function Q(e) {
      return !!e && e.nodeType === Node.ELEMENT_NODE;
    }
    function X(e) {
      return !!e && (e.nodeType === Node.TEXT_NODE && Y(e.nodeValue));
    }
    function Y(e) {
      return !!e.trim().length;
    }
    function J() {
      var e = this, n = {
          leafNodeElements: !0,
          visibleLeafNodes: !1
        };
      t.each(n, function (t, n) {
        e[n] = new Map();
      }), this._invalidate = function () {
        t.each(n, function (t, n) {
          t || (e[n] = new Map());
        });
      };
    }
    function K() {
      for (var e = '0123456789ABCDEF'.split(''), t = '#', n = 0; n < 6; n++)
        t += e[Math.round(15 * Math.random())];
      return t;
    }
    function Z(t, n, r) {
      var i = K();
      t instanceof Array || (t = [t]);
      for (var o = 0; o != t.length; o++) {
        var a = t[o], s = r.createElement('div');
        s.style.position = 'absolute', e(s).css('z-index', '1000'), e(s).css('pointer-events', 'none'), e(s).css('opacity', '0.4'), s.style.border = '1px solid white', n || i ? i && !n ? s.style.background = i : (!0 === n && (n = 'red'), s.style.border = '1px dashed ' + n, s.style.background = 'yellow') : s.style.background = 'purple', s.style.margin = s.style.padding = '0', s.style.top = a.top + 'px', s.style.left = a.left + 'px', s.style.width = a.width - 2 + 'px', s.style.height = a.height - 2 + 'px', r.documentElement.appendChild(s), ue.push(e(s));
      }
    }
    function ee(e) {
      var t = b();
      Z({
        left: e.left + t.left,
        top: e.top + t.top,
        width: e.width,
        height: e.height
      }, !0, ie.getRootDocument());
    }
    function te(e) {
      var t = l(e.startContainer, e.startOffset, e.endContainer, e.endOffset);
      return ee(t), t;
    }
    function ne(e) {
      ee(s(e));
    }
    function re() {
      t.each(ue, function (e) {
        e.remove();
      }), ue = [];
    }
    var ie = this;
    i = i || {};
    var oe = ReadiumSDK.DEBUG_MODE;
    oe && (window.top._DEBUG_visibleTextRangeOffsetsRuns = window.top._DEBUG_visibleTextRangeOffsetsRuns || []), this.getRootElement = function () {
      return i.$iframe ? i.$iframe[0].contentDocument.documentElement : null;
    }, this.getBodyElement = function () {
      var e = this.getRootDocument();
      return e && e.body ? e.body : this.getRootElement();
    }, this.getClassBlacklist = function () {
      return i.classBlacklist || [];
    }, this.getIdBlacklist = function () {
      return i.idBlacklist || [];
    }, this.getElementBlacklist = function () {
      return i.elementBlacklist || [];
    }, this.getRootDocument = function () {
      return i.$iframe ? i.$iframe[0].contentDocument : null;
    }, this.getCfiForElement = function (e) {
      var t = r.Generator.generateElementCFIComponent(e, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist());
      return '!' == t[0] && (t = t.substring(1)), t;
    }, this.getVisibleCfiFromPoint = function (e, t, n) {
      var r = ie.getRootDocument(), i = d(e, t, r), a = r.elementFromPoint(e, t), s = !a || a === r.documentElement;
      if (n) {
        if (!a || s)
          return null;
        var l = u(a);
        if (!m(l, !1))
          return null;
        if (e < l.left || e > l.right || t < l.top || t > l.bottom)
          return null;
      }
      if (!i) {
        if (s)
          return console.error('Could not generate CFI no visible element on page'), null;
        i = o(), i.selectNode(a);
      }
      var c, f, p, h = i, g = h.startContainer;
      if (g.nodeType === Node.TEXT_NODE) {
        if (n && g.parentNode !== a)
          return null;
        1 === g.length && 1 === h.startOffset ? (f = 0, p = 1) : h.startOffset === g.length ? (f = h.startOffset - 1, p = h.startOffset) : (f = h.startOffset, p = h.startOffset + 1);
        var v = {
          startContainer: g,
          endContainer: g,
          startOffset: f,
          endOffset: p,
          commonAncestorContainer: h.commonAncestorContainer
        };
        oe && te(v), c = H(v);
      } else if (g.nodeType === Node.ELEMENT_NODE) {
        if (g = h.startContainer.childNodes[h.startOffset] || h.startContainer.childNodes[0] || h.startContainer, n && g !== a)
          return null;
        c = g.nodeType !== Node.ELEMENT_NODE ? H(h) : ie.getCfiForElement(g);
      } else {
        if (n && g !== a)
          return null;
        c = ie.getCfiForElement(a);
      }
      return c && -1 !== c.indexOf('NaN') ? void console.log('Did not generate a valid CFI:' + c) : c;
    }, this.getRangeCfiFromPoints = function (e, t, n, r) {
      var i = ie.getRootDocument(), a = d(e, t, i), s = d(n, r, i), u = o();
      return u.setStart(a.startContainer, a.startOffset), u.setEnd(s.startContainer, s.startOffset), a.startContainer === a.endContainer && a.startContainer.nodeType === Node.TEXT_NODE && s.startContainer.length > s.startOffset + 1 && u.setEnd(s.startContainer, s.startOffset + 1), H(u);
    }, this.getFirstVisibleCfi = function (e, t) {
      return V(e, t);
    }, this.getLastVisibleCfi = function (e, t) {
      return q(e, t);
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      var r = o();
      if (t) {
        if (ie.isRangeCfi(e)) {
          var i = ie.getNodeRangeInfoFromCfi(e);
          r.setStart(i.startInfo.node, i.startInfo.offset);
        } else {
          var a = ie.getElementByCfi(e, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist())[0];
          r.setStart(a, 0);
        }
        if (ie.isRangeCfi(t)) {
          var s = ie.getNodeRangeInfoFromCfi(t);
          n ? r.setEnd(s.endInfo.node, s.endInfo.offset) : r.setEnd(s.startInfo.node, s.startInfo.offset);
        } else {
          var u = ie.getElementByCfi(t, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist())[0];
          r.setEnd(u, u.childNodes.length);
        }
      } else if (ie.isRangeCfi(e)) {
        var l = ie.getNodeRangeInfoFromCfi(e);
        r.setStart(l.startInfo.node, l.startInfo.offset), r.setEnd(l.endInfo.node, l.endInfo.offset);
      } else {
        var c = ie.getElementByCfi(e, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist())[0];
        r.selectNode(c);
      }
      return r;
    }, this.getRangeCfiFromDomRange = function (e) {
      return H(e);
    }, this.isRangeCfi = function (e) {
      return B(e) || z(e);
    }, this.getPageIndexDeltaForCfi = function (e, t, n, r) {
      if (this.isRangeCfi(e)) {
        return x(this.getNodeRangeInfoFromCfi(e).clientRect);
      }
      var i = W(e, t, n, r);
      return i ? this.getPageIndexDeltaForElement(i) : -1;
    }, this.getElementFromPoint = function (e, t) {
      return ie.getRootDocument().elementFromPoint(e, t);
    }, this.getNodeRangeInfoFromCfi = function (e) {
      var t = ie.getRootDocument(), n = U(e);
      if (B(e)) {
        try {
          var i = r.Interpreter.getRangeTargetElements(n, t, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist());
          oe && console.log(i);
        } catch (e) {
        }
        if (!i)
          return void console.log('Can\'t find nodes for range CFI: ' + e);
        var o = {
            node: i.startElement,
            offset: i.startOffset
          }, a = {
            node: i.endElement,
            offset: i.endOffset
          }, s = o && a ? l(o.node, o.offset, a.node, a.offset) : null;
        return oe && (console.log(s), Z(s, 'purple', t)), {
          startInfo: o,
          endInfo: a,
          clientRect: s
        };
      }
      if (z(e)) {
        try {
          var u = r.Interpreter.getTextTerminusInfo(n, t, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist());
          oe && console.log(u);
        } catch (e) {
        }
        if (!u)
          return void console.log('Can\'t find node for text term CFI: ' + e);
        var c = {
            node: u.textNode,
            offset: u.textOffset
          }, f = l(c.node, c.offset, c.node, c.offset);
        return oe && (console.log(f), Z(f, 'purple', t)), {
          startInfo: c,
          endInfo: c,
          clientRect: f
        };
      }
      return {
        startInfo: null,
        endInfo: null,
        clientRect: C(ie.getElementByCfi(e, this.getClassBlacklist(), this.getElementBlacklist(), this.getIdBlacklist()), y())
      };
    }, this.isNodeFromRangeCfiVisible = function (e) {
      var t = this.getNodeRangeInfoFromCfi(e);
      return t ? m(t.clientRect, !1) : void 0;
    }, this.getNearestCfiFromElement = function (n) {
      var r, i, o, a = t.filter(n.parentNode.childNodes, function (e) {
          return e === n || X(e);
        }), s = a.indexOf(n), u = a[s - 1];
      if (u || (u = a[s + 1], r = !0), u || (u = t.last(this.getLeafNodeElements(e(n.previousElementSibling)))) || (r = !0, u = t.first(this.getLeafNodeElements(e(n.nextElementSibling)))), X(u) ? (i = u, o = !0) : i = Q(u) ? u : Q(n.previousElementSibling) ? n.previousElementSibling : Q(n.nextElementSibling) ? n.nextElementSibling : n.parentNode, o) {
        var l = i.ownerDocument.createRange();
        return l.selectNodeContents(i), l.collapse(r), this.getRangeCfiFromDomRange(l);
      }
      return this.getCfiForElement(i);
    }, this.getElementByCfi = function (e, t, n, r) {
      return W(e, t, n, r);
    }, this.getPageIndexDeltaForElement = function (e) {
      var t = E(e);
      if (null === t) {
        return E(this.getElementByCfi(this.getNearestCfiFromElement(e[0])));
      }
      return t;
    }, this.getElementById = function (t) {
      var n = this.getRootDocument(), r = e(n.getElementById(t));
      if (0 != r.length)
        return r;
    }, this.getPageIndexDeltaForElementId = function (e) {
      var t = this.getElementById(e);
      return t ? this.getPageIndexDeltaForElement(t) : -1;
    }, this.getFirstVisibleMediaOverlayElement = function (t) {
      function n(r) {
        if (r && r.length)
          for (var a = 0, s = r.length; a < s; a++) {
            var u = r[a];
            if (u) {
              var l = e(u);
              if (l.data('mediaOverlayData')) {
                var c = i.getElementVisibility(l, t);
                if (c && (o || (o = u), 100 == c))
                  return u;
              } else {
                var f = n(u.children);
                if (f)
                  return f;
              }
            }
          }
      }
      var r = e(this.getBodyElement());
      if (r && r.length && r[0]) {
        var i = this, o = void 0, a = n([r[0]]);
        return a || (a = o), a;
      }
    }, this.getElementVisibility = function (e, t) {
      return w(e, !0, t);
    }, this.isElementVisible = this.getElementVisibility, this.getVisibleElementsWithFilter = function (t, n) {
      var r = this.getElementsWithFilter(e(this.getBodyElement()), n);
      return this.getVisibleElements(r, t);
    }, this.getAllElementsWithFilter = function (t) {
      return this.getElementsWithFilter(e(this.getBodyElement()), t);
    }, this.getAllVisibleElementsWithSelector = function (t, n) {
      var r = e(t, this.getRootElement()), i = [];
      return e.each(r, function () {
        i.push(e(this));
      }), this.getVisibleElements(i, n);
    }, this.getVisibleElements = function (e, n, r) {
      var i = [];
      return t.each(e, function (e) {
        var t = e[0].nodeType === Node.TEXT_NODE, o = t ? e.parent() : e, a = w(e, !0, n, r);
        a && i.push({
          element: o[0],
          textNode: t ? e[0] : null,
          percentVisible: a
        });
      }), i;
    }, this.getVisibleLeafNodes = function (t, n) {
      if (se) {
        var r = (i.paginationInfo || {}).currentSpreadIndex || 0, o = ae.visibleLeafNodes.get(r);
        if (o)
          return o;
      }
      var a = this.getLeafNodeElements(e(this.getBodyElement())), s = this.getVisibleElements(a, t, n);
      return se && ae.visibleLeafNodes.set(r, s), s;
    }, this.getStartCfi = function () {
      return G(t.first);
    }, this.getEndCfi = function () {
      return G(t.last);
    }, this.getElementsWithFilter = function (t, n) {
      function r(t) {
        if (void 0 != t)
          for (var o = 0, a = t.length; o < a; o++) {
            var s = e(t[o]);
            n(s) ? i.push(s) : r(s[0].children);
          }
      }
      var i = [];
      return r([t[0]]), i;
    }, this.getLeafNodeElements = function (t) {
      if (se) {
        var n = ae.leafNodeElements.get(t);
        if (n)
          return n;
      }
      for (var r, i = document.createNodeIterator(t[0], NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function () {
            return NodeFilter.FILTER_ACCEPT;
          }, !1), o = []; r = i.nextNode();) {
        if (r.nodeType === Node.ELEMENT_NODE && !r.childElementCount && !Y(r.textContent) || X(r)) {
          $(r.nodeType === Node.TEXT_NODE ? r.parentNode : r) || o.push(e(r));
        }
      }
      return se && ae.leafNodeElements.set(t, o), o;
    }, this.getElements = function (t) {
      return t ? e(t, this.getRootElement()) : e(this.getRootElement()).children();
    }, this.getElement = function (e) {
      var t = this.getElements(e);
      if (t.length > 0)
        return t;
    };
    var ae = new J(), se = !1;
    this.invalidateCache = function () {
      ae._invalidate();
    };
    var ue = [];
    ReadiumSDK._DEBUG_CfiNavigationLogic = {
      clearDebugOverlays: re,
      drawDebugOverlayFromRect: ee,
      drawDebugOverlayFromDomRange: te,
      drawDebugOverlayFromNode: ne,
      debugVisibleCfis: function () {
        console.log(JSON.stringify(ReadiumSDK.reader.getPaginationInfo().openPages));
        var e = ReadiumSDK.reader.getFirstVisibleCfi(), t = ReadiumSDK.reader.getDomRangeFromRangeCfi(e);
        console.log(e, t, te(t));
        var n = ReadiumSDK.reader.getLastVisibleCfi(), r = ReadiumSDK.reader.getDomRangeFromRangeCfi(n);
        console.log(n, r, te(r));
      },
      visibleTextRangeOffsetsRunsAvg: function () {
        var e = window.top._DEBUG_visibleTextRangeOffsetsRuns;
        return e.reduce(function (e, t) {
          return e + t;
        }) / e.length;
      }
    }, this.findFirstVisibleElement = function (t, n) {
      var r = this.getBodyElement();
      if (!r)
        return null;
      for (var i, o, a = 0, s = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function (r) {
            return r.nodeType === Node.ELEMENT_NODE && $(r) ? NodeFilter.FILTER_REJECT : (r.nodeType !== Node.TEXT_NODE || X(r)) && w(e(r), !0, t, n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }, !1); s.nextNode();) {
        var u = s.currentNode;
        if (u.nodeType === Node.TEXT_NODE) {
          i = u.parentNode, o = u, a = 100;
          break;
        }
        for (var l = !1, c = !1, f = u.childNodes.length - 1; f >= 0; f--) {
          var d = u.childNodes[f];
          if (d.nodeType === Node.ELEMENT_NODE) {
            l = !0;
            break;
          }
          d.nodeType === Node.TEXT_NODE && (c = !0);
        }
        if (!l && c)
          for (var f = u.childNodes.length - 1; f >= 0; f--) {
            var d = u.childNodes[f];
            if (d.nodeType === Node.TEXT_NODE && X(d)) {
              var p = w(e(d), !0, t, n);
              if (p) {
                i = u, o = d, a = p;
                break;
              }
            }
          }
        else if (!l) {
          i = u, a = 100, o = null;
          break;
        }
      }
      return i ? {
        element: i,
        textNode: o,
        percentVisible: a
      } : null;
    }, this.findLastVisibleElement = function (t, n) {
      var r = this.getBodyElement();
      if (!r)
        return null;
      for (var i, o, a = 0, s = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function (r) {
            return r.nodeType === Node.ELEMENT_NODE && $(r) ? NodeFilter.FILTER_REJECT : (r.nodeType !== Node.TEXT_NODE || X(r)) && w(e(r), !0, t, n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }, !1); s.lastChild(););
      do {
        var u = s.currentNode;
        if (u.nodeType === Node.TEXT_NODE) {
          i = u.parentNode, o = u, a = 100;
          break;
        }
        for (var l = !1, c = !1, f = u.childNodes.length - 1; f >= 0; f--) {
          var d = u.childNodes[f];
          if (d.nodeType === Node.ELEMENT_NODE) {
            l = !0;
            break;
          }
          d.nodeType === Node.TEXT_NODE && (c = !0);
        }
        if (!l && c)
          for (var f = u.childNodes.length - 1; f >= 0; f--) {
            var d = u.childNodes[f];
            if (d.nodeType === Node.TEXT_NODE && X(d)) {
              var p = w(e(d), !0, t, n);
              if (p) {
                i = u, o = d, a = p;
                break;
              }
            }
          }
        else if (!l) {
          i = u, a = 100, o = null;
          break;
        }
      } while (s.previousNode());
      return i ? {
        element: i,
        textNode: o,
        percentVisible: a
      } : null;
    };
  };
}(_jquery, _underscore, _readium_shared_js_helpers, _readium_cfi_js), _readium_shared_js_views_external_agent_support = function (e, t) {
  return function (n) {
    function r(e, t, n) {
      var r = e.createElement('meta');
      r.setAttribute('name', t), r.setAttribute('content', n), e.head.appendChild(r);
    }
    function i(e, t) {
      var i = n.metadata().identifier, o = t.idref;
      i && o && (r(e, 'dc.relation.ispartof', i), r(e, 'dc.identifier', o));
    }
    function o(e) {
      if (-1 !== Object.keys(e).indexOf('document') && e.location.search.match(/goto=.*cfi/i))
        return e.location.href.split('#')[0];
    }
    function a(e) {
      var t = e.defaultView;
      if (t && (t.parent || t.top)) {
        var n = o(t.parent);
        return o(t.top) || n;
      }
    }
    function s(e, t) {
      if (e.defaultView && e.defaultView.parent) {
        var n = a(e);
        if (n) {
          var r = e.createElement('link');
          r.setAttribute('rel', 'canonical'), r.setAttribute('href', n), e.head.appendChild(r), c[t.idref].canonicalLinkElement = r;
        }
      }
    }
    function u(e) {
      e.addEventListener('scrolltorange', function (e) {
        e.preventDefault();
        var t = e.detail;
        d(t);
      });
    }
    function l(e) {
      e.addEventListener('selectionchange', function () {
        var t = e.getSelection();
        t && t.isCollapsed ? e.body.style.position = 'relative' : e.body.style.position = '';
      });
    }
    var c = {}, f = {};
    e.on(e.Events.PLUGINS_LOADED, function () {
      window.define && window.define.amd && delete window.define.amd;
    });
    var d = t.debounce(function (e) {
      var t = n.getRangeCfiFromDomRange(e), r = c[t.idref];
      r && r.isUpdated ? n.openSpineItemElementCfi(t.idref, t.contentCFI) : r.pendingNavRequest = {
        idref: t.idref,
        contentCFI: t.contentCFI
      };
    }, 100);
    this.bindToContentDocument = function (e, t) {
      f[t.idref] = e, c[t.idref] = {}, i(e, t), s(e, t), u(e), t.isReflowable() && l(e);
    }, this.updateContentDocument = function (e) {
      var t = f[e.idref], r = c[e.idref];
      if (t && r) {
        if (r.canonicalLinkElement) {
          var i = a(t);
          i && r.canonicalLinkElement.setAttribute('href', i);
        }
        r.isUpdated = !0;
        var o = r.pendingNavRequest;
        o && (n.openSpineItemElementCfi(o.idref, o.contentCFI), r.pendingNavRequest = null);
      }
    };
  };
}(_readium_shared_js_globals, _underscore), function (e, t) {
  true ? _ResizeSensor = function () {
    return typeof t === 'function' ? t() : t;
  }() : 'object' == typeof exports ? module.exports = t() : e.ResizeSensor = t();
}('undefined' != typeof window ? window : this, function () {
  function e(e, t) {
    var n = Object.prototype.toString.call(e), r = '[object Array]' === n || '[object NodeList]' === n || '[object HTMLCollection]' === n || '[object Object]' === n || 'undefined' != typeof jQuery && e instanceof jQuery || 'undefined' != typeof Elements && e instanceof Elements, i = 0, o = e.length;
    if (r)
      for (; i < o; i++)
        t(e[i]);
    else
      t(e);
  }
  function t(e) {
    if (!e.getBoundingClientRect)
      return {
        width: e.offsetWidth,
        height: e.offsetHeight
      };
    var t = e.getBoundingClientRect();
    return {
      width: Math.round(t.width),
      height: Math.round(t.height)
    };
  }
  if ('undefined' == typeof window)
    return null;
  var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
      return window.setTimeout(e, 20);
    }, r = function (i, o) {
      function a() {
        var e = [];
        this.add = function (t) {
          e.push(t);
        };
        var t, n;
        this.call = function (r) {
          for (t = 0, n = e.length; t < n; t++)
            e[t].call(this, r);
        }, this.remove = function (r) {
          var i = [];
          for (t = 0, n = e.length; t < n; t++)
            e[t] !== r && i.push(e[t]);
          e = i;
        }, this.length = function () {
          return e.length;
        };
      }
      function s(e, r) {
        if (e) {
          if (e.resizedAttached)
            return void e.resizedAttached.add(r);
          e.resizedAttached = new a(), e.resizedAttached.add(r), e.resizeSensor = document.createElement('div'), e.resizeSensor.dir = 'ltr', e.resizeSensor.className = 'resize-sensor';
          var i = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%', o = 'position: absolute; left: 0; top: 0; transition: 0s;';
          e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + o + '" class="resize-sensor-inner"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + o + ' width: 200%; height: 200%" class="resize-sensor-inner"></div></div>', e.appendChild(e.resizeSensor);
          var s = window.getComputedStyle(e), u = s ? s.getPropertyValue('position') : null;
          'absolute' !== u && 'relative' !== u && 'fixed' !== u && (e.style.position = 'relative');
          var l, c, f, d = e.resizeSensor.childNodes[0], p = d.childNodes[0], h = e.resizeSensor.childNodes[1], g = t(e), m = g.width, v = g.height, y = !0, b = function () {
              p.style.width = '100000px', p.style.height = '100000px', d.scrollLeft = 100000, d.scrollTop = 100000, h.scrollLeft = 100000, h.scrollTop = 100000;
            }, w = function () {
              if (y) {
                if (!d.scrollTop && !d.scrollLeft)
                  return b(), void (f || (f = n(function () {
                    f = 0, w();
                  })));
                y = !1;
              }
              b();
            };
          e.resizeSensor.resetSensor = w;
          var E = function () {
              c = 0, l && (m = g.width, v = g.height, e.resizedAttached && e.resizedAttached.call(g));
            }, T = function () {
              g = t(e), l = g.width !== m || g.height !== v, l && !c && (c = n(E)), w();
            }, x = function (e, t, n) {
              e.attachEvent ? e.attachEvent('on' + t, n) : e.addEventListener(t, n);
            };
          x(d, 'scroll', T), x(h, 'scroll', T), n(w);
        }
      }
      var u;
      'undefined' != typeof ResizeObserver ? (u = new ResizeObserver(function (t) {
        e(t, function (e) {
          o.call(this, {
            width: e.contentRect.width,
            height: e.contentRect.height
          });
        });
      }), void 0 !== i && e(i, function (e) {
        u.observe(e);
      })) : e(i, function (e) {
        s(e, o);
      }), this.detach = function (t) {
        'undefined' != typeof ResizeObserver ? e(i, function (e) {
          u.unobserve(e);
        }) : r.detach(i, t);
      }, this.reset = function () {
        i.resizeSensor.resetSensor();
      };
    };
  return r.reset = function (t, n) {
    e(t, function (e) {
      e.resizeSensor.resetSensor();
    });
  }, r.detach = function (t, n) {
    e(t, function (e) {
      e && (e.resizedAttached && 'function' == typeof n && (e.resizedAttached.remove(n), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached));
    });
  }, r;
}), _readium_shared_js_views_one_page_view = function (e, t, n, r, i, o, a, s, u) {
  var l = function (c, f, d, p) {
    function h(e) {
      if (e) {
        j = !0;
        var n = I[0].contentDocument;
        _ = t('html', n), _ && 0 != _.length ? (S = t('body', _), q || S.css('margin', '0')) : (_ = t('svg', n), S = void 0), q && P.applyBookStyles(), y(), g(), F.onIFrameLoad();
      }
    }
    function g() {
      if (S && q) {
        var n = S[0];
        if (n.resizeSensor)
          return;
        M.width = t(n).width(), M.height = t(n).height(), n.resizeSensor = new u(n, function () {
          var r = {
            width: t(n).width(),
            height: t(n).height()
          };
          if (console.debug('OnePageView content resized ...', r.width, r.height, O.idref), r.width != M.width || r.height != M.height) {
            M.width = r.width, M.height = r.height, console.debug('... updating pagination.');
            var i = A.package.resolveRelativeUrl(O.href);
            e.logEvent('OnePageView.Events.CONTENT_SIZE_CHANGED', 'EMIT', 'one_page_view.js [ ' + O.href + ' -- ' + i + ' ]'), P.emit(l.Events.CONTENT_SIZE_CHANGED, I, O);
          } else
            console.debug('... ignored (identical dimensions).');
        });
      }
    }
    function m() {
      if (q && _ && H) {
        var e = H.fontSelection, t = !p.fonts || !p.fonts.length || e <= 0 || e - 1 >= p.fonts.length, n = t ? {} : p.fonts[e - 1];
        o.UpdateHtmlFontAttributes(_, H.fontSize, n, function () {
        });
      }
    }
    function v() {
      if (!I || !I.length)
        return 0;
      if (o.isIframeAlive(I[0])) {
        var e = I[0].contentWindow, t = I[0].contentDocument;
        return Math.round(parseFloat(e.getComputedStyle(t.documentElement).height));
      }
      if (_) {
        console.error('getContentDocHeight ??');
        return _.height();
      }
      return 0;
    }
    function y() {
      if (V.width = 0, V.height = 0, !q) {
        var e = void 0, n = void 0, r = void 0, i = I[0].contentDocument, o = t('meta[name=viewport]', i).attr('content');
        if (o || (o = t('meta[name=viewbox]', i).attr('content')), o && (e = w(o)), !e && i && i.documentElement && i.documentElement.nodeName && 'svg' == i.documentElement.nodeName.toLowerCase()) {
          var a = void 0, s = void 0, u = i.documentElement.getAttribute('width'), l = u && u.length >= 1 && '%' == u[u.length - 1];
          if (u)
            try {
              a = parseInt(u, 10);
            } catch (e) {
            }
          a && l && (n = a, a = void 0);
          var c = i.documentElement.getAttribute('height'), f = c && c.length >= 1 && '%' == c[c.length - 1];
          if (c)
            try {
              s = parseInt(c, 10);
            } catch (e) {
            }
          s && f && (r = s, s = void 0), a && s && (e = {
            width: a,
            height: s
          });
        }
        if (!e && O && (o = O.getRenditionViewport()) && (e = w(o)) && console.log('Viewport: using rendition:viewport dimensions'), !e) {
          var d = t(i).find('img');
          if (d.length > 0) {
            e = {
              width: d.width(),
              height: d.height()
            };
            O && O.media_type && O.media_type.length && 0 == O.media_type.indexOf('image/') || console.warn('Viewport: using img dimensions!');
          } else if (d = t(i).find('image'), d.length > 0) {
            var a = void 0, s = void 0, u = d[0].getAttribute('width');
            if (u)
              try {
                a = parseInt(u, 10);
              } catch (e) {
              }
            var c = d[0].getAttribute('height');
            if (c)
              try {
                s = parseInt(c, 10);
              } catch (e) {
              }
            a && s && (e = {
              width: a,
              height: s
            }, !0, console.warn('Viewport: using image dimensions!'));
          }
        }
        if (!e) {
          a = k.width(), s = k.height();
          t('iframe.iframe-fixed', k).length > 1 && (a *= 0.5), n && (a *= n / 100), r && (s *= r / 100), e = {
            width: a,
            height: s
          }, !0, console.warn('Viewport: using browser / e-reader viewport dimensions!');
        }
        e && (V.width = e.width, V.height = e.height);
      }
    }
    function b(t) {
      t && (e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'EMIT', 'one_page_view.js [ ' + t.href + ' ]'), P.emit(e.Events.CONTENT_DOCUMENT_UNLOADED, I, t));
    }
    function w(e) {
      for (var t = e.replace(/\s/g, '').split(','), n = {}, r = 0; r < t.length; r++) {
        var i = t[r].split('=');
        2 == i.length && (n[i[0]] = i[1]);
      }
      var o = Number.NaN, a = Number.NaN;
      if (n.width && (o = parseInt(n.width)), n.height && (a = parseInt(n.height)), !isNaN(o) && !isNaN(a))
        return {
          width: o,
          height: a
        };
    }
    function E() {
      return {
        top: -C.parent().scrollTop(),
        left: 0
      };
    }
    function T() {
      if (p.needsFixedLayoutScalerWorkAround()) {
        var e = C.parent()[0];
        return {
          width: e.clientWidth,
          height: e.clientHeight
        };
      }
      return {
        width: V.width,
        height: V.height
      };
    }
    function x(e) {
      return O ? new s(O.idref, e) : null;
    }
    t.extend(this, new r());
    var _, S, C, I, O, N, P = this, A = c.spine, D = c.iframeLoader, R = c.bookStyles, k = c.$viewport, j = !1, M = {
        width: void 0,
        height: void 0
      }, L = function (e) {
        var t = function (e, t) {
            this.begin = e, this.end = t;
          }, n = new t(function (e, t, n, r, i, o, a) {
            r.css('opacity', '0');
          }, function (e, t, n, r, i, a, s) {
            r.css('transform', 'none'), o.CSSTransition(r, 'opacity 150ms ease-out'), r.css('opacity', '1');
          }), r = new t(function (e, t, n, r, i, a, s) {
            r.css('opacity', '0');
            var u = Math.ceil(i * e), l = 0.8 * u * (2 === s ? 1 : -1), c = o.CSSTransformString({
                left: Math.round(l),
                origin: '50% 50% 0',
                enable3D: d
              });
            r.css(c);
          }, function (e, t, n, r, i, a, s) {
            r.css('opacity', '1'), o.CSSTransition(r, 'transform 150ms ease-out'), r.css('transform', 'none');
          }), i = new t(function (e, t, n, r, i, a, s) {
            r.css('opacity', '0');
            var u = Math.ceil(i * e), l = 1.7 * u * (2 === s ? 1 : -1), c = o.CSSTransformString({
                left: Math.round(l),
                angle: 30 * (2 === s ? -1 : 1),
                origin: '50% 50% 0',
                enable3D: d
              });
            r.css(c);
          }, function (e, t, n, r, i, a, s) {
            r.css('opacity', '1'), o.CSSTransition(r, 'transform 300ms ease-in-out'), r.css('transform', 'none');
          }), s = new t(function (e, t, n, r, i, a, s) {
            r.css('opacity', '0');
            for (var u = !1, l = !1, c = 0; c < f.length; c++) {
              var p = f[c].toLowerCase();
              if (p.indexOf('left') >= 0) {
                u = !0;
                break;
              }
              if (p.indexOf('right') >= 0) {
                !0;
                break;
              }
              if (p.indexOf('center') >= 0) {
                l = !0;
                break;
              }
            }
            var h = Math.ceil(i * e), g = 0.5 * h * (u || l && 1 === s ? 1 : -1), m = o.CSSTransformString({
                scale: 0.2,
                left: Math.round(g),
                angle: 30 * (u || l && 1 === s ? 1 : -1),
                origin: '50% 50% 0',
                enable3D: d
              });
            r.css(m);
          }, function (e, t, n, r, i, a, s) {
            r.css('opacity', '1'), o.CSSTransition(r, 'transform 400ms ease-out'), r.css('transform', 'none');
          }), u = [];
        u.push(n), u.push(r), u.push(i), u.push(s);
        var l = e.disablePageTransitions || !1;
        l = !0;
        var c = -1, d = new a({}).enableGPUHardwareAccelerationCSS3D, p = void 0;
        this.updateOptions = function (e) {
          p = e;
          var t = p;
          t && void 0 !== t.enableGPUHardwareAccelerationCSS3D || (t = new a({})), t.enableGPUHardwareAccelerationCSS3D && (d = !0), null !== e.pageTransition && void 0 !== e.pageTransition && (c = e.pageTransition);
        }, this.updateOptions(e);
        var h = 0, g = !1, m = !1;
        this.updatePageSwitchDir = function (e, t) {
          m || (h = e, g = t);
        }, this.onIFrameLoad = function () {
          m = !0;
        }, this.transformContentImmediate_BEGIN = function (e, t, n, r) {
          var i = g || m;
          if (m = !1, !l && -1 !== c && (o.CSSTransition(e, 'all 0 ease 0'), i)) {
            var a = c >= 0 && c < u.length ? u[c] : void 0;
            0 !== h && a ? a.begin(t, n, r, e, P.meta_width(), P.meta_height(), h) : e.css('opacity', '0');
          }
        }, this.transformContentImmediate_END = function (e, t, n, r) {
          if (l || -1 === c)
            return void e.css('transform', 'none');
          setTimeout(function () {
            var i = c >= 0 && c < u.length ? u[c] : void 0;
            0 !== h && i ? i.end(t, n, r, e, P.meta_width(), P.meta_height(), h) : (e.css('transform', 'none'), o.CSSTransition(e, 'opacity 250ms linear'), e.css('opacity', '1'));
          }, 10);
        };
      }, F = new L(c), q = d || !1, V = {
        width: 0,
        height: 0
      };
    this.element = function () {
      return C;
    }, this.meta_height = function () {
      return V.height;
    }, this.meta_width = function () {
      return V.width;
    }, this.isDisplaying = function () {
      return j;
    }, this.render = function () {
      var e = o.loadTemplate('single_page_frame', {});
      C = t(e), N = t('#scaler', C), o.CSSTransition(C, 'all 0 ease 0'), C.css('transform', 'none');
      var n = p.viewerSettings();
      n && void 0 !== n.enableGPUHardwareAccelerationCSS3D || (n = new a({})), n.enableGPUHardwareAccelerationCSS3D && C.css('transform', 'translateZ(0)'), C.css('height', '100%'), C.css('width', '100%');
      for (var r = 0, i = f.length; r < i; r++)
        C.addClass(f[r]);
      return I = t('iframe', C), this;
    }, this.decorateIframe = function () {
      I && I.length && (I.css('border-bottom', '1px dashed silver'), I.css('border-top', '1px dashed silver'));
    }, this.remove = function () {
      this.clear(), O = void 0, C && C[0] && C.remove(), C = void 0, N = void 0, I = void 0;
    }, this.clear = function () {
      j = !1, I && I[0] && (I[0].src = '');
    }, this.currentSpineItem = function () {
      return O;
    };
    var H = void 0;
    this.setViewSettings = function (e, t) {
      H = e, q && !t && P.applyBookStyles(), y(), F.updateOptions(e);
    }, this.applyBookStyles = function () {
      q && _ && (o.setStyles(R.getStyles(), _), m());
    }, this.scaleToWidth = function (e) {
      if (!(q || V.width <= 0)) {
        var t = e / V.width;
        P.transformContentImmediate(t, 0, 0);
      }
    }, this.resizeIFrameToContent = function () {
      var e = v();
      P.setHeight(e), P.showIFrame();
    }, this.setHeight = function (e) {
      N.css('height', e + 'px'), C.css('height', e + 'px');
    };
    this.showIFrame = function () {
      I.css('visibility', 'visible'), I.css('transform', 'none');
      var e = H;
      e && void 0 !== e.enableGPUHardwareAccelerationCSS3D || (e = new a({})), e.enableGPUHardwareAccelerationCSS3D && (!0, I.css('transform', 'translateZ(0)'));
    }, this.hideIFrame = function () {
      I.css('visibility', 'hidden');
      var e = !1, t = H;
      t && void 0 !== t.enableGPUHardwareAccelerationCSS3D || (t = new a({})), t.enableGPUHardwareAccelerationCSS3D && (e = !0);
      var n = o.CSSTransformString({
        left: '10000',
        top: '10000',
        enable3D: e
      });
      I.css(n);
    }, this.updatePageSwitchDir = function (e, t) {
      F.updatePageSwitchDir(e, t);
    }, this.transformContentImmediate = function (e, t, n) {
      if (!q) {
        var r = Math.ceil(V.width * e), i = Math.floor(V.height * e);
        if (F.transformContentImmediate_BEGIN(C, e, t, n), C.css('left', t + 'px'), C.css('top', n + 'px'), C.css('width', r + 'px'), C.css('height', i + 'px'), _) {
          var s = !1, u = H;
          if (u && void 0 !== u.enableGPUHardwareAccelerationCSS3D || (u = new a({})), u.enableGPUHardwareAccelerationCSS3D && (s = !0), S && p.needsFixedLayoutScalerWorkAround()) {
            var l = o.CSSTransformString({
              scale: e,
              enable3D: s
            });
            l['min-width'] = V.width, l['min-height'] = V.height, _.css(l), S && S.length && S.css({
              width: V.width,
              height: V.height
            });
            var c = o.CSSTransformString({
              scale: 1,
              enable3D: s
            });
            c.width = V.width * e, c.height = V.height * e, N.css(c);
          } else {
            var f = o.CSSTransformString({
              scale: e,
              enable3D: s
            });
            f.width = V.width, f.height = V.height, N.css(f);
          }
          _.css('opacity', '0.999'), P.showIFrame(), setTimeout(function () {
            _.css('opacity', '1');
          }, 0), F.transformContentImmediate_END(C, e, t, n);
        }
      }
    }, this.getCalculatedPageHeight = function () {
      return C.height();
    }, this.transformContent = n.bind(n.debounce(this.transformContentImmediate, 50), P), this.onUnload = function () {
      b(O);
    }, this.loadSpineItem = function (t, n, r) {
      if (O != t) {
        var i = O;
        O = t;
        var a = A.package.resolveRelativeUrl(t.href);
        P.hideIFrame(), b(i), e.logEvent('OnePageView.Events.SPINE_ITEM_OPEN_START', 'EMIT', 'one_page_view.js [ ' + t.href + ' -- ' + a + ' ]'), P.emit(l.Events.SPINE_ITEM_OPEN_START, I, O), D.loadIframe(I[0], a, function (e) {
          if (e && n) {
            var i = function () {
              n(e, I, O, !0, r);
            };
            o.isIframeAlive(I[0]) ? (h(e), i()) : (console.error('onIFrameLoad !! doc && win + TIMEOUT'), console.debug(t.href), h(e), setTimeout(i, 500));
          } else
            h(e);
        }, P, { spineItem: O });
      } else
        n && n(!0, I, O, !1, r);
    }, this.getNavigator = function () {
      return new i({
        $iframe: I,
        frameDimensionsGetter: T,
        visibleContentOffsetsGetter: E,
        classBlacklist: [
          'cfi-marker',
          'mo-cfi-highlight',
          'resize-sensor',
          'resize-sensor-expand',
          'resize-sensor-shrink',
          'resize-sensor-inner',
          'js-hypothesis-config',
          'js-hypothesis-embed'
        ],
        elementBlacklist: ['hypothesis-adder'],
        idBlacklist: [
          'MathJax_Message',
          'MathJax_SVG_Hidden'
        ]
      });
    }, this.getElementByCfi = function (e, t, n, r, i) {
      return e != O.idref ? void console.error('spine item is not loaded') : P.getNavigator().getElementByCfi(t, n, r, i);
    }, this.getElementById = function (e, t) {
      return e != O.idref ? void console.error('spine item is not loaded') : P.getNavigator().getElementById(t);
    }, this.getElement = function (e, t) {
      return e != O.idref ? void console.error('spine item is not loaded') : P.getNavigator().getElement(t);
    }, this.getFirstVisibleMediaOverlayElement = function () {
      return P.getNavigator().getFirstVisibleMediaOverlayElement();
    }, this.offset = function () {
      if (I)
        return I.offset();
    }, this.getVisibleElementsWithFilter = function (e) {
      return P.getNavigator().getVisibleElementsWithFilter(null, e);
    }, this.getVisibleElements = function (e) {
      return P.getNavigator().getAllVisibleElementsWithSelector(e);
    }, this.getAllElementsWithFilter = function (e, t) {
      return P.getNavigator().getAllElementsWithFilter(e, t);
    }, this.getElements = function (e, t) {
      return e != O.idref ? void console.error('spine item is not loaded') : P.getNavigator().getElements(t);
    }, this.getNodeRangeInfoFromCfi = function (e, t) {
      return e != O.idref ? void console.warn('spine item is not loaded') : P.getNavigator().getNodeRangeInfoFromCfi(t);
    }, this.getLoadedContentFrames = function () {
      return [{
          spineItem: O,
          $iframe: I
        }];
    }, this.getFirstVisibleCfi = function (e, t) {
      return x(P.getNavigator().getFirstVisibleCfi(e, t));
    }, this.getLastVisibleCfi = function (e, t) {
      return x(P.getNavigator().getLastVisibleCfi(e, t));
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      return P.getNavigator().getDomRangeFromRangeCfi(e, t, n);
    }, this.getRangeCfiFromDomRange = function (e) {
      return x(P.getNavigator().getRangeCfiFromDomRange(e));
    }, this.getVisibleCfiFromPoint = function (e, t, n) {
      return x(P.getNavigator().getVisibleCfiFromPoint(e, t, n));
    }, this.getRangeCfiFromPoints = function (e, t, n, r) {
      return x(P.getNavigator().getRangeCfiFromPoints(e, t, n, r));
    }, this.getCfiForElement = function (e) {
      return x(P.getNavigator().getCfiForElement(e));
    }, this.getElementFromPoint = function (e, t) {
      return P.getNavigator().getElementFromPoint(e, t);
    }, this.getStartCfi = function () {
      return x(P.getNavigator().getStartCfi());
    }, this.getEndCfi = function () {
      return x(P.getNavigator().getEndCfi());
    }, this.getNearestCfiFromElement = function (e) {
      return x(P.getNavigator().getNearestCfiFromElement(e));
    };
  };
  return l.Events = {
    SPINE_ITEM_OPEN_START: 'SpineItemOpenStart',
    CONTENT_SIZE_CHANGED: 'ContentSizeChanged'
  }, l;
}(_readium_shared_js_globals, _jquery, _underscore, _eventEmitter, _readium_shared_js_views_cfi_navigation_logic, _readium_shared_js_helpers, _readium_shared_js_models_viewer_settings, _readium_shared_js_models_bookmark_data, _ResizeSensor), _readium_shared_js_views_fixed_view = function (e, t, n, r, i, o, a, s, u, l) {
  return function (n, c) {
    function f(t) {
      var r = new s(n, [t], !1, c);
      return r.on(s.Events.SPINE_ITEM_OPEN_START, function (t, n) {
        e.logEvent('OnePageView.Events.SPINE_ITEM_OPEN_START', 'ON', 'fixed_view.js [ ' + n.href + ' ]'), e.logEvent('CONTENT_DOCUMENT_LOAD_START', 'EMIT', 'fixed_view.js [ ' + n.href + ' ]'), I.emit(e.Events.CONTENT_DOCUMENT_LOAD_START, t, n);
      }), r.on(e.Events.CONTENT_DOCUMENT_UNLOADED, function (t, n) {
        e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'ON', 'fixed_view.js [ ' + n.href + ' ]'), e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'EMIT', 'fixed_view.js [ ' + n.href + ' ]'), I.emit(e.Events.CONTENT_DOCUMENT_UNLOADED, t, n);
      }), r;
    }
    function d() {
      return q.validItems()[0];
    }
    function p(e, n) {
      if (V)
        return void (H = {
          initiator: e,
          paginationRequest: n
        });
      V = !0;
      var r = { isElementAdded: !1 }, i = h([
          {
            pageView: R,
            spineItem: q.leftItem,
            context: r
          },
          {
            pageView: k,
            spineItem: q.rightItem,
            context: r
          },
          {
            pageView: j,
            spineItem: q.centerItem,
            context: r
          }
        ]);
      t.when.apply(t, i).done(function () {
        if (V = !1, H) {
          var t = H.initiator, i = H.paginationRequest;
          H = void 0, p(t, i);
        } else
          r.isElementAdded && (l.setStyles(P.getStyles(), S.parent()), E()), n ? g(e, n.spineItem, n.elementId) : g(e);
      });
    }
    function h(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = T(e[n].pageView, e[n].spineItem, e[n].context);
        t.push(r);
      }
      return t;
    }
    function g(t, n, r) {
      w(), y(), window.setTimeout(function () {
        e.logEvent('InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED', 'EMIT', 'fixed_view.js'), I.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED, {
          paginationInfo: I.getPaginationInfo(),
          initiator: t,
          spineItem: n,
          elementId: r
        });
      }, 60);
    }
    function m(e, t) {
      var n = new a(N, t);
      return n.openItem(e), q.leftItem != n.leftItem || q.rightItem != n.rightItem || q.centerItem != n.centerItem;
    }
    function v() {
      if (!F || !L)
        return !1;
      var e = O.width(), t = O.height();
      return e && t;
    }
    function y(t) {
      if (U(0, !1), v()) {
        var n = O.width(), r = O.height(), i = R.isDisplaying() ? l.Margins.fromElement(R.element()) : l.Margins.empty(), o = k.isDisplaying() ? l.Margins.fromElement(k.element()) : l.Margins.empty(), a = j.isDisplaying() ? l.Margins.fromElement(j.element()) : l.Margins.empty(), s = b(i, o, a), u = {
            width: n - L.width(),
            height: r - L.height()
          }, c = {
            width: u.width - s.width(),
            height: u.height - s.height()
          };
        if (!(u.width <= 0 || u.height <= 0)) {
          var f = c.width / F.width, d = c.height / F.height;
          O.css('overflow', 'auto');
          var p;
          'fit-width' == A.style ? p = f : 'fit-height' == A.style ? p = d : 'user' == A.style ? p = A.scale : (p = Math.min(f, d), O.css('overflow', 'hidden')), C = p;
          var h = {
              width: F.width * p,
              height: F.height * p
            }, g = {
              width: h.width + s.width(),
              height: h.height + s.height()
            }, m = {
              width: g.width + L.width(),
              height: g.height + L.height()
            }, y = Math.floor((n - m.width) / 2), w = Math.floor((r - m.height) / 2);
          y < 0 && (y = 0), w < 0 && (w = 0), S.css('left', y + 'px'), S.css('top', w + 'px'), S.css('width', g.width + 'px'), S.css('height', g.height + 'px');
          var E = L.padding.left, T = L.padding.top, x = t ? 'transformContentImmediate' : 'transformContent';
          R.isDisplaying() && R[x](p, E, T), k.isDisplaying() && (E += F.separatorPosition * p, R.isDisplaying() && (E += i.left), k[x](p, E, T)), j.isDisplaying() && j[x](p, E, T), e.logEvent('FXL_VIEW_RESIZED', 'EMIT', 'fixed_view.js'), I.emit(e.Events.FXL_VIEW_RESIZED);
        }
      }
    }
    function b(e, t, n) {
      var r = {
          left: Math.max(e.margin.left, t.margin.left, n.margin.left),
          right: Math.max(e.margin.right, t.margin.right, n.margin.right),
          top: Math.max(e.margin.top, t.margin.top, n.margin.top),
          bottom: Math.max(e.margin.bottom, t.margin.bottom, n.margin.bottom)
        }, i = {
          left: Math.max(e.border.left, t.border.left, n.border.left),
          right: Math.max(e.border.right, t.border.right, n.border.right),
          top: Math.max(e.border.top, t.border.top, n.border.top),
          bottom: Math.max(e.border.bottom, t.border.bottom, n.border.bottom)
        }, o = {
          left: Math.max(e.padding.left, t.padding.left, n.padding.left),
          right: Math.max(e.padding.right, t.padding.right, n.padding.right),
          top: Math.max(e.padding.top, t.padding.top, n.padding.top),
          bottom: Math.max(e.padding.bottom, t.padding.bottom, n.padding.bottom)
        };
      return new l.Margins(r, i, o);
    }
    function w() {
      F = {}, j.isDisplaying() ? (F.width = j.meta_width(), F.height = j.meta_height(), F.separatorPosition = 0) : R.isDisplaying() && k.isDisplaying() ? R.meta_height() == k.meta_height() ? (F.width = R.meta_width() + k.meta_width(), F.height = R.meta_height(), F.separatorPosition = R.meta_width()) : (F.width = R.meta_width() + k.meta_width() * (R.meta_height() / k.meta_height()), F.height = R.meta_height(), F.separatorPosition = R.meta_width()) : R.isDisplaying() ? (F.width = 2 * R.meta_width(), F.height = R.meta_height(), F.separatorPosition = R.meta_width()) : k.isDisplaying() ? (F.width = 2 * k.meta_width(), F.height = k.meta_height(), F.separatorPosition = k.meta_width()) : F = void 0;
    }
    function E() {
      L = l.Margins.fromElement(S);
    }
    function T(n, r, i) {
      var o = t.Deferred();
      return r ? (n.remove(), S.append(n.render().element()), i.isElementAdded = !0, n.loadSpineItem(r, function (t, r, i, a, s) {
        t && a && (n.meta_height() && n.meta_width() || console.error('Invalid document ' + i.href + ': viewport is not specified!'), e.logEvent('CONTENT_DOCUMENT_LOADED', 'EMIT', 'fixed_view.js [ ' + i.href + ' ]'), I.emit(e.Events.CONTENT_DOCUMENT_LOADED, r, i)), o.resolve();
      }, i)) : (n.isDisplaying() && n.remove(), o.resolve()), o.promise();
    }
    function x() {
      var e = [];
      e = N.isLeftToRight() ? [
        R,
        j,
        k
      ] : [
        k,
        j,
        R
      ];
      for (var t = [], n = 0, r = e.length; n < r; n++)
        e[n].isDisplaying() && t.push(e[n]);
      return t;
    }
    function _(e, t) {
      for (var n = x(), r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        if (o.currentSpineItem().idref == e)
          return t(o);
      }
      console.error('spine item is not loaded');
    }
    t.extend(this, new r());
    var S, C, I = this, O = t(n.$viewport), N = n.spine, P = n.userStyles, A = (n.bookStyles, n.zoom || { style: 'default' }), D = (n.iframeLoader, void 0), R = f('fixed-page-frame-left'), k = f('fixed-page-frame-right'), j = f('fixed-page-frame-center'), M = [];
    M.push(R), M.push(k), M.push(j);
    var L, F, q = new a(N, !1), V = !1, H = !1;
    this.isReflowable = function () {
      return !1;
    }, this.setZoom = function (e) {
      A = e, y(!1);
    }, this.render = function () {
      var e = l.loadTemplate('fixed_book_frame', {});
      return S = t(e), l.CSSTransition(S, 'all 0 ease 0'), S.css('overflow', 'hidden'), O.append(S), I.applyStyles(), this;
    }, this.remove = function () {
      S.remove();
    }, this.setViewSettings = function (e, t) {
      D = e, q.setSyntheticSpread(1 == l.deduceSyntheticSpread(O, d(), D));
      for (var n = x(), r = 0, i = n.length; r < i; r++)
        n[r].setViewSettings(e, t);
    };
    var U = function (e, t) {
      R && R.updatePageSwitchDir(e, t), k && k.updatePageSwitchDir(e, t), j && j.updatePageSwitchDir(e, t);
    };
    this.applyStyles = function () {
      l.setStyles(P.getStyles(), S.parent()), E(), w(), y();
    }, this.applyBookStyles = function () {
      for (var e = x(), t = 0, n = e.length; t < n; t++)
        e[t].applyBookStyles();
    }, this.onViewportResize = function () {
      var e = d();
      if (e) {
        var t = 1 == l.deduceSyntheticSpread(O, e, D);
        if (m(e, t)) {
          q.setSyntheticSpread(t);
          var n = new u(e, I);
          I.openPage(n);
        } else
          y(!0);
      }
    }, this.getViewScale = function () {
      return C;
    }, this.openPage = function (e, t) {
      if (e.spineItem) {
        var n = q.leftItem, r = q.rightItem, i = q.centerItem, o = 1 == l.deduceSyntheticSpread(O, e.spineItem, D);
        q.setSyntheticSpread(o), q.openItem(e.spineItem);
        var a = n !== q.leftItem || r !== q.rightItem || i !== q.centerItem;
        null !== t && void 0 !== t || (t = 0), U(0 === t ? 0 : q.spine.isRightToLeft() ? 1 === t ? 2 : 1 : t, a), p(e.initiator, e);
      }
    }, this.openPagePrev = function (e) {
      q.openPrev(), U(q.spine.isRightToLeft() ? 2 : 1, !0), p(e, void 0);
    }, this.openPageNext = function (e) {
      q.openNext(), U(q.spine.isRightToLeft() ? 1 : 2, !0), p(e, void 0);
    }, this.getPaginationInfo = function () {
      for (var e = new o(N, !0), t = [
            q.leftItem,
            q.rightItem,
            q.centerItem
          ], n = 0; n < t.length; n++) {
        var r = t[n];
        r && e.addOpenPage(0, 1, r.idref, r.index);
      }
      return e;
    }, this.bookmarkCurrentPage = function () {
      var e = x(), t = this.getLoadedSpineItems();
      return e.length > 0 ? e[0].getFirstVisibleCfi() : t.length > 0 ? new i(this.getLoadedSpineItems()[0].idref, null) : void 0;
    }, this.getLoadedSpineItems = function () {
      return q.validItems();
    }, this.getElement = function (e, t) {
      return _(e, function (n) {
        return n.getElement(e, t);
      });
    }, this.getElementById = function (e, t) {
      return _(e, function (n) {
        return n.getElementById(e, t);
      });
    }, this.getElementByCfi = function (e, t, n, r, i) {
      return _(e, function (o) {
        return o.getElementByCfi(e, t, n, r, i);
      });
    }, this.getFirstVisibleMediaOverlayElement = function () {
      for (var e = x(), t = 0, n = e.length; t < n; t++) {
        var r = e[t].getFirstVisibleMediaOverlayElement();
        if (r)
          return r;
      }
    }, this.insureElementVisibility = function (e, t, n) {
    }, this.getElements = function (e, t) {
      return _(e, function (n) {
        return n.getElements(e, t);
      });
    }, this.isElementVisible = function (e) {
      return !0;
    }, this.getVisibleElementsWithFilter = function (e, t) {
      for (var n = [], r = x(), i = 0, o = r.length; i < o; i++)
        n.push(r[i].getAllElementsWithFilter(e, t));
      return n;
    }, this.getVisibleElements = function (e, t) {
      for (var n = [], r = x(), i = 0, o = r.length; i < o; i++)
        t ? n.push({
          elements: r[i].getElements(r[i].currentSpineItem().idref, e),
          spineItem: r[i].currentSpineItem()
        }) : n.push(r[i].getElements(r[i].currentSpineItem().idref, e));
      return n;
    }, this.isElementVisible = function (e) {
      return !0;
    }, this.isVisibleSpineItemElementCfi = function (e, t) {
      return _(e, function (e) {
        return !0;
      });
    }, this.getNodeRangeInfoFromCfi = function (e, t) {
      return _(e, function (n) {
        return n.getNodeRangeInfoFromCfi(e, t);
      });
    }, this.getFirstVisibleCfi = function () {
      var e = x();
      if (e.length > 0)
        return e[0].getFirstVisibleCfi();
    }, this.getLastVisibleCfi = function () {
      var e = x();
      if (e.length > 0)
        return e[e.length - 1].getLastVisibleCfi();
    }, this.getDomRangesFromRangeCfi = function (e, t, n) {
      var r = x();
      if (t && e.idref !== t.idref) {
        for (var i = [], o = 0, a = r.length; o < a; o++) {
          var s = r[o];
          if (s.currentSpineItem().idref === e.idref) {
            var u = s.getLastVisibleCfi();
            i.push(s.getDomRangeFromRangeCfi(e.contentCFI, u.contentCFI, n));
          } else if (s.currentSpineItem().idref === t.idref) {
            var l = s.getFirstVisibleCfi();
            i.push(s.getDomRangeFromRangeCfi(l.contentCFI, t.contentCFI, n));
          }
        }
        return i;
      }
      return [this.getDomRangeFromRangeCfi(e, t, n)];
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      var r = x();
      if (t && e.idref !== t.idref)
        return void console.error('getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref');
      for (var i = 0, o = r.length; i < o; i++) {
        var a = r[i];
        if (a.currentSpineItem().idref === e.idref)
          return a.getDomRangeFromRangeCfi(e.contentCFI, t ? t.contentCFI : null, n);
      }
    }, this.getRangeCfiFromDomRange = function (e) {
      for (var t = x(), n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        if (i.getLoadedContentFrames()[0].$iframe[0].contentDocument === e.startContainer.ownerDocument)
          return i.getRangeCfiFromDomRange(e);
      }
    }, this.getVisibleCfiFromPoint = function (e, t, n, r) {
      if (!r)
        throw new Error('getVisibleCfiFromPoint: Spine item idref must be specified for this fixed layout view.');
      return _(r, function (r) {
        return r.getVisibleCfiFromPoint(e, t, n);
      });
    }, this.getRangeCfiFromPoints = function (e, t, n, r, i) {
      if (!i)
        throw new Error('getRangeCfiFromPoints: Spine item idref must be specified for this fixed layout view.');
      return _(i, function (i) {
        return i.getRangeCfiFromPoints(e, t, n, r);
      });
    }, this.getCfiForElement = function (e) {
      for (var t = x(), n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        if (i.getLoadedContentFrames()[0].$iframe[0].contentDocument === e.ownerDocument)
          return i.getCfiForElement(e);
      }
    }, this.getElementFromPoint = function (e, t, n) {
      if (!n)
        throw new Error('getElementFromPoint: Spine item idref must be specified for this fixed layout view.');
      return _(n, function (n) {
        return n.getElementFromPoint(e, t);
      });
    }, this.getStartCfi = function () {
      return x()[0].getStartCfi();
    }, this.getEndCfi = function () {
      return x()[0].getEndCfi();
    }, this.getNearestCfiFromElement = function (e) {
      for (var t = x(), n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        if (i.getLoadedContentFrames()[0].$iframe[0].contentDocument === e.ownerDocument)
          return i.getNearestCfiFromElement(e);
      }
    };
  };
}(_readium_shared_js_globals, _jquery, _underscore, _eventEmitter, _readium_shared_js_models_bookmark_data, _readium_shared_js_models_current_pages_info, _readium_shared_js_models_fixed_page_spread, _readium_shared_js_views_one_page_view, _readium_shared_js_models_page_open_request, _readium_shared_js_helpers), _readium_shared_js_views_iframe_loader = function (e, t, n) {
  return function () {
    var r = this, i = {};
    this.addIFrameEventListener = function (e, t, n) {
      void 0 == i[e] && (i[e] = []), i[e].push({
        callback: t,
        context: n
      });
    }, this.updateIframeEvents = function (n) {
      t.each(i, function (t, r) {
        e(n.contentWindow).off(r);
        for (var i = 0, o = t.length; i < o; i++)
          e(n.contentWindow).on(r, t[i].callback, t[i].context);
      });
    }, this.loadIframe = function (e, t, i, o, a) {
      e.baseURI || ('undefined' != typeof location && (e.baseURI = location.href + ''), console.error('!iframe.baseURI => ' + e.baseURI)), console.log('EPUB doc iframe src:'), console.log(t), console.log('EPUB doc iframe base URI:'), console.log(e.baseURI), e.setAttribute('data-baseUri', e.baseURI), e.setAttribute('data-src', t);
      var s = new n(t).absoluteTo(e.baseURI).search('').hash('').toString();
      r._loadIframeWithUri(e, a, s, function () {
        i.call(o, !0, a);
      });
    }, this._loadIframeWithUri = function (n, i, o, a) {
      n.onload = function () {
        var i = n.contentDocument || n.contentWindow.document;
        e('svg', i).on('load', function () {
          console.log('SVG loaded');
        }), r.updateIframeEvents(n);
        var o = n.contentWindow.MathJax;
        if (o) {
          console.log('MathJax VERSION: ' + o.cdnVersion + ' // ' + o.fileversion + ' // ' + o.version);
          var s = !0;
          o.Hub.Browser.isFirefox && (s = !1), o.Hub.Browser.isChrome && (s = !1), window.navigator.userAgent.indexOf('Edge') > 0 && (s = !1), o.Hub.Config({
            showMathMenu: !1,
            messageStyle: 'none',
            showProcessingMessages: !0,
            SVG: { useFontCache: s }
          });
          var u = t.once(a);
          try {
            o.Hub.Queue(u);
          } catch (e) {
            console.error('MathJax fail!'), a();
          }
        } else
          a();
      }, n.setAttribute('src', o);
    };
  };
}(_jquery, _underscore, _URIjs), _readium_shared_js_views_internal_links_support = function (e, t, n, r) {
  return function (i) {
    function o(e) {
      var t = e.indexOf('('), n = e.indexOf('!'), r = e.indexOf(')');
      if (-1 != n)
        return -1 == r && (r = e.length), {
          spineItemCfi: e.substring(t + 1, n),
          elementCfi: e.substring(n + 1, r)
        };
    }
    function a(e, t) {
      var n = i.package().resolveRelativeUrl(t.href);
      return e.absoluteTo(n);
    }
    function s(e, r) {
      var s = a(e, r);
      if (!s)
        return void console.error('Unable to resolve ' + e.href());
      var l = e.fragment(), c = s.toString();
      c = t.RemoveFromString(c, '#' + l), u(c, function (e) {
        if (e) {
          var t = new window.DOMParser(), r = t.parseFromString(e, 'text/xml'), a = o(l);
          if (!a)
            return void console.warn('Unable to split cfi:' + l);
          var s = n.Interpreter.getContentDocHref('epubcfi(' + a.spineItemCfi + ')', r);
          if (s) {
            var u = i.spine().getItemByHref(s);
            u ? i.openSpineItemElementCfi(u.idref, a.elementCfi, f) : console.warn('Unable to find spineItem with href=' + s);
          } else
            console.warn('Unable to find document ref from ' + l + ' cfi');
        }
      });
    }
    function u(t, n) {
      e.ajax({
        isLocal: 0 !== t.indexOf('http'),
        url: t,
        dataType: 'text',
        async: !0,
        success: function (e) {
          n(e);
        },
        error: function (e, r, i) {
          console.error('Error when AJAX fetching ' + t), console.error(r), console.error(i), n();
        }
      });
    }
    function l(e) {
      var n = e.filename();
      return n && t.EndsWith(n, '.opf');
    }
    function c(e, t) {
      var n, o = e.filename();
      if (o) {
        var a = new r(e, t.href), s = decodeURIComponent(a.pathname()), u = i.spine().getItemByHref(s);
        if (!u)
          return void console.error('spine item with href=' + s + ' not found');
        n = u.idref;
      } else
        n = t.idref;
      var l = e.fragment();
      i.openSpineItemElementId(n, l, f);
    }
    var f = this;
    this.processLinkElements = function (t, n) {
      var i = t[0].contentDocument;
      e('a', i).click(function (e) {
        var t;
        t = e.currentTarget.attributes['xlink:href'] ? e.currentTarget.attributes['xlink:href'].value : e.currentTarget.attributes.href.value;
        var i = !1, o = new r(t);
        o.is('relative') ? l(o) ? (s(o, n), i = !0) : (c(o, n), i = !0) : (window.open(t, '_blank'), i = !0), i && (e.preventDefault(), e.stopPropagation());
      });
    };
  };
}(_jquery, _readium_shared_js_helpers, _readium_cfi_js, _URIjs), _readium_shared_js_views_media_overlay_data_injector = function (e, t, n, r, i) {
  return function (o, a) {
    this.attachMediaOverlayData = function (s, u, l) {
      var c = s[0].contentDocument.documentElement;
      if (u.media_overlay_id || 0 !== o.smil_models.length) {
        var f = e('body', c);
        if (0 == f.length)
          console.error('! BODY ???');
        else {
          if (f.data('mediaOverlayClick'))
            console.error('[WARN] already mediaOverlayClick');
          else {
            f.data('mediaOverlayClick', { ping: 'pong' });
            var d = function (t) {
                var n = e(this)[0];
                if (!(n = t.target))
                  return a.touchInit(), !0;
                var r = void 0, i = n, o = !1;
                for ('a' === i.nodeName.toLowerCase() && (o = !0); !(r = e(i).data('mediaOverlayData')) && ('a' === i.nodeName.toLowerCase() && (o = !0), i = i.parentNode););
                if (r && (r.par || r.pars)) {
                  if (!l.mediaOverlaysEnableClick)
                    return console.log('MO CLICK DISABLED'), a.touchInit(), !0;
                  if (o)
                    return console.log('MO CLICKED LINK'), a.touchInit(), !0;
                  var s = r.par ? r.par : r.pars[0];
                  return i && i != n && 'body' === i.nodeName.toLowerCase() && s && !s.getSmil().id ? (a.touchInit(), !0) : (a.playUserPar(s), !0);
                }
                var u = e(n).attr('ibooks:readaloud');
                if (u || (u = e(n).attr('epub:readaloud')), u) {
                  console.debug('MO readaloud attr: ' + u);
                  var c = a.isPlaying();
                  if ('start' === u && !c || 'stop' === u && c || 'startstop' === u)
                    return a.toggleMediaOverlay(), !0;
                }
                return a.touchInit(), !0;
              }, p = t.debounce(d, 200);
            'ontouchstart' in document.documentElement && f[0].addEventListener('touchstart', p, !1), f[0].addEventListener('mousedown', p, !1);
          }
        }
        var h = o.getSmilBySpineItem(u);
        if (!h)
          return void console.error('NO SMIL?? ' + u.idref + ' /// ' + u.media_overlay_id);
        var g = function (e) {
          if (e) {
            if (e.nodeType && 'seq' === e.nodeType && e.textref) {
              var t = e.textref.split('#'), r = t[0], i = 2 === t.length ? t[1] : '';
              if (r && i) {
                n.ResolveContentRef(r, h.href) === u.href && (e.element = s[0].contentDocument.getElementById(i), e.element || console.error('seq.textref !element? ' + e.textref));
              }
            }
            if (e.children && e.children.length)
              for (var o = 0; o < e.children.length; o++) {
                var a = e.children[o];
                g(a);
              }
          }
        };
        g(h);
        for (var m = new r(h); m.currentPar;) {
          m.currentPar.element = void 0, m.currentPar.cfi = void 0;
          if (n.ResolveContentRef(m.currentPar.text.srcFile, m.smil.href) === u.href) {
            var v = !m.currentPar.text.srcFragmentId || 0 == m.currentPar.text.srcFragmentId.length, y = 0 == m.currentPar.text.srcFragmentId.indexOf('epubcfi') ? void 0 : m.currentPar.text.srcFragmentId, b = void 0, w = !1;
            if (v || y)
              b = v ? f : e(s[0].contentDocument.getElementById(y));
            else if (0 === m.currentPar.text.srcFragmentId.indexOf('epubcfi')) {
              var E = m.currentPar.text.srcFragmentId.substr('epubcfi'.length + 1, m.currentPar.text.srcFragmentId.length - 'epubcfi'.length - 2);
              0 === E.indexOf('/99!') && (E = E.substr('/99!'.length, E.length - '/99!'.length));
              var T = E.split(',');
              if (T && 3 === T.length)
                try {
                  var x = T[0] + T[1], _ = 'epubcfi(' + x + ')', S = i.getTextTerminusInfoWithPartialCFI(_, s[0].contentDocument, [
                      'cfi-marker',
                      'mo-cfi-highlight'
                    ], [], ['MathJax_Message']), C = T[0] + T[2], I = 'epubcfi(' + C + ')', O = (i.getTextTerminusInfoWithPartialCFI(I, s[0].contentDocument, [
                      'cfi-marker',
                      'mo-cfi-highlight'
                    ], [], ['MathJax_Message']), S.textNode.parentNode);
                  m.currentPar.cfi = {
                    smilTextSrcCfi: m.currentPar.text.srcFragmentId,
                    partialRangeCfi: E,
                    partialStartCfi: x,
                    partialEndCfi: C,
                    cfiTextParent: O
                  }, w = !0, b = e(O);
                  var N = b.data('mediaOverlayData');
                  if (N) {
                    N.par && (console.error('[WARN] non-CFI MO DATA already exists!'), N.par = void 0);
                    var P = !1;
                    if (N.pars)
                      for (var A = 0; A < N.pars.length; A++) {
                        var D = N.pars[A];
                        D === m.currentPar && (P = !0, console.error('[WARN] mediaOverlayData CFI PAR already registered!'));
                      }
                    else
                      N.pars = [];
                    P || N.pars.push(m.currentPar);
                  } else
                    N = { pars: [m.currentPar] }, b.data('mediaOverlayData', N);
                } catch (e) {
                  console.error(e);
                }
              else
                try {
                  var R = 'epubcfi(' + E + ')';
                  b = i.getTargetElementWithPartialCFI(R, s[0].contentDocument, [
                    'cfi-marker',
                    'mo-cfi-highlight'
                  ], [], ['MathJax_Message']);
                } catch (e) {
                  console.error(e);
                }
            } else
              console.error('SMIL text@src CFI fragment identifier scheme not supported: ' + m.currentPar.text.srcFragmentId);
            if (b && b.length > 0) {
              if (!w) {
                m.currentPar.element && m.currentPar.element !== b[0] && console.error('DIFFERENT ELEMENTS??! ' + m.currentPar.text.srcFragmentId + ' /// ' + m.currentPar.element.id);
                var k = b[0].nodeName ? b[0].nodeName.toLowerCase() : void 0;
                'audio' !== k && 'video' !== k || b.attr('preload', 'auto'), m.currentPar.element = b[0];
                var N = b.data('mediaOverlayData');
                N && (console.error('[WARN] MO DATA already exists.'), N.par && N.par !== m.currentPar && console.error('DIFFERENT PARS??!')), b.data('mediaOverlayData', { par: m.currentPar });
              }
            } else
              console.error('!! CANNOT FIND ELEMENT: ' + m.currentPar.text.srcFragmentId + ' == ' + m.currentPar.text.srcFile + ' /// ' + u.href);
          }
          m.next();
        }
      }
    };
  };
}(_jquery, _underscore, _readium_shared_js_helpers, _readium_shared_js_models_smil_iterator, _readium_cfi_js), _readium_shared_js_views_media_overlay_element_highlighter = function (e, t) {
  return function (t) {
    function n(t, n, i) {
      if (l)
        try {
          if (l[0].ownerDocument === t[0].ownerDocument)
            return;
        } catch (e) {
        }
      $head = e('head', t[0].ownerDocument.documentElement), l = e('<style type=\'text/css\'> </style>'), l.append('.' + r + ' {');
      var o = 'background-color: yellow !important; color: black !important; border-radius: 0.4em;', a = i;
      if (a) {
        var s = !1;
        for (var u in a.declarations)
          a.declarations.hasOwnProperty(u) && (s = !0, l.append(u + ': ' + a.declarations[u] + '; '));
        s || n || l.append(o);
      } else
        n || l.append(o);
      l.append('}'), l.appendTo($head);
    }
    this.includeParWhenAdjustingToSeqSyncGranularity = !0;
    var r = 'mo-active-default', i = void 0;
    this.isElementHighlighted = function (e) {
      return i && e === i;
    };
    var o = void 0;
    this.isCfiHighlighted = function (e) {
      return o && e === o;
    };
    var a = '', s = '', u = t, l = void 0;
    this.reDo = function () {
      l && l.remove(), l = void 0;
      var e = i, t = o, n = a, r = s;
      i ? (this.reset(), this.highlightElement(e, n, r)) : o && (this.reset(), this.highlightCfi(t, n, r));
    }, this.highlightElement = function (t, l, c) {
      if (t && t !== i) {
        this.reset(), i = t, o = void 0, a = l, s = c;
        var f = this.adjustParToSeqSyncGranularity(i), d = f.element;
        s && '' !== s && e(d.ownerDocument.documentElement).addClass(s);
        var p = e(d), h = a && '' !== a, g = u.userStyles().findStyle('.' + r);
        n(p, h, g), g || !h ? (h && p.addClass(a), p.addClass(r)) : p.addClass(a), (this.includeParWhenAdjustingToSeqSyncGranularity || i !== f) && e(i.element).addClass('mo-sub-sync');
      }
    }, this.highlightCfi = function (t, l, c) {
      if (t && t !== o) {
        this.reset(), i = void 0, o = t, a = l, s = c;
        var f = e(o.cfi.cfiTextParent), d = a && '' !== a, p = u.userStyles().findStyle('.' + r);
        n(f, d, p);
        if (u.plugins.highlights)
          try {
            var h = t.getSmil().spineItemId;
            u.plugins.highlights.addHighlight(h, t.cfi.partialRangeCfi, 'MO_SPEAK', 'highlight', void 0);
          } catch (e) {
            console.error(e);
          }
        else if (u.plugins.annotations)
          try {
            var h = t.getSmil().spineItemId;
            u.plugins.annotations.addHighlight(h, t.cfi.partialRangeCfi, 'MO_SPEAK', 'highlight', void 0);
          } catch (e) {
            console.error(e);
          }
      }
    }, this.reset = function () {
      if (o) {
        var t = o.cfi.cfiTextParent.ownerDocument;
        if (u.plugins.highlights)
          try {
            u.plugins.highlights.removeHighlight('MO_SPEAK');
            for (var n = void 0; null !== (n = t.getElementById('start-MO_SPEAK'));)
              console.log('toRemove START'), console.log(n), n.parentNode.removeChild(n);
            for (; null !== (n = t.getElementById('end-MO_SPEAK'));)
              console.log('toRemove END'), console.log(n), n.parentNode.removeChild(n);
          } catch (e) {
            console.error(e);
          }
        else if (u.plugins.annotations)
          try {
            u.plugins.annotations.removeHighlight('MO_SPEAK');
            for (var n = void 0; null !== (n = t.getElementById('start-MO_SPEAK'));)
              console.log('toRemove START'), console.log(n), n.parentNode.removeChild(n);
            for (; null !== (n = t.getElementById('end-MO_SPEAK'));)
              console.log('toRemove END'), console.log(n), n.parentNode.removeChild(n);
          } catch (e) {
            console.error(e);
          }
        o = void 0;
      }
      if (i) {
        var l = this.adjustParToSeqSyncGranularity(i), c = l.element;
        (this.includeParWhenAdjustingToSeqSyncGranularity || i !== l) && e(i.element).removeClass('mo-sub-sync'), s && '' !== s && e(c.ownerDocument.documentElement).removeClass(s), a && '' !== a && e(c).removeClass(a), e(c).removeClass(r), i = void 0;
      }
      a = '', s = '';
    }, this.adjustParToSeqSyncGranularity = function (e) {
      if (e) {
        var t = u.viewerSettings().mediaOverlaysSynchronizationGranularity;
        if (t && t.length > 0) {
          if (!(e.element || (e.cfi ? e.cfi.cfiTextParent : void 0)))
            return console.error('adjustParToSeqSyncGranularity !element ???'), e;
          var n = e.getFirstSeqAncestorWithEpubType(t, this.includeParWhenAdjustingToSeqSyncGranularity);
          if (n && n.element)
            return n;
        }
        return e;
      }
    };
  };
}(_jquery, _readium_cfi_js), _readium_shared_js_views_scroll_view = function (e, t, n, r, i, o, a, s, u, l) {
  return function (c, f, d) {
    function p(e, t) {
      if (pe)
        return void e();
      var n = N();
      if (!n)
        return void e();
      var r = z(0), i = U(n);
      if (r.top - i.bottom > se) {
        var o = M();
        _(n), y(o - (i.bottom - i.top), void 0), t('updateLoadedViewsTop 1'), p(e, t);
      } else
        r.top - i.top < se ? w(n, function (n) {
          n ? (t('updateLoadedViewsTop 2'), p(e, t)) : e();
        }) : e();
    }
    function h(e, t) {
      if (pe)
        return void e();
      var n = P();
      if (!n)
        return void e();
      var r = z(0), i = U(n);
      i.top - r.bottom > se ? (_(n), t('updateLoadedViewsBottom 1'), h(e, t)) : i.bottom - r.bottom < se ? T(n, function (n) {
        t('updateLoadedViewsBottom 2'), n ? h(e, t) : e();
      }) : e();
    }
    function g(e) {
      if (f) {
        var t = void 0;
        if (Z && e) {
          var n = e.offset();
          n && (t = n.top);
        }
        var r = function (n) {
          if (Z) {
            if (!t)
              return;
            var r = void 0, i = e.offset();
            if (i && (r = i.top), !r)
              return;
            var o = r - t;
            Math.abs(o) > 1 && console.debug('@@@@@@@@@@@@@@@ SCROLL ADJUST (' + n + ') ' + o + ' -- ' + e.currentSpineItem().href);
          }
        };
        he = !0, h(function () {
          p(function () {
            setTimeout(function () {
              he = !1;
            }, ue + 100);
          }, r);
        }, r);
      }
    }
    function m(e) {
      d.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll || !ve && d.isMediaOverlayAvailable() && (ve = d.isPlayingMediaOverlay()) && d.pauseMediaOverlay();
    }
    function v(e) {
      if (!he && !ge && !me) {
        le.resetCurrentPosition(), g(), j(le), n.defer(function () {
          re || le.saveCurrentPosition();
        });
        d.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll || ve && setTimeout(function () {
          d.playMediaOverlay(), ve = !1;
        }, 100);
      }
    }
    function y(e, t) {
      ie[0].scrollTop = e, t && j(t.initiator, t.spineItem, t.elementId);
    }
    function b(e) {
      var t = M(), n = U(e);
      E(e);
      var r = U(e), i = r.bottom - r.top, o = n.bottom - n.top, a = i - o;
      Math.abs(a) > 0 && (Z && console.debug('IMMEDIATE SCROLL ADJUST: ' + e.currentSpineItem().href + ' == ' + a), y(t + a));
    }
    function w(e, t) {
      var n = fe.prevItem(e.currentSpineItem(), !0);
      if (!n)
        return void t(!1);
      var r = C(n, !0), i = P();
      r.element().insertAfter(i.element()), r.loadSpineItem(n, function (i, o, a, s, u) {
        if (i) {
          E(r);
          var l = U(r);
          _(r);
          var c = M(), f = C(n), d = l.bottom - l.top;
          f.setHeight(d), f.element().insertBefore(e.element()), c += d, y(c, void 0), f.loadSpineItem(n, function (e, r, i, o, a) {
            e ? (b(f), A(f, e, r, i, o, a), t(e)) : (console.error('Unable to open 2 ' + n.href), _(f), t(!1));
          });
        } else
          console.error('Unable to open 1 ' + n.href), _(r), t(!1);
      });
    }
    function E(e) {
      e.currentSpineItem().isFixedLayout() ? e.scaleToWidth(ie.width()) : e.resizeIFrameToContent();
    }
    function T(e, t) {
      var n = fe.nextItem(e.currentSpineItem(), !0);
      if (!n)
        return void t(!1);
      var r = (M(), C(n));
      r.element().insertAfter(e.element()), r.loadSpineItem(n, function (e, i, o, a, s) {
        e ? (E(r), A(r, e, i, o, a, s), t(e)) : (console.error('Unable to load ' + n.href), t(!1));
      });
    }
    function x() {
      var e = [];
      O(function (t) {
        e.push(t);
      }, !1);
      for (var t = 0, n = e.length; t < n; t++)
        _(e[t]);
    }
    function _(e) {
      e.onUnload(), e.element().remove();
    }
    function S(e) {
      ie.css('left', e.left), ie.css('top', e.top), ie.css('right', e.right), ie.css('bottom', e.bottom);
    }
    function C(t, r) {
      function i() {
        E(a), j(le), g(), re && !ne && le.restoreCurrentPosition();
      }
      c.disablePageTransitions = !0;
      var o = !0;
      t.isFixedLayout() && (o = !1);
      var a = new s(c, ['content-doc-frame'], o, d);
      a.on(s.Events.SPINE_ITEM_OPEN_START, function (t, n) {
        e.logEvent('OnePageView.Events.SPINE_ITEM_OPEN_START', 'ON', 'scroll_view.js [ ' + n.href + ' ]'), e.logEvent('CONTENT_DOCUMENT_LOAD_START', 'EMIT', 'scroll_view.js [ ' + n.href + ' ]'), le.emit(e.Events.CONTENT_DOCUMENT_LOAD_START, t, n);
      }), a.on(e.Events.CONTENT_DOCUMENT_UNLOADED, function (t, n) {
        e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'ON', 'scroll_view.js [ ' + n.href + ' ]'), le.emit(e.Events.CONTENT_DOCUMENT_UNLOADED, t, n);
      });
      var u = n.debounce(i, 100);
      a.on(s.Events.CONTENT_SIZE_CHANGED, function (t, n) {
        e.logEvent('OnePageView.Events.CONTENT_SIZE_CHANGED', 'ON', 'scroll_view.js [ ' + n.href + ' ]'), u();
      }), a.render();
      return ye && a.setViewSettings(ye, !0), r || a.element().data('pageView', a), f && a.decorateIframe(), a;
    }
    function I(e, t) {
      var n = void 0;
      return O(function (t) {
        return t.currentSpineItem() != e || (n = t, !1);
      }, t), n;
    }
    function O(e, t) {
      for (var n = ie.children(), r = n.length, i = t ? function (e) {
            return e - 1;
          } : function (e) {
            return e + 1;
          }, o = t ? function (e) {
            return e >= 0;
          } : function (e) {
            return e < r;
          }, a = t ? r - 1 : 0, s = a; o(s); s = i(s)) {
        var u = n.eq(s), l = u.data('pageView');
        if (l && !1 === e(l))
          return;
      }
    }
    function N() {
      var e = void 0;
      return O(function (t) {
        return e = t, !1;
      }, !1), e;
    }
    function P() {
      var e = void 0;
      return O(function (t) {
        return e = t, !1;
      }, !0), e;
    }
    function A(t, n, r, i, o, a) {
      n && o && (e.logEvent('CONTENT_DOCUMENT_LOADED', 'EMIT', 'scroll_view.js [ ' + i.href + ' ]'), le.emit(e.Events.CONTENT_DOCUMENT_LOADED, r, i));
    }
    function D(e, t) {
      x();
      var n = (M(), C(e));
      ie.append(n.element()), n.loadSpineItem(e, function (e, r, i, o, a) {
        e ? (E(n), A(n, e, r, i, o, a)) : (console.error('Unable to load ' + i.href), _(n), n = void 0), t(n);
      });
    }
    function R(e, t) {
      var n, r, i, o, a = 0;
      if (void 0 !== t.scrollTop)
        a = t.scrollTop;
      else if (void 0 !== t.spineItemPageIndex) {
        var s;
        n = k(), s = t.spineItemPageIndex < 0 ? 0 : t.spineItemPageIndex >= n ? n - 1 : t.spineItemPageIndex, a = s * F();
      } else if (e && t.elementId) {
        if (o = U(e), i = e.getNavigator(), !(r = i.getElementById(t.elementId)) || !r.length)
          return void console.warn('Element id=' + t.elementId + ' not found!');
        if ($(e, r, 60))
          return void j(t.initiator, t.spineItem, t.elementId);
        var u = X(e, r);
        a = u.top + o.top;
      } else if (e && t.elementCfi) {
        o = U(e), i = e.getNavigator();
        var l = i.getDomRangeFromRangeCfi(t.elementCfi);
        if (!l)
          return void console.warn('Range for cfi=' + t.elementCfi + ' not found!');
        var c = Y(e, l);
        if (Q(c, 60))
          return void j(t.initiator, t.spineItem, t.elementId);
        a = c.top;
      } else if (t.firstPage)
        a = 0;
      else if (t.lastPage) {
        if (0 === (n = k()))
          return;
        a = q() - F() - 5;
      } else
        e ? (o = U(e), a = o.top) : a = 0;
      M() != a ? (ge = !0, y(a, t), setTimeout(function () {
        ge = !1;
      }, ue + 100)) : j(t.initiator, t.spineItem, t.elementId);
    }
    function k() {
      return Math.ceil(q() / F());
    }
    function j(t, n, r) {
      e.logEvent('InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED', 'EMIT', 'scroll_view.js'), le.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED, {
        paginationInfo: le.getPaginationInfo(),
        initiator: t,
        spineItem: n,
        elementId: r
      });
    }
    function M() {
      return ie[0].scrollTop;
    }
    function L() {
      return q() - (M() + F());
    }
    function F() {
      return ie.height();
    }
    function q() {
      return ie[0].scrollHeight;
    }
    function V() {
      var e = [], t = z(-ae);
      return O(function (n) {
        if (H(n, t))
          e.push(n);
        else if (e.length > 0)
          return !1;
        return !0;
      }, !1), e;
    }
    function H(e, t) {
      return G(W(U(e), t)) > 0;
    }
    function U(e) {
      var t = {
          top: 0,
          bottom: 0
        }, n = e.element(), r = n.position();
      if (ee) {
        var i = n.offsetParent();
        r.top -= i.scrollTop(), r.left -= i.scrollLeft();
      }
      return t.top = r.top + M(), t.bottom = t.top + e.getCalculatedPageHeight(), t;
    }
    function B(e) {
      var t, n = z(), r = void 0, i = {
          top: 0,
          bottom: 0
        }, o = !1;
      return O(function (a) {
        if (t = U(a), i.top = Math.max(t.top, n.top) - t.top, i.bottom = Math.min(t.bottom, n.bottom) - t.top, G(i) > 0) {
          if (o = !0, r = e(a, i))
            return !1;
        } else if (o)
          return !1;
        return !0;
      }, !1), r;
    }
    function z(e) {
      0 === e || e || (e = 0);
      var t = {
        top: M() - e,
        bottom: M() + F() + e
      };
      return t.top < 0 && (t.top = 0), t.bottom > q() && (t.bottom = q()), t;
    }
    function W(e, t) {
      return {
        top: Math.max(e.top, t.top),
        bottom: Math.min(e.bottom, t.bottom)
      };
    }
    function G(e) {
      return e.bottom < e.top ? 0 : e.bottom - e.top;
    }
    function $(e, t, n) {
      return Q(X(e, t), n);
    }
    function Q(e, t) {
      var n = z(), r = Math.min(G(n), G(e));
      return 0 === r && (r = 5), G(W(n, e)) / r * 100 >= t;
    }
    function X(e, t) {
      var n = U(e), r = {
          top: 0,
          bottom: 0
        };
      return r.top = t.offset().top + n.top, r.bottom = r.top + t.height(), r;
    }
    function Y(e, t) {
      var n = U(e), r = {
          top: 0,
          bottom: 0
        }, i = t.getBoundingClientRect();
      return r.top = i.top + n.top, r.bottom = r.top + i.height, r;
    }
    function J(e) {
      var t, n, r = V(), i = e(r), o = i.element().position().top;
      t = {
        top: Math.min(0, o),
        left: 0
      };
      var a = Math.min(i.element().height(), F());
      return o >= 0 && (a -= o), n = {
        width: i.element().width(),
        height: a
      }, e([
        i.getFirstVisibleCfi,
        i.getLastVisibleCfi
      ])(t, n);
    }
    function K(e, t) {
      return new i(e.idref, t);
    }
    var Z = !1, ee = !1;
    try {
      var te = t.fn.jquery.split('.');
      2 == parseInt(te[0]) && 2 == parseInt(te[1]) && 0 == parseInt(te[2]) && (ee = !0);
    } catch (e) {
      console.error(e);
    }
    t.extend(this, new r());
    var ne, re, ie, oe, ae = 5, se = 2000, ue = 300, le = this, ce = t(c.$viewport), fe = c.spine, de = c.userStyles, pe = !1, he = !1, ge = !1, me = !1;
    this.isContinuousScroll = function () {
      return f;
    }, this.render = function () {
      var e = a.loadTemplate('scrolled_book_frame', {});
      oe = t(e), ce.append(oe), ie = t('#scrolled-content-frame', oe), ie.css('overflow', ''), ie.css('overflow-y', 'auto'), ie.css('overflow-x', 'hidden'), ie.css('-webkit-overflow-scrolling', 'touch'), ie.css('width', '100%'), ie.css('height', '100%'), ie.css('position', 'relative');
      var r = d.viewerSettings();
      r && void 0 !== r.enableGPUHardwareAccelerationCSS3D || (r = new l({})), r.enableGPUHardwareAccelerationCSS3D && ie.css('transform', 'translateZ(0)'), le.applyStyles();
      var i = n.debounce(v, ue);
      return ie.on('scroll', function (e) {
        i(e), m();
      }), le;
    };
    var ve = !1;
    this.remove = function () {
      oe.remove();
    }, this.onViewportResize = function () {
    }, this.resetCurrentPosition = function () {
      re = void 0;
    }, this.saveCurrentPosition = function () {
      if (!ne) {
        var e = le.getFirstVisibleCfi(), t = fe.getItemById(e.idref);
        t && (re = new u(t, le), re.setElementCfi(e.contentCFI));
      }
    }, this.restoreCurrentPosition = function () {
      re && this.openPageInternal(re);
    };
    var ye = void 0;
    this.setViewSettings = function (e, t) {
      ye = e, O(function (n) {
        n.setViewSettings(e, t);
      }, !1);
    }, this.applyStyles = function () {
      a.setStyles(de.getStyles(), oe.parent()), S(a.Margins.fromElement(oe).padding);
    }, this.applyBookStyles = function () {
      O(function (e) {
        e.applyBookStyles();
      }, !1);
    }, this.openPageInternal = function (e) {
      pe = !0;
      var t = function (e, t) {
        ne = void 0, R(e, t), pe = !1, g(e);
      };
      if (e.spineItem) {
        var n = I(e.spineItem);
        n ? t(n, e) : (ne = e, me = !0, D(e.spineItem, function (n) {
          setTimeout(function () {
            me = !1;
          }, ue + 100), n && ne ? n.currentSpineItem() === ne.spineItem ? t(n, ne) : le.openPage(ne) : j(e.initiator, e.spineItem, e.elementId);
        }));
      } else
        t(void 0, e);
    }, this.openPage = function (e) {
      this.resetCurrentPosition(), re = e, this.openPageInternal(e);
    }, this.openPageNext = function (e) {
      var t;
      L() > 0 && (t = new u(void 0, e), t.scrollTop = M() + Math.min(L(), F() - ae), R(void 0, t));
    }, this.openPagePrev = function (e) {
      var t;
      M() > 0 && (t = new u(void 0, e), t.scrollTop = M() - (F() - ae), t.scrollTop < 0 && (t.scrollTop = 0), R(void 0, t));
    }, this.getPaginationInfo = function () {
      for (var e, t, n, r, i, a, s, u, l = z(), c = l.bottom - l.top, f = new o(fe, !1), d = V(), p = 0, h = d.length; p < h; p++)
        n = d[p], e = n.currentSpineItem(), r = U(n), i = Math.max(l.top - r.top, 0), a = Math.max(r.bottom - l.bottom, 0), s = Math.ceil(i / c), u = Math.ceil(a / c), t = s + u + 1, f.addOpenPage(s, t, e.idref, e.index);
      return f;
    }, this.bookmarkCurrentPage = function () {
      return le.getFirstVisibleCfi();
    }, this.getLoadedSpineItems = function () {
      var e = [];
      return O(function (t) {
        e.push(t.currentSpineItem());
      }, !1), e;
    }, this.getElement = function (e, t) {
      var n = void 0;
      return O(function (r) {
        return r.currentSpineItem().idref != e || (n = r.getNavigator().getElement(t), !1);
      }, !1), n;
    }, this.getElementById = function (e, t) {
      var n = void 0;
      return O(function (r) {
        return r.currentSpineItem().idref != e || (n = r.getNavigator().getElementById(t), !1);
      }, !1), n || void console.error('spine item is not loaded');
    }, this.getElementByCfi = function (e, t, n, r, i) {
      var o = void 0;
      return O(function (a) {
        return a.currentSpineItem().idref != e || (o = a.getNavigator().getElementByCfi(t, n, r, i), !1);
      }, !1), o || void console.error('spine item is not loaded');
    }, this.getFirstVisibleMediaOverlayElement = function () {
      return B(function (e, t) {
        return e.getNavigator().getFirstVisibleMediaOverlayElement(t);
      });
    }, this.insureElementVisibility = function (e, n, r) {
      var i = void 0;
      if (O(function (t) {
          return t.currentSpineItem().idref !== e || (i = t, !1);
        }, !1), !i)
        return void console.warn('Page for element ' + n + ' not found');
      var o = t(n), a = X(i, o);
      if (!Q(a, 60)) {
        var s = fe.getItemById(e), l = new u(s, r);
        l.scrollTop = a.top, le.openPage(l);
      }
    }, this.getVisibleElements = function (e, t) {
      var r = [];
      return O(function (i) {
        t ? r.push({
          elements: i.getVisibleElements(e),
          spineItem: i.currentSpineItem()
        }) : r = n.flatten([
          r,
          i.getVisibleElements(e)
        ], !0);
      }), r;
    }, this.getVisibleElementsWithFilter = function (e) {
      console.warn('getVisibleElementsWithFilter: Not implemented yet for scroll_view');
    }, this.isElementVisible = function (e) {
      console.warn('isElementVisible: Not implemented yet for scroll_view');
    }, this.getElements = function (e, t) {
      var n = I(e);
      if (n)
        return n.getElements(e, t);
    }, this.isNodeFromRangeCfiVisible = function (e, t) {
      var n = I(spineIdRef);
      if (n)
        return n.isNodeFromRangeCfiVisible(spineIdRef, t);
    }, this.isVisibleSpineItemElementCfi = function (e, t) {
      var n = I(e);
      if (n)
        return n.isVisibleSpineItemElementCfi(e, t);
    }, this.getNodeRangeInfoFromCfi = function (e, t) {
      var n = I(e);
      if (n)
        return n.isVisibleSpineItemElementCfi(e, t);
    }, this.getFirstVisibleCfi = function () {
      return J(n.first);
    }, this.getLastVisibleCfi = function () {
      return J(n.last);
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      return t && e.idref !== t.idref ? void console.error('getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref') : (e = e || {}, t = t || {}, B(function (r) {
        if (r.currentSpineItem().idref === e.idref)
          return r.getDomRangeFromRangeCfi(e.contentCFI, t.contentCFI, n);
      }));
    }, this.getRangeCfiFromDomRange = function (e) {
      return B(function (t) {
        return t.getRangeCfiFromDomRange(e);
      });
    }, this.getVisibleCfiFromPoint = function (e, t, n) {
      return B(function (r) {
        return K(r.currentSpineItem(), r.getVisibleCfiFromPoint(e, t, n));
      });
    }, this.getRangeCfiFromPoints = function (e, t, n, r) {
      return B(function (i) {
        return K(i.currentSpineItem(), i.getRangeCfiFromPoints(e, t, n, r));
      });
    }, this.getCfiForElement = function (e) {
      return B(function (t) {
        return K(t.currentSpineItem(), t.getCfiForElement(e).contentCFI);
      });
    }, this.getElementFromPoint = function (e, t) {
      return B(function (n) {
        return n.getElementFromPoint(e, t);
      });
    }, this.getStartCfi = function () {
      return B(function (e) {
        return e.getStartCfi();
      });
    }, this.getEndCfi = function () {
      return B(function (e) {
        return e.getEndCfi();
      });
    }, this.getNearestCfiFromElement = function (e) {
      return B(function (t) {
        return t.getNearestCfiFromElement(e);
      });
    };
  };
}(_readium_shared_js_globals, _jquery, _underscore, _eventEmitter, _readium_shared_js_models_bookmark_data, _readium_shared_js_models_current_pages_info, _readium_shared_js_helpers, _readium_shared_js_views_one_page_view, _readium_shared_js_models_page_open_request, _readium_shared_js_models_viewer_settings), _readium_shared_js_views_media_overlay_player = function (e, t, n, r, i, o, a, s) {
  return function (u, l) {
    function c(e) {
      var t = e.getSmil();
      if (w && w.smil == t ? w.reset() : w = new o(t), w.goToPar(e), !w.currentPar)
        return void console.error('playPar !_smilIterator.currentPar');
      d();
    }
    function f() {
      A.resetBlankPage(), M = setTimeout(function () {
        if (M) {
          if (A.resetBlankPage(), !w || !w.currentPar)
            return void A.reset();
          F = 0, h(w.currentPar.audio.clipEnd + 0.1, 2);
        }
      }, 2000), l({ isPlaying: !0 });
    }
    function d() {
      if (W = !1, !w || !w.currentPar)
        return void console.error('playCurrentPar !_smilIterator || !_smilIterator.currentPar ???');
      if (!w.smil.id)
        return E.reset(), A.resetTTS(), A.resetEmbedded(), void setTimeout(function () {
          f();
        }, 100);
      if (w.currentPar.audio.src) {
        A.resetTTS(), A.resetEmbedded(), A.resetBlankPage();
        var e = w.currentPar.audio.clipEnd - w.currentPar.audio.clipBegin;
        (e <= 0 || j > e) && (console.error('### MO XXX PAR OFFSET: ' + j + ' / ' + e), j = 0);
        var r = n.ResolveContentRef(w.currentPar.audio.src, w.smil.href), i = N.resolveRelativeUrlMO(r), o = w.currentPar.audio.clipBegin + j;
        E.playFile(w.currentPar.audio.src, i, o);
      } else {
        j = 0, E.reset();
        var s = w.currentPar.element;
        if (s) {
          F = 0;
          var u = s.nodeName ? s.nodeName.toLowerCase() : void 0;
          'audio' === u || 'video' === u ? (A.resetTTS(), A.resetBlankPage(), O && A.resetEmbedded(), O = s, O.pause(), O.currentTime = 0, O.play(), t(O).on('ended', A.onEmbeddedEnd), I = !0, setTimeout(function () {
            l({ isPlaying: !0 });
          }, 80)) : (A.resetEmbedded(), A.resetBlankPage(), x = s.textContent, x && '' != x ? U(x) : x = void 0);
        }
        var c = w.currentPar.cfi;
        if (c) {
          F = 0, A.resetEmbedded(), A.resetBlankPage(), D.reset();
          var d = c.cfiTextParent.ownerDocument, p = 'epubcfi(' + c.partialStartCfi + ')', h = (a.getTextTerminusInfoWithPartialCFI(p, d, [
              'cfi-marker',
              'mo-cfi-highlight'
            ], [], ['MathJax_Message']), 'epubcfi(' + c.partialEndCfi + ')');
          a.getTextTerminusInfoWithPartialCFI(h, d, [
            'cfi-marker',
            'mo-cfi-highlight'
          ], [], ['MathJax_Message']);
          x = void 0, x && '' != x ? U(x) : x = void 0;
        }
      }
      j = 0, b();
    }
    function p(e) {
      A.pause();
      var t = e ? N.media_overlay.getNextSmil(w.smil) : N.media_overlay.getPreviousSmil(w.smil);
      if (t) {
        if (w = new o(t), w.currentPar) {
          if (!e)
            for (; !w.isLast();)
              w.next();
          u.openContentUrl(w.currentPar.text.src, w.smil.href, A);
        }
      } else
        console.log('No more SMIL'), A.reset();
    }
    function h(e, t, n) {
      if (F = e, L = !1, w && w.currentPar) {
        var r = w.currentPar, i = w.currentPar.audio;
        if (!(e > q && e <= i.clipEnd)) {
          L = !0;
          var o = E.isPlaying();
          o && 6 === t && console.debug('from userNav _audioPlayer.isPlaying() ???');
          var a = e > i.clipEnd, s = !$ && 6 !== t && a, u = w && w.smil && w.smil.spineItemId ? w.smil.spineItemId : k && k.spineItem && k.spineItem.idref ? k.spineItem.idref : void 0;
          if (s && u && k && k.paginationInfo && k.paginationInfo.openPages && k.paginationInfo.openPages.length > 1) {
            u === k.paginationInfo.openPages[0].idref && (s = !1);
          }
          if (a ? w.next() : w.previous(), !w.currentPar)
            return void (s ? (G = !0, A.reset()) : p(a));
          if (!w.currentPar.audio)
            return void A.pause();
          if (P.mediaOverlaysSkipSkippables) {
            for (var l = !1, c = w.currentPar; c;) {
              if (c.isSkippable && c.isSkippable(P.mediaOverlaysSkippables)) {
                l = !0;
                break;
              }
              c = c.parent;
            }
            if (l) {
              console.log('MO SKIP: ' + c.epubtype), A.pause();
              return void h(a ? w.currentPar.audio.clipEnd + 0.1 : q - 1, t, !0);
            }
          }
          if (!o && (w.currentPar.element || w.currentPar.cfi && w.currentPar.cfi.cfiTextParent)) {
            var f = D.adjustParToSeqSyncGranularity(w.currentPar);
            if (f && f !== w.currentPar) {
              var g = D.adjustParToSeqSyncGranularity(r);
              if (g && (g === f || !a)) {
                if (g === f) {
                  do {
                    a ? w.next() : w.previous();
                  } while (w.currentPar && w.currentPar.hasAncestor(g));
                  if (!w.currentPar)
                    return void (s ? (G = !0, A.reset()) : p(a));
                }
                if (!a) {
                  var m = D.adjustParToSeqSyncGranularity(w.currentPar);
                  if (m && m !== w.currentPar) {
                    var v = w.currentPar, y = void 0;
                    do {
                      y = w.currentPar, w.previous();
                    } while (w.currentPar && w.currentPar.hasAncestor(m));
                    w.currentPar ? (w.next(), w.currentPar.hasAncestor(m) || console.error('adjustParToSeqSyncGranularity !_smilIterator.currentPar.hasAncestor(landed) ???')) : (w.reset(), w.currentPar !== y && console.error('adjustParToSeqSyncGranularity _smilIterator.currentPar !=== innerPar???')), w.currentPar || (console.error('adjustParToSeqSyncGranularity !_smilIterator.currentPar ?????'), w.goToPar(v));
                  }
                }
              }
            }
          }
          if (E.isPlaying() && w.currentPar.audio.src && w.currentPar.audio.src == E.currentSmilSrc() && e >= w.currentPar.audio.clipBegin && e <= w.currentPar.audio.clipEnd)
            return void b();
          d();
        }
      }
    }
    function g(e) {
      if (!H || H[0].ownerDocument !== e[0].ownerDocument) {
        $head = t('head', e[0].ownerDocument.documentElement), H = t('<style type=\'text/css\'> </style>').appendTo($head), H.append('.tts_on{background-color:red;color:white;} .tts_off{}');
      }
    }
    function m() {
      v();
      var e = function () {
        if (w && w.currentPar) {
          var e = w.smil;
          if (e.mo) {
            var t = F - w.currentPar.audio.clipBegin;
            if (!(t <= 0)) {
              for (var n = e.mo.smil_models.indexOf(e), r = new o(e), i = -1; r.currentPar && (i++, r.currentPar != w.currentPar);)
                r.next();
              l({
                playPosition: t,
                smilIndex: n,
                parIndex: i
              });
            }
          }
        }
      };
      setTimeout(e, 500), z = setInterval(e, 1500);
    }
    function v() {
      F = 0, void 0 !== z && clearInterval(z), z = void 0;
    }
    function y() {
      return v(), L ? void (L = !1) : w && w.currentPar ? void h(w.currentPar.audio.clipEnd + 0.1, 5) : void A.reset();
    }
    function b() {
      if (w && w.currentPar) {
        if (w.currentPar.text.srcFragmentId && w.currentPar.text.srcFragmentId.length > 0) {
          if (w.currentPar.element)
            return void (D.isElementHighlighted(w.currentPar) || (D.highlightElement(w.currentPar, N.media_overlay.activeClass, N.media_overlay.playbackActiveClass), W || u.insureElementVisibility(w.currentPar.getSmil().spineItemId, w.currentPar.element, A)));
          if (w.currentPar.cfi)
            return void (D.isCfiHighlighted(w.currentPar) || (D.highlightCfi(w.currentPar, N.media_overlay.activeClass, N.media_overlay.playbackActiveClass), W || u.insureElementVisibility(w.currentPar.getSmil().spineItemId, w.currentPar.cfi.cfiTextParent, A)));
        }
        if (!w.currentPar.element) {
          var e = w.currentPar.text.src, t = w.smil.href;
          w = void 0, u.openContentUrl(e, t, A);
        }
      }
    }
    var w = void 0, E = new r(l, h, y, m, v), T = !1, x = void 0, _ = void 0 !== window.speechSynthesis && null != speechSynthesis, S = void 0, C = !1, I = !1, O = void 0;
    this.isPlaying = function () {
      return E.isPlaying() || T || I || M;
    };
    var N = u.package(), P = u.viewerSettings(), A = this, D = new i(u);
    u.on(e.Events.READER_VIEW_DESTROYED, function () {
      e.logEvent('READER_VIEW_DESTROYED', 'ON', 'media_overlay_player.js'), A.reset();
    }), this.applyStyles = function () {
      D.reDo();
    }, this.onSettingsApplied = function () {
      E.setRate(P.mediaOverlaysRate), E.setVolume(P.mediaOverlaysVolume / 100);
    }, A.onSettingsApplied(), u.on(e.Events.SETTINGS_APPLIED, function () {
      e.logEvent('SETTINGS_APPLIED', 'ON', 'media_overlay_player.js'), this.onSettingsApplied();
    }, this);
    var R = !1;
    this.onDocLoadStart = function () {
      A.isPlaying() && (R = !0, A.pause());
    };
    var k = void 0;
    this.onPageChanged = function (e) {
      k = e;
      var n = G;
      G = !1;
      var r = R;
      if (R = !1, !e)
        return void A.reset();
      var i = void 0;
      if (e.elementId || e.initiator == A) {
        for (var o = u.getLoadedSpineItems(), a = u.spine().isRightToLeft(), s = a ? o.length - 1 : 0; a && s >= 0 || !a && s < o.length; s += a ? -1 : 1) {
          var l = o[s];
          if (!e.spineItem || e.spineItem == l) {
            if (e.elementId && 0 === e.elementId.indexOf('epubcfi')) {
              D.reset();
              var f = e.elementId.substr('epubcfi'.length + 1, e.elementId.length - 'epubcfi'.length - 2);
              0 === f.indexOf('/99!') && (f = f.substr('/99!'.length, f.length - '/99!'.length));
              var p = f.split(',');
              if (p && 3 === p.length)
                try {
                  var h = p[0] + p[1], g = u.getElementByCfi(l.idref, h, [
                      'cfi-marker',
                      'mo-cfi-highlight'
                    ], [], ['MathJax_Message']);
                  if (i = g && g.length > 0 ? g[0] : void 0) {
                    i.nodeType === Node.TEXT_NODE && (i = i.parentNode);
                    break;
                  }
                } catch (e) {
                  console.error(e);
                }
              else
                try {
                  var g = u.getElementByCfi(l.idref, f, [
                    'cfi-marker',
                    'mo-cfi-highlight'
                  ], [], ['MathJax_Message']);
                  if (i = g && g.length > 0 ? g[0] : void 0) {
                    i.nodeType === Node.TEXT_NODE && (i = i.parentNode);
                    break;
                  }
                } catch (e) {
                  console.error(e);
                }
            }
            if (!i) {
              if (e.initiator != A || e.elementId) {
                var g = u.getElementById(l.idref, e.elementId);
                i = g && g.length > 0 ? g[0] : void 0;
              } else {
                var g = u.getElement(l.idref, 'body');
                i = g && g.length > 0 ? g[0] : void 0;
              }
              if (i)
                break;
            }
          }
        }
        i || console.error('paginationData.elementId BUT !element: ' + e.elementId);
      }
      var m = A.isPlaying() || r;
      if (!w || !w.currentPar) {
        if (e.initiator !== A)
          return j = 0, A.reset(), void (e.elementId && i ? (m || n) && (e.elementIdResolved = i, A.toggleMediaOverlayRefresh(e)) : (m || n) && A.toggleMediaOverlay());
        if (!i)
          return console.error('!element: ' + e.elementId), void (j = 0);
        var v = t(i).data('mediaOverlayData');
        if (!v)
          return console.error('!moData: ' + e.elementId), void (j = 0);
        var y = v.par ? v.par : v.pars[0];
        if (v.pars)
          for (var E = 0; E < v.pars.length; E++) {
            var T = v.pars[E];
            if (e.elementId === T.cfi.smilTextSrcCfi) {
              y = T;
              break;
            }
          }
        return void c(y);
      }
      var x = !w.currentPar.element && !w.currentPar.cfi;
      if (x && console.error('!! _smilIterator.currentPar.element ??'), e.initiator == A) {
        var _ = e.elementId && e.elementId !== w.currentPar.text.srcFragmentId;
        if (_ && console.error('!! paginationData.elementId !== _smilIterator.currentPar.text.srcFragmentId'), _ || x)
          return void (j = 0);
        m ? b() : d();
      } else {
        if (!m && !n)
          return void A.reset();
        if (e.elementId, e.elementId && !i)
          return;
        e.elementId && (e.elementIdResolved = i), A.toggleMediaOverlayRefresh(e);
      }
    };
    var j = 0, M = void 0, L = !1, F = 0, q = -999;
    this.touchInit = function () {
      return E.touchInit();
    };
    var V = function (e) {
        var t = [
            'p',
            'div',
            'pagenum',
            'td',
            'table',
            'li',
            'ul',
            'ol'
          ], n = [
            ',',
            ';',
            '.',
            '-',
            '??',
            '??',
            '?',
            '!'
          ], r = function (e, t) {
            if (!(e.word.length <= 0)) {
              var n = e.text.length;
              t.spanMap[n] = e.counter, e.text += e.word, e.markup += e.html.substring(0, e.wordStart) + '<span class="tts_off" id="tts_' + e.counter + '">' + e.html.substring(e.wordStart, e.wordEnd) + '</span>' + e.html.substring(e.wordEnd, e.html.length), e.word = '', e.html = '', e.wordStart = -1, e.wordEnd = -1, e.counter++;
            }
          }, i = {
            element: e,
            innerHTML_tts: '',
            spanMap: {},
            text: '',
            lastCharIndex: void 0
          };
        i.element.innerHTML_original = e.innerHTML;
        for (var o = {
              inTag: !1,
              counter: 0,
              wordStart: -1,
              wordEnd: -1,
              text: '',
              markup: '',
              word: '',
              html: ''
            }, a = i.element.innerHTML_original.length, s = 0; s <= a;) {
          if (o.inTag) {
            if (o.html += i.element.innerHTML_original[s], '>' == i.element.innerHTML_original[s]) {
              o.inTag = !1;
              var u = o.html.match(/<\/(.*?)>$/);
              u && t.indexOf(u[1]) > -1 && (r(o, i), o.text += ' ');
            }
          } else
            s == a || i.element.innerHTML_original[s].match(/\s/) ? (r(o, i), s < a && (o.text += i.element.innerHTML_original[s], o.markup += i.element.innerHTML_original[s])) : n.indexOf(i.element.innerHTML_original[s]) > -1 ? (r(o, i), o.wordStart = o.html.length, o.wordEnd = o.html.length + 1, o.word += i.element.innerHTML_original[s], o.html += i.element.innerHTML_original[s], r(o, i)) : '<' == i.element.innerHTML_original[s] ? (o.inTag = !0, o.html += i.element.innerHTML_original[s]) : (0 == o.word.length && (o.wordStart = o.html.length), o.wordEnd = o.html.length + 1, o.word += i.element.innerHTML_original[s], o.html += i.element.innerHTML_original[s]);
          s++;
        }
        return i.text = o.text, i.innerHTML_tts = o.markup, i.element.innerHTML = i.innerHTML_tts, i;
      }, H = void 0, U = function (n, r) {
        function i(e) {
          e || window.speechSynthesis.pending ? (console.debug('TTS cancel before speak'), window.speechSynthesis.cancel(), setTimeout(function () {
            i(!1);
          }, 5)) : o();
        }
        function o() {
          S = new SpeechSynthesisUtterance(), C && a && (S.tokenData = a, S.onboundary = function (e) {
            if (S) {
              console.debug('TTS boundary: ' + e.name + ' / ' + e.charIndex);
              var t = e.target.tokenData;
              if (t && t.spanMap.hasOwnProperty(e.charIndex)) {
                var n;
                [].forEach.call(t.element.querySelectorAll('.tts_on'), function (e) {
                  console.debug('TTS OFF ' + e.id), e.className = 'tts_off';
                });
                var n = 'tts_' + t.spanMap[e.charIndex];
                console.debug('TTS charIndex ID: ' + n);
                var r = t.element.querySelector('#' + n);
                r && (console.debug('TTS ON'), r.className = 'tts_on'), t.lastCharIndex = e.charIndex;
              }
            }
          }), S.onend = function (e) {
            if (S)
              if (console.debug('TTS ended'), C) {
                var t = e.target.tokenData, n = !e.forceSkipEnd && S === e.target && (!t || t.element.innerHTML_original);
                t && (t.element.innerHTML_original ? t.element.innerHTML = t.element.innerHTML_original : [].forEach.call(t.element.querySelectorAll('.tts_on'), function (e) {
                  console.debug('TTS OFF (end)' + e.id), e.className = 'tts_off';
                }), t.element.innerHTML_original = void 0), n ? A.onTTSEnd() : console.debug('TTS end SKIPPED');
              } else
                A.onTTSEnd();
          }, S.onerror = function (e) {
            if (S && (console.error('TTS error'), console.debug(S.text), console.debug(window.speechSynthesis.paused), console.debug(window.speechSynthesis.pending), console.debug(window.speechSynthesis.speaking), C)) {
              var t = e.target.tokenData;
              t && (t.element.innerHTML_original ? t.element.innerHTML = t.element.innerHTML_original : [].forEach.call(t.element.ownerDocument.querySelectorAll('.tts_on'), function (e) {
                console.debug('TTS OFF (error)' + e.id), e.className = 'tts_off';
              }), t.element.innerHTML_original = void 0);
            }
          };
          var e = r || E.getVolume();
          S.volume = e, S.rate = E.getRate(), S.pitch = 1, S.text = f, window.speechSynthesis.speak(S), window.speechSynthesis.paused && (console.debug('TTS resume'), window.speechSynthesis.resume());
        }
        var a = void 0, s = w && w.currentPar ? w.currentPar : void 0, c = s ? s.element : void 0;
        s && s.cfi;
        if ((!r || r > 0) && (setTimeout(function () {
            l({ isPlaying: !0 });
          }, 80), T = !0, C && c)) {
          g(t(c)), c.innerHTML_original && (c.innerHTML = c.innerHTML_original, c.innerHTML_original = void 0), a = V(c);
        }
        if (!_)
          return e.logEvent('MEDIA_OVERLAY_TTS_SPEAK', 'EMIT', 'media_overlay_player.js'), void u.emit(e.Events.MEDIA_OVERLAY_TTS_SPEAK, { tts: n });
        if (!n && window.speechSynthesis.paused)
          return void window.speechSynthesis.resume();
        var f = n || x;
        f && (S && (C && (S.onend && S.onend({
          forceSkipEnd: !0,
          target: S
        }), S.tokenData = void 0, S.onboundary = void 0), S.onend = void 0, S.onerror = void 0, S = void 0), console.debug('paused: ' + window.speechSynthesis.paused), console.debug('speaking: ' + window.speechSynthesis.speaking), console.debug('pending: ' + window.speechSynthesis.pending), i(!0));
      }, B = function () {
        var t = T;
        if (t && l({ isPlaying: !1 }), T = !1, !_)
          return void (t && (e.logEvent('MEDIA_OVERLAY_TTS_STOP', 'EMIT', 'media_overlay_player.js'), u.emit(e.Events.MEDIA_OVERLAY_TTS_STOP, void 0)));
        window.speechSynthesis.pause();
      }, z = void 0;
    this.onEmbeddedEnd = function () {
      if (F = 0, I = !1, !w || !w.currentPar)
        return void A.reset();
      h(w.currentPar.audio.clipEnd + 0.1, 3);
    }, this.onTTSEnd = function () {
      if (F = 0, T = !1, !w || !w.currentPar)
        return void A.reset();
      h(w.currentPar.audio.clipEnd + 0.1, 4);
    }, this.escape = function () {
      if (!w || !w.currentPar)
        return void this.toggleMediaOverlay();
      if (!A.isPlaying())
        return void A.play();
      if (P.mediaOverlaysEscapeEscapables)
        for (var e = w.currentPar; e;) {
          if (e.isEscapable && e.isEscapable(P.mediaOverlaysEscapables)) {
            do {
              w.next();
            } while (w.currentPar && w.currentPar.hasAncestor(e));
            return w.currentPar ? void d() : void p(!0);
          }
          e = e.parent;
        }
      this.nextMediaOverlay(!0);
    }, this.playUserPar = function (e) {
      if (A.isPlaying() && A.pause(), e.element || e.cfi && e.cfi.cfiTextParent) {
        var t = D.adjustParToSeqSyncGranularity(e);
        if (t && t !== e) {
          var n = function (e) {
              if (e.nodeType && 'par' === e.nodeType)
                return e;
              if (e.children && !(e.children.length <= 0))
                for (var t = 0; t < e.children.length; t++) {
                  var r = e.children[t], i = n(r);
                  if (i)
                    return i;
                }
            }, r = n(t);
          r && (e = r);
        }
      }
      c(e);
    }, this.resetTTS = function () {
      x = void 0, B();
    }, this.resetBlankPage = function () {
      var e = !1;
      if (M) {
        e = !0;
        var t = M;
        M = void 0, clearTimeout(t);
      }
      M = void 0, e && l({ isPlaying: !1 });
    }, this.resetEmbedded = function () {
      var e = I;
      O && (t(O).off('ended', A.onEmbeddedEnd), O.pause()), O = void 0, e && l({ isPlaying: !1 }), I = !1;
    }, this.reset = function () {
      j = 0, E.reset(), A.resetTTS(), A.resetEmbedded(), A.resetBlankPage(), D.reset(), w = void 0, L = !1;
    }, this.play = function () {
      if (w && w.smil && !w.smil.id)
        return void f();
      if (O)
        I = !0, O.play(), l({ isPlaying: !0 });
      else if (x)
        U(void 0);
      else if (!E.play())
        return console.log('Audio player was dead, reactivating...'), this.reset(), void this.toggleMediaOverlay();
      b();
    }, this.pause = function () {
      W = !1, M ? this.resetBlankPage() : I ? (I = !1, O && O.pause(), l({ isPlaying: !1 })) : T ? B() : E.pause(), D.reset();
    }, this.isMediaOverlayAvailable = function () {
      return void 0 !== u.getFirstVisibleMediaOverlayElement();
    }, this.nextOrPreviousMediaOverlay = function (e) {
      if (A.isPlaying())
        A.pause();
      else if (w && w.currentPar)
        return void A.play();
      if (!w)
        return void this.toggleMediaOverlay();
      h(e ? q - 1 : w.currentPar.audio.clipEnd + 0.1, 6);
    }, this.nextMediaOverlay = function () {
      this.nextOrPreviousMediaOverlay(!1);
    }, this.previousMediaOverlay = function () {
      this.nextOrPreviousMediaOverlay(!0);
    }, this.mediaOverlaysOpenContentUrl = function (e, t, n) {
      j = n, w = void 0, u.openContentUrl(e, t, A);
    }, this.toggleMediaOverlay = function () {
      return A.isPlaying() ? void A.pause() : w ? void A.play() : void this.toggleMediaOverlayRefresh(void 0);
    };
    var W = !1;
    this.toggleMediaOverlayRefresh = function (e) {
      var n = u.getLoadedSpineItems(), r = u.spine().isRightToLeft(), i = void 0, a = A.isPlaying();
      if (a && w) {
        if (e.initiator && e.initiator instanceof s && P.mediaOverlaysPreservePlaybackWhenScroll)
          return void (W = !0);
        i = w.currentPar, A.pause();
      }
      W = !1;
      var l = e && e.elementIdResolved ? e.elementIdResolved : void 0, c = e && e.elementId ? e.elementId : void 0;
      if (!l) {
        c && console.error('[WARN] id did not resolve to element?');
        for (var f = r ? n.length - 1 : 0; r && f >= 0 || !r && f < n.length; f += r ? -1 : 1) {
          var p = n[f];
          if (p) {
            if (!e || !e.spineItem || e.spineItem == p) {
              if (c) {
                var h = u.getElementById(p.idref, c);
                l = h && h.length > 0 ? h[0] : void 0;
              } else if (p.isFixedLayout() && e && e.paginationInfo && e.paginationInfo.openPages) {
                if (e.paginationInfo.openPages[0] && e.paginationInfo.openPages[0].idref && e.paginationInfo.openPages[0].idref === p.idref) {
                  var h = u.getElement(p.idref, 'body');
                  l = h && h.length > 0 ? h[0] : void 0;
                }
              }
              if (l)
                break;
            }
          } else
            console.error('spineItems[i] is undefined??');
        }
      }
      if (l || (l = u.getFirstVisibleMediaOverlayElement()), !l)
        return void A.reset();
      var g = t(l).data('mediaOverlayData');
      if (!g) {
        for (var m = !1, v = function (e) {
              if (!e)
                return !1;
              for (var n = 0; n < e.length; n++) {
                if (l === e[n] && (m = !0), m) {
                  var r = t(e[n]).data('mediaOverlayData');
                  if (r)
                    return g = r, !0;
                }
                if (v(e[n].children))
                  return !0;
              }
              return !1;
            }, y = l; y && 'body' !== y.nodeName.toLowerCase();)
          y = y.parentNode;
        if (!y)
          return void A.reset();
        v([y]);
      }
      if (!g)
        return void A.reset();
      var b = g.par ? g.par : g.pars[0], E = b.getSmil();
      if (w && w.smil == E ? w.reset() : w = new o(E), w.goToPar(b), !w.currentPar && c && (w.reset(), w.findTextId(c)), !w.currentPar)
        return void A.reset();
      a && i && i === w.currentPar ? A.play() : d();
    }, this.isPlayingCfi = function () {
      return w && w.currentPar && w.currentPar.cfi;
    };
    var G = !1, $ = !0;
    this.setAutomaticNextSmil = function (e) {
      $ = e;
    };
  };
}(_readium_shared_js_globals, _jquery, _readium_shared_js_helpers, _readium_shared_js_views_audio_player, _readium_shared_js_views_media_overlay_element_highlighter, _readium_shared_js_models_smil_iterator, _readium_cfi_js, _readium_shared_js_views_scroll_view), _readium_shared_js_views_reflowable_view = function (e, t, n, r, i, o, a, s, u, l, c) {
  return function (f, d) {
    function p(e) {
      M.css('left', e.left + 'px'), M.css('top', e.top + 'px'), M.css('right', e.right + 'px'), M.css('bottom', e.bottom + 'px');
    }
    function h() {
      return {
        width: q[0].clientWidth,
        height: q[0].clientHeight
      };
    }
    function g() {
      return se.rightToLeft && !se.isVerticalWritingMode ? -se.pageOffset : se.pageOffset;
    }
    function m() {
      var e = g();
      return se.isVerticalWritingMode ? {
        top: e,
        left: 0
      } : {
        top: 0,
        left: e
      };
    }
    function v() {
      M && M.remove();
      var e = s.loadTemplate('reflowable_book_page_frame', {}), n = t(e);
      n = F.append(n), M = t('#reflowable-content-frame', n), q = t('#epubContentIframe', n), q.css('left', ''), q.css('right', ''), q.css('position', 'relative'), q.css('overflow', 'hidden'), L = new o({
        $iframe: q,
        frameDimensionsGetter: h,
        paginationInfo: se,
        paginationOffsetsGetter: m,
        classBlacklist: te,
        elementBlacklist: ne,
        idBlacklist: re
      });
    }
    function y(t) {
      if (k != t) {
        v(), k && (e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'EMIT', 'reflowable_view.js [ ' + k.href + ' ]'), W.emit(e.Events.CONTENT_DOCUMENT_UNLOADED, q, k)), W.resetCurrentPosition(), se.pageOffset = 0, se.currentSpreadIndex = 0, se.currentPageIndex = 0, k = t, k.paginationInfo = se, J = !0;
        var n = $.package.resolveRelativeUrl(t.href);
        e.logEvent('CONTENT_DOCUMENT_LOAD_START', 'EMIT', 'reflowable_view.js [ ' + t.href + ' -- ' + n + ' ]'), W.emit(e.Events.CONTENT_DOCUMENT_LOAD_START, q, t), q.css('opacity', '0.01'), Y.loadIframe(q[0], n, E, W, { spineItem: t });
      }
    }
    function b() {
      if (V) {
        var e = Z, t = !d.fonts || !d.fonts.length || e <= 0 || e - 1 >= d.fonts.length, n = t ? {} : d.fonts[e - 1];
        s.UpdateHtmlFontAttributes(V, K, n, function () {
          W.applyStyles();
        });
      }
    }
    function w() {
      V && V.css('column-gap', se.columnGap + 'px');
    }
    function E(n) {
      if (J = !1, j && j.spineItem != k)
        return void y(j.spineItem);
      if (!n)
        return q.css('opacity', '1'), void (j = void 0);
      e.logEvent('CONTENT_DOCUMENT_LOADED', 'EMIT', 'reflowable_view.js [ ' + k.href + ' ]'), W.emit(e.Events.CONTENT_DOCUMENT_LOADED, q, k);
      var r = q[0].contentDocument;
      V = t('html', r), H = t('body', V), U = !1, B = !0, z = void 0;
      var i = q[0].contentDocument.defaultView || q[0].contentWindow, o = i.getComputedStyle(H[0], null);
      if (o) {
        B = 'ltr' === o.direction;
        var a = void 0;
        a = o.getPropertyValue ? o.getPropertyValue('-webkit-writing-mode') || o.getPropertyValue('-moz-writing-mode') || o.getPropertyValue('-ms-writing-mode') || o.getPropertyValue('-o-writing-mode') || o.getPropertyValue('-epub-writing-mode') || o.getPropertyValue('writing-mode') : o.webkitWritingMode || o.mozWritingMode || o.msWritingMode || o.oWritingMode || o.epubWritingMode || o.writingMode, a && (z = a.indexOf('-lr') >= 0, (a.indexOf('vertical') >= 0 || a.indexOf('tb-') >= 0 || a.indexOf('bt-') >= 0) && (U = !0));
      }
      B && ('rtl' !== H[0].getAttribute('dir') && 'rtl' !== V[0].getAttribute('dir') || (B = !1)), $.isLeftToRight() || !B || U || (H[0].setAttribute('dir', 'rtl'), B = !1, z = !1), se.isVerticalWritingMode = U, N(), q.css('opacity', '1'), S(), V.css('height', oe.height + 'px'), V.css('position', 'relative'), V.css('margin', '0'), V.css('padding', '0'), V.css('column-axis', U ? 'vertical' : 'horizontal'), W.applyBookStyles(), D(), w(), b();
    }
    function T() {
      if (j) {
        var e = j;
        j = void 0, W.openPage(e);
      }
    }
    function x(e) {
      if (J)
        return j = e, !1;
      if (e.spineItem && e.spineItem != k)
        return j = e, y(e.spineItem), !0;
      var t = void 0;
      if (void 0 !== e.spineItemPageIndex)
        t = e.spineItemPageIndex;
      else if (e.elementId)
        t = se.currentPageIndex + L.getPageIndexDeltaForElementId(e.elementId);
      else if (e.firstVisibleCfi && e.lastVisibleCfi) {
        var n, r;
        try {
          n = L.getPageIndexDeltaForCfi(e.firstVisibleCfi, te, ne, re);
        } catch (e) {
          n = 0, console.error(e);
        }
        try {
          r = L.getPageIndexDeltaForCfi(e.lastVisibleCfi, te, ne, re);
        } catch (e) {
          r = 0, console.error(e);
        }
        t = se.currentPageIndex + Math.round((n + r) / 2);
      } else if (e.elementCfi)
        try {
          t = se.currentPageIndex + L.getPageIndexDeltaForCfi(e.elementCfi, te, ne, re);
        } catch (e) {
          t = 0, console.error(e);
        }
      else
        e.firstPage ? t = 0 : e.lastPage ? t = se.columnCount - 1 : (console.debug('No criteria in pageRequest'), t = 0);
      return (t < 0 || t > se.columnCount) && (console.log('Illegal pageIndex value: ', t, 'column count is ', se.columnCount), t = t < 0 ? 0 : se.columnCount), se.currentPageIndex = t, se.currentSpreadIndex = Math.floor(t / se.visibleColumnCount), le(e.initiator, e.spineItem, e.elementId), !0;
    }
    function _() {
      var e = -se.pageOffset + 'px';
      if (U)
        V.css('top', e);
      else {
        var t = B || z;
        V.css('left', t ? e : ''), V.css('right', t ? '' : e);
      }
      P();
    }
    function S() {
      var e = M.width();
      e -= e % 2;
      var t = M.height();
      return (oe.width !== e || oe.height !== t) && (oe.width = e, oe.height = t, !0);
    }
    function C(t, r, i) {
      se.currentPageIndex = se.currentSpreadIndex * se.visibleColumnCount, se.pageOffset = (se.columnWidth + se.columnGap) * se.visibleColumnCount * se.currentSpreadIndex, _(), n.defer(function () {
        void 0 == ee && W.saveCurrentPosition(), e.logEvent('InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED', 'EMIT', 'reflowable_view.js'), W.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED, {
          paginationInfo: W.getPaginationInfo(),
          initiator: t,
          spineItem: r,
          elementId: i
        });
      });
    }
    function I() {
      var e = se.columnMaxWidth, t = se.columnMinWidth, n = s.deduceSyntheticSpread(G, k, ue), r = !1 === n || !0 === n;
      if (0 === n && (n = 1), se.visibleColumnCount = n ? 2 : 1, U && (e *= 2, n = !1, r = !0, se.visibleColumnCount = 1), V) {
        N();
        var i = parseInt(G.css('border-left-width')), o = se.columnGap / 2;
        o = Math.max(0, o - i);
        var a = parseInt(G.css('border-right-width')), u = se.columnGap / 2;
        u = Math.max(0, u - a);
        var l = G.width(), c = l - o - u;
        n && (c = 0.5 * (c - se.columnGap));
        var f = 0;
        if (c > e) {
          var d = c - e;
          f = Math.floor(d * (n ? 1 : 0.5));
        } else
          !r && c < t && n && (n = !1, se.visibleColumnCount = 1, (c = l - o - u) > e && (f = Math.floor(0.5 * (c - e))));
        F.css({
          left: f + o + 'px',
          right: f + u + 'px'
        }), S();
        var p = F.width();
        n && (p = (p - se.columnGap) / 2), p = Math.floor(p), p - 1 > e && console.debug('resultingColumnWidth > MAXW ! ' + p + ' > ' + e), q.css('width', oe.width + 'px'), q.css('height', oe.height + 'px'), V.css('height', oe.height + 'px'), V.css('min-height', oe.height + 'px'), V.css('max-height', oe.height + 'px'), V.css('margin', 0), V.css('padding', 0), V.css('border', 0), H.css('position', 'relative'), H.css('margin', 0), H.css('padding', 0), se.rightToLeft = $.isRightToLeft(), se.columnWidth = Math.round(((U ? oe.height : oe.width) - se.columnGap * (se.visibleColumnCount - 1)) / se.visibleColumnCount);
        se.visibleColumnCount > 1 ? (V.css('width', oe.width + 'px'), V.css('column-width', 'auto'), V.css('column-count', se.visibleColumnCount)) : (V.css('width', (U ? oe.width : se.columnWidth) + 'px'), V.css('column-count', 'auto'), V.css('column-width', se.columnWidth + 'px')), V.css('column-fill', 'auto'), V.css({
          left: '0',
          right: '0',
          top: '0'
        }), s.triggerLayout(q);
        var h = U ? V[0].scrollHeight : V[0].scrollWidth;
        0 == h && console.error('Document dimensions zero?!'), se.columnCount = (h + se.columnGap) / (se.columnWidth + se.columnGap), se.columnCount = Math.round(se.columnCount), 0 == se.columnCount && console.error('Column count zero?!');
        var g = (se.columnCount - 1) * se.columnGap, m = (h - g) / se.columnCount;
        m = Math.round(m), m > se.columnWidth && (console.debug('ADJUST COLUMN'), console.log(se.columnWidth), console.log(m), se.columnWidth = m), se.spreadCount = Math.ceil(se.columnCount / se.visibleColumnCount), se.currentSpreadIndex >= se.spreadCount && (se.currentSpreadIndex = se.spreadCount - 1), j ? T() : ee ? (se.currentPageIndex = 0, W.restoreCurrentPosition()) : le(W, k), O();
      }
    }
    function O() {
      var e = H[0];
      e.resizeSensor || (ae.width = t(e).width(), ae.height = t(e).height(), e.resizeSensor = new c(e, function () {
        var n = {
          width: t(e).width(),
          height: t(e).height()
        };
        console.debug('ReflowableView content resized ...', n.width, n.height, k.idref), n.width != ae.width || n.height != ae.height ? (ae.width = n.width, ae.height = n.height, console.debug('... updating pagination.'), ce()) : console.debug('... ignored (identical dimensions).');
      }));
    }
    function N() {
      -1 == ie && (ie = V[0].style.opacity, V.css('opacity', '0'));
    }
    function P() {
      -1 != ie && V.css('opacity', ie), ie = -1;
    }
    function A() {
      for (var e = [], t = se.currentSpreadIndex * se.visibleColumnCount, n = 0; n < se.visibleColumnCount && t + n < se.columnCount; n++)
        e.push(t + n);
      return e;
    }
    function D() {
      if (V) {
        var e;
        t('img, svg', V).each(function () {
          e = t(this), e.css('max-width', '98%'), e.css('max-height', '98%'), e.css('height') || e.css('height', 'auto'), e.css('width') || e.css('width', 'auto');
        });
      }
    }
    function R(e) {
      return new i(k.idref, e);
    }
    t.extend(this, new r());
    var k, j, M, L, F, q, V, H, U, B, z, W = this, G = t(f.$viewport), $ = f.spine, Q = f.userStyles, X = f.bookStyles, Y = f.iframeLoader, J = !1, K = 100, Z = 0, ee = void 0, te = [
        'cfi-marker',
        'mo-cfi-highlight',
        'resize-sensor',
        'resize-sensor-expand',
        'resize-sensor-shrink',
        'resize-sensor-inner',
        'js-hypothesis-config',
        'js-hypothesis-embed'
      ], ne = ['hypothesis-adder'], re = [
        'MathJax_Message',
        'MathJax_SVG_Hidden'
      ], ie = -1, oe = {
        width: void 0,
        height: void 0
      }, ae = {
        width: void 0,
        height: void 0
      }, se = {
        visibleColumnCount: 2,
        columnGap: 20,
        columnMaxWidth: 550,
        columnMinWidth: 400,
        spreadCount: 0,
        currentSpreadIndex: 0,
        currentPageIndex: 0,
        columnWidth: void 0,
        pageOffset: 0,
        columnCount: 0
      };
    this.render = function () {
      var e = s.loadTemplate('reflowable_book_frame', {});
      F = t(e), G.append(F);
      var n = d.viewerSettings();
      return n && void 0 !== n.enableGPUHardwareAccelerationCSS3D || (n = new l({})), n.enableGPUHardwareAccelerationCSS3D && F.css('transform', 'translateZ(0)'), v(), W;
    }, this.remove = function () {
      F.remove();
    }, this.isReflowable = function () {
      return !0;
    }, this.onViewportResize = function () {
      S() && ce();
    };
    var ue = void 0;
    this.setViewSettings = function (e, t) {
      ue = e, se.columnGap = e.columnGap, se.columnMaxWidth = e.columnMaxWidth, se.columnMinWidth = e.columnMinWidth, K = e.fontSize, Z = e.fontSelection, S(), t || (w(), b());
    }, this.applyStyles = function () {
      s.setStyles(Q.getStyles(), F.parent()), p(s.Margins.fromElement(F).padding), S(), ce();
    }, this.applyBookStyles = function () {
      V && s.setStyles(X.getStyles(), q[0].contentDocument);
    }, this.openPage = function (e) {
      x(e), ee = e;
    }, this.resetCurrentPosition = function () {
      ee = void 0;
    }, this.saveCurrentPosition = function () {
      if (!j) {
        var e = W.getFirstVisibleCfi(), t = W.getLastVisibleCfi();
        ee = new u(k, W), ee.setFirstAndLastVisibleCfi(e.contentCFI, t.contentCFI);
      }
    }, this.restoreCurrentPosition = function () {
      ee && x(ee);
    };
    var le = n.debounce(C, 100);
    this.openPagePrev = function (e) {
      if (k)
        if (se.currentSpreadIndex > 0)
          this.resetCurrentPosition(), se.currentSpreadIndex--, le(e, k);
        else {
          var t = $.prevItem(k, !0);
          if (t) {
            var n = new u(t, e);
            n.setLastPage(), W.openPage(n);
          }
        }
    }, this.openPageNext = function (e) {
      if (k)
        if (se.currentSpreadIndex < se.spreadCount - 1)
          this.resetCurrentPosition(), se.currentSpreadIndex++, le(e, k);
        else {
          var t = $.nextItem(k, !0);
          if (t) {
            var n = new u(t, e);
            n.setFirstPage(), W.openPage(n);
          }
        }
    };
    var ce = n.debounce(I, 100);
    this.getPaginationInfo = function () {
      var e = new a($, !1);
      if (!k)
        return e;
      for (var t = A(), n = 0, r = t.length; n < r; n++)
        e.addOpenPage(t[n], se.columnCount, k.idref, k.index);
      return e;
    }, this.bookmarkCurrentPage = function () {
      if (k)
        return W.getFirstVisibleCfi();
    }, this.getLoadedSpineItems = function () {
      return [k];
    }, this.getElementByCfi = function (e, t, n, r, i) {
      return e != k.idref ? void console.warn('spine item is not loaded') : L.getElementByCfi(t, n, r, i);
    }, this.getElementById = function (e, t) {
      return e != k.idref ? void console.error('spine item is not loaded') : L.getElementById(t);
    }, this.getElement = function (e, t) {
      return e != k.idref ? void console.warn('spine item is not loaded') : L.getElement(t);
    }, this.getFirstVisibleMediaOverlayElement = function () {
      return L.getFirstVisibleMediaOverlayElement();
    }, this.insureElementVisibility = function (e, n, r) {
      var i = t(n);
      if (!L.isElementVisible(i)) {
        var o = L.getCfiForElement(n);
        if (o) {
          var a = new u(k, r);
          a.setElementCfi(o);
          var s = n.id;
          s || (s = n.getAttribute('id')), s && a.setElementId(s), W.openPage(a);
        }
      }
    }, this.getVisibleElementsWithFilter = function (e, t) {
      var n = L.getVisibleElementsWithFilter(null, e);
      return t ? [{
          elements: n,
          spineItem: k
        }] : n;
    }, this.getVisibleElements = function (e, t) {
      var n = L.getAllVisibleElementsWithSelector(e);
      return t ? [{
          elements: n,
          spineItem: k
        }] : n;
    }, this.isElementVisible = function (e) {
      return L.isElementVisible(e);
    }, this.getElements = function (e, t) {
      return e != k.idref ? void console.warn('spine item is not loaded') : L.getElements(t);
    }, this.isNodeFromRangeCfiVisible = function (e, t) {
      if (k.idref === e)
        return L.isNodeFromRangeCfiVisible(t);
    }, this.isVisibleSpineItemElementCfi = function (e, t) {
      if (L.isRangeCfi(t))
        return this.isNodeFromRangeCfiVisible(e, t);
      var n = this.getElementByCfi(e, t);
      return n && this.isElementVisible(n);
    }, this.getNodeRangeInfoFromCfi = function (e, t) {
      return e != k.idref ? void console.warn('spine item is not loaded') : L.getNodeRangeInfoFromCfi(t);
    }, this.getFirstVisibleCfi = function () {
      return R(L.getFirstVisibleCfi());
    }, this.getLastVisibleCfi = function () {
      return R(L.getLastVisibleCfi());
    }, this.getStartCfi = function () {
      return R(L.getStartCfi());
    }, this.getEndCfi = function () {
      return R(L.getEndCfi());
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      return t && e.idref !== t.idref ? void console.error('getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref') : L.getDomRangeFromRangeCfi(e.contentCFI, t ? t.contentCFI : null, n);
    }, this.getRangeCfiFromDomRange = function (e) {
      return R(L.getRangeCfiFromDomRange(e));
    }, this.getVisibleCfiFromPoint = function (e, t, n) {
      return R(L.getVisibleCfiFromPoint(e, t, n));
    }, this.getRangeCfiFromPoints = function (e, t, n, r) {
      return R(L.getRangeCfiFromPoints(e, t, n, r));
    }, this.getCfiForElement = function (e) {
      return R(L.getCfiForElement(e));
    }, this.getElementFromPoint = function (e, t) {
      return L.getElementFromPoint(e, t);
    }, this.getNearestCfiFromElement = function (e) {
      return R(L.getNearestCfiFromElement(e));
    };
  };
}(_readium_shared_js_globals, _jquery, _underscore, _eventEmitter, _readium_shared_js_models_bookmark_data, _readium_shared_js_views_cfi_navigation_logic, _readium_shared_js_models_current_pages_info, _readium_shared_js_helpers, _readium_shared_js_models_page_open_request, _readium_shared_js_models_viewer_settings, _ResizeSensor), _readium_shared_js_views_reader_view = function (e, t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, v, y, b, w, E) {
  var T = function (x) {
    function _(e) {
      return 'scroll-doc' == B.scroll ? T.VIEW_TYPE_SCROLLED_DOC : 'scroll-continuous' == B.scroll ? T.VIEW_TYPE_SCROLLED_CONTINUOUS : e.isFixedLayout() ? T.VIEW_TYPE_FIXED : e.isFlowScrolledDoc() ? T.VIEW_TYPE_SCROLLED_DOC : e.isFlowScrolledContinuous() ? T.VIEW_TYPE_SCROLLED_CONTINUOUS : T.VIEW_TYPE_COLUMNIZED;
    }
    function S(t, r) {
      var i = _(t);
      if (q) {
        if (F.getCurrentViewType() == i)
          return void r(!1);
        C();
      }
      var a = {
        $viewport: L,
        spine: U,
        userStyles: z,
        bookStyles: W,
        iframeLoader: M
      };
      q = F.createViewForType(i, a), e.logEvent('READER_VIEW_CREATED', 'EMIT', 'reader_view.js'), F.emit(e.Events.READER_VIEW_CREATED, i), q.on(e.Events.CONTENT_DOCUMENT_LOADED, function (t, n) {
        var r = t[0].contentDocument;
        e.logEvent('CONTENT_DOCUMENT_LOADED', 'ON', 'reader_view.js (current view) [ ' + n.href + ' ]'), o.isIframeAlive(t[0]) && (j.attachMediaOverlayData(t, n, B), G.processLinkElements(t, n), $.bindToContentDocument(r, n), v.register(r), m.apply(r), e.logEvent('CONTENT_DOCUMENT_LOADED', 'EMIT', 'reader_view.js [ ' + n.href + ' ]'), F.emit(e.Events.CONTENT_DOCUMENT_LOADED, t, n));
      }), q.on(e.Events.CONTENT_DOCUMENT_LOAD_START, function (t, n) {
        e.logEvent('CONTENT_DOCUMENT_LOAD_START', 'EMIT', 'reader_view.js [ ' + n.href + ' ]'), F.emit(e.Events.CONTENT_DOCUMENT_LOAD_START, t, n);
      }), q.on(e.Events.CONTENT_DOCUMENT_UNLOADED, function (t, n) {
        e.logEvent('CONTENT_DOCUMENT_UNLOADED', 'EMIT', 'reader_view.js [ ' + n.href + ' ]'), F.emit(e.Events.CONTENT_DOCUMENT_UNLOADED, t, n);
      }), q.on(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED, function (t) {
        e.logEvent('InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED', 'ON', 'reader_view.js'), k.onPageChanged(t), n.defer(function () {
          e.logEvent('PAGINATION_CHANGED', 'EMIT', 'reader_view.js'), F.emit(e.Events.PAGINATION_CHANGED, t), t.spineItem && n.defer(function () {
            $.updateContentDocument(t.spineItem);
          });
        });
      }), q.on(e.Events.FXL_VIEW_RESIZED, function () {
        e.logEvent('FXL_VIEW_RESIZED', 'EMIT', 'reader_view.js'), F.emit(e.Events.FXL_VIEW_RESIZED);
      }), q.render();
      q.setViewSettings(B, !0), setTimeout(function () {
        r(!0);
      }, 50);
    }
    function C() {
      q && (e.logEvent('READER_VIEW_DESTROYED', 'EMIT', 'reader_view.js'), F.emit(e.Events.READER_VIEW_DESTROYED), e.logEvent('InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED', 'OFF', 'reader_view.js'), q.off(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED), q.remove(), q = void 0);
    }
    function I(t) {
      e.logEvent('MEDIA_OVERLAY_STATUS_CHANGED', 'EMIT', 'reader_view.js (via MediaOverlayPlayer + AudioPlayer)'), F.emit(e.Events.MEDIA_OVERLAY_STATUS_CHANGED, t);
    }
    function O(e) {
      if (!e)
        return void console.log('idref parameter value missing!');
      var t = U.getItemById(e);
      return t || void console.log('Spine item with id ' + e + ' not found!');
    }
    function N(e, t) {
      S(e.spineItem, function (n) {
        if (!n) {
          q.setViewSettings(B, !0);
        }
        q.openPage(e, t);
      });
    }
    function P(e) {
      o.setStyles(z.getStyles(), L), k && k.applyStyles(), e || q && q.applyStyles();
    }
    function A() {
      X = null, Y = !1, q && (q.isReflowable && q.isReflowable() && (Y = F.isPlayingMediaOverlay()) && F.pauseMediaOverlay(), X = q.bookmarkCurrentPage());
    }
    function D() {
      q && F.handleViewportResize(X);
    }
    function R() {
      D(), Y && F.playMediaOverlay();
    }
    t.extend(this, new r());
    var k, j, M, L, F = this, q = void 0, V = void 0, H = void 0, U = void 0, B = new y({}), z = new g(), W = new g(), G = new s(this), $ = new E(this), Q = o.extendedThrottle(A, D, R, 250, 1000, F);
    t(window).on('resize.ReadiumSDK.readerView', Q), this.fonts = x.fonts, x.el instanceof t ? (L = x.el, console.log('** EL is a jQuery selector:' + x.el.attr('id'))) : (L = t(x.el), console.log('** EL is a string:' + L.attr('id'))), M = x.iframeLoader ? x.iframeLoader : new a({ mathJaxUrl: x.mathJaxUrl }), _needsFixedLayoutScalerWorkAround = x.needsFixedLayoutScalerWorkAround, this.needsFixedLayoutScalerWorkAround = function () {
      return _needsFixedLayoutScalerWorkAround;
    }, this.createViewForType = function (e, t) {
      var n;
      switch (L.css('overflow', 'hidden'), e) {
      case T.VIEW_TYPE_FIXED:
        L.css('overflow', 'auto'), n = new i(t, F);
        break;
      case T.VIEW_TYPE_SCROLLED_DOC:
        n = new h(t, !1, F);
        break;
      case T.VIEW_TYPE_SCROLLED_CONTINUOUS:
        n = new h(t, !0, F);
        break;
      default:
        n = new p(t, F);
      }
      return n;
    }, this.getCurrentViewType = function () {
      if (q)
        return q instanceof p ? T.VIEW_TYPE_COLUMNIZED : q instanceof i ? T.VIEW_TYPE_FIXED : q instanceof h ? q.isContinuousScroll() ? T.VIEW_TYPE_SCROLLED_CONTINUOUS : T.VIEW_TYPE_SCROLLED_DOC : void console.error('Unrecognized view type');
    }, this.getCurrentView = function () {
      return q;
    }, this.getLoadedSpineItems = function () {
      return q ? q.getLoadedSpineItems() : [];
    }, this.viewerSettings = function () {
      return B;
    }, this.package = function () {
      return V;
    }, this.metadata = function () {
      return H;
    }, this.spine = function () {
      return U;
    }, this.userStyles = function () {
      return z;
    }, this.openBook = function (e) {
      var n = e.package ? e.package : e;
      V = new c(n), H = new f(n.metadata), U = V.spine, U.handleLinear(!0), k && k.reset(), k = new l(F, t.proxy(I, F)), k.setAutomaticNextSmil(!!B.mediaOverlaysAutomaticPageTurn), j = new u(V.media_overlay, k), C(), e.settings && F.updateSettings(e.settings), e.styles && F.setStyles(e.styles);
      var r = void 0;
      e.openPageRequest && 'function' == typeof e.openPageRequest && (e.openPageRequest = e.openPageRequest()), e.openPageRequest && (e.openPageRequest.idref || e.openPageRequest.contentRefUrl && e.openPageRequest.sourceFileHref ? r = e.openPageRequest : console.log('Invalid page request data: idref required!'));
      var i = !1;
      if (r) {
        r = e.openPageRequest;
        try {
          i = r.idref ? r.spineItemPageIndex ? !F.openSpineItemPage(r.idref, r.spineItemPageIndex, F) : r.elementCfi ? !F.openSpineItemElementCfi(r.idref, r.elementCfi, F) : !F.openSpineItemPage(r.idref, 0, F) : !F.openContentUrl(r.contentRefUrl, r.sourceFileHref, F);
        } catch (e) {
          console.error('openPageRequest fail: fallback to first page!'), console.log(e), i = !0;
        }
      } else
        i = !0;
      if (i) {
        var o = U.first();
        if (o) {
          var a = new d(o, F);
          a.setFirstPage(), N(a, 0);
        }
      }
    }, this.openPageLeft = function () {
      V.spine.isLeftToRight() ? F.openPagePrev() : F.openPageNext();
    }, this.openPageRight = function () {
      V.spine.isLeftToRight() ? F.openPageNext() : F.openPagePrev();
    }, this.isCurrentViewFixedLayout = function () {
      return q instanceof i;
    }, this.setZoom = function (e) {
      F.isCurrentViewFixedLayout() && q.setZoom(e);
    }, this.getViewScale = function () {
      return F.isCurrentViewFixedLayout() ? 100 * q.getViewScale() : 100;
    }, this.updateSettings = function (t) {
      if (B.update(t), k && k.setAutomaticNextSmil(!!B.mediaOverlaysAutomaticPageTurn), q && !t.doNotUpdateView) {
        var n = q.bookmarkCurrentPage();
        if (n && n.idref) {
          var r = !1;
          q.isReflowable && q.isReflowable() && (r = F.isPlayingMediaOverlay()) && F.pauseMediaOverlay();
          return void S(U.getItemById(n.idref), function (t) {
            if (!t) {
              q.setViewSettings(B, !1);
            }
            F.once(ReadiumSDK.Events.PAGINATION_CHANGED, function (e) {
              var t = new b(n.idref, n.contentCFI);
              F.debugBookmarkData(t);
            }), F.openSpineItemElementCfi(n.idref, n.contentCFI, F), r && F.playMediaOverlay(), e.logEvent('SETTINGS_APPLIED 1 (view update)', 'EMIT', 'reader_view.js'), F.emit(e.Events.SETTINGS_APPLIED);
          });
        }
      }
      e.logEvent('SETTINGS_APPLIED 2 (no view update)', 'EMIT', 'reader_view.js'), F.emit(e.Events.SETTINGS_APPLIED);
    }, this.openPageNext = function () {
      if (F.getCurrentViewType() === T.VIEW_TYPE_SCROLLED_CONTINUOUS)
        return void q.openPageNext(F);
      var e = q.getPaginationInfo();
      if (0 != e.openPages.length) {
        var t = e.openPages[e.openPages.length - 1];
        if (t.spineItemPageIndex < t.spineItemPageCount - 1)
          return void q.openPageNext(F);
        var n = U.getItemById(t.idref), r = U.nextItem(n);
        if (r) {
          var i = new d(r, F);
          i.setFirstPage(), N(i, 2);
        }
      }
    }, this.openPagePrev = function () {
      if (F.getCurrentViewType() === T.VIEW_TYPE_SCROLLED_CONTINUOUS)
        return void q.openPagePrev(F);
      var e = q.getPaginationInfo();
      if (0 != e.openPages.length) {
        var t = e.openPages[0];
        if (t.spineItemPageIndex > 0)
          return void q.openPagePrev(F);
        var n = U.getItemById(t.idref), r = U.prevItem(n);
        if (r) {
          var i = new d(r, F);
          i.setLastPage(), N(i, 1);
        }
      }
    }, this.openSpineItemElementCfi = function (e, t, n) {
      var r = O(e);
      if (!r)
        return !1;
      var i = new d(r, n);
      return t && i.setElementCfi(t), N(i, 0), !0;
    }, this.openPageIndex = function (e, t) {
      if (!q)
        return !1;
      var n;
      if (V.isFixedLayout()) {
        var r = U.items[e];
        if (!r)
          return !1;
        n = new d(r, t), n.setPageIndex(0);
      } else {
        var i = this.getLoadedSpineItems();
        i.length > 0 && (n = new d(i[0], t), n.setPageIndex(e));
      }
      return N(n, 0), !0;
    }, this.openSpineItemPage = function (e, t, n) {
      var r = O(e);
      if (!r)
        return !1;
      var i = new d(r, n);
      return t && i.setPageIndex(t), N(i, 0), !0;
    }, this.setStyles = function (e, t) {
      for (var n = e.length, r = 0; r < n; r++)
        e[r].declarations ? z.addStyle(e[r].selector, e[r].declarations) : z.removeStyle(e[r].selector);
      P(t);
    }, this.setBookStyles = function (e) {
      for (var t = e.length, n = 0; n < t; n++)
        e[n].declarations ? W.addStyle(e[n].selector, e[n].declarations) : W.removeStyle(e[n].selector);
      q && q.applyBookStyles();
    }, this.getElement = function (e, t) {
      if (q)
        return q.getElement(e, t);
    }, this.getElementById = function (e, t) {
      if (q)
        return q.getElementById(e, t);
    }, this.getElementByCfi = function (e, t, n, r, i) {
      if (q)
        return q.getElementByCfi(e, t, n, r, i);
    }, this.mediaOverlaysOpenContentUrl = function (e, t, n) {
      k.mediaOverlaysOpenContentUrl(e, t, n);
    }, this.openContentUrl = function (e, t, n) {
      var r, i, a = o.ResolveContentRef(e, t), s = a.indexOf('#');
      s >= 0 ? (r = a.substr(0, s), i = a.substr(s + 1)) : (r = a, i = void 0);
      var u = U.getItemByHref(r);
      if (!u) {
        console.warn('spineItem ' + r + ' not found');
        var l = decodeURIComponent(r);
        if (!(u = U.getItemByHref(l)))
          return console.warn('decoded spineItem ' + l + ' missing as well'), !1;
      }
      return F.openSpineItemElementId(u.idref, i, n);
    }, this.openSpineItemElementId = function (e, t, n) {
      var r = U.getItemById(e);
      if (!r)
        return !1;
      var i = new d(r, n);
      return t && i.setElementId(t), N(i, 0), !0;
    }, this.debugBookmarkData = function (e) {
      if (ReadiumSDK) {
        var t = this.getPaginationInfo();
        if (console.log(JSON.stringify(t)), !t.isFixedLayout) {
          try {
            ReadiumSDK._DEBUG_CfiNavigationLogic.clearDebugOverlays();
          } catch (e) {
          }
          try {
            console.log(e);
            var n = this.getDomRangeFromRangeCfi(e);
            console.log(n);
            var r = ReadiumSDK._DEBUG_CfiNavigationLogic.drawDebugOverlayFromDomRange(n);
            console.log(r);
            var i = ReadiumSDK.reader.getFirstVisibleCfi();
            console.log(i);
            var o = ReadiumSDK.reader.getLastVisibleCfi();
            console.log(o);
          } catch (e) {
          }
          setTimeout(function () {
            try {
              ReadiumSDK._DEBUG_CfiNavigationLogic.clearDebugOverlays();
            } catch (e) {
            }
          }, 2000);
        }
      }
    }, this.bookmarkCurrentPage = function () {
      var e = q.bookmarkCurrentPage();
      return e ? e.toString() : null;
    }, this.clearStyles = function () {
      z.resetStyleValues(), P(), z.clear();
    }, this.clearBookStyles = function () {
      q && (W.resetStyleValues(), q.applyBookStyles()), W.clear();
    }, this.isMediaOverlayAvailable = function () {
      return !!k && k.isMediaOverlayAvailable();
    }, this.toggleMediaOverlay = function () {
      k.toggleMediaOverlay();
    }, this.nextMediaOverlay = function () {
      k.nextMediaOverlay();
    }, this.previousMediaOverlay = function () {
      k.previousMediaOverlay();
    }, this.escapeMediaOverlay = function () {
      k.escape();
    }, this.ttsEndedMediaOverlay = function () {
      k.onTTSEnd();
    }, this.pauseMediaOverlay = function () {
      k.pause();
    }, this.playMediaOverlay = function () {
      k.play();
    }, this.isPlayingMediaOverlay = function () {
      return k.isPlaying();
    }, this.getFirstVisibleMediaOverlayElement = function () {
      if (q)
        return q.getFirstVisibleMediaOverlayElement();
    }, this.insureElementVisibility = function (e, t, n) {
      q && q.insureElementVisibility(e, t, n);
    };
    var X = null, Y = !1;
    this.handleViewportResize = function (e) {
      q && q.onViewportResize();
    }, this.addIFrameEventListener = function (e, t, n) {
      M.addIFrameEventListener(e, t, n);
    };
    var J = function (n) {
      var r = {}, i = !1, o = void 0;
      this.setCallback_PlayPause = function (e) {
        o = e;
      };
      var a = void 0;
      this.setCallback_IsAvailable = function (e) {
        a = e;
      }, this.playPause = function (e) {
        s(e);
      };
      var s = function (e) {
        o && o(e);
        try {
          var n = void 0;
          for (var i in r)
            if (r.hasOwnProperty(i)) {
              var a = r[i];
              if (a && a.active && (n && console.error('More than one active iframe?? (pagination)'), n = a.$iframe)) {
                var s = t('audio', n[0].contentDocument);
                t.each(s, function () {
                  var t = this.getAttribute('epub:type') || this.getAttribute('type');
                  return !t || (t.indexOf('ibooks:soundtrack') < 0 && t.indexOf('media:soundtrack') < 0 && t.indexOf('media:background') < 0 || (e && this.play ? this.play() : this.pause && this.pause(), !0));
                });
              }
            }
        } catch (e) {
          console.error(e);
        }
      };
      this.setPlayState = function (e) {
        i = e;
      }, n.on(e.Events.CONTENT_DOCUMENT_LOADED, function (t, n) {
        e.logEvent('CONTENT_DOCUMENT_LOADED', 'ON', 'reader_view.js (via BackgroundAudioTrackManager) [ ' + n.href + ' ]');
        try {
          n && n.idref && t && t[0] && (r[n.idref] = {
            $iframe: t,
            href: n.href
          });
        } catch (e) {
          console.error(e);
        }
      }), n.on(e.Events.PAGINATION_CHANGED, function (n) {
        e.logEvent('PAGINATION_CHANGED', 'ON', 'reader_view.js (via BackgroundAudioTrackManager)');
        var o = !1;
        try {
          for (var u in r)
            if (r.hasOwnProperty(u)) {
              var l = n.spineItem && n.spineItem.idref === u, c = !1;
              if (n.paginationInfo && n.paginationInfo.openPages.length) {
                for (var f = !0, d = 0; d < n.paginationInfo.openPages.length; d++)
                  n.paginationInfo.openPages[d].idref === u ? c = !0 : f = !1;
                !l && f && (l = !0);
              }
              if (l || c) {
                var p = r[u];
                if (!p)
                  continue;
                r[u].active = l;
                var h = p.$iframe, g = (p.href, t('audio', h[0].contentDocument));
                t.each(g, function () {
                  var e = this.getAttribute('epub:type') || this.getAttribute('type');
                  return !e || (e.indexOf('ibooks:soundtrack') < 0 && e.indexOf('media:soundtrack') < 0 && e.indexOf('media:background') < 0 || (this.setAttribute('loop', 'loop'), this.removeAttribute('autoplay'), l || this.pause && this.pause(), o = !0, !0));
                });
              } else
                r[u] && (r[u].$iframe = void 0), r[u] = void 0;
            }
        } catch (e) {
          console.error(e);
        }
        a && a(o), s(o ? i ? !0 : !1 : !1);
      }), n.on(e.Events.MEDIA_OVERLAY_STATUS_CHANGED, function (t) {
        if (e.logEvent('MEDIA_OVERLAY_STATUS_CHANGED', 'ON', 'reader_view.js (via BackgroundAudioTrackManager)'), t.smilIndex) {
          var o = n.package(), a = o.media_overlay.smilAt(t.smilIndex);
          if (a && a.spineItemId) {
            var u = !1;
            for (var l in r)
              if (r.hasOwnProperty(l)) {
                var c = r[l];
                c && c.active && l !== a.spineItemId && (s(!1), c.active = !1, u = !0);
              }
            if (u) {
              for (var l in r)
                if (r.hasOwnProperty(l)) {
                  var c = r[l];
                  c && (c.active || l === a.spineItemId && (c.active = !0));
                }
              i && s(!0);
            }
          }
        }
      });
    };
    this.backgroundAudioTrackManager = new J(F), this.isVisibleSpineItemElementCfi = function (e, t) {
      if (!O(e))
        return !1;
      if (q) {
        if (!t || t && '' === t)
          for (var n = q.getLoadedSpineItems(), r = 0, i = n.length; r < i; r++)
            if (n[r].idref == e)
              return !0;
        return q.isVisibleSpineItemElementCfi(e, t);
      }
      return !1;
    }, this.getElements = function (e, t) {
      if (q)
        return q.getElements(e, t);
    }, this.isElementVisible = function (e) {
      return q.isElementVisible(t(e));
    }, this.getNodeRangeInfoFromCfi = function (e, t) {
      if (q && e && t) {
        var n = q.getNodeRangeInfoFromCfi(e, t);
        if (n)
          return new w(n.clientRect).setStartInfo(n.startInfo).setEndInfo(n.endInfo);
      }
    }, this.getPaginationInfo = function () {
      return q.getPaginationInfo();
    }, this.getFirstVisibleCfi = function () {
      if (q)
        return q.getFirstVisibleCfi();
    }, this.getLastVisibleCfi = function () {
      if (q)
        return q.getLastVisibleCfi();
    }, this.getStartCfi = function () {
      if (q)
        return q.getStartCfi();
    }, this.getEndCfi = function () {
      if (q)
        return q.getEndCfi();
    }, this.getDomRangesFromRangeCfi = function (e, t, n) {
      if (q)
        return q.getDomRangesFromRangeCfi ? q.getDomRangesFromRangeCfi(e, t, n) : [q.getDomRangeFromRangeCfi(e, t, n)];
    }, this.getDomRangesFromRangeCfi = function (e, t, n) {
      if (q)
        return q.getDomRangesFromRangeCfi ? q.getDomRangesFromRangeCfi(e, t, n) : [q.getDomRangeFromRangeCfi(e, t, n)];
    }, this.getDomRangeFromRangeCfi = function (e, t, n) {
      if (q)
        return q.getDomRangeFromRangeCfi(e, t, n);
    }, this.getRangeCfiFromDomRange = function (e) {
      if (q)
        return q.getRangeCfiFromDomRange(e);
    }, this.getVisibleCfiFromPoint = function (e, t, n, r) {
      if (q)
        return q.getVisibleCfiFromPoint(e, t, n, r);
    }, this.getRangeCfiFromPoints = function (e, t, n, r, i) {
      if (q)
        return q.getRangeCfiFromPoints(e, t, n, r, i);
    }, this.getCfiForElement = function (e) {
      if (q)
        return q.getCfiForElement(e);
    }, this.getNearestCfiFromElement = function (e) {
      if (q)
        return q.getNearestCfiFromElement(e);
    };
  };
  return T.VIEW_TYPE_COLUMNIZED = 1, T.VIEW_TYPE_FIXED = 2, T.VIEW_TYPE_SCROLLED_DOC = 3, T.VIEW_TYPE_SCROLLED_CONTINUOUS = 4, T;
}(_readium_shared_js_globals, _jquery, _underscore, _eventEmitter, _readium_shared_js_views_fixed_view, _readium_shared_js_helpers, _readium_shared_js_views_iframe_loader, _readium_shared_js_views_internal_links_support, _readium_shared_js_views_media_overlay_data_injector, _readium_shared_js_views_media_overlay_player, _readium_shared_js_models_package, _readium_shared_js_models_metadata, _readium_shared_js_models_page_open_request, _readium_shared_js_views_reflowable_view, _readium_shared_js_views_scroll_view, _readium_shared_js_models_style_collection, _readium_shared_js_models_switches, _readium_shared_js_models_trigger, _readium_shared_js_models_viewer_settings, _readium_shared_js_models_bookmark_data, _readium_shared_js_models_node_range_info, _readium_shared_js_views_external_agent_support), _readium_shared_js_all = function (e, t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, v, y, b, w, E, T, x, _, S, C, I, O, N, P, A, D, R, k) {
  e.Globals = t, e.GlobalsSetup = n, e.Helpers = r, e.PluginsController = i, e.BookmarkData = o, e.CurrentPagesInfo = a, e.FixedPageSpread = s, e.MediaOverlay = u, e.Metadata = l, e.NodeRangeInfo = c, e.Package = f, e.PackageData = d, e.PageOpenRequest = p, e.SmilIterator = h, e.SmilModel = g, e.Spine = m, e.SpineItem = v, e.Style = y, e.StyleCollection = b, e.Switches = w, e.Trigger = E, e.ViewerSettings = T, e.AudioPlayer = x, e.CfiNavigationLogic = _, e.ExternalAgentSupport = S, e.FixedView = C, e.IframeLoader = I, e.InternalLinksSupport = O, e.MediaOverlayDataInjector = N, e.MediaOverlayElementHighlighter = P, e.OnePageView = A, e.ReaderView = D, e.ReflowableView = R, e.ScrollView = k;
}(_readium_shared_js_all, _readium_shared_js_globals, _readium_shared_js_globalsSetup, _readium_shared_js_helpers, _readium_shared_js_plugins_controller, _readium_shared_js_models_bookmark_data, _readium_shared_js_models_current_pages_info, _readium_shared_js_models_fixed_page_spread, _readium_shared_js_models_media_overlay, _readium_shared_js_models_metadata, _readium_shared_js_models_node_range_info, _readium_shared_js_models_package, _readium_shared_js_models_package_data, _readium_shared_js_models_page_open_request, _readium_shared_js_models_smil_iterator, _readium_shared_js_models_smil_model, _readium_shared_js_models_spine, _readium_shared_js_models_spine_item, _readium_shared_js_models_style, _readium_shared_js_models_style_collection, _readium_shared_js_models_switches, _readium_shared_js_models_trigger, _readium_shared_js_models_viewer_settings, _readium_shared_js_views_audio_player, _readium_shared_js_views_cfi_navigation_logic, _readium_shared_js_views_external_agent_support, _readium_shared_js_views_fixed_view, _readium_shared_js_views_iframe_loader, _readium_shared_js_views_internal_links_support, _readium_shared_js_views_media_overlay_data_injector, _readium_shared_js_views_media_overlay_element_highlighter, _readium_shared_js_views_one_page_view, _readium_shared_js_views_reader_view, _readium_shared_js_views_reflowable_view, _readium_shared_js_views_scroll_view), require(['']);  //# sourceMappingURL=readium-shared-js.js.map

return _readium_shared_js_all;
}));
//# sourceMappingURL=readium-shared-js.js.map