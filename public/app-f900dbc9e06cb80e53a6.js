webpackJsonp([0xd2a57dc1d883], {
  79: function(n, e, o) {
    'use strict';
    function t(n, e, o) {
      var t = u.map(function(o) {
        if (o.plugin[n]) {
          var t = o.plugin[n](e, o.options);
          return t;
        }
      });
      return (
        (t = t.filter(function(n) {
          return 'undefined' != typeof n;
        })),
        t.length > 0 ? t : o ? [o] : []
      );
    }
    function r(n, e, o) {
      return u.reduce(function(o, t) {
        return t.plugin[n]
          ? o.then(function() {
              return t.plugin[n](e, t.options);
            })
          : o;
      }, Promise.resolve());
    }
    (e.__esModule = !0), (e.apiRunner = t), (e.apiRunnerAsync = r);
    var u = [
      {
        plugin: o(373),
        options: { plugins: [], trackingId: 'UA-105571821-1' },
      },
      { plugin: o(230), options: { plugins: [] } },
    ];
  },
  223: function(n, e, o) {
    'use strict';
    var t;
    (e.components = {
      'component---src-pages-index-jsx': o(356),
      'component---src-pages-resources-jsx': o(359),
      'component---src-pages-glossary-jsx': o(355),
      'component---src-pages-about-jsx': o(352),
      'component---src-pages-issues-jsx': o(358),
      'component---src-pages-issue-jsx': o(357),
      'component---src-pages-articles-jsx': o(354),
      'component---src-pages-article-jsx': o(353),
      'component---src-pages-404-jsx': o(351),
    }),
      (e.json = ((t = { 'layout-index.json': o(7), 'index.json': o(153) }),
      (t['layout-index.json'] = o(7)),
      (t['resources.json'] = o(155)),
      (t['layout-index.json'] = o(7)),
      (t['glossary.json'] = o(152)),
      (t['layout-index.json'] = o(7)),
      (t['about.json'] = o(150)),
      (t['layout-index.json'] = o(7)),
      (t['issues.json'] = o(154)),
      (t['layout-index.json'] = o(7)),
      (t['issues-2.json'] = o(372)),
      (t['layout-index.json'] = o(7)),
      (t['issues-1.json'] = o(371)),
      (t['layout-index.json'] = o(7)),
      (t['articles.json'] = o(151)),
      (t['layout-index.json'] = o(7)),
      (t['articles-some-other-thing-for-issue-2.json'] = o(365)),
      (t['layout-index.json'] = o(7)),
      (t['articles-this-is-also-for-issue-2.json'] = o(367)),
      (t['layout-index.json'] = o(7)),
      (t['articles-null.json'] = o(364)),
      (t['layout-index.json'] = o(7)),
      (t['articles-this-is-for-issue-2.json'] = o(368)),
      (t['layout-index.json'] = o(7)),
      (t['articles-something-fucking-else.json'] = o(366)),
      (t['layout-index.json'] = o(7)),
      (t['articles-to-forget.json'] = o(369)),
      (t['layout-index.json'] = o(7)),
      (t['articles-example-article.json'] = o(363)),
      (t['layout-index.json'] = o(7)),
      (t['404.json'] = o(360)),
      (t['layout-index.json'] = o(7)),
      (t['about.json'] = o(150)),
      (t['layout-index.json'] = o(7)),
      (t['article.json'] = o(362)),
      (t['layout-index.json'] = o(7)),
      (t['articles.json'] = o(151)),
      (t['layout-index.json'] = o(7)),
      (t['glossary.json'] = o(152)),
      (t['layout-index.json'] = o(7)),
      (t['index.json'] = o(153)),
      (t['layout-index.json'] = o(7)),
      (t['issue.json'] = o(370)),
      (t['layout-index.json'] = o(7)),
      (t['issues.json'] = o(154)),
      (t['layout-index.json'] = o(7)),
      (t['resources.json'] = o(155)),
      (t['layout-index.json'] = o(7)),
      (t['404-html.json'] = o(361)),
      t)),
      (e.layouts = { 'layout---index': o(350) });
  },
  224: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    function r(n, e) {
      if (!(n instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function u(n, e) {
      if (!n)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ('object' != typeof e && 'function' != typeof e) ? n : e;
    }
    function a(n, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof e
        );
      (n.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(n, e)
            : (n.__proto__ = e));
    }
    e.__esModule = !0;
    var s =
        Object.assign ||
        function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o)
              Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t]);
          }
          return n;
        },
      i = o(1),
      c = t(i),
      l = o(3),
      f = t(l),
      p = o(119),
      d = t(p),
      m = o(59),
      h = t(m),
      g = o(79),
      y = function(n) {
        var e = n.children;
        return c.default.createElement('div', null, e());
      },
      x = (function(n) {
        function e(o) {
          r(this, e);
          var t = u(this, n.call(this)),
            a = o.location;
          return (
            d.default.getPage(a.pathname) ||
              (a = s({}, a, { pathname: '/404.html' })),
            (t.state = {
              location: a,
              pageResources: d.default.getResourcesForPathname(a.pathname),
            }),
            t
          );
        }
        return (
          a(e, n),
          (e.prototype.componentWillReceiveProps = function(n) {
            var e = this;
            if (this.state.location.pathname !== n.location.pathname) {
              var o = d.default.getResourcesForPathname(n.location.pathname);
              if (o) this.setState({ location: n.location, pageResources: o });
              else {
                var t = n.location;
                d.default.getPage(t.pathname) ||
                  (t = s({}, t, { pathname: '/404.html' })),
                  d.default.getResourcesForPathname(t.pathname, function(n) {
                    e.setState({ location: t, pageResources: n });
                  });
              }
            }
          }),
          (e.prototype.componentDidMount = function() {
            var n = this;
            h.default.on('onPostLoadPageResources', function(e) {
              d.default.getPage(n.state.location.pathname) &&
                e.page.path ===
                  d.default.getPage(n.state.location.pathname).path &&
                n.setState({ pageResources: e.pageResources });
            });
          }),
          (e.prototype.shouldComponentUpdate = function(n, e) {
            return (
              !e.pageResources ||
              (!(this.state.pageResources || !e.pageResources) ||
                (this.state.pageResources.component !==
                  e.pageResources.component ||
                  (this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath &&
                        !e.pageResources.page.path)
                    ))))
            );
          }),
          (e.prototype.render = function() {
            var n = (0, g.apiRunner)('replaceComponentRenderer', {
                props: s({}, this.props, {
                  pageResources: this.state.pageResources,
                }),
                loader: p.publicLoader,
              }),
              e = n[0];
            return this.props.page
              ? this.state.pageResources
                ? e ||
                  (0, i.createElement)(
                    this.state.pageResources.component,
                    s(
                      { key: this.props.location.pathname },
                      this.props,
                      this.state.pageResources.json
                    )
                  )
                : null
              : this.props.layout
                ? e ||
                  (0, i.createElement)(
                    this.state.pageResources && this.state.pageResources.layout
                      ? this.state.pageResources.layout
                      : y,
                    s(
                      {
                        key:
                          this.state.pageResources &&
                          this.state.pageResources.layout
                            ? this.state.pageResources.layout
                            : 'DefaultLayout',
                      },
                      this.props
                    )
                  )
                : null;
          }),
          e
        );
      })(c.default.Component);
    (x.propTypes = {
      page: f.default.bool,
      layout: f.default.bool,
      location: f.default.object,
    }),
      (e.default = x),
      (n.exports = e.default);
  },
  59: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    var r = o(411),
      u = t(r),
      a = (0, u.default)();
    n.exports = a;
  },
  225: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    var r = o(74),
      u = o(120),
      a = t(u),
      s = {};
    n.exports = function(n) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
      return function(o) {
        var t = decodeURIComponent(o),
          u = (0, a.default)(t, e);
        if (
          (u.split('#').length > 1 &&
            (u = u
              .split('#')
              .slice(0, -1)
              .join('')),
          u.split('?').length > 1 &&
            (u = u
              .split('?')
              .slice(0, -1)
              .join('')),
          s[u])
        )
          return s[u];
        var i = void 0;
        return (
          n.some(function(n) {
            if (n.matchPath) {
              if (
                (0, r.matchPath)(u, { path: n.path }) ||
                (0, r.matchPath)(u, { path: n.matchPath })
              )
                return (i = n), (s[u] = n), !0;
            } else {
              if ((0, r.matchPath)(u, { path: n.path, exact: !0 }))
                return (i = n), (s[u] = n), !0;
              if ((0, r.matchPath)(u, { path: n.path + 'index.html' }))
                return (i = n), (s[u] = n), !0;
            }
            return !1;
          }),
          i
        );
      };
    };
  },
  226: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    var r = o(103),
      u = t(r),
      a = o(79),
      s = (0, a.apiRunner)('replaceHistory'),
      i = s[0],
      c = i || (0, u.default)();
    n.exports = c;
  },
  361: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xa2868bfb69fc, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(381);
              });
        });
      });
  },
  360: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xe70826b53c04, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(382);
              });
        });
      });
  },
  150: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xf927f8900006, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(383);
              });
        });
      });
  },
  362: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(67694277572605, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(384);
              });
        });
      });
  },
  363: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x750078ff09fe, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(385);
              });
        });
      });
  },
  364: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x9cdb50f31dcd, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(386);
              });
        });
      });
  },
  365: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x68ce6253cb5b, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(387);
              });
        });
      });
  },
  366: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(54267455552366, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(388);
              });
        });
      });
  },
  367: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(23350669957434, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(389);
              });
        });
      });
  },
  368: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xed3c3af90cf5, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(390);
              });
        });
      });
  },
  369: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x7baf55989827, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(391);
              });
        });
      });
  },
  151: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(56932394960959, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(392);
              });
        });
      });
  },
  152: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(37944973977612, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(393);
              });
        });
      });
  },
  153: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x81b8806e4260, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(394);
              });
        });
      });
  },
  370: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xa64a3511efec, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(395);
              });
        });
      });
  },
  371: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x5f26fda9ddf4, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(396);
              });
        });
      });
  },
  372: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xe5c0e964f56, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(397);
              });
        });
      });
  },
  154: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(54862424323483, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(398);
              });
        });
      });
  },
  7: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(60335399758886, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(105);
              });
        });
      });
  },
  155: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xa0a3f3734aef, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(399);
              });
        });
      });
  },
  350: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(79611799117203, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(227);
              });
        });
      });
  },
  119: function(n, e, o) {
    (function(n) {
      'use strict';
      function t(n) {
        return n && n.__esModule ? n : { default: n };
      }
      (e.__esModule = !0), (e.publicLoader = void 0);
      var r = o(1),
        u = (t(r), o(225)),
        a = t(u),
        s = o(59),
        i = t(s),
        c = o(120),
        l = t(c),
        f = void 0,
        p = {},
        d = {},
        m = {},
        h = {},
        g = {},
        y = [],
        x = [],
        j = {},
        v = '',
        C = [],
        R = {},
        N = function(n) {
          return (n && n.default) || n;
        },
        b = void 0,
        k = !0,
        w = [],
        _ = {},
        P = {},
        E = 5;
      (b = o(228)({
        getNextQueuedResources: function() {
          return C.slice(-1)[0];
        },
        createResourceDownload: function(n) {
          T(n, function() {
            (C = C.filter(function(e) {
              return e !== n;
            })),
              b.onResourcedFinished(n);
          });
        },
      })),
        i.default.on('onPreLoadPageResources', function(n) {
          b.onPreLoadPageResources(n);
        }),
        i.default.on('onPostLoadPageResources', function(n) {
          b.onPostLoadPageResources(n);
        });
      var O = function(n, e) {
          return R[n] > R[e] ? 1 : R[n] < R[e] ? -1 : 0;
        },
        L = function(n, e) {
          return j[n] > j[e] ? 1 : j[n] < j[e] ? -1 : 0;
        },
        T = function(e) {
          var o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function() {};
          if (h[e])
            n.nextTick(function() {
              o(null, h[e]);
            });
          else {
            var t = void 0;
            (t =
              'component---' === e.slice(0, 12)
                ? d.components[e]
                : 'layout---' === e.slice(0, 9) ? d.layouts[e] : d.json[e]),
              t(function(n, t) {
                (h[e] = t),
                  w.push({ resource: e, succeeded: !n }),
                  P[e] || (P[e] = n),
                  (w = w.slice(-E)),
                  o(n, t);
              });
          }
        },
        S = function(e, o) {
          g[e]
            ? n.nextTick(function() {
                o(null, g[e]);
              })
            : P[e]
              ? n.nextTick(function() {
                  o(P[e]);
                })
              : T(e, function(n, t) {
                  if (n) o(n);
                  else {
                    var r = N(t());
                    (g[e] = r), o(n, r);
                  }
                });
        },
        A = function() {
          var n = navigator.onLine;
          if ('boolean' == typeof n) return n;
          var e = w.find(function(n) {
            return n.succeeded;
          });
          return !!e;
        },
        D = function(n, e) {
          console.log(e),
            _[n] || (_[n] = e),
            A() &&
              window.location.pathname.replace(/\/$/g, '') !==
                n.replace(/\/$/g, '') &&
              (window.location.pathname = n);
        },
        U = 1,
        M = {
          empty: function() {
            (x = []), (j = {}), (R = {}), (C = []), (y = []), (v = '');
          },
          addPagesArray: function(n) {
            (y = n), (f = (0, a.default)(n, v));
          },
          addDevRequires: function(n) {
            p = n;
          },
          addProdRequires: function(n) {
            d = n;
          },
          dequeue: function() {
            return x.pop();
          },
          enqueue: function(n) {
            var e = (0, l.default)(n, v);
            if (
              !y.some(function(n) {
                return n.path === e;
              })
            )
              return !1;
            var o = 1 / U;
            (U += 1),
              j[e] ? (j[e] += 1) : (j[e] = 1),
              M.has(e) || x.unshift(e),
              x.sort(L);
            var t = f(e);
            return (
              t.jsonName &&
                (R[t.jsonName]
                  ? (R[t.jsonName] += 1 + o)
                  : (R[t.jsonName] = 1 + o),
                C.indexOf(t.jsonName) !== -1 ||
                  h[t.jsonName] ||
                  C.unshift(t.jsonName)),
              t.componentChunkName &&
                (R[t.componentChunkName]
                  ? (R[t.componentChunkName] += 1 + o)
                  : (R[t.componentChunkName] = 1 + o),
                C.indexOf(t.componentChunkName) !== -1 ||
                  h[t.jsonName] ||
                  C.unshift(t.componentChunkName)),
              C.sort(O),
              b.onNewResourcesAdded(),
              !0
            );
          },
          getResources: function() {
            return { resourcesArray: C, resourcesCount: R };
          },
          getPages: function() {
            return { pathArray: x, pathCount: j };
          },
          getPage: function(n) {
            return f(n);
          },
          has: function(n) {
            return x.some(function(e) {
              return e === n;
            });
          },
          getResourcesForPathname: function(e) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {};
            k &&
              navigator &&
              navigator.serviceWorker &&
              navigator.serviceWorker.controller &&
              'activated' === navigator.serviceWorker.controller.state &&
              (f(e) ||
                navigator.serviceWorker.getRegistrations().then(function(n) {
                  if (n.length) {
                    for (
                      var e = n,
                        o = Array.isArray(e),
                        t = 0,
                        e = o ? e : e[Symbol.iterator]();
                      ;

                    ) {
                      var r;
                      if (o) {
                        if (t >= e.length) break;
                        r = e[t++];
                      } else {
                        if (((t = e.next()), t.done)) break;
                        r = t.value;
                      }
                      var u = r;
                      u.unregister();
                    }
                    window.location.reload();
                  }
                })),
              (k = !1);
            if (_[e])
              return (
                D(e, 'Previously detected load failure for "' + e + '"'), o()
              );
            var t = f(e);
            if (!t) return D(e, 'A page wasn\'t found for "' + e + '"'), o();
            if (((e = t.path), m[e]))
              return (
                n.nextTick(function() {
                  o(m[e]),
                    i.default.emit('onPostLoadPageResources', {
                      page: t,
                      pageResources: m[e],
                    });
                }),
                m[e]
              );
            i.default.emit('onPreLoadPageResources', { path: e });
            var r = void 0,
              u = void 0,
              a = void 0,
              s = function() {
                if (r && u && (!t.layoutComponentChunkName || a)) {
                  m[e] = { component: r, json: u, layout: a, page: t };
                  var n = { component: r, json: u, layout: a, page: t };
                  o(n),
                    i.default.emit('onPostLoadPageResources', {
                      page: t,
                      pageResources: n,
                    });
                }
              };
            return (
              S(t.componentChunkName, function(n, e) {
                n &&
                  D(t.path, 'Loading the component for ' + t.path + ' failed'),
                  (r = e),
                  s();
              }),
              S(t.jsonName, function(n, e) {
                n && D(t.path, 'Loading the JSON for ' + t.path + ' failed'),
                  (u = e),
                  s();
              }),
              void (
                t.layoutComponentChunkName &&
                S(t.layout, function(n, e) {
                  n &&
                    D(t.path, 'Loading the Layout for ' + t.path + ' failed'),
                    (a = e),
                    s();
                })
              )
            );
          },
          peek: function(n) {
            return x.slice(-1)[0];
          },
          length: function() {
            return x.length;
          },
          indexOf: function(n) {
            return x.length - x.indexOf(n) - 1;
          },
        };
      e.publicLoader = { getResourcesForPathname: M.getResourcesForPathname };
      e.default = M;
    }.call(e, o(463)));
  },
  400: function(n, e) {
    n.exports = [
      {
        componentChunkName: 'component---src-pages-index-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'index.json',
        path: '/index',
      },
      {
        componentChunkName: 'component---src-pages-resources-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'resources.json',
        path: '/resources',
      },
      {
        componentChunkName: 'component---src-pages-glossary-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'glossary.json',
        path: '/glossary',
      },
      {
        componentChunkName: 'component---src-pages-about-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'about.json',
        path: '/about',
      },
      {
        componentChunkName: 'component---src-pages-issues-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'issues.json',
        path: '/issues',
      },
      {
        componentChunkName: 'component---src-pages-issue-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'issues-2.json',
        path: '/issues/2',
      },
      {
        componentChunkName: 'component---src-pages-issue-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'issues-1.json',
        path: '/issues/1',
      },
      {
        componentChunkName: 'component---src-pages-articles-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles.json',
        path: '/articles',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-some-other-thing-for-issue-2.json',
        path: '/articles/some-other-thing-for-issue-2',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-this-is-also-for-issue-2.json',
        path: '/articles/this-is-also-for-issue-2',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-null.json',
        path: '/articles/null',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-this-is-for-issue-2.json',
        path: '/articles/this-is-for-issue-2',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-something-fucking-else.json',
        path: '/articles/something-fucking-else',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-to-forget.json',
        path: '/articles/to-forget',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles-example-article.json',
        path: '/articles/example-article',
      },
      {
        componentChunkName: 'component---src-pages-404-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: '404.json',
        path: '/404/',
      },
      {
        componentChunkName: 'component---src-pages-about-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'about.json',
        path: '/about/',
      },
      {
        componentChunkName: 'component---src-pages-article-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'article.json',
        path: '/article/',
      },
      {
        componentChunkName: 'component---src-pages-articles-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'articles.json',
        path: '/articles/',
      },
      {
        componentChunkName: 'component---src-pages-glossary-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'glossary.json',
        path: '/glossary/',
      },
      {
        componentChunkName: 'component---src-pages-index-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'index.json',
        path: '/',
      },
      {
        componentChunkName: 'component---src-pages-issue-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'issue.json',
        path: '/issue/',
      },
      {
        componentChunkName: 'component---src-pages-issues-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'issues.json',
        path: '/issues/',
      },
      {
        componentChunkName: 'component---src-pages-resources-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'resources.json',
        path: '/resources/',
      },
      {
        componentChunkName: 'component---src-pages-404-jsx',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: '404-html.json',
        path: '/404.html',
      },
    ];
  },
  228: function(n, e) {
    'use strict';
    n.exports = function(n) {
      var e = n.getNextQueuedResources,
        o = n.createResourceDownload,
        t = [],
        r = [],
        u = function() {
          var n = e();
          n && (r.push(n), o(n));
        },
        a = function(n) {
          switch (n.type) {
            case 'RESOURCE_FINISHED':
              r = r.filter(function(e) {
                return e !== n.payload;
              });
              break;
            case 'ON_PRE_LOAD_PAGE_RESOURCES':
              t.push(n.payload.path);
              break;
            case 'ON_POST_LOAD_PAGE_RESOURCES':
              t = t.filter(function(e) {
                return e !== n.payload.page.path;
              });
              break;
            case 'ON_NEW_RESOURCES_ADDED':
          }
          setTimeout(function() {
            0 === r.length && 0 === t.length && u();
          }, 0);
        };
      return {
        onResourcedFinished: function(n) {
          a({ type: 'RESOURCE_FINISHED', payload: n });
        },
        onPreLoadPageResources: function(n) {
          a({ type: 'ON_PRE_LOAD_PAGE_RESOURCES', payload: n });
        },
        onPostLoadPageResources: function(n) {
          a({ type: 'ON_POST_LOAD_PAGE_RESOURCES', payload: n });
        },
        onNewResourcesAdded: function() {
          a({ type: 'ON_NEW_RESOURCES_ADDED' });
        },
        getState: function() {
          return { pagesLoading: t, resourcesDownloading: r };
        },
        empty: function() {
          (t = []), (r = []);
        },
      };
    };
  },
  0: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    var r =
        Object.assign ||
        function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o)
              Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t]);
          }
          return n;
        },
      u = o(79),
      a = o(1),
      s = t(a),
      i = o(111),
      c = t(i),
      l = o(74),
      f = o(377),
      p = o(340),
      d = t(p),
      m = o(226),
      h = t(m),
      g = o(59),
      y = t(g),
      x = o(400),
      j = t(x),
      v = o(401),
      C = t(v),
      R = o(224),
      N = t(R),
      b = o(223),
      k = t(b),
      w = o(119),
      _ = t(w);
    o(328),
      (window.___history = h.default),
      (window.___emitter = y.default),
      _.default.addPagesArray(j.default),
      _.default.addProdRequires(k.default),
      (window.asyncRequires = k.default),
      (window.___loader = _.default),
      (window.matchPath = l.matchPath);
    var P = C.default.reduce(function(n, e) {
        return (n[e.fromPath] = e), n;
      }, {}),
      E = function(n) {
        var e = P[n];
        return null != e && (h.default.replace(e.toPath), !0);
      };
    E(window.location.pathname),
      (0, u.apiRunnerAsync)('onClientEntry').then(function() {
        function n(n) {
          (window.___history && i !== !1) ||
            ((window.___history = n),
            (i = !0),
            n.listen(function(n, e) {
              E(n.pathname) ||
                (0, u.apiRunner)('onRouteUpdate', { location: n, action: e });
            }));
        }
        function e(n, e) {
          var o = e.location.pathname,
            t = (0, u.apiRunner)('shouldUpdateScroll', {
              prevRouterProps: n,
              pathname: o,
            });
          if (t.length > 0) return t[0];
          if (n) {
            var r = n.location.pathname;
            if (r === o) return !1;
          }
          return !0;
        }
        (0, u.apiRunner)('registerServiceWorker').length > 0 && o(229);
        var t = function(n) {
          function e(o) {
            o.page.path === _.default.getPage(n).path &&
              (y.default.off('onPostLoadPageResources', e),
              clearTimeout(t),
              window.___history.push(n));
          }
          var o = P[n];
          if ((o && (n = o.toPath), window.location.pathname !== n)) {
            var t = setTimeout(function() {
              y.default.off('onPostLoadPageResources', e),
                y.default.emit('onDelayedLoadPageResources', { pathname: n }),
                window.___history.push(n);
            }, 1e3);
            _.default.getResourcesForPathname(n)
              ? (clearTimeout(t), window.___history.push(n))
              : y.default.on('onPostLoadPageResources', e);
          }
        };
        (window.___navigateTo = t),
          (0, u.apiRunner)('onRouteUpdate', {
            location: h.default.location,
            action: h.default.action,
          });
        var i = !1,
          p = (0, u.apiRunner)('replaceRouterComponent', {
            history: h.default,
          })[0],
          m = function(n) {
            var e = n.children;
            return s.default.createElement(l.Router, { history: h.default }, e);
          },
          g = (0, l.withRouter)(N.default);
        _.default.getResourcesForPathname(window.location.pathname, function() {
          var o = function() {
              return (0, a.createElement)(
                p ? p : m,
                null,
                (0, a.createElement)(
                  f.ScrollContext,
                  { shouldUpdateScroll: e },
                  (0, a.createElement)(g, {
                    layout: !0,
                    children: function(e) {
                      return (0, a.createElement)(l.Route, {
                        render: function(o) {
                          n(o.history);
                          var t = e ? e : o;
                          return _.default.getPage(t.location.pathname)
                            ? (0, a.createElement)(
                                N.default,
                                r({ page: !0 }, t)
                              )
                            : (0, a.createElement)(N.default, {
                                page: !0,
                                location: { pathname: '/404.html' },
                              });
                        },
                      });
                    },
                  })
                )
              );
            },
            t = (0, u.apiRunner)('wrapRootComponent', { Root: o }, o)[0];
          (0, d.default)(function() {
            return c.default.render(
              s.default.createElement(t, null),
              'undefined' != typeof window
                ? document.getElementById('___gatsby')
                : void 0,
              function() {
                (0, u.apiRunner)('onInitialClientRender');
              }
            );
          });
        });
      });
  },
  401: function(n, e) {
    n.exports = [];
  },
  229: function(n, e, o) {
    'use strict';
    function t(n) {
      return n && n.__esModule ? n : { default: n };
    }
    var r = o(59),
      u = t(r),
      a = '/';
    'serviceWorker' in navigator &&
      navigator.serviceWorker
        .register(a + 'sw.js')
        .then(function(n) {
          n.addEventListener('updatefound', function() {
            var e = n.installing;
            console.log('installingWorker', e),
              e.addEventListener('statechange', function() {
                switch (e.state) {
                  case 'installed':
                    navigator.serviceWorker.controller
                      ? window.location.reload()
                      : (console.log('Content is now available offline!'),
                        u.default.emit('sw:installed'));
                    break;
                  case 'redundant':
                    console.error(
                      'The installing service worker became redundant.'
                    );
                }
              });
          });
        })
        .catch(function(n) {
          console.error('Error during service worker registration:', n);
        });
  },
  120: function(n, e) {
    'use strict';
    (e.__esModule = !0),
      (e.default = function(n) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        return n.substr(0, e.length) === e ? n.slice(e.length) : n;
      }),
      (n.exports = e.default);
  },
  230: function(n, e) {
    'use strict';
  },
  340: function(n, e, o) {
    !(function(e, o) {
      n.exports = o();
    })('domready', function() {
      var n,
        e = [],
        o = document,
        t = o.documentElement.doScroll,
        r = 'DOMContentLoaded',
        u = (t ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
      return (
        u ||
          o.addEventListener(
            r,
            (n = function() {
              for (o.removeEventListener(r, n), u = 1; (n = e.shift()); ) n();
            })
          ),
        function(n) {
          u ? setTimeout(n, 0) : e.push(n);
        }
      );
    });
  },
  6: function(n, e, o) {
    'use strict';
    function t() {
      function n(n) {
        var e = t.lastChild;
        return 'SCRIPT' !== e.tagName
          ? void (
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Script is not a script', e)
            )
          : void (e.onload = e.onerror = function() {
              (e.onload = e.onerror = null), setTimeout(n, 0);
            });
      }
      var e,
        t = document.querySelector('head'),
        r = o.e,
        u = o.s;
      o.e = function(t, a) {
        var s = !1,
          i = !0,
          c = function(n) {
            a && (a(o, n), (a = null));
          };
        return !u && e && e[t]
          ? void c(!0)
          : (r(t, function() {
              s ||
                ((s = !0),
                i
                  ? setTimeout(function() {
                      c();
                    })
                  : c());
            }),
            void (
              s ||
              ((i = !1),
              n(function() {
                s ||
                  ((s = !0),
                  u ? (u[t] = void 0) : (e || (e = {}), (e[t] = !0)),
                  c(!0));
              }))
            ));
      };
    }
    t();
  },
  373: function(n, e, o) {
    'use strict';
    e.onRouteUpdate = function(n) {
      var e = n.location;
      'function' == typeof ga &&
        (window.ga('set', 'page', (e || {}).pathname),
        window.ga('send', 'pageview'));
    };
  },
  411: function(n, e) {
    function o(n) {
      return (
        (n = n || Object.create(null)),
        {
          on: function(e, o) {
            (n[e] || (n[e] = [])).push(o);
          },
          off: function(e, o) {
            n[e] && n[e].splice(n[e].indexOf(o) >>> 0, 1);
          },
          emit: function(e, o) {
            (n[e] || []).slice().map(function(n) {
              n(o);
            }),
              (n['*'] || []).slice().map(function(n) {
                n(e, o);
              });
          },
        }
      );
    }
    n.exports = o;
  },
  463: function(n, e) {
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function t() {
      throw new Error('clearTimeout has not been defined');
    }
    function r(n) {
      if (l === setTimeout) return setTimeout(n, 0);
      if ((l === o || !l) && setTimeout)
        return (l = setTimeout), setTimeout(n, 0);
      try {
        return l(n, 0);
      } catch (e) {
        try {
          return l.call(null, n, 0);
        } catch (e) {
          return l.call(this, n, 0);
        }
      }
    }
    function u(n) {
      if (f === clearTimeout) return clearTimeout(n);
      if ((f === t || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(n);
      try {
        return f(n);
      } catch (e) {
        try {
          return f.call(null, n);
        } catch (e) {
          return f.call(this, n);
        }
      }
    }
    function a() {
      h &&
        d &&
        ((h = !1), d.length ? (m = d.concat(m)) : (g = -1), m.length && s());
    }
    function s() {
      if (!h) {
        var n = r(a);
        h = !0;
        for (var e = m.length; e; ) {
          for (d = m, m = []; ++g < e; ) d && d[g].run();
          (g = -1), (e = m.length);
        }
        (d = null), (h = !1), u(n);
      }
    }
    function i(n, e) {
      (this.fun = n), (this.array = e);
    }
    function c() {}
    var l,
      f,
      p = (n.exports = {});
    !(function() {
      try {
        l = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (n) {
        l = o;
      }
      try {
        f = 'function' == typeof clearTimeout ? clearTimeout : t;
      } catch (n) {
        f = t;
      }
    })();
    var d,
      m = [],
      h = !1,
      g = -1;
    (p.nextTick = function(n) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
      m.push(new i(n, e)), 1 !== m.length || h || r(s);
    }),
      (i.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (p.title = 'browser'),
      (p.browser = !0),
      (p.env = {}),
      (p.argv = []),
      (p.version = ''),
      (p.versions = {}),
      (p.on = c),
      (p.addListener = c),
      (p.once = c),
      (p.off = c),
      (p.removeListener = c),
      (p.removeAllListeners = c),
      (p.emit = c),
      (p.prependListener = c),
      (p.prependOnceListener = c),
      (p.listeners = function(n) {
        return [];
      }),
      (p.binding = function(n) {
        throw new Error('process.binding is not supported');
      }),
      (p.cwd = function() {
        return '/';
      }),
      (p.chdir = function(n) {
        throw new Error('process.chdir is not supported');
      }),
      (p.umask = function() {
        return 0;
      });
  },
  351: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xa6bc690a59e9, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(247);
              });
        });
      });
  },
  352: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x83323ebd9d39, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(248);
              });
        });
      });
  },
  353: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(41726575285143, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(249);
              });
        });
      });
  },
  354: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xec290d9fbc0a, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(250);
              });
        });
      });
  },
  355: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xe6259faaf38b, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(251);
              });
        });
      });
  },
  356: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0xc23565d713b7, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(252);
              });
        });
      });
  },
  357: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(91630338183120, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(253);
              });
        });
      });
  },
  358: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(52335005715734, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(254);
              });
        });
      });
  },
  359: function(n, e, o) {
    o(6),
      (n.exports = function(n) {
        return o.e(0x700021db2403, function(e, t) {
          t
            ? (console.log('bundle loading error', t), n(!0))
            : n(null, function() {
                return o(255);
              });
        });
      });
  },
});
//# sourceMappingURL=app-f900dbc9e06cb80e53a6.js.map
