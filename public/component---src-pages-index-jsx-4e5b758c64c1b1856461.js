webpackJsonp([0xc23565d713b7],{80:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0;var a=l(["\n  margin: 0 ",";\n"],["\n  margin: 0 ",";\n"]),r=t(1),o=i(r),u=t(4),d=i(u),c=t(31),f=t(5),s=t(16),m=t(49),p=i(m),h=t(33),g=i(h),x=d.default.div(a,(0,f.rem)("30px")),b=function(n){var e=n.articles,t=e.map(function(n){return o.default.createElement(c.Cell,{key:n.slug,center:!0,middle:!0},o.default.createElement(p.default,{heading:n.title,text:n.previewText+"...",url:"/articles/"+n.slug},o.default.createElement(g.default,{alt:n.title,resolutions:n.thumbnail.resolutions,title:n.previewText,isBackground:!0})))});return o.default.createElement("div",null,o.default.createElement(s.Mobile,null,o.default.createElement(x,null,o.default.createElement(c.Grid,{columns:"repeat(auto-fit,minmax(300px,1fr))",gap:"40px",minRowHeight:"300px"},t))),o.default.createElement(s.Default,null,o.default.createElement(c.Grid,{columns:"repeat(auto-fit,minmax(300px,1fr))",gap:"40px",minRowHeight:"300px"},t)))};e.default=b,n.exports=e.default},238:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0;var a=l(["\n  margin-bottom: ",";\n"],["\n  margin-bottom: ",";\n"]),r=l(["\n  height: 50vh;\n"],["\n  height: 50vh;\n"]),o=t(1),u=i(o),d=t(4),c=i(d),f=t(31),s=t(5),m=t(16),p=t(33),h=i(p),g=c.default.div(a,(0,s.rem)("30px")),x=g.extend(r),b=function(n){var e=n.sizes,t=n.title;return u.default.createElement(u.default.Fragment,null,u.default.createElement(m.Mobile,null,u.default.createElement(x,null,u.default.createElement(h.default,{alt:t,sizes:e,title:t,isBackground:!0}))),u.default.createElement(m.Default,null,u.default.createElement(g,null,u.default.createElement(f.Grid,{columns:1,minRowHeight:"400px"},u.default.createElement(f.Cell,{center:!0,middle:!0},u.default.createElement(h.default,{alt:t,sizes:e,title:t}))))))};e.default=b,n.exports=e.default},49:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0;var a=l(["\n  height: inherit;\n\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  height: inherit;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]),r=l(["\n  position: relative;\n  width: inherit;\n  height: inherit;\n  cursor: pointer;\n"],["\n  position: relative;\n  width: inherit;\n  height: inherit;\n  cursor: pointer;\n"]),o=l(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  height: inherit;\n  width: inherit;\n  background-color: transparent;\n  opacity: 0;\n  box-shadow: inset 0 0 "," ","\n    ",";\n  ",";\n  z-index: 3;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  height: inherit;\n  width: inherit;\n  background-color: transparent;\n  opacity: 0;\n  box-shadow: inset 0 0 "," ","\n    ",";\n  ",";\n  z-index: 3;\n"]),u=l(["\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  margin-bottom: ",";\n  padding: ",";\n  font-weight: 400;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: 0;\n  height: inherit;\n  width: inherit;\n  ",";\n  z-index: 4;\n"],["\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  margin-bottom: ",";\n  padding: ",";\n  font-weight: 400;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: 0;\n  height: inherit;\n  width: inherit;\n  ",";\n  z-index: 4;\n"]),d=l(["\n  color: ",";\n"],["\n  color: ",";\n"]),c=l(["\n  font-size: ",";\n  margin-top: ",";\n  ",";\n  color: ",";\n"],["\n  font-size: ",";\n  margin-top: ",";\n  ",";\n  color: ",";\n"]),f=l(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  opacity: 0;\n  z-index: 5;\n\n  &:hover {\n    ~ "," {\n      opacity: 1;\n      background: ",";\n    }\n\n    ~ "," {\n      opacity: 1;\n\n      > "," {\n        margin-top: 0;\n      }\n    }\n  }\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  opacity: 0;\n  z-index: 5;\n\n  &:hover {\n    ~ "," {\n      opacity: 1;\n      background: ",";\n    }\n\n    ~ "," {\n      opacity: 1;\n\n      > "," {\n        margin-top: 0;\n      }\n    }\n  }\n"]),s=t(1),m=i(s),p=t(22),h=i(p),g=t(4),x=i(g),b=t(5),E=(0,x.default)(h.default)(a),v=x.default.div(r),y=x.default.div(o,(0,b.rem)("30px"),(0,b.rem)("5px"),(0,b.transparentize)(.95,"#000"),(0,b.transitions)("opacity 0.25s ease-in-out")),w=x.default.div(u,(0,b.rem)("10px"),(0,b.rem)("30px"),(0,b.transitions)("opacity 0.05s ease-in-out")),_=x.default.h2(d,function(n){return(0,b.darken)(.65,n.theme.accent)}),z=x.default.span(c,(0,b.rem)("20px"),(0,b.rem)("20px"),(0,b.transitions)("margin 0.25s ease-in-out"),function(n){return n.theme.text}),k=x.default.div(f,y,function(n){return(0,b.transparentize)(.25,n.theme.accent)},w,z),M=function(n){var e=n.children,t=n.heading,i=n.text,l=n.url,a=m.default.createElement(v,null,m.default.Children.only(e),m.default.createElement(k,null),m.default.createElement(y,null),m.default.createElement(w,null,m.default.createElement(_,null,t),m.default.createElement(z,null,i)));return l?m.default.createElement(E,{to:l},a):a};e.default=M,n.exports=e.default},252:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.pageQuery=void 0;var l=t(1),a=i(l),r=t(80),o=i(r),u=t(238),d=i(u),c=function(n){var e=n.data,t=e.us.edges[0].node,i=t.content.find(function(n){return"ContentfulHero"===n.__typename}),l=t.content.find(function(n){return"ContentfulIssue"===n.__typename});return a.default.createElement("div",null,a.default.createElement(d.default,{sizes:i.media.sizes,title:i.title}),a.default.createElement(o.default,{articles:l.articles}))};e.default=c;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-4e5b758c64c1b1856461.js.map