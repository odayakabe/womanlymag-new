webpackJsonp([91630338183120],{80:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0;var r=l(["\n  margin: 0 ",";\n"],["\n  margin: 0 ",";\n"]),a=t(1),o=i(a),u=t(4),c=i(u),d=t(31),f=t(5),s=t(16),p=t(49),m=i(p),h=t(33),g=i(h),x=c.default.div(r,(0,f.rem)("30px")),b=function(n){var e=n.articles,t=e.map(function(n){return o.default.createElement(d.Cell,{key:n.slug,center:!0,middle:!0},o.default.createElement(m.default,{heading:n.title,text:n.previewText+"...",url:"/articles/"+n.slug},o.default.createElement(g.default,{alt:n.title,resolutions:n.thumbnail.resolutions,title:n.previewText,isBackground:!0})))});return o.default.createElement("div",null,o.default.createElement(s.Mobile,null,o.default.createElement(x,null,o.default.createElement(d.Grid,{columns:"repeat(auto-fit,minmax(300px,1fr))",gap:"40px",minRowHeight:"300px"},t))),o.default.createElement(s.Default,null,o.default.createElement(d.Grid,{columns:"repeat(auto-fit,minmax(300px,1fr))",gap:"40px",minRowHeight:"300px"},t)))};e.default=b,n.exports=e.default},49:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0;var r=l(["\n  height: inherit;\n\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  height: inherit;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]),a=l(["\n  position: relative;\n  width: inherit;\n  height: inherit;\n  cursor: pointer;\n"],["\n  position: relative;\n  width: inherit;\n  height: inherit;\n  cursor: pointer;\n"]),o=l(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  height: inherit;\n  width: inherit;\n  background-color: transparent;\n  opacity: 0;\n  box-shadow: inset 0 0 "," ","\n    ",";\n  ",";\n  z-index: 3;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  height: inherit;\n  width: inherit;\n  background-color: transparent;\n  opacity: 0;\n  box-shadow: inset 0 0 "," ","\n    ",";\n  ",";\n  z-index: 3;\n"]),u=l(["\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  margin-bottom: ",";\n  padding: ",";\n  font-weight: 400;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: 0;\n  height: inherit;\n  width: inherit;\n  ",";\n  z-index: 4;\n"],["\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  margin-bottom: ",";\n  padding: ",";\n  font-weight: 400;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: 0;\n  height: inherit;\n  width: inherit;\n  ",";\n  z-index: 4;\n"]),c=l(["\n  color: ",";\n"],["\n  color: ",";\n"]),d=l(["\n  font-size: ",";\n  margin-top: ",";\n  ",";\n  color: ",";\n"],["\n  font-size: ",";\n  margin-top: ",";\n  ",";\n  color: ",";\n"]),f=l(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  opacity: 0;\n  z-index: 5;\n\n  &:hover {\n    ~ "," {\n      opacity: 1;\n      background: ",";\n    }\n\n    ~ "," {\n      opacity: 1;\n\n      > "," {\n        margin-top: 0;\n      }\n    }\n  }\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  content: '';\n  opacity: 0;\n  z-index: 5;\n\n  &:hover {\n    ~ "," {\n      opacity: 1;\n      background: ",";\n    }\n\n    ~ "," {\n      opacity: 1;\n\n      > "," {\n        margin-top: 0;\n      }\n    }\n  }\n"]),s=t(1),p=i(s),m=t(23),h=i(m),g=t(4),x=i(g),b=t(5),y=(0,x.default)(h.default)(r),E=x.default.div(a),v=x.default.div(o,(0,b.rem)("30px"),(0,b.rem)("5px"),(0,b.transparentize)(.95,"#000"),(0,b.transitions)("opacity 0.25s ease-in-out")),w=x.default.div(u,(0,b.rem)("10px"),(0,b.rem)("30px"),(0,b.transitions)("opacity 0.05s ease-in-out")),k=x.default.h2(c,function(n){return(0,b.darken)(.65,n.theme.accent)}),_=x.default.span(d,(0,b.rem)("20px"),(0,b.rem)("20px"),(0,b.transitions)("margin 0.25s ease-in-out"),function(n){return n.theme.text}),z=x.default.div(f,v,function(n){return(0,b.transparentize)(.25,n.theme.accent)},w,_),M=function(n){var e=n.children,t=n.heading,i=n.text,l=n.url,r=p.default.createElement(E,null,p.default.Children.only(e),p.default.createElement(z,null),p.default.createElement(v,null),p.default.createElement(w,null,p.default.createElement(k,null,t),p.default.createElement(_,null,i)));return l?p.default.createElement(y,{to:l},r):r};e.default=M,n.exports=e.default},253:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}e.__esModule=!0,e.pageQuery=void 0;var r=l(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),a=t(1),o=i(a),u=t(4),c=i(u),d=t(16),f=t(80),s=i(f),p=c.default.h1(r),m=function(n){var e=n.data,t=e.us,i=t.articles,l=t.number,r=t.title,a="Issue #"+l+": "+r;return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.Mobile,null,o.default.createElement(p,null,a)),o.default.createElement(d.Default,null,o.default.createElement("h1",null,a)),o.default.createElement(s.default,{articles:i}))};e.default=m;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-issue-jsx-79ecbf6f258415b9fcd9.js.map