webpackJsonp([0x700021db2403], {
  34: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var l = n(50);
    Object.defineProperty(t, 'List', {
      enumerable: !0,
      get: function() {
        return r(l).default;
      },
    });
    var u = n(51);
    Object.defineProperty(t, 'ListItem', {
      enumerable: !0,
      get: function() {
        return r(u).default;
      },
    });
  },
  50: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      return (e.raw = t), e;
    }
    t.__esModule = !0;
    var u = l(
        [
          '\n  display: flex;\n  flex-flow: ',
          ';\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n',
        ],
        [
          '\n  display: flex;\n  flex-flow: ',
          ';\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n',
        ]
      ),
      a = n(1),
      i = r(a),
      o = n(4),
      d = r(o),
      f = d.default.ul(u, function(e) {
        return e.inline ? 'row' : 'column';
      }),
      c = function(e) {
        var t = e.children,
          n = e.inline;
        return i.default.createElement(
          f,
          { inline: n },
          i.default.Children.map(t, function(e) {
            return e;
          })
        );
      };
    (t.default = c), (e.exports = t.default);
  },
  51: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var l = n(1),
      u = r(l),
      a = function(e) {
        var t = e.className,
          n = e.children,
          r = e.id;
        return u.default.createElement(
          'li',
          { className: t, key: r },
          u.default.Children.map(n, function(e) {
            return e;
          })
        );
      };
    (t.default = a), (e.exports = t.default);
  },
  26: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      return (e.raw = t), e;
    }
    t.__esModule = !0;
    var u = l(
        [
          '\n  color: ',
          ';\n  text-decoration: ',
          ';\n  font-weight: 700;\n  font-size: ',
          ';\n  ',
          ' &:hover {\n    color: ',
          ';\n  }\n',
        ],
        [
          '\n  color: ',
          ';\n  text-decoration: ',
          ';\n  font-weight: 700;\n  font-size: ',
          ';\n  ',
          ' &:hover {\n    color: ',
          ';\n  }\n',
        ]
      ),
      a = n(1),
      i = r(a),
      o = n(3),
      d = r(o),
      f = n(22),
      c = r(f),
      s = n(4),
      m = r(s),
      p = n(5),
      g = (0, m.default)(c.default)(
        u,
        function(e) {
          return e.theme.text;
        },
        function(e) {
          return e.underline ? 'underline' : 'none';
        },
        function(e) {
          return e.large ? (0, p.rem)('22px') : 'inherit';
        },
        (0, p.transitions)('all 0.25s ease-in'),
        function(e) {
          return e.withHover ? e.theme.linkHoverColor : e.theme.text;
        }
      ),
      x = g.withComponent('a'),
      _ = function(e) {
        var t = e.external,
          n = e.large,
          r = e.text,
          l = e.to,
          u = e.underline,
          a = e.withHover;
        return t
          ? i.default.createElement(
              x,
              {
                href: l,
                large: n,
                target: '_blank',
                underline: u,
                withHover: a,
              },
              r
            )
          : i.default.createElement(
              g,
              { to: l, large: n, underline: u, withHover: a },
              r
            );
      };
    (_.defaultProps = {
      external: !1,
      large: !1,
      underline: !0,
      withHover: !0,
    }),
      (_.propTypes = {
        external: d.default.bool,
        large: d.default.bool,
        text: d.default.string.isRequired,
        to: d.default.string.isRequired,
        underline: d.default.bool,
        withHover: d.default.bool,
      }),
      (t.default = _),
      (e.exports = t.default);
  },
  255: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      return (e.raw = t), e;
    }
    (t.__esModule = !0), (t.pageQuery = void 0);
    var u = l(['\n  padding: ', ';\n'], ['\n  padding: ', ';\n']),
      a = l(['\n  margin-bottom: ', ';\n'], ['\n  margin-bottom: ', ';\n']),
      i = l(['\n  font-size: 125%;\n'], ['\n  font-size: 125%;\n']),
      o = n(1),
      d = r(o),
      f = n(4),
      c = r(f),
      s = n(5),
      m = n(16),
      p = n(34),
      g = n(26),
      x = r(g),
      _ = (0, c.default)(m.Mobile)(u, (0, s.rem)('20px')),
      h = (0, c.default)(p.ListItem)(a, (0, s.rem)('15px')),
      v = c.default.span(i),
      w = function(e) {
        var t = e.data,
          n = t.us.edges[0].node,
          r = n.content.find(function(e) {
            return 'ContentfulList' === e.__typename;
          }),
          l = d.default.createElement(
            'div',
            null,
            d.default.createElement('h1', null, r.title),
            d.default.createElement(
              p.List,
              null,
              r.items.map(function(e) {
                return d.default.createElement(
                  h,
                  { id: e.title, key: e.title },
                  d.default.createElement(x.default, {
                    external: !0,
                    to: e.url,
                    text: e.title,
                    large: !0,
                    underline: !0,
                  }),
                  ' ',
                  '- ',
                  d.default.createElement(v, null, e.text)
                );
              })
            )
          );
        return d.default.createElement(
          d.default.Fragment,
          null,
          d.default.createElement(_, null, l),
          d.default.createElement(m.Default, null, l)
        );
      };
    t.default = w;
    t.pageQuery = '** extracted graphql fragment **';
  },
});
//# sourceMappingURL=component---src-pages-resources-jsx-10e4700cec2bf97c4f62.js.map
